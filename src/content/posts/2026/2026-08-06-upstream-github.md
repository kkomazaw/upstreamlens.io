---
title: "Upstream Github - 2026-08-06"
description: "CNCF upstream activity from github"
pubDate: 2026-08-06
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "kind/flake", "sig/apps", "triage/accepted", "sig/network", "sig/api-machinery", "pr", "area/kubelet", "size/M", "release-note-none", "cncf-cla: yes", "needs-priority", "kind/cleanup", "area/apiserver", "release-note", "size/XXL", "kind/api-change", "area/code-generation", "area/test", "sig/testing", "size/L", "kind/feature", "sig/instrumentation", "needs-ok-to-test", "do-not-merge/needs-sig", "size/S", "kind/documentation", "lgtm", "sig/contributor-experience", "do-not-merge/work-in-progress", "priority/important-soon", "sig/storage", "sig/scalability", "do-not-merge/release-note-label-needed", "size/XS", "do-not-merge/needs-kind", "ok-to-test", "sig/scheduling", "approved", "do-not-merge/hold", "website", "language/ko", "area/localization", "language/ja", "sig/release", "area/images", "area/release-eng", "test-infra", "area/config", "ingress-gce", "area/addon-resizer", "autoscaler", "area/cluster-autoscaler", "needs-kind", "area/dependency", "release", "cloud-provider-gcp", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141196: CPU Manager strict reservation can leave an empty default CPUSet

### What happened?

With the static CPU Manager policy and `strict-cpu-reservation`, exclusive allocations can consume every non-reserved CPU and leave `defaultCPUSet` empty.

KEP-4540 discusses shared workloads starving when the shared pool reaches zero. The current implementation has different sid...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141196)

**Metadata:**
- Created: 2026-08-05
- Comments: 3
- State: open

### kubernetes/kubernetes#141193: Security implications of named ports in NetworkPolicy

In our setup, NetworkPolicies are owned by the platform team. Users can create ML inference services via a self-service REST API that accepts almost all pod spec fields, including port names and numbers. 

When a platform-owned NetworkPolicy uses a named port (e.g. port: http), any API user can crea...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141193)

**Metadata:**
- Created: 2026-08-05
- Comments: 2
- State: open

### kubernetes/kubernetes#141204: Accept flexible fractional-second precision when parsing MicroTime

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`metav1.MicroTime` parsed JSON/CBOR/query values with the fixed-width layout `RFC3339Micro` (`2006-01-02T15:04:05.000000Z07:00`), which matches only exactly six fractional-second digits. As a result it **rejected** val...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141204)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141190: pod-gc-controller: skip redundant delete calls for pods stuck on finalizers



#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
  PodGCController selects pods to  delete by phase (and by node state) only. A pod that
  has already been accepted for immediate deletion but is kept around by a
  finalizer stays in a terminal phase and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141190)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56823: Deprecation warning banner is unreadable on the page of archived docs sites

Hi, maintainers,

Thank you for maintaining [kubernetes.io](https://kubernetes.io/)! I'm new to contributing to Kubernetes. If I'm missing something, please let me know.

Also, I'm willing to fix this issue if it's confirmed as a bug. Thank you!

---

**This is a Bug Report**

<!-- Thanks for filing...

🔗 [Link](https://github.com/kubernetes/website/issues/56823)

**Metadata:**
- Created: 2026-08-05
- Comments: 3
- State: open

### kubernetes/autoscaler#10110: addon-resizer: remove OWNERS

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

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10110)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10108: Create a proposal for ephemeral capacity buffers

**What type of PR is this?**

/kind documentation

**What this PR does / why we need it**

Adds a proposal, `cluster-autoscaler/proposals/ephemeral-buffers.md`, for an **ephemeral
(workload-filled, one-shot)** provisioning strategy on the CapacityBuffer API:
`buffer.x-k8s.io/ephemeral-capacity`.

Th...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10108)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd API 1.12.0-beta.0

Welcome to the api/v1.12.0-beta.0 release of containerd!
*This is a pre-release of containerd*

The 13th release for the containerd 1.x API aligns with the containerd 2.4 release.

### Highlights

