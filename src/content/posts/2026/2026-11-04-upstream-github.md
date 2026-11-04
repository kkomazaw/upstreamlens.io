---
title: "Upstream Github - 2026-11-04"
description: "CNCF upstream activity from github"
pubDate: 2026-11-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/instrumentation", "needs-triage", "pr", "area/test", "sig/api-machinery", "size/M", "kind/feature", "release-note-none", "cncf-cla: yes", "sig/testing", "sig/architecture", "area/conformance", "needs-priority", "sig/scheduling", "sig/node", "release-note", "size/XL", "kind/api-change", "area/code-generation", "wg/device-management", "area/kubelet", "kind/cleanup", "area/apiserver", "size/XXL", "sig/apps", "area/kubectl", "sig/storage", "sig/autoscaling", "sig/cli", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "sig/auth", "approved", "do-not-merge/needs-kind", "lgtm", "size/L", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "kind/regression", "needs-ok-to-test", "size/S", "area/cloudprovider", "do-not-merge/hold", "sig/cloud-provider", "do-not-merge/invalid-commit-message", "kind/flake", "release", "autoscaler", "area/cluster-autoscaler", "area/dependency", "area/provider/cluster-api", "area/vertical-pod-autoscaler", "area/helm-charts", "kind/documentation", "area/provider/coreweave", "triage/accepted", "area/jobs", "area/config", "test-infra", "priority/important-longterm", "kubectl", "prometheus"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143780: conformance: promote KEP-4006 WebSocket streaming e2e tests to Conformance

#### What type of PR is this?

/kind feature
/sig api-machinery
/area conformance

#### What this PR does / why we need it:

Promotes the 4 `[sig-api-machinery]` WebSocket streaming e2e tests added in #142898 (and updated in #143436) to Conformance (`[Conformance]`) for KEP-4006 GA in v1.38:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143780)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143779: KEP 6406: DRA Extended Resource Capacity

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Alpha implementation of [KEP-6406](https://kep.k8s.io/6406). A DeviceClass can set `extendedResourceCapacityRequests`, and the scheduler requests that capacity for each device it allocates for th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143779)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143765: scheduler: honor pod-level and resize feature gates in NodeResourcesFit scorer



#### What type of PR is this?

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
/kind flake
/kind ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143765)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10614: Update k8s deps to v1.36.6

#### What type of PR is this?

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
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10614)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10613: Update k8s deps to v1.35.10

#### What type of PR is this?

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
/kind flake
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10613)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38242: [KEP-5359] sig-node: enable WorkloadControlledSwap in periodic serial swap jobs

Enable `WorkloadControlledSwap`, `PodLevelResources`, and `InPlacePodLevelResourcesVerticalScaling` on the periodic serial swap node E2E jobs for containerd and CRI-O in `node-kubelet.yaml`.

/hold
This PR is held until https://github.com/kubernetes/kubernetes/pull/142885 merges so `kube-apiserver` ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38242)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1898: ApplySet: Remaining of ApplySet alpha (KEP-3659)

**Note: This issue is intended solely for tracking and discussion, not as an actionable work item for now!🙂**


## Description:
ApplySet (KEP-3659) introduces a more reliable and scalable pruning mechanism for `kubectl apply`, replacing the limitations of legacy --prune with explicit resource membe...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1898)

**Metadata:**
- Created: 2026-11-03
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#143759: Can't distinguish APF throttling 429s from Eviction API (PDB) 429s based on client-go metrics

### What happened?

The kube-apiserver returns 429 for two very different reasons:
1. API Priority and Fairness rejected the request (queue full / timed out): the client, or the cluster as a whole, is sending too much traffic.
2. The Eviction API refused an eviction because it would violate a PodDis...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143759)

**Metadata:**
- Created: 2026-11-03
- Comments: 7
- State: open

### kubernetes/kubernetes#143778: Remove InPlacePodVerticalScaling feature gate

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Clean up the `InPlacePodVerticalScaling` feature gate.

#### Which issue(s) this PR is related to:

https://github.com/kubernetes/enhancements/issues/1287

#### Does this PR introduce a user-facing change?
```rel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143778)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143777: Plr ephemeral storage

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143777)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143776: Reconcile bootstrap RBAC policy from List results instead of per-object Gets

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This reduces kube-apiserver startup time.

This shortens the rbac/bootstrap-roles post-start hook, which /readyz waits on during kube-apiserver startup.

The hook lists all `ClusterRoles` and `ClusterRo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143776)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143775: [WIP] DRA Optional Node Operations Beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143775)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143774: Automated cherry pick of #143727: Refresh cached Node UID when creating or verifying CSINode ownership

Cherry pick of #143727 on release-1.35.

#143727: Refresh cached Node UID when creating or verifying CSINode ownership

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143774)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143773: cel: skip schemaless fields in unstructuredMap iterator

Ensure unstructuredMap.Iterator() returns only populated fields

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`unstructuredMap.Iterator()` sized its key slice to the full map but only
filled entries for fields with a schema, leaving trailing ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143773)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143772: Automated cherry pick of #143727: Refresh cached Node UID when creating or verifying CSINode ownership

