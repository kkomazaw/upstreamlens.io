---
title: "Upstream Github - 2026-06-15"
description: "CNCF upstream activity from github"
pubDate: 2026-06-15
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "wg/device-management", "sig/scheduling", "sig/node", "pr", "area/kubelet", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "kind/cleanup", "area/test", "sig/api-machinery", "size/XXL", "kind/api-change", "kind/feature", "release-note-none", "sig/apps", "sig/testing", "do-not-merge/work-in-progress", "area/code-generation", "sig/auth", "do-not-merge/release-note-label-needed", "ok-to-test", "area/kubectl", "sig/cli", "sig/instrumentation", "size/XS", "sig/storage", "size/XL", "area/apiserver", "approved", "size/L", "kind/regression", "area/testing", "minikube", "release", "autoscaler"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139717: Discussion: do we need an idle or suspend state for warm worker Pods?

### What would you like to discuss?

I want to discuss if Kubernetes needs some standard semantic between "running"
and "deleted" for warm worker Pods.

This is not a concrete proposal to add a new API now. I am also not asking to
expose Docker `stop/start` directly in Kubernetes. I just want to che...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139717)

**Metadata:**
- Created: 2026-06-14
- Comments: 5
- State: open

### kubernetes/kubernetes#139727: apimachinery: add declarative validation for Condition.Message field …

Which issue(s) this PR is related to:
  Part of #139638
  KEP: https://github.com/kubernetes/enhancements/tree/master/keps/sig-api-machinery/5073-declarative-validation

  Special notes for your reviewer:
  Migrates metav1.Condition.Message field validation to Declarative Validation as part of ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139727)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139726: [WIP] Feat: kubectl top support v1.metrics.k8s.io

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

metrics.k8s.io is moving to GA; `kubectl top` should support it.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5207

#### Special notes for your r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139726)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/kubernetes#139730: DRA: Duplicated configs reported in resourceclaim status

### What happened?

When creating a resourceclaim, the status will reports more config than it should. Each config will be reported the amount of request it is pointing to. 

This also means that, if we create 32 requests (the allowed limit), and create 3 configs that points to all requests (so 32, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139730)

**Metadata:**
- Created: 2026-06-14
- Comments: 2
- State: open

### kubernetes/kubernetes#139733: kubelet: reject nil volume specs in ASW pod mounts

#### What type of PR is this?

/kind bug
/sig node

#### What changed

`ActualStateOfWorld` now rejects nil `VolumeSpec` values before storing pod mount state through `AddPodToVolume` or `CheckAndMarkVolumeAsUncertainViaReconstruction`.

#### Why

Both paths store `MarkVolumeOpts.VolumeSpec` in `mou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139733)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139732: DRA: Fix duplicated configs reported in resourceclaim status

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139732)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139731: DRA: Empty requests field in config status of resourceclaim when the config applies to all requests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139731)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139729: [WIP] Integration test for rollback feature gates

/kind feature
/kind cleanup

- Adds `StartTestServerProcess` to the integration framework, which allows integration tests to cleanly start the API Server as an independent subprocess rather than an in-process goroutine. This allows us to fully reconfigure, stop, and restart the API server mid-tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139729)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139728: authorization: enable optionalorrequired kube-api-linter rule

Enables the `optionalorrequired` and `nonpointerstructs` kube-api-linter rules for the `authorization` API group. Part of #134671, addresses #136861.

**What:**
- Tags every field in `authorization/v1` and `v1beta1` as `+optional` / `+required`.
- `*.Status` fields are server-populated and optional ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139728)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139725: test/images: add socat to agnhost

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
This PR adds the `socat` package to the agnhost image and bumps the agnhost image version to `2.65.0`.
`socat` provides more flexible protocol handling and avoids incompatibilities between different netcat i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139725)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139724: client-go: add UntilWithSync precondition error tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139724)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139723: csi-translation-lib: add test for preserving input PV

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139723)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139721: Remove PodLifecycleSleepAction and PodLifecycleSleepActionAllowZero feature gates after GA-ed in v1.34



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139721)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139720: Encapsulate storage mutations and snapshots inside watchCacheStorage

/cc @p0lyn0mial @Jefftree @michaelasp

/kind cleanup

```release-note
NONE
```



🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139720)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139719: Extract watch cache history functions

/kind cleanup

```release-note
NONE
```

/cc @p0lyn0mial @Jefftree @michaelasp 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139719)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139716: Emit initial-events-end bookmark in fake tracker Watch for WatchList …

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

Since v1.35, `WatchListClient` defaults to enabled. When users construct a `cache.ListWatch` directly, without `ToListWatcherWithWatchListSemantics`, using a fake client, the reflector attempt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139716)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139715: feat: introduce optional authProxyHeaders field for client.authentication api

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139715)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23154: Flaky test: TestNoKubernetes/serial/StartNoArgs on KVM

## Summary

TestNoKubernetes/serial/StartNoArgs is flaky on KVM. The minikube start command is killed by signal after 6 seconds, and the VM becomes unreachable (no route to host). This appears to be a KVM networking issue.

## Failure details

From [pull-minikube-kvm-containerd-linux-x86 on PR #2313...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23154)

**Metadata:**
- Created: 2026-06-14
- Comments: 0
- State: open

### kubernetes/minikube#23153: Flaky test: TestFunctional/serial/SoftStart and ExtraConfig on KVM

## Summary

`TestFunctional/serial/SoftStart` and `TestFunctional/serial/ExtraConfig` are flaky on KVM. Both tests do a soft-restart of an already-running cluster (`minikube start` on a running profile), and both time out with `GUEST_START` (exit status 80) when Kubernetes component verification exc...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23153)

**Metadata:**
- Created: 2026-06-14
- Comments: 0
- State: open

### kubernetes/minikube#23150: Flaky test: TestRunningBinaryUpgrade on KVM

## Summary

`TestRunningBinaryUpgrade` is flaky on KVM. The legacy minikube start fails because it cannot find free private network subnets for KVM networking.

## Failure details

From [pull-minikube-kvm-docker-linux-x86 on PR #23137](https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/mini...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23150)

**Metadata:**
- Created: 2026-06-14
- Comments: 0
- State: open

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.10.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.10.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.10.0
- Published: 2026-06-14
- Prerelease: No


---

*This content was automatically collected on 2026-06-15 04:01:48*
