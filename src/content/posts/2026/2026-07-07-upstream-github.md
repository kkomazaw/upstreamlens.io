---
title: "Upstream Github - 2026-07-07"
description: "CNCF upstream activity from github"
pubDate: 2026-07-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "lgtm", "cncf-cla: yes", "size/L", "approved", "sig/testing", "needs-rebase", "area/jobs", "area/config", "test-infra", "issue", "kind/feature", "sig/network", "language/en", "needs-triage", "website", "sig/scheduling", "kind/flake", "wg/device-management", "wg/workload-aware-scheduling", "sig/storage", "sig/node", "kind/bug", "area/apiserver", "sig/api-machinery", "size/XL", "do-not-merge/release-note-label-needed", "needs-priority", "area/test", "size/M", "kind/api-change", "release-note-none", "area/api-validation", "kind/cleanup", "area/kubelet", "release-note", "size/XS", "needs-ok-to-test", "wg/structured-logging", "size/S", "priority/backlog", "area/kubectl", "sig/cli", "do-not-merge/contains-merge-commits", "do-not-merge/needs-kind", "size/XXL", "area/dependency", "cncf-cla: no", "priority/important-soon", "triage/accepted", "sig/auth", "do-not-merge/work-in-progress", "area/code-generation", "sig/etcd", "sig/apps", "ok-to-test", "area/access", "area/artifacts", "area/infra", "area/terraform", "area/groups", "sig/k8s-infra", "area/infra/gcp", "area/registry.k8s.io", "k8s.io", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "sig/autoscaling", "area/provider/gcp", "kops", "committee/steering", "do-not-merge/hold", "area/elections", "community", "sig/release", "area/release-eng", "release", "cncf", "kind/initiative", "tag/operational-resilience", "sub/project-reviews", "init/not-started", "toc", "needs-group", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140246: Evaluate node stability risks and support hybrid workload Memory QoS in KEP 2570

/sig node
/kind feature

The current Memory QoS (KEP-2570) implementation introduces critical node stability risks and bin-packing regressions for hybrid workloads. 

### The Issues & Risks with the Current Design

**1. `memory.min` for Guaranteed is Not One-Size-Fits-All**
The KEP assumes that any ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140246)

**Metadata:**
- Created: 2026-07-06
- Comments: 5
- State: open

### kubernetes/kubernetes#140256: Lock DRADeviceTaints and DRADeviceTaintRules feature gates to GA in 1.38, remove in 1.41

## What this PR does / why we need it

Locks `DRADeviceTaints` and `DRADeviceTaintRules` feature gates to `true` in 1.38 as part of feature graduation. Both gates will be removed in 1.41.

## Which issue(s) this PR fixes

Related: #140179

## Type of change

- [x] Feature graduation

## Test plan

N...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140256)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140244: KEP-5502: Add emptyDir volume permission mode

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140244)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4450: schedule-builder does not move already EOL 1.33 to eol.yaml

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately via https://kubernetes.io/security/
-->

#### What happened:
...

