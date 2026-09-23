---
title: "Upstream Github - 2026-09-23"
description: "CNCF upstream activity from github"
pubDate: 2026-09-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/storage", "needs-triage", "sig/node", "sig/apps", "sig/scheduling", "wg/workload-aware-scheduling", "kind/feature", "sig/api-machinery", "kind/flake", "kind/cleanup", "sig/auth", "pr", "size/S", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "size/L", "kind/api-change", "sig/testing", "area/kubelet", "release-note", "size/M", "size/XXL", "approved", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "size/XL", "ok-to-test", "area/apiserver", "sig/autoscaling", "size/XS", "do-not-merge/hold", "sig/instrumentation", "sig/architecture", "area/kubectl", "sig/cli", "sig/scalability", "language/ko", "area/localization", "website", "language/fa", "triage/accepted", "area/github-management", "sig/etcd", "org", "enhancements", "kind/kep", "area/provider/azure", "area/jobs", "area/config", "test-infra", "priority/important-longterm", "release", "cloud-provider-aws", "cloud-provider-gcp", "area/cluster-autoscaler", "area/provider/oci", "autoscaler", "cloud-provider-openstack", "prometheus", "containerd", "area/ctr", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142328: Node Declared Features: allow a feature to opt out of re-admission enforcement after kubelet restart

### What would you like to be added?

An extension to the Node Declared Features (NDF, KEP-5328) framework so that an individual feature can distinguish *first admission* of a pod from *re-admission* of a pod that was already admitted on this node before a kubelet restart, and choose not to require ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142328)

**Metadata:**
- Created: 2026-09-22
- Comments: 6
- State: open

### kubernetes/kubernetes#142318: Deprecate and remove `AuthorizationConfiguration` versions `v1alpha1` and `v1beta1`

We moved to `v1` already in v1.32.
xref: https://github.com/kubernetes/kubernetes/pull/137633#discussion_r3969974666

I can do it; I guess I'll just add the official deprecation warning in v1.38, and then we can drop them in v1.40, right?

/sig auth
/kind cleanup
cc @liggitt 

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142318)

**Metadata:**
- Created: 2026-09-22
- Comments: 2
- State: open

### kubernetes/kubernetes#142311: [WIP] node authorizer: bound hasPathFrom traversal cost


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
/kind re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142311)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6420: KEP-5710: clarify PodGroupPreemptionPolicy graduation criteria and priority validation

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description: KEP-5710: Promote Workload Aware Preemption to GA in v1.38

<!-- link to the k/enhancements issue -->
- Issue link: https://github.com/kubernetes/enhancem...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6420)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142332: [Bug]: Informer cache lag on PVC claim state in pv_controller can trigger premature volume deletion

### What happened?
In `pv_controller` (`isVolumeReleased` in `pkg/controller/volume/persistentvolume/pv_controller.go:1382`), the controller inspects the local informer claim cache (`ctrl.claims.Get(claimName)`) to verify if a claim bound to a PV is released before marking the volume released or per...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142332)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/kubernetes#142331: [Bug]: Informer cache lag on out-of-service taint causes premature force deletion / volume detachment

### What happened?
Controllers handling `node.kubernetes.io/out-of-service` taints (`podgc` and `attachdetach`) rely on local informer caches (`nodeLister`) to inspect Node objects before executing non-reversible force operations (e.g., force-deleting terminating pods or force-detaching volumes):
- ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142331)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/kubernetes#142330: WAS: Gang-scheduled Job never completes if an index pod fails after another index has completed

### What happened?

The Indexed Job using `spec.scheduling.schedulingPolicy.gang` never finishes if any index's pod terminates after at least one other index has completed. The replacement pod is created but never scheduled.

The scheduler's pod informer excludes Succeeded/Failed pods, so completed ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142330)

**Metadata:**
- Created: 2026-09-22
- Comments: 2
- State: open

### kubernetes/kubernetes#142324: [Flaky Test] [sig api-machinery] ResourceQuota should create a ResourceQuota and capture the life of a ResourceClaim [DRA]

### Which jobs are flaking?

pull-kubernetes-e2e-gce

### Which tests are flaking?

Kubernetes e2e suite: [It] [sig-api-machinery] ResourceQuota should create a ResourceQuota and capture the life of a ResourceClaim [DRA] 

### Since when has it been flaking?

https://prow.k8s.io/view/gs/kubernetes-c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142324)

**Metadata:**
- Created: 2026-09-22
- Comments: 1
- State: open

### kubernetes/kubernetes#142321: [Flaky Test] [sig api-machinery] CustomResourceValidationRules [Privileged:ClusterAdmin]

### Which jobs are flaking?

pull-kubernetes-e2e-gce

### Which tests are flaking?

Kubernetes e2e suite: [It] [sig-api-machinery] CustomResourceValidationRules [Privileged:ClusterAdmin] MUST fail create of a custom resource that exceeds the runtime cost limit for x-kubernetes-validations rule execu...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142321)

**Metadata:**
- Created: 2026-09-22
- Comments: 1
- State: open

