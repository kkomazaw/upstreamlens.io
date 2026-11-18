---
title: "Upstream Github - 2026-11-18"
description: "CNCF upstream activity from github"
pubDate: 2026-11-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/network", "needs-triage", "sig/node", "sig/api-machinery", "needs-sig", "kind/flake", "pr", "area/test", "size/L", "cncf-cla: yes", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "needs-priority", "do-not-merge/needs-kind", "release-note", "needs-ok-to-test", "size/S", "kind/feature", "release-note-none", "do-not-merge/needs-sig", "area/kubelet", "size/XL", "kind/api-change", "sig/auth", "sig/apps", "area/code-generation", "approved", "sig/scheduling", "kind/cleanup", "lgtm", "sig/windows", "ok-to-test", "wg/device-management", "size/XXL", "area/dependency", "kind/dependency", "priority/backlog", "area/apiserver", "kind/failing-test", "do-not-merge/cherry-pick-not-approved", "triage/accepted", "size/M", "priority/important-longterm", "tide/merge-method-squash", "wg/workload-aware-scheduling", "area/custom-resources", "release", "autoscaler", "area/vertical-pod-autoscaler", "kind/kep", "enhancements", "area/documentation", "area/nodeup", "area/api", "kops", "website", "sig/release", "area/release-eng", "needs-kind", "cloud-provider-aws", "size/XS", "area/provider/azure", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "envoyproxy", "gateway", "containerd", "area/cri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144269: Add experimental ambient capability support

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

This PR adds support for Ambient Capabilities. It adds a Pod API field, the kubelet CRI propagation, Pod Security Admission coverage for Ambient capabilities usage and an alpha AmbientCapabilitie...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144269)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6517: KEP-6313: update Network Isolated Pods to match the alpha implementation

- One-line PR description: update KEP-6313 (Network Isolated Pods) to match the alpha implementation that merged for v1.38

- Issue link: https://github.com/kubernetes/enhancements/issues/6313

- Other comments:

The design changed during the implementation discussions and the API review in https://...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6517)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1540: Set MaxResults on unscoped DescribeSecurityGroups calls

## Description
The DescribeSecurityGroups wrapper follows NextToken but never set MaxResults. Without MaxResults, EC2 returns every matching security group in a single response, so the call is never actually paginated, and EC2 has quota on the number of unpaginated DescribeSecurityGroups API call....

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1540)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38297: KEP-6283: alpha/beta: add serving-signer args when the feature is configured

Adds service-signer configuration to kind clusters when the feature is enabled.

/assign @deads2k

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38297)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14609: [SIG-Node]: 2763 - Support Ambient Capabilities in Kubernetes

### KEP/SIG-Node References

- KEP(s): 2763 - Support Ambient Capabilities in Kubernetes
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/2763
- KEP PR: https://github.com/kubernetes/enhancements/pull/6461 (Amendment PR)
- K8s-Release: 1.39 (attempted)
- KEP-Owner: SIG S...

🔗 [Link](https://github.com/containerd/containerd/issues/14609)

**Metadata:**
- Created: 2026-11-17
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#144265: EndpointSlice Auto topology hints can stay stale after CPU changes and fail to recover after fallback

### What happened?

For Services using `service.kubernetes.io/topology-mode: Auto`, CPU-only Node updates do not refresh the cached zone capacity ratios.

With two Ready Nodes in different zones, 4 allocatable CPUs per Node, and six Ready endpoints split evenly between them, hints initially allocate...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144265)

**Metadata:**
- Created: 2026-11-17
- Comments: 2
- State: open

### kubernetes/kubernetes#144260: WebSocket exec: heartbeat times out after 61 s when stdin or stdout is backpressured

**What happened:** `kubectl exec -i` over WebSocket (v5.channel.k8s.io,
`ExtendWebSocketsToKubelet` on) fails with
`next reader: read tcp …: i/o timeout` 61 seconds after the last pong when
the remote process reads stdin slower than the client sends it. SPDY
completes the same transfer.

**Reproduce...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144260)

**Metadata:**
- Created: 2026-11-17
- Comments: 1
- State: open

### kubernetes/kubernetes#144254: Deployment misses progress deadline after ReplicaSet annotation update failures

### What happened?

During an incomplete, non-paused Deployment rollout, an update that copies Deployment annotations to the existing new ReplicaSet can fail before rollout status is reconciled.

