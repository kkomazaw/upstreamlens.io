---
title: "Upstream Github - 2026-07-25"
description: "CNCF upstream activity from github"
pubDate: 2026-07-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/flake", "sig/windows", "needs-triage", "priority/important-soon", "sig/node", "kind/failing-test", "kind/bug", "area/kubectl", "sig/cli", "kind/cleanup", "sig/auth", "sig/api-machinery", "sig/apps", "sig/scheduling", "kind/feature", "wg/device-management", "pr", "area/test", "area/apiserver", "size/XXL", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-priority", "release-note", "size/S", "needs-ok-to-test", "size/XS", "size/M", "approved", "do-not-merge/release-note-label-needed", "area/release-eng", "sig/release", "do-not-merge/cherry-pick-not-approved", "kind/dependency", "area/kubelet", "size/L", "do-not-merge/work-in-progress", "do-not-merge/needs-sig", "sig/instrumentation", "sig/etcd", "lgtm", "cncf-cla: no", "kind/documentation", "sig/architecture", "area/conformance", "website", "sig/docs", "area/cluster-autoscaler", "autoscaler", "triage/accepted", "area/provider/oci", "perf-tests", "kops", "release", "prometheus", "client_python", "client_golang", "containerd", "nerdbox", "cncf", "lfx mentorship", "Term 3: Sept-Nov", "2026", "Mentors Confirmed", "Maintainer/Contribex Approved", "Proposal", "Validation Passed", "CNCF Approved", "Exported", "mentoring", "toc", "kind/dd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10049: PR#10047 Backport for 1.35: Add fault domain to node pool templates

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10049)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10048: PR#10047 Backport for 1.34: Add fault domain to node pool templates

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10048)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10047: OCI: Add fault domain to node pool templates

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10047)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### cncf/mentoring#1963: [CNCF LFX Proposal] Podman Container Tools: Agentic CI Flake Categorization and Analysis

### CNCF Project

Podman Container Tools

### Term

2026 Term 3 (Sep-Nov)

### Program Name

Agentic CI Flake Categorization and Analysis

### Program Description

## Description
Continuous Integration (CI) pipelines are the backbone of our development, but "flaky" tests—tests that exhibit both fals...

