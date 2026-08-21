---
title: "Upstream Github - 2026-08-21"
description: "CNCF upstream activity from github"
pubDate: 2026-08-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/S", "lgtm", "approved", "needs-ok-to-test", "minikube", "size/XS", "language/en", "website", "release", "issue", "sig/api-machinery", "needs-triage", "kind/feature", "needs-sig", "sig/scheduling", "kind/cleanup", "kind/flake", "kind/bug", "area/test", "release-note", "size/XL", "sig/testing", "sig/architecture", "needs-priority", "sig/node", "release-note-none", "sig/apps", "wg/device-management", "size/L", "kind/api-change", "do-not-merge/hold", "ok-to-test", "area/apiserver", "size/M", "sig/instrumentation", "area/kubelet", "priority/important-longterm", "triage/accepted", "sig/network", "area/kube-proxy", "sig/windows", "do-not-merge/work-in-progress", "ingress-gce", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "area/images", "area/access", "area/groups", "sig/k8s-infra", "k8s.io", "sig/contributor-experience", "area/community-management", "area/slack-management", "community", "autoscaler", "area/vertical-pod-autoscaler", "area/cluster-autoscaler", "cncf-cla: no", "area/provider/azure", "do-not-merge/release-note-label-needed", "area/provider/aws", "size/XXL", "area/provider/cluster-api", "area/provider/digitalocean", "area/provider/linode", "area/provider/hetzner", "area/provider/gce", "area/provider/externalgrpc", "area/provider/rancher", "area/provider/ionoscloud", "area/provider/oci", "area/provider/magnum", "area/provider/equinixmetal", "area/provider/alicloud", "area/provider/huaweicloud", "area/provider/utho", "area/provider/coreweave", "area/provider/exoscale", "enhancements", "area/dependency", "sig/release", "needs-kind", "area/release-eng", "containerd", "nerdbox", "area/distribution", "cncf", "kind/initiative", "tag/security-and-compliance", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#57080: Fix deprecation policy url

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57080)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141506: Support numeric enums in +enum / +k8s:enum

### Problem

`+enum` currently only works on string typedefs. Integer-backed enum types
publish as a bare `integer` with no value set, so the constraint can't be
validated or shown to clients.

### Proposal

This runs against existing guidance:

- [api-conventions.md](https://github.com/kubernetes/c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141506)

**Metadata:**
- Created: 2026-08-20
- Comments: 2
- State: open

### kubernetes/kubernetes#141504: [KEP] Feature Request: First-Class VMs with Cluster-Bootstrap Support

### What would you like to be added?

First-class VM workloads in Kubernetes with cluster-independent bootstrap support.

Kubernetes should provide a consistent workload model for VMs, including native integration with ConfigMaps, Secrets, CNI networking, and Storage, comparable to the integration a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141504)

**Metadata:**
- Created: 2026-08-20
- Comments: 2
- State: open

### kubernetes/kubernetes#141489: [kube-proxy/winkernel] Guard against load balancers without port mappings



#### What type of PR is this?
/kind bug
<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flak...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141489)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10164: Adjust cloud providers to new interfaces

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

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10164)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: Yes

### cncf/toc#2280: [Initiative]: Evaluate AI-generated threat model drafts as a starting point for security self-assessments

### Name

Generated threat-model drafts for security self-assessments

### Short description

Evaluate whether AI-generated threat model drafts (alpha-omega-security/threat-model) improve the quality and consistency of project security self-assessments, and whether to recommend the approach in the s...