While the update continues to fail, the Deployment can retain `Progressing=True` with reason `ReplicaSet...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144254)

**Metadata:**
- Created: 2026-11-17
- Comments: 2
- State: open

### kubernetes/kubernetes#144252: CRD tests flaking

### Which jobs are flaking?

Something has changed recently that causes old tests to flake more often (at least subjectively):

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/140084/pull-kubernetes-cmd/2122322028215144448

```
error: error validating "hack/testdata/CRD/example-crd-1-nam...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144252)

**Metadata:**
- Created: 2026-11-17
- Comments: 1
- State: open

### kubernetes/kubernetes#144273: quota: enforce per-resource pod constraints when pod-level resources partially set



Subtract only the quota resource names satisfied by pod.Spec.Resources (via podComputeUsageHelper, matching per-container key-presence semantics including explicit zero quantities) from requiredSet before enforcing any remaining required CPU or memory resources across containers and init container...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144273)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144272: client-go: preserve full-list fallbacks and reject incomplete responses

```release-notes
client-go: preserve full-list fallbacks and reject incomplete responses
```
When a paginated list expires, ListPager retries with limit=0 to retrieve a complete snapshot. A list-options callback can overwrite that limit with a positive page size, causing the API server to return ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144272)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144271: Add build support for riscv64

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144271)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144268: ktesting: fix unit test deadline/cancel race

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144268)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144266: endpointslice: refresh and restore topology hints after Node updates

#### What type of PR is this?

/kind bug
/sig network

#### What this PR does / why we need it:

Auto topology hints use allocatable CPU to calculate zone capacity ratios, but CPU-only Node updates leave those ratios stale. Failed allocations are also removed from tracking, preventing Node-triggered...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144266)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144263: scheduler: evict leftover same-name entries when adding a Pod to queue

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When a Pod is deleted while in flight and its unwinding failure path requeues it during the `NotFound` window before a replacement Pod with the same `namespace/name` is created, the stale Pod can sit in `backoffQ`, `u...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144263)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144261: scheduler: don't requeue, nominate, or report a Pod superseded mid-attempt

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When a Pod is deleted and recreated under the same `namespace/name` (new UID) while an earlier scheduling or binding attempt for the previous Pod instance is still unwinding, the stale attempt can corrupt in-memory sc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144261)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144259: kubelet: consolidate Windows pod resources status tests


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Follow-up to address an action from review comment https://github.com/kubernetes/kubernetes/pull/142883#discussion_r4593945700 
- Moves _TestConvertToAPIPodLevelResourcesStatus_ from `pkg/kubelet/kubelet_pod_lev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144259)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144258: scheduler: add pod UID precondition to PatchPodStatus and DeletePod

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When a Pod is deleted and recreated under the same `namespace/name` (new UID) while an earlier scheduling, preemption, or binding operation for the previous Pod instance is in flight, API calls addressed only by `(nam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144258)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144256: scheduler: add waiting pod group pods to the queue in one step

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144256)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144255: deployment: report timeouts after ReplicaSet annotation update errors

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

ReplicaSet annotation synchronization runs during scaling detection. If that update fails, `syncDeployment` returns before checking rollout progress, so an incomplete Deployment can retain `Progressing=True` after it...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144255)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144253: Fix/cpumanager inner cache alignment

#### What type of PR is this?

/kind bug
/kind dependency

#### What this PR does / why we need it:

With introduction years ago uncore cache alignment option in kubelet/CPUManager, it was never validated properly on the environments where uncore caches are not on L3 (meaning, not validated t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144253)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144250: Automated cherry pick of #144168: apiserver: let net/http pool the HTTP/2 test connections

Cherry pick of #144168 on release-1.37.

#144168: apiserver: let net/http pool the HTTP/2 test connections

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144250)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144249: Automated cherry pick of #144168: apiserver: let net/http pool the HTTP/2 test connections

Cherry pick of #144168 on release-1.36.

#144168: apiserver: let net/http pool the HTTP/2 test connections

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144249)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144248: Automated cherry pick of #144167: certificates: build the empty DNSName test certificate by hand

Cherry pick of #144167 on release-1.36.

#144167: certificates: build the empty DNSName test certificate by hand

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144248)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144247: Automated cherry pick of #144167: certificates: build the empty DNSName test certificate by hand

Cherry pick of #144167 on release-1.37.

#144167: certificates: build the empty DNSName test certificate by hand

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144247)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144244: test: deflake TestLeaseCandidateCleanup by adjusting timers and poll timeout

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:
`TestLeaseCandidateCleanup` flaked periodically (especially under CPU load or slower architectures) with:
```
cle_managed_lease_test.go:294: Timieout waiting for lease gc
```

Root cause:
The test apiserver runs the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144244)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144241: [WAS] reuse a single Workload lookup for suspend delete and getOrCreateWork

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
Following up to the comment in [PR #143537](https://github.com/kubernetes/kubernetes/pull/143537#discussion_r4575379585):
- Look up the root Job `Workload` once in `ensureWorkloadAndPodGroup` and reuse it for susp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144241)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144240: Support array printer columns in custom resource Table responses

#### What type of PR is this?

/kind bug
/kind cleanup

/sig api-machinery
/area custom-resources

#### What this PR does / why we need it:
- [PR #101205](https://github.com/kubernetes/kubernetes/pull/101205) raised the problem of CRD printer columns keeping only the first JSONPath match. It closed ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144240)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.17.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.17.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.17.0
- Published: 2026-11-17
- Prerelease: No

### kubernetes/autoscaler#10692: VPA: respect InPlace disruption budget deferrals

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Skip budget-deferred pods in `InPlace` mode. Preserve retries with changed recommendations for ongoing resizes.


#### Which issue(s) this PR fixes:
Fixes #10688

#### Special notes for your reviewer:

#### Does this P...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10692)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19062: gVisor: install from the release tarball on every distribution

**What this PR does / why we need it**:

gVisor instance groups only get `runsc` on Debian-family images: nodeup installs it from the gVisor apt repository and returns silently everywhere else, while the handler, the `kops.k8s.io/gvisor` label and the RuntimeClass are still set up (#19051). This ins...

🔗 [Link](https://github.com/kubernetes/kops/pull/19062)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59190: Clarify where to run the command in the "Is kube-proxy running?" section

## Description

### What would you like to be added or changed?

In the **"Is kube-proxy running?"** section of the Debug Services tutorial, the instructions mention:

> Running directly on a Node, you should get something like the below:

However, for someone following the tutorial with a local Kub...

🔗 [Link](https://github.com/kubernetes/website/issues/59190)

**Metadata:**
- Created: 2026-11-17
- Comments: 1
- State: open

### kubernetes/website#59186: [docs]: Improve container restart observation in the memory limits tutorial using kubectl --watch

**This is a Feature Request**

### What would you like to be added

In the [[Assign Memory Resources to Containers and Pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/) tutorial, ...

🔗 [Link](https://github.com/kubernetes/website/issues/59186)

**Metadata:**
- Created: 2026-11-17
- Comments: 6
- State: open

### kubernetes/release#4633: GPG signed release tags

### What would you like to be added?


Release tags here are annotated tags from the release robot, but they are not signed. Recent ones like v1.37.2 and v1.38.0-beta.0 show as `unsigned` in the GitHub API, and `git tag -v` has nothing to verify.

I'd like the release process to GPG sign these tags,...

🔗 [Link](https://github.com/kubernetes/release/issues/4633)

**Metadata:**
- Created: 2026-11-17
- Comments: 2
- State: open

### kubernetes/test-infra#38305: CAPZ: use bigger nodes for periodic DRA conformance tests

Follow-up #38303 to mirror that change to the presubmit DRA conformance job to its periodic corollary. The presubmit job is passing for https://github.com/kubernetes-sigs/cluster-api-provider-azure/pull/6843:

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/kubernetes-sigs_cluster-api-pr...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38305)

**Metadata:**
- Created: 2026-11-18
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway: v1.9.4

# Release Announcement

Check out the [v1.9.4  release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.9.4) to learn more about the release.

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.4)

**Metadata:**
- Version: v1.9.4
- Published: 2026-11-17
- Prerelease: No

### containerd/containerd#14614: unpack: parallel unpack (rebase) can't use a remote snapshotter's AlreadyExists below the first layer

### Description

With the transfer service and `max_concurrent_unpacks > 1`, the unpacker uses parallel unpack for a snapshotter that declares the `rebase` capability (`core/unpack/unpacker.go`, `supportParallel`). Each layer is prepared with no parent (`topHalf`: `if i > 0 && !parallel { parent = c...

🔗 [Link](https://github.com/containerd/containerd/issues/14614)

**Metadata:**
- Created: 2026-11-17
- Comments: 2
- State: open

### containerd/containerd#14607: Importing containerd configuration files replaces nested plugin arrays

### Description

When a configuration file and an imported file both define an array in the same plugin table, the imported array replaces the earlier array. In contrast, top-level arrays are merged. This affects arrays of tables as well as arrays of scalar values.

For example, an imported `plugins...

🔗 [Link](https://github.com/containerd/containerd/issues/14607)

**Metadata:**
- Created: 2026-11-17
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-18 05:52:33*
