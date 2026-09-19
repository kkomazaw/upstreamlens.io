---
title: "Upstream Github - 2026-09-19"
description: "CNCF upstream activity from github"
pubDate: 2026-09-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "area/triage", "cncf-cla: yes", "size/L", "approved", "sig/testing", "area/jobs", "area/kettle", "area/images", "area/config", "test-infra", "issue", "kind/bug", "sig/node", "needs-triage", "sig/scalability", "sig/api-machinery", "kind/feature", "area/kubelet", "release-note-none", "needs-ok-to-test", "needs-priority", "do-not-merge/needs-kind", "area/kubectl", "release-note", "size/M", "sig/cli", "size/S", "kind/cleanup", "area/apiserver", "size/XXL", "do-not-merge/work-in-progress", "sig/cluster-lifecycle", "area/kubeadm", "sig/storage", "size/XL", "sig/apps", "wg/device-management", "area/test", "kind/api-change", "do-not-merge/release-note-label-needed", "ok-to-test", "sig/scheduling", "do-not-merge/needs-sig", "priority/important-longterm", "triage/accepted", "lgtm", "kind/documentation", "kind/kep", "area/enhancements", "enhancements", "sig/instrumentation", "sig/docs", "sig/release", "language/en", "language/ko", "language/zh", "language/es", "area/blog", "language/hi", "language/ru", "language/fa", "area/release-eng", "area/localization", "website", "size/XS", "containerd", "release", "nerdctl", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142216: apimachinery: accept "!=" in ParseToLabelSelector

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`labels.Parse` accepts `key!=value`, but `metav1.ParseToLabelSelector`, which is documented as being kept in sync with that parser, had no case for `selection.NotEquals` and fell through to `"!=" is not a valid label...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142216)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142213: kubectl describe: show env vars sourced from fileKeyRef

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`describeContainerEnvVars` switches over the `EnvVarSource` kinds it knows about and has no case for `fileKeyRef` (KEP-3721 / `EnvFiles`), so an env var whose only source is a file key produced no output at all...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142213)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6392: nodeapprovers: relax validation for tech leads

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description:
allow them to have the marker, and also allow the standza not to have the marker if it includes a tech lead

<!-- link to the k/enhancements issue -->
- ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6392)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6390: KEP-5905: Bump to GA



<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has b...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6390)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/test-infra#37887: harden the test-infra staging image builds

Part of https://github.com/kubernetes/k8s.io/issues/9486

k8s-staging-test-infra is a special case; it holds core CI images that we don't want to serve via registry.k8s.io, so we'll be retaining gcr.io/k8s-staging-test-infra instead of migrating it.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37887)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142230: Kubelet OOM score calculation collapses to 999 for small/medium containers on large-memory nodes and ignores per-container memory guarantees

/sig node
/kind bug

This bug description was assisted by AI.

### What happened / What would you like to be added?

Update `GetContainerOOMScoreAdjust` in `pkg/kubelet/qos/policy.go` for `Burstable` QoS containers (guarded behind a new Kubelet feature gate) to fix precision collapse on large-memory...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142230)

**Metadata:**
- Created: 2026-09-18
- Comments: 1
- State: open

### kubernetes/kubernetes#142228: API Server Write Throughput: Reduce Write Allocations

### What would you like to be added?

This issue tracks reducing write-path allocations from https://github.com/kubernetes/kubernetes/issues/142223.

Applying a small patch to a Pod currently has an overall allocation factor of ~114x, with ~70% of that (~80x) happening on the write path (`handlers.P...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142228)

**Metadata:**
- Created: 2026-09-18
- Comments: 1
- State: open

### kubernetes/kubernetes#142223: API Server Write Throughput: Address Allocation Ceiling and Degraded State Bottlenecks

### What would you like to be added?

Based on recent experiments with API server write throughput, we propose a multi-pronged effort to address severe allocation bottlenecks.

**1. Optimize the "Happy Path"**
* **Reduce PATCH Allocations:** Significantly reduce allocations for the PATCH path. Speci...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142223)

