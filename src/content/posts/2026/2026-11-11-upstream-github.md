---
title: "Upstream Github - 2026-11-11"
description: "CNCF upstream activity from github"
pubDate: 2026-11-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/cleanup", "sig/storage", "needs-triage", "kind/bug", "sig/node", "pr", "area/test", "area/kubelet", "release-note", "size/XXL", "approved", "cncf-cla: yes", "sig/testing", "needs-priority", "size/S", "release-note-none", "cncf-cla: no", "needs-ok-to-test", "sig/scheduling", "sig/autoscaling", "size/L", "kind/feature", "sig/auth", "sig/api-machinery", "kind/api-change", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/code-generation", "wg/device-management", "release-note-action-required", "sig/instrumentation", "area/stable-metrics", "area/apiserver", "sig/architecture", "sig/network", "triage/accepted", "needs-rebase", "do-not-merge/needs-kind", "size/M", "size/XL", "priority/critical-urgent", "lgtm", "sig/apps", "kind/regression", "sig/scalability", "ok-to-test", "release", "kops", "do-not-merge/hold", "area/config", "test-infra", "size/XS", "area/cluster-autoscaler", "area/provider/digitalocean", "autoscaler", "do-not-merge/needs-area", "area/vertical-pod-autoscaler", "kind/dependency", "area/provider/oci", "sig/cli", "kubectl", "prometheus", "promu", "containerd", "platform/windows"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kops: v1.37.0

See the full [kOps 1.37 release notes](https://kops.sigs.k8s.io/releases/1.37-notes/) for details, including breaking changes and deprecations.

## Highlights

* **Kubernetes 1.37 support**, with etcd 3.7.3 as the default for Kubernetes 1.37 clusters
* **Private asset repositories in cloud object storage**: `s3://`, `gs://`, and `azureblob://` URLs for `KOPS_BASE_URL` and `spec.assets.fileRepository`, with nodes authenticating through their instance identity
* **Smaller and more resilient ...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.37.0)

**Metadata:**
- Version: v1.37.0
- Published: 2026-11-10
- Prerelease: No

### kubernetes/autoscaler#10669: Configure renovate to allow for patch releases of Go

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The release branches should maintain their patch version of Go (for now, until k/k adopts KEP-3744)

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<i...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10669)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10665: Add checkpoint writer benchmark

#### What type of PR is this?

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
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10665)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144038: [SIG-Storage] Migrate legacy klog unstructured logging to structured logging in pkg/volume/configmap

### Description

In `pkg/volume/configmap/configmap.go`, several logging calls still use legacy unstructured logging (`klog.Infof` and `klog.Errorf`) instead of structured logging (`klog.InfoS` and `klog.ErrorS`):

- Line 183: `klog.V(3).Infof("Setting up volume %v for pod %v at %v", ...)`
- Line 19...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144038)

**Metadata:**
- Created: 2026-11-10
- Comments: 1
- State: open

### kubernetes/kubernetes#144029: PodReadyToStartContainers condition should include sandbox creation error details

### What happened?

When pod sandbox creation fails (e.g., due to a CNI ADD error), the failure detail is only available in `FailedCreatePodSandBox` events on the pod. The `PodReadyToStartContainers` condition — which was specifically designed to surface sandbox readiness — does not include the erro...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144029)

**Metadata:**
- Created: 2026-11-10
- Comments: 3
- State: open

### kubernetes/kubernetes#144040: Classify kubelet admission rejection types

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Classifies kubelet admission rejections by what can resolve them (`RejectionType`), so rejected pod updates (resizes, and later dynamic containers and dynamic volumes) are reported and retried correctly. Pod conditio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144040)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144039: volume/configmap: migrate legacy klog logging to structured logging

#### What type of PR is this?
/kind cleanup
/sig storage

