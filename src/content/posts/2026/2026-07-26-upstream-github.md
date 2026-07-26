---
title: "Upstream Github - 2026-07-26"
description: "CNCF upstream activity from github"
pubDate: 2026-07-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/feature", "needs-triage", "sig/scalability", "pr", "kind/bug", "sig/storage", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "priority/backlog", "kind/cleanup", "area/apiserver", "sig/api-machinery", "size/M", "release-note-none", "sig/network", "area/kubelet", "area/kubectl", "sig/cli", "lgtm", "size/XS", "ok-to-test", "size/S", "kind/flake", "kompose", "area/vertical-pod-autoscaler", "do-not-merge/invalid-commit-message", "autoscaler", "area/cluster-autoscaler", "area/provider/cluster-api", "do-not-merge/hold", "approved", "do-not-merge/work-in-progress", "do-not-merge/release-note-label-needed", "kind/api-change", "size/XL", "release", "cloud-provider-openstack", "sig/testing", "test-infra", "containerd", "area/runtime"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#140937: kubelet: support version emulation for CPU and Topology Manager policy options

### What would you like to be added?

The Kubelet configuration validation for CPU Manager (`CPUManagerPolicyOptions`) and Topology Manager (`TopologyManagerPolicyOptions`) should support Kubernetes version emulation through `CompatibilityVersion`.

Currently, policy options are validated against st...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140937)

**Metadata:**
- Created: 2026-07-25
- Comments: 5
- State: open

### kubernetes/kubernetes#140936: kubelet: serialized pod status sync causes unnecessary cross-pod serialization

### What would you like to be added?

The bottleneck in high throughput pod churn (> 5 pods / second / node) seems to be the status update from kubelet.  Other controllers rely on this update, so even if the container has started it is not necessarily visible externally.

There are low-hanging oppor...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140936)

**Metadata:**
- Created: 2026-07-25
- Comments: 1
- State: open

### kubernetes/kubernetes#140938: Fix emptyDir project quota leak on volume teardown

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When `LocalStorageCapacityIsolationFSQuotaMonitoring` is enabled, emptyDir volumes get a project quota assigned during `SetUp`, which writes an entry into `/etc/projects` and `/etc/projid`. Those entries were never r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140938)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140935: storage/cacher/consistency: export DiffDetail and NamespaceNameRV types

## Summary

Improve the watch-cache consistency checker by exporting the diff types and making consistency mismatch logs human-readable.

## Problem

The consistency checker logs `Digest.DiffDetail` when a cache mismatch is detected. Since `diffDetail` and `namespaceNameRV` were unexported typ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140935)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140933: util/net: skip IPv6 LLA with zone ID in getMatchingGlobalIP

#### What type of PR is this?

/kind bug
/sig network
/sig node
/area kubelet

#### What this PR does / why we need it:

On Linux, `net.Interface.Addrs()` returns IPv6 link-local addresses
with a zone ID appended to the interface name
(e.g. `fe80::1%eth3/64`). `ParseCIDRSloppy` cannot par...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140933)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140932: kubectl config: unify exit code of delete-cluster and delete-context

#### What type of PR is this?

/kind feature
/sig cli

#### What this PR does / why we need it:

`kubectl config delete-cluster` and `kubectl config delete-context`, when invoked without the required NAME argument, print the command help and exit `0`, while `kubectl config delete-user` returns a usa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140932)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140931: apidiff: ignore adding entirely new API groups

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adding the new Lifecycle API group caused apidiff to complain because this situation had not been encountered when setting up the initial set of allow rules and wasn't handled.

We don't need a CHANGELOG....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140931)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140930: client-go: add a benchmark for the watch event decode path

## What this PR does / why we need it

#129705 reports that the client-side watch decode path dominates kube-apiserver memory under high pod churn, backed by heap profiles from a large cluster. There was no in-tree benchmark covering that path, so the cost couldn't be measured locally or protected a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140930)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140929: kubelet: retry pod allocation checkpoint writes that fail to persist

## What this PR does / why we need it

I looked into the TODO tracked by #133538. `AddPod` only logged and dropped the error when `SetAllocatedResources` failed to persist the pod's allocation checkpoint, with a comment asking whether recovery was possible:

