---
title: "Upstream Github - 2026-07-01"
description: "CNCF upstream activity from github"
pubDate: 2026-07-01
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/api-machinery", "sig/scheduling", "sig/apps", "wg/workload-aware-scheduling", "pr", "size/M", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-kind", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/needs-sig", "sig/storage", "size/S", "area/apiserver", "release-note", "size/L", "kind/feature", "sig/instrumentation", "kind/cleanup", "lgtm", "release-note-none", "size/XS", "approved", "sig/architecture", "area/test", "area/kubelet", "sig/node", "sig/testing", "area/cloudprovider", "sig/auth", "sig/cloud-provider", "kind/api-change", "do-not-merge/work-in-progress", "api-review", "triage/accepted", "kind/flake", "wg/device-management", "sig/autoscaling", "area/code-generation", "priority/important-longterm", "ok-to-test", "priority/awaiting-more-evidence", "language/en", "website", "sig/docs", "area/web-development", "do-not-merge/hold", "sig/cli", "area/provider/azure", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "os/windows", "co/virtualbox", "minikube", "committee/steering", "community", "sig/contributor-experience", "area/developer-guide", "area/elections", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "perf-tests", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/cluster-api", "area/provider/gcp", "kops", "size/XXL", "ingress-gce", "prometheus", "release", "exporter-toolkit", "envoyproxy", "kind/enhancement", "gateway", "containerd", "area/nri", "area/runtime", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140129: iSCSI IQN path traversal writes iscsi.json outside the kubelet iSCSI plugin directory

### What happened?

kubelet's in-tree iSCSI volume plugin builds the global mount/metadata path by concatenating the API-supplied iSCSI IQN directly into a `filepath.Join`:

```go
// pkg/volume/iscsi/iscsi_util.go:183-185
func makePDNameInternal(host volume.VolumeHost, portal, iqn, lun, iface string...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140129)

**Metadata:**
- Created: 2026-07-01
- Comments: 2
- State: open

### kubernetes/kubernetes#140113: [WIP] KEP-6060 Add initial Webhook Authentication API changes

- Add webhook configs as valid types
- Begin wiring up authz for the tests
- Wire up private claims and webhook configuration bound objects
- Add authz checks

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor gui...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140113)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140109: [WIP] KEP-5491: Avoid repeated list-to-set conversion in list-aware matchAttribute/distinctAttribute constraint evaluation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140109)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56332: Pod Security Admission uses an incorrect syntax for labels 

### Description
The documentation currently uses an incorrect syntax for labels in the Pod Security Admission examples. It displays a colon (`:`) instead of an equals sign (`=`) to separate the mode and the level.

Using a colon results in a syntax error when trying to apply the label via `kubectl l...

🔗 [Link](https://github.com/kubernetes/website/issues/56332)

**Metadata:**
- Created: 2026-06-30
- Comments: 4
- State: open

### kubernetes/website#56336: Document KYAML graduation to stable in v1.37

### Description

Documentation for KYAML output for kubectl graduating to **stable** in v1.37.

  **Tracking issue (kubernetes/enhancements):**
  - KEP-5295: https://github.com/kubernetes/enhancements/issues/5295

  **Code (kubernetes/kubernetes):**
  - Promote KYAML printer to stable: https...

🔗 [Link](https://github.com/kubernetes/website/pull/56336)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9905: fix OOM feedback loop

#### What type of PR is this?
/kind bug

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
/kind regression...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9905)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2211: [Incubation] KubeArmor Incubation Application

# Review Project Moving Level Evaluation
- [x] I have reviewed the TOC's [moving level readiness triage guide](https://github.com/cncf/toc/blob/main/operations/dd-toc-guide.md#initial-triageevaluation-prior-to-assignment), ensured the criteria for my project are met before opening this issue, and un...

🔗 [Link](https://github.com/cncf/toc/issues/2211)

**Metadata:**
- Created: 2026-06-30
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#140130: Deleting the extension-apiserver-authentication ConfigMap leaves front-proxy request-header trust active (stale CA / allowed CNs / X-Remote-* headers)

### What happened?

Generic apiservers can load their front-proxy (request-header) authenticator dynamically from the `kube-system/extension-apiserver-authentication` ConfigMap: the front-proxy CA bundle, the allowed proxy client CNs, and the `X-Remote-User`/`X-Remote-Group`/... header names. Two co...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140130)

**Metadata:**
- Created: 2026-07-01
- Comments: 2
- State: open

### kubernetes/kubernetes#140119: validation-gen has accumulated share global state

For unions, opaque types, list metadata and the mode tag, we have shared mutable state that is written to by some tags and read by others.  This creates a data flow that is dependent on the implicit order of discovery.

https://github.com/kubernetes/kubernetes/pull/139564 is the most recent example ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140119)

**Metadata:**
- Created: 2026-06-30
- Comments: 3
- State: open

### kubernetes/kubernetes#140112: Job admission plugin checks gang-scheduling parallelism guard when only one of GenericWorkload/WorkloadWithJob is enabled

<!-- This issue was generated with AI assistance -->

## What happened?

The `validateParallelismChange` admission check in `plugin/pkg/admission/job/admission.go` uses an AND condition to skip validation:

```go
if !p.genericWorkloadEnabled && !p.workloadWithJobEnabled {
    return nil
}
```

This ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140112)

