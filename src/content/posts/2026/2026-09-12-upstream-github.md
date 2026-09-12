---
title: "Upstream Github - 2026-09-12"
description: "CNCF upstream activity from github"
pubDate: 2026-09-12
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/flake", "needs-triage", "wg/device-management", "kind/bug", "pr", "kind/cleanup", "sig/api-machinery", "size/L", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "needs-priority", "area/kubectl", "release-note", "size/S", "sig/cli", "area/kubelet", "kind/api-change", "kind/feature", "release-note-none", "sig/auth", "do-not-merge/work-in-progress", "area/code-generation", "area/test", "sig/storage", "size/M", "sig/testing", "needs-ok-to-test", "area/e2e-test-framework", "do-not-merge/cherry-pick-not-approved", "sig/apps", "sig/cluster-lifecycle", "approved", "area/kubeadm", "priority/important-longterm", "triage/accepted", "priority/important-soon", "sig/network", "area/kube-proxy", "kind/regression", "lgtm", "area/apiserver", "needs-rebase", "size/XXL", "sig/scheduling", "cncf-cla: no", "do-not-merge/hold", "priority/critical-urgent", "language/ko", "area/localization", "website", "area/web-development", "size/XS", "area/images", "test-infra", "area/cluster-autoscaler", "autoscaler", "area/provider/externalgrpc", "area/provider/aws", "kind/documentation", "ok-to-test", "area/dependency", "cloud-provider-gcp", "envoyproxy", "gateway", "containerd", "release", "overlaybd", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142026: e2e podlogs: jitter reconnects to avoid thundering herd

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

commit d7bf3eeb330 ("e2e logcheck: avoid thundering herd problem") staggered the periodic per-node kubelet log queries to spread out their load, but pull-kubernetes-kind-dra-all runs kept failing with apise...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142026)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142040: test flake: DRA Extended Resource "must cleanup extended resource claims when pods complete"

### Which jobs are flaking?

Seen in pull-kubernetes-kind-dra-all (uses race detection and finds races in kube-apiserver)


### Which tests are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/142026/pull-kubernetes-kind-dra-all/2098412676089647104

```
[It] [sig-node] [DRA] [Fe...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142040)

**Metadata:**
- Created: 2026-09-11
- Comments: 1
- State: open

### kubernetes/kubernetes#142032: kubelet: containers that fail before ever running don't get exponential CrashLoopBackOff treatment

### What happened?

When `startContainer` fails before the container ever reaches a running state — e.g. `CreateContainer` is rejected by the CRI because a resource limit (such as memory) is below the runtime's floor, or a pre-create/pre-start hook fails , no container status is ever recorded for th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142032)

**Metadata:**
- Created: 2026-09-11
- Comments: 2
- State: open

### kubernetes/kubernetes#142048: client-go: build UnstructuredExtractor from OpenAPI v3 lazily per gro…

Migrates client-go's UnstructuredExtractor (server-side-apply extract) off `/openapi/v2`: it now builds its parsers from `/openapi/v3`, lazily per group-version. `OpenAPISchema()` and the rest of the discovery API are unchanged.

- Downloads only the schemas of group-versions actually extracted fr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142048)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142047: Fix: Reject kubectl ingress TLS secrets without equals separators

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142047)

**Metadata:**
- Created: 2026-09-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142046: WIP: kubelet: add mldsa support


#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Adds Quantum ML-DSA support to the Kubelet.

#### Which issue(s) this PR is related to:
https://github.com/kubernetes/kubernetes/issues/141838

#### Special notes for your reviewer:

#### Does this PR ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142046)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142045: e2e framework: report the PV create error instead of the timeout

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

I was looking at the RealFIFO.Resync fix that wrapped `err` instead of `retErr` (836a62aa300) and searched for the same shape elsewhere. `createPV` in `test/e2e/framework/pv` has it: the poll retries while the create...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142045)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142043: Automated cherry pick of #141342: Fix startup probe gating after container restart

Cherry pick of #141342 on release-1.35.

#141342: Fix startup probe gating after container restart

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142043)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142042: Automated cherry pick of #141342: Fix startup probe gating after container restart

Cherry pick of #141342 on release-1.36.

#141342: Fix startup probe gating after container restart

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142042)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142041: Automated cherry pick of #141342: Fix startup probe gating after container restart

Cherry pick of #141342 on release-1.37.

#141342: Fix startup probe gating after container restart

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142041)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142039: garbagecollector: remove informer event handler when a monitor stops

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

The garbage collector's dependency graph builder registers an event handler on the shared informer for every monitored resource, but when a monitor is torn down it only stopped the monitor without removing that handler...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142039)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142038: client-go: add support for ML-DSA in keyutils

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142038)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142037: WIP: kubeadm: add ML-DSA support

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142037)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142035: Don't set nf_conntrack_max if it's already larger than needed

#### What type of PR is this?
/kind bug
/kind regression

#### What this PR does / why we need it:
#137002 (in 1.36) changed kube-proxy to cap the value of `nf_conntrack_max` (and the associated `hashsize` parameter) so that it didn't grow ridiculously large on machines with lots of cores.

B...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142035)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142034: [WIP] Fix delegated PodGroup creation window closing prematurely

Fixes https://github.com/kubernetes/kubernetes/issues/141380

/kind bug

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142034)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142033: kubelet: apply CrashLoopBackOff to containers that fail before ever running



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142033)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142031: apiserver: improve upon Matches logic in watch cache

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR simplifies the object matching logic in the watch cache (`cacher.go`). Previously, the cacher short-circuited `SelectionPredicate` and called `MatchesSharding` / `MatchesObjectAttributes` directly, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142031)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142030: commentstart lint fixes for core API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142030)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142029: scheduler: drop dependency on pkg/apis/core/v1/helper

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Fixes #141407


#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```release-note
None
```


#### AI usage dis...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142029)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142028: kubelet: prevent duplicate static pod manifests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142028)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142027: test/e2e_node: match the userns mapping precheck to the kubelet's lookups

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

Depends on #141971.

[`hasKubeletUsernsMappings`](https://github.com/kubernetes/kubernetes/blob/912ec3583d7733a240dad6a3755f5f2f6b76be3e/test/e2e_node/user_namespaces_test.go#L131-L161) decides whether ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142027)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142025: Automated cherry pick of #138408: Fix flapping pod.status.resourceClaimStatuses

Cherry pick of #138408 on release-1.34.

#138408: Fix flapping pod.status.resourceClaimStatuses

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

Manual conflict resolution was required in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142025)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57497: [ko] Update content/ko/docs/concepts/overview/working-with-objects/names.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/overview/working-with-objects/names.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/overview/working-with-object...

🔗 [Link](https://github.com/kubernetes/website/issues/57497)

**Metadata:**
- Created: 2026-09-12
- Comments: 1
- State: open

### kubernetes/website#57491: Add copy buttons to kubectl installation commands

The install commands on this page don’t have a copy button. Adding one would make it easier to copy commands directly from the docs.

Page: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

<img width="1147" height="506" alt="Image" src="https://github.com/user-attachments/assets/d4c54d...

🔗 [Link](https://github.com/kubernetes/website/issues/57491)

**Metadata:**
- Created: 2026-09-11
- Comments: 4
- State: open

### kubernetes/test-infra#37863: bundle the kubetest2 kops binaries in the e2e image

Part of https://github.com/kubernetes/kops/pull/18795

We run thousands of kops jobs in K8S CI, and this change will allow us to test kops without checking out the kops repo.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37863)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10279: AWS example manifest image tag is stale and not updated per release branch

**Which component are you using?**:
cluster-autoscaler

**What version of the component are you using?**:
AWS example manifest across multiple release branches

**What did you expect to happen?**:
On a given release branch, the AWS example manifest `cluster-autoscaler-autodiscover.yaml` should refer...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10279)

**Metadata:**
- Created: 2026-09-11
- Comments: 2
- State: open

### kubernetes/autoscaler#10277: externalgrpc: TemplateNodeInfo cannot return ResourceSlices

**Which component are you using?**

/area cluster-autoscaler
/area provider/externalgrpc

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**

Cluster Autoscaler's core supports DRA in scale-up simulations. A cloud provider
whose `TemplateNo...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10277)

