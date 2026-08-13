---
title: "Upstream Github - 2026-08-13"
description: "CNCF upstream activity from github"
pubDate: 2026-08-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/node", "sig/scheduling", "pr", "kind/cleanup", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "cncf-cla: yes", "do-not-merge/work-in-progress", "needs-priority", "area/kubelet", "size/M", "needs-ok-to-test", "size/XL", "sig/auth", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/test", "sig/testing", "kind/feature", "wg/device-management", "sig/cluster-lifecycle", "approved", "area/kubeadm", "size/S", "kind/flake", "size/XS", "release-note-none", "area/code-generation", "sig/apps", "cloud-provider-gcp", "language/ko", "area/localization", "website", "language/en", "sig/security", "lgtm", "do-not-merge/hold", "sig/docs", "tide/merge-method-squash", "language/ja", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/aws", "size/XXL", "area/jobs", "area/config", "test-infra", "committee/steering", "area/elections", "community", "kube-state-metrics", "cloud-provider-aws", "kubeadm", "envoyproxy", "gateway", "containerd", "release", "area/cri", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10134: VPA: fix zero request defaulting

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

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10134)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/kubernetes#141346: The pod associated with the Job cannot be deleted after reaching the 'Completed' state.

### What happened?

<img width="938" height="404" alt="Image" src="https://github.com/user-attachments/assets/a5511f4e-675f-4b1d-9d47-7a70edee3708" />


I observed the following error in the kube-controller-manager logs:

<img width="1505" height="183" alt="Image" src="https://github.com/user-attach...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141346)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/kubernetes#141343: Kubelet: Expose ephemeral-storage usage through `/metrics/resource`

## Description
Expose pod/container ephemeral-storage usage through the kubelet `/metrics/resource` endpoint.

Currently `/metrics/resource` exposes resource usage such as CPU and memory, but does not appear to expose ephemeral-storage usage.

### Why is this needed?

Metrics-server gets its resourc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141343)

**Metadata:**
- Created: 2026-08-12
- Comments: 1
- State: open

### kubernetes/kubernetes#141339: PodTopologySpread silently ignores the constraint when `labelSelector` is an empty (non-nil) object `{}`

### What happened?

When a `topologySpreadConstraint` is written with an **empty but non-nil** label selector (`labelSelector: {}`), the constraint is silently treated as a no-op. `maxSkew` and `whenUnsatisfiable: DoNotSchedule` have no effect at all: pods are placed as if the constraint were absent...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141339)

**Metadata:**
- Created: 2026-08-12
- Comments: 2
- State: open

### kubernetes/kubernetes#141335: A misbehaving DRA driver causes kubelet's ListPodResources response to grow unbounded causing rpc error: code = ResourceExhausted desc = grpc: received message larger than max

### What happened?

When a pod holds ResourceClaims from two DRA drivers and one driver's
`NodePrepareResources` fails, kubelet appears to re-prepare the *successful*
driver's claim on every retry and to add its devices to the claim's
device list again each time, without deduplication and without di...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141335)

**Metadata:**
- Created: 2026-08-12
- Comments: 4
- State: open

### kubernetes/kubernetes#141334: kuberuntime: subtracting pod overhead after CPU cgroup conversion is lossy (quota and shares)

### What happened?

`subtractOverheadFromResourceConfig` derives a container's CPU shares by reversing the pod's total shares back to milliCPU and subtracting the overhead:

```go
totalCPUMilli := cm.SharesToMilliCPU(int64(*rc.CPUShares))
cpuShares := cm.MilliCPUToShares(totalCPUMilli - cpu.MilliVal...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141334)

**Metadata:**
- Created: 2026-08-12
- Comments: 2
- State: open

### kubernetes/kubernetes#141347: WIP: Shallow copy watch events instead of deep copying in the watch cache

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Shallow copies watch events in the watch cache instead of deep copying them.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing change?

```release-note
Reduced memory all...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141347)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141345: kubelet: Fix invalid user range selection for user namespaces

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141345)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141344: POC: Preserve the request scope's Kind through response object encoding

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141344)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141342: Fix startup probe gating after container restart

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141342)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141341: feat: implement CBOR encoding/decoding for thread-safe store



