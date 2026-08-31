---
title: "Upstream Github - 2026-08-31"
description: "CNCF upstream activity from github"
pubDate: 2026-08-31
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "language/ja", "language/en", "sig/scheduling", "sig/node", "sig/cli", "needs-sig", "pr", "size/XS", "kind/flake", "release-note-none", "cncf-cla: yes", "needs-priority", "area/kubelet", "release-note", "size/M", "needs-ok-to-test", "kind/bug", "area/test", "sig/network", "sig/testing", "kind/failing-test", "kind/regression", "kind/cleanup", "area/kubectl", "size/L", "sig/api-machinery", "area/code-generation", "size/XL", "kind/api-change", "size/XXL", "kind/documentation", "sig/auth"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/website#57304: [ko] Translate content/en/docs/concepts/workloads/pods/static-pods.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/workloads/pods/static-pods.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/workloads/pods/static-pods/

**Why is this needed**

This page is not translated yet.

...

🔗 [Link](https://github.com/kubernetes/website/issues/57304)

**Metadata:**
- Created: 2026-08-30
- Comments: 1
- State: open

### kubernetes/website#57303: [ja] Update translation for content/ja/docs/concepts/scheduling-eviction/dynamic-resource-allocation.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57303)

**Metadata:**
- Created: 2026-08-30
- Comments: 1
- State: open

### kubernetes/website#57298: [en] Update docs/tasks/access-application-cluster/web-ui-dashboard/

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57298)

**Metadata:**
- Created: 2026-08-30
- Comments: 1
- State: open

### kubernetes/website#57296: [ko] Update content/ko/docs/concepts/cluster-administration/coordinated-leader-election.md

This is a Feature Request

## What would you like to be added?

Update the Korean translation of `content/ko/docs/concepts/cluster-administration/coordinated-leader-election.md` to match the latest English version.

## Website links

- Korean: https://kubernetes.io/ko/docs/concepts/cluster-administr...

🔗 [Link](https://github.com/kubernetes/website/issues/57296)

**Metadata:**
- Created: 2026-08-30
- Comments: 1
- State: open

### kubernetes/website#57294: [ko] Update content/ko/docs/concepts/cluster-administration/addons.md

This is a Feature Request

## What would you like to be added?

Update the Korean translation of `content/ko/docs/concepts/cluster-administration/addons.md` to match the latest English version.

## Website links

- Korean: https://kubernetes.io/ko/docs/concepts/cluster-administration/addons/
- Engli...

🔗 [Link](https://github.com/kubernetes/website/issues/57294)

**Metadata:**
- Created: 2026-08-30
- Comments: 1
- State: open

### kubernetes/kubernetes#141694: [Scheduler] Redundant async preemption with already-deleted victim leaves preemptor stuck in unschedulable pool until 5-min flush

## What happened?

With `SchedulerAsyncPreemption` enabled (default since 1.32), a preemptor pod can be parked in the unschedulable pod pool for the full `DefaultPodMaxInUnschedulablePodsDuration` (5m0s) even though its preemption completed successfully milliseconds after it started.

Race chain (lo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141694)

**Metadata:**
- Created: 2026-08-31
- Comments: 1
- State: open

### kubernetes/kubernetes#141686: Improve init container startup status visibility ( like pulling big image)

### What would you like to be added?


Improve startup status visibility for init containers.

Today, `kubectl get pod` shows the same status for different stages:

```text
Init:0/1
```

For example:

- pulling the init container image
- creating the init container
- running the init container

Also...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141686)

**Metadata:**
- Created: 2026-08-30
- Comments: 3
- State: open

### kubernetes/kubernetes#141685: M

Tears of feats### 

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141685)

**Metadata:**
- Created: 2026-08-30
- Comments: 2
- State: open

### kubernetes/kubernetes#141695: fix: capture entity type before requeue to avoid data race in Update 

…logging



#### What type of PR is this?
/kind flake


#### What this PR does / why we need it:
quick fix for the data race

#### Which issue(s) this PR is related to:

Fixes #141653


#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141695)

**Metadata:**
- Created: 2026-08-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141693: kubelet: improve init container startup status visibility

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Improves startup status visibility for init containers.

Previously, `kubelet` set the default waiting state for all containers to `PodInitializing` when `hasInitContainers` was true. This caused `initContainerStat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141693)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141692: Use /healthz for e2e NodePort Health Check Test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141692)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141691: Refactor flags and options in `kubectl top` cmd

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141691)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141690: validation-gen: declare TooLong for the resource format validators

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`k8s-resource-pool-name` and `k8s-resource-fully-qualified-name` each declare a
single `Emission{ErrorTypeInvalid, ...}`, but both runtime validators also return
`field.TooLong`:

- `ResourcePoolName` reports the 253...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141690)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141689: enable commentstart check on flowcontrol API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141689)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141688: Applyconfigurations: Generate GetResourceVersion

This would be useful to extract the RV from applyconfigs and avoid the need to use reflect for that.

Ref https://github.com/kubernetes-sigs/controller-runtime/pull/3472#discussion_r3889021013

/sig api-machinery
/kind cleanup

<!--  Thanks for sending a pull request!  Here are some tips for ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141688)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141687: externaljwt: warn against re-encoding claims in proto; add encoding contract test

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

`SignJWTRequest.claims` is already base64url-encoded when received by an external signer so it must be used as-is when computing the signing input. The existing proto comment was technically correct b...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141687)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-31 03:31:00*
