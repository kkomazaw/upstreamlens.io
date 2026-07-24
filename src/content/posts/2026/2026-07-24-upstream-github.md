---
title: "Upstream Github - 2026-07-24"
description: "CNCF upstream activity from github"
pubDate: 2026-07-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "autoscaler", "pr", "cncf-cla: yes", "area/vertical-pod-autoscaler", "size/L", "release-note", "approved", "kind/cleanup", "needs-triage", "size/M", "kind/bug", "area/cluster-autoscaler", "release-note-none", "size/XXL", "do-not-merge/work-in-progress", "needs-ok-to-test", "kind/feature", "needs-rebase", "issue", "needs-sig", "sig/api-machinery", "sig/node", "sig/scheduling", "wg/workload-aware-scheduling", "area/kubelet", "size/S", "needs-priority", "kind/api-change", "area/api-validation", "area/test", "sig/autoscaling", "sig/apps", "sig/testing", "lgtm", "kind/failing-test", "wg/device-management", "area/apiserver", "kind/regression", "sig/network", "ok-to-test", "size/XS", "sig/cli", "priority/important-longterm", "area/kubectl", "area/kube-proxy", "kind/flake", "do-not-merge/hold", "area/ipvs", "sig/instrumentation", "kind/documentation", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "website", "language/ko", "area/localization", "sig/docs", "committee/steering", "area/elections", "community", "node-problem-detector", "kind/kep", "enhancements", "containerd", "impact/changelog", "area/snapshotters", "accelerated-container-image", "cncf", "lfx mentorship", "Term 3: Sept-Nov", "2026", "Mentors Confirmed", "Maintainer/Contribex Approved", "Proposal", "Validation Passed", "CNCF Approved", "mentoring"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10044: CA: Add multi-arch image validation script

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10044)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140889: WIP: DNM: KEP-6063: per-pod PID limits - CI signal run

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

**WIP / DNM — opened only to gather CI signal** for the KEP-6063 per-pod PID limit implementation (`spec.resources.limits.pids`, `PerPodPIDLimit` alpha feature gate) plus additional hardening of the limit-only po...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140889)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6256: KEP-2033: KubeletInUserNamespace: drop unneeded label


<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has bee...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6256)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### cncf/mentoring#1960: [CNCF LFX Proposal] Kubernetes - Expand Declarative Validation (DV) in Kubernetes

### CNCF Project

Kubernetes

### Term

2026 Term 3 (Sep-Nov)

### Program Name

Expand Declarative Validation (DV) in Kubernetes

### Program Description

## Description

This mentorship project focuses on advancing the Declarative Validation (DV) framework across the Kubernetes codebase. The proje...

