---
title: "Upstream Github - 2026-07-14"
description: "CNCF upstream activity from github"
pubDate: 2026-07-14
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/storage", "sig/scheduling", "sig/node", "priority/backlog", "sig/network", "pr", "area/test", "release-note", "size/M", "kind/feature", "cncf-cla: yes", "sig/testing", "needs-priority", "area/provider/gcp", "release-note-none", "sig/cloud-provider", "triage/accepted", "size/L", "kind/api-change", "sig/apps", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "kind/cleanup", "size/XS", "sig/auth", "needs-ok-to-test", "wg/structured-logging", "do-not-merge/cherry-pick-not-approved", "wg/device-management", "area/kubelet", "size/XL", "ok-to-test", "kind/flake", "do-not-merge/needs-kind", "sig/cluster-lifecycle", "size/S", "area/kubeadm", "lgtm", "do-not-merge/contains-merge-commits", "sig/api-machinery", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "size/XXL", "kind/documentation", "kube-state-metrics", "approved", "area/jobs", "area/config", "test-infra", "kind/kep", "enhancements", "do-not-merge/hold", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "node-problem-detector", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "release", "containerd", "area/runtime"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140488: KEP-3085 (PodReadyToStartContainers): promote to GA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

PR graduates the `PodReadyToStartContainersCondition` feature gate (KEP-3085) to GA and locks it to default-true in 1.37.

Also includes cleanup of gate-conditional test scaffolding and auto-generated fea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140488)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6234: KEP-5732: renamed metric scheduler_generated_placements_total

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6234)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140509: `exec` based readiness probes are ignored for terminating pods in v1.35

### What happened?

Readiness probes that use `exec` are skipped during pod termination for Kubernetes version `1.35`.

With `v1.35`, the readiness probe errors out with a context cancelled error. This leaves the `Ready` status as `True` until the pod is removed.

### What did you expect to happen?
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140509)

**Metadata:**
- Created: 2026-07-13
- Comments: 2
- State: open

### kubernetes/kubernetes#140502: The generated test scenarios for RWX volume types dont make sense

### What happened?

When RWX capability is enabled we are generating CSI test with following names:

```
External Storage [Driver: csi.vsphere.vmware.com] [Testpattern: Dynamic PV (ext4)] multiVolume [Slow] should concurrently access the single volume from pods on different node

```

But this does ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140502)

**Metadata:**
- Created: 2026-07-13
- Comments: 2
- State: open

### kubernetes/kubernetes#140496: Track assumed pods in a cycle to simplify gang scheduling feasibility check

## Context
In the Kubernetes scheduler, when scheduling a pod group (gang), we need to check if the gang's `MinCount` constraint can be met. This check is performed in the `PlacementFeasible` function of the `gangscheduling` plugin.

During a pod group scheduling cycle, we evaluate pods one by one. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140496)

**Metadata:**
- Created: 2026-07-13
- Comments: 3
- State: open

### kubernetes/kubernetes#140495: Kubelet allocates system-reserved CPU to pod when cpu-topology is hybrid

### What happened?

Following CPU topology (hybrid i.e. cores with id `0-28` are hyper-threaded and `32-43` are single-threaded) was given.
```
Intel(R) Core(TM) i7-14700
CPU(s):                28
On-line CPU(s) list:   0-27
Core(s) per socket:    20
Socket(s):             1
NUMA node(s):          1...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140495)

**Metadata:**
- Created: 2026-07-13
- Comments: 2
- State: open

### kubernetes/kubernetes#140493: Reinstate or drop `[Feature:PerformanceDNS]` tests

https://github.com/kubernetes/test-infra/pull/37410 points out that the `[Feature:PerformanceDNS]` tests are not currently being run anywhere.

We should either fix this so that there is some CI jobs that runs them, or else remove them if they are no longer useful.

/sig network
/priority backlog


🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140493)

**Metadata:**
- Created: 2026-07-13
- Comments: 1
- State: open

### kubernetes/kubernetes#140511: scheduler: register informers for client-go informer metrics

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Names the scheduler's informers so kube-scheduler exports the client-go informer metrics that kube-apiserver (#139968) exports.

Discovered while debugging scalability tests.

#### Which issue(s) this P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140511)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140508: drop gclb manifest and test Ingress/LB functionality with kind or kops

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140508)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140507: [WIP] Dv enable binding

Test PR, clone of #137747

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140507)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140506: certificates: use contextual panic handling in cleaners

#### What type of PR is this?

/kind cleanup
/sig auth
/wg structured-logging

#### What this PR does / why we need it

This updates the CSR and PodCertificateRequest cleaner controllers to use `utilruntime.HandleCrashWithContext(ctx)` instead of the non-contextual `utilruntime.HandleCrash()...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140506)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140505: Add e2e test for RWOP volume in multi-container pod

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds an e2e test to the `read-write-once-pod` storage test suite covering the case where a `ReadWriteOncePod` volume is mounted into a **single pod with multiple containers** sharing the same volume.