### kubernetes/kubernetes#142334: volume: cap recycler timeout at math.MaxInt32

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`CalculateTimeoutForVolume` scales a recycler pod's timeout based on the PV capacity (`(pvSize / 1Gi) * timeoutIncrement`). Both the `hostpath` and `nfs` volume plugins assign this returned `int64` timeout directly t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142334)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142333: certificates: graduate declarative validation tags to GA

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR graduates the declarative validation markers in `certificates/v1` and `certificates/v1beta1` from beta to GA by removing the `+k8s:beta(since: "1.37")` prefixes across all CSR condition rules.

Specifically...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142333)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142329: Node Declared Features: allow a feature to opt out of re-admission enforcement after kubelet restart

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Scheduler filtering and kubelet admission share the same InferForScheduling call. When a kubelet restarts with a feature gate disabled, it re-admits its running pods and rejects those that still require the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142329)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142327: Add Resource Version to Pod Binding API

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142327)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142325: [WIP] [DO NOT REVIEW] Initial POC for preemption-aware scoring.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142325)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142323: core/validation: ratchet stored resource quantities on update

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Several of the integer/overflow checks on `resource.Quantity` tightened during the #141166 burndown now reject a resource quantity that was already stored and accepted before the check tightened, once any other part ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142323)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142322: limitranger: compare the limit to request ratio at any scale

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`exceedsAllowed` returned false whenever the product of the request and the ratio had a scale below `inf.Scale`. The premise was that no limit could exceed such a product, but a limit has its own mantissa and scale. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142322)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142320: [WIP] Skip managedFields re-decode when admission leaves them unchanged

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Skips the managedFields decode in the managedFields validating admission wrapper when admission left managedFields unchanged, which drops 706 allocations and 29 KB per write on a pod carrying 3.7 KB of fieldsV1.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142320)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142319: refactor hpa client test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142319)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142317: Increase CRD deletion verification timeout

Fixes #138085

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142317)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142316: scheduler: Parametrize nodes per rack in TAS performance tests

#### What type of PR is this?
/kind cleanup
/sig scheduling

#### What this PR does / why we need it
As per discussion/suggestion:
https://github.com/kubernetes/kubernetes/pull/141965#discussion_r4028002133

Right now, in TAS, tests at scale equal to or below 100 nodes run with a single topo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142316)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142315: scheduler: add node-dimension diagnosis for failed PodGroup scheduling

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

When a pod group fails to schedule, the `PodGroupInitiallyScheduled` condition carries only the group-level message:

```
pod group is unschedulable, minCount (80) cannot be satisfied: 30 scheduled, 0 remaining
`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142315)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142314: [WIP][DO NOT SUBMIT] POC for adjusted preemption triggering logic for subsequent scheduling attempts

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

Quick and dirty POC for the WAP triggering logic adjustments needed to extend the idea from https://github.com/kubernetes/enhancements/pull/6194 to CPG hierarchies.

The TL;DR decision tree when to trigger ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142314)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142313: flowcontrol: graduate PriorityLevelConfigurationSpec declarative validation to stable

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Graduates six Declarative Validation rules on `PriorityLevelConfigurationSpec` in flowcontrol from beta to stable.

**Key changes:**
- **`types.go`**: stripped `+k8s:beta(since: "1.37")=` prefix from
  ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142313)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142312: Add informer initialization duration metric

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds the alpha `informer_initialization_duration_seconds` histogram for named shared informers. It measures from `RunWithContext` until the first cache sync, covering LIST, WatchList, retries, fallback, queue dra...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142312)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142310: kubectl describe: show clusterTrustBundle and podCertificate projected volume sources

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`printProjectedVolumeSource` is an `if / else if` chain over the four projected source kinds it knows about (`secret`, `downwardAPI`, `configMap`, `serviceAccountToken`). It has no arm for `ClusterTrustBundle` or `PodC...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142310)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142307: Optimize for when pods have >1 index

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142307)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142306: kubelet: prefer measured over-request pods when eviction stats are missing

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When pod stats are missing, kubelet currently ranks that pod for eviction ahead of a pod whose measured memory or disk usage exceeds its request. This change prefers the measured over-request pod. If no over-re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142306)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142304: Direct lister from watch cache

This PR implements direct SharedInformerFactory that is able to serve Lister interface directly from watch cache in a way that is totally transparent to admission. 

Ref https://github.com/kubernetes/kubernetes/issues/142223

Related: https://github.com/kubernetes/kubernetes/pull/121979 and http...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142304)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57675: [ko] Fix broken Kubelet glossary link

## **Problem:**

On the [Korean CRI page](https://kubernetes.io/ko/docs/concepts/containers/cri/), clicking the Kubelet glossary tooltip
{{< glossary_tooltip text="Kubelet" term_id="kubelet" >}}
opens the following URL, which returns 404:

```
/ko/docs/reference/generated/kubelet/
```

The Korean gl...

🔗 [Link](https://github.com/kubernetes/website/issues/57675)

**Metadata:**
- Created: 2026-09-22
- Comments: 1
- State: open

### kubernetes/website#57672: [fa] Translate content/en/docs/setup/learning-environment/_index.md into Persian

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/learning-environment/_index.md` into Persian

