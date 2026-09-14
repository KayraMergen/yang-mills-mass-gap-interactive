# Custom Domain

## Canonical public site

https://www.yangmillsresearch.org/

## DNS

Cloudflare DNS is configured in DNS-only mode.

Apex `A` records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

`www`:

- `CNAME www -> KayraMergen.github.io`

The GitHub Pages ownership-verification TXT record must remain in DNS.

## GitHub Pages

- Custom domain: `www.yangmillsresearch.org`
- Domain ownership: verified
- HTTPS certificate: approved
- HTTPS enforcement: enabled

The root domain `yangmillsresearch.org` is configured alongside `www` so GitHub
Pages can handle the canonical redirect.
