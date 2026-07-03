---
title: "Upstream Github - 2026-07-03"
description: "CNCF upstream activity from github"
pubDate: 2026-07-03
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "sig/testing", "area/e2e-test-framework", "needs-triage", "sig/windows", "kind/failing-test", "sig/release", "pr", "area/kubectl", "release-note", "size/L", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/apiserver", "sig/api-machinery", "approved", "kind/cleanup", "release-note-none", "size/M", "sig/scheduling", "sig/apps", "do-not-merge/release-note-label-needed", "area/kubelet", "sig/storage", "size/XXL", "kind/api-change", "sig/auth", "area/code-generation", "area/dependency", "do-not-merge/work-in-progress", "wg/device-management", "area/test", "kind/flake", "sig/security", "priority/important-soon", "kind/feature", "triage/accepted", "wg/workload-aware-scheduling", "needs-rebase", "sig/etcd", "cncf-cla: no", "size/S", "size/XS", "do-not-merge/needs-kind", "do-not-merge/invalid-commit-message", "good first issue", "help wanted", "kind/documentation", "website", "area/jobs", "area/config", "test-infra", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/helm-charts", "ok-to-test", "area/documentation", "area/api", "kops", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "lgtm", "sig/network", "area/access", "area/infra", "area/terraform", "area/groups", "area/infra/gcp", "enhancements", "containerd", "area/cri", "area/snapshotters"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140189: kubectl: create cluster-info dump output with owner-only permissions

#### What type of PR is this?

/kind bug
/sig cli
/sig security
/area kubectl

#### What this PR does / why we need it:

`kubectl cluster-info dump --output-directory` writes every dump file through `setupOutputWriter`, which used `os.Create` (mode `0666` before umask, typically `0644`) inside direc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140189)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140188: [WAS] KEP-5547: Integrate Job Controller with workloadbuilder lib and building blocks API

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Integrate Job controller with workloadbuild library and the building blocks APIs

#### Which issue(s) this PR is related to:
Ref #139359 

#### Special notes for your reviewer:
Depends on:
- https:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140188)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140186: KEP 5823: Pod-level Checkpoint/Restore

This pull request implements KEP 5823: Pod-level Checkpoint/Restore.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140186)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140184: [WIP] Graduate WAS APIs to beta

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

TODO

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/4671

#### Special notes for your reviewer:

This is still WIP - some tests...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140184)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140191: e2e: Pod InPlace Resize Container (resource-quota)/(limit-ranger) tests use hardcoded resource sizes too large for resource-constrained nodes

### What happened?

The `Pod InPlace Resize Container (resource-quota)` and `Pod InPlace Resize Container (limit-ranger)` e2e tests in `test/e2e/node/pod_resize.go` (`doPodResizeResourceQuotaTests` / `doPodResizeLimitRangerTests`) hardcode a base container size of `300m CPU / 300Mi memory`. Each tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140191)

**Metadata:**
- Created: 2026-07-02
- Comments: 2
- State: open

### kubernetes/kubernetes#140187: [Failing Test] RestartAllContainers/ContainerRestartRules e2e time out on Hyper-V-isolated Windows (capz-windows-master-hyperv)

### Which jobs are failing?

`ci-kubernetes-e2e-capz-master-windows-hyperv-serial-slow`

The process-isolated equivalent `ci-kubernetes-e2e-capz-master-windows-serial-slow` is **green** for the same specs — the failure is specific to Hyper-V isolation.

### Which tests are failing?

All `RestartAllC...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140187)

**Metadata:**
- Created: 2026-07-02
- Comments: 1
- State: open

### kubernetes/kubernetes#140185: kubelogin.exe and kubectl.exe not signed

We are currently implementing Application Control for Business and our developer use the kubernetes software.
Now we want to whitelist kubelogin.exe and kubectl.exe but to our surprise both executables aren't signed at all : 

kubectl.exe : 

<img width="410" height="456" alt="Image" src="https://gi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140185)

**Metadata:**
- Created: 2026-07-02
- Comments: 3
- State: open

### kubernetes/kubernetes#140202: kubectl cp: recognize absolute Windows drive-letter paths

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl cp` splits each argument on the first `:` to separate a pod spec
from a file path. On Windows this misinterprets an absolute path such as
`C:\Temp\foo.txt` as a pod named `C` with remote path `\Temp\foo.txt`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140202)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140201: Fix VAP/MAP params to consistently used the typed representation when available

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This fixes a bug where slight differences in the typed and unstructured representation of objects, such as quantity being a string vs. being a typed object, would be observable to CEL expressions *only* when a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140201)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140200: Reduce allocations for list requests served from the watch cache

/kind cleanup

#### What this PR does / why we need it:

This reduces allocations when serving LIST requests by preallocating when loading data from the watch cache B tree.

