---
title: "Upstream Github - 2026-08-07"
description: "CNCF upstream activity from github"
pubDate: 2026-08-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "priority/important-soon", "sig/network", "area/dns", "needs-triage", "sig/scheduling", "sig/api-machinery", "kind/feature", "area/apiserver", "sig/node", "wg/device-management", "pr", "size/S", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-kind", "area/test", "kind/cleanup", "size/M", "kind/api-change", "release-note-none", "sig/apps", "cncf-cla: yes", "sig/testing", "release-note", "size/XXL", "sig/instrumentation", "do-not-merge/work-in-progress", "area/kubelet", "area/kube-proxy", "area/kubectl", "lgtm", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "size/L", "sig/auth", "approved", "sig/cli", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "area/code-generation", "sig/cloud-provider", "area/dependency", "sig/security", "triage/accepted", "size/XS", "enhancements", "kind/kep", "autoscaler", "website", "language/ko", "area/localization", "perf-tests", "sig/release", "needs-kind", "ok-to-test", "area/release-eng", "envoyproxy", "help wanted", "area/api", "gateway", "containerd", "area/cri", "cncf", "kind/initiative", "review/tech", "sub/project-reviews", "toc", "review/governance", "kind/review", "needs-group"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141226: Update golang.org/x deps

Update to golang.org/x/text@v0.39.0+ for https://pkg.go.dev/vuln/GO-2026-5970

Update to golang.org/x/net@v0.55.0+ for https://pkg.go.dev/vuln/GO-2026-5026

/kind bug
/sig architecture security

```release-note
Update golang.org/x/text and golang.org/x/net dependencies to include security up...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141226)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141225: Update golang.org/x deps

Update to golang.org/x/text@v0.39.0+ for https://pkg.go.dev/vuln/GO-2026-5970

Update to golang.org/x/net@v0.55.0+ for https://pkg.go.dev/vuln/GO-2026-5026

/kind bug
/sig architecture security

```release-note
Update golang.org/x/text and golang.org/x/net dependencies to include security up...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141225)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141224: Update golang.org/x deps

Update to golang.org/x/text@v0.39.0+ for https://pkg.go.dev/vuln/GO-2026-5970

Update to golang.org/x/net@v0.55.0+ for https://pkg.go.dev/vuln/GO-2026-5026

/kind bug
/sig architecture security

```release-note
Update golang.org/x/text and golang.org/x/net dependencies to include security up...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141224)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6266: Sync KEP-4671 with v1.37 final state

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6266)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4487: Bump the actions group with 5 updates

Bumps the actions group with 5 updates:

| Package | From | To |
| --- | --- | --- |
| [step-security/harden-runner](https://github.com/step-security/harden-runner) | `2.20.0` | `2.20.1` |
| [github/codeql-action/init](https://github.com/github/codeql-action) | `4.37.5` | `4.37.6` |
| [github/codeql...

🔗 [Link](https://github.com/kubernetes/release/pull/4487)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2269: Proposal: Create a Tech Review guide

Currently we provide several helper docs for conducting governance reviews in <https://github.com/cncf/toc/tree/main/toc_subprojects/project-reviews-subproject> but we don't have a guide for conducting a technical review.

In particular now that technical reviews are to review the upstream GTR we co...

🔗 [Link](https://github.com/cncf/toc/issues/2269)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes: v1.37.0-rc.0


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-rc.0)

**Metadata:**
- Version: v1.37.0-rc.0
- Published: 2026-08-06
- Prerelease: Yes

### kubernetes/kubernetes#141229: Kubernetes v1.35.1 bundles CoreDNS v1.13.1 — 3 minor versions behind upstream v1.14.6, exposing clusters to 49+ known CVEs

## Summary

Kubernetes v1.35.1 bundles `registry.k8s.io/coredns/coredns:v1.13.1` as the
default DNS provider. The upstream CoreDNS project has since released v1.14.6,
which addresses the vast majority of known vulnerabilities present in v1.13.1.

Since Kubernetes controls which CoreDNS version ships...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141229)

**Metadata:**
- Created: 2026-08-06
- Comments: 2
- State: open

### kubernetes/kubernetes#141227: Preemption victim selection has no signal for whether a victim's replacement can reschedule elsewhere -- DaemonSet pods and Deployment pods are treated identically

### What happened?

**TL;DR:** when a higher-priority pod preempts and has a choice between multiple equal-priority victims on a node, the only signal the scheduler uses to pick which one to evict is pod age (`MoreImportantPod`, older wins) — nothing accounts for whether the victim's replacement can...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141227)

**Metadata:**
- Created: 2026-08-06
- Comments: 2
- State: open

### kubernetes/kubernetes#141221: KCM supports start informer before acquiring a lease

### What would you like to be added?

The scheduler can start the informer before obtaining the lease and cache data, so that the standby instance can quickly perform scheduling when obtaining the lease. Can the KCM also start the informer to synchronize data, so that related work can be quickly sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141221)

**Metadata:**
- Created: 2026-08-06
- Comments: 3
- State: open

### kubernetes/kubernetes#141220: kube-apiserver fails PostStartHook on startup: nodeport repair Services LIST is not retried when the watch cache is initializing

### What happened?

On a cluster with a large Services collection, `kube-apiserver` exits roughly 60s after every start:

```
E repair.go:85] "Unhandled Error" err="unable to refresh the port block: storage is (re)initializing"
F hooks.go:204] PostStartHook "start-service-ip-repair-controllers" fail...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141220)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/kubernetes#141217: `--watch-cache-sizes` has applied to custom resources since v1.28, contrary to its documentation

