---
title: "Upstream Github - 2026-06-10"
description: "CNCF upstream activity from github"
pubDate: 2026-06-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "needs-triage", "kind/feature", "sig/apps", "pr", "kind/bug", "size/XXL", "release-note-none", "cncf-cla: yes", "area/code-generation", "needs-priority", "lgtm", "size/XS", "approved", "do-not-merge/hold", "do-not-merge/needs-kind", "kind/cleanup", "area/apiserver", "size/L", "do-not-merge/work-in-progress", "sig/node", "release-note", "size/XL", "kind/api-change", "sig/auth", "area/test", "sig/scheduling", "sig/instrumentation", "sig/testing", "do-not-merge/release-note-label-needed", "size/S", "needs-ok-to-test", "kind/flake", "wg/device-management", "sig/etcd", "area/kubelet", "wg/workload-aware-scheduling", "kind/documentation", "size/M", "website", "language/ja", "area/localization", "language/en", "area/blog", "area/jobs", "area/config", "test-infra", "area/cluster-autoscaler", "area/provider/azure", "autoscaler", "ok-to-test", "area/dependency", "cloud-provider-gcp", "kube-state-metrics", "cncf-cla: no", "containerd", "kind/performance", "area/runtime"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#9780: Add CRD-level label selector validation to CapacityQuota



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
/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9780)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#139592: Replace CEL CIDR and IP library with newly upstreamed version in cel-go

https://github.com/google/cel-go/pull/1238 upstreamed the CIDR and IP library from Kubernetes into cel-go.

We will should remove the implementation in Kubernetes and depend on it instead.

This issue tracks what needs to happen:
- [ ] https://github.com/kubernetes/kubernetes/pull/139569 should roll...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139592)

**Metadata:**
- Created: 2026-06-09
- Comments: 3
- State: open

### kubernetes/kubernetes#139582: PDB maxUnavailable cannot compute expectedPods when a pod's direct controller owner does not implement /scale but a scalable ancestor exists

## What happened

The disruption controller computes `expectedPods` for a PDB using `maxUnavailable` by calling the `/scale` subresource on each matched pod's **direct** controller owner (`metav1.GetControllerOf(pod)` → scale lookup in `pkg/controller/disruption/disruption.go`, `getExpectedScale` / ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139582)

**Metadata:**
- Created: 2026-06-09
- Comments: 1
- State: open

### kubernetes/kubernetes#139608: validation-gen: fix panic on self-recursive slice/map fields

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139608)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139607: Add back tests of behavior around spurious inline tags

Restore unit tests of our structured conversion behavior around `inline` tags which make no sense (which I accidentally removed when removing inline tags that make no sense in https://github.com/kubernetes/kubernetes/pull/138260/changes/bed4a34ad8901d9a01efcb9594838f96ec9d4563#diff-85104e5f97bac2bef...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139607)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139606: WIP: add cacher watch-cache init benchmark for ConcurrentWatchObjectDecode

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add BenchmarkCacherInitConcurrentDecode measuring cold watch-cache init for JSON custom resources with ConcurrentWatchObjectDecode off vs on.

benchstat (gate off -> on, n=6):

```
goos: darwin
goarch: arm64
pkg:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139606)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139605: Make internal PodSpec type memory-identical to v1

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

internal <-> v1 pod conversion allocs go from O(n) -> O(1)  if the internal type is memory-identical with the versioned type.  This shows the cost of converting `PodList` of various sizes from internal to v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139605)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139604: TAS Monitoring Metrics for Placement Phases

#### What this PR does / why we need it:
Adds Prometheus metrics for topology-aware scheduling (TAS) pod group placement, so the volume and latency of the placement evaluation phase can be observed.

3 alpha metrics are introduced, gated on the `TopologyAwareWorkloadScheduling` feature gate (sinc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139604)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139603: Return BadRequest for node proxy when node has no usable address

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A node proxy request (e.g. `POST /api/v1/nodes/<name>/proxy/`) to a Node that has no usable address in `status.addresses` currently returns an HTTP `500 Internal Server Error`:

```json
{
  "kind": "Status",
  "apiVe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139603)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139602: scheduler: Add resourceVersion to Pod status patch

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139602)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139601: apiserver: record listStream etcd request metric over the full stream

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Records the `listStream` etcd request metric after the stream is fully consumed instead of right after `GetStream` returns, so `etcd_request_duration_seconds{operation="listStream"}` covers the whole list inste...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139601)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139596: Implement core CompositePodGroup API

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139596)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139591: kubelet/images: coalesce concurrent EnsureImageExists for the same image

 **What this PR does / why we need it**:

  When many pods on a node reference the same image, concurrent
  EnsureImageExists calls all fall through to PullImage even though
  container runtimes already deduplicate identical pulls. The followers
  burn maxParallelImagePulls slots and starve oth...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139591)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139587: staging: support external etcd in storage write benchmarks

