---
title: "Upstream Github - 2026-06-23"
description: "CNCF upstream activity from github"
pubDate: 2026-06-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/apps", "needs-triage", "kind/bug", "needs-sig", "pr", "kind/cleanup", "sig/storage", "size/S", "release-note-none", "cncf-cla: yes", "needs-priority", "area/test", "area/kubelet", "sig/scheduling", "sig/node", "sig/api-machinery", "sig/autoscaling", "size/XL", "kind/api-change", "kind/feature", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/code-generation", "wg/device-management", "area/apiserver", "sig/auth", "do-not-merge/needs-kind", "size/XS", "needs-ok-to-test", "lgtm", "size/L", "do-not-merge/needs-sig", "size/M", "approved", "release-note", "priority/backlog", "sig/cluster-lifecycle", "area/kubeadm", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "triage/accepted", "language/en", "website", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "area/cluster-autoscaler", "area/dependency", "autoscaler", "area/vertical-pod-autoscaler", "do-not-merge/invalid-commit-message", "kube-state-metrics", "perf-tests", "kind/kep", "enhancements", "prometheus", "release", "promu", "envoyproxy", "ai-gateway", "containerd", "area/toolchain"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139929: dra: add standard numaNode device attribute with SLIT-based helpers

## Summary

Add `resource.kubernetes.io/numaNode` as a well-known DRA device attribute (KEP-6072), enabling cross-driver NUMA co-placement via `matchAttribute`.

- Add `StandardDeviceAttributeNUMANode` constant alongside existing `pcieRoot` and `pciBusID`
- Add `GetNUMANodeAttributeByPCIBusID()` for...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139929)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6213: Add fallback strategy field (Static, UseMax, UseMin) to KEP-5679

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6213)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#139917: CronJob controller: processNextWorkItem does not call queue.Forget on the  (nil, nil) sync path, leaving stale rate-limiter backoff count

/sig apps

**Description**

In `pkg/controller/cronjob/cronjob_controllerv2.go#processNextWorkItem` only resets the workqueue rate limiter (queue.Forget) inside the requeueAfter != nil branch. When sync() returns (nil, nil) — no error and no requeue — none of the switch branches run, so Forget is ne...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139917)

**Metadata:**
- Created: 2026-06-22
- Comments: 2
- State: open

### kubernetes/kubernetes#139916: kubelet allocates hostUsers:false pod UID/GID range ending at UINT32_MAX, causing sandbox creation to fail indefinitely

### What happened?

A pod using:

```yaml

spec:

  hostUsers: false
```
intermittently fails during pod sandbox creation when kubelet allocates the terminal 65,536-ID user namespace range:
```
{
  "uidMappings": [
    { "hostId": 4294901760, "containerId": 0, "length": 65536 }
  ],
  "gidMappings":...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139916)

**Metadata:**
- Created: 2026-06-22
- Comments: 3
- State: open

### kubernetes/kubernetes#139915: Ephemeral volumes cannot be reclaimed when Pod unadmitted by Kubelet

### What happened?

When I create a pod that needs to use aGeneric ephemeral volume, it also depends on the device plugin.
However, when the pod is scheduled to a specified node, my device plugin is restarted.
In this case, the pod is unadmitted to be created on this node. Then the pod's status chan...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139915)

**Metadata:**
- Created: 2026-06-22
- Comments: 2
- State: open

### kubernetes/kubernetes#139934: cleanup(csi): replace deprecated wait.NewExponentialBackoffManager in csi_attacher.go

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Replaces the last remaining use of the deprecated `wait.NewExponentialBackoffManager` in `pkg/volume/csi/csi_attacher.go` with `wait.Backoff{}.DelayWithReset`, following the migration pattern established by #136824 an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139934)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139933: [WIP] DRA: Node Optional Preparation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139933)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139932: [WIP] Revert node authorizer

Validating source of regression in scalability tests

```release-note
NONE
```



🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139932)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139931: WIP: apiserver: enable WatchListCompression feature gate by default

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139931)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139930: cronjob: call queue.Forget when sync returns (nil, nil)

## What this PR does / why we need it

`processNextWorkItem` in the CronJob controller was only calling `queue.Forget(key)` inside the `requeueAfter != nil` branch. When `sync()` returns `(nil, nil)` — no error and no requeue duration — the rate-limiter failure count was never reset.

Affected paths...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139930)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139928: Reduce WatchList RLock hold time from O(N) to O(1) via lazy snapshot

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139928)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139927: adding type to attributes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139927)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139926: Adds ability to setup nodeInfoSnapshot for scheduler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139926)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139925: WIP

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139925)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139924: DRA scheduler_perf: consolidate extended resource test cases

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The only differences between the different workloads were:
- implicit vs. explicit
- number of classes

Those differences can be handled via templating instead of copy-and-paste. The advantage is that o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139924)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139923:   Degrade gracefully when etcd Maintenance.Status is PermissionDenied

 #### What type of PR is this?
  /kind bug

  #### What this PR does / why we need it:

  etcd >= 3.6 requires admin permission on the `Maintenance.Status` RPC ([etcd-io/etcd#21466](https://github.com/etcd-io/etcd/issues/21466)). An apiserver configured with a **non-root etcd user**
  therefor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139923)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139922: scheduler_perf: log items in createAny step

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This makes it easier to understand what the state of the cluster is. It also helps debugging templating. Large number of objects are handled by showing only the first and last one, with "..." in the middle....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139922)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139921: kubelet: populate Node UID on recorded node events (best-effort)

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The kubelet builds a single static node `ObjectReference` once at startup in
`NewMainKubelet` that carries only kind and name and no UID. Every event the
kubelet records against the node therefore has `involvedObject...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139921)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139920: Validate matching priorities when scheduling pod groups

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139920)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139919: Fixes : Ephemeral volumes cannot be reclaimed when Pod unadmitted by Kubelet  

