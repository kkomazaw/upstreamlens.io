---
title: "Upstream Github - 2026-10-20"
description: "CNCF upstream activity from github"
pubDate: 2026-10-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "needs-triage", "needs-sig", "sig/storage", "kind/flake", "sig/scheduling", "kind/bug", "sig/network", "pr", "release-note", "size/XS", "approved", "cncf-cla: yes", "sig/release", "needs-priority", "kind/dependency", "area/apiserver", "sig/api-machinery", "size/M", "release-note-none", "needs-ok-to-test", "sig/etcd", "size/L", "size/S", "cncf-cla: no", "area/test", "sig/testing", "kind/failing-test", "kind/cleanup", "sig/auth", "ok-to-test", "area/kubectl", "lgtm", "sig/cli", "priority/important-longterm", "do-not-merge/cherry-pick-not-approved", "triage/accepted", "kind/feature", "sig/apps", "do-not-merge/hold", "wg/workload-aware-scheduling", "size/XL", "wg/device-management", "area/e2e-test-framework", "area/kubelet", "language/ko", "area/localization", "website", "language/en", "do-not-merge/work-in-progress", "minikube", "size/XXL", "area/jobs", "area/config", "test-infra", "sig/contributor-experience", "area/testgrid", "sig/autoscaling", "area/vertical-pod-autoscaler", "autoscaler", "area/helm-charts", "kind/documentation", "area/release-team", "sig-release", "area/release-eng", "ingress-gce", "envoyproxy", "kind/enhancement", "gateway", "containerd", "cncf", "needs-group", "needs-kind", "toc", "sentinel-alert", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143201: upgrade .go-version to 1.27.3

#### What type of PR is this?

/kind dependency
/sig release

#### What this PR does / why we need it:

go1.27.3 is a security release (https://go.dev/doc/devel/release#go1.27.3). Production binaries build with it via GOTOOLCHAIN. kube-cross and go-runner images for 1.27.3 are not published yet and ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143201)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143188: [WAS] KEP-5547: Promote Job Scheduling feature gate to Beta

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Promote `WorkloadWithJob` feature gate to Beta

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5547

#### Special notes for your reviewer:
depends on:
- https://g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143188)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58174: [KEP-3104] Kuberc stable

### Description

Promote kuberc to stable

### Issue

KEP: https://github.com/kubernetes/enhancements/issues/3104

/assign @ardaguclu 
for sig-cli review 


🔗 [Link](https://github.com/kubernetes/website/pull/58174)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3126: Refresh top-level SIG Release process documentation

#### What type of PR is this:

/kind documentation

#### What this PR does / why we need it:

Refreshes the top-level and process documentation:

- Root README: adds the subprojects, the current release directory and the process documents; drops the duplicate `.github/SECURITY.md`.
- `CONTRIBUTING.m...

🔗 [Link](https://github.com/kubernetes/sig-release/pull/3126)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10332: OIDC: Support authentication via JWT client_assertion from projected Kubernetes service account token

**Problem:** 
OIDC in SecurityPolicy only authenticates to the IdP with a **static** clientSecret. This means long-lived secrets must be stored and rotated, even though IdPs like Keycloak, Entra, etc. can trust the cluster's OIDC issuer and JWKS.

**Proposal:**
Envoy: extend the OAuth2 filter (relat...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10332)

**Metadata:**
- Created: 2026-10-19
- Comments: 0
- State: open

### cncf/toc#2335: [docs] Add KubeVirt Graduation Due Diligence

Adds the KubeVirt Graduation Due Diligence document.

Project application: https://github.com/cncf/toc/issues/1822

PR open until November 2nd for TOC and public review/comment.

🔗 [Link](https://github.com/cncf/toc/pull/2335)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143198: Request to backport PR #142819 to v1.35 and v1.36

Would it be possible to backport the PR #142819 that fixes https://github.com/kubernetes/kubernetes/issues/142816 to v1.35 & v1.36 releases?

/sig node

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143198)

**Metadata:**
- Created: 2026-10-19
- Comments: 4
- State: open

### kubernetes/kubernetes#143196: jsonpath: an empty array in one input drops results for all later inputs

#### What happened?

When a JSONPath array subscript is applied to several arrays at once (for example the inner `[*]` in `{.items[*].tags[*]}`), an empty array in one of them stops evaluation. Results from that array onward are dropped silently and no error is returned.

#### What did you expect to...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143196)

**Metadata:**
- Created: 2026-10-19
- Comments: 2
- State: open

### kubernetes/kubernetes#143192: [Flaking Test] TestWaitForAllPodsUnmount - data race

### Which jobs are flaking?

[sig-node] k8s.io/kubernetes/pkg/kubelet: volumemanager

### Which tests are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/142869/pull-kubernetes-unit/2112229750045937664

### Since when has it been flaking?

10/19

### Testgrid link

_No response...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143192)

**Metadata:**
- Created: 2026-10-19
- Comments: 1
- State: open

### kubernetes/kubernetes#143186: [Flaking Test] compositepodgroup_preemptor_with_PDB_violations_and_disruptions

### Which jobs are flaking?

pull-kubernetes-unit

### Which tests are flaking?

[sig-scheduling] k8s.io/kubernetes/pkg/scheduler/framework: preemption

```
{Failed  === RUN   TestPrepareCandidate/metrics:_compositepodgroup_preemptor_with_PDB_violations_and_disruptions_(Async_preemption_enabled:_tru...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143186)

**Metadata:**
- Created: 2026-10-19
- Comments: 1
- State: open

### kubernetes/kubernetes#143182: ServiceCIDRs deleted together are all removed while Services still use their IP addresses

### What happened?

The ServiceCIDR controller keeps its finalizer on a deleted ServiceCIDR while it has IP addresses that no other ServiceCIDR covers. But `canDeleteCIDR` (`pkg/controller/servicecidrs/servicecidrs_controller.go`) also counts other ServiceCIDRs that are being deleted. So when overla...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143182)

**Metadata:**
- Created: 2026-10-19
- Comments: 1
- State: open

### kubernetes/kubernetes#143200: storage/etcd3: let tests wait for stopped watches to finish

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

`watchChan.Stop()` in `staging/src/k8s.io/apiserver/pkg/storage/etcd3/watcher.go` only cancels the watch context and returns immediately. It does not wait for the `run` goroutine to exit. As a re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143200)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143199: apiextensions: re-check CRD names that were never accepted

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`NamingConditionController.sync()` returns early when `spec.names` equals `status.acceptedNames`. That skip was added in 2bf66c377d6 as an optimisation, but it assumes equal names were accepted. Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143199)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143197: jsonpath: keep evaluating remaining inputs after an empty array

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`evalArray` returned as soon as one input array produced an empty range, so every later input was skipped. For example `{.items[*].tags[*]}` printed only the tags of items before the first item with `tags: []`. This ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143197)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143195: switch flexvolume tests to hostexec

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143195)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143193: Remove KMSv2 key_id_hash metrics and RecordKeyID lock

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

This PR continues #136354 by @pmengelbert and addresses the review feedback in https://github.com/kubernetes/kubernetes/pull/136354#pullrequestreview-4341670129. The removal of `key_id_hash_total` is Pe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143193)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143191: [release-1.37] fix: extend csrf filter for kubectl proxy

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Since the creation of `kubectl proxy` more paths have been created that would allow for leaking administrative ports. This PR adds a filter to ensure that the new paths are filtered properly.

#### Does this PR intro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143191)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143190: [release-1.36] fix: extend csrf filter for kubectl proxy

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Since the creation of `kubectl proxy` more paths have been created that would allow for leaking administrative ports. This PR adds a filter to ensure that the new paths are filtered properly.

