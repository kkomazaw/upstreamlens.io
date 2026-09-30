---
title: "Upstream Github - 2026-09-30"
description: "CNCF upstream activity from github"
pubDate: 2026-09-30
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "sig/testing", "sig/architecture", "area/conformance", "area/e2e-test-framework", "sig/node", "pr", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "needs-priority", "do-not-merge/needs-sig", "kind/documentation", "release-note", "size/S", "kind/api-change", "sig/apps", "needs-ok-to-test", "area/code-generation", "area/test", "area/kubelet", "size/XXL", "kind/feature", "do-not-merge/work-in-progress", "lgtm", "wg/device-management", "sig/scheduling", "size/M", "area/apiserver", "approved", "sig/instrumentation", "sig/network", "area/kube-proxy", "sig/cluster-lifecycle", "area/dependency", "sig/etcd", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "size/XL", "ok-to-test", "wg/workload-aware-scheduling", "sig/autoscaling", "sig/windows", "priority/important-longterm", "triage/accepted", "kube-state-metrics", "containerd", "area/cri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142530: Should conformance-style comments be allowed on non-conformance tests?

While starting to work on [KEP-5922](https://github.com/kubernetes/enhancements/issues/5922), I discovered that there are a lot of e2e tests that are tagged with "conformance-style" comments, but which are not actually conformance tests.

In some cases, this is clearly just bad cut+paste (eg, when `...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142530)

**Metadata:**
- Created: 2026-09-29
- Comments: 1
- State: open

### kubernetes/kubernetes#142541: apps: fix StatefulSet maxUnavailable percentage rounding doc

API comments claimed percentage maxUnavailable is rounded up. The controller rounds down to a minimum of 1 (getStatefulSetMaxUnavailable), matching KEP-961 and the unit tests. Align the docs with the behavior; do not change rollout behavior of a beta field.

<!--  Thanks for sending a pull request...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142541)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142536: DRA ResourceSlice: test disabling allowMultipleAllocations on update

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

#140799: an update that turned off `allowMultipleAllocations` on a device was accepted even though the device kept a capacity `requestPolicy`, which create validation rejects for such a device. The capacity...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142536)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142515: WIP: kubelet: Pull and apply OCI seccomp profiles

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

Kubelet part of KEP-6061. `Kubelet.SyncPod` pulls each unique OCI seccomp profile through `PullSecurityProfile` before the runtime syncs the pod, using the image pull credentials and backoff and a pulle...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142515)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142514: kcm/app: move constructor and health check verification to TestRunControllers

#### What type of PR is this?

/kind cleanup
/sig scheduling

#### What this PR does / why we need it:

Follow-up to https://github.com/kubernetes/kubernetes/pull/141789#discussion_r4073149365 (KEP: https://github.com/kubernetes/enhancements/issues/3902).

After removing the `SeparateTaintEvictionCo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142514)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14252: [SIG-Node]: 4216 - Support image pull per runtime class

### KEP/SIG-Node References

- KEP(s): https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/4216-image-pull-per-runtime-class
- stage: alpha (kubelet feature gate `RuntimeClassInImageCriApi`, off by default)
- KEP Issue: https://github.com/kubernetes/enhancements/issues/4216
- KEP PR...

🔗 [Link](https://github.com/containerd/containerd/issues/14252)

**Metadata:**
- Created: 2026-09-29
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes: v1.38.0-alpha.1


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.38.0-alpha.1)

**Metadata:**
- Version: v1.38.0-alpha.1
- Published: 2026-09-29
- Prerelease: Yes

### kubernetes/kubernetes#142539: Watch requests get 429 ```storage is (re)initializing``` for first request

### What happened?

Running a watch request against a newly created CRD will get a 429 and cause the client to retry

The error is
```storage is (re)initializing```


### What did you expect to happen?

I expect the response to be a 200 and we can avoid needing to make another request. This is less ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142539)

**Metadata:**
- Created: 2026-09-29
- Comments: 3
- State: open

### kubernetes/kubernetes#142521: Graceful Node Shutdown should allow admission of high priority pods

### What happened?

