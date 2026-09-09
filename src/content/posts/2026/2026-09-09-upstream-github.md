---
title: "Upstream Github - 2026-09-09"
description: "CNCF upstream activity from github"
pubDate: 2026-09-09
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "sig/release", "area/release-eng", "needs-priority", "release", "area/dependency", "pr", "lgtm", "cncf-cla: yes", "size/XS", "approved", "release-note-none", "needs-kind", "ok-to-test", "release-note", "kind/cleanup", "cncf-cla: no", "area/vertical-pod-autoscaler", "kind/failing-test", "tide/merge-method-squash", "needs-triage", "autoscaler", "area/cluster-autoscaler", "area/provider/aws", "kind/bug", "triage/accepted", "size/S", "needs-ok-to-test", "area/provider/gce", "size/M", "kind/documentation", "area/provider/cluster-api", "area/provider/equinixmetal", "size/L", "do-not-merge/release-note-label-needed", "kind/api-change", "area/provider/externalgrpc", "sig/node", "sig/testing", "area/kubelet", "area/apiserver", "sig/api-machinery", "sig/apps", "area/test", "sig/scheduling", "size/XXL", "sig/auth", "area/code-generation", "wg/device-management", "sig/network", "sig/cluster-lifecycle", "area/kubeadm", "area/kube-proxy", "area/ipvs", "sig/storage", "size/XL", "do-not-merge/work-in-progress", "sig/instrumentation", "priority/important-longterm", "wg/workload-aware-scheduling", "do-not-merge/cherry-pick-not-approved", "sig/cli", "kubectl", "envoyproxy", "gateway", "containerd", "nerdbox"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/release#4523: Bump google.golang.org/grpc from 1.83.1 to 1.83.2

Bumps [google.golang.org/grpc](https://github.com/grpc/grpc-go) from 1.83.1 to 1.83.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/grpc/grpc-go/releases">google.golang.org/grpc's releases</a>.</em></p>
<blockquote>
<h2>Release 1.83.2</h2>
<h1>Security</...

🔗 [Link](https://github.com/kubernetes/release/pull/4523)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10273: [cluster-autoscaler-release-1.35] pin golangci-lint to 2.1.12

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10273)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/release#4522: kube-cross: move off Debian bullseye (EOL 2026-08-31)

#### What would you like to be added:

Migrate the `kube-cross` image off Debian 11 (bullseye) onto a supported base.

All five `kube-cross` variants currently build on `debian:bullseye-slim`:

```
v1.38-go1.27-bullseye
v1.37-go1.26-bullseye
v1.36-go1.26-bullseye
v1.35-go1.26-bullseye
v1.35-go1.25-b...

🔗 [Link](https://github.com/kubernetes/release/issues/4522)

**Metadata:**
- Created: 2026-09-08
- Comments: 3
- State: open

### kubernetes/release#4520: Dependency update - Golang 1.27.1/1.26.8



### Tracking info

<!-- Search query: https://github.com/kubernetes/release/issues?q=is%3Aissue+Dependency+update+-+Golang -->
<!-- Example: https://github.com/kubernetes/release/issues/3383 -->
Link to any previous tracking issue: https://github.com/kubernetes/release/issues/4421

<!-- golang-ann...

🔗 [Link](https://github.com/kubernetes/release/issues/4520)

**Metadata:**
- Created: 2026-09-08
- Comments: 0
- State: open

### kubernetes/release#4519: Bump go and golangci-lint versions



#### What type of PR is this?
/kind cleanup
/kind feature


#### What this PR does / why we need it:
- Bump go and golangci-lint versions

#### Which issue(s) this PR fixes:



None


#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

<!-...

🔗 [Link](https://github.com/kubernetes/release/pull/4519)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10271: [cluster-autoscaler-release-1.35] AWS: fix int32 overflow computing memory from InstanceRequirements

This is an automated cherry-pick of #10171

/assign jackfrancis

```release-note
Fixed a bug in the AWS cloud provider where scale-from-zero for ASGs using
attribute-based `InstanceRequirements` (MixedInstancesPolicy, no instance type
overrides) with `MemoryMiB.Min` >= 2048 computed a memory capacit...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10271)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10270: Add Z4M machine family pricing to GCE provider

#### What type of PR is this?
/kind feature
#### What this PR does / why we need it:
This PR adds pricing information for the Google Cloud `z4m` memory-optimized machine family (Intel Emerald Rapids) to the GCE cloud provider in Cluster Autoscaler.
Specifically:
- Adds base CPU, memory, and pre...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10270)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10269: fix: guard optional AcceleratorCount when building the AWS template node

**Which component this PR applies to?**

/area cluster-autoscaler
/area provider/aws

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**

