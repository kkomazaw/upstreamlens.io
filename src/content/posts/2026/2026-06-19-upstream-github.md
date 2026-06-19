---
title: "Upstream Github - 2026-06-19"
description: "CNCF upstream activity from github"
pubDate: 2026-06-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "area/kubelet", "kind/cleanup", "sig/node", "needs-triage", "pr", "kind/bug", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "sig/network", "area/kube-proxy", "sig/api-machinery", "size/XXL", "sig/auth", "approved", "sig/instrumentation", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/code-generation", "area/dependency", "do-not-merge/needs-kind", "area/apiserver", "size/XS", "release-note-none", "sig/scheduling", "size/L", "wg/device-management", "wg/workload-aware-scheduling", "kind/api-change", "kind/feature", "triage/accepted", "sig/cli", "sig/apps", "lgtm", "size/XL", "do-not-merge/hold", "kind/regression", "do-not-merge/needs-sig", "priority/important-longterm", "website", "language/en", "kubectl", "containerd", "release", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139865: RFC: Start & Stop probes with containers

/kind cleanup
/area kubelet

The Kubelet's prober.Manager has a strange architecture (of which I take full responsibility), where it adds and starts all the probes for all the containers in the pod when the pod is first synced. There are two issues with this approach:

1. All the probes are running ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139865)

**Metadata:**
- Created: 2026-06-18
- Comments: 2
- State: open

### kubernetes/kubernetes#139853: Internal conversions: PodSpec(3): Move fields from PodSecurityContext to PodSpec

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139853)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56170: KEP-5311 - Promote RelaxedServiceNameValidation to stable

### Description

KEP-5311 - Promote RelaxedServiceNameValidation to stable

### Issue

Related to https://github.com/kubernetes/kubernetes/pull/134493

/assign danwinship 

🔗 [Link](https://github.com/kubernetes/website/pull/56170)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1851: kubectl bash completion does not use env kubeconfig

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately via https://kubernetes.io/security/
-->

**What happened**:
I...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1851)

**Metadata:**
- Created: 2026-06-18
- Comments: 1
- State: open

### containerd/containerd: containerd 2.3.2

Welcome to the v2.3.2 release of containerd!

The second patch release for containerd 2.3 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-50195**](https://github.com/containerd/containerd/security/advisories/GHSA-cvxm-645q-p574)
  * [**CVE-2026-53488**](https://github.com/containerd/containerd/security/advisories/GHSA-xhf5-7wjv-pqxp)
  * [**CVE-2026-53492**](https://github.com/containerd/containerd/security/advisories/GHSA-33...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.2)

**Metadata:**
- Version: v2.3.2
- Published: 2026-06-18
- Prerelease: No

### containerd/containerd: containerd 2.2.5

Welcome to the v2.2.5 release of containerd!

The fifth patch release for containerd 2.2 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-50195**](https://github.com/containerd/containerd/security/advisories/GHSA-cvxm-645q-p574)
  * [**CVE-2026-53488**](https://github.com/containerd/containerd/security/advisories/GHSA-xhf5-7wjv-pqxp)
  * [**CVE-2026-53492**](https://github.com/containerd/containerd/security/advisories/GHSA-33v...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.5)

**Metadata:**
- Version: v2.2.5
- Published: 2026-06-18
- Prerelease: No

### containerd/containerd: containerd 2.1.9

Welcome to the v2.1.9 release of containerd!

The ninth patch release for containerd 2.1 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-50195**](https://github.com/containerd/containerd/security/advisories/GHSA-cvxm-645q-p574)
  * [**CVE-2026-53488**](https://github.com/containerd/containerd/security/advisories/GHSA-xhf5-7wjv-pqxp)
  * [**CVE-2026-53492**](https://github.com/containerd/containerd/security/advisories/GHSA-33v...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.1.9)

**Metadata:**
- Version: v2.1.9
- Published: 2026-06-18
- Prerelease: No

### containerd/containerd: containerd 2.0.10

Welcome to the v2.0.10 release of containerd!

The tenth patch release for containerd 2.0 includes various bug fixes and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53488**](https://github.com/containerd/containerd/security/advisories/GHSA-xhf5-7wjv-pqxp)
  * [**CVE-2026-47262**](https://github.com/containerd/containerd/security/advisories/GHSA-jpcc-p29g-p8mq)

Please try out the release binaries and report any issues at
https://github.com/containe...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.0.10)

**Metadata:**
- Version: v2.0.10
- Published: 2026-06-18
- Prerelease: No

### containerd/containerd: containerd 1.7.33

Welcome to the v1.7.33 release of containerd!

The thirty-third patch release for containerd 1.7 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53488**](https://github.com/containerd/containerd/security/advisories/GHSA-xhf5-7wjv-pqxp)
  * [**CVE-2026-47262**](https://github.com/containerd/containerd/security/advisories/GHSA-jpcc-p29g-p8mq)

* **go-jose**
  * [**CVE-2026-34986**](https://github.com/go-jose/go-jose/security/ad...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v1.7.33)

**Metadata:**
- Version: v1.7.33
- Published: 2026-06-18
- Prerelease: No

## Updates

### kubernetes/kubernetes#139871: Fix kubelet node status update data race

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

On the first try, `tryUpdateNodeStatus` obtains the node from `kl.nodeLister.Get`, and `fastNodeStatusUpdate` obtains it from `kl.GetNode`. Both return the shared informer-cache object. The kubelet then reads that obje...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139871)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139870: [WIP][DO-NOT-REVIEW][IGNORE-ME] kubelet: depend on github.com/google/cadvisor/lib (pinned to the dims/cadvisor fork)


Repoint the kubelet's cAdvisor surface from github.com/google/cadvisor onto the lean library module github.com/google/cadvisor/lib: info/v1 + info/v2 collapse to lib/model; manager/fs/cache/machine/metrics/storage/container/*/utils/* move to lib/*; pinned-flag names come from lib/cadvisorflags; th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139870)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139869: [WIP] testing contention profiling

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Experiment: force-disables block profiling in the apiserver to A/B the LIST p99 tail under scale. Not for merge.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing change?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139869)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139866: DRA: PartitionableDevices Performance Tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139866)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139864: DRA: align ResourceClaim unreservation/deallocation for PodGroups with Pods

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139864)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139863: Onboard Authorization API group to DV

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR enables and wires up Declarative Validation (DV) for `authorization.k8s.io` types, specifically `SubjectAccessReview`, `SelfSubjectAccessReview`, and `LocalSubjectAccessReview`. 

Since these Authoriz...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139863)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139862: kubectl: add support for `--proxy-url` flag

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139862)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139860: apiserver/storage: refactor watchcache interval source

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139860)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139859: Introduce PercentageOfPlacementsToScore limit for TAS

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139859)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139858: Internal conversions: PodSpec(8): drop init container annotations in PrepareForCreate/PrepareForUpdate

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139858)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139857: Internal conversions: PodSpec(7): Move Pod conversion behaviors to defaulting

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139857)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139856: Internal conversions: PodSpec(6): Add PodIP to core.PodStatus

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139856)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139855: Internal conversions: PodSpec(5): Add DeprecatedServiceAccount to core.PodSpec

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139855)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139854: Internal conversions: PodSpec(4): Reorder PodSpec and PodStatus fields

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Part of https://github.com/kubernetes/enhancements/issues/6164

