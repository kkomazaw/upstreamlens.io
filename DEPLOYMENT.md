# Deployment Guide

## GitHub Pages + Custom Domain Setup

### Current Status

- ✅ CNAME file exists in `public/` directory
- ✅ GitHub Actions workflow configured
- ⏳ DNS configuration (needs update)
- ⏳ GitHub Pages custom domain configuration

### DNS Configuration Required

Your domain `upstreamlens.io` needs to point to GitHub Pages.

#### Option 1: Apex Domain (upstreamlens.io)

Configure **A records** in your DNS provider:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### Option 2: WWW Subdomain (www.upstreamlens.io)

Configure **CNAME record**:

```
Type: CNAME
Name: www
Value: <your-github-username>.github.io
```

Then add a redirect from apex to www (in DNS settings).

### GitHub Repository Settings

1. Go to: `https://github.com/<your-username>/<your-repo>/settings/pages`
2. Under "Custom domain", enter: `upstreamlens.io`
3. Click "Save"
4. Wait for DNS check to complete (may take a few minutes)
5. Enable "Enforce HTTPS" checkbox

### Verification Steps

After DNS propagation (can take 24-48 hours):

```bash
# Check DNS records
dig upstreamlens.io +short

# Expected output (one of):
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Check HTTPS certificate
curl -I https://upstreamlens.io
# Should return 200 OK with valid certificate
```

### Troubleshooting

#### Certificate Error

If you see certificate errors:
- DNS is not pointing to GitHub Pages yet
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correctly configured

#### 404 Error

If you see 404:
- Make sure the GitHub Actions workflow has run successfully
- Check that `CNAME` file exists in the deployed `dist/` folder
- Verify custom domain is set in GitHub repository settings

### Current DNS Status

```bash
# Check current DNS
nslookup upstreamlens.io

# Current IP (needs to change):
# 163.44.176.24 (coreserver.jp)

# Should be one of GitHub Pages IPs:
# 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

## Reference

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
