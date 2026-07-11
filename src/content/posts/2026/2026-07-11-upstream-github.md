---
title: "Upstream Github - 2026-07-11"
description: "CNCF upstream activity from github"
pubDate: 2026-07-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scheduling", "sig/node", "sig/api-machinery", "kind/feature", "needs-triage", "wg/device-management", "kind/flake", "pr", "area/kubelet", "size/XL", "release-note-none", "cncf-cla: yes", "needs-priority", "kind/bug", "release-note", "size/L", "needs-ok-to-test", "do-not-merge/work-in-progress", "size/S", "kind/failing-test", "area/dependency", "area/test", "kind/cleanup", "sig/testing", "lgtm", "size/XS", "approved", "size/M", "needs-rebase", "size/XXL", "sig/apps", "sig/instrumentation", "area/apiserver", "kind/api-change", "sig/network", "sig/scalability", "cncf-cla: no", "wg/workload-aware-scheduling", "ok-to-test", "dependencies", "go", "minikube", "area/infra", "area/prow", "sig/k8s-infra", "area/infra/ibmcloud", "k8s.io", "area/artifacts", "area/registry.k8s.io", "do-not-merge/hold", "committee/steering", "area/elections", "community", "cloud-provider-gcp", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "sig/autoscaling", "area/provider/cluster-api", "do-not-merge/release-note-label-needed", "prometheus", "release", "graphite_exporter", "common", "promlens", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#9962: AEP-9936: Per-VPA Observation Window

This is a draft AEP for #9936 (Per-VPA Observation Window), triaged into `triage/accepted` by @omerap12.

The proposal adds an optional `observationPeriodSeconds` field on `PodUpdatePolicy`. During the window, the Updater treats the VPA as if `updateMode` were `Off`, regardless of the configured mod...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9962)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### prometheus/promlens: 0.4.0 / 2026-07-10

PromLens is no longer maintained and has been archived. Much of its functionality has been merged into the Prometheus server's "Explain" tab, where it is kept up to date.

* [CHANGE] PromQL: The `holt_winters` function is now called `double_exponential_smoothing`, following its rename in Prometheus 3.0. #266
* [CHANGE] Logging: Switch from go-kit/log to Go's standard library log/slog. The log output format has changed. #149
* [CHANGE] Docker images are now also published to GHCR (`ghcr.io/pr...

🔗 [Link](https://github.com/prometheus/promlens/releases/tag/v0.4.0)

**Metadata:**
- Version: v0.4.0
- Published: 2026-07-10
- Prerelease: No

## Updates

### kubernetes/kubernetes#140424: DRA: define an upper bound or overflow-safety contract for device request count

## Summary

For `DeviceAllocationModeExactCount`, the device request `Count` is an `int64` and is currently validated only for its lower bound.

Both `ExactDeviceRequest.Count` and `DeviceSubRequest.Count` flow through `validateDeviceAllocationMode`:

```go
case resource.DeviceAllocationModeExactCou...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140424)

**Metadata:**
- Created: 2026-07-10
- Comments: 1
- State: open

### kubernetes/kubernetes#140423: Non-deterministic victim ordering in pod group preemption causes flaky `TestPodGroupEvaluator_SelectVictimsOnDomain`

### Which jobs are flaking?

`pull-kubernetes-unit-windows-master`

### Which tests are flaking?

`[sig-scheduling] k8s.io/kubernetes/pkg/scheduler/framework: preemption` — `TestPodGroupEvaluator_SelectVictimsOnDomain/Efficiency:_Preempt_minimum_number_of_victims`

### Since when has it been flaking...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140423)

**Metadata:**
- Created: 2026-07-10
- Comments: 1
- State: open

### kubernetes/kubernetes#140420: TestSubmitPodGroupAlgorithmResult/One_unschedulable` flakes on Windows due to non-deterministic pod ordering in PodGroup scheduling

### Which jobs are flaking?

pull-kubernetes-unit-windows-master

### Which tests are flaking?

