---
title: "Upstream Github - 2026-07-15"
description: "CNCF upstream activity from github"
pubDate: 2026-07-15
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "priority/important-soon", "sig/node", "kind/failing-test", "triage/accepted", "pr", "area/apiserver", "size/XS", "kind/flake", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "kind/cleanup", "size/XL", "sig/apps", "area/code-generation", "area/dependency", "area/test", "release-note", "size/S", "sig/testing", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "kind/api-change", "kind/feature", "do-not-merge/release-note-label-needed", "area/kubelet", "size/M", "size/XXL", "sig/cloud-provider", "sig/scheduling", "area/kubectl", "sig/autoscaling", "needs-rebase", "sig/cli", "sig/storage", "do-not-merge/cherry-pick-not-approved", "wg/device-management", "lgtm", "size/L", "approved", "sig/auth", "sig/cluster-lifecycle", "area/kubeadm", "minikube", "area/jobs", "area/config", "test-infra", "website", "language/ko", "area/localization", "area/cluster-autoscaler", "autoscaler", "sig/release", "needs-kind", "ok-to-test", "area/release-eng", "release", "prometheus", "node_exporter", "envoyproxy", "envoy"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56489: security.txt is committed but not served (kubernetes.io/.well-known/security.txt returns 404; its own Canonical points there)

**This is a Bug Report**

**Problem:**

The `security.txt` file is committed to this repo but is not reachable at its published URL, and the file's own `Canonical` field points at that unreachable URL.

- `https://kubernetes.io/.well-known/security.txt` returns **HTTP 404** (verified today).
- The f...

🔗 [Link](https://github.com/kubernetes/website/issues/56489)

**Metadata:**
- Created: 2026-07-14
- Comments: 2
- State: open

## Updates

### kubernetes/kubernetes#140561: kube-controller-manager panics (nil pointer dereference) when a StorageVersionMigration targets a resource not present in the RESTMapper

### What happened?

Creating a `StorageVersionMigration` for a resource, then removing that resource from the cluster (e.g. deleting the CRD) while the migration is still pending, makes the `kube-controller-manager` panic and enter `CrashLoopBackOff`.

The storage-version-migrator controller's `sync...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140561)

**Metadata:**
- Created: 2026-07-14
- Comments: 2
- State: open

### kubernetes/kubernetes#140560: Failure cluster [144d96a7...] Checkpoint container failing to find CRIU on containerd jobs

### Failure cluster [144d96a7f3ef8ae2142d](https://go.k8s.io/triage#144d96a7f3ef8ae2142d)

##### Error text:
```
[FAILED] Unexpected status code (500) during 'CheckpointContainer': "an error on the server (\"checkpointing of checkpoint-container-test-7128/checkpoint-container-pod/test-container-1 fa...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140560)

**Metadata:**
- Created: 2026-07-14
- Comments: 4
- State: open

### kubernetes/kubernetes#140575: apiserver: deflake TestTimeTravelHealthcheck


#### What type of PR is this?
/kind flake
/sig api-machinery

#### What this PR does / why we need it:
the sleep that waits out the rate limiter starts at goroutine spawn, but the limiter token is taken when the goroutine runs. late scheduling means the sleep ends too early and the second hea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140575)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140574: Unversioned helper gen

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

There are a number of places where we need the same helper functions for internal types as for versioned types. This is handled in either of 2 ways:
1. Convert the internal type to the versioned type, whic...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140574)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140573: [PodLevelResourceManagers] Graduate feature gate to Beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140573)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140572: apimachinery: add k8s-label-key format validation for Condition.Type

/kind feature
/sig api-machinery

  #### What this PR does / why we need it:

   Migrates `metav1.Condition.Type` validation to Declarative Validation.

   This PR:
   - Adds a declarative validation tag to `Condition.Type`: `+k8s:format=k8s-label-key`
   - Marks the corresponding handwritt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140572)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140571: fix: log volume metrics failures at Error with dedup

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Volume metrics collection runs periodically in the kubelet. When `GetMetrics` fails (for example temporary NFS errors), the failure was only logged at V(4), so operators could not see it at default verbosity while in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140571)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140570: drop e2e cloud provider gcp tests that we don't run

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140570)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140569: [WIP][DO NOT MERGE] Exploring targeted resource aggregation helpers

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140569)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140568: apiserver: fix potential nil pointer dereference in Store.Watch

set option.SendInitialEvents inside Store.Watch so it stays nil when no options are passed.

uses the approved pr #135784 (but inactive), rebased onto current master. 

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Fixes #135772 
#### Which issue(s) this ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140568)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140567: Automated cherry pick of #140377: e2e: storage snapshot tests should read custom timeouts from manifest

Cherry pick of #140377 on release-1.34.

#140377: e2e: storage snapshot tests should read custom timeouts from manifest

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140567)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140566: Automated cherry pick of #140377: e2e: storage snapshot tests should read custom timeouts from manifest

Cherry pick of #140377 on release-1.35.

#140377: e2e: storage snapshot tests should read custom timeouts from manifest

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140566)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140565: adding skip should concurrently access the single volume from pods on…

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140565)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140564: Automated cherry pick of #140377: e2e: storage snapshot tests should read custom timeouts from manifest

Cherry pick of #140377 on release-1.36.

#140377: e2e: storage snapshot tests should read custom timeouts from manifest

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140564)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140563: Fix/dra negative consumed capacity validation clean

What type of PR is this?
/kind bug
/kind api-change

What this PR does / why we need it:
This PR adds validation to prevent negative capacity values from entering the DRA node-allocatable resource accounting path.

Specifically, it:
- Validates CapacityRequirements.Requests as non-negative d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140563)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140562: e2e_node: Handle containerd CRIU preflight errors

#### What type of PR is this?

/kind failing-test

#### What this PR does / why we need it:

Containerd now validates CRIU before checkpointing and reports missing,
outdated, or disabled CRIU using new error messages.

The checkpoint node e2e test only recognizes the previous messages, caus...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140562)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140558: Automated cherry pick of #140419: Fix ConvertToNative for Mutating admission policies

Cherry pick of #140419 on release-1.35.

#140419: Fix ConvertToNative for Mutating admission policies

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140558)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140557: Automated cherry pick of #140419: Fix ConvertToNative for Mutating admission policies

Cherry pick of #140419 on release-1.36.

#140419: Fix ConvertToNative for Mutating admission policies

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140557)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140554: Workloadbuilder refactor

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140554)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140551: Remove deprecated `io/ioutil` usage

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

There are some `io/ioutil` function calls, while this package is deprecated (see [`io/ioutil` package docs](https://pkg.go.dev/io/ioutil)). This PR addresses it and replaces all remaining `io/ioutil` functi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140551)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140550: Replace `errors.New(fmt.Sprintf(...))` with `fmt.Errorf(...)`

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Some code parts used `errors.New(fmt.Sprintf(...))` what is unnecessary since `fmt.Errorf` provides the same functionality directly. This PR addresses it and switches to `fmt.Errorf`.

#### Which issue(s)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140550)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140549: apimachinery: transcode BOM'd UTF-16 YAML to UTF-8

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`YAMLReader`/`LineReader` split on UTF-8 `\n` and re-append a single-byte newline. For BOM'd UTF-16 LE (what Windows PowerShell `>` writes), that corrupts the stream into an odd length and surfaces as a misleading `y...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140549)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23364: Fix SSHRunner ExitCode always returning 0 for SSH commands