Configure the write throughput benchmarks to launch and run directly against an external etcd process. This facilitates scheduling and process boundary isolation testing.

Also, silence etcd client and gRPC logs during run execution to prevent interleaved logs from corrupting benchmark stdout line...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139587)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139586: Update doc comment for PodSpec.PreemptionPolicy to reflect the actual logic

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139586)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139581: pkg/registry/core/pod/storage: return Invalid for bad Binding target

**What type of PR is this?**

/kind bug
/sig api-machinery

**What this PR does / why we need it:**

When creating a Binding with invalid `target` fields (unsupported `target.kind`, missing `target.name`, etc.), `BindingREST.Create` returned `errs.ToAggregate()` from validation directly, prod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139581)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139579: Promote PodCertificate feature to GA

#### What type of PR is this?

/kind api-change
/kind feature

#### What this PR does / why we need it:
This PR promotes the Pod Certificates to stable. 

#### Which issue(s) this PR is related to:
https://github.com/kubernetes/enhancements/issues/4317

#### Special notes for your reviewe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139579)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139573: Fix CEL cost estimates for CRD metadata.name and metadata.generateName

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In https://github.com/kubernetes-sigs/controller-tools/issues/1424 it was noticed that even though CRDs apply dns1123 style formats to metadata.name by default, CEL estimated cost assumes that metadata.name can...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139573)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56076: [chore] kubeadm init -- missing `--cluster-name` option

