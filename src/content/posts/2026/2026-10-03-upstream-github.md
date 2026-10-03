---
title: "Upstream Github - 2026-10-03"
description: "CNCF upstream activity from github"
pubDate: 2026-10-03
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "pr", "area/kubectl", "release-note", "size/S", "sig/cli", "cncf-cla: yes", "ok-to-test", "needs-priority", "size/L", "kind/feature", "kind/cleanup", "lgtm", "sig/api-machinery", "release-note-none", "approved", "size/XS", "sig/network", "area/kube-proxy", "size/M", "needs-ok-to-test", "size/XL", "area/test", "area/kubelet", "sig/testing", "do-not-merge/work-in-progress", "area/apiserver", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "do-not-merge/needs-sig", "kind/api-change", "sig/apps", "area/ipvs", "sig/scheduling", "wg/workload-aware-scheduling", "size/XXL", "kind/flake", "sig/instrumentation", "sig/architecture", "triage/accepted", "priority/important-longterm", "area/code-generation", "api-review", "sig/autoscaling", "language/fa", "area/localization", "website", "sig/docs", "language/en", "do-not-merge/hold", "kind/kep", "enhancements", "prometheus", "release", "containerd", "area/cri", "nerdctl", "nydus-snapshotter"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142629: KEP-6272: Add LoadBalancer ipMode Router (alpha)

#### What type of PR is this?

/kind feature
/kind api-change
/sig network
/area kube-proxy

#### What this PR does / why we need it:

This draft implements [KEP-6272](https://github.com/kubernetes/enhancements/issues/6272) — adds a new `LoadBalancerIPModeRouter` value for `status.loadBalan...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142629)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142623: scheduler: activate preemptor when last victim is already deleted

#### What type of PR is this?

/kind bug
/kind flake
/sig scheduling

#### What this PR does / why we need it:

In async preemption (KEP: https://github.com/kubernetes/enhancements/issues/4832), `PreEnqueue` only checks the last victim in `lastVictimsPendingPreemption` to determine when preemption h...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142623)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142619: KEP-3104: promote kuberc to stable

#### What type of PR is this?

/kind api-change
/kind feature

#### What this PR does / why we need it:

This PR promotes kuberc to stable:
- Introduce `kubectl.config.k8s.io/v1` (copied verbatim from v1beta1 w/o changes) and switch all the logic to use the new version.
- Start deprecation ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142619)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57861: Switch examples to KYAML

### Description

:warning: Draft PR :warning:

Switch some of our examples to KYAML. See [KEP-5295](https://www.kubernetes.dev/resources/keps/5295/); canonically at issue https://github.com/kubernetes/enhancements/issues/5295

This shouldn't merge until we, SIG Docs, have agreed how we'll do t...

🔗 [Link](https://github.com/kubernetes/website/pull/57861)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/enhancements#6455: Address review comments as follow-up to the KEP PR

Signed-off-by: Pannaga Rao Bhoja Ramamanohara

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description: Address follow-up review comments for adding Workload APIs to Deployment Controller.

<!-- link to the k/e...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6455)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.13.4 / 2026-09-29

- [SECURITY] Bump google.golang.org/grpc to v1.83.1 to fix HTTP/2 DATA frame fragmentation memory exhaustion (GO-2026-6348). #19834
- [SECURITY] UI: Update vulnerable npm dependencies. #19834
- [BUGFIX] Agent: Ignore unknown WAL record types to allow rolling back from newer versions. #19814
- [BUGFIX] Federation: Fix corruption of float native histograms. #19679
- [BUGFIX] Scrape: Fix failing scrapes of protobuf float histograms with zero sample, zero and bucket counts, such as the result of...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.4)

**Metadata:**
- Version: v3.13.4
- Published: 2026-10-02
- Prerelease: No

### containerd/containerd#14279: [SIG-Node]: KEP-6313 - Non Network Pods

### KEP/SIG-Node References

- KEP(s): 
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/6313
- KEP PR: https://github.com/kubernetes/enhancements/pull/6317
- K8s-Release: 1.38
- KEP-Owner: sig-network
- SIG-Node member liason:
- KEP-Shepherd: @MikeZappa87 


### What is...

🔗 [Link](https://github.com/containerd/containerd/issues/14279)

**Metadata:**
- Created: 2026-10-02
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#142616: In-place resize: pod cgroup memory.max stuck at 512Mi while spec/status show 10Gi and ResizeCompleted; container OOMKilled in crashloop

### What happened?


A VPA-managed pod (`InPlaceOrRecreate`, single container, memory `requests == limits`) was resized in place.
Pod Spec, status and events report 10Gi (`ResizeCompleted` for 1Gi -> 1920Mi -> 3328Mi -> 5888Mi -> 10Gi).
but the kernel enforces 512Mi on the pod cgroup. The container ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142616)

**Metadata:**
- Created: 2026-10-02
- Comments: 2
- State: open

### kubernetes/kubernetes#142640: Fix: kubectl create ingress panics on rules with extra equals signs

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142640)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142639: kuberc set: add validation for credential plugin allowlist paths

