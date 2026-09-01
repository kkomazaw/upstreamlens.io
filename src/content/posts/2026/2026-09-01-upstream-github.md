---
title: "Upstream Github - 2026-09-01"
description: "CNCF upstream activity from github"
pubDate: 2026-09-01
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "needs-triage", "website", "kind/bug", "pr", "cncf-cla: yes", "size/L", "lgtm", "sig/docs", "language/zh", "area/localization", "size/XL", "area/cluster-autoscaler", "size/XS", "release-note-none", "needs-ok-to-test", "kind/documentation", "autoscaler", "area/vertical-pod-autoscaler", "size/S", "ok-to-test", "triage/accepted", "size/M", "perf-tests", "sig/architecture", "sig/security", "sig/storage", "sig/api-machinery", "kind/flake", "needs-priority", "area/kubectl", "kind/api-change", "sig/apps", "sig/cli", "area/code-generation", "area/test", "sig/network", "kind/cleanup", "area/kube-proxy", "area/apiserver", "size/XXL", "sig/auth", "sig/testing", "sig/scheduling", "sig/node", "do-not-merge/work-in-progress", "do-not-merge/hold", "wg/device-management", "area/e2e-test-framework", "area/dependency", "do-not-merge/needs-kind", "needs-rebase", "approved", "do-not-merge/release-note-label-needed", "do-not-merge/invalid-commit-message", "area/kubelet", "release-note", "do-not-merge/cherry-pick-not-approved", "sig/autoscaling", "sig/instrumentation", "minikube", "cloud-provider-gcp", "enhancements", "sig/release", "needs-kind", "area/release-eng", "release", "cloud-provider-vsphere", "prometheus", "common", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141731: 17 new CVEs found in k/k by sig-secuirty scan prow job (majority may be go stdlib related) 

### What happened?

https://testgrid.k8s.io/sig-security-snyk-scan#ci-kubernetes-snyk-master failing with the following new CVE IDs:

1. CVE-2026-27145
2. CVE-2026-33818
3. CVE-2026-37236
4. CVE-2026-39822
5. CVE-2026-39823
6. CVE-2026-39825
7. CVE-2026-39826
8. CVE-2026-42504
9. CVE-2026-42505
10. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141731)

**Metadata:**
- Created: 2026-08-31
- Comments: 6
- State: open

## Updates

### kubernetes/website#57354: Add warning-only validation and contributor guidance for localized links and redirects

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57354)

**Metadata:**
- Created: 2026-08-31
- Comments: 1
- State: open

### kubernetes/website#57352: Duplicate "DRA device metadata in containers" section

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The "DRA device met...

🔗 [Link](https://github.com/kubernetes/website/issues/57352)

**Metadata:**
- Created: 2026-08-31
- Comments: 1
- State: open

### kubernetes/website#57351: [zh-cn]sync http-proxy-access-api what-happens-on-restart

content/zh-cn/docs/reference/node/kernel-version-requirements.md
content/zh-cn/docs/reference/node/what-happens-on-restart.md

🔗 [Link](https://github.com/kubernetes/website/pull/57351)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57350: [zh-cn]sync kube-scheduler

content/zh-cn/docs/reference/command-line-tools-reference/kube-scheduler.md

🔗 [Link](https://github.com/kubernetes/website/pull/57350)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10226: Document the --unready-nodes-scope flag

#### What type of PR is this?

/kind documentation
/area cluster-autoscaler

#### What this PR does / why we need it:

Documents the new `--unready-nodes-scope` flag, which scopes the cluster-wide unready node health check to nodes in autoscaled node groups.

Two changes to `cluster-autoscaler/FAQ.m...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10226)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10224: Bump the patch-updates group across 1 directory with 2 updates

Bumps the patch-updates group with 2 updates in the /vertical-pod-autoscaler/test directory: [github.com/grpc-ecosystem/go-grpc-middleware/v2](https://github.com/grpc-ecosystem/go-grpc-middleware) and [google.golang.org/grpc](https://github.com/grpc/grpc-go).

Updates `github.com/grpc-ecosystem/go-g...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10224)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10223: Bump the non-kubernetes group across 1 directory with 5 updates

Bumps the non-kubernetes group with 5 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/onsi/gomega](https://github.com/onsi/gomega) | `1.42.1` | `1.43.0` |
| [github.com/grpc-ecosystem/go-grpc-middleware/v2](https://github.com/grpc-ec...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10223)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10222: Bump the actions group across 3 directories with 1 update

> [!WARNING]
> Cooldown could not be applied because no publication date was available from the registry.
>

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/rec...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10222)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4342: Add WaitForRunningPodsRestart measurement

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

This measurement is here to track and verify pod recovery during cluster restart cycles. 
1. At the start stage, it measures how many pods are currently Running
2. At the gather stage, it waits until the sa...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4342)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141725: kubelet reports a volume as healthy when a CSI driver returns only unknown health conditions

### What happened?

`mapVolumeHealthStatus` drops any `VolumeHealthErrorType` it does not recognize, and the caller skips that entry:

```go
status, ok := mapVolumeHealthStatus(entry.GetStatus())
if !ok {
	continue
}
```

When every entry in a reply is unknown, the mapper hands back an empty set. `v...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141725)

**Metadata:**
- Created: 2026-08-31
- Comments: 1
- State: open

### kubernetes/kubernetes#141735: Fix MutationCache.ByIndex skipping includeAdds hits after concurrent del

#### What type of PR is this?
/kind flake


#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes #140041


#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```release-note
None
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141735)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141734: Clarify PVC selector documentation

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Clarifies `PersistentVolumeClaimSpec.selector` API documentation so generated docs state that a null or empty selector matches all volumes, and that the selector is ignored when `volumeName` is set.