#### Does this PR intro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143190)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143189: [release-1.35] fix: extend csrf filter for kubectl proxy

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Since the creation of `kubectl proxy` more paths have been created that would allow for leaking administrative ports. This PR adds a filter to ensure that the new paths are filtered properly.

#### Does this PR intro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143189)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143185: servicecidrs: don't count deleting ServiceCIDRs as covering IPs

#### What type of PR is this?

/kind bug
/sig network

#### What this PR does / why we need it:

`canDeleteCIDR` let a ServiceCIDR go when another ServiceCIDR contained its range or its IPs, even if that other one was being deleted too. ServiceCIDRs deleted together (same range, or a range and a sma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143185)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143184: scheduler: Name the parent PodGroup in Pod scheduling status instead of copying its reason

#### What type of PR is this?
/kind feature
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
When a Pod can't be scheduled because of its PodGroup, its `PodScheduled` condition now names the PodGroup instead of copying the PodGroup's message:
| PodGroup | Before...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143184)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143183: scheduler: Improve PlacementFeasible's status message

#### What type of PR is this?
/kind feature
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
Makes the GangScheduling `PlacementFeasible` status easier to read. The old counts don't add up to the threshold, which suggests the group has too few members.
- Before:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143183)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143181: scheduler: Skip flaky Scheduled condition checks in TestCPGScheduling

#### What type of PR is this?
/kind flake
/kind bug
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
`TestCPGScheduling` flakes: a later scheduling cycle of the same hierarchy can overwrite a group's `InitiallyScheduled=True` with `False` before the scheduler's ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143181)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143179: Fix data race in fakeVolumeHost.GetNodeLabels

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

`fakeVolumeHost.GetNodeLabels()` lazily initializes the `nodeLabels` field without synchronization. The operation executor calls it from `checkNodeAffinity` during `MountVolume`, so concurrent mounts in tests race ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143179)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143178: cacher: guard initial events bookmark with isListWatchRequest in Watch

setInitialEventsEndBookmarkIfRequested checked the same SendInitialEvents and AllowWatchBookmarks conditions as isListWatchRequest. Check isListWatchRequest in Watch alongside getBookmarkAfterResourceVersionLocked and rename the helper to setInitialEventsEndBookmark.

/kind cleanup

