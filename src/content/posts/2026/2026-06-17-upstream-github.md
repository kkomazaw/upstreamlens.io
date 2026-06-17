---
title: "Upstream Github - 2026-06-17"
description: "CNCF upstream activity from github"
pubDate: 2026-06-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "sig/network", "kind/flake", "sig/api-machinery", "pr", "size/M", "release-note-none", "sig/auth", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "area/kubelet", "area/kube-proxy", "size/XXL", "approved", "sig/instrumentation", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/dependency", "do-not-merge/needs-kind", "area/apiserver", "size/S", "kind/feature", "sig/etcd", "kind/cleanup", "sig/apps", "sig/scheduling", "release-note", "kind/api-change", "area/code-generation", "wg/device-management", "size/L", "size/XS", "sig/storage", "area/e2e-test-framework", "priority/important-soon", "area/release-eng", "sig/release", "triage/accepted", "wg/workload-aware-scheduling", "size/XL", "cncf-cla: no", "ok-to-test", "lgtm", "area/testgrid", "do-not-merge/hold", "sig/scalability", "area/jobs", "area/config", "test-infra", "area/provider/azure", "kube-state-metrics", "kops", "area/channels", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "perf-tests", "minikube", "ingress-gce", "website", "envoyproxy", "gateway", "containerd", "exp/beginner", "kind/help-wanted", "area/criu", "target/kubernetes", "kind/enhancement", "area/cri", "area/nri", "area/snapshotters"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139799: Add apiserver_watch_decode_inflight metric for concurrent watch decode

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds the `apiserver_watch_decode_inflight` gauge from KEP-6178, tracking how many watch events are being decoded concurrently.

#### Which issue(s) this PR is related to:

https://github.com/kubernetes/enhancemen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139799)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139795: KEP-5963: DRA Device Compatibility Groups

#### What type of PR is this?

/kind feature
/kind api-change
/sig scheduling
/sig node

#### What this PR does / why we need it:

Alpha implementation of [KEP-5963: DRA Device Compatibility Groups](https://github.com/kubernetes/enhancements/issues/5963).

This PR adds a driver-authored `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139795)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139781: WAS: KEP-6089: Add workloadbuilder library to staging/component-helper

#### What type of PR is this?

/kind feature
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Fixes #<issue number>

KEP: https://github.com/kubernetes/enhancements/issues/6089

#### Special notes for y...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139781)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139770: KEP-6164: add PodList conversion benchmark

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add `PodList` conversion benchmark under `pkg/apis/core/v1` to make the
conversion cost measurable


- exercises both `core.PodList -> v1.PodList` and `v1.PodList -> core.PodList`
-  list sizes `1`, `1...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139770)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9827: Fix the equivalence.PodGroup's mutation during scale up simulations for skipped node groups


#### What type of PR is this?

/kind bug
<!--
Add one of the following kinds:
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

#...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9827)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#139790: Kubernetes pod slice grossly outcompetes system and other top-level slices on high CPU boxes

### What happened?

On a 64-CPU box, with cgroups v2, I set up kubernetes 1.35 with system-reserved=cpu=32, so reserve "half the CPU for non-kubernetes stuff".

This results in a kubepods.slice structure like:

```
 CGROUP                                      cpu.max       cpu.weight
 kubepods.slice...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139790)

**Metadata:**
- Created: 2026-06-16
- Comments: 3
- State: open

### kubernetes/kubernetes#139788: Supporting concurrent processing of PLEG events is needed

### What happened?

In kubelet, [GenericPLEG.Relist](https://github.com/kubernetes/kubernetes/blob/1cd0b215bb5ce2f723cde78660b5524ee3258dcb/pkg/kubelet/pleg/generic.go#L289) periodically retrieves Pods/Containers from the container runtime and compares them with the information in memory to update t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139788)

**Metadata:**
- Created: 2026-06-16
- Comments: 2
- State: open

### kubernetes/kubernetes#139786: [Flaking Test] [sig-network] Networking Granular Checks: Services should update nodePort: http [Slow]

### Which jobs are flaking?

ci-kubernetes-kind-cloud-provider-loadbalancer

### Which tests are flaking?

[sig-network] Networking Granular Checks: Services should update nodePort: http [Slow]

### Since when has it been flaking?

[6/3/2026, 5:53:23 PM](https://prow.k8s.io/view/gs/kubernetes-ci-log...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139786)

**Metadata:**
- Created: 2026-06-16
- Comments: 2
- State: open

### kubernetes/kubernetes#139782: StreamWatcher.Stop() can deliver error event due to "http2: response body closed"

### What happened?

`StreamWatcher.Stop()` can send a spurious `watch.Error` event to the result channel instead of closing it cleanly.

`Stop()` closes the HTTP response body via `source.Close()`, causing the blocked `Decode()` in `receive()` to fail with `"http2: read on closed response body"`. Si...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139782)

**Metadata:**
- Created: 2026-06-16
- Comments: 2
- State: open

### kubernetes/kubernetes#139801: fix: client-go/certificate rejects unsupported and malformed keys


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Enhance  validateKeyStrength  in client-go certificate manager. 

Because manager accepts custom key generation functions. Invalid, nil, or unsupported keys from custom functions cause panics or delayed fai...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139801)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139800: [WIP][IGNORE ME][DO-NOT-REVIEW]Cadvisor min

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139800)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139797: refactor: use AddEventHandlerWithOptions in node controllers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Migrate plain `AddEventHandler` calls in the nodeipam range allocator and the ttl
controller to `AddEventHandlerWithOptions` with `cache.HandlerOptions{Logger:
&logger}`, so the contextual logger is propagated in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139797)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139796: refactor: use AddEventHandlerWithOptions in apps controllers

#### What type of PR is this?

/kind cleanup
/sig apps

#### What this PR does / why we need it:

Migrate plain `AddEventHandler` calls in the deployment, disruption, job and
replicaset controllers to `AddEventHandlerWithOptions` with
`cache.HandlerOptions{Logger: &logger}`, so the contextual logger...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139796)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139794: refactor: use AddEventHandlerWithOptions in endpoint controllers

#### What type of PR is this?

/kind cleanup
/sig network

#### What this PR does / why we need it:

Migrate plain `AddEventHandler` calls in the endpoint, endpointslice and
endpointslicemirroring controllers to `AddEventHandlerWithOptions` with
`cache.HandlerOptions{Logger: &logger}`, so the contex...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139794)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139792: Add admission policy exclude resource matching tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds test coverage for admission policy `ExcludeResourceRules` matching.

This covers exclusion behavior with `resourceNames` and equivalent resources, and removes a stale TODO in the matcher test.

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139792)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139791: probe: fail HTTP/TCP probes on unresolved named ports

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139791)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139789: test/images/agnhost: bump to 2.66.0

#### What type of PR is this?

/kind cleanup
/sig testing

#### What this PR does / why we need it:

Bumps the agnhost e2e test image from 2.65.0 to 2.66.0.

The new version includes kubernetes/kubernetes#139725, which adds the socat package to the agnhost image.

#### Which issue(s) this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139789)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139784: Add E2E tests for PersistentVolumeClaimUnusedSinceTime

- Add E2E tests for the PVC Unused condition feature (`PersistentVolumeClaimUnusedSinceTime`)
- Tests validate the condition lifecycle: appearing on unbound PVCs, transitioning when pods mount/unmount volumes, and handling feature gate disable
- Adds `ClaimUnusedCondition` timeout to the E2E test ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139784)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139783: Add 'read on closed response body' error to ProbableEOF

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139783)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139780: Automatically discover all GVs with declarative validation in TestVersionedValidationByFuzzing

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139780)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139778: node: cpumanager: consider align-by-socket when distribute-cpus-across-numa is enabled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139778)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139775: Fix typos in API type comments

**What this PR does / why we need it:**

This PR addresses the feedback from @lmktfy on `kubernetes/website#56102`,
where it was noted that typos in generated documentation should be fixed at the
source rather than in the generated Markdown files.

Fixes two spelling mistakes in Go type commen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139775)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139773: test: add integration and performance benchmarks for gang preemption

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
This PR adds integration and performance benchmarks for gang preemption (`WorkloadAwarePreemption`).
It introduces new performance tests in `test/integration/scheduler_perf/workload_preemption/` that benchmark the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139773)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139771: memory.min < high for Guaranteed pod

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139771)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37275: Add variant column header to 5000-node scale jobs

Sets EXPERIMENT_VARIANT=restart and declares a `variant` TestGrid column header on the gce 5000-node scale periodic and presubmit, so each in-place reconfiguration of these exploratory jobs is labeled. Also adds the presubmit to the sig-scalability-gce dashboard.

Issue: https://github.com/kubernete...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37275)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37265: chore: use non-ci ipv6 and dual stack templates with credential provider for cloud-provider-azure 1.30/1.31 presubmits

Switch the IPv6 and dual-stack cluster templates used in cloud-provider-azure 1.30 and 1.31 presubmit jobs from the upstream CAPZ CI templates to the ones hosted in the cloud-provider-azure repo.

The previous cluster api non ci version templates do not include the oot credential provider bootstra...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37265)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37263: DRA: remove version skew tests using 1.32

Kubernetes 1.32 is EOL and no longer available for download, so all jobs (n-3 in 1.35, n-2 in 1.34) which depend on it need be removed.

/assign @nojnhuh 

Fixes: https://github.com/kubernetes/kubernetes/issues/139761

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37263)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3004: kube_pod_status_reason: reduce cardinality by not enumerating all known reasons per pod

**What would you like to be added:**
Stop enumerating every known reason per pod for metric `kube_pod_status_reason`. Only emit a row when the pod actually has a reason set:

`kube_pod_status_reason{reason="OutOfcpu"} 1   // emitted only when true`

This decouples the metric's cardinality from how m...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3004)

**Metadata:**
- Created: 2026-06-16
- Comments: 1
- State: open

### kubernetes/kops#18474: kops-controller does not apply instancegroup nodeLabels to worker nodes on GCE (kops 1.35.1, k8s 1.35.6) — works on AWS

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display this information.**

Client version: 1.35.1 (git-v1.35.1)

