---
title: "Upstream Github - 2026-08-20"
description: "CNCF upstream activity from github"
pubDate: 2026-08-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scheduling", "sig/api-machinery", "kind/feature", "sig/architecture", "needs-triage", "kind/bug", "sig/node", "triage/needs-information", "priority/important-longterm", "kind/failing-test", "triage/accepted", "wg/device-management", "pr", "area/kubelet", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "needs-priority", "kind/documentation", "size/XS", "needs-ok-to-test", "area/code-generation", "do-not-merge/work-in-progress", "area/apiserver", "area/test", "size/XL", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/hold", "do-not-merge/needs-kind", "area/e2e-test-framework", "sig/apps", "size/XXL", "size/M", "kind/flake", "cncf-cla: no", "size/S", "area/provider/gcp", "sig/cluster-lifecycle", "release-note", "area/kubeadm", "sig/cloud-provider", "sig/auth", "priority/important-soon", "lgtm", "kind/regression", "language/ja", "area/localization", "website", "language/ko", "test-infra", "sig/instrumentation", "approved", "kind/kep", "enhancements", "sig/release", "area/release-eng", "k8s.io", "minikube", "area/vertical-pod-autoscaler", "autoscaler", "perf-tests", "cloud-provider-aws", "sig-release", "containerd", "release", "nri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141461: pod-security-admission: re-evaluate on seccomp/AppArmor annotation

#### What type of PR is this?

/kind bug
/sig auth

#### What this PR does / why we need it:

`isSignificantPodUpdate` decides whether a pod UPDATE gets re-evaluated against
the namespace's Pod Security policy. It compares only container counts and
container images, so an update whose only ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141461)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6292: KEP-5207: marked as implemented

- One-line PR description: KEP-5207 marked as implemented

Fixed #5207

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6292)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6288: KEP-3085: mark as implemented

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description:

  PodReadyToStartContainers is GA in v1.37. Marking the KEP as implemented.

<!-- link to the k/enhancements issue -->
- Issue link: 

  fixes https:...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6288)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10160: Add VPA release schedule to RELEASE.md

#### What type of PR is this?
/kind documentation
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
/kind reg...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10160)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141474: Extend feature gate dependency validation to required API group/versions (runtime-config)


/kind feature
/sig architecture
/sig api-machinery
/sig scheduling

This issue is an extention to the feature introduced in #133533. It proposes to close the similar gap on the second enablement axis (API group/version serving). Today nothing links a feature gate to the API group/versions its types...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141474)

**Metadata:**
- Created: 2026-08-19
- Comments: 1
- State: open

### kubernetes/kubernetes#141473: Kubelet restart preserves stale readiness for a replaced container when the API server status is outdated

### What happened?

Follow-up from https://github.com/kubernetes/kubernetes/issues/141155#issuecomment-5272111983 and https://github.com/kubernetes/kubernetes/issues/141155#issuecomment-5274991536.

#141342 stops a replacement container from inheriting the previous container's `Started` by comparing...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141473)

**Metadata:**
- Created: 2026-08-19
- Comments: 3
- State: open

### kubernetes/kubernetes#141471: Force-deleting a pod using a DRA claim can free its device for reallocation before the node has actually released it, causing real double-allocation

### What happened?

Force-deleting a pod that's using a Dynamic Resource Allocation claim can free its device for a brand new
claim to use *before* the original pod's container is actually confirmed stopped on the node — resulting in
the same physical device being "prepared" for two different claims...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141471)

**Metadata:**
- Created: 2026-08-19
- Comments: 8
- State: open

### kubernetes/kubernetes#141469: Probing container should *not* be restarted with a non-local redirect http liveness probe is flaky

### Which jobs are failing?

pull-node-e2e

### Which tests are failing?

Probing container should *not* be restarted with a non-local redirect http liveness probe

### Since when has it been failing?

at least a week

### Testgrid link

https://testgrid.k8s.io/sig-node-containerd#pull-node-e2e

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141469)

**Metadata:**
- Created: 2026-08-19
- Comments: 1
- State: open