* **Include media type in content create event** ([#13833](https://github.com/containerd/containerd/pull/13833))
* **Add parent path to runc checkpoint options** ([#13699](https://github.com/containerd/containerd/pull/13699))

#### Deprecations

* **Fix sandbox task API endpoints for non-runc runtimes*...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/api/v1.12.0-beta.0)

**Metadata:**
- Version: api/v1.12.0-beta.0
- Published: 2026-08-05
- Prerelease: Yes

## Updates

### kubernetes/kubernetes#141210: Non deterministic pod ordering with PodsByCreationTime

### What happened?

`PodsByCreationTime` sorts pods by creation time.
However when pods have same creation time (which can occur during batch creation or on systems with coarse clock resolution) the order is undefined.

This is particularly important during kubelet restart when pods are re-admitted ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141210)

**Metadata:**
- Created: 2026-08-06
- Comments: 2
- State: open

### kubernetes/kubernetes#141206: kubelet: allocation manager checkpoint failure handling leads to state desynchronization and ghost pod allocations

### What happened?

In `pkg/kubelet/allocation/allocation_manager.go`, the In-Place Pod Vertical Scaling (IPPVS) allocation manager handles state persistence via `m.allocated` (backed by disk checkpoints in `state_checkpoint.go`). 

During pod admission, resize, and teardown, error handling during d...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141206)

**Metadata:**
- Created: 2026-08-05
- Comments: 3
- State: open

### kubernetes/kubernetes#141200: [Flaking Test] [sig-node] [Feature:GPUDevicePlugin] Sanity test using nvidia-smi [Provider:aws,gce] should run nvidia-smi and cuda-demo-suite [Serial]

### Which jobs are flaking?

* [sig-release-master-blocking#gce-device-plugin-gpu-master](https://testgrid.k8s.io/sig-release-master-blocking#gce-device-plugin-gpu-master&exclude-non-failed-tests=)


### Which tests are flaking?

* [Kubernetes e2e suite.[It] [sig-node] [Feature:GPUDevicePlugin] Sani...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141200)

**Metadata:**
- Created: 2026-08-05
- Comments: 3
- State: open

### kubernetes/kubernetes#141198: [Flaking Test] [sig-apps] Deployment should not disrupt a cloud load-balancer's connectivity during rollout [Provider:aws,azure,gce]

### Which jobs are flaking?

* [sig-release-master-blocking#gce-cos-master-default](https://testgrid.k8s.io/sig-release-master-blocking#gce-cos-master-default&exclude-non-failed-tests=)


### Which tests are flaking?

* [Kubernetes e2e suite.[It] [sig-apps] Deployment should not disrupt a cloud load...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141198)

**Metadata:**
- Created: 2026-08-05
- Comments: 2
- State: open

### kubernetes/kubernetes#141192: Watch cache shrinks before burst scale-up

### What happened?

/sig api-machinery
/assign


We are load-testing and tuning the performance of our clusters, and we have observed an unusual behavior. 

Under sustained bursty traffic, contrary to what we would normally expect, the watch cache size is repeatedly and rapidly halved, and then quic...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141192)

**Metadata:**
- Created: 2026-08-05
- Comments: 1
- State: open

### kubernetes/kubernetes#141211: Add UID tie-breaker to PodsByCreationTime sort

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Ensure deterministic ordering of pods with identical CreationTimestamp by using pod UID as a tie-breaker. When pods have the same creation time (which can occur during batch creation or on systems with coarse c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141211)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141208: Remove apidiscovery.k8s.io/v2beta1

#### What type of PR is this?

/kind cleanup
/kind api-change

#### What this PR does / why we need it:

Removes the apidiscovery.k8s.io/v2beta1 types, serving code, and the AggregatedDiscoveryRemoveBetaType feature gate.

#### Which issue(s) this PR is related to:

Follow-up to https://github.com/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141208)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141207: Remove locked GA feature gates CustomResourceFieldSelectors and CRDValidationRatcheting

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes `CustomResourceFieldSelectors` (locked v1.32) and `CRDValidationRatcheting` (locked v1.33), both locked to their default value for 3+ releases.

#### Which issue(s) this PR is related to:

N/A
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141207)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141205: kubelet: add image and pull_policy labels to image pull duration metric

## What this PR does / why we need it

Adds two new labels to the `kubelet_image_pull_duration_seconds` histogram metric:
- `image` - The container image name (with digest stripped to reduce cardinality)
- `pull_policy` - The image pull policy that triggered the pull (`Always` or `IfNotPresent`)

Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141205)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141203: Reject decimal exponents that do not fit the int32 scale

`quantitySuffixer.interpret` parses a decimal exponent at 64 bits and then narrows it with `int32(parsed)`, so an exponent outside int32 is silently truncated to an unrelated value: `1e4294967297` parses as `1e1`. This rejects exponents outside `[-MaxInt32, MaxInt32]` in `interpret`. The lower bound...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141203)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141201: Add regression test for Scale(MinInt32).infScale() sign edge case

**What type of PR is this?**
/kind cleanup
/kind flake

**What this PR does / why we need it:**

`Scale` is an `int32`, and `infScale()` returns `inf.Scale(-s)`. When
`s == math.MinInt32`, `-math.MinInt32` does not fit in an int32, so
`Scale(math.MinInt32).infScale()` comes back as `MinInt32` instea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141201)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141199: Add AI usage disclosure to the pull request template

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141199)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141197: kubelet: prevent strict CPU reservation from emptying shared pool

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

When `strict-cpu-reservation` is enabled, reject an exclusive CPU allocation if it would empty the node shared CPU pool.

An empty default CPUSet cannot be enforced safely: shared containers can keep or inh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141197)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141195: [WIP] shrink watch cache hysteretically

