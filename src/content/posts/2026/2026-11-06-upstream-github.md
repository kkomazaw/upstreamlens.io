---
title: "Upstream Github - 2026-11-06"
description: "CNCF upstream activity from github"
pubDate: 2026-11-06
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "sig/cli", "sig/node", "sig/scheduling", "kind/feature", "wg/workload-aware-scheduling", "sig/scalability", "pr", "area/apiserver", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "sig/storage", "size/M", "release-note-none", "kind/cleanup", "area/cloudprovider", "sig/cloud-provider", "area/test", "size/XS", "kind/flake", "sig/testing", "area/kubectl", "area/kubelet", "do-not-merge/work-in-progress", "needs-rebase", "size/S", "sig/auth", "approved", "sig/autoscaling", "sig/apps", "priority/important-longterm", "triage/accepted", "do-not-merge/needs-sig", "size/XXL", "kind/api-change", "ok-to-test", "area/api-validation", "sig/etcd", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "area/cluster-autoscaler", "area/helm-charts", "autoscaler", "area/provider/hetzner", "kind/documentation", "area/vertical-pod-autoscaler", "kops", "prometheus", "cncf", "tag/workloads-foundation", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143871: cloud-provider: test route controller triggers and route_sync_total labels

#### What type of PR is this?

/kind cleanup
/sig cloud-provider

#### What this PR does / why we need it:

Tightens the unit tests of the watch-based route controller (KEP-5237).

- `TestHandleNodeUpdate` created every node without a `resourceVersion`, so old and new always had the same (empty) one...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143871)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143863: [WAS] KEP-5547: Make Job delegation annotations immutable


#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

A follow-up to #143536, as requested in review.

On Job update, `ValidateJobUpdate` now rejects adding, removing, or updating `scheduling.k8s.io/workload-name`, `scheduling.k8s.io/group-template-name`, and `sche...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143863)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes: v1.38.0-beta.0


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.38.0-beta.0)

**Metadata:**
- Version: v1.38.0-beta.0
- Published: 2026-11-06
- Prerelease: Yes

### kubernetes/kubernetes#143868: Cluster-wide list with `fieldSelector=metadata.namespace=<ns>` and `limit` repeats objects or ends early on the continued page

### What happened?

A cluster-wide list (`GET /api/v1/configmaps`, `kubectl get -A`) with
`fieldSelector=metadata.namespace=<ns>` and `limit` returns wrong pages after the first one:

- If the object names sort before `<ns>`, the second page starts again at the beginning of the
  namespace, so objec...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143868)

**Metadata:**
- Created: 2026-11-06
- Comments: 4
- State: open

### kubernetes/kubernetes#143862: Uncached OpenAPI v3 schemas cause 41+ unmarshals on a 20-resource apply

### What happened?

Applying updates to an existing 20-resource `core/v1` manifest (`kubectl apply -f`) unmarshals the `1.53 MB` `api/v1` OpenAPI v3 JSON **41 to 47 times**, causing **351–406 MB of cumulative heap allocations (`~8.5 MB` per unmarshal, `~800–900 ms` CPU)**:
- **20 `ConfigMap`s (1 `Ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143862)

**Metadata:**
- Created: 2026-11-05
- Comments: 1
- State: open

### kubernetes/kubernetes#143861: Pod QoS class should be derived from effective pod resources

### Problem

Without pod-level resources, a pod is Guaranteed only if *every* container, including init containers, has requests == limits. But the kubelet sizes the pod cgroup from the effective pod resources (`PodRequests`/`PodLimits`), where init containers are combined with `max`. So a pod can b...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143861)

**Metadata:**
- Created: 2026-11-05
- Comments: 1
- State: open

### kubernetes/kubernetes#143860: WAS: preferred topology level for PodGroups

### What would you like to be added?

A second, optional topology level on a `PodGroup` that the scheduler treats as a preference. The group must stay inside the required domain (for example a rack). Inside that domain the scheduler should try to pack the group into a smaller domain (for example a h...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143860)

**Metadata:**
- Created: 2026-11-05
- Comments: 2
- State: open

### kubernetes/kubernetes#143854: Lease watches cannot keep up with high Lease write rates

On large clusters with high Lease write rates, Lease watchers cannot keep up with the watch stream and get force-closed and reconnected every few seconds, even when using Protobuf. Because Leases have no watch-cache index, their watch channel buffer is capped at 100 events. Under high write throughp...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143854)

