---
title: "Upstream Github - 2026-10-24"
description: "CNCF upstream activity from github"
pubDate: 2026-10-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "git-sync", "issue", "kind/bug", "sig/scheduling", "sig/node", "needs-triage", "kind/feature", "needs-sig", "pr", "area/kubelet", "sig/storage", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "kind/cleanup", "sig/cluster-lifecycle", "size/XL", "release-note-none", "area/kubeadm", "area/apiserver", "sig/api-machinery", "kind/api-change", "area/code-generation", "sig/cloud-provider", "ok-to-test", "approved", "sig/instrumentation", "area/stable-metrics", "size/M", "wg/workload-aware-scheduling", "area/test", "sig/network", "sig/testing", "kind/failing-test", "do-not-merge/release-note-label-needed", "needs-rebase", "size/XXL", "do-not-merge/work-in-progress", "wg/device-management", "sig/auth", "area/kube-proxy", "lgtm", "size/S", "prometheus", "procfs", "containerd", "nri", "cncf", "kind/docs", "toc", "triage/valid", "tag/infrastructure", "tag/security-and-compliance", "needs-group", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143348: DRA: add named CEL variables to device selectors (KEP-5259)

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143348)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/git-sync: v4.8.0

v4.8.0

## What's Changed
* [Feat] Pre exechook by @Mohamed-elg in https://github.com/kubernetes/git-sync/pull/990
* Don't set safe.dir=* in main app by @thockin in https://github.com/kubernetes/git-sync/pull/993
* Fix panic when git config contains a key without a value by @LemonCondor in https://github.com/kubernetes/git-sync/pull/1006
* Don't print env-supplied secrets in flag usage by @locker95 in https://github.com/kubernetes/git-sync/pull/1004

## New Contributors
* @Mohamed-elg m...

🔗 [Link](https://github.com/kubernetes/git-sync/releases/tag/v4.8.0)

**Metadata:**
- Version: v4.8.0
- Published: 2026-10-24
- Prerelease: No

### kubernetes/kubernetes#143361: NodeResourcesFit scorer ignores PodLevelResources and in-place resize feature gates

### What happened?

The `NodeResourcesFit` plugin builds its `resourceAllocationScorer` (used for the `LeastAllocated`, `MostAllocated` and `RequestedToCapacityRatio` strategies) in `NewFit`. It only propagates `EnableDRAExtendedResource` to the scorer. `enablePodLevelResources`, `enableInPlacePodVe...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143361)

**Metadata:**
- Created: 2026-10-23
- Comments: 1
- State: open

### kubernetes/kubernetes#143350: DRA:currently lacks a scoring logic for devices

### What would you like to be added?

Currently, DRA lacks a mechanism for scoring or ranking devices, which makes it impossible to implement device selection strategies such as "binpack" or "spread." After carefully reviewing the DRA feature code, I have developed a preliminary solution to address ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143350)

**Metadata:**
- Created: 2026-10-23
- Comments: 3
- State: open

### kubernetes/kubernetes#143363: [kubelet] run DSW populator removal in its own loop

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The DSW populator runs `findAndAddNewPods` and then `findAndRemoveDeletedPods` in one loop. `findAndAddNewPods` fetches PVCs and PVs from the API server without a client timeout. When the API server hangs, one ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143363)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143362: kubeadm: increase ut coverage for preflight/check

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143362)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143360: Enable mutex profiling when --contention-profiling is set

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143360)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143359: Add runtime container type label & report statuses of missing containers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

1. Add a container type runtime label: `io.kubernetes.container.type = regular|init|ephemeral`
2. Surface a container status for containers that are labeled for a pod but not in it's spec.

This PR is prework for...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143359)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143357: Promote admission webhook rejection_count and request_total to BETA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promote `apiserver_admission_webhook_rejection_count` and `apiserver_admission_webhook_request_total` to BETA

#### Which issue(s) this PR is related to:

Split from #136196
Related #136304

#### Spe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143357)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143356: kubeadm: retry etcd member listing on transient errors

#### What type of PR is this?

/kind bug
/area kubeadm
/sig cluster-lifecycle

#### What this PR does / why we need it:

`Client.listMembers` was meant to retry `MemberList` until the `EtcdAPICall` timeout, but its poll condition returned the error, which makes `wait.PollUntilContextTimeout` stop ri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143356)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143355:  kubelet: cancel the running sync of a pod orphaned by housekeeping

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a static pod manifest changes after a restarted kubelet has read it but before the API source is ready, `deletePod` skips the kill ("skipping delete because sources aren't ready yet"). Housekeeping later marks t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143355)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143354: Unify PodGroup and CompositePodGroup handling in queue and plugins

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:
Reduces code duplication between `PodGroup` and `CompositePodGroup` handling in `kube-scheduler` without any other impact.

1. **Scheduling queue:** Consolida...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143354)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143353: Pass initial events through input channel preparing for moving the initial event fetching to separate goroutine

/kind feature


```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143353)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143351: amend the topology hints test to work correctly with clusters that span multiple zones

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143351)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143349: Preserve inter-pod affinity state during pod group preemption

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

