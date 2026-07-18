---
title: "Upstream Github - 2026-07-18"
description: "CNCF upstream activity from github"
pubDate: 2026-07-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "area/kubelet", "sig/node", "pr", "sig/scheduling", "size/L", "kind/api-change", "release-note-none", "cncf-cla: yes", "needs-priority", "sig/network", "sig/storage", "needs-rebase", "sig/auth", "sig/apps", "approved", "area/code-generation", "wg/device-management", "area/apiserver", "release-note", "size/S", "sig/instrumentation", "sig/etcd", "kind/feature", "triage/accepted", "area/test", "kind/cleanup", "size/M", "sig/testing", "sig/architecture", "priority/important-soon", "kind/failing-test", "lgtm", "do-not-merge/hold", "do-not-merge/work-in-progress", "size/XXL", "size/XS", "area/dependency", "needs-ok-to-test", "wg/structured-logging", "do-not-merge/cherry-pick-not-approved", "wg/workload-aware-scheduling", "size/XL", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "sig/cli", "sig/cloud-provider", "ok-to-test", "committee/security-response", "area/access", "area/groups", "sig/k8s-infra", "k8s.io", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "do-not-merge/release-note-label-needed", "area/jobs", "area/config", "test-infra", "area/provider/vmware", "cloud-provider-gcp", "website", "ingress-gce", "prometheus", "release", "client_golang"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140688: CPUManager distribute-cpus-across-cores relies on CPU numbering order instead of topology

## What happened?

The `distribute-cpus-across-cores` CPU manager policy option (KEP-4176, alpha since v1.31) does not correctly spread CPUs across physical cores on systems where sibling thread CPU IDs are contiguous (e.g., core 0 = CPUs 0,1; core 1 = CPUs 2,3).

The spread algorithm in `sortAvaila...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140688)

**Metadata:**
- Created: 2026-07-17
- Comments: 1
- State: open

### kubernetes/kubernetes#140695: improve scheduler_perf by gathering metrics once per collection

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
/kind regr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140695)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140691: Use assumecache in the PV controller to fix storeObjectUpdate races

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The PV controller kept its own PV/PVC caches (`ctrl.volumes`, `ctrl.claims`) separate from the shared informers, reconciled via `storeObjectUpdate()`. That split brain caused #124224:

- an in-flight controll...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140691)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140684: kep-5304: add roundtripping test for metadata API.

Assisted-by: Cursor <noreply@cursor.com>

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guid...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140684)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9731: Add Akamai Cloud to private distributors list

Closes https://github.com/kubernetes/committee-security-response/issues/227

/cc @kubernetes/security-response-committee

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9731)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140689: CRD with identical per-version selectableFields but differing per-version schemas is rejected due to internal hoisting

### What happened?

Creating a multi-version `apiextensions.k8s.io/v1` CRD that declares the **same** `selectableFields` on two served versions whose **schemas differ** is rejected by the apiserver:

```
The CustomResourceDefinition "widgets.example.com" is invalid:
spec.selectableFields: Invalid va...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140689)

**Metadata:**
- Created: 2026-07-17
- Comments: 2
- State: open

### kubernetes/kubernetes#140699: fix: validate PodTopologySpread plugin args for constraint fields

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140699)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140698: DV: make nil values be "Required" errors, add an optional value to +k8s:optional

This allows nested subfields across pointers, but puts the onus on the caller to do an optional check.

`+k8s:subfield(structPtrField)=+k8s:subfield(stringField)=...` might panic but `+k8s:subfield(structPtrField)=+k8s:optional=+k8s:subfield(stringField)=...` will not.

This requires being expli...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140698)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140697: etcd3: scope listStream metric to etcd transfer time only

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

I noticed some `operation="listStream"` requests logged as taking longer than `operation="list"` for the same data, despite being faster in all our measurements and performance testing. 

`listStream` records...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140697)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140696: Support max bytes on string slice and maps. 

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR extends the `+k8s:maxBytes` validation tag to support string slices and string maps. 

