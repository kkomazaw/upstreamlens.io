---
title: "Upstream Sig-wg - 2026-09-25"
description: "CNCF upstream activity from sig-wg"
pubDate: 2026-09-25
category: "Notes"
tags: ["upstream", "CNCF", "SIG", "meeting-notes", "sig-auth", "sig-node", "sig-scheduling", "sig-api-machinery", "KEP", "proposal", "kubernetes"]
draft: false
---

## Overview

This is an automated collection of upstream activity from sig-wg.

## 🔥 High Priority Updates

### Meeting Notes Update: sig-auth

Update KEP 6060 with audience derivation spec

Signed-off-by: Peter Engelbert <pmengelbert@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/6618cc51a99a74c44e1bfc582cc15e8589cc76b8)

**Metadata:**
- Date: 2026-07-27
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

Merge pull request #6366 from chrishenzie/kep-5474-design-updates

KEP-5474: Incorporate writable cgroups implementation feedback

🔗 [Link](https://github.com/kubernetes/enhancements/commit/30893f027449862fb3ac6f274bc4035ddc19e9bf)

**Metadata:**
- Date: 2026-09-22
- Repository: kubernetes/enhancements
- Files Updated: 2

### Meeting Notes Update: sig-scheduling

kep-6089: promote Workload Aware Scheduling Controller APIs to Beta (#6342)

* kep-6089: promote to beta for v1.38

- Promote reusable building blocks directly to scheduling.k8s.io/v1 with Go type aliases in scheduling.k8s.io/v1alpha3 to facilitate embedding in GA workload APIs (batch/v1, apps/v1).
...

🔗 [Link](https://github.com/kubernetes/enhancements/commit/d2a5e9adc388ae2280faecfc11128c47ea3e1e24)

**Metadata:**
- Date: 2026-09-21
- Repository: kubernetes/enhancements
- Files Updated: 3

### Meeting Notes Update: sig-node

keps: update cri-stats milestone

Signed-off-by: Damien Grisonnet <dgrisonn@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/aee58ea3e6d1f2debd9a5f775281e7dcaa54ae3a)

**Metadata:**
- Date: 2026-09-18
- Repository: kubernetes/enhancements
- Files Updated: 2

### KEP unknown: Merge pull request #6431 from yongruilin/kep-5958-v1.38

KEP-5958: target alpha in v1.38

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/5958-client-opt-out-managedfields/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-25
- Status: Unknown

### KEP unknown: Merge pull request #6320 from natasha41575/resize_mem_volumes_beta

KEP-6030: Dynamic resize of memo...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6030-dynamic-resize-of-memory-backed-volumes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: Merge pull request #6405 from atiratree/evictionrequest-update-1.38

KEP-4563: update and sync Evict...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/4563-eviction-request-api/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: KEP-5958: target alpha in v1.38

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/5958-client-opt-out-managedfields/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: Merge pull request #6259 from pmengelbert/pmengelbert/kep-6060-update-with-implementation-details/1
...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-auth/6060-api-server-authentication-to-webhooks/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: Update KEP 6060 with audience derivation spec

Signed-off-by: Peter Engelbert <pmengelbert@gmail.com...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-auth/6060-api-server-authentication-to-webhooks/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-07-27
- Status: Unknown

### KEP unknown: Merge pull request #6368 from iholder101/kep5365-beta-1.38

KEP-5365: Promote ImageVolumeWithDigest ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5365-ImageVolume-with-image-digest/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: Merge pull request #6427 from chrishenzie/kep-5474-failure-modes

KEP-5474: Document errors for miss...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-23
- Status: Unknown

### KEP unknown: kep 6030: beta update for dynamic resize of mem-backed volumes

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6030-dynamic-resize-of-memory-backed-volumes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-08-25
- Status: Unknown

### KEP unknown: kep 6030: update alpha kep based on what was actually implemented

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6030-dynamic-resize-of-memory-backed-volumes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-08-25
- Status: Unknown

### KEP unknown: Merge pull request #6209 from chrishenzie/update-kep-5474

KEP-5474: add security rationale against ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-23
- Status: Unknown

### KEP unknown: KEP-5474: Document errors for missing prerequisites

Clarify that kubelet admission rejects Pods on ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-23
- Status: Unknown

### KEP unknown: Merge pull request #6327 from gavinkflam/5936-beta

KEP-5936: Move to beta

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-storage/5936-atomic-write-volume-user-fields/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-23
- Status: Unknown

### KEP unknown: Promote ImageVolumeWithDigest to beta in v1.38

Signed-off-by: Itamar Holder <iholder@redhat.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5365-ImageVolume-with-image-digest/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-15
- Status: Unknown

### KEP unknown: Merge pull request #6366 from chrishenzie/kep-5474-design-updates

KEP-5474: Incorporate writable cg...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: Merge pull request #6388 from p0lyn0mial/kep-watch-list-update-1-38

KEP-3157: Promote WatchList to ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/3157-watch-list/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: docs(kep-5793): rename merge order field to staticOrder and clarify wording

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/5793-manifest-based-admission-control-config/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: KEP-5474: Update release targets

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-07-25
- Status: Unknown

### KEP unknown: KEP-5474: Specify Pod descendant and depth limits

Define the alpha defaults as 250 descendants and ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5474-enable-writable-cgroups/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-09
- Status: Unknown

### KEP unknown: docs(kep-5793): add configurable mutating webhook merge order

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/5793-manifest-based-admission-control-config/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: Merge pull request #6349 from macsko/gang_scheduling_ga

KEP-4671: Update Gang Scheduling KEP for GA...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/4671-gang-scheduling/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: Merge pull request #6258 from BhargaviGudi/kep-6063-update-readme

KEP-6063: Configuration for Per-P...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6063-pod-pid-limit/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: KEP-5710: Promote Workload Aware Preemption to GA in v1.38 (#6367)

* KEP-5710: sync with v1.37 impl...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/5710-workload-aware-preemption/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-22
- Status: Unknown

### KEP unknown: EvictionRequest API update

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/4563-eviction-request-api/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-21
- Status: Unknown

## Updates

### Meeting Notes Update: sig-auth

Bump milestone.alpha to v1.38

Signed-off-by: Peter Engelbert <pmengelbert@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/9951aecd7a969ac640f9ac8780a157af2efdc6d6)

**Metadata:**
- Date: 2026-09-23
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

Promote ImageVolumeWithDigest to beta in v1.38

Signed-off-by: Itamar Holder <iholder@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/3dfb0254a7499f4cb16de447b1ff5eb233e3e8fd)

**Metadata:**
- Date: 2026-09-15
- Repository: kubernetes/enhancements
- Files Updated: 2

### Meeting Notes Update: sig-api-machinery

Address review feedback on release signoff checklist

🔗 [Link](https://github.com/kubernetes/enhancements/commit/1b7b22cc5daa5e1372d75a0a917b93e75249f7f6)

**Metadata:**
- Date: 2026-09-20
- Repository: kubernetes/enhancements
- Files Updated: 1


---

*This content was automatically collected on 2026-09-25 03:22:30*
