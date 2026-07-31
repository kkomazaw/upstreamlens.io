---
title: "Upstream Github - 2026-07-31"
description: "CNCF upstream activity from github"
pubDate: 2026-07-31
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "priority/important-soon", "sig/node", "kind/failing-test", "sig/architecture", "needs-triage", "wg/node-lifecycle", "kind/bug", "needs-sig", "kind/flake", "wg/device-management", "pr", "area/provider/gcp", "sig/cluster-lifecycle", "size/XS", "release-note-none", "cncf-cla: yes", "sig/cloud-provider", "needs-priority", "area/e2e-test-framework", "lgtm", "sig/api-machinery", "approved", "area/kubelet", "sig/storage", "size/S", "release-note", "size/L", "kind/feature", "needs-ok-to-test", "area/test", "sig/scheduling", "sig/testing", "kind/cleanup", "area/apiserver", "area/cloudprovider", "sig/auth", "do-not-merge/hold", "area/dependency", "area/code-organization", "kind/api-change", "sig/apps", "ok-to-test", "do-not-merge/needs-sig", "sig/windows", "size/M", "do-not-merge/needs-kind", "size/XL", "do-not-merge/release-note-label-needed", "language/ja", "triage/accepted", "area/localization", "website", "language/ko", "needs-kind", "cloud-provider-aws", "area/provider/azure", "area/jobs", "area/config", "test-infra", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "kind/documentation", "do-not-merge/invalid-commit-message", "area/infra", "area/prow", "area/terraform", "area/bash", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "priority/awaiting-more-evidence", "area/etcd", "kubeadm", "committee/steering", "community", "prometheus", "release", "envoyproxy", "area/api", "area/envoy", "gateway", "containerd", "area/cri", "area/distribution", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56677: [ko] Update content/ko/docs/concepts/security/pod-security-standards.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/security/pod-security-standards.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/security/pod-security-standards/...

🔗 [Link](https://github.com/kubernetes/website/issues/56677)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56672: [ko] Update content/ko/docs/concepts/security/rbac-good-practices.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/security/rbac-good-practices.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/security/rbac-good-practices/
- Eng...

🔗 [Link](https://github.com/kubernetes/website/issues/56672)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### prometheus/prometheus: 3.13.2 / 2026-07-29

## What's Changed

- [SECURITY] Bump golang.org/x/text to v0.39.0 (CVE-2026-56852) and google.golang.org/grpc to v1.82.1 (GHSA-hrxh-6v49-42gf). #19290 by @krajorama
- [BUGFIX] PromQL: Preallocate the active query tracker file to avoid SIGBUS crashes when the data disk is full. #19289 by @akshajrawat

**Full Changelog**: https://github.com/prometheus/prometheus/compare/v3.13.1...v3.13.2

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.2)

**Metadata:**
- Version: v3.13.2
- Published: 2026-07-30
- Prerelease: No

## Updates

### kubernetes/kubernetes#141065: [Failing test] apisnoop-conformance-gate red since 2026-07-23: getLifecycleAPIGroup untested — pending_eligible_endpoints.yaml is not consumed by the gate

### Which jobs are failing?

- `apisnoop-conformance-gate` (periodic, every 3h)
- https://testgrid.k8s.io/sig-arch-conformance#apisnoop-conformance-gate
- https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/apisnoop-conformance-gate

### Which tests are failing?

The gate itself:

```
=======...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141065)

**Metadata:**
- Created: 2026-07-30
- Comments: 2
- State: open

### kubernetes/kubernetes#141064: in-place resizing of Guaranteed pods breaks conformance tests if "static" CPU Manager policy is used

### What happened?

In Kubernetes v1.36.0, an restriction (introduced in PR#128287 - https://github.com/kubernetes/kubernetes/pull/128287) blocks all in-place resource resizing of Guaranteed QoS pods on any node where the CPU Manager uses the static policy. The kubelet immediately rejects the resize...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141064)

**Metadata:**
- Created: 2026-07-30
- Comments: 2
- State: open

### kubernetes/kubernetes#141046: Pod startup latency increased since 07-03 flaking 500 node dra tests

### Which jobs are flaking?

https://prow.k8s.io/view/gcs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-kops-aws-500-node-dra-with-workload-amazonvpc-using-cl2/2075777212123975680/

### Which tests are flaking?

There was a flake due to https://github.com/kubernetes/kubernetes/issues/140877
that was fix...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141046)

**Metadata:**
- Created: 2026-07-30
- Comments: 5
- State: open

### kubernetes/kubernetes#141067: cluster/gce: pick single latest image when the image family matches multiple images

**What type of PR is this?**

/kind bug
/kind flake

**What this PR does / why we need it**:

`cluster/gce/util.sh` resolves `MASTER_IMAGE` / `NODE_IMAGE` from `IMAGE_FAMILY` via:

```sh
gcloud compute images list --project="${MASTER_IMAGE_PROJECT}" \
  --no-standard-images \
  --filter="family:${MA...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141067)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141066: Fix unit test compile failure under the fieldsv1string build tag

**What type of PR is this?**

/kind failing-test

**What this PR does / why we need it:**

The test added in #139505 builds a FieldsV1 value with the `FieldsV1{Raw: ...}` struct literal. The `Raw` field does not exist when the `fieldsv1string` build tag is set, so the package fails to compile. Becau...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141066)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141062: Wait for pending state to clear before triggering 2nd unmount

Fixes flake in TestReconstructedVolumeShouldUnmountSucceedAfterSetupFailed

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141062)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141061: kubelet: report volume stats for pod-scoped (non-PVC) volumes

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

