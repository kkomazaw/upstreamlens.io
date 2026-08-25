---
title: "Upstream Github - 2026-08-25"
description: "CNCF upstream activity from github"
pubDate: 2026-08-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "website", "kind/feature", "pr", "cncf-cla: yes", "size/S", "lgtm", "language/en", "area/blog", "size/XS", "size/XL", "approved", "ok-to-test", "minikube", "wg/workload-aware-scheduling", "area/test", "kind/cleanup", "size/M", "kind/api-change", "release-note-none", "sig/apps", "sig/testing", "needs-priority", "sig/scheduling", "size/L", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/cherry-pick-not-approved", "kind/regression", "sig/network", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/node", "sig/api-machinery", "sig/cluster-lifecycle", "area/release-eng", "sig/auth", "sig/windows", "sig/cli", "area/kubeadm", "cncf-cla: no", "sig/instrumentation", "kind/failing-test", "sig/release", "sig/architecture", "area/code-generation", "sig/cloud-provider", "area/dependency", "do-not-merge/contains-merge-commits", "wg/device-management", "size/XXL", "do-not-merge/work-in-progress", "do-not-merge/invalid-commit-message", "release-note", "priority/important-soon", "area/conformance", "triage/accepted", "do-not-merge/needs-kind", "kind/documentation", "do-not-merge/hold", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/gce", "area/provider/aws", "needs-rebase", "do-not-merge/invalid-owners-file", "area/provider/cluster-api", "area/provider/externalgrpc", "kubectl", "ingress-gce", "cloud-provider-openstack", "release", "enhancements", "prometheus", "client_js", "containerd", "area/cri", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10189: CA: GCE: ignore empty ProviderID in NodeGroupForNode

#### What type of PR is this?
/kind bug
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
-...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10189)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10183: Bump core CA deps and k8s to 1.37.0-rc1 and adjust code to the changes

#### What type of PR is this?
/kind cleanup

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
/kind regress...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10183)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10182: VPA updater: export admission controller status metric

#### What type of PR is this?

/kind feature

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
/kind regre...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10182)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#57159: [en] the link name of "differences from init containers" is contradict to the destination section

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->
This link destination of [the line](https://github.com/kubern...

🔗 [Link](https://github.com/kubernetes/website/issues/57159)

**Metadata:**
- Created: 2026-08-25
- Comments: 2
- State: open

### kubernetes/website#57157: order of kubectl upgrade is out of line with the version skew policy

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

[Upgrading Linux n...

🔗 [Link](https://github.com/kubernetes/website/issues/57157)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/website#57152: `Recycle` reclaim policy is deprecated but presented as a regular option

**This is a Feature Request**

**What would you like to be added**

In [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/), the `Recycle` reclaim policy is marked as deprecated, but elsewhere the page still presents it as a regular option alongside `Retain` and `Del...

🔗 [Link](https://github.com/kubernetes/website/issues/57152)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/website#57150: `.spec.pod.os` should be `.spec.os.name` in Windows user guide

**This is a Bug Report**

**Problem:**

In the "Taints and tolerations" section of the [Windows container page](https://kubernetes.io/docs/concepts/windows/user-guide/#getting-started-deploying-a-windows-workload), the note refers to `.spec.pod.os`. That field does not exist. The surrounding text co...

🔗 [Link](https://github.com/kubernetes/website/issues/57150)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/website#57156: More follow-ups for DRA v.1.37 blog post

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57156)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57145: add KCD Hangzhou(2026-11-28) in v1.37 release blog

### Description

KCD Hangzhou CFP was just announced last week.

https://sessionize.com/kcd-hangzhou-2026/ CFP link is available now and the official website is not ready due to new KCD process. 

For more, KCD Hangzhou is tie-1 KCD, according to https://www.cncf.io/blog/2026/02/25/announcing-...

🔗 [Link](https://github.com/kubernetes/website/pull/57145)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23558: Bump Kubernetes version default: v1.36.4 and latest: v1.37.0-rc.1

This PR was auto-generated by `make update-kubernetes-version` using [update-k8s-versions.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-k8s-versions.yml) CI Workflow.
Please only merge if all the tests pass.

```
 M pkg/minikube/constants/constants.go
 M site/...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23558)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141555: Workload Builder Library should create workload and podGroups with has names

### What would you like to be added?

Controllers need to generate unique names for podGroups and Workloads.

In Job controller, we have this code:

```
// computeWorkloadName generates a deterministic name for a Workload associated with a Job.
// The pattern is: <truncated-job-name>-<hash>
// The h...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141555)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/kubernetes#141564: Promote ReplicationControllerSpec declarative validation to stable

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141564)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141563: scheduler: Fix negative namespace selector evaluation



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141563)

**Metadata:**
- Created: 2026-08-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141562: test/images: Bump agnhost to 2.66.1 for 1.36

Switches e2e tests to the freshly promoted test image agnhost 2.66.1

This is essentially a backport of #141042 but without the nginx and glibc-dns-testing images, as suggested by @liggitt in #141256.

hack/verify-external-dependencies-version.sh passes.

#### What type of PR is this?
/kind c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141562)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141561: apiserver: lazy-build OpenAPI v3 specs behind OpenAPIV3LazyBuild gate

kube-apiserver eagerly builds the OpenAPI v3 spec for every built-in group-version at startup and retains all of the parsed spec graphs for the life of the process, which costs ~18.5 MB of live heap (~40 MB working set) per replica even when `/openapi/v3` is never fetched. This PR adds the `OpenAPIV...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141561)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141560: e2e/windows: accept ltsc2025 sandbox error for invalid RunAsUserName

The 'unknown usernames at Pod level' test only matched the ltsc2022 hcsshim message 'The user name or password is incorrect.' (ERROR_LOGON_FAILURE, 1326). On ltsc2025 an invalid RunAsUserName instead surfaces as 'The specified domain either does not exist or could not be contacted.' (ERROR_NO_SUCH_D...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141560)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141559: fix: do not leak ClusterIP CIDR in validation error

Fixes #141152

## Problem

When a user attempts to create a Service with an out-of-bounds `clusterIP` (e.g. `1.1.1.1`), the `kube-apiserver` validation rejects the request but the error message includes the exact `--service-cluster-ip-range` CIDR:

```
The Service "information-leak-test" is invalid:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141559)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141558: Migrate Deployment and ReplicaSet selector to declarative validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Migrates the `spec.selector` field of Deployment and ReplicaSet (required + immutable) to declarative validation, following the approach of the StatefulSet selector migration (91341fc8793).

- Adds `+k8s:alpha(si...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141558)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141557: implement generateWorkloadName and generatePodGroupName in builder library



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141557)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141556: DRA: fix extended resources when DRANodeAllocatableResources is enabled

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Pods requesting extended resources backed by DRA fail to schedule when the `DRANodeAllocatableResources` feature gate is enabled. During PreBind the scheduler leaves the in memory placeholder claim name `<extended-re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141556)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141554: conformance: demote guaranteed pod resize tests to e2e

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141554)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141553: kube-controller-manager: use contextual logging in clustertrustbundle publisher controller

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Migrates the last non-contextual logging call in `cmd/kube-controller-manager` (`klog.Info` in the kube-apiserver-serving-clustertrustbundle-publisher controller constructor) to contextual logging via `klog.FromC...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141553)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141552: test: cover deleted unscheduled pod resource claim