- `TestSubmitPodGroupAlgorithmResult/One_unschedulable`
- `TestSubmitPodGroupAlgorithmResult` (parent)


### Since when has it been flaking?

Since commit `8eb66b73ef2` ("Add support for PodGroups in sche...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140420)

**Metadata:**
- Created: 2026-07-10
- Comments: 1
- State: open

### kubernetes/kubernetes#140432: Add scaling exclusive cpus checkpoint tests

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
This is an enhancement of https://github.com/kubernetes/kubernetes/pull/140314 by store/restore checkpoint tests.

Extend TestCheckpointStateRestore and TestCheckpointStateStore to cover the InPlacePodVerti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140432)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140431: DRA: roll back reserved state in allocateDevice

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

The structured DRA allocator can leave reserved state behind when it stops considering a candidate device, which can make a schedulable pod fail to schedule.

allocateDevice reserves a device's shared count...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140431)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140430: Fix DRA test flake caused by goroutine leak racing with TempDir cleanup

#### What type of PR is this?

/kind bug
/kind failing-test
/kind flake

#### What this PR does / why we need it:

With ResourceHealthStatus enabled (Beta, default on since 1.36), RegisterPlugin spawns a goroutine that runs WatchResources stream and writes to healthInfoCache's state file in ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140430)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140429: kubelet/cadvisor: disable container discovery when using CRI stats

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140429)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140427: test/e2e/node: add probe stress test for HTTP, TCP, and gRPC liveness probes

Fixes #115782

