---
title: "Upstream Github - 2026-06-16"
description: "CNCF upstream activity from github"
pubDate: 2026-06-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "area/testing", "needs-triage", "minikube", "kind/bug", "sig/scalability", "sig/api-machinery", "sig/node", "kind/failing-test", "wg/device-management", "needs-sig", "pr", "area/kubelet", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/XXL", "kind/api-change", "kind/feature", "sig/apps", "area/code-generation", "api-review", "area/test", "sig/scheduling", "sig/autoscaling", "size/XL", "sig/testing", "do-not-merge/work-in-progress", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "kind/cleanup", "size/XS", "area/apiserver", "release-note-none", "approved", "needs-rebase", "sig/auth", "lgtm", "size/M", "ok-to-test", "do-not-merge/cherry-pick-not-approved", "kind/regression", "sig/network", "area/kube-proxy", "size/S", "do-not-merge/needs-sig", "wg/workload-aware-scheduling", "language/ko", "area/localization", "website", "area/jobs", "area/config", "test-infra", "kind/kep", "enhancements", "kind/documentation", "area/enhancements", "area/vertical-pod-autoscaler", "triage/accepted", "autoscaler", "cncf-cla: no", "kube-state-metrics", "prometheus", "release", "client_rust", "envoyproxy", "help wanted", "triage", "cherrypick/release-v1.8.2", "cherrypick/release-v1.7.5", "gateway", "containerd", "nerdctl", "area/cri", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139764: KEP-5936: Update API specs and introduce feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139764)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139758: KEP-6164: Implement memory-identity guardrails

Builds on https://github.com/kubernetes/kubernetes/pull/139605

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Implement guardrails for https://github.com/kubernetes/enhancements/issues/6164

The intended workflow is:

1. Internal type is made mem...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139758)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139748: Remove MultiCIDRServiceAllocator and DisableAllocatorDualWrite feature gates

Started working on this, but I realized maybe we need to keep `DisableAllocatorDualWrite` for another release because it wasn't locked until 1.35?

@aojea ?

/kind cleanup
/sig network

#### Which issue(s) this PR is related to:
KEP: https://github.com/kubernetes/enhancements/issues/1880

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139748)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37261: Update agent-sandbox presubmits to skip AI agent and linter configs

Skip `.agents`, `.coderabbit.yaml`, `SECURITY_CONTACTS`, and `cloudbuild.yaml` in `skip_if_only_changed` for agent-sandbox presubmits, as they do not affect controller logic, builds, or test execution.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37261)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6202: Fix mistakes in KEP-6164

- One-line PR description: Address  https://github.com/kubernetes/enhancements/issues/6164#issuecomment-4710084487

<!-- link to the k/enhancements issue -->
- Issue link: https://github.com/kubernetes/enhancements/issues/6164

<!-- other comments or additional information -->
- Other comments...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6202)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6201: Ensure SIG Node apporvers

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description:

/kind cleanup
/sig node
/assign @haircommander 

Some AI helped

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6201)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9819: Add in-place infeasible cached metric

#### What type of PR is this?
/kind feature
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
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9819)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/minikube#23164: Flaky test: TestPreload/PreloadSrc/gcs-cached cache miss on Docker

## Summary

TestPreload/PreloadSrc/gcs-cached fails intermittently on Docker driver. The test expects a previously cached preload to be found ("in cache, skipping download") but instead the preload is re-downloaded. This suggests the cache lookup is not finding a previously stored file. This has onl...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23164)

**Metadata:**
- Created: 2026-06-15
- Comments: 0
- State: open

### kubernetes/minikube#23163: Flaky test: TestDownloadOnly preload tarball missing on Docker

## Summary

TestDownloadOnly fails intermittently on Docker driver because the preloaded tarball file is not found in the cache after `minikube start --download-only`. The remote preload exists (verified via GitHub releases), but the local file does not end up at the expected path. This has only bee...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23163)

**Metadata:**
- Created: 2026-06-15
- Comments: 0
- State: open

### kubernetes/kubernetes#139766: WatchList initEvents uses a different semantic comparing to the old List+Watch approach

### What happened?

When reflector uses List+Watch, it request ANY version by setting RV=0. [Code](https://github.com/kubernetes/kubernetes/blob/0cd4e13c69be9ec44267efeaf9acfd90ef4af5f5/staging/src/k8s.io/client-go/tools/cache/reflector.go#L1126-L1130)
When reflector uses WatchList, it always reques...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139766)

**Metadata:**
- Created: 2026-06-16
- Comments: 5
- State: open

### kubernetes/kubernetes#139761: DRA kubelet version skew jobs failing to fetch v1.32 release artifacts

### Which jobs are failing?

