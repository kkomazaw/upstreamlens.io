---
title: "Upstream Github - 2026-08-04"
description: "CNCF upstream activity from github"
pubDate: 2026-08-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "language/en", "pr", "cncf-cla: yes", "size/XS", "lgtm", "sig/docs", "language/ja", "kind/bug", "needs-sig", "sig/architecture", "area/code-organization", "kind/dependency", "sig/network", "kind/flake", "area/test", "sig/node", "size/M", "release-note-none", "approved", "sig/testing", "kind/failing-test", "do-not-merge/work-in-progress", "needs-priority", "sig/api-machinery", "size/S", "area/code-generation", "kind/cleanup", "sig/scheduling", "area/apiserver", "sig/storage", "sig/auth", "sig/apps", "wg/device-management", "area/kubectl", "release-note", "size/L", "sig/cli", "needs-ok-to-test", "ok-to-test", "do-not-merge/needs-sig", "size/XXL", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "sig/autoscaling", "area/kubelet", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "triage/accepted", "do-not-merge/needs-area", "cncf-cla: no", "kind/documentation", "needs-rebase", "cloud-provider-openstack", "committee/steering", "area/elections", "community", "size/XL", "sig/cluster-lifecycle", "sig/scalability", "area/jobs", "area/config", "test-infra", "sig/k8s-infra", "ingress-gce", "containerd", "area/nri", "area/runtime", "release", "accelerated-container-image", "cncf", "kind/subproject", "review/tech", "toc", "review/health", "kind/review"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56774: Update content/en/docs/concepts/security/controlling-access.md

**This is a Feature Request**

**What would you like to be added**

Update the outdated anchor link in content/en/docs/concepts/security/controlling-access.md from:
`#service-accounts-automatically-create-and-attach-secrets-with-api-credentials`

to:
`#serviceaccount-token-secrets`

**Website Link**...

🔗 [Link](https://github.com/kubernetes/website/issues/56774)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/autoscaler#10099: Migration script to notify active PR authors

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10099)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10096: Add Kubernetes 1.35.x compatibility entry to README

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10096)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2260: Proposal: Include Vision and Use Cases in GTR template

