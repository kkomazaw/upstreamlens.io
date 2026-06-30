---
title: "Upstream Github - 2026-06-30"
description: "CNCF upstream activity from github"
pubDate: 2026-06-30
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "wg/device-management", "wg/workload-aware-scheduling", "sig/node", "sig/instrumentation", "sig/scheduling", "needs-sig", "sig/api-machinery", "pr", "size/M", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/apiserver", "release-note", "size/XS", "kind/feature", "do-not-merge/hold", "area/test", "size/XXL", "kind/api-change", "sig/testing", "do-not-merge/release-note-label-needed", "area/code-generation", "ok-to-test", "approved", "do-not-merge/needs-sig", "size/XL", "sig/apps", "api-review", "sig/etcd", "needs-rebase", "lgtm", "size/L", "area/kubelet", "do-not-merge/work-in-progress", "area/e2e-test-framework", "area/dependency", "kind/cleanup", "sig/autoscaling", "size/S", "area/github-management", "org", "autoscaler", "area/vertical-pod-autoscaler", "area/cluster-autoscaler", "cncf-cla: no", "do-not-merge/needs-area", "triage/accepted", "release-note-action-required", "area/provider/gce", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "sig/network", "area/testing", "kind/flake", "minikube", "dependencies", "go", "sig/cluster-lifecycle", "sig/storage", "area/jobs", "area/config", "test-infra", "kubectl", "git-sync", "website", "language/en", "containerd", "area/distribution", "release", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140083: Possible user confusion from differing zpage information

I've been look at the zpages support which went to beta in 1.36 ( [KEP-4828](https://github.com/kubernetes/enhancements/blob/master/keps/sig-instrumentation/4828-component-flagz/README.md) ) and I wanted to provide some feedback on where I think the current design might cause some user confusion, ba...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140083)

**Metadata:**
- Created: 2026-06-29
- Comments: 6
- State: open

### kubernetes/kubernetes#140084: KEP-5941 for DRA shared consumable capacity

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140084)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9890: Graduate CapacityQuota to v1beta1

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9890)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56315: [WIP][placeholder] KEP-5366: Graceful Leader Transition (v1.37 beta)