#### What type of PR is this?

`ThreadSafeStore` is the backing store for every informer cache in client-go and right now it holds all cached objects as fully deserialized Go values in `map[string]interface{}`. A `*unstructured.Unstructured` object is a deeply-nested `map[string]interface{}` t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141341)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141340: Fix PodTopologySpread ignoring constraints with an empty (non-nil) labelSelector


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141340)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141338: DRA: treat malformed per-device node selectors as node failures

/kind bug

#### What this PR does / why we need it:

A per-device `ResourceSlice` node selector with more than one term can still be present in storage when the slice predates the admission fix or was accepted by an older API server during version skew. The structured allocator currently returns a h...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141338)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141337: Avoid leaking node-specific kubelet config into the ConfigMap

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141337)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141336: scheduler: fix TestPreQueueingHint_Metrics race on metric flush

The Unit test `TestPreQueueingHint_Metrics` flakes when run with stress:
```
Rajalakshmis-MacBook-Air:~ rajalakshmigirish$ git clone https://github.com/kubernetes/kubernetes
Cloning into 'kubernetes'...
remote: Enumerating objects: 1791880, done.
remote: Counting objects: 100% (47/47), done.
r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141336)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141333: Stop counting undispatched bookmarks in watch cache events_dispatched_total

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Moves the `apiserver_watch_cache_events_dispatched_total` increment inside the branch that actually dispatches, so it stops counting the `watch.Bookmark` events that `dispatchEvents` explicitly refuses to dispatch.

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141333)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141331: Add integration tests for scheduling pod groups interleaved with standalone pods

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141331)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141330: Add declarative validation for field equality

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141330)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141329: fix job pod could not be removed while removing finalizer failed

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141329)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141328: scheduler: saturate resource accumulation instead of overflowing

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

`Resource.Add` and `NodeInfo.update` sum a pod's requests into `int64` fields (`MilliCPU`, `Memory`, `EphemeralStorage`, and the scalar resources). Resource quantities can project to values near the `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141328)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-gcp#1291: [Feature] Expand static analysis linter checker repository-wide across all components

### Description
Following the initial linter integration for `metis` in PR #1194, this issue tracks expanding static analysis and linter checks (`revive` / `golangci-lint`) to cover all components across the `cloud-provider-gcp` repository.

### Proposed Implementation Plan
- [ ] **Step 1**: Add the...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1291)

**Metadata:**
- Created: 2026-08-12
- Comments: 1
- State: open

### kubernetes/website#56961: [ko] Update content/ko/docs/reference/access-authn-authz/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/reference/access-authn-authz/_index.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/reference/access-authn-authz/
- English: https...