`volumeStatsCollector.CollectWithStability` (`pkg/kubelet/metrics/collectors/volume_stats.go`) iterates every `podStat.VolumeStats` but skips any entry without a `PVCRef`, silently dropping emptyDir, secret, conf...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141061)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141060: test/integration: fix dra optional node operations podgroup flake

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141060)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141058: Update github.com/google/cel-go to v0.30.0

### What type of PR is this?

/kind cleanup
/sig api-machinery
/sig architecture
/area dependency

### What this PR does / why we need it:

This updates github.com/google/cel-go from v0.29.2 to v0.30.0 and updates two pinned values in the CEL runtime cost stability tests.

cel-go v0.30.0 stopped eva...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141058)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141057: Fix statefulset parallel scale down

#### What type of PR is this?

/kind bug
/sig apps

#### What this PR does / why we need it:

A StatefulSet using `podManagementPolicy: Parallel` can become stuck while scaling down after a partially successful scale-up.

A failed parallel scale-up can leave:

* missing Pods within the de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141057)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141055: kube-api-linter: enable optionalorrequired for storagemigration

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141055)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141054: test/e2e/windows: wait for BootID change after reboot

#### What type of PR is this?

/kind feature
/sig windows
/area test

#### What this PR does / why we need it:

Updates the Windows RebootHost e2e test to use a node BootID change as the reboot completion signal.

Previously, the test waited for the existing Windows pod restart count and only afterw...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141054)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141053: pkg/kubelet/prober: cache HTTP probe request object in worker

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Reuses the `*http.Request` object across HTTP probe cycles instead of creating a new one on each execution. The probe spec (host, port, path, headers) does not change between probe cycles for a given container, so the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141053)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141052: Refactors and cleanups 

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141052)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141051: test: make eviction status update timestamps deterministic on Windows

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:
Makes the "mark active and started" case in TestValidateEvictionStatusUpdate deterministic. The old status now uses a fake-clock start time one second before the update, avoiding equality with the update timestam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141051)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141050: Speed up preemtion tests by resuing apiserver

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141050)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141047: storage/ephemeral: reclaim PVCs for rejected Pods

Fixes #139915

## Problem

When Kubelet rejects a Pod during admission, the Pod remains Failed while its generated generic ephemeral volume PVC can remain allocated. A workload controller may create a replacement Pod, leaving the rejected Pod's storage allocated.

