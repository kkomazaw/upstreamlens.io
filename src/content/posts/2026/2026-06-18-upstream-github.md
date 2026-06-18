---
title: "Upstream Github - 2026-06-18"
description: "CNCF upstream activity from github"
pubDate: 2026-06-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "kind/cleanup", "triage/needs-information", "pr", "area/kubelet", "sig/api-machinery", "needs-rebase", "size/XXL", "kind/api-change", "release-note-none", "sig/auth", "sig/apps", "cncf-cla: yes", "area/code-generation", "needs-priority", "sig/storage", "size/L", "needs-ok-to-test", "approved", "size/S", "kind/failing-test", "release-note", "size/M", "kind/feature", "api-review", "lgtm", "do-not-merge/hold", "wg/device-management", "area/test", "sig/network", "sig/testing", "ok-to-test", "area/e2e-test-framework", "area/apiserver", "priority/important-soon", "triage/accepted", "do-not-merge/work-in-progress", "do-not-merge/release-note-label-needed", "sig/scheduling", "size/XS", "kops", "test-infra", "area/jobs", "area/config", "sig/cli", "kubectl", "perf-tests", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "prometheus", "release", "common", "envoyproxy", "gateway", "cncf", "kind/initiative", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139831: [kubelet] Make AllocationManager the source of truth for pod allocations

This was the intention, but there are some outstanding issues today:

- Not all components that should handle allocated pods do.
    - Proposal: Expose pod getter functions on AllocationManager to get the allocated pod. Audit callers of PodManager to identify components that should be migrated to ca...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139831)

**Metadata:**
- Created: 2026-06-17
- Comments: 2
- State: open

### kubernetes/kubernetes#139824: Add cgroup_mount_mode and supports_cgroup_options to CRI API

#### What type of PR is this?
/kind api-change
/kind feature

#### What this PR does / why we need it:
Introduces CRI API changes required for [KEP 5474 (writable cgroups)](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/5474-enable-writable-cgroups#cri-api-changes).

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139824)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139821: RFC: client-go: type-safe informers and indexers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

All code using the result of the generated client-go Informer() methods (a cache.SharedIndexInformer) constantly has to do type casts from "any" to the actual type of the objects managed by the informer.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139821)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.5.4 / 2026-06-17

This release fixes multiple security issues.

- [SECURITY] STACKIT SD: Fix secrets being exposed in plaintext via `/-/config` endpoint. Thanks to @August829 and @Phaxma for reporting. GHSA-39j6-789q-qxvh #18650
- [SECURITY] Dependencies: Bump `golang.org/x/net` to v0.55.0 and OpenTelemetry to v1.43.0 to fix reported CVEs (GO-2026-5026, GO-2026-4918, GO-2026-4985). #18934
- [SECURITY] UI: Bump mantine-ui dependencies (`react-router-dom`, `vitest`, `vite`, `postcss`) to their patched versions ...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.5.4)

**Metadata:**
- Version: v3.5.4
- Published: 2026-06-17
- Prerelease: No

## Updates

### kubernetes/kubernetes#139833: [kubelet] SyncKnownPods should exclude terminated pods from the workers set

`SyncKnownPods` should exclude terminated pods from the workers set, which ensures running runtime pods associated with a terminated pod get cleaned up.

https://github.com/kubernetes/kubernetes/blob/ea231e60e7616f820c544bedc6074f68aa80828c/pkg/kubelet/kubelet_pods.go#L1235

xref https://github.com/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139833)

**Metadata:**
- Created: 2026-06-18
- Comments: 1
- State: open

### kubernetes/kubernetes#139832: [kubelet] Calling UpdatePod on an untracked but terminated pod should mark it as terminated, not terminating

The first call to `UpdatePod` for a failed (rejected) pod sets `terminatingAt` but doesn't set `termitatedAt` because we need to run `SyncTerminatingPod` to clean up:

https://github.com/kubernetes/kubernetes/blob/22e92c6a95c92329578154736a1e688f5ec35c87/pkg/kubelet/pod_workers.go#L803-L812

However...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139832)

**Metadata:**
- Created: 2026-06-17
- Comments: 1
- State: open

### kubernetes/kubernetes#139830: [kubelet] UpdatePod PodPhase race condition

Pod Workers is looking at the status of the pod in updates: https://github.com/kubernetes/kubernetes/blob/22e92c6a95c92329578154736a1e688f5ec35c87/pkg/kubelet/pod_workers.go#L793

The problem is that in several request paths this is the PodStatus as read from the API server, which might skew from th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139830)

**Metadata:**
- Created: 2026-06-17
- Comments: 1
- State: open

