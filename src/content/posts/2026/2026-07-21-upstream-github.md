---
title: "Upstream Github - 2026-07-21"
description: "CNCF upstream activity from github"
pubDate: 2026-07-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "sig/node", "kind/flake", "needs-triage", "sig/auth", "sig/scalability", "sig/scheduling", "kind/feature", "needs-sig", "wg/device-management", "kind/bug", "pr", "area/kubelet", "size/XS", "release-note-none", "cncf-cla: yes", "needs-priority", "area/test", "sig/testing", "release-note", "size/S", "sig/cli", "needs-ok-to-test", "kind/cleanup", "area/apiserver", "sig/api-machinery", "size/L", "sig/instrumentation", "area/stable-metrics", "area/kubectl", "size/M", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "kind/dependency", "approved", "lgtm", "ok-to-test", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "sig/docs", "kind/documentation", "website", "kubectl", "area/jobs", "area/config", "test-infra", "prometheus", "client_golang", "containerd", "nerdctl", "imgcrypt", "area/cri", "area/runtime", "nri", "cncf", "toc", "kind/dd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140749: [FG: InPlacePodVerticalScalingExclusiveCPUs] KEP 5554 alpha implementation

This is a follow up issue, to be used as umbrella for the attempt to have granular commits of the main mega-PR https://github.com/kubernetes/kubernetes/pull/129719 as per suggestion.  As agreed plan is to work on this post code-freeze of v1.37 to secure that it will included in v1.38.

xref:https://...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140749)

**Metadata:**
- Created: 2026-07-20
- Comments: 3
- State: open

### cncf/toc#2245: [LEVEL CHANGE] k8gb moving from Sandbox to Incubation

# Project Moving Levels Checklist

This template outlines the administrative steps required when a project moves from one maturity level to another (e.g., Sandbox to Incubating, Incubating to Graduated).

- **Project Name:** K8sgb
- **New Maturity Level:**  Incubation
- **Project moving levels PR:**...

🔗 [Link](https://github.com/cncf/toc/issues/2245)

**Metadata:**
- Created: 2026-07-20
- Comments: 3
- State: open

## Updates

### kubernetes/kubernetes: v1.37.0-beta.0


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-beta.0)

**Metadata:**
- Version: v1.37.0-beta.0
- Published: 2026-07-20
- Prerelease: Yes

### kubernetes/kubernetes#140762: `TestVolumeAttachLimitExceededCleanup` flakes on Windows CI with `context deadline exceeded`

### Which jobs are flaking?

pull-kubernetes-unit-windows-master

### Which tests are flaking?

TestVolumeAttachLimitExceededCleanup

### Since when has it been flaking?

Since commit `954ac21c6c8b2bc77666373d5c4f5b68603a8e50` (2025-09-03), which introduced the test in PR #133357.

### Testgrid link...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140762)

**Metadata:**
- Created: 2026-07-20
- Comments: 1
- State: open

### kubernetes/kubernetes#140760: Flaky TestExternalJWTSigningAndAuth/signing_key_supported: "go-jose: error in cryptographic primitive"

### Which jobs are flaking?

pull-kubernetes-integration

### Which tests are flaking?

TestExternalJWTSigningAndAuth/signing_key_supported



### Since when has it been flaking?

The race condition has existed since the test was introduced in commit `6fdacf04117` ("Add plugin and key-cache for Exte...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140760)

**Metadata:**
- Created: 2026-07-20
- Comments: 1
- State: open

### kubernetes/kubernetes#140752: [Flaky Test] [sig-scalability] ci-kubernetes-e2e-gce-scale-correctness kubetest2.Up

### Which jobs are flaking?

[ci-kubernetes-e2e-gce-scale-correctness](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-scale-correctness)

### Which tests are flaking?

[kubetest.Up](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-scale-corr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140752)

**Metadata:**
- Created: 2026-07-20
- Comments: 2
- State: open

### kubernetes/kubernetes#140751: scheduler_perf: re-enable checkEmptyInFlightEvents

### What would you like to be added?

https://github.com/kubernetes/kubernetes/pull/140695 optimizes metric handling such that its less intrusive. Test execution time got reduced ("Tested locally, this cuts the TestSchedulerPerf runtime by ~40% (135s -> 82s)").

However, this caused the checkEmptyIn...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140751)

**Metadata:**
- Created: 2026-07-20
- Comments: 1
- State: open

### kubernetes/kubernetes#140748: Resolve conflicting required/optional validation tags for Condition.Message in metav1.Condition`

### What happened?
While reviewing PR #139727, a conflict was identified in the code generation validation tags for the `Message` field in `metav1.Condition` (located in `staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/types.go`). 

