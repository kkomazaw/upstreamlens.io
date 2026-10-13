---
title: "Upstream Github - 2026-10-13"
description: "CNCF upstream activity from github"
pubDate: 2026-10-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "help wanted", "sig/testing", "needs-triage", "sig/api-machinery", "kind/feature", "sig/scheduling", "wg/workload-aware-scheduling", "kind/failing-test", "sig/architecture", "area/code-organization", "area/code-organization/future-dependencies", "pr", "area/test", "area/kubelet", "area/kubectl", "sig/node", "sig/autoscaling", "size/XL", "kind/api-change", "release-note-none", "sig/apps", "sig/cli", "cncf-cla: yes", "needs-priority", "wg/device-management", "size/S", "needs-ok-to-test", "size/L", "do-not-merge/release-note-label-needed", "area/code-generation", "release-note-action-required", "sig/instrumentation", "do-not-merge/work-in-progress", "do-not-merge/hold", "kind/documentation", "lgtm", "size/XS", "approved", "sig/network", "kind/cleanup", "ok-to-test", "kind/regression", "size/M", "size/XXL", "sig/auth", "kind/dependency", "area/apiserver", "release-note", "needs-rebase", "kind/flake", "sig/docs", "language/pt", "triage/accepted", "area/localization", "website", "language/ko", "cncf-cla: no", "sig/cluster-lifecycle", "language/en", "minikube", "sig/contributor-experience", "area/community-management", "area/slack-management", "community", "area/images", "test-infra", "area/provider/openstack", "area/jobs", "sig/cloud-provider", "area/config", "area/cluster-autoscaler", "area/provider/cluster-api", "autoscaler", "area/vertical-pod-autoscaler", "do-not-merge/needs-area", "release", "cloud-provider-openstack", "perf-tests", "sig/release", "area/release-eng", "area/dependency", "kube-state-metrics", "envoyproxy", "envoy", "area/translator", "area/extensions", "gateway", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142956: Kep 3541 beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142956)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142955: Preemption victim type metric


#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Parametrize `scheduler_preemption_workload_disruptions` metric by victim type. Export the metric also when a single pod is a preemptor.

#### Which issue(s) this PR is related to:

KEP: [KEP-601...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142955)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10414: Improve default kubectl capacitybuffers output

#### What type of PR is this?
/kind api-change

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind re...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10414)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10412: Fix CQ clients build error

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10412)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3157: Document the metric lifecycle

**What would you like to be added:**

Contributor and maintainer facing guidance for how a metric moves through its lifecycle in kube-state-metrics - introduction, promotion, deprecation and removal.

**Why is this needed:**

The current guidance covers stages and a deprecation window, but not the s...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3157)

**Metadata:**
- Created: 2026-10-13
- Comments: 1
- State: open

### envoyproxy/envoy: v1.38.7

**Summary of changes**:

* Upstream security fixes:
- wasm: bumped `wasmtime` to `24.0.10` to resolve CVE-2026-54786.

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- dynamic_modules: fixed a bug where the per-route config destroy hook
could run on a worker thread, and the module could be unloaded there,
when an RDS update ...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.7)

**Metadata:**
- Version: v1.38.7
- Published: 2026-10-12
- Prerelease: No

### envoyproxy/envoy: v1.37.9

**Summary of changes**:

* Upstream security fixes:
- CVE-2026-54786: wasm: bumped `wasmtime` to `24.0.10` to resolve
CVE-2026-54786.

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- local_ratelimit: fixed a race where the share provider manager owned
by a local rate limit route-level configuration could be destroyed on a
...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.9)

**Metadata:**
- Version: v1.37.9
- Published: 2026-10-12
- Prerelease: No

### envoyproxy/envoy: v1.36.13

**Summary of changes**:

* Upstream security fixes:
- CVE-2026-54786: wasm: bumped `wasmtime` to `24.0.10` to resolve
CVE-2026-54786.

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- local_ratelimit: fixed a race where the share provider manager owned
by a local rate limit route-level configuration could be destroyed on a
...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.13)

**Metadata:**
- Version: v1.36.13
- Published: 2026-10-12
- Prerelease: No

## Updates

### kubernetes/kubernetes#142957: Don't check featuregates directly in E2E tests

I think this is the only place it's being done:

https://github.com/kubernetes/kubernetes/blob/cdb9495daf1450cba9ddc7fa91b3adee51b8a077/test/e2e/apimachinery/health_handlers.go#L134-L139