**Metadata:**
- Created: 2026-06-30
- Comments: 4
- State: open

### kubernetes/kubernetes#140131: scheduler: skip informer registration for pod event resources

#### What type of PR is this?

  /kind cleanup

  #### What this PR does / why we need it:

  This PR avoids reporting `Incorrect event registration` for scheduler pod event resources like `AssignedPod`, `UnscheduledPod`, and `TargetPod`.

  These resources are logical pod event resources. T...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140131)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140128: podnodeselector: surface config decode errors instead of looping forever

`readConfig` previously continued the decode loop on any non-EOF error, which silently ignored malformed config and could spin forever. Return decode errors so the admission plugin fails loudly during registration.

/kind bug

```release-note
NONE

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140128)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140127: emptydir: mount memory-backed emptyDir with nodev,nosuid,noexec

/kind bug

Fixes kubernetes/kubernetes#48912

```release-note
NONE

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140127)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140126: Add metric to measure watch event delivery latency from cache ingestion to client channel enqueue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140126)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140125: Simplify scale validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR simplifies the scale validation logic by removing the redundant `ObjectMeta` validation in `ValidateScale` (`pkg/apis/autoscaling/validation/validation.go`). The underlying object only picks the lim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140125)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140124: Graduate NativeHistograms feature gate to Beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140124)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140123: test(e2e): add SELinux volume relabel coverage for Feature:SELinux jobs

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Move volume SELinux relabeling e2e tests from `[Flaky]` to `[Feature:SELinux]` so they run on SELinux-enforcing CI (`kops-aws-selinux`, `pull-kubernetes-e2e-gce-storage-selinux`). Remove the silent pass when SELi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140123)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140122: [InPlacePodVerticalScaling] add metrics to determine deferred resize duration and priority

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR enhances In-Place Pod Vertical Scaling observability for resizes in the `Deferred` statuses in two commits.

1. Adds the `priority_bucket` label to the `pod_pending_resizes` gauge to track the cur...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140122)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140121: Defer storage histogram metrics registration to runtime

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140121)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140120: Auto-discover declarative-validation GVKs in the validation equivalence fuzz test

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

`TestVersionedValidationByFuzzing` swept a hand-maintained list of group/versions. The list had drifted: a typo (`network.k8s.io` instead of `networking.k8s.io`, so it matched nothing) a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140120)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140118: Defer apiserver histogram metrics registration to runtime

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140118)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140116: Defer auth metrics registration to runtime

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140116)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140115: Defer webhook metrics registration to runtime

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140115)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140114: relax restriction of parallelism on jobs if WorkloadWithJobs is disabled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140114)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140111: flake: account for in-flight pods in ordered pod creation

#### What type of PR is this?

/kind failing-test
/kind flake