#### What this PR does / why we need it:
Migrate legacy unstructured `klog.Infof` and `klog.Errorf` calls in `pkg/volume/configmap/configmap.go` to structured logging (`klog.InfoS` and `klog.ErrorS`) in accordance with Kubernetes structured l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144039)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144037: nodedeclaredfeatures: add DynamicNodeLocalEphemeralVolumes feature

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144037)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144036: kubelet/stats: use allocated pod spec and actuatedState in volumeStatCalculator

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144036)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144033: Skip up-to-date namespaced RBAC objects using Lists


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This builds on https://github.com/kubernetes/kubernetes/pull/143776 to avoid unnecessary Get calls on apiserver bootstrap to avoid increasing apiserver startup latency that would otherwise happen due to t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144033)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144032: WIP DRA: skip counter reservations for administrative access

Administrative allocations are excluded from persisted allocation accounting, but can still reserve counters and shared-capacity entries during an allocation search. This can block an administrative request on exhausted counters or affect later ordinary allocations.

Skip counter reservations and co...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144032)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144030: kubelet: report committed memory in Windows resource metrics

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Report committed memory on Windows through the existing kubelet resource metrics:

- `node_memory_working_set_bytes`
- `pod_memory_working_set_bytes`
- `container_memory_working_set_bytes`

Windows uses `MemoryStats....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144030)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144026: Add trace_id and span_id to contextual logger and apiserver httplog for sampled spans

#### What type of PR is this?

/kind feature
/sig instrumentation
/sig api-machinery

#### What this PR does / why we need it:

When OpenTelemetry spans are sampled (`spanCtx.IsValid() && spanCtx.IsSampled()`), this PR:
1. Attaches `trace_id` and `span_id` (as `trace.TraceID` and `trace.SpanID` impl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144026)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144025: DRA consumable capacity: report name conflicts regardless of map order

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Requesting a capacity with and without the driver domain is documented as a scheduling error. `resolveCapacityRequests` returned as soon as it found a name that the device does not define, so if the request also had ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144025)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144024: Remove some old old-apiserver-compatibility endpointslice code

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
>     // TODO (khenidak) remove when (1) dual stack becomes
>     // enabled by default (2) v1.19 falls off supported versions

Yeah, that happened.
(IPFamilies is defaulted on read, so we only had to deal with the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144024)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144023: [DO NOT REVIEW] DRA preemption poc cont.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144023)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144022: Fix pod requeueing when a CSI driver registers without a volume limit

#### What type of PR is this?

/kind bug
/sig scheduling
/sig storage

#### What this PR does / why we need it:

Requeue pods when a CSI driver is added to an existing CSINode, even when the driver does not advertise a volume limit

Previously, the update hint treated an absent driver and a newly re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144022)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144021: [WIP] scheduler: don't requeue or status-patch a Pod recreated mid-attempt

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When a Pod is deleted and recreated under the same `namespace/name` while a scheduling attempt for the previous Pod instance is in flight, the unwinding failure path for the old attempt can leak or overwrite state bel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144021)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144020: Container Scoped Probes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144020)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144019: Short-circuit to exponent format for large BinarySI

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This is a follow up to #143955.  There are a few more APIs with the same issue, so we need to move the check into canonlcalization to handle all cases.

Why this is safe:

It is inefficient to check for a BinaryS...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144019)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144018: Fix preemption during irreversible volume binding

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

Prevent in-memory preemption once VolumeBinding starts API updates that Unreserve cannot undo

Call the existing MarkPrebound transition before BindPodVolumes so that either preemption cancels the cy...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144018)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144017: Add BlockLogger to watch pipeline

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144017)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144016: apimachinery/managedfields: preserve explicitly empty associative list on apply

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
When an applier previously owns items in an associative list and then applies an explicitly empty associative list (`field: []`), Server-Side Apply loses the field on the first Apply request. With Op...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144016)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144015: scheduler: remove unused helpers and constant

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144015)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144014: Delete watch cache gauges of stopped resource types

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144014)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19028: Remove wireguard install in nodeup when it is not needed

/kind feature

**1. Describe IN DETAIL the feature/behavior/change you would like to see.**

We've been having recurring issues with nodes failing to start because they install wireguard from APT, and ubuntu's APT repository seems to stop responding from time to time.  Maybe every few weeks we are g...

🔗 [Link](https://github.com/kubernetes/kops/issues/19028)

**Metadata:**
- Created: 2026-11-10
- Comments: 1
- State: open

### kubernetes/test-infra#38275: Enforce v1.38 Code Freeze

The Kubernetes v1.38 Code and Test Freeze is scheduled to start Monday 16th November 2026 (AoE) / Tuesday 17th November 2026 12:00 UTC

/hold

The hold should ONLY be cancelled by the Release Team Leads when the v1.38 Release Team is ready around the Code Freeze deadline, ensuring that everything in...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38275)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38273: Kueue: enable override plugin

Enable the override plugin for `kubernetes-sigs/kueue` and allow the `kueue-maintainers` team to use it. This gives maintainers an escape hatch when a required check fails for reasons outside the change, without making the check optional.

This revives #37605, which was closed for lack of a use case...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38273)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10667: [cluster-autoscaler] DigitalOcean: fail fast when an accepted node pool resize cannot be filled, instead of waiting max-node-provision-time

**Which component are you using?**:

/area cluster-autoscaler
/area provider/digitalocean

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

On DigitalOcean, a scale-up that the API accepts but cannot fill always costs the full `max-node...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10667)

