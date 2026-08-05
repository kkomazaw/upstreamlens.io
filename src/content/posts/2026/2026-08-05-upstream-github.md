---
title: "Upstream Github - 2026-08-05"
description: "CNCF upstream activity from github"
pubDate: 2026-08-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/XXL", "do-not-merge/hold", "approved", "sig/testing", "sig/release", "area/jobs", "area/images", "area/config", "area/release-eng", "test-infra", "issue", "kind/bug", "kind/cleanup", "sig/api-machinery", "triage/accepted", "kind/feature", "sig/architecture", "needs-triage", "needs-sig", "wg/api-expression", "sig/network", "area/test", "sig/node", "size/M", "release-note-none", "kind/failing-test", "do-not-merge/work-in-progress", "needs-priority", "release-note", "size/L", "sig/instrumentation", "needs-ok-to-test", "area/kubectl", "sig/cli", "cncf-cla: no", "size/XL", "priority/important-soon", "sig/storage", "sig/apps", "ok-to-test", "lgtm", "size/S", "do-not-merge/release-note-label-needed", "area/apiserver", "area/stable-metrics", "sig/etcd", "area/kubelet", "area/dependency", "kind/api-change", "sig/autoscaling", "size/XS", "sig/docs", "area/github-management", "org", "website", "language/zh", "area/localization", "perf-tests", "area/addon-resizer", "autoscaler", "area/cluster-autoscaler", "kind/deprecation", "do-not-merge/needs-area", "kube-state-metrics", "cloud-provider-aws", "containerd", "release", "nerdbox", "overlaybd", "cncf", "sub/project-reviews", "review/governance", "kind/review", "toc", "needs-group", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141157: Migrate to declarative validation: PodSpec.ActiveDeadlineSeconds field

#### What this PR does / why we need it:
This PR migrates the `activeDeadlineSeconds` field under `PodSpec` (`staging/src/k8s.io/api/core/v1/types.go`) to Declarative Validation. 

This is part of KEP-5073 ("Declarative Validation with validation-gen"), which replaces handwritten Go validation ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141157)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56806: Pod Security Standards: Usage of SHOULD and MUST

The web page https://kubernetes.io/docs/concepts/security/pod-security-standards/
should follow RFC 2119 in the use of SHOULD and MUST.

There are some occasions where the word "should is used but it's wrong:

In the section "Restricted":

> The following listed controls _should_ be enforced/disallo...

🔗 [Link](https://github.com/kubernetes/website/issues/56806)

**Metadata:**
- Created: 2026-08-04
- Comments: 1
- State: open

### kubernetes/autoscaler#10107: Add support for apiserver_resource_objects metric

#### What type of PR is this?

/kind bug
/kind feature
/kind deprecation

#### What this PR does / why we need it:

Adds support for the `apiserver_resource_objects` metric, which is present in Kubernetes 1.34+ and replaces the deprecated `apiserver_storage_objects` metric which is no longer...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10107)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2262: [Tech Review]: Higress

### Project name

Higress

### Project link

https://github.com/higress-group/higress

### Due diligence link

Not opened yet. Higress is preparing its CNCF Incubation application and is requesting this Technical Review as a prerequisite.

### Project contact information

- Yuanxiao Zhao: @EndlessSe...

🔗 [Link](https://github.com/cncf/toc/issues/2262)

**Metadata:**
- Created: 2026-08-04
- Comments: 2
- State: open

## Updates

### kubernetes/test-infra#37616: Remove v1.33 jobs

2026-06-28 was EOL for v1.33 (https://kubernetes.io/releases).
We will be removing v1.33 jobs as part of Post Release Branch Creation Tasks for v1.37.0-rc.0

/hold
The hold should only be cancelled once v1.37.0-rc.0 is released and post-release branch creation tasks start

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37616)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141166: Burndown: Quantity int64 overflow and checked accessors

This tracks ongoing and planned work to fix `resource.Quantity`'s int64 accessor overflow behavior.

## Goal

- Resolve all known correctness issues, lock in correct behavior with tests
- Introduce `(<value>, overflow bool)` return typed accessor functions so that callers can detect overflow. These ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141166)

**Metadata:**
- Created: 2026-08-04
- Comments: 14
- State: open

### kubernetes/kubernetes#141162: [Feature request] Single API endpoint for feature gates values

Hello !