## Summary

SSHRunner.ExitCode was always 0 because RunCmd and WaitCmd used
`*exec.ExitError` (os/exec) instead of `*ssh.ExitError` (crypto/ssh).
The type assertion silently failed, so every SSH command appeared to
succeed regardless of its actual exit code.

## Tests

Rewrote the SSH mock ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23364)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37472: sig-node: split slow tests out of ci-kubernetes-node-e2e-containerd-alpha-features

The `ci-kubernetes-node-e2e-containerd-alpha-features` job (tab `ci-node-e2e-containerd-alpha-features`) has been hitting timeouts.

This PR:
- Adds `\[Slow\]` to the skip regex of the existing job so slow tests no longer run there.
- Adds a new job `ci-kubernetes-node-e2e-containerd-alpha-slow-feat...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37472)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37460: Update mdtoc CI image to go1.26-trixie

The `go1.24-bookworm` image is no longer available, causing all mdtoc presubmit jobs to fail with image pull errors.

Updates both `pull-mdtoc-test` and `pull-mdtoc-verify` to use `latest-go1.26-trixie`, consistent with other releng jobs.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37460)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56492: Didacticiel interactif - Création d'un cluster

<img width="810" height="605" alt="Image" src="https://github.com/user-attachments/assets/295be551-e196-4229-bb0a-e05793098e08" />

🔗 [Link](https://github.com/kubernetes/website/issues/56492)

**Metadata:**
- Created: 2026-07-14
- Comments: 1
- State: open

### kubernetes/website#56488: [ko] Translate content/en/docs/concepts/overview/kubectl.md into Korean

**This is a Feature Request**

**What would you like to be added**
Translate `content/en/docs/concepts/overview/kubectl.md` into Korean.

**Why is this needed**
This page is not translated into Korean yet.

/area localization
/language ko
/assign

🔗 [Link](https://github.com/kubernetes/website/issues/56488)

**Metadata:**
- Created: 2026-07-14
- Comments: 1
- State: open

### kubernetes/autoscaler#9985: Release cluster autoscaler for 1.36 please

It's been nearly 3 months since 1.36 became available - we're supposed to upgrade cluster autoscaler after upgrading to 1.36 - can you please do at least a set of charts that ref the 1.36.0 image that does exist already? Unless that image is unsuitable for use? EKS 1.36 has been available for over a...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9985)

**Metadata:**
- Created: 2026-07-14
- Comments: 2
- State: open

### kubernetes/autoscaler#9986: Benchmarking scaledown strategies

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This project aims to develop a system for benchmarking various scaledown strategies and evaluating how chosen strategy affects final cluster efficiency. Because the definition of scaledown efficiency depends on...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9986)

**Metadata:**
- Created: 2026-07-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/release#4467: Bump github.com/cheggaaa/pb/v3 from 3.1.7 to 3.2.0

Bumps [github.com/cheggaaa/pb/v3](https://github.com/cheggaaa/pb) from 3.1.7 to 3.2.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/cheggaaa/pb/commit/f970b88927ff1b5f81efaf20955b27c81026f06a"><code>f970b88</code></a> bump version to 3.2.0</li>
<li><a href="https://githu...

🔗 [Link](https://github.com/kubernetes/release/pull/4467)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### prometheus/node_exporter: 1.12.1 / 2026-07-14

* [BUGFIX] perf: Fix perf profiler flag handling #3731
* [BUGFIX] edac: Fix optional csrow ue_count collection #3734


🔗 [Link](https://github.com/prometheus/node_exporter/releases/tag/v1.12.1)

**Metadata:**
- Version: v1.12.1
- Published: 2026-07-14
- Prerelease: No

### envoyproxy/envoy: v1.39.0

[release/main] repo: Release v1.39.0 (#46121)

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.0)

**Metadata:**
- Version: v1.39.0
- Published: 2026-07-14
- Prerelease: No


---

*This content was automatically collected on 2026-07-15 02:10:00*
