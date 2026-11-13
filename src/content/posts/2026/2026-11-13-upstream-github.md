---
title: "Upstream Github - 2026-11-13"
description: "CNCF upstream activity from github"
pubDate: 2026-11-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/scheduling", "kind/feature", "pr", "release-note", "size/M", "approved", "cncf-cla: yes", "sig/instrumentation", "sig/architecture", "needs-priority", "kind/regression", "kind/cleanup", "area/apiserver", "sig/api-machinery", "size/L", "needs-ok-to-test", "area/stable-metrics", "area/test", "lgtm", "release-note-none", "sig/testing", "kind/api-change", "sig/apps", "area/api-validation", "sig/node", "size/XS", "size/S", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "do-not-merge/hold", "area/kubelet", "sig/auth", "priority/backlog", "ok-to-test", "triage/accepted", "area/kubectl", "sig/cli", "kind/flake", "needs-rebase", "size/XXL", "do-not-merge/work-in-progress", "sig/network", "area/kube-proxy", "wg/device-management", "priority/important-soon", "do-not-merge/invalid-commit-message", "kube-state-metrics", "area/cluster-autoscaler", "area/provider/aws", "kind/dependency", "autoscaler", "area/vertical-pod-autoscaler", "area/helm-charts", "language/en", "website", "perf-tests", "area/jobs", "area/config", "test-infra", "cloud-provider-gcp", "prometheus", "release", "common", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10678: VPA: add new TargetHigherThanRequestsAndOOM eviction requirement

#### What type of PR is this?

/kind feature
/kind api-change

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10678)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144106: scheduler: DRA extended resource scoring uses stale device-match and node-match caches (never invalidated, wrong capacity until restart)

## What happened?

/kind bug
/sig scheduling
/sig node
/area kube-scheduler
/wg device-management

The `NodeResourcesFit` scoring path for DRA-backed extended resources uses two persistent `sync.Map` caches in `pkg/scheduler/framework/plugins/noderesources/resource_allocation.go`.

Neither cache acc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144106)

**Metadata:**
- Created: 2026-11-13
- Comments: 3
- State: open

### kubernetes/kubernetes#144100: Allow five levels in PodGroup hierarchies for DisaggregatedSet

### What would you like to be added?

Could we increase the maximum PodGroup / CompositePodGroup hierarchy depth from **4 to 5** for DisaggregatedSet?

![DisaggregatedSet hierarchy, including the green all-slices CompositePodGroup](https://github.com/user-attachments/assets/499a2755-07f3-4cfe-97a2-8...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144100)

**Metadata:**
- Created: 2026-11-13
- Comments: 1
- State: open

### kubernetes/kubernetes#144105: component-base/metrics: populate DefBuckets when Buckets is empty and NativeHistograms is enabled

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

Populates `opts.Buckets = prometheus.DefBuckets` in `(*HistogramOpts).toPromHistogramOpts()` when `internalmetrics.NativeHistogramsEnabled()` is true and `len(opts.Buckets) == 0`.

In `prometheus/cli...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144105)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144104: Promote `apiserver_request_filter_duration_seconds` and `apiserver_request_sli_duration_seconds` to BETA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144104)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144103: Fix flake

/kind cleanup
```release-note
NONE
```

Fixes flake https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-master/2120026096463253504

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144103)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144102: Migrate PVC.Spec.VolumeName to declarative validation

#### What type of PR is this?

/kind api-change
/sig api-machinery
/area api-validation

#### What this PR does / why we need it:

Migrates `PersistentVolumeClaim.Spec.VolumeName` set-once immutability from handwritten Go validation to declarative validation tags, as part of the "Good First Migratio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144102)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144101: test/e2e_node: remove CriticalPod feature label and mark NodeConformance

#### What type of PR is this?

/kind cleanup
/sig node
/area test

#### What this PR does / why we need it:

Removes the `CriticalPod` e2e `Feature` label and marks the test `NodeConformance`.

The `CriticalPod` tests check the kubelet's critical pod admission and preemption on a normal no...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144101)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144099: Send watch bookmark after 1 second on silent watch

Ensure that short watches on quiet resource will still get a bookmark about latest RV, so they break they will not fall behind. If watch sets a timeout they will get a bookmark just before the timeout, but not all watch set it and watch can break before timeout.

/kind feature

```release-note
Send ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144099)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144098: local-up-cluster: serviceaccount tokens ML-DSA keys

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144098)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144097: client-go/workqueue: add full jitter to ItemExponentialFailureRateLimiter



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144097)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144096: kubelet: reconcile partial failures configuring pod cgroups

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`cgroupCommon.Create` creates the pod cgroup via `manager.Apply(-1)` and then applies resource limits via `manager.Set`. Currently, `manager.Set` errors are logged and swallowed, and `SyncPod` skips `pcm.EnsureExis...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144096)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144095: update external mock signer to support ec + mldsa

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144095)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144093: kubelet: emit an OOMKilled event for OOM-killed containers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144093)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144092: cpumanager: report pod-level cpu alignment metrics under scope=pod

#### What type of PR is this?
/kind feature
/sig node

#### What this PR does / why we need it:
This PR introduces two things:
1. Moves the `physical_cpu` alignment counter into `updateMetricsOnAllocate` (resolves the **TODO** in `allocateForAdd`). It is now counted only when CPUs are actually alloc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144092)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144090: scheduler: requeue an updated pod once for all its events

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144090)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144087: kubectl: separate `proxy` flags from runtime options

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144087)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144085: Keep suspended Job validation tests before controller status

#### What type of PR is this?

/kind bug
/kind flake
/sig apps
/sig testing

#### What this PR does / why we need it:

Two suspended Job validation tests intend to update newly created Jobs before the controller sets status. Starting the controller races its status write against the immediate spec u...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144085)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144084: Parallelize independent RBAC bootstrap reconciliation

#### What type of PR is this?

/kind bug
/kind regression
/sig auth
/sig api-machinery

#### What this PR does / why we need it:

Reconcile independent bootstrap RBAC objects with at most four workers per phase, overlapping `watch-cache` freshness waits that otherwise accumulate during serial reconc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144084)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144083: [WIP] Use opportunistic batching in workload-aware preeemption

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
#142932 disabled opportunistic batching in DefaultPreemption's `PodGroupPostFilter`, so every pod of a preemptor group went through `RankNodes`, `Filter` and `Score` for all nodes. This PR removes that restriction ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144083)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144082: kube-proxy: strip PROXY protocol v2 header on service health checks

#### What type of PR is this?

/kind feature
/sig network

#### What this PR does / why we need it:

Some cloud load balancers terminate the client connection and open a new one to the backend, and one way to preserve the client IP is to enable PROXY protocol on the backend. Some of them cann...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144082)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144080: fix cross-wiring of pending and fresh allocation results in Reserve

/kind bug
/sig scheduling
/sig node
/wg device-management

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

`Filter` in the DynamicResources plugin assembled the per-claim allocation results by appending the reused *pending* results after the freshly computed ones:

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144080)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144078: APF: defer excess-queue removal until a lingering request's seats are released

### What happened?

`removeQueueIfEmptyLocked` in `staging/src/k8s.io/apiserver/pkg/util/flowcontrol/fairqueuing/queueset/queueset.go` decides whether an excess queue can be dropped by looking only at the queue's waiting and executing request lists:

```go
if len(qs.queues) > qs.qCfg.DesiredNumQueue...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144078)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3208: fix: reload a watched file when it becomes readable again

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

