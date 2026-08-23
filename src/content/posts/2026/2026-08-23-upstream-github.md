---
title: "Upstream Github - 2026-08-23"
description: "CNCF upstream activity from github"
pubDate: 2026-08-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "kind/cleanup", "sig/api-machinery", "area/api-validation", "kind/bug", "pr", "area/kubectl", "release-note", "size/S", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "sig/network", "size/L", "kind/api-change", "release-note-none", "sig/testing", "area/kubelet", "sig/node", "area/apiserver", "size/XS", "kind/flake", "cncf-cla: no", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/code-generation", "size/M", "do-not-merge/work-in-progress", "approved", "minikube", "area/vertical-pod-autoscaler", "autoscaler", "containerd", "area/snapshotters"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141532: [Declarative Validation] Track beta→stable graduation of validation rules

### What would you like to be added?

A tracking issue for the beta→stable graduation of declarative validation rules, per KEP-5073.

Every DV rule currently at beta carries `since: "1.37"` — there are no older ones:

```
$ grep -rho '+k8s:beta(since: "[0-9.]*")' staging/src/k8s.io/api staging/src/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141532)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/kubernetes#141533: discovery: graduate declarative validation to stable

#### What type of PR is this?

/kind cleanup
/kind api-change

#### What this PR does / why we need it:

Graduates the `discovery` declarative validation rules from beta to stable and deletes the handwritten validation they replace, per KEP-5073.

The rules have been at beta since 1.37 (`+k8s:beta(s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141533)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10176: VPA: fix capping recommendations to limits when using RequestsOnly

#### What type of PR is this?

/kind bug

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10176)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10175: VPA: test multi VPA behavior in VPA updater


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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10175)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#57126: [ko] Update content/ko/docs/setup/best-practices/node-conformance.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/best-practices/node-conformance.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/best-practices/node-conformance/
- Eng...