kuberc set:  add validation for credential plugin allowlist paths

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142639)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142638: client-go/tools/cache: derive package path dynamically in TestNameForHandler

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Derive the package import path dynamically in TestNameForHandler using reflect.TypeOf(mockHandler{}).PkgPath() instead of hardcoding "k8s.io/client-go/tools/cache." to ensure portability when vendored or compiled...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142638)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142637: apimachinery/recognizer: move recognizer_test.go out of separate testing package

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Move recognizer tests out of an isolated testing subpackage and into package recognizer_test to follow standard Go testing conventions.

#### Which issue(s) this PR is related to:

#### Special notes for your rev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142637)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142636: kube-proxy: consider node network availability in healthz node eligibility

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This PR ensures kube-proxy /healthz reports 503 when the node network is unavailable or out-of-service, checking the NetworkUnavailable condition as well as the network-unavailable and out-of-service taints. This preve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142636)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142635: Expand test coverage for Quantity.RoundUp

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This expands test cases to provide significantly more coverage of the RoundUp function, with a heavy focus on behavior across both the int64 and Dec representations of quantity.

As a reminder, `RoundUp(s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142635)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142634: WIP: kubelet: add bounded oom_score_adj tie-break for Burstable containers

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

On large-memory nodes, every Burstable container with a request smaller than capacity/1000 ends up with `oom_score_adj` 999, so the kernel picks between them by per-process RSS alone. In the case from the l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142634)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142633: Read WatchCacheStorage only through snapshot

/cc @mborsz @wojtek-t 
/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142633)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142632: feat: introduce DefaultContext(ctx) and deprecate NewContext, NewDefaultContext

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR introduces a new helper `DefaultContext(ctx context.Context)`.
And marks `NewContext` and `NewDefaultContext` as deprecated.

#### Which issue(s) this PR is related to:

Related #134940

####...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142632)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142631: watchlist latency traces 2026

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142631)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142630: test: trigger 5k experimental scale presubmit

Testing 5k experimental scale presubmit.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142630)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142628: Adjust default gang minCount for remaining Job work

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Adjusts a Job-managed gang's defaulted `minCount` as terminal work accumulates.

The runtime threshold remains at the original gang size while enough work remains, then decreases near the tail of the Job. For Indexed...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142628)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142626: scheduler: Refactor and add CPG tests for QueuedPodGroupInfo methods in framework/types_test.go

#### What type of PR is this?
/kind cleanup
/wg workload-aware-scheduling
/sig scheduling

#### What this PR does / why we need it:
This PR is an offspring created from splitting https://github.com/kubernetes/kubernetes/pull/140671

Expands and consolidates unit tests in [pkg/scheduler/frame...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142626)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142625: scheduler: Refactor and extend CPG tests in schedule_one_podgroup_test

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
This PR is an offspring created from splitting https://github.com/kubernetes/kubernetes/pull/140671

Consolidates `TestCPGHierarchicalScheduling_RecursiveAlgorith...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142625)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142622: Fix pod-level resources cgroup limit verification on the resize path - reapply

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Re-applies #140664 (reverted in #142567) and fixes the gap that made it break the PLR Pod InPlace Resize e2e tests #142268

