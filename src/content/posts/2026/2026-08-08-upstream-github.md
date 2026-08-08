---
title: "Upstream Github - 2026-08-08"
description: "CNCF upstream activity from github"
pubDate: 2026-08-08
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-sig", "needs-triage", "kind/flake", "sig/apps", "pr", "kind/bug", "area/kubelet", "sig/node", "release-note", "size/XL", "cncf-cla: yes", "needs-priority", "area/test", "sig/api-machinery", "size/M", "kind/api-change", "sig/testing", "needs-ok-to-test", "area/api-validation", "kind/cleanup", "release-note-none", "sig/auth", "kind/failing-test", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "sig/scheduling", "size/L", "kind/documentation", "sig/storage", "size/XS", "approved", "do-not-merge/release-note-label-needed", "do-not-merge/hold", "do-not-merge/needs-sig", "wg/device-management", "size/S", "sig/instrumentation", "sig/architecture", "area/apiserver", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "cloud-provider-gcp", "area/kinder", "kubeadm", "area/cluster-autoscaler", "area/provider/oci", "autoscaler"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141248: Fix/limitranger pod level hugepages



#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

LimitRanger kept a private `isSupportedPodLevelResource` listing only cpu and memory, while the
canonical `resourcehelper.IsSupportedPodLevelResource` also matches the `hugepages-` prefix.
Because of the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141248)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141259: Documentation: Add onboarding guide for kube-system deployments

## Onboarding Guide: kube-system Deployments

As part of the onboarding checklist for new infrastructure team members, this issue tracks adding a documentation guide for the deployments running in the `kube-system` namespace.

### Deployments discovered in kube-system (from cluster context `toolathl...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141259)

**Metadata:**
- Created: 2026-08-07
- Comments: 3
- State: open

### kubernetes/kubernetes#141250: TestRecreateStatefulSetUpdate flakes due to StaleControllerConsistencyStatefulSet blocking reconcile

### Which jobs are flaking?

pull-kubernetes-integration

### Which tests are flaking?

`TestRecreateStatefulSetUpdate` — package `k8s.io/kubernetes/test/integration/statefulset`


### Since when has it been flaking?

Since commit adding test: commit `1999683eee2` (2026-07-19, "Add recreate update s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141250)

**Metadata:**
- Created: 2026-08-07
- Comments: 3
- State: open

### kubernetes/kubernetes#141249: resource.Quantity silently drops the scale when serializing values of 10^21 or more

### What happened?

`resource.Quantity.String()` and `MarshalJSON()` silently change the value of quantities whose
magnitude has no SI suffix. Decimal SI suffixes stop at `E` (10^18) and binary at `Ei` (2^60).

`CanonicalizeBytes` discards the `ok` result of the suffix lookup:

```go
// staging/src/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141249)

**Metadata:**
- Created: 2026-08-07
- Comments: 2
- State: open

### kubernetes/kubernetes#141247: LimitRange maximum can be exceeded by declaring hugepages at the pod level

### What happened?

A `LimitRange` of type `Pod` with a `max` for `hugepages-*` does not constrain a Pod that
declares its hugepages through pod-level resources (`spec.resources`). Such a Pod is admitted
even when its effective hugepages consumption exceeds the configured maximum.

The LimitRanger a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141247)

**Metadata:**
- Created: 2026-08-07
- Comments: 2
- State: open

### kubernetes/kubernetes#141245: fields.Selector.String() is not idempotent: re-parsing can reorder terms

### What happened?

`fields.ParseSelector(s).String()` does not produce a canonical string. Parsing that output and
serializing it again can yield a different string.

`parseSelector` sorts the raw input terms **before** parsing them:

```go
// staging/src/k8s.io/apimachinery/pkg/fields/selector.go
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141245)

**Metadata:**
- Created: 2026-08-07
- Comments: 2
- State: open

### kubernetes/kubernetes#141243: DRA converting watch does not stop on Stop(): `break` inside `select` never leaves the loop

### What happened?

In `staging/src/k8s.io/dynamic-resource-allocation/client/generic.go`, `watchSomething.run` uses a
naked `break` in the `<-w.stopChan` case of a `select`:

```go
for {
	e, ok := <-resultChan
	if !ok {
		break
	}
	... convert e ...
	// This must not get blocked when the consumer s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141243)

**Metadata:**
- Created: 2026-08-07
- Comments: 2
- State: open

### kubernetes/kubernetes#141261: kubelet: cpumanager: Fix exclusive allocation metrics accounting

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The static policy maintained the `CPUManagerExclusiveCPUsAllocationCount` and `CPUManagerSharedPoolSizeMilliCores` gauges by applying per-event deltas, and updated `CPUManagerAllocationPerNUMA` only for the NUM...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141261)

**Metadata:**
- Created: 2026-08-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141260: core: add +k8s:update=NoUnset to Node.Spec.PodCIDRs

#### What type of PR is this?

/kind api-change
/sig api-machinery
/area api-validation

#### What this PR does / why we need it:

Migrates the "podCIDRs cannot be cleared" half of `Node.Spec.PodCIDRs` immutability to declarative validation, using `+k8s:update=NoUnset`. Same set-once shape as `Node....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141260)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141258: Automated cherry pick of #141012: Sync supported service account token algorithms to test image