We should probably make `"k8s.io/apiserver/pkg/util/feature"` a forbidden import in `test/e2e` and `test/e2e_nod...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142957)

**Metadata:**
- Created: 2026-10-13
- Comments: 2
- State: open

### kubernetes/kubernetes#142943: Generated object accessors and on-demand Protobuf decoding for Pod (LazyPod)

### What would you like to be added?

We propose decoupling Kubernetes internal API object manipulation from eager Go struct layout so kube-apiserver can read and modify small subsets of fields without decoding or deep-copying entire objects.

We want to introduce this incrementally in the following...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142943)

**Metadata:**
- Created: 2026-10-12
- Comments: 5
- State: open

### kubernetes/kubernetes#142940: [sig-scheduling] Recover PreEnqueue readiness after breaking a cycle in CompositePodGroup hierarchy

After our PR  https://github.com/kubernetes/kubernetes/pull/141030 with performance improvements for PreEnqueue for PG/CPG gets in, we will break our capability to correctly run PreEnqueue for CPG hierarchies that the users have broken by introducing a cycle and then having them fixed.

Original [co...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142940)

**Metadata:**
- Created: 2026-10-12
- Comments: 3
- State: open

### kubernetes/kubernetes#142936: Future dependencies CI jobs failing on github.com/godbus/dbus/v5 v5.2.3

### Which jobs are failing?

ci-kubernetes-e2e-kind-dependencies, ci-kubernetes-unit-dependencies

<img width="2498" height="564" alt="Image" src="https://github.com/user-attachments/assets/9100ea55-6533-4eaa-8a68-eb2e13a7c385" />

### Which tests are failing?

`hack/verify-typecheck.sh` after bumpi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142936)

**Metadata:**
- Created: 2026-10-12
- Comments: 2
- State: open

### kubernetes/kubernetes#142959: Resource helpers features

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

As we've added more feature dependencies to the resource helpers, we've been inconsistent about updating callers. Furthermore, adding a new feature dependency to the resource helpers requires touching many files to c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142959)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142958: e2e: stop reading the locked storage-readiness feature gate

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`WatchCacheInitializationPostStartHook` is GA and locked on since 1.37, so the health handler e2e always inserted the storage-readiness line. It was also reading that gate from the test process, which is the bit #142...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142958)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142954: self-nominate pravk03 to be a sig-node reviewer

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142954)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142953: e2e: add ingress and dual-stack ipBlock NetworkPolicy tests

<!--  Thanks for sending a pull request!  Here are some tips for you:
-->

#### What type of PR is this?

/kind cleanup
/sig network

#### What this PR does / why we need it

The netpol e2e suite (`test/e2e/network/netpol`) currently exercises `ipBlock` **only on egress**, and builds its CIDR from a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142953)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142952: test: cover LoadBalancer without NodePort with Local policy

#### What type of PR is this?

/kind bug
/sig network

#### What this PR does / why we need it:

- Extends the existing LoadBalancer Service test to cover `externalTrafficPolicy: Local` when `allocateLoadBalancerNodePorts: false`.
- Extracts the existing Service lifecycle into a shared helper to avo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142952)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142951: Remove group priority lookups and nil-lister forks from preemption

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
A couple more cleanups in preemption:
- Because we enforce uniform priority across the group hierarchy, the victim priority can be now read from the pod instead of being resolved from the root of its PodGroup/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142951)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142950: fix(scheduler): handle recreated pod group update events

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

- Fixes scheduler event handling for `PodGroup` and `CompositePodGroup` objects that are deleted and recreated with the same namespace and name.
- Kubernetes informers may coalesce a deletion and sub...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142950)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142949: add regression-issue-74839 subcommand to agnhost

#### What type of PR is this?

/kind cleanup
/sig testing

#### What this PR does / why we need it:

Part of the effort in #131893 to reduce the use of non-agnhost e2e images.

This adds the `regression-issue-74839` program as an `agnhost` subcommand. The code is moved from `test/images/regression-i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142949)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142948: networking: graduate IngressClass declarative validation to stable

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Graduates IngressClass's six declarative validation rules from beta to stable, and removes the matching handwritten required checks in the same PR.

Part of #141532. Claimed in https://github.com/kubernetes/kuber...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142948)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142947: POC: client-go: remove stretcher testify + objx dependencies

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

All usage of testify can be replaced with ktesting + gomega. One mock can be replaced with custom code. While at it, some loops over test cases get replaced with sub-tests using local helper func...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142947)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142944: Move listResourceVersion from WatchCacheStorage to watchCacheHistory

WatchCacheStorage does not use listResourceVersion; it is only used by
watchCacheHistory to determine the oldest deliverable resource version
since the last relist and by watchCache to report the relist version.

/kind cleanup

```release-note
NONE
```

/cc @wojtek-t 

#### AI usage disclosure:

YEs...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142944)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142938: Client-go: add support for a pool of connections


