---
title: "Upstream Github - 2026-08-02"
description: "CNCF upstream activity from github"
pubDate: 2026-08-02
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "needs-triage", "wg/device-management", "sig/apps", "pr", "sig/node", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/L", "ok-to-test", "area/provider/gcp", "sig/storage", "sig/api-machinery", "kind/api-change", "sig/auth", "do-not-merge/release-note-label-needed", "area/code-generation", "sig/cloud-provider", "do-not-merge/contains-merge-commits", "area/test", "kind/cleanup", "size/S", "release-note-none", "sig/testing", "area/kubelet", "area/kubectl", "sig/cli", "size/XS", "area/apiserver", "kind/feature", "language/ko", "area/localization", "website", "good first issue", "help wanted", "sig/docs", "priority/backlog", "language/en", "priority/awaiting-more-evidence", "lgtm", "area/web-development", "language/zh", "approved", "committee/steering", "area/elections", "community", "area/vertical-pod-autoscaler", "autoscaler", "size/XXL", "triage/accepted"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56738: [ko] Update content/ko/docs/concepts/security/service-accounts.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56738)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/website#56734: Broken Kyverno link in Pod Security Standards alternatives section

The `Kyverno` link in the **Alternatives** section of the Pod Security Standards documentation appears to be broken.


<img width="859" height="396" alt="Image" src="https://github.com/user-attachments/assets/4244044d-9d2a-44f0-a57f-c53baf661ed5" />

**Page:**

https://kubernetes.io/docs/concepts/se...

🔗 [Link](https://github.com/kubernetes/website/issues/56734)

**Metadata:**
- Created: 2026-08-01
- Comments: 3
- State: open

### kubernetes/autoscaler#10088: Fix incorrect 24h comment for PodLifetimeUpdateThreshold

#### What type of PR is this?

/kind cleanup

<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regre...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10088)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10087: Add reactive CPU startup boost unboosting

#### What type of PR is this?
/kind feature
<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10087)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141103: DRA: ExtendedResourceCache serves stale mappings and can drop the winner across DeviceClass updates and collisions

The extended resource cache (`staging/src/k8s.io/dynamic-resource-allocation/deviceclass/extendedresourcecache/extendedresourcecache.go`, behind `DRAExtendedResource`) loses information it needs to keep `resourceName2class` correct across DeviceClass updates and explicit-name collisions. `updateReso...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141103)

**Metadata:**
- Created: 2026-08-01
- Comments: 1
- State: open

### kubernetes/kubernetes#141095: `StatefulSet` update stuck at the previous error

### What happened?

When update a `StatefulSet` image, if the pod get error like `ErrImagePull/ImagePullBackOff`, then if update the `StatefulSet` image again with a valid image, then the sts pod will stuck at the previous error, unless delete the error pod manually will trigger the new image rollin...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141095)

**Metadata:**
- Created: 2026-08-01
- Comments: 2
- State: open

### kubernetes/kubernetes#141108: DRA: invoke ResourceSlice update errors outside the controller lock

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`Controller.Update` reports invalid `ReconcilePoolWithName` input by calling the caller-provided `ErrorHandler` while holding `c.mutex`:

```go
func (c *Controller) Update(resources *DriverResources) {
	c.mutex.Lock(...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141108)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141107: DRA: preserve TimeAdded for every matching device taint

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`copyTaintTimeAdded` clones the desired device once per matching taint, and the clone comes from the range value:

```go
	for i, toDevice := range to {
		...
		for j, toTaint := range toDevice.Taints {
			...
			to[i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141107)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141106: dra/client: use the v1beta2 client for UpdateStatus

**What this PR does / why we need it**:

The DRA converting client keeps separate native, v1beta1, and v1beta2 clients and picks one at runtime. Every operation on the v1beta2 path uses `t.v1beta2`, except `UpdateStatus`, which uses `t.v1beta1`:

```go
case useV1beta2API:
    return putWithConversio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141106)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141105: kubeletplugin: preserve Unix socket cleanup errors

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubeletplugin/endpoint.go` has the same typo in both cleanup paths. The primary error is passed to `errors.Join` twice, so `removeErr` never reaches the returned error.

```go
	listener, err := cfg.Listen(ctx, "unix...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141105)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141104: resourceclaim: copy template annotations before creating claims

**What this PR does / why we need it**:

When the resourceclaim controller creates a ResourceClaim from a ResourceClaimTemplate, it reused the annotations map from the shared informer-cached template and then added the pod-claim-name annotation to it:

```go
annotations := template.Spec.ObjectMeta.A...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141104)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141102: adding reason tag 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141102)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141101: e2e/storage: drop Slow label from HostPathType tests

**What type of PR is this?**

/kind cleanup
/sig testing
/sig storage

**What this PR does / why we need it:**

Part of the [Slow] tag audit from #131049, this time in the other direction.

All 35 tests in the five `HostPathType *` suites carry `[Slow]`, but none of them are anywhere near the 5 minu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141101)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141100: kubelet: fix wrong variable in container memory resize validation

**What type of PR is this?**

/kind bug
/sig node

**What this PR does / why we need it:**

`validateMemoryResizeAction` has a copy/paste slip in the per-container check: the error message reports `*podUsageStats.Memory.UsageBytes` (the pod-level usage) where it means the container's usage:

```go
i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141100)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141099: kubectl kuberc view: fix panic when declining to generate a default file

