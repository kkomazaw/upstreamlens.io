---
title: "Upstream Github - 2026-10-07"
description: "CNCF upstream activity from github"
pubDate: 2026-10-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "sig/network", "sig/scalability", "sig/autoscaling", "pr", "area/apiserver", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/cherry-pick-not-approved", "needs-priority", "kind/regression", "area/test", "area/kubelet", "sig/scheduling", "sig/node", "size/XXL", "kind/api-change", "kind/feature", "sig/auth", "sig/apps", "sig/testing", "do-not-merge/work-in-progress", "area/code-generation", "wg/device-management", "kind/cleanup", "size/M", "release-note-none", "approved", "cncf-cla: no", "ok-to-test", "size/XL", "sig/etcd", "size/S", "kind/flake", "sig/instrumentation", "kind/documentation", "lgtm", "sig/cluster-lifecycle", "size/XS", "do-not-merge/needs-sig", "sig/storage", "area/release-eng", "sig/cli", "sig/release", "do-not-merge/hold", "area/e2e-test-framework", "area/dependency", "sig/contributor-experience", "area/developer-guide", "community", "area/access", "area/groups", "sig/k8s-infra", "k8s.io", "language/en", "website", "perf-tests", "kube-openapi", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "kind/dependency", "release", "cloud-provider-gcp", "kind/kep", "enhancements", "envoyproxy", "envoy", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142768: [WIP][KEP-5517] DRA for Node Allocatable Resources beta update

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142768)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142759: Consolidate watch cache object matching in SelectionPredicate

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Consolidates watch cache object matching in `SelectionPredicate` and adds `BenchmarkShardedWatchFilter`.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5866
Fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142759)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6460: KEP-4815: document that counters of allocated devices are not rechecked

- One-line PR description: Document in KEP-4815 that the allocator does not recheck the counter consumption
  of already allocated devices, and that keeping it stable is the driver's responsibility.
- Issue link: https://github.com/kubernetes/enhancements/issues/4815
- Other comments:

The allo...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6460)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/envoy: v1.39.3

**Summary of changes**:

