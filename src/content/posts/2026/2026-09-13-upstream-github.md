---
title: "Upstream Github - 2026-09-13"
description: "CNCF upstream activity from github"
pubDate: 2026-09-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "language/ja", "triage/accepted", "sig/api-machinery", "kind/bug", "needs-sig", "pr", "kind/cleanup", "area/apiserver", "size/L", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "sig/cluster-lifecycle", "size/M", "kind/flake", "area/kubeadm", "area/test", "size/S", "sig/testing", "sig/network", "kind/api-change", "area/kubectl", "sig/cli", "release-note", "sig/storage", "area/api-validation", "size/XL", "size/XS", "lgtm", "sig/auth", "sig/scheduling", "do-not-merge/cherry-pick-not-approved", "kind/regression", "ok-to-test", "sig/release", "approved", "kind/documentation", "area/release-team", "sig-release", "area/cluster-autoscaler", "area/provider/aws", "do-not-merge/invalid-commit-message", "autoscaler", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142051: serviceaccount: remove GA'd KEP-4193 token feature gates

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA feature gates for KEP-4193 (`ServiceAccountTokenJTI`, `ServiceAccountTokenNodeBinding`, and `ServiceAccountTokenNodeBindingValidation`) after their deprecation window:
- `ServiceAccountTokenJTI` (G...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142051)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2301: Automated Governance: does the TAG want it back as an initiative, and where do its documents live?

Automated Governance has a finished deliverable and no longer has a home in the tree. The working group's README and the Automated Governance Maturity Model both sit in cncf/tag-security, archived and last pushed 2025-12-08. The controls catalog and supply-chain work that succeeded it sit in `cncf/t...