**What type of PR is this?**

/kind bug
/sig cli

**What this PR does / why we need it:**

`kubectl kuberc view` panics when no kuberc file exists and the user answers anything but `y` at the prompt (including the documented default `N`):

```
$ kubectl kuberc view
kuberc file not found at /home/use...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141099)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141098: client-go: fix RealFIFO.Resync wrapping the wrong error

**What type of PR is this?**

/kind bug
/sig api-machinery

**What this PR does / why we need it:**

`RealFIFO.Resync` wraps the wrong error variable when queueing a known object fails:

```go
knownObj, exists, err := f.knownObjects.GetByKey(knownKey)
if err != nil { ... continue }
} else if !exists...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141098)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141097: Fix `StatefulSet` update stuck at the previous error

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`StatefulSet` update should not stuck at the previous error, shoud trigger rolling update with the latest update.

#### Which issue(s) this PR is related to:
Fixes #141095

#### Special notes for your reviewer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141097)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141096: e2e/node: mark NFS host cleanup tests as Slow

**What type of PR is this?**

/kind cleanup
/sig testing
/sig node

**What this PR does / why we need it:**

Part of the [Slow] tag audit from #131049.

The two `[HostCleanup]` NFS host cleanup tests in `test/e2e/node/kubelet.go` consistently run well over the 5 minute threshold but are not tagged `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141096)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141094: Fix StatefulSet bug of matching leading-zero pod name

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141094)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141093: Fix nil-pointer panic in kubectl auth reconcile for RoleBindings

Fixes #140338

**What type of PR is this?**
/kind bug

**What this PR does / why we need it**:
This PR fixes a nil-pointer panic in `kubectl auth reconcile` when processing `RoleBinding` and `ClusterRoleBinding` types. If the underlying reconcile operation returns an error (e.g., a `forbidden` respo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141093)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141092: Drop unvalidated labels from apiserver_request_terminations_total

Fixes #141007

**What this PR does / why we need it**:
The `apiserver_request_terminations_total` metric has unbounded cardinality due to labels built from unvalidated request paths. This PR drops the unvalidated labels (group, version, resource, subresource) from the metric and keeps only the tight...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141092)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141091: DRA: treat feature-unusable devices as non-matching in isSelectable

#### What type of PR is this?

/kind bug

#### What this PR does:

Fixes structured DRA allocator behavior for `allocationMode: All` when some devices in a pool are unusable because a feature (or node capability) is off. Assuming`All` means “all **matching** devices. Devices that BindingCondit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141091)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141090: kubectl: propagate printer error in rollout history all revisions output

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When running `kubectl rollout history` with `-o yaml` or `-o json` without specifying `--revision`, `printer.PrintObj` errors in the all-revisions loop were being ignored. If a write failure occurred (e.g., broken pi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141090)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56735: Mark or remove unmaintained network policy providers from network policy provider task page

**This is a Feature Request**

**What would you like to be added**

Two providers on the ["Install a Network Policy Provider" page](https://kubernetes.io/docs/tasks/administer-cluster/network-policy-provider/) point to unmaintained projects. I'd like them removed, or marked as unmaintained.

Weave N...

🔗 [Link](https://github.com/kubernetes/website/issues/56735)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/website#56731: layouts/index.headers does not reject whitespace in css/js front matter, unlike layouts/index.redirects

## What happened

`layouts/index.headers` builds the generated `_headers` file from page front
matter. It reads `.Params.css` and `.Params.js`, splits each on commas, trims
spaces, and emits a `Link:` line per element.

The `HEADERS` output format is declared `isPlainText = true` in `hugo.toml`, so
...

🔗 [Link](https://github.com/kubernetes/website/issues/56731)

**Metadata:**
- Created: 2026-08-01
- Comments: 3
- State: open

### kubernetes/website#56733: Extract navbar language option lookups

### Description

Extracts the page-specific translation and home fallback maps from `navbar-lang-selector.html` into `navbar-language-options.html`.

The existing desktop language selector consumes the returned data without changing its rendered markup. This is a behavior-neutral enabling refact...

🔗 [Link](https://github.com/kubernetes/website/pull/56733)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56727: [zh-cn]sync preconditions-v1-meta watch-event-v1-meta

content/zh-cn/docs/reference/kubernetes-api/definitions/preconditions-v1-meta.md
content/zh-cn/docs/reference/kubernetes-api/definitions/watch-event-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56727)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56726: [zh-cn]sync owner-reference-v1-meta

content/zh-cn/docs/reference/kubernetes-api/definitions/owner-reference-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56726)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56725: [zh-cn]sync subject-v1-rbac

content/zh-cn/docs/reference/kubernetes-api/definitions/subject-v1-rbac.md

🔗 [Link](https://github.com/kubernetes/website/pull/56725)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56724: [zh-cn]sync policy-rule-v1-rbac

content/zh-cn/docs/reference/kubernetes-api/definitions/policy-rule-v1-rbac.md

🔗 [Link](https://github.com/kubernetes/website/pull/56724)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56723: [zh-cn]sync quantity-resource

content/zh-cn/docs/reference/kubernetes-api/definitions/quantity-resource.md

🔗 [Link](https://github.com/kubernetes/website/pull/56723)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56720: [zh-cn]sync rule-with-operations-v1-admissionregistration

content/zh-cn/docs/reference/kubernetes-api/definitions/rule-with-operations-v1-admissionregistration.md

🔗 [Link](https://github.com/kubernetes/website/pull/56720)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56717: [zh-cn]sync toleration-v1

content/zh-cn/docs/reference/kubernetes-api/definitions/toleration-v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/56717)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56716: [zh-cn]sync typed-local-object-reference-v1 typed-local-object-refere…

content/zh-cn/docs/reference/kubernetes-api/definitions/typed-local-object-reference-v1.md
content/zh-cn/docs/reference/kubernetes-api/definitions/typed-local-object-reference-v1alpha2-scheduling.md

🔗 [Link](https://github.com/kubernetes/website/pull/56716)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56715: [zh-cn]sync user-info-v1-authentication variable-v1-admissionregistration

content/zh-cn/docs/reference/kubernetes-api/definitions/user-info-v1-authentication.md
content/zh-cn/docs/reference/kubernetes-api/definitions/variable-v1-admissionregistration.md

🔗 [Link](https://github.com/kubernetes/website/pull/56715)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9095: add candidate bio for Priyanka Saggu (Priyankasaggu11929) for 2026

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https:...

🔗 [Link](https://github.com/kubernetes/community/pull/9095)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10090: VPA: lazily backfill checkpoints for VPAs newly tracked by a recommender

### What this does

When a VPA object starts being handled by a different recommender instance — for example after changing `spec.recommenders`, or after its target's pod selector changed — the new recommender has no aggregate state for it, so its histogram buckets appear to reset and the recommenda...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10090)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10089: Add a control to a slow negative test in order to allow it to exit faster

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I'm still on a (slow) quest to make our tests run faster. 

The existing test waits 15m for nothing to happen.

This change improves on that by adding a control VPA to the test.
If the control has been...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10089)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-02 02:32:28*
