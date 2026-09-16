---
title: "Upstream Github - 2026-09-16"
description: "CNCF upstream activity from github"
pubDate: 2026-09-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/network", "needs-triage", "sig/api-machinery", "kind/flake", "sig/auth", "pr", "size/L", "release-note-none", "sig/apps", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "do-not-merge/needs-kind", "kind/bug", "release-note", "size/M", "area/test", "kind/cleanup", "kind/api-change", "approved", "sig/testing", "sig/etcd", "kind/feature", "wg/device-management", "area/kube-proxy", "area/provider/gcp", "sig/windows", "sig/cloud-provider", "priority/backlog", "area/kubelet", "sig/node", "sig/scheduling", "needs-rebase", "size/XXL", "sig/instrumentation", "do-not-merge/release-note-label-needed", "size/XL", "area/code-generation", "ok-to-test", "area/apiserver", "do-not-merge/work-in-progress", "do-not-merge/needs-sig", "size/S", "size/XS", "lgtm", "sig/release", "area/github-management", "org", "area/cluster-autoscaler", "autoscaler", "area/helm-charts", "area/provider/coreweave", "language/ko", "area/localization", "website", "priority/important-longterm", "area/web-development", "triage/accepted", "triage/unresolved", "language/en", "sig/docs", "language/zh", "area/access", "area/release-eng", "area/groups", "sig/k8s-infra", "k8s.io", "cloud-provider-openstack", "containerd", "release"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142126: DRA: migrate ResourceSlice immutable fields to declarative validation

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Migrates ResourceSlice immutability checks from handwritten Go validation to
declarative validation tags, as part of KEP-5073.

`ResourceSliceSpec.Driver` and `ResourcePool.Name` are both documen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142126)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142121: kubelet: add memoryManagerPolicyOptions with memory-drift-tolerance (KEP-6232)

**What type of PR is this?**

/kind feature
/kind api-change

**What this PR does / why we need it:**

Part 3 of KEP-6232, on top of #140473 (the first three commits here are that PR; only the last one is new).