**Metadata:**
- Created: 2026-09-18
- Comments: 2
- State: open

### kubernetes/kubernetes#142220: Kubelet omits volume stats after all pod container cgroups are removed

### What happened?

The kubelet's cAdvisor stats provider can omit a Running pod's mounted volume stats after cAdvisor has removed every pod-managed container record.

PR #141977 preserves volume stats when all container samples are filtered as terminated, but `ListPodStats` still builds its pod map...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142220)

**Metadata:**
- Created: 2026-09-18
- Comments: 1
- State: open

### kubernetes/kubernetes#142234: kubelet: overlay local allocatable onto uninitialized API nodes


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142234)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142233: Fix kubectl events table layout on multi-line messages

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes an issue where `kubectl events` breaks the table layout when an event message contains newline characters.

This change truncates the message at the first newline and appends `...`, matching the behavio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142233)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142232: resource: fix precision loss and division-by-zero in resource conversion

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The `convertResource*ToString` helpers in `pkg/api/v1/resource`, `staging/src/k8s.io/kubectl/pkg/util/resource`, and `staging/src/k8s.io/kubectl/pkg/cmd/set/env` relied on `float64` division (e.g. `float64(cpu.MilliVal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142232)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142231: client: allow customizing the informer initial buffer size



#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
We have lots of informers, but with low traffic on them. These ring buffers end up using a few MB of heap space but are largely empty.

We would like to be able to customize the hardcoded 1024 default....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142231)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142229: cel: add test coverage for 19-digit int64 quantity boundary

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds test coverage for 19-digit quantity boundary cases in the CEL library (`staging/src/k8s.io/apiserver/pkg/cel/library/quantity_test.go`).

Since #141938, `ParseQuantity` takes the fast integer path for 19-dig...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142229)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142227: Add Pod and PodStatus PATCH microbenchmarks

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Adds `BenchmarkPatchPod` and `BenchmarkPatchPodStatus` in `pkg/registry/core/pod/storage` to measure CPU and memory allocations on the `kube-apiserver` Strategic Merge `PATCH` write path (`hand...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142227)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142226: [WIP] kubelet: topologymanager: add the numa-allocation-strategy policy option

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142226)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142225: kubeadm: add unit tests for files.CopyFile and files.MoveFile

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds the first unit tests for cmd/kubeadm/app/util/files (CopyFile and MoveFile), which had no test file and 0% coverage. Covers a basic copy that preserves content and file mode, overwriting an existing destinat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142225)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142224: Test cases for Quantity behaviors that changed while addressing #141166

In the PRs addressing #141166 we've missed some edge cases.

This PR is the result findings from LLMs searching for possible regressions.

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

It is critical that we do not regress behavior of the API or th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142224)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142222: admissionregistration: graduate ValidatingAdmissionPolicyBinding decl…

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Graduates the declarative validation rules for `ValidatingAdmissionPolicyBindingSpec` from beta to stable.

The `PolicyName` and `ValidationActions` required rules are graduated across `v1`, `v1alpha1`, and `v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142222)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142221: kubectl: separate `attach` flags from runtime options

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142221)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142219: Unexport QueuedPodGroupInfo.queuedPodInfos

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142219)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142218: DRA ResourceSlice controller: refuse to publish ambiguous capacitities and attributes

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Even though the apiserver allows it (no explicit validation) and conflict resultion is deterministic (fully-qualified wins), DRA drivers should not publish the same attribute or capacity with and without th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142218)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142217: Exclude ephemeral containers from pod-level limit defaulting

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`DefaultPodLevelResources` deliberately builds the pod it aggregates from `Containers` and `InitContainers` only, with a comment that ephemeral containers "cannot specify resources and do not contribute to ... pod-le...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142217)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142215: kubectl describe node: fix per-pod resource percentages

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Two fixes to the per-pod rows of the "Non-terminated Pods" table in `kubectl describe node`:

1. The per-pod percentages divided by the node's allocatable CPU/memory with no zero guard. On a node without `sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142215)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142214: kubectl describe: fix "+ 0 more..." endpoints suffix for not-ready endpoints

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`formatEndpointSlices` decided that the endpoint list was truncated as soon as it visited a fourth endpoint, but it made that decision before applying the readiness filter while only counting ready endpoints. With ex...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142214)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142207: Add unit tests for sample-cli-plugin's NamespaceOptions