🔗 [Link](https://github.com/cncf/mentoring/issues/1963)

**Metadata:**
- Created: 2026-07-24
- Comments: 12
- State: open

### cncf/toc#2253: [LEVEL CHANGE] Kubeflow Incubation to Graduation

# Project Moving Levels Checklist

This template outlines the administrative steps required when a project moves from one maturity level to another (e.g., Sandbox to Incubating, Incubating to Graduated).

- **Project Name:** Kubeflow
- **New Maturity Level:** Graduation
- **Project moving levels PR:...

🔗 [Link](https://github.com/cncf/toc/issues/2253)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#140924: Flaky test: TestValidateEvictionStatusUpdate/mark_active_and_started on Windows

### Which jobs are flaking?

pull-kubernetes-unit-windows-master

### Which tests are flaking?

TestValidateEvictionStatusUpdate/mark_active_and_started

### Since when has it been flaking?

Since commit `fc558fb4e9fa9da1dc583f5c71f27cd54debc4ae` — "introduce EvictionRequest and Eviction API" (merge...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140924)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/kubernetes#140923: [Failing-test] api snoop is detecting an untested endpoint

### Which jobs are failing?

apisnoop-conformance-gate

### Which tests are failing?

https://testgrid.k8s.io/sig-arch-conformance#apisnoop-conformance-gate

### Since when has it been failing?

07/22

### Testgrid link

https://testgrid.k8s.io/sig-arch-conformance#apisnoop-conformance-gate

### Rea...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140923)

**Metadata:**
- Created: 2026-07-24
- Comments: 3
- State: open

### kubernetes/kubernetes#140922: kubectl create ingress accepts trailing data in --rule and silently drops TLS

### What happened?
                                                                                                                           
  kubectl create ingress accepts malformed trailing data in --rule.                                                        
                                 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140922)

**Metadata:**
- Created: 2026-07-24
- Comments: 4
- State: open

### kubernetes/kubernetes#140915: Add back `admissioninitializer.WantsAuthorizer` for v1.37

As part of implementing [Conditional Authorization](https://github.com/kubernetes/enhancements/issues/5681), in https://github.com/kubernetes/kubernetes/pull/138801 we did a literal rename from 

```go
if wants, ok := plugin.(WantsAuthorizer); ok {
	wants.SetAuthorizer(i.authorizer)
}
```

to

```go...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140915)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/kubernetes#140911: kube-apiserver: request can hang for 40–90s when its etcd transport is recycled mid-flight (grpc-go v1.72.2 bug, fixed in v1.77.0; affects release-1.34/1.35)

### What happened?

In our CI environment (Calico Felix functional tests, which start a fresh kube-apiserver per test), a LIST of a CRD hung inside the apiserver for 13+ seconds while identical LISTs from other clients, through the same apiserver, succeeded within 300 ms. The stuck request was still...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140911)

**Metadata:**
- Created: 2026-07-24
- Comments: 2
- State: open

### kubernetes/kubernetes#140910: Failure cluster [08ffb694...] `StatefulSet` problems in `ci-kubernetes-e2e-kind-alpha-beta-features-canary`

### Failure cluster [08ffb694187fb53f5d54](https://go.k8s.io/triage#08ffb694187fb53f5d54)

##### Error text:
```
[FAILED] Failed waiting for pods to enter running: context deadline exceeded
In [It] at: k8s.io/kubernetes/test/e2e/framework/statefulset/wait.go:63 @ 07/10/26 16:56:53.526

```
#### Rece...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140910)

**Metadata:**
- Created: 2026-07-24
- Comments: 4
- State: open

### kubernetes/kubernetes#140909: scheduler: graduate PreQueueingHint extension point

### What would you like to be added?

This is the follow-up to https://github.com/kubernetes/kubernetes/pull/138916. The extension is under a feature gate, beta on by default. We should evaluate performance and when it's ready, graduate to GA. Removal of the feature gate then follows.

For performan...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140909)

**Metadata:**
- Created: 2026-07-24
- Comments: 2
- State: open

### kubernetes/kubernetes#140927: apiserver: add OpenAPIV2BytesCache gate to serve /openapi/v2 from mar…

This PR adds an alpha feature gate, `OpenAPIV2BytesCache` (default off). Today every layer that serves or aggregates `/openapi/v2` permanently retains parsed `spec.Swagger` graphs, even though serving only reads serialized bytes — and those graphs, retained several times across the delegation chain,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140927)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140926: kubectl: end-anchor ingress rule validation regex

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl create ingress` validation regex (`ruleRegex`) was anchored at the beginning (`^`) but lacked an end anchor (`$`). Because `MatchString` matches valid prefixes, rules containing malformed trailing data (e.g....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140926)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140925: Fix flaky TestValidateEvictionStatusUpdate/mark_active_and_started

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:
The test's oldInput used metav1.Now() (wall clock) for Responder[0].StartTime while input used clock.Now() (fake clock initialized from time.Now()). On Windows, where the system clock resolution is ~...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140925)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140921: e2e/auth: use FQDN for mTLS client fetch URL

#### What type of PR is this?

/kind failing-test
/kind flake

#### What this PR does / why we need it:

The `Projected PodCertificate` mTLS e2e test built the client fetch URL from
the partially qualified name `server.<namespace>.svc`. Windows pods treat any
name containing a `.` as an FQD...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140921)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140920: [release-1.35] Bump to go 1.26.5

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140920)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140919: [release-1.34]  Fix gomock errors and Bump to go 1.26.5

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140919)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140918: kubelet/dra: add regression test for re-prepare-after-restart device duplication