#### What this PR does / why we need it:

This PR fixes a flaky pod group integration test:

`TestPodGroupScheduling/gang pods are unschedulable due to lack of space, then scheduled when minCount is decreased`

The test uses `CreatePodsI...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140111)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140108: admission: handle empty runtimeClassName

#### What type of PR is this?
/kind bug
/sig node

#### What this PR does / why we need it:
Our validation logic handles empty `runtimeClassName`, we require that value to be a valid DNS subdomain name. See
https://github.com/kubernetes/kubernetes/blob/b6b907fda0d598ea8c2c92bd886f4e22ae10844a/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140108)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140107: Promote the HPAConfigurableTolerance feature gate to GA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR promotes the `HPAConfigurableTolerance` feature gate to GA. This PR removes this gate and ensures that the related codepath is always enabled.

#### Which issue(s) this PR is related to:

Issue:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140107)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140104: Fix 130069 fix context todo kubelet cm - part 4

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is the second part of replacing the appropriate context with the `context.TODO()` or `context.Background()` in the `./pkg/kubelet/cm/`. 
I break it down into multiple parts to keep PRs small and re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140104)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56331: Support dark mode for Mermaid diagrams

The docs site implements Docsy's dark mode support for most elements. However, Mermaid diagrams (like https://kubernetes.io/docs/contribute/style/diagram-guide/#example-3-k8s-system-flow) don't currently switch to a dark theme when the user toggle dark mode for a page or for the site. In dark mode, ...

🔗 [Link](https://github.com/kubernetes/website/issues/56331)

**Metadata:**
- Created: 2026-06-30
- Comments: 2
- State: open

### kubernetes/test-infra#37367: chore: update to use CAPZ 1.24 for cloud-provider-azure presubmits

/kind cleanup
/area provider/azure
/sig cloud-provider

This PR updates cloud-provider-azure tests to use CAPZ 1.24, which helps address a kubectl timeout issue seen in the current jobs.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37367)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23265: Minikube fails with HOST_VIRT_UNAVAILABLE even though virtualization is enabled

### What Happened?

<img width="1907" height="792" alt="Image" src="https://github.com/user-attachments/assets/afe7da9c-f246-4a35-889a-fcd82a45cfdc" />



**Body:**  
I am encountering an issue with Minikube on Windows 11 (Home Single Language 25H2) using the VirtualBox driver. The error message is:...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23265)

**Metadata:**
- Created: 2026-06-30
- Comments: 2
- State: open

### kubernetes/community#9054: Steering Committee Nomination: Michael McCune (@elmiko)

Hello everyone,

I am self-nominating for the 2026 Kubernetes Steering Committee election.

I joined the Kubernetes community in late 2015 building machine learning and data science applications, and teaching others to do the same. Around 2019, I started contributing to the Kubernetes Cluster Autosc...

🔗 [Link](https://github.com/kubernetes/community/issues/9054)

**Metadata:**
- Created: 2026-06-30
- Comments: 23
- State: open

### kubernetes/community#9059: Update declarative validation docs for current validation-gen workflow

Refresh the API changes and conventions guides to match how declarative
validation works today.

- Plumbing is already wired for in-tree API groups, so the workflow is now
  just: add tags, regenerate, and test.
- Document runtime gating via `+k8s:ifEnabled`/`+k8s:ifDisabled` and the
  strateg...

🔗 [Link](https://github.com/kubernetes/community/pull/9059)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9056: Update voters.yaml for 2026 Steering Election

Update voters.yaml for the 2026 Steering Election with org members with over 50 contributions

🔗 [Link](https://github.com/kubernetes/community/pull/9056)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9668: Image promotion for scl-image-builder v0.1.53

Image promotion for scl-image-builder v0.1.53
This is an automated PR generated from `kpromo`
```
kpromo pr --fork mboersma --project scl-image-builder --reviewers "@AverageMarcus @jsturtevant @kkeshavamurthy @mboersma @drew-viles" --tag v0.1.53
```

/hold
cc: @AverageMarcus @jsturtevant @kkeshavamu...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9668)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4170: Optimize WaitForGenericK8sObjects

Optimizes WaitForGenericK8sObjectsMeasurement for pods use case:
* uses protobuf-based typed client instead of dynamic and json (shared with other measurements to reduce cpu and memory footprint)
* Drops json.Marshal/json.Unmarshal approach for dynamic objects which was very expensive


## Benc...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4170)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4169: Do not log HTTP status code in case of error

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Due to a bug in the HTTP client library, the HTTP status code is not returned correctly and should not be logged in case of an error.


🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4169)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9908: Pin github actions in vpa-release-1.5 branch

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:

To unblock https://github.com/kubernetes/autoscaler/pull/9884

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (pas...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9908)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9907: Pin github actions in vpa-release-1.6 branch

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

To unblock https://github.com/kubernetes/autoscaler/pull/9885

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (p...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9907)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9904: [feature]: DeleteNodes in batches instead of one by one

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR implements the logic to delete multiple nodes if the flag `node-deletion-batcher-interval` is set. If it is, the cloudprovider/clusterapi will try to delete multiple replicas instead of one by one.

#...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9904)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18520: GCE: enable NAT64 for IPv6-only clusters

## What this does

GCE pods on an IPv6-only cluster currently have no way to reach
IPv4-only destinations — there's just no NAT64 path for them. AWS
already solved this with a 64:ff9b::/96 route (see
pkg/model/awsmodel/network.go), so this PR brings GCE up to speed by
enabling NAT64 on the Clo...

🔗 [Link](https://github.com/kubernetes/kops/pull/18520)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3147: vuln fixes for 1.34

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3147)

**Metadata:**
- Created: 2026-06-30
- Comments: undefined
- State: open
- Draft: No

### prometheus/exporter-toolkit: v0.17.0

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/exporter-toolkit/pull/388
* Fix CI tests by @SuperQ in https://github.com/prometheus/exporter-toolkit/pull/393
* chore: Enable modernize linter by @alexandear in https://github.com/prometheus/exporter-toolkit/pull/392
* Bump github/codeql-action from 4.35.1 to 4.35.4 by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/391
* Bump golang.org/x/crypto from...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.17.0)

**Metadata:**
- Version: v0.17.0
- Published: 2026-06-30
- Prerelease: No

### envoyproxy/gateway#9382: Expose maxHosts for DynamicResolver DNS cache

Description:

We are using Envoy Gateway v1.8.1 with Backend type DynamicResolver.

In our environment, the generated Envoy Dynamic Forward Proxy DNS cache has reached the default Envoy max_hosts limit of 1024.

Metric:

```text
envoy_dns_cache_envoy_gateway_dfp_cache_v4_preferred_30000ms_default_nu...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9382)