Cherry pick of #141012 on release-1.34.

#141012: Sync supported service account token algorithms to test image

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141258)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141257: Automated cherry pick of #141012: Sync supported service account token algorithms to test image

Cherry pick of #141012 on release-1.35.

#141012: Sync supported service account token algorithms to test image

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141257)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141256: Automated cherry pick of #141012: Sync supported service account token algorithms to test image

Cherry pick of #141012 on release-1.36.

#141012: Sync supported service account token algorithms to test image

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141256)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141255: Split Pod update with a changed UID into delete and add

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141255)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141254: Update mount-utils OWNERS

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:
This PR updates mount-utils OWNERS file.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141254)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141253: Populate UnschedulablePlugins for PlacementFeasible rejection

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141253)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141252: Disable StaleControllerConsistencyStatefulSet in TestRecreateStatefulSetUpdate

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

The consistency store blocks reconcile when the informer cache lags behind the controller's writes, causing CurrentRevision to not update in time. This test doesn't exercise the consistency store, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141252)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141251: Fix/quantity large magnitude serialization

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`CanonicalizeBytes` discarded the `ok` result of `quantitySuffixer.constructBytes`. That call is a
map lookup returning `(nil, false)` when no suffix exists for the magnitude - decimal SI stops at
`E` (10^18)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141251)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141246: Fix/field selector canonical ordering

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`parseSelector` sorted the raw input terms before parsing them. The input text and the emitted
text are not the same string - `==` is emitted as `=` and values are re-escaped - so sorting the
input did not pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141246)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141244: Fix/dra watch stop exits loop

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In `watchSomething.run`, the `<-w.stopChan` case of the `select` used a naked `break`, which
leaves the `select` rather than the enclosing `for`. The intent is clear from the surrounding
comment ("This must n...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141244)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141242: Fix/pod level resources aliasing

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`applyPodLevelResources` stored a `resource.Quantity` taken from `pod.Spec.Resources` into the
result map without `DeepCopy()`. A `Quantity` carries a `*inf.Dec` for values that do not fit the
int64 fast path...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141242)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141239: Fix: missing Prometheus registration that silently hides exec-plugin policy audit metric

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141239)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141238: Fix deep copy bestCombo in takeByTopologyNUMADistributed to prevent incorrectly CPU allocation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141238)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141236: Optimize mutating webhook object serialization

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### Which issue(s) this PR is related to:
N/A

#### What this PR does / why we need it:

Caches serialized objects during mutating webhook dispatch, and the cached JSONs are reused during the sequential webhook requests and ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141236)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37638: kubeadm: add 1.37 test jobs

- https://github.com/kubernetes/kubeadm/pull/3326

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37638)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1288: kops-simple skips cleanup when cluster provisioning fails

`e2e/scenarios/kops-simple` installs its `EXIT` trap after `make test-cluster-up`.

If provisioning creates some resources and then fails, the script exits without running `test-cluster-down`. This can leave GCP resources behind.

Repro:

```bash
GCP_PROJECT=test bash -c '
make() { echo "make:$1"; [...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1288)

**Metadata:**
- Created: 2026-08-07
- Comments: 1
- State: open

### kubernetes/kubeadm#3326: kinder: add 1.37 test jobs

xref

- https://github.com/kubernetes/kubeadm/issues/3304
- https://github.com/kubernetes/test-infra/pull/37638

/hold


🔗 [Link](https://github.com/kubernetes/kubeadm/pull/3326)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10118:  [cluster-autoscaler-release-1.35] PR#9703 Handle failed node creations without instance IDs by decreasing nodep…

Cherry-pick of https://github.com/kubernetes/autoscaler/pull/9703

/assign jackfrancis

Fixed OCI nodepool recovery when failed node creation leaves a node without an instance ID.

/kind bug


🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10118)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10117:  [cluster-autoscaler-release-1.34] PR#9703 Handle failed node creations without instance IDs by decreasing nodep…

Cherry-pick of https://github.com/kubernetes/autoscaler/pull/9703

/assign jackfrancis

Fixed OCI nodepool recovery when failed node creation leaves a node without an instance ID.

/kind bug


🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10117)

**Metadata:**
- Created: 2026-08-07
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-08 01:21:00*