**2. What Kubernetes version are you running? `kubectl version` will print the version if a cluster is running or provide the Kubernetes version sp...

🔗 [Link](https://github.com/kubernetes/kops/issues/18474)

**Metadata:**
- Created: 2026-06-16
- Comments: 0
- State: open

### kubernetes/kops#18477: chore(channels): bump k8s versions in alpha channel

Signed-off-by: Moshe Vayner <moshe@vayner.me>

<!--
Thanks for contributing to kubernetes/kops!  Here are some tips for you:
1. If this is your first time, read our contributor guidelines:

 https://git.k8s.io/kops/CONTRIBUTING.md

2. Also, you'll probably want to checkout our development documentat...

🔗 [Link](https://github.com/kubernetes/kops/pull/18477)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9825: VPA: Add recommender Prometheus metrics tests

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Adds unit coverage for the VPA recommender Prometheus RoundTripper metrics introduced for Prometheus history provider API requests.

The new test exercises the counter and duration wrappers with an HTTP response an...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9825)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4143: Add optional Pods LIST benchmark scenario

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This adds optional LIST benchmark coverage for Pods, following the existing ConfigMaps benchmark structure.

The Pods benchmark is gated behind `CL2_LIST_POD_NUMBER`, so existing LIST benchmark jobs keep ...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4143)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23172: drivers: Use deterministic MAC addresses

When a minikube cluster is deleted and recreated with the same name, the VM gets a new random MAC address, causing the DHCP server to assign a different IP. This makes it harder to use static DNS configurations like /etc/hosts for accessing services in the cluster.

Generate a deterministic MAC ad...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23172)

**Metadata:**
- Created: 2026-06-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3139: Add a new controller for L4 Standalone NEG

This PR adds the L4 Standalone NEG controller - a controller that allows the user to request a GCE_VM_IP NEG and set up a kubernetes cluster with a custom created external passthrough load balancer.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3139)

**Metadata:**
- Created: 2026-06-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56137: Adaptation of the Kubernetes Basics diagrams for use with a dark theme.

In PR #56037, the first steps were taken to improve the readability of the Kubernetes Basics diagrams. What was done? A white background was added instead of a transparent one. 

https://github.com/kubernetes/website/commit/212b9ae6764574ea58521e8378c084e37faea695#diff-692fc1b70f750cd3f01d3d08970ce0...

🔗 [Link](https://github.com/kubernetes/website/issues/56137)

**Metadata:**
- Created: 2026-06-16
- Comments: 1
- State: open

### envoyproxy/gateway#9233: Feature Request: Allow per-HTTPRoute opt-out of gateway-level `rateLimit` via merged `BackendTrafficPolicy`

## Summary

When a `BackendTrafficPolicy` targeting a `Gateway` includes a `rateLimit` block, there is currently no supported way to disable or override that rate limit for a single `HTTPRoute` using a merged child `BackendTrafficPolicy`, even when `mergeType: JSONMerge` is used.

## Environment

- ...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9233)

**Metadata:**
- Created: 2026-06-16
- Comments: 1
- State: open

### containerd/containerd#13611: double up of image config envs on import checkpoint

### Description

copilot found issue: https://github.com/containerd/containerd/pull/13453#discussion_r3406515296

code in question
https://github.com/containerd/containerd/blame/main/internal/cri/server/container_checkpoint_linux.go#L369-L374



### Steps to reproduce the issue




### Describe the ...

🔗 [Link](https://github.com/containerd/containerd/issues/13611)

**Metadata:**
- Created: 2026-06-16
- Comments: 0
- State: open

### containerd/containerd#13610: Default seccomp profile: reconsider the capability gating for the own-process NUMA mempolicy syscalls.

### What is the problem you're trying to solve

# Default seccomp profile gates `mbind` / `set_mempolicy` / `get_mempolicy` behind `CAP_SYS_NICE`, which is stricter than the kernel and breaks NUMA-aware workloads (e.g. PyTorch) under least-privilege

## Summary

The default seccomp profile only allo...

🔗 [Link](https://github.com/containerd/containerd/issues/13610)

**Metadata:**
- Created: 2026-06-16
- Comments: 0
- State: open

### containerd/containerd#13609: containerd fatal on restart

### Description

When NRI RunPodSandbox fails after StartSandbox has already created a container record in bolt DB, the deferred cleanup path does not delete the container. This can be triggered by NRI plugins rejecting the sandbox after it has been started, as well as CNI setup timeouts, ttrpc dead...

🔗 [Link](https://github.com/containerd/containerd/issues/13609)

**Metadata:**
- Created: 2026-06-16
- Comments: 1
- State: open

### containerd/containerd#13604: CRI: expose Kubernetes workload identity to snapshotters during Prepare

### What is the problem you're trying to solve

External snapshotters used through the CRI plugin may need to identify the Kubernetes workload associated with a snapshot during `Prepare`. Today, the snapshotter receives the snapshot key, parent, labels, and options, but it does not reliably receive ...

🔗 [Link](https://github.com/containerd/containerd/issues/13604)

**Metadata:**
- Created: 2026-06-16
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-06-17 03:54:50*