#### What type of PR is this?
/kind test

#### What this PR does
Adds test coverage for a ResourceClaim reserved by a Pod that is deleted before being scheduled.

The test verifies that the ResourceClaim reservation is cleared when:
- the Pod has a deletion timestamp
- the Pod has not been a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141552)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141551: kubelet: defer to pod grace period when eviction-max-pod-grace-period is negative

#### What type of PR is this?

/kind bug
/kind documentation

#### What this PR does / why we need it:

The `--eviction-max-pod-grace-period` help text promises: "If negative, defer to pod specified value". In reality the negative value flows through `min(MaxPodGracePeriodSeconds, *pod.Spec.Terminat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141551)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141550: Mark pods NotReady on NotReady->Unknown node transition

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a node's Ready condition transitions from `False` to `Unknown` (the kubelet stops reporting after the node was already NotReady), `monitorNodeHealth` does not call `MarkPodsNotReady`: the existing switch only ha...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141550)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141549: kubectl: e2e test for kubectl exec with `--proxy-url`

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141549)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141548: kubelet: add unit tests for PreCreateContainer in cm package

## Summary

`PreCreateContainer` in `pkg/kubelet/cm/internal_container_lifecycle_linux.go` sets `CpusetCpus`/`CpusetMems` on the container config based on the CPU manager's/memory manager's allocated affinity, but had no direct unit test coverage. This adds coverage for it.

Related to the sig-node ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141548)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141547: Don't iterate over all pod group members when processing events in the queue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141547)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141546: Change QueuedEntityInfo.ForEachPodInfo to iter.Seq

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141546)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141545: WIP: ktesting: cancel the TContext as soon as the test is done

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Canceling the TContext as soon as the test is done makes TContext consistent with testing.T and in several cases simplifies tests. Canceling exactly when the test ends is more natural because then all clean...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141545)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141544: cronjob: treat NotFound on job delete as success

## Summary
- Fixes #141317: the CronJob controller emitted a `FailedDelete` warning when deleting a job that was already gone (typically a follow-up sync before the job informer observed the previous delete).
- `NotFound` is treated as success: log at `V(4)`, drop the `.status.active` reference, and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141544)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10190: VPA: support configuring resource limit/request ratio

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

/area vertical-pod-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscale...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10190)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/autoscaler#10186: Support AWS EC2 Auto Scaling batch instance termination

AWS now supports terminating up to 100 ASG instances in one API call:
https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-auto-scaling-batch-termination/

Cluster Autoscaler currently terminates instances individually during scale-down. Please add batch-termination support while preserving...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10186)

**Metadata:**
- Created: 2026-08-24
- Comments: 2
- State: open

### kubernetes/autoscaler#10181: VPA: eviction requirements are applied to in place updates

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

/area vertical-pod-autoscaler

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10181)

**Metadata:**
- Created: 2026-08-24
- Comments: 1
- State: open

### kubernetes/autoscaler#10195: Bump the patch-updates group across 2 directories with 41 updates

Bumps the patch-updates group with 6 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.36.3` | `0.36.4` |
| [k8s.io/client-go](https://github.com/kubernetes/client-go) | `0.36.3` | `0.36.4` |
| [k8s....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10195)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10193: Bump the non-kubernetes group across 2 directories with 27 updates

Bumps the non-kubernetes group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/stretchr/testify](https://github.com/stretchr/testify) | `1.11.1` | `1.12.1` |
| [github.com/fxamacker/cbor/v2](https://github.com/fxamacker/cbor) | `2....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10193)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10191: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10191)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10187: feat(aws): batch ASG instance termination

Implements AWS EC2 Auto Scaling batch instance termination for Cluster Autoscaler scale-down.

AWS announcement: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-auto-scaling-batch-termination/

Changes:
- Batch eligible instance IDs in groups of up to 100.
- Preserve the existing singl...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10187)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10185: chore: update scaleway cloudprovider OWNERS

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add @damsien @Tomy2e and me as OWNERS of the scaleway provider. We are working on the Kubernetes/Kapsule team and we are members of the Kubernetes org.

#### Which issue(s) this PR fixes:
<!--
*Automati...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10185)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10184: fix: correctly handling duplicate key/value taints on scaleway

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Scaleway provider had an issue overriding taints with the same key/value but different effects. A new field is now returned by Scaleway API with a correct list of taints and the previous one is still returned s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10184)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1873: Add kubectl containers POD to list container names

