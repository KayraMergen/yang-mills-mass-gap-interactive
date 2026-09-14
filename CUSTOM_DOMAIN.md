# Custom Domain Deployment

Do **not** add an active `CNAME` file until you own and control the domain.

GitHub recommends verifying a custom domain before attaching it to a Pages
site, to reduce domain-takeover risk.

## When you have a domain

1. Verify the domain under your GitHub account's **Settings → Pages**.
2. Add the DNS verification TXT record requested by GitHub.
3. Configure DNS for the desired apex or subdomain.
4. Add the custom domain to this repository's Pages settings.
5. Keep the verification TXT record in DNS.
6. Enable HTTPS after GitHub provisions the certificate.

The current site remains:
https://kayramergen.github.io/yang-mills-mass-gap-interactive/

Official GitHub documentation:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
