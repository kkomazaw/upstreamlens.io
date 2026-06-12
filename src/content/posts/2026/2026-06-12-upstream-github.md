---
title: "Upstream Github - 2026-06-12"
description: "CNCF upstream activity from github"
pubDate: 2026-06-12
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "good first issue", "help wanted", "kind/bug", "triage/accepted", "website", "pr", "cncf-cla: yes", "size/XS", "lgtm", "language/en", "kind/cleanup", "needs-sig", "needs-triage", "sig/node", "wg/device-management", "sig/scheduling", "kind/feature", "area/apiserver", "sig/api-machinery", "size/L", "release-note-none", "approved", "do-not-merge/hold", "needs-priority", "area/test", "size/XXL", "sig/apps", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/kubelet", "size/M", "ok-to-test", "sig/windows", "release-note", "kind/failing-test", "sig/autoscaling", "needs-ok-to-test", "area/e2e-test-framework", "area/kubectl", "sig/cli", "do-not-merge/needs-kind", "sig/network", "area/kube-proxy", "sig/storage", "sig/cluster-lifecycle", "needs-rebase", "kind/api-change", "area/release-eng", "area/kubeadm", "cncf-cla: no", "sig/release", "do-not-merge/contains-merge-commits", "kind/regression", "size/S", "sig/auth", "wg/checkpoint-restore", "community", "area/cluster-autoscaler", "autoscaler", "kind/documentation", "area/vertical-pod-autoscaler", "area/provider/aws", "kind/kep", "enhancements", "area/provider/azure", "area/jobs", "area/config", "test-infra", "k8s.io", "prometheus", "release", "client_java", "promu", "containerd", "area/toolchain", "area/snapshotters", "cncf", "kind/initiative", "review/tech", "sub/project-reviews", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139648: KEP-2021: Promote HPAScaleToZero feature gate to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139648)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9800: Split CapacityQuota usage and validation reconcilers



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
/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9800)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9799: docs(metrics): update the metrics documentation

#### What type of PR is this?

/kind documentation
/area cluster-autoscaler

#### What this PR does / why we need it:

This PR expands the metrics documentation by adding the metrics that are not yet documented, and re-syncs `proposals/metrics.md` with `metrics.go` so the doc reflects the act...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9799)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6193: KEP-4794: update Implementation History, etc

Updates to https://github.com/kubernetes/enhancements/issues/4974, mostly in the "Implementation History" section, but also removing one UNRESOLVED that's been resolved

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6193)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#56092: Certificates page renders %!s(<nil>) instead of ClusterTrustBundle API reference link

**This is a Bug Report**

What happened:
On [/docs/reference/access-authn-authz/certificate-signing-requests/#what-s-next](https://kubernetes.io/docs/reference/access-authn-authz/certificate-signing-requests/#what-s-next), the "Read about the ClusterTrustBundle API" bullet renders the literal text %...

🔗 [Link](https://github.com/kubernetes/website/issues/56092)

**Metadata:**
- Created: 2026-06-11
- Comments: 2
- State: open

### kubernetes/website#56093: [en] Fix ClusterTrustBundle API reference link

## Summary
- Update the English Certificate Signing Requests page metadata for `ClusterTrustBundle` from `certificates.k8s.io/v1alpha1` to `certificates.k8s.io/v1beta1`.
- This lets the `page-api-reference` shortcode resolve the existing ClusterTrustBundle API reference page instead of rendering `%!...

🔗 [Link](https://github.com/kubernetes/website/pull/56093)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139659: Integration test coverage for Resource Quota

Currently Resource Quota is only tested in the E2E suite, but this is a good candidate for integration testing.

We should add integration test coverage, and maybe consider migrating some of the E2E test cases to the integration suite.

/cc @natasha41575 
/kind cleanup

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139659)

**Metadata:**
- Created: 2026-06-11
- Comments: 3
- State: open

### kubernetes/kubernetes#139653: DRA ResourceSlice validation panics on zero validRange.step

### What happened?

DRA `ResourceSlice` validation can panic with `runtime error: integer divide by zero` when `DRAConsumableCapacity` is enabled and a capacity request policy contains `validRange.step: 0`.

The panic happens in `pkg/apis/resource/validation/validation.go` because `validateRequestPo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139653)

**Metadata:**
- Created: 2026-06-11
- Comments: 4
- State: open

### kubernetes/kubernetes#139640: Scheduler cache debugger: emit JSON-structured output for AI agent consumption

## What would you like to be added?

The scheduler's cache debugger (`pkg/scheduler/backend/cache/debugger/dumper.go`) currently dumps node and pod information as unstructured, multi-line text concatenated into a single log entry. This format is difficult for AI agents to parse reliably.

### Proble...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139640)

**Metadata:**
- Created: 2026-06-11
- Comments: 3
- State: open

### kubernetes/kubernetes#139658: Fix indexer not being cloned before returning from under lock

I forgot to add clone in https://github.com/kubernetes/kubernetes/pull/139557 :( 

Added a test that should prevent this in the future. Reproduces the race without the clone.

/kind bug
```release-note
NONE
```



🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139658)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139657: Controller Robustness Test Framework

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139657)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139654: kubelet: identify workload in PLEG container finished log

