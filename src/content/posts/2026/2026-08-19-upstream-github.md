---
title: "Upstream Github - 2026-08-19"
description: "CNCF upstream activity from github"
pubDate: 2026-08-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "kind/deprecation", "needs-triage", "kind/flake", "needs-sig", "kind/feature", "kind/bug", "area/kubelet", "sig/node", "sig/auth", "kind/failing-test", "wg/device-management", "pr", "area/test", "area/apiserver", "size/L", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-priority", "sig/scheduling", "release-note", "kind/api-change", "sig/apps", "area/code-generation", "size/XXL", "sig/instrumentation", "needs-ok-to-test", "do-not-merge/work-in-progress", "kind/cleanup", "size/M", "approved", "lgtm", "ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "priority/backlog", "size/S", "do-not-merge/cherry-pick-not-approved", "sig/release", "do-not-merge/contains-merge-commits", "area/logging", "priority/important-longterm", "wg/structured-logging", "size/XL", "kind/kep", "enhancements", "area/jobs", "area/config", "test-infra", "release", "kube-state-metrics", "cncf-cla: no", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/oci", "size/XS", "area/prow", "sig/k8s-infra", "k8s.io", "do-not-merge/hold", "area/infra", "area/dns", "area/terraform", "area/infra/gcp", "perf-tests", "prometheus", "alertmanager", "containerd", "area/cri", "area/criu", "kind/enhancement", "target/kubernetes/v1.??", "area/runtime", "overlaybd", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141439: kubelet: `dropCacheFor` does not invalidate name-keyed trust bundle cache entries when the ClusterTrustBundle has a `spec.signerName`


This surfaced during extensive CA-rotation end-to-end testing of
[pod-certificate-signer](https://github.com/RafPe/pod-certificate-signer), a
KEP-4317 PodCertificateRequest signer I maintain: an observer pod started before
a rotation never saw the new trust anchors within 300 s. The signer is not
i...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141439)

**Metadata:**
- Created: 2026-08-18
- Comments: 2
- State: open

### kubernetes/enhancements#6286: KEP-6285: Initial draft

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description: Initial draft of https://github.com/kubernetes/enhancements/issues/6285 design

<!-- link to the k/enhancements issue -->
- Issue link: https://github.com...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6286)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kube-state-metrics#3101: feat: expose PVC condition last transition time

**What this PR does / why we need it:**

Add `kube_persistentvolumeclaim_status_condition_last_transition_time` so Prometheus can query how long a PVC has been unused.

[KEP-5541](https://github.com/kubernetes/enhancements/issues/5541) adds an `Unused` condition whose `lastTransitionTime` is unu...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3101)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10157: Removing noisy log for nodes not managed by CA.

#### What type of PR is this?
Bug Fix
<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-->...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10157)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.14.0 / 2026-08-17