`watchFile` only reacts to writes, creates and symlink swaps of the watched file (the options config file, the custom resource state config file and the kubeconfig). If a write happens while the file cannot be rea...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3208)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3207: refactor(store): share resource limits/requests metric generation for pod containers

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

The generators for `kube_pod_container_resource_limits`, `kube_pod_container_resource_requests`, `kube_pod_init_container_resource_limits` and `kube_pod_init_container_resource_requests` were four near-identical c...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3207)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10679: Treat Terminating:Retained as a terminating lifecycle state in AWS

#### What type of PR is this?

/kind bug
/kind dependency
/area provider/aws

#### What this PR does / why we need it:

Instances in an ASG can go into the `Terminating:Retained` lifecycle state (for example, when a lifecycle hook with a retain action is used). Like the other terminating states, the...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10679)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59139: Fix resource health status feature gate link

fix the link for ResourceHealthStatus feature gate

🔗 [Link](https://github.com/kubernetes/website/pull/59139)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59138: Remove contiv from addon as it is archived

https://contivpp.io/ is inaccessible and contiv github organisation is archived https://github.com/contiv/ since Sep 2026

🔗 [Link](https://github.com/kubernetes/website/pull/59138)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4574: clusterloader2: Add support for Dual-stack and IPv6 probers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4574)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38284: karpenter: move jonathan-innis, tzneal, njtran to emeritus_approvers

Keeps `config/jobs/kubernetes-sigs/karpenter/OWNERS` in sync with kubernetes-sigs/karpenter `OWNERS_ALIASES` after kubernetes-sigs/karpenter#3599 (jonathan-innis), kubernetes-sigs/karpenter#3600 (tzneal), and kubernetes-sigs/karpenter#3601 (njtran), which move them to emeritus maintainers under the ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38284)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1446: metis: raise CNI RPC and scale-up wait timeouts to 90s/85s

The previous 10s client / 9s server deadlines were shorter than a dynamic scale-up round trip (daemon -> NodeNetworkConfig.Spec -> CCM reconcile -> GCE -> Status.PodCIDRs -> daemon watcher). The CCM alone bounds one reconcile at 60s, so the first pod to exhaust local capacity would reliably time out...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1446)

**Metadata:**
- Created: 2026-11-13
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.74.0

## What's Changed
* expfmt: add ABNF parser for OpenMetrics 2.0 by @bwplotka in https://github.com/prometheus/common/pull/1016
* build(deps): bump ossf/scorecard-action from 2.4.4 to 2.5.0 by @dependabot[bot] in https://github.com/prometheus/common/pull/1032
* build(deps): bump actions/upload-artifact from 7.0.1 to 7.0.2 by @dependabot[bot] in https://github.com/prometheus/common/pull/1033
* build(deps): bump golang.org/x/net from 0.61.0 to 0.62.0 in the golang-org-x group across 1 directory...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.74.0)

**Metadata:**
- Version: v0.74.0
- Published: 2026-11-12
- Prerelease: No

### containerd/containerd#14561: cri pull image failed unexpected commit digest xxxx, expected xxx failed precondition"

### Description

cri pull images failed many times   (after containerd is stopped while an image pull is in progress)
```
containerd[21775]: time="2026-11-12T18:01:36.993568469+08:00" level=error msg="PullImage \"xxxxxxx\" failed" error="rpc error: code = FailedPrecondition desc = failed to pull and...

🔗 [Link](https://github.com/containerd/containerd/issues/14561)

**Metadata:**
- Created: 2026-11-12
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-13 05:00:00*