#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR adds a support for a new client-go level configuration `MinConnectionPoolSize` that can be used to force creating at least `MinConnectionPoolSize` connections to the same endpoint. The valid use case ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142938)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142935: Optimize watch event allocations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Replaces the full `DeepCopyObject` (`getMutableObject`) in `cacheWatcher.convertToWatchEvent` for `Added` and `Modified` watch events with a shallow struct copy (`getShallowCopyObject`), matching the shallow-copy...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142935)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142932: Implement pod group preemption

### What type of PR is this?

/kind feature

Ref #142718

### What this PR does / why we need it:

Previously, during Workload-Aware (`PodGroup`) Preemption (`PodGroupPostFilter`), `PodGroupEvaluator` removed all eligible potential victims across the cluster and invoked `podGroupSchedulingFunc` with...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142932)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142929: Mark appv1/ conditions as required

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142929)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142928: scheduler: Unexport Children field of PodGroupInfo

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it
With the changes introduced in this PR: https://github.com/kubernetes/kubernetes/pull/142271 and per discussion here: https://github.com/kubernetes/kubernetes/pull/14227...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142928)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142925: apiextensions: retry on 429 in deleteInstances during CRD finalization

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142925)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58031: [pt-br] Add the pt-br training page

Adds the Brazilian Portuguese (pt-br) localization of the [Training page](https://k8s.io/training/), based on the current English source.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted


🔗 [Link](https://github.com/kubernetes/website/issues/58031)

**Metadata:**
- Created: 2026-10-12
- Comments: 0
- State: open

### kubernetes/website#58017: [ko] Translate content/en/blog/_posts/2026/kubernetes-cgroups-v2-shift.md

**This is a Feature Request**

**What would you like to be added**

Update `content/en/blog/_posts/2026/kubernetes-cgroups-v2-shift.md`

**Website Link**

- English : https://kubernetes.io/blog/2026/10/06/kubernetes-cgroups-v2-shift/
- Korean : https://kubernetes.io/ko/blog/2026/10/06/kubernetes-cgr...

🔗 [Link](https://github.com/kubernetes/website/issues/58017)

**Metadata:**
- Created: 2026-10-12
- Comments: 1
- State: open

### kubernetes/website#58028: Fix punctuation and clarity in kubeadm-upgrade.md

Corrected punctuation and improved clarity in the kubeadm upgrade documentation.

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
 ...

🔗 [Link](https://github.com/kubernetes/website/pull/58028)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23858: build: Update Kubernetes versions list

This PR was auto-generated by `make update-kubernetes-versions-list` using [update-kubernetes-versions-list.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-kubernetes-versions-list.yml) CI Workflow.
The purpose of this ValidKubernetesVersions in the code is, to check...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23858)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9216: Improvements to the Slack guidelines around Announcements and job listings

Just cleaned up the language and formatting for these two special channels and tried to make the queue submission process clear.

/sig contributor-experience
/area slack-management

@Champbreed 


🔗 [Link](https://github.com/kubernetes/community/pull/9216)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38049: improve builder image

Improvements:
- bump to the latest sdk version
- switch from gsutil to gcloud storage
- improve SIGTERM handling; k/test-infra and k/release run GCB jobs in presubmits, so we need to ensure that the pods get deleted and the GCB job that we launched is cancelled.
- added a flag called worker-release ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38049)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38043: Split cloud-provider-openstack-build-images into 5 jobs

This job takes too long. Rather than attempting to build all 5 architectures in one job, build them via 5 separate jobs. This results in some duplication (since prow does not allow use of YAML anchors or other mechanisms to de-dupe things) but these jobs should rarely if ever change.


🔗 [Link](https://github.com/kubernetes/test-infra/pull/38043)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10415: [cluster-autoscaler-release-1.36] clusterapi: set resource slice count for DRA scale-from-zero

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This is a backport of #10200 to the `cluster-autoscaler-release-1.36` branch.

Cluster API scale-from-zero generates a synthetic `ResourceSlice` for node groups that carry the DRA capacity annotations. The generated ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10415)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10413: Update updater to use informer index when doing VPA lookups

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Follow up to https://github.com/kubernetes/autoscaler/pull/10138
Moved updater to use an index, and also refactors the lookup to a central location 

#### Which issue(s) this PR fixes:
<!--
*Automatica...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10413)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-openstack: openstack-manila-csi-2.37.0

Manila CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-manila-csi-2.37.0)

**Metadata:**
- Version: openstack-manila-csi-2.37.0
- Published: 2026-10-12
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cloud-controller-manager-2.37.0

Openstack Cloud Controller Manager Helm Chart

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cloud-controller-manager-2.37.0)

**Metadata:**
- Version: openstack-cloud-controller-manager-2.37.0
- Published: 2026-10-12
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.37.0

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.37.0)

