---
title: "Upstream Github - 2026-11-16"
description: "CNCF upstream activity from github"
pubDate: 2026-11-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "needs-triage", "kind/bug", "area/apiserver", "sig/api-machinery", "pr", "area/kubelet", "sig/scheduling", "release-note", "size/XXL", "kind/api-change", "kind/feature", "sig/apps", "cncf-cla: yes", "needs-priority", "api-review", "kind/cleanup", "size/XL", "release-note-none", "approved", "area/kubectl", "size/XS", "sig/cli", "needs-ok-to-test", "size/L", "area/test", "sig/testing", "area/code-generation", "wg/device-management", "ok-to-test", "sig/network", "area/kube-proxy", "size/M", "kind/flake", "size/S", "kind/failing-test", "area/code-organization/future-dependencies", "sig/storage", "lgtm", "do-not-merge/hold", "minikube", "website", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144178: [Failing Test] SecurityProfileOCI node e2e tests fail on containerd 2.2.7: runtime does not report seccomp_profile_oci

### Which jobs are failing?

- `ci-kubernetes-node-e2e-containerd-alpha-features` (COS and Ubuntu)
- `ci-kubernetes-node-e2e-cri-proxy-all-alpha-serial`

### Which tests are failing?

`ci-kubernetes-node-e2e-containerd-alpha-features`, every spec in `[sig-node] SecurityProfileOCI [Feature:SecurityPr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144178)

**Metadata:**
- Created: 2026-11-15
- Comments: 2
- State: open

### kubernetes/website#59161: Simplify ServiceAccount creation example in docs

**Problem**
The ServiceAccount page creates `build-robot` via `kubectl apply -f - <<EOF` heredoc. Verbose for a one-off example.

**Proposal**
Use the imperative command:

```
    # Create a new service account named build-robot
    kubectl create serviceaccount build-robot
```
Same result, shorter,...

🔗 [Link](https://github.com/kubernetes/website/issues/59161)

**Metadata:**
- Created: 2026-11-15
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#144177: apiserver watch cache silently drops events that share a resourceVersion

### What happened?

An open watch served from the kube-apiserver watch cache silently drops events that share the same `resourceVersion`.

When an etcd transaction touches multiple keys at once, all those changes land in etcd under the same `resourceVersion`. The watch cache dispatches only the **fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144177)

**Metadata:**
- Created: 2026-11-15
- Comments: 1
- State: open

### kubernetes/kubernetes#144181: PodAllocationPending condition

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

##### Problem

The `PodResizePending` condition has 2 possible reasons: Deferred, and Infeasible. Infeasible is defined as, the resize will never be possible (although static node configuration issues are still c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144181)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144179: Switch CEL IP and CIDR libraries to cel-go's network library

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144179)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144175: kubectl: use intstr.FromInt32 instead of deprecated FromInt

#### What type of PR is this?
/kind cleanup
/sig cli

#### What this PR does / why we need it:
Replaces the last remaining uses of the deprecated `intstr.FromInt` in kubectl (`createService` in `kubectl run`, and one in `describe_test.go`) with `intstr.FromInt32`, as flagged by staticcheck SA1019. N...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144175)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144174: Fix StatefulSet CurrentReplicas going negative on intermediate revisi…

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

During a RollingUpdate, deleting a Pod that is not on `updateRevision` always did `CurrentReplicas--`. `CurrentReplicas` only counts Pods on `currentRevision`, so an intermediate-revision Pod (e.g. mid-rollout second...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144174)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144173: POC: simpler shared consumable capacity implementation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This uses an alternative implementation of the feature than https://github.com/kubernetes/kubernetes/pull/140084. Don't review, changes here (if desirable) need to be merged back there.

#### Which issue(s) this ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144173)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144172: cacher: register new watchers synchronously with WatchCacheStallResume

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144172)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144171: kube-proxy: pick free ports in the localnodeportproxy tests

#### What type of PR is this?

/kind flake
/sig network

#### What this PR does / why we need it:

The localnodeportproxy tests draw NodePorts with `rand.Intn` over 2767 values. Two of the three draws in `TestShutdown` collide about once in 900 runs, `SyncNodePorts` keys the specs by port and silent...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144171)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144169: apiserver: make RunTestCompactRevision wait for the cacher watch

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

`TestCompactRevision` fails with `storage is (re)initializing` instead of `too old` in about 2 percent of `pull-kubernetes-unit` runs (69 presubmit failures in two weeks in k8s-triage). The cache...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144169)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144168: apiserver: let net/http pool the HTTP/2 test connections

#### What type of PR is this?

/kind failing-test
/sig api-machinery

#### What this PR does / why we need it:

Go tip ([CL 861962](https://go-review.googlesource.com/c/go/+/861962)) moved HTTP/2 connections into the net/http Transport pool, where `MaxIdleConnsPerHost: -1` closes the connection afte...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144168)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144166: emptydir: unmount nested mounts before tearing down the volume

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

A privileged container can create mounts below an emptyDir volume, for example a FUSE mount shared back to the host through Bidirectional mount propagation. If the workload exits without unmounting (cras...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144166)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144165: scheduler: fix NodeAffinity hint for addedAffinity on node update

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144165)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144164: cacher: remove duplicate watcherIdx increment in watch

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144164)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144163: kubelet: sort pod IPs in kuberuntime.determinePodSandboxIPs

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The kubelet orders and truncates CRI-reported pod sandbox IPs (by node IP family, at most one per family, #97979) only when it builds the API pod status. Internal consumers get the raw CRI list from `determinePodSand...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144163)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24063: site: Pin Hugo back to v0.169.0 and test site PRs

Fix the broken website build and add a CI check so site changes are tested before merge.

## Pin Hugo back to v0.169.0

Hugo v0.170.0 (#24046) removed LibSass, which the pinned Docsy v0.12.0 theme still uses, and the build has no Dart Sass. Every site build since that merge fails. Revert to v0.1...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24063)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24061: docs: Add development environment setup to contributor guide

New contributors currently have to piece together the build dependencies from the release build page, the testing page, CI workflows, and helper scripts. Add a complete setup section to the contributor guide so one page gets them building and testing on Linux, macOS, and Windows. Point the binary bu...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24061)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59160: kubernetes.io search returns a blank 403 for queries containing .forwarding (Netlify WAF rule 930120)

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

Searching kubernet...

🔗 [Link](https://github.com/kubernetes/website/issues/59160)

**Metadata:**
- Created: 2026-11-15
- Comments: 1
- State: open

### containerd/containerd#14585: ctr: --cpu-burst flag is not defined, so `ctr run --cpu-burst` always fails

### Description

Although CPU burst support effort was made,  `ctr` reads `cmd.Uint64("cpu-burst")` in `cmd/ctr/commands/run/run_unix.go` and passes it to `oci.WithCPUBurst()`. There was no addition of the flag definition to `ContainerFlags` in `cmd/ctr/commands/commands_unix.go`, so urfave/cli reje...

🔗 [Link](https://github.com/containerd/containerd/issues/14585)

**Metadata:**
- Created: 2026-11-15
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-16 04:42:56*