#### What type of PR is this?

/kind bug
/sig api-machinery


#### What this PR does / why we need it:
Do not shrink and then scale back watch cache in burst senario 

#### Which issue(s) this PR is related to:
fix https://github.com/kubernetes/kubernetes/issues/141192

#### Special note...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141195)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141194: test(events): log event details on TestEventCompatibility failure

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141194)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141191: e2e: respect driver min size in group snapshot tests

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The e2e test suite for group snapshots did not respect the minimum volume size for drivers, leading to test failures on drivers that require a minimum volume size larger than the 1Mi default size.

To fix thi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141191)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141189: wip

testing https://github.com/kubernetes/perf-tests/pull/4249

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141189)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141188: apimachinery/resource: fix Quantity doc for sub-milli suffixes

#### What type of PR is this?

Documentation fix.

/kind documentation
/sig api-machinery

#### What this PR does / why we need it:

The `Quantity` type doc comment documents the decimal suffixes as:

```
<decimalSI>       ::= m | "" | k | M | G | T | P | E
```

`n` (10^-9) and `u` (1...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141188)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141184: kubelet: clarify devicemanager test config readiness

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Replaces a misleading FIXME in the device manager test helper with a comment that describes the intended test behavior: kubelet config sources are treated as always ready. No production behavior changes.

#### Wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141184)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141183: kubelet: fix volumemanager SELinux metrics filename typo

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Renames `desired_state_of_wold_selinux_metrics.go` to `desired_state_of_world_selinux_metrics.go` to correct the filename typo and match the existing `desired_state_of_world*.go` naming in the same package. No co...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141183)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141182: Remove Permit support from GangScheduling plugin

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141182)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141181: Do not rely on Quantity.Value() overflow to detect sign or unset limits

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

This picks up the "Fix remaining callers relying on garbage to detect overflow: `csi_client.go`, kubelet" item from the Quantity int64 overflow burndown (#141166).

`Quantity.Value()` is `ScaledValue(0)` and can overfl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141181)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141179: Fix startup probe not gating liveness/readiness probes after containe…

…r restart

After a container restart triggered by a liveness probe failure, the new container could see liveness probes executing before its startup probe has passed. This violated the documented behavior that startup probes must succeed before liveness/readiness probes begin.

Root cause: When...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141179)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56821: [ko] Update content/ko/docs/concepts/services-networking/network-policies.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/network-policies.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/network...

🔗 [Link](https://github.com/kubernetes/website/issues/56821)

**Metadata:**
- Created: 2026-08-05
- Comments: 1
- State: open

### kubernetes/website#56814: [ko] Fix broken anchor and outdated link in content/ko/docs/concepts/extend-kubernetes/compute-storage-net/_index.md

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
 The Korean page ha...

🔗 [Link](https://github.com/kubernetes/website/issues/56814)

**Metadata:**
- Created: 2026-08-05
- Comments: 1
- State: open

### kubernetes/website#56813: [ja] Translate content/en/docs/tasks/administer-cluster/network-policy-provider/cilium-network-policy.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate content/en/docs/tasks/administer-cluster/network-policy-provider/cilium-network-policy.md into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

  - File to translate:
    - ht...

🔗 [Link](https://github.com/kubernetes/website/issues/56813)

**Metadata:**
- Created: 2026-08-05
- Comments: 2
- State: open

### kubernetes/test-infra#37628: Update kubekins-e2e variants.yaml with v1.37 config

Update kubekins-e2e variants.yaml with v1.37 config

/hold
The hold should only be cancelled once v1.37.0-rc.0 is released and post-release branch creation tasks start

/sig release
/area release-eng

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37628)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37627: Add v1.37 and remove v1.33 milestone_applier rules

Add v1.37 and remove v1.33 milestone_applier rules

/hold
The hold should only be cancelled once v1.37.0-rc.0 is released and post-release branch creation tasks start

/sig release
/area release-eng

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37627)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3193: Allow static BYOIPv6 addresses without ip-collection-v6 annotation

- Allow static PDP addresses in validateAddress without requiring the ip-collection-v6 annotation.
- Allow specifying both ip-collection-v6 and load-balancer-ip-addresses annotations in EnsureFrontend.
- Ensure removing ip-collection-v6 from an ephemeral BYOIPv6 Service releases the PDP address an...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3193)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4486: Bump the actions group with 4 updates

Bumps the actions group with 4 updates: [github/codeql-action/init](https://github.com/github/codeql-action), [github/codeql-action/autobuild](https://github.com/github/codeql-action), [github/codeql-action/analyze](https://github.com/github/codeql-action) and [github/codeql-action/upload-sarif](htt...

🔗 [Link](https://github.com/kubernetes/release/pull/4486)

**Metadata:**
- Created: 2026-08-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1285: metis: demote periodic and non-action logs to V(4) debug level

cc. @arvindbr8 

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1285)

**Metadata:**
- Created: 2026-08-05
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-06 02:20:43*