```release-note
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143178)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143176: move hostexec to e2e framework

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143176)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143174: [InPlaceNodeResourceResize] kubelet: Handle in-place pod resizes on node capacity mutations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143174)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143170: scheduler: precompute scalar resource flags in resource allocation scorer

#### What type of PR is this?

/kind cleanup
/sig scheduling

#### What this PR does / why we need it:

`calculateNodeAllocatableRequest` calls `schedutil.IsScalarResourceName` for every configured resource on every pod/node pair. For extended resources (e.g. `nvidia.com/gpu`) that goes throu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143170)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143167: Read snapshot outside the lock

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143167)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58168: [ko] Translate content/en/docs/concepts/workloads/pods /advanced-pod-config Into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/58168)

**Metadata:**
- Created: 2026-10-19
- Comments: 1
- State: open

### kubernetes/minikube#23899: ISO: Add toolchain workflow

Add .github/workflows/toolchain.yml with workflow_dispatch trigger and matrix build for amd64/arm64 on native runners. This build the toolchain which will be used to build the ISO.

Part of #23220

🔗 [Link](https://github.com/kubernetes/minikube/pull/23899)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#38115: WIP: Update kubernetes-csi jobs for K8s 1.37

Update kubernetes-csi jobs for K8s 1.37.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38115)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38111: Use 30/30/30 days triage intervals for Kueue PRs

#### What this PR does / why we need it?

The org-wide triage robot uses a 90d/30d/30d (stale/rotten/close) inactivity schedule for PRs. Given Kueue's current PR load (329 open PRs, 98 of them inactive for more than 30d), this is too lenient, so this PR switches Kueue PRs to a 30d/30d/30d schedule...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38111)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38109: Add presubmit to run build, lint, and tests on model-serving-signals PRs

Adds pull-model-serving-signals-test, an always_run presubmit for kubernetes-sigs/model-serving-signals. It runs make test on every PR to main, which covers go fmt, go vet, make lint, make verify-boilerplate, and go test ./....

Until now the only automation for this repo was the staging image posts...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38109)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10447: build(deps): bump github.com/klauspost/compress from 1.20.1 to 1.20.3 in /vertical-pod-autoscaler

Bumps [github.com/klauspost/compress](https://github.com/klauspost/compress) from 1.20.1 to 1.20.3.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/klauspost/compress/releases">github.com/klauspost/compress's releases</a>.</em></p>
<blockquote>
<h2>v1.20.3<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10447)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10446: build(deps): bump the non-kubernetes group across 2 directories with 25 updates

Bumps the non-kubernetes group with 12 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) | `1.24.1` | `1.25.0` |
| [github.com/prometheus/common](https://github.com/prom...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10446)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10445: build(deps): bump the patch-updates group across 2 directories with 16 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: [github.com/fxamacker/cbor/v2](https://github.com/fxamacker/cbor).
Bumps the patch-updates group with 16 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [gith...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10445)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10444: build(deps): bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10444)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10443: build(deps): bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10443)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10442: vpa: reject conflicting recommender PDB minAvailable and maxUnavailable

Setting only `recommender.podDisruptionBudget.maxUnavailable` renders both `minAvailable: 1` (the chart default) and `maxUnavailable`, which produces a PodDisruptionBudget the API server rejects.

This adds the same render-time validation the admission-controller and updater PDB templates already ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10442)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3124: Refresh Release Engineering handbooks and templates

#### What type of PR is this:

/kind documentation

#### What this PR does / why we need it:

Refreshes the Release Engineering handbooks, reference docs and issue templates:

- Bumps the conventions block in `release-manager.md` to v1.38 and uses `v1.XX` / `<placeholder>` examples elsewhere.
- Fixe...

🔗 [Link](https://github.com/kubernetes/sig-release/pull/3124)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3282: De-synchronize periodic resyncs: --sync-period-jitter-factor and --l4-resync-spread-factor

client-go schedules informer resyncs as now + period with no jitter, so every
controller instance keeps a fixed resync phase. When many instances share a
cloud project/region (one per cluster), their phases can become aligned,
e.g. after all of them recover from the same cloud API outage, and the...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3282)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14426: CRI: containerd restart during StartContainer leaves a running container without IO, and its task delete then fails forever ("failed to drain init process ... io")

We hit the endless `failed to drain init process <id> io` / `failed to delete task: context deadline exceeded` loop described in #13377, but with a different trigger and without D-state tasks. It happens when containerd is restarted (a normal `systemctl restart containerd`) while a CRI `StartContain...

🔗 [Link](https://github.com/containerd/containerd/issues/14426)

**Metadata:**
- Created: 2026-10-19
- Comments: 0
- State: open

### containerd/containerd#14420: Support configuring the shim API version for downgrade compatibility

### What is the problem you're trying to solve

Our Kubernetes platform uses containerd v1.7.25. We are testing an upgrade to v2.3.3 and a rollback path to v1.7.25, with the goal of keeping existing workloads running throughout both operations.

After rollback, containerd fails to reconnect to shims...

🔗 [Link](https://github.com/containerd/containerd/issues/14420)

**Metadata:**
- Created: 2026-10-19
- Comments: 0
- State: open

### cncf/prow-github-actions#530: Add optional delay for blunderbuss

Adds an optional delay argument for blunderbuss to allow time for specific reviewers to be manually requested rather than potentially unnecessarily pinging unwanted reviewers.

If `delay:` is set, running blunderbuss will defer until `sweep` runs and checks to see if the required amount of time has ...

🔗 [Link](https://github.com/cncf/prow-github-actions/pull/530)

**Metadata:**
- Created: 2026-10-20
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-20 03:21:03*