**What type of PR is this?**

/kind feature
/sig node

**What this PR does / why we need it:**

The `"Generic (PLEG): container finished"` log message is the primary signal for container kill events (e.g. `exitCode=137` for SIGKILL), but it only included the pod UID and container ID:

    g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139654)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139652: e2e_node_windows: add CPU affinity tests

Add the Windows node e2e CPU affinity tests and the supporting suite plumbing: fix the build and drop the dependency on test/e2e_node by porting the kubeletconfig, criproxy and testing-manifests subpackages locally (CRI proxy uses a Windows named pipe).

<!--  Thanks for sending a pull request!  H...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139652)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139651: Align DeviceTaintRule informer API version with handlers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139651)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139650: test: move autoscaling resource-consumer onto agnhost

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This is a partial fix for #131893.

It reduces one remaining non-agnhost image usage in autoscaling e2e by moving the autoscaling resource-consumer workload from the standalone `resource-consumer` image onto a new ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139650)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139645: Fix spelling typo in kubectl cp comment

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Corrects a spelling typo in a code comment:

* `dependant` → `dependent`

Comment-only change; no functional impact.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139645)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139644: Fix spelling typos in apiextensions-apiserver comments

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Fixes two spelling typos in `apiextensions-apiserver` comments:

* `pkg/registry/customresource/etcd.go`: `wether` → `whether`
* `test/integration/versioning_test.go`: `initilized` → `initialized`

Com...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139644)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139642: Automated cherry pick of #139457: Fix job controller reporting active=0 during pod creation backoff

Cherry pick of #139457 on release-1.36.

#139457: Fix job controller reporting active=0 during pod creation backoff

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

Note: the test expecta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139642)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139641: refactor: use AddEventHandlerWithOptions in cronjob and certificates

Migrate plain `AddEventHandler` calls in `pkg/controller/cronjob` and `pkg/controller/certificates` to `AddEventHandlerWithOptions` with `cache.HandlerOptions{Logger: &logger}`, so the contextual logger is propagated into the informer handler goroutines.

The logger is already in scope at each call ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139641)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9019: Add WG Checkpoint Restore bi-weekly meeting slot

Add a bi-weekly (Asia/Europe) meeting on Wednesday 08:00 UTC.

🔗 [Link](https://github.com/kubernetes/community/pull/9019)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9805: best-effort-atomic-scale-up ProvisioningRequest wrongly reports CapacityIsNotFound when capacity is really present

**Which component are you using?**:

/area cluster-autoscaler

**What version of the component are you using?**:

 v1.35.3-gke.2190000, and also in the latest (commit 18bcb5e03300469c9b0639638dc19a3bb3f44cc2)

Component version:

**What k8s version are you using (`kubectl version`)?**:

<details><su...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9805)

**Metadata:**
- Created: 2026-06-11
- Comments: 1
- State: open

### kubernetes/autoscaler#9802: Modernize cluster-autoscaler go linting

The goal of this task is to replace deprecated golint with golangci-lint. 
The scope of the linters we want to use is to be decided.



Based on #8986

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9802)

**Metadata:**
- Created: 2026-06-11
- Comments: 3
- State: open

