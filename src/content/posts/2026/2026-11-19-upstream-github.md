---
title: "Upstream Github - 2026-11-19"
description: "CNCF upstream activity from github"
pubDate: 2026-11-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/node", "sig/apps", "sig/api-machinery", "kind/feature", "priority/important-soon", "help wanted", "kind/failing-test", "triage/accepted", "pr", "area/kubelet", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "sig/scheduling", "size/XL", "sig/testing", "area/kubectl", "size/M", "sig/cli", "area/apiserver", "size/S", "sig/auth", "size/XXL", "do-not-merge/work-in-progress", "lgtm", "sig/storage", "approved", "do-not-merge/cherry-pick-not-approved", "kind/cleanup", "release-note-none", "sig/architecture", "area/conformance", "sig/windows", "size/XS", "kind/flake", "priority/important-longterm", "ok-to-test", "wg/device-management", "kind/api-change", "area/code-generation", "sig/cluster-lifecycle", "area/kubeadm", "kind/kep", "wg/workload-aware-scheduling", "enhancements", "kube-state-metrics", "committee/steering", "do-not-merge/hold", "community", "sig/release", "area/release-eng", "release", "cncf-cla: no", "do-not-merge/release-note-label-needed", "ingress-gce", "prometheus", "node_exporter", "envoyproxy", "gateway", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/enhancements#6521: KEP-6089: Sync KEP with the codebase after code freeze

- One-line PR description: Sync KEP with the codebase after code freeze
- Issue link: #6089 

- Other comments:

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6521)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144327: apiserver cache logs incorrect object when watch Delete event contains unprocessable PrevObject

### What happened?

When cacher attempts to wrap a deleted resource as `newCachingObject(event.PrevObject)` and fails, the failure path calls `klog.Errorf("couldn't create cachingObject from: %#v", event.Object)` instead of `klog.Errorf("couldn't create cachingObject from: %#v", event.PrevObject)`, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144327)

**Metadata:**
- Created: 2026-11-19
- Comments: 2
- State: open

### kubernetes/kubernetes#144324: Topology manager: `container_aligned_compute_resources_count` grows on every retry of a deferred pod update

### What happened?

Follow-up to #143400, reported in [this review comment](https://github.com/kubernetes/kubernetes/pull/143400#discussion_r4620405184).

The topology manager counts `container_aligned_compute_resources_count{boundary="numa_node"}` inside `Admit`. For a pod update (`UpdateOperation`...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144324)

**Metadata:**
- Created: 2026-11-19
- Comments: 2
- State: open

### kubernetes/kubernetes#144322: StatefulSet controller doesn't deletes unavailable metric series causing the KCM memory to leak

### What happened?

The StatefulSet controller reports two gauges with one series per StatefulSet:

- `statefulset_controller_statefulset_max_unavailable{statefulset_namespace, statefulset_name, pod_management_policy}`
- `statefulset_controller_statefulset_unavailable_replicas{statefulset_namespace,...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144322)

**Metadata:**
- Created: 2026-11-18
- Comments: 2
- State: open

### kubernetes/kubernetes#144320: `apiserver_storage_decode_errors_total` tracks both CRD conversion and data corruption failures

### What would you like to be added?

The initial intent of the [`apiserver_storage_decode_errors_total`](https://github.com/kubernetes/kubernetes/blob/a6cfaea25883475e9bf01970a3866e9c292ad47e/staging/src/k8s.io/apiserver/pkg/storage/etcd3/metrics/metrics.go#L147-L155) ([PR](https://github.com/kuber...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144320)

**Metadata:**
- Created: 2026-11-18
- Comments: 2
- State: open

### kubernetes/kubernetes#144319: [Failing Test] pull-kubernetes-node-kubelet-inplace-pod-level-resources-resize times out and selects tests that require DynamicContainers

### Which jobs are failing?

`pull-kubernetes-node-kubelet-inplace-pod-level-resources-resize`, an optional SIG Node presubmit. [TestGrid](https://testgrid.k8s.io/sig-node-presubmits#pr-kubelet-e2e-podlevelresources-resize)

### Which tests are failing?

On November 18, all 127 `PLR Pod InPlace Resi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144319)

