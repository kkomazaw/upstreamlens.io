---
title: "Upstream Github - 2026-09-15"
description: "CNCF upstream activity from github"
pubDate: 2026-09-15
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "kind/flake", "needs-triage", "kind/bug", "needs-sig", "sig/autoscaling", "sig/testing", "area/e2e-test-framework", "sig/node", "pr", "sig/scheduling", "size/M", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "needs-priority", "wg/device-management", "area/kubelet", "release-note", "size/L", "kind/api-change", "kind/feature", "sig/auth", "sig/apps", "area/test", "kind/failing-test", "approved", "release-note-none", "do-not-merge/invalid-commit-message", "area/code-generation", "kind/cleanup", "area/apiserver", "size/XXL", "do-not-merge/needs-kind", "size/S", "wg/workload-aware-scheduling", "size/XL", "sig/storage", "sig/scalability", "area/provider/gcp", "sig/cloud-provider", "area/vertical-pod-autoscaler", "ok-to-test", "triage/accepted", "autoscaler", "size/XS", "area/cluster-autoscaler", "do-not-merge/needs-area", "triage/needs-information", "website", "language/ko", "area/localization", "language/de", "prometheus", "release", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142096: WIP KEP-6318: Allow in-place updates to container probes- #6323

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142096)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142093: [WIP] KEP-3619:  Remove locked GA SupplementalGroupsPolicy feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142093)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142110: [Flaky test] [sig-api-machinery] k8s.io/kubernetes/test/integration/apiserver.oidc

### Which jobs are flaking?

* [sig-release-master-blocking#integration-master](https://testgrid.k8s.io/sig-release-master-blocking#integration-arm64-master&exclude-non-failed-tests=)

### Which tests are flaking?

* [[sig-api-machinery] k8s.io/kubernetes/test/integration/apiserver.oidc](http://prow...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142110)

**Metadata:**
- Created: 2026-09-15
- Comments: 1
- State: open

### kubernetes/kubernetes#142107: On clicking User Case Studies 404 poping up

### What happened?

https://kubernetes.io/case-studies/ gives 404

### What did you expect to happen?

Should open user case studies page

<img width="1605" height="723" alt="Image" src="https://github.com/user-attachments/assets/aa040e97-108e-487a-a5a4-44ee31185dff" />

### How can we reproduce it ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142107)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142105: [Declarative Validation] Support config-driven custom formats and named validations

## Problem
Downstream consumers of Declarative Validation (e.g., Substrate) need a low-friction way to define reusable custom formats (like URI) and named validations. Today, `+k8s:customValidation` requires writing a separate wrapper function for every field, and we want to avoid maintaining custom...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142105)

**Metadata:**
- Created: 2026-09-14
- Comments: 5
- State: open

### kubernetes/kubernetes#142101: Eliminate the usage of empty/short secrets for `ComputeDetachedSignature()` for kubeadm/cluster-bootstrap operations

As part of the review process for https://github.com/kubernetes/kubernetes/pull/142012 we found that existing secrets for computing detached signatures using https://github.com/kubernetes/kubernetes/blob/467cf7b5cb246a95604681915f3b84f538c0110b/staging/src/k8s.io/cluster-bootstrap/token/jws/jws.go#L...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142101)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142100: OIDC token authenticator should expire cached JWKs based on server-provided cache headers

During the review process of https://github.com/kubernetes/kubernetes/pull/142012 we found that JWKs don't have an expiration associated with them, meaning that there is no mechanism for a JWK publisher to indicate a maximum time in which that JWK data should remain valid before needing a cache refr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142100)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142098: CVE-2026-76654: placeholder

Details will be populated after public release.

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142098)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142097: CVE-2026-2270: placeholder

Details will be populated after public release.

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142097)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142094: [Flaking test] [sig-autoscaling] [Feature:HPA] "Should scale with a CRD targetRef": conflict updating the custom resource in GetReplicas is fatal

### Which jobs are flaking?

All four upstream jobs that run `[Feature:HPA]`:

- `ci-kubernetes-e2e-autoscaling-hpa-cpu`, `ci-kubernetes-e2e-autoscaling-hpa-cpu-alpha-beta` (daily periodics, testgrid `sig-autoscaling-hpa-periodics`)
- `pull-kubernetes-e2e-autoscaling-hpa-cpu`, `pull-kubernetes-e2e-a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142094)

**Metadata:**
- Created: 2026-09-14
- Comments: 3
- State: open

### kubernetes/kubernetes#142091: [Flaking Test] [sig-node] ImageGCNoEviction: DiskPressure not encountered on ci-node-crio-eviction

### Which jobs are flaking?

`ci-node-crio-eviction` (prow job history: https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-node-crio-eviction)

Failed runs in the last two weeks (2026-08-30 to 2026-09-14, 79 runs total):

- https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-node-crio-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142091)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/kubernetes#142109: scheduler: scope DRA pod-update requeue to the updated pod

DRA: limit re-evaluated pod to be the one that caused status update

Match the evaluated pod against the updated pod by UID so only that pod is requeued (independent of the SchedulerPreQueueingHints gate), and register preQueueingHintForPodUpdate to narrow the event's collection to that pod.

KE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142109)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142108: update podcertificaterequest and podcertificateprojection to allow setting ML-DSA algorithms

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Adds support for allowing the usage of ML-DSA algorithms to sign the PKCS#10 CSR in `PodCertificateRequest`s.

Adds support for setting ML-DSA algorithm key types to the pod certificate ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142108)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142106: e2e: check pod resized in WaitForPodResizeActuation



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142106)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142104: Make Quantity.AsInt64 to return the same result regardless of backing field

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Before this PR, a call to `Cmp` changes the behavior of `AsInt64`:

```
q := resource.MustParse("50k")
q.AsInt64()                      // (50000, true)
q.Cmp(resource.MustParse("8Ei"))
q.AsInt64()       ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142104)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142103: scheduler: requeue on affinity peer delete for self-affinity QueueingHint

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

InterPodAffinity's QueueingHint for assigned-pod **delete** only returns `Queue` when the deleted pod is relevant to **anti-affinity**. Deleting the last pod that matched a pending pod's **required affinity** is igno...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142103)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142102: validation-gen: require declarative enum tags for OpenAPI enums

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142102)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142099: test(cel): compare schemaless and unstructured value semantics

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142099)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142095: test/e2e/autoscaling: deflake HPA CRD targetRef test by merge-patching CR status.replicas

#### What type of PR is this?

/kind flake
/sig autoscaling
/sig testing
/area e2e-test-framework

#### What this PR does / why we need it:

`ResourceConsumer.GetReplicas` for `KindCRD` stands in for the controller a real CRD would have: on every poll it mirrors the child Deployment's ready...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142095)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142092: Make validation of Composite Pod Group hierarchies consistent across scheduler

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
Standardizes PodGroup and CompositePodGroup hierarchy traversal across the scheduler by enforcing `WorkloadMaxTreeDepth` (4) limits.
- Replaces ad-hoc `visited` se...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142092)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142089: Support updates in correctness tests

/kind cleanup

```release-note
NONE
```

Ref https://github.com/kubernetes/kubernetes/issues/141652

/cc @liggitt @wojtek-t @mborsz


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142089)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142088: volumebinding: compare storage capacities with Quantity.Cmp instead of overflowing Value()

Value() projects quantities onto int64 and overflows for storage sizes larger than 2^63, misordering the capacity checks in the CSI storage capacity scheduling path. Use Cmp to stay consistent with the automatic matching path in FindMatchingVolume.

<!--  Thanks for sending a pull request!  Here a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142088)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142087: Introduce +k8s:setByServer validation tag

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR supersedes #139451. It carries forward work by @lalitc375, rebased onto current master with merge conflicts resolved and generated validations updated.

This PR introduces the `+k8s:setByServer` t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142087)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142084: audit: stop dropping kubelet/system:nodes get nodes

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The `level: None` drop for `kubelet`/`system:nodes` `get` on `nodes`/`nodes/status` was added in 00d52edfd17 (1.7), likely to suppress the kubelet's every-10s heartbeat GET on its own Node. That heartbeat r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142084)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142081: e2e/storage: match volume metrics plugin name exactly

#### What type of PR is this?

/kind flake
/kind cleanup

#### What this PR does / why we need it:

The `Volume metrics` tests rely on each spec having its own CSI driver instance, so that the controller-manager metrics they read are only about their own volumes.
https://github.com/kubernetes/kubern...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142081)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10294: Bump the patch-updates group across 2 directories with 3 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10294)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10293: Bump the non-kubernetes group across 2 directories with 33 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10293)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10292: Bump the kubernetes group across 1 directory with 22 updates