```go
if err := m.SetAllocatedResources(l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140929)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140928: Deflake TestReconstructedVolumeShouldUnmountSucceedAfterSetupFailed

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Deflakes `TestReconstructedVolumeShouldUnmountSucceedAfterSetupFailed`.

The test drives two explicit `reconciler.reconcile(ctx)` calls: the first starts the mount (forced to fail with `csiRPCError`), the second is...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140928)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kompose#2106: [BUG] go install github.com/kubernetes/kompose@latest is not working correctly

### Expected Behavior

It should be installed like other go binary.

### Actual Behavior

```console
yshngg@forge ~> go install github.com/kubernetes/kompose@latest
go: github.com/kubernetes/kompose@latest (in github.com/kubernetes/kompose@v1.38.0):
	The go.mod file for the module providing named pa...

🔗 [Link](https://github.com/kubernetes/kompose/issues/2106)

**Metadata:**
- Created: 2026-07-25
- Comments: 0
- State: open

### kubernetes/autoscaler#10060: VPA: lazily backfill checkpoints for VPAs newly tracked by a recommender

/kind bug

What this PR does / why we need it:

The VPA recommender only loads persisted VerticalPodAutoscalerCheckpoints
from storage once, at process startup (InitFromCheckpoints, called before
the RunOnce ticker loop starts). LoadVPAs, however, re-evaluates which
VPAs this recommender instance tr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10060)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10059: clusterapi: implement ForceDeleteNodes to bypass min size

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a node group has reached its minimum size and a node disappears on the
provider side (deleted out-of-band, or otherwise left unregistered), the
ClusterAPI provider can never remove it, so it is never replaced. T...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10059)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10057: Default to latest VPA release - 1.7.1

#### What type of PR is this?

/kind feature


#### What this PR does / why we need it:

Default to VPA 1.7.1

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is about ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10057)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10056: AEP-9970: implement per-VPA target percentiles

**What this PR does:** Implements AEP-9970 — adds `targetCPUPercentile` / `targetMemoryPercentile` to `ContainerResourcePolicy`, overriding the global `--target-cpu-percentile` / `--target-memory-percentile` flags per-container (target recommendation only; lower/upper bounds unchanged). Gated behind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10056)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10055: VPA: Add micro-benchmarks for recommender and admission-controller

#### What type of PR is this?

/kind feature
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

The VPA benchmark in `vertical-pod-autoscaler/test/benchmark` currently only collects step
latencies for the updater; there is no benchmarking coverage for the recommender or...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10055)

**Metadata:**
- Created: 2026-07-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-cloud-controller-manager-2.36.1

Openstack Cloud Controller Manager Helm Chart

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cloud-controller-manager-2.36.1)

**Metadata:**
- Version: openstack-cloud-controller-manager-2.36.1
- Published: 2026-07-25
- Prerelease: No

### kubernetes/test-infra#37544: Bug: Fix missing `Stdin` mapping for build-release script prompt in kubetest

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!-->

**What happened**:
There is a `TODO(fejta): FIX ME` in `kubetest/build.go`. When `kubetest` runs the `make release` comman...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37544)

**Metadata:**
- Created: 2026-07-25
- Comments: 1
- State: open

### kubernetes/test-infra#37541: Bug: Python 2 print statement causes SyntaxError in `gubernator/filters_test.py`

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!-->


**What happened**:
There is a legacy Python 2 `print` statement without parentheses in `gubernator/filters_test.py`. Beca...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37541)

**Metadata:**
- Created: 2026-07-25
- Comments: 1
- State: open

### containerd/containerd#13849: containerd-shim-runc-v2 remains alive with zero children after container PID 1 death, blocking all daemon API calls

## Description

`containerd-shim-runc-v2` enters a degenerate state when the container's PID 1 process dies (crash/OOM): the shim remains alive in `futex_wait_queue` with **zero child processes** and never emits a task-exit event. The Docker daemon considers the container "running", causing **all AP...

🔗 [Link](https://github.com/containerd/containerd/issues/13849)

**Metadata:**
- Created: 2026-07-25
- Comments: 3
- State: open

### containerd/containerd#13848: loadShims can hang forever at startup if a single leftover shim's Task.Delete never replies

## Title
containerd hangs forever on startup and never self-recovers once a node accumulates leftover task/shim state — self-perpetuating crash loop

## Environment
- Affected: containerd **2.2.2** (prod) and **2.3.1** (staging) — identical symptom on both.
- Kubernetes worker nodes, containerd as C...

🔗 [Link](https://github.com/containerd/containerd/issues/13848)

**Metadata:**
- Created: 2026-07-25
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-26 02:32:39*
