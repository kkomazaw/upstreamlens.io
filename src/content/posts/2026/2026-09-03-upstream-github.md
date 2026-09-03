---
title: "Upstream Github - 2026-09-03"
description: "CNCF upstream activity from github"
pubDate: 2026-09-03
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "priority/important-longterm", "kind/failing-test", "triage/accepted", "sig/scheduling", "kind/flake", "kind/feature", "sig/auth", "sig/architecture", "sig/security", "pr", "size/M", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "ok-to-test", "needs-priority", "wg/device-management", "area/kubelet", "release-note", "needs-ok-to-test", "kind/documentation", "sig/api-machinery", "size/XS", "release-note-none", "area/apiserver", "size/XXL", "do-not-merge/needs-kind", "size/L", "sig/network", "sig/storage", "kind/api-change", "sig/apps", "area/code-generation", "area/test", "sig/autoscaling", "sig/instrumentation", "sig/testing", "area/dependency", "kind/dependency", "size/S", "cncf-cla: no", "approved", "do-not-merge/hold", "kind/cleanup", "size/XL", "lgtm", "release-note-action-required", "area/kubectl", "sig/cli", "area/blog", "website", "tide/merge-method-squash", "language/en", "sig/docs", "release", "minikube", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/jobs", "area/config", "test-infra", "prometheus", "statsd_exporter", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141789: Remove SeparateTaintEvictionController feature gate

#### What type of PR is this?
/kind cleanup
/sig scheduling

#### What this PR does / why we need it:
Removes the `SeparateTaintEvictionController` feature gate from Kubernetes. The feature gate graduated to GA in v1.34 and has completed the required 3-release version emulation deprecation window.

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141789)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57400: Stale wording and nits in CSI Changed Block Tracking beta

- Revise the title and stale present-tense wording.
- Clarify that v1alpha1 support was removed in external-snapshot-metadata v1.0.0.
- Update the KEP link.
ref: https://github.com/kubernetes/website/pull/54615/changes
The merged CSI Changed Block Tracking beta blog still has a few stale review fixu...

🔗 [Link](https://github.com/kubernetes/website/issues/57400)

**Metadata:**
- Created: 2026-09-02
- Comments: 2
- State: open

### kubernetes/website#57398: Update documentation for NodeInclusionPolicyInPodTopologySpread removal in v1.38

#### What type of PR is this?
/kind documentation
/sig scheduling
/sig docs

#### What this PR does / why we need it:
In Kubernetes v1.38, the `NodeInclusionPolicyInPodTopologySpread` feature gate was removed following its GA graduation in v1.33 (see https://github.com/kubernetes/kubernetes/pull/141...

🔗 [Link](https://github.com/kubernetes/website/pull/57398)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141814: In-place Pod resize drops CPU/memory keys from PodStatus.Resources depending on resize dimension

### What happened?


After a successful in-place pod resize (`InPlacePodVerticalScaling` + `InPlacePodLevelResourcesVerticalScaling` enabled), `PodStatus.Resources` becomes inconsistent with `PodSpec`, `status.allocatedResources` and `status.containerStatuses[*].resources`.

Depending on *which* res...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141814)

**Metadata:**
- Created: 2026-09-03
- Comments: 2
- State: open

### kubernetes/kubernetes#141806: ImageGarbageCollect when ImageMaximumGCAge is set should not GC unused images prematurely consistently timing out

### Which jobs are failing?

https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-slow

### Which tests are failing?

ImageGarbageCollect when ImageMaximumGCAge is set should not GC unused images prematurely

### Since when has it been failing?

since it was added to this job

### Testgrid link

...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141806)

**Metadata:**
- Created: 2026-09-02
- Comments: 2
- State: open

### kubernetes/kubernetes#141803: [Flaking tests] k8s.io/kubernetes/test/integration/scheduler/preemption/podgroup tests timing out

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-ppc64le-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141803)

**Metadata:**
- Created: 2026-09-02
- Comments: 1
- State: open

### kubernetes/kubernetes#141799: DRA: Add audit-log visibility for the adminAccess self-escalation entry points (namespace labeling, claim creation)

### What would you like to be added?

Follow-up to #141293, which established that a narrow, common namespace-metadata-edit permission is sufficient for a non-admin user to self-grant DRA's `adminAccess` — working as designed, RBAC gates verbs not field values. 