### What happened?

The `--watch-cache-sizes` flag is documented as having no effect on custom resources:

> This option is only meaningful for resources built into the apiserver, **not ones defined by CRDs** or aggregated from external servers […]

In practice, since v1.28 the flag *does* take effe...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141217)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/kubernetes#141216: DRA: a negative device consumesCounters value is accepted and over-commits a shared counter set

### What happened?

A device's `consumesCounters` value may be negative. ResourceSlice validation accepts it, and the
structured allocator subtracts it from the counter set, so a negative consumption inflates the set's
available capacity and admits an allocation that over-commits the set.

`validate...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141216)

**Metadata:**
- Created: 2026-08-06
- Comments: 2
- State: open

### kubernetes/kubernetes#141214: DRA: allocator should fail closed (per-node) on a malformed ResourceSlice nodeSelector term count

### What happened?

Follow-up to #141212 and #141213. The validation fix in #141213 stops a new or modified ResourceSlice from carrying a per-device `nodeSelector` whose term count is not exactly one. It ratchets the new constraint, so a slice with a multi-term selector that was stored before the fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141214)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/kubernetes#141212: DRA: per-device nodeSelector with multiple terms passes validation and aborts the scheduling cycle

### What happened?

A per-device `nodeSelector` on a ResourceSlice device may contain more than one node selector term.

ResourceSlice API validation accepts such an object, even though the API contract requires exactly one term. When structured allocation selects that device, the allocator rejects ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141212)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/kubernetes#141233: DRA: reject negative device counter values

Fixes #141216.

Reject negative `Counter.value` quantities during `ResourceSlice` validation. This prevents a negative `consumesCounters` value from increasing a shared counter set's apparent available capacity.

Add a regression test that verifies the validation error for a negative device counter ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141233)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141231: Migrate ResourceQuota.Spec.Scopes to declarative validation

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Migrates the immutability validation of `ResourceQuota.Spec.Scopes` to declarative validation, following the pattern of previous migrations from the tracking issue:

- Adds `+k8s:alpha(since: "...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141231)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141228: apiserver: park and resume slow watch streams instead of terminating them (WatchCacheStallResume)

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it

Today, when a watch client cannot keep up and its delivery buffer fills, the apiserver blocks the shared dispatch path for up to a shared per-dispatch-round time budget (a ~100 ms accumulation c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141228)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141223: Use errors.As for unwrapping in ErrorToAPIStatus and storage.isErrCode

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Replace direct type assertions with `errors.As` so that wrapped errors are correctly identified. This makes `ErrorToAPIStatus` find `statusError` implementations inside error chains, and makes `storage.IsCo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141223)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141222: kubelet: rollback in-memory pod allocation on checkpoint write failure

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When the Kubelet allocation manager attempts to persist a pod's resource allocation during admission, failures in writing the checkpoint to disk (such as a read-only filesystem, I/O errors, or disk full) were handled...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141222)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141219: core/v1: add alpha declarative validation for PodSpec.ActiveDeadlineSeconds

/kind feature
/sig api-machinery

This adds declarative validation for `spec.activeDeadlineSeconds` on PodSpec, gated alpha as of 1.37. While working on it I also found and fixed a redundant ObjectMeta validation call on the pod update paths, so that's included here too.

### What changed

`A...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141219)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141218: Create TLS secret in PrepareTest when CapSnapshotMetadata is enabled

## What type of PR is this?
/kind bug

## What this PR does / why we need it

When `CSI_PROW_ENABLE_SNAPSHOT_METADATA=true`, the csi-hostpath driver's `PrepareTest()` keeps the `csi-snapshot-metadata` sidecar container and its `csi-snapshot-metadata-server-certs` volume in the StatefulSet. However, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141218)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141215: fix BenchmarkRatcheting set locked feature gate CRDValidationRatcheting

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141215)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141213: Reject multi-term per-device nodeSelector in ResourceSlice validation

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Both node selector fields on a `ResourceSlice` are documented as single-term selectors: `ResourceSliceSpec.NodeSelector` and `Device.NodeSelector` each say "Must use exactly one term." The slice-level field enforces ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141213)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6268: Stall and resume slow watch streams instead of terminating them (WatchCacheStallResume)