Specifically, it:
- Adds `MaxBytesSlice` and `MaxBytesMap` validator functions in `apimachinery/pkg/api/validate...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140696)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140694: Fix hugepage reporting e2e test assertion for disabled feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140694)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140693: code-generator/validation-gen: Disable nested +k8s:subfield validations

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Nested subfield validations are disabled to prevent nil pointer dereferences in the generated validation code. This restriction can be lifted once the code generator robustly handles optionality and requiredness ch...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140693)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140692: WIP: suspend pod relists while syncing pod

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

SyncPod is always called in a single pod worker thread, and SyncPod is the only thing that processes events from the PLEG relist. Therefore, any relists that happen while SyncPod is running may be waisted effor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140692)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140690: Improve readability of DV output

This just changes comments in generated code.

/kind cleanup
```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140690)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140687: DRA: Add declarative validation for device metadata

Assisted-by: Cursor <noreply@cursor.com>

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds declarative validation markers and generated non-registering validation functions for the v1alpha1 DRA device metadata API. Go consumers can validate required reques...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140687)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140686: ttlafterfinished: use contextual informer logging

#### What type of PR is this?

/kind cleanup
/sig apps
/wg structured-logging

#### What this PR does / why we need it:

Passes the TTL-after-finished controller's contextual logger to its Job informer event handler registration. This lets informer internals use the controller's logger instead of a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140686)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140685: Automated cherry pick of #139162: Fix case where preemptor may be stuck in unschedulable queue
#139330: Unset WasFlushedFromUnschedulable for gated pods
#139331: Make sure gated pods are flushed with the same frequency as non-gated

Cherry pick of #139162 #139330 #139331 on release-1.36.

#139162: Fix case where preemptor may be stuck in unschedulable queue
#139330: Unset WasFlushedFromUnschedulable for gated pods
#139331: Make sure gated pods are flushed with the same frequency as non-gated

For details on the cherry pick proc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140685)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140683: Allow WAP when pod group uses TAS

#### What type of PR is this?

/kind feature


#### What this PR does / why we need it:

This PR enables pod group preemption when the pod group cycle fails for a pod group that was using Topology Aware Scheduling.

#### Which issue(s) this PR is related to:

https://github.com/kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140683)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140681: kubelet: clean residual CSI vol_data.json during orphaned pod volume cleanup

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it

After a hard node reboot, CSI mount points under the pod volumes tree are usually gone, but the CSI metadata file often remains:

`.../volumes/kubernetes.io~csi/<volume>/vol_data.json`

Orphaned pod volum...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140681)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140680: Update prometheus/client_golang to 1.24.0-rc.0

### What type of PR is this?

/kind feature
/hold

#### What this PR does / why we need it:

As per [new client_golang release process](https://github.com/prometheus/client_golang/blob/main/RELEASE.md) we try to understand better potential compatibility issues for every minor release, against a bigg...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140680)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140678: Address code review feedback of cpu_assignment.go

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140678)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140677: feat(oidc): add optional key cache refresh on unknown kid

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140677)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140676: Migrate ObjectMeta labels and finalizers validation to declarative validation

#### What type of PR is this?

/kind cleanup
/kind feature

#### What this PR does / why we need it:

This PR migrates format validation rules for `ObjectMeta.labels` and `ObjectMeta. Finalizers` to declarative validation.

- Added normalization rules translating nested error paths  labels[...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140676)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9995: Introduce autoscalers CRD category for HPA and VPA

Following the discussion in #9987, @soltysh suggested introducing a new CRD category for HPA and VPA rather than adding VPA to the all category.
This proposes adding an autoscalers category so users can run:
```bash
kubectl get autoscalers
```

This aligns with the upstream effort to improve API cat...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9995)

**Metadata:**
- Created: 2026-07-17
- Comments: 4
- State: open

### kubernetes/autoscaler#9997: dependabot(deps): bump golang.org/x/net from 0.56.0 to 0.57.0 in /cluster-autoscaler

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.56.0 to 0.57.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/net/commit/b8f09f6f062ceb4531b7af4bd17a5c8fe9c4b2b5"><code>b8f09f6</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="htt...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9997)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9996: dependabot(deps): bump golang.org/x/crypto from 0.53.0 to 0.54.0 in /cluster-autoscaler

