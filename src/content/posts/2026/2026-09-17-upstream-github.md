---
title: "Upstream Github - 2026-09-17"
description: "CNCF upstream activity from github"
pubDate: 2026-09-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/autoscaling", "needs-triage", "sig/cli", "sig/node", "priority/important-longterm", "kind/failing-test", "triage/accepted", "pr", "sig/storage", "size/M", "release-note-none", "cncf-cla: yes", "needs-priority", "do-not-merge/cherry-pick-not-approved", "size/L", "sig/apps", "release-note", "size/XL", "needs-ok-to-test", "sig/api-machinery", "ok-to-test", "sig/scheduling", "approved", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "area/test", "kind/cleanup", "kind/api-change", "sig/testing", "area/apiserver", "cncf-cla: no", "area/kubectl", "sig/network", "area/kubelet", "area/cloudprovider", "size/XXL", "area/release-eng", "sig/auth", "sig/instrumentation", "sig/release", "sig/architecture", "sig/cloud-provider", "do-not-merge/invalid-owners-file", "area/e2e-test-framework", "area/dependency", "wg/device-management", "wg/workload-aware-scheduling", "kind/feature", "website", "triage/duplicate", "good first issue", "help wanted", "area/blog", "lgtm", "sig/docs", "language/zh", "area/localization", "size/XS", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/oci", "area/provider/aws", "area/provider/azure", "needs-rebase", "area/provider/cluster-api", "area/provider/gce", "area/provider/rancher", "area/provider/magnum", "area/provider/alicloud", "area/provider/huaweicloud", "area/provider/externalgrpc", "area/prow", "sig/k8s-infra", "k8s.io", "sig/security", "enhancements", "prometheus", "release", "client_java", "containerd", "area/cri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142157: hpa: evaluate actuated status.resources during in-place pod vertical scaling

#### What type of PR is this?

/kind bug
/sig autoscaling
/area hpa

#### What this PR does / why we need it:

Under In-Place Pod Vertical Scaling (KEP-1287 / KEP-2837), `pod.Spec` is updated immediately when a resize is requested, while node actuation by Kubelet and CRI is asynchronous.

Previously...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142157)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6377: KEP-6377: Generating VEX feed for Kubernetes

### Enhancement Description

- One-line enhancement description (can be used as a release note): Generate and publish VEX documents for Kubernetes master branch via periodic prow jobs and Vexflow
- Kubernetes Enhancement Proposal: https://github.com/kubernetes/enhancements/pull/6376
- Discussion Lin...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6377)

**Metadata:**
- Created: 2026-09-16
- Comments: 1
- State: open

### containerd/containerd: containerd 2.4.0

Welcome to the v2.4.0 release of containerd!

containerd 2.4 is a regular (non-LTS) release with a shorter support window,
intended for users who want to adopt new features sooner. As the release
following the 2.3 LTS, it is the point in the release cycle where previously
deprecated features may be removed, so this release may include breaking
changes; check the notes below and clear any deprecation warnings from your
current version before upgrading.

Users prioritizing stability and a longer s...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.4.0)

**Metadata:**
- Version: v2.4.0
- Published: 2026-09-16
- Prerelease: No

### containerd/containerd#14172: [SIG-Node]: KEP-5365 - ImageVolume with an image digest

### KEP/SIG-Node References

- KEP(s): KEP-5365 - ImageVolume with an image digest
- stage:
	- Alpha: 1.36.
	- Beta: 1.38 (hopefully).
- KEP Issue: https://github.com/kubernetes/enhancements/issues/5365.
- KEP PR: https://github.com/kubernetes/enhancements/pull/5375.
- KEP File: https://github.com/k...