##### Background: what #140664 changed

The shared cgroup helpers `VerifyContainer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142622)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142620: component-base/metrics/testutil: compute quantiles from native histograms

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

HistogramVec.Quantile() and Histogram.Quantile() only looked at the classic, fixed-size histogram buckets. Since native histograms are beta since v1.37 and already dual-exposed, observations are also availa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142620)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142615: hpa: fix wrong metric label for Object/AverageValue in HPA status

What type of PR is this?
/kind bug

What this PR does:
In the AverageValue branch of computeStatusForObjectMetric, the metric name was built using the external metric format string — a copy-paste from computeStatusForExternalMetric:

// before (wrong)
`fmt.Sprintf("external metric %s(%+v)", m...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142615)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57860: [fa] Translate content/en/docs/setup/production-environment/tools/kubeadm/_index.md into Persian

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/tools/kubeadm/_index.md` into Persian

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/

**Why is this needed**

This page is...

🔗 [Link](https://github.com/kubernetes/website/issues/57860)

**Metadata:**
- Created: 2026-10-02
- Comments: 1
- State: open

### kubernetes/website#57856: content: Add new kubelet dependency for userns custom ranges

The kubelet was changed recently to be compiled statically, in this PR:

	https://github.com/kubernetes/kubernetes/pull/135870

After that PR, the kubelet uses `getent` to look for users. Let's document that now `getent` is a requirement to make custom ranges now.

cc @dims 

<!--
 Hello!
...

🔗 [Link](https://github.com/kubernetes/website/pull/57856)

**Metadata:**
- Created: 2026-10-02
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14278: should it be `size-offset` in line 301

### Description

In core/content/helpers.go, line 301, should it be `size - offset`, means we expect to read `size-offset` bytes from the section reader, rather than `size` bytes

<img width="1318" height="888" alt="Image" src="https://github.com/user-attachments/assets/ef7a4392-941d-4701-951b-bdc46...

🔗 [Link](https://github.com/containerd/containerd/issues/14278)

**Metadata:**
- Created: 2026-10-02
- Comments: 0
- State: open

### containerd/nerdctl: v2.4.1

## Changes

- `nerdctl cp`:
  - Fix incompatibility with tar 1.30-13.el8_10 (#5238)
- `nerdctl compose`:
  - Fix CDI support (#5236, thanks to @addemod)
  - Support `cgroup_parent` and `cgroup` service fields (#5230, thanks to @addemod)
- `nerdctl network`:
  - Fix port forwarding on Windows (#5225, thanks to @webdevsamran)
- `nerdctl-full`:
  - Update containerd (2.4.1), runc (1.5.2), BuildKit (0.33.1) (#5241)


Full changes: https://github.com/containerd/nerdctl/pulls?q=is%3Apr+st...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.4.1)

**Metadata:**
- Version: v2.4.1
- Published: 2026-10-02
- Prerelease: No

### containerd/nydus-snapshotter: Nydus Snapshotter v0.16.1 Release

## What's Changed
* [kind] Fix race in containerd restart ordering by @Fricounet in https://github.com/containerd/nydus-snapshotter/pull/802
* [converter] Use minio image from quay.io by @Fricounet in https://github.com/containerd/nydus-snapshotter/pull/801
* chore: fix govulncheck by bumping dependencies by @Fricounet in https://github.com/containerd/nydus-snapshotter/pull/800
* [daemonconfig] fsync tmp file and parent dir after atomic rename by @Fricounet in https://github.com/containerd/nydus...

🔗 [Link](https://github.com/containerd/nydus-snapshotter/releases/tag/v0.16.1)

**Metadata:**
- Version: v0.16.1
- Published: 2026-10-02
- Prerelease: No


---

*This content was automatically collected on 2026-10-03 03:45:09*