Hello folks. I've been reviewing some General Technical Reviews (GTRs) recently and it's notable that [the template](https://github.com/cncf/toc/blob/main/toc_subprojects/project-reviews-subproject/general-technical-questions.md) starts with roadmap questions rather than an overview of the project's...

🔗 [Link](https://github.com/cncf/toc/issues/2260)

**Metadata:**
- Created: 2026-08-03
- Comments: 4
- State: open

## Updates

### kubernetes/website#56786: [ko] Update content/ko/docs/concepts/services-networking/dual-stack.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/dual-stack.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/dual-stack/
-...

🔗 [Link](https://github.com/kubernetes/website/issues/56786)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/website#56783: [ko] Translate content/en/docs/contribute/generate-ref-docs/metrics-reference.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56783)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/website#56781: [ko] Update content/ko/docs/concepts/workloads/autoscaling.md

**This is a Feature Request**

## What would you like to be added

Update the Korean translation of
`content/ko/docs/concepts/workloads/autoscaling.md`
to match the latest English version.

### Website Link

- Korean: https://kubernetes.io/ko/docs/concepts/workloads/autoscaling/
- English: https://k...

🔗 [Link](https://github.com/kubernetes/website/issues/56781)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/website#56779: [ko] translate_dynamic-provisioning_concepts.md

# Description
This PR updates https://github.com/kubernetes/website/blob/main/content/en/docs/concepts/storage/dynamic-provisioning.md



🔗 [Link](https://github.com/kubernetes/website/issues/56779)

**Metadata:**
- Created: 2026-08-03
- Comments: 3
- State: open

### kubernetes/website#56775: [ko] Translate content/en/docs/reference/access-authn-authz/node.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56775)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/website#56780: Fix --cpu-percent flag: remove invalid % suffix in kubectl autoscale examples

### Description

The `--cpu-percent` flag in `kubectl autoscale` expects a plain integer (e.g. `80`), not a percentage string (e.g. `80%`). The docs in the Deployment page had `--cpu-percent=80%` inside a `shell` code block, which would produce the following error if run:

```
error: strconv.ParseIn...

🔗 [Link](https://github.com/kubernetes/website/pull/56780)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141151: volumeattachment could not be cleanup while controller-manager restart after volumeattachment created because of csidriver created delay

### What happened?

1. the pv was added to dsw because of the csidriver notfound
https://github.com/kubernetes/kubernetes/blob/b037c6852709aa22e06432a1bf90275ea510467f/pkg/volume/csi/csi_plugin.go#L858-L863
2. reconciler called AttachVolume, the va was created， but Attach timeout since it was not at...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141151)

**Metadata:**
- Created: 2026-08-04
- Comments: 3
- State: open

### kubernetes/kubernetes#141144: problematic dependency: cyphar.com/go-pathrs

the module `cyphar.com/go-pathrs` comes from:
https://github.com/cyphar/libpathrs/blob/main/go-pathrs/go.mod

the domain is occasionally down and the author wants to migrate it to more stable infra:
https://github.com/cyphar/libpathrs/issues/391#issuecomment-4699917297

```
$ GOPROXY=direct go get c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141144)

**Metadata:**
- Created: 2026-08-03
- Comments: 3
- State: open

### kubernetes/kubernetes#141138: [Flaking Test] [sig-network] LoadBalancers ExternalTrafficPolicy: Local [Feature:LoadBalancer] should work for type=LoadBalancer [Slow]

## Which jobs are failing?
ci-kubernetes-e2e-gce-cos-slow-master

## Which tests are failing?
`[sig-network] LoadBalancers ExternalTrafficPolicy: Local [Feature:LoadBalancer] should work for type=LoadBalancer [Slow]`

[Triage](https://storage.googleapis.com/k8s-triage/index.html?job=%5Eci-kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141138)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/kubernetes#141136: [Flaking Test] [sig-network] LoadBalancers ExternalTrafficPolicy: Local [Feature:LoadBalancer] should only target nodes with endpoints [Slow]

## Which jobs are failing?
ci-kubernetes-e2e-gce-cos-slow-master

## Which tests are failing?
`[sig-network] LoadBalancers ExternalTrafficPolicy: Local [Feature:LoadBalancer] should only target nodes with endpoints [Slow]`

[Triage](https://storage.googleapis.com/k8s-triage/index.html?job=%5Eci-kube...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141136)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/kubernetes#141133: [Flaking Test] [sig-network] LoadBalancers [Feature:LoadBalancer] should be able to change the type and ports of a UDP service [Slow]


### Which jobs are failing?

[ci-kubernetes-e2e-gce-cos-slow-master](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-cos-slow-master)

### Which tests are failing?

[sig-network] LoadBalancers [Feature:LoadBalancer] should be able to change the type and ports of a U...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141133)

**Metadata:**
- Created: 2026-08-03
- Comments: 2
- State: open

### kubernetes/kubernetes#141150: node e2e: remove the CRI-O skip from the memory PSI test

#### What type of PR is this?

/kind failing-test
/sig node

#### What this PR does / why we need it:

Stacked on #141146 (the first commit is that PR; review the last commit only). Draft on purpose: this is the validation vehicle for removing the CRI-O skip, to find out what works and what does not...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141150)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141149: DV: comment erroneous docs for k8s-ip format


/kind bug

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141149)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141148: apiserver: drop hardcoded storage version overrides

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Empties the hardcoded storage version override list, since emulatedStorageVersion already picks the same version for all eleven pinned resources.

The second commit fixes registrytest, which passed a nil example ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141148)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141147: kubectl: propagate PrintObj errors in human-readable output loop

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

In the human-readable output loop of `get.go`'s `Run()`, `printer.PrintObj(info.Object, w)` was called without checking the error return. The function already maintains an `allErrs` slice returned via `utilerrors...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141147)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141146: node e2e: assert memory PSI stall time growth instead of Full.Avg10

#### What type of PR is this?

/kind failing-test
/sig node

#### What this PR does / why we need it:

The test `should report Memory pressure in PSI metrics` asserts that the pod's memory PSI `Full.Avg10` exceeds 0.1 while a dd loop churns file cache against a 200M limit. The assertion depends on p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141146)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141145: golang-client: metrics: Register: Fix incorrect assignment



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141145)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141143: importverifier: improve error handling and add tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141143)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141142: gotemplate: make include and generate errors actionable

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141142)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141140: env: name the offending variable in parse errors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141140)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141139: Extending integration tests for WAP to match ones for pod preemption

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141139)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141137: scheduler: make cache dumper log nodes as struct in JSON, string in text