🔗 [Link](https://github.com/containerd/containerd/issues/14172)

**Metadata:**
- Created: 2026-09-16
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#142155: [HPA] ReplicaCalculator evaluates unactuated pod.spec instead of pod.status during In-Place Pod Vertical Scaling

### What happened?

In `pkg/controller/podautoscaler/replica_calculator.go`, `ReplicaCalculator` evaluates pod and container resource requests strictly from `pod.spec`:
- In [`calculatePodRequestsFromContainers`](https://github.com/kubernetes/kubernetes/blob/16f2372dd50524c61f7bd752315c5ecb8490ef9e/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142155)

**Metadata:**
- Created: 2026-09-16
- Comments: 4
- State: open

### kubernetes/kubernetes#142148: kubectl events breaks table layout on multi-line event messages

### What happened?

`kubectl events` renders each event as one tab-separated row and passes the
message to the tabwriter unchanged. A tabwriter ends a row at a line break,
so a multi-line message (e.g. from a failing exec probe) is printed as extra
lines that belong to no event and carry no columns ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142148)

**Metadata:**
- Created: 2026-09-16
- Comments: 4
- State: open

### kubernetes/kubernetes#142147: [Failing Test] ci-kubernetes-node-e2e-containerd-serial failing with rotating specs

### Which jobs are failing?

- `ci-kubernetes-node-e2e-containerd-serial` (prow job name resolved via TestGrid `table` endpoint `.query = kubernetes-ci-logs/logs/ci-kubernetes-node-e2e-containerd-serial`)
  - TestGrid tab: https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-serial

### Which tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142147)

**Metadata:**
- Created: 2026-09-16
- Comments: 4
- State: open

### kubernetes/kubernetes#142168: Refuse UNC symlink targets in Windows subPath resolution

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The subPath symlink resolver on Windows only treated the \?\ and \.device forms as non-followable and let ordinary UNC paths such as \attacker\share through.

Treat any path beginning with \ as a device/UNC path ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142168)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142167: Refuse UNC symlink targets in Windows subPath resolution

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The subPath symlink resolver on Windows only treated the \?\ and \.device forms as non-followable and let ordinary UNC paths such as \attacker\share through.

Treat any path beginning with \ as a device/UNC path ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142167)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142166: Refuse UNC symlink targets in Windows subPath resolution

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The subPath symlink resolver on Windows only treated the \?\ and \.device forms as non-followable and let ordinary UNC paths such as \attacker\share through.

Treat any path beginning with \ as a device/UNC path ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142166)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142165: Refuse UNC symlink targets in Windows subPath resolution

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The subPath symlink resolver on Windows only treated the \?\ and \.device forms as non-followable and let ordinary UNC paths such as \attacker\share through.

Treat any path beginning with \ as a device/UNC path ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142165)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142164: Refuse UNC symlink targets in Windows subPath resolution

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The subPath symlink resolver on Windows only treated the \?\ and \.device forms as non-followable and let ordinary UNC paths such as \attacker\share through.

Treat any path beginning with \ as a device/UNC path ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142164)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142163: Restore only .spec part from ControllerRevision for any StatefulSet

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This ensures that only `StatefulSet`'s `.spec` field is restored from `ControllerRevision`, to prevent eventual modifications to other parts of the resource. 

#### Which issue(s) this PR is related to:
N/A

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142163)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142162: Restore only .spec part from ControllerRevision for any StatefulSet

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This ensures that only `StatefulSet`'s `.spec` field is restored from `ControllerRevision`, to prevent eventual modifications to other parts of the resource. 

#### Which issue(s) this PR is related to:
N/A

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142162)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142161: Restore only .spec part from ControllerRevision for any StatefulSet

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This ensures that only `StatefulSet`'s `.spec` field is restored from `ControllerRevision`, to prevent eventual modifications to other parts of the resource. 

#### Which issue(s) this PR is related to:
N/A

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142161)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142160: Restore only .spec part from ControllerRevision for any StatefulSet

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This ensures that only `StatefulSet`'s `.spec` field is restored from `ControllerRevision`, to prevent eventual modifications to other parts of the resource. 

#### Which issue(s) this PR is related to:
N/A

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142160)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142159: Restore only .spec part from ControllerRevision for any StatefulSet

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This ensures that only `StatefulSet`'s `.spec` field is restored from `ControllerRevision`, to prevent eventual modifications to other parts of the resource. 

