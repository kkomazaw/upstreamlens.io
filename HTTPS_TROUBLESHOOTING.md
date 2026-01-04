# HTTPS Troubleshooting Guide

## Current Status

✅ **DNS Configuration**: Perfect
- `upstreamlens.io` → GitHub Pages A records (185.199.108.153, etc.)
- `www.upstreamlens.io` → `kkomazaw.github.io` (CNAME)

❌ **HTTPS Certificate**: Not yet issued by GitHub

## Error Message

```
Enforce HTTPS — Unavailable for your site because your domain
is not properly configured to support HTTPS
```

## Root Cause

GitHub Pages hasn't issued the Let's Encrypt SSL certificate yet. This can happen when:
1. Custom domain was recently added
2. DNS changes are still propagating
3. GitHub's certificate provisioning is in queue

## Solution

### Step 1: Force GitHub to Re-Check DNS

1. Go to: https://github.com/kkomazaw/upstreamlens.io/settings/pages

2. Under "Custom domain":
   - **Remove** `upstreamlens.io` from the field
   - Click **Save**
   - Wait 10 seconds

3. **Add it back**:
   - Enter `upstreamlens.io` in the field
   - Click **Save**

4. Wait for DNS check:
   - GitHub will show "DNS check in progress"
   - This usually takes 1-5 minutes
   - When successful, you'll see: ✅ "DNS check successful"

5. **Enable HTTPS**:
   - The "Enforce HTTPS" checkbox should now be available
   - Check the box
   - Wait a few minutes for certificate provisioning

### Step 2: Monitor Certificate Provisioning

Check the status:

```bash
# Check if HTTPS is working
curl -I https://upstreamlens.io

# Should return 200 OK with valid certificate
```

### Step 3: If Still Not Working After 30 Minutes

Sometimes GitHub's certificate provisioning can take longer. Try these:

#### Option A: Clear and Re-add (Again)

Repeat Step 1 again. Sometimes it takes 2-3 attempts.

#### Option B: Temporarily Use www Subdomain

If apex domain continues to have issues:

1. Update `public/CNAME` to:
   ```
   www.upstreamlens.io
   ```

2. In GitHub Pages settings, set custom domain to:
   ```
   www.upstreamlens.io
   ```

3. This often works faster because CNAME records are easier for GitHub to verify

#### Option C: Wait 24-48 Hours

In rare cases, DNS propagation globally can take up to 48 hours. If you:
- Just changed DNS settings in the last few hours
- Are in a region far from your DNS provider

It may just need more time.

## Verification Commands

```bash
# Check DNS propagation worldwide
dig upstreamlens.io @8.8.8.8 +short
dig upstreamlens.io @1.1.1.1 +short

# Check HTTPS certificate
openssl s_client -connect upstreamlens.io:443 -servername upstreamlens.io 2>/dev/null | openssl x509 -noout -dates

# Check from GitHub's perspective
curl -sI https://kkomazaw.github.io/upstreamlens.io
```

## Expected Timeline

- **DNS Check**: 1-5 minutes
- **Certificate Provisioning**: 5-30 minutes after DNS check passes
- **Full HTTPS**: Usually working within 15-45 minutes total

## Current Working URLs

While waiting for HTTPS:

- ✅ HTTP (works now): http://upstreamlens.io
- ⏳ HTTPS (pending): https://upstreamlens.io
- ✅ GitHub URL: https://kkomazaw.github.io/upstreamlens.io (redirects to apex)

## Notes

- GitHub uses Let's Encrypt for free HTTPS certificates
- Certificates are automatically renewed
- Once working, HTTPS should remain stable
- No manual certificate management needed

## If All Else Fails

Contact GitHub Support:
- https://support.github.com/
- Include: repository name, custom domain, and error message
- They can manually trigger certificate provisioning
