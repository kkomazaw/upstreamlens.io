---
title: "Upstream Github - 2026-07-19"
description: "CNCF upstream activity from github"
pubDate: 2026-07-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "sig/auth", "kind/failing-test", "sig/scheduling", "kind/feature", "priority/important-soon", "wg/device-management", "pr", "area/test", "area/apiserver", "sig/api-machinery", "release-note", "size/XXL", "kind/api-change", "sig/apps", "cncf-cla: yes", "sig/testing", "area/code-generation", "triage/accepted", "wg/workload-aware-scheduling", "size/L", "release-note-none", "needs-priority", "size/M", "needs-ok-to-test", "do-not-merge/needs-sig", "lgtm", "sig/cluster-lifecycle", "sig/architecture", "area/conformance", "area/kubelet", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "size/XS", "kind/flake", "ok-to-test", "size/S", "approved", "minikube", "area/vertical-pod-autoscaler", "kind/cleanup", "autoscaler", "kops", "stage/alpha", "enhancements", "sig/docs", "language/en", "website"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140717: [WAS] KEP-6089: Support Composite PodGroup for Building blocks APIs and workloadbuilder

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
- Adds reusable building block struct types to `scheduling.k8s.io` for the CompositePodGroup
- Add supports for CompositePodGroup to `workloadbuilder` library

#### Which issue(s) this PR is related to:
R...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140717)

**Metadata:**
- Created: 2026-07-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140716: Pods evicted/drained are reported as terminated.reason=OOMKilled with exitCode 143 (no memory pressure)

### What happened?

Pods that are terminated via node drain / eviction (not caused by
memory pressure) are being reported with
`containerStatuses[*].state.terminated.reason = "OOMKilled"` and
`exitCode = 143` (SIGTERM), even when there is no evidence of memory
pressure at the time of termination.

T...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140716)

**Metadata:**
- Created: 2026-07-19
- Comments: 2
- State: open

### kubernetes/kubernetes#140712: Failure cluster [e977215f...] `[sig-auth] [FeatureGate:ClusterTrustBundle] [FeatureGate:ClusterTrustBundleProjection] should be able to mount a single ClusterTrustBundle by name [Conformance]`

### Failure cluster [e977215f875a0c310215](https://go.k8s.io/triage#e977215f875a0c310215)

<img width="2980" height="610" alt="Image" src="https://github.com/user-attachments/assets/1fbb4702-f3d6-4f10-9c78-dd52ff88afd0" />

##### Error text:
```
[FAILED] expected pod "pod-projected-ctb-48ed7c80-3568...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140712)

**Metadata:**
- Created: 2026-07-18
- Comments: 4
- State: open

### kubernetes/kubernetes#140709: Use MetricAsyncRecorder to asynchronously record metrics.

### What would you like to be added?

As discussed here: https://github.com/kubernetes/kubernetes/pull/139840#discussion_r3604867117
We want to use MetricAsyncRecorder to asynchronously record metrics (These metrics are but not limited to: `queue_incoming_entities_total` and `queue_incoming_pods_tot...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140709)

**Metadata:**
- Created: 2026-07-18
- Comments: 1
- State: open

### kubernetes/kubernetes#140701: [Failing-test]: DRA ubuntu tests are hitting OOM and not running at all

### Which jobs are failing?

ubuntu DRA jobs
- https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-containerd-1-7-ubuntu-dra
- https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-containerd-1-7-ubuntu-dra-alpha-beta-features
- https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-container...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140701)

**Metadata:**
- Created: 2026-07-18
- Comments: 16
- State: open

### kubernetes/kubernetes#140715: Conditional Authz [2.5/n]: Prefactor for PR#3


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140715)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140714: Move validations and defaults to k8s.io/apiserver so they are accessible to the webhook authorizer


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140714)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140713: enable commentstart check on networking API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140713)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140710: Fix selectableFields hoisting when schemas differ

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When converting a `v1.CustomResourceDefinition` to the internal representation,
`spec.selectableFields` are currently hoisted to the top level whenever they are
identical across versions, regardless of whethe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140710)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140707: /test: add MinimumKubeletVersion:1.37 to CTB conformance tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140707)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140704: [WIP] Container Lifecycle Prober

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140704)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140703: e2e_node: gate restartable init container start on PostStart hook

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The "restartable-init-containers-start-serially" NodeConformance test occasionally fails the check that `restartable-init-2` starts before `init-3`. The test infers container ordering from the "Started" line ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140703)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140702: DRA: Fix shared decimal Quantity state in consumable capacity allocation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140702)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140700: Add ObjectDefaulter support to generic testing helpers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The generic testing helpers (`createObject`, `setObjectsForList`) in
`staging/src/k8s.io/apiserver/pkg/registry/generic/testing` store objects
directly to etcd, bypassing the defaulting pipeline that normally run...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140700)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23379: Kicbase: Bump debian:bookworm from 20260518 to 20260713

The debian:bookworm image released a new version

This PR was auto-generated by `make update-debian-version` using [update-debian-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-debian-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/23379)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23378: Kicbase/ISO: Update nerdctl from 2.3.3 to 2.3.4

The nerdctl project released a [new version](https://github.com/containerd/nerdctl/releases)

This PR was auto-generated by `make update-nerdctl-version` using [update-nerdctl-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-nerdctl-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/23378)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23376: Addon metrics-server: Update metrics-server/metrics-server image from v0.8.1 to v0.9.0

The metrics-server project released a [new version](https://github.com/kubernetes-sigs/metrics-server)

This PR was auto-generated by `make update-metrics-server-version` using [update-metrics-server-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-metrics-ser...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23376)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9998: Bump to kubernetes 1.37 dependencies

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is about `failing-tests or flakes`,...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9998)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18608: Serve cluster assets from OCI registries

/kind feature

## Motivation

Nodes currently download file assets (nodeup, kubelet, containerd, CNI) and pull images from public mirrors and registries. Serving all of a cluster's assets from a single registry removes the dependency on public upstream sources, keeps downloads same-region when the r...

🔗 [Link](https://github.com/kubernetes/kops/issues/18608)

**Metadata:**
- Created: 2026-07-18
- Comments: 1
- State: open

### kubernetes/enhancements#6247: Kubelet systemd watchdog diagnostic guardrails

/sig node
/kind feature
/stage alpha

## Summary

Improve kubelet's Linux systemd watchdog integration so operators can identify why watchdog heartbeats stopped before a systemd-triggered kubelet restart.

## Motivation

Today kubelet may stop notifying systemd because a watchdog health checker fail...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6247)

**Metadata:**
- Created: 2026-07-18
- Comments: 1
- State: open

### kubernetes/website#56536: Merge main branch into dev-1.37

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/56536)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56523: fix(style): update namespaces.md to follow documentation style guide

## What this PR does

This PR fixes multiple documentation style violations in `content/en/docs/tasks/administer-cluster/namespaces.md` to align with the [Kubernetes documentation style guide](https://kubernetes.io/docs/contribute/style/style-guide/).

## Changes made

- Replace 'we' with 'you' to a...

🔗 [Link](https://github.com/kubernetes/website/pull/56523)

**Metadata:**
- Created: 2026-07-18
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-19 02:28:11*
