---
title: "Upstream Github - 2026-08-26"
description: "CNCF upstream activity from github"
pubDate: 2026-08-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/cli", "needs-triage", "sig/api-machinery", "sig/architecture", "kind/bug", "sig/scheduling", "sig/apps", "pr", "area/apiserver", "size/M", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-kind", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "do-not-merge/work-in-progress", "area/test", "sig/node", "sig/testing", "size/XS", "area/kubectl", "size/XXL", "kind/api-change", "do-not-merge/needs-sig", "release-note", "approved", "do-not-merge/hold", "size/XL", "area/kubelet", "lgtm", "ok-to-test", "triage/accepted", "priority/important-soon", "sig/auth", "area/code-generation", "kind/feature", "sig/release", "area/release-eng", "release", "minikube", "kind/kep", "enhancements", "language/ko", "area/localization", "website", "tide/merge-blocker", "language/en", "area/blog", "sig/docs", "language/zh", "area/cluster-autoscaler", "autoscaler", "area/provider/cluster-api", "kops", "area/documentation", "area/addons", "sig/k8s-infra", "registry.k8s.io", "kind/documentation", "sig-release", "area/artifacts", "area/registry.k8s.io", "k8s.io", "containerd", "area/cri", "area/snapshotters", "go-runc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141573: fix(/pkg/api/node/util.go): adjust deprecation notice for better grammar

We want to avoid having output like `Warning: spec.template.spec.affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution.nodeSelectorTerms[1].matchExpressions[0].key: node-role.kubernetes.io/master is use "node-role.kubernetes.io/control-plane" instead` which isn't really great grammar....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141573)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6300: KEP-4817: Mark as implemented

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6300)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57163: [zh-cn]sync pod-security-standards

content/zh-cn/docs/concepts/security/pod-security-standards.md

🔗 [Link](https://github.com/kubernetes/website/pull/57163)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141588: kubectl label --list and annotate --list apply updates locally only, print them as current state, exit 0 without patching

**What happened**:

`kubectl label --list` accepts update arguments at the same time as `--list`, but the
updates are never sent to the server. The command mutates only the local copy of the
object, then prints that mutated object's labels as if they were current state, and exits
with code 0 without...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141588)

**Metadata:**
- Created: 2026-08-25
- Comments: 4
- State: open

### kubernetes/kubernetes#141582: Umbrella: json/v2 adoption

go 1.27 was just recently released and [includes json/v2
](https://go.dev/doc/go1.27#jsonv2)

This issues tracks the adoption plan.

Our planned order is:

- kubernetes/kubernetes upgrades to go 1.27 (targetting k8s v1.38 release)
- structured-merge-diff then migrates
  - upgrade to go 1.27
  - wrap...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141582)

**Metadata:**
- Created: 2026-08-25
- Comments: 4
- State: open

### kubernetes/kubernetes#141578: scheduler: informer cache mutation

### What happened?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/141545/pull-kubernetes-integration/2092206694951030784

NominatedNode gets sets in the pod of the informer cache:

```
[sig-scheduling] k8s.io/kubernetes/test/integration/scheduler/preemption: nominatednodename expand_le...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141578)

**Metadata:**
- Created: 2026-08-25
- Comments: 2
- State: open

### kubernetes/kubernetes#141572: nodelifecycle controller panics leaving master disruption mode when a node has no nodeHealthMap entry

### What happened?

kube-controller-manager can panic with a nil pointer dereference in the node lifecycle controller when a zone leaves master disruption mode while some nodes have no entry in the controller's nodeHealthMap.

With NodeControllerLeaseCircuitBreaker (Beta, default on since 1.37), whe...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141572)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/kubernetes#141587: fix(apiserver): decouple watchCache shrink from isCacheFull

Fixes watchCache ring that never shrinks after a burst.

Bug: resize at staging/src/k8s.io/apiserver/pkg/storage/cacher/watch_cache_history.go:120 is gated on isCacheFullLocked and only runs on new events. After a burst the cache expands but then never deflates, even when idle, wasting memory.

Fix:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141587)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141586: apiserver: benchmark streamed list responses over HTTP/1.1 and HTTP/2

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

The existing benchmark for `SerializeObject` writes a pre-serialized payload in one call, so it can't show what the streaming collection encoders' one-write-per-item pattern costs once it reach...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141586)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141585: e2e_node/remote: log host memory while resolving GCE images

This is a diagnostic patch for #141434, not meant to merge. I want the numbers before I touch the resolution path.

getGCEImage in test/e2e_node/remote/gce/gce_runner.go lists a whole image project with `gcloud compute images list --format=json --project=<p>`, then `.Output()` buffers the stdout and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141585)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141583: scheduler: deep copy pod before mutating NominatedNodeName in test hook

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

In `test/integration/scheduler/preemption/nominatednodename/nominatednodename_test.go`, `initTestPreferNominatedNode` wraps `testCtx.Scheduler.NextEntity` and modifies `pInfo.Pod.Status.NominatedNodeN...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141583)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141581: kubectl top: add --node flag to filter pods

kubectl top: add --node flag to filter pods

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141581)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141580: Extract sched alg followup

#### What type of PR is this?
/kind cleanup


#### What this PR does / why we need it:

Follow-up to #141020, which moved node selection and in-memory placement onto `SchedulingAlgorithm`. That commit left the type without a usable surface; this one gives it shape:

- Exports the entry point...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141580)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141579: Clarify godoc for LimitRange default is limits not requests

## Problem