🔗 [Link](https://github.com/kubernetes/release/issues/4450)

**Metadata:**
- Created: 2026-07-06
- Comments: 0
- State: open

### cncf/toc#2226: Move cncf/project-template ownership to TOC Project Reviews Subproject

## Proposal

Transfer ownership of [cncf/project-template](https://github.com/cncf/project-template) from TAG Contributor Strategy to the **TOC Project Reviews Subproject**.

## Why

The project-template repo contains governance, maintainer, contributor ladder, and security templates that are direct...

🔗 [Link](https://github.com/cncf/toc/issues/2226)

**Metadata:**
- Created: 2026-07-06
- Comments: 0
- State: open

## Updates

### kubernetes/test-infra#37399: remove 0-11 jobset

Following JobSet Release policy, we support N - 1 (0.12) branches.

So let's remove testing for 0.11.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37399)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56402: Add TLS Gateway example reference to Gateway documentation

The Gateway page in https://kubernetes.io/docs/concepts/services-networking/gateway/#api-kind-gateway currently includes an HTTP listener example, but it does not reference any documentation for configuring HTTPS with TLS.

Consider adding a **See also** note after the example that links to the blog...

🔗 [Link](https://github.com/kubernetes/website/issues/56402)

**Metadata:**
- Created: 2026-07-06
- Comments: 2
- State: open

### kubernetes/kubernetes#140263: DRAWorkloadResourceClaims shared ResourceClaimTemplate integration tests sometimes get stuck scheduling Pods

### Which jobs are flaking?

- `*-kubernetes-integration-*`

### Which tests are flaking?

- `TestSchedulerPerf/SharedPodGroupResourceClaimTemplate/1podgroup_1000pods`

Other configurations of the `SharedPodGroupResourceClaimTemplate` tests may be susceptible, but only the `1podgroup_1000pods` varia...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140263)

**Metadata:**
- Created: 2026-07-06
- Comments: 1
- State: open

### kubernetes/kubernetes#140251: [Flaky Test] [sig-storage] CSI Volumes [Driver: csi-hostpath] [Testpattern: Dynamic PV (default fs)] provisioning [It] should provision storage with any volume data source [Serial] [sig-storage, Serial]

### Which jobs are flaking?

[ci-kubernetes-e2e-gci-gce-serial](https://testgrid.k8s.io/sig-release-master-informing#gce-cos-master-serial&exclude-non-failed-tests=)

### Which tests are flaking?

Test

### Since when has it been flaking?

[7/4/2026, 5:19:52 PM](https://prow.k8s.io/view/gs/kubernete...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140251)

**Metadata:**
- Created: 2026-07-06
- Comments: 2
- State: open

### kubernetes/kubernetes#140266: Fix operand mutation bug in reflective ref.Val implementations of list concatenation

### What type of PR is this?
/kind bug
#### What this PR does / why we need it:
Fixes several bugs in the reflective and schemaless CEL type wrappers (`TypedToVal` and `SchemalessTypedToVal`):
1. **Operand Mutation in List Concatenation (`Add`)**:
   `ref.Val` `Add()` previously used `reflect.A...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140266)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140265: Migrate metav1.Condition.lastTransitionTime to declarative validation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140265)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140264: scheduler_perf: Disable flaky DRAWorkloadResourceClaims tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140264)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140262: Fix MemoryQoS protection lost during IPPR resize and PodLevelResources memory.high miscalculation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140262)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140261: Use context-aware wait in kubelet config mux

#### What type of PR is this?

/kind cleanup
/sig node
/wg structured-logging

#### What this PR does / why we need it

This updates the kubelet config mux to use `wait.UntilWithContext` instead of `wait.Until` with `ctx.Done()`.

The surrounding code already has a `context.Context`, and t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140261)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140260: Harden probe stress test container state checks

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it

This hardens the probe stress e2e test by verifying that all expected container statuses are present and that each container remains running during the stress window.

The existing test checks RestartCou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140260)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140259: e2e_node: fix nil pointer panic in StandaloneMode restart test



#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

`getPodFromStandaloneKubelet` returns `(nil, err)` whenever the kubelet's
`/pods` endpoint is transiently unreachable, which happens briefly right
after a kubelet restart.

In the `Standalo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140259)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140258: iscsi: prevent plugin directory path traversal

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it
This PR prevents path traversal when persisting iSCSI metadata under the kubelet plugin directory.

Previously, `persistISCSI()` trusted the path returned by `MakeGlobalPDName()` / `MakeGlobalVDPDName()` and calle...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140258)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140257: kubelet: handle static pod restarts before apiserver connection is up


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140257)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140255: support more object types with default describer

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140255)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140254: DRA scheduler_perf improvements

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This combines several generic scheduler_perf improvements (e.g. collection of profiles for the measurement section of a test case, better templating support) with an update of the DRA performance configs. I...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140254)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140253: scheduler: avoid data race when requeueing failed pods

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

handleSchedulingFailure updated podInfo.PodInfo in place before requeueing, mutating a QueuedPodInfo that can be read concurrently by the scheduling queue.

Copy podInfo locally and requeue the copy instead of mutati...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140253)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140252: scheduler: check extender filters during preemption dry run

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Checks scheduler extender filters during default preemption dry-run after in-tree filter plugins pass. Without this, preemption can select victims on nodes that extenders would still reject.

#### Which issue(s) this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140252)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140250: kubelet: count rootfs in container ephemeral eviction with dedicated image fs

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes container ephemeral storage eviction when dedicatedImageFs is enabled. Container rootfs usage was excluded from eviction checks, allowing disk exhaustion.

When dedicatedImageFs is enabled, container ephemeral ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140250)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140249: [FG: InPlacePodVerticalScalingExclusiveCPUs] cpu quota limit status set equal to request for pods with exclusive cpus

#### What type of PR is this?

/kind bug
/kind feature

#### What this PR does / why we need it:

When pods with exlusive cpus are resized, this commit ensures the new allocated cpu quota limit will be set equal to request, when DisableCPUQuotaWithExclusiveCPUs is enabled ( enabled by default...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140249)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140248: [CPG API WIP] Changes to scheduling queue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140248)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140245: portforward: gate per-connection "Handling connection" log behind V(2)

<!--  Thanks for sending a pull request!  Here are some tips for you:
...
-->

#### What type of PR is this?

/kind cleanup
/sig cli
/area kubectl

#### What this PR does / why we need it:

`PortForwarder.handleConnection` wrote `Handling connection for <port>` to `out` on every connection, uncondit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140245)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9683: Revert "Enable image registry for Gateway API conformance images"