🔗 [Link](https://github.com/cncf/mentoring/issues/1960)

**Metadata:**
- Created: 2026-07-23
- Comments: 15
- State: open

## Updates

### kubernetes/autoscaler: cluster-autoscaler-1.36.1

## Changes by Kind

### Bug or Regression

- CA ProvisioningRequest: Apply Provisioned condition with SSA (#10017, @norbertcyran)
- Scaleway: report node in error as InstanceCreating so CA detects it faster (#10019, @Tomy2e)

# Images

- `registry.k8s.io/autoscaling/cluster-autoscaler:v1.36.1`
- `registry.k8s.io/autoscaling/cluster-autoscaler-arm64:v1.36.1`
- `registry.k8s.io/autoscaling/cluster-autoscaler-amd64:v1.36.1`
- `registry.k8s.io/autoscaling/cluster-autoscaler-s390x:v1.36.1...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.36.1)

**Metadata:**
- Version: cluster-autoscaler-1.36.1
- Published: 2026-07-23
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.35.2

## Changes by Kind

### Bug or Regression

- Azure Cluster Autoscaler now handles VMSS target-size cache failures during delete operations more defensively, preventing negative cached sizes and target-size panics after failed or uncertain VMSS deletes. (#9881, @tallaxes)
- CA ProvisioningRequest: Apply Provisioned condition with SSA (#10026, @AaronLiChen)
- Scaleway: report node in error as InstanceCreating so CA detects it faster (#10018, @Tomy2e)
- Use application/json for ProvisioningR...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.35.2)

**Metadata:**
- Version: cluster-autoscaler-1.35.2
- Published: 2026-07-23
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.34.5

## Changes by Kind

### Bug or Regression

- CA ProvisioningRequest: Apply Provisioned condition with SSA (#10025, @AaronLiChen)
- Scaleway: report node in error as InstanceCreating so CA detects it faster (#10021, @Tomy2e)
- Use application/json for ProvisioningRequest client config (#10015, @AaronLiChen)

# Images

- `registry.k8s.io/autoscaling/cluster-autoscaler:v1.34.5`
- `registry.k8s.io/autoscaling/cluster-autoscaler-arm64:v1.34.5`
- `registry.k8s.io/autoscaling/cluster-autosc...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.34.5)

**Metadata:**
- Version: cluster-autoscaler-1.34.5
- Published: 2026-07-23
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.33.6

## Changes by Kind

### Bug or Regression

- CA ProvisioningRequest: Apply Provisioned condition with SSA (#10024, @AaronLiChen)
- Scaleway: report node in error as InstanceCreating so CA detects it faster (#10020, @Tomy2e)
- Use application/json for ProvisioningRequest client config (#10014, @AaronLiChen)

# Images

- `registry.k8s.io/autoscaling/cluster-autoscaler:v1.33.6`
- `registry.k8s.io/autoscaling/cluster-autoscaler-arm64:v1.33.6`
- `registry.k8s.io/autoscaling/cluster-autosc...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.33.6)

**Metadata:**
- Version: cluster-autoscaler-1.33.6
- Published: 2026-07-23
- Prerelease: No

### kubernetes/autoscaler#10046: Bump to k8s 1.36.3 patch versions

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Bump to latest k8s dependencies prior to the 1.7.1 release

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (past...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10046)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10045: Ensure that VPA checkpoint is loaded in the correct order

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fix regression that causes VPA checkpoints to not get loaded on startup

#### Which issue(s) this PR fixes:

Fixes #10035

#### Special notes for your reviewer:

#### Does this PR introduce a user-facin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10045)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10043: Contextual logging medium PoC

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

🚧 DRAFT / STACKED PR 🚧
Depends on: #9977
This PR migrates logs in `core` directory to contextual logging. The changes were generated automatically with the script.

#### Which issue(s) this PR fixes:...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10043)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140890: WatchList informer retries indefinitely when an Aggregated API server never sends the initial-events-end Bookmark

### What happened?

A kubernetes aggregated API server accepted a WatchList request and sent initial events but never sent the `initial-events-end` Bookmark. The watch connection was open for several minutes and was aborted by API server with error `Timeout or abort while handling`. Since the watch ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140890)

**Metadata:**
- Created: 2026-07-23
- Comments: 2
- State: open

### kubernetes/kubernetes#140884: APF queueset can panic ("slice bounds out of range") and crash the apiserver when a queue holding a lingering request is removed after a DesiredNumQueues reduction

### What happened?

In `staging/src/k8s.io/apiserver/pkg/util/flowcontrol/fairqueuing/queueset/queueset.go`, a request that has finished its main service but still occupies seats during its `AdditionalLatency` (a "lingering" request, e.g. a mutating request whose work estimate reserves seats for its...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140884)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/kubernetes#140881: Exec readiness probes silently broken during graceful pod termination since v1.35 (probe context canceled at teardown)

### What happened?

Since v1.35.0, exec readiness probes stop working the moment a pod begins graceful termination. Every probe attempt fails client-side with `rpc error: code = Canceled desc = context canceled`, the prober discards errored results, and the pod's `Ready` condition stays frozen at wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140881)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/kubernetes#140877: Pod startup increased latency on DRA scale jobs since 07-11

/sig node
/kind bug

Both AWS DRA scalability periodics have been failing every run since 2026-07-11. They were green through 2026-07-09 and haven't recovered since:

- 500: https://testgrid.k8s.io/sig-scalability-aws#ec2-dra-with-workload-master-scalability-500
- 5k: https://testgrid.k8s.io/sig-sca...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140877)

**Metadata:**
- Created: 2026-07-23
- Comments: 9
- State: open

### kubernetes/kubernetes#140875: [Flaky Test] TestPodGroupPreemption/Binding_first_before_preemption_for_basic_policy

### Which jobs are flaking?

pull-kubernetes-integration

- https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/140595/pull-kubernetes-integration/2080275883196682240

(Observed on an unrelated kubelet PR; the failure is independent of that change.)

### Which tests are flaking?

`test/integ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140875)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/kubernetes#140892: kubelet: fix hostUsers default in sysctl allowlist Admit

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140892)

**Metadata:**
- Created: 2026-07-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140891: Validate finalizers on ObjectMeta updates

/kind bug
/sig api-machinery
/area api-validation

#### What this PR does / why we need it:

`ValidateObjectMetaAccessorWithOptsCommon` validates finalizer names and rejects conflicting orphan/foreground deletion finalizers during create validation. `ValidateObjectMetaAccessorUpdate` revalidates the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140891)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140888: Add request metric for the aggregated OpenAPI v2 endpoint

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Counts /openapi/v2 requests in apiserver_request_total, matching OpenAPI v3.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing change?

```release-note
apiserver_request_...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140888)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140886: Revert "DRA ResourceClaim controller: updated mutation cache based on events"

#### What type of PR is this?

/kind bug
/kind failing-test

Performance regression fix (maybe - it's not entirely certain yet).

#### What this PR does / why we need it:

This reverts commit 03c34ede467ea16580beee3937f9997070421529 (only the changes in the controller).

The additional in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140886)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140885: apf: do not remove a queue while a lingering request still holds its seats

## What type of PR is this?

/kind bug

## What this PR does / why we need it

`removeQueueIfEmptyLocked` drops an excess queue when it has no waiting and no executing requests, but it does not check `seatsInUse`. A request that has finished its main service but is still lingering (holding seats dur...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140885)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140883: kubelet/dra: expire device health at its deadline

#### What type of PR is this?

/kind bug
/sig node
/wg device-management

#### What this PR does / why we need it:

DRA device health currently becomes stale only when another plugin response is processed or when Pod status is rebuilt for an unrelated reason. The health deadline itself does ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140883)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140882: kubelet: detach probe workers from the pod sync context

#### What type of PR is this?

/kind bug
/kind regression
/sig node

#### What this PR does / why we need it:

Since #130487 (v1.35.0), probe workers inherit the pod worker's sync context via `probeManager.AddPod(ctx, pod)`. The pod worker cancels that context as soon as a pod begins terminating ("C...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140882)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140880: [KUBELET]: Filter scoped link-local DNS servers

## What type of PR is this?

/kind bug
/sig node
/area kubelet

## What this PR does / why we need it

Fixes an issue where kubelet propagates unusable scoped IPv6 link-local nameservers into pods using `dnsPolicy: Default`.

Today, when kubelet reads the node's resolver configuration, nam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140880)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140879: Revert "Skip DRADeviceTaints upgrade/downgrade test"


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140879)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140878: cli-runtime: include group in resource-not-found error message

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a resource argument includes a group qualifier (for example, `kubectl get pdb.hpa`), `mappingFor()` discarded the group name when handling a `meta.NoMatchError`. As a result, kubectl returned the following...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140878)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140876: DRA: drop AllocationTimestamp when DRADeviceBindingConditions is disa…

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140876)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140874: fix(kubectl): fix top pod --sum column alignment with --no-headers

The `columnWidth` calculation in `PrintPodMetrics` was previously placed inside the `if !noHeaders` block. When `--no-headers` was specified, `columnWidth` failed to account for optional columns (such as `--all-namespaces` or `--containers`), causing the summary line (`--sum`) to be misaligned to th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140874)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140873: Revert e2e test IPVS session affinity timeout changes

#### What this PR does / why we need it:
IPVS doesn't allow session affinity timeouts of less than 120 seconds, but the e2e tests had originally been written under the assumption that we were using a much shorter timeout than that, and using a longer timeout [makes them periodically drop into `[Slo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140873)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140872: workload aware preemption flake:   per-namespace extended resource

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes None

#### Special notes for your reviewer:

A failure: https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-kind-alpha-beta-features/20801...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140872)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140871: Pass clear pod group cycle state in podgroup preemption

#### What type of PR is this?

/kind bug


#### What this PR does / why we need it:

This fixes an potential issue where pod group scheduling algorithm called in pod group preemption overrides something in the original pod group cycle state that can still later be passed to other pod group po...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140871)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140868: client-go: fix event series race in event broadcaster

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140868)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140867: test: add e2e coverage for OOMKilled misclassification with stale counter