Cherry pick of #143727 on release-1.36.

#143727: Refresh cached Node UID when creating or verifying CSINode ownership

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143772)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143771: Automated cherry pick of #143727: Refresh cached Node UID when creating or verifying CSINode ownership

Cherry pick of #143727 on release-1.37.

#143727: Refresh cached Node UID when creating or verifying CSINode ownership

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143771)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143770: CronJob: adopt unfinished owned Jobs missing from Active

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When sync finds an unfinished Job owned by the CronJob that is not in `status.active`, it only emitted `UnexpectedJob` and left Active unchanged. `Forbid` / `Replace` use Active, so a create-then-lost-status race (or...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143770)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143769: jsonpath: after the first pod output stopped. Now it shows output from all pods.

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig cli

#### What this PR does / why we need it:

When an array selector (`[*]` or a slice such as `[1:]`) is applied to several values at once, for example after `.items[*]`, `evalArray` stops at the first value whose selection is empty ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143769)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143766: Leader election recovery pause

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143766)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143764: [WIP] kubelet: make volume attach and mount async with SyncPod()

Make the volume mounting process not block creating the pod sandbox. Expedite pod startup time by ~100s of milliseconds by making the two kubelet functions concurrent.

There are some design decisions to consider:
1. One edge case that must be considered is that CreatePodSandbox previously relied...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143764)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143762: Set Node.Spec.Unschedulable registering with unschedulable taint

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143762)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143760: Plr swap support

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143760)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143758: client-go/metadata: wait for watch before triggering delete in informer test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143758)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143757: client-go: add more labels for improving observability rest_client_request

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add (component) name, group, version, resource, scope to `request_total` and `duration_seconds`.

#### Which issue(s) this PR is related to:

Related #139042

#### Special notes for your reviewer:

I'll move this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143757)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143756: Evalute feature gates on delegator startup instead of per request

/kind cleanup

Extracted from https://github.com/kubernetes/kubernetes/pull/143696/commits

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143756)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: cluster-autoscaler-chart-9.60.0

Scales Kubernetes worker nodes within autoscaling groups.

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-chart-9.60.0)

**Metadata:**
- Version: cluster-autoscaler-chart-9.60.0
- Published: 2026-11-03
- Prerelease: No

### kubernetes/autoscaler#10621: New releases for eMudhra certificate compromise

Please release new images for autoscaling/cluster-autoscaler for all currently supported minor releases - 1.35, 1.36, and 1.37 - to remove "emSign ECC Root CA - G3" and "AAA Certificate Services" from the root of trust.

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10621)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/autoscaler#10620: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure/pkg/azclient from 0.23.0 to 0.26.0 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure/pkg/azclient](https://github.com/kubernetes-sigs/cloud-provider-azure) from 0.23.0 to 0.26.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes-sigs/cloud-provider-azure/commit/2581d18a789a69c5b0f0bba5500f8c97a66e8444"><code>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10620)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10619: fix(clusterapi): check RBAC before syncing infrastructure template cache

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When `getInfrastructureResource` looks up an infrastructure machine template (from `CanScaleFromZero` -> `InstanceCapacity` or `TemplateNodeInfo` -> `InstanceCapacity` / `InstanceSystemInfo`), it creates and starts a...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10619)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10617: feat(vpa-chart): add Cloud Build config and Makefile targets for OCI chart push

Adds Cloud Build configuration (`vertical-pod-autoscaler/charts/cloudbuild.yaml`), Makefile targets (`package-helm`, `push-helm`), and documentation for publishing the `vertical-pod-autoscaler` Helm chart as an OCI artifact to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling/charts/vertica...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10617)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10615: docs(ca): document OCI chart promotion flow and update staging registry refs

Documents the OCI Helm chart staging and `registry.k8s.io` promotion workflow in `cluster-autoscaler/charts/README.md` (following #10559 and kubernetes/test-infra#38182), and updates the remaining `gcr.io/k8s-staging-autoscaling` references in `cluster-autoscaler/cloudprovider/coreweave/README.md` t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10615)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38245: [WIP] Add lws fake GPU e2e presubmit

Adds `pull-lws-test-e2e-main-fake-gpu`, running `make test-e2e-fake-gpu` on CPU-only Kind nodes.

- Places the job after the Volcano and WAS gang scheduling presubmits.
- Matches the gang scheduling presubmits with `always_run: true`, no branch restriction, default timeouts, and 3 CPUs / 10 GiB of m...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38245)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.16.0-rc.4 / 2026-11-03

- [CHANGE] API: The experimental search endpoints now clamp `batch_size` to 1000. #19731
- [CHANGE] Configuration: Default --web.external-url to https when --web.config.file enables TLS. #19241
- [CHANGE] PromQL: Subquery samples are now included in the query TotalSamples and TotalSamplesPerStep statistics, and SamplesRead now counts reads from subqueries with an @ modifier in range queries. #19165
- [CHANGE] Remote write: Stop exposing the deprecated `prometheus_remote_storage_metadata_total...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.16.0-rc.4)

**Metadata:**
- Version: v3.16.0-rc.4
- Published: 2026-11-03
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-04 04:47:57*