## What this PR does / why we need it

I looked into #140471, which reports that re-preparing an already-prepared claim after a kubelet restart appends the `NodePrepareResources` response onto the checkpoint-restored device list instead of replacing it, so `DriverState.Devices` (and the checkpoint) ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140918)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140917: test/images: bump agnhost, nginx, nginx-new, glibc-dns-testing for bu…

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140917)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140916: Add back `admissioninitializer.WantsAuthorizer` for v1.37

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140916)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140914: WIP: CI testing

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Don't merge, just running some jobs.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140914)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140913: Fake commit to trigger tests

Testing https://github.com/kubernetes/test-infra/pull/37538

/kind feature

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140913)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140912: client-go/util/homedir: add unit tests for HomeDir

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Adds unit test coverage for `HomeDir()` in `staging/src/k8s.io/client-go/util/homedir/homedir_test.go`:
- Tests `HOME` environment variable behavior when set and when empty/unset on Unix/Linux/macOS platforms.
- Test...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140912)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140908: scheduler: extract NewFrameworks constructor and add FrameworkForPod helper

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR refactors the scheduler initialization logic by extracting framework and shared component construction from `scheduler.New` into an exported constructor `NewFrameworks` in `pkg/scheduler/frameworks....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140908)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140907: test/e2e: remove unused parameter from WaitForPodResizeActuation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140907)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140905: Reduce locking in etcd3 metrics for now just store.Get to show how it would look like

At the scale of 5k nodes we can do even 10k Get requests per second to etcd, which becomes a problem. However, it's not etcd that becomes slow, but kube-apiserver lock contention and context switching. This metrics and other observability in store.Get is currently main suspect for issues related to ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140905)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140904: dra: guard health cache against nil map from checkpoint

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes a possible panic in the `DRA device-health` code when the health checkpoint file on disk decodes to a nil map - at the top level (null) or inside a driver entry ({"driverA":{"Devices":null}}).

`healthI...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140904)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140902: client-go/reflector: give up on watch-list after incomplete streams

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

