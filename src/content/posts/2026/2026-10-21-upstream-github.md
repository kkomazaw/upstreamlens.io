---
title: "Upstream Github - 2026-10-21"
description: "CNCF upstream activity from github"
pubDate: 2026-10-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/flake", "needs-triage", "sig/k8s-infra", "kind/bug", "needs-sig", "sig/api-machinery", "sig/network", "sig/scalability", "kind/failing-test", "area/provider/aws", "sig/cloud-provider", "pr", "area/kubectl", "release-note", "size/L", "sig/cli", "cncf-cla: yes", "do-not-merge/work-in-progress", "ok-to-test", "needs-priority", "sig/storage", "size/M", "release-note-none", "needs-ok-to-test", "do-not-merge/hold", "sig/security", "kind/cleanup", "size/XL", "kind/api-change", "approved", "area/code-generation", "wg/device-management", "area/test", "sig/node", "size/XXL", "kind/feature", "sig/apps", "sig/instrumentation", "sig/testing", "priority/important-longterm", "do-not-merge/release-note-label-needed", "sig/scheduling", "area/kubelet", "area/apiserver", "sig/auth", "wg/workload-aware-scheduling", "size/S", "cncf-cla: no", "sig/architecture", "triage/accepted", "size/XS", "dependencies", "github_actions", "minikube", "area/cluster-autoscaler", "area/dependency", "autoscaler", "area/vertical-pod-autoscaler", "kind/dependency", "area/provider/azure", "area/provider/cluster-api", "area/provider/gce", "area/provider/rancher", "area/provider/oci", "area/provider/magnum", "area/provider/alicloud", "area/provider/huaweicloud", "needs-rebase", "area/provider/hetzner", "area/provider/externalgrpc", "area/provider/coreweave", "language/en", "website", "lgtm", "sig/docs", "language/zh", "area/localization", "sig/contributor-experience", "area/developer-guide", "community", "envoyproxy", "area/provider", "gateway", "area/policy", "containerd", "release", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143248:  Fix for a low-severity path traversal security issue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143248)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143242: DRA resource pool status: Alpha 1.38 semantics, observability and test coverage


#### What type of PR is this?

/kind feature
/sig node
/wg device-management

#### What this PR does / why we need it:

Alpha v1.38 implementation of KEP-5677 (ResourcePoolStatusRequest):

- Fixes device availability accounting and handles allocations of unpublished devices.
- Returns t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143242)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143235: WIP: KEP-6276 - Integrate Workload APIs with Deployment and ReplicaSet controllers

Signed-off-by: Pannaga Rao Bhoja Ramamanohara

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer gui...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143235)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10450: changes for ignore-unmanaged-node-pool-check-forCA

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-->

#### What this PR does / why we need it:

Cherry pic...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10450)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10449: Ignore unmanaged nodepool check for CA v1.34

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-->

#### What this PR does / why we need it:

Cherry pick commit from ma...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10449)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10448: (draft) test Update huaweicloud_service_manager.go

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
/kind dependency
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

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10448)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#58202: KEP-5972: Dynamic Containers docs placeholder

### Description

Placeholder PR for Dynamic Containers documentation.

### Issue

https://github.com/kubernetes/enhancements/issues/5972

/sig node
/milestone v1.38
/kind feature