- [CHANGE] API: Deprecate the `stats` query parameter of `/api/v1/query` and `/api/v1/query_range` for values other than `true` and `all`. Other values still enable basic statistics but now return a deprecation warning; they will be rejected in the next major release. #19124
- [CHANGE] API: `/api/v1/status/config` now correctly shows `separator: ""` and `replacement: ""` in relabel configs when explicitly set to empty, instead of omitting them. #18653
- [CHANGE] Discovery/Hetzner: Drop the `__...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.14.0)

**Metadata:**
- Version: v3.14.0
- Published: 2026-08-18
- Prerelease: No

### containerd/containerd#13979: [SIG-Node]: KEP-5823: Pod-Level Checkpoint/Restore

### KEP/SIG-Node References

- KEP(s): KEP-5823
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/5823
- KEP PR: https://github.com/kubernetes/enhancements/pull/5851
- K8s-Release: v1.37 (target for Alpha)
- KEP-Owner: @rst0git @viktoriaas @adrianreber @andreyvelich
- SIG...

🔗 [Link](https://github.com/containerd/containerd/issues/13979)

**Metadata:**
- Created: 2026-08-18
- Comments: 0
- State: open

### containerd/containerd#13978: [SIG-Node]: KEP-4191: Separate Read and write only layers

### KEP/SIG-Node References

- KEP(s): KEP-4191
- stage: beta
- KEP Issue: https://github.com/kubernetes/enhancements/issues/4191
- KEP PR: see issue link
- K8s-Release: 1.31
- KEP-Owner: kannon92
- SIG-Node member liason: kannon92
- KEP-Shepherd: kannon92

Basically this is beta on but there is no ...

🔗 [Link](https://github.com/containerd/containerd/issues/13978)

**Metadata:**
- Created: 2026-08-18
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#141455: Deprecate /openapi/v2 Endpoint

### Summary
  We propose deprecating the `/openapi/v2` endpoint in `kube-apiserver`. OpenAPI v3 was promoted to General Availability (GA) in Kubernetes 1.27, providing a more robust, stable, and feature-rich schema format. Maintaining the legacy `/openapi/v2` endpoint incurs a significant memory cos...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141455)

**Metadata:**
- Created: 2026-08-18
- Comments: 2
- State: open

### kubernetes/kubernetes#141447: Test failure  - ec2-master-scale-performance 5k load test

### Which jobs are flaking?

Investigate why it started failing since last 3 days.

### Which tests are flaking?

aws 5k load tests - https://testgrid.k8s.io/kops-misc#ec2-master-scale-performance

### Since when has it been flaking?

3 days

### Testgrid link

https://testgrid.k8s.io/kops-misc#ec2-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141447)

**Metadata:**
- Created: 2026-08-18
- Comments: 5
- State: open

### kubernetes/kubernetes#141445: Reduce useless duplicate reading of certificate data

### What would you like to be added?

When using `kubectl __complete -n ''` I measure about 180 opened files:
```
/home/user/.kube/config
/home/user/.kube/cache/discovery/api.k8s.io2.osso.nl/v1/serverresources.json
...
```
However, if I specify my config using files `certificate-authority: path-to/c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141445)

**Metadata:**
- Created: 2026-08-18
- Comments: 2
- State: open

### kubernetes/kubernetes#141435: [Failing-test]: ci-kind-dra-1-34 times out before DRA suite can finish

<html>
<body>
<!--StartFragment--><html><head></head><body><h3>Which jobs are failing?</h3><ul><li><p><a href="https://testgrid.k8s.io/sig-node-dynamic-resource-allocation#ci-kind-dra-1-34">https://testgrid.k8s.io/sig-node-dynamic-resource-allocation#ci-kind-dra-1-34</a></p></li></ul><p>I confirmed ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141435)

**Metadata:**
- Created: 2026-08-18
- Comments: 3
- State: open

### kubernetes/kubernetes#141456: Allocator pool buffer cap at 128KB

Bound the buffer capacity retained by runtime.AllocatorPool (at 128 KB) so a burst of large protobuf responses no longer pins multi-megabyte encode buffers in memory for the life of the apiserver process (observed pinning ~49MB of heap on a k8s control plane).

* Add `runtime.PutAllocator`, which ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141456)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141454: Allocator pool buffer cap at 256 KB

Bound the buffer capacity retained by `runtime.AllocatorPool` (at 256 KB) so a burst of large protobuf responses no longer pins multi-megabyte encode buffers in memory for the life of the apiserver process (observed pinning ~49MB of heap on a k8s control plane).

* Add runtime.PutAllocator, which ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141454)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141453: Set the timeAdded of node taints at admission

#### What type of PR is this?

/kind feature
/kind api-change

/sig node
/sig scheduling

#### What this PR does / why we need it:

`Taint.TimeAdded` is only ever set by the node lifecycle controller, and only for the not-ready and unreachable taints. Taints added any other way - kubelet `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141453)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141452: test/integration: watch survives a slow reader with WatchCacheStallResume

#### What type of PR is this?

/kind feature
/sig api-machinery
/area test

#### What this PR does / why we need it

Adds an integration test for `WatchCacheStallResume` (alpha, default off): a real apiserver and etcd, a watch on configmaps whose client stops reading during a burst of 200 writes of ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141452)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141451: apiserver/cacher: stalled watchers gauge and optional cull for WatchCacheStallResume

#### What type of PR is this?

/kind feature
/sig api-machinery
/sig instrumentation

#### What this PR does / why we need it

Adds observability and an optional policy on top of `WatchCacheStallResume` (alpha, default off):

- A per Cacher sampler counts, once per second, the watchers whose result ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141451)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141450: apiserver/cacher: stall and resume watchers instead of terminating them (WatchCacheStallResume)

#### What type of PR is this?

/kind feature
/sig api-machinery
/sig instrumentation

#### What this PR does / why we need it

Today, when a watch client cannot keep up and its delivery buffer fills, the apiserver blocks the shared dispatch path for up to a shared time budget (about 100 ms accumulat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141450)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141449: apiserver/cacher: extract the interval streaming loop

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it

Extracts the loop that streams one `watchCacheInterval` into the watcher result channel out of `cacheWatcher.processInterval` into a new `streamInterval` function. No behavior change.

This is p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141449)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141448: apiserver/cacher: label terminated watchers with a reason

#### What type of PR is this?

/kind feature
/sig api-machinery
/sig instrumentation

#### What this PR does / why we need it

`apiserver_terminated_watchers_total` gets a `reason` label. The only writer today, the force close of an unresponsive watcher in `cacheWatcher.add`, records `reason="unresp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141448)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141446: kubelet/cm: add unit tests for ResourceConfig CPU and memory helpers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`CPURequestsFromConfig`, `CPULimitsFromConfig` and `MemoryLimitsFromConfig` had
no unit tests. They convert a cgroup `ResourceConfig` back into API quantities,
where "unset" and "unlimited" are different results,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141446)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141444: Make maxBatchAge configurable in tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141444)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141443: kubelet: log only volume names in podActions to fix data race

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`podActions.String()` formats `VolumesToUpsize`/`VolumesToDownsize` (`[]v1.Volume`) with `%v`. That invokes the generated `EmptyDirVolumeSource.String()`, which calls `resource.Quantity.String()` on the pod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141443)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141442: test/scheduler_perf: add dedicated benchmark suites for async scheduling

Add dedicated benchmark suites and pod templates for evaluating scheduler async API dispatching under stable conditions:
1. performance-config-async.yaml: Declarative benchmark suite with 3 workloads (20 cloggers 0 churn, 0 cloggers 0 churn, 20 cloggers 200 churn/s).
2. async_benchmarks_test.go: D...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141442)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141438: Fix duplicate ServiceAccount storage construction and add regression test

#### What type of PR is this?
/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:


Adds an unexported skipServiceAccount flag to `corerest.GenericConfig`. `legacyProvider` sets it in `New()` when a service account issuer is configured, so the generic core storage no lo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141438)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141437: client-go: use stable hashes for exec auth cache keys

The exec authenticator cache currently uses dump.Pretty to serialize its
configuration as the cache key. Pretty-printing does not sort map keys, so
equivalent configurations containing maps can produce different keys and miss
the cache.

Define the fields that participate in authenticator ident...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141437)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141436: pkg/storage/cacher: backoff on re-init instead of 1s flat rate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141436)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141432: [release-1.35] build(test): pin agnhost base image and set GOTOOLCHAIN

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
This is a manual backport of commit `2092df7cf309bb993f3e438ed9e8735506570144` from `master` to `release-1.35`.

It pins the base `golang` image digest and sets `ARG GOTOOLCHAIN=go${GOLANG_VERSION}` in `tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141432)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141431: [release-1.36] build(test): pin agnhost base image and set GOTOOLCHAIN

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
This is a backport of commit `2092df7cf309bb993f3e438ed9e8735506570144` from `master` to `release-1.36`.

It pins the base `golang` image digest and sets `ARG GOTOOLCHAIN=go${GOLANG_VERSION}` in `test/image...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141431)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141430: scheduler: added error to logUnusableState in batch.go

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141430)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141429: kubelet: propagate context through Cache and GeneratePodStatus


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add a context.Context parameter to `container.Cache.Get/GetNewerThan `and `Runtime.GeneratePodStatus,` and thread the caller's context through `kubelet`, `pod_workers`, `PLEG`, and the `kuberuntime` manag...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141429)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141428: Add nextScheduleTime to CronJob status (alpha)

#### What type of PR is this?

/kind feature
/kind api-change
/sig apps

#### What this PR does / why we need it:

Adds a `nextScheduleTime` field to `CronJobStatus` that surfaces the next time a
CronJob is scheduled to create a Job. Today users must reimplement cron parsing
(and time-zone handling)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141428)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37713: ci-kubernetes-integration-race: sync with presubmit