See https://github.com/kubernetes/kubernetes/pull/139770 for benchmarks.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139854)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139850: kubelet startPodSync: ensure the previous context is canceled to memory leak regression

In `startPodSync`, ensure the previous context is canceled so the old context does not leak when we create a new context and replace the old `status.cancelFn` value.

This is a minimal patch to fix #139823 without more extensive changes to the context lifecycle. 

#### What type of PR is this?
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139850)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139849: WIP: testing DRA jobs - ignore

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139849)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139848: cacher: rewrite whitebox fallback tests to use real snapshots

Rewrite TestShouldDelegateList and TestMatchExactResourceVersionFallback to use production watchCache APIs rather than mocking snapshots via fakeSnapshotter. Split the fallback verification into blackbox and whitebox components, adding TestWatchCacheStorageMatchExactResourceVersionFallback to direct...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139848)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139846: test(e2e): reduce verbosity of network conntrack test cases

The previous test probes emit a log line per packet, leading to XXXX of lines of output in the normal case. This commit aggregates log output to significantly reduce the volume of logs without losing signal.

See example run with an additional log statement at the end of the test to show the outpu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139846)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139845: kubelet/dra: derive claim names from claim info cache

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

UnprepareResources now uses claim info cache to get a list of claim names for the pod and falls back to the current approach - to get them from `pod.Status.ResourceClaimStatuses` using `resourceclaim.Name` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139845)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56173: Perform a Rollung Update page appears out of date

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

Section: **Roll ba...

🔗 [Link](https://github.com/kubernetes/website/issues/56173)

**Metadata:**
- Created: 2026-06-18
- Comments: 9
- State: open

### kubernetes/website#56179: Fix grammar: "a overview" → "an overview" on kubectl reference page

The sentence reads "For a overview, see The kubectl command-line tool." — it should be "an overview" (since "overview" starts with a vowel sound).

### Description

The kubectl command-line tool reference page reads "**For a overview**, see
The kubectl command-line tool." This should be **"an o...

🔗 [Link](https://github.com/kubernetes/website/pull/56179)

**Metadata:**
- Created: 2026-06-18
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- 321a234: feat:support convert qcow2 img to overlaybd (xiecl666) [#407](https://github.com/containerd/overlaybd/pull/407)
- 7abac8d: fix:servel bugs in qcow2converter (xiecl666) [#407](https://github.com/containerd/overlaybd/pull/407)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-06-18
- Prerelease: Yes


---

*This content was automatically collected on 2026-06-19 04:04:29*