## What this does
Adds a `[Serial][Slow]` e2e test in `test/e2e/node/probe_stress.go` that:
- Creates a pod with 20 containers, each running a **1-second** liveness probe
- Covers all three probe transports: **HTTP**, **TCP**, **gRPC**
- Observes for **2 minutes** and asserts `restart...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140427)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140426: pytorch workloads are used instead of tensor flow

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140426)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140425: Fix non-deterministic victim ordering in pod group preemption

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

MoreImportantVictim used time.Now() as fallback when pods lack StartTime, producing non-deterministic sort order across platforms. Add UID-based tie-breaker and set explicit StartTimes in the Effic...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140425)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140422: resourceclaim controller: Add owner kind labels to create metric

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140422)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140421: Fix non-deterministic pod ordering in PodGroup scheduling

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:
PodGroupMemberPodsOrderingFunc returned 0 for pods with equal priority, attempts, and timestamp. On Windows, the low-resolution system clock means pods created in quick succession often share the sam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140421)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140419: Fix ConvertToNative for Mutating admission policies

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

This PR fixes an issue in Mutating Admission Policy (MAP) during patch evaluation by explicitly supporting type conversions to structpb types, and refines the associated test suite.

Specifical...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140419)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140418: Disable SchemalessTypeRef for MutatingAdmissionPolicies

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

This PR refactors how `admission.LazyObject` evaluates CEL representations to disable `SchemalessTypeRef` by default while explicitly preserving it for Validating Admission Policies (VAPs). 

T...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140418)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140417: kubelet: add failure threshold info to probe failure events

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

When a container probe (liveness, readiness, or startup) fails, Kubernetes emits a warning event. However, this event was recorded with the same format regardless of whether the failure reached t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140417)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140416: Migrate ObjectMeta immutability checks to DV

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR migrates the immutability checks of four `ObjectMeta` fields (`UID`, `CreationTimestamp`, `DeletionTimestamp`, `DeletionGracePeriodSeconds`) from handwritten validation to declarative validation.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140416)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140415: Scale the Services repair loops for very large Service counts

**What type of PR is this?**

/kind feature
/sig network
/sig scalability

**What this PR does / why we need it:**

The Services repair loops have two hard-coded timings that break down at very large Service counts, where a single runOnce pass — a full quorum List of every Service — takes minutes:

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140415)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140414: Retry services repair initial sync with backoff instead of waiting a full interval

**What type of PR is this?**

/kind bug
/sig network

**What this PR does / why we need it:**

The ClusterIP/NodePort repair loops treat the FIRST successful sync specially: the apiserver's post-start hook blocks readiness on it. But when that first runOnce fails transiently (storage not yet warm ri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140414)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140413: Add TAS gang preemption performance scenarios

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR introduces a new scheduler performance benchmark scenario, `GangPreemptionTopology`, to evaluate the performance of gang scheduling preemption when the preemptor pods are subject to Topology Aware Schedul...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140413)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140412: Remove post filters from pod group cycle

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR disables all PostFilters from the pod group cycle. This is a follow up to https://github.com/kubernetes/kubernetes/pull/139674 which introduced a PodGroupPostFilter. We expect all PostFilter owners ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140412)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140411: fix: correctly track validating webhook latency across parallel dispatch and sequential retries

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
the apiserver_request_sli_duration_seconds was miscalculating the SLI latency for requests involving validating webhooks. The SLI formula subtracts webhook latency from total elapsed time. 

the original max was ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140411)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140410: test/client-go: fix data race in TestRequestMaxRetries

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
A data race was found in `TestRequestMaxRetries` in `staging/src/k8s.io/client-go/rest/request_test.go`. The test server's HTTP handler (`retryOneTimeHandler`) and the subtest cleanup loop read, write, and reset th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140410)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140408: Add topology spreading gang preemption performance scenarios

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR introduces a new scheduler performance benchmark scenario, `GangPreemptionTopologySpreading`, to evaluate the performance of gang scheduling preemption when the preemptor pods also have topology spr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140408)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23322: chore(deps): bump golang.org/x/crypto from 0.45.0 to 0.52.0 in /hack/prow/minitest

Bumps [golang.org/x/crypto](https://github.com/golang/crypto) from 0.45.0 to 0.52.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/crypto/commit/a1c0d9929856c8aba2b31f079340f00578eda803"><code>a1c0d99</code></a> go.mod: update golang.org/x dependencies</li>
<li><a ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23322)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9703: add docs for rotating cluster credentials

I added docs to show how we rotate credentials for IBM build clusters that don't use Workload Identity. I also added minimal readmes to every cluster + argocd status badges.

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9703)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9702: Bump git-sync to v4.7.1

**What this PR does / why we need it**:

Bump git-sync to v4.7.1

**If you are promoting an image, please make sure you have done the following:**

- [X] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob/main/cmd/gcrane/README.md) and added it as a co...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9702)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9698: Image promotion for scl-image-builder v0.1.55

Image promotion for scl-image-builder v0.1.55
This is an automated PR generated from `kpromo`
```
kpromo pr --fork drew-viles --project scl-image-builder --reviewers "@AverageMarcus @jsturtevant @kkeshavamurthy @mboersma @drew-viles" --tag v0.1.55
```

/hold
cc: @AverageMarcus @jsturtevant @kkeshava...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9698)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9069: Update date for the Steering question and answer session for the 2026 Steering election

This PR updates the 2026 Steering election schedule for the Steering Q&A from July 29 to August 5 as discussed in issue https://github.com/kubernetes/steering/issues/312

/assign @npolshakova @sreeram-venkitesh 

🔗 [Link](https://github.com/kubernetes/community/pull/9069)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1244: chore(deps): bump golang from 1.26.4 to 1.26.5 in /metis

Bumps golang from 1.26.4 to 1.26.5.


🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1244)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9966: [BUG]: clusterapi provider can't process machinedeployment managed labels

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

/area cluster-autoscaler

**What version of the component are you using?**:

<!--
What version of the relevant component are you using? Either the image tag or helm chart version.
...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9966)

**Metadata:**
- Created: 2026-07-10
- Comments: 1
- State: open

### kubernetes/autoscaler#9963: AEP-8026 Phase 2: expose recommendationMarginFraction per-VPA

**Which component are you using?**:

/area vertical-pod-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

Different workloads want different safety margins on top of the recommender's usage-based prediction. Today, `--recomme...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9963)

