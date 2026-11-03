---
title: "Upstream Sig-wg - 2026-11-03"
description: "CNCF upstream activity from sig-wg"
pubDate: 2026-11-03
category: "Notes"
tags: ["upstream", "CNCF", "SIG", "meeting-notes", "wg-device-management", "sig-contributor-experience", "sig-autoscaling", "KEP", "proposal", "kubernetes"]
draft: false
---

## Overview

This is an automated collection of upstream activity from sig-wg.

## 🔥 High Priority Updates

### Meeting Notes Update: sig-autoscaling

docs(kep-6003): requeue with AddAfter instead of a per-HPA rate limiter

Update Design Details to match the implementation in
kubernetes/kubernetes#138222. After each reconciliation the controller
reads the period from the HPA and requeues it with AddAfter, or keeps
the existing AddRateLimited call ...

🔗 [Link](https://github.com/kubernetes/enhancements/commit/9495b282d4a8ef185352a2449eff6b924cca7463)

**Metadata:**
- Date: 2026-10-27
- Repository: kubernetes/enhancements
- Files Updated: 1

### KEP unknown: docs(kep-6003): requeue with AddAfter instead of a per-HPA rate limiter

Update Design Details to ma...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-autoscaling/6003-configurable-hpa-sync-period/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-10-27
- Status: Unknown

## Updates

### Meeting Notes Update: wg-device-management

Merge pull request #8834 from alaypatel07/wg-dm-annual-report-2025

Add 2025 annual report for wg-device-management

🔗 [Link](https://github.com/kubernetes/community/commit/9a945694de626f3b7c2446b45304ac9ae346ebe1)

**Metadata:**
- Date: 2026-10-28
- Repository: kubernetes/community
- Files Updated: 1

### Meeting Notes Update: wg-device-management

Add 2025 annual report for wg-device-management

Signed-off-by: Alay Patel <alayp@nvidia.com>

🔗 [Link](https://github.com/kubernetes/community/commit/7d8d6508502d14216224dbd24d522f2fe2374f4b)

**Metadata:**
- Date: 2026-02-09
- Repository: kubernetes/community
- Files Updated: 1

### Meeting Notes Update: sig-contributor-experience

Merge pull request #8859 from palnabarun/sig-contribex/2025-annual-report

sig-contribex: update 2025 annual report

🔗 [Link](https://github.com/kubernetes/community/commit/aeee117fa02e25b68298999d699fb45bdc91acb7)

**Metadata:**
- Date: 2026-10-27
- Repository: kubernetes/community
- Files Updated: 1


---

*This content was automatically collected on 2026-11-03 05:17:51*