I am working on this issue on helm ; https://github.com/helm/helm/issues/31432 and while I was trying to find a solution, an idea came to me. Would it be possible to have k8s expose a single api endpoint, that allow users to get feature gates values from all k8s components from all reachabl...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141162)

**Metadata:**
- Created: 2026-08-04
- Comments: 5
- State: open

### kubernetes/kubernetes#141155: Liveness probe failure container restart leads to container starting up with started=true and liveness probes starting before startup probes have run

### What happened?

The full details of the repro can be seen in the Bash script below, but roughly:

1. Start a container with startup and liveness probe.
2. Wait for both to succeed. All normal so far.
3. Flip liveness probe to fail.
4. Container restarts.
5. New container sees liveness probe befo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141155)

**Metadata:**
- Created: 2026-08-04
- Comments: 2
- State: open

### kubernetes/kubernetes#141153: managedfields.ExtractInto fails with "expected map, got <nil>" when the field manager owns only fields absent from the object (e.g. Secret stringData).

### What happened?

`k8s.io/apimachinery/pkg/util/managedfields.ExtractInto` (and therefore all generated typed extractors in client-go, e.g. `applycorev1.ExtractSecret`) returns an error when the given field manager owns *only* fields that are not present on the supplied object:

```
unable to conv...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141153)

**Metadata:**
- Created: 2026-08-04
- Comments: 3
- State: open

### kubernetes/kubernetes#141152: sig/network: API Server validation error message leaks full ClusterIP CIDR range to low-privileged users

### What happened?

When a user attempts to create a Service with an out-of-bounds `clusterIP` configuration (e.g., `1.1.1.1`), the `kube-apiserver` admission and validation layers reject the request but output the exact allocated `--service-cluster-ip-range` string inside the user-facing error mess...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141152)

**Metadata:**
- Created: 2026-08-04
- Comments: 1
- State: open

### kubernetes/kubernetes#141174: [WIP] node e2e: check the hugepage reporting identity on one sample

#### What type of PR is this?

/kind failing-test
/sig node

#### What this PR does / why we need it:

The test `HugepageAwareMemoryReporting ... with feature gate disabled should include hugepage capacity in memory.available` fails about half of all runs of `ci-kubernetes-node-kubelet-containerd-hu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141174)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141172: client-go: support multiple leader election metrics providers

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Leader-election metrics currently use `sync.Once`, so the first library that registers a provider silently prevents every other library from receiving metrics.

This change retains every registered leader-election me...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141172)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141171: Fix kubectl describe showing memory in millibytes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it

`kubectl describe` could display memory and other byte-sized resources in millibytes, e.g. `107374182400m` instead of a byte count.

This happens because a manifest value such as `memory: 0.1Gi` is not representable a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141171)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141170: [Quantity] Add a baseline accessor test matrix for the int64 overflow burndown

/kind cleanup
/sig api-machinery

This is the shared baseline test for the `resource.Quantity` int64 overflow burndown in #141166. `Quantity` projects through `int64` in `Value`, `MilliValue`, and `ScaledValue`, and several of those projections overflow silently above the `int64` range or round a ne...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141170)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141169: Use Sign() to reject negative quantities in validateBasicResource

<!--  Thanks for sending a pull request! -->

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`validateBasicResource` rejects negative quantities by asking `quantity.Value() < 0`, but `Value()` does not report the sign reliably. It overflows to a positive number for...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141169)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141168: Expand status field wiping detection

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141168)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141167: Remove expired TestPolicyAdmissionV1beta1 integration test

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`TestPolicyAdmissionV1beta1` carried the expiry condition "Remove this test once v1.33 cannot be emulated in v1.37", and that condition is now met: the emulation floor is `binaryVersion.SubtractMinor(3)`, so a 1....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141167)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141165: Remove internal network range from allocator error messages

What type of PR is this?
/kind bug
/sig network

What this PR does / why we need it:
Validation errors for out-of-range ClusterIPs and NodePorts included the exact --service-cluster-ip-range CIDR and port range boundaries in user-facing error messages. This allows low-privileged users (or compr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141165)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141164: Promote apiserver_resource_size_estimate_bytes to BETA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141164)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141163: kubelet: add node-level metrics to CRI stats path

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141163)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141161: Promote apiserver_flowcontrol_priority_level_seat_utilization to BETA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141161)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141159: workqueue: simplify waitingLoop timer handling



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141159)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141158: fix:volumeattachment could not be cleanup while controller-manager restart after volumeattachment created because of csidriver created delay



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141158)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141154: refactor horizontal_test.go

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141154)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6527: Add tiny-li to sig-docs-zh-reviews

