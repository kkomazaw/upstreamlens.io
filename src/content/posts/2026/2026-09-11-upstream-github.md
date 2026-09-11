---
title: "Upstream Github - 2026-09-11"
description: "CNCF upstream activity from github"
pubDate: 2026-09-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "needs-triage", "kind/bug", "sig/storage", "sig/architecture", "area/code-organization", "area/code-organization/future-dependencies", "sig/node", "wg/device-management", "pr", "size/XXL", "kind/api-change", "release-note-none", "cncf-cla: yes", "area/code-generation", "needs-priority", "kind/cleanup", "sig/scheduling", "size/M", "area/kubelet", "cncf-cla: no", "do-not-merge/release-note-label-needed", "ok-to-test", "do-not-merge/needs-kind", "size/L", "area/test", "approved", "sig/testing", "area/apiserver", "area/cloudprovider", "sig/cluster-lifecycle", "release-note", "sig/auth", "sig/apps", "sig/instrumentation", "do-not-merge/work-in-progress", "sig/cloud-provider", "area/dependency", "kind/dependency", "area/kubectl", "kind/feature", "sig/cli", "needs-ok-to-test", "size/XL", "sig/etcd", "needs-rebase", "sig/autoscaling", "lgtm", "do-not-merge/cherry-pick-not-approved", "kind/documentation", "size/XS", "area/github-repo", "area/github-management", "org", "area/cluster-autoscaler", "area/provider/aws", "autoscaler", "area/vertical-pod-autoscaler", "size/S", "cloud-provider-openstack", "website", "triage/duplicate", "area/web-development", "language/ko", "area/localization", "sig/docs", "language/ru", "language/en", "priority/important-soon", "kind/kep", "triage/accepted", "wg/workload-aware-scheduling", "enhancements", "sig/multicluster", "envoyproxy", "gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142016: Proposal: Lifecycle-Aware Persistence for Dormant Kubernetes Custom Resources

Hi SIG API Machinery,

I was hoping to bring a design question to today's SIG meeting, but it looks like the meeting didn't happen, so I wanted to ask here.

We're exploring a pattern for high-cardinality, relatively short-lived CRs where Kubernetes is primarily needed while the resource is actively...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142016)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/org#6636: Add team for security-profile-merger

ref: #6463 
/area github-repo

🔗 [Link](https://github.com/kubernetes/org/pull/6636)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57485: [ru] Sync Hello Minikube tutorial with English documentation

### Description

Update the Russian Hello Minikube tutorial to match the current English version while preserving existing accurate translations.

- Add cluster status checks, application logs, metrics checks, the `/shell` security warning, and a conclusion.
- Update prerequisites, dashboard in...

🔗 [Link](https://github.com/kubernetes/website/pull/57485)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6346: KEP-5732: Update TAS KEP for 1.38 beta

### What this PR does / why we need it:

This PR updates #5732 to promote the enhancement to Beta for v1.38.

### Which issue(s) this PR fixes:

### Special notes for your reviewer:

- PRR approver: @wojtek-t
- Approvers / Reviewers: @dom4ha, @mm4tt 

### Does this PR introduce a user-fac...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6346)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6345: KEP-5547: Promote Job controller integration with WAS to beta

### What this PR does / why we need it:

This PR updates #5547 to promote the enhancement from Alpha to Beta for v1.38.

### Which issue(s) this PR fixes:

### Special notes for your reviewer:

- PRR approver: @wojtek-t
- Approvers / Reviewers: @dom4ha, @soltysh

### Does this PR introduc...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6345)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6342: kep-6089: promote Workload Aware Scheduling Controller APIs to Beta

### What this PR does / why we need it:

This PR updates [KEP-6089: Workload Aware Scheduling Controller APIs](https://github.com/kubernetes/enhancements/tree/master/keps/sig-scheduling/6089-was-controller-apis) to promote the enhancement from **Alpha to Beta** for the **v1.38** milestone.

####...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6342)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6341: KEP-1645: Fix the cluster name in the conflict message example

Use `cluster-b` in the conflict message example so it matches the cluster names used elsewhere in the KEP.

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6341)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6340: KEP-1645: Rename id.k8s.io to cluster.clusterset.k8s.io in the DNS spec

Follow the KEP-2149 rename of the `id.k8s.io ClusterProperty` to `cluster.clusterset.k8s.io`.

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6340)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142008: In-tree FC block teardown skips current-device cleanup when the recorded device path is stale

### What happened?

For an in-tree Fibre Channel raw block volume, kubelet records the resolved raw or device-mapper path used while mapping the volume.

If that recorded nonempty path is no longer present during teardown, `DetachBlockFCDisk` currently treats the missing path as successful teardown....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142008)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/kubernetes#142005: grpc-go v1.83.0+ pulls three unwanted modules via cloud.google.com/go/auth, affecting all future grpc bumps

