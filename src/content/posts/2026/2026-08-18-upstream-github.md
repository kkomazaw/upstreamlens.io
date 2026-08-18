---
title: "Upstream Github - 2026-08-18"
description: "CNCF upstream activity from github"
pubDate: 2026-08-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "pr", "cncf-cla: yes", "size/XXL", "lgtm", "do-not-merge/hold", "kind/design", "language/en", "area/web-development", "size/L", "sig/docs", "approved", "language/zh", "kind/bug", "sig/scheduling", "sig/node", "needs-sig", "sig/scalability", "kind/failing-test", "sig/storage", "size/M", "kind/flake", "release-note-none", "sig/apps", "needs-priority", "area/kubelet", "release-note", "size/S", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/needs-kind", "wg/device-management", "area/kubectl", "sig/cli", "area/test", "sig/testing", "kind/cleanup", "sig/api-machinery", "do-not-merge/release-note-label-needed", "do-not-merge/invalid-commit-message", "area/apiserver", "kind/api-change", "size/XS", "cloud-provider-gcp", "do-not-merge/work-in-progress", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "size/XL", "ok-to-test", "minikube", "area/vertical-pod-autoscaler", "triage/accepted", "autoscaler", "area/cluster-autoscaler", "kube-state-metrics", "area/dependency", "enhancements", "envoyproxy", "release", "go-control-plane", "containerd", "area/criu", "area/cri", "accelerated-container-image", "cncf", "kind/initiative", "tag/security-and-compliance", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141401: Migrate LeaseCandidate.Spec.LeaseName to declarative validation

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Migrates the `required` validation on `LeaseCandidate.Spec.LeaseName` from
hand-written Go to declarative validation, as part of KEP-5073 (Declarative
Validation).

`LeaseName` qualifies as a "...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141401)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10151: Embed cluster-autoscaler CRD definitions in apis Go module

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10151)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10150: Revert migration of ClusterAPI and ExternalGRPC cloudproviders

#### What type of PR is this?
/kind cleanup

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
/kind regress...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10150)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3095: Feature Proposal: Support loading multiple Custom Resource State ConfigMaps simultaneously

<!-- Please only use this template for submitting feature requests -->

**What would you like to be added:**

I would like kube-state-metrics to support loading and merging multiple Custom Resource State configuration files (+ ConfigMaps) simultaneously.

