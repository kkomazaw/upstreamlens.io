---
title: "Upstream Github - 2026-08-29"
description: "CNCF upstream activity from github"
pubDate: 2026-08-29
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/documentation", "sig/auth", "needs-triage", "kind/bug", "kind/cleanup", "sig/node", "sig/api-machinery", "sig/scheduling", "kind/feature", "needs-sig", "pr", "size/XS", "sig/apps", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-kind", "area/test", "sig/network", "release-note", "size/L", "cncf-cla: yes", "sig/testing", "do-not-merge/cherry-pick-not-approved", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "size/XXL", "approved", "sig/cli", "sig/instrumentation", "sig/architecture", "do-not-merge/work-in-progress", "do-not-merge/hold", "area/code-generation", "sig/cloud-provider", "area/dependency", "wg/device-management", "size/XL", "kind/dependency", "kind/flake", "release-note-none", "area/e2e-test-framework", "size/M", "do-not-merge/needs-sig", "triage/accepted", "area/kubeadm", "ok-to-test", "sig/autoscaling", "lgtm", "area/vertical-pod-autoscaler", "area/helm-charts", "autoscaler", "kubectl", "prometheus", "release", "procfs", "envoyproxy", "gateway", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141670: Consider a stronger explicit warning against re-encoding SignJWTRequest.claims (KEP-740 ExternalJWTSigner)

**Context:**
The `SignJWTRequest.claims` field comment currently reads:

    // URL-safe base64 wrapped payload to be signed.
    // Exactly as it appears in the second segment of the JWT
    string claims = 1;

This is technically correct and, on a careful read, unambiguous — the payload is already...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141670)

**Metadata:**
- Created: 2026-08-29
- Comments: 1
- State: open

### kubernetes/kubernetes#141669: ExternalJWTSigner (KEP-740) proto doc doesn't specify required signature encoding (RFC 7518 IEEE P1363), causing silent verification failures

**What happened:**
The `ExternalJWTSigner.Sign` RPC's `SignJWTResponse.signature` field comment states only that the value must be "Already wrapped in URL-safe base64, exactly as it appears in the final segment of the JWT." It does not specify the required byte-level signature encoding for ECDSA alg...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141669)

**Metadata:**
- Created: 2026-08-29
- Comments: 1
- State: open

### containerd/containerd: containerd API 1.12.0-rc.0

Welcome to the api/v1.12.0-rc.0 release of containerd!
*This is a pre-release of containerd*

The 13th release for the containerd 1.x API aligns with the containerd 2.4 release.

### Highlights

* **Include media type in content create event** ([#13833](https://github.com/containerd/containerd/pull/13833))
* **Add parent path to runc checkpoint options** ([#13699](https://github.com/containerd/containerd/pull/13699))

#### Deprecations

* **Deprecate "allow mount handlers" in shim info and repla...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/api/v1.12.0-rc.0)

**Metadata:**
- Version: api/v1.12.0-rc.0
- Published: 2026-08-28
- Prerelease: Yes

## Updates

### kubernetes/kubernetes#141665: remove leftover debug logs from TestValidateNodeDeclaredFeatures

### What happened?

When running `TestValidateNodeDeclaredFeatures` in `pkg/apis/core/validation/validation_test.go`, I noticed that the test prints a lot of `DEBUG:` messages using `t.Logf`.

These look like leftover debug statements from the merge of commit `c30b75b0085` (feat: Implement node decl...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141665)

**Metadata:**
- Created: 2026-08-28
- Comments: 1
- State: open

### kubernetes/kubernetes#141653: scheduler: DATA RACE

### What happened?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/141647/pull-kubernetes-kind-dra-all/2093321686697906176


#### kube-system/kube-scheduler-kind-control-plane/kube-scheduler

DATA RACE:

    Write at 0x00c000c83b40 by goroutine 595:
      k8s.io/kubernetes/pkg/scheduler...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141653)

**Metadata:**
- Created: 2026-08-28
- Comments: 3
- State: open

### kubernetes/kubernetes#141652: Introduce model-based correctness and linearizability testing for k8s storage

### What would you like to be added?

We would like to introduce model-based correctness testing suite for Kubernetes storage (`k8s.io/apiserver/pkg/storage`), modeled after the [robustness testing approach used in etcd](https://github.com/etcd-io/etcd/tree/main/tests/robustness#etcd-robustness-test...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141652)

**Metadata:**
- Created: 2026-08-28
- Comments: 2
- State: open

### kubernetes/kubernetes#141671: Remove debug logs from node declared features validation test

Fixes #141665.

Removes the leftover DEBUG t.Logf calls from TestValidateNodeDeclaredFeatures so passing verbose test runs stay clean.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141671)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141668: Automated cherry pick of #141593: fix endpointslice out of sync

Cherry pick of #141593 on release-1.35.

#141593: fix endpointslice out of sync

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
When a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141668)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141667: Automated cherry pick of #141593: fix endpointslice out of sync

Cherry pick of #141593 on release-1.36.

#141593: fix endpointslice out of sync

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
When a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141667)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141666: Automated cherry pick of #141593: fix endpointslice out of sync