Two points in that self-escalation p...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141799)

**Metadata:**
- Created: 2026-09-02
- Comments: 2
- State: open

### kubernetes/kubernetes#141798: CVE-2026-84304 gRPC-Go: Heap Memory Exhaustion (OOM) via HTTP/2 DATA Frame Fragmentation

### What happened?

Prow ci-kubernetes-snyk-master [job](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-snyk-master/2095107719743672320) failing due to new CVE-2026-84304 finding.

### What did you expect to happen?

CVE scan should be clean

### How can we reproduce it (as minima...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141798)

**Metadata:**
- Created: 2026-09-02
- Comments: 2
- State: open

### kubernetes/kubernetes#141794: TestPodGroupPreemption/Binding_first_before_preemption_for_gang_policy: Unexpected event order

### Which jobs are flaking?

https://storage.googleapis.com/k8s-triage/index.html?text=Unexpected%20event%20order

Seems to be limited to ci-kubernetes-integration-race-master

### Which tests are flaking?

TestPodGroupPreemption/Binding_first_before_preemption_for_gang_policy

https://prow.k8s.io/v...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141794)

**Metadata:**
- Created: 2026-09-02
- Comments: 2
- State: open

### kubernetes/kubernetes#141815: Fix: DRA Registration Failure at the Unix Socket Boundary

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141815)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141813: kubelet: include pod-level resources in resize events

What type of PR is this?
/kind bug
/sig node
/area kubelet

What this PR does / why we need it:
This PR fixes in-place pod resize events to include pod-level resources when `InPlacePodLevelResourcesVerticalScaling` is enabled.

Previously, `podResourceSummary` in `pkg/kubelet/events/resize.g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141813)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141812: client-go/events: fix missing period in Eventf doc comment

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141812)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141810: storage/testing/coverage: classify storage.Interface calls, add coverage.Wrap (Step 1 of #141652)

Ref #141652 (Step 1: Storage Request Classification & Coverage Measurement)

This is a **draft / work in progress** implementing Step 1 only. Step 2 (the linearizability model) is being handled separately in #141729 — this PR does not touch `correctness/` or `test/integration/apiserver/storage/`.

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141810)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141809: apiserver: improve performance of streamed list responses via buffering

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Streamed LIST responses reach net/http as one write per item. Over HTTP/2 each of those writes (once past the handler's 4KiB buffer) becomes a cross-goroutine DATA-frame handoff that parks the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141809)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141808: [DNM] validation-gen: allow configurable deep-equal function

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141808)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141807: WIP: dynamic resize of memory-backed volumes (beta update)

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141807)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141805: Start-of-cycle tools bump

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

This bumps all our tools (apart from golangci-lint) to the latest versions, using `hack/update-tools.sh` (with `hack/update-mocks.sh` since Mockery is updated).

Details of the updates:
* Mockery to v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141805)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141804: test: deflake podgroup preemption event order by ignoring Bind pod names

#### What type of PR is this?
/kind flake


#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes #141794


#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```release-note
None
```

#### AI usage disclos...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141804)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141802: Allow workqueues to use multiple metrics providers

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig instrumentation

#### What this PR does / why we need it:

When a library registers a global workqueue metrics provider, subsequent registrations currently have no effect. This prevents applications from receiving metrics through their...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141802)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141801: docs: clarify ExternalJWTSigner claims encoding

<#### What type of PR is this?
/kind documentation

#### What this PR does
Clarifies the documentation for ExternalJWTSigner SignJWTRequest.claims.

The updated documentation makes it explicit that claims is already base64url-encoded and must not be encoded again when constructing the JWT sign...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141801)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141800: scheduler: support CompositePodGroup in queue metrics


#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR extends the scheduler's queue metrics to support `CompositePodGroup` (CPG) alongside `PodGroup` (PG) and individual `Pod`s:
- Adds the `compositepodgroup` entity type constant and updates metric ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141800)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141797: Nominate mm4tt as SIG scheduling approver

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

I'm happy to nominate @mm4tt to become a SIG Scheduling approver.

Matt is a very active SIG Scheduling member, leading the Workload-Aware Scheduling (WAS) effort in kube-scheduler. He has not only ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141797)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141796: kubelet: topologymanager: Add Score field to TopologyHint for NUMA utilization signaling

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141796)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141792: client-go: let multiple providers register rest client metrics

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`tools/metrics.Register` is guarded by a `sync.Once`, so the first caller wins and every later registrant is silently dropped. A binary that links two libraries wanting client-go metrics gets metrics for exactly one ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141792)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141791: DV:Migrate Objectmeta resourceVersion to DV

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR migrates the objectMeta.resourceVersion check `must be specified for an update` to DV. 

DV tags added:
+k8s:optional
+k8s:update=NoUnset


#### Which issue(s) this PR is related to:
part of...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141791)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141790: enable commentstart check on batch API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141790)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141788: Clean up NodeInclusionPolicyInPodTopologySpread feature gate

#### What type of PR is this?

/kind cleanup
/sig scheduling

#### What this PR does / why we need it:

This PR removes the `NodeInclusionPolicyInPodTopologySpread` feature gate, which graduated to GA in Kubernetes 1.33.

Key changes:
- Removed `NodeInclusionPolicyInPodTopologySpread` from `pkg/feat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141788)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141785: Fix Scheduler Preemption Ignoring Empty PDB Selectors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141785)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57402: [Feature Blog v1.37]: Publishes week 3 batch (Sept 8 - Sept 11 2026)