### kubernetes/kubernetes#139823: kubelet memory growth: `startPodSync` `context` memory leak on every `SyncPod`

### What happened?

On a single-node cluster of `1.36.0-do.1` with 8-day uptime, `kubelet` process memory grows holding almost a million cancelable contexts:

```
File: kubelet
Build ID: 5641c13549f2cbf23808dc5e3e920b0b6192b07d
Type: inuse_objects
Time: 2026-06-17 11:47:24 EDT
Showing nodes accounti...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139823)

**Metadata:**
- Created: 2026-06-17
- Comments: 2
- State: open

### kubernetes/kubernetes#139818: CRI-O runtime: unexpectedly-high CPU utilisation

### What happened?

I encounter unexpectedly high CPU utilisation (sitting around 10-15% as reported by `top`) in a Kubernetes cluster using CRI-O as the container runtime.

Although the desired outcome is for the cluster to manage multiple deployments using a network fabric (CNI), the high-CPU cond...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139818)

**Metadata:**
- Created: 2026-06-17
- Comments: 5
- State: open

### kubernetes/kubernetes#139829: Memory-identity already identical types in admissionregistration, authentication and core

Builds on https://github.com/kubernetes/kubernetes/pull/139758

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Chip away at making internal types memory-identical with the preferred storage version as prop...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139829)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139828: Memory-identity field reorders for admissionregistration, batch, core and storage

Builds on https://github.com/kubernetes/kubernetes/pull/139758

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Chip away at making internal types memory-identical with the preferred storage version as proposed in https://github.com/kubernetes/enhancem...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139828)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139827: perf(pleg): parallelize updateCache in GenericPLEG.Relist

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

This PR parallelizes per-pod reconciliation inside `GenericPLEG.Relist` in `pkg/kubelet/pleg/generic.go`. The previous implementation called `g.reconcilePodRecord` sequentially for every pod in `g.podRecords`; the new...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139827)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139826: Improve same-version fast return for SSA

#### What type of PR is this?

/kind cleanup


#### What this PR does / why we need it:

`versionConverter.Convert` has always returned the input object when the target version is the same as the input version. But only *after* a conversion from a `TypedObject` to Kubernetes object, which is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139826)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139825: Fix dangling goroutine in mutation detector edge case

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139825)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139822: policy: enable commentstart kube-api-linter rule

Enables the `commentstart` kube-api-linter (KAL) rule for the `policy` API group by removing it from the rule's exclusion list in `hack/kube-api-linter/exceptions.yaml` and updating the field godoc comments in `policy/v1` and `policy/v1beta1` to start with the serialized (JSON) field name, as the ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139822)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139819: test/e2e/network: fix hostNetwork tests broken by --hostname-override

## What this fixes

Two e2e tests have been flaking on any cluster that sets `--hostname-override` on kubelet (DigitalOcean/kops uses the droplet IP; some AWS+kops setups use the EC2 instance ID):

- `[sig-network] Networking Granular Checks: Services should function for service endpoints using host...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139819)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139815: Merge functions to update storage and update snapshot tests

/kind cleanup

```release-note
NONE
```

/cc @michaelasp @Jefftree @p0lyn0mial @AwesomePatrol 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139815)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139814: Fix DRA allocator widening config scoped to subrequests

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

The structured DRA allocator post-processes each claim's resolved configs and
clears `DeviceAllocationConfiguration.Requests` to `nil` when a config applies
to every request, taking advantage of the "empty Requ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139814)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139812: PoC: Add UserValidationRules to AuthenticationConfiguration

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139812)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139807: kubelet: fix kubepods cgroup cpu.weight scaling on high-core cgroupv2…

## What this PR does / why we need it

On cgroupv2 systems, `kubepods.slice` cpu.weight is derived from
absolute nodeAllocatable milliCPU, which scales linearly with core
count. This causes `kubepods.slice` to grossly outcompete `system.slice`
and other top-level slices for CPU on high-core mac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139807)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139805: WIP: scheduler_perf: create new pod immediately in "steady state"

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The steady state pod creation test cases do not keep the scheduler 100% busy, leading to a measured pod scheduling rate which is partly influence by how quickly new pods get created. This is not necessarily...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139805)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139802: storage/cacher/watch_cache: rename watchCacheStorage.SnapshotLocked to StoreLocked

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139802)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18483: e2e: Skip ImageVolume tests on COS 121

COS 121 is pinned to containerd 2.0.X:

https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m121

Whereas newer COS 125 uses containerd 2.1.X:

https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125

For the same reason we skip this test on Debian 11...