The cache dumper pre-formatted NodeInfo into a single multi-line string and logged it under the "nodes" key. In JSON logging format this ends up as one escaped string, so consumers cannot query individual fields (e.g. via SQL).

Make the logged value a type that implements both fmt.Stringer and lo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141137)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141135: client-go: replace deprecated wait.PollXxx calls with context-based alternatives

## What

Replace all deprecated `wait.Poll`, `wait.PollImmediate`, and `wait.PollImmediateUntil` calls in `staging/src/k8s.io/client-go/` with the recommended context-based replacements from `k8s.io/apimachinery/pkg/util/wait`.

## Why

These functions are all marked as deprecated:

- `wait.PollImme...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141135)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141134: HPA: preserve spec replicas when average-value metrics are within tolerance

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

For External and Object metrics that use `AverageValue`, the HPA replica
calculator used `scale.Status.Replicas` as the desired count when utilization
was inside the tolerance range.

"Within tolerance" is meant to m...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141134)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141132: kubelet: retry HasDedicatedImageFs on failure without blocking eviction sync loop

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Refactors `HasDedicatedImageFs` error handling in the kubelet eviction manager so that transient failures from `HasDedicatedImageFs` do not block the eviction control loop.

When `HasDedicatedImageFs` returns an erro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141132)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10097: Update README compatibility table for Kubernetes 1.35.x

The Cluster Autoscaler / Kubernetes / Helm chart compatibility table in
the README doesn't yet include an entry for Kubernetes 1.35.x, even
though Helm chart 9.54.0+ has been released supporting CA app version
1.35.0.

Fix: https://github.com/kubernetes/autoscaler/pull/10096

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10097)

**Metadata:**
- Created: 2026-08-03
- Comments: 2
- State: open

### kubernetes/autoscaler#10103: Bump the non-kubernetes group across 2 directories with 26 updates

Bumps the non-kubernetes group with 3 updates in the /vertical-pod-autoscaler directory: [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang), [github.com/go-openapi/swag](https://github.com/go-openapi/swag) and [go.yaml.in/yaml/v3](https://github.com/yaml/go-yaml).
Bum...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10103)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10102: Bump the patch-updates group across 1 directory with 2 updates

Bumps the patch-updates group with 2 updates in the /vertical-pod-autoscaler directory: [github.com/go-logr/logr](https://github.com/go-logr/logr) and [go.yaml.in/yaml/v3](https://github.com/yaml/go-yaml).

Updates `github.com/go-logr/logr` from 1.4.3 to 1.4.4
<details>
<summary>Release notes</summa...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10102)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10101: VPA recommender: fix three memory leaks with large clusters / Prometheus history

# Warning! It's AI assisted PR

## Summary
- Honor `--memory-saver` in `InitFromHistoryProvider`: previously the full cluster history (all pods, all label sets) was loaded from Prometheus on startup regardless of memory saver mode, defeating its purpose.
- Garbage collect `clusterState.labelSetM...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10101)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10100: VPA recommender: backfill checkpoint when a VPA is newly tracked

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The recommender loads old checkpoint data only one time, when it starts. It uses this data to fill in history for each VPA.

But there is a problem: if a VPA changes its `.spec.recommenders` field later (for example,...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10100)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10098: VPA: skip non-increasing OOM samples across aggregation windows

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When memory is stuck at `maxAllowed`, each OOM still inserts the same synthetic sample (`request × oom-bump-up-ratio`) after every aggregation window. That re-seeds the histogram and keeps `uncappedTarget` much highe...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10098)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10095: VPA recommender: keep checkpoint history across target selector flips

#### What this PR does / why we need it

