---
title: "Upstream Github - 2026-06-14"
description: "CNCF upstream activity from github"
pubDate: 2026-06-14
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "area/testing", "needs-triage", "minikube", "pr", "cncf-cla: yes", "size/S", "lgtm", "approved", "needs-ok-to-test", "size/M", "do-not-merge/work-in-progress", "size/XS", "ok-to-test", "kind/failing-test", "needs-sig", "area/test", "sig/autoscaling", "kind/flake", "release-note-none", "sig/testing", "needs-priority", "area/kubelet", "kind/cleanup", "sig/node", "size/L", "kind/bug", "sig/api-machinery", "release-note", "kind/api-change", "sig/storage", "do-not-merge/needs-kind", "sig/apps", "do-not-merge/release-note-label-needed", "do-not-merge/invalid-commit-message", "kind/documentation", "sig/scheduling", "wg/device-management", "area/provider/aws", "kops", "area/provider/gcp", "kube-state-metrics"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/minikube#23144: Flaky test: TestMultiControlPlane/serial/PingHostFromPods on Docker driver

## Summary

`TestMultiControlPlane/serial/PingHostFromPods` is flaky on the Docker driver. The test retrieves pod names from the HA cluster and runs `nslookup` inside each pod, but the pod list can be empty (pods evicted/rescheduled), causing `kubectl exec` to fail with "pod, type/name or --filename...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23144)

**Metadata:**
- Created: 2026-06-13
- Comments: 1
- State: open

### kubernetes/minikube#23142: Flaky test: TestFunctional/serial/ComponentHealth on KVM/containerd

## Summary

`TestFunctional/serial/ComponentHealth` is flaky. The test checks that all control-plane components (etcd, apiserver, controller-manager, scheduler) are Running and Ready. It fails when etcd has restarted and is not yet Ready at the time of the check.

## Failure details

From [pull-mini...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23142)

**Metadata:**
- Created: 2026-06-13
- Comments: 0
- State: open

### kubernetes/minikube#23141: Flaky test: TestPause/serial/SecondStartNoReconfiguration on KVM

## Summary

`TestPause/serial/SecondStartNoReconfiguration` is flaky on the KVM driver. The test starts minikube a second time on an already-running cluster to verify no reconfiguration happens, but it fails with exit status 81 (host provision error) after a 6+ minute timeout.

Previously reported i...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23141)

**Metadata:**
- Created: 2026-06-13
- Comments: 0
- State: open

### kubernetes/minikube#23140: Flaky test: TestMultiControlPlane/serial/DeployApp on Docker driver

## Summary

`TestMultiControlPlane/serial/DeployApp` is flaky on the Docker driver. The test deploys busybox pods to a multi-control-plane (HA) cluster and verifies DNS resolution from each pod. It fails because pods are being rescheduled mid-test, causing `container not found` and `pod not found` e...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23140)

**Metadata:**
- Created: 2026-06-13
- Comments: 0
- State: open

### kubernetes/minikube#23139: Flaky test: TestFunctional/parallel/MountCmd/VerifyCleanup

## Summary

`TestFunctional/parallel/MountCmd/VerifyCleanup` is flaky. The test starts 3 mount processes, verifies they are alive with `findmnt`, kills them with `--kill=true`, and then checks they stopped within 1 second. The test fails due to race conditions in mount readiness and process cleanup ...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23139)

**Metadata:**
- Created: 2026-06-13
- Comments: 0
- State: open

### kubernetes/minikube#23138: Flaky test: TestAddons/serial/Volcano on KVM/containerd

## Summary

`TestAddons/serial/Volcano` is flaky. The Volcano admission webhook rejects vcjob creation even after all Volcano deployments and pods are reported as stable/running.

## Failure details

From [pull-minikube-kvm-containerd-linux-x86 on PR #23101](https://prow.k8s.io/view/gs/kubernetes-ci...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23138)

**Metadata:**
- Created: 2026-06-13
- Comments: 0
- State: open

### kubernetes/minikube#23134: Flaky test: TestMultiNode on KVM — tightly coupled serial subtests

## Summary

TestMultiNode is flaky on KVM and has been skipped entirely. The test cannot be partially skipped because all 14 serial subtests are tightly coupled — each mutates a shared cluster and the next assumes that exact state.

## Observed failures on KVM

**RestartKeepsNodes** — `minikube star...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23134)

**Metadata:**
- Created: 2026-06-13
- Comments: 1
- State: open

### kubernetes/minikube#23145: ci: add step-level timeouts to build workflow

A part of #23041 fix.

This PR adds timeout-minutes to every step in .github/workflows/build.yml.

The timeout values below are based on real run data from the last 30 days (43 runs). Collected via `nirs`'s workflow-stats tool (PR #23042).

Timeout column = `p95 × 3`, rounded up to whole minut...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23145)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23143: Add Octopus AI code review for pull requests

Octopus is a free, open-source AI code review tool that indexes
the codebase and posts context-aware inline review comments with
severity levels on every pull request. It is free and unlimited
for public OSI-licensed repositories with no API key required.

https://octopus-review.ai/open-source...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23143)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/minikube#23137: Skip flaky integration tests to unblock CI

Skip flaky integration tests to unblock CI

Skip flaky tests as a first aid to unblock development. The tests
need to be investigated and re-enabled. Fixing the underlying
issues is tracked in the linked issues.

Skipped tests:

- TestAddons/serial/Volcano (KVM) #23138
- TestFunctional/para...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23137)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23133: Skip unrelated workflows for site-only changes

Workflows unrelated to site content (lint, build, go-housekeeping) were running on PRs and pushes that only modify files under site/. This wastes CI resources and can block simple doc fixes with flaky test failures (see kubernetes/minikube#22655).

Add paths-ignore or path negation for site/ to th...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23133)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139711: Failure cluster [85d4a0fe...] 	ci-kubernetes-benchmark-list-cbor & 	ci-kubernetes-benchmark-list-yaml failures

### Failure cluster [85d4a0fe610f51e796c2](https://go.k8s.io/triage#85d4a0fe610f51e796c2)

<img width="2446" height="1042" alt="Image" src="https://github.com/user-attachments/assets/b8a08ddd-01fd-42b7-a677-a1c050e2d13e" />

##### Error text:
```
:0
[measurement call GenericPrometheusQuery - APIServ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139711)

**Metadata:**
- Created: 2026-06-13
- Comments: 4
- State: open

### kubernetes/kubernetes#139714: fix flaky hpa test by making per pod cpu load deterministic

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139714)