**Website Link**

- English: https://kubernetes.io/docs/setup/learning-environment/

**Why is this needed**

This page is not translated yet.

/area loca...

🔗 [Link](https://github.com/kubernetes/website/issues/57672)

**Metadata:**
- Created: 2026-09-22
- Comments: 1
- State: open

### kubernetes/org#6664: Revert "etcd: Update release-etcd team for release window"

This reverts commit 59ad3d2dc194aebb2d85b33ffd5bbe8c90bccec4.

Back to BAU after today's releases.

/cc @ahrtr 

🔗 [Link](https://github.com/kubernetes/org/pull/6664)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6412: Expose cgroup v2 memory.events counters in CRI container stats

### Enhancement Description

- One-line enhancement description (can be used as a release note): Expose cgroup v2 `memory.events` counters (low/high/max/oom/oom_kill) through the CRI stats API and the kubelet Summary API, so operators can count memory-threshold crossings (complementary to PSI's time...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6412)

**Metadata:**
- Created: 2026-09-22
- Comments: 2
- State: open

### kubernetes/test-infra#37905: fix: use non-ci templates for for cloud-provider-azure 1.33 test jobs

This PR updates the cloud-provider-azure release-1.33 test jobs to use stable, non-CI cluster templates hosted in cloud-provider-azure, replacing the CAPZ ci-version templates.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37905)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37903: sig-node: exclude [Slow] specs from ci-kubernetes-node-e2e-containerd-serial

﻿## What this does
Excludes `[Slow]` specs from `ci-kubernetes-node-e2e-containerd-serial` by adding `!Slow` to the ginkgo label filter (`!Flaky && !Slow && Serial && NodeConformance`), instead of the timeout bump originally proposed.

## Why
kubernetes/kubernetes#142147 tracks this job intermittent...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37903)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws: helm-chart-aws-cloud-controller-manager-0.0.12

Installs Cloud Controller Manager for AWS Cloud Provider

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/releases/tag/helm-chart-aws-cloud-controller-manager-0.0.12)

**Metadata:**
- Version: helm-chart-aws-cloud-controller-manager-0.0.12
- Published: 2026-09-22
- Prerelease: No

### kubernetes/cloud-provider-gcp#1362: feat,metis: support non-reusable cidr blocks

### What this PR does
   - **Schema**: Added `reusable BOOLEAN NOT NULL DEFAULT TRUE` column to `cidr_blocks` table in [`schema.sql`](file:///usr/local/google/home/zivy/cloud-provider-gcp/metis/pkg/store/schema.sql#L36).
   - **Store API**: Added `AddCIDRWithReusable(ctx, network, cidr, reusable)`...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1362)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10335: changes for ignore-unmanaged-node-pool-check-forCA

(cherry picked from commit 41739a47f79f061c8f37f1c55481506efbb77e8e)

#### What type of PR is this?

Bug Fix

Optionally add one or more of the following kinds if applicable:

#### What this PR does / why we need it:

Cherry pick commit from master

#### Which issue(s) this PR fixes:
Fo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10335)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3236: [release-1.36] [occm] restore nodes delete on the CCM ClusterRole

This is an automated cherry-pick of #3228

/assign stephenfin

```release-note
Restore nodes delete on the OCCM ClusterRole so gone OpenStack VMs can be removed from the cluster.
```

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3236)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.15.0-rc.1 / 2026-09-21

- [BUGFIX] TSDB: Avoid WAL corruption after a failed WAL write in Agent mode. #19700


🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.15.0-rc.1)

**Metadata:**
- Version: v3.15.0-rc.1
- Published: 2026-09-22
- Prerelease: Yes

### containerd/containerd#14208: [Regression 2.4.0] ctr run treats container command flags as ctr flags ("flag provided but not defined")

### Description

In containerd 2.4.0, passing container command arguments that begin with a dash (such as `bash -uexc "..."` or `sh -c "..."`) causes `ctr run` to fail with `flag provided but not defined`.

In all previous versions of containerd (containerd 1.7.x and 2.0.x through 2.3.x), `ctr run [...

🔗 [Link](https://github.com/containerd/containerd/issues/14208)

**Metadata:**
- Created: 2026-09-22
- Comments: 0
- State: open

### containerd/accelerated-container-image: Development Build

## Bug Fixes
- omit empty uidmap/gidmap mount options when remapIDs is enabled [#398](https://github.com/containerd/accelerated-container-image/pull/398) ([Archana Choudhary](https://github.com/containerd/accelerated-container-image/commit/434b69c404bba5dbe99c8e3d735f5be7ae420b13))

## Commits
- 5772b59: Add remap IDs capability (Archana Choudhary) [#398](https://github.com/containerd/accelerated-container-image/pull/398)
- f791c7a: Fix docker normalOverlayMount call for remap IDs (Archana Choud...

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-22
- Prerelease: Yes


---

*This content was automatically collected on 2026-09-23 03:15:07*
