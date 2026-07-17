---
title: "Upstream Github - 2026-07-17"
description: "CNCF upstream activity from github"
pubDate: 2026-07-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-triage", "website", "pr", "cncf-cla: yes", "size/L", "lgtm", "sig/docs", "language/zh", "area/localization", "area/kubelet", "sig/node", "kind/feature", "kind/bug", "wg/device-management", "sig/scheduling", "kind/flake", "sig/windows", "kind/failing-test", "sig/scalability", "sig/k8s-infra", "size/XXL", "do-not-merge/release-note-label-needed", "area/test", "size/XS", "release-note-none", "sig/testing", "needs-priority", "release-note", "size/XL", "needs-ok-to-test", "do-not-merge/cherry-pick-not-approved", "do-not-merge/work-in-progress", "area/apiserver", "sig/api-machinery", "size/M", "size/S", "api-review", "do-not-merge/needs-kind", "sig/apps", "kind/cleanup", "needs-rebase", "kind/api-change", "sig/auth", "area/code-generation", "sig/etcd", "approved", "area/jobs", "area/config", "test-infra", "area/artifacts", "area/registry.k8s.io", "k8s.io", "release", "git-sync", "area/cluster-autoscaler", "area/provider/oci", "autoscaler", "area/provider/vmware", "sig/cloud-provider", "cloud-provider-vsphere"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140665: Kep 6060/client go webhook token verification

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140665)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140659: Add 'allocated' Pod subresource

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The `/allocated` subresource was originally proposed as part of the (not yet merged) [Dynamic Containers KEP](https://github.com/kubernetes/enhancements/pull/6169):

> #### Allocated Subresource
> 
> A ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140659)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140634: [WIP] KEP-6012: Add support for CompositePodGroups in workload-aware preemption

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/6012

#### Special notes for your reviewer:

This is based on https://github.com/ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140634)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#56507: Using Minikube to Create a Cluster: Unclear paragraph.

https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/


Paragraph in question: A node is a VM or a physical computer that serves as a worker machine in a Kubernetes cluster. Each node has a Kubelet, which is an agent for managing the node and communicating with the Kub...

🔗 [Link](https://github.com/kubernetes/website/issues/56507)

**Metadata:**
- Created: 2026-07-16
- Comments: 1
- State: open

### kubernetes/website#56500: [zh-cn]sync configure-aggregation-layer

content/zh-cn/docs/tasks/extend-kubernetes/configure-aggregation-layer.md

🔗 [Link](https://github.com/kubernetes/website/pull/56500)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140656: Structured GPU device health reporting in device manager

**What would you like to be added?**

A structured, backward-compatible health signal in the device plugin API so Kubelet can distinguish DEGRADED (ECC error, thermal throttle, NVLink down) from UNHEALTHY (gone), and surface it via a metric + optional probe.

Today the device manager treats a device...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140656)

**Metadata:**
- Created: 2026-07-16
- Comments: 1
- State: open

### kubernetes/kubernetes#140653: kubelet preemption during init leaves pod stuck in Init:N/M with no recreation or cleanup

### What happened?

On a resource-constrained node, the kubelet preempted a lower-priority pod to admit a critical pod while it was still running init containers.

`kube-admission-5f9b89fdb5-bbpsp` in namespace `kube-admission` has been stuck at `Init:1/2` for days:

- `secret-init` completed (exit ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140653)

**Metadata:**
- Created: 2026-07-16
- Comments: 2
- State: open

### kubernetes/kubernetes#140650: DRA consumable capacity: validate as fully qualified name in capacity requests

### What happened?

https://github.com/kubernetes/kubernetes/blob/f3bfd08a118dcb02c1ff9bd3dd6437cb912f1d54/staging/src/k8s.io/api/resource/v1/types.go#L1437

is defined as `QualifiedName`. In practice, only fully qualified names actually work because the comparison cannot add a domain before compari...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140650)

**Metadata:**
- Created: 2026-07-16
- Comments: 1
- State: open

### kubernetes/kubernetes#140645: [Flaking test] TestSubmitPodGroupAlgortihmResult