**Metadata:**
- Created: 2026-11-18
- Comments: 6
- State: open

### kubernetes/kubernetes#144309: Workqueue clients are too hard to test

Writing a unit test of a Kubernetes controller is very hard. In Go, one contributing factor is the fact that the test func can not reliably tell when the controller has processed everything in its work queue(s). The problem is that the `Get` method of the queue affords no synchronization with the ov...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144309)

**Metadata:**
- Created: 2026-11-18
- Comments: 2
- State: open

### kubernetes/kubernetes#144326: kubelet: share pod memory only among containers that run together

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

For a Burstable pod with pod-level memory requests, the kubelet gives each container an OOM score built from its own memory request plus a share of the part of the pod request that no container asked for. K...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144326)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144325: scheduler: validate that a plugin's required extension points are enabled together

/kind feature
/sig scheduling

#### What this PR does / why we need it:

Some scheduler plugins depend on multiple extension points being enabled as a
group. For example, a plugin that acquires a node-scoped lock in `PreBind` and
releases it only in `PostBind` (bind succeeded) or `Unreserve` (bind f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144325)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144323: Delete StatefulSet controller metrics when a StatefulSet is deleted



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144323)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144321: kubectl: handle whitespace in unquoted editor commands

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

kubectl incorrectly parses unquoted editor commands containing repeated spaces or tabs.

For example, `KUBE_EDITOR="code  --wait"` produces an extra empty argument. A tab between the executable and its argum...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144321)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144318: kubectl: recognize locales without an explicit codeset

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

kubectl falls back to English for locales without an explicit codeset, such as `LANG=fr_FR`, even when translations are available. The same locale works with `LANG=fr_FR.UTF-8`.

This change supports locale ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144318)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144317: authorizer: include selectors in webhook cache size guard

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

The webhook authorizer bounds requester-controlled attributes before caching authorization responses, but `shouldCache` did not include field or label selectors in that cal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144317)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144316: Lazypod v1

/kind feature

```release-note
Implement lazy deserialization for Pod object reducing allocations
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144316)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144314: Automated cherry pick of #144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

Cherry pick of #144257 on release-1.35.

#144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144314)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144313: Automated cherry pick of #144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

Cherry pick of #144257 on release-1.36.

#144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144313)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144312: Automated cherry pick of #144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

Cherry pick of #144257 on release-1.37.

#144257: Fix code that can cause crash for KCM and kubelet for vsphere volumes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144312)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144311: Make the conformance skip check work again

#### What type of PR is this?

/kind cleanup
/sig architecture
/area conformance

#### What this PR does / why we need it:

`hack/verify-conformance-requirements.sh` looks for test bodies written as `func() {`. Bodies have taken a context since 2022, so it has checked 1 of 462 conformance tests. Thi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144311)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144310: Automated cherry pick of #142883: InPlacePodLevelResourcesVerticalScaling: don't read pod cgroups for pod status on Windows

Cherry pick of #142883 on release-1.36.

#142883: InPlacePodLevelResourcesVerticalScaling: don't read pod cgroups for pod status on Windows

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

####...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144310)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144308: Automated cherry pick of #142883: InPlacePodLevelResourcesVerticalScaling: don't read pod cgroups for pod status on Windows

Cherry pick of #142883 on release-1.37.

#142883: InPlacePodLevelResourcesVerticalScaling: don't read pod cgroups for pod status on Windows

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

####...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144308)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144306: e2e_node: wait for podresources API before the /metrics test

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The BeforeEach of `when querying /metrics` in `test/e2e_node/podresources_test.go` calls `List()` once, with no wait. In the serial node jobs, the spec before it is sometimes a device plugin test whose `AfterEach` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144306)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144305: kubelet: preserve container exit status during pod eviction

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Kubelet can report `ContainerStatusUnknown` with exit code 137 for an evicted container that actually exited 0. In a failing containerd run, PLEG observed the clean exit and the container-death handler requ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144305)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144299: scheduler_perf: add DRA scoring benchmark with partitionable devices

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg device-management

#### What this PR does / why we need it:

Adds a `PartitionableDeviceScoring` testcase to the DRA extended-resource scoring performance suite, addressing the benchmark coverage gap identified in #144279 during the in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144299)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144295: Fix scheduler overhead deferred resize


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144295)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144294: kubeadm: keep the wrapped error in the util/errors wrappers

#### What type of PR is this?

/kind bug
/area kubeadm
/sig cluster-lifecycle

#### What this PR does / why we need it:

`cmd/kubeadm/app/util/errors` has five constructors that annotate an error. Two keep the error they are given, three lose it:

| constructor | `errors.Is` finds the wrapped error ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144294)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144292: e2e: give tcp:8080 liveness probe a 5s timeout

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144292)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144291: scheduler: avoid spawning unused default MetricAsyncRecorder in NewFramework

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

`frameworkruntime.NewFramework` previously called `defaultFrameworkOptions(ctx.Done())` before applying `opts`. `defaultFrameworkOptions` eagerly allocated a `metrics.NewMetricsAsyncRecorder(1000, tim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144291)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3213: Refresh GOMEMLIMIT when the container memory limit changes at runtime

**What would you like to be added:**

An opt-in interval at which `--auto-gomemlimit` re-detects the container memory limit and updates GOMEMLIMIT, for example `--auto-gomemlimit-refresh-interval`.

**Why is this needed:**

`--auto-gomemlimit` reads the limit once at startup (`pkg/app/server.go`). W...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3213)