🔗 [Link](https://github.com/kubernetes/website/pull/58202)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9227: add some notes on future conformance

Part of [KEP-5922](https://github.com/kubernetes/enhancements/issues/5922). Just adds some notes to `conformance-tests.md` about future-conformance.

(Also explicitly clarifies the fact that conformance tests can test out-of-tree functionality.)

🔗 [Link](https://github.com/kubernetes/community/pull/9227)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143250: [Flaking Test] [sig k8s-infra] gce-cos-default-master kubetest.Up

### Which jobs are flaking?

[ci-kubernetes-e2e-gce-cos-default-master](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-cos-default-master)

### Which tests are flaking?

kubetest.Up
[Triage](https://storage.googleapis.com/k8s-triage/index.html?job=%5Eci-kubernetes-e...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143250)

**Metadata:**
- Created: 2026-10-21
- Comments: 3
- State: open

### kubernetes/kubernetes#143244: Performance bottleneck caused by the KMSv2 KDF cache lock

### What happened?

This is a follow-up to #134002. After we removed the `RecordKeyID` lock locally, decrypt latency was still high under load. Looking again, we found a second lock on the same path, one that had been hidden behind the first.

Every KMSv2 decrypt looks up its derived-key transformer...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143244)

**Metadata:**
- Created: 2026-10-20
- Comments: 6
- State: open

### kubernetes/kubernetes#143233: jsonpath: filter expression fails with "<nil> is not array or slice" on a null list

#### What happened?

A JSONPath filter (`[?(...)]`) applied to a field whose value is `null` fails the whole template with `<nil> is not array or slice and cannot be filtered`. Other array operators skip `null`: `[*]`, `[0]` and slices on the same field return nothing and no error.

A common way to ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143233)

**Metadata:**
- Created: 2026-10-20
- Comments: 2
- State: open

### kubernetes/kubernetes#143231: APIService health checks close HTTP/2 discovery responses early, causing misleading aggregated-server errors

### What happened?

Kubernetes APIService availability checks appear to generate misleading error-level timeout/abort messages in Calico's aggregated API server by closing successful HTTP/2 discovery responses before consuming the body.

This is a follow-up to #133644, which was automatically closed...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143231)

**Metadata:**
- Created: 2026-10-20
- Comments: 2
- State: open

### kubernetes/kubernetes#143229: ci-kubernetes-e2e-ec2-scale-correctness-2000 has never passed: Classic ELB 1,000-instance cap and Topology Hints assertion at 2000 nodes

### Which jobs are failing?

- `ci-kubernetes-e2e-ec2-scale-correctness-2000`, TestGrid tab `amazon-ec2-release#ec2-master-scale-correctness-2000`
- Prow history: https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-ec2-scale-correctness-2000

The job was added in https://git...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143229)

**Metadata:**
- Created: 2026-10-20
- Comments: 2
- State: open

### kubernetes/kubernetes#143249: Block node proxy exec and attach endpoints in kubectl proxy

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143249)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143246: Limit ParseQuantity for exponent notation to e1000 range

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is part of a series:

- https://github.com/kubernetes/kubernetes/pull/143243
- https://github.com/kubernetes/kubernetes/pull/143085
- https://github.com/kubernetes/kubernetes/pull/143245
- This PR

#14324...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143246)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143245: Round ParseQuantity mantissas

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is part of a series:

- https://github.com/kubernetes/kubernetes/pull/143243
- https://github.com/kubernetes/kubernetes/pull/143085
- This PR
- https://github.com/kubernetes/kubernetes/pull/143...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143245)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143243: Expand ParseQuantity testing to cover edge cases

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is part of a series:

- This PR
- https://github.com/kubernetes/kubernetes/pull/143085
- https://github.com/kubernetes/kubernetes/pull/143245
- https://github.com/kubernetes/kubernetes/pull/143246

There ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143243)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143241: e2e: deflake resize deferred tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143241)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143240: scheduler: activate preemptor when victim is already deleted

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

In async preemption, when the last victim pod returns `NotFound` during status patch or deletion, no subsequent deletion event will arrive to un-gate the preemptor. `PreemptPod` previously treated `NotFou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143240)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143239: kubectl proxy: reject exec, attach, and portForward via node proxy

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

`kubectl proxy` serves locally without authentication and forwards requests using the user's kubeconfig credentials. Its default filter (`DefaultPathRejectRE`) blocks pod `exec`/`attach` and the node proxy `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143239)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143237: Migrate template restartPolicy to declarative validation

Tag the pod template of DaemonSet, StatefulSet and ReplicationController with +k8s:subfield(spec)=+k8s:subfield(restartPolicy)=+k8s:eq="Always" under +k8s:alpha(since: "1.38"), and mark the imperative NotSupported errors as covered.

Deployment and ReplicaSet are not tagged: their imperative validat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143237)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143236: kubelet: propagate pod hugepage resources and overhead through CRI

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143236)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143234: jsonpath: skip null values in filter expressions

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`evalFilter` ignored the `isNil` result of `template.Indirect`, so a `null` list reached the array/slice check and the whole template failed with `<nil> is not array or slice and cannot be filtered`. `evalArray`, `ev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143234)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143232: Support non-recursive lazy snapshot

There is not reason not to serve all Watch from lazy snapshot. 

/cc @p0lyn0mial @wojtek-t 

/kind feature

```release-note
NONE
```



#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143232)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143230: kubelet: report health for DRA-backed extended resources

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Extends kubelet device health reporting to DRA-backed extended resources. Previously, only explicit ResourceClaim references were handled.

#### Which issue(s) this PR is related to:

Fixes #140060

#### Special note...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143230)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143228: service/storage: set defaultOnRead Decorator on statusStore

#### What type of PR is this?

/kind bug
/sig network
/sig api-machinery

#### What this PR does / why we need it:

The Service `statusStore` (used for the `services/status` subresource) did not inherit the `defaultOnRead` `Decorator` from the main Service store. As a result, `GET`, `PUT` and `PATCH...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143228)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143227: kubelet: unwrap tombstone in csiNodeUpdater onDriverDelete

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Currently, the `onDriverDelete` handler in the kubelet's CSI node updater only handles direct `*v1.CSIDriver` objects. If a `CSIDriver` is deleted while the informer's watch is disconnected, the deletion is delivered...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143227)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143226: scheduler: only evaluate gated pods when requeuing a gated pod group

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