* Security fixes:
  - [GHSA-8vc2-jrm4-835w](https://github.com/envoyproxy/envoy/security/advisories/GHSA-8vc2-jrm4-835w):
    oauth2: crash on requests without a `:path` header (i.e. CONNECT). The filter now rejects such requests with `400`.
  - [GHSA-47vj-9r25-wv5j](https://github.com/envoyproxy/envoy/security/advisories/GHSA-47vj-9r25-wv5j):
    api_key_auth: crash when `hide_credentials` is enabled with a `query` key source and a request without a `:path` header...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.3)

**Metadata:**
- Version: v1.39.3
- Published: 2026-10-06
- Prerelease: No

### envoyproxy/envoy: v1.38.6

**Summary of changes**:

* Security fixes:
  - [GHSA-8vc2-jrm4-835w](https://github.com/envoyproxy/envoy/security/advisories/GHSA-8vc2-jrm4-835w):
    oauth2: crash on requests without a `:path` header (i.e. CONNECT). The filter now rejects such requests with `400`.
  - [GHSA-47vj-9r25-wv5j](https://github.com/envoyproxy/envoy/security/advisories/GHSA-47vj-9r25-wv5j):
    api_key_auth: crash when `hide_credentials` is enabled with a `query` key source and a request without a `:path` header...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.6)

**Metadata:**
- Version: v1.38.6
- Published: 2026-10-06
- Prerelease: No

### envoyproxy/envoy: v1.37.8

**Summary of changes**:

* Security fixes:
  - [GHSA-8vc2-jrm4-835w](https://github.com/envoyproxy/envoy/security/advisories/GHSA-8vc2-jrm4-835w):
    oauth2: crash on requests without a `:path` header (i.e. CONNECT). The filter now rejects such requests with `400`.
  - [GHSA-47vj-9r25-wv5j](https://github.com/envoyproxy/envoy/security/advisories/GHSA-47vj-9r25-wv5j):
    api_key_auth: crash when `hide_credentials` is enabled with a `query` key source and a request without a `:path` header...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.8)

**Metadata:**
- Version: v1.37.8
- Published: 2026-10-06
- Prerelease: No

### envoyproxy/envoy: v1.36.12

**Summary of changes**:

* Security fixes:
  - [GHSA-8vc2-jrm4-835w](https://github.com/envoyproxy/envoy/security/advisories/GHSA-8vc2-jrm4-835w):
    oauth2: crash on requests without a `:path` header (i.e. CONNECT). The filter now rejects such requests with `400`.
  - [GHSA-47vj-9r25-wv5j](https://github.com/envoyproxy/envoy/security/advisories/GHSA-47vj-9r25-wv5j):
    api_key_auth: crash when `hide_credentials` is enabled with a `query` key source and a request without a `:path` header...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.12)

**Metadata:**
- Version: v1.36.12
- Published: 2026-10-06
- Prerelease: No

## Updates

### kubernetes/kubernetes#142762: Slow garbage collector informer sync can cause incorrectly deleted orphans

### What happened?

After deleting a statefulset with --cascade=orphan, the garbage collector added the orphan finalizer, and then removed it from the statefulset, without removing the sts as the ownerReference from its pods. About a minute later, the garbage collector deleted those pods because the...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142762)

**Metadata:**
- Created: 2026-10-06
- Comments: 2
- State: open

### kubernetes/kubernetes#142757: Service creation cannot handle 100 QPS on 5,000-node clusters

Service creation cannot sustain 100 QPS on a 5,000-node cluster, whereas other resources in the scale test (such as ConfigMaps and Secrets) handle 100 QPS without issues.

When we switched Service creation in the 5,000-node load test from sequential execution (~15.6 QPS) to 100 QPS, effective throug...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142757)

**Metadata:**
- Created: 2026-10-06
- Comments: 1
- State: open

### kubernetes/kubernetes#142753: HPA scales down above target when pods are unready

Raising an issue that has been discussed for a while without a real solution.
Currently, for Object and External metrics with a `Value` target, the HPA computes:
```
desiredReplicas = ceil(usageRatio × readyPodCount)
```
 Pods could fail their readiness probes (due to overload or connection issue fo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142753)

**Metadata:**
- Created: 2026-10-06
- Comments: 1
- State: open

### kubernetes/kubernetes#142773: Automated cherry pick of #142607: apiserver: accept large identity header sets with Go 1.27

Cherry pick of #142607 on release-1.34.

#142607: apiserver: accept large identity header sets with Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

The three new files use `Copyright 2...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142773)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142772: Automated cherry pick of #142607: apiserver: accept large identity header sets with Go 1.27

Cherry pick of #142607 on release-1.35.

#142607: apiserver: accept large identity header sets with Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142772)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142771: Automated cherry pick of #142607: apiserver: accept large identity header sets with Go 1.27

Cherry pick of #142607 on release-1.36.

#142607: apiserver: accept large identity header sets with Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142771)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142770: Automated cherry pick of #142607: apiserver: accept large identity header sets with Go 1.27

Cherry pick of #142607 on release-1.37.

#142607: apiserver: accept large identity header sets with Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142770)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142767: DRA: add upgrade/downgrade test for DRAWorkloadResourceClaims

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142767)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142766: client-go: make unit tests portable by removing relative disk reads

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Removes runtime dependencies on relative testdata files in client-go unit tests to improve portability across build environments.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142766)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142764: Add Quantity Format invalidation checking to read paths

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/142744

A few things in this PR:
- Improve Quantity's cached string representation to invalidate the value if Format is set (without the need to re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142764)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142763: apiserver: rate limit all active watches during shutdown

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

With `--shutdown-watch-termination-grace-period` > 0, active watch requests return as soon as `NotAcceptingNewRequest` is signaled. The drain goroutine wakes on the same signal and only then calls `WatchRequest...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142763)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142761: kubelet: keep the failure phase when a terminated container exits 0

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When the kubelet terminates a pod with a failure status (eviction, critical-pod preemption, graceful node shutdown) and the container handles SIGTERM by exiting 0, the pod ends up `Succeeded` with an empty reason. Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142761)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142760: Add sharding.NewShardRangeSelector and cache.NewShardedListWatch helpers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Adds `sharding.NewShardRangeSelector` and `cache.NewShardedListWatch` helpers for sharded list/watch with client-side fallback
- Adds E2E tests for server-side sharded list and watch

#### Which issue(s) this P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142760)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142758: ipallocator: use RWMutex for ServiceCIDR map and thread-safe rand

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Allow concurrent ClusterIP allocations during Service creation instead of serializing requests. Top-level [`math/rand`](https://pkg.go.dev/math/rand) functions are safe for concurrent use by multiple gorout...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142758)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142754: test/integration/events: fix flaky TestEventCompatibility

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142754)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142752: Change in SIG Cluster Lifecycle leadership

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142752)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142751: admissionregistration: enable instant cast for webhook configurations



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142751)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142750: authentication: enable instant cast for TokenReview

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142750)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142748: Flowcontrol: enable fast cast for PriorityLevelConfiguration

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142748)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142747: Change pv deletion timeout to f.Timeouts.PVDelete

/sig storage
/kind cleanup


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142747)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142746: Move CRD types and clients to new staging repo k8s.io/apiextensions

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142746)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9201: Update kubectl conventions

**Which issue(s) this PR fixes**:
Fixes NONE.

This is updating the kubectl convetions, a document I've been planning to update for quite a while, but never got the time to properly do it. I've gathered all the information I've been passing over the several code tour guides I've done over the yea...

🔗 [Link](https://github.com/kubernetes/community/pull/9201)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10026: Change in SIG Cluster Lifecycle leadership

**What this PR does / why we need it**:

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md) and add...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10026)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57925: Fix: link to the DRA consumable capacity section

### Description

Fix the "DRA consumable capacity" link in the How DRA Works page to point to the correct section in the DRA Features page.

### Issue

Closes: #57878

