---
title: "Upstream Github - 2026-07-23"
description: "CNCF upstream activity from github"
pubDate: 2026-07-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/support", "needs-triage", "website", "pr", "cncf-cla: yes", "size/M", "do-not-merge/work-in-progress", "lgtm", "language/en", "area/blog", "release", "kind/bug", "needs-sig", "sig/scheduling", "sig/node", "sig/autoscaling", "kind/feature", "triage/accepted", "priority/critical-urgent", "kind/failing-test", "kind/regression", "sig/apps", "priority/important-longterm", "wg/device-management", "area/test", "area/kubelet", "release-note", "size/XL", "approved", "sig/testing", "needs-priority", "kind/flake", "release-note-none", "size/XS", "kind/cleanup", "size/L", "area/apiserver", "sig/api-machinery", "sig/instrumentation", "size/S", "needs-ok-to-test", "do-not-merge/needs-kind", "sig/auth", "sig/architecture", "do-not-merge/release-note-label-needed", "sig/etcd", "do-not-merge/hold", "sig/storage", "area/release-eng", "sig/release", "area/code-generation", "kind/dependency", "sig/cli", "cloud-provider-gcp", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "do-not-merge/invalid-owners-file", "ingress-gce", "prometheus", "common", "envoyproxy", "gateway", "containerd", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140854: InPlacePodVerticalScalingSchedulerPreemption: Beta graduation criteria

This is an umbrella issue to track required changes prior to beta promotion of InPlacePodVerticalScalingSchedulerPreemption (KEP: https://github.com/kubernetes/enhancements/issues/5836)

It is a combination of the initial beta criteria we scoped out on https://github.com/kubernetes/enhancements/issu...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140854)

**Metadata:**
- Created: 2026-07-22
- Comments: 2
- State: open

## Updates

### kubernetes/website#56574: 20

**This is Support**

<!--
STOP -- PLEASE READ!

GitHub is not the right place for support requests.

If you're looking for help, check [Server Fault](https://serverfault.com/questions/tagged/kubernetes).

You can also post your question on the [Kubernetes Slack](http://slack.k8s.io/) or the [Discuss...

🔗 [Link](https://github.com/kubernetes/website/issues/56574)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/website#56570: Fixups for controller-runtime cache post

### Description

Follow-up to #55914 ("blog: How the controller-runtime Cache Actually Works"), which merged as a draft. Most of the review nits on that PR were folded in before it merged; a handful of comments were not, and this PR applies them to `content/en/blog/_posts/2026/controller-runtime-cac...

🔗 [Link](https://github.com/kubernetes/website/pull/56570)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes: v1.36.3


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.3)

**Metadata:**
- Version: v1.36.3
- Published: 2026-07-23
- Prerelease: No

### kubernetes/kubernetes: v1.35.7


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.7)

**Metadata:**
- Version: v1.35.7
- Published: 2026-07-22
- Prerelease: No

### kubernetes/kubernetes: v1.34.10


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.34.10)

**Metadata:**
- Version: v1.34.10
- Published: 2026-07-22
- Prerelease: No

### kubernetes/kubernetes#140858: A StatefulSet cannot be correctly scaled down after a failed scale-up

### What happened?

Resource quota is set, can not scaling up to the desired number of replicas ;
 an attempt to scale down failed while the system was in an intermediate state.

### What did you expect to happen?

Can scale down correctly.

### How can we reproduce it (as minimally and precisely as...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140858)

**Metadata:**
- Created: 2026-07-23
- Comments: 2
- State: open

### kubernetes/kubernetes#140848: Serial node e2e jobs failing since 2026-07-22: kubelet panics at startup when PodLevelResources is disabled (PodLevelResourcesFixDefaulting)

### Which jobs are failing?

All serial node e2e jobs that run the CPU Manager or Memory Manager suites:

- ci-kubernetes-node-kubelet-containerd-resource-managers
- ci-node-crio-resource-managers
- ci-kubernetes-node-swap-ubuntu-serial
- ci-node-crio-swap-serial
- ci-containerd-node-e2e-serial-ec2
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140848)

**Metadata:**
- Created: 2026-07-22
- Comments: 3
- State: open

### kubernetes/kubernetes#140844: kubelet copies IPv6 link-local scoped nameservers from the node resolv.conf into pods where they cannot work

### What happened?