fix(ephemeral-volume): introduce PodRejected condition and ephemeral controller to clean orphan inline PVCs
When a Pod is rejected during admission or scheduling before being scheduled
to any node, inline ephemeral volume PVCs may become orphaned and never garbage
collected by kubelet.

1. Add ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139919)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139918: CronJob controller: processNextWorkItem does not call queue.Forget on the (nil, nil) sync path, leaving stale rate-limiter backoff count



#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This is a minor one line change.

The CronJob controller's processNextWorkItem only resets the workqueue rate limiter (queue.Forget) in the requeueAfter != nil branch. When sync() returns (nil, nil) — Forget ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139918)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139910: Automated cherry pick of #139842: kubeadm: treat already promoted learner as successful

Cherry pick of #139842 on release-1.36.

#139842: kubeadm: treat already promoted learner as successful

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139910)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139909: Automated cherry pick of #139842: kubeadm: treat already promoted learner as successful

Cherry pick of #139842 on release-1.35.

#139842: kubeadm: treat already promoted learner as successful

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139909)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139908: Automated cherry pick of #139842: kubeadm: treat already promoted learner as successful

Cherry pick of #139842 on release-1.34.

#139842: kubeadm: treat already promoted learner as successful

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139908)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56206: CertificateSigningRequest Documentation Does Not Clearly Show Pre-Signing State

# CertificateSigningRequest Documentation Does Not Clearly Show Pre-Signing State

## Description

The CertificateSigningRequest documentation includes examples showing the `status.certificate` field after a CSR has been approved and signed on the page https://kubernetes.io/docs/reference/access-aut...

🔗 [Link](https://github.com/kubernetes/website/issues/56206)

**Metadata:**
- Created: 2026-06-22
- Comments: 3
- State: open

### kubernetes/k8s.io#9632: Image promotion for sp-operator v1.0.0

Image promotion for sp-operator v1.0.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork saschagrunert --project sp-operator --tag v1.0.0
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9632)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9852: dependabot(deps): bump github.com/onsi/ginkgo/v2 from 2.31.0 to 2.32.0 in /cluster-autoscaler

Bumps [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo) from 2.31.0 to 2.32.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/onsi/ginkgo/releases">github.com/onsi/ginkgo/v2's releases</a>.</em></p>
<blockquote>
<h2>v2.32.0</h2>
<h2>2.32.0</h2>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9852)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9851: Bump github.com/onsi/ginkgo/v2 from 2.31.0 to 2.32.0 in /vertical-pod-autoscaler/test in the non-kubernetes group across 1 directory

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [github.com/onsi/ginkgo/v2](https://github.com/onsi/ginkgo).

Updates `github.com/onsi/ginkgo/v2` from 2.31.0 to 2.32.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9851)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3018: feat: add kube_pod_status_disruption_reason metric

## What type of PR is this?

/kind feature

## What this PR does / why we need it

Adds a new ALPHA metric `kube_pod_status_disruption_reason` that reports the disruption reason for pods carrying a `DisruptionTarget` condition.

The existing `kube_pod_status_reason` metric reports `0` for all reason...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3018)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/perf-tests#4155: Enable allNamespaces watch in WaitForGenericK8sObjects measurement

feat: add support for cross-namespace querying in dynamic object stores and wait-for-conditions measurement

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/gui...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4155)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.13.0-rc.1 / 2026-06-22

Release notes of the 3.13-rc.1 release:

The 3.13.0-rc.0 release was only partially successful due to the migration from NPM to PNPM and subsequent CI issues, so most of the changes in this release candidate are CI/build-related. The only user-facing change is:

- [CHANGE] UI: Third-party npm dependency licenses are now embedded in the Prometheus binary and served at `/assets/third-party-licenses.txt`, replacing the `npm_licenses.tar.bz2` archive previously shipped in release tarballs and co...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.0-rc.1)

**Metadata:**
- Version: v3.13.0-rc.1
- Published: 2026-06-22
- Prerelease: Yes

### prometheus/promu: 0.20.0 / 2026-06-22

* [FEATURE] crossbuild: add --env flag to forward env vars to build containers #399


🔗 [Link](https://github.com/prometheus/promu/releases/tag/v0.20.0)

**Metadata:**
- Version: v0.20.0
- Published: 2026-06-22
- Prerelease: No

### envoyproxy/ai-gateway: v1.0.0-rc1

Release candidate

🔗 [Link](https://github.com/envoyproxy/ai-gateway/releases/tag/v1.0.0-rc1)

**Metadata:**
- Version: v1.0.0-rc1
- Published: 2026-06-23
- Prerelease: Yes

### containerd/containerd#13641: Feature Request: Support for LoongArch (loong64) architecture

### What is the problem you're trying to solve

containerd currently does not provide official support for the LoongArch (also known as Loongson, `loong64`) architecture. LoongArch is a domestic CPU architecture developed in China, and it has gained significant traction in the domestic ecosystem — i...

🔗 [Link](https://github.com/containerd/containerd/issues/13641)

**Metadata:**
- Created: 2026-06-22
- Comments: 5
- State: open


---

*This content was automatically collected on 2026-06-23 02:58:12*
