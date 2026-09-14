(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.YMInstrumentEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const STEP_MODES = Object.freeze({ fine:0.001, standard:0.01, coarse:0.05 });

  // These thresholds are interface interpretation bands for T0 displays.
  // They are not Yang–Mills theorem thresholds or experimentally measured constants.
  const THRESHOLDS = Object.freeze({
    labRatio: Object.freeze({ fragile:0.10, moderate:0.35 }),
    spectrumDelta: Object.freeze({ nearZero:0.02, narrow:0.10, open:0.35 }),
    compositionOrthWeight: Object.freeze({ vacuumStrong:0.10, vacuumMajor:0.40, balancedHigh:0.60, orthStrong:0.90 }),
    rgMarginRatio: Object.freeze({ fragile:0.10, robust:0.35 })
  });

  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  function nearlyZero(value, eps=1e-12) { return Math.abs(value) <= eps; }

  function classifyLab({candidate, gross, targetAvailable}) {
    if (candidate < 0) return {key:'negative', tone:'negative', rank:0};
    if (nearlyZero(candidate)) return {key:'zero', tone:'zero', rank:1};
    if (!targetAvailable) return {key:'blocked-positive', tone:'conditional', rank:2};
    const ratio = gross > 0 ? candidate / gross : 0;
    if (ratio < THRESHOLDS.labRatio.fragile) return {key:'fragile-positive', tone:'warning', rank:3, ratio};
    if (ratio < THRESHOLDS.labRatio.moderate) return {key:'moderate-positive', tone:'positive', rank:4, ratio};
    return {key:'robust-positive', tone:'positive-strong', rank:5, ratio};
  }

  function classifyComposition(epsilon) {
    const orth = clamp(epsilon * epsilon, 0, 1);
    if (orth < THRESHOLDS.compositionOrthWeight.vacuumStrong) return {key:'vacuum-strong', orth};
    if (orth < THRESHOLDS.compositionOrthWeight.vacuumMajor) return {key:'vacuum-major', orth};
    if (orth <= THRESHOLDS.compositionOrthWeight.balancedHigh) return {key:'balanced', orth};
    if (orth < THRESHOLDS.compositionOrthWeight.orthStrong) return {key:'orth-major', orth};
    return {key:'orth-strong', orth};
  }

  function classifySpectrum(delta, linkedBlocked=false) {
    if (linkedBlocked && delta > 0) return {key:'linked-blocked', tone:'conditional'};
    if (delta <= 0) return {key:'closed', tone:'negative'};
    if (delta < THRESHOLDS.spectrumDelta.nearZero) return {key:'near-zero', tone:'warning'};
    if (delta < THRESHOLDS.spectrumDelta.narrow) return {key:'narrow', tone:'warning'};
    if (delta < THRESHOLDS.spectrumDelta.open) return {key:'open', tone:'positive'};
    return {key:'wide', tone:'positive-strong'};
  }

  function classifyRG({net, gross, defect, reflectionLicensed=true}) {
    if (!reflectionLicensed) return {key:'structurally-blocked', tone:'conditional', ratio:null};
    const scale = Math.max(Math.abs(gross), Math.abs(defect), 0.001);
    const ratio = net / scale;
    if (nearlyZero(net, 1e-15)) return {key:'zero', tone:'zero', ratio:0};
    if (ratio > 0 && ratio < THRESHOLDS.rgMarginRatio.fragile) return {key:'fragile-positive', tone:'warning', ratio};
    if (ratio >= THRESHOLDS.rgMarginRatio.fragile && ratio < THRESHOLDS.rgMarginRatio.robust) return {key:'moderate-positive', tone:'positive', ratio};
    if (ratio >= THRESHOLDS.rgMarginRatio.robust) return {key:'robust-positive', tone:'positive-strong', ratio};
    if (ratio < 0 && ratio > -THRESHOLDS.rgMarginRatio.fragile) return {key:'fragile-negative', tone:'warning-negative', ratio};
    return {key:'strong-negative', tone:'negative', ratio};
  }

  function nudge(value, direction, step, min, max) {
    const next = Number(value) + Number(direction) * Number(step);
    const clamped = clamp(next, Number(min), Number(max));
    const digits = Math.max(0, String(step).split('.')[1]?.length || 0);
    return Number(clamped.toFixed(digits));
  }

  return Object.freeze({ STEP_MODES, THRESHOLDS, clamp, classifyLab, classifyComposition, classifySpectrum, classifyRG, nudge });
});