Cherry pick of #141593 on release-1.37.

#141593: fix endpointslice out of sync

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
When a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141666)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141664: WIP: dry-run structured-merge-diff bump to https://github.com/kubernetes-sigs/structured-merge-diff/pull/292

/hold
/cc @jpbetz @cici37 @inteon 



🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141664)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141663: Update to go1.27

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Updates to build with and require go 1.27

* Updates a few files to pass go 1.26 and go 1.27 gofmt
* Fixes a real error wrapping issue caught by go vet
* Bumps golanglint-ci to a version that support...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141663)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141662: Deflake pod resize deferred tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141662)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141661: test/e2e/network: Give hostNetwork configs dedicated ports

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141661)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141660: Show Terminating status for StatefulSets in kubectl get

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

`kubectl get sts` gives no indication that a StatefulSet is being deleted. When deletion is blocked by a finalizer, which is common with operators, a terminating StatefulSet renders identically to a healthy one:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141660)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141659: tokencleaner: migrate to contextual logging APIs

## Summary
- Migrates `pkg/controller/bootstrap/tokencleaner.go` to the contextual-logging-aware APIs: `AddEventHandlerWithOptions` instead of `AddEventHandlerWithResyncPeriod`, and `HandleErrorWithLogger`/`HandleErrorWithContext`/`HandleCrashWithContext` instead of `HandleError`/`HandleCrash`.
- `N...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141659)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141657: Update metrics docs for v1.37

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141657)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141656: kubectl top pod: add field-selector example for filtering by node

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Adds a help example for the existing `--field-selector` path:

```
kubectl top pod -A --field-selector spec.nodeName=NODE_NAME
```

This is **not** a new `--node` flag.

#141581 proposed `--node` and was cl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141656)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141655: Fix three dead kubernetes.io links in docs and help text

#### What type of PR is this?

/kind documentation
/kind cleanup

#### What this PR does / why we need it

Three `kubernetes.io` links referenced from Go sources return 404. One of them is printed to users:

```
$ kubeadm token --help
...
You can read more about bootstrap tokens here:
  https://kube...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141655)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141654: client-go: avoid holding the event broadcaster lock during EventSeries updates

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141654)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141651: kubelet: expose node/pod/container memory usage bytes metrics

<!-- Please add a rich PR body! -->

The kubelet serves memory *working-set* metrics at the node/pod/container level on the `/metrics` endpoint, but not plain memory-usage bytes. This PR exposes three new gauges that mirror the existing `*_memory_working_set_bytes` pattern:

- `node_memory_usage_byt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141651)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141650: kubelet/stats: verify Windows container rootfs usage is surfaced in summary

**What this PR does / why we need it**

Closes the request in https://github.com/kubernetes/kubernetes/issues/112743 (Windows node should provide metrics for rootfs / ephemeral-storage space usage).

The CRI path already surfaces the Windows container rootfs usage: cri_stats_provider_windows.makeWin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141650)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141649: kubelet-report-device-plugin-devices-in-podresources-GetAllocatableResources-on-Windows

**What this PR does / why we need it:**

On Windows, `containerManagerImpl.GetAllocatableDevices` in `pkg/kubelet/cm/container_manager_windows.go` always returned `nil`. As a result, the podresources `GetAllocatableResources` endpoint reported no device plugin devices for Windows nodes even when dev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141649)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141648: fix: make nil DeviceTaintSelector match no devices (tracker)

### Which issue is this PR fixing?

Closes #141620

### What this PR does

Fixes the `NoSchedule` enforcement path for `DeviceTaintRule` when `spec.deviceSelector` is omitted (nil).

**Root cause:** `staging/src/k8s.io/dynamic-resource-allocation/resourceslice/tracker/tracker.go` treated a nil selec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141648)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141647: WIP: enforce usage of context-aware client-go

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Kubernetes 1.37 (mostly) finished adding context-aware alternatives to APIs. What is left is actually using the new APIs in those part of the code base (scheduler, controller manager, kubelet) which want to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141647)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141646: scheduler: define feature gates in staging

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141646)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10214: VPA Helm chart: what is needed for a stable v1 release?

/kind feature
/area helm-charts
/area vertical-pod-autoscaler

#### What would you like to be added?

A list of what the VPA Helm chart still needs before it can drop this notice from the README

> WARNING: This chart is currently under development and is not ready for production use.

and publish a...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10214)

**Metadata:**
- Created: 2026-08-28
- Comments: 4
- State: open

### kubernetes/autoscaler#10219: VPA: don't apply eviction requirements to in-place updates

#### What type of PR is this?

/kind bug
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

`EvictionRequirements` were checked in `getPodsUpdateOrder`, which the in-place path also uses. A memory scale-up with `TargetLowerThanRequests` then never got an in-place resize — same ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10219)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10217: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10217)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10213: VPA: keep memory-only aggregates from being GC'd as empty

#### What type of PR is this?

/kind bug
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

Short CronJobs that only ever OOM never produce a CPU sample. `isEmpty()` only looked at `TotalSamplesCount` (CPU), so GC dropped the memory histogram and the recommendation fell back to...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10213)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1874: kubectl top pod: add example for filtering by node via --field-selector

**What would you like to be added**:

An example in `kubectl top pod --help` (and the generated kubernetes.io kubectl reference) for filtering pod metrics by node using the existing flag:

```
kubectl top pod -A --field-selector spec.nodeName=NODE_NAME
```

Optional: the same line in the kubectl che...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1874)

**Metadata:**
- Created: 2026-08-28
- Comments: 1
- State: open

### prometheus/procfs: v0.22.0

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/procfs/pull/840
* procfs: add KernelTainted() to parse /proc/sys/kernel/tainted by @arunsrini3082 in https://github.com/prometheus/procfs/pull/844
* kernel_tainted: use linux build tag instead of !windows by @arunsrini3082 in https://github.com/prometheus/procfs/pull/847
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/procfs/p...

🔗 [Link](https://github.com/prometheus/procfs/releases/tag/v0.22.0)

**Metadata:**
- Version: v0.22.0
- Published: 2026-08-28
- Prerelease: No

### envoyproxy/gateway: v1.9.1

# Release Announcement

Check out the [v1.9.1  release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.9.1) to learn more about the release.


🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.1)

**Metadata:**
- Version: v1.9.1
- Published: 2026-08-28
- Prerelease: No

### envoyproxy/gateway: v1.8.4

# Release Announcement

Check out the [v1.8.4 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.8.4) to learn more about the release.


🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.8.4)

**Metadata:**
- Version: v1.8.4
- Published: 2026-08-28
- Prerelease: No


---

*This content was automatically collected on 2026-08-29 05:34:20*
