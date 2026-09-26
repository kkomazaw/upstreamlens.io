---
title: "Upstream Github - 2026-09-26"
description: "CNCF upstream activity from github"
pubDate: 2026-09-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "website", "kind/feature", "language/ko", "area/localization", "sig/node", "sig/scalability", "area/provider/gcp", "sig/testing", "sig/cloud-provider", "kind/failing-test", "kind/cleanup", "priority/important-longterm", "triage/accepted", "wg/device-management", "pr", "area/kubelet", "sig/storage", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "kind/flake", "release-note-none", "area/apiserver", "sig/api-machinery", "size/L", "approved", "do-not-merge/work-in-progress", "sig/scheduling", "size/S", "area/dependency", "kind/dependency", "area/kubectl", "sig/cli", "size/XL", "sig/network", "area/kube-proxy", "area/cloudprovider", "sig/cluster-lifecycle", "sig/auth", "sig/instrumentation", "sig/architecture", "area/code-generation", "do-not-merge/cherry-pick-not-approved", "do-not-merge/hold", "size/XXL", "kind/api-change", "area/release-eng", "sig/apps", "sig/release", "do-not-merge/invalid-commit-message", "do-not-merge/contains-merge-commits", "prometheus", "release", "component/remote storage", "component/scraping", "component/otlp", "containerd", "ttrpc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142430: Leverage remote partitions for exclusive CPUs (Linux 6.7+)

Linux 6.7 added support for ["remote partitions"](https://docs.kernel.org/admin-guide/cgroup-v2.html#:~:text=partition%20is%20created.-,cpuset.cpus.partition,-A%20read%2Dwrite), which enables containers to allocate exclusive CPUs without modifying any other cgroups. With the deprecation of cgroups v...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142430)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/kubernetes#142409: [WIP] code-generator: fork the gogo/protobuf generator and drop the vendored module

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

KEP-5589 phase two. `protoc-gen-gogo` now builds on a pruned in-tree copy of gogo/protobuf v1.3.2 under `cmd/go-to-protobuf/protoc-gen-gogo/internal/third_party`: `gogoproto`, `proto`, `protoc-gen-gogo/{descripto...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142409)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus#19832: Proposal: Metadata manipulation — let users fix a metric's type, unit and help

## TL;DR

Prometheus lets operators rewrite **labels** freely (`metric_relabel_configs`, `write_relabel_configs`), but gives them **no supported way to rewrite metadata** — `TYPE`, `UNIT`, `HELP`. Metadata is whatever the target or sender said it was, forever.

That was tolerable while metadata was ...

🔗 [Link](https://github.com/prometheus/prometheus/issues/19832)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

## Updates

### kubernetes/website#57734: [en] Fix nested shortcode rendering on docs/concepts/configuration/manage-resources-containers page

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The nested shortcod...

🔗 [Link](https://github.com/kubernetes/website/issues/57734)

**Metadata:**
- Created: 2026-09-26
- Comments: 1
- State: open

### kubernetes/website#57728: [ko] Translate content/en/docs/tasks/configure-pod-container/enforce-standards-admission-controller.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/tasks/configure-pod-container/enforce-standards-admission-controller.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-admission-contr...

🔗 [Link](https://github.com/kubernetes/website/issues/57728)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/website#57722: [ko] Update kubectl installation next steps

**This is a Feature Request**

**What would you like to be added**

Synchronize the Korean `kubectl-whats-next.md` include with the English source. Add the missing item about kubectl and its role in Kubernetes, and update internal links to follow the Korean localization guide.

**Why is this needed*...

🔗 [Link](https://github.com/kubernetes/website/issues/57722)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/website#57721: [ko] Update kubectl installation instructions for Windows

**This is a Feature Request**

**What would you like to be added**

Synchronize the Korean Windows kubectl installation page with the English source. Update the direct-download guidance to cover architecture selection, align the PowerShell checksum verification example, and add the missing `kuberc` ...

🔗 [Link](https://github.com/kubernetes/website/issues/57721)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/website#57720: [ko] Update kubectl installation instructions for macOS

**This is a Feature Request**

**What would you like to be added**

Synchronize the Korean macOS kubectl installation page with the English source. Add the missing checksum-file cleanup step and `kuberc` configuration section, and review the section list, examples, and links for other differences.

...

🔗 [Link](https://github.com/kubernetes/website/issues/57720)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/website#57719: [ko] Update kubectl configuration verification guidance

**This is a Feature Request**

**What would you like to be added**

Update the Korean `verify-kubectl.md` include to match the English source. Translate the missing “No Auth Provider Found” troubleshooting section and its provider plugin references. Align the remaining content and internal links wit...

🔗 [Link](https://github.com/kubernetes/website/issues/57719)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/website#57718: [ko] Update kubectl Bash autocompletion instructions on Linux

**This is a Feature Request**

**What would you like to be added**

Synchronize the Korean Linux Bash autocompletion instructions with the English source. In particular, update the `yum` example to `dnf`, add the missing `chmod` command for the system-wide completion script, and align the current-se...

🔗 [Link](https://github.com/kubernetes/website/issues/57718)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/kubernetes#142423: new-line in COS image url when more than one non-deprecated image present in repo at the same time

### What happened?

Prow tests failing with "no image found". The image has newline in it:

ci-kubernetes-e2e-gci-gce-scalability-1-34: https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gci-gce-scalability-1-34/2102246705830301696
ci-kubernetes-e2e-gci-gce-scalability-1-35: https...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142423)

**Metadata:**
- Created: 2026-09-25
- Comments: 3
- State: open

### kubernetes/kubernetes#142422: MirrorPod restart status flaps False->True due to status write racing kubelet's own readiness probe

﻿## What happened
Split out from kubernetes/kubernetes#142147 — this flake predates the Aug-16 regression (10 failures pre-regression) and got worse after, but it's a real, independent bug, not just timeout pressure.

**Spec:** "MirrorPod when kubelet restarts should not change container status"

ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142422)

**Metadata:**
- Created: 2026-09-25
- Comments: 2
- State: open

### kubernetes/kubernetes#142417: e2e_node: make ImageGCPeriod (and other e2e_node wait budgets) configurable for tests

﻿## What happened
While removing duplicated `[Slow]` spec execution between `ci-kubernetes-node-e2e-containerd-serial` and `ci-kubernetes-node-e2e-containerd-slow` (kubernetes/test-infra#37903), we looked into why the `[Slow]`-tagged ImageGC/GarbageCollect/MirrorPod specs in `test/e2e_node` cost ~30...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142417)

**Metadata:**
- Created: 2026-09-25
- Comments: 4
- State: open

### kubernetes/kubernetes#142415: DRA node allocateable resources: explain dropped ResourceSlice fields

### What happened?

When running DRA E2E tests including the DRANodeAllocatableResources tests against a cluster without that feature enabled (an error on my side), tests failed (expected), but the failure points towards a gap in the ResourceSlice controller helper:

```
  [FAILED] ERROR:
        dr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142415)