Adds e2e_node test coverage for the scenario discussed in #140716 and #140718 — a container whose cgroup has a stale, non-zero cumulative oom_kill counter from an earlier unrelated event, which later exits via a normal SIGTERM (e.g. during drain). Complements #140718's fix by verifying it at the e2e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140867)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140865: Add Argh4k to the SIG Scheduling reviewers

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

I would like to self-nominate myself to become a SIG Scheduling reviewer.

I have been a member of the Kubernetes organization since May 17, 2023: https://github.com/kubernetes/org/issues/4205.

P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140865)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140864: featuregates: log resolved feature gates along with explicit overrides

See while debugging a new feature depending on a feature gate in [kube-proxy , logs show](https://storage.googleapis.com/kubernetes-ci-logs/logs/ci-kubernetes-kind-network-nftables/2080163255812100096/artifacts/kind-worker/pods/kube-system_kube-proxy-fnw2t_473d2a62-d343-4b81-8e2b-4ba947f3f4c3/kube-p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140864)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37527: Split cri-o serial job to filter out slow/disruptive tests

## What this PR does / why we need it

Fix the CRI-O serial job (`ci-node-crio-kubelet-serial`) by filtering out `[Slow]` and `[Disruptive]` tests that were causing timeouts and instability. A new dedicated job is created for those tests.

## Changes

### Existing jobs modified
- **`ci-node-crio-kub...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37527)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56584: fix: `post-website-push-image-k8s-website-hugo` buildx error

**This is a Bug Report**

**Problem:**

#56563 (`manifest unknown` on `make container-serve`) is caused by [`post-website-push-image-k8s-website-hugo`](https://github.com/kubernetes/test-infra/blob/master/config/jobs/image-pushing/k8s-staging-sig-docs.yaml) failing on **every run since at least 2026...

🔗 [Link](https://github.com/kubernetes/website/issues/56584)

**Metadata:**
- Created: 2026-07-24
- Comments: 1
- State: open

### kubernetes/website#56582: [ko] Update content/ko/docs/tasks/access-application-cluster/port-forward-access-application-cluster.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/access-application-cluster/port-forward-access-application-cluster.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/acc...

🔗 [Link](https://github.com/kubernetes/website/issues/56582)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/website#56579: Are Custom Resources extensions of the Kubernetes API?

**This is a Bug Report**

**Problem:**
https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/

This article uses descriptions like this (line 1):

```
Custom resources are extensions of the Kubernetes API.
```

I'd argue this is incorrect.

**Proposed Solution:**

It s...

🔗 [Link](https://github.com/kubernetes/website/issues/56579)

**Metadata:**
- Created: 2026-07-23
- Comments: 2
- State: open

### kubernetes/website#56578: API docs generator: HTML special characters are getting escaped too many times

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

When autogeneratin...

🔗 [Link](https://github.com/kubernetes/website/issues/56578)

**Metadata:**
- Created: 2026-07-23
- Comments: 2
- State: open

### kubernetes/website#56577: "The Absolute Beginner's Guide to Cloud Native" Video section hidden on Mobile

The video section for “Absolute Beginner’s Guide to Cloud Native” is not visible when the website is viewed in portrait mode on a mobile device.

However, when the device is rotated to landscape mode, the video section becomes visible.

**Expected behavior**
The video section should be visible and r...

🔗 [Link](https://github.com/kubernetes/website/issues/56577)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/website#56576: Wrong subject array hyperlink for ClusterRoleBinding and RoleBinding in Api Reference

**This is a Bug Report**

**Problem:**

For ClusterRoleBinding and RoleBinding, the _Subject array_ hyperlink redirects to the subject definition for FlowSchema which isn't the correct object (different structure, lacks the fields: apiVersion, namespace)

Steps to reproduce:
Click on hyperlink _Subj...

🔗 [Link](https://github.com/kubernetes/website/issues/56576)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### kubernetes/website#56583: Reduce Hugo preview image build time and size

### Description

This PR reduces the build time and image size of the container used for local Kubernetes website previews.

The change:

- replaces the Go SDK runtime image with a pinned Alpine runtime image
- downloads the official Hugo Extended release instead of compiling it from source
...

🔗 [Link](https://github.com/kubernetes/website/pull/56583)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9082: [Steering Election 2026] Add voter from approved exception request

This PR adds the following voter from approved exception requests, as of July 23, 2026:
- @lachie83 

/assign @npolshakova @sreeram-venkitesh 

/hold for review and approval from Election Officers

🔗 [Link](https://github.com/kubernetes/community/pull/9082)

**Metadata:**
- Created: 2026-07-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector#1324: Node events are missing from 'kubectl describe node' because involvedObject.uid is not set

### What happened?
NPD successfully creates k8s events for node problems, but NPD-generated events are not shown in the `Events` section of:
```bash
kubectl describe node <node-name>
```

The Events can still be found using `kubectl get events`, but their `involvedObject` does not contain the actual...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/issues/1324)

**Metadata:**
- Created: 2026-07-23
- Comments: 1
- State: open

### containerd/containerd#13835: EROFS image cache

This is an umbrella issue to track erofs cache work:
- [x] Core PR https://github.com/containerd/containerd/pull/13813
- [ ] Enable back parallel unpack https://github.com/containerd/containerd/pull/13826
- [ ] Multi-level cache (allow multiple directories)
- [ ] Fix [remote snapshotter](https://git...

🔗 [Link](https://github.com/containerd/containerd/issues/13835)

**Metadata:**
- Created: 2026-07-23
- Comments: 2
- State: open

### containerd/accelerated-container-image: Development Build

## Bug Fixes
- **convertor**: pass BuildKit attestation manifests through instead of panicking [#379](https://github.com/containerd/accelerated-container-image/pull/379) ([Matt Van Horn](https://github.com/containerd/accelerated-container-image/commit/ea729f29f12ee40b247c39d954157c113abd4de3))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-23
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-24 02:28:44*
