---
title: "Upstream Sig-wg - 2026-11-05"
description: "CNCF upstream activity from sig-wg"
pubDate: 2026-11-05
category: "Notes"
tags: ["upstream", "CNCF", "SIG", "meeting-notes", "sig-autoscaling", "KEP", "proposal", "kubernetes"]
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

### KEP unknown: Merge pull request #6455 from PannagaRao/follow-up-was-deployment

KEP-6276: Address review comments...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-apps/6276-integrate-workload-with-deployment/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-11-03
- Status: Unknown

### KEP unknown: docs(kep-6003): requeue with AddAfter instead of a per-HPA rate limiter

Update Design Details to ma...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-autoscaling/6003-configurable-hpa-sync-period/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-10-27
- Status: Unknown


---

*This content was automatically collected on 2026-11-05 05:02:11*