**Metadata:**
- Created: 2026-06-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139713: Fix 130069 fix context todo kubelet cm - part 3

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is the second part of replacing the appropriate context with the `context.TODO()` or `context.Background()` in the `./pkg/kubelet/cm/`. 
I break it down into multiple parts to keep PRs small and re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139713)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139712: api: skip null values in ResourceList JSON deserialization

#### What type of PR is this?

/kind bug
/kind api-change
/sig api-machinery

#### What this PR does / why we need it

Adds a custom `UnmarshalJSON` to `ResourceList` that skips null-valued entries instead of deserializing them as zero-value Quantity. Previously, `kubectl create` with a YAML contain...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139712)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139710: Remove deprecated wait helper usage in cache and CSI

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Replaces two deprecated wait helper usages with their newer context/backoff alternatives:

- `WaitForCacheSync` now uses `wait.PollUntilContextCancel` with `wait.ContextForChannel(stopCh)`.
- CSI attach/detach stat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139710)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139709: apimachinery: fix YAML stream splitter dropping %YAML directives

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

If you put a %YAML 1.1 directive at the top of your YAML config file (which is valid per the YAML spec), kubectl apply chokes on it. The YAML stream splitter treats --- as a document boundary no matter what, so it sp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139709)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139708: kubelet: fix /stats/summary including terminated init container memory

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Pod memory from /stats/summary was being pulled from the pod cgroup which includes memory from terminated init containers (file cache stays charged to the cgroup). So you'd see kubectl top pod showing 0 MB but /stats...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139708)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139707: kubelet: handle corrupt allocation checkpoint gracefully instead of panicking

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

If the OS shuts down uncleanly, the allocation checkpoint file can end up with corrupted JSON. Kubelet panics on startup trying to read it and the only recovery is manually deleting the file.

Now it just logs the er...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139707)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139705: fix : false positive rejecting profile names containing '..'

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

This PR addresses two related issues in AppArmor localhostProfile validation:

**Bug fix:** `ValidateAppArmorProfileFormat` (the deprecated annotation API)
used `strings.Contains(profilePath, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139705)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139703: kubelet: prevent scheduling duplicate container starts in computePodActions

/sig node
/kind bug

## What this PR does / why we need it

Fixes #139670

When a CRI `StartContainer` call times out in kubelet but succeeds in the
container runtime (e.g. containerd), kubelet may schedule another container
start on the next `syncPod` cycle. This results in two containers ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139703)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139702: fix: remove duplicate running containers



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139702)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139701: docs(scheduler): clarify VolumeBinding Score gate note

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:
Adds a clarifying code comment, per the accepted resolution in #113705 (ahg-g, Huang-Wei, alculquicondor), that enabling the VolumeBinding Score plugin without regard to the `VolumeCapacityPriority` feature g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139701)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139700: fix: make container log rotation atomic

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Container log rotation was not crash-safe: `rotateLatestLog` renamed the live log to its rotated name before reopening the container log, so if the kubelet crashed (or `ReopenContainerLog` failed and the rename-back al...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139700)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139699: test: wait for CRD in discovery before starting GC

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:
`TestCascadingDeleteOnCRDConversionFailure` could flake because the garbage collector was started and synced before the updated CRD (with the failing conversion webhook) had propagated to discovery, so the test raced...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139699)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139698: fix: reject zero step in ResourceSlice validRange

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
ResourceSlice validation panics with `runtime error: integer divide by zero` when the `DRAConsumableCapacity` feature gate is enabled and a capacity request policy sets `validRange.step: 0`. This adds a guard that reje...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139698)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18469: Automated cherry pick of #18467: aws: Reconcile target group health check changes on existing target groups

Cherry pick of #18467 on release-1.36.

#18467: aws: Reconcile target group health check changes on existing target groups

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR ...

🔗 [Link](https://github.com/kubernetes/kops/pull/18469)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18468: gce: Reconcile HTTP health check changes on existing health checks

/cc @rifelpet @ameukam 

🔗 [Link](https://github.com/kubernetes/kops/pull/18468)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18467: aws: Reconcile target group health check changes on existing target groups

https://testgrid.k8s.io/kops-presubmits#pull-kops-aws-upgrade-k135-ko135-to-k136-kolatest-many-addons
```
+ /home/prow/go/src/k8s.io/kops/.build/dist/linux/amd64/kops update cluster
Using cluster from kubectl context: pr18456-kops-aws-upgrade-k135-ko135-to-k136-kolatest-many-addons.tests-kops-aws...

🔗 [Link](https://github.com/kubernetes/kops/pull/18467)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#2995: chore: Release 2.19.1

Back-merge release-2.19 to main

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/2995)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-06-14 03:46:01*
