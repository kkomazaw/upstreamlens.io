---
title: "Upstream Github - 2026-09-04"
description: "CNCF upstream activity from github"
pubDate: 2026-09-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/windows", "needs-triage", "needs-sig", "kind/bug", "sig/storage", "sig/scheduling", "kind/flake", "sig/node", "wg/device-management", "kind/feature", "help wanted", "sig/testing", "pr", "size/M", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "do-not-merge/needs-sig", "size/S", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "do-not-merge/work-in-progress", "kind/cleanup", "sig/autoscaling", "sig/apps", "area/kubelet", "lgtm", "size/XL", "sig/auth", "approved", "sig/instrumentation", "sig/architecture", "area/code-generation", "area/dependency", "area/code-organization", "area/test", "area/cloudprovider", "kind/api-change", "sig/cloud-provider", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "do-not-merge/hold", "wg/workload-aware-scheduling", "ok-to-test", "area/jobs", "area/config", "area/conformance", "test-infra", "area/testgrid", "minikube", "sig/cli", "kubectl", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/huaweicloud", "area/provider/gce", "size/XXL", "ingress-gce", "envoyproxy", "gateway", "containerd", "release", "go-cni"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141841: Dynamic Resource Allocation (DeviceClass/Device) is not supported on Windows nodes

# DRA (Dynamic Resource Allocation) on Windows nodes

## What would you like to be added?
Support for Dynamic Resource Allocation (DRA - the Structured Parameters model using `DeviceClass`/`Device`) on Windows nodes, defined by a real enhancement KEP and a Windows-specific device-injection design. T...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141841)

**Metadata:**
- Created: 2026-09-04
- Comments: 2
- State: open

## Updates

### kubernetes/kubernetes#141842: Node.status.volumesAttached[].devicePath is block-device/unix-specific; Windows semantics undefined

# `volumesAttached[].devicePath` semantics on Windows nodes

## What would you like to be added?
A defined contract for `Node.status.volumesAttached[].devicePath` on Windows, and a fix for the dead platform-specific code that assumes a unix block device. On Windows the field currently carries effect...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141842)

**Metadata:**
- Created: 2026-09-04
- Comments: 3
- State: open

### kubernetes/kubernetes#141839: in-tree iSCSI: DetachBlockISCSIDisk fails permanently when the by-path link is already gone, stranding the volume in volumesInUse

### What happened?

If the iSCSI session for a **block-mode** in-tree iSCSI volume is lost while the pod is still running, the teardown that follows never completes. `DetachBlockISCSIDisk` returns an error before it reaches its own logout, kubelet retries every 2m2s indefinitely, and the volume stay...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141839)

**Metadata:**
- Created: 2026-09-03
- Comments: 3
- State: open

### kubernetes/kubernetes#141836: [Flaky test candidate][sig-scheduling] TestCallQueue: hardcoded 100ms sleep/timeout race in pkg/scheduler/backend/api_dispatcher

### Which jobs are flaking?

Not yet observed failing in CI. Flagged via code review of
`pkg/scheduler/backend/api_dispatcher/call_queue_test.go`, not from a red
TestGrid cell — see reproduction steps below to turn this into a confirmed,
observed failure before/while this is triaged.

### Which test...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141836)

**Metadata:**
- Created: 2026-09-03
- Comments: 2
- State: open

### kubernetes/kubernetes#141829: DRA: AllocationMode All errors for incomplete or invalid pools are not per-node failures

### What happened?

An `AllocationMode: All` request returns a plain error when a pool gathered for the candidate node is incomplete or invalid. In `validateDeviceRequest`, same code in the stable, incubating and experimental variants:

```go
if pool.IsIncomplete {
	return requestData, fmt.Errorf("c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141829)

**Metadata:**
- Created: 2026-09-03
- Comments: 1
- State: open

### kubernetes/kubernetes#141819: E2E testing: check for goroutine leaks

### What would you like to be added?

We have a few ["invariant" tests](https://github.com/kubernetes/kubernetes/tree/master/test/e2e/invariants):
- checking certain metrics
- checking for DATA RACE reports in clusters where that is enabled (https://testgrid.k8s.io/sig-testing-kind#kind-master-alpha...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141819)

**Metadata:**
- Created: 2026-09-03
- Comments: 6
- State: open

### kubernetes/kubernetes#141843: Fix empty reserved-memory flag handling

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141843)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141837: scheduler: fix flaky sleep/timeout race in api_dispatcher call queue …

#### Which issue(s) this PR is related to:

Related to #141836

/kind flake
/sig scheduling

#### What this PR does / why we need it:

`TestCallQueue` (subtest `Pop blocks when queue is empty and unblocks after add`) and `TestCallQueueClose` (subtest `Pop unblocks and returns nil when contr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141837)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141835: apiserver: write responses through a single buffer ahead of the gzip decision

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Alternative to #141809 for comparison (see also #141834), following the suggestion to reuse the buffer `deferredResponseWriter` already keeps for the gzip decision. Every response is written th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141835)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141834: apiserver: batch streamed list response writes with an always-on buffer

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Alternative to #141809 for comparison (see also #141835): the same batching of streamed LIST response writes, in its simplest form. Once a response is committed, a pooled 128KiB `bufio.Writer` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141834)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141833: podautoscaler: explain why deleteHPA can't leak on key failure

There was a TODO asking if deleteHPA could leak state when KeyFunc fails to get the key. Checked it properly.
It can't. KeyFunc only fails when the object is neither a normal object nor a tombstone, same two cases deleteHPA already checks before getting hpa. So whenever KeyFunc fails, hpa is nil to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141833)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141832: Switch golangci plugins to compiled-in single-binary modules

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Switches the three golangci-lint plugins from building as pluginmode linked libraries to just being compiled into a binary

Based on https://github.com/kubernetes/kubernetes/commit/dba10dfee19b3afcbc26090...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141832)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141831: resource: warn on empty DeviceTaintRule selector

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

A `DeviceTaintRule.spec.deviceSelector` that is present but has no `driver`, `pool`, or `device`
set matches every device from every driver in the cluster. This is easy to trigger by mistake, and
combined w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141831)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141830: Bump cel-go to v0.32.0

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141830)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141824: [DO_NOT_MERGE] proof of concept for removing `OrderedListPrefix`

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141824)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141823: scheduler: parameterize pod group scheduling attempts and latency metrics with type for compositepodgroup

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Parameterize pod group scheduling attempts, scheduling latency, and algorithm latency metrics with entity type ("podgroup" vs "compositepodgroup") and profile. Specifically:
- Export PodGroupScheduleAttemp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141823)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141822: WIP: Getpod in flight

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141822)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141821: ConsistentListFromCacheSkipTimeoutFallback enablement

Graduate it to `Beta` and enable by default.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141821)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141820: fix(windows): use stable machine GUID for NodeInfo.MachineID

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

On Windows the kubelet populates `NodeInfo.MachineID` with the node's hostname (`os.Hostname()`) in `pkg/kubelet/winstats`. Per the API contract `MachineID` must be a stable, unique machine identifier (Linux backs it...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141820)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141817: Keep Zero-Exponent BinarySI Values on Integer Serialization Path

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141817)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37808: Add periodic job to test Kubernetes modules with minimum Go version

AI assisted. human reviewed. based on the existing gotip job.

/hold
/cc @dims 

Context is: https://github.com/kubernetes/kubernetes/issues/130799

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37808)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37802: Add Gardener test results for K8s v1.36

Adds gardener test results for recent K8s version v1.36 to testgrid.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37802)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23627: Overhaul `release_sanity_test.go` to be fast, correct, and usable

The release sanity test downloaded and hashed every binary for every release ever published — 524 downloads, sequentially, taking ~33 minutes. After publishing v1.39.0, you'd wait half an hour just to learn it was fine.

For newer releases (v1.26.0+) the amd64 binaries were downloaded and hashed twi...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23627)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1876: kubectl: add --examples flag to print only a command's examples

**What would you like to be added**

A global `--examples` flag (with `--example` accepted as a hidden alias) that prints only the Examples section of a command's help and exits. The indentation used in the `--help` layout is removed so every command starts at column 0 and can be copied directly:

`...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1876)

**Metadata:**
- Created: 2026-09-03
- Comments: 2
- State: open

### kubernetes/autoscaler#10240: [Flaking-Test] VPA -   test/e2e/v1/admission_controller.go

The 'accepts valid and rejects invalid VPA object' test [here](https://github.com/kubernetes/autoscaler/blob/61ba41fdef81ab192a05be5c58ebcf65e4519c4d/vertical-pod-autoscaler/test/e2e/v1/admission_controller.go#L1103) flaked:

```
[38;5;9m[FAILED] Admission controller did not inspect the object
  Exp...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10240)

**Metadata:**
- Created: 2026-09-03
- Comments: 2
- State: open

### kubernetes/autoscaler#10242: Fix huaweicloud scale-up cancelled by a still-booting instance

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

Scale-up on the `huaweicloud` provider can never complete. Every instance the provider creates is deleted roughly twenty seconds into its boot, so a single pending pod becomes an endless create-and-delete loop.

The AS...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10242)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10239: fix: return (nil, nil) for non-GCE providerIDs in NodeGroupForNode

#### What type of PR is this?
/kind bug
/area cluster-autoscaler
/area provider/gce

#### What this PR does / why we need it:
In mixed-provider or hybrid clusters (e.g., self-hosted k3s control plane nodes alongside GCE worker nodes, or multi-cloud setups), nodes may have non-GCE provider IDs ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10239)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3238: Fix dual-stack nodes being silently dropped from L4 GCE_VM_IP NEGs

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

A dual-stack or IPv6-first node often lists several `NodeInternalIP` addresses in `node.Status.Addresses` (or several entries in the `networking.gke.io/north-interfaces` annotation). `utils.GetNodePrimaryIP` and `netwo...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3238)

**Metadata:**
- Created: 2026-09-03
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#9940: responseOverride blanks %RESPONSE_CODE_DETAILS% in access logs

*Description*:

When a `BackendTrafficPolicy` `responseOverride` rule matches, the original `response_code_details` is replaced with an empty string, so the reason the request actually failed is lost from access logs.

The practical effect is that enabling a custom error page silently blanks a field...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9940)

**Metadata:**
- Created: 2026-09-03
- Comments: 0
- State: open

### containerd/containerd#14106: CRI: pauseless pods

### What is the problem you're trying to solve

Today the CRI pod sandbox is a [pause](https://www.ianlewis.org/en/almighty-pause-container) container managed by the in-process `podsandbox` controller. The [Sandbox API](https://github.com/containerd/containerd/blob/main/docs/sandbox-api.md) already ...

🔗 [Link](https://github.com/containerd/containerd/issues/14106)

**Metadata:**
- Created: 2026-09-03
- Comments: 0
- State: open

### containerd/containerd#14096: CRIU restore-via-create fails with `image "sha256:...": not found` even though the checkpoint image is already present on the node

### Description

#### containerd version
 
```
containerd github.com/containerd/containerd/v2 v2.3.0 2976f38ccbfcda5ef1364d63d60b0a304e4bf94a
```
 
#### Other environment details
 
- Kubernetes: v1.36.2 (`ContainerCheckpoint` feature gate, Beta)
- runc: 1.3.4
- CRIU: 4.2.1 (built from source)
- Kern...

🔗 [Link](https://github.com/containerd/containerd/issues/14096)

**Metadata:**
- Created: 2026-09-03
- Comments: 1
- State: open

### containerd/go-cni: v1.1.14

## What's Changed
* ci: declare least-privilege workflow-level contents: read by @arpitjain099 in https://github.com/containerd/go-cni/pull/138
* Bump github.com/sirupsen/logrus from 1.7.0 to 1.8.3 in /integration by @dependabot[bot] in https://github.com/containerd/go-cni/pull/134
* feat: Instrument CNI interface with OpenTelemetry tracing by @jipperinbham in https://github.com/containerd/go-cni/pull/132

## New Contributors
* @arpitjain099 made their first contribution in https://github....

🔗 [Link](https://github.com/containerd/go-cni/releases/tag/v1.1.14)

**Metadata:**
- Version: v1.1.14
- Published: 2026-09-03
- Prerelease: No


---

*This content was automatically collected on 2026-09-04 02:56:15*
