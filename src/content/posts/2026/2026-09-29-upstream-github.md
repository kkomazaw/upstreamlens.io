---
title: "Upstream Github - 2026-09-29"
description: "CNCF upstream activity from github"
pubDate: 2026-09-29
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "lgtm", "cncf-cla: yes", "size/XS", "sig/testing", "area/jobs", "area/config", "test-infra", "do-not-merge/work-in-progress", "approved", "sig/scalability", "issue", "needs-triage", "website", "language/ko", "area/localization", "kind/feature", "size/S", "sig/docs", "kind/flake", "sig/apps", "kind/documentation", "sig/api-machinery", "area/admission-control", "kind/bug", "sig/node", "kind/cleanup", "size/M", "release-note-none", "ok-to-test", "needs-priority", "cncf-cla: no", "needs-ok-to-test", "area/kubelet", "size/L", "do-not-merge/release-note-label-needed", "release-note", "kind/api-change", "area/code-generation", "sig/windows", "sig/network", "sig/architecture", "area/apiserver", "sig/scheduling", "area/release-eng", "sig/release", "area/test", "sig/auth", "do-not-merge/cherry-pick-not-approved", "wg/device-management", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "needs-rebase", "sig/cli", "do-not-merge/hold", "sig/cloud-provider", "area/dependency", "kind/dependency", "sig/instrumentation", "sig/etcd", "sig/storage", "kind/kep", "enhancements", "sig/multicluster", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "kube-openapi", "prometheus", "release", "common", "envoyproxy", "gateway", "cncf", "kind/initiative", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142506: fix: create copy of spec to prevent data race

### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

`TestExpectationsOnRecreate` flakes in CI with a data race:

- `FakePodControl.CreatePodsWithGenerateName` sets `spec.GenerateName` on the template it is given.
- The ReplicaSet controller passes `&rs.Spec....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142506)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142490: KEP-6032 nftables localhost userspace proxy to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142490)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6440: Moving KEP-2699 from implementable to withdrawn

- One-line PR description:
Moving KEP-2699 from implementable to withdrawn

<!-- link to the k/enhancements issue -->
- Issue link: #2699 

<!-- other comments or additional information -->
- Other comments:
The original work for this is in kubernetes/kubernetes#108838. This was part of the ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6440)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6436: KEP-4322: clarify cluster manager label requirements

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6436)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/test-infra#37934: kube-state-metrics: push images with the git dir, from main

kube-state-metrics is moving its container builds to goreleaser/ko (kubernetes/kube-state-metrics#2956). goreleaser needs the `.git` directory to work out the version, so this passes `--with-git-dir` to the image-builder in `post-kube-state-metrics-push-images`.

The job's branch filter also changes...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37934)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37928: Increase write throughput to 1500 qps

/assign @Jefftree 



🔗 [Link](https://github.com/kubernetes/test-infra/pull/37928)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#57802: [ko] Update outdated self-healing documentation

The Korean localization of `content/ko/docs/concepts/architecture/self-healing.md`
is out of date compared with the latest English version.

I would like to update the Korean translation to match the latest English content.

🔗 [Link](https://github.com/kubernetes/website/issues/57802)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57801: [ko] Update node shutdown documentation

The Korean translation of the Node Shutdown documentation is out of sync with the latest English version.

I would like to update the following file to reflect the latest changes in the English documentation:

- `content/ko/docs/concepts/cluster-administration/node-shutdown.md`

The update will incl...

🔗 [Link](https://github.com/kubernetes/website/issues/57801)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57798: [ko] Update cluster administration overview

The Korean translation of the Cluster Administration overview is out of sync with the latest English version.

I would like to update the following file to reflect the latest changes in the English documentation:

- `content/ko/docs/concepts/cluster-administration/_index.md`

The update will include...

🔗 [Link](https://github.com/kubernetes/website/issues/57798)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57795: [ko] Translate content/en/docs/tutorials/stateless-application/canary-deployment.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57795)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57787: [ko] Translate content/en/docs/tasks/configure-pod-container/enforce-standards-namespace-labels.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/tasks/configure-pod-container/enforce-standards-namespace-labels.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-namespace-labels/

...

🔗 [Link](https://github.com/kubernetes/website/issues/57787)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57784: Fix feature-state rendering when nested in note or tab.

### Description

Fix feature-state rendering when nested in note or tab.

In those cases the inner content is rendered as md (`.Inner | markdownify` in note).
The shortcode output started with an indented "<div" and contained whitespace only lines, so md treated it as an indented code block.
...

🔗 [Link](https://github.com/kubernetes/website/pull/57784)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142505: [Flaking Test] [sig-apps] k8s.io/kubernetes/pkg/controller.replicaset TestExpectationsOnRecreate

### Which jobs are flaking?

ci-kubernetes-unit-1-36

### Which tests are flaking?

k8s.io/kubernetes/pkg/controller/replicaset replicaset

### Since when has it been flaking?

[2026-09-28, 2:33:21 p.m.](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-unit-1-36/2104640502237237248)...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142505)

**Metadata:**
- Created: 2026-09-29
- Comments: 2
- State: open

### kubernetes/kubernetes#142501: Document that matchConditions cannot use namespaceObject or variables

#### What happened?

The docs imply that admission policy `matchConditions` can use every CEL variable that validation expressions can. Two of those variables don't work in match conditions:

1. **`namespaceObject` compiles but is always `null`.** The CEL environment declares `namespaceObject` for e...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142501)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/kubernetes#142489: DRA: ResourceSlice validation panics on a zero with an extreme negative exponent in capacity.requestPolicy.validValues

#### What happened?

With `DRAFractionalCapacityRange` enabled (beta, on by default since 1.37), validating a ResourceSlice whose device capacity has `requestPolicy.validValues` containing `0e-2147483647` panics inside `ValidateResourceSlice`:

```
runtime error: makeslice: cap out of range
```

`Pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142489)