/kind cleanup
/sig cli

#### What this PR does / why we need it:

sample-cli-plugin's NamespaceOptions, the actual logic behind the reference kubectl-ns plugin, had no test coverage. Added tests for generateContextName, isContextEqual, Validate, and three Run scenarios: printing the current namespac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142207)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142206: Add unit tests for cli-runtime ConfigFlags

/kind cleanup
/sig cli

#### What this PR does / why we need it:

ConfigFlags in staging/src/k8s.io/cli-runtime/pkg/genericclioptions backs the kubeconfig and REST client flags used by nearly every kubectl command, but had no test coverage. Added tests for flag registration, the discovery burst/QPS/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142206)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57601: Merge main branch into dev-1.38

Description
Weekly branch sync PR: merges main into dev-1.38

cc: @abalso0 @AnshumanTripathi @ChieloChi @Caesarsage @yashasvimisra2798

🔗 [Link](https://github.com/kubernetes/website/pull/57601)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57596: [zh-cn]sync DRANodeAllocatableResources kubectl_attach

content/zh-cn/docs/reference/command-line-tools-reference/feature-gates/DRANodeAllocatableResources.md
content/zh-cn/docs/reference/kubectl/generated/kubectl_attach/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57596)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57595: [zh-cn]sync MaxUnavailableStatefulSet

content/zh-cn/docs/reference/command-line-tools-reference/feature-gates/MaxUnavailableStatefulSet.md

🔗 [Link](https://github.com/kubernetes/website/pull/57595)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57594: [zh-cn]sync GenericWorkload

content/zh-cn/docs/reference/command-line-tools-reference/feature-gates/GenericWorkload.md

🔗 [Link](https://github.com/kubernetes/website/pull/57594)

**Metadata:**
- Created: 2026-09-18
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14193: `fsview.FSMounts` treats the last mount as root even when it targets a submount

### Description

I think `internal/fsview.FSMounts` and the temporary mount fallback have different semantics for snapshotter mount lists that use `mount.Mount.Target`.

`withReadonlyFS` uses `fsview.FSMounts(mounts)` as a mount-free substitute for a read-only view of the container rootfs. If `FSMou...

🔗 [Link](https://github.com/containerd/containerd/issues/14193)

**Metadata:**
- Created: 2026-09-18
- Comments: 0
- State: open

### containerd/nerdctl: v2.4.0-rc.0

This release improves compatibility with Docker v29.

## Changes

Major changes (💡 for highlights):

- `nerdctl image`:
   - 💡Adopted Docker v29 default `nerdctl images` output (`IMAGE`, `ID`, `DISK USAGE`, `CONTENT SIZE`, `EXTRA`) (#5093, thanks to @ekalinin)
   - Added `nerdctl images --tree` to show a row per platform an image declares, like `docker image ls --tree` (#5092, thanks to @ekalinin)
   - Added `nerdctl push --all-tags` (`-a`) to push every local tag of a repository (#51...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.4.0-rc.0)

**Metadata:**
- Version: v2.4.0-rc.0
- Published: 2026-09-18
- Prerelease: Yes

### containerd/overlaybd: Development Build

## Features
- **tcmu**: support multi-vCPU backends with Photon v0.9 (#458) [#458](https://github.com/containerd/overlaybd/pull/458) ([Lanzheng Liu](https://github.com/containerd/overlaybd/commit/29ace5a7f78be6eeab79fd0bac1b74d3445f4b89))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-18
- Prerelease: Yes


---

*This content was automatically collected on 2026-09-19 03:04:05*
