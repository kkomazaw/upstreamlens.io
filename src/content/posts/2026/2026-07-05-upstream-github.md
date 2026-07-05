---
title: "Upstream Github - 2026-07-05"
description: "CNCF upstream activity from github"
pubDate: 2026-07-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "kind/bug", "area/kubectl", "size/M", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "needs-triage", "area/kubelet", "sig/node", "size/L", "do-not-merge/invalid-commit-message", "kind/cleanup", "size/S", "release-note-none", "sig/api-machinery", "sig/apps", "wg/device-management", "release-note", "sig/autoscaling", "size/XXL", "priority/important-soon", "kind/feature", "triage/accepted", "sig/storage", "area/test", "sig/scheduling", "sig/testing", "approved", "area/images", "test-infra", "issue", "good first issue", "help wanted", "sig/docs", "website", "kubectl", "prometheus", "release", "alertmanager", "containerd", "accelerated-container-image", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140224: [FG: InPlacePodVerticalScalingExclusiveCPUs] Add lifecycle operation parameter in cm managers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR adds an extra parameter of type lifecycle.Operation in CM managers, for
specifying the type of operation Add / Resize. 

#### Which issue(s) this PR is related to:
KEP https://github.com/kuberne...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140224)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1862: kuberc defaults can match unrelated commands that share the same leaf name

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately via https://kubernetes.io/security/
-->

**What happened**:
`...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1862)

**Metadata:**
- Created: 2026-07-04
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#140230: kubectl: prevent kuberc defaults from matching unrelated commands

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140230)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140229: kubelet: register pod objects in volume populator before mounting

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

On kubelet start/restart (node reboot, kubelet upgrade, cold node join), pods that mount secret or configMap volumes can intermittently fail to mount with a transient `FailedMount` event:

MountVolume.SetUp f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140229)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140228: Update kubelet pod log lifecycle comments

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140228)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140227: fix: increase local cache size and double check if not found in cache

 

#### What type of PR is this?
 
/kind bug 

 

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to: 
Fixes #140217 

#### Special notes for your reviewer:
1. increase default cache size from 100 to 5000. maybe smaller? I'm not sure, looking forward to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140227)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140226: Remove PreventStaticPodAPIReferences feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140226)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140225: Refactor horizontal test 02

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140225)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140223: feat: migrate to contextual logging - p1

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR is the second part of replacing the appropriate context with the `context.TODO()` or `context.Background()` or `klog.TODO()` in the `./pkg/kubelet/`. 
I break it down into multiple parts to keep PR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140223)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140222: scheduler: reduce scheduler PostFilter event noise

 #### What type of PR is this?

  /kind cleanup

  #### What this PR does / why we need it:

  This PR reduces noise in Pod `FailedScheduling` events from the `DynamicResources` scheduler plugin.

  `DynamicResources.PostFilter` currently returns some internal/no-op PostFilter outcomes as us...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140222)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140221: resourceclaim: prevent duplicate ResourceClaim creation when informer lister falls behind during rapid Pod scale-out


/kind bug

#### What this PR does / why we need it:

During rapid scale-out of DRA-enabled Pods (6000-10000), the ResourceClaim controller can create duplicate ResourceClaims for the same Pod.

**Root cause:** The controller uses two layers to check whether a claim already exists before crea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140221)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37390: publish CI images to ECR as well

This change will dual-publish the CI images, and we'll use kyverno to mutate the images in EKS. The image pulls should be faster and cheaper now.








🔗 [Link](https://github.com/kubernetes/test-infra/pull/37390)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56385: Umbrella: Improve and update the generate-ref-docs contributor guide

# ☔This is an umbrella issue ☔

---

<img width="660" height="358" alt="Image" src="https://github.com/user-attachments/assets/bb2188c4-b684-4aef-9222-668be365192f" />

--- 

The reference-docs contributor guide (`kubernetes/website`, `docs/contribute/generate-ref-docs/`) is out of date: GOPATH-era ...

🔗 [Link](https://github.com/kubernetes/website/issues/56385)

**Metadata:**
- Created: 2026-07-04
- Comments: 8
- State: open

### prometheus/alertmanager: 0.33.1 / 2026-07-04

* [BUGFIX] doc: fix missing `notification_reason` field in webhook documentation (#5329)
* [BUGFIX] silences: fix silences snapshot missing legacy matchers field. This caused a bug that prevented older alertmanager versions from reading newer snapshots unnecessarily. (#5330)
* [BUGFIX] silence with no matchers should populate an empty array in API response (#5331)


🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.33.1)

**Metadata:**
- Version: v0.33.1
- Published: 2026-07-04
- Prerelease: No

### containerd/accelerated-container-image: Development Build

## Continuous Integration
- add Dependabot to keep dependencies up to date [#360](https://github.com/containerd/accelerated-container-image/pull/360) ([Ganeshkumar Ashokavardhanan](https://github.com/containerd/accelerated-container-image/commit/22d0ec44ab0ff7ab37a926e122b7d4568ecf89d5))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-04
- Prerelease: Yes

### containerd/overlaybd: Development Build

## Features
- add UDS credential helper mode [#412](https://github.com/containerd/overlaybd/pull/412) ([Xiaoxuan Wang](https://github.com/containerd/overlaybd/commit/504b99fe190d3570bc6797ceea109876350ed0ce))

## Commits
- d5717f8: Potential fix for pull request finding (Xiaoxuan Wang) [#412](https://github.com/containerd/overlaybd/pull/412)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-04
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-05 02:50:45*