🔗 [Link](https://github.com/kubernetes/kops/pull/18483)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37286: prow.k8s.io is not merging PRs reliably

See: https://kubernetes.slack.com/archives/C09QZ4DQB/p1781628001783129

I haven't had much time myself, but I looked more today and there are a ton of 502 gateway errors in tide (the merge robot) logs.

Probably an issue with ghproxy or github ...

Prow was last updated in prow.k8s.io ~2w ago: https...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37286)

**Metadata:**
- Created: 2026-06-17
- Comments: 6
- State: open

### kubernetes/test-infra#37284: [kueue] Use cloudbuild-periodic.yaml config for periodics.

 - Use cloudbuild-periodic.yaml config for periodics.
 - Set alert email configuration

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37284)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1850: kubectl run -h does not display the --namespace flag

The help output for `kubectl run -h` does not explicitly list the `--namespace` flag among the command-specific options. This may lead users to believe the `kubectl run` does not support namespace, even though the flag is available as an inherited parent option from `kubectl`.

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1850)

**Metadata:**
- Created: 2026-06-17
- Comments: 3
- State: open

### kubernetes/perf-tests#4148: Add parse-cl2-metrics skill for extracting ClusterLoader2 artifacts

This PR introduces a foundational agent skill that provides deterministic rules for identifying and parsing ClusterLoader2 metrics and test results without causing Out-Of-Memory crashes. 

* **Delegates Downloads**: Explicitly instructs the agent to rely on the pre-existing `download-ci-artifacts`...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4148)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4146: cl2: allow multiple objects in one file

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4146)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4145: kube-prometheus: bump to latest version


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4145)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9829: InPlaceOrRecreate not always applies changes to cgroups

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
Vertical Pod Autoscaler
/area vertical-pod-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm ch...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9829)

**Metadata:**
- Created: 2026-06-17
- Comments: 2
- State: open

### kubernetes/autoscaler#9828: feat: Allow a scheduler to signal that an Unschedulable pod should not trigger scale-up (e.g. quota-limited pods)

**Description**

We maintain [KAI Scheduler](https://github.com/kai-scheduler/KAI-Scheduler), a custom Kubernetes scheduler. KAI has a concept of Queues, each with a resource quota. Pods are assigned to a Queue on creation, and a pod's resource requests are charged against its Queue's quota. When a ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9828)

**Metadata:**
- Created: 2026-06-17
- Comments: 2
- State: open

### kubernetes/autoscaler#9831: Bump the non-kubernetes group across 2 directories with 1 update

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [github.com/prometheus/common](https://github.com/prometheus/common).
Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [github.com/prometheus/common](https://github.com...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9831)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9830: Redistribute unclaimed quota to similar node groups on scale-up

#### What type of PR is this?


/kind bug



#### What this PR does / why we need it:
Followup to #9494, which made similar-node-group balancing respect resource quotas but enforced them after balancing, capping the total scale-up to the best-option group's quota up front and dropping any un...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9830)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.69.0

## What's Changed
* config: strip credentials on cross-host redirects by @roidelapluie in https://github.com/prometheus/common/pull/901
* Modernize Go by @SuperQ in https://github.com/prometheus/common/pull/919
* config: make isCrossHostRedirect sticky across the redirect chain by @roidelapluie in https://github.com/prometheus/common/pull/920
* config: check cross-host redirect before OAuth2 token fetch by @roidelapluie in https://github.com/prometheus/common/pull/921
* expfmt: fix nil poin...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.69.0)

**Metadata:**
- Version: v0.69.0
- Published: 2026-06-17
- Prerelease: No

### envoyproxy/gateway#9244: Global rate-limit: cost (hits_addend) dropped for shared:true rules since 1.8.0

## Description

On Envoy Gateway **1.8.x**, a `BackendTrafficPolicy` global rate-limit rule that is **both** `shared: true` **and** carries a `cost` (e.g. `cost.response.from: Metadata`) no longer applies the per-request cost. The shared counter increments by the rate-limit service's default (≈1 per...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9244)

**Metadata:**
- Created: 2026-06-18
- Comments: 1
- State: open

### cncf/toc#2200: [Initiative]: Reactivate CNCF Students Technical Community Group

### Name

CNCF Students Technical Community Group

### Short description

Provide virtual pre-kubecon events for students

### Responsible group

TOC

### Does the initiative belong to a subproject?

No

### Subproject name

_No response_

### Primary contact

@Cali0707

### Additional contacts

@em...

🔗 [Link](https://github.com/cncf/toc/issues/2200)

**Metadata:**
- Created: 2026-06-17
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-06-18 03:41:24*