With checkpoint storage, a brief failure to resolve a VPA `targetRef`
(recommender start before controller informers are ready, or the target
workload gone during node consolidation) made `getSelector` return
`labels.Nothing()` (empty selector).

`AddOrUpdate...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10095)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10094: VPA InPlace: treat ResizeError as deferred, not infeasible

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Kubelet `ResizeStatusError` (for example a temporary missing memory usage reading) was mapped to `InPlaceInfeasible`. That stores the recommendation in `infeasibleAttempts`. The Updater only retries when a later reco...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10094)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3156: Refactor/octavia loadbalancer

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3156)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9101: Add candidate profile for Kaslin Fields for 2026

Added candidate information for Kaslin Fields, including background, accomplishments, and goals for the Kubernetes Steering Committee.

Fixes #9084


🔗 [Link](https://github.com/kubernetes/community/pull/9101)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37609: align scalability presets

align ec2 and gce scale jobs to use the same set of presets

The presets are:
- a common kops preset that holds shared env variables we want to set for all scale jobs
- a cloud specific preset
- 100 node preset
- 5000 node preset

Also, I renamed the AWS jobs to match the new approach of app...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37609)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37608: bump memory for registry.k8s.io presubmits

https://github.com/kubernetes/registry.k8s.io/pull/330 is causing OOMs, so bumping memory requests

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37608)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3189: Prevent RESOURCE_IN_USE reconciliation loop on ip-collection-v6 updates

When updating networking.gke.io/ip-collection-v6 on an existing Service, GCE rejects deleting the Address if an existing ForwardingRule still references it, causing an infinite RESOURCE_IN_USE loop. This change:
- Deletes the existing IPv6 ForwardingRule before calling HoldAddress() when ip-collect...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3189)

**Metadata:**
- Created: 2026-08-04
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13901: NRI external plugins do not receive CreateContainer lifecycle events (pre-launched plugins work)

## Bug Description

External NRI plugins connected via the NRI socket (`/var/run/nri/nri.sock`) successfully register and synchronize with containerd, but never receive `CreateContainer` (or `RunPodSandbox`, `StartContainer`, `PostCreateContainer`) lifecycle callbacks during CRI-initiated container ...

🔗 [Link](https://github.com/containerd/containerd/issues/13901)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### containerd/containerd#13893: Possible orphan overlay rootfs mounts under /run/containerd/io.containerd.runtime.v2.task after long-running Kubernetes workload

### Description

## Description

We are observing a large number of orphan overlay rootfs mounts on a long-running Kubernetes node using containerd.

The node has been running continuously for about one year and executes a large number of short-lived AI training jobs. Pods are created and deleted co...

🔗 [Link](https://github.com/containerd/containerd/issues/13893)

**Metadata:**
- Created: 2026-08-03
- Comments: 0
- State: open

### containerd/accelerated-container-image: v1.4.4

## Bug Fixes
- **convertor**: pass BuildKit attestation manifests through instead of panicking [#379](https://github.com/containerd/accelerated-container-image/pull/379) ([Matt Van Horn](https://github.com/containerd/accelerated-container-image/commit/ea729f29f12ee40b247c39d954157c113abd4de3))

## Builds
- **deps**: bump go.opentelemetry.io/otel from 1.39.0 to 1.41.0 [#352](https://github.com/containerd/accelerated-container-image/pull/352) ([dependabot[bot]](https://github.com/containerd/accele...

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/v1.4.4)

**Metadata:**
- Version: v1.4.4
- Published: 2026-08-03
- Prerelease: No

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump github.com/containerd/containerd/v2 in /ci/e2e [#376](https://github.com/containerd/accelerated-container-image/pull/376) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/8e24eff74101f88506c95bc2b77545d7bc219b84))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-03
- Prerelease: Yes

### cncf/toc#2259: [HEALTH]: Oxia - Onboarding Deadline Approaching (10+ Months)

### Purpose of This Issue

This Project Health Issue has been filed to ascertain the current activity and health of the project so the TOC may identify the appropriate support and guidance for the project to return to an optimal state of health or determination of archival.

It is intended to **init...

🔗 [Link](https://github.com/cncf/toc/issues/2259)

**Metadata:**
- Created: 2026-08-03
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-04 02:13:31*