🔗 [Link](https://github.com/cncf/toc/issues/2280)

**Metadata:**
- Created: 2026-08-20
- Comments: 0
- State: open

## Updates

### kubernetes/minikube#23521: test: dedupe kubernetes versions in download-only test

## What this PR does

`test/integration/aaa_download_only_test.go` builds a versions list as:

```go
versions := []string{
    constants.OldestKubernetesVersion,
    constants.DefaultKubernetesVersion,
    constants.NewestKubernetesVersion,
}
```

Today `DefaultKubernetesVersion` and `Ne...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23521)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes: v1.36.4


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.4)

**Metadata:**
- Version: v1.36.4
- Published: 2026-08-20
- Prerelease: No

### kubernetes/kubernetes: v1.35.8


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.8)

**Metadata:**
- Version: v1.35.8
- Published: 2026-08-20
- Prerelease: No

### kubernetes/kubernetes: v1.34.11


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.34.11)

**Metadata:**
- Version: v1.34.11
- Published: 2026-08-20
- Prerelease: No

### kubernetes/kubernetes: v1.37.0-rc.1


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-rc.1)

**Metadata:**
- Version: v1.37.0-rc.1
- Published: 2026-08-20
- Prerelease: Yes

### kubernetes/kubernetes#141498: Remove dependency to pkg/controller/volume/persistentvolume/testing

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first.

We're using ```pvtesting.VolumeReactor``` only to check how the code behaves in case of API error (by setting up a version conflict). The test could be simplified if we used ```fake.Clientset.PrependReactor()``` to moc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141498)

**Metadata:**
- Created: 2026-08-20
- Comments: 1
- State: open

### kubernetes/kubernetes#141497: Remove dependency to "k8s.io/kubernetes/pkg/controller" from pkg/scheduler

https://github.com/kubernetes/kubernetes/issues/141403 needs to be merged first.

We are using only ```NoResyncPeriodFunc``` in https://github.com/kubernetes/kubernetes/blob/65bca7cd12f0e3c3488545f09011e0f731a72d75/pkg/scheduler/framework/plugins/volumebinding/binder_test.go#L162 and this function i...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141497)

**Metadata:**
- Created: 2026-08-20
- Comments: 1
- State: open

### kubernetes/kubernetes#141495: Remove dependency to k8s.io/kubernetes/test/utils/image

Part of #141411.

#141403 needs to be merged first.

`pkg/scheduler/testing/wrappers.go` calls `imageutils.GetPauseImageName()` to set container image on pod fixtures.

Checked nothing ever pulls these images, unit tests schedule against fake caches and integration tests run no kubelet.

There is pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141495)

**Metadata:**
- Created: 2026-08-20
- Comments: 4
- State: open

### kubernetes/kubernetes#141494: k8s.io/apiserver/pkg/storage/cacher: TestDeleteWithSuggestionAndMissingExpectedTransformOrDecodeError

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/141470/pull-kubernetes-unit/2090342191607058432

```
RUN   TestDeleteWithSuggestionAndMissingExpectedTransformOrDecodeError
panic: synthetic error

goroutine 4546 [running]:
k8s.io/apiserver/pkg/storage/etcd3.de...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141494)

**Metadata:**
- Created: 2026-08-20
- Comments: 1
- State: open

### kubernetes/kubernetes#141491: After node scale-out, the anti-affinity pods between two pods are scheduled to the newly added node.

### What happened?

I have a deploy with five replicas. The deploy has the following information:
```
nodeSelector:
  apiserver: "true"
```
Before the scale-out, only three management nodes have this label, and the new node also has this label. In addition, anti-affinity between pods is configured:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141491)

**Metadata:**
- Created: 2026-08-20
- Comments: 3
- State: open

### kubernetes/kubernetes#141488: kube-proxy (winkernel) panics with "index out of range [0]" when an HNS load balancer has no port mappings

### What happened?

kube-proxy on a Windows node terminated with an unrecovered panic while enumerating HNS load balancers:

