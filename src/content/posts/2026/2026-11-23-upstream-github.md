---
title: "Upstream Github - 2026-11-23"
description: "CNCF upstream activity from github"
pubDate: 2026-11-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/node", "needs-triage", "sig/autoscaling", "kind/feature", "sig/instrumentation", "pr", "kind/documentation", "size/S", "release-note-none", "sig/auth", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "sig/api-machinery", "release-note", "size/M", "area/apiserver", "size/XL", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "sig/storage", "size/L", "area/test", "kind/flake", "sig/testing", "sig/docs", "language/en", "website", "area/vertical-pod-autoscaler", "ok-to-test", "triage/accepted", "kind/dependency", "autoscaler", "kind/cleanup", "containerd", "release", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10707: VPA: Add getContributiveAggregateStateKeys benchmark

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10707)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144404: NoSwap leaves the pod cgroup at memory.swap.max=max, so sandbox processes can still swap

### What happened?

**NoSwap does not stop the pod sandbox from swapping.**

With `swapBehavior: NoSwap` (the default) on a cgroup v2 node with swap enabled, the kubelet sets `memory.swap.max=0` on each container's cgroup only. The pod cgroup and the sandbox cgroup under it stay at `max`, so whateve...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144404)

**Metadata:**
- Created: 2026-11-23
- Comments: 2
- State: open

### kubernetes/kubernetes#144403: HPA: expose phase-level reconciliation latency

### What would you like to be added?

Add an alpha histogram, `horizontal_pod_autoscaler_controller_reconciliation_phase_duration_seconds`, to the HPA controller with four bounded `phase` values:

- `scale_get`: scale lookup across candidate REST mappings, including failed candidates.
- `selector_va...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144403)

**Metadata:**
- Created: 2026-11-23
- Comments: 1
- State: open

### kubernetes/kubernetes#144405: externaljwt: document required ECDSA signature encoding for Sign

#### What type of PR is this?

/kind documentation
/sig auth

#### What this PR does / why we need it:

`SignJWTResponse.signature` stated only that the value is base64url-wrapped as it appears in the final JWT segment. It did not specify the byte-level signature encoding required for ECDSA algorith...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144405)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144402: client-go/flowcontrol: cap initial backoff at maxDuration

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Caps the initial (and post-expiration) backoff duration in `k8s.io/client-go/util/flowcontrol.Backoff.Next` at `maxDuration`, matching the exponential backoff branch.

For example, in `staging/src/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144402)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144401: apimachinery/version: sort numeric prerelease identifiers first

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Fixes semantic version prerelease identifier comparison in `k8s.io/apimachinery/pkg/util/version` (`Version.compareInternal`) to follow SemVer 2.0.0 §11.4.3: numeric identifiers always have lower p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144401)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144400: WIP: add watch cache mutation detector

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144400)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144399: kubelet: check device in-use before TearDownDevice in GenerateUnmapDeviceFunc

## What this PR does / why we need it

A raw block CSI volume can enter a permanent, non-self-healing retry loop after a single transient `EBUSY` from `isDeviceOpened`. The root cause is the order of operations in `GenerateUnmapDeviceFunc`: `TearDownDevice` (which deletes `vol_data.json` via `cleanu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144399)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144398: e2e: tolerate quota recalculation racing with ResourceClaim create

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

`ResourceQuota should create a ResourceQuota and capture the life of a ResourceClaim [DRA]` flakes because quota admission races with the quota controller's periodic full recalculation (analysis ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144398)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144397: client-go: report informer queue processing errors

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`controller.processLoop` discards errors returned by `Queue.Pop` and `QueueWithBatch.PopBatch`, leaving failed store updates and malformed delta processing without diagnostics.

Report these errors...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144397)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59232: api-reference shortcode guide links to a nonexistent Pod API anchor

### Problem

The **Links to API Reference** section of the Custom Hugo Shortcodes guide uses
`{{< api-reference page="core/pod-v1" anchor="environment-variables" >}}`.

The shortcode renders a link to:

`/docs/reference/kubernetes-api/core/pod-v1/#environment-variables`

That anchor does not exist o...

🔗 [Link](https://github.com/kubernetes/website/issues/59232)

**Metadata:**
- Created: 2026-11-23
- Comments: 2
- State: open

### kubernetes/autoscaler#10713: [VPA] Bump go deps (vpa-release-1.7)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [golang.org/x/net](https://pkg.go.dev/golang.org/x/net) | [`v0.62.0` → `v0.63.0`](https://cs.openso...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10713)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10712: [VPA] Bump go deps (vpa-release-1.7) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [go.etcd.io/etcd/api/v3](https://redirect.github.com/etcd-io/etcd) | `v3.6.16` → `v3.6.17` | ![age]...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10712)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10711: [VPA] Bump go deps (vpa-release-1.8)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [golang.org/x/net](https://pkg.go.dev/golang.org/x/net) | [`v0.62.0` → `v0.63.0`](https://cs.openso...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10711)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10710: [VPA] Bump go deps (vpa-release-1.8) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [github.com/go-openapi/jsonpointer](https://redirect.github.com/go-openapi/jsonpointer) | `v1.0.2` ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10710)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10709: [VPA] Bump go tools (master)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) | Type | Update |
|---|---|---|---|---|---|
| [github.com/go-openapi/jsonpointer](https://redirect.github.com/go-openapi/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10709)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10708: [VPA] Bump go deps (master)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) | Type | Update |
|---|---|---|---|---|---|
| [cel.dev/cel-go](https://redirect.github.com/cel-expr/cel-go) | `v0.33.2` →...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10708)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- keep symlink targets byte for byte [#482](https://github.com/containerd/overlaybd/pull/482) ([Chenyu Li](https://github.com/containerd/overlaybd/commit/a9063efffb2e2e97e6fa33cff8d4465893f958c2))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-22
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-23 05:42:49*