The [official reference documentation](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/#config-file) is missing a reference to  `--cluster-name=<name>` command line option.

Thankfully the linked configuration file reference lists it, but I'd argue it's a quite useful parameter...

🔗 [Link](https://github.com/kubernetes/website/issues/56076)

**Metadata:**
- Created: 2026-06-09
- Comments: 1
- State: open

### kubernetes/website#56075: Deployment "Label selector updates": orphan behavior assumes `--cascade=orphan`, but the section doesn't say so

**This is a Bug Report**

**Problem:**

The [Label selector updates section in the Deployment page](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#label-selector-updates) tells the reader to "delete the Deployment and recreate it" and then describes the old ReplicaSet being or...

🔗 [Link](https://github.com/kubernetes/website/issues/56075)

**Metadata:**
- Created: 2026-06-09
- Comments: 1
- State: open

### kubernetes/website#56074: Search bar is not visible

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The coloring of the...

🔗 [Link](https://github.com/kubernetes/website/issues/56074)

**Metadata:**
- Created: 2026-06-09
- Comments: 2
- State: open

### kubernetes/website#56073: [ja] Update content/ja/docs/concepts/workloads/controllers/deployment.md

**This is a Feature Request**

**What would you like to be added**

Update the Japanese translation of `content/ja/docs/concepts/workloads/controllers/deployment.md` to match the latest English version.

**Website Link**

- Japanese: https://kubernetes.io/ja/docs/concepts/workloads/controllers/deplo...

🔗 [Link](https://github.com/kubernetes/website/issues/56073)

**Metadata:**
- Created: 2026-06-09
- Comments: 1
- State: open

### kubernetes/website#56079: Add (draft) SIG Storage spotlight blog

### Description

This PR carries forward the SIG Storage spotlight article and updates it to be merged as a draft.
Additionally, this PR removes backticks from Kubernetes API kinds in the article to align with the Kubernetes style guide:
https://kubernetes.io/docs/contribute/style/style-guide/#i...

🔗 [Link](https://github.com/kubernetes/website/pull/56079)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56069: docs: fix broken command examples in tasks

A few command examples in the tasks docs don't run as written.

- `network/extend-service-ip-ranges`: `cat <EOF` redirects stdin from a file named EOF; the heredoc needs `cat <<EOF` (the closing `EOF` confirms the intent).
- `manage-kubernetes-objects/storage-version-migration`: `spec.resource.resou...

🔗 [Link](https://github.com/kubernetes/website/pull/56069)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37227: add socket and machine e2e presubmits

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37227)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9783: Azure: optional ETag concurrency on VMSS capacity updates

#### What type of PR is this?

/kind feature
/area provider/azure

#### What this PR does / why we need it:

Adds optional ETag-based optimistic concurrency to the Azure VMSS capacity update path. When enabled, the cached VMSS ETag is sent as `If-Match` on capacity PUTs, so a concurrent modification...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9783)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9779: fix(azure): VMSS size cache handling after delete failures

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This PR hardens Azure VMSS target-size bookkeeping around failed or uncertain delete operations.

It fixes a VMSS crash path where `getScaleSetSize()` could dereference a nil provider error when the cached si...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9779)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1198: chore(deps): bump github.com/onsi/gomega from 1.40.0 to 1.41.0 in /metis in the workspace-deps group across 1 directory

Bumps the workspace-deps group with 1 update in the /test/e2e directory: [github.com/onsi/gomega](https://github.com/onsi/gomega).

Updates `github.com/onsi/gomega` from 1.40.0 to 1.41.0
<details>
<summary>Changelog</summary>
<p><em>Sourced from <a href="https://github.com/onsi/gomega/blob/master/CH...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1198)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#2988: kube-state-metrics panics (crashes whole process) on unparsable CronJob schedule

KSM crashes (CrashLoopBackOff) when any CronJob in the cluster has a schedule that
the cron parser rejects but the Kubernetes CronJob controller accepts.

Version: v2.19.0 (panic still present on main as of f69b12ef)

Reproducer — apply this CronJob:

apiVersion: batch/v1
kind: CronJob
metadata:
nam...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/2988)

**Metadata:**
- Created: 2026-06-09
- Comments: 1
- State: open

### kubernetes/kube-state-metrics#2990: [WIP] feat: add --server-side-sharding to reduce received objects to be 1/N in autosharding

<!--  Thanks for sending a pull request!  Here are some tips for you:
1. If this is your first time, read our contributor guidelines https://git.k8s.io/community/contributors/guide/pull-requests.md#the-pull-request-submit-process and developer guide https://git.k8s.io/community/contributors/devel/d...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/2990)

**Metadata:**
- Created: 2026-06-10
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13561: containerd-shim-runc-v2 slow memory leak/race

### Description

I'm running containerd v2.2.4 on a IoT device with a 2 core arm 32-bit (armv7) cpu that is a bit on the slower side. Each IoT device runs about 18 containers. In this setup I observe a continuous slow memory growth that I initially reported here https://github.com/containerd/ttrpc/i...

🔗 [Link](https://github.com/containerd/containerd/issues/13561)

**Metadata:**
- Created: 2026-06-09
- Comments: 0
- State: open

### containerd/containerd#13558: containerd-shim-runc-v2: accelerating CPU time growth on long-running nodes with stable workloads

### Description

We are observing continuous, monotonically increasing CPU time consumption in `containerd-shim-runc-v2` processes on long-running Kubernetes nodes. The issue is reproduced on both containerd v1.7.27 and v2.0.7.

Over a 14-day observation window on containerd v2.0.7, the aggregate CP...

🔗 [Link](https://github.com/containerd/containerd/issues/13558)

**Metadata:**
- Created: 2026-06-09
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-10 03:31:15*