**Metadata:**
- Version: openstack-cinder-csi-2.37.0
- Published: 2026-10-12
- Prerelease: No

### kubernetes/cloud-provider-openstack#3253: Install g++ in osbrick-sidecar builder stage

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3253)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3252: [release-1.37] Drop arm (armhf) from multi-arch image builds

This is an automated cherry-pick of #3249

/assign mandre

```release-note
[all] Drop arm (armhf) image builds
```

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3252)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4481: Limit Network Policy PodMonitor to test namespace

/hold

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Currently PodMonitor observes all pods in the cluster. This casues non zero
load on kube-apiserver. This itself is not part of the test therefore it
obscures real load. This PR restricts t...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4481)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/perf-tests#4480: clusterloader2: make load test PV size and StorageClass configurable

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The load test StatefulSets request a fixed 100Mi PersistentVolume from the
cluster default StorageClass. Some machine families (for example Compute Engine
N4 and E4) can attach only Hyperdisk, and Hyperdisk Balan...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4480)

**Metadata:**
- Created: 2026-10-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/release#4561: Dependency update - Golang 1.27.2/1.26.9

<!--
Please only use this template if you are a Release Manager updating
Golang dependencies.
-->

### Tracking info

<!-- Search query: https://github.com/kubernetes/release/issues?q=is%3Aissue+Dependency+update+-+Golang -->
<!-- Example: https://github.com/kubernetes/release/issues/3383 -->
Link t...

🔗 [Link](https://github.com/kubernetes/release/issues/4561)

**Metadata:**
- Created: 2026-10-12
- Comments: 0
- State: open

### kubernetes/kube-state-metrics#3156: Define compatibility guarantees for STABLE metrics (including across major versions)

**What would you like to be added:**

A written compatibility contract for STABLE metrics that states what users can rely on, including what a major release (v3) may and may not change.

**Why is this needed:**

Today the policy is spread across two places and leaves the major-version case open:

- ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3156)

**Metadata:**
- Created: 2026-10-13
- Comments: 1
- State: open

### envoyproxy/envoy: v1.39.4

**Summary of changes**:

* Bug fixes:
- aws: fixed a race where the route-level configuration of the AWS
request signing and AWS Lambda filters could be destroyed on a worker
thread when an RDS update replaced the route configuration.
- composite: fixed a race where the route-level configuration of the
composite filter could be destroyed on a worker thread when an RDS
update replaced the route configuration.
- dynamic_modules: fixed a bug where the per-route config destroy hook
could r...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.4)

**Metadata:**
- Version: v1.39.4
- Published: 2026-10-12
- Prerelease: No

### envoyproxy/gateway#10255: Extension backend refs are dispatched by kind only, so a custom `Service` kind reaches the core Service resolver

*Description*:

`processDestination` (`internal/gatewayapi/route.go`) skips `validateBackendRef` for group/kinds registered as extension backend resources (`isCustomBackendResource`), but then picks the resolver with a switch on the backendRef **kind only**. A backendRef to an extension resource who...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10255)

**Metadata:**
- Created: 2026-10-13
- Comments: 0
- State: open

### envoyproxy/gateway#10253: HTTPRouteFilter: fields that can't be applied are silently ignored, and filters after a DirectResponse are skipped

### Description

There are several cases where an `HTTPRouteFilter` referenced via `extensionRef` is accepted but has no effect. No status condition reports this. The outcome can also depend on the order of the filters.
These came up while reviewing #10248.

#### 1. HTTPRouteFilter fields that are i...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10253)

**Metadata:**
- Created: 2026-10-12
- Comments: 0
- State: open

### containerd/containerd#14336: diff service `sync_fs` is not applied to transfer-service unpacks (CRI's default pull path)

### Description

The diff service's `sync_fs` (#10284) is described in `plugins/services/diff/local.go` as "effective for all containerd client". It is only applied in that service's `Apply`, though, and the transfer plugin never goes through the service. `getApplier` in `plugins/transfer/plugin.go`...

🔗 [Link](https://github.com/containerd/containerd/issues/14336)

**Metadata:**
- Created: 2026-10-12
- Comments: 1
- State: open

### containerd/containerd#14333: erofs snapshotter: power loss leaves committed layers unreadable or missing

### Description

Power loss during unpack or shortly after a successful pull can leave committed erofs snapshots with unreadable, empty or missing `layer.erofs` files, or missing snapshot directories.

### Steps to reproduce the issue

Reproduced with containerd v2.4.1 (official release), Fedora 44,...

🔗 [Link](https://github.com/containerd/containerd/issues/14333)

**Metadata:**
- Created: 2026-10-12
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-13 05:24:45*
