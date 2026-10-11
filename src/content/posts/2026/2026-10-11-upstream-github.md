---
title: "Upstream Github - 2026-10-11"
description: "CNCF upstream activity from github"
pubDate: 2026-10-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "kind/cleanup", "area/apiserver", "sig/api-machinery", "size/M", "release-note-none", "cncf-cla: yes", "needs-priority", "needs-triage", "sig/etcd", "release-note", "size/XXL", "kind/api-change", "kind/feature", "do-not-merge/work-in-progress", "area/code-generation", "area/test", "size/L", "sig/apps", "sig/testing", "kind/bug", "sig/scheduling", "needs-ok-to-test", "size/XS", "sig/node", "kind/flake", "area/cloudprovider", "sig/instrumentation", "sig/cloud-provider", "ok-to-test", "approved", "sig/auth", "wg/device-management", "area/vertical-pod-autoscaler", "area/helm-charts", "autoscaler", "lgtm", "sig/docs", "language/fr", "area/localization", "website", "size/S", "sig/release", "area/jobs", "area/config", "area/release-eng", "test-infra", "containerd", "release", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142913: [KEP-4443] Add more granular job failure condition reasons

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds an optional name to each PodFailurePolicy rule and uses it in the Job failure condition reason, defaulting unnamed rules to their index so the triggering rule is identifiable.

#### Which issue(s) th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142913)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142915: storage: support KeysOnly list and use it in consistency checker

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The watch cache consistency checker lists all objects from etcd every 5 minutes, but only uses each item's name, namespace, and resourceVersion to compute its digest. This adds a KeysOnly option to storage ListOp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142915)

**Metadata:**
- Created: 2026-10-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142914: Trying something out ignore for a sec

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142914)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142912: etcd3: remove obsolete BenchmarkStore_GetList

#### What type of PR is this?

/kind cleanup
/assign @serathius

#### What this PR does / why we need it:

Note: Personal opinion that this is outdated and broken and we have better benchmark now.

Removes `BenchmarkStore_GetList`, which has been superseded by `BenchmarkStoreList` (`RunBenc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142912)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142911: kube-scheduler: back off HTTP extenders after repeated failures

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it

Fixes #142878.

Every scheduling cycle calls each HTTP extender and waits until the call returns or `httpTimeout` fires. An ignorable filter error is skipped for that pod only, and a prioritizer error ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142911)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142910: replicaset: replace deprecated wait.PollImmediate with PollUntilConte…

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Replaces deprecated `wait.PollImmediate` calls with `wait.PollUntilContextTimeout` in `pkg/controller/replicaset/replica_set_test.go`.

This propagates the existing test context (`tCtx`) in `TestExpectationsOnRec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142910)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142909: e2e_node: reduce inode fill in ImageGCNoEviction to avoid timeout

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The ImageGCNoEviction spec has to consume ~99.7k inodes before the node crosses the eviction threshold, and runEvictionTest waits at most pressureTimeout (10m) for the DiskPressure condition. The fill com...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142909)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142908: cloud-controller-manager: honor the NativeHistograms feature gate

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

cloud-controller-manager registers the `NativeHistograms` feature gate but never calls `metricsfeatures.ApplyFeatureGates`, so enabling the gate has no effect and all histograms stay classic-only. Since the gat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142908)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142907: Only relabel pods of duplicate histories in daemonset history dedup


**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

`dedupCurHistories` cleans up duplicate ControllerRevisions, i.e. histories whose
stored template is byte-identical to the DaemonSet's current template. Before
deleting a duplicate it relabels the affected pods to the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142907)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142906: validation-gen: support numeric enums for int32 and int64

#### What type of PR is this?
/kind feature
/kind api-change

#### What this PR does / why we need it:
Adds int32 and int64 numeric enum support to validation-gen and validate.Enum.

#### Which issue(s) this PR is related to:
Ref: #141506

#### Special notes for your reviewer:
None.

##...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142906)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142905: client-go: use any resource version for initial WatchList requests

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When the API server watch cache temporarily falls behind etcd, the two reflector startup paths behave differently:

* The legacy LIST/WATCH path starts with `resourceVersion="0"`, so it can read the cache's current s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142905)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142904: Watchcache check progress

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142904)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142903: Add optional string payload to required/forbidden

Now we can do `+k8s:forbidden="reason"`


/kind feature

```release-note
NONE
```

#### AI usage disclosure:

YES - Gemini wrote the bulk of it and I reviewed and tweaked.


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142903)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142902: Deployment rollouts fail to report timeouts after old ReplicaSet scale-down errors

Deployment rollouts fail to report timeouts after old ReplicaSet scale-down errors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142902)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142901: ktesting: skip TestParallel when GOMAXPROCS < 3 and import format in test

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Skip TestParallel when `GOMAXPROCS < 3`, and import `k8s.io/ktesting/format` in its test package.

Hitting some downstream CI issues.

#### Which issue(s) this PR fixes:

Fixes #N/A

#### Special notes ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142901)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10411: vpa: expose updater strategy in Helm chart

/kind cleanup
/area helm-charts

#### What this PR does
Adds an `updater.strategy` value so the Updater Deployment's rollout strategy can be configured, matching `admissionController.strategy` and `recommender.strategy` (added in #10288).

Defaults to `{}` so rendered output is unchanged unless the ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10411)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10410: VPA recommender: retry OOM events whose pod is not in the cluster state yet

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The recommender **drops an OOM observation whenever the pod is not in the cluster state yet** — which is exactly the case in #10356, a pod evicted for OOM and recreated before the recommender has listed it (`updateMo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10410)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57985: [fr] Add reference/networking/ports-and-protocols.md

French translation of the Ports and Protocols reference page.

I checked the ports on a kind cluster : 6443, 2379-2380, 10250, 10257 and 10259 on the control plane, 10256 for kube-proxy, and a NodePort outside 30000-32767 is refused.

Translated with AI assistance, reviewed by me (native French spea...

🔗 [Link](https://github.com/kubernetes/website/pull/57985)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38037: migrate to AR staging registry and harden the GCB configuration

It's taking about 26 minutes to build a full kube-cross image with all the 4 architectures we support when we use the 44-core box.

Required for https://github.com/kubernetes/release/pull/4556
Infra created in https://github.com/kubernetes/k8s.io/pull/10046

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38037)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Continuous Integration
- build ARM64 releases on native runners [#466](https://github.com/containerd/overlaybd/pull/466) ([Lanzheng Liu](https://github.com/containerd/overlaybd/commit/42f700adf09b8f6436eae8bcbf477e00587afd8a))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-10
- Prerelease: Yes


---

*This content was automatically collected on 2026-10-11 03:54:10*
