---
title: "Upstream Github - 2026-09-07"
description: "CNCF upstream activity from github"
pubDate: 2026-09-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "area/apiserver", "sig/api-machinery", "area/admission-control", "needs-triage", "pr", "area/kubelet", "sig/node", "release-note", "size/M", "cncf-cla: no", "needs-ok-to-test", "needs-priority", "kind/cleanup", "size/S", "sig/windows", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "sig/apps", "size/XS", "do-not-merge/work-in-progress", "size/L", "release-note-none", "sig/instrumentation", "ok-to-test", "do-not-merge/needs-kind", "sig/etcd", "sig/auth", "area/test", "sig/scheduling", "size/XL", "kind/feature", "sig/testing", "wg/device-management", "language/ko", "website", "area/localization", "approved", "minikube", "kube-state-metrics", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/azure", "kind/documentation", "kind/api-change", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10256: azure: consolidate per-instance azureCache maps

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The Azure cloud provider's `azureCache` kept two separate maps, `instanceToNodeGroup` and `instanceStates`, both keyed by the same `azureRef`, populated together and read together everywhere they are used. Nothin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10256)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141904: ResourceQuota admission admits over-quota requests when an unrelated quota's status update hits a Conflict

### What happened?

With two ResourceQuota objects in one namespace covering disjoint resources, a request that exceeds one quota can be **admitted** if, in the same admission batch, another request's status update on the *other* quota returns 409 Conflict.

https://github.com/kubernetes/kubernetes/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141904)

**Metadata:**
- Created: 2026-09-06
- Comments: 5
- State: open

### kubernetes/kubernetes#141908: kubelet: stop mutating the cached Node in OS admission

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`rejectPodAdmissionBasedOnOSSelector` takes the node's label map by reference and writes into it:

https://github.com/kubernetes/kubernetes/blob/b2ec8b6fefa/pkg/kubelet/lifecycle/predicate.go#L277-L285

```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141908)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141907: kubelet: use contextual logging in Windows-only files

#### What this PR does / why we need it

While working on #126379 I noticed pkg/kubelet is already listed as contextual in hack/logcheck.conf, but three calls in Windows-only files were still on the global klog functions. They had slipped through because golangci-lint on linux never compiles those f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141907)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141906: StatefulSet: require canonical pod names in podInOrdinalRange

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141906)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141905: [WIP] Fix ResourceQuota admission admitting denied requests after a conflict retry

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

- Guard the waiter re-resolution in `quotaEvaluator.checkQuotas` with `IsDefaultDeny`, matching the other re-resolution sites in the same function.

#### Which issue(s) this PR is related to:

Fixes #141904...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141905)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141903: Refine watch event dispatch latency metrics to distinguish storage bottlenecks

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141903)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141902: Migrate pkg/credentialprovider/plugin to contextual logging

#### What this PR does / why we need it

Continuing the contextual logging migration (#126379), this one takes care of the credential provider plugin package.

The tricky part is that `DockerKeyring.Lookup` doesn't take a context, so the ctx from kubelet's `EnsureImageExists` never reached the plugi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141902)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141901: scheduler_perf: add deleteNodes operation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141901)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141900: scheduler: report pending gang quorum in pod events

## What this PR does / why we need it

When GangScheduling rejects a Pod in `PreEnqueue` because the PodGroup has fewer pods than `minCount`, the Pod is gated before a scheduling cycle starts. As a result, users see `Pending` with no `PodScheduled` condition and no `FailedScheduling` Event, even tho...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141900)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141899: Add timeout for initial watch events to prevent goroutine leaks

#### What type of PR is this?
/kind bug
/sig api-machinery
#### What this PR does / why we need it: 
A watch request that asks for initial events (`sendInitialEvents=true`, or `resourceVersion=0`) is served by `cacheWatcher.processInterval`, which sends a snapshot of the current state to the wat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141899)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141898: fix(dra): mark invalid all-device allocation as per-node failure

#### What type of PR is this?

/kind bug

#### What this PR does

When a DRA request uses `AllocationMode: All` and the resource pool for a candidate node is incomplete or invalid, the allocator currently returns an error without marking it as a per-node allocation failure.

This change wrap...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141898)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141897: Fix/statefulset vct mismatch adopted pod

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141897)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141896: Record watcher queue latency in watch dispatch metrics

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141896)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141895: Record cacher queue latency in watch dispatch metrics

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141895)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57438: [ko] Translate content/en/blog/_posts/2026/kubernetes-v1-37-release/index.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57438)

**Metadata:**
- Created: 2026-09-06
- Comments: 1
- State: open

### kubernetes/website#57437: [ko] Update content/ko/docs/concepts/cluster-administration/system-logs.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57437)

**Metadata:**
- Created: 2026-09-06
- Comments: 1
- State: open

### kubernetes/minikube#23656: test: Cleanup functional tests

Work in progress on cleaning up the function tests.

🔗 [Link](https://github.com/kubernetes/minikube/pull/23656)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kube-state-metrics#3113: test: move shell tests to go (addressing a TODO comment)

**Why**

The e2e shell script had a todo comment suggesting bash based tests be moved to go tests 

https://github.com/kubernetes/kube-state-metrics/blob/3e685f693a83dee42ed3e5e175f3c1cd17648428/tests/e2e.sh#L252

Moving these to Go makes things more maintainable.

```sh
echo "access kube-state-metr...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3113)

**Metadata:**
- Created: 2026-09-06
- Comments: 1
- State: open

### kubernetes/autoscaler#10255: VPA: memory-aggregation-interval-count does not work as expected

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one of the following areas:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10255)

**Metadata:**
- Created: 2026-09-06
- Comments: 1
- State: open

### kubernetes/autoscaler#10254: VPA: document how to run the integration test suite

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

`hack/run-integration-locally.sh` (which runs the Ginkgo suite in `test/e2e/integration`) exists but isn't mentioned anywhere in `docs/development-and-testing.md`, unlike the e2e suite which has its own doc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10254)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10253: vpa: add TargetConflict status condition for VPAs targeting the same object


/kind feature

If multiple VPAs with an active update mode target the same workload, the admission controller and updater can end up acting on the same pod in different ways. One VPA can try an in-place resize while another evicts the pod.
This adds a `TargetConflict` status condition to make t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10253)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14121: disabled_plugins = ['io.containerd.grpc.v1.cri'] in v2.3.5

### Description

Folks - I'm testing `containerd` `v2.3.5` and Kubernetes `1.27.0`. In `containerd` release v2.3.5 `containerd config default` generates toml with `disabled_plugins = ['io.containerd.grpc.v1.cri']`. Kubelet then fails to start with:
```
kubelet[7826]: E0906 20:35:22.866810    7826 ru...

🔗 [Link](https://github.com/containerd/containerd/issues/14121)

**Metadata:**
- Created: 2026-09-07
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-07 02:49:26*