With `dnsPolicy: Default`, kubelet copies the node resolv.conf nameservers into the pod verbatim. When the node file contains an IPv6 link-local nameserver with a scope zone, for example `nameserver fe80::29c:2ff:fea9:fdd0%3`, that exact line is written into the pod `/etc/resolv....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140844)

**Metadata:**
- Created: 2026-07-22
- Comments: 3
- State: open

### kubernetes/kubernetes#140839: Changing batch.kubernetes.io/job-completion-index annotation causes the job controller to miscalculate pods needed to run

### What happened?

The simplest way to reproduce this problem is to follow these steps:
1. Create an Indexed Job with completions: 2 and parallelism: 1, for example. The numbers don't matter here that much.
2. When the first pod is running, modify the following annotation `batch.kubernetes.io/job-c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140839)

**Metadata:**
- Created: 2026-07-22
- Comments: 2
- State: open

### kubernetes/kubernetes#140838: DRA resource health: remove v1alpha1 gRPC API

### What would you like to be added?

As discussed in https://github.com/kubernetes/kubernetes/pull/139477, the v1alpha1 gRPC API (despite its name) is needed for beta of the feature. 1.37 is replace it with with v1 it the mentioned PR gets merged. We should remove it in 1.40, three releases after d...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140838)

**Metadata:**
- Created: 2026-07-22
- Comments: 3
- State: open

### kubernetes/kubernetes#140856: [FG:KubeletAllocatedPodsEndpoint] Add 'allocatedPods' Kubelet endpoint

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Introduces the Kubelet endpoint for surfacing allocated pod information. This endpoint will be used to provide the `/allocated` pod subresource in a later release.

---

The `/allocated` subresource was...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140856)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140855: Fix IssuingManager goroutine deadlock with context cancellation

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:
Add WaitGroup tracking and context observation in runProjectionProcessor and runRefreshPass to ensure proper graceful shutdown. Fixes synctest bubble deadlock where goroutines were not responsive to ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140855)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140853: e2e_node: disable PodLevelResourcesFixDefaulting when PodLevelResources is disabled and vice versa


Disable PodLevelResourcesFixDefaulting in configureCPUManagerInKubelet and configureMemoryManagerInKubelet when PodLevelResources is disabled to satisfy feature gate dependency validation.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, pl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140853)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140852: DRA: move ResourceHealth e2e tests to test/e2e for version-skew coverage

#### What type of PR is this?

/kind cleanup
/sig node
/wg device-management

#### What this PR does / why we need it:

Moves the DRA Resource Health transition tests (device health `Healthy → Unhealthy → Healthy` reflected in pod status, plus negotiation of the DRAResourceHealth gRPC API version) f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140852)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140851: Add cache_to_watcher stage to watch dispatch metric

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140851)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140849: kubelet: Remove obsolete EventedPLEG status handling

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140849)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140847: Fix flaky WorkloadAwarePreemption E2E test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140847)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140845: Store get monitoring

More advanced version of https://github.com/kubernetes/kubernetes/pull/140808 to track down why store.Get takes >1s

/kind feature

```release-note

```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140845)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140843: WIP: Fix TestTimeTravelHealthcheck by making the healthcheck clock overridable

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

Makes `TestTimeTravelHealthcheck` deterministic by driving the healthcheck rate limiter from an overridable clock the test steps, instead of racing a `time.Sleep` against it.

#### Which...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140843)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140842: kubelet/dra: track authoritative device health stream

#### What type of PR is this?

kind bug
/sig node
/wg device-management

#### What this PR does / why we need it:

The DRA plugin manager previously started a `NodeWatchResources` stream for every registered endpoint of a driver. Those streams shared the same per-driver health cache, allowin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140842)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140837: kubelet/dra: validate driver name and endpoint

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

When a DRA plugin registers with kubelet, it advertises its driver name and the UNIX socket kubelet should dial to reach it. Both values came from the plugin and were used without any validation. Kubelet di...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140837)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140836: Remove excessive metrics reporting in wap reprieval

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR removes the metrics reporting during the "reprieve" phase of the WAP. For the benchmark scenario that is added in this PR (1000Nodes_10PreemptorGangs_100Pods_Evicting_50LowPriorityGangs), the Schedu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140836)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140835: Run existing PG scheduler_perf tests with CPG FG enabled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140835)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140834: scheduler_perf: re-enable checkEmptyInFlightEvents

#### What this PR does

Re-enables `checkEmptyInFlightEvents` in scheduler perf tests.

