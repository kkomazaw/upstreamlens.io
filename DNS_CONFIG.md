# DNS Configuration Options

## Current Error

```
www.upstreamlens.io is improperly configured
Your site's DNS settings are using a custom subdomain, www.upstreamlens.io,
that is not set up with a correct CNAME record.
```

This means GitHub Pages expects `www.upstreamlens.io` but your DNS is configured for apex domain.

## Option 1: Use Apex Domain (upstreamlens.io) - RECOMMENDED

**Current DNS Setup (Already Configured):**
```
Type: A
Host: @
Value: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
```

**GitHub Pages Custom Domain Setting:**
- Set to: `upstreamlens.io` (NOT www.upstreamlens.io)

**Steps:**
1. Go to: https://github.com/kkomazaw/upstreamlens.io/settings/pages
2. Under "Custom domain", remove `www.upstreamlens.io`
3. Enter: `upstreamlens.io`
4. Click "Save"
5. Wait for DNS check (✅)
6. Enable "Enforce HTTPS"

**Optional - Add www redirect:**
Add this CNAME record to redirect www to apex:
```
Type: CNAME
Host: www
Value: kkomazaw.github.io
```

---

## Option 2: Use WWW Subdomain (www.upstreamlens.io)

**Required DNS Changes:**

**Remove current A records:**
```
Delete A records for @ pointing to 185.199.108.153, etc.
```

**Add these CNAME records:**
```
Type: CNAME
Host: www
Value: kkomazaw.github.io

Type: CNAME (or URL redirect)
Host: @
Value: www.upstreamlens.io (redirect apex to www)
```

**Update CNAME file:**
```bash
echo "www.upstreamlens.io" > public/CNAME
git add public/CNAME
git commit -m "Update CNAME to use www subdomain"
git push
```

**GitHub Pages Custom Domain Setting:**
- Set to: `www.upstreamlens.io`

---

## Recommended Action

**Use Option 1 (Apex Domain)** because:
- Your DNS is already correctly configured with A records
- Simpler configuration
- No need to change CNAME file
- Just need to fix GitHub Pages custom domain setting

**Steps:**
1. Go to GitHub Pages settings
2. Change custom domain from `www.upstreamlens.io` to `upstreamlens.io`
3. Save and wait for DNS verification
4. Enable HTTPS

That's it!
