---
title: "Upstream Github - 2026-07-20"
description: "CNCF upstream activity from github"
pubDate: 2026-07-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "pr", "sig/scheduling", "size/XS", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "needs-priority", "area/test", "area/kubelet", "size/L", "kind/feature", "release-note-none", "sig/testing", "do-not-merge/work-in-progress", "sig/api-machinery", "approved", "area/code-generation", "release-note", "size/M", "needs-ok-to-test", "sig/apps", "api-review", "ok-to-test", "wg/device-management", "do-not-merge/needs-kind", "area/apiserver", "kind/api-change", "sig/network", "kind/cleanup", "area/kube-proxy", "do-not-merge/hold", "size/XXL", "sig/storage", "kind/documentation", "area/kubectl", "sig/cli", "cncf-cla: no", "sig/docs", "website", "language/ko", "lgtm", "language/en", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "area/cluster-autoscaler", "size/S", "autoscaler"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140722: KEP 5304 metadata/downward API: graduation to beta

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This adds the v1beta1 version of the file format, which indicates that the feature is considered beta.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140722)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140731: Pod & Container statuses not reporting memory requests accurately when memory QoS is enabled and memory.min is set

### What happened?

Historically, memory requests in Kubernetes were not mapped to Linux cgroup constructs (unlike CPU requests, which map to cpu.shares / cpu.weight). Because cgroups did not enforce or track memory requests, kubelet status reporting logic (convertToAPIPodLevelResourcesStatus and co...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140731)

**Metadata:**
- Created: 2026-07-19
- Comments: 3
- State: open

### kubernetes/kubernetes#140729: DRA: AdminAccess consumes counters

### What happened?

The DRA allocator does not exempt admin-access requests from the counter-availability check.
For a partitionable device that's already allocated, the pool's available counters have the owner's consumption subtracted, and the admin candidate then reserves the device's full consump...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140729)

**Metadata:**
- Created: 2026-07-19
- Comments: 3
- State: open

### kubernetes/kubernetes#140719: [FG: InPlacePodVerticalScalingExclusiveCPUs] Improve `KeepOnly` function efficiency

This is a follow up issue from https://github.com/kubernetes/kubernetes/pull/140629/changes/738fffe6c8beef9f047253af0b3f60429faf098c#r3600091530

Improve  InPlacePodVerticalScalingExclusiveCPUs cpu allocation resize logic KeepOnly function. 

Making KeepOnly more efficient as @Chunxia202410 suggeste...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140719)

**Metadata:**
- Created: 2026-07-19
- Comments: 4
- State: open

### kubernetes/kubernetes#140734: fix: register UpdateNodeDeclaredFeature in nodeActionTypes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140734)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140733: [WIP] Quota followup

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Tests e2e node for pod level resources after modification of status reporting for exclusive CPUs.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140733)

**Metadata:**
- Created: 2026-07-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140732: Add a DV format for k8s-prefixed-label-key

Useful for https://github.com/kubernetes/kubernetes/pull/137050

/kind feature

/cc @atiratree 

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140732)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140730: kubelet: fix CPU manager hang in distribute-across-NUMA with cpuGroupSize

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes an infinite loop in `takeByTopologyNUMADistributed` when `distribute-cpus-across-numa` and `full-pcpus-only` are both enabled (`cpuGroupSize > 1`).

Remainder CPUs are allocated in whole groups of `cpuG...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140730)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140728: Promote InPlacePodVerticalScalingInitContaintainers to GA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140728)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140727: DRA: add more DistinctAttribute tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds regression tests to the shared structured DRA allocator test suite (`TestAllocator`) for `DistinctAttribute` claim constraints when a single request allocates more than one device.

Background: `dist...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140727)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140726: fix(client-go): close response body for non-ErrBadHandshake websocket errors

## Summary
- Fix HTTP response body leak for non-ErrBadHandshake websocket upgrade errors