**Metadata:**
- Created: 2026-07-01
- Comments: 1
- State: open

### containerd/containerd#13698: NRI plugins: should consistently receive information about all containers

The spec draft: https://github.com/containerd/nri/pull/286 declares the need for NRI plugins for consistency. One aspect of consistency is being able to receive information about all containers.

The critests: https://github.com/kubernetes-sigs/cri-tools/pull/2137 uncovered that the containers creat...

🔗 [Link](https://github.com/containerd/containerd/issues/13698)

**Metadata:**
- Created: 2026-06-30
- Comments: 0
- State: open

### containerd/containerd#13692: containerd-shim-runc-v2 processes leak (ppid reparented to init) under sustained high-frequency pod churn, CRI sandbox calls deadlock (DeadlineExceeded)

**containerd version:** 1.7.32-1
**OS:** Ubuntu 20.04 (FIPS-enabled build)
**Kubernetes:** v1.34.8 (managed AKS)

## Description

Under sustained high-frequency pod eviction/rescheduling (a cluster autoscaler-style consolidation policy firing every 60s), we observe containerd-shim processes accumula...

🔗 [Link](https://github.com/containerd/containerd/issues/13692)

**Metadata:**
- Created: 2026-06-30
- Comments: 4
- State: open


---

*This content was automatically collected on 2026-07-01 03:35:41*