### kubernetes/autoscaler#9806: Book capacity only for ProvisioningRequest without scheduled pods

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Expires booking once it founds that the all pods for the ProvisioningRequest are scheduled.

This solves a bug when bookCapacity reserves capacity for every pod of a Provisioned ProvisioningRequest, including...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9806)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9803: Bump the non-kubernetes group across 2 directories with 2 updates

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [golang.org/x/tools](https://github.com/golang/tools).
Bumps the non-kubernetes group with 2 updates in the /vertical-pod-autoscaler/test directory: [golang.org/x/tools](https://github.com/golang/tools) and [gith...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9803)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9801: fix: AWS HasInstance should ignore unrecognized provider IDs

**What type of PR is this?**

/kind bug
/area provider/aws

**What this PR does / why we need it**:

The AWSCloudProvider only supports `aws://zone/name` ProviderIDs. #8047 fixed `NodeGroupForNode` to ignore ProviderIDs it does not recognize (e.g. `eks-hybrid://...` for EKS Hybrid Nodes, or SageMake...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9801)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37242: run windows test on k8s 1.35.0

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37242)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37235: [kueue] Add periodic-ray-project-mini-image-build-push.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37235)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9592: releng: Image promotion for kubernetes v1.33.13

Image promotion for kubernetes v1.33.13
This is an automated PR generated from `kpromo`
```
kpromo pr --fork palnabarun --interactive --tag v1.33.13
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9592)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_java: v1.8.0

## [1.8.0](https://github.com/prometheus/client_java/compare/v1.7.0...v1.8.0) (2026-06-11)


### Features

* Add custom labels to exemplars ([#2191](https://github.com/prometheus/client_java/issues/2191)) ([fd1f3e8](https://github.com/prometheus/client_java/commit/fd1f3e85177ec4d4e4922f22f3aa79dc2dd7e17e))
* add MetricMetadata.Builder, deprecate wide constructors ([#2202](https://github.com/prometheus/client_java/issues/2202)) ([adeef32](https://github.com/prometheus/client_java/commit/adeef32f3...

🔗 [Link](https://github.com/prometheus/client_java/releases/tag/v1.8.0)

**Metadata:**
- Version: v1.8.0
- Published: 2026-06-11
- Prerelease: No

### prometheus/promu: 0.19.0 / 2026-06-11

* [FEATURE] crossbuild: add --pull flag to control image pulling #394


🔗 [Link](https://github.com/prometheus/promu/releases/tag/v0.19.0)

**Metadata:**
- Version: v0.19.0
- Published: 2026-06-11
- Prerelease: No

### containerd/containerd#13582: github.com/containerd/containerd/v2 v2.3.0 and later raise min go to 1.26, "burning" N,N-1 support contracts in downstream module consumers

### Description

I'm using `github.com/containerd/containerd/v2` in several downstream projects, primarily in `github.com/thediveo/whalewatcher` which then is used in further downstream projects, not least `github.com/siemens/edgeshark`. These modules and applications track containerd workloads, ena...

🔗 [Link](https://github.com/containerd/containerd/issues/13582)

**Metadata:**
- Created: 2026-06-11
- Comments: 0
- State: open

### containerd/containerd#13573: `RemoveVolatileOption` cannot recognize mount type "fuse.nydus-overlayfs" from nydus-snapshotter

### Description

The latest Nydus Snapshotter release (v0.15.15) introduced support for enabling volatile mounts globally. When using a nydus-formatted image, Nydus Snapshotter returns a mount.Mount whose type is [_"fuse.nydus-overlayfs"_ rather than _"overlay"_](https://github.com/containerd/nydus-...

🔗 [Link](https://github.com/containerd/containerd/issues/13573)

**Metadata:**
- Created: 2026-06-11
- Comments: 0
- State: open

### cncf/toc#2193: [Tech Review]: Meshery

### Project name

Meshery

### Project link

https://github.com/meshery/meshery

### Due diligence link



### Project contact information

Meshery Maintainers, maintainers@meshery.io

### Additional information



---

_This issue was automatically created from [issue #1386](https://github.com/cncf...

🔗 [Link](https://github.com/cncf/toc/issues/2193)

**Metadata:**
- Created: 2026-06-11
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-12 03:42:37*
