---
title: "Upstream Github - 2026-09-10"
description: "CNCF upstream activity from github"
pubDate: 2026-09-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "area/kubelet", "sig/node", "needs-triage", "sig/testing", "kind/failing-test", "sig/architecture", "area/code-organization", "area/code-organization/future-dependencies", "kind/feature", "sig/windows", "sig/security", "pr", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/M", "area/test", "area/apiserver", "sig/api-machinery", "kind/api-change", "release-note-none", "cncf-cla: no", "do-not-merge/invalid-commit-message", "sig/scheduling", "size/XS", "kind/cleanup", "size/XXL", "sig/auth", "do-not-merge/needs-kind", "sig/cluster-lifecycle", "area/kubeadm", "sig/network", "sig/apps", "do-not-merge/hold", "sig/autoscaling", "area/kube-proxy", "area/kubectl", "lgtm", "area/cloudprovider", "sig/cli", "sig/cloud-provider", "ok-to-test", "area/dependency", "wg/device-management", "kind/dependency", "do-not-merge/release-note-label-needed", "do-not-merge/needs-sig", "sig/instrumentation", "wg/workload-aware-scheduling", "sig/storage", "area/api-validation", "priority/backlog", "kind/documentation", "approved", "triage/accepted", "website", "kubectl", "size/S", "kind/kep", "enhancements", "area/provider/openstack", "area/jobs", "area/config", "test-infra", "cloud-provider-gcp", "cloud-provider-openstack", "needs-rebase", "area/cluster-autoscaler", "area/provider/gce", "autoscaler", "envoyproxy", "gateway", "containerd", "release", "overlaybd", "nri", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141987: clean up the feature WindowsHostNetwork.

### What would you like to be added?

PR  #130250  ("Withdraw alpha support for HostNetwork containers on Windows", merged for 1.33) removed the actual implementation code — Windows pods can no longer use  hostNetwork: true  — as part of formally withdrawing KEP-3503. That's why  kep.yaml  shows  st...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141987)

**Metadata:**
- Created: 2026-09-09
- Comments: 3
- State: open

### kubernetes/kubernetes#141986: Fix CEL map-list concatenation to merge duplicate new keys

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Schema-aware CEL map-list concatenation kept duplicate new keys from the right operand instead of merging them.

`addToMapList` builds an index for the left operand but did not add a key to that index when it appende...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141986)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141985: Regenerate Pod Security test fixtures for v1.38

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Extend Pod Security Admission fixture coverage to v1.38.

Bump `newestMinorVersionToTest` from 37 to 38, then regenerate fixtures from the repository root with:

```sh
UPDATE_POD_SECURITY_FIXTURE_DATA=...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141985)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141979: KEP-4858 IP/CIDR Validation to GA

#### What this PR does / why we need it:
Bumps KEP-4858 to GA. No changes beyond feature gate tweaking.

#### Which issue(s) this PR is related to:
KEP: https://github.com/kubernetes/enhancements/issues/48958

#### Does this PR introduce a user-facing change?
```release-note
KEP-4858 "IP/CID...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141979)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6337: Update KEP-4858 IP/CIDR validation to GA

https://github.com/kubernetes/enhancements/issues/4858

Promotion is mostly a no-op. I even postponed the only real GA graduation criterion (integration test cleanup) from "GA" to "Post-GA Cleanup", since we might as well keep testing it with `SetFeatureGateEmulationVersionDuringTest` for as long ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6337)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10274: cluster-autoscaler (GCE): Improve handling non-GCE ProviderId nodes.

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
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10274)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2298: Add Universal Non-Destruction Constraint (UNDC) as a CNCF Sandbox Project

# Project Proposal: Universal Non-Destruction Constraint (UNDC)

## Project Name
Universal Non-Destruction Constraint (UNDC)

## Description
The UNDC is a mathematically enforced, kernel-level AI safety framework that prevents AI systems from causing unmitigated harm. It uses eBPF LSM hooks, zk-SNAR...

🔗 [Link](https://github.com/cncf/toc/issues/2298)

**Metadata:**
- Created: 2026-09-10
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#141993: Memory Manager accepts an incomplete pod-level checkpoint as a restored allocation after kubelet restart

### What happened?

With the static Memory Manager, pod-scope Topology Manager, and `PodLevelResourceManagers` enabled, pod-level allocation is persisted through independent checkpoint updates: `PodMemoryAssignments` first, then per-container assignments, then `MachineState`. If kubelet stops after ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141993)

**Metadata:**
- Created: 2026-09-10
- Comments: 2
- State: open

### kubernetes/kubernetes#141992: kind-master-golang-tip red: upstream net/http bug, not a kubelet bug

TestGrid: https://testgrid.k8s.io/sig-arch-code-organization#kind-master-golang-tip&width=20

`ci-kubernetes-e2e-kind-golang-tip` has been red since 2026-09-09. Root cause is upstream: https://github.com/golang/go/issues/81444, a net/http bug in Go tip (commit e2a74e80b2) that cancels the first requ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141992)