Bumps [golang.org/x/crypto](https://github.com/golang/crypto) from 0.53.0 to 0.54.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/crypto/commit/cdce021fa6c7d9c7eb2743bfbe551f0a98fd5d62"><code>cdce021</code></a> go.mod: update golang.org/x dependencies</li>
<li><a ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9996)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9994: AEP-9970: per-VPA target percentiles

**What type of PR is this?**
/kind feature
/area vertical-pod-autoscaler

**What this PR does / why we need it:**
Adds AEP-9970: per-VPA target percentiles — `targetCPUPercentile` and `targetMemoryPercentile` on `ContainerResourcePolicy`, extending AEP-8026's per-VPA configuration mechanism to the t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9994)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37488: Adding New Functional Tests

Adding new functional e2e tests for EBS CSI Driver. This is a unification of what was previously single-az and multi-az tests. 

This is PR # 2 out of the three necessary. See https://github.com/kubernetes-sigs/aws-ebs-csi-driver/pull/2964#issue-4904510314 for more details.

/hold 

Holding un...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37488)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37485: cloud-provider-vsphere: add boilerplate verification job

This adds a new dedicated presubmit job `pull-cloud-provider-vsphere-verify-boilerplate` to verify the copyright boilerplate of source files on PR creation.

CPI PR: https://github.com/kubernetes/cloud-provider-vsphere/pull/1814

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37485)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1256: chore(deps): bump the workspace-deps group across 3 directories with 3 updates

Bumps the workspace-deps group with 2 updates in the /metis directory: [google.golang.org/grpc](https://github.com/grpc/grpc-go) and [github.com/mattn/go-sqlite3](https://github.com/mattn/go-sqlite3).
Bumps the workspace-deps group with 1 update in the /providers directory: [google.golang.org/api](h...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1256)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1255: chore(deps): bump the workspace-deps group across 3 directories with 3 updates

Bumps the workspace-deps group with 2 updates in the /metis directory: [google.golang.org/grpc](https://github.com/grpc/grpc-go) and [github.com/mattn/go-sqlite3](https://github.com/mattn/go-sqlite3).
Bumps the workspace-deps group with 1 update in the /providers directory: [google.golang.org/api](h...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1255)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56517: etcd --listen-client-urls and --advertise-client-urls configuration doesn't match etcd documentation

**This is a Bug Report**

<!--Required Information-->
**Problem:**

In https://github.com/kubernetes/website/blob/main/content/en/docs/tasks/administer-cluster/configure-upgrade-etcd.md#multi-node-etcd-cluster it gives the example:

etcd --listen-client-urls=http://$IP1:2379,http://$IP2:2379,http://...

🔗 [Link](https://github.com/kubernetes/website/issues/56517)

**Metadata:**
- Created: 2026-07-17
- Comments: 1
- State: open

### kubernetes/website#56512: Language switcher redirects to homepage instead of equivalent page when switching locales

This is a Bug Report

Problem:
The English kubectl cheat sheet page was renamed/moved from /docs/reference/kubectl/cheatsheet/ to /docs/reference/kubectl/quick-reference/. However, the Portuguese (and likely other localized) translation still lives at the old path: /pt-br/docs/reference/kubectl/chea...

🔗 [Link](https://github.com/kubernetes/website/issues/56512)

**Metadata:**
- Created: 2026-07-17
- Comments: 2
- State: open

### kubernetes/ingress-gce#3173: Create a sync latency metric for the L4 Standalone NEG services.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3173)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3170: Refactor L4 standalone NEG controller logic

Apply fixes for error handling

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3170)

**Metadata:**
- Created: 2026-07-17
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_golang: v1.24.0-rc.0 - 2026-07-17

### Changes

* [CHANGE] Minimum required Go version is now 1.25, only the two latest Go versions (1.25 and 1.26) are supported from now on. #1862
* [CHANGE] prometheus: Name validation now always uses the UTF-8 scheme instead of the deprecated `model.NameValidationScheme` global. Default behavior is unchanged; code that set `NameValidationScheme = LegacyValidation` no longer gets legacy enforcement at metric, label, and push-grouping construction. #2051
* [CHANGE] api/prometheus/v1: Support ...

🔗 [Link](https://github.com/prometheus/client_golang/releases/tag/v1.24.0-rc.0)

**Metadata:**
- Version: v1.24.0-rc.0
- Published: 2026-07-17
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-18 02:11:10*