### kubernetes/kubernetes#141467: DRAExtendedResources fails when DRANodeAllocatableResources is enabled

### What happened?

While working on the rc.0 tag to test out DRANodeAllocatableResources I found an issue with `specialClaimInMemName` which is purposefully supposed to be used in memory only.



### What did you expect to happen?

DRAExtendedResources should work when DRANodeAllocatableResources i...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141467)

**Metadata:**
- Created: 2026-08-19
- Comments: 5
- State: open

### kubernetes/kubernetes#141480: kubelet: refactor command runner and CRI metrics instrumentation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141480)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141479: docs(dra): document force-deleted pods as exclusivity edge case

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141479)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141478: code-generator: fix informer-gen interface comment to match Typed return type

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141478)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141477: apiserver: trim unused Pod spec fields from the shared informer cache

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Extends the existing `ManagedFields` trim on the shared Pod informer (`pkg/controlplane/apiserver/config.go`) to also clear ~20 `Spec` fields (scheduling/DNS/hostname-related, full list in the diff) that none of it...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141477)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141475: apiserver/cacher: benchmark the cost of a slow watcher on healthy ones

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it

Adds `BenchmarkSlowWatcherTax` to the watch cache package. It measures how much one slow watch client delays event delivery to every other watcher of the same resource. A single dispatch gorouti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141475)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141472: WIP POC for a double-pass scheduling algorithm

/hold

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141472)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141470: e2e: dump the pod when WaitTimeoutForPodReadyInNamespace stops early

#### What type of PR is this?

/kind cleanup
/sig testing

#### What this PR does / why we need it:

`WaitTimeoutForPodReadyInNamespace` bails out when a pod hits Failed or Succeeded, but the error was only the phase. The other wait helpers in the same file already dump the pod with `format.Object`,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141470)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141468: OWNERS: add troychiu as reviewer for DRA components

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141468)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141466: Extend integration tests coverage for the CompositePodGroup API

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR extends the integration tests suite for the CompositePodGroup API with additional new tests and test cases for the already existing tests.

#### Which issue(s) this PR is related to:

#### Speci...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141466)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141465: kubelet: add unit tests for secret and configmap managers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Both packages only had a test for the cache-based manager, so the simple
read-through managers, the fakes and the constructors were untested. The gap I
actually cared about is the type assertion in `secretManager...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141465)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141464: [DO NOT REVIEW, WIP] e2e/framework: synchronize AddExtendedResource and mark WorkloadAwarePreemption serial

### What type of PR is this?
/kind flake

### What this PR does / why we need it:
Fixes a flake in `WorkloadAwarePreemption` (#140893) where low-priority victim pods timed out during test setup with `Insufficient example.com/combined-resource`.

This PR contains two commits:
1. `test(e2e/fram...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141464)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141463: scheduler: replace pkg/apis/core/validation dependency with local const

pkg/scheduler only uses k8s.io/kubernetes/pkg/apis/core/validation for NoteLengthLimit, for which a local copy remains safe even if stale.

Part of removal of k/k imports in pkg/scheduler to support move to staging.
<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141463)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141462: bump coredns to v1.14.7

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141462)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141460: [conformance] extend pod lifecycle test to cover PodReadyToStartContainers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

extending the existing [conformance test](https://github.com/kubernetes/kubernetes/blob/b3bc2ac58fa173967f27ade80f28cc5015b8c1c3/test/e2e/common/node/pods.go#L902-L909) to cover `PodReadyToStartContainers` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141460)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141459: kubelet: invalidate name-keyed ClusterTrustBundle cache entries

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

kubelet caches normalized trust anchors from ClusterTrustBundles. When a bundle
changes, `dropCacheFor` clears the cache entries for it. Right now it does that
with an if/else:

- bundle has a `spec.signerName` -> cl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141459)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141458: Gate webhook authorizer cache on actual key size

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

