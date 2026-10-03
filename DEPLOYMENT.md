# Publish CaneJiva on `canejiva.com`

This folder is configured for a static GitHub Pages deployment. The custom domain must be set in the repository's GitHub Pages settings after the first deployment.

## GitHub setup

1. Create a new **public** GitHub repository called `canejiva-website`.
2. Push this folder to its `main` branch.
3. In the repository, open **Settings -> Pages**.
4. Select **GitHub Actions** as the source. The included workflow publishes every push to `main`.
5. Wait for the GitHub Actions workflow to finish its first deployment.
6. In **Custom domain**, enter `canejiva.com` and save. Enable **Enforce HTTPS** once GitHub finishes issuing the certificate.

## DNS records

At the company where `canejiva.com` is managed, create these four `A` records for the root domain:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

For `www`, create a `CNAME` record whose value is `vishant222.github.io`.

Do not remove your existing MX or TXT records; those may be used for email. Replace only conflicting `A`, `AAAA`, `ALIAS`, or `CNAME` records for `@` and `www`. DNS and the HTTPS certificate can take several minutes, and occasionally up to 24 hours, to complete.