Bumps the kubernetes group with 17 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/cli-runtime](https://github.com/kubernetes/cli-runtime) | `0.37.0-rc.0` | `0.38.0-alpha.0` |
| [k8s.io/cloud-provider](https://github.com/kubernetes/cloud...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10292)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10291: Bump the actions group across 3 directories with 1 update

> [!WARNING]
> Cooldown could not be applied because no publication date was available from the registry.
>

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/rec...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10291)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10290: civo: fix pool count mismatch validation and decrease error message

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Fixes a validation and cache desynchronization bug in the Civo cloud provider:

1. **Fix post-API validation in `IncreaseSize`**:
   - Replaced a redundant `targetSize > n.MaxSize(...)` check after the API call ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10290)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10289: VPA: add test coverage for sequential pod eviction admission

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

sequentialPodEvictionAdmission chains PodEvictionAdmission checks together with AND semantics and short circuits on the first rejection, but had zero direct test coverage. Added tests covering the AND semantics a...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10289)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10288: Expose VPA admission and recommender update strategies

/kind cleanup

### Description
Expose the existing updateStrategy options for the admission controller and recommender in values.yaml.
These options were already supported by the Deployment templates but were missing from the documented chart values. 
Added Helm unit tests and updated the gener...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10288)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10287: Add support for existing ServiceAccount names


## What this does

Adds support for using an existing ServiceAccount by setting serviceAccount.name
The configured name is now used by the component Deployment, ServiceAccount and RBAC bindings for the admission controller, recommender and updater.

When no name is provided, the existing gene...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10287)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57528: Issue with k8s.io/docs/contribute/new-content/open-a-pr/

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

**Proposed Solutio...

🔗 [Link](https://github.com/kubernetes/website/issues/57528)

**Metadata:**
- Created: 2026-09-14
- Comments: 1
- State: open

### kubernetes/website#57523: [ko] Update content/ko/docs/reference/access-authn-authz/bootstrap-tokens.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/reference/access-authn-authz/bootstrap-tokens.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/reference/access-authn-authz/bootstr...

🔗 [Link](https://github.com/kubernetes/website/issues/57523)

**Metadata:**
- Created: 2026-09-14
- Comments: 1
- State: open

### kubernetes/website#57522: [ko] Translate content/en/docs/concepts/workloads/autoscaling/vertical-pod-autoscale.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57522)

**Metadata:**
- Created: 2026-09-14
- Comments: 2
- State: open

### kubernetes/website#57519: Interaktives Lernprogramm - Erstellen eines Clusters

Um mit dem Terminal zu interagieren, verwenden Sie bitte die Desktop- / Tablet-Version

Ich bin auf einem Windows 11 Lenovo Laptop unterwegs und habe mehrere Browser für das Abrufen versucht und kriege bei jedem diese Meldung und kann nichts anfangen.

🔗 [Link](https://github.com/kubernetes/website/issues/57519)

**Metadata:**
- Created: 2026-09-14
- Comments: 4
- State: open

### prometheus/prometheus: 3.15.0-rc.0 / 2026-09-09

- [CHANGE] PromQL: A range query whose `end` was not aligned to `step` caused subqueries inside it to evaluate past the parent's last actual step, inflating `peakSamples` in the query stats and against the `query.max-samples` limit, and wasting storage I/O reading samples that were never used in the result. Add tests to prevent regression of the fix made in #18081. #18598
- [CHANGE] PromQL: Do not register a start timestamp reset if the start timestamp hasn't changed between subsequent samples....

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.15.0-rc.0)

**Metadata:**
- Version: v3.15.0-rc.0
- Published: 2026-09-14
- Prerelease: Yes

### containerd/containerd#14162: golangci-lint: unanchored `test` path exclusion skips all 342 _test.go files

`.golangci.yml` carries the same path exclusion list twice, in `linters.exclusions.paths` and again in `formatters.exclusions.paths`:

```yaml
    paths:
      - api
      - cluster
      - docs
      - docs/man
      - releases
      - test
```

The `test` entry is presumably meant for the top-leve...

🔗 [Link](https://github.com/containerd/containerd/issues/14162)

**Metadata:**
- Created: 2026-09-14
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-15 03:20:00*