```
E0817 10:58:16.091918   11772 panic.go:236] "Observed a panic"
  panic="runtime error: index out of range [0] with length 0"
  panicGoValue="runtime.boundsError{x:0, y:0, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141488)

**Metadata:**
- Created: 2026-08-20
- Comments: 3
- State: open

### kubernetes/kubernetes#141505: Extend feature gate dependency validation

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
 
 Extends dependency validation from feature-gate→feature-gate to feature-gate→API group/version/resource. At startup, once feature gates are finalized and the effective `APIResourceConfigSource` is resolve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141505)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141503: DRA: add nojnhuh to reviewers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141503)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141502: core: migrate PVC volumeName to declarative validation

/kind cleanup

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Migrates PersistentVolumeClaimSpec.VolumeName to declarative validation.

- Preserves the existing empty-to-set transition used by the PV controller.
- Rejects modifying or clearing volumeNa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141502)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141501: Add jpbetz to /hack OWNERS

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

As an API approver, I regularly need to approve changes to API linters under this directory.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR intro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141501)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141500: apiextensions: report why the test server's healthz wait failed

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:

When the embedded apiextensions-apiserver doesn't come up, `StartTestServer` gives you
this and nothing else:

    failed to wait for /healthz to return ok: timed out waiting for the condition

The status code, the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141500)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141499: scheduler: replace test/utils/image dependency with local const

pkg/scheduler/testing only uses k8s.io/kubernetes/test/utils/image for imageutils.GetPauseImageName(), and exclusively in fixtures where the image is never run.

Replace with a pauseImage const, also aligning the three existing call sites already supplied with hardcoded "pause".

Part of removal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141499)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141496: APF: fix exempt priority level target seats metric

/kind bug

#### What this PR does / why we need it:

Fixes the APF `target_seats` metric for exempt priority levels.

Exempt priority levels are not included in the non-exempt allocation `items` slice, but the metric update path still read `items[idx].target`. For exempt priority levels, `idx`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141496)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141493: restclient: register resolverLatency metric with legacyregistry


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141493)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141490: kubelet: pass probe logger into exec command

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Capture the probe logger when creating the short-lived exec command object and reuse it in `Start()` instead of logging with `klog.TODO()`. `exec.Cmd` does not allow passing a context into `Start`, so the logger ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141490)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141487: Do not inherit probe state from a replaced container

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141487)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141486: apiextensions-apiserver: use etcdOptionsCopy in NewCRDRESTOptionsGetter

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

In `staging/src/k8s.io/apiextensions-apiserver/pkg/cmd/server/options/options.go`, `NewCRDRESTOptionsGetter` prepares `etcdOptionsCopy` with custom resource specific storage configurations and expl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141486)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141485: WIP apiserver: de-flake TestTimeTravelHealthcheck

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141485)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141484: Stop preStop sleep hook when the container exits

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141484)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141482: kubelet: reconstruct memory request from cgroup v2 parameters

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This PR resolves an issue in the Kubelet where memory requests (configured via cgroups v2 `memory.min` / `memory.low` / `memory.high` when `MemoryQoS` is enabled) are completely omitted when reading cgroup configuratio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141482)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3205: Configure Dependabot for release branches release-1.32 to release-1.38

Add target-branch entries for master and release branches (release-1.32 through release-1.38) for Docker and Go module dependencies so Dependabot creates update PRs across all active release branches.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3205)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37735: Kops - Disable kindnet DNS caching on all kindnet jobs

Sets `--set=cluster.spec.networking.kindnet.dnsCaching=false` on every kindnet job. **382 jobs** change; no job is added or removed and nothing non-kindnet is touched.

### The failure

A `[sig-network] Services` spec fails with `service is not reachable within 2m0s timeout on endpoint <svc>:80 over...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37735)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37733: Propagate the CPU quota to the runner init cgroup

The runner moves its own processes into a "<pod-cgroup>/init" leaf so the pod cgroup can be subdivided for the sibling dind subtree. That hides the pod's CPU quota from the job. Under cgroup v2, cpu.max is not inherited. A fresh leaf reports "max" while the kernel still throttles the whole subtree t...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37733)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9860: groups: add jrvaldes to sig-windows-leads

part of 
- https://github.com/kubernetes/community/issues/9043


/sig windows

/assign @aravindhp @claudiubelu @zylxjtu @marosset 

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9860)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9127: Create an orc-maintainers group