Reverts kubernetes/k8s.io#9674

We'll reuse the existing gateway-api staging registry but with different images names.

details: https://kubernetes.slack.com/archives/CCK68P2Q2/p1783003600631589

@rikatz

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9683)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9940: Remove Azure VMAS Support

**Which component are you using?**:

/area cluster-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

AKS no longer supports creating new clusters using VMAS nodepools - they are hard blocked - and doesn't support autoscaling ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9940)

**Metadata:**
- Created: 2026-07-06
- Comments: 1
- State: open

### kubernetes/autoscaler#9936: [VPA] Add per-VPA observation window before Updater applies recommendations

**Which component are you using?**:

/area vertical-pod-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

When new Deployments are provisioned automatically — by CI, per-tenant provisioning, on-demand app creation, etc. — a V...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9936)

**Metadata:**
- Created: 2026-07-06
- Comments: 3
- State: open

### kubernetes/autoscaler#9939: Bump the non-kubernetes group across 2 directories with 21 updates

Bumps the non-kubernetes group with 4 updates in the /vertical-pod-autoscaler directory: [github.com/go-openapi/jsonpointer](https://github.com/go-openapi/jsonpointer), [github.com/go-openapi/swag](https://github.com/go-openapi/swag), [github.com/prometheus/procfs](https://github.com/prometheus/proc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9939)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9938: Bump the patch-updates group across 2 directories with 37 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9938)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9937: Bump dorny/paths-filter from 4.0.1 to 4.0.2

Bumps [dorny/paths-filter](https://github.com/dorny/paths-filter) from 4.0.1 to 4.0.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/dorny/paths-filter/releases">dorny/paths-filter's releases</a>.</em></p>
<blockquote>
<h2>v4.0.2</h2>
<h2>What's Changed</...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9937)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18543: gce: register all zonal MIGs of a multi-zone instance group with cluster-autoscaler

For a GCE instance group spanning multiple zones, kOps creates one zonal InstanceGroupManager per zone, but only registered the first zone's MIG with cluster-autoscaler, carrying the full min/max of the instance group. The MIGs in the remaining zones were invisible to the autoscaler and were never s...

🔗 [Link](https://github.com/kubernetes/kops/pull/18543)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9065: [Steering Election 2026] Add voters from approved exception requests - July 6

This PR adds following voters from approved exception requests, as of July 6, 2026:
- @bridgetkromhout 
- @chris-short 
- @intUnderflow

/assign @npolshakova @sreeram-venkitesh 

/hold for review and approval from Election Officers

🔗 [Link](https://github.com/kubernetes/community/pull/9065)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4449: Dependency update - Golang 1.26.5/1.25.12

### Tracking info

<!-- Search query: https://github.com/kubernetes/release/issues?q=is%3Aissue+Dependency+update+-+Golang -->
<!-- Example: https://github.com/kubernetes/release/issues/3383 -->
Link to any previous tracking issue: 

<!-- golang-announce mailing list: https://groups.google.com/g/gol...

🔗 [Link](https://github.com/kubernetes/release/issues/4449)

**Metadata:**
- Created: 2026-07-06
- Comments: 0
- State: open

### cncf/toc#2233: [Initiative]: Scale and performance testing guidance

### Name

Scale and performance testing guidance for CNCF projects

### Short description

Define performance testing expectations by project type so DD reviewers and projects have clear benchmarks to target.

### Responsible group

TAG Operational Resilience

### Does the initiative belong to a sub...

🔗 [Link](https://github.com/cncf/toc/issues/2233)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2232: [Initiative]: Community growth playbook for CNCF projects

### Name

Community growth playbook for CNCF projects

### Short description

Practical guidance for CNCF projects on contributor recruitment, onboarding, and retention to build sustainable communities.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproject...

🔗 [Link](https://github.com/cncf/toc/issues/2232)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2231: [Initiative]: Vendor neutrality guidance for CNCF projects

### Name

Vendor neutrality guidance for CNCF projects

### Short description

Standardize vendor-neutrality expectations for CNCF projects across governance rules, container image metadata, and infrastructure ownership.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Y...

🔗 [Link](https://github.com/cncf/toc/issues/2231)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2230: [Initiative]: Public roadmap documentation standards

### Name

Public roadmap documentation standards

### Short description

Standardize how CNCF projects maintain a persistent, discoverable public roadmap with a documented change process.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproject name

Project ...

🔗 [Link](https://github.com/cncf/toc/issues/2230)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2229: [Initiative]: Adopter documentation standards (ADOPTERS.md)

### Name

Adopter documentation standards (ADOPTERS.md)

### Short description

Standardize ADOPTERS.md format with recommended fields so projects, DD reviewers, and adopters have consistent expectations.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproje...

🔗 [Link](https://github.com/cncf/toc/issues/2229)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-07 02:51:41*