**Metadata:**
- Created: 2026-07-10
- Comments: 1
- State: open

### kubernetes/autoscaler#9961: clusterapi: Machines are classified as failed based on status.failureMessage even while the machine controller is still reconciling them

**Which component are you using?**:

/area cluster-autoscaler
/area provider/cluster-api

**What version of the component are you using?**:

Component version: Cluster Autoscaler 1.35

behaviour introduced by #7989 and #7950, merged into 1.33; still present on master.

**What k8s version are you usi...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9961)

**Metadata:**
- Created: 2026-07-10
- Comments: 2
- State: open

### kubernetes/autoscaler#9968: Improve logging visibility in CanInPlaceUpdate

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
This PR adds missing `klog.V(4)` debug logs to the early-return paths of the `CanInPlaceUpdate` function within `PodsInPlaceRestrictionImpl`. 

Previously, if an in-place update was deferred/evicted due to ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9968)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9967: fix: cluster api machinedeployment managed labels

#### What type of PR is this?

/kind bug


#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is about `failing-tests or flakes`, p...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9967)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.13.1 / 2026-07-10

This is a bugfix release for 3.13 LTS.

- [BUGFIX] TSDB: Fix the head-chunk cache returning samples from the wrong chunk, or spurious not-found errors, to range queries after head-chunk truncation. #19134


🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.1)

**Metadata:**
- Version: v3.13.1
- Published: 2026-07-10
- Prerelease: No

### prometheus/graphite_exporter: 0.17.0 / 2026-07-08

* [FEATURE] Add metric and debug log for dropped samples #301
* [FEATURE] Support scale param in metric mapping #298
* [ENHANCEMENT] getool: sort labels in blocks for Mimir compatibility #294


🔗 [Link](https://github.com/prometheus/graphite_exporter/releases/tag/v0.17.0)

**Metadata:**
- Version: v0.17.0
- Published: 2026-07-10
- Prerelease: No

### prometheus/common: v0.70.0

## What's Changed

* config: fix TLSVersion.String() printing pointer address by @s3onghyun in https://github.com/prometheus/common/pull/929
* build(deps): bump golang.org/x/net from 0.55.0 to 0.56.0 by @dependabot[bot] in https://github.com/prometheus/common/pull/933
* Manually go mod tidy by @SuperQ in https://github.com/prometheus/common/pull/934
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/common/pull/937
* route: add support for th...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.70.0)

**Metadata:**
- Version: v0.70.0
- Published: 2026-07-10
- Prerelease: No

### containerd/containerd#13763: containerd 2.2 cannot parse the bootstrap response from a 2.3 runc shim

A containerd 2.2 runtime-v2 manager cannot start `containerd-shim-runc-v2` from containerd 2.3.

The 2.3 shim accepts the legacy CLI, environment, and stdin invocation used by containerd 2.2 and starts the shim process.
However, it unconditionally writes the new protobuf-encoded `BootstrapResult` to...

🔗 [Link](https://github.com/containerd/containerd/issues/13763)

**Metadata:**
- Created: 2026-07-10
- Comments: 0
- State: open

### containerd/overlaybd: v1.0.18

## Features
- **zfile**: add Intel QAT hardware acceleration for LZ4 decompression [#406](https://github.com/containerd/overlaybd/pull/406) ([xiecl666](https://github.com/containerd/overlaybd/commit/c11cc93792a560ff84c031a2df9e90d8d745711d))
- add UDS credential helper mode [#412](https://github.com/containerd/overlaybd/pull/412) ([Xiaoxuan Wang](https://github.com/containerd/overlaybd/commit/504b99fe190d3570bc6797ceea109876350ed0ce))

## Continuous Integration
- add Dependabot to keep dependenc...

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/v1.0.18)

**Metadata:**
- Version: v1.0.18
- Published: 2026-07-10
- Prerelease: No


---

*This content was automatically collected on 2026-07-11 02:26:50*