🔗 [Link](https://github.com/kubernetes/website/issues/56961)

**Metadata:**
- Created: 2026-08-13
- Comments: 1
- State: open

### kubernetes/website#56957: Admin access docs for dynamic resource allocation overstate that non-admin users cannot misuse the feature

**This is a Bug Report**

**Problem:**

The [Admin access](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/#admin-access)
section states:

> "Admin access is a privileged mode and should not be granted to regular users in multi-tenant clusters. Only
> users author...

🔗 [Link](https://github.com/kubernetes/website/issues/56957)

**Metadata:**
- Created: 2026-08-12
- Comments: 3
- State: open

### kubernetes/website#56954: Incorrect annotation count in custom metrics exporter blog post

**This is a Bug Report**

**Problem:**

The English post says `the following two annotations`, but the YAML example lists three. This was found while reviewing #56539.

**Proposed Solution:**

Change `two` to `three`.

**Page to Update:**

- [Published page](https://kubernetes.io/blog/2026/07/14/cus...

🔗 [Link](https://github.com/kubernetes/website/issues/56954)

**Metadata:**
- Created: 2026-08-12
- Comments: 3
- State: open

### kubernetes/website#56947: v1.36.3 missing from the release page

**This is a Bug Report**

Kubernetes v1.36.3 missing from the [release page](https://kubernetes.io/releases/).
**Problem:**

Kubernetes v1.36.3 missing from the [release page](https://kubernetes.io/releases/).
**Proposed Solution:**

v1.36.3 gets added to the release page, v1.36.4 gets added to the ...

🔗 [Link](https://github.com/kubernetes/website/issues/56947)

**Metadata:**
- Created: 2026-08-12
- Comments: 2
- State: open

### kubernetes/website#56956: Document Metrics API in observability concepts

### Description

Add the Metrics API documentation to the concepts page.

#56349 has been merged and marked as Tracked for Docs Freeze, but the SIG Docs reviewers would like to add more to the concept section, so I've opened this PR.

Please let me know if I need to attach a Docs Freeze Except...

🔗 [Link](https://github.com/kubernetes/website/pull/56956)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56940: [ja] Translate content/en/docs/reference/glossary/disruption.md into Japanese

### Description

Translated `content/en/docs/reference/glossary/disruption.md` into Japanese: `content/ja/docs/reference/glossary/disruption.md`.

#### Website Link:
- English: https://kubernetes.io/docs/reference/glossary/?fundamental=true#term-disruption

### Issue

Closes: #56852

🔗 [Link](https://github.com/kubernetes/website/pull/56940)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10133: Fix AWS CSI scale-up from zero by populating CSI node topology

## Summary

Fix AWS Cluster Autoscaler scale-up from zero for node groups using CSI-backed volumes with topology constraints.

When an AWS node group has zero running nodes, Cluster Autoscaler builds a synthetic `NodeInfo` from the ASG instance template. Previously, this `NodeInfo` did not inclu...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10133)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37675: kops: fix ipv6 karpenter jobs passing flags nothing reads

`e2e-kops-aws-ipv6-karpenter` and `pull-kops-e2e-aws-ipv6-karpenter` both set:

```yaml
- name: OVERRIDES
  value: "--ipv6 --topology=private --bastion"
```

but the karpenter scenario never reads `OVERRIDES`. `tests/e2e/scenarios/karpenter/run-test.sh` builds `CREATE_ARGS` entirely from hardcoded v...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37675)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37674: kops: use KOPS_CONTROL_PLANE_COUNT and drop unused preset-e2e-platform-aws

Two independent cleanups to the kops job configs, both no-ops at runtime.

**1. `KOPS_CONTROL_PLANE_SIZE` -> `KOPS_CONTROL_PLANE_COUNT`** (30 jobs)

The kops e2e scenario scripts have accepted `KOPS_CONTROL_PLANE_COUNT` since kubernetes/kops#15628 (July 2023). Today `tests/e2e/scenarios/lib/common.s...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37674)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9114: [Steering Election 2026]Add org members as eligible voters

This PR adds Kubernetes org members (kubernetes, kubernetes-sigs, kubernetes-client, kubernetes-csi) as eligible voters for the 2026 Steering Committee election as a followup to issue https://github.com/kubernetes/steering/issues/314 to address the GitHub contribution data gap for the first four mon...

🔗 [Link](https://github.com/kubernetes/community/pull/9114)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3089: feat: reduce kube_pod_status_reason cardinality

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

`kube_pod_status_reason` emitted one row per entry in the hardcoded `podStatusReasons` list for every pod, with value 0 or 1, regardless of how many reasons kube-state-metrics knows about or whether the pod eve...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3089)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3088: feat: add kube_pod_status_disruption_reason metric

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

`kube_pod_status_reason` only matches `pod.status.reason`, condition reasons, and terminated container reasons against a fixed list. Pods evicted through the Eviction API (`kubectl drain`, PDB-aware evictions, aut...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3088)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1479: Add terminal AWS API error metric (count per logical call, not per attempt)

**What type of PR is this?**
/kind bug

**What this PR does / why we need it:**

`cloudprovider_aws_api_response_status_total` is recorded by a Deserialize
middleware, which runs *inside* the AWS SDK's retry loop and reads the HTTP
status from `out.RawResponse`. As a result it increments **on...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1479)

**Metadata:**
- Created: 2026-08-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubeadm#3327: kubeadm init persists local resolvConf path into global kubelet-config ConfigMap, breaking mixed-distro clusters

### What happened?

During kubeadm init on hosts with systemd-resolved (e.g., Ubuntu), kubeadm detects /run/systemd/resolve/resolv.conf and uploads this host-specific path to the cluster-wide kubelet-config ConfigMap.  
When worker nodes on different distributions (e.g., Rocky Linux, RHEL) join, the...

🔗 [Link](https://github.com/kubernetes/kubeadm/issues/3327)

**Metadata:**
- Created: 2026-08-12
- Comments: 11
- State: open

### envoyproxy/gateway#9726: Client certificate SDS secret not delivered for ext service clusters (EnvoyExtensionPolicy ext_proc / ext_authz), breaking backend mTLS

## Description

When `EnvoyProxy.spec.backendTLS.clientCertificateRef` is configured and an `EnvoyExtensionPolicy` routes to an ext_proc backend that requires mutual TLS (the backend validates client certificates), the generated cluster's `transport_socket_matches` correctly references the client ce...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9726)

**Metadata:**
- Created: 2026-08-12
- Comments: 1
- State: open

### containerd/containerd: containerd 2.3.4

Welcome to the v2.3.4 release of containerd!

The fourth patch release for containerd 2.3 contains various fixes and updates.

### Highlights

#### Container Runtime Interface (CRI)

* Disable checkpoint restore in CreateContainer by default, requiring the enable_experimental_restore_via_create configuration option to enable ([#13913](https://github.com/containerd/containerd/pull/13913))
* Set default runtimeFeatures.UserNamespacesHostNetwork to true in CRI ([#13914](https://github.com/container...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.4)

**Metadata:**
- Version: v2.3.4
- Published: 2026-08-12
- Prerelease: No

### containerd/containerd: containerd 2.2.7

Welcome to the v2.2.7 release of containerd!

The seventh patch release for containerd 2.2 contains various fixes and updates.

### Highlights

#### Container Runtime Interface (CRI)

* Disable checkpoint restore in CreateContainer by default, requiring the enable_experimental_restore_via_create configuration option to enable ([#13937](https://github.com/containerd/containerd/pull/13937))
* Deprecate checkpoint restore in CreateContainer ([#13872](https://github.com/containerd/containerd/pull/13...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.7)

**Metadata:**
- Version: v2.2.7
- Published: 2026-08-12
- Prerelease: No

### containerd/containerd#13952: containerd crash with program exceeds 10000-thread limit - container-log FIFO open leaks an OS thread per failed CreateContainer

### Description

On a busy Kubernetes node, containerd crashed with:

```
runtime: program exceeds 10000-thread limit
fatal error: thread exhaustion
```

The process had leaked OS threads steadily over ~17 hours until it hit Go's default maxmcount (10,000), then aborted. A goroutine dump taken at cr...

🔗 [Link](https://github.com/containerd/containerd/issues/13952)

**Metadata:**
- Created: 2026-08-12
- Comments: 2
- State: open

### containerd/overlaybd: Development Build

## Commits
- 89b63a5: [bugfix] fix prefetcher deconstruct (zhuangbowei.zbw) [#441](https://github.com/containerd/overlaybd/pull/441)
- 431a177: [bugfix] dynamic prefetcher on directory requires lstat() (zhuangbowei.zbw) [#441](https://github.com/containerd/overlaybd/pull/441)
- 8dea667: auto mkdir -p registry cache (zhuangbowei.zbw) [#441](https://github.com/containerd/overlaybd/pull/441)
- d751728: legacy local file '.commit' (zhuangbowei.zbw) [#441](https://github.com/containerd/overlaybd/pull...

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-12
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-13 01:45:29*