**Metadata:**
- Created: 2026-09-10
- Comments: 3
- State: open

### kubernetes/kubernetes#141988: update overdue feature WinDSR and WinOverlay

### What would you like to be added?

WinDSR: {
    {Version: "1.14", Default: false, PreRelease: Alpha},
    {Version: "1.33", Default: true,  PreRelease: Beta},
    {Version: "1.34", Default: true,  PreRelease: GA, LockToDefault: true},
},
WinOverlay: {
    {Version: "1.14", Default: false, PreRel...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141988)

**Metadata:**
- Created: 2026-09-09
- Comments: 3
- State: open

### kubernetes/kubernetes#141974: CVE-2026-84445 gRPC-Go xDS servers: Denial of Service (DoS) via crash due to missing `:authority` and `Host` headers

### What happened?

Prow ci-kubernetes-snyk-master [job](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-snyk-master/2097645969058304000) failing due to new CVE-2026-84445 finding

### What did you expect to happen?

CVE scan should be clean

### How can we reproduce it (as minimal...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141974)

**Metadata:**
- Created: 2026-09-09
- Comments: 4
- State: open

### kubernetes/kubernetes#141994: memorymanager: reject incomplete pod-level checkpoint state

#### What type of PR is this?

/kind bug
/sig node
/area kubelet

#### What this PR does / why we need it:

With pod-level Memory Manager allocations, `AllocatePod` writes the pod memory assignment before container assignments and machine state. If kubelet is interrupted after the PodEntry c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141994)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141991: Keep Pod hugepage limits across an in-place resize

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

An in-place resize writes only CPU or memory settings to the Pod cgroup. The cgroup conversion treats an omitted hugepage map as empty and sets every supported hugepage limit to zero.

Skip hugepage conversio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141991)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141989: Migrate LeaseCandidate.Spec.BinaryVersion to declarative validation

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Migrates `LeaseCandidate.spec.binaryVersion` from handwritten validation to Declarative Validation, following the "Good First Migration" criteria in #135752:

- simple required check (`len(spec.BinaryVersion) == ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141989)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141990: Migrate PriorityClass.preemptionPolicy to declarative validation

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Migrates `PriorityClass.preemptionPolicy` immutability from handwritten validation to Declarative Validation, following the "Good First Migration" criteria in #136785:

- simple immutable check (`apivalidation.Va...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141990)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141984: Apiserver/cel: propagate ResultSize for URL accessor cost estimates

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141984)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141983: [PodLevelResources] Fix Pod resize CPU/memory keys drops from PodStatus.Resources depending on resize dimension

**What type of PR is this?**
/kind bug
/sig node
/area kubelet

**What this PR does / why we need it:**

When you resize a running pod in-place (e.g., `kubectl patch pod --subresource resize`), Kubernetes updates the cgroup and reports the new resources in `status.allocatedResources` and `sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141983)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141982: kubelet: cover the user namespace mapping validations no test reaches

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

[`TestUserNsManagerParseUserNsFile`](https://github.com/kubernetes/kubernetes/blob/24b42489c62d65ddb3ffa6b2a67fa25ccbf3dea1/pkg/kubelet/userns/userns_manager_test.go#L234-L316) checks that an error came back, not...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141982)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141981: kubeadm: match the service and runlevel columns for OpenRC enablement

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

[`ServiceIsEnabled`](https://github.com/kubernetes/kubernetes/blob/b1856e29a9c992113d5db00096082ddcc3a55d8a/cmd/kubeadm/app/util/initsystem/initsystem_unix.go#L60-L65) searches the whole output of `rc-update show def...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141981)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141980: resource: clear the cached string when unmarshalling null

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Both null branches of the `Quantity` decoders reset the numeric fields and leave the cached string alone:

```go
	if l == 4 && bytes.Equal(value, []byte("null")) {
		q.d.Dec = nil
		q.i = int64Amou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141980)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141978: HPA: compute resource utilization ratio without int64 overflow

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

## Problem

`GetResourceUtilizationRatio` in the HPA metrics helpers sums per-pod metric values and requests as raw `int64`, multiplies the metrics total by 100, and narrows the result to `int32`. All three steps wra...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141978)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141977: kubelet: retain pod volume stats during restart backoff

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When every container sample for a Running pod is filtered out by cAdvisor stats collection, `ListPodStats` omits the pod before collecting its volume stats. A pod in restart backoff can therefore lose its Summa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141977)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141976: deps: bump google.golang.org/grpc to v1.82.2

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Updates `google.golang.org/grpc` from v1.82.1 to v1.82.2 to address CVE-2026-84445. The upstream transport fix rejects requests missing both `:authority` and `Host` headers with HTTP 400 and gRPC `Internal` be...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141976)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141972: Fix extra quote in usage message

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141972)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141971: kubelet: fall back to os/user when getent is unavailable

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`getentUserExists()` treated every `exec.LookPath` failure as "user not configured", so a node without `getent` on PATH skipped `getsubids` and used the built-in default ID range, even when the `kubelet` account is a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141971)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141969: scheduler: support CompositePodGroup in workload preemption metrics

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds `compositepodgroup` label support to workload preemption metrics in the scheduler so that preemption behavior can be observed separately for `PodGroup` and `CompositePodGroup` workloads.

#### Which ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141969)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141967: storage: graduate StorageClass declarative validation to stable

#### What type of PR is this?

/kind cleanup
/area api-validation

#### What this PR does / why we need it:

Graduates declarative validation (DV) rules for `StorageClass` from beta to stable:
- Removed `+k8s:beta(since: "1.37")=` prefix from `StorageClass` DV markers (`provisioner`, `parame...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141967)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141966: DRA: clarify PrepareResourceClaims guarantees

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