`updateCapacityWithRequirementsOverrides` dereferences `instanceRequirements.AcceleratorCount.Min` without checking either pointer, w...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10269)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10268: CAPI: document which client writes the status configmap

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Users expect the status configmap to follow --cloud-config since that is the client used to talk to the CAPI management cluster, but it actually gets written with the same client used for Nodes and Pods (--...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10268)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10267: equinixmetal: remove redundant rand.Seed call

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

randString8 called rand.Seed(time.Now().UnixNano()) on every invocation. The global math/rand source has auto-seeded itself since Go 1.20, and this module is on Go 1.26, so the call is a deprecated no-op that run...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10267)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10266: feat: add missing fields maxNodeStartupDuration and allowNonAtomicSca…

#### What type of PR is this?

/kind bug
/kind api-change

#### What this PR does / why we need it:

Adds `maxNodeStartupDuration` and `allowNonAtomicScaleUpToMax` fields to the `NodeGroupAutoscalingOptions` proto message used by the external gRPC cloud provider, and wires them through to `co...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10266)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10265: feat(vpa-chart): support unhealthyPodEvictionPolicy on the PodDisruptionBudgets

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds `podDisruptionBudget.unhealthyPodEvictionPolicy` to the admission controller, recommender, and updater PodDisruptionBudgets in the `vertical-pod-autoscaler` chart. Only rendered when set, so existing release...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10265)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141943: nf_conntrack_max in sysctls.go for kube-proxy - regression from 1.35 to 1.36 - lxc

### What happened?

Hey, 

because of old reasons not to run control-planes (5) and worker nodes in the same environment, my control-planes are inside LXC containers (on the same hosts).

Today I upgraded from 1.31 to 1.36 and maybe wanted to switch to 1.37, but I now have the problem, 
that the kub...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141943)

**Metadata:**
- Created: 2026-09-08
- Comments: 3
- State: open

### kubernetes/kubernetes#141942: Add kubelet to KUBE_CGO_OVERRIDES in source-built race jobs once kubelet is a static binary

Follow-up from https://github.com/kubernetes/kubernetes/pull/135870, split out at @dims' request.

`-race` needs cgo, and [`kube::golang::build_binaries_for_platform()`](https://github.com/kubernetes/kubernetes/blob/79f041dd524968a26c28398be9b5dc30ada1f841/hack/lib/golang.sh#L841-L884) only appends ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141942)

**Metadata:**
- Created: 2026-09-08
- Comments: 2
- State: open

### kubernetes/kubernetes#141941: kubelet can fail to start when the user namespace ID pool changes while pods with user namespaces exist on the node

### What happened?

If the subordinate ID pool kubelet uses for user namespaces changes between restarts, and a pod on disk holds a mapping that falls outside the new pool, the kubelet does not start:

```
create user namespace manager: record pod mappings for existing pod "p": id 7340032 is out of ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141941)

**Metadata:**
- Created: 2026-09-08
- Comments: 3
- State: open

### kubernetes/kubernetes#141940: getKubeletMappings() picks a different user namespace ID range depending on whether kubelet was built with cgo

### What happened?

`os/user` behaves differently with and without cgo, and kubelet uses it to decide which subordinate ID range user namespaces get.