The field currently has conflicting required/optional tags:
```go
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140748)

**Metadata:**
- Created: 2026-07-20
- Comments: 2
- State: open

### kubernetes/kubernetes#140746: DRA: move ResourceHealth e2e tests to test/e2e for version-skew coverage

### What would you like to be added?

Move the DRA Resource Health tests from `test/e2e_node/dra_test.go` to `test/e2e/dra/` so they run in the n-1 version-skew CI jobs, gated with `f.WithKubeletMinVersion("1.36")`.

Suggested by @pohly in https://github.com/kubernetes/kubernetes/pull/139477#discuss...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140746)

**Metadata:**
- Created: 2026-07-20
- Comments: 2
- State: open

### kubernetes/kubernetes#140735: `networking.k8s.io/v1` `requests-per-second` `unable to fetch metrics from custom metrics API: no custom metrics API (custom.metrics.k8s.io) registered`

### What happened?

```
Name:                                                       hpa-aspnetcorewebapi
Namespace:                                                  default
Labels:                                                     app=aspnetcorewebapi
                                              ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140735)

**Metadata:**
- Created: 2026-07-20
- Comments: 5
- State: open

### kubernetes/kubernetes#140763: Increase timeout in TestVolumeAttachLimitExceededCleanup to 60s

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

The test `TestVolumeAttachLimitExceededCleanup` creates 500 pods and expects all of them to reach PodFailed state within 30 seconds. On Windows CI this is insufficient due to mutex contention (Fake...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140763)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140761: Fix flaky TestExternalJWTSigningAndAuth race condition

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

WaitForSupportedKeysFetch() signals as soon as the mock signer's FetchKeys handler runs, but before the apiserver has processed the gRPC response and updated its key cache. This caused a race where...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140761)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140759: cli-runtime: include group in resource-not-found error message

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl` drops the group name from the error when a resource type is requested with a group qualifier it doesn't belong to. For example, `kubectl get pdb.hpa` prints `the server doesn't have a resource type "p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140759)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140758: storage/testing: give list recorder its own type, fold Continue into Key

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Gives the storage test list recorder its own type and folds Continue into Key, so paged and streamed reads record the resume position the same way.

#### Which issue(s) this PR is related to:

Related to #140479
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140758)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140757: add new buckets for watch_list_duration_seconds metric for better granularity

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140757)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140756: fix: kubectl cp should support resource/name format

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This PR adds support for Pod references in `resource/name` format to `kubectl cp`.

The following remote file specifications are now supported:

- `pod/<pod-name>:<path>`
- `pods/<pod-name>:<path>`
- `<na...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140756)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140753: scheduler: record queue incoming metrics asynchronously

## What this PR does

This PR extends `MetricAsyncRecorder` to support asynchronous recording of `CounterVec` metrics.

It updates the scheduler to record the following metrics asynchronously when a `MetricAsyncRecorder` is available (currently in `activeQueue`):

- `scheduler_queue_incoming_p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140753)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140744: WIP: resource.Quantity: detect incorrect shallow copies

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The following code makes a shallow copy:

     var a resource.Quantity = ...
     b := a

That's okay unless b gets modified and a is using inf.Dec arithmetic. Then and only then is a modified here:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140744)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140742: Update distroless reference in apiextensions-apiserver

This can either be `grc.io/distroless/base:latest` or `gcr.io/distroless/base-debian13:latest` depending on how this project wants to handle updates.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: htt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140742)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140741: kubelet/dra: use RLock in PodMightNeedToUnprepareResources

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`PodMightNeedToUnprepareResources` only reads from the claim info cache, but it was taking the write lock. Switch to `RLock` so concurrent readers do not block each other.


#### Does this PR introduce a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140741)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140738: Propagate TokenReview request context deadline

#### What type of PR is this?

/kind bug
/sig auth
/priority important-soon

#### What this PR does / why we need it:

TokenReview builds a synthetic HTTP request before invoking request-based token authenticators. That synthetic request previously used a background context, so cancellation and dead...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140738)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140737: test/integration: share API server across TestPreemption subtests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140737)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4473: Bump actions/checkout from 7.0.0 to 7.0.1 in the actions group