#### W...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141734)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141733: SIG Network feature gate cleanups for 1.38

#### What this PR does / why we need it:
Removes old feature gates:
- `NFTablesProxyMode`: GA in 1.33, should have gone away in 1.36 but we forgot
- `PreferSameTrafficDistribution`: GA in 1.35, can go away now
- `MultiCIDRServiceAllocator` and `DisableAllocatorDualWrite`: Both GA in 1.34 but we ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141733)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141732: [WIP] scheduler: promote PreQueueingHint to beta and fix narrowing bugs


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141732)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141730: test/e2e: Wait for volume servers to accept connections

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141730)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141729: Add apiserver storage correctness tests

Ref https://github.com/kubernetes/kubernetes/issues/141652

PR introduces a minimal model test based correctness suite using same approach like etcd robustness testing. For now we cover just Create,Delete,Get to as minimal example that works showing both etcd3 and cacher fulfill same contract.

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141729)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141728: PoC of passing filters down the stack



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141728)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141727: Add e2e test: NetworkPolicy default-deny blocks LoadBalancer Local externalTrafficPolicy ingress

## Summary

Adds an e2e test that validates a default-deny ingress NetworkPolicy blocks
external ingress traffic even when a LoadBalancer service has
`externalTrafficPolicy=Local` (which preserves client source IP).

## What this tests

- Creates a LoadBalancer Service with `externalTrafficPolicy=Lo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141727)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141726: pkg/volume/csi: pass context to nodeinfomanager methods

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Passes `context.Context` through `nodeinfomanager.Interface` methods and propagates it down to client calls, eliminating internal `context.TODO()` usages. Also updates callers in `csi_plugin.go`, `volumehealth/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141726)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141724: csi: validate the NodeGetVolumeHealth response

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`NodeGetVolumeHealth` passed the driver's reply straight to the mapper, so two malformed replies went through. One that omits `volume_health` (REQUIRED in the spec) looked exactly like a healthy volume, and one that ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141724)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141723: Remove dead RemoveContainer from cpumanager and memorymanager

Follow-up to #141518, addressing the reviewer's suggestion to double-check whether `cpumanager`/`memorymanager` `RemoveContainer` are dead code and delete them if so.

## What