```
goos: linux
goarch: amd64
pkg: k8s.io/apiserver/pkg/storage/cacher
cpu: Intel(R) Xeon(R) CPU @ 2.20GHz
        ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140200)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140199: Reduce allocations in protobuf list streaming

/kind cleanup

#### What this PR does / why we need it:

This reduces allocs when streaming protobuf lists via some simple pre-allocations.

```
goos: linux
goarch: amd64
pkg: k8s.io/apimachinery/pkg/runtime/serializer/protobuf
cpu: Intel(R) Xeon(R) CPU @ 2.20GHz
goos: linux
goarch: amd6...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140199)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140198: tainteviction: check live taints before evicting pods

<!--
Thank you for contributing to Kubernetes! Before submitting this PR,
please make sure you have read the contribution guidelines:
https://github.com/kubernetes/kubernetes/blob/master/CONTRIBUTING.md
-->

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140198)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140197: nodelifecycle: mark pods not ready on false to unknown transition

<!--
Thank you for contributing to Kubernetes! Before submitting this PR,
please make sure you have read the contribution guidelines:
https://github.com/kubernetes/kubernetes/blob/master/CONTRIBUTING.md
-->

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140197)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140196: kubelet: stop logging raw HTTP probe header values at -v=4

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The kubelet HTTP prober logged the full `HTTPGet.HTTPHeaders` slice, including header values, in its V(4) `"HTTP-Probe"` log line.

Since these headers are user supplied, values may contain credentials such a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140196)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140194: Implement volume health api

Implement API changes for supporting Volume health

/sig storage


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140194)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140193: WIP: DRA: resource slice tracker informer

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This switches to the new type-safe informer API (https://github.com/kubernetes/kubernetes/pull/139821).

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

#### ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140193)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140192: test: reduce resource footprint of pod resize resource-quota/limit-ranger e2e tests

**What type of PR is this?**

/kind flake

**What this PR does / why we need it:**

The `Pod InPlace Resize Container (resource-quota)` and `(limit-ranger)` e2e tests each create 2 Guaranteed-QoS pods via `CreateBatch`, using a hardcoded baseline of 300m CPU / 300Mi memory per container -- 600m/600M...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140192)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140190: kubelet/userns: don't allocate ranges that include ID 2^32-1

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

The kubelet's user namespace pool covers `[idsPerPod, 2^32)` by default (`getKubeletMappings`), so with the default 65536 IDs per pod the last allocatable block is `[4294901760, 4294967295]`. The ker...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140190)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140183: scheduler: update PodGroup.Status when pod SchedulerNames differ

**What type of PR is this?**
/kind bug

**What this PR does / why we need it:**
When `QueuedPodInfos()` detects mismatched `.spec.schedulerName` or priority values across pods in a group, it returns an error early and calls `FailureHandler` for each pod — but never reaches `submitPodGroupAlgorit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140183)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140182: [WIP, not ready for review] Inject top controller name and type directly in pods

…od's annotation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/com...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140182)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140180: Add a message when preemption succeeds

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR adds a message to preemption plugin status when it succeeds. Currently we only add the message from preemption when preemption fails:
```
0/1 nodes are available: 1 Insufficient cpu. preemption: 0...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140180)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140178: WIP: test watch-list-off benchmark

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140178)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140177: scheduler: Only check conflicts for racing PodScheduled condition updates

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140177)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56366: Fix grammar error in What Happens After A Node Restart page


**Problem:**

The following sentence on line 161 in `/docs/reference/node/what-happens-on-restart/` contains two grammatical errors:

"The node renews the lease and reconcile it's status."

**Proposed Solution:**

Should be:

 "The node renews the lease and reconciles its status."