Now that the project gained new maintainers [1], it makes sense to have a slack group.

[1] https://kubernetes.slack.com/archives/C05G4NJ6P6X/p1786612126194249

🔗 [Link](https://github.com/kubernetes/community/pull/9127)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10167: AWS: int32 overflow when computing memory from InstanceRequirements breaks scale-from-zero (NodeResourcesFit "Insufficient memory")

**Which component are you using?**: /area cluster-autoscaler (AWS cloudprovider)

**What version?**: 1.35.0 – 1.35.2 (regression, works fine on 1.34.x and below)

<details><summary><code>kubectl version</code> Output</summary><br><pre>
$ kubectl version
Client Version: v1.35.0
Kustomize Version: v5....

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10167)

**Metadata:**
- Created: 2026-08-20
- Comments: 2
- State: open

### kubernetes/autoscaler#10165: Re-proposing Multi-Dimensional Pod Autoscaler as a Lightweight Synchronizer for HPA and VPA

**Which component are you using?**:

/area vertical-pod-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:
<!--
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]
-->

Similar to severa...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10165)

**Metadata:**
- Created: 2026-08-20
- Comments: 1
- State: open

### kubernetes/autoscaler#10161: Unready nodes outside any node group block autoscaling of managed node groups

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

/area cluster-autoscaler
/kind feature

**Is your feature request designed to solve a problem? If so describe the problem this featur...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10161)

**Metadata:**
- Created: 2026-08-20
- Comments: 1
- State: open

### kubernetes/autoscaler#10168: Don't halt cluster-wide autoscaling when one node group TargetSize() fails

#### What type of PR is this?

/kind bug
/area cluster-autoscaler

#### What this PR does / why we need it:

`getTargetSizes` currently returns an empty map on the first `TargetSize()` error, and `UpdateNodes` treats that as fatal. One broken node group then blocks scale-up and scale-down for every ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10168)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10166: fix: Azure autoscaling when VMSS is missing

## Summary

Prevent an Azure node group without a backing VMSS from blocking cluster-wide autoscaling.

- exclude registered VMSS node groups that are absent from the current VMSS cache snapshot
- retain unfiltered registrations for node-group reconciliation
- preserve the existing `Nodes()` not-fou...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10166)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10162: Capture VPA component logs in e2e tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

To help us debug e2e test flakes

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10162)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6294: sig-windows: add jrvaldes to leads alias

part of 
- https://github.com/kubernetes/community/issues/9043


/sig windows
/assign @aravindhp @claudiubelu @zylxjtu @marosset

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6294)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6293: Bump github.com/stretchr/testify from 1.11.1 to 1.12.1

Bumps [github.com/stretchr/testify](https://github.com/stretchr/testify) from 1.11.1 to 1.12.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/stretchr/testify/releases">github.com/stretchr/testify's releases</a>.</em></p>
<blockquote>
<h2>v1.12.1</h2>
<p>...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6293)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4496: Fix header formatting in README

Corrected header formatting in README.md

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/co...

🔗 [Link](https://github.com/kubernetes/release/pull/4496)

**Metadata:**
- Created: 2026-08-20
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdbox: v0.2.4

## What's Changed
* Add structured lifecycle logs to kill path; fix context in detached goroutines by @eginez in https://github.com/containerd/nerdbox/pull/275

## New Contributors
* @eginez made their first contribution in https://github.com/containerd/nerdbox/pull/275

**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.2.3...v0.2.4

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.4)

**Metadata:**
- Version: v0.2.4
- Published: 2026-08-21
- Prerelease: No

### containerd/containerd#14000: Layers of config-sharing manifests are missing from the content store after pull

### Description

An OCI index can hold more than one manifest that resolves to the same config digest. A config records each layer's uncompressed digest (diffID), so packaging the same layers with different compression produces manifests that list different layer blobs but share a byte-identical con...

🔗 [Link](https://github.com/containerd/containerd/issues/14000)

**Metadata:**
- Created: 2026-08-20
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-21 01:07:47*