**Metadata:**
- Created: 2026-11-18
- Comments: 1
- State: open

### kubernetes/community#9268: wg-governance: clarify approval authority and solicited +1s

Clarifies that WG creation PRs are approved by the sponsoring SIG Chairs/TLs and the Steering Committee per `sig-wg-lifecycle.md`, and that solicited `+1` or supporting comments carry no weight in the approval decision and are discouraged.

**Which issue(s) this PR fixes**:
None


🔗 [Link](https://github.com/kubernetes/community/pull/9268)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4637: Update release builders to Go 1.27.4/1.26.11 and drop 1.34

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/release/pull/4637)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4636: Generate openVEX documents for images and binaries at stage

/kind feature
/hold

#### What this PR does / why we need it:

This PR handles the first subtask in #4603. It generates OpenVEX at stage with govulncheck in source mode at the release tag, per binary: the image digests (pkg:oci purls) and binary hashes as products, the vulnerable Go modules (pkg:gol...

🔗 [Link](https://github.com/kubernetes/release/pull/4636)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/ingress-gce#3330: Standalone L4 NEG refactor

The Standalone L4 NEG controller was getting too large and convoluted. This PR moves the controller to a separate package and splits it into separate files split by function.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3330)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### prometheus/node_exporter: 1.13.0 / 2026-11-19

NOTE:

The behavior of `node_cpu_frequency_hertz` has changed. There are two different sources
of data for this metric. One from the `cpu` collector, one from the `cpufreq` collector.
Due to historical feature migrations the `cpufreq` collector shares the same subsystem
as the `cpu` collector. This caused conflicting data behavior. An attempt to fix this
was introduced in #3318. This behavior has been reverted to the previous behavior in #3795.

A new flag (`--collector.cpufreq.enable-cp...

🔗 [Link](https://github.com/prometheus/node_exporter/releases/tag/v1.13.0)

**Metadata:**
- Version: v1.13.0
- Published: 2026-11-18
- Prerelease: No

### envoyproxy/gateway#10654: Backend FQDN with trailing dot passes admission but fails IR validation

Description:
A Backend hostname ending in a dot passes CRD admission and reports Accepted=True, but Envoy Gateway rejects it during IR validation and skips publishing the updated configuration.

Expected: accept the absolute DNS hostname and preserve its trailing dot in the address sent to Envoy.

R...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10654)

**Metadata:**
- Created: 2026-11-18
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Bug Fixes
- read incompressible 64KiB ZFile blocks [#484](https://github.com/containerd/overlaybd/pull/484) ([Yifan Yuan](https://github.com/containerd/overlaybd/commit/8096d170474d6e88f5a01f2add022ffa00683720))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-18
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-19 05:52:28*