- [x] Gang Scheduling Support in Kubernetes
- [x] CompositePodGroup API
- [x] Workload-aware preemption
- [x] WAS: Integrate Workload APIs with Job controller
- [x] DRA: ResourceClaim Support for Workloads
- [x] Specialized Lifecycle Management
- [x] Scheduler Preemption for In-Place Pod Resiz...

🔗 [Link](https://github.com/kubernetes/website/pull/57402)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube: v1.39.0

📣😀 **Please fill out our [fast 5-question survey](https://forms.gle/Gg3hG5ZySw8c1C24A)** so that we can learn how & why you use minikube, and what improvements we should make. Thank you! 💃🎉

## Release Notes

## Version 1.39.0 - 2026-09-01

### Highlights

* Add support for Kubernetes v1.36 and v1.37 (default: v1.37.0)
* Default container runtime is now containerd
* Add Traefik Helm-based ingress addon
* VirtualBox driver now supports Apple Silicon (VirtualBox 7.1+)

### Features

* Add supp...

🔗 [Link](https://github.com/kubernetes/minikube/releases/tag/v1.39.0)

**Metadata:**
- Version: v1.39.0
- Published: 2026-09-02
- Prerelease: No

### kubernetes/autoscaler#10238: Bump the actions group across 3 directories with 1 update

> [!WARNING]
> Cooldown could not be applied because no publication date was available from the registry.
>

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/rec...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10238)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10234: feat(upcloud): add UpCloud cloudprovider

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds UpCloud cloudprovider support to cluster-autoscaler.

#### Special notes for your reviewer:

All of the owners added are part of UpCloud's Kubernetes Team.  Let us know if there is anything that is...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10234)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37792: CAPO: Periodic jobs for release-0.15

Update the periodic jobs to include branch release-0.15. Remove release-0.12.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37792)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### prometheus/statsd_exporter: 0.31.0

## What's Changed
* [FEATURE] Support the optional DogStatsD v1.3 metric timestamp field (`|T<unix_timestamp>`) ([#716](https://github.com/prometheus/statsd_exporter/pull/716))
* [FEATURE] Support `$0` template reference in `glob` mappings, expanding to the complete StatsD metric name (matching regex mappings, where `$0` expands to the complete regex match) ([#735](https://github.com/prometheus/statsd_exporter/pull/735))
* ⚠️ [CHANGE][library] `fsm.TemplateFormatter.Format` now takes the orig...

🔗 [Link](https://github.com/prometheus/statsd_exporter/releases/tag/v0.31.0)

**Metadata:**
- Version: v0.31.0
- Published: 2026-09-02
- Prerelease: No

### containerd/containerd#14086: Push fails when cross-repository blob mount returns 403 (Forbidden) instead of 401 (Unauthorized)

### Description

When pushing an image where containerd attempts a cross-repository blob mount, some registries return 403 Forbidden rather than 401 Unauthorized when the authenticated user does not have read access to the mount source repository. containerd currently treats a 403 as a failure and a...

🔗 [Link](https://github.com/containerd/containerd/issues/14086)

**Metadata:**
- Created: 2026-09-02
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-03 02:52:54*