**Metadata:**
- Created: 2026-11-10
- Comments: 2
- State: open

### kubernetes/autoscaler#10666: [cluster-autoscaler] DigitalOcean: DecreaseTargetSize deletes running nodes when a timed-out scale-up is reverted

**Which component are you using?**:

/area cluster-autoscaler
/area provider/digitalocean

**What version of the component are you using?**:

Component version: the cluster-autoscaler DOKS runs for a 1.37.0 cluster (managed, so we cannot read the image tag). Code below is `cluster-autoscaler-1.37.0`...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10666)

**Metadata:**
- Created: 2026-11-10
- Comments: 2
- State: open

### kubernetes/autoscaler#10668: [VPA] Bump golang Docker tag to v1.27.4 (master)

This PR contains the following updates:

| Package | Type | Update | Change |
|---|---|---|---|
| [golang](https://hub.docker.com/_/golang) ([source](https://redirect.github.com/docker-library/golang)) | stage | patch | `1.27.3` → `1.27.4` |

---

### Configuration

📅 **Schedule**: (in timezone Etc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10668)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10664: Autoscaler should not try to monitor or scale virtual nodes and virtual node pools 

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
backports the oci provider fix to exclude VN and VNPs from node pool lookup and guard against nil or empty NP references
without this fix, virtual node cache look-up errors can block managed node pools scale up 

#### ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10664)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10663: Autoscaler should not try to monitor or scale virtual nodes and virtual node pool

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
backports the oci provider fix to exclude VN and VNPs from node pool lookup and guard against nil or empty NP references
without this fix, virtual node cache look-up errors can block managed node pools scale up 
...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10663)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1904: `kubectl get --sort-by` exits with "unsortable interface" when a number field has both whole and fractional values

**What happened**:

`kubectl get --sort-by=<field>` exits with status 1 when the field is a JSON number and the listed objects mix whole values (like `2`) with fractional values (like `0.5`):

```
F1110 04:13:57.685171 2079518 sorter.go:387] Field {.spec.weight} in [][][]reflect.Value is an unsortab...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1904)

**Metadata:**
- Created: 2026-11-10
- Comments: 1
- State: open

### prometheus/promu: 0.21.0 / 2026-11-09

* [CHANGE] Strip quotes when splitting build parameters #412


🔗 [Link](https://github.com/prometheus/promu/releases/tag/v0.21.0)

**Metadata:**
- Version: v0.21.0
- Published: 2026-11-10
- Prerelease: No

### containerd/containerd#14540: Reimport snapshot error: file already exits with Windows Containers

### Description

I'm not sure if this is a [hcsshim](https://github.com/microsoft/hcsshim) issue or containerd.

Creating a new image from a Windows Container's changes always results with an error.

### Steps to reproduce the issue

1. Build an image.
    - I use `nerdctl build --progress=plain -t ...

🔗 [Link](https://github.com/containerd/containerd/issues/14540)

**Metadata:**
- Created: 2026-11-10
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-11 04:40:02*
