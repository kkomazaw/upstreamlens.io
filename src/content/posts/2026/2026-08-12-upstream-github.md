---
title: "Upstream Github - 2026-08-12"
description: "CNCF upstream activity from github"
pubDate: 2026-08-12
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "kops", "pr", "cncf-cla: yes", "size/M", "approved", "needs-triage", "kube-state-metrics", "size/L", "sig/node", "wg/device-management", "area/apiserver", "sig/api-machinery", "sig/apps", "kind/flake", "needs-sig", "area/kubelet", "release-note", "do-not-merge/work-in-progress", "needs-priority", "area/test", "size/XL", "sig/instrumentation", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "release-note-none", "size/XXL", "kind/cleanup", "size/S", "needs-ok-to-test", "sig/scheduling", "kind/api-change", "kind/feature", "area/code-generation", "size/XS", "sig/auth", "kind/failing-test", "sig/storage", "area/config", "ok-to-test", "test-infra", "lgtm", "area/jobs", "sig/etcd", "language/en", "website", "tide/merge-method-squash", "area/cluster-autoscaler", "area/provider/azure", "sig/autoscaling", "priority/important-longterm", "autoscaler", "do-not-merge/needs-area", "area/vertical-pod-autoscaler", "ingress-gce", "prometheus", "release"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56933: Update for deprecation of kube-dns

Part of https://github.com/kubernetes/kubernetes/issues/137556. Not strongly tied to 1.37; could merge either before or after.

There are still many instances of the string `kube-dns` in the docs, mostly because [the default CoreDNS install is still called "kube-dns" for backward compatibility](ht...

🔗 [Link](https://github.com/kubernetes/website/pull/56933)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10128: VPA updater: ignore inconsistent recommendations

#### What type of PR is this?

/kind bug

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
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10128)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: Yes

### prometheus/prometheus: 3.14.0-rc.0 / 2026-08-06

- [CHANGE] API: Deprecate the `stats` query parameter of `/api/v1/query` and `/api/v1/query_range` for values other than `true` and `all`. Other values still enable basic statistics but now return a deprecation warning; they will be rejected in the next major release. #19124
- [CHANGE] API: `/api/v1/status/config` now correctly shows `separator: ""` and `replacement: ""` in relabel configs when explicitly set to empty, instead of omitting them. #18653
- [CHANGE] Discovery/Hetzner: Drop the `__...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.14.0-rc.0)

**Metadata:**
- Version: v3.14.0-rc.0
- Published: 2026-08-11
- Prerelease: Yes

## Updates

### kubernetes/kops#18680: kops 1.36.2: update cluster wants to create a new kubernetes-ca Keypair and blanks ConfigServer.CACertificates in nodeup config

/kind bug

**1. What `kops` version are you running?**

```
Client version: 1.36.2
```

Compared against `1.36.1` (same cluster, same state store) as a control — see below.

**2. What Kubernetes version are you running?**

`1.36.3` (unchanged; this report is only about the kOps CLI version).

**3. W...

🔗 [Link](https://github.com/kubernetes/kops/issues/18680)

**Metadata:**
- Created: 2026-08-11
- Comments: 0
- State: open

### kubernetes/kube-state-metrics#3087: fix(options): validate the options before starting

`main` calls `Validate` after `Parse` returns:

```go
if err := opts.Parse(); err != nil {
	klog.FlushAndExit(klog.ExitFlushTimeout, 1)
}
if err := opts.Validate(); err != nil {      // <- unreachable
	klog.ErrorS(err, "Validating options error")
	klog.FlushAndExit(klog.ExitFlushTimeout, 1)
}
```

`...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3087)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3086: fix(options): index the allowlist value by rune, not by byte

`LabelsAllowList.Set` scans the flag value with `range`, which yields **byte**
offsets, and then uses those offsets to index `[]rune(value)`:

```go
for i, v := range value {
	if i+1 == len(value) {
		next = EOF
	} else {
		next = []rune(value)[i+1]      // <- byte offset into a rune slice
	}
	if i-...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3086)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3085: fix(watch): make --object-limit bound the total, not the page

`List` sets the limit as a request page size and truncates the page it gets
back, but leaves the response's continue token alone:

```go
if i.limit > 0 {
	options.Limit = i.limit
	...
}
res, err := i.lw.List(options)
...
if int64(len(list)) > i.limit {
	meta.SetList(res, list[0:i.limit])       // <-...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3085)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3084: fix(hpa): guard the spec metric source the way the status one is

#3071 added nil guards to `createHPAStatusTargetMetric` because
`status.currentMetrics` is not validated. `createHPASpecTargetMetric`, ten
lines above it in the same file, still dereferences unconditionally:

```go
switch m.Type {
case autoscaling.ObjectMetricSourceType:
	metricName = m.Object.Metri...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3084)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3083: fix(deployment): do not panic on an unset rollingUpdate value

Both rolling-update generators guard the outer pointers and then re-raise any
error from the conversion as a panic:

```go
if d.Spec.Strategy.RollingUpdate == nil || d.Spec.Replicas == nil {
	return &metric.Family{}
}

maxUnavailable, err := intstr.GetScaledValueFromIntOrPercent(
	d.Spec.Strategy.Ro...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3083)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141323: DRA structured allocator overflows the native-int device-count sum in the per-claim limit check

### What happened

The structured allocator adds device counts in native `int` before comparing to `resourceapi.AllocationResultsMaxSize`. `allocateOne` forms `len(results) + requestData.numDevices - r.deviceIndex`, and the pre-flight `Allocate` loop accumulates `minDevicesPerClaim += numDevices`. `...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141323)

**Metadata:**
- Created: 2026-08-11
- Comments: 1
- State: open

### kubernetes/kubernetes#141318: kube-aggregator: HTTP/2 health check for aggregated apiserver backends is too slow (broken connections pinned ~45s)

### What happened?

Kube-aggregator proxies requests to apiservers over pooled HTTP/2 connections. That transport is built by inheriting the default connection health check params which are

- ReadIdleTimeout = 30s (send a health-check ping only after 30s of no frames)
- PingTimeout = 15s (wait 15s ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141318)

**Metadata:**
- Created: 2026-08-11
- Comments: 3
- State: open

### kubernetes/kubernetes#141317: CronJob controller emits FailedDelete warning when job is already deleted

### What happened?

The CronJob controller emits a `Warning` event with reason `FailedDelete` and logs an error whenever deleting a job fails, including when the failure is `NotFound` or in other words when the job is already gone, which is the desired state.

### What did you expect to happen?

A `...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141317)

**Metadata:**
- Created: 2026-08-11
- Comments: 2
- State: open

### kubernetes/kubernetes#141316: Who should set the `DisruptionTarget` condition for pods that must be deleted outside the eviction API?

The `DisruptionTarget` [condition](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-conditions) is not set when a pod is deleted by a raw delete call, only by mechanisms such as the eviction API. Some controllers need to delete pods while enforcing a hard node terminati...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141316)

**Metadata:**
- Created: 2026-08-11
- Comments: 3
- State: open

### kubernetes/kubernetes#141315: Potential goroutine leak in k8s.io/client-go/tools/cache

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/141296/pull-kubernetes-unit/2087047689320534016

### Which tests are flaking?

[sig-api-machinery] k8s.io/client-go/tools: cache

### Since when has it been flaking?

Noticed single failure in this specific run ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141315)

**Metadata:**
- Created: 2026-08-11
- Comments: 2
- State: open

### kubernetes/kubernetes#141310: APIserver: track API LIST request path microbenchmarks

This issue tracks microbenchmarks that cover the API LIST request path

## Benchmarks

| Stage                  | Benchmark                                         | Test flow                                                                                                                             ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141310)

**Metadata:**
- Created: 2026-08-11
- Comments: 2
- State: open

### kubernetes/kubernetes#141327: kubelet: saturate the CPU limit conversions on overflow

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`MilliCPUToQuota` and `MilliCPUToShares` on Linux, and `calculateCPUMaximum` on Windows, turn a container's CPU limit or request into a CFS quota, shares, or a Windows CPU maximum with an unchecked int64 mu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141327)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141326: [WIP] testing metrics

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141326)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141325: kubelet: close resize race in sync pod

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141325)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141322: WIP: test watcher scalability

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141322)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141321: Fix typos in client-go cache comments and tests

#### What type of PR is this?

  /kind cleanup

  #### What this PR does / why we need it:

  Corrects typographical errors in client-go cache comments and test variable names.

  #### Which issue(s) this PR is related to:

  N/A

  #### Special notes for your reviewer:

  Tests:
  - ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141321)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141320: kube-aggregator: detect broken backend HTTP/2 connections faster

Add optional per-transport HTTP/2 health check timeouts to client-go transport.Config and set them (5s) on the aggregator proxy so dead backend connections are dropped in ~10s instead of ~45s.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141320)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141319: CronJob controller: skip FailedDelete event when job is already deleted

#### What type of PR is this?

/kind bug
/sig apps

#### What this PR does / why we need it:

When enforcing the history limits or replacing a job under the Replace concurrency policy, the job may already have been deleted: most often by a previous sync whose deletion is not yet reflected in ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141319)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141314: Expose PlacementFeasible as an extension point

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141314)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141313: test: increase integration API server startup timeout

#### What type of PR is this?
/kind failing-test
/sig auth


#### What this PR does / why we need it:
polling loop currently has a hard coded max duration of 10s so in the failing s390x integration runs, the helper does not observe all readiness conditions within that 10s. It returns `context ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141313)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141312: Fix nil pointer dereference in syncVolume claim cache conversion

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

`syncVolume` panics instead of returning an error when the claim cache holds an object that is not a `*v1.PersistentVolumeClaim`:

```go
claim, ok = obj.(*v1.PersistentVolumeClaim)
if !ok {
    return fm...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141312)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141311: Fix taint eviction pod deletion latency metric unit

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

`taint_eviction_controller_pod_deletion_duration_seconds` has never produced a usable value.

The handler observes:

```go
metrics.PodDeletionsLatency.Observe(float64(time.Since(fireAt) * time.Second)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141311)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141309: cacher/cleaup: fold stale cacher GetList benchmark into StoreList

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`BenchmarkCacher_GetList` is stale because its local fake storage no longer matches the cacher startup path. It embeds a nil `storage.Interface` and misses methods now called during cacher initialization, s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141309)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141308: fix incorrect variable reference in TestApplyToFallback

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141308)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141307: DRA: avoid integer overflow in per-claim device-limit checks

**What type of PR is this?**

/kind bug
/sig node
/wg device-management

**What this PR does / why we need it**:

The structured allocator enforces the per-claim device limit (`AllocationResultsMaxSize`) in two places, and both computed a device total with unchecked `int` arithmetic:

- the pre-flig...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141307)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141306: resource: avoid a large big.Int when parsing sub-nano quantities

**What type of PR is this?**

/kind cleanup
/sig api-machinery

**What this PR does / why we need it**:

When `ParseQuantity` reaches a non-zero value that is smaller than the smallest unit it can represent, it rounds up to `1n`. The existing comment explains why:

> This rounds non-zero values up t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141306)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37664: Unprotect gh-pages branch for aws-fsx-openzfs-csi-driver

The gh-pages branch only receives automated index.yaml commits from the chart-releaser bot, which cannot satisfy the required EasyCLA status check. This matches the existing configuration of aws-ebs-csi-driver, aws-efs-csi-driver, and aws-fsx-csi-driver.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37664)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37659: run full e2e etcd test suite

Enable the full e2e suite for presubmits, as it's about 5 minutes longer than the shortened suite we run in PRs.

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/pr-logs/directory/pull-etcd-e2e-amd64
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-etcd-e2e-amd64

/cc @serath...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37659)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56930: It seems that the descriptions concerning Kubernets API is wrong between overview and glossary

**This is a Bug Report**
Probably, the description concerning Kubernetes API is wrong on `content/ja/docs/reference/glossary/kubernetes-api.md`.
<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for...

🔗 [Link](https://github.com/kubernetes/website/issues/56930)

**Metadata:**
- Created: 2026-08-11
- Comments: 3
- State: open

### kubernetes/autoscaler#10132: getTargetSizes: one node group's TargetSize() error halts scale-up/down for all node groups

**Which component are you using?**: `cluster-autoscaler`

/area cluster-autoscaler
/area provider/azure

**What version of the component are you using?**: verified on `cluster-autoscaler-release-1.30` through `-1.36`; code is byte-identical across all branches. Permalinks below pin to `cluster-autos...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10132)

**Metadata:**
- Created: 2026-08-11
- Comments: 1
- State: open

### kubernetes/autoscaler#10131: --enable-csi-node-aware-scheduling blocks scale-up from zero

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**: /area cluster-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add on...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10131)

**Metadata:**
- Created: 2026-08-11
- Comments: 4
- State: open

### kubernetes/autoscaler#10130: addon-resizer: add CPU requests-only mode

## What this PR does

This PR adds a new `--cpu-requests-only` flag to addon-resizer (pod-nanny).

The flag allows addon-resizer to dynamically manage CPU requests while leaving CPU limits unmanaged.

When enabled:

* CPU requests are calculated and reconciled by addon-resizer.
* Existing C...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10130)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10129: Add github action to run go benchmarks for VPA

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add github action to run go benchmarks for VPA
This will also fail if the PR introduces a change that slows existing benchmarks by 10%

#### Which issue(s) this PR fixes:
<!--
*Automatically closes lin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10129)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3195: Bump Go to 1.26.5 to fix container vulnerabilities

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3195)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-12 01:43:01*