### Failure cluster [936650e465be21222da9](https://go.k8s.io/triage#936650e465be21222da9)

##### Error text:
```
Failed
=== RUN   TestSubmitPodGroupAlgorithmResult/PodGroup_waiting_on_preemption_uses_nominating_info_instead_of_suggested_host_for_successfully_evaluated_pods
    schedule_one_podgroup_...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140645)

**Metadata:**
- Created: 2026-07-16
- Comments: 1
- State: open

### kubernetes/kubernetes#140644: [Flaking test] HugepageAwareMemoryReporting

### Failure cluster [ba1c9828ad56b49f24db](https://go.k8s.io/triage#ba1c9828ad56b49f24db)

##### Error text:
```
[FAILED] memory.available should NOT decrease by the hugepage reservation when feature gate is disabled
Expected
    <uint64>: 45608960
to be <
    <uint64>: 14680064
In [It] at: k8s.io/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140644)

**Metadata:**
- Created: 2026-07-16
- Comments: 1
- State: open

### kubernetes/kubernetes#140642: [Failing test] [sig-scalability] gce-master-scale-performance-5000 kubetest2.Up

### Which jobs are failing?
* [sig-release-master-informing#gce-master-scale-performance-5000](https://testgrid.k8s.io/sig-release-master-informing#gce-master-scale-performance-5000&exclude-non-failed-tests=)
### Which tests are failing?
* [kubetest2.Up](https://prow.k8s.io/view/gs/kubernetes-ci-log...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140642)

**Metadata:**
- Created: 2026-07-16
- Comments: 3
- State: open

### kubernetes/kubernetes#140664: Don't replace container expected CPU limits with pod limits in e2e-node tests cgroups.VerifyContainerCPULimit helper

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:
Remove shortcut in tests which allowed not to set expected CPU limits for container.
In such case pod level spec limits were used as container limits.
Such behavior happens when pod level resources are defined....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140664)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140663: Automated cherry pick of #140431: DRA: roll back reserved state in allocateDevice

Cherry pick of #140431 on release-1.36.

#140431: DRA: roll back reserved state in allocateDevice

/kind bug

#### What this PR does / why we need it

Backports the reserved-state rollback fix to release-1.36. `allocateDevice` reserves a device's shared counters and adds claim constraints before it ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140663)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140662: DRA: fix int64 overflow in consumable-capacity range arithmetic

**What type of PR is this?**

/kind bug
/sig node
/wg device-management

**What this PR does / why we need it**:

The consumable-capacity allocator does range arithmetic on int64 values from
`Quantity.Value()`, which overflows.

`roundUpRange` computes `min + step*ceil((request-min)/step)`. A reques...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140662)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140661: admission/namespace/lifecycle: allow updates to resources in deleted namespaces

## Problem

The NamespaceLifecycle admission plugin rejects both Create and Update requests when the target namespace has been fully deleted from storage. While blocking Creates is correct (no new content should appear in a deleted namespace), blocking Updates prevents controllers from re-writing ob...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140661)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140660: Restore global feature gates in client-go features tests to fix shuffle-order failures

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Restore the previous feature gates after tests swap in fakes, so the package passes under `go test -shuffle`.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing change?

```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140660)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140658: [WIP] fix: use native CEL evaluation for unstructured types

Test PR

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140658)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140657: CPU assignment resize tests

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The PR enhances https://github.com/kubernetes/kubernetes/pull/140629 by:
* improving error verification in cpu_assignment tests;
* adding baseline parameters to test cases
* add testcases:
-- with multi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140657)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140655: Detect orphaned namespace objects during storage version migration

## Problem

The storage version migrator silently skips objects that reside in namespaces whose Namespace object has been deleted but whose child objects still persist in etcd (orphaned namespace objects).

When the migrator's Patch is rejected with NotFound by the NamespaceLifecycle admission plugi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140655)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140652: [WIP] DRA: Eliminate shared resource.Quantitymutation in device capacity request

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Using very large device capacity requests can lead to incorrect scheduling decisions due to lack of deep copy of resource.Quantity. This is a similar to issue to https://github.com/kubernetes/kubernetes/pull/14...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140652)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140651: Def preemption perf test extend

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR introduces comprehensive `PodGroup` (gang scheduling) default preemption performance benchmark test suites to `test/integration/scheduler_perf/default_preemption/`.

Key additions & improvements:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140651)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140649: Increase test coverage of apimachinery watch package to 99%

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Increases unit test coverage of `k8s.io/apimachinery/pkg/watch` from **74.2%** to **99.1%** of statements. Only test files are changed.

New tests cover previously untested code:

- **watch.go**: `NewFakeWithChan...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140649)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140648: client-go/rest/watch: add tests for decoder and encoder error paths

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds unit tests for the untested error paths in `k8s.io/client-go/rest/watch`, raising package statement coverage from 78.9% to 100%:

- `TestDecoder_Errors` (table-driven) covers the three error branches in `Dec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140648)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140641: Return succes from podgroup preemption if one is ongoing

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This PR changes return type for a case where pod group preemption detects ongoing preemption. Instead of returning Unschedulable we return Success with the current nominating info. With that SubmitPodGroupAlgor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140641)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140638: [WIP] Add multi-level TAS

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140638)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140637: Automated cherry pick of #139162: Fix case where preemptor may be stuck in unschedulable queue

Cherry pick of #139162 on release-1.35.

#139162: Fix case where preemptor may be stuck in unschedulable queue

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note
Fixed a race cond...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140637)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140636: Add resource.MaxMilliQuantity and fix MilliValue overflow-check docs

**What type of PR is this?**

/kind cleanup
/sig api-machinery

**What this PR does / why we need it**:

`MaxMilliValue` and the `MilliValue` / `ScaledValue` doc comments tell you to
compare `Quantity.Value()` against `MaxMilliValue` to check whether
`MilliValue()` is safe to call:

```go
// The max...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140636)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140633: enable commentstart check on scheduling API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140633)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37481: WIP: agent-sandbox: generate prow jobs from the repo's dev/ci scripts

Adds `generate_jobs.py` to `config/jobs/kubernetes-sigs/agent-sandbox/`, which derives the agent-sandbox presubmit and periodic configs from the scripts in the repo's `dev/ci/presubmits/` and `dev/ci/periodics/` directories, and regenerates the two YAML files against the current agent-sandbox `main`...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37481)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9728: Update images for csi hostpath driver and snapshot metadata

**What this PR does / why we need it**:

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md) and add...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9728)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/git-sync: v4.7.1

## What's Changed
* feat: add `org.opencontainers.image.source` label to Dockerfile by @DerRockWolf in https://github.com/kubernetes/git-sync/pull/989
* build(deps): bump actions/checkout from 6.0.2 to 6.0.3 by @dependabot[bot] in https://github.com/kubernetes/git-sync/pull/988
* build(deps): bump actions/checkout from 6.0.3 to 7.0.0 by @dependabot[bot] in https://github.com/kubernetes/git-sync/pull/991
* build(deps): bump actions/setup-go from 6.4.0 to 6.5.0 by @dependabot[bot] in https://g...

🔗 [Link](https://github.com/kubernetes/git-sync/releases/tag/v4.7.1)

**Metadata:**
- Version: v4.7.1
- Published: 2026-07-16
- Prerelease: No

### kubernetes/autoscaler#9993: [OCI] Derive template ephemeral-storage from boot volume when tag is absent

## Summary

When Cluster Autoscaler builds a template node for an OCI node pool with zero running nodes, `ResourceEphemeralStorage` is currently populated only if the freeform tag:

```text
cluster-autoscaler/node-ephemeral-storage
```

is present.

If the tag is absent, the template node ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9993)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1810: Support for InstancesV2 Interface in CPI

CPI currently implements only `Instances()` method which is part of the Kubernetes cloud provider interfaces. To improve scalability and reduce the load on infrastructure APIs, Kubernetes introduced the [InstancesV2()](https://github.com/kubernetes/cloud-provider/blob/master/cloud.go#L52-L56) interf...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/issues/1810)

**Metadata:**
- Created: 2026-07-16
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-17 02:26:56*