**Metadata:**
- Created: 2026-09-25
- Comments: 1
- State: open

### kubernetes/kubernetes#142435: kubelet: treat an out-of-int64 ephemeral-storage limit as no size limit

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The desired size limit for a local ephemeral volume came from `Value()`, which saturates at `MaxInt64` rather than reporting that the quantity doesn't fit an `int64`. A pod limit of 100E therefore produced a size lim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142435)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142434: kubelet: honor serverCertificateKeyAlgorithm for the self-signed serving cert

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

`InitializeTLS` generates a self-signed serving certificate when neither `serverTLSBootstrap` nor an explicit certificate is configured. That path called `GenerateSelfSignedCertKey`, which always produces a 2048-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142434)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142433: test: Fix allocated pods deletion test race

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142433)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142432: [WIP] apiserver, apimachinery: configure HTTP/2 through net/http

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

x/net v0.59.0 deprecates `http2.ConfigureServer`, `http2.Server` and `http2.ConfigureTransports`. The apiserver now sets `http.Server.Protocols` and `http.Server.HTTP2`, and `SetTransportDefaults` sets `http.Tran...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142432)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142431: Bump opencontainers/cgroups to v0.1.0, moby/sys/userns to v0.2.1, containerd/log to v0.2.0, CDI specs-go to v1.1.1

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bumps the four sig-node runtime libraries that are behind their latest tags; every other vendored runtime library (containerd/api, ttrpc, cadvisor lib, runtime-spec, selinux, go-systemd, ...) is already curren...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142431)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142429: scheduler: fix data race in waitingPod.stopWithStatus

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`waitingPod.stopWithStatus` (`pkg/scheduler/framework/runtime/waiting_pods_map.go`) sets `w.done` while holding only the read side of `w.mu`. `Reject` and `Preempt` can run at the same time, from two permit plugins o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142429)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142428: kube-aggregator: remove OpenAPI v2-to-v3 conversion fallback

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Removes the OpenAPI v2-to-v3 conversion fallback in kube-aggregator for aggregated APIServers that do not serve OpenAPI v3 natively.

#### Which issue(s) this PR is related to:

https://github....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142428)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142427: [WIP] Skip converting live managedFields to smd typed on update

WIP

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Skip converting the live object's `metadata.managedFields` to structured-merge-diff typed values during `Update` when no manager owns `metadata.managedFields`.

#### Which issue(s) this PR is related to:

Pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142427)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142426: kubectl: preserve invalid error formatting through wrappers

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

`CheckErr` formats a directly supplied invalid API status as a structured validation error, but loses that formatting when the same status is wrapped with `%w`. With multiple validation causes, the wrapped e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142426)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142424: client-go: add connection pool support with P2C load balancing

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution
2. Please label this pull request according to what type of issu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142424)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142421: [WIP] Bump OpenTelemetry to v1.46.0, contrib to v0.71.0, prometheus/common to v0.71.0

#### What type of PR is this?

/kind dependency
/sig instrumentation

#### What this PR does / why we need it:

Bumps the OpenTelemetry train and its neighbours:

- `go.opentelemetry.io/otel`, `otel/trace`, `otel/metric`, `otel/sdk`, `otel/sdk/metric`, `otel/exporters/otlp/otlptrace`: v1.44.0 to v1....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142421)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142418: [release-1.34] Bump google.golang.org/grpc to v1.79.3

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142418)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142416: [release-1.35] Bump google.golang.org/grpc to v1.79.3

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142416)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142411: e2e_node: restart kubelet once NodeUnprepareResources is in progress

#### What type of PR is this?
/kind flake
/sig node

#### What this PR does / why we need it:
The two-plugin test "must call NodeUnprepareResources again if it's in progress for one plugin when Kubelet restarts" restarts the kubelet right after both NodePrepareResources calls succeed. Nothing checks...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142411)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142407: Validate watch in integration test

/kind feature

```release-note
NONE
```
/cc @mborsz @wojtek-t 

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142407)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142406: WIP: DRA: allocator performance optimizations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This implements several different optimizations, building on top of each other. See commit messages for details.

Besides improving performance of existing code as measured by scheduler_perf test cases (s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142406)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.15.0 / 2026-09-24

- [CHANGE] PromQL: A range query whose `end` was not aligned to `step` caused subqueries inside it to evaluate past the parent's last actual step, inflating `peakSamples` in the query stats and against the `query.max-samples` limit, and wasting storage I/O reading samples that were never used in the result. Add tests to prevent regression of the fix made in #18081. #18598
- [CHANGE] PromQL: Do not register a start timestamp reset if the start timestamp hasn't changed between subsequent samples....

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.15.0)

**Metadata:**
- Version: v3.15.0
- Published: 2026-09-25
- Prerelease: No

### containerd/ttrpc: v1.2.10

## What's Changed
* remove use of deprecated github.com/golang/protobuf aliase by @thaJeztah in https://github.com/containerd/ttrpc/pull/248
* remove github.com/prometheus/procfs dependency by @thaJeztah in https://github.com/containerd/ttrpc/pull/249
* build(deps): bump actions/checkout from 6.0.3 to 7.0.1 by @dependabot[bot] in https://github.com/containerd/ttrpc/pull/256
* build(deps): bump actions/setup-go from 6.4.0 to 7.0.0 by @dependabot[bot] in https://github.com/containerd/ttrpc/pul...

🔗 [Link](https://github.com/containerd/ttrpc/releases/tag/v1.2.10)

**Metadata:**
- Version: v1.2.10
- Published: 2026-09-25
- Prerelease: No


---

*This content was automatically collected on 2026-09-26 03:27:23*
