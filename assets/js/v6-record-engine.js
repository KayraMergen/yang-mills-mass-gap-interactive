(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.YMRecordEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RECORD_SCHEMA = 1;
  const MAX_RECORDS = 12;
  const MAX_EVENTS = 30;

  function normalize(value) {
    if (Array.isArray(value)) return value.map(normalize);
    if (value && typeof value === 'object') {
      const out = {};
      Object.keys(value).sort().forEach(key => {
        const v = value[key];
        if (v !== undefined && typeof v !== 'function') out[key] = normalize(v);
      });
      return out;
    }
    if (typeof value === 'number') {
      if (!Number.isFinite(value)) return null;
      return Number(value.toPrecision(15));
    }
    return value;
  }

  function stableStringify(value) { return JSON.stringify(normalize(value)); }

  function fnv1a(value) {
    const s = String(value);
    let hash = 0x811c9dc5;
    for (let i = 0; i < s.length; i += 1) {
      hash ^= s.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193) >>> 0;
    }
    return hash.toString(16).padStart(8, '0');
  }

  function makeRecord(payload, capturedAt) {
    if (!payload || !['lab','spectrum','rg'].includes(payload.instrument)) throw new Error('Unsupported instrument.');
    const canonical = normalize({
      recordSchema: RECORD_SCHEMA,
      instrument: payload.instrument,
      scenarioSchema: payload.scenarioSchema,
      contentRevision: payload.contentRevision,
      modelVersion: payload.modelVersion,
      language: payload.language,
      epistemic: payload.epistemic,
      assumptions: payload.assumptions || {},
      inputs: payload.inputs || {},
      derived: payload.derived || {},
      regime: payload.regime || {},
      scope: payload.scope || {},
      selection: payload.selection || {}
    });
    const digest = fnv1a(stableStringify(canonical));
    const at = capturedAt || new Date().toISOString();
    const id = `YM-${payload.instrument.toUpperCase()}-${digest}`;
    return Object.freeze({
      id,
      captureId: `${id}-${fnv1a(at)}`,
      digest,
      capturedAt: at,
      ...canonical
    });
  }

  function flattenNumbers(obj, prefix, out) {
    out = out || {};
    prefix = prefix || '';
    Object.entries(obj || {}).forEach(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'number' && Number.isFinite(value)) out[path] = value;
      else if (value && typeof value === 'object' && !Array.isArray(value)) flattenNumbers(value, path, out);
    });
    return out;
  }

  function compareRecords(a, b) {
    if (!a || !b) return { compatible:false, reason:'missing-record', changes:[] };
    if (a.instrument !== b.instrument) return { compatible:false, reason:'instrument-mismatch', changes:[] };
    const an = flattenNumbers({inputs:a.inputs, derived:a.derived});
    const bn = flattenNumbers({inputs:b.inputs, derived:b.derived});
    const keys = [...new Set([...Object.keys(an), ...Object.keys(bn)])].sort();
    const changes = keys.map(key => ({ key, a:an[key] ?? null, b:bn[key] ?? null, delta:(an[key] != null && bn[key] != null) ? bn[key] - an[key] : null }))
      .filter(row => row.a !== row.b);
    const assumptionChanges = [];
    const ak = a.assumptions || {}, bk = b.assumptions || {};
    [...new Set([...Object.keys(ak), ...Object.keys(bk)])].sort().forEach(key => {
      if (ak[key] !== bk[key]) assumptionChanges.push({key, a:ak[key], b:bk[key]});
    });
    return {
      compatible:true,
      instrument:a.instrument,
      regimeChanged:(a.regime?.key || null) !== (b.regime?.key || null),
      regimeA:a.regime?.key || null,
      regimeB:b.regime?.key || null,
      changes,
      assumptionChanges
    };
  }

  function recordSummary(record, lang) {
    if (!record) return '';
    const en = lang === 'en';
    const title = en ? 'Yang–Mills research record' : 'Yang–Mills araştırma kaydı';
    const lines = [
      `${title}: ${record.id}`,
      `${en?'Instrument':'Araç'}: ${record.instrument}`,
      `${en?'Regime':'Rejim'}: ${record.regime?.key || 'n/a'}`,
      `${en?'Model':'Model'}: ${record.modelVersion}`,
      `${en?'Class':'Sınıf'}: ${record.epistemic?.class || 'T0'}`,
      `${en?'Scope':'Kapsam'}: ${record.epistemic?.representation || 'illustrative'}`,
      `${en?'Captured':'Yakalama'}: ${record.capturedAt}`,
      `${en?'Digest':'Özet kimliği'}: ${record.digest}`,
      '',
      `${en?'Inputs':'Girdiler'}: ${JSON.stringify(record.inputs)}`,
      `${en?'Derived':'Türetilen'}: ${JSON.stringify(record.derived)}`,
      `${en?'Assumptions':'Varsayımlar'}: ${JSON.stringify(record.assumptions)}`,
      '',
      en ? 'Scientific status: open problem; T0 record; no proof claim.' : 'Bilimsel statü: açık problem; T0 kayıt; kanıt iddiası yok.'
    ];
    return lines.join('\n');
  }

  function comparisonSummary(a, b, lang) {
    const cmp = compareRecords(a,b), en = lang === 'en';
    if (!cmp.compatible) return en ? 'Selected records are not comparable.' : 'Seçili kayıtlar karşılaştırılabilir değil.';
    const lines = [
      `${en?'Comparison':'Karşılaştırma'}: ${a.id} → ${b.id}`,
      `${en?'Regime':'Rejim'}: ${cmp.regimeA || 'n/a'} → ${cmp.regimeB || 'n/a'}`
    ];
    cmp.changes.forEach(c => lines.push(`${c.key}: ${c.a} → ${c.b}${c.delta == null ? '' : ` (Δ ${c.delta >= 0 ? '+' : ''}${Number(c.delta.toPrecision(8))})`}`));
    cmp.assumptionChanges.forEach(c => lines.push(`${c.key}: ${c.a} → ${c.b}`));
    lines.push('', en ? 'T0 comparison only; no proof status is changed.' : 'Yalnız T0 karşılaştırmasıdır; kanıt statüsü değişmez.');
    return lines.join('\n');
  }

  return Object.freeze({ RECORD_SCHEMA, MAX_RECORDS, MAX_EVENTS, stableStringify, fnv1a, makeRecord, compareRecords, recordSummary, comparisonSummary });
});