When a pod group (or composite pod group) is gated by a `PreEnqueue` plugin, `runPreEnqueuePlugins` stops after the first gated pod, and any pod joining an already-gated group via `addToPodGrou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143226)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143224: client-go: add informer list duration metric

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143224)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143223: kubelet: report device counts by resource and health state

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The device manager already tracks how many devices it considers healthy and unhealthy for each resource, and never reports it. The only device-plugin metrics kubelet exposes are `device_plugin_registration_total`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143223)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23909: chore(deps): bump docker/login-action from 3.7.0 to 4.6.0

Bumps [docker/login-action](https://github.com/docker/login-action) from 3.7.0 to 4.6.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/docker/login-action/releases">docker/login-action's releases</a>.</em></p>
<blockquote>
<h2>v4.6.0</h2>
<ul>
<li>Harden ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23909)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10465: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/azidentity from 1.14.1 to 1.15.0 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/azidentity](https://github.com/Azure/azure-sdk-for-go) from 1.14.1 to 1.15.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go/releases">github.com/Azure/azure-sdk-for-go/sdk/azidentity's re...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10465)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10464: dependabot(deps): bump github.com/prometheus/client_golang from 1.24.1 to 1.25.0 in /cluster-autoscaler

Bumps [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) from 1.24.1 to 1.25.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prometheus/client_golang/releases">github.com/prometheus/client_golang's releases</a>.</em></p>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10464)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10463: build(deps): bump the patch-updates in vpa 1.8 branch

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is about `failing-tests or flake...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10463)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10460: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure from 1.36.6 to 1.37.1 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure](https://github.com/kubernetes-sigs/cloud-provider-azure) from 1.36.6 to 1.37.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/cloud-provider-azure/releases">sigs.k8s.io/cloud-provider-azure's releas...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10460)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10451: Ignore unmanaged nodepool check 1.35 v2

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug

Optionally add one or more of the following kinds if applicable:
-->

#### What this PR does / why we need it:

Cherry pick commit from master


#### Which issue(s) this PR fixes:

For nodes not managed by CA , we now don...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10451)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58193: [zh-cn]sync kubectl_config_set-context

content/zh-cn/docs/reference/kubectl/generated/kubectl_config/kubectl_config_set-context.md

🔗 [Link](https://github.com/kubernetes/website/pull/58193)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58192: [zh-cn]sync kubectl_config_set-credentials

content/zh-cn/docs/reference/kubectl/generated/kubectl_config/kubectl_config_set-credentials.md

🔗 [Link](https://github.com/kubernetes/website/pull/58192)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58188: [zh-cn]sync kubectl_config_current-context

content/zh-cn/docs/reference/kubectl/generated/kubectl_config/kubectl_config_current-context.md

🔗 [Link](https://github.com/kubernetes/website/pull/58188)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58187: [zh-cn]sync kubectl_config_get-contexts

content/zh-cn/docs/reference/kubectl/generated/kubectl_config/kubectl_config_get-contexts.md

🔗 [Link](https://github.com/kubernetes/website/pull/58187)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10335: Status updates remove status conditions and entries written by other controllers

*Description*:

The Gateway API asks implementations to leave alone the status they don't own. The notes for implementors on `GatewayStatus.Conditions`, `ListenerStatus.Conditions`, `GatewayClassStatus.Conditions`, `RouteParentStatus.Conditions` and `PolicyAncestorStatus.Conditions` say:

> * Implem...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10335)

**Metadata:**
- Created: 2026-10-20
- Comments: 2
- State: open

### envoyproxy/gateway#10333: Route policy ancestors drop the parentRef's port, so parentRefs that differ only by port share one ancestor

*Description*:

The ancestor that a route policy reports for a route parentRef has no `port`. `getAncestorRefForPolicy` and `getAncestorRefForListenerSetPolicy` build it from the parent's name and the parentRef's `sectionName` only, and `ancestorRefsEqual` does not compare `Port`. This applies to ev...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10333)

**Metadata:**
- Created: 2026-10-20
- Comments: 1
- State: open

### containerd/containerd#14437: Allow disabling skip of prepare API calls in the metadata snapshotter

### What is the problem you're trying to solve

The metadata snapshotter skips calling the backend snapshotter's Prepare API when an existing snapshot has a name maching the "containerd.io/snapshot.ref" label. This prevents the backend snapshotter (e.g. stargz snapshotter) from performing additional...

🔗 [Link](https://github.com/containerd/containerd/issues/14437)

**Metadata:**
- Created: 2026-10-20
- Comments: 0
- State: open

### containerd/containerd#14433: runc shim: /tasks/exit often not published, or published after /tasks/delete, since v2.3.0

### Description

Since v2.3.0, the runc v2 shim often does not publish the `/tasks/exit` event of
a task that is killed and then deleted right away. When it does publish it, it
is sometimes published after the task's `/tasks/delete`. Nothing is logged.

`docs/runtime-v2.md` says a shim MUST publish ...

🔗 [Link](https://github.com/containerd/containerd/issues/14433)

**Metadata:**
- Created: 2026-10-20
- Comments: 1
- State: open

### containerd/overlaybd: Development Build

## Commits
- d375cba: Try accelerator before registry resolution (#469) (Vaibhav Patel) [#469](https://github.com/containerd/overlaybd/pull/469)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-20
- Prerelease: Yes


---

*This content was automatically collected on 2026-10-21 03:15:34*
