---
title: "Upstream Github - 2026-10-18"
description: "CNCF upstream activity from github"
pubDate: 2026-10-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scalability", "sig/api-machinery", "sig/instrumentation", "needs-triage", "kind/bug", "area/kubelet", "sig/node", "sig/auth", "pr", "area/test", "size/L", "kind/api-change", "kind/feature", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-ok-to-test", "needs-priority", "wg/device-management", "sig/network", "size/XXL", "do-not-merge/release-note-label-needed", "triage/accepted", "do-not-merge/needs-kind", "area/apiserver", "sig/storage", "release-note", "kind/cleanup", "size/M", "approved", "sig/autoscaling", "size/XS", "kind/flake", "sig/etcd", "sig/scheduling", "kind/documentation", "size/XL", "sig/apps", "priority/important-longterm", "area/code-generation", "wg/workload-aware-scheduling", "sig/architecture", "wg/structured-logging", "kind/regression", "needs-kind", "language/en", "area/blog", "website", "lgtm", "sig/docs", "language/zh", "area/localization", "envoyproxy", "area/policy", "gateway", "cncf", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143144: CRI-API Changes for KEP-6313 [Non-Network Pods]

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143144)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143128: [WAS] KEP-5547: Update Job controller for WorkloadWithJob beta discovery, metrics, and tests

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
Job controller changes for WorkloadWithJob beta.
- Discover `Workload` / `PodGroup` by name and treat CronJob-created Jobs as scheduling roots
- Block pod creation on unsupported / missing scheduling objects
- Del...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143128)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143127: [WAS] KEP-5547: Promote WorkloadWithJob API and helpers toward beta

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:
API and helper prep for promoting Job integration with Workload-aware Scheduling toward beta.

- UID-aware `GeneratePodGroupName` so sibling Jobs sharing a template get distinct PodGroups
- `Creat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143127)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10314: Merged route policies report their status on per-listener ancestors, so Accepted=False and Accepted=True show up together

*Description*:
A route policy with `mergeType` set reports its status on two kinds of ancestors when the route's parentRef has no `sectionName`. This affects SecurityPolicy, BackendTrafficPolicy and EnvoyExtensionPolicy, for routes attached to a Gateway or to a ListenerSet.

- `Accepted=True` goes o...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10314)

**Metadata:**
- Created: 2026-10-17
- Comments: 1
- State: open

### cncf/toc#2334: Add OCM Incubation Due Diligence document

Adds Open Cluster Management (OCM) Incubation Due Diligence document.

Project application: <https://github.com/cncf/toc/issues/1884>

PR open until October 31 for TOC and public review/comment.



🔗 [Link](https://github.com/cncf/toc/pull/2334)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143137: apiserver: add an indexed scope to latency metrics for nodeName field-selector queries

API server latency metrics currently classify requests into resource, namespace, and cluster scopes. Because of this, node-scoped queries using a spec.nodeName field selector, such as kubelets listing pods or resourceslices on their own node, are grouped into the same cluster scope bucket as unfilte...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143137)

**Metadata:**
- Created: 2026-10-17
- Comments: 3
- State: open

### kubernetes/kubernetes#143123: kubelet panics when a PodCertificateRequest deletion arrives as a tombstone after a relist

### What happened?

The kubelet crashes with:

```
panic: interface conversion: interface {} is cache.DeletedFinalStateUnknown, not *v1.PodCertificateRequest [recovered, repanicked]

goroutine 67 [running]:
...
k8s.io/kubernetes/pkg/kubelet/podcertificate.NewIssuingManager.func3(...)
	pkg/kubelet/po...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143123)

**Metadata:**
- Created: 2026-10-17
- Comments: 2
- State: open

### kubernetes/kubernetes#143145: DRA: migrate Taints and Conditions size limits to declarative validation

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Migrates the remaining list size limits tracked in #135073 from handwritten
validation to declarative validation, all under `+k8s:alpha(since: "1.38")`:

| Field | Versions | Tag | Handwritten check marked covere...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143145)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143142: [POC] apiserver: preserve cachingObject serialization in decoratedWatcher

#### What type of PR is this?
/kind bug
/sig api-machinery
/sig network