The...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140505)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140504: Automated cherry pick of #140435: DRA: key the structured allocator counter caches by PoolID

Cherry pick of #140435 on release-1.36.

#140435: DRA: key the structured allocator counter caches by PoolID

/kind bug

#### What this PR does / why we need it
Backports the counter-cache keying fix to release-1.36. `DRAPartitionableDevices` is beta and on by default in 1.36, and there the allocato...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140504)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140501: Add unit tests for CPUManager's state checkpoint

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

Enhancement of #140432.

This PR introduces unit tests for yet uncovered methods in CPU manager - mainly setters and getters.

#### Which issue(s) this PR is related to:
Enhances both #140432 #140314 
R...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140501)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140500: node: topologymanager: e2e: retry non-gu cpuset log check



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140500)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140499: node: topologymanager: e2e: retry non-gu cpuset log check

## Summary
- harden `runNonGuPodTest` in `topology_manager_test.go` against transient empty container logs
- replace the one-shot `MatchContainerOutput` assertion with `Eventually(...).Should(Succeed())`
- keep the expected cpuset regex and test intent unchanged

## Test plan
- [x] `go test -c ./tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140499)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140498: [CPUManager] Skip partially acquired cores during full cores allocation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140498)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140497: [WIP] bump coredns to v1.14.6

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140497)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140494: Remove flakey test



#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

https://github.com/kubernetes/kubernetes/pull/139980 changed pod group preemption behavior and this test is flaking now. This test was relying on pod group preemption calling scheduling algorithm after ea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140494)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140492: Remove old GKE kube-proxy upgrade e2e tests

#### What this PR does / why we need it:
Removes old GKE kube-proxy migration tests. These are testing something that happened in GKE a very long time ago, and we are not currently running them anywhere in our CI.

#### Which issue(s) this PR is related to:
Pointed out by https://github.com/kube...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140492)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140490: Fix OpenAPI spec for binding creation to return Status instead of Binding

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Fixes the OpenAPI specification for the binding creation endpoint to correctly specify that it returns a `v1.Status` object rather than a `v1.Binding` object.

#### Which issue(s) this PR is related to:
Fixes ht...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140490)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140485: Fix CRD stored version integration test flake

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

`TestStoragedVersionInClusterScopedCRDStatus` can delete its CRD while the REST storage and watch cache are still being recreated after a storage-version change. The finalizer can then receive `storage is (re)initi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140485)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140484: Close watch response body on negotiation failure

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
When Request.Watch receives a 200 response but cannot negotiate a stream decoder for the response content type, newStreamWatcher returns the negotiation error without closing the response body. This ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140484)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140482: test: promote pod-level resources to conformance and update helpers_test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140482)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140481: Subtract overhead from status resouces and allocated resources to avo…

…id double counting pod overhead

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140481)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9974: cluster-autoscaler does not honor AWS SDK service-specific endpoint environment variables


/area cluster-autoscaler

**Which component are you using?**:

cluster-autoscaler

**What version of the component are you using?**:

Component version:

- cluster-autoscaler v1.36.0
- cluster-autoscaler v1.35.0 (same behavior)

**What k8s version are you using (`kubectl version`)?**:

<details><su...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9974)

**Metadata:**
- Created: 2026-07-13
- Comments: 1
- State: open

### kubernetes/autoscaler#9983: update vultr provider

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Improves the Vultr cloud provider’s node group accounting and node lookup behavior, especially for slow-provisioning nodes such as bare metal instances.