🔗 [Link](https://github.com/kubernetes/website/issues/57126)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57125: [pt-br] Localize concepts/cluster-administration/swap-memory-management.md

The "Swap memory management" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/swap-memory-management/
Page path in the repository: content/en/docs/concepts/cluster-administration/swap-memory-management.md
...

🔗 [Link](https://github.com/kubernetes/website/issues/57125)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57124: [pt-br] Localize concepts/cluster-administration/observability.md

The "Observability" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/observability/
Page path in the repository: content/en/docs/concepts/cluster-administration/observability.md

---

A página "Observabili...

🔗 [Link](https://github.com/kubernetes/website/issues/57124)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57123: [pt-br] Localize concepts/cluster-administration/dra.md

The "Good practices for Dynamic Resource Allocation as a Cluster Admin" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/dra/
Page path in the repository: content/en/docs/concepts/cluster-administration/dr...

🔗 [Link](https://github.com/kubernetes/website/issues/57123)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57122: [pt-br] Localize concepts/scheduling-eviction/topology-spread-constraints.md

The "Pod Topology Spread Constraints" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/topology-spread-co...

🔗 [Link](https://github.com/kubernetes/website/issues/57122)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57121: [pt-br] Localize concepts/cluster-administration/node-autoscaling.md

The "Node Autoscaling" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/node-autoscaling/
Page path in the repository: content/en/docs/concepts/cluster-administration/node-autoscaling.md

---

A página "No...

🔗 [Link](https://github.com/kubernetes/website/issues/57121)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57120: [pt-br] Localize concepts/cluster-administration/coordinated-leader-election.md

The "Coordinated Leader Election" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/coordinated-leader-election/
Page path in the repository: content/en/docs/concepts/cluster-administration/coordinated-lead...

🔗 [Link](https://github.com/kubernetes/website/issues/57120)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57119: [pt-br] Localize concepts/cluster-administration/compatibility-version.md

The "Compatibility Version For Kubernetes Control Plane Components" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/cluster-administration/compatibility-version/
Page path in the repository: content/en/docs/concepts/cluster-adm...

🔗 [Link](https://github.com/kubernetes/website/issues/57119)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57118: [pt-br] Localize concepts/scheduling-eviction/workload-aware-preemption.md

The "Workload-Aware Preemption" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/workload-aware-preemption/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/workload-aware-preemption....

🔗 [Link](https://github.com/kubernetes/website/issues/57118)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57117: [pt-br] Localize concepts/scheduling-eviction/scheduler-perf-tuning.md

The "Scheduler Performance Tuning" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/scheduler-perf-tuning/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/scheduler-perf-tuning.md

-...

🔗 [Link](https://github.com/kubernetes/website/issues/57117)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57116: [pt-br] Localize concepts/scheduling-eviction/topology-aware-scheduling.md

The "Topology-Aware Workload Scheduling" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/topology-aware-scheduling/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/topology-aware-sc...

🔗 [Link](https://github.com/kubernetes/website/issues/57116)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57115: [pt-br] Localize concepts/scheduling-eviction/scheduling-framework.md

The "Scheduling Framework" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/scheduling-framework.md

---

A pági...

🔗 [Link](https://github.com/kubernetes/website/issues/57115)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57114: [pt-br] Localize concepts/scheduling-eviction/podgroup-scheduling.md

The "PodGroup Scheduling" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/podgroup-scheduling/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/podgroup-scheduling.md

---

A página ...

🔗 [Link](https://github.com/kubernetes/website/issues/57114)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57113: [pt-br] Localize concepts/scheduling-eviction/resource-bin-packing.md

The "Resource Bin Packing" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/resource-bin-packing/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/resource-bin-packing.md

---

A pági...

🔗 [Link](https://github.com/kubernetes/website/issues/57113)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57112: [pt-br] Localize concepts/scheduling-eviction/node-pressure-eviction.md

The "Node-pressure Eviction" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/node-pressure-eviction.md

---

...

🔗 [Link](https://github.com/kubernetes/website/issues/57112)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57111: [pt-br] Localize concepts/scheduling-eviction/dynamic-resource-allocation.md

The "Dynamic Resource Allocation" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/dynamic-resource-alloc...

🔗 [Link](https://github.com/kubernetes/website/issues/57111)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57110: [pt-br] Localize concepts/overview/working-with-objects/storage-version.md

The "Storage Versions" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/overview/working-with-objects/storage-version/
Page path in the repository: content/en/docs/concepts/overview/working-with-objects/storage-version.md

---

...

🔗 [Link](https://github.com/kubernetes/website/issues/57110)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57109: [pt-br] Localize concepts/scheduling-eviction/node-declared-features.md

The "Node Declared Features" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/node-declared-features/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/node-declared-features.md

---

...

🔗 [Link](https://github.com/kubernetes/website/issues/57109)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/website#57108: [pt-br] Localize concepts/scheduling-eviction/api-eviction.md

The "API-initiated Eviction" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/concepts/scheduling-eviction/api-eviction/
Page path in the repository: content/en/docs/concepts/scheduling-eviction/api-eviction.md

---

A página "API-initia...

🔗 [Link](https://github.com/kubernetes/website/issues/57108)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### kubernetes/kubernetes#141528: fake client-go: a deletion between List and Watch is lost, and the informer keeps the object forever

### What happened?

Follow-up to #135953, which was fixed by #135959 and #136143: a fake client no longer loses objects that are **created** between the reflector's `List` and its `Watch`, because `tracker.Watch` now replays stored objects whose resource version is newer than the one the `List` retu...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141528)

**Metadata:**
- Created: 2026-08-22
- Comments: 3
- State: open

### kubernetes/kubernetes#141534: kubectl explain: do not write output when rendering fails

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141534)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141531: kubelet: indicate failure threshold status in probe container events

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
When a probe fails in Kubernetes, a container event was previously emitted without indicating whether the `FailureThreshold` had been reached. Users and monitoring systems had no direct way of knowing whether a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141531)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141530: storage/testing: reset injected decode failures

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The shared delete tests inject a transform/decode failure into the store and leave it set. `RunTestDeleteExpectedTransformOrDecodeError` never clears it on any path, and `RunTestDeleteWithConflictAndMissingExpected...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141530)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141529: fix: reject Watch when deletion happened in the List→Watch window

A deletion between the reflector's List and its Watch was lost: the tracker
deleted the object and sent the Delete event to watchers that existed at that
moment, but a watcher registered later (via Watch) never learned about it.
Unlike a lost create (fixed by #135959, #136143), a lost delete is
irre...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141529)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141527: admissionregistration: mark ParamRef.parameterNotFoundAction as required in OpenAPI schema

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`ParamRef.parameterNotFoundAction` (used by both `ValidatingAdmissionPolicyBinding` and `MutatingAdmissionPolicyBinding`) has always been rejected by apiserver validation when omitted (`spec.paramR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141527)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23544: iso: Buildroot updates

This updates how we build the minikube ISO: move to Buildroot LTS 2025.02.16, fail fast when package sources cannot be downloaded, and pack the aarch64 image with xorriso so the ISO can be built and booted locally on Fedora.

Jenkins remains the path that ships the ISO. Fedora is for local develop...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23544)

**Metadata:**
- Created: 2026-08-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10174: VPA: support restricting evictions to OOM-ing Pods only

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

vertical-pod-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, add...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10174)

**Metadata:**
- Created: 2026-08-22
- Comments: 1
- State: open

### containerd/containerd#14015: Consuming mount-manager-dependent snapshotter mounts from direct snapshots API clients (e.g. dockerd)

## Problem

The erofs snapshotter returns mount sets ending in templated `format/*` mounts (`format/mkdir/overlay`, `format/bind`, and now `format/mkdir/bind` with `X-containerd.mkdir.path=...` options). These are only consumable through the mount manager. A direct client of the snapshots API that p...

🔗 [Link](https://github.com/containerd/containerd/issues/14015)

**Metadata:**
- Created: 2026-08-23
- Comments: 0
- State: open

### containerd/containerd#14010: metadata: daemon-wide stalls from unbounded proxy plugin calls (content GC, calls inside bolt transactions)

### Description

Several daemon-side calls into snapshotter / content-store plugins run while holding a shared lock, and on the GC paths they also drop the caller's cancellation. When one of these calls reaches a proxy plugin that stalls, the stuck RPC keeps the lock held and unrelated work across t...

🔗 [Link](https://github.com/containerd/containerd/issues/14010)

**Metadata:**
- Created: 2026-08-22
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-23 01:09:22*