After #140695 reduced scheduler-perf execution time, scheduler perf scenarios could complete before the scheduling queue finished cleaning up in-flight events, causing `checkEmptyInFlightEvents()` to race wit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140834)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140833: Skip Unused condition evaluation for unbound PVCs

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

The PVC protection controller evaluates the `Unused` condition (gated by the `PersistentVolumeClaimUnusedSinceTime` feature) and writes it to the PVC status. During initial binding, this write races with...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140833)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140830: Drop k8s.io/utils/ptr from code-generator

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

code-generator only uses ptr.To, which can be replaced with new() in Go 1.26+. This also trims the allowed imports list for the package.

#### Which issue(s) this PR is related to:

N/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140830)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140829: Drop k8s.io/utils/ptr from genericclioptions

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

genericclioptions only uses ptr.To, which can be replaced with new() in Go 1.26+. This also trims the allowed imports list for the package.

#### Which issue(s) this PR is related to:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140829)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140828: Drop k8s.io/utils/integer

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

k8s.io/utils/integer is entirely deprecated, has a single user in k/k, with a trivial replacement. This drops it and prevents its re-introduction.

#### Which issue(s) this PR is related...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140828)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140826: Revert "Speed up pkg/kubelet/podcertificate tests with synctest"

#### What type of PR is this?

/kind bug
/kind failing-test
/kind flake

#### What this PR does / why we need it:

This reverts commit d17b4548245288515101be6719c0a807cfafe6d2 from https://github.com/kubernetes/kubernetes/pull/138455.

The synctest bubble occasionally fails with:

    --...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140826)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140825: pkg/util/labels: add unit tests for SelectorHasLabel and MatchExpressions

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Adds unit test coverage to `pkg/util/labels/labels_test.go`:
- `SelectorHasLabel` previously had no unit test coverage.
- `CloneSelectorAndAddLabel` previously lacked test cases for `MatchExpressions` cloning and dee...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140825)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1271: [release-1.36] Fix flaky TestStartController_CloudClientRetry

This is an automated cherry-pick of #1267

/assign hdp617

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1271)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1266: fix: ignore NotFound error when removing service finalizers

Ignore "NotFound" errors when patching a service to remove finalizers. 

If a service is forcefully deleted from the API server, the patch fails with 404. 

This prevents the controller from clearing its cache, causing an infinite retry loop of deletion and node syncs. Ignoring this error allows...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1266)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9760: Add cluster-autoscaler releases: 1.33.6, 1.34.5, 1.35.2, 1.36.1

**What this PR does / why we need it**:

This PR promotes the following Cluster Autoscaler releases:

- 1.33.6
- 1.34.5
- 1.35.2
- 1.36.1

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the di...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9760)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9746: Update OWNERS for k8s-staging-cloud-pv-vsphere

**What this PR does / why we need it**:
Remove XudongLiuHarold and add 12345lcr to both reviewers and approvers.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://gith...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9746)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3181: Fix L4 Address Manager IP validation and regex matching bugs

* Change unanchored 'regexp.MatchString' to 'net.ParseIP().Equal()', preventing false positive substring matches (e.g., 10.0.0.1 matching 10.0.0.123).
* Enforce explicit Network Tier and LoadBalancingScheme validation inside 'IsAddressInForwardingRules' to prevent incorrectly paired internal/extern...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3181)

**Metadata:**
- Created: 2026-07-22
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.70.1

## What's Changed
* Update CHANGELOG for v0.70.0 by @roidelapluie in https://github.com/prometheus/common/pull/945
* config: clarify sensitive redirect headers match net/http by @roidelapluie in https://github.com/prometheus/common/pull/924
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/common/pull/946
* build(deps): bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/prometheus/common/pull/950
* build(deps)...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.70.1)

**Metadata:**
- Version: v0.70.1
- Published: 2026-07-22
- Prerelease: No

### envoyproxy/gateway: v1.8.3

# Release Announcement

Check out the [v1.8.3 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.8.3) to learn more about the release.

## What's Changed
* [release-1.8]: bump the gomod group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/envoyproxy/gateway/pull/9389
* [release-1.8]: bump the gomod group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/envoyproxy/gateway/pull/9435
* [release-1.8]: bump the act...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.8.3)

**Metadata:**
- Version: v1.8.3
- Published: 2026-07-22
- Prerelease: No

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump go.opentelemetry.io/otel from 1.39.0 to 1.41.0 [#352](https://github.com/containerd/accelerated-container-image/pull/352) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/1dfec52cc1d0723564fed8d76b3a0ce9a54cb438))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-23
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-23 02:31:17*