Bumps the actions group with 1 update: [actions/checkout](https://github.com/actions/checkout).

Updates `actions/checkout` from 7.0.0 to 7.0.1
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/checkout/releases">actions/checkout's releases</a>.</em><...

🔗 [Link](https://github.com/kubernetes/release/pull/4473)

**Metadata:**
- Created: 2026-07-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56553: Prerequisites for updating reference documentation misses macOS toolchain setup steps

## What happened

While completing sub-task B3 of #56385 (PR #56552), I ran the full four-stage reference-docs regeneration on macOS (Intel, macOS 14.x). Every stage worked end-to-end, but the current `content/en/docs/contribute/generate-ref-docs/prerequisites-ref-docs.md` misses several setup steps...

🔗 [Link](https://github.com/kubernetes/website/issues/56553)

**Metadata:**
- Created: 2026-07-20
- Comments: 2
- State: open

### kubernetes/website#56550: Hello Minikube Tutorial should note that everything happens on the Control plane

Incorporating a brief note [after](https://kubernetes.io/docs/tutorials/hello-minikube/#create-a-minikube-cluster) `minikube start` would help clarify that it provisions a single-node cluster where the control plane also hosts user workloads. Since this setup differs from production Kubernetes envir...

🔗 [Link](https://github.com/kubernetes/website/issues/56550)

**Metadata:**
- Created: 2026-07-20
- Comments: 1
- State: open

### kubernetes/kubectl#1865: kubectl error message drops the group name for unknown resource types with a group qualifier

Title: kubectl error message drops the group name for unknown resource types with a group qualifier

## What happened

Running a command against a resource type that does exist, but not in the group specified on the terminal, produces a misleading error.

Example:

```
kubectl get pdb.hpa
```

Outpu...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1865)

**Metadata:**
- Created: 2026-07-20
- Comments: 2
- State: open

### kubernetes/test-infra#37492: Adding CONTROL_PLANE_SIZE env

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37492)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_golang: v1.24.0 - 2026-07-20

### Changes

* [CHANGE] Minimum required Go version is now 1.25, only the two latest Go versions (1.25 and 1.26) are supported from now on. #1862
* [CHANGE] prometheus: Name validation now always uses the UTF-8 scheme instead of the deprecated `model.NameValidationScheme` global. Default behavior is unchanged; code that set `NameValidationScheme = LegacyValidation` no longer gets legacy enforcement at metric, label, and push-grouping construction. #2051
* [CHANGE] api/prometheus/v1: Support ...

🔗 [Link](https://github.com/prometheus/client_golang/releases/tag/v1.24.0)

**Metadata:**
- Version: v1.24.0
- Published: 2026-07-20
- Prerelease: No

### containerd/nerdctl: v2.3.5

## Changes
- Cherry-picks from `main` to `release/2.3` https://github.com/containerd/nerdctl/pull/5082
  - `nerdctl-full`: Update containerd (2.3.3), RootlessKit (3.0.2), BuildKit (0.31.2), runc (1.5.1)

Full changes: https://github.com/containerd/nerdctl/milestone/67?closed=1

## Compatible containerd versions
This release of nerdctl is expected to be used with containerd v1.7, v2.0, v2.1, v2.2, or v2.3.
Some features may not work with other releases of containerd.

## About the binar...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.3.5)

**Metadata:**
- Version: v2.3.5
- Published: 2026-07-20
- Prerelease: No

### containerd/imgcrypt: imgcrypt v2.0.3

v2.0.3:
- Updated various dependencies
- Fixed an error message to start with small letter

**Full Changelog**: https://github.com/containerd/imgcrypt/compare/v2.0.2...v2.0.3

🔗 [Link](https://github.com/containerd/imgcrypt/releases/tag/v2.0.3)

**Metadata:**
- Version: v2.0.3
- Published: 2026-07-20
- Prerelease: No

### containerd/containerd#13814: CRI ContainerStatus/ExecSync hang and delayed sandbox teardown after VFIO/IOMMU device-pod deletion

### Description

After moving from containerd v2.2.5 to v2.3.2 (via RKE2 `v1.35.6+rke2r1` → `v1.36.2+rke2r1`, runc unchanged at v1.4.2), nodes that run short-lived pods with VFIO/IOMMU PCI passthrough start to degrade once such a pod is deleted.

containerd itself stays up and responsive: `crictl ve...

🔗 [Link](https://github.com/containerd/containerd/issues/13814)

**Metadata:**
- Created: 2026-07-20
- Comments: 1
- State: open

### containerd/nri: v0.12.1

## What's Changed
* Fix .gitignore by @samuelkarp in https://github.com/containerd/nri/pull/290
* docs: Fix typo in containerd config for default validator. by @grosskur in https://github.com/containerd/nri/pull/297
* adaptation: avoid holding lock across runtime update callback by @ningmingxiao in https://github.com/containerd/nri/pull/301

## New Contributors
* @grosskur made their first contribution in https://github.com/containerd/nri/pull/297

**Full Changelog**: https://github.com/...

🔗 [Link](https://github.com/containerd/nri/releases/tag/v0.12.1)

**Metadata:**
- Version: v0.12.1
- Published: 2026-07-20
- Prerelease: No


---

*This content was automatically collected on 2026-07-21 02:27:35*