Adds `memoryManagerPolicyOptions` to KubeletConfiguration, mirroring `cpuManagerPolicyOp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142121)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142119: node: graduate RuntimeClass declarative validation to stable

<!--  Thanks for sending a pull request!  Here are some tips for you: -->

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Graduates RuntimeClass's declarative validation from beta to stable, per KEP-5073, and deletes the handwritten validation it replaces.

T...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142119)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10295: feat(coreweave): implement GPULabel, RDMA template capacity, and missing instance types

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

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10295)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd 2.4.0-rc.0

Welcome to the v2.4.0-rc.0 release of containerd!
*This is a pre-release of containerd*

containerd 2.4 is a regular (non-LTS) release with a shorter support window,
intended for users who want to adopt new features sooner. As the release
following the 2.3 LTS, it is the point in the release cycle where previously
deprecated features may be removed, so this release may include breaking
changes; check the notes below and clear any deprecation warnings from your
current version before upgrading.

...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.4.0-rc.0)

**Metadata:**
- Version: v2.4.0-rc.0
- Published: 2026-09-15
- Prerelease: Yes

## Updates

### kubernetes/kubernetes#142129: Start localhost nodeport proxy only when nodeport address contains 127.0.0.1

The nftables localhost nodeport (https://github.com/kubernetes/enhancements/issues/6032) proxy always runs on 127.0.0.1, however it starts even if someone only writes `--nodeport-addresses.=127.0.0.2/32`. This doesn't quite make sense since we're running the proxy on an IP that was not specified.

I...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142129)

**Metadata:**
- Created: 2026-09-15
- Comments: 5
- State: open

### kubernetes/kubernetes#142110: [Flaky test] [sig-api-machinery] k8s.io/kubernetes/test/integration/apiserver.oidc

### Which jobs are flaking?

* [sig-release-master-blocking#integration-arm64-master](https://testgrid.k8s.io/sig-release-master-blocking#integration-arm64-master&exclude-non-failed-tests=)

### Which tests are flaking?

* [[sig-api-machinery] k8s.io/kubernetes/test/integration/apiserver.oidc](https...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142110)

**Metadata:**
- Created: 2026-09-15
- Comments: 4
- State: open

### kubernetes/kubernetes#142132: Add tests for PodDisruptionBudget condition helpers

#### What type of PR is this?

/kind test
/sig apps
/area component-helpers

#### What this PR does / why we need it:

Adds unit tests for the two exported helpers in `staging/src/k8s.io/component-helpers/apps/poddisruptionbudget`: `UpdateDisruptionAllowedCondition` and `ConditionsAreUpToDate`. Neit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142132)

**Metadata:**
- Created: 2026-09-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142131: api: avoid overflow in fractional byte warnings

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

The Pod and PersistentVolumeClaim warning paths detect fractional byte quantities by calling `MilliValue()` and checking the remainder modulo 1000. `MilliValue()` saturates when a quantity e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142131)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142130: statefulset: stamp controller owner ref on PVC at creation for WhenDeleted=Delete policy

#### What type of PR is this?

/kind bug
/sig apps

#### What this PR does / why we need it:

A StatefulSet with `WhenDeleted: Delete` in its PVC retention policy requires the controller to hold an owner reference on each PVC. The garbage collector uses this reference to delete the PVC when t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142130)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142128: Stop serving v1alpha1 ClusterTrustBundle

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Remove serving code for cluster trust bundle alpha, which auto-stopped serving in 1.37

#### Does this PR introduce a user-facing change?
<!--
If no, just write "NONE" in the release-note block below.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142128)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142125: [Windows] Remove WinDSR and WinOverlay feature gates

#### What type of PR is this?

/kind cleanup
/sig windows

#### What this PR does / why we need it:

Removes the GA `WinDSR` and `WinOverlay` feature gates after their compatibility retention period.

Windows overlay networking no longer checks `WinOverlay`. Windows DSR is controlled directly throug...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142125)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142124: Cleanup - parametrize the restore test manager helper in cpumanager tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
The helper newRestoreTestManager used to hardcode the machine topology and reserved CPUs, so the callers had to assume the preconditions: single socket, single NUMA node, no SMT, exactly 1 reserved CPU. Pass ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142124)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142123: Feat/async status patch limiter

### What type of PR is this?
/kind feature
/sig scheduling

### What this PR does / why we need it
In `SchedulerAsyncAPICalls=true` mode, a burst of unschedulable pods dispatches status patches concurrently through the API dispatcher. Because each patch runs in its own goroutine, they compete f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142123)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142120: Report image volume digests from CRI status

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Kubelet reports image-volume digests from CRI `ImageSpec.ImageRef`, matching mounts by normalized container path. It seeds first-observation status, preserves mount metadata, clears stale digests, and remov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142120)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142118: Use HandleErrorWithLogger instead of HandleError in workload_forest

#### What type of PR is this?
/kind cleanup
#### What this PR does / why we need it:
Propagates contextual `logger klog.Logger` to `SchedulingQueue.GetPod` and `PodNominator.NominatedPodsForNode`.
This allows queue and nomination lookup operations to forward contextual loggers to internal helper...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142118)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142117: Add Watch validation to correctness testing

/kind cleanup

```release-note
NONE
```

Ref https://github.com/kubernetes/kubernetes/issues/141652

/cc @liggitt @wojtek-t @mborsz


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142117)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142116: validation-gen: add --profile for project-defined formats

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142116)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142115: lint: enable defaults kube-api-linter rule

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR enables the defaults kube-api-linter rule to ensure API fields with default
markers (+default, +kubebuilder:default (legacy), +k8s:default (planned)) are configured
correctly: 
- marked as +optio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142115)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142114: Migrate CSR expirationSeconds minimum to declarative validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Migrates the `expirationSeconds >= 600` check for `CertificateSigningRequest` to declarative validation, as `+k8s:alpha(since: "1.38")=+k8s:minimum=600` tags in `certificates/v1` and `v1beta1`, following the patt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142114)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142113: scheduler: fix data race in activeQueue.len()

#### What type of PR is this? 
/kind cleanup

#### What this PR does / why we need it:
activeQueue.len() called aq.queue.Len() without holding aq.lock. All write paths (add, delete, pop) hold aq.lock.Lock() and every other read path on the same struct (has, get, list, schedulingCycle) holds aq.l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142113)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142112: scheduler: fix scoring additions and request-change event comparisons overflow

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142112)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6644: Add v1.38 Release Comms Shadows to teams.yaml

*Added Comms shadows under the release-team, release-comms and milestone-maintainers.

Ref: https://github.com/kubernetes/sig-release/issues/3101

🔗 [Link](https://github.com/kubernetes/org/pull/6644)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10299: baiducloud: remove redundant rand.Seed call

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

CreateRandomString called rand.Seed(time.Now().UnixNano()) on every invocation of its insecure-rand fallback path. The global math/rand source has auto-seeded itself since Go 1.20, and this module is on Go 1.26, ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10299)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10298: volcengine: remove redundant rand.Seed call

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

An init function called rand.Seed(time.Now().Unix()) once at package load. The global math/rand source has auto-seeded itself since Go 1.20, and this module is on Go 1.26, so the call is a deprecated no-op.

####...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10298)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10297: civo: remove redundant rand.Seed call

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

RandomName called rand.Seed(time.Now().Unix()) on every invocation. The global math/rand source has auto-seeded itself since Go 1.20, and this module is on Go 1.26, so the call is a deprecated no-op. Also drops t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10297)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10296: Add helm support for .Values.extraEnv*[].optional

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Allows users to include the `optional` property on their `.Values..Values.extraEnvConfigMaps` and `.Values.extraEnvSecrets` entries.

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10296)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57549: [ko] Update content/ko/docs/tasks/access-application-cluster/configure-dns-cluster.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/access-application-cluster/configure-dns-cluster.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/access-application-cl...

🔗 [Link](https://github.com/kubernetes/website/issues/57549)

**Metadata:**
- Created: 2026-09-16
- Comments: 1
- State: open

### kubernetes/website#57547: Update all css styles for RTL pages

Based on this comment(https://github.com/kubernetes/website/pull/57477#issuecomment-5681538513), we have to add `/*rtl:ignore*/` before each RTL related blocks in css.

🔗 [Link](https://github.com/kubernetes/website/issues/57547)

**Metadata:**
- Created: 2026-09-15
- Comments: 2
- State: open

### kubernetes/website#57542: [ko] Update content/ko/docs/setup/production-environment/tools/kubeadm/install-kubeadm.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/production-environment/tools/kubeadm/install-kubeadm.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/production-enviro...

🔗 [Link](https://github.com/kubernetes/website/issues/57542)

**Metadata:**
- Created: 2026-09-15
- Comments: 1
- State: open

### kubernetes/website#57540: 404 is found , when clicking to the case-studies page

**Bug report**
[Kubernetes/case-studies](https://kubernetes.io/case-studies/ ) gives 404 page not found

**Proof**

<img width="949" height="537" alt="Image" src="https://github.com/user-attachments/assets/8033b628-9519-4336-aad0-e9fdba0d38e7" />

**Steps to reproduce**
clicking on the case-studies ...

🔗 [Link](https://github.com/kubernetes/website/issues/57540)

**Metadata:**
- Created: 2026-09-15
- Comments: 4
- State: open

### kubernetes/website#57545: [zh-cn]sync apiserver-audit.v1

content/zh-cn/docs/reference/config-api/apiserver-audit.v1.md

🔗 [Link](https://github.com/kubernetes/website/pull/57545)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57544: [zh-cn]sync kubeadm-config.v1beta3

content/zh-cn/docs/reference/config-api/kubeadm-config.v1beta3.md

🔗 [Link](https://github.com/kubernetes/website/pull/57544)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57543: [zh-cn]sync statefulset

content/zh-cn/docs/concepts/workloads/controllers/statefulset.md

🔗 [Link](https://github.com/kubernetes/website/pull/57543)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57538: [zh-cn]sync custom-metrics.v1beta2

content/zh-cn/docs/reference/external-api/custom-metrics.v1beta2.md

🔗 [Link](https://github.com/kubernetes/website/pull/57538)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9934: Add v1.38 release signal shadows to release-team, release-team-shadows

**What this PR does / why we need it**:
Add v1.38 release signal shadows to release-team, release-team-shadows


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9934)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3226: [manila-csi-plugin] Support mutable NFS access rules

/kind feature

**What happened**:

The `nfs-shareClient` storage class parameter is only evaluated while dynamically provisioning a Manila NFS share. After the PVC is created, Kubernetes users cannot change the share client IP addresses or CIDRs through the Manila CSI driver. Updating the access lis...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3226)

**Metadata:**
- Created: 2026-09-15
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3225: [occm] Change to clusterrole introduced in v2.36.2 prevents deletion of non-existing nodes

/kind bug

**What happened**:
After upgrading to occm chart >= v2.36.2 I am facing issues during rolling cluster upgrades that orphaned nodes (already deleted openstack vms) remain indefinitely in the cluster because occm does not have the permissions to remove the node(s) from the cluster.

The cha...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3225)

**Metadata:**
- Created: 2026-09-15
- Comments: 5
- State: open

### kubernetes/cloud-provider-openstack#3228: [occm] restore nodes delete on the CCM ClusterRole

#3165 dropped create/delete on nodes because OCCM supposedly didn't need them. the node lifecycle controller still does — without delete, occm can't remove nodes whose openstack VMs are already gone, and they sit NotReady with DeletingNodeFailed.

put delete back on the chart ClusterRole and the raw...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3228)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3227: [manila-csi-plugin] Support mutable NFS access rules

**What this PR does / why we need it**:

Adds support for updating Manila NFS share access rules after a PVC has been provisioned. The Manila CSI plugin now advertises the CSI `MODIFY_VOLUME` controller capability for NFS and implements `ControllerModifyVolume` so changes to `nfs-shareClient` throug...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3227)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3224: [occm] treat missing server-by-name as InstanceNotFound

when a node has no ProviderID, getInstance looks it up by name. a missing server came back as `failed to find object`, so InstanceExists treated it as a real error instead of "gone" and the node stuck around NotReady.

map that path to InstanceNotFound the same way the ProviderID lookup already does...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3224)

**Metadata:**
- Created: 2026-09-15
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd API 1.12.0-rc.1

Welcome to the api/v1.12.0-rc.1 release of containerd!
*This is a pre-release of containerd*

The 13th release for the containerd 1.x API aligns with the containerd 2.4 release.

### Highlights

#### Image Storage

* Include media type in content create events ([#13833](https://github.com/containerd/containerd/pull/13833))

#### Runtime

* Add UpdateSandbox RPC to propagate sandbox controller updates to the shim ([#14105](https://github.com/containerd/containerd/pull/14105))
* Allow specifying p...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/api/v1.12.0-rc.1)

**Metadata:**
- Version: api/v1.12.0-rc.1
- Published: 2026-09-15
- Prerelease: Yes

### containerd/containerd#14164: EROFS layer blobs are regularly left corrupted after an unclean shutdown: snapshots are committed without ever flushing layer.erofs to disk

### Description

Nodes that lose power regularly come back with EROFS snapshots that are committed in the metadata
store while their `layer.erofs` blob is truncated or empty. Every container that needs such a
layer then fails to start, and the only recovery we have found is deleting and re-pulling t...

🔗 [Link](https://github.com/containerd/containerd/issues/14164)

**Metadata:**
- Created: 2026-09-15
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-09-16 03:16:13*
