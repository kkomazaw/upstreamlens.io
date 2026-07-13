---
title: "Upstream Github - 2026-07-13"
description: "CNCF upstream activity from github"
pubDate: 2026-07-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "sig/node", "needs-triage", "wg/device-management", "pr", "area/kubelet", "size/M", "release-note-none", "cncf-cla: yes", "do-not-merge/work-in-progress", "needs-priority", "area/apiserver", "sig/api-machinery", "size/L", "do-not-merge/needs-kind", "sig/etcd", "release-note", "kind/flake", "wg/workload-aware-scheduling", "kind/api-change", "needs-ok-to-test", "kind/feature", "size/S", "help wanted", "sig/auth", "sig/cluster-lifecycle", "triage/accepted", "website", "language/ko", "size/XS", "lgtm", "sig/docs", "language/zh", "area/localization", "language/en", "area/blog", "approved", "minikube", "cncf-cla: no", "area/vertical-pod-autoscaler", "do-not-merge/release-note-label-needed", "autoscaler", "sig/testing", "area/jobs", "area/config", "test-infra"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140470: Fix/lock dra device taints 1.38

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
DRADeviceTaintRules and DRADeviceTaints graduated to GA in 1.37 but were
left unlocked (LockToDefault: false). DRADeviceTaintRules was kept
unlocked specifically because it depended on an off-by-default beta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140470)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140474: resource: PodRequests/PodLimits report a zero-valued pod-level resource on an infeasible resize

### What happened?

`PodRequests` / `PodLimits` in `component-helpers/resource` insert an explicit **zero-valued** quantity for a pod-level resource that is present in `pod.Spec.Resources` but absent from the effective (actuated) resources, when an in-place resize is marked **infeasible**.

The pod-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140474)

**Metadata:**
- Created: 2026-07-12
- Comments: 1
- State: open

### kubernetes/kubernetes#140472: DRA: ResourceSlice validRange.step of 2^64 re-panics with integer divide by zero (bypasses the #139698 Sign() guard via Value() truncation)

### What happened?

`ResourceSlice` validation panics with `integer divide by zero` on a `capacity.requestPolicy.validRange.step` whose value is a positive multiple of 2^64 (for example `18446744073709551616`).

This re-opens the panic that #139653 reported and #139698 fixed. That fix added a guard ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140472)

**Metadata:**
- Created: 2026-07-12
- Comments: 2
- State: open

### kubernetes/kubernetes#140471: DRA: re-preparing a claim after a kubelet restart appends duplicate devices (unbounded checkpoint growth)

### What happened?

When the kubelet restarts while a pod using a ResourceClaim is still running, the DRA manager re-runs `NodePrepareResources` for that claim and appends the returned devices onto the checkpoint-restored `DriverState.Devices` instead of replacing them. The device list grows by one ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140471)

**Metadata:**
- Created: 2026-07-12
- Comments: 2
- State: open

### kubernetes/kubernetes#140468: DRA: reject negative ConsumedCapacity before computing node-allocatable resource demand


### What happened?

When the `DRANodeAllocatableResources` feature is enabled, the scheduler computes a pod's node-allocatable footprint from `resourceClaim.Status.Allocation.Devices.Results[i].ConsumedCapacity`, multiplied by `NodeAllocatableResourceMappings[...].AllocationMultiplier`. `ConsumedCa...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140468)

**Metadata:**
- Created: 2026-07-12
- Comments: 2
- State: open

### kubernetes/kubernetes#140480: WIP: Handle vertical scaling of Guaranteed QoS pods with fractional CPU

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140480)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140479: [WIP] Test stream

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140479)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140478: scheduler: flush pending PodGroup members after others have been assumed

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140478)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140475: resource: omit not-yet-actuated pod-level resource on infeasible resize

<!--  Thanks for sending a pull request!  Here are some tips for you:
-->

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`PodRequests` and `PodLimits` in `component-helpers/resource` build the pod-level result by iterating over the *spec* resources and indexing in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140475)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140473: node: mm-mgr: tolerate small NUMA node memory drift on restart

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

With `memoryManagerPolicy: Static`, kubelet fails to start after a reboot with `[memorymanager] the expected machine state is different from the real one`, and the node stays `NotReady` until the memory manager state f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140473)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140469: Fix RetryOnConflict returning nil for context cancellation

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
`RetryOnConflict` delegates to `OnError`, which translated any `wait.Interrupted(err)` result to `lastErr`. `lastErr` was only set for retriable errors, so a non-retriable interrupted error like `con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140469)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56477: Issue with k8s.io/docs/reference/access-authn-authz/bootstrap-tokens/

I have a feedback regarding the section about cluster-info signing.
The documentation says that the key used for hmac validation is the full token "tokenid.tokensecret". owever my tests suggest it's not true and the key is just the token secret alone.
Also, because even full token is shorter than 32...

🔗 [Link](https://github.com/kubernetes/website/issues/56477)

**Metadata:**
- Created: 2026-07-12
- Comments: 5
- State: open

### kubernetes/website#56472: [ko] Translate content/en/blog/_posts/2026/etcd-3-7.md into Korean

**This is a Feature Request**

**What would you like to be added**
Translate `content/en/blog/_posts/2026/etcd-3-7.md` into Korean.

**Why is this needed**
To help Korean-speaking users better understand the etcd v3.7.0 release announcement by providing localized documentation.

**Comments**
https:/...

🔗 [Link](https://github.com/kubernetes/website/issues/56472)

**Metadata:**
- Created: 2026-07-12
- Comments: 1
- State: open

### kubernetes/website#56476: [zh-cn]sync tutorials/_index

content/zh-cn/docs/tutorials/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/56476)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56475: [zh-cn]sync cgroups annotations

content/zh-cn/docs/concepts/architecture/cgroups.md
content/zh-cn/docs/concepts/overview/working-with-objects/annotations.md

🔗 [Link](https://github.com/kubernetes/website/pull/56475)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56470: Custom Metric Blog: Added publication

Added publication date : `2026-07-14T10:00:00-08:00`

🔗 [Link](https://github.com/kubernetes/website/pull/56470)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23348: helm: improve type safety, error handling, and test clarity

Clean up the helm addon code and integration test to improve type safety,
error handling, and test readability.

- HelmVersion now returns a parsed semver.Version and an error instead of
  a raw string, so failures are logged and visible in "minikube logs"
- HelmOptions.Version is now *semver.V...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23348)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9972: cleanup: use helper function for getting all update modes in recommender tests

Fixes #9971

This PR migrates the manual definition of `UpdateMode`s in `recommender_test.go` to use the helper function `vpa_types.GetUpdateModes()`. This ensures that any new update mode (e.g. `InPlace`) is automatically tested and the file stays in sync with all supported modes.

**Changes:**
- R...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9972)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37444: update sig autoscaling owners

/assign @adrianmoisey 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37444)

**Metadata:**
- Created: 2026-07-12
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-13 02:33:16*