[`getKubeletMappings()`](https://github.com/kubernetes/kubernetes/blob/79f041dd524968a26c28398be9b5dc30ada1f841/pkg/kubelet/kubelet_pods.go#L152-L161...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141940)

**Metadata:**
- Created: 2026-09-08
- Comments: 3
- State: open

### kubernetes/kubernetes#141927: kubelet logs error-level cgroup read failures for terminating pods in convertToAPIPodLevelResourcesStatus

### What happened?

With `InPlacePodLevelResourcesVerticalScaling` enabled (default in v1.36), kubelet logs two
error-level lines for pods whose cgroup has already been removed during teardown:

```
E0908 05:12:00.200001 kubelet_pods.go:2193] "failed to read memory cgroup config for the pod"
  err="...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141927)

**Metadata:**
- Created: 2026-09-08
- Comments: 3
- State: open

### kubernetes/kubernetes#141948: kubelet: fix restartPolicy=Never pods stuck Pending forever after node reboot

#### What type of PR is this?

/kind bug
/sig node

<!-- not /kind regression: this path has never worked -->

#### What this PR does / why we need it:

A pod with `restartPolicy: Never` can be wedged in `Pending` forever, indefinitely, with no self-healing. Only deleting the pod clears it....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141948)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141947: Use unsafe conversion for declarative validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Uses the unsafe converter in declarative validation to avoid deep-copying the object on every write.

I found this while testing apiserver throughput. I think this is safe, but I would like confirmation from the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141947)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141946: DRA: remove DynamicResourceAllocation feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141946)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141945: validation-gen: Re-enable nested +k8s:subfield validations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141945)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141944: networking: enable optionalorrequired kube-api-linter rule

#### What type of PR is this?

/kind cleanup
/kind api-change

#### What this PR does / why we need it:

Enables `optionalorrequired` and `nonpointerstructs` kube-api-linter rules for the `networking` API group (part of #134671).

- Added `+optional` / `+required` markers across `networking/v1` and ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141944)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141939: Clean up workflow runner to use native for loop

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
`workflow.visitAll` adds almost nothing except confusion. It gives the illusion that a workflow is more than just a loop of phases. We should instead just replace it with a native for-loop for clarity.

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141939)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141938: [Quantity] fix: resource.MustParse handles quantities near math.MaxInt64 (with fix)

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This is a copy of #138076 but rebased and with the the fix mentioned in https://github.com/kubernetes/kubernetes/pull/138076#discussion_r3284747488 applied. Commit attribution is retained.

#### Which issue(s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141938)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141936: proxy: use atomic.Bool to store initialisation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Proxier initialisation currently uses an int32 to track initialisation, requiring the use of atomic operations without being able to enforce them. atomic.Int32 could replace this while also enforing atomic ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141936)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141935: Signal completion using a channel instead of a spinlock

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`wrapTestWithInjectedOperation` uses a spinlock to wait for a goroutine; the idiomatic Go approach is to signal completion using a channel, which is what this PR does. This also avoids an unenforced `int32`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141935)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141934: Refactor pod group preemption to use GenericPodGroup

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141934)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141933: DRA:remove custom IncludesOption() registration 

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Resolves the TODO left in #140016

The `library.IncludesOption()` shim registered in the DRA CEL compiler at emulated version 1.36 in now dead code. `.includes()` has been natively provided by `Lists(List...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141933)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141932: [WIP] Add PreemptionExtensions to PodGroupPostFilter

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141932)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141931: client-go: avoid nil deref in test

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`TestConfigToExecClusterRoundtrip` checks `actualErr` and `expectedErr` for nilness, but dereferences `actualErr` in both cases, resulting in a nil dereference if `actualErr` is nil and `expectedErr` is not. Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141931)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141930: Validate child pod groups for equal priority and preemptionPolicy

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141930)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141929: scheduler: parameterize topology-aware placement metrics with entity type

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Parameterizes Topology-Aware Scheduling (TAS) candidate placement metrics with the entity `type` label (`podgroup` vs `compositepodgroup`) to support `CompositePodGroup` workloads alongside standard `PodGro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141929)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141926: Prefer reschedulable victims when reprieving same-priority pods

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When the preemptor fits as soon as either of two same-priority pods is
gone, the default preemption plugin picks the victim by age only, so the
later-started pod is always sacrificed. If that pod is hard-pinned to
it...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141926)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141925: Automated cherry pick of #141307: DRA: avoid integer overflow in per-claim device-limit checks

Cherry pick of #141307 on release-1.34.

#141307: DRA: avoid integer overflow in per-claim device-limit checks

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141925)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1878: `kubectl wait --while`: wait *while* a condition holds, returning when it no longer does

**What would you like to be added:**

A `--while` flag for `kubectl wait` that is the logical inverse of `--for`. Where `--for=<X>` blocks until a predicate *becomes* true, `--while=<X>` would block until a predicate that is *currently* true *stops* being true (or until the object is deleted / the t...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1878)

**Metadata:**
- Created: 2026-09-08
- Comments: 1
- State: open

### envoyproxy/gateway#9973: local ratelimit: max_dynamic_descriptors only on the HCM filter, route-level limiters track 20 distinct values

### Description

A `rateLimit.local` rule with a `Distinct` selector (`sourceCIDR`, header or query parameter) tracks only the 20 most recently seen values per rule. The 21st value evicts the oldest bucket, and an evicted client comes back with a full bucket, so a per-client limit on a public listen...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9973)

**Metadata:**
- Created: 2026-09-08
- Comments: 0
- State: open

### containerd/containerd#14127: ReceiveStream() remains blocked after consumer failure and cancellation

### Description

When the destination writer returns an error, io.Copy stops reading from `ReceiveStream()`, but the receive goroutine can stay blocked in io.Pipe.Write. Canceling the context does not unblock it, so `stream.Close()` is never called.

### Steps to reproduce the issue

1. Create a fak...

🔗 [Link](https://github.com/containerd/containerd/issues/14127)

**Metadata:**
- Created: 2026-09-08
- Comments: 0
- State: open

### containerd/nerdbox: v0.2.5

## What's Changed
* ci(release): nerdbox-rootfs.erofs build artifact by @austinvazquez in https://github.com/containerd/nerdbox/pull/268
* build(deps): bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/257
* build(deps): bump github.com/ebitengine/purego from 0.10.1 to 0.10.2 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/259
* build(deps): bump go-task/setup-task from 2.1.0 to 2.2.0 by @dependabot[bot] in https://g...

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.5)

**Metadata:**
- Version: v0.2.5
- Published: 2026-09-08
- Prerelease: No


---

*This content was automatically collected on 2026-09-09 03:00:06*