Specifically, the `--custom-resource-state-c...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3095)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### containerd/containerd#13970: Proposal: Support Pod-level checkpoint and restore

### What is the problem you're trying to solve

Hello, maintainers,

This issue proposes the containerd architecture and tracks implementation work for KEP-5823. It distinguishes the intended containerd contract from the current Kata Containers/QEMU prototype. The Sandbox API remains open for review...

🔗 [Link](https://github.com/containerd/containerd/issues/13970)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### cncf/toc#2279: [Initiative]: Security Slam - Autumn / Winter 2026

### Name

Security Slam - Autumn / Winter 2026

### Short description

Continue and evolve the CNCF Security Slam as a recurring initiative to help CNCF projects identify, prioritize, and implement meaningful security improvements, with a proposed in-person component at the CNCF Maintainer Summit co...

🔗 [Link](https://github.com/cncf/toc/issues/2279)

**Metadata:**
- Created: 2026-08-17
- Comments: 0
- State: open

## Updates

### kubernetes/website#57042: [ko] Update content/ko/docs/concepts/windows/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/windows/_index.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/windows/
- English: https://kubernetes.io/docs/co...

🔗 [Link](https://github.com/kubernetes/website/issues/57042)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/website#57039: [ko] Translate content/en/docs/tasks/administer-cluster/cpu-management-policies.md

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/tasks/administer-cluster/cpu-management-policies.md` into Korean as `content/ko/docs/tasks/administer-cluster/cpu-management-policies.md.

**Website Link**

- English : https://kubernetes.io/docs/tasks/adm...

🔗 [Link](https://github.com/kubernetes/website/issues/57039)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/website#57043: Remove case studies

### Description

Removes the call to the case studies block and the case studies themselves, since we no longer use or update these.

cc: @kubernetes/sig-docs-leads @kubernetes/steering-committee 

More context: https://github.com/kubernetes/website/discussions/48432

/hold
/area web-develo...

🔗 [Link](https://github.com/kubernetes/website/pull/57043)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57033: [zh-cn]sync pod-priority-preemption

content/zh-cn/docs/concepts/scheduling-eviction/pod-priority-preemption.md

🔗 [Link](https://github.com/kubernetes/website/pull/57033)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141422: Empty DeviceTaintRule selector evicts every pod in the cluster, across namespaces and priorities, until the rule is removed

### What happened?

A `DeviceTaintRule` created with an empty `deviceSelector: {}` evicted every pod in the cluster using any DRA
device, regardless of namespace or Pod priority — not just the device(s) the rule was meant to target.

I had two unrelated namespaces running, each with a pod holding a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141422)

**Metadata:**
- Created: 2026-08-17
- Comments: 2
- State: open

### kubernetes/kubernetes#141419: Node join with custom join token with webhook based auth

Hi Team,
Context: I want to use custom worker `node-identity`  to be able to join the K8s control plane but Im thinking of piggy back on kubeadm supported boostrap flow but instead of using `boostrap token`, planning to use custom token and api server will be configured with `authencation webhook` t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141419)

**Metadata:**
- Created: 2026-08-17
- Comments: 2
- State: open

### kubernetes/kubernetes#141417: [Failing test] [sig-scalability] ci-kubernetes-e2e-kops-aws-scale-amazonvpc-using-cl2.Overall

### Which jobs are failing?

* sig-release-master-informing
  * ec2-master-scale-performance

### Which tests are failing?

* ci-kubernetes-e2e-kops-aws-scale-amazonvpc-using-cl2.Overall
* kubetest2.Up

### Since when has it been failing?

* First failure (current streak): Fri, 14 Aug 2026 07:02:00 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141417)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/kubernetes#141411: Move pkg/scheduler to staging

To make sure that simulation library do not need to import all kubernetes/kubernetes repository we need to move scheduler code to staging. To do so we need to make it in steps. First we need to get rid of all dependencies we have inside pkg/scheduler to k/k. To make sure that we are not adding new d...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141411)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/kubernetes#141410: Remove dependency to k8s.io/kubernetes/pkg/apis/core/validation

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first

Only dependency for scheduler is ```NoteLengthLimit```, we can create our own const, if value for this will change it will increase, so we should be safe with having our own const for this. Or we can check if there is a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141410)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/kubernetes#141408: remove dependency for k8s.io/kubernetes/pkg/api/v1/pod

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first

In scheduler there only ```CalculatePodConditionObservedGeneration``` and ```UpdatePodCondition``` are used from ```k8s.io/kubernetes/pkg/api/v1/pod```, we can simplify ```CalculatePodConditionObservedGeneration``` by r...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141408)

**Metadata:**
- Created: 2026-08-17
- Comments: 2
- State: open

### kubernetes/kubernetes#141407: Remove usage of helper functions from k8s.io/kubernetes/pkg/apis/core/v1/helper

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first

Check if there are matching helper functions in component-helpers in staging 
If they are use them, if not migrate one we need and check if they need to be mark as api-approved(when they are needed for api checks)

/sig...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141407)

**Metadata:**
- Created: 2026-08-17
- Comments: 1
- State: open

### kubernetes/kubernetes#141406: Use api from staging

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first

Change all usage of api from k8s.io/api/scheduling/v1 to k8s.io/api/scheduling/v1alpha3 in pkg/scheduler

/sig scheduling

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141406)

**Metadata:**
- Created: 2026-08-17
- Comments: 4
- State: open

### kubernetes/kubernetes#141427: attachdetach: use delayFunc.Until for reconciler tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141427)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141426: device-plugin: skip DRA resources in GetDeviceRunContainerOptions

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141426)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141425: fix: reject empty deviceSelector in DeviceTaintRule validation

### Which problem is this PR solving?

Fixes #141422

A `DeviceTaintRule` created with an empty `deviceSelector: {}` (all three fields nil) currently passes validation and matches every device in the cluster, causing silent eviction of all pods using DRA devices. This is a safety issue: an empty sel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141425)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141424: kubectl describe: render byte resources as bytes, not millibytes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A memory value such as `0.1Gi` is not representable as a whole number of bytes, because 10 does not divide a power of 2:

```
0.1 * 1024 * 1024 * 1024 * 1000 = 107374182400
```

The API server therefore stores the qu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141424)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141423: Fix the flaky test for the ChangeContainerStatusOnKubeletRestart feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141423)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141416: sets: optimize SymmetricDifference with a single-allocation dual pass

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`Set[T].SymmetricDifference` in `k8s.io/apimachinery/pkg/util/sets` was implemented as:

```go
func (s1 Set[T]) SymmetricDifference(s2 Set[T]) Set[T] {
	return s1.Difference(s2).Union(s2.Difference(s1))...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141416)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141415: Lock down k8s.io/kubernetes imports in pkg/scheduler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141415)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141414: kubelet: clean up terminated static pods from waiting queue

 #### What type of PR is this?                                                                                                                                                         

/kind bug
             
#### What this PR does / why we need it:
    
In `kubelet/pod_workers.go`, `allowStat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141414)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141413: scheduler: migrate scheduling API usage from v1beta1 to v1alpha3

Replaces all k8s.io/api/scheduling/v1beta1 references in pkg/scheduler with k8s.io/api/scheduling/v1alpha3, 


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141413)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141412: apiserver/cacher: fold unfiltered list benchmark into BenchmarkStoreList

/kind cleanup
/sig api-machinery
#### What this PR does / why we need it:

This PR folds the unfiltered full-list cacher benchmark into `BenchmarkStoreList`, so related LIST benchmarks live under one benchmark entry point.

```text
BenchmarkStoreList
 ├── Scale matrix (existing)
 │   └── Na...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141412)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141409: Run standalone pod group integration tests with CPG enabled and disabled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141409)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1304: Pin protoc-gen-go and protoc-gen-go-grpc versions in update-proto.sh