## Change

Kubelet now records a `P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141047)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56680: [ja] Translate content/en/docs/reference/glossary/dra.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56680)

**Metadata:**
- Created: 2026-07-30
- Comments: 2
- State: open

### kubernetes/website#56676: [ko] Update content/ko/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/extend-kub...

🔗 [Link](https://github.com/kubernetes/website/issues/56676)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/cloud-provider-aws#1476: 1.37-beta.0 dependencies bump

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#d...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1476)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37591: Bump AKS mgmt cluster version for CAPZ test

AKS v1.33 is now LTS. Set the aks management cluster version to 1.36

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37591)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10080: CapacityBuffers should have a standard Ready condition

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area cluster-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addo...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10080)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/autoscaler#10079: docs(vpa): document requests vs limits behavior in FAQ

/kind documentation
/area vertical-pod-autoscaler

Adds an FAQ entry on how VPA handles requests/limits (including the `limit: 0` footgun) based on the discussion in #7882.

Fixes #7895

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10079)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9797: bump gcp providers and remove incorrect annotations

#9791 was slightly incorrect as the annotations aren't required. I also bumped the terraform providers and version for some of the layers.

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9797)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubeadm#3324: kubeadm: upgrade flakes when etcd rotates a WAL segment during the data-dir backup

## What happened?

`kubeadm upgrade node` on a stacked-etcd control-plane node (upgrading 1.33.x → v1.34.x)
failed during the control-plane phase while backing up the etcd data directory:

```
[upgrade/control-plane] Upgrading your Static Pod-hosted control plane instance to version "v1.34.8"...
[up...

🔗 [Link](https://github.com/kubernetes/kubeadm/issues/3324)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/community#9092: Steering Committee Nomination: Priyanka Saggu (@Priyankasaggu11929)

Hello everyone,

I'm nominating myself for the Kubernetes Steering Committee election, 2026.

I am running because I want to practice equity and represent under-represented sections. It is important to me, and I try hard to practice that in my current leadership roles already, today.

 I am of the f...

🔗 [Link](https://github.com/kubernetes/community/issues/9092)

**Metadata:**
- Created: 2026-07-30
- Comments: 18
- State: open

### envoyproxy/gateway#9622: OIDC: make the forwarded access token header configurable

The below was generated using AI and I'll come back to clean up the description.

*Description*:

## What

Allow the OIDC access token to be forwarded to a configurable upstream header, the same way `forwardIDToken.header` works today.

## Why

Follow-up to #7343. That issue delivered configurable f...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9622)

**Metadata:**
- Created: 2026-07-31
- Comments: 0
- State: open

### containerd/containerd#13875: CRI RemoveImage deletes image references non-atomically — an interrupted removal strands the sha256:<config> image-ID record, permanently pinning the manifest, layers, and snapshot chain

**What happened**

On a production node (containerd 2.2.5, devmapper snapshotter, Talos v1.13.5, k8s v1.36.1) we found **241 image records named only by config digest** (`sha256:<config>`) whose tag and `repo@digest` records were gone. Each still referenced its target, so the manifest, all layer blo...

🔗 [Link](https://github.com/containerd/containerd/issues/13875)

**Metadata:**
- Created: 2026-07-30
- Comments: 0
- State: open

### containerd/containerd#13874: Normalize image tag update behavior on image pull

### What is the problem you're trying to solve

The way that Containerd treats pulled images heavily depends on the tool used and the namespace they are pulled to. The different behaviors creates confusing undocumented results when pulling images that re-use tags.

When pulling an image by tag in th...

🔗 [Link](https://github.com/containerd/containerd/issues/13874)

**Metadata:**
- Created: 2026-07-30
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Commits
- 968b918: Revert "why containers should use overalybd" (Fu Wei) [#434](https://github.com/containerd/overlaybd/pull/434)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-30
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-31 02:35:17*