As tested before in the presubmit, "context deadline exceeded" errors seem to get avoided when keeping some CPUs available for situations where GOMAXPROC test binaries keep more than those CPUs busy due to internal parallelism.

See https://prow.k8s.io/pr-history/?org=kubernetes&repo=kubernetes&pr...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37713)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics: v2.20.0

## v2.20.0 / 2026-08-16

### Notes

Custom Resource State (CRS) metrics are now feature-frozen; no new CRS features will be accepted going forward. See [#3050](https://github.com/kubernetes/kube-state-metrics/pull/3050) for details.

* This release builds with Go `v1.26.6`
* This release builds with `k8s.io/client-go`: `v0.36.3`

### Changelog

* [CHANGE] `kube_pod_status_reason` now emits a row only for the reason that is actually set, instead of one zero/one row per known reason for...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/releases/tag/v2.20.0)

**Metadata:**
- Version: v2.20.0
- Published: 2026-08-18
- Prerelease: No

### kubernetes/kube-state-metrics#3100: Expose PVC condition lastTransitionTime as a metric

**What would you like to be added:**

A new gauge that exports `status.conditions[].lastTransitionTime` for PersistentVolumeClaims:

```
kube_persistentvolumeclaim_status_condition_last_transition_time
  {namespace, persistentvolumeclaim, condition, status}
  = unix seconds of lastTransitionTime
```...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3100)

**Metadata:**
- Created: 2026-08-18
- Comments: 1
- State: open

### kubernetes/autoscaler#10158: VPA: allow multiple VPAs for the same targetRef

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**: VPA

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm char...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10158)

**Metadata:**
- Created: 2026-08-18
- Comments: 1
- State: open

### kubernetes/autoscaler#10159: Run go mod download && go mod tidy

I think running `go mod download && go mod tidy` should produce no changes in the repo.

I don't know if this was an oversight.


<!-- This is an auto-generated comment: release notes by coderabbit.ai -->

## Summary by CodeRabbit

* **Chores**
  * Updated project maintenance configuration and de...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10159)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9844: Bump TestGrid API memory limit.

I want to bump this up to see if the API performance improves with more memory.

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9844)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9843: deploy the registry.k8s.io CDN in Fastly

Serving registry.k8s.io blobs via Fastly will free up about 1M USD a year that we can use towards general compute.

I have been using CloudFront to shield the traffic for the past few days, so we have an idea of how much bandwidth we serve to non GCP/AWS users. We are looking at about 27 TB on a w...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9843)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4275: Extend WaitForNodes measurement

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add TolerationTimeout which can be lower than timeout.
This allows observing the cluster status for longer period than the threshold that causes the test to fail.
Example: tolerationTimeout 10min, timeout...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4275)

**Metadata:**
- Created: 2026-08-18
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager#5456: regression in merging global notifier configs

https://github.com/prometheus/alertmanager/pull/4812 broke the merging of global configs into notifier configurations. This has been adressed for smtp notifier in https://github.com/prometheus/alertmanager/pull/5448

Similar issues also apply for opsgenie, victorops and rocketchat 


🔗 [Link](https://github.com/prometheus/alertmanager/issues/5456)

**Metadata:**
- Created: 2026-08-18
- Comments: 0
- State: open

### containerd/containerd#13977: runtime/v2: shim delete can fail before exec when the bundle directory has been removed

### Description

core/runtime/v2.(*binary).Delete() starts a shim binary for the delete action. On Linux, it currently sets the shim process cwd to the bundle path:
WorkDir: b.bundle.Path

pkg/shim/util.go then applies it directly:
cmd.Dir = config.WorkDir

If a create failure/timeout rollback remov...

🔗 [Link](https://github.com/containerd/containerd/issues/13977)

**Metadata:**
- Created: 2026-08-18
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Commits
- 9a22ac5: add assets/logos/flatcar.svg (#445) (Huiba Li) [#445](https://github.com/containerd/overlaybd/pull/445)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-18
- Prerelease: Yes

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump github.com/cilium/ebpf from 0.16.0 to 0.22.0 [#392](https://github.com/containerd/accelerated-container-image/pull/392) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/7266ccbfc567742efc565558871ba99d64b56c7d))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-18
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-19 01:05:30*
