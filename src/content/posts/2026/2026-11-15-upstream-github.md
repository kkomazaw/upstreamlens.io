---
title: "Upstream Github - 2026-11-15"
description: "CNCF upstream activity from github"
pubDate: 2026-11-15
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "sig/storage", "needs-triage", "pr", "area/kubectl", "release-note", "size/L", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/work-in-progress", "needs-priority", "area/apiserver", "sig/api-machinery", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/test", "sig/node", "size/XS", "kind/flake", "release-note-none", "approved", "sig/testing", "size/M", "sig/instrumentation", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "kind/regression", "area/code-generation", "kind/cleanup", "size/XL", "kind/api-change", "kind/feature", "api-review", "wg/device-management", "sig/apps", "wg/node-lifecycle", "minikube", "lgtm", "ok-to-test", "priority/backlog", "language/en", "triage/accepted", "website", "area/cluster-autoscaler", "area/provider/aws", "kind/dependency", "autoscaler"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144150: KEP-5491: graduate list type attributes to beta 

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144150)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144144: VolumeBinding Filter cost grows with nodes × CSIStorageCapacity objects

### What happened?

For a pod with an unbound `WaitForFirstConsumer` PVC whose CSI driver sets `storageCapacity: true`, the VolumeBinding Filter calls [`hasEnoughCapacity`](https://github.com/kubernetes/kubernetes/blob/eb24fe4e932bf95877653f89b4720fbdc8429353/pkg/scheduler/framework/plugins/volumebi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144144)

**Metadata:**
- Created: 2026-11-14
- Comments: 1
- State: open

### kubernetes/kubernetes#144162: kubectl: avoid full plugin discovery for completion helpers

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

Completing an installed plugin currently enumerates every PATH directory twice: once while constructing the help groups and again while registering plugin completion commands. This makes completion slow when...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144162)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144161: Watchcache watch cache resync

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144161)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144159: e2e_node: fail and retry the CNI and credential provider downloads

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The node e2e runner downloads the CNI plugins and the ECR credential provider with `curl -s`. When the server returns an error, curl saves the error page and the run fails later with `gzip: stdin: not in gzip forma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144159)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144158: e2e_node: wait for the swap stress pod to be deleted

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The swap test "should be able to use more than the node memory capacity" starts a pod that fills the whole node memory. It asked for the pod to be deleted but did not wait. The kubelet restarts right after th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144158)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144156: Automated cherry pick of #144105: component-base/metrics: populate DefBuckets when Buckets is empty and NativeHistograms is enabled

Cherry pick of #144105 on release-1.37.

#144105: component-base/metrics: populate DefBuckets when Buckets is empty and NativeHistograms is enabled

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) pag...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144156)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144155: kubectl events: respect --chunk-size flag

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

The `kubectl events` command accepts the `--chunk-size` flag, registered in `EventsFlags.AddFlags()` via `cmdutil.AddChunkSizeFlag(cmd, &flags.ChunkSize)`.

However, the user's `--chunk-size` f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144155)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144154: Allow handwritten defaulters to run after child defaults

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

A handwritten defaulter can depend on a generated default in a child field. For example, moving the Service type default to a `+default` marker means the handwritten traffic policy check sees an em...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144154)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144153: test: verify Downward API resource updates after in-place Pod resize

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it

Add two SIG Node end-to-end cases for the documented Downward API behavior after a successful in-place Pod resize. A process reads its CPU request from a Downward API volume, its memory limit from a projected volu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144153)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144152: apiserver: bound split result element sizes in CEL cost estimation

#### What type of PR is this?

/kind bug
/kind regression
/sig api-machinery

#### What this PR does / why we need it:

CEL cost estimation loses the element size when indexing the result of `split()`. Subsequent string operations such as `matches()` then use an unknown size and can saturate the est...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144152)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144149: kubectl: stop draining when cordon fails

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`RunCordonOrUncordon` logs node conversion and API update failures but returns nil. This means `kubectl drain` can continue processing pods even when the node was not successfully cordoned. It can also report d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144149)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144148: Preserve eviction ownership during concurrent creation

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

two EvictionRequests targeting the same pod can choose the same eviction name before the informer observes the first creation because the initial write uses server-side apply and the second write can replace th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144148)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144147: test/integration: raise apiserver health wait timeout to one minute

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144147)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144146: fix(kubectl): handle CRLF plugin completion output

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

Plugin completion output using CRLF line endings leaves a trailing carriage return on each line. A directive such as `:4\r\n` therefore fails integer parsing, appears among the completion candidates, and fal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144146)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144145: kubectl cp: do not read local file names as glob patterns

#### What type of PR is this?

/kind bug

/sig cli
/area kubectl

#### What this PR does / why we need it:

`kubectl cp` builds the upload archive in `recursiveTar`, which passes each local path through `filepath.Glob`. A file whose name contains a glob character such as `[` does not match its own p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144145)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144143: volumebinding: add BenchmarkFilter

#### What type of PR is this?

/kind cleanup
/sig scheduling
/sig storage

#### What this PR does / why we need it:

Adds `BenchmarkFilter` for the VolumeBinding plugin, modeled on podtopologyspread's `BenchmarkFilter`. Each iteration runs PreFilter, then Filter on every node through the framework p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144143)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24057: kicbase: Build for linux/s390x

The debian bug[1] was fixed and build for linux/s390x works now[2].

Tested in my fork using workflow_dispatch.

> [!NOTE]
> We cannot build kicbase for this PR. The next build after we merge will build the linux/s390x image.

[1] https://bugs.debian.org/1152930
[2] https://quay.io/repositor...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24057)

**Metadata:**
- Created: 2026-11-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24049: CI: Update gh from 2.103.3 to 2.104.0

The gh project released a [new version](https://github.com/cli/cli/releases)

This PR was auto-generated by `make update-gh-version` using [update-gh-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-gh-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/24049)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24048: Addon registry: Update registry image from 3 to 3

This PR was auto-generated by `make update-registry-version` using [update-registry-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-registry-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/24048)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59158: Document Pod binding at the API level

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
Add a page that describes _binding...

🔗 [Link](https://github.com/kubernetes/website/issues/59158)

**Metadata:**
- Created: 2026-11-14
- Comments: 1
- State: open

### kubernetes/autoscaler#10681: AWS: batch TerminateInstanceInAutoScalingGroup calls using InstanceIds

#### What type of PR is this?

/kind feature
/kind dependency

#### What this PR does / why we need it:

`asgCache.DeleteInstances` used to call `TerminateInstanceInAutoScalingGroup` once for each instance. This PR uses the batch form of the API (`AutoScalingGroupName` + `InstanceIds`) instead, send...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10681)

**Metadata:**
- Created: 2026-11-14
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-15 04:45:30*