#### Which issue(s) this PR is related to:
N/A

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142159)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142156: Fix canonical exponent overflow

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Canonicalizing a quantity such as `1000e2147483647` moves trailing zeroes from the mantissa into the exponent. That addition overflowed the internal `int32` exponent and caused the quantity to serialize as the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142156)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142154: hpa: exclude pod overhead from pod-level request calculations

When evaluating pod-level resource requests in `calculatePodLevelRequests`, `ReplicaCalculator` previously passed an uninitialized `PodResourcesOptions`, defaulting `ExcludeOverhead` to `false`. This included `pod.spec.overhead` in the request denominator, depressing calculated utilization for sandb...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142154)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142152: [WIP] [DO NOT REVIEW] Run node-oriented plugins only on relevant nodes during preemption

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142152)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142151: autoscaling: graduate HPA declarative validation to stable

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Graduates declarative validation of the HorizontalPodAutoscaler `spec.minReplicas` and `spec.maxReplicas` fields from beta to stable.

- Drops the `+k8s:beta(since: "1.37")` wrapper from the validation tags o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142151)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142150: [release-1.36] Backport admission policy parameter cache-miss fallback

#### What type of PR is this?

/kind bug
/sig api-machinery
/area apiserver

#### What this PR does / why we need it:

Backports the ValidatingAdmissionPolicy and MutatingAdmissionPolicy parameter cache-miss fallback from #134423, together with the follow-up that makes direct-GET objects match infor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142150)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142149: kubectl: keep a multi-line event message inside its table row



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142149)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142146: POC: ktesting: publishing via staging

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The main motivation is to enable the use of ktesting in all code developed in the kubernetes/kubernetes repository, including staging repos. Currently it can be used only in core Kubernetes tests, not stagi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142146)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142143: Add integration test that checks if NNN is set during preemption and cleared after binding in podgroup preemption



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142143)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142140: Unify PodGroup hierarchy traversal between cache and snapshot

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it
> [!IMPORTANT]
> Stacked on https://github.com/kubernetes/kubernetes/pull/141030 — only the last commit is new.

Follow-up to @macsko's review on #141030: `cacheI...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142140)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57569: Improve validation of internal links and declared redirects

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57569)

**Metadata:**
- Created: 2026-09-16
- Comments: 1
- State: open

### kubernetes/website#57568: Feature State banner is not rendered properly within note block in docs

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

I noticed that "Fe...

🔗 [Link](https://github.com/kubernetes/website/issues/57568)

**Metadata:**
- Created: 2026-09-16
- Comments: 2
- State: open

### kubernetes/website#57558: Unwanted initial heading for 2026-08-28 blog article

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
https://kubernetes....

🔗 [Link](https://github.com/kubernetes/website/issues/57558)

**Metadata:**
- Created: 2026-09-16
- Comments: 3
- State: open

### kubernetes/website#57567: [zh-cn]sync apiserver-admission.v1

content/zh-cn/docs/reference/config-api/apiserver-admission.v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57567)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57566: [zh-cn]sync kube-proxy-config.v1alpha1

content/zh-cn/docs/reference/config-api/kube-proxy-config.v1alpha1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57566)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57565: [zh-cn]sync kubelet-config.v1alpha1

content/zh-cn/docs/reference/config-api/kubelet-config.v1alpha1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57565)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57564: [zh-cn]sync apiserver-config.v1beta1

content/zh-cn/docs/reference/config-api/apiserver-config.v1beta1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57564)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57563: [zh-cn]sync kube-scheduler-config.v1

content/zh-cn/docs/reference/config-api/kube-scheduler-config.v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57563)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57562: [zh-cn]sync client-authentication.v1

content/zh-cn/docs/reference/config-api/client-authentication.v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57562)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57561: [zh-cn]sync client-authentication.v1beta1 kubeconfig.v1

content/zh-cn/docs/reference/config-api/client-authentication.v1beta1.md
content/zh-cn/docs/reference/config-api/kubeconfig.v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57561)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57560: [zh-cn]sync dra-features

