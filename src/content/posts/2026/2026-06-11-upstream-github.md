---
title: "Upstream Github - 2026-06-11"
description: "CNCF upstream activity from github"
pubDate: 2026-06-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "sig/network", "sig/windows", "kind/failing-test", "needs-triage", "sig/api-machinery", "kind/feature", "kind/bug", "sig/node", "pr", "area/kubelet", "size/XS", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "size/S", "kind/flake", "sig/testing", "kind/cleanup", "sig/scheduling", "area/apiserver", "area/cloudprovider", "area/provider/gcp", "sig/auth", "sig/cloud-provider", "area/dependency", "wg/device-management", "area/kube-proxy", "lgtm", "sig/apps", "ok-to-test", "release-note", "size/L", "do-not-merge/work-in-progress", "size/M", "cncf-cla: no", "kind/regression", "size/XXL", "priority/important-longterm", "triage/accepted", "approved", "do-not-merge/cherry-pick-not-approved", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/azure", "size/XL", "area/provider/gce", "kube-state-metrics", "kind/kep", "enhancements", "perf-tests", "cloud-provider-openstack", "envoyproxy", "envoy", "containerd", "nerdctl", "area/cri", "impact/changelog"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139632: KEP-4222: Support CBOR encoding for non-resource endpoints.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139632)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9791: Add Z4D machine family pricing to GCE cloud provider

#### What type of PR is this?
/kind feature
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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9791)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9788: Enforce CapacityQuota only if it has a Valid condition

#### What type of PR is this?

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
-->
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9788)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9786: RFC: integrate extender-managed resources

- Register extender-managed resources as custom GPU vendor resource names at startup
- Add `Extenders` field to `framework.Handle` and create HTTP extenders from scheduler config
- Pass extenders to `SchedulerPluginRunner` and filter nodes via `runExtenderFilters`
- Refactor `RunFiltersUntilPassi...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9786)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#2994: chore: add release v2.19.1

v2.19.1 patch release

Cherry-picks the following fixes onto `release-2.19`:
- #2982  [SECURITY] Upgrade Go toolchain to 1.26.4 (CVE-2026-42504 / GO-2026-5038)
- #2981 [SECURITY] Bump `golang.org/x/net`, `oauth2`, `sys`, `term`, `text` for
  high-scoring CVEs 
- #2974 [BUGFIX] Fix watch-list b...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/2994)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6188: KEP-2371: Update BETA milestone

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6188)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13572: [SIG-Node]: 5758 - Per-container ulimits configuration

### KEP/SIG-Node References

- KEP(s): KEP-5758 - Per-container ulimits configuration
	- https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/5758-per-container-ulimits-configuration
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/5758
- KEP PR: 
  - htt...

🔗 [Link](https://github.com/containerd/containerd/issues/13572)

**Metadata:**
- Created: 2026-06-10
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes: v1.37.0-alpha.1


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-alpha.1)

**Metadata:**
- Version: v1.37.0-alpha.1
- Published: 2026-06-11
- Prerelease: Yes

### kubernetes/kubernetes#139635: TestClassifyLBError fails for nil error

### Which jobs are failing?

Unit tests on Windows

### Which tests are failing?

TestClassifyLBError/nil_error_returns_other

```
[sig-network] k8s.io/kubernetes/pkg/proxy: winkernel expand_less	0s
{Failed  === RUN   TestClassifyLBError/nil_error_returns_other
    proxier_test.go:2730: 
        	Er...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139635)

**Metadata:**
- Created: 2026-06-10
- Comments: 2
- State: open

### kubernetes/kubernetes#139631: [Umbrella] 1.37 watch cache and list improvements

Collecting a list of all scalability related improvements targeting the watch cache, list and watches. 

### 1. Watch cache read-path lock contention

- [x] #139495 (serathius) Reduce RLock acquisitions during reads from 2 to 1. ~44-49% lower list latency and ~2x throughput at 1k pods, up to +78% li...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139631)

**Metadata:**
- Created: 2026-06-10
- Comments: 1
- State: open

### kubernetes/kubernetes#139628: kube-proxy: stale UDP conntrack entries are never cleaned up when a service scales down to zero endpoints

### What happened?

When a UDP service with active senders is scaled down to zero endpoints, the conntrack entries established while the endpoints existed are never removed. The conntrack reconciler introduced in v1.32 (#127318) skips services without serving endpoints:

```go
// pkg/proxy/conntrack...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139628)

**Metadata:**
- Created: 2026-06-10
- Comments: 1
- State: open

### kubernetes/kubernetes#139627: [PodLevelResources] Double-counting Pod Overhead

`.pod.status.allocatedResources`, including pod overhead, is set here: https://github.com/kubernetes/kubernetes/blob/5d4ee2a71bfddec94a467ad8808a98dedef519bb/pkg/kubelet/kubelet_pods.go#L2177

When including status resources in the `PodRequests` calculation (which is used by the scheduler to determi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139627)

**Metadata:**
- Created: 2026-06-10
- Comments: 2
- State: open

### kubernetes/kubernetes#139639: kubelet: update event-burst CLI flag description to match defaults


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

correct event burst description in CLI flag usage

https://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/apis/config/v1beta1/defaults.go#L120

```
        if obj.EventBurst == 0 {
           ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139639)

**Metadata:**
- Created: 2026-06-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139637: Add retries to get CRD updated


#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

This PR fixes a flaky test `TestCustomResourceValidatorsWithSchemaConversion` in the `apiserver` integration tests. 

The test updates a CRD schema and then makes an unrelated update to an existing CR ins...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139637)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139636: Update KAS apiserver network proxy to v0.36