[Graceful Node Shutdown feature](https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/#configuring-graceful-node-shutdown) terminates pods in two stages: critical and non-critical pods. It is possible to specify a specific deadline for each of these stages. 

...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142521)

**Metadata:**
- Created: 2026-09-29
- Comments: 2
- State: open

### kubernetes/kubernetes#142542: node authorizer: replace intsets.Sparse visited set and add reverse traversal support



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142542)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142540: WIP: Add gated feature for Kubelet parallel container operations

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

This PR introduces an opt-in feature gate for kubelet which allows it to run its container syncing operations in parallel where possible. This is particularly valuable for pods with high containe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142540)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142537: Move consistency store to client-go utils

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142537)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142534: scheduler: make NewSnapshot node order deterministic

#### What type of PR is this?

/kind cleanup
/sig scheduling

#### What this PR does / why we need it:

`cache.NewSnapshot` builds its node lists by ranging over a map, so the same pods and nodes can
produce a different node order on each call. This lists nodes in the order of the `nodes` argument,
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142534)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142533: test: add fake-metrics-server to agnhost

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add fake-metrics-server to agnhost

#### Which issue(s) this PR is related to:

Issue #141516
PR #141366

#### Special notes for your reviewer:

/sig testing
/cc @omerap12 @BenTheElder 

#### Do...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142533)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142532: Cover stale read in correctness tests

/kind feature
/cc @mborsz @p0lyn0mial @wojtek-t 

```release-note
NONE
```

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142532)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142529: kubelet: topologymanager: add the numa score selection metric

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142529)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142528: featuregate: record feature metrics through a recorder instead of importing prometheus

#### What type of PR is this?

/kind cleanup
/sig api-machinery
/sig instrumentation

#### What this PR does / why we need it:

`featuregate` imported `metrics/prometheus/feature` for the four-line `AddMetrics()`, so every module that imports `featuregate` or `logs/api/v1` carried the prometheus cli...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142528)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142523: kubelet: start when a pod's user namespace is outside the ID range

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When the kubelet restarts, it replays the user namespace mappings persisted for the pods on disk.
If the subordinate ID range it gets changed in between, a mapping can fall outside the new range.
`record()` t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142523)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142522: WIP: stream watch cache snapshots without an item slice

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142522)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142520: Fix NodePort repair retries

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142520)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142519: WatchList snapshot only

/kind feature


```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142519)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142518: Store RV in the store and indexer

/kind feature

Enables returning whole response from lower layers in storage, allowing waitForFresh to be separate step in the future..

```release-note
NONE
```


/cc @mborsz @wojtek-t 

#### AI usage disclosure:

<!--
Mention "YES" or "NO". If yes, briefly describe how AI was used.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142518)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142516: scheduler: honor NominatedNodeName when selecting a CompositePodGroup placement

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

#139472 made TAS placement selection respect `NominatedNodeName` (NNN) for standalone PodGroups, but deliberately skipped PodGroups that belong to a CompositePodGroup (CPG): a child that returns `Success` without...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142516)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142513: sets: cover PopAny mutation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`Set.PopAny()` had no test coverage. This adds `TestSetPopAny` covering:

- Popping from a populated set: returned element was in the original set and is removed
- Draining the set completely via repeated `PopAny...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142513)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142512: rand: test invalid range bounds

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds `TestIntnRangePanic` and `TestInt63nRangePanic` to verify that `IntnRange` and `Int63nRange` panic on invalid bounds (equal bounds, min > max). The existing `TestRangePanic` only covered `Intn(0)` — the Rang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142512)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3134: feat: add kube_job_status_failure_reason metric

**What this PR does / why we need it:**
Adds kube_job_status_failure_reason, emitting a row only for the failure reason actually set (Other for unrecognized ones), instead of one 0/1 row per known reason for every failed Job. kube_job_status_failed is STABLE and can't change directly, so its docs en...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3134)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3133: docs: document the sparse-reason cardinality pattern

**What this PR does / why we need it:**
Documents the low-cardinality pattern used by kube_pod_status_reason/kube_pod_status_disruption_reason (emit a row only when a reason applies, `Other` for unrecognized values) as guidance for future metrics, distinct from the State Set pattern.

**How does thi...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3133)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-30 03:55:50*