content/zh-cn/docs/concepts/resource-management/dynamic-resource-allocation/dra-features.md

🔗 [Link](https://github.com/kubernetes/website/pull/57560)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10304: VPA: Pod update is not respecting a limit

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: 1.7.1

**What k8s version are you using (`kubectl version`)?**:

<details><summ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10304)

**Metadata:**
- Created: 2026-09-16
- Comments: 2
- State: open

### kubernetes/autoscaler#10302: VPA: recommender logs errors if it finds a checkpoint from another recommender

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one of the following areas:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10302)

**Metadata:**
- Created: 2026-09-16
- Comments: 2
- State: open

### kubernetes/autoscaler#10301: GPU-labeled unmanaged node without GPU capacity aborts cluster-wide scale-up

## What happened?

In an AKS cluster, an unschedulable CPU workload correctly triggered Cluster Autoscaler processing for an autoscaled CPU node group. The node group was below its configured maximum size, but no automatic scale-up request was issued.

The cluster also contained a separate NVIDIA GP...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10301)

**Metadata:**
- Created: 2026-09-16
- Comments: 3
- State: open

### kubernetes/autoscaler#10306: oci provider: Improve handing of out-of-host-capacity-errors

#### Which component this PR applies to?

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) this PR applies to?
-->

cluster-autoscaler (OCI provider) 

#### What type of PR is this?

/kind feature

<!--
...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10306)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10305: cluster-autoscaler: bump golang.org/x/crypto to v0.55.0 on release-1.35

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Bumps `golang.org/x/crypto` from `v0.47.0` to `v0.55.0` on the `cluster-autoscaler-release-1.35` branch to pick up fixes for CVEs reported against this branch's dependency set (CVE-2026-46595, CVE-2026-39833, CVE-202...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10305)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10303: feat: externalgrpc add resource slices support

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds `repeated bytes resourceSliceBytes` field to `NodeGroupTemplateNodeInfoResponse` in the externalgrpc provider, carrying proto-serialized `resource.k8s.io/v1` `ResourceSlice` objects. `TemplateNodeInfo(...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10303)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9944: bump argocd to v3.5.3 and fix some bugs

Bumping argocd to v3.5.3 and fixing a few bugs:
- The utility cluster was autogenerated, but we need to configure it explicitly so the ArgoCD diff works.
- I created projects for each cloud so we can start giving maintainers of these clouds access to their specific clusters.
- Fixed a bug in oaut...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9944)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9942: bump eso to 2.10.0

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9942)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_java: v1.9.0

## [1.9.0](https://github.com/prometheus/client_java/compare/v1.8.0...v1.9.0) (2026-09-16)


### Features

* support metric name filtering in OpenTelemetry exporter ([#2344](https://github.com/prometheus/client_java/issues/2344)) ([9b0ede8](https://github.com/prometheus/client_java/commit/9b0ede830fcf233fb9f9c4cb08ed91ef21fbd667))


### Bug Fixes

* avoid protobuf debug reflection in native images ([#2251](https://github.com/prometheus/client_java/issues/2251)) ([7f899e7](https://github.com/prom...

🔗 [Link](https://github.com/prometheus/client_java/releases/tag/v1.9.0)

**Metadata:**
- Version: v1.9.0
- Published: 2026-09-16
- Prerelease: No

### containerd/containerd: containerd API 1.12.0

Welcome to the api/v1.12.0 release of containerd!

The 13th release for the containerd 1.x API aligns with the containerd 2.4 release.

### Highlights

#### Image Storage

* Include media type in content create events ([#13833](https://github.com/containerd/containerd/pull/13833))

#### Runtime

* Add UpdateSandbox RPC to propagate sandbox controller updates to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
* Allow specifying parent checkpoint directory when checkpointi...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/api/v1.12.0)

**Metadata:**
- Version: api/v1.12.0
- Published: 2026-09-16
- Prerelease: No


---

*This content was automatically collected on 2026-09-17 03:21:46*