Update konnectivity network proxy to v0.36.0.
Includes CVE fixes. Adds pending backend request timeout option. Enforce server-ca-cert in TCP mode validation.
add --tls-min-version flag to proxy server

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139636)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139634: Fix TestClassifyLBError test case for nil error

#### What type of PR is this?

/kind bug
/kind failing-test

#### What this PR does / why we need it:

Fix TestClassifyLBError test case for nil error introduced by https://github.com/kubernetes/kubernetes/pull/137767
    
The classifyLBError function returns lbErrNone when err is nil, but ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139634)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139633: refactor: use AddEventHandlerWithOptions in storageversion controllers

Migrate plain `AddEventHandler` calls in `pkg/controller/storageversiongc` and
`pkg/controller/storageversionmigrator` to `AddEventHandlerWithOptions` with
`cache.HandlerOptions{Logger: &logger}`, so the contextual logger is propagated
into the informer handler goroutines.

The logger is already in ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139633)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139630: Bump up version of test images

This is to bump up the test image version for busybox and nginx/nginxnew to version which have the windows2025 support.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/cont...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139630)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139629: kube-proxy: clear stale conntrack entries for UDP services with no endpoints

#### What type of PR is this?

/kind bug
/kind regression
/sig network

#### What this PR does / why we need it:

The conntrack reconciler skips services without serving endpoints, so conntrack entries established while endpoints existed are never removed when a UDP service scales down to zero:

```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139629)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139626: Generalize memorymanager checkpoint

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

##### Why

Latest introduction of PodLevelResourceManagers feature gate to memory manager (and CPU manager) checkpoints, has made future enhancements of checkpoint structure barely possible.

Depending if Pod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139626)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139625: Automated cherry pick of #139607: Test inline tags, match stdlib inline tag handling behavior

Cherry pick of #139607 on release-1.35.

#139607: Test inline tags, match stdlib inline tag handling behavior

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139625)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139624: Automated cherry pick of #139607: Test inline tags, match stdlib inline tag handling behavior

Cherry pick of #139607 on release-1.36.

#139607: Test inline tags, match stdlib inline tag handling behavior

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139624)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139623: DRA kubeletplugin: use hashed registrar socket name for rolling updates

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139623)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139621: DRA: Wire DRAListTypeAttributes gate into ResourceSlice update tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139621)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139618: Clear stale event slots in watchCache.Replace to reduce peak memory use

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This reduces peak memory during relist operations.

`Replace()` resets `startIndex`/`endIndex` to empty the ring buffer, but ignores `*watchCacheEvent`.
Each stale slot holds a stale object version (plus...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139618)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139617: Avoid per-item output copy in JSON streaming list encoder


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Reduce memory allocated when serving custom resource streaming list requests.

This fix is for all JSON streaming, but custom resources only support JSON so are the most directly impacted.

The stream...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139617)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139616: Decouple WAP logic from scheduler struct

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139616)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139613: On successful scheduling of podgroup, requeue remaining pods directly to active queue.

#### What type of PR is this?
/kind feature
/sig-scheduling

#### What this PR does / why we need it:

When a podgroup is successfully scheduled, we want to requeue the remaining unscheduled pods of such a podgroup directly into active queue using their old timestamp, this will attempt schedul...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139613)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139611: Conditional Authz [1.5/n]: Implementation of core Conditional Authorization machinery

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139611)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9795: Updater patching empty resource paths even when there is no recommendation

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: master

**What k8s version are you using (`kubectl version`)?**: N/A

**What environment is this in?**: N/A

**What did you expect to happen?**:

When there is no...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9795)

**Metadata:**
- Created: 2026-06-10
- Comments: 1
- State: open

### kubernetes/autoscaler#9798: [cherry-pick 1.34] Add AtomicIncreaseSize method for VMS ap

(cherry picked from commit 12497a3e9ff33a54da0f78a72310dbeb4922601f)

```release-note
azure: implement AtomicIncreaseSize for VMS
```


🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9798)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9797: [cherry-pick 1.33] Add AtomicIncreaseSize method for VMS ap

(cherry picked from commit 12497a3e9ff33a54da0f78a72310dbeb4922601f)

```release-note
azure: implement AtomicIncreaseSize for VMS
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9797)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9790: Bump the non-kubernetes group across 2 directories with 1 update

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [golang.org/x/net](https://github.com/golang/net).
Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [golang.org/x/net](https://github.com/golang/net).

Updates `golang....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9790)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#2992: Add metric for pod terminationGracePeriodSeconds

<!-- Please only use this template for submitting feature requests -->

**What would you like to be added:**
I would like terminationGracePeriodSeconds to be exposed as a metric.

**Why is this needed:**
I need to monitor if a pod is approaching the termination grace period. My plan is to compare th...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/2992)

**Metadata:**
- Created: 2026-06-10
- Comments: 1
- State: open

### kubernetes/perf-tests#4095: Update download ci artifacts skill to follow best practices

/kind feature
/assign @p0lyn0mial 

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4095)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3127: [manila-csi-plugin] Remove rules from aggregated ClusterRoles to fix Helm v4 SSA conflict

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3127)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/envoy: v1.38.2

repo: Release v1.38.2

**Summary of changes**:

* Bug fixes:
  - runtime: fixed RTDS runtime guard override removal so deleting an override restores the process-wide runtime guard value to the default value.

* New features:
  - http2: added opt-in histograms for HTTP/2 header statistics, including header-entry count, header-map byte size, reassembled ``cookie`` header length, and individual ``cookie`` header count. Enable with ``envoy.reloadable_features.http2_record_histograms``; the histogram...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.2)

**Metadata:**
- Version: v1.38.2
- Published: 2026-06-10
- Prerelease: No

### envoyproxy/envoy: v1.37.4

repo: Release v1.37.4

**Summary of changes**:

* Bug fixes:
  - runtime: fixed RTDS runtime guard override removal so deleting an override restores the process-wide runtime guard value to the default value.

* New features:
  - http2: added opt-in histograms for HTTP/2 header statistics, including header-entry count, header-map byte size, reassembled ``cookie`` header length, and individual ``cookie`` header count. Enable with ``envoy.reloadable_features.http2_record_histograms``; the histogram...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.4)

**Metadata:**
- Version: v1.37.4
- Published: 2026-06-10
- Prerelease: No

### envoyproxy/envoy: v1.36.8

repo: Release v1.36.8

**Summary of changes**:

* Bug fixes:
  - runtime: fixed RTDS runtime guard override removal so deleting an override restores the process-wide runtime guard value to the default value.

* New features:
  - http2: added opt-in histograms for HTTP/2 header statistics, including header-entry count, header-map byte size, reassembled ``cookie`` header length, and individual ``cookie`` header count. Enable with ``envoy.reloadable_features.http2_record_histograms``; the histogram...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.8)

**Metadata:**
- Version: v1.36.8
- Published: 2026-06-10
- Prerelease: No

### envoyproxy/envoy: v1.35.12

repo: Release v1.35.12

**Summary of changes**:

* Bug fixes:
  - runtime: fixed RTDS runtime guard override removal so deleting an override restores the process-wide runtime guard value to the default value.

* New features:
  - http2: added opt-in histograms for HTTP/2 header statistics, including header-entry count, header-map byte size, reassembled ``cookie`` header length, and individual ``cookie`` header count. Enable with ``envoy.reloadable_features.http2_record_histograms``; the histogra...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.35.12)

**Metadata:**
- Version: v1.35.12
- Published: 2026-06-10
- Prerelease: No

### containerd/nerdctl#4958: `nerdctl save` --quiet and/or --progress plain

### What is the problem you're trying to solve

When using `nerdctl save` in scripts the output logs get filled with progress bars.

### Describe the solution you'd like

Adding the same `-q` and/or `--progress=plain` that are available in at least (the build command)[https://github.com/containerd/n...

🔗 [Link](https://github.com/containerd/nerdctl/issues/4958)

**Metadata:**
- Created: 2026-06-10
- Comments: 0
- State: open

### containerd/containerd#13570: CRI: Make image pull HTTP transport timeouts configurable

### What is the problem you're trying to solve

The CRI image pull transport currently uses several hardcoded timeout values in [DefaultHTTPTransport()](https://github.com/containerd/containerd/blob/2454191ea6b2a61e1c6ee21eafac829b09a1d2e6/core/remotes/docker/registry.go#L254), such as `DialContext....

🔗 [Link](https://github.com/containerd/containerd/issues/13570)

**Metadata:**
- Created: 2026-06-10
- Comments: 1
- State: open

### containerd/containerd#13569: hosts.toml: add dial_addr for unix socket dialing

## Summary

- Adds a per-host `dial_addr` field to `hosts.toml` that overrides the dialer for that host so connections go to a local Unix domain socket instead of TCP.
- Accepted forms: `unix:///path` (pathname socket) and `unix://@name` (Linux abstract socket).
- Swaps only the transport — the HTTP...

🔗 [Link](https://github.com/containerd/containerd/pull/13569)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-06-11 03:43:11*