## Bug
In the websocket roundtripper, when `dialer.DialContext` returns an error that is not `ErrBadHandshake` (e.g., `errInvalidCompression`), the response body is not closed. The `ErrBadHandshake` path corre...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140726)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140725: fix(apiserver): close response body when ResponseChecker fails in REST streamer

## Summary
- Fix HTTP response body leak when ResponseChecker fails in REST streamer

## Bug
In `streamer.go`, when `ResponseChecker.Check(resp)` returns an error, the function returns without closing `resp.Body`. While the built-in `GenericHttpResponseChecker` closes the body internally, custom imp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140725)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140724: DV:migrate ManagedFieldsEntry manager and subresource length validations

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR migrates `ManagedFieldsEntry.manager` and `ManagedFieldsEntry.Subresource` fields inside objectMeta from handwritten to declarative validation.

- +k8s:maxBytes -> `ManagedFieldsEntry.manager`
- ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140724)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140723: kube-proxy/nftables: avoid numgen map for single-endpoint service DNAT

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Many maps in a nftables table seems to be costly when adding rules. Adding rules does a scan of every map in the existing ruleset, making it very expensive to do so.

To avoid having a ruleset with many m...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140723)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140721: Split PV bind: syncClaim reserves, syncVolume completes

#### What type of PR is this?

/kind feature
/sig storage

#### What this PR does / why we need it:

When a user creates many PVCs at once, the kube-controller-manager PV controller binds them at a hard ceiling of **~30 PVCs/s**, regardless of `--kube-api-qps` or apiserver capacity. This PR r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140721)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140720: Fix links in kubectl get website documentation

Incorrect links in page https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/ Fixed markdown.

/sig cli
/sig docs
/kind documentation



🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140720)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140718: kubelet: don't report OOMKilled for containers that exited with SIGTERM

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Container runtimes derive the `OOMKilled` termination reason from the container cgroup's **cumulative** `oom_kill` counter. A child process OOM-killed at any earlier point in the container's life therefore ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140718)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56544: Multiple duplicate word ('the the') typos in English documentation

I noticed a few instances of the duplicate word typo 'the the' in some of the english documentation markdown files.

Specifically in:
- `content/en/docs/concepts/extend-kubernetes/api-extension/custom-resources.md`
- `content/en/docs/tutorials/cluster-management/admission-policies.md`
- `content/en/...

🔗 [Link](https://github.com/kubernetes/website/issues/56544)

**Metadata:**
- Created: 2026-07-19
- Comments: 2
- State: open

### kubernetes/website#56540: Kubernetes Scheduler - Scheduling Policy documentation inconsistent

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

https://kubernetes...

🔗 [Link](https://github.com/kubernetes/website/issues/56540)

**Metadata:**
- Created: 2026-07-19
- Comments: 1
- State: open

### kubernetes/website#56538: [ko] Translate content/en/blog/_posts/2026/custom-metrics-exporter-kubernetes.md into Korean

**This is a Feature Request**

**What would you like to be added**
Translate `content/en/blog/_posts/2026/custom-metrics-exporter-kubernetes.md` into Korean.

**Why is this needed**
To help Korean-speaking users better understand how to build and deploy a custom metrics exporter for Kubernetes by pr...

🔗 [Link](https://github.com/kubernetes/website/issues/56538)

**Metadata:**
- Created: 2026-07-19
- Comments: 1
- State: open

### kubernetes/website#56545: Fix duplicate word ('the the') typos in English documentation

This PR fixes a few minor duplicate word typos (`the the`) that I found in the English documentation.

Fixes #56544

🔗 [Link](https://github.com/kubernetes/website/pull/56545)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9736: Promote DRANET 1.4.0 images to prod registry

**What this PR does / why we need it**:

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md) and add...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9736)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9999: 🐛(metrics) Initialize failed_node_creations_total metric at startup

- Initialize failed_node_creations_total to zero for each FailedScaleUpReason at startup

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Follow-up to #7449. `failed_node_creations_total` is labeled only by `reason`, the same bounded `FailedScaleUpReason` enum alrea...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9999)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-20 02:44:01*