If an aggregated API server accepts a WatchList request, sends some initial
events, and then closes the stream without ever sending the
`initial-events-end` bookmark, `Reflector.watchList()` retries the
watch-list requ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140902)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140899: Add brejman to sig-scheduling reviewers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140899)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140897: test: add conformance coverage for EvictionRequest

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140897)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140896: apiserver/cacher: stream watch cache list results instead of materializing the range

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140896)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56604: npm ci fails on arm64 leg of post-website-push-image-k8s-website-hugo (unrelated to #56584)

**This is a Bug Report**

**Problem:**

`post-website-push-image-k8s-website-hugo` still fails after #56602 fixed the `DOCKER_BUILDX` path (#56584). It now fails at a different step: `npm ci` (`Dockerfile:45`) on the `linux/arm64` leg.

Failing run: https://prow.k8s.io/view/gs/kubernetes-ci-logs/log...

🔗 [Link](https://github.com/kubernetes/website/issues/56604)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/website#56589: Align documentation of storage class and pvcs on retroactive storage class assignment

The documentation on [default StorageClass](https://kubernetes.io/docs/concepts/storage/storage-classes/#default-storageclass) and [Retroactive default StorageClass assignment](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#retroactive-default-storageclass-assignment) seem to have s...

🔗 [Link](https://github.com/kubernetes/website/issues/56589)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/website#56585: Bug: Navbar mode icon is partially hidden on widths between 767px and 799px

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
On screen widths be...

🔗 [Link](https://github.com/kubernetes/website/issues/56585)

**Metadata:**
- Created: 2026-07-24
- Comments: 2
- State: open

### kubernetes/website#56605: Skip npm lifecycle scripts to avoid unused Hugo binary download

### Description

Fixes: ([reference](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/post-website-push-image-k8s-website-hugo/2080667306832171008)):

```
#24 [linux/arm64 stage-1 7/7] RUN npm ci
#24 195.7 npm warn deprecated glob@8.1.0: Glob versions prior to v9 are no longer supported
#2...

🔗 [Link](https://github.com/kubernetes/website/pull/56605)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10051: New NodeInfo and NodeInfoLister interfaces to support InterPodAffinityHostnameFastPath

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10051)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/autoscaler#10050: VPA recommender log spam in 1.36

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
EKS/K8s 1.36

vpa-recommender-hardened:v1.7.0

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) i...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10050)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/perf-tests#4205: Make scalability test results more accessible

**What would you like to be added**:

We (me and @Jefftree) propose making scalability test results and historical Prow run data more accessible by creating new tool within perf-test.

Currently, scalability run data is scattered across raw GCS buckets, log archives, and metrics snapshots. This enha...

🔗 [Link](https://github.com/kubernetes/perf-tests/issues/4205)

**Metadata:**
- Created: 2026-07-24
- Comments: 3
- State: open

### kubernetes/perf-tests#4209: dra: add recource claim controller metrics

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4209)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kops#18619: Regression in spec.authentication.aws.backendMode: CRD

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display
 this information.**
```
Client version: 1.36.0 (git-v1.36.0)
```

**2. What Kubernetes version are you running? `kubectl version` will print the
 version if a cluster is running or provide the Kubernetes v...

🔗 [Link](https://github.com/kubernetes/kops/issues/18619)

**Metadata:**
- Created: 2026-07-24
- Comments: 0
- State: open

### kubernetes/release#4479: Change kubelet.service permissions to satisfy CIS benchmark

<!-- Please only use this template for submitting feature requests -->

#### What would you like to be added:

On this line: https://github.com/kubernetes/release/blob/f618b2a308bc76e90e987e45ab17c85778dd5993/cmd/krel/templates/latest/kubelet/kubelet.spec#L54
I would like 0644 to be changed to 0600 ...

🔗 [Link](https://github.com/kubernetes/release/issues/4479)

**Metadata:**
- Created: 2026-07-24
- Comments: 0
- State: open

### prometheus/client_python: v0.26.0

## What's Changed
* Expose measured duration on Timer context manager by @vokracko in https://github.com/prometheus/client_python/pull/1166
* Use specific exception for duplicate timeseries by @kajinamit in https://github.com/prometheus/client_python/pull/1074
* Make clear() a no-op for label-less metrics (fixes #707) by @ompathakbaap in https://github.com/prometheus/client_python/pull/1184
* Use object instead of Any for labels() parameters by @gregoiredx in https://github.com/prometheus/cl...

🔗 [Link](https://github.com/prometheus/client_python/releases/tag/v0.26.0)

**Metadata:**
- Version: v0.26.0
- Published: 2026-07-24
- Prerelease: No

### prometheus/client_golang: v1.24.1 / 2026-07-23

Small bugfix release for promhttp.

## What's Changed

[BUGFIX] promhttp: Fix panic on requests with nil URL. #2065

**Full Changelog**: https://github.com/prometheus/client_golang/compare/v1.24.0...v1.24.1

🔗 [Link](https://github.com/prometheus/client_golang/releases/tag/v1.24.1)

**Metadata:**
- Version: v1.24.1
- Published: 2026-07-24
- Prerelease: No

### containerd/nerdbox: v0.2.1

## What's Changed
* build(deps): bump actions/download-artifact from 4.3.0 to 8.0.1 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/238
* build(deps): bump actions/checkout from 6.0.2 to 7.0.0 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/240
* build(deps): bump actions/upload-artifact from 4.6.2 to 7.0.1 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/243
* build(deps): bump docker/setup-buildx-action from 4.0.0 to 4.2.0 by @dependabot...

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.1)

**Metadata:**
- Version: v0.2.1
- Published: 2026-07-24
- Prerelease: No


---

*This content was automatically collected on 2026-07-25 02:26:36*