🔗 [Link](https://github.com/cncf/toc/issues/2301)

**Metadata:**
- Created: 2026-09-12
- Comments: 0
- State: open

## Updates

### kubernetes/website#57501: [ko] Update content/ko/docs/setup/best-practices/certificates.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/best-practices/certificates.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/best-practices/certificates/
- English: ht...

🔗 [Link](https://github.com/kubernetes/website/issues/57501)

**Metadata:**
- Created: 2026-09-12
- Comments: 1
- State: open

### kubernetes/website#57500: [ja] Update content/ja/community/_index.html

**This is a Feature Request**

**What would you like to be added**

Update the Japanese translation of `content/ja/community/_index.html` to match the latest English version.

**Website Link**

- Japanese: https://kubernetes.io/ja/community/
- English: https://kubernetes.io/community/

**Why is this...

🔗 [Link](https://github.com/kubernetes/website/issues/57500)

**Metadata:**
- Created: 2026-09-12
- Comments: 2
- State: open

### kubernetes/kubernetes#142062: kube-apiserver: the watch cache retains every object fully decoded, costing several times their serialized size

### What would you like to be added?

Some kind of fix so kube-apiserver does not consume unbounded memory when resources are added to K8S.

### Why is this needed?

**Status:** hypothesis confirmed by measurement (see [Evidence](#evidence)).
**Affects:** `kube-apiserver` v1.35.5 (reported), reprodu...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142062)

**Metadata:**
- Created: 2026-09-12
- Comments: 6
- State: open

### kubernetes/kubernetes#142058: kubectl patch: --type="" silently bypasses validation and attempts server connection instead of erroring

### What happened?

`kubectl patch` does not validate the `--type` flag when it is explicitly set to an empty string (`--type=""`). Instead of returning a validation error, the command silently falls through to the default `strategic` merge patch type and proceeds to attempt to connect to the API se...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142058)

**Metadata:**
- Created: 2026-09-12
- Comments: 3
- State: open

### kubernetes/kubernetes#142065: apiserver/cacher: serve watch initial events and no-snapshot lists from a Snapshot

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the remaining `OrderedListPrefix` callers ([context](https://github.com/kubernetes/kubernetes/pull/140896#discussion_r3912332217)); #141824 deletes the method on top of this. Two independent commits:

1. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142065)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142064: kubeadm: isolate subtests and fix test flake in TestWriteKubeletConfigFiles

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Fixes a test flake in `TestWriteKubeletConfigFiles` (`cmd/kubeadm/app/cmd/upgrade/postupgrade_test.go`).

Currently, the subtests in `TestWriteKubeletConfigFiles` share a single `t.TempDir()`. If test execution cro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142064)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142063: test/e2e/apimachinery: retry transient HTTP errors in waitForOpenAPISchema

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:
## What does this PR do?
Fixes an issue where `[sig-api-machinery] CustomResourcePublishOpenAPI ... works for multiple CRDs of same group but different versions` flakes in e2e test jobs (such as `ci-kubernetes-e2e-ub...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142063)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142061: IngressClassSpec.Controller DV Migration

#### What type of PR is this?

/kind feature
/sig api-machinery
#### What this PR does / why we need it:

Migrates validation of `IngressClassSpec.Controller` (in `networking.k8s.io/v1` and `v1beta1`) to declarative validation. The `controller` field's "required" and "immutable" (on update) ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142061)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142060: Refactor flags and options in `kubectl label` cmd

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142060)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142059: kubectl patch: validate --type when explicitly set to empty string 

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`kubectl patch --type=""` silently skips validation and falls back to `StrategicMergePatchType` instead of returning an error, because `Validate()` and `RunPatch()` guard the type check with `len(o.PatchType) != 0`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142059)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142057: kubectl: remove arguments from `Run()` in kubectl get

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142057)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142056: storage: graduate VolumeAttachment declarative validation to stable

#### What type of PR is this?

/kind cleanup
/area api-validation

#### What this PR does / why we need it:

This PR graduates declarative validation (DV) tags for `VolumeAttachment` from beta to stable.

#### Which issue(s) this PR is related to:

Part of #141532

#### Special notes fo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142056)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142055: apiserver: preserve mutating policy changes across GVKs

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

MutatingAdmissionPolicy dispatch can prewarm independent
`VersionedAttributes` snapshots for equivalent GVKs. Previously, each policy
invocation reused its cached snapshot and only the final snapsh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142055)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142054: storage: avoid VAC admission panic on unexpected object

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

`admitVAC` dereferences `vac.Name` after a failed `*VolumeAttributesClass` type assertion, when `vac` is nil. An unexpected object type therefore panics the admission path instead of returning without mu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142054)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142053: e2e: retry transient OpenAPI request errors

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The CRD OpenAPI E2E helper stops polling when `GET /openapi/v2` returns a transient transport error. This makes the spec update tests fail during brief control-plane connectivity interruptions.

Retry request error...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142053)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142052: resource: pin Quantity's serialized form across String, JSON and CBOR

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Part of the Quantity int64 overflow burndown (#141166), which lists golden
`String()`/JSON/CBOR compatibility tests as remaining work and holds #138166
until they exist.

`Quantity` has three serialization entry ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142052)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142050: Automated cherry pick of #141563: scheduler: Fix negative namespace selector evaluation

Cherry pick of #141563 on release-1.35.

#141563: scheduler: Fix negative namespace selector evaluation

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142050)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142049: Automated cherry pick of #141563: scheduler: Fix negative namespace selector evaluation

Cherry pick of #141563 on release-1.34.

#141563: scheduler: Fix negative namespace selector evaluation

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142049)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3099: Add v1.38 Branch Management team

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/sig-release/pull/3099)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10280: AWS example manifest: bump image tag to v1.36.1

   /kind cleanup

   #### What this PR does / why we need it:
   The AWS example manifest's cluster-autoscaler image tag was stale and did not match this release branch. This updates it to v1.36.1 to match the current cluster-autoscaler-release-1.36 branch.

   #### Which issue(s) this PR fixes...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10280)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-13 03:04:17*