- [ci-kind-dra-n-3-1-35](https://testgrid.k8s.io/sig-node-dynamic-resource-allocation#ci-kind-dra-n-3-1-35)
- [ci-kind-dra-n-2-1-34](https://testgrid.k8s.io/sig-node-dynamic-resource-allocation#ci-kind-dra-n-2-1-34)

### Which tests are failing?

Setup before tests are r...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139761)

**Metadata:**
- Created: 2026-06-15
- Comments: 2
- State: open

### kubernetes/kubernetes#139744: BalancerAttributes: {"<%!p(pickfirstleaf.managedByPickfirstKeyType={})>": "<%!p(bool=true)>" }}. Err: connection error: desc = "transport: Error while dialing: dial tcp 192.168.101.10:2379: operation was canceled

### What happened?

I am frequently seeing these error logs on my Kube-API servers.

### What did you expect to happen?

The cluster is still healthy and functional. I have not observed any issues till now. I know that is an upstream bug but I somehow want to get rid of these errors without upgradin...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139744)

**Metadata:**
- Created: 2026-06-15
- Comments: 6
- State: open

### kubernetes/kubernetes#139765: devicemanager: fix gRPC connection leaks on duplicate plugin registration

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Two distinct gRPC connection leak paths cause kubelet memory to grow monotonically until restart:

1. **handler.go**: `connectClient` unconditionally created a new client without checking if one was already r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139765)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139763: [WIP] [Do Not Merge] Promote Node Declared Features to GA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139763)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139762: Adding integration test to cover the defaulting logic and QoS determi…

…nation logic for Pod Level Resources

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide h...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139762)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139760: update the error message, to make it to be more explict for windows

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139760)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139759: [WIP] Move watchCacheStorage to cacher/store subpackage


/kind cleanup

```release-note
NONE
```
/cc @Jefftree @p0lyn0mial @michaelasp 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139759)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139757: validation-gen: add k8s:dependentForbidden tag validator

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139757)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139756: test/images/agnhost: bump to 2.65.0

#### What type of PR is this?
/kind cleanup
/sig testing

#### What this PR does / why we need it:
Bumps the agnhost e2e test image from 2.64.0 to 2.65.0. The new version includes a generic `/envvar?var=NAME` endpoint in netexec for reading pod environment variables.

#### Which issue(s) this PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139756)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139755: Expose a way to wait for a controller listener to be fully shutdown

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139755)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139753: Fix job controller reporting active=0 during pod creation backoff [1.33]

Cherry pick of #139457 on release-1.33.

#139457: Fix job controller reporting active=0 during pod creation backoff

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

Note: the test expecta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139753)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139752: Fix job controller reporting active=0 during pod creation backoff [1.34]

Cherry pick of #139457 on release-1.34.

#139457: Fix job controller reporting active=0 during pod creation backoff

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

Note: the test expecta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139752)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139751: Fix job controller reporting active=0 during pod creation backoff [1.35]

Cherry pick of #139457 on release-1.35.

#139457: Fix job controller reporting active=0 during pod creation backoff

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

Note: the test expecta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139751)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139750: perf: observability for Pods that specify a `schedulerName` the cluster

Resolves #116982.