Placeholder docs PR for [KEP-5366: Graceful Leader Transition](https://github.com/kubernetes/enhancements/issues/5366), graduating to beta on by default in v1.37.

Updates the `ControllerManagerReleaseLeaderElectionLockOnExit` feature gate reference to add the v1.37 beta default-on stage. WIP, will ...

🔗 [Link](https://github.com/kubernetes/website/pull/56315)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56314: [WIP][placeholder] KEP-5966: etcd RangeStream (v1.37 beta)

Placeholder docs PR for [KEP-5966: etcd RangeStream](https://github.com/kubernetes/enhancements/issues/5966), targeting beta in v1.37.

Adds the `EtcdRangeStream` feature gate reference (beta, default off in v1.37). WIP, will flesh out any additional docs before the deadline.

/sig etcd
/kind featur...

🔗 [Link](https://github.com/kubernetes/website/pull/56314)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56313: [WIP][placeholder] KEP-6178: Concurrent Watch Object Decode (v1.37 beta)

Placeholder docs PR for [KEP-6178: Concurrent Watch Object Decode](https://github.com/kubernetes/enhancements/issues/6178), graduating to beta on by default in v1.37.

Updates the `ConcurrentWatchObjectDecode` feature gate reference to add the v1.37 beta default-on stage. WIP, will flesh out any add...

🔗 [Link](https://github.com/kubernetes/website/pull/56313)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140087: DRA: Reusing pending claim allocation in PodGroup bypasses node selector check

### What happened?

When two pods in a PodGroup share a ResourceClaim, the dra scheduler plugin reuses the in-memory `pendingAllocation` created during the `Reserve` phase of the first pod (`pod0`).
However, during `PreFilter` when reusing `pendingAllocation`
https://github.com/kubernetes/kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140087)

**Metadata:**
- Created: 2026-06-29
- Comments: 3
- State: open

### kubernetes/kubernetes#140082: Preemptor pod gets stuck in unschedulable queue when preempting a pod in PreBind/Permit phase

# Description
When the SchedulerAsyncPreemption feature gate is enabled, a race condition in the scheduler can cause a high-priority preemptor pod to become stuck in the unschedulableEntities queue indefinitely after preempting a victim pod that is currently in the PreBind phase (or is a WaitingPod ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140082)

**Metadata:**
- Created: 2026-06-29
- Comments: 4
- State: open

### kubernetes/kubernetes#140078: SAST. Potential bugs dereference of the null pointer and file descriptor leak

The static analyzer found several potential bugs:
1. In [pkg/kubelet/pod_workers.go in the podWorkerLoop function on line 1302](https://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/pod_workers.go#L1302 ) there may be a potential dereference of the status pointer when passing this argumen...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140078)

**Metadata:**
- Created: 2026-06-29
- Comments: 3
- State: open

### kubernetes/kubernetes#140074: DRA: clean up custom `library.IncludesOption()` registration in 1.38

During the migration of the `.includes` CEL function to the standard CEL lists library, we needed a custom registration block for `library.IncludesOption` in the DRA CEL compiler environment at emulated version 1.36. This preserved existing support for 1.36 under the `DRAListTypeAttributes` feature ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140074)

**Metadata:**
- Created: 2026-06-29
- Comments: 3
- State: open

### kubernetes/kubernetes#140073: client-go: kubeconfig migration writes credential-bearing `~/.kube/config` as world-readable (0644)

### What happened?

When a client-go based tool (kubectl, helm, any controller, or anything using `clientcmd.NewDefaultClientConfigLoadingRules().Load()`) runs for the first time against a legacy `~/.kube/.kubeconfig`, the loader silently migrates it to `~/.kube/config` using:

```go
// staging/src/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140073)

**Metadata:**
- Created: 2026-06-29
- Comments: 2
- State: open

### kubernetes/kubernetes#140070: [Flaking Test] [sig-cli] sig-cli tests are intermittently failing due to client-go common code

### What happened?

 ### Issue Overview
In recent testing, sig-cli tests are experiencing intermittent flakes. The actual tests are passing, but they are failing during setup (BeforeEach) or cleanup (DeferCleanup).

The failure manifests as an authentication drop: the ClientSet loses its authenticat...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140070)

**Metadata:**
- Created: 2026-06-29
- Comments: 2
- State: open

### kubernetes/kubernetes#140086: apimachinery: pluralize vowel-y kinds with s

### What type of PR is this?

/kind bug

### What this PR does / why we need it:

I ran into this while writing tests for a controller that works with Gateway API resources. The fake dynamic client panics when you try to `List` gateways because `UnsafeGuessKindToResource` turns `Gateway` into `gatew...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140086)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140085: Enable EtcdRangeStream feature gate by default

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Enables the EtcdRangeStream feature gate by default (Beta).

#### Benchmarks 

##### Unit benchmark

Watch-cache initialization is ~1.4x faster with RangeStream ([BenchmarkCacherInit](https://github.c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140085)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140081: features: move PodAndContainerStatsFromCRI to off by default beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140081)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140080: rename PodGroupTemplateRef to WorkloadRef


#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR refactors the v1alpha3 scheduling API to rename `PodGroupTemplateRef` and its associated structs to a simpler and more direct `WorkloadRef` that is aligned with the CompositePodGroup planned chang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140080)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140077: Cache and snapshot PodGroup API objects in kube-scheduler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140077)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140075: Add PodGroup object to PodGroupInfo for scheduling cycle consistency

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140075)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140071: [WIP] Return errors from ToleratesTaint for invalid numeric toleration values

#### What type of PR is this?
/kind bug


#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes #135243

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```release-note

```

#### Additional documentation...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140071)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140068: cleanup: remove stale heapster references from comments

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Removes stale references to Heapster from comments across 5 files.
Heapster was retired in 2019 (kubernetes-retired/heapster). The links
to its issue tracker are dead and the justifications referencing it
ar...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140068)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6471: Add new members

Fixes #6424
Fixes #6425
Fixes #6428
Fixes #6433
Fixes #6435
Fixes #6442
Fixes #6443
Fixes #6445
Fixes #6446
Fixes #6452
Fixes #6456
Fixes #6458
Fixes #6464

🔗 [Link](https://github.com/kubernetes/org/pull/6471)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9898: Enable node autoscalers to predict post-eviction pod resource requests

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**: 
`/area vertical-pod-autoscaler`

**Is your feature request designed to solve a problem? If so describe the problem this feature shoul...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9898)

**Metadata:**
- Created: 2026-06-29
- Comments: 1
- State: open

### kubernetes/autoscaler#9891: Recommender discards persisted checkpoint history when a VPA's targetRef is briefly unresolvable, collapsing the memory recommendation (OOMs)

> _Disclaimer: I used an AI coding assistant to help with this report — correlating logs/metrics, tracing the source code, and drafting the write-up. I've reviewed the findings myself; everything labelled **[verified]** was captured from our live cluster._


**Which component are you using?**:

/are...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9891)

**Metadata:**
- Created: 2026-06-29
- Comments: 1
- State: open

### kubernetes/autoscaler#9903: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/azidentity from 1.13.1 to 1.14.0 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/azidentity](https://github.com/Azure/azure-sdk-for-go) from 1.13.1 to 1.14.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go/releases">github.com/Azure/azure-sdk-for-go/sdk/azidentity's re...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9903)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9902: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/azcore from 1.21.0 to 1.22.0 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/azcore](https://github.com/Azure/azure-sdk-for-go) from 1.21.0 to 1.22.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go/releases">github.com/Azure/azure-sdk-for-go/sdk/azcore's releases</...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9902)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9901: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure/pkg/azclient from 0.9.2 to 0.21.3 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure/pkg/azclient](https://github.com/kubernetes-sigs/cloud-provider-azure) from 0.9.2 to 0.21.3.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes-sigs/cloud-provider-azure/commit/92e078efd08d1ccb97663ff07d437c493d4bb7ed"><code>9...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9901)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9900: Bump golangci/golangci-lint-action from 9.2.1 to 9.3.0

Bumps [golangci/golangci-lint-action](https://github.com/golangci/golangci-lint-action) from 9.2.1 to 9.3.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/golangci/golangci-lint-action/releases">golangci/golangci-lint-action's releases</a>.</em></p>
<bloc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9900)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9899: Pin GitHub Actions to full SHAs in CA workflows

The `test` job failed before execution because `actions/checkout` and `actions/setup-go` were referenced by version tags, which violates the org policy requiring full-length commit SHA pins. This updates the affected workflows to use immutable SHA references so the jobs are allowed to start.

- **Fa...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9899)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9897: Bump the patch-updates group across 2 directories with 34 updates

Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</sum...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9897)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9896: Bump github.com/go-openapi/swag/jsonname from 0.26.1 to 0.27.0 in /vertical-pod-autoscaler/test

Bumps [github.com/go-openapi/swag/jsonname](https://github.com/go-openapi/swag) from 0.26.1 to 0.27.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-openapi/swag/releases">github.com/go-openapi/swag/jsonname's releases</a>.</em></p>
<blockquote>
<h2>v0...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9896)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9895: Bump github.com/go-openapi/swag/jsonname from 0.26.1 to 0.27.0 in /vertical-pod-autoscaler

Bumps [github.com/go-openapi/swag/jsonname](https://github.com/go-openapi/swag) from 0.26.1 to 0.27.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-openapi/swag/releases">github.com/go-openapi/swag/jsonname's releases</a>.</em></p>
<blockquote>
<h2>v0...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9895)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9894: Bump the non-kubernetes group across 2 directories with 15 updates

Bumps the non-kubernetes group with 4 updates in the /vertical-pod-autoscaler directory: [github.com/go-openapi/jsonpointer](https://github.com/go-openapi/jsonpointer), [github.com/go-openapi/swag](https://github.com/go-openapi/swag), [github.com/prometheus/procfs](https://github.com/prometheus/proc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9894)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9893: Bump azure/setup-helm from 5.0.0 to 5.0.1

Bumps [azure/setup-helm](https://github.com/azure/setup-helm) from 5.0.0 to 5.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/azure/setup-helm/releases">azure/setup-helm's releases</a>.</em></p>
<blockquote>
<h2>v5.0.1</h2>
<h3>Fixed</h3>
<ul>
<li><a h...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9893)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9889: Fast-track evaluation path for host-scoped affinity/anti-affinity

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

This PR updates the simulator snapshot store interfaces to support the corresponding fast-track scheduler optimizations in `k8s.io/kube-scheduler` and `k8s.io/kubernetes` in [PR#138198 ](https://github.com/ku...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9889)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9888: GCE: remove ResourceLimiter dead code

GCE cloudprovider had fetchResourceLimiter() function at the time when it was the one with the GKE cloudprovider. Since then, GKE was separated in its own cloudprovider and then removed. So GCE can have only the ResourceLimiter set by the core.

#### What type of PR is this?

<!--
Add one of th...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9888)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9666: Promoting dra-driver-nvidia-gpu image and helm chart for the release v0.4.1


**What this PR does / why we need it**:
Promoting dra-driver-nvidia-gpu image and helm chart for release v0.4.1
**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://githu...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9666)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9664: promote gatewayapi 1.6 conformance image

**What this PR does / why we need it**:

Promote conformance images for Gateway API 1.6

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [X] I have verified the digest with [gcrane](https://github.com/google/go-contain...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9664)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23264: Flaky test: TestFunctional/parallel/MySQL

## Summary

`TestFunctional/parallel/MySQL` is flaky. The test deploys a MySQL 8.4 pod, waits for it to become Ready, and then runs `mysql -ppassword -e show databases;` inside the pod with exponential retry. It fails when the MySQL image cannot be pulled within the 10-minute PodWait timeout.

## Fa...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23264)

**Metadata:**
- Created: 2026-06-29
- Comments: 0
- State: open

### kubernetes/minikube#23257: chore(deps): bump the k8s-dependencies group with 6 updates

Bumps the k8s-dependencies group with 6 updates:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.36.1` | `0.36.2` |
| [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) | `0.36.1` | `0.36.2` |
| [k8s.io/client-go](https://github.com/...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23257)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37355: Update SELinux jobs with SELinuxMount GA

Kubernetes SELinuxMount feature gate went to GA.
    
* Remove the -alpha job, there is no SELinux-related gate that needs  explicit enablement.
* Update the regular job with skipping SELinuxMountReadWriteOncePodOnly tests. SELinuxMount is enabled by default and thus these tests  can't succeed.
...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37355)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1859: kubectl 1.36.2 includes vulnerable golang.org/x/net version (CVE-2026-39821)

## Issue Description

Our container image vulnerability scanner reports that the `kubectl` 1.36.2 binary includes `golang.org/x/net` v0.49.0, which is affected by [CVE-2026-39821](https://nvd.nist.gov/vuln/detail/CVE-2026-39821) (Base Score: `9.6 Critical`). According to the NVD, all versions of `go...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1859)

**Metadata:**
- Created: 2026-06-29
- Comments: 1
- State: open

### kubernetes/git-sync#993: Don't set safe.dir=* in main app

This builds on https://github.com/kubernetes/git-sync/pull/849

Instead, set it in tests.  This requires a new flag `--add-git-config` which is like `--git-config` but uses repeated calls to the flag instead of a comma-separated value.

Also puts `/usr/lib/git-core/git-sh-i18n--envsubst` back in...

🔗 [Link](https://github.com/kubernetes/git-sync/pull/993)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56308: Run spelling in CI

**This is a Feature Request**

Run spell check in CI.

**What would you like to be added**

Follow up from: https://github.com/kubernetes/website/pull/55984

Do we need to run spelling check in CI? If not, we can remove the spelling script as it will degrade fast.

The biggest question is how to do ...

🔗 [Link](https://github.com/kubernetes/website/issues/56308)

**Metadata:**
- Created: 2026-06-29
- Comments: 3
- State: open

### containerd/containerd#13682: some registries with slow virus scanners take >30s to emit headers; containerd can't pull images

### Description

A 30s HTTP response header timeout was added in https://github.com/containerd/containerd/pull/13164 to fix a slow timeout seen in AKS https://github.com/containerd/containerd/issues/13006 

Unfortunately some private registries (e.g. Nexus) when configured with anti-virus image scan...

🔗 [Link](https://github.com/containerd/containerd/issues/13682)

**Metadata:**
- Created: 2026-06-29
- Comments: 2
- State: open

### containerd/nerdctl: v2.3.4

## Changes
- `nerdctl run`:
  - Allow `-i` and `-d` together when `-t` is set (#4989, thanks to @mayur-tolexo)
  - Remove the non-Docker `rw` option from `--mount` (#4992, thanks to @mayur-tolexo)

- `nerdctl network create`
  - Match each gateway to its subnet for dual-stack (#5010, thanks to @mayur-tolexo)

- `nerdctl (container|image|network) inspect`
  - Fix format errors (#5019, thanks to @immanuwell)

- `nerdctl version`
  - Show RootlessKit version (#4971, thanks to @amarkdotd...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.3.4)

**Metadata:**
- Version: v2.3.4
- Published: 2026-06-29
- Prerelease: No


---

*This content was automatically collected on 2026-06-30 03:27:20*