The `LimitRangeItem.Default` field (`spec.limits[].default` in a LimitRange manifest) sets the default *limit* for a resource when a container omits one — but the field name `default` alone doesn't make that clear, especially sitting next to a sibling field named `defaultRequest`. New us...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141579)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141577: Stop running PreEnqueue plugins after first gated pod in pod group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141577)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141576: Optimize isEntityWorthRequeuing for pod groups without pending plugins

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141576)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141575: Run PreEnqueueCheck per entity in scheduling queue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141575)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141574: Added tests for SetMemoryReserve under Qos Container Manager

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141574)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141571: kubelet: report the requested image name when inspection fails

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When image inspection fails under PullIfNotPresent or PullNever, the InspectFailed event and the pod status message were formatted with `imageRef`, the out parameter that `GetImageRef` has just set to the empty strin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141571)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141570: kubelet: make negative eviction-max-pod-grace-period defer to pods

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The `--eviction-max-pod-grace-period` help text has always documented that a negative value defers to the pod specified termination grace period, but the eviction manager used the negative value as the grace period o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141570)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141569: Fix nil pointer panic in kubectl auth reconcile for bindings on API errors

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl auth reconcile` panicked with a nil pointer dereference when reconciling a RoleBinding or ClusterRoleBinding if the reconcile API call failed, for example with a forbidden response. The RoleBinding and Clust...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141569)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141568: fix(tainteviction): retry failed pod deletions

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The taint eviction controller can lose a pod eviction when the pod deletion fails after the initial deletion attempts are exhausted.

This change makes failed pod deletions durable by scheduling them on a rat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141568)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141567: kubelet: add unit tests for secret manager implementations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`pkg/kubelet/secret` had only 17.1% statement coverage. The public constructors (`NewSimpleSecretManager`, `NewCachingSecretManager`, `NewWatchingSecretManager`) and the fake manager were completely untested; onl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141567)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141566: informer-gen: use plural-exceptions-aware namer for GVR resource name

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`informer-gen` formed the GVR resource name used by `WithInformerName` by blindly appending `"s"` to the lowercased type name:

```go
"resourceName": strings.ToLower(t.Name.Name) + "s",
```

For API types whose plura...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141566)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4503: Update debian-base from bookworm to trixie by default

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This is a follow up to github.com/kubernetes/release/pull/4501, which starts building Debian 13 (Trixie). This changes the Makefile to build using Trixie by default.

Bookworm is EoL, so often does not re...

🔗 [Link](https://github.com/kubernetes/release/pull/4503)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4502: Migrate provenance attestation to SLSAv1

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:

In preparation to finishing the provenance work, this PR moves the provenance generation to SLSA v1. 

I've scoped this PR is to only move the predicate type to v1. I added a fix in 49dea93443113e97e7ab45f9...

🔗 [Link](https://github.com/kubernetes/release/pull/4502)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23562: Change default continer runtime to containerd

This prepares start and related code so the default container runtime
can change without treating an unset flag as docker, then switches the
default to containerd.

- Rename the runtime string to `crName` so every place that chooses or
  checks the runtime is easy to find, and so future work do...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23562)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57181: [ko] Update content/ko/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tutorials/kubernetes-basi...

🔗 [Link](https://github.com/kubernetes/website/issues/57181)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/website#57178: Freeze k/website for Kubernetes v1.37 release

This issue freezes the k/website repository for the Kubernetes v1.37 release.

The release is scheduled for Wednesday, 26th August 2026 and no PRs are allowed to merge until the release PR has successfully merged.

If there are any questions, please contact me or anyone from the v1.37 Release Docs t...

🔗 [Link](https://github.com/kubernetes/website/issues/57178)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/website#57175: [ko] Translate content/en/docs/concepts/workloads/pods/probes.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/workloads/pods/probes.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/workloads/pods/probes/

**Why is this needed**

This page is not translated yet.

/area loca...

🔗 [Link](https://github.com/kubernetes/website/issues/57175)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/website#57173: [ko] Update content/ko/docs/concepts/architecture/cloud-controller.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/architecture/cloud-controller.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/architecture/cloud-controller/
- E...

🔗 [Link](https://github.com/kubernetes/website/issues/57173)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/website#57162: [ko] Update content/ko/docs/reference/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/reference/_index.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/reference/
- English: https://kubernetes.io/docs/reference/

**Wh...

🔗 [Link](https://github.com/kubernetes/website/issues/57162)

**Metadata:**
- Created: 2026-08-25
- Comments: 1
- State: open

### kubernetes/website#57182: [WIP] Publish v1.37 Release Announcement blog

## 🛑 Do not merge until Kubernetes v1.37 has been released

The following sections will be added as part of this PR:

- [x] Remove `draft: true` and add release date.
- [ ] Release name
- [ ] Release theme text
- [ ] Release theme logo

_Part of Release Comms work: https://github.com/kuber...

🔗 [Link](https://github.com/kubernetes/website/pull/57182)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57166: [zh-cn] sync user-namespaces admission-controllers

content/zh-cn/docs/concepts/workloads/pods/user-namespaces.md
content/zh-cn/docs/reference/access-authn-authz/admission-controllers.md

🔗 [Link](https://github.com/kubernetes/website/pull/57166)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57165: Fixes : v1.37 WAS Blog post

Follow-up to #56215 addressing remaining review comments on the Kubernetes v1.37 Workload-Aware Scheduling blog post:
- Clarify in the intro that DRA ResourceClaims for PodGroups/Workloads are graduating to Beta (not the ResourceClaim API itself).
- Fix styling/formatting for *controller integrati...

🔗 [Link](https://github.com/kubernetes/website/pull/57165)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57161: Fix incorrect anchor link in pod-sidecar-containers tutorial

Fixed an incorrect anchor link in the pod-sidecar-containers tutorial. The
link labeled "differences from init containers" was pointing to the wrong
section anchor (#differences-from-application-containers) instead of the
correct one (#differences-from-init-containers) in the sidecar-containers
...

🔗 [Link](https://github.com/kubernetes/website/pull/57161)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10196: Capacity Quota clients fail to compile

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
/area cluster-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add on...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10196)

**Metadata:**
- Created: 2026-08-25
- Comments: 2
- State: open

### kubernetes/autoscaler#10197: [feature]: DeleteNodes in batches instead of one by one

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This PR implements the logic to delete multiple nodes if the flag `node-deletion-batcher-interval` is set. If it is, the cloudprovider/clusterapi will try to delete multiple replicas instead of one by one.

#...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10197)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18751: Fix pin drift: code-generator, golangci-lint, ko, goimports, ginkgo, and nested modules

**What this PR does / why we need it**:

Follow-up to #18750, fixing pins that had quietly drifted or were duplicated. Each commit is independent.

**Version drift**

- **`CODEGEN_VERSION` now matches the `k8s.io/*` staging libraries.** It had fallen several minors behind. Nothing fails when it drif...

🔗 [Link](https://github.com/kubernetes/kops/pull/18751)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18750: Remove unused hack scripts and a duplicate hash generator line

**What this PR does / why we need it**:

Low-risk cleanup of dead tooling found while auditing how kOps pins third-party dependencies. Four independent commits, none of which change behaviour or generated output.

- **Remove `hack/cfn-lint.Dockerfile`, `hack/.cfnlintrc.yaml`, and `hack/go_install_fr...

🔗 [Link](https://github.com/kubernetes/kops/pull/18750)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/registry.k8s.io#335: add cri-o e2e tests

Part of https://github.com/kubernetes/registry.k8s.io/issues/333

A bug in prod broke all cri-o/podman/skopeo users because of a bug we didn't catch with containerd.

🔗 [Link](https://github.com/kubernetes/registry.k8s.io/pull/335)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3084: Cut v1.37.0 release

## Scheduled to happen: Wednesday, 2026 August 26th

_Note for v1.x.0 releases: Having this issue in open state will stop the
periodic run of [`krel fast-forward`](https://testgrid.k8s.io/sig-release-releng-blocking#git-repo-kubernetes-fast-forward)
to avoid conflicts with releases running in parall...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3084)

**Metadata:**
- Created: 2026-08-25
- Comments: 2
- State: open

### kubernetes/k8s.io#9869: Push ibm-powervs-block-csi-driver v0.13.1

**What this PR does / why we need it**:

This PR is to promote the new ibm-powervs-block-csi-driver image to registry.k8s.io.

**Special notes for your reviewer**:

Version: v0.13.1

```
% ~/go/bin/gcrane digest gcr.io/k8s-staging-cloud-provider-ibm/ibm-powervs-block-csi-driver:v0.13.1
202...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9869)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9867: CAPO image promotions

**What this PR does / why we need it**:

Image promotions for CAPO v0.13.10, v0.14.8 and v0.15.0-rc.0.

**Special notes for your reviewer**:

```console
❯ gcrane digest gcr.io/k8s-staging-capi-openstack/capi-openstack-controller:v0.13.10 sha256:e0c8814bc1e8b22f6ff61640ecc6cb2a3703140a2eff03b4...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9867)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14032: CRI image-volume cleanup fails with nested snapshotter mounts

### Description

Deleting a Pod that uses a CRI image volume backed by `nix-snapshotter` leaves the Pod stuck in `Terminating` state. The image volume mounts contains an overlay mount with nested `/nix/store` bind mounts. During cleanup, containerd attempts to unmount the parent first, receaves `EBU...

🔗 [Link](https://github.com/containerd/containerd/issues/14032)

**Metadata:**
- Created: 2026-08-25
- Comments: 2
- State: open

### containerd/go-runc: v1.2.1

## What's Changed
* deprecate ErrParseRuncVersion by @thaJeztah in https://github.com/containerd/go-runc/pull/118
* ci: update actions, golangci-lint, and test against oldest (go.mod), oldstable, and stable by @thaJeztah in https://github.com/containerd/go-runc/pull/120
* README: cleanup and fix links by @thaJeztah in https://github.com/containerd/go-runc/pull/122
* io: skip chowning pipes on non-Linux platforms by @thaJeztah in https://github.com/containerd/go-runc/pull/117
* chore(deps): ...

🔗 [Link](https://github.com/containerd/go-runc/releases/tag/v1.2.1)

**Metadata:**
- Version: v1.2.1
- Published: 2026-08-25
- Prerelease: No


---

*This content was automatically collected on 2026-08-26 01:08:27*
