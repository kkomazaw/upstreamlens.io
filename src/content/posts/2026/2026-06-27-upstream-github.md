---
title: "Upstream Github - 2026-06-27"
description: "CNCF upstream activity from github"
pubDate: 2026-06-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "area/testgrid", "cncf-cla: yes", "size/M", "approved", "sig/cli", "sig/network", "area/provider/openstack", "sig/api-machinery", "sig/apps", "area/provider/azure", "area/provider/gcp", "sig/testing", "sig/cluster-lifecycle", "sig/architecture", "sig/node", "sig/instrumentation", "sig/scalability", "sig/release", "sig/auth", "area/provider/aws", "sig/scheduling", "sig/windows", "sig/contributor-experience", "sig/storage", "area/jobs", "area/provider/vmware", "area/provider/ibmcloud", "sig/cloud-provider", "area/config", "area/label_sync", "area/conformance", "area/release-eng", "sig/security", "area/artifacts", "sig/k8s-infra", "sig/etcd", "wg/device-management", "area/kro", "test-infra", "issue", "kind/bug", "needs-triage", "triage/accepted", "sig/docs", "kind/flake", "sig/autoscaling", "kind/failing-test", "size/L", "release-note-none", "needs-priority", "area/test", "area/kubelet", "release-note", "kind/api-change", "kind/feature", "needs-ok-to-test", "area/code-generation", "kind/cleanup", "size/XS", "do-not-merge/needs-sig", "cncf-cla: no", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "priority/backlog", "area/apiserver", "size/S", "lgtm", "area/cluster-autoscaler", "area/core-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "size/XL", "ok-to-test", "area/provider/oci", "containerd", "release", "nerdbox"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140052: Kep-5996: Add kubelet configuration "DefaultPodSysctls" with featureGate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140052)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9872: Make tainting concurrency configurable and improve context propagation

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9872)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/test-infra#37345: Add labels for kubernetes/contributor-site

Mirror repo-specific labels from kubernetes/website to kubernetes/contributor-site.

Labels added:
- area/blog, area/contributor-comms, area/release-eng, area/web-development
- refactor (PRs only)

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37345)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140053: DRA: Concurrent scheduling cycles for shared PodGroup ResourceClaims fail with "claim got allocated elsewhere in the meantime"

### What happened?

When multiple pods in a `PodGroup` share an unallocated `ResourceClaim` (e.g., gang scheduling with `minCount >= 2`), concurrent scheduling cycles run into a race condition during `PreBind` inside `DynamicResources.bindClaim`.

Specifically:
1. Pod A and Pod B both pass `Reserve`...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140053)

**Metadata:**
- Created: 2026-06-26
- Comments: 3
- State: open

### kubernetes/kubernetes#140050: OpenAPI spec types PodExecOptions Command incorrectly

### What happened?

The OpenAPI spec types the `Command` parameter of `PodExecOptions` as `string`:

```json
"schema": {
  "type": "string",
  "uniqueItems": true
}
```

However, the Go type is `[]string`, and the docs indicate that it's an argv array: https://github.com/kubernetes/kubernetes/blob/d...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140050)

**Metadata:**
- Created: 2026-06-26
- Comments: 2
- State: open

### kubernetes/kubernetes#140046: [IPPR] Deferred resizes can overestimate request footprint

/kind bug

When the scheduler computes the aggregate resources of a Pod, it uses the maximum of desired, allocated and actual resources for each container.

The problem is we're doing this before the aggregation step. Consider this case:

Pod with 2 containers, c1 & c2
  - Desired:
    - c1: 1 CPU
 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140046)

**Metadata:**
- Created: 2026-06-26
- Comments: 4
- State: open

### kubernetes/kubernetes#140043: kubectl get <category> (aka category-expansion feature) is lacking documentation, making it hard to discover and use

### What happened?

It is hard for users to
* discover that kubectl support category-expanded resources syntax `kubectl get <category>`
  including the special `all` category.