### What would you like to be added?

Add a command that prints the container names defined in a Pod:

```console
$ kubectl containers checkout-7b9884d7cf-4tz9k
checkout
istio-proxy
```

The initial implementation should:

- Accept one Pod name and standard namespace/context flags.
- Print one name ...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1873)

**Metadata:**
- Created: 2026-08-24
- Comments: 1
- State: open

### kubernetes/ingress-gce#3225: [release-1.38] Update go to 1.25.14

.12  still has issues

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3225)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3163: chore: bump gophercloud dep

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3163)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4500: Strip remote creds instead of excluding .git

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In https://github.com/kubernetes/release/pull/4424 we removed the .git directory from the source tarball that stage hands to release. Unfortunately this breaks the release process as `krel release` dies when at...

🔗 [Link](https://github.com/kubernetes/release/pull/4500)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6296: Bump github.com/sirupsen/logrus from 1.9.4 to 1.10.1

Bumps [github.com/sirupsen/logrus](https://github.com/sirupsen/logrus) from 1.9.4 to 1.10.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sirupsen/logrus/releases">github.com/sirupsen/logrus's releases</a>.</em></p>
<blockquote>
<h2>v1.10.1</h2>
<h1>Logr...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6296)

**Metadata:**
- Created: 2026-08-24
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_js: v0.16.0

## Summary

This is our first release under the Prometheus project, and our first release for a long time.

The three main features of this release are:
 - Substantially more robust support for Cluster Workers
 - Equivalent support for Worker Threads
 - Performance

Besides the worker improvements, this release introduces a handful of bug fixes, and a number of Typescript improvements, but is primarily a performance release. Memory use for stats storage has been reduced, as well as look...

🔗 [Link](https://github.com/prometheus/client_js/releases/tag/v0.16.0)

**Metadata:**
- Version: v0.16.0
- Published: 2026-08-24
- Prerelease: No

### containerd/containerd#14027: CRI recovery leaks an unbounded goroutine per sandbox: waitSandboxExit escapes loadContainerTimeout

## Summary

`podsandbox.(*Controller).RecoverContainer` bounds its synchronous body with a 10s `loadContainerTimeout`, but the goroutine it spawns to wait for sandbox exit is started with a **fresh, unbounded context**. If the shim behind that sandbox does not answer, the goroutine blocks in a ttrpc...

🔗 [Link](https://github.com/containerd/containerd/issues/14027)

**Metadata:**
- Created: 2026-08-24
- Comments: 0
- State: open

### containerd/nerdctl: v2.4.0-beta.0

## Changes

This is the first beta release of nerdctl v2.4.0.

This release of nerdctl-full uses a beta release of containerd (v2.4.0-beta.0).

Major changes:

- `nerdctl image`:
   - Adopted Docker v29 default `nerdctl images` output (`IMAGE`, `ID`, `DISK USAGE`, `CONTENT SIZE`, `EXTRA`) (#5093, thanks to @ekalinin)
   - Added `nerdctl push --all-tags` (`-a`) to push every local tag of a repository (#5133, thanks to @ekalinin)
   - Added `nerdctl image convert --erofs {raw|zstd}` and...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.4.0-beta.0)

**Metadata:**
- Version: v2.4.0-beta.0
- Published: 2026-08-24
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-25 01:06:26*