#### What this PR does / why we need it:
Runs storage read decorators once inside the watch cache object wrapper when the first watcher encodes the event rather than unwrapping per watcher, preserving shared wire serialization ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143142)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143141: test/integration/apiserver: add BenchmarkServiceWatch

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Adds an end-to-end integration benchmark measuring watch event fanout from the apiserver watch cache across 200 concurrent Service watchers.

#### Which issue(s) this PR fixes:
N/A

#### Special notes for your revi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143141)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143140: apiserver: classify node-scoped requests as indexed

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143140)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143139: kubelet/dra: re-check claim UID after NodePrepareResources

#### What type of PR is this?

/kind bug
/sig node
/wg device-management

#### What this PR does / why we need it:

`prepareResources` in the DRA kubelet manager calls the driver's `NodePrepareResources` without holding the claim info cache lock, then writes the result back into the cache entry look...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143139)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143138: test: stabilize HPA short downscale e2e test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143138)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143134: Watchcache minheap

Prototype of consistent to start benchmarking and scale testing.

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143134)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143133: client-go/rest: make auth plugin and throttled logger tests hermetic

#### What type of PR is this?

/kind cleanup
/kind flake

#### What this PR does / why we need it:

Running `go test -count=2 ./staging/src/k8s.io/client-go/rest` currently fails with four errors due to shared package-level state across test runs:

1. `plugins` registry: `TestAuthPluginWrapTransport...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143133)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143132: scheduler: avoid mutating package-level scheduledPodInfo in test

#### What type of PR is this?

/kind cleanup
/kind flake

#### What this PR does / why we need it:

In `TestPriorityQueue_UpdateNominatedPodForNode`, the test deep-copies `scheduledPodInfo.Pod` into `scheduledPodCopy`, but then accidentally cleared `scheduledPodInfo.Pod.Spec.NodeName = ""` instead o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143132)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143131: Watchcache txn from cache

Prototype of consistent to start benchmarking and scale testing.

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143131)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143130: scheduler: update comments to reflect current status handling

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143130)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143129: Watchcache consistent get

Prototype of consistent to start benchmarking and scale testing.

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143129)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143125: Add tico88612 as component-base/metrics reviewer

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

After discussing it with the SIG Lead, I nominated myself to be a reviewer for `component-base/metrics`.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

Prev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143125)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143124: kubelet: handle PodCertificateRequest tombstones in delete handler

#### What type of PR is this?

/kind bug
/sig node
/sig auth
/area kubelet

#### What this PR does / why we need it:

The PodCertificateRequest informer's `DeleteFunc` in the kubelet's pod certificate manager type-asserted its argument straight to `*PodCertificateRequest`. A PCR deleted while the ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143124)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143122: endpointslice: migrate worker loops to contextual logging APIs

#### What type of PR is this?
/kind cleanup
/sig network
/wg structured-logging

#### What this PR does / why we need it:
Migrates the endpointslice controller worker loops to use `wait.UntilWithContext` and passes `context.Context` to queue worker and sync routines instead of a static logger. Also ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143122)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143121: fix: validate KMS v2 DEK decryption in health probe

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143121)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58132: Unresolved review feedback from #57397 (Tinkerbell Headlamp blog) still needs to be applied

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

Four review sugges...

🔗 [Link](https://github.com/kubernetes/website/issues/58132)

**Metadata:**
- Created: 2026-10-17
- Comments: 5
- State: open

### kubernetes/website#58139: [zh-cn]sync kubectl_certificate/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_certificate/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/58139)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58138: [zh-cn]sync kubectl_certificate_deny

content/zh-cn/docs/reference/kubectl/generated/kubectl_certificate/kubectl_certificate_deny.md

🔗 [Link](https://github.com/kubernetes/website/pull/58138)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58137: [zh-cn]sync kubectl_certificate_approve

content/zh-cn/docs/reference/kubectl/generated/kubectl_certificate/kubectl_certificate_approve.md

🔗 [Link](https://github.com/kubernetes/website/pull/58137)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58136: [zh-cn]sync kubectl_delete/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_delete/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/58136)

**Metadata:**
- Created: 2026-10-17
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-18 02:58:14*