**Metadata:**
- Created: 2026-11-05
- Comments: 3
- State: open

### kubernetes/kubernetes#143853: SSA loses an explicitly empty associative list; required/CEL validation rejects every retry

### What happened?

Server-Side Apply loses an explicitly supplied empty associative list when the same manager releases its previously owned list items.

With no presence constraint, the first request for `endpoints: []` removes the field; an identical second request creates the empty list. With Op...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143853)

**Metadata:**
- Created: 2026-11-05
- Comments: 1
- State: open

### kubernetes/kubernetes#143873: Fix pagination of cluster-wide lists filtered by metadata.namespace

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A cluster-wide list (e.g. `GET /api/v1/configmaps?fieldSelector=metadata.namespace=demo&limit=2`) paginates incorrectly after the first page:

- object names sorting **before** the namespace name: the second page res...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143873)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143872: volume: fix Wait blocking indefinitely on failed operations with backoff

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

When `exponentialBackOffOnError` is enabled and an operation in `nestedPendingOperations` fails with an error, `operationComplete()` retains the entry in `grm.operations` to track exponential backoff sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143872)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143870: scheduler: deflake CPG PodGroupPodsCount test

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

`TestCPGTopologyAwareScheduling/CPG schedules on a single rack, choosing placement that accommodates more descendant pods (PodGroupPodsCount placement scoring)` flakes on the master-blocking integration jobs with `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143870)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143869: kubectl: honor --dry-run in create --edit

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143869)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143867: kubelet: pull image volumes before container that mounts it

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:
Request an image volume pull just before the container that mounts it, rather than all together before any container starts. 

The main benefits include:
* Fixes  #143814
* Image volumes that no container mo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143867)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143866: scheduler: skip volume accounting for unrelated CSI limits

#### What type of PR is this?

/kind cleanup
/sig scheduling
/sig storage

#### What this PR does / why we need it:

`NodeVolumeLimits` iterates over existing pods and VolumeAttachments on the node if any CSI driver on the node has an attachment limit. Even when the pod only uses CSI drivers without...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143866)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143865: Lock PodCertificateRequest true

/sig auth
/kind feature
/cc @ahmedtd @stlaz 

Locking the PodCertificateRequest feature, GA in 1.37, to true in 1.38

```release-note
The PodCertificateRequest feature gate is unconditionally enabled in 1.38
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143865)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143864: [PodLevelResources] Cleanup unnecessary `IsPodLevelResourcesSet` checks

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

We call `IsPodLevelResourcesSet` in a bunch of places where it's not necessary. In some cases it's just used where we just need a nil-check to guard an accessor. In other places, it's unnecessary because it's alr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143864)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143859: Evaluate resource rules before selectors in admission policy matching

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143859)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143858: Fix limitranger pod level hugepages

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143858)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143857: Refactor: move PodValidationOptions so validation can use podutil

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Validation code cannot rely on pod utilities like ContainerIter (or the new [ContainerPairs](https://github.com/kubernetes/kubernetes/pull/143715)) because podutil (`pkg/api/pod`) imports validation for `GetValid...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143857)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143856: Add jefftree to controller-manager aggregator, apiextensions OWNERS

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I've been working on these areas for a while and would like to help with reviews and approvals. Happy to adjust the scope based on reviewer feedback.

Approver (already a reviewer in these areas):
- staging/src/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143856)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143851: Migrate events.k8s.io/v1 EventSeries.Count to declarative validation

#### What type of PR is this?

/kind cleanup
/sig api-machinery
/area api-validation

#### What this PR does / why we need it:

Prototype for the question in #141362: can the Events API move to declarative validation when `core/v1` and `events.k8s.io/v1` validate the same internal type differently?
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143851)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143850: Propagate configured anonymous auth options in delegated config

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

Use configured anonymous auth options in DelegatingAuthenticationOptions in ApplyTo