### Enhancement Description

- **One-line enhancement description (can be used as a release note):** Park and resume slow watch streams from the watch cache history instead of force-closing them, so a slow or stalled watch client no longer delays or terminates healthy watchers (`WatchCacheStallResum...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6268)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### kubernetes/autoscaler: addon-resizer-1.8.24

This is a patch release that enables addon-resizer to work with Kubernetes 1.37.

## What's Changed
* Add support for apiserver_resource_objects metric by @liggitt in https://github.com/kubernetes/autoscaler/pull/10107

**Full Changelog**: https://github.com/kubernetes/autoscaler/compare/addon-resizer-1.8.23...addon-resizer-1.8.24

# Images

- `registry.k8s.io/autoscaling/addon-resizer:1.8.24`
- `registry.k8s.io/autoscaling/addon-resizer-amd64:1.8.24`
- `registry.k8s.io/autoscaling/ad...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/addon-resizer-1.8.24)

**Metadata:**
- Version: addon-resizer-1.8.24
- Published: 2026-08-06
- Prerelease: No

### kubernetes/website#56835: The kubectl command-line tool

🔗 [Link](https://github.com/kubernetes/website/issues/56835)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/website#56831: [ko] Update content/ko/docs/concepts/containers/cri.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/containers/cri.md` to include the `List streaming` section from the latest English version.

**Website Link**

* Korean: https://kubernetes.io/ko/docs/concepts/containers/cr...

🔗 [Link](https://github.com/kubernetes/website/issues/56831)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/website#56830: [ko] Update content/ko/docs/reference/access-authn-authz/kubelet-authn-authz.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/reference/access-authn-authz/kubelet-authn-authz.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/reference/access-authn-authz/kube...

🔗 [Link](https://github.com/kubernetes/website/issues/56830)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/website#56829: [ko] Update content/ko/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tutorials/statefu...

🔗 [Link](https://github.com/kubernetes/website/issues/56829)

**Metadata:**
- Created: 2026-08-06
- Comments: 1
- State: open

### kubernetes/perf-tests#4256: Add systemPodsFailureEnabled flag to SystemPodMetrics to allow users …

…to log system pod restarts as warnings instead of failing the test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-cont...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4256)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#9685: api: add Week unit to BackendTrafficPolicy RateLimitUnit

*Description*:

Currently `RateLimitUnit` (used in `BackendTrafficPolicy.spec.rateLimit`) only
supports `Second`, `Minute`, `Hour`, `Day`, `Month`, and `Year`. There's no way
to express a weekly rate limit today.

The underlying `ratelimit` service already fully supports a `WEEK` unit —
it's defined...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9685)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### containerd/containerd#13909: CRI image pull is sometimes canceled by image_pull_progress_timeout during unpack

### Description

When the CRI plugin pulls an image through the transfer service (`use_local_image_pull = false`), the image pull can be canceled by `image_pull_progress_timeout` even when all blob downloads have finished and the remaining unpack is progressing.

The unpack then fails with:
```
canc...

🔗 [Link](https://github.com/containerd/containerd/issues/13909)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### cncf/toc#2271: [Tech Review]: Cozystack

### Project name

Cozystack

### Project link

[cozystack/cozystack](https://github.com/cozystack/cozystack)

### Due diligence link



### Project contact information

# The Cozystack Maintainers

### Additional information



---

_This issue was automatically created from [issue #1916](https://gi...

🔗 [Link](https://github.com/cncf/toc/issues/2271)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### cncf/toc#2270: [Gov. Review]: Cozystack

### Project name

Cozystack

### Project link

[cozystack/cozystack](https://github.com/cozystack/cozystack)

### Due diligence link



### Project contact information

# The Cozystack Maintainers

### Additional information



---

_This issue was automatically created from [issue #1916](https://gi...

🔗 [Link](https://github.com/cncf/toc/issues/2270)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### cncf/toc#2267: [Gov. Review]: Higress

### Project name

Higress

### Project link

https://github.com/higress-group/higress

### Due diligence link

_No response_

### Project contact information

- Yuanxiao Zhao: @EndlessSeeker
- Tianyi Zhang: @johnlanni
- Yiquan Dong: @CH3CHO

### Additional information

Higress is a CNCF Sandbox proj...

🔗 [Link](https://github.com/cncf/toc/issues/2267)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open

### cncf/toc#2266: [Tech Review]: Higress

### Project name

Higress

### Project link

https://github.com/higress-group/higress

### Due diligence link

_No response_

### Project contact information

- Yuanxiao Zhao: @EndlessSeeker
- Tianyi Zhang: @johnlanni
- Yiquan Dong: @CH3CHO

### Additional information

Higress is a CNCF Sandbox proj...

🔗 [Link](https://github.com/cncf/toc/issues/2266)

**Metadata:**
- Created: 2026-08-06
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-07 02:32:45*