**Metadata:**
- Created: 2026-09-11
- Comments: 1
- State: open

### kubernetes/autoscaler#10278: [cluster-autoscaler-release-1.35] Add resource.k8s.io RBAC permissions to AWS example manifest

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:
Backports #9487 to the `cluster-autoscaler-release-1.35` branch.

Since 1.35, `--enable-dynamic-resource-allocation` defaults to `true` and is locked on (setting it to false triggers `klog.Fatalf`). As a resu...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10278)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1350: chore(deps): bump the k8s-dependencies group across 3 directories with 7 updates

Bumps the k8s-dependencies group with 3 updates in the /metis directory: [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery), [k8s.io/client-go](https://github.com/kubernetes/client-go) and [k8s.io/component-base](https://github.com/kubernetes/component-base).
Bumps the k8s-dependencie...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1350)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10015: mergeBackends: a Gateway-level BackendTrafficPolicy's cluster settings are applied to merged UDP/TCP clusters regardless of protocol

*Description*:
I found this when working in https://github.com/envoyproxy/gateway/pull/9896

When `mergeBackends` is enabled, a whole-Gateway `BackendTrafficPolicy` copies its entire cluster-scoped feature set onto every merged `BackendCluster`, without looking at the backend's protocol. UDP and TCP...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10015)

**Metadata:**
- Created: 2026-09-11
- Comments: 0
- State: open

### containerd/containerd#14149: Add Observability into Container Task States

### What is the problem you're trying to solve

#### Overview and Context

Containers or the underlying processes running within them can occasionally enter an uninterruptible sleep state (D-state). This occurs when a process is blocked waiting for a hardware, kernel, or storage event that cannot be...

🔗 [Link](https://github.com/containerd/containerd/issues/14149)

**Metadata:**
- Created: 2026-09-11
- Comments: 1
- State: open

### containerd/overlaybd: Development Build

## Commits
- dd255ed: add a navigation bar at top (Huiba Li) [#460](https://github.com/containerd/overlaybd/pull/460)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-11
- Prerelease: Yes

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump google.golang.org/grpc from 1.83.0 to 1.83.2 [#399](https://github.com/containerd/accelerated-container-image/pull/399) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/bbc12b628109027b4406926aa8de226fac8a52ec))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-11
- Prerelease: Yes


---

*This content was automatically collected on 2026-09-12 03:03:41*