```release-note
k8s.io/apiserver library: DelegatingAuthenticationOptions applies configured anonymous authentication...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143850)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143849: client-go/transport: prefer connection pool members that can connect

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Tune client-go behavior for connection-like errors. It introduces a time-based penalty that briefly avoids backends that we failed to connect to.

The goal is to improve behavior when one of backends is hard ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143849)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143848: Consistent Get from cache

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143848)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143846: Ensure ObjectTracker replays delete events across the List-to-Watch gap

/kind flake

Fixes a TestMetadataSharedInformerFactory/scenario_3 flake where DeleteFunc occasionally never fires when using a fake client.

**Why the test started flaking:** Commit 5b1d3ee25e2 (#143571) switched metadatainformer and dynamicinformer WaitForCacheSyncWithContext from 100ms polling...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143846)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143845: client-go: handle panics in concurrent watch decoder goroutines with utilruntime.HandleCrash

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143845)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10184: Promote cluster-autoscaler v1.36.2

**What this PR does / why we need it**:

This PR promotes the v1.36.2 Cluster Autoscaler image for release.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/googl...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10184)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10183: Promote cluster-autoscaler v1.35.3

**What this PR does / why we need it**:

This PR promotes the v1.35.3 Cluster Autoscaler image for release.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/googl...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10183)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10182: Promote cluster-autoscaler v1.34.6

**What this PR does / why we need it**:

This PR promotes the v1.34.6 Cluster Autoscaler image for release.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github.com/googl...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10182)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10634: cluster-autoscaler/chart: keep PDB minAvailable/maxUnavailable with a custom selector

#### What type of PR is this?

/kind bug
/area helm-charts

#### What this PR does / why we need it:

Since `podDisruptionBudget.selector` was added (5894790d0), the `minAvailable`/`maxUnavailable` lines sit inside the `else` branch of the selector override in `templates/pdb.yaml`. If you set a cust...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10634)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10633: hetzner: map initializing, off and deleting servers to an instance state

#### What type of PR is this?

/kind bug
/area provider/hetzner

#### What this PR does / why we need it:

`toInstanceStatus` in the Hetzner provider lists the server statuses as separate `case` lines, written as if Go switch cases fell through:

```go
case hcloud.ServerStatusInitializing:
case hclo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10633)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10631: docs(ca): add OCI chart install example and update releases table

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:
Now that `oci://registry.k8s.io/autoscaling/charts/cluster-autoscaler:9.60.0` is promoted and live on `registry.k8s.io` (via https://github.com/kubernetes/k8s.io/pull/10161):
1. Adds the `helm install` OCI ex...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10631)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10630: [vpa-release-1.7] VPA: skip pod if processedRecommendation is nil

This is an automated cherry-pick of #10627

/assign adrianmoisey

```release-note
Fixed a bug that caused a nil pointer panic when the pod recommendation was nil.
```

/kind bug

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10630)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10629: [vpa-release-1.8] VPA: skip pod if processedRecommendation is nil

This is an automated cherry-pick of #10627

/assign adrianmoisey

```release-note
Fixed a bug that caused a nil pointer panic when the pod recommendation was nil.
```

/kind bug

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10629)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18987: Stable support for Debian and Amazon Linux images

/kind feature

## What

I’d like Debian 13 (Trixie) and Amazon Linux 2023 to move from “experimental” to “stable” in the [distro support matrix](https://kops.sigs.k8s.io/operations/images/). Other non-Ubuntu distros could follow later.

## Why

Almost all kops clusters run on Ubuntu, so a slow Ubunt...

🔗 [Link](https://github.com/kubernetes/kops/issues/18987)

**Metadata:**
- Created: 2026-11-05
- Comments: 0
- State: open

### prometheus/prometheus: 3.16.0 / 2026-11-04

- [CHANGE] API: The experimental search endpoints now clamp `batch_size` to 1000. #19731
- [CHANGE] Configuration: Default --web.external-url to https when --web.config.file enables TLS. #19241
- [CHANGE] PromQL: Subquery samples are now included in the query TotalSamples and TotalSamplesPerStep statistics, and SamplesRead now counts reads from subqueries with an @ modifier in range queries. #19165
- [CHANGE] Remote write: Stop exposing the deprecated `prometheus_remote_storage_metadata_total...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.16.0)

**Metadata:**
- Version: v3.16.0
- Published: 2026-11-05
- Prerelease: No

### cncf/toc#2368: docs: add distributed agentic systems stream planning toolkit

## Summary

Provide the common section-owner template requested at the [October 22 working session](https://github.com/cncf/toc/blob/main/tags/tag-workloads-foundation/initiatives/distributed-agentic-systems/meeting-notes/2026-10-22.md), supporting both stream owners and their teams.

- Add a 45–60 ...

🔗 [Link](https://github.com/cncf/toc/pull/2368)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-06 05:01:36*
