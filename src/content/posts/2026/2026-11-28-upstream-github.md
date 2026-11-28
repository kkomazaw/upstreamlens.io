---
title: "Upstream Github - 2026-11-28"
description: "CNCF upstream activity from github"
pubDate: 2026-11-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "kind/cleanup", "size/L", "release-note-none", "sig/apps", "cncf-cla: yes", "sig/instrumentation", "needs-ok-to-test", "needs-priority", "needs-triage", "kind/bug", "area/kubelet", "sig/node", "release-note", "size/S", "do-not-merge/cherry-pick-not-approved", "sig/network", "kind/feature", "cncf-cla: no", "kind/documentation", "sig/scheduling", "size/XS", "wg/workload-aware-scheduling", "size/M", "ok-to-test", "triage/accepted", "do-not-merge/needs-kind", "area/stable-metrics", "area/test", "area/apiserver", "sig/api-machinery", "size/XL", "sig/testing", "sig/auth", "sig/release", "sig/architecture", "do-not-merge/hold", "sig/etcd", "wg/device-management", "sig/cli", "release", "git-sync", "issue", "area/vertical-pod-autoscaler", "autoscaler", "approved", "kind/flake", "kube-state-metrics", "area/localization", "website", "language/en", "size/XXL", "lgtm", "sig/docs", "language/ko", "language/ja", "language/zh", "language/fr", "language/es", "area/blog", "language/pl", "language/uk", "area/release-eng", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#144513: Add unit test for CronJob job creation skew metric

#### What type of PR is this?

/kind cleanup
/sig apps
/sig instrumentation

#### What this PR does / why we need it:

Adds TestControllerV2JobCreationSkewMetric to cover the STABLE metric
`cronjob_controller_job_creation_skew_duration_seconds`, which had no
behavioral test.

The test sets the creat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144513)

**Metadata:**
- Created: 2026-11-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144512: Add unit tests for Job controller sync metrics

#### What type of PR is this?

/kind cleanup
/sig apps
/sig instrumentation

#### What this PR does / why we need it:

Adds TestJobSyncMetrics to cover the STABLE metrics
`job_controller_job_syncs_total` and `job_controller_job_sync_duration_seconds`,
which had no behavioral tests.

The table-driven...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144512)

**Metadata:**
- Created: 2026-11-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144511: Fix ReplicaSet deletion age ratio calculation

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This PR fixes the deletion age ratio calculation in the ReplicaSet controller.

Previously, the ratio calculation performed integer division on millisecond durations before converting the result to `float64`. This ca...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144511)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144510: [release-1.35] Manual cherry pick of #141100: kubelet: fix wrong variable in container memory resize validation

Cherry pick of #141100 on release-1.35.

#141100: kubelet: fix wrong variable in container memory resize validation

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144510)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144509: Automated cherry pick of #141100: kubelet: fix wrong variable in container memory resize validation

Cherry pick of #141100 on release-1.36.

#141100: kubelet: fix wrong variable in container memory resize validation

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144509)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144508: Automated cherry pick of #141100: kubelet: fix wrong variable in container memory resize validation

Cherry pick of #141100 on release-1.37.

#141100: kubelet: fix wrong variable in container memory resize validation

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144508)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144506: Reduce repeated kubelet warnings about the DNS nameserver limit

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it
Previously, each Pod that inherited too many nameservers triggered both a kubelet log entry and a `DNSConfigForming` event, even when the Pod added no nameservers of its own.

When the final list exceeds three names...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144506)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144505: workloadbuilder: document ratcheting validation on updates

#### What type of PR is this?

/kind documentation
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

Documents the ratcheting validation pattern in `workloadbuilder` package and `Builder.Validate` Go doc comments: when none of the inputs to `Validate` change on...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144505)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144504: kubelet: add metric for dropped PLEG relist requests

What this PR does / why we need it:

This PR introduces a new ALPHA kubelet metric, kubelet_pleg_relist_requests_dropped_total, to track on-demand Pod relist requests dropped when the Generic PLEG relist request queue is full.

Currently, when the bounded relist request queue is full, Generic PL...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144504)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144503: Fix double allocation of Service ClusterIP and NodePort

#### What type of PR is this?

/kind bug
/sig network
/sig api-machinery

#### What this PR does / why we need it:

A Service allocates its ClusterIPs and NodePorts in the `BeginCreate` and `BeginUpdate` hooks of the generic registry. The hook returns a finish function, and the registry call...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144503)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144502: Bump DefaultKubeBinaryVersion to 1.39

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This starts the 1.39 development cycle.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

Tests which make assumptions about which feature gates are enabled ha...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144502)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144501: apimachinery: skip diff of unchanged lists whose items lack the merge key

/kind bug
/sig cli
/sig api-machinery

#### What this PR does / why we need it:
`CreateTwoWayMergePatch` returns `map: map[] does not contain declared merge key: name` when a merging list holds an item without the merge key (e.g. `imagePullSecrets: [{}]`), even if the list is identical in original a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144501)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/git-sync: v4.8.1

## What's Changed
* Fix typos in README.md, main.go and pkg/hook/hook.go by @Jah-yee in https://github.com/kubernetes/git-sync/pull/1010


## New Contributors
* @Jah-yee made their first contribution in https://github.com/kubernetes/git-sync/pull/1010

**Full Changelog**: https://github.com/kubernetes/git-sync/compare/v4.8.0...v4.8.1

Available at: registry.k8s.io/git-sync/git-sync:v4.8.1

🔗 [Link](https://github.com/kubernetes/git-sync/releases/tag/v4.8.1)

**Metadata:**
- Version: v4.8.1
- Published: 2026-11-27
- Prerelease: No

### kubernetes/autoscaler#10744: VPA updater crashes with "concurrent map read and map write" while decoding a watch event

One of our two AKS-managed `vpa-updater` replicas exited with code 2 while decoding a Kubernetes watch event. The other replica had been OOM-killed about three minutes earlier.

The replica that exited with code 2 logged this error.

```text
fatal error: concurrent map read and map write
```

The re...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10744)

**Metadata:**
- Created: 2026-11-27
- Comments: 1
- State: open

### kubernetes/autoscaler#10743: [VPA] Interleave the Go benchmarks

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

This is an attempt to deflake the test by interleaving the runs, hopefully allowing for noisy neighbour problems to be spread across both base and PR tests.

I don't know if this will actually work, but, the failin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10743)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3226: perf: render the initial sync on all CPUs

**What this PR does / why we need it:**

The reflector hands every object of an initial sync to the store from a single goroutine: to `Transformer` during a WatchList, to `Replace` after a List. Both rendered each object inline, so syncing a large resource (e.g. pods) used one CPU while the others i...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3226)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3225: perf: buffer and pool the metrics response writers

**What this PR does / why we need it:**

Every scrape allocated a new `compress/gzip` writer (~1 MB of state) and wrote each object's families to the response writer one at a time. Without gzip, net/http's small response buffer turned that into a syscall every few KB. With gzip, compression ran on t...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3225)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3224: perf: render default labels once per family

**What this PR does / why we need it:**

Every `wrap*Func` merged the object's identifying labels (namespace, name, uid, ...) into each metric of a family via `mergeKeyValues`. That allocated new key and value slices per metric, and the values were escaped again for every sample on every watch event...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3224)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59343: [ja] Translate content/en/docs/reference/kubectl/introduction.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate docs/reference/kubectl/introduction.md into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**
 
- File to translate:
    - https://github.com/kubernetes/website/blob/main/conten...

🔗 [Link](https://github.com/kubernetes/website/issues/59343)

**Metadata:**
- Created: 2026-11-27
- Comments: 1
- State: open

### kubernetes/website#59333: API server rejects in-place Pod resize requests that exceed node allocatable resources

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The documentation c...

🔗 [Link](https://github.com/kubernetes/website/issues/59333)

**Metadata:**
- Created: 2026-11-27
- Comments: 2
- State: open

### kubernetes/website#59342: Merged main branch to dev-1.38 branch

Description
Weekly branch sync PR: merges main into dev-1.38

cc: @ChieloChi @yashasvimisra2798 @Caesarsage @whtssub

🔗 [Link](https://github.com/kubernetes/website/pull/59342)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Bug Fixes
- **tar**: skip base_offset on whole-file fallocate [#490](https://github.com/containerd/overlaybd/pull/490) ([huangzhaoxiang.hzx](https://github.com/containerd/overlaybd/commit/b36e5340a79255a327a0e74979c1d637e102639a))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-27
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-28 06:14:07*