Split out from https://github.com/kubernetes/kubernetes/issues/141798#issuecomment-5529840093 because this outlives that CVE.

## Problem

grpc-go v1.83.0 made `cloud.google.com/go/auth` a direct dependency. That module requires three modules on our unwanted list:

- `github.com/google/s2a-go` v0.1....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142005)

**Metadata:**
- Created: 2026-09-10
- Comments: 1
- State: open

### kubernetes/kubernetes#142002: DRA kubelet plugin helper can generate overlong rolling-update service socket paths

### What happened?

On current Kubernetes master, the DRA kubelet plugin helper can generate an unusable automatic service socket endpoint when rolling updates are enabled with a valid long driver name.

With normal defaults:

```text
plugin directory:
/var/lib/kubelet/plugins/<driver name>

rolling...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142002)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/kubernetes#142020: enable commentstart check on resource  API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142020)

**Metadata:**
- Created: 2026-09-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142019: DRA: call GatherAllocatedState directly in PreFilter

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142019)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142018: Remove WindowsHostNetwork feature gate

Fixes https://github.com/kubernetes/kubernetes/issues/141987

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142018)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142017: validation-gen: drop the tag stability lint rule

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142017)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142015: ktesting: fix missed auto-cancellation for Run/SyncTest sub-tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Init cancels its TContext automatically when the test ends, via runWhenDone (context.AfterFunc on the test's own context). withTB, used by TContext.Run for sub-tests, never set this up, so a sub-test's TCon...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142015)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142014: DRA: optimize allocated shared device lookups in structured allocator

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142014)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142012: WIP: update go-jose and go-oidc packages to latest versions

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142012)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142010: kubectl: display kuberc aliases in help

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR adds kuberc aliases to the kubectl help output.

#### Which issue(s) this PR is related to:
Fixes #1740
https://github.com/kubernetes/kubectl/issues/1740

#### Special notes for your reviewer:
Al...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142010)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142009: fc: recover block teardown from a stale device path

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

For in-tree FC raw block volumes, kubelet records the resolved device path used for the volume. If that path later disappears, `DetachBlockFCDisk` currently returns `nil` before reaching the exist...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142009)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142007: Refactor apiserver_resource_size_estimate_bytes metric to have a timestamp

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142007)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142006: kubelet: skip cgroup reads when the pod cgroup is gone

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`convertToAPIPodLevelResourcesStatus` only skipped the cgroup read when `Phase != Running`. During teardown the phase is still Running after the pod cgroup is gone, so `GetPodCgroupConfig` hits ENOENT and k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142006)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142004: WIP: Validate pod group runtime hierarchies in kube-scheduler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142004)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142003: DRA kubeletplugin: shorten rolling service socket paths

#### What type of PR is this?

/kind bug
/sig node
/wg device-management

#### What this PR does / why we need it:

With `RollingUpdate`, the DRA kubelet plugin helper normally uses `dra-<Pod UID>.sock` for the automatic service socket. The default plugin directory also contains the full dri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142003)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142001: apiserver: use atomic types for atomic operations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Go now provides atomic types; instead of using plain integer fields with atomic operations, with the risk of missing direct access to the fields, using atomic types ensures that no non-atomic operations are...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142001)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142000: pass HPA to AddListHPAReactor func

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142000)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141999: Handle resource request overflow in the HPA replica calculator

#### What type of PR is this?

/kind bug
/sig autoscaling

#### What this PR does / why we need it:

The HPA replica calculator sums container resource requests in milli-units using unchecked `int64` arithmetic. Two requests of `4611686018427387904m` each are individually representable, but t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141999)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141998: Automated cherry pick of #141648: fix: make nil DeviceTaintSelector match no devices (tracker)

Cherry pick of #141648 on release-1.37.

#141648: fix: make nil DeviceTaintSelector match no devices (tracker)

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141998)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141997: Fix ResourceFieldSelector.Divisor doc: unset or 0 means unscaled

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

The doc comment on `ResourceFieldSelector.Divisor` says the field "defaults to 1". It does not: there is no server-side defaulting for the field, so an object written without a divisor is read back with an ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141997)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141996: Use model to validate linarizability of storage using porcupine library

/kind cleanup

Ref https://github.com/kubernetes/kubernetes/issues/141652

Followup to https://github.com/kubernetes/kubernetes/pull/141729

```release-note
NONE
```

/assign @liggitt 


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141996)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10276: Fix AWS placeholder deletion race

## What this PR does

Fixes a race condition in the AWS Cluster Autoscaler placeholder reconciliation path that can cause healthy, running EC2 instances to be terminated.

When a scale-up partially fails, the AWS provider creates placeholder instances to represent capacity that has not materiali...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10276)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10275: vpa: add helm-unittest tooling and first test for recommender leader-election logic

## What this does

Sets up [helm-unittest](https://github.com/helm-unittest/helm-unittest) for the vertical-pod-autoscaler chart and adds one test suite to start with.

The test covers the recommender's leader election auto enable logic in recommender-deployment.yaml -
- leaderElection.enabled ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10275)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3216: [release-1.36] Bump go.opentelemetry.io/otel to v1.44.0

This is an automated cherry-pick of #3174

/assign stephenfin

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3216)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3215: [cinder-csi-plugin] Implement direct attach mode for baremetal nodes

**What this PR does / why we need it**:

Add `--attach-mode=direct` to the Cinder CSI driver, enabling volume attachment without Nova via the Cinder Attachment API and an os-brick gRPC sidecar. This allows pods on bare-metal (Ironic-provisioned) Kubernetes workers to consume Cinder block storage (...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3215)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57488: Gateway API docs: GRPCRoute example service field missing "User" to match explanation text

**This is a Bug Report**
**Problem:**
On the Gateway API concepts page, the GRPCRoute example YAML and its explanatory text are inconsistent. The YAML sets:


```yaml
rules:
- matches:
  - method:
      service: com.example
      method: Login
