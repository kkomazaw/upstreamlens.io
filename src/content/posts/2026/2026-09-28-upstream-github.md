---
title: "Upstream Github - 2026-09-28"
description: "CNCF upstream activity from github"
pubDate: 2026-09-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/storage", "needs-triage", "sig/node", "sig/instrumentation", "sig/cloud-provider", "pr", "kind/cleanup", "sig/api-machinery", "size/XXL", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/apiserver", "size/XS", "release-note", "sig/cli", "area/kubectl", "size/M", "kind/feature", "wg/device-management", "area/kubelet", "approved", "area/test", "sig/testing", "sig/network", "sig/scheduling", "area/kube-proxy", "area/cloudprovider", "sig/cluster-lifecycle", "sig/auth", "sig/architecture", "area/code-generation", "area/dependency", "kind/dependency", "size/L", "sig/windows", "language/ko", "area/localization", "website", "language/fa", "area/vertical-pod-autoscaler", "autoscaler"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142454: cloud-controller-manager accepts the NativeHistograms feature gate but never applies it

### What happened?

`NativeHistograms` (KEP-5808) is Beta and enabled by default since v1.37. Each component must call
`metricsfeatures.ApplyFeatureGates()` for histograms to pick up the gate state:

https://github.com/kubernetes/kubernetes/blob/6c1c7702cf2052245ef10e699d45f071af306f59/staging/src/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142454)

**Metadata:**
- Created: 2026-09-27
- Comments: 3
- State: open

## Updates

### kubernetes/kubernetes#142464: The volume subpath may have wrong 0755 perm while calling SafeMakedir, kubelet happened to be restarted

### What happened?

This bug was produced as follows:
1. the volume subpath of the pv does not exists, then kubelet call `subpather.SafeMakeDir(subPath, volumePath, perm)`
2. while kubelet calls `syscall.Mkdirat` and has not called the `syscall.Fchmod` yet, kubelet restarts, https://github.com/kuber...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142464)

**Metadata:**
- Created: 2026-09-28
- Comments: 2
- State: open

### kubernetes/kubernetes#142462: [Flaking Test] [sig-node] Pods Extended (pod generation) Pod Generation pod generation should start at 1 and increment per update [MinimumKubeletVersion:1.34] [Conformance]

### Which jobs are flaking?

ci-kubernetes-e2e-ubuntu-gce-containerd

### Which tests are flaking?

Pods Extended (pod generation) Pod Generation pod generation should start at 1 and increment per update [MinimumKubeletVersion:1.34] 

### Since when has it been flaking?
[2026-09-27, 1:10:19 a.m. ci-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142462)

**Metadata:**
- Created: 2026-09-27
- Comments: 1
- State: open

### kubernetes/kubernetes#142466: resource: add an exact-oracle law test for Quantity

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This is the exact-oracle law test from #141166 (item (4) in the order of work for 1.38): a merge gate for further changes to the `resource` package.

The oracle is built only from `math/big`. Two of them, indepen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142466)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142465: Drop namespace IndexFields from store list benchmark

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

https://github.com/kubernetes/kubernetes/pull/142275 removed the namespace indexer from the cacher benchmark config, so the namespace list benchmark was requesting an index that no longer exists.

#### Which issu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142465)

**Metadata:**
- Created: 2026-09-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142461: exec/attach: let the client close the connection so no output is lost

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`ServeExec` and `ServeAttach` in `k8s.io/cri-streaming`, and the apiserver's WebSocket-to-SPDY stream translator, wrote the command's status and closed the connection right away. At that point the output the kernel h...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142461)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142460: kubectl describe: show pod scheduling gates

#### What type of PR is this?

/kind feature
/sig cli
/area kubectl

#### What this PR does / why we need it:

A pod held back by `spec.schedulingGates` shows up as `SchedulingGated` in `kubectl get pods`, but `kubectl describe pod` only prints `Status: Pending` and `PodScheduled False`. It never na...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142460)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142459: Report DRANodeAllocatableResources in DroppedFieldsError

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`DroppedFieldsError.DisabledFeatures()` didn't detect a disabled `DRANodeAllocatableResources` gate, so the error reported `unknown` as the disabled feature. This PR adds the missing check

#### Which issue(s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142459)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142458: kubelet: bound the pods API streams

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The pods API gRPC server rate-limits unary calls but not `WatchPods` streams, and grpc defaults to unlimited concurrent streams. Every client already holds node power through the root-only socket, so this is hygi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142458)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142457: kubelet: create the gRPC probe client with grpc.NewClient

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Moves the gRPC probe from the deprecated `grpc.DialContext` with `WithBlock` to `grpc.NewClient`. The client does no I/O until the health check runs, so the one probe timeout still covers connect and RPC. The tar...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142457)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142456: kubelet: cap gRPC probe health responses at 4 KiB

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The gRPC probe accepted the grpc default of 4 MiB for a health check response from a server the pod author controls, and unknown fields were ignored, so a 4 MiB "SERVING" reply counted as success. The probe now sets ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142456)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142455: Bump k8s.io/kube-openapi to 4ef312c1c17d

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bumps `k8s.io/kube-openapi` from `c4db2bdfbfe6` to `4ef312c1c17d`, two merges:

- kubernetes/kube-openapi#641: testify v1.12.1; `go-spew`, `go-difflib` and `gopkg.in/yaml.v3` leave its go.mod. kube-openapi dro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142455)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142453: Move the apiserver signal handlers into a stdlib-only leaf package

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Moves the SIGTERM/SIGINT handler into a stdlib-only leaf package, `k8s.io/apiserver/pkg/server/signals`. `server` keeps `SetupSignalHandler`, `SetupSignalContext` and `RequestShutdown` as one-line wrappers, so ex...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142453)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57769: [ko] Update content/ko/docs/tasks/configure-pod-container/resize-container-resources.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/configure-pod-container/resize-container-resources.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/configure-pod-conta...

🔗 [Link](https://github.com/kubernetes/website/issues/57769)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57768: [ko] Update content/ko/docs/concepts/scheduling-eviction/scheduler-perf-tuning.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/scheduling-eviction/scheduler-perf-tuning.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/scheduling-eviction/sc...

🔗 [Link](https://github.com/kubernetes/website/issues/57768)

**Metadata:**
- Created: 2026-09-28
- Comments: 1
- State: open

### kubernetes/website#57760: [ko] Update content/ko/docs/tutorials/configuration/pod-sidecar-containers.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57760)

**Metadata:**
- Created: 2026-09-27
- Comments: 2
- State: open

### kubernetes/website#57758: [ko] Translate content/en/blog/_posts/2026/gateway-api-v1-6-release/index.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57758)

**Metadata:**
- Created: 2026-09-27
- Comments: 1
- State: open

### kubernetes/website#57745: [ko] Translate content/en/docs/reference/instrumentation/native-histograms.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57745)

**Metadata:**
- Created: 2026-09-27
- Comments: 1
- State: open

### kubernetes/website#57743: [fa] Translate content/en/docs/setup/production-environment/tools/_index.md into Persian

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/tools/_index.md` into Persian

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/tools/

**Why is this needed**

This page is not translated ...

🔗 [Link](https://github.com/kubernetes/website/issues/57743)

**Metadata:**
- Created: 2026-09-27
- Comments: 1
- State: open

### kubernetes/autoscaler#10360: Prep VPA release branch 1.7 for upcoming 1.7.3

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Satisfies the post-release steps: https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/RELEASE.md#post-release-steps

#### Which issue(s) this PR fixes:

Relates to https://githu...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10360)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-28 03:33:51*