Use case: apply a deployment with `schedulerName` specified: ``` apiVersion: apps/v1 kind: Deployment metadata: name: nginx-deployment spec: selector: matchLabels: app: nginx replicas: 3 template: metadata: labels: app: nginx spec: schedulerName: test  # test not exist containers:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139750)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139746: pkg/api/testing: skip extensions/v1beta1 in Scale validation equivalence tests

#### What type of PR is this?

/kind failing-test

#### What this PR does / why we need it:

`autoscaling.Scale` is registered under `autoscaling/__internal`, `apps/__internal`, and `extensions/__internal`. During versioned validation equivalence testing, the same internal `Scale` object is th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139746)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139745: Ensure is_xfs evaluates to true in quota tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139745)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139743: Rename PodGroupScheduled condition to PodGroupInitiallyScheduled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139743)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139742: imagepolicy: enable commentstart kube-api-linter rule

Enables the `commentstart` kube-api-linter (KAL) rule for the `imagepolicy` API group by removing it from the rule's exclusion list in `hack/kube-api-linter/exceptions.yaml` and updating the field godoc comments in `imagepolicy/v1alpha1` to start with the serialized (JSON) field name, as the rule re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139742)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139739: Asynchronously create a mirror pod for the static pod if it does not already exist. Improve pod creation efficiency.



Asynchronously create a mirror pod for the static pod if it does not already exist. Improve pod creation efficiency.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139739)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56125: Update the Korean translation of content/ko/docs/tasks/access-application-cluster/list-all-running-container-images.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/access-application-cluster/list-all-running-container-images.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/access-ap...

🔗 [Link](https://github.com/kubernetes/website/issues/56125)

**Metadata:**
- Created: 2026-06-15
- Comments: 1
- State: open

### kubernetes/website#56122: Improve Lighthouse performance, accessibility, and SEO scores for kubernetes.io

## Problem:

A Lighthouse audit of https://kubernetes.io identified several performance, accessibility, and SEO issues that are negatively impacting page quality and user experience.

Additionally, navigating to another page on kubernetes.io appears to reload the entire website rather than performin...

🔗 [Link](https://github.com/kubernetes/website/issues/56122)

**Metadata:**
- Created: 2026-06-15
- Comments: 2
- State: open

### kubernetes/autoscaler#9822: Bump the kubernetes group across 2 directories with 31 updates

Bumps the kubernetes group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.36.1` | `0.36.2` |
| [k8s.io/client-go](https://github.com/kubernetes/client-go) | `0.36.1` | `0.36.2` |
| [k8s.io/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9822)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9821: Bump the patch-updates group across 2 directories with 31 updates

Bumps the patch-updates group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.36.1` | `0.36.2` |
| [k8s.io/client-go](https://github.com/kubernetes/client-go) | `0.36.1` | `0.36.2` |
| [k8s....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9821)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9820: Bump the non-kubernetes group across 1 directory with 2 updates

Bumps the non-kubernetes group with 2 updates in the /vertical-pod-autoscaler/test directory: [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) and [github.com/onsi/gomega](https://github.com/onsi/gomega).

Updates `github.com/onsi/ginkgo/v2` from 2.30.0 to 2.31.0
<details>
<summary>Releas...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9820)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3002: feat: Add stable metrics golden file presubmit

<!--  Thanks for sending a pull request!  Here are some tips for you:
1. If this is your first time, read our contributor guidelines https://git.k8s.io/community/contributors/guide/pull-requests.md#the-pull-request-submit-process and developer guide https://git.k8s.io/community/contributors/devel/d...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3002)

**Metadata:**
- Created: 2026-06-15
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_rust: v0.25.0

## Highlights

### Added
- **Native histogram support**, including native-only histograms and histograms with both classic and native buckets.
- An off-by-default **`protobuf-protox`** feature to build protobuf support without requiring an external `protoc` binary.

### Changed
 - **`prometheus_protobuf` now generates and encodes Prometheus `io.prometheus.client` protobuf messages** (from `metrics.proto`) instead of the OpenMetrics protobuf data model (prometheus/OpenMetrics/issues/296). ...

🔗 [Link](https://github.com/prometheus/client_rust/releases/tag/v0.25.0)

**Metadata:**
- Version: v0.25.0
- Published: 2026-06-15
- Prerelease: No

### envoyproxy/gateway#9226: Gateway-wide CTP incorrectly accepted when Gateway name is a prefix of another Gateway name (mergeGateways)

**Description**:

When `mergeGateways` is enabled and two Gateways exist where one name is a string prefix of the other (e.g. `gw` and `gw-b`), a Gateway-wide `ClientTrafficPolicy` targeting the shorter-named Gateway is incorrectly accepted even though a same-port HTTP listener exists on the other G...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9226)

**Metadata:**
- Created: 2026-06-15
- Comments: 0
- State: open

### envoyproxy/gateway#9225: Expired certificate combined with valid chain causes configuration stall

*Description*:

After upgrading from Envoy Gateway v1.7.3 to v1.7.4, TLS secrets containing a expired certificate and unexpired chain are rejected by Envoy with KEY_VALUES_MISMATCH, even though the private key correctly matches the certificate. It looks like the expired certificate gets removed but ...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9225)

**Metadata:**
- Created: 2026-06-15
- Comments: 1
- State: open

### containerd/nerdctl: v2.3.2

## Changes

Major changes:
* `nerdctl container`:
    * Showed `Pid` as `0` for stopped containers in `nerdctl container inspect` (#4965, thanks to @haytok)
    * Chunked mounts metadata to prevent max label size crashes (#4945, thanks to @Skywalkr-dev)
* `nerdctl image`:
    * Added the overlaybd `vsize` option (#4960, thanks to @fourierrr)
    * Fixed `nerdctl load` failures (#4888, thanks to @ningmingxiao)
* `nerdctl network`:
    * Fixed a panic when statting an invalid CNI config ...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.3.2)

**Metadata:**
- Version: v2.3.2
- Published: 2026-06-15
- Prerelease: No

### containerd/containerd#13599: CreateContainer CRI API should be rejected on stopped sandbox

### Description

See https://github.com/kubernetes-sigs/cri-tools/pull/2126

### Steps to reproduce the issue

1. Run https://github.com/kubernetes-sigs/cri-tools/pull/2126
2. Test must pass without spec dicrepancy


### Describe the results you received and expected

CreateContainer call must not b...

🔗 [Link](https://github.com/containerd/containerd/issues/13599)

**Metadata:**
- Created: 2026-06-15
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Features
- **zfile**: add Intel QAT hardware acceleration for LZ4 decompression [#406](https://github.com/containerd/overlaybd/pull/406) ([xiecl666](https://github.com/containerd/overlaybd/commit/c11cc93792a560ff84c031a2df9e90d8d745711d))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-06-15
- Prerelease: Yes


---

*This content was automatically collected on 2026-06-16 03:52:56*