* to discover available categories for use in `kubectl get <category>`
* to understand the expected semantics of `kubectl ge...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140043)

**Metadata:**
- Created: 2026-06-26
- Comments: 2
- State: open

### kubernetes/kubernetes#140041: [Flaky] TestControllerSyncPool/multiple-resourceslices-existing-with-different-resource-pool-generation

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/139686/pull-kubernetes-unit/2070237634021560320

### Which tests are flaking?

TestControllerSyncPool/multiple-resourceslices-existing-with-different-resource-pool-generation

### Since when has it been flaking?...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140041)

**Metadata:**
- Created: 2026-06-26
- Comments: 4
- State: open

### kubernetes/kubernetes#140040: [Flake] TestScaleCPU/scale_up_ignores_deletion_pods

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/139142/pull-kubernetes-unit/2070374431959552000

### Which tests are flaking?

TestScaleCPU/scale_up_ignores_deletion_pods

### Since when has it been flaking?

This test has been introduced in https://github.co...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140040)

**Metadata:**
- Created: 2026-06-26
- Comments: 4
- State: open

### kubernetes/kubernetes#140039: ci-containerd-e2e-ubuntu-gce failed for runc v1.5.0

### Which jobs are failing?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-containerd-e2e-ubuntu-gce/2070389396091179008

### Which tests are failing?

setup

### Since when has it been failing?

today

### Testgrid link

https://testgrid.k8s.io/sig-node-containerd#containerd-e2e-ubuntu

##...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140039)

**Metadata:**
- Created: 2026-06-26
- Comments: 3
- State: open

### kubernetes/kubernetes#140037: Kubelet emits transient `object "<ns>"/"<name>" not registered` (FailedMount) on cold start


## What happens

On kubelet start/restart (node reboot, kubelet upgrade, cold node join), pods that mount secret
or configMap volumes intermittently fail to mount with a `FailedMount` event:

```
MountVolume.SetUp failed for volume "sec" : object "bootrace-min"/"s37" not registered
```

It is trans...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140037)

**Metadata:**
- Created: 2026-06-26
- Comments: 1
- State: open

### kubernetes/kubernetes#140054: scheduler: reactivate preemptor after in-memory preemption

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140054)

**Metadata:**
- Created: 2026-06-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140051: Promote sample-device-plugin e2e test image to 1.8.0

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we negenerteed it:

bump sample device plugin to latest

#### Does this PR introduce a user-facing change?

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140051)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140049: validation-gen: Stop setting locked GA DeclarativeValidation gate in DV test harness

The gate is GA and locked to true, so explicitly setting it in the equivalence test harness only emits a 'setting GA feature gate' warning without changing behavior. Rely on its locked default instead.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your fir...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140049)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140048: [WIP, not ready for review] Inject top controller name and type directly in pod's annotation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140048)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140047: fix: Compute aggregate requests from max of sums to prevent articial inflation

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Aggregate desired, allocated, and actuated resources independently before taking the max. See https://github.com/kubernetes/kubernetes/issues/140046 for more details.

#### Which issue(s) this PR is related t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140047)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140045: Fix eviction grace period

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
When `--eviction-max-pod-grace-period` is set to a negative value, the flag help
text says it should "defer to pod specified value." Instead, the negative value
passes through `min()`, which always picks the nega...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140045)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140044: Cleanup: hidden metrics for apiserver

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Cleanup deprecated metrics.
This will have no impact for end-users as these metrics are hidden once deprecated.

#### Which issue(s) this PR is related to:

Split from #136720

#### Special notes for...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140044)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140042: Adding ClientNodeSelection Configuration to Second Pod In Expand Test

/kind flake

#### What this PR does / why we need it:

The "should resize volume when PVC is edited and the pod is re-created on the same node after controller resize is finished" test deleted the original pod and re-created a second pod pinned to the same node using a bare NodeSelection{Name: n...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140042)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140038: cleanup: hidden metrics for pod log

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Cleanup deprecated metrics.
This will have no impact for end-users as these metrics are hidden once deprecated.

#### Which issue(s) this PR is related to:

Split from #136720

#### Special notes for...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140038)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140035: deflake subPath stale bind-mount remount e2e

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:
Retries the crictl stop call in the subPath stale bind-mount remount e2e
test to handle transient containerd gRPC client failures (RST_STREAM /
DeadlineExceeded). crictl stop is idempotent; a bounded retry with a gua...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140035)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140034: rbac: enable commentstart kube-api-linter rule

Enables the `commentstart` kube-api-linter (KAL) rule for the `rbac` API group by removing it from the rule's exclusion list in `hack/kube-api-linter/exceptions.yaml` and updating the field godoc comments in `rbac/v1`, `rbac/v1alpha1`, and `rbac/v1beta1` to start with the serialized (JSON) field nam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140034)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140033: fix: correct description for ClusterTrustBundle

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140033)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9877: Clarifying the intended behavior of NodeGroupForNode(), HasInstance(), and related methods

tl;dr:
This is a follow-up to the ClusterStateRegistryBug tracked in #9813. That specific bug was fixed on the CSR side, but CSR can still behave in the exact same buggy way if certain CloudProvider methods behave a certain way. This issue is an attempt to clarify the intended behavior of all the re...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9877)

**Metadata:**
- Created: 2026-06-27
- Comments: 1
- State: open

### kubernetes/autoscaler#9876: cleanup: remove redundant in-place resize log

Summary
- Remove the lower-level in-place skip disruption budget log line while keeping the higher-level log that includes controller context.

Testing
- `go test ./pkg/updater/restriction` from `vertical-pod-autoscaler`

Fixes #9870

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9876)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9873: [metric]: implement per node group node count metric

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Introduce new metric requested by one of the users as POC. If we want to introduce any other metric, feel free to comment here and I can work on this

#### Which issue(s) this PR fixes:
Fixes #5850

#### S...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9873)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9869: feat(oci): support node-template tags for OKE node pools

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This adds node-template freeform tag support for OCI OKE node pools.

OKE node pools can now provide Cluster Autoscaler template hints for:

- labels
- taints
- resources
- per-node-group autoscaling...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9869)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdbox: v0.2.0

## What's Changed
* build(deps): bump github.com/mdlayher/vsock from 1.2.1 to 1.3.0 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/216
* build(deps): bump github.com/ebitengine/purego from 0.10.0 to 0.10.1 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/215
* build(deps): bump actions/checkout from 6.0.2 to 6.0.3 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/214
* Add shimtest conformance and stress suites by @dmcgowan in https://githu...

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.0)

**Metadata:**
- Version: v0.2.0
- Published: 2026-06-26
- Prerelease: No


---

*This content was automatically collected on 2026-06-27 02:53:04*