```
but the explanation immediately below it states:

> ...

🔗 [Link](https://github.com/kubernetes/website/issues/57488)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/website#57486: Fix feature-state rendering in node-pressure-eviction notes

**This is a Bug Report**

**Problem:** Feature state stage banner not rendered correctly in Node-pressure eviction page under memory signals and filesystem signals sections.

**Proposed Solution:** Move feature state call above the note.

**Page to Update:** https://kubernetes.io/docs/concepts/sched...

🔗 [Link](https://github.com/kubernetes/website/issues/57486)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/website#57484: [ko] Translate content/en/docs/concepts/resource-management/dynamic-resource-allocation/_index.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/resource-management/dynamic-resource-allocation/_index.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/resource-management/dynamic-resource-allocation/

**Why is ...

🔗 [Link](https://github.com/kubernetes/website/issues/57484)

**Metadata:**
- Created: 2026-09-10
- Comments: 1
- State: open

### kubernetes/website#57483: Fix duplicate word in Pod lifecycle docs

### Description

Remove duplicate "remain".

### Issue

None

🔗 [Link](https://github.com/kubernetes/website/pull/57483)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10007: Support per-backendRef locality priority (multi-tier failover) via HTTPRouteFilter

*Description*:

Today the only way to influence Envoy's locality priority from Envoy Gateway's API is `Backend.spec.fallback`, which is a `bool`. It lands as `ds.Priority = 1` during route translation and reaches Envoy as `LocalityLbEndpoints.priority`.

That gives us exactly two priority levels, an...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10007)

**Metadata:**
- Created: 2026-09-10
- Comments: 1
- State: open

### envoyproxy/gateway#10004: Route with two parentRefs to the same Gateway differing only by port reports wrong status (one listener's verdict overwrites the other)

**Description**:
When a route (e.g. an HTTPRoute) has two parentRefs pointing at the same Gateway on different ports (with no sectionName), only one RouteParentStatus entry is reported instead of two. The status of one listener silently overwrites the other, so the reported Accepted/ResolvedRefs con...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10004)

**Metadata:**
- Created: 2026-09-10
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-11 02:57:16*
