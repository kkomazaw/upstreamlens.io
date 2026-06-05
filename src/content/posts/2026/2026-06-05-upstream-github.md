---
title: "Upstream Github - 2026-06-05"
description: "CNCF upstream activity from github"
pubDate: 2026-06-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "sig/storage", "kind/flake", "sig/network", "triage/accepted", "needs-sig", "sig/scalability", "pr", "area/test", "size/L", "approved", "cncf-cla: yes", "sig/instrumentation", "sig/testing", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-kind", "kind/cleanup", "sig/scheduling", "release-note-none", "wg/device-management", "size/S", "kind/api-change", "sig/apps", "do-not-merge/cherry-pick-not-approved", "kind/feature", "needs-ok-to-test", "do-not-merge/work-in-progress", "do-not-merge/needs-sig", "area/apiserver", "sig/api-machinery", "size/M", "size/XXL", "release-note", "area/kube-proxy", "size/XL", "sig/windows", "area/kubelet", "sig/auth", "do-not-merge/invalid-commit-message", "size/XS", "do-not-merge/contains-merge-commits", "lgtm", "kind/kep", "enhancements", "sig/release", "area/release-eng", "test-infra", "website", "language/ja", "area/localization", "area/vertical-pod-autoscaler/prometheus", "autoscaler", "area/cluster-autoscaler", "area/vertical-pod-autoscaler", "area/provider/azure", "kind/documentation", "cncf-cla: no", "area/dependency", "release", "needs-kind", "ok-to-test", "prometheus", "component/promql", "area/opentelemetry", "jmx_exporter", "envoyproxy", "envoy", "containerd", "area/snapshotters", "area/cri", "nerdbox", "cncf", "kind/initiative", "tag/security-and-compliance", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139507: KEP-5981: DRA Sharing Affinity for Consumable Capacity [alpha]

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139507)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/enhancements#6157: KEP-5758: bump to the latest release

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6157)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9742: update release guide