The provider now preserves an accepted in-flight target si...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9983)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9982: Bump the patch-updates group across 2 directories with 3 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: [sigs.k8s.io/structured-merge-diff/v6](https://github.com/kubernetes-sigs/structured-merge-diff).
Bumps the patch-updates group with 2 updates in the /vertical-pod-autoscaler/test directory: [sigs.k8s.io/structure...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9982)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9981: Bump the kubernetes group across 2 directories with 1 update

Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [sigs.k8s.io/structured-merge-diff/v6](https://github.com/kubernetes-sigs/structured-merge-diff).
Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [sigs.k8s.io/structured-merge...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9981)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9980: Bump the non-kubernetes group across 2 directories with 16 updates

Bumps the non-kubernetes group with 6 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/prometheus/common](https://github.com/prometheus/common) | `0.69.0` | `0.70.0` |
| [github.com/go-openapi/jsonpointer](https://github.com/go-openapi/jso...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9980)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9979: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9979)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9978: Experimental mode: Karpenter simulation engine in Cluster Autoscaler

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Embedding Karpenter scheduler inside Cluster Autoscaler has two reasons:
- Prototype for Scheduler Driven Autoscaling (SDA): uncovering some problems that will emerge when moving from current per-node grou...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9978)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9977: Disable contextual logging in scheduler's code vendored by CA

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR mitigates performance overhead of contextual logging in cluster autoscaler by disabling contextual logging on the scheduler's side.

Currently, enabling contextual logging in CA causes massive dec...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9977)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9973: Update versioning schema overview table

Updated the versioning table to fix Chart version for Kubernetes 1.34.x and include Kubernetes 1.35.x and its corresponding CA and Chart versions.

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:

Fixes https:...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9973)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3035: Support count/aggregation of list elements in Custom Resource State metrics

**What would you like to be added:**

An aggregation/count capability for Custom Resource State (CRS) metrics that can **count the elements of a list-valued field**, optionally grouped by the value of a sub-field, and emit the result as a single aggregated `Gauge` — instead of emitting one time seri...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3035)

**Metadata:**
- Created: 2026-07-13
- Comments: 1
- State: open

### kubernetes/test-infra#37456: Update kubernetes-csi manual job configs from 1.28 to 1.35

csi-driver-host-path and external-provisioner manual job configs were still pinned to Kubernetes 1.28 (and one job was mislabeled 1-26) while the generated jobs already track 1.34/1.35/1.36. Bump the manual jobs to 1.35, the current latest stable version used by gen-jobs.sh.

Also updates CSI_PROW...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37456)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9714: Image promotion for cloud-provider-gcp v36.1.11 / v36.2.4

Image promotion for cloud-provider-gcp v36.1.11 / v36.2.4
This is an automated PR generated from `kpromo`
```
kpromo pr --fork hdp617 --project cloud-provider-gcp --tag v36.1.11 --tag v36.2.4
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9714)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector#1318: Fix invalid JSON in disk-log-message-filelog.json and enforce config format

config/disk-log-message-filelog.json contained trailing commas and could not be parsed since it was added, so NPD would fail to start with it.

- Fix the invalid JSON
- Add a test that every shipped `config/*.json` parses (catches trailing commas, UTF-8 BOMs, syntax errors) and is in the canonical f...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1318)

**Metadata:**
- Created: 2026-07-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4466: Bump softprops/action-gh-release from 3.0.1 to 3.0.2 in the actions group

Bumps the actions group with 1 update: [softprops/action-gh-release](https://github.com/softprops/action-gh-release).

Updates `softprops/action-gh-release` from 3.0.1 to 3.0.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/softprops/action-gh-release/rele...

🔗 [Link](https://github.com/kubernetes/release/pull/4466)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13784: Wrongly classified "leaked shim" causes leaked container on containerd restart

### Description

When running a pod with a container that has writable cgroups
restarting containerd can sometimes incorrectly claim the
shim has been leaked, and this leads to orphaning the shim
and container. Kubelet spawns a replacement (assuming your restart
policy is setup so) and both workload...

🔗 [Link](https://github.com/containerd/containerd/issues/13784)

**Metadata:**
- Created: 2026-07-13
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-07-14 02:12:05*