Removes `RemoveContainer(logger klog.Logger, containerID string) error` from the `cpumanager.Manager` and `memorymanager.Ma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141723)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141722: kubelet: stop logging HTTP probe headers

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Kubelet currently includes the raw `HTTPGet.HTTPHeaders` field in the V(4) `HTTP-Probe` log entry. Because these values come directly from the PodSpec, probe credentials such as Authorization tokens, cookies, or API ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141722)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141721: Automated cherry pick of #140873: Revert e2e test IPVS session affinity timeout changes

Cherry pick of #140873 on release-1.35.

#140873: Revert e2e test IPVS session affinity timeout changes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind clea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141721)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141720: Automated cherry pick of #140873: Revert e2e test IPVS session affinity timeout changes

Cherry pick of #140873 on release-1.36.

#140873: Revert e2e test IPVS session affinity timeout changes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind clea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141720)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141719: Automated cherry pick of #140873: Revert e2e test IPVS session affinity timeout changes

Cherry pick of #140873 on release-1.37.

#140873: Revert e2e test IPVS session affinity timeout changes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind clea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141719)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141718: WIP: kube-controller-manager: use context-aware client-go

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Kubernetes 1.37 finished the introduction of context-aware client-go APIs. Components like kube-controller-manager which are meant to support contextual logging should use those new APIs.

This is not enf...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141718)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141715: test/node: deflake probe tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141715)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141714: Remove KubeletTracing feature gate

#### What type of PR is this?

/kind cleanup
/sig instrumentation
/sig node

#### What this PR does / why we need it:

The `KubeletTracing` feature gate was promoted to GA and locked to default in Kubernetes v1.34 (#132341). Following the feature gate lifecycle, it is now removed in v1.38.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141714)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141712: namespace: requeue when deleted objects still list

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Partial change for the namespace-controller cleanup bottlenecks described in https://github.com/kubernetes/kubernetes/issues/141615 (item 5 in that issue: `"unexpected items still remain"` on async...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141712)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141711: Add a suggested FlowSchema for kube-proxy

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

The bootstrap configuration describes the `system` priority level as the one for "the system components that affects self-maintenance of the cluster and the availability of those running pods in th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141711)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23603: Add release notes for 1.39.0

Add the v1.39.0 notes. Group by kind of change instead of GitHub labels and catch-all buckets (Improvements, Drivers, UI). User-facing sections first, then skippable project credit (Owners, Testing, Build, Refactoring).

Nest section headings under each version. Feature, Bug fixes, and the rest us...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23603)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23595: chore: fix ISO build warning and Boskos comment

<!-- 🎉 Thank you for contributing to minikube! 🎉 Here are some hints to get your PR merged faster:

1. Your PR title will be included in the release notes, choose it carefully
2. If the PR fixes an issue, add "fixes #<issue number>" to the description.
3. If the PR is a user interface change, ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23595)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1327:  feat(metis): add Prometheus metrics collection and HTTP endpoint

This change introduces Prometheus metrics for the Metis daemon and CNI plugin to monitor IP address allocation, capacity utilization, gRPC RPC latencies, and controller sync actions.

Key Features & Changes:
 1. Metrics Package (`pkg/metrics`):
       - Created a standalone `pkg/metrics` package...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1327)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6305: Bump github.com/sirupsen/logrus from 1.9.4 to 1.10.2

Bumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus) from 1.9.4 to 1.10.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sirupsen/logrus/releases">github.com/sirupsen/logrus's releases</a>.</em></p>
<blockquote>
<h2>v1.10.2</h2>
<h1>Logr...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6305)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4513: Bump softprops/action-gh-release from 3.0.2 to 3.0.3 in the actions group

Bumps the actions group with 1 update: [softprops/action-gh-release](https://github.com/softprops/action-gh-release).

Updates `softprops/action-gh-release` from 3.0.2 to 3.0.3
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/softprops/action-gh-release/rele...

🔗 [Link](https://github.com/kubernetes/release/pull/4513)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4512: Bump k8s.io/apimachinery from 0.36.4 to 0.37.0

Bumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) from 0.36.4 to 0.37.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes/apimachinery/commit/7164e39885ced1e843757da6423a337f6eae75f7"><code>7164e39</code></a> Update dependencies to v0.37.0 ta...

🔗 [Link](https://github.com/kubernetes/release/pull/4512)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1867: :seedling: (chore): Bump sigs.k8s.io/kind from 0.32.0 to 0.33.0 in /hack/tools

Bumps [sigs.k8s.io/kind](https://github.com/kubernetes-sigs/kind) from 0.32.0 to 0.33.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/kind/releases">sigs.k8s.io/kind's releases</a>.</em></p>
<blockquote>
<h2>v0.33.0</h2>
<p>This release c...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1867)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.71.0

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/common/pull/957
* build(deps): bump the codeql group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/prometheus/common/pull/955
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/common/pull/958
* fix: use slog.DiscardHandler in promslog.NopLogger by @FUSAKLA in https://github.com/prometheus/common/pul...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.71.0)

**Metadata:**
- Version: v0.71.0
- Published: 2026-08-31
- Prerelease: No

### containerd/containerd#14076: erofs fsview does not fall back to a kernel mount for unsupported compression

### Description

Containerd's EROFS conversion path can produce internally compressed raw EROFS layers:

```text
ctr images convert --oci --erofs raw --erofs-compressors lz4hc,9 SOURCE TARGET
```

On containerd 2.3.4, the resulting image pulls and materializes with the EROFS snapshotter, but contain...

🔗 [Link](https://github.com/containerd/containerd/issues/14076)

**Metadata:**
- Created: 2026-09-01
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-01 03:30:24*