It's useful that the kubelet calls NodePrepareResources after a reboot because DRA drivers then can fix things that might have been lost because of a reboot.

We didn't actually specify this in the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141966)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57476: Code blocks are rendered RTL on RTL documentation pages

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->

<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->

**Problem:**

On RTL documenta...

🔗 [Link](https://github.com/kubernetes/website/issues/57476)

**Metadata:**
- Created: 2026-09-09
- Comments: 2
- State: open

### kubernetes/kubectl#1881: `kubectl wait --for=jsonpath`: support inequality/negation operators (`!=`) in addition to `=`

**What would you like to be added:**

`kubectl wait --for=jsonpath='{...}'=<value>` currently supports only equality — it blocks until the field *equals* a known value. This request is to extend the existing jsonpath predicate with an inequality operator so you can wait until a field is *not* equal ...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1881)

**Metadata:**
- Created: 2026-09-09
- Comments: 1
- State: open

### kubernetes/test-infra#37846: CPO: Add openstack-cloud-helm-chart-lint job

This depends on https://github.com/kubernetes/cloud-provider-openstack/pull/3208.

/hold


🔗 [Link](https://github.com/kubernetes/test-infra/pull/37846)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1347: Move NodeNetworkConfig CR creation to Cloud CIDR Allocator in CCM

Create NodeNetworkConfig CRs for nodes within CCM using a dedicated TaskQueue syncer behind the `--enable-node-network-config` CLI flag.

When enabled, `cloudCIDRAllocator` initializes a `NodeNetworkConfigSyncer` and task queue to automatically create a NodeNetworkConfig CR for each node (with an ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1347)

**Metadata:**
- Created: 2026-09-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3211: [release-1.36] fix(manila-csi-plugin): revert to setting cluster id from environment

This is an automated cherry-pick of #3157

/assign stephenfin

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3211)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3210: [cinder-csi-plugin] Return backups from ListSnapshots by ID

What this PR does / why we need it:

`ListSnapshots` only checks Cinder snapshots, so pre-provisioned snapshots backed by a Cinder backup never become ready. 
Fall back to `GetBackupByID` after a snapshot 404

Which issue this PR fixes(if applicable):

Related to #2473.

Special notes for r...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3210)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3209: Remove dead targets from Makefile

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3209)

**Metadata:**
- Created: 2026-09-09
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10002: Backend: add a KubernetesService type so Backend features apply to Service endpoints (EDS) instead of a DNS cluster

**Description:**

Today, the only way to reference an in-cluster Kubernetes Service from a `Backend` is via an FQDN endpoint:

```yaml
apiVersion: gateway.envoyproxy.io/v1alpha1
kind: Backend
metadata:
  name: foo-mtls
  namespace: foo
spec:
  endpoints:
  - fqdn:
      hostname: foo-svc.foo.svc.clu...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10002)

**Metadata:**
- Created: 2026-09-10
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Commits
- Add hybrid writable layer type [#443](https://github.com/containerd/overlaybd/pull/443) ([Zehuan Shi](https://github.com/containerd/overlaybd/commit/41961429743ad1a8c5e4c1afebfdb4a35af65e99))
- Reuse writable layer data in hybrid mode [#443](https://github.com/containerd/overlaybd/pull/443) ([Zehuan Shi](https://github.com/containerd/overlaybd/commit/5da458c5b0c6ebe270172cfb699b9614045b1fdf))
- 37c9128: Merge branch 'main' into dev/hybrid-rw (Yifan Yuan) [#443](https://github.com/co...

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-09
- Prerelease: Yes

### containerd/nri: v0.12.3

## What's Changed
* ci: declare contents: read on ci.yml and codespell.yml by @arpitjain099 in https://github.com/containerd/nri/pull/296
* chore(deps):  go.yaml.in/yaml/v3 v3.0.5, testify v1.12.1, logrus v1.9.4 by @thaJeztah in https://github.com/containerd/nri/pull/308
* ci: update actions, pin actions by sha, and apply zizmor fixes, and update to ubuntu 26.04 by @thaJeztah in https://github.com/containerd/nri/pull/306
* fix(adaptation): record sysctl removal markers in Linux.Sysctl by @th...

🔗 [Link](https://github.com/containerd/nri/releases/tag/v0.12.3)

**Metadata:**
- Version: v0.12.3
- Published: 2026-09-09
- Prerelease: No


---

*This content was automatically collected on 2026-09-10 03:01:04*