**What type of PR is this?**
/kind cleanup

**What this PR does / why we need it**:
Pins `protoc-gen-go` (`v1.36.12`) and `protoc-gen-go-grpc` (`v1.6.2`) compiler plugins in `tools/update-proto.sh` instead of installing with `@latest`.

Using `@latest` causes non-deterministic code generation across...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1304)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37704: kops: run the kube-router grid jobs on RHEL10 and Rocky10

The kube-router grid jobs were skipped on RHEL10/Rocky10 because kube-router had no nftables support ([cloudnativelabs/kube-router#2034](https://github.com/cloudnativelabs/kube-router/issues/2034)).

kube-router v2.11 added an nftables backend for its network policy controller, and kubernetes/kops#1...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37704)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37700: Remove group snapshot jobs

And merge them into regular volume snapshot tests.

Volume group snapshots are GA in 1.36 and should not require any special CI job. We can test them together with regular volume snapshots.

/hold
requires https://github.com/kubernetes/kubernetes/pull/141358 to be merged first.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37700)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37694: pull-kubernetes-integration-race: increase resources

The Grafana dashboard shows that the job is consuming all of its resources and various tests are failing with "context deadline exceeded", which might be because of CPU contention.

Let's give the job more resources and at the same time limit the max procs to leave some buffer when n test procs ea...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37694)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23509: Bump Kubernetes version default: v1.36.3 and latest: v1.37.0-rc.0

This PR was auto-generated by `make update-kubernetes-version` using [update-k8s-versions.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-k8s-versions.yml) CI Workflow.
Please only merge if all the tests pass.

```
 M pkg/minikube/constants/constants.go
 M site/conte...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23509)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10156: Bump the kubernetes group across 2 directories with 32 updates

Bumps the kubernetes group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.37.0-rc.0` | `0.38.0-alpha.0` |
| [k8s.io/client-go](https://github.com/kubernetes/client-go) | `0.37.0-rc.0` | `0....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10156)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10155: Bump the patch-updates group across 2 directories with 3 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: google.golang.org/protobuf.
Bumps the patch-updates group with 3 updates in the /vertical-pod-autoscaler/test directory: google.golang.org/protobuf, [cel.dev/expr](https://github.com/cel-expr/cel-spec) and [github...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10155)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10154: Bump the non-kubernetes group across 2 directories with 13 updates

Bumps the non-kubernetes group with 3 updates in the /vertical-pod-autoscaler directory: [github.com/stretchr/testify](https://github.com/stretchr/testify), [golang.org/x/mod](https://github.com/golang/mod) and google.golang.org/protobuf.
Bumps the non-kubernetes group with 9 updates in the /vertica...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10154)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10153: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10153)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10152: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10152)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6279: Bump github.com/sirupsen/logrus from 1.9.4 to 1.10.0

Bumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus) from 1.9.4 to 1.10.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sirupsen/logrus/releases">github.com/sirupsen/logrus's releases</a>.</em></p>
<blockquote>
<h2>v1.10.0</h2>
<h1>Logr...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6279)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6278: Bump github.com/stretchr/testify from 1.11.1 to 1.12.0

Bumps [github.com/stretchr/testify](https://github.com/stretchr/testify) from 1.11.1 to 1.12.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/stretchr/testify/releases">github.com/stretchr/testify's releases</a>.</em></p>
<blockquote>
<h2>v1.12.0</h2>
<h2...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6278)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/go-control-plane: envoy/v1.39.0

**Full Changelog**: [envoy/v1.38.0...envoy/v1.39.0](https://github.com/envoyproxy/go-control-plane/compare/envoy/v1.38.0...envoy/v1.39.0)

🔗 [Link](https://github.com/envoyproxy/go-control-plane/releases/tag/envoy/v1.39.0)

**Metadata:**
- Version: envoy/v1.39.0
- Published: 2026-08-17
- Prerelease: No

### envoyproxy/go-control-plane: envoy/v1.38.0

**Full Changelog**: [envoy/v1.37.0...envoy/v1.38.0](https://github.com/envoyproxy/go-control-plane/compare/envoy/v1.37.0...envoy/v1.38.0)

🔗 [Link](https://github.com/envoyproxy/go-control-plane/releases/tag/envoy/v1.38.0)

**Metadata:**
- Version: envoy/v1.38.0
- Published: 2026-08-17
- Prerelease: No

### containerd/containerd#13969: Pulling tag+digest in k8s.io namespace confuses crictl

### Description

When pulling an image with ctr in the k8s.io namespace using both the tag and digest as a reference it will result in an image that crictl can't parse properly. It assumes that the image name includes the tag instead of parsing out the tag separatly.

### Steps to reproduce the issu...

🔗 [Link](https://github.com/containerd/containerd/issues/13969)

**Metadata:**
- Created: 2026-08-17
- Comments: 0
- State: open

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump github.com/prometheus/client_golang [#385](https://github.com/containerd/accelerated-container-image/pull/385) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/9067615624f87a4e9d1a749fbb54bcf67187ebb9))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-17
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-18 01:04:01*