I want to join the sig-docs-zh-reviews team.

I have met the [requirements for reviewer](https://github.com/kubernetes/community/blob/master/community-membership.md#reviewer):

-  Member of Kubernetes for 3+ months
- 60+ PRs reviewed:https://github.com/kubernetes/website/pulls?q=is%3Apr+reviewe...

🔗 [Link](https://github.com/kubernetes/org/pull/6527)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56809: Broken sentence and paragraph in content/en/docs/concepts/cluster-administration/coordinated-leader-election.md

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
1. **Line 47** — a ...

🔗 [Link](https://github.com/kubernetes/website/issues/56809)

**Metadata:**
- Created: 2026-08-04
- Comments: 2
- State: open

### kubernetes/website#56805: Document `MutatingAdmissionPolicy` on general "Admission Control" page

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56805)

**Metadata:**
- Created: 2026-08-04
- Comments: 1
- State: open

### kubernetes/website#56794: [zh-cn]sync group-resource-v1-meta group-version-for-discovery-v1-meta

content/zh-cn/docs/reference/kubernetes-api/definitions/group-resource-v1-meta.md
content/zh-cn/docs/reference/kubernetes-api/definitions/group-version-for-discovery-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56794)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56789: [zh] Add update-deployment-rolling.md

Add zh text to:

```
content/zh-cn/docs/tasks/run-application/update-deployment-rolling.md
```

🔗 [Link](https://github.com/kubernetes/website/pull/56789)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4252: Parametrize OOM restarts and ContainerRestarts to be optionally faili…

…ng tests. The default behavior does not change if new params are not used in test configuration

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-co...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4252)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10106: Addon-resizer 1.8.22 instruct pod-nanny to manage only CPU requests while leaving CPU limits unset /area addon-resizer

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
Addon-resizer 1.8.22, pod-nanny

**Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler,...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10106)

**Metadata:**
- Created: 2026-08-04
- Comments: 1
- State: open

### kubernetes/autoscaler#10105: Broken documentation links in cluster-autoscaler README after cloud provider migration

# Summary

Several documentation links in the Cluster Autoscaler documentation reference cloud provider pages that currently return **HTTP 404**, making those sections inaccessible.

## What happened?

While reviewing the Cluster Autoscaler documentation, I found multiple references to cloud provide...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10105)

**Metadata:**
- Created: 2026-08-04
- Comments: 2
- State: open

### kubernetes/kube-state-metrics#3056: Collect `status.nodeInfo.bootID` from `Node` objects

<!-- Please only use this template for submitting feature requests -->

**What would you like to be added:**

I would like a metric exporting the per-node `status.nodeInfo.bootID` field on nodes.

**Why is this needed:**

I would like a metric that detects reboots, when node daemonset collectors (e....

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3056)

**Metadata:**
- Created: 2026-08-04
- Comments: 2
- State: open

### kubernetes/cloud-provider-aws#1477: Automated cherry pick of #1473: Narrow CLB BYO-SG cleanup revoke to the matching UserIdGroupPair

Cherry pick of #1473 on release-1.36.

#1473: Narrow CLB BYO-SG cleanup revoke to the matching UserIdGroupPair

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1477)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdbox: v0.2.2

## What's Changed
* fix(sandbox): add context to vm errors by @austinvazquez in https://github.com/containerd/nerdbox/pull/261
* fix(shim): remove rootfs on all stop exits on windows by @austinvazquez in https://github.com/containerd/nerdbox/pull/262
* build(deps): bump google.golang.org/grpc from 1.82.1 to 1.83.0 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/264


**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.2.1...v0.2.2

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.2)

**Metadata:**
- Version: v0.2.2
- Published: 2026-08-04
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- 75ca5b8: Remove me from the reviewer list (Gao Xiang) [#437](https://github.com/containerd/overlaybd/pull/437)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-04
- Prerelease: Yes

### cncf/toc#2263: [Gov. Review]: Open Cluster Management (OCM)

### Project name

Open Cluster Management (OCM)

### Project link

https://github.com/open-cluster-management-io/ocm/

### Due diligence link



### Project contact information

- [Qiu Jian](https://github.com/qiujian16), jqiu@redhat.com

### Additional information



---

_This issue was automatica...

🔗 [Link](https://github.com/cncf/toc/issues/2263)

**Metadata:**
- Created: 2026-08-04
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-08-05 02:12:46*