Fixes:
- `recon...

🔗 [Link](https://github.com/kubernetes/website/issues/56366)

**Metadata:**
- Created: 2026-07-02
- Comments: 6
- State: open

### kubernetes/test-infra#37380: SIG-Storage: run container-object-storage-interface e2e on kops

Move the COSI E2E presubmit from the EKS/Kind-style setup to the k8s-infra-prow-build cluster with kubetest2-kops dependencies.

The job now checks out kops, uses the kops test service account and GCE presets, and invokes the repo-side kops E2E entrypoint while remaining optional during bring-up.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37380)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9926: VPA: reactive pressure detection using PSI and memory.events for real-time in-place resize

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area vertical-pod-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9926)

**Metadata:**
- Created: 2026-07-02
- Comments: 2
- State: open

### kubernetes/autoscaler#9921: docs update: compatability matrix

**Which component are you using?**:
/area cluster-autoscaler
/area helm-charts

**What k8s version are you using (`kubectl version`)?**: 1.35

**Anything else we need to know?**:
It looks like there are several new releases since helm-chart 9.51.x, but the matrix has not been updated yet: 
https://g...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9921)

**Metadata:**
- Created: 2026-07-02
- Comments: 1
- State: open

### kubernetes/autoscaler#9931: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8 from 8.3.0-beta.1 to 8.3.0-beta.2 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8](https://github.com/Azure/azure-sdk-for-go) from 8.3.0-beta.1 to 8.3.0-beta.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/Azure/azure-sdk-for-go/commit/b084840894a9e0f0...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9931)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9930: dependabot(deps): bump google.golang.org/grpc from 1.81.1 to 1.82.0 in /cluster-autoscaler

Bumps [google.golang.org/grpc](https://github.com/grpc/grpc-go) from 1.81.1 to 1.82.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/grpc/grpc-go/releases">google.golang.org/grpc's releases</a>.</em></p>
<blockquote>
<h2>Release 1.82.0</h2>
<h1>Behavior C...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9930)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9929: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/storage/azblob from 1.6.3 to 1.8.0 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/storage/azblob](https://github.com/Azure/azure-sdk-for-go) from 1.6.3 to 1.8.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go/releases">github.com/Azure/azure-sdk-for-go/sdk/storage/azblo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9929)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9928: dependabot(deps): bump github.com/Azure/azure-sdk-for-go-extensions from 0.1.6 to 0.6.0 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go-extensions](https://github.com/Azure/azure-sdk-for-go-extensions) from 0.1.6 to 0.6.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go-extensions/releases">github.com/Azure/azure-sdk-for-go-ext...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9928)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9927: dependabot(deps): bump github.com/Azure/skewer/v2 from 2.0.1 to 2.1.0 in /cluster-autoscaler

Bumps [github.com/Azure/skewer/v2](https://github.com/Azure/skewer) from 2.0.1 to 2.1.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/skewer/releases">github.com/Azure/skewer/v2's releases</a>.</em></p>
<blockquote>
<h2>v2.0.4</h2>
<h2>What's Chang...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9927)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9922: [Scaledown] Implement two-pass unneded node evaluation

First find all empty nodes, then continue to binpacking. This allows us to process more nodes within timeout.

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds i...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9922)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9920: recommender: defer pod deletion until after metrics are loaded

Shifts the deletion of terminated pods to execute after LoadRealTimeMetrics. This prevents missing OOM events for pods that are removed from the spec before their OOM events can be processed.

#### What type of PR is this?
/kind bug
<!--
Add one of the following kinds:
/kind cleanup
/kind doc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9920)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18525: Support running custom etcd versions by setting version and image

Setting both version and image on an etcd cluster runs an etcd version that kops does not bundle: the etcd and etcdctl binaries for the given version are sourced from the given image. Both fields must be set together, and only when creating a new etcd cluster; once the cluster exists, the image cann...

🔗 [Link](https://github.com/kubernetes/kops/pull/18525)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9676: [cluster-autoscaler] Add v1.36.0, v1.35.1, v1.34.4, v1.33.5

**What this PR does / why we need it**:

This PR promotes images for the latest Cluster Autoscaler releases.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github....

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9676)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9674: Enable image registry for Gateway API conformance images

**What this PR does / why we need it**:

Gateway API conformance images has a new home at k-sigs/gateway-api-conformance-images.

This PR adds the required manifests to bootstrap the new AR and set the right permissions on Gateway API group



🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9674)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6220: UDP port range support in Services and Pods specs (VoIP/RTP workloads)  — telecom industry blocker (offering VoIP testing & validation support & document)

/sig network
/kind feature

What would you like to be added?
Support for contiguous UDP port ranges in Pod containerPort and Service spec.ports definitions, for example:

ports:
  - name: rtp-media
    protocol: UDP
    portRange: "10000-20000"

This is a long-standing request (#23864, open since 20...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6220)

**Metadata:**
- Created: 2026-07-02
- Comments: 1
- State: open

### kubernetes/enhancements#6219: Bump golang.org/x/net from 0.0.0-20201224014010-6772e930b67b to 0.55.0

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.0.0-20201224014010-6772e930b67b to 0.55.0.
<details>
<summary>Commits</summary>
<ul>
<li>See full diff in <a href="https://github.com/golang/net/commits/v0.55.0">compare view</a></li>
</ul>
</details>
<br />


[![Dependabot compatibility...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6219)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13717: CRI image volume imageSubPath returns file.Name() instead of absolute host path

In `internal/cri/server/container_image_mount.go`, `ensureImageSubPath` says it returns the final absolute path of `subPath`, and the caller assigns that return value to `extraMount.HostPath`.

Current implementation:

```go
file, err := os.OpenInRoot(mountPoint, subPath)
// ...
return file.Name(), ...

🔗 [Link](https://github.com/containerd/containerd/issues/13717)

**Metadata:**
- Created: 2026-07-02
- Comments: 1
- State: open

### containerd/containerd#13710: Data written to subPath PVC mount is lost on node reboot — writes go to   containerd overlay snapshot instead of the PVC directory

  ## Environment

  | Component   | Version |
  |-------------|---------|
  | containerd  | 2.2.4 |
  | Kubernetes  | v1.33.3 |
  | Kernel      | 6.18.34-talos |
  | CRI plugin  | io.containerd.cri.v1.runtime |
  | Snapshotter | overlayfs (default) |

  ---

  ## What We Expected

  When a Pod mount...

🔗 [Link](https://github.com/containerd/containerd/issues/13710)

**Metadata:**
- Created: 2026-07-02
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-03 02:43:47*