**Metadata:**
- Created: 2026-09-28
- Comments: 2
- State: open

### kubernetes/kubernetes#142507: Remove node lifecycle taint queue entries when nodes are deleted

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142507)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142504: kubelet: defer to pod grace period when eviction-max-pod-grace-period is negative

#### What type of PR is this?
/kind bug
/sig node

#### What this PR does / why we need it:
The `--eviction-max-pod-grace-period` flag is documented as: "Maximum
allowed grace period (in seconds) to use when terminating pods in
response to a soft eviction threshold being met. If negative, def...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142504)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142503: Fix failure to create new Pods after deleting and recreating a DaemonSet

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142503)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142502: Document that matchConditions cannot use namespaceObject or variables

#### What type of PR is this?

/kind documentation
/sig api-machinery
/area admission-control

#### What this PR does / why we need it:

Documents on `MatchCondition.expression` that match conditions cannot use `namespaceObject` or `variables`.

- `namespaceObject` is declared in the CEL environment...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142502)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142500: Promote Windows CPUAndMemoryAffinity to beta

Promote the WindowsCPUAndMemoryAffinity feature gate to beta in v1.38 and enable it by default.

The gate remains configurable so operators can disable the feature for rollback. Regenerate the feature lifecycle references to reflect the new stage and default.

<!--  Thanks for sending a pull req...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142500)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142499: Remove unused pkg/util/interrupt and pkg/util/bandwidth packages

#### What type of PR is this?

/kind cleanup
/sig architecture
/sig network

#### What this PR does / why we need it:

Removes two packages under `pkg/util` that are no longer used:

- `pkg/util/interrupt`: has no importers in the repo. kubectl, the only consumer of this functionality, uses its own ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142499)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142498: WIP: cacher: optimize cacheWatcher event loop

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Simplifies and optimizes the `cacheWatcher` event processing loop by replacing `select` with `for range` and `context.AfterFunc`.

#### Which issue(s) this PR fixes:

Fixes #

#### Special notes for your reviewer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142498)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142497: [WIP] Skip converting live managedFields to smd typed on update (defer restore)

WIP

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Skip converting the live object's `metadata.managedFields` to structured-merge-diff typed values during `Update`.

#### Which issue(s) this PR is related to:

Part of #142228
Alternative to #142427

#### Spe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142497)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142496: scheduler: fix grammar in placementNodes comment

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Fixes a grammar error in the `placementNodes.nodeInfoSet` comment in `pkg/scheduler/backend/cache/snapshot.go` ("belongs the the placement" -> "belongs to the placement"). Comment-only change, no behavior change....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142496)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142495: kube-scheduler/framework: import schedulerapi instead of structured

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`k8s.io/kube-scheduler/framework` needs only the `DeviceID` and `AllocatedState` aliases, so import `dynamic-resource-allocation/structured/schedulerapi` (apimachinery only) instead of `structured` (CEL sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142495)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142494: Use snapshot generated for snapshotter to serve reads without lock