🔗 [Link](https://github.com/kubernetes/website/pull/57925)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4444: WIP: write-throughput: use client-go informers and support idle configmaps watches

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Updates `request-benchmark watch` and the `write-throughput` test to:
- Use `client-go` `SharedInformerFactory` and `cache.WaitForCacheSync` instead of a raw watch loop.
- Support `--watches` and `v1/configmaps` ...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4444)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-openapi#654: handler: add gzip compression tests for OpenAPI v2 service

Adds tests in `pkg/handler` confirming gzip compression behavior for OpenAPI v2 endpoints (confirming https://github.com/kubernetes/kube-openapi/pull/653).

Was surprised that this wasn't tested before.

🔗 [Link](https://github.com/kubernetes/kube-openapi/pull/654)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10400: clusterapi: an increase that leaves a node group below its min size is refused, and the group never scales up


**Which component are you using?**:

/area cluster-autoscaler

/kind bug

**What version of the component are you using?**:

Component version: cluster-autoscaler 1.32.0, clusterapi provider. The clusterapi provider code below is unchanged on master.

**What k8s version are you using (`kubectl vers...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10400)

**Metadata:**
- Created: 2026-10-06
- Comments: 1
- State: open

### kubernetes/autoscaler#10399: When do we get the Cluster Autoscalar  version for EKS 1.36

 From the Helm Chart version https://artifacthub.io/packages/helm/cluster-autoscaler/cluster-autoscaler   I see the CA version until EKS 1.35 - is there a Cluster Autoscaler version for EKS 1.36

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10399)

**Metadata:**
- Created: 2026-10-06
- Comments: 1
- State: open

### kubernetes/autoscaler#10395: VPA: feedback on running a traffic- and GPU-aware recommender as a VPA custom recommender

**Which component are you using?**:

/area vertical-pod-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

Recommenders that set requests work on one workload at a time and only look at its own usage. Two useful signals are mi...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10395)

**Metadata:**
- Created: 2026-10-06
- Comments: 2
- State: open

### kubernetes/autoscaler#10398: Add a benchmark for FindParentControllerForPod


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Follow up to https://github.com/kubernetes/autoscaler/pull/10389

I found a (small) improvement in FindParentControllerForPod, so I asked an AI to make a benchmark for me.

#### Which issue(s) this PR...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10398)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10397: VPA: document how to use your own recommender

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

`docs/examples.md` explains how to start a second instance of the VPA recommender, but not what any other program has to do to act as a recommender. This adds a "Using your own recommender" section co...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10397)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10396: bump the kubernetes deps

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bump kubernetes dependencies

Dependabot was struggling here: https://github.com/kubernetes/autoscaler/pull/10392

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10396)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4548: Fail artifacts SBOM generation without images

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Follow-up to #4541. `bom.Generate` no longer rejects requests without any sources like `spdx.DocBuilder` did, and it skips image archive paths that are directories or match nothing, so a release without images would ...

🔗 [Link](https://github.com/kubernetes/release/pull/4548)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1383: Migrate Dynamic Pod IP ANE client from raw REST HTTP to generated google.golang.org/api/compute client

### Background

In #1369, support for GCE `AliasNetworkEndpoints` (ANE) was added to the Dynamic Pod IP Controller (`pkg/controller/dynamicpodip/ane`) using a temporary raw REST HTTP client targeting the GCE Interface-Based Versioning (IBV / [AIP-185](https://google.aip.dev/185)) preview surface (`2...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1383)

**Metadata:**
- Created: 2026-10-06
- Comments: 2
- State: open

### kubernetes/cloud-provider-gcp#1384: feat(metis): read NNC PodCIDR ReusePolicy in daemon watcher

This PR updates the Metis daemon watcher to read the `ReusePolicy` field on `PodCIDR` objects in `NodeNetworkConfig` (NNC) status and configure the local SQLite database accordingly.

* **Watcher Update**: [`Watcher.addCIDR`](file:///usr/local/google/home/zivy/cloud-provider-gcp/metis/pkg/daemon/w...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1384)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14298: Image snapshotter needs image pull credentials

### What is the problem you're trying to solve

This is a fork of https://github.com/containerd/containerd/issues/6251. I do not suggest specific API due to the comments in original issue. But the problem persists - more streaming-based snapshotters are out there and they need to receive image pull ...

🔗 [Link](https://github.com/containerd/containerd/issues/14298)

**Metadata:**
- Created: 2026-10-06
- Comments: 0
- State: open

### containerd/containerd#14295: erofs snapshotter: snapshot diff and commit fail on unactivated mount-manager mounts

### Description

With the erofs snapshotter, `ctr snapshots diff` and `nerdctl commit` fail with `fstype: format/mkdir/overlay … err: no such device`. Pulling the image and running the container succeed.

### Steps to reproduce the issue

```
ctr images pull --snapshotter erofs docker.io/library/ngi...

🔗 [Link](https://github.com/containerd/containerd/issues/14295)

**Metadata:**
- Created: 2026-10-06
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-07 04:14:26*