#### What type of PR is this?
/kind documentation
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
/kind reg...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9742)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/envoy: v1.38.1

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47774](https://github.com/envoyproxy/envoy/security/advisories/GHSA-22m2-hvr2-xqc8): http2: HTTP/2 streams are now reset if they violate the configured maximum header list size. Uncompressed cookies now count towards ``mutable_max_request_headers_kb`` and ``max_headers_count`` limits, protecting against an HPACK cookie-bomb that could cause excessive memory usage. This can be reverted with ``envoy.reloadable_features.http2_include_cooki...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.1)

**Metadata:**
- Version: v1.38.1
- Published: 2026-06-04
- Prerelease: No

### envoyproxy/envoy: v1.37.3

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47774](https://github.com/envoyproxy/envoy/security/advisories/GHSA-22m2-hvr2-xqc8): http2: HTTP/2 streams are now reset if they violate the configured maximum header list size. Uncompressed cookies now count towards ``mutable_max_request_headers_kb`` and ``max_headers_count`` limits, protecting against an HPACK cookie-bomb that could cause excessive memory usage. This can be reverted with ``envoy.reloadable_features.http2_include_cooki...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.3)

**Metadata:**
- Version: v1.37.3
- Published: 2026-06-04
- Prerelease: No

### envoyproxy/envoy: v1.36.7

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47774](https://github.com/envoyproxy/envoy/security/advisories/GHSA-22m2-hvr2-xqc8): http2: HTTP/2 streams are now reset if they violate the configured maximum header list size. Uncompressed cookies now count towards ``mutable_max_request_headers_kb`` and ``max_headers_count`` limits, protecting against an HPACK cookie-bomb that could cause excessive memory usage. This can be reverted with ``envoy.reloadable_features.http2_include_cooki...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.7)

**Metadata:**
- Version: v1.36.7
- Published: 2026-06-04
- Prerelease: No

### containerd/containerd#13532: Implement missing metrics in ListMetricDescriptors and ListPodSandboxMetrics

### What is the problem you're trying to solve

For Kubernetes [CRI stats](https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/2371-cri-pod-container-stats) feature, we are moving away from cAdvisor in favor of container runtime to provide pod and container metrics.

This new test i...

🔗 [Link](https://github.com/containerd/containerd/issues/13532)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open

### cncf/toc#2186: [Initiative]: Update Project Security Guidelines

### Name

Update Project Security Guidelines and Templates

### Short description

Update the security guidelines and templates on contribute.cncf.io

### Responsible group

TAG Security and Compliance

### Does the initiative belong to a subproject?

No

### Subproject name

_No response_

### Prim...

🔗 [Link](https://github.com/cncf/toc/issues/2186)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#139502: kubelet: updating etcd static pod manifest on single-master causes 30s restart delay due to synchronous mirror pod deletion blocking SyncPod

### What happened?

On a **single-master** cluster with local etcd, updating the etcd static pod manifest causes a 30+ second downtime. 

Kubelet attempts to delete the old etcd mirror pod via the API server, but the API server is unavailable because the old etcd container has already stopped and th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139502)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139498: [Flaking test] [sig-storage] PersistentVolumes NFS with Single PV job timeout failures

### Which jobs are flaking?

- ci-kubernetes-e2e-kind

[Triage: http://go.k8s.io/triage?job=ci-kubernetes-e2e-kind%24&test=PersistentVolumes NFS with](https://storage.googleapis.com/k8s-triage/index.html?job=ci-kubernetes-e2e-kind%24&test=PersistentVolumes%20NFS%20with)

### Which tests are flaking?...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139498)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139497: kube-proxy IPVS with mh scheduler may route traffic to unavailable destinations without mh-fallback

### What happened?

When kube-proxy is configured to use IPVS with the `mh` (Maglev Hashing) scheduler, traffic may fail during endpoint transitions when some backend destinations become unavailable.

The issue happens because IPVS `mh` preserves `last_weight` internally even after a destination wei...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139497)

**Metadata:**
- Created: 2026-06-04
- Comments: 3
- State: open

### kubernetes/kubernetes#139496: Enhance SIGKILL log messages

We are trying to monitor and add metrics for our SIGKILL events, but it proves to be quite challenging as the app itself cannot log anything when getting a SIGKILL and the kubelet logs are not informative enough to track.
For now I have found logs with "exitCode=137" to be a good indication for a SI...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139496)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139494: [Flaking Test] load overall (/home/prow/go/src/k8s.io/perf-tests/clusterloader2/testing/load/config.yaml)

### Which jobs are flaking?

* [sig-release-master-informing#gce-master-scale-performance-5000](https://testgrid.k8s.io/sig-release-master-informing#gce-master-scale-performance-5000&exclude-non-failed-tests=)



### Which tests are flaking?

* [ClusterLoaderV2.load overall (/home/prow/go/src/k8s.io...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139494)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139493: [Flake] ci-node-e2e: Containers Lifecycle restartable init containers should not hang in termination if terminated during initialization

### Which jobs are flaking?

ci-kubernetes-node-e2e-containerd

### Which tests are flaking?

E2eNode Suite [It] [sig-node] Containers Lifecycle when A pod with restartable init containers is terminating when Restartable init containers are terminated during initialization should not hang in termina...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139493)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139491: apiserver: return 400 instead of 500 for invalid DeleteOptions field types

### What happened?

When sending a DELETE request with invalid JSON types for fields in `DeleteOptions`, the API Server returns HTTP 500.

For example, when `gracePeriodSeconds` is provided as a string instead of an integer, the API Server returns an internal server error:

```json
{
  "kind": "Stat...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139491)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139512: [DNM] Benchmark native histograms on apiserver

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139512)

**Metadata:**
- Created: 2026-06-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139511: DRA: Update scheduler_perf integration test cases of ConsumableCapacity

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139511)

**Metadata:**
- Created: 2026-06-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139509: Automated cherry pick of #139480: Fix wrong marking of errors

Cherry pick of #139480 on release-1.35.

#139480: Fix wrong marking of errors

This is needed to prevent mismatch between Handwritten validation and Declarative validation.

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139509)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139508: Automated cherry pick of #139480: Fix wrong marking of errors

Cherry pick of #139480 on release-1.36.

#139480: Fix wrong marking of errors

This is needed to prevent mismatch between Handwritten validation and Declarative validation. 

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139508)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139506: apiserver: add configurable HTTP/2 write and read-idle timeouts

## What this does

Adds two new `kube-apiserver` flags:

| Flag | Default | Purpose |
|---|---|---|
| `--http2-write-byte-timeout` | `0` (disabled) | Close connections when no bytes can be written for this duration |
| `--http2-read-idle-timeout` | `0` (disabled) | Send a PING after this duration of...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139506)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139505: Configure ObjectMeta test cases - Part 1

#### What type of PR is this?
/kind testing

#### What this PR does / why we need it:

This PR introduces the `objectMeta` declarative validation test cases (`RunObjectMetaTestCases` and `RunObjectMetaUpdateTestCases` in `test/declarative_validation/meta/objectmeta.go`) and wires them into the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139505)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139504: [WIP] leaderelection: release lease only after OnStartedLeading returns

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Hold the leader lease until the OnStartedLeading callback returns (bounded by LeaseDuration) when ReleaseOnCancel is set, so a shutting-down leader does not give up the lease while lease-guarded work is still drainin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139504)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139503: Handling syscall failures when hns is not running.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139503)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139501: cleanup: remove deprecated kubelet CSR feature gate code branches

## What this PR does

Removes dead code guarded by two deprecated feature gates that have been
locked to false since v1.35:

- `AllowDNSOnlyNodeCSR` — allowed kubelet to serve CSRs using DNS names only, without Node IPs
- `AllowInsecureKubeletCertificateSigningRequests` — disabled strict NodeR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139501)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139500: Add cri_streaming_enabled metric for CRI list streaming RPCs

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139500)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139495: Reduce times lock is aquired in watch cache during reads

/kind feature

The optimization reduces the number of watch cache RLock acquisitions on read paths (List/Get) from 2 to 1.

* **Smaller Scale (1,000 pods)**: Shows a ~44% to 49% reduction in latency and ~2x increase in throughput (both read list-calls/s and write throughput under read load).
* ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139495)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139492: apiserver: return 400 instead of 500 for invalid kind in delete request body

…st body

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139492)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37195: Use kpromo v4.5.1 for periodic image promotion

Pin ci-k8sio-image-promo to the released kpromo v4.5.1 image, replacing the staging `latest` tag.

v4.5.1 includes the `--manifest-diff-since` flag which resolves the plan phase failures caused by stale `_LOST_` source images (kubernetes/k8s.io#9563).

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37195)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#56019: Improvement for k8s.io/docs/reference/kubectl/generated/kubectl_get/

There seems to be no information to explain what data is shown in each column of the output.

I would expect it, in the reference documentation.  Or, at least a link to a page that explains the output.

(Note: that docs reference page is auto-generated)

🔗 [Link](https://github.com/kubernetes/website/issues/56019)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/website#56014: Mobile navigation and close controls are missing accessible labels..

<img width="1512" height="982" alt="Image" src="https://github.com/user-attachments/assets/9acf5784-4b37-4781-aed3-6356bd7abbaa" />

### Problem

While testing the Kubernetes website on a mobile viewport, I noticed that some mobile navigation and close controls appear to be icon-only buttons without...

🔗 [Link](https://github.com/kubernetes/website/issues/56014)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/website#56013: [ja] Update content/ja/docs/concepts/storage/persistent-volumes.md

**This is a Feature Request**

**What would you like to be added**

Update the Japanese translation of `content/ja/docs/concepts/storage/persistent-volumes.md` to match the latest English version.

**Website Link**

- Japanese: https://kubernetes.io/ja/docs/concepts/storage/persistent-volumes/
- Eng...

🔗 [Link](https://github.com/kubernetes/website/issues/56013)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/website#56012: [ja] Update content/ja/docs/concepts/architecture/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Japanese translation of `content/ja/docs/concepts/architecture/_index.md` to match the latest English version.

**Website Link**

- Japanese: https://kubernetes.io/ja/docs/concepts/architecture/
- English: https://kuberne...

🔗 [Link](https://github.com/kubernetes/website/issues/56012)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/website#56010: [ja] Translate content/en/docs/concepts/workloads/pods/static-pods.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/workloads/pods/static-pods.md` into Japanese

**Website Link**

- English: https://kubernetes.io/docs/concepts/workloads/pods/static-pods/

**Why is this needed**

This page is not translated yet....

🔗 [Link](https://github.com/kubernetes/website/issues/56010)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/website#56008: Define Environment Variable Values Using An Init Container

Pod name in the command is incorrect 

`kubectl logs dapi-test-pod -c use-envfile | grep DB_ADDRESS`

It must be

`kubectl logs envfile-test-pod -c use-envfile | grep DB_ADDRESS`

🔗 [Link](https://github.com/kubernetes/website/issues/56008)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/autoscaler#9747: [VPA] --history-cpu-metric and --history-memory-metric flags are ignored by the Prometheus history provider

**Which component are you using?**:

recommender

/area vertical-pod-autoscaler/prometheus

**What version of the component are you using?**:

master (the metric-name fields exist in the released versions that have the `--history-cpu-metric` / `--history-memory-metric` flags).

**What did you expect...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9747)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/autoscaler#9749: revert removal of scale-down-enabled flag



#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This change is being introduced to revert the removal of the --scale-down-enabled flag which was introduced in pull request #9412. This flag should remain in deprecated state for at least 3 releases bef...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9749)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9748: fix(vpa): honor --history-cpu-metric and --history-memory-metric flags

/area vertical-pod-autoscaler
/kind bug

**What this PR does / why we need it**:

`initHistoryProvider` built the `history.PrometheusHistoryProviderConfig` without copying `config.HistoryCPUMetric` and `config.HistoryMemoryMetric` into the provider's `CPUMetricName` and `MemoryMetricName` fields, so...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9748)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9746: [cluster-autoscaler-release-1.35] azure: implement AtomicIncreaseSize for VMS

This is an automated cherry-pick of #9731

/assign rakechill

```release-note
azure: implement AtomicIncreaseSize for VMS
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9746)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9745: [cluster-autoscaler-release-1.34] azure: implement AtomicIncreaseSize for VMS

This is an automated cherry-pick of #9731

/assign rakechill

```release-note
azure: implement AtomicIncreaseSize for VMS
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9745)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9744: [cluster-autoscaler-release-1.33] azure: implement AtomicIncreaseSize for VMS

This is an automated cherry-pick of #9731

/assign rakechill

```release-note
azure: implement AtomicIncreaseSize for VMS
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9744)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9743: Ensure that the VPA verify scripts run for documentation updates

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I noticed that in https://github.com/kubernetes/autoscaler/pull/9724 the verify-toc script didn't run

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usag...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9743)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9741: ca(docs): document how pdb eviction works

#### What type of PR is this?
I added this section specifically just to document the behavior if we are scaling down the nodes and we have a pod match a PDB label selector

/kind documentation

#### What this PR does / why we need it:
I intend to improve/document the behavior of scaling down n...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9741)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9740: kamatera cloudprovider refactor, fixes, improvements

this PR replaces #9123 which had some problems with rebasing and was accidentaly closed

#### What type of PR is this?

/kind bug
/kind cleanup
/kind feature

#### What this PR does / why we need it:

After running the Kamatera cloudprovider for some customers a few months this PR does a l...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9740)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9739: Make dependabot manage the VPA 1.7 release branch

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I'd like to start paying attention to VPA patch releases from now on.
The idea here is to get dependabot to patch godeps and the Go version for us in release branches.

#### Which issue(s) this PR fixes:...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9739)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4421: Dependency update - Golang 1.26.4/1.25.11

<!--
Please only use this template if you are a Release Manager updating
Golang dependencies.
-->

### Tracking info

<!-- Search query: https://github.com/kubernetes/release/issues?q=is%3Aissue+Dependency+update+-+Golang -->
<!-- Example: https://github.com/kubernetes/release/issues/3383 -->
Link t...

🔗 [Link](https://github.com/kubernetes/release/issues/4421)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open

### kubernetes/release#4423: Bump github/codeql-action from 4.36.1 to 4.36.2 in the actions group

Bumps the actions group with 1 update: [github/codeql-action](https://github.com/github/codeql-action).

Updates `github/codeql-action` from 4.36.1 to 4.36.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/github/codeql-action/releases">github/codeql-action...

🔗 [Link](https://github.com/kubernetes/release/pull/4423)

**Metadata:**
- Created: 2026-06-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4422: build kube-cross, go-runner, releng-ci with golang 1.26.4/1.25.11

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- build kube-cross, go-runner, releng-ci with golang 1.26.4/1.25.11

#### Which issue(s) this PR fixes:

xref https://github.com/kubernetes/release/issues/4421

#### Does this PR introduce a user-faci...

🔗 [Link](https://github.com/kubernetes/release/pull/4422)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus#18858: promql: Add versioned OTel semantic-conventions read

Add `storage/semconv`, a query-time wrapper around `storage.Storage` that recognises two reserved matchers in PromQL queries — `__semconv_url__` and `__schema_url__` — and fans the query out across the historical metric and attribute names declared by the referenced OTel schema, merging the results ...

🔗 [Link](https://github.com/prometheus/prometheus/pull/18858)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### prometheus/jmx_exporter: 1.6.0 / 2026-06-07

# JMX Exporter 1.6.0

## Features

- Customizable metrics path
- Timing-based password attack hardening
- Updated documentation

# Fixed

- PKDF2 authentication methods to use correct bit length calculations
- Authentication LRU caching

# Changes

- Multiple dependency updates
- Overall project cleanup 
  - Improved Javadoc
  - Increased code coverage
  - Increased unit tests
  - Improved integration tests
  - More integration tests containers/distributions



🔗 [Link](https://github.com/prometheus/jmx_exporter/releases/tag/v1.6.0)

**Metadata:**
- Version: v1.6.0
- Published: 2026-06-05
- Prerelease: No

### containerd/containerd#13534: ImageVolumeMountFailed using erofs in v2.3.1

### Description

Image volume mounting issue turned up when we were running conformance tests on kubernetes `1.36.1` with containerd v2.3.1 with `erofs`. If we deploy a pod similar to generated by the test https://github.com/kubernetes/kubernetes/blob/v1.36.1/test/e2e/common/node/image_volume.go:

`...

🔗 [Link](https://github.com/containerd/containerd/issues/13534)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### containerd/containerd#13529: CRI: tag+digest sandbox image breaks RunPodSandbox

### Description

A CRI sandbox image (`pinned_images.sandbox`, or legacy `sandbox_image`) configured as a reference with both a tag and a digest (name:tag@sha256:…) makes `RunPodSandbox` fail with "failed to get sandbox image … not found", even though containerd successfully pulls that exact image d...

🔗 [Link](https://github.com/containerd/containerd/issues/13529)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open

### containerd/nerdbox: v0.1.4

## What's Changed
* revert: write to tmp vmdk file by @austinvazquez in https://github.com/containerd/nerdbox/pull/213
* shim/manager: detect early shim exit while waiting for pipe on Windows by @dmcgowan in https://github.com/containerd/nerdbox/pull/198
* fix(shim/manager): retry on pipe busy/timeout when waiting for shim pipe on Windows by @austinvazquez in https://github.com/containerd/nerdbox/pull/218


**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.1.3...v0.1.4

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.1.4)

**Metadata:**
- Version: v0.1.4
- Published: 2026-06-04
- Prerelease: No


---

*This content was automatically collected on 2026-06-05 03:33:53*