During pod group preemption, all candidate victims are removed before `PreFilter` runs.

If the incoming pod has no affinity constraints, `InterPodAffinity.PreFilter` may return `Skip` because the remaining snapshot ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143349)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143346: Keep external JWT signer available during graceful shutdown

# Keep external JWT signer available during graceful shutdown

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The external JWT signer currently uses the kube-apiserver signal context when it starts. The same context also controls the key sync loop and the gRPC co...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143346)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143345: Fix SSA field ownership conflict in RBAC ClusterRole/Role aggregation by adding `omitempty` to Rules JSON tags

#### What type of PR is this?
/kind bug
/kind api-change

#### What this PR does / why we need it:
This PR fixes an SSA (Server-Side Apply) field ownership conflict in RBAC ClusterRole/Role aggregation.

**Root cause:** The `Rules` field in `ClusterRole` and `Role` types was missing the `omitempty` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143345)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143340: kube-proxy: avoid missing the initial node topology update

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`NodeManager` starts and syncs the Node informer before kube-proxy creates its topology config. This means the informer is already running when `NewNodeTopologyConfig` adds its event handler.

Previously, kub...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143340)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143337: pkg/features: remove GA feature gate SystemdWatchdog

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA `SystemdWatchdog` feature gate.

The gate graduated to GA and was locked to default in 1.35. Under the three-release emulation window (`minRemovalVer = specVer.AddMinor(3)`), 1.38 is the first rele...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143337)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143336: pkg/features: remove deprecated feature gate AllowOverwriteTerminationGracePeriodSeconds

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the deprecated `AllowOverwriteTerminationGracePeriodSeconds` feature gate.

The gate was deprecated in 1.32 and locked to false in 1.35. Under the three-release emulation window (`minRemovalVer = specVer....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143336)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143335: pkg/features: remove GA feature gate ExecProbeTimeout

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA `ExecProbeTimeout` feature gate.

The gate graduated to GA in 1.20 and was locked to default in 1.35. Under the three-release emulation window (`minRemovalVer = specVer.AddMinor(3)`), 1.38 is the f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143335)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### prometheus/procfs: v0.23.0

## What's Changed
* procfs: fix parseStat comment and reuse line variable by @zanarellidev in https://github.com/prometheus/procfs/pull/855
* Fix bcache data unit by @SuperQ in https://github.com/prometheus/procfs/pull/871
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/procfs/pull/867
* Improve linting by @SuperQ in https://github.com/prometheus/procfs/pull/865
* fix: Preserve the final environment entry without a trailing NUL by @gerardre...

🔗 [Link](https://github.com/prometheus/procfs/releases/tag/v0.23.0)

**Metadata:**
- Version: v0.23.0
- Published: 2026-10-23
- Prerelease: No

### containerd/nri: v0.12.5

## What's Changed
* minor[version.go]: use ParseUint instead of ParseInt by @tariq1890 in https://github.com/containerd/nri/pull/334
* multiplex: reject frames with oversized payload length by @pandaWall in https://github.com/containerd/nri/pull/327
* adaptation: do not relay requests to a plugin whose connection is closed by @aojea in https://github.com/containerd/nri/pull/338


**Full Changelog**: https://github.com/containerd/nri/compare/v0.12.4...v0.12.5

🔗 [Link](https://github.com/containerd/nri/releases/tag/v0.12.5)

**Metadata:**
- Version: v0.12.5
- Published: 2026-10-23
- Prerelease: No

### cncf/toc#2345: fix: repair broken markdown links

🔗 [Link](https://github.com/cncf/toc/pull/2345)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2343: fix: update meeting notes links

🔗 [Link](https://github.com/cncf/toc/pull/2343)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2342: fix: update meeting notes URL for TAG Infrastructure

🔗 [Link](https://github.com/cncf/toc/pull/2342)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-24 03:13:22*