Fixes a cache-poisoning DoS in the webhook authorizer. The response cache key is `json.Marshal(SubjectAccessReviewSpec)`, which since `92e3445e9d7` includes the full `fieldSelector`/`labelSelector` r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141458)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57070: [ja] Translate content/en/blog/_posts/2026/controller-runtime-cache-explained/index.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

- Translate ["How the controller-runtime Cache Actually Works, and Why...

🔗 [Link](https://github.com/kubernetes/website/issues/57070)

**Metadata:**
- Created: 2026-08-19
- Comments: 1
- State: open

### kubernetes/website#57068: stable-metrics-list.yaml linked error

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
`stable-metrics-lis...

🔗 [Link](https://github.com/kubernetes/website/issues/57068)

**Metadata:**
- Created: 2026-08-19
- Comments: 1
- State: open

### kubernetes/website#57066: [ko] Update content/ko/docs/concepts/workloads/pods/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/workloads/pods/_index.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/workloads/pods/
- English: https://kuberne...

🔗 [Link](https://github.com/kubernetes/website/issues/57066)

**Metadata:**
- Created: 2026-08-19
- Comments: 1
- State: open

### kubernetes/test-infra#37727: GOMAXPROCS too high in DinD jobs because the init cgroup leaf has no cpu.max

**What happen**

After #37440 the kubekins runner move the job process into a `<pod-cgroup>/init` leaf, so it can turn on controllers for the sibling `dind` cgroup. This part is correct for the resource accounting. But a fresh leaf have `cpu.max = max`. The pod cpu quota (for example 2 CPU) sit on t...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37727)

**Metadata:**
- Created: 2026-08-19
- Comments: 2
- State: open

### kubernetes/k8s.io#9850: releng: Image promotion for kubernetes v1.37.0-rc.1

Image promotion for kubernetes v1.37.0-rc.1
This is an automated PR generated from `kpromo`
```
kpromo pr --fork rytswd --interactive --tag v1.37.0-rc.1
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9850)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23516: Kicbase/ISO: Update buildkit from v0.31.1 to v0.32.2

The buildkit project released a [new version](https://github.com/moby/buildkit/releases)

This PR was auto-generated by `make update-buildkit-version` using [update-buildkit-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-buildkit-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/23516)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4276: Extend WaitForPods measurement

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR extends the existing WaitForPods measurement with ability to specify the **tolerationTimeout**.
This property allows CL2 to still capture the data on pods between tolerationTimeout and timeout, obs...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4276)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1480: Classify terminal RequestLimitExceeded responses as throttles

/kind bug

**What this PR does / why we need it**:

AWS can return customer-account throttling errors such as `RequestLimitExceeded` with HTTP 503. `cloudprovider_aws_api_response_status_total` currently exposes only the HTTP status, so downstream monitoring cannot distinguish these throttles from s...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1480)

**Metadata:**
- Created: 2026-08-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3078: Cut v1.37.0-rc.1 release

## Scheduled to happen: Wed, 2026-08-19

## Release Blocking Issues

N/A

<!--

Release Process Steps:
======================

Create a thread on #release-management on Slack to notify updates
about the release. For example,
- https://kubernetes.slack.com/archives/CJH2GBF7Y/p1635868822040300
- https...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3078)

**Metadata:**
- Created: 2026-08-19
- Comments: 4
- State: open

### containerd/nri: v0.12.2

## What's Changed
* replace uses of deprecated gopkg.in/yaml.v3 module by @thaJeztah in https://github.com/containerd/nri/pull/293
* Remove dependency on `github.com/opencontainers/runtime-tools` by @thaJeztah in https://github.com/containerd/nri/pull/305
* api,adaptation: add container image info by @eshaanm25 in https://github.com/containerd/nri/pull/302

## New Contributors
* @eshaanm25 made their first contribution in https://github.com/containerd/nri/pull/302

**Full Changelog**: ht...

🔗 [Link](https://github.com/containerd/nri/releases/tag/v0.12.2)

**Metadata:**
- Version: v0.12.2
- Published: 2026-08-19
- Prerelease: No


---

*This content was automatically collected on 2026-08-20 01:04:57*