First major change in watch cache. Serve latest immutable snapshot from atomic instead of from under lock. 
Unblocks future work in watch cache to remove lock from waitUntilFreshLocked path.

/kind feature

```release-note
NONE
```

/cc @wojtek-t @mborsz 

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142494)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142493: Implement GetOldObject too for VersionedAttributes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142493)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142492: Automated cherry pick of #142289: DRA: include extended resource claims in pod claim iteration and taint eviction

Cherry pick of #142289 on release-1.37.

#142289: DRA: include extended resource claims in pod claim iteration and taint eviction

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

**Backpo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142492)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142491: dra: document that counters of allocated devices are not rechecked

#### What type of PR is this?

/kind cleanup
/sig scheduling
/sig node
/wg device-management

#### What this PR does / why we need it:

The structured allocators read the `consumesCounters` (and, in the experimental allocator, the
`compatibilityGroups`) of already allocated devices from th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142491)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142485: [WIP] Bump to grpc v1.86.0

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

This bumps grpc to v1.86.0, getting rid of a number of unwanted cloud-related dependencies: github.com/google/s2a-go, github.com/googleapis/enterprise-certificate-proxy, github.com/googlea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142485)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142484: Measure conflicts on GuaranteedUpdate method

/kind feature

```release-note
Expose apiserver_storage_update_attempts and apiserver_storage_update_conflicts_total metrics about number of conflicts encountered when attempting object update.
```

/cc @Jefftree @richabanker 

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142484)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142481: Bump golangci-lint to v2.14.0, fix remaining %d issues

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

This bumps golangci-lint v2.14.0 and fixes issues with %d in format strings used with pointers. %d doesn't dereference pointers, so pointers are logged as such rather than showing the valu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142481)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142480: subpath: ensure permissions are corrected for existing subpath directories

#### What type of PR is this?

/kind bug
/sig storage
/sig node

#### What this PR does / why we need it:

When `SafeMakeDir` creates a new `subPath` directory, it initially creates it with `syscall.Mkdirat` masked by the kubelet process's umask (`0022` -> `0755`), and subsequently updates it to the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142480)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9995: Image promotion for gateway-api v0.2.0

Image promotion for gateway-api v0.2.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork rikatz --project gateway-api --staging-repo us-central1-docker.pkg.dev/k8s-staging-images/gateway-api --reviewers "@rikatz @youngnick @robscott @snorwin" --tag v0.2.0 --image conformance/echo-...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9995)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-openapi#643: Deprecate pkg/openapiconv

Marks OpenAPI v2 to v3 conversion in pkg/openapiconv as deprecated.

Related to https://github.com/kubernetes/kube-openapi/issues/640

🔗 [Link](https://github.com/kubernetes/kube-openapi/pull/643)

**Metadata:**
- Created: 2026-09-29
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.72.0

NOTE:
* This release bumps go.mod to 1.26 -- mostly due to /x Go packages requiring 1.26 as well.
*  This is the first release with the experimental support of OpenMetrics 2 encoding.

## What's Changed
* build(deps): bump the codeql group with 4 updates by @dependabot[bot] in https://github.com/prometheus/common/pull/980
* feat: implement histogram and gauge histogram support for OpenMetrics 2.0 by @dashpole in https://github.com/prometheus/common/pull/964
* chore: Update gofumpt config ...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.72.0)

**Metadata:**
- Version: v0.72.0
- Published: 2026-09-28
- Prerelease: No

### envoyproxy/gateway: v1.9.2

# Release Announcement

Check out the [v1.9.2  release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.9.2) to learn more about the release.


🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.2)

**Metadata:**
- Version: v1.9.2
- Published: 2026-09-28
- Prerelease: No

### envoyproxy/gateway: v1.8.5

# Release Announcement

Check out the [v1.8.5 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.8.5) to learn more about the release.


🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.8.5)

**Metadata:**
- Version: v1.8.5
- Published: 2026-09-28
- Prerelease: No

### cncf/toc#2313: [Initiative]: Interroperability best-practices for AI agents harnesses

### Name

Interroperability best-practices for AI agents harnesses

### Short description

Provide best practices to CNCF maintainers so that different AI agent harnesses used by them and contributors work consistently within the same source repository.

### Responsible group

TAG Developer Experien...

🔗 [Link](https://github.com/cncf/toc/issues/2313)

**Metadata:**
- Created: 2026-09-28
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-29 04:09:43*
