---
title: "Upstream Github - 2026-06-21"
description: "CNCF upstream activity from github"
pubDate: 2026-06-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "lgtm", "approved", "size/XS", "kops", "area/kubelet", "sig/node", "size/S", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "needs-triage", "do-not-merge/needs-kind", "kind/cleanup", "sig/api-machinery", "size/M", "release-note-none", "area/test", "sig/scheduling", "size/L", "sig/testing", "kind/api-change", "area/vertical-pod-autoscaler", "ok-to-test", "triage/accepted", "autoscaler", "area/addon-resizer", "area/dependency", "area/prow", "sig/k8s-infra", "k8s.io", "sig/contributor-experience", "area/config", "area/label_sync", "test-infra"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kops#18503: scaletest: bind etcd metrics to all interfaces

Listen on 0.0.0.0 instead of localhost so the in-cluster Prometheus can scrape etcd metrics over the network.

🔗 [Link](https://github.com/kubernetes/kops/pull/18503)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139891: [kubelet] DRA PrepareDynamicResources failures should be reported in SyncResult

## Summary

PrepareDynamicResources failures were not being propagated in the PodSyncResult, causing retries to use the default sync interval (60s-90s) instead of the error backoff path. This significantly increases pod startup latency when PrepareDynamicResources calls fail.

## Changes

- Added `E...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139891)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139890: ipallocator: replace sets.String with sets.Set

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
The `sets.String` type and `sets.NewString` constructor are deprecated in favor of the generic `sets.Set[string]` / `sets.New[string]`. This replaces them in the `pkg/registry/core/service/ipallocator` tests. Sorte...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139890)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139889: test: Add test case for createNamespaceOp

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139889)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139888: ﻿kubelet/prober: add container-lifecycle start/stop hooks to Manager

Add Start()/StartContainerProbes()/StopContainerProbes() so probe workers can eventually be started/stopped in response to individual container lifecycle events instead of only at pod-level AddPod/ RemovePod/StopLivenessAndStartup.

This patch only adds the new API surface and refactors AddPod to ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139888)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9849: Bump the patch-updates group across 2 directories with 33 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9849)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9848: Bump k8s.io/client-go from 0.36.0 to 0.36.2 in /addon-resizer

Bumps [k8s.io/client-go](https://github.com/kubernetes/client-go) from 0.36.0 to 0.36.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes/client-go/commit/877f5359348b5df85619f2aa379abc5bd74bca2d"><code>877f535</code></a> Update dependencies to v0.36.2 tag</li>
<l...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9848)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9847: Bump k8s.io/apimachinery from 0.36.0 to 0.36.2 in /addon-resizer

Bumps [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) from 0.36.0 to 0.36.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes/apimachinery/commit/ae3f98eb01e4bebb7d90db742081949c5c4b1ef7"><code>ae3f98e</code></a> Update dependencies to v0.36.2 ta...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9847)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9846: Bump k8s.io/api from 0.36.0 to 0.36.2 in /addon-resizer

Bumps [k8s.io/api](https://github.com/kubernetes/api) from 0.36.0 to 0.36.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes/api/commit/2f4cefdbec4e3c3cd76d15844e90c679419f4dc7"><code>2f4cefd</code></a> Update dependencies to v0.36.2 tag</li>
<li>See full diff in...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9846)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9845: Bump actions/checkout from 6.0.3 to 7.0.0

Bumps [actions/checkout](https://github.com/actions/checkout) from 6.0.3 to 7.0.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/checkout/releases">actions/checkout's releases</a>.</em></p>
<blockquote>
<h2>v7.0.0</h2>
<h2>What's Changed</h2>
<ul>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9845)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9625: configure prow to work with a github app and set sane resource limits

I temporarily disabled ArgoCD autosync and applied the changes manually, I'm observing the performance of the new resource limits before merging.

Fixes: https://github.com/kubernetes/org/issues/6449
Fixes: https://github.com/kubernetes/test-infra/issues/37286


All the components except the c...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9625)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37305: disable checking CLAs via the label and use the EasyCLA status directly

[EasyCLA](https://github.com/linuxfoundation/easycla) is a tool from LF that we use to check CLAs.

I'm proposing we drop the cncf-cla label checks and free up GitHub API capacity. We already mark the EasyCLA status check as required, and LF prints its own messages on the PR when it's not signed....

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37305)

**Metadata:**
- Created: 2026-06-20
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-06-21 03:57:59*
