---
title: "Upstream Github - 2026-10-09"
description: "CNCF upstream activity from github"
pubDate: 2026-10-09
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-triage", "website", "sig/scheduling", "kind/feature", "wg/workload-aware-scheduling", "kind/bug", "area/test", "sig/node", "sig/apps", "pr", "size/S", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-ok-to-test", "needs-priority", "release-note", "area/kubelet", "size/L", "kind/api-change", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/code-generation", "ok-to-test", "sig/api-machinery", "kind/cleanup", "size/M", "sig/auth", "kind/flake", "sig/network", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/cli", "sig/instrumentation", "sig/architecture", "sig/cloud-provider", "area/dependency", "wg/device-management", "priority/backlog", "triage/accepted", "do-not-merge/hold", "sig/scalability", "area/provider/gcp", "wg/structured-logging", "priority/important-soon", "area/release-eng", "approved", "lgtm", "sig/storage", "sig/cluster-lifecycle", "needs-rebase", "size/XL", "prometheus", "release", "client_golang", "pushgateway", "containerd", "ttrpc-rust", "stargz-snapshotter", "cncf", "review/health", "toc", "kind/review", "tag/security-and-compliance", "needs-group", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142854: KEP-2570: Add NodeReservationPolicy featuregate on Soft/Hard policy

add Alpha NodeReservationPolicy feature gate
support Soft and Hard memory reservation policies

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142854)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142853: kube-aggregator: release OpenAPI v3 lock before serving the request

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Requests for OpenAPI v3 group/versions kept the proxier's read lock for as long as the backend took to respond. If a response was slow or got stuck, APIService handlers couldn't be updated or remov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142853)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### containerd/stargz-snapshotter: v0.19.0

## Security Updates

- [CVE-2026-71482](https://github.com/containerd/stargz-snapshotter/security/advisories/GHSA-6q59-3mx3-jpgq)
- [CVE-2026-77395](https://github.com/containerd/stargz-snapshotter/security/advisories/GHSA-6j84-h5gg-w3gr)
  - To mitigate this issue, v0.19.0 requires a configuration change to the CRI setting. Specifically, the --image-service-endpoint=unix:///run/containerd-stargz-grpc/containerd-stargz-grpc.sock flag needs to be specified on kubelet. Refer to `kubelet config...

🔗 [Link](https://github.com/containerd/stargz-snapshotter/releases/tag/v0.19.0)

**Metadata:**
- Version: v0.19.0
- Published: 2026-10-08
- Prerelease: No

### cncf/toc#2320: Update SCI initiative with final report

Fixes #1709



This summarizes both the \[report](https://github.com/halcyondude/supply-chain-security-collector/tree/main/docs/presentations/2026-04-08-tag-sc) and general meeting notes (which seem to have been deleted somehow from https://notes.cncf.io/).



🔗 [Link](https://github.com/cncf/toc/pull/2320)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#57958: Wrong text in "Reserve Compute Resources for System Daemons -> Explicitly Reserved CPU List" chapter

In [Explicitly Reserved CPU List](https://kubernetes.io/docs/tasks/administer-cluster/reserve-compute-resources/#explicitly-reserved-cpu-list) chapter it is said:

> reservedSystemCPUs is meant to define an explicit CPU set for OS system daemons and kubernetes system daemons. reservedSystemCPUs is f...

🔗 [Link](https://github.com/kubernetes/website/issues/57958)

**Metadata:**
- Created: 2026-10-08
- Comments: 2
- State: open

### kubernetes/kubernetes#142855: WAS: Gang-schedule Pods that are created in order, like in MPI bootstrap

### What would you like to be added?

 A way for a gang PodGroup or CompositePodGroup to account for Pods that its owning controller intentionally creates later, after other Pods in the group are already running/complete.

Today the scheduler holds a gang's Pods until minCount of them exist on the c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142855)

**Metadata:**
- Created: 2026-10-09
- Comments: 2
- State: open

### kubernetes/kubernetes#142852: Swap e2e "Basic functionality" LimitedSwap tests can't fail

### What happened?

While looking into #138226 I noticed the LimitedSwap QoS tests in `test/e2e_node/swap_test.go` don't actually test anything. There are two bugs:

1. `getSwapTestPod` builds `resources` for the requested QoS class but never puts them on the pod. It's just returned `getSleepingPod(...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142852)

**Metadata:**
- Created: 2026-10-08
- Comments: 3
- State: open

### kubernetes/kubernetes#142845: PodGroup rejects system priority classes: spec.priority is capped at HighestUserDefinablePriority

### What happened?

A PodGroup that references a built-in system PriorityClass is always rejected. Priority admission resolves `spec.priority` from the class ([admission.go#L203-L222](https://github.com/kubernetes/kubernetes/blob/0887d3330e9bb0489dac763160f2ca27702e7729/plugin/pkg/admission/priority...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142845)

**Metadata:**
- Created: 2026-10-08
- Comments: 5
- State: open

### kubernetes/kubernetes#142844: WorkloadWithJob: Jobs with names of 58+ characters never start because the PodGroupTemplate name exceeds 63 bytes

### What happened?

With `WorkloadWithJob` enabled, a Job whose name is 58+ characters never starts pods. The Job controller names the PodGroupTemplate `<job-name>-pgt-0` ([job_scheduling_manager.go#L518-L521](https://github.com/kubernetes/kubernetes/blob/0887d3330e9bb0489dac763160f2ca27702e7729/pkg...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142844)

**Metadata:**
- Created: 2026-10-08
- Comments: 3
- State: open

### kubernetes/kubernetes#142857: test/e2e_node: fix LimitedSwap QoS assertions

#### What type of PR is this?

/kind bug
/sig node
/area test

#### What this PR does / why we need it:

The LimitedSwap Basic functionality tests had two defects that allowed incorrect behavior to go undetected:

- `getSwapTestPod` constructed resource requirements but never applied them to the con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142857)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142856: use fixed name for templates for podgroups to avoid overflow issues

…or pod group templates

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142856)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142851: client-go/util/certificate: simplify Current loading

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Current() checks whether certificate files exist before loading them.
These checks add filesystem operations and introduce a check-before-open
TOCTOU smell: a successful existence check does not guarantee...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142851)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142850: e2e_node: fix swap stress test running the node out of memory

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The "use more than the node memory capacity" swap test allocates the full node memory but only requests 30%, so LimitedSwap gives it ~307Mi of swap. That's not enough to hold what doesn't fit in RAM, so the node ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142850)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142849: bump github.com/emicklei/go-restful/v3 to v3.14.0

#### What type of PR is this?

/kind cleanup

/sig api-machinery

#### What this PR does / why we need it:

<img width="1249" height="651" alt="image" src="https://github.com/user-attachments/assets/b0c737c4-f3d1-43c4-a5a6-3d3b8ff3271e" />

This PR bumps `github.com/emicklei/go-restful/v3` from `v3....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142849)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142848: apiserver/cacher: reproduce exact RV lists falling back to etcd after compaction


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142848)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142847: test/e2e_node: drop the dead jenkins conformance script

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

`test/e2e_node/jenkins/conformance/conformance-jenkins.sh` is unreachable from this repository: nothing in `kubernetes/kubernetes` or `kubernetes/test-infra` references it by name, and the script's own ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142847)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142846: Allow system priority classes on PodGroups



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142846)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142843: replace gsutil with gcloud storage

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142843)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142842: kubelet: kill containers concurrently without killing the pod sandbox

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

When a kubelet pod goroutine needs to kill containers without killing the pod sandbox (for example, kubectl set image), SyncPod() kills those containers one at a time. This becomes a problem because a long ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142842)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142840: fix cluster approvers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142840)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142839: [WIP] hack: list modules in readonly mode

#### What type of PR is this?

/kind cleanup
/sig architecture
/area dependency

#### What this PR does / why we need it:

`go list -m all` under `GOFLAGS=-mod=mod` records `/go.mod` hashes that `go mod tidy` removes, so update-vendor and lint fought over go.sum and every verify run edited it. Switc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142839)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142837: kubelet: support hugepages in `--system-reserved` and `--kube-reserved` flags

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142837)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142836: Add initial version of ORCA load metrics handler

https://github.com/kubernetes/enhancements/issues/6315 
/kind feature

/cc @mborsz

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142836)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142835: Assert in tests that RV from storage matches watch cache

/kind feature

Assertions will allow us to soak resourceVersion from storage and unblock reading snapshot outside the lock. 

```release-note
NONE
```

/cc @wojtek-t @mborsz

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142835)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142833: client-go: replace deprecated wait.PollImmediateUntil in cache and transport

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Replaces deprecated wait.PollImmediateUntil with context-based wait.PollUntilContextCancel in client-go tools/cache (WaitForCacheSync) and transport (cert rotation). This isolates the production code updates in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142833)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142831: test: prevent flaking in TestWebhookConverter due to missing default delegate

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

Fixes flaking in `k8s.io/apiextensions-apiserver/test/integration: conversion - TestWebhookConverterWithWatchCache`.

In `testWebhookConverter`, `dynamicWebhookHandler` is used to swap t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142831)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142830: scheduler: Extend workload API validations

#### What type of PR is this?
/kind feature
/kind api-change
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

We are extending the validation for the Workload API to enforce these invariants and prevent semantically improper parent-child relationships:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142830)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_golang: v1.25.0

:warning: This release raises the minimum required Go version to 1.26 and includes breaking API changes in `api/prometheus/v1` (see the [CHANGE] entries below). :warning:

## 1.25.0 / 2026-10-07

* [CHANGE] Minimum required Go version is now 1.26, only the two latest Go versions (1.26 and 1.27) are supported from now on. #2138
* [CHANGE] api/prometheus/v1: `Query`, `QueryRange`, `Series`, `LabelNames`, and `LabelValues` now return `Infos` annotations in addition to `Warnings`, matching the Prome...

🔗 [Link](https://github.com/prometheus/client_golang/releases/tag/v1.25.0)

**Metadata:**
- Version: v1.25.0
- Published: 2026-10-08
- Prerelease: No

### prometheus/pushgateway: 1.11.4 / 2026-10-08

* [ENHANCEMENT] Add distroless Docker image variant.
* [BUGFIX] Update dependencies to pull in possibly relevant bugfixes, build binaries with go v1.27.


🔗 [Link](https://github.com/prometheus/pushgateway/releases/tag/v1.11.4)

**Metadata:**
- Version: v1.11.4
- Published: 2026-10-08
- Prerelease: No

### containerd/ttrpc-rust: ttrpc 0.10.0 and code generators

This coordinated release publishes ttrpc 0.10.0 and its matching code generators. All four crates were published on October 9, 2026 from commit `8fdc03fa7180ac150933eadd7df4f8a4470e1034`.

| Crate | Previous release | New release | Git tag |
| --- | --- | --- | --- |
| ttrpc | 0.9.0 | [0.10.0](https://crates.io/crates/ttrpc/0.10.0) | `v0.10.0` |
| ttrpc-compiler | 0.8.0 | [0.9.0](https://crates.io/crates/ttrpc-compiler/0.9.0) | `ttrpc-compiler-v0.9.0` |
| ttrpc-codegen | 0.6.0 | [0.7.0](https://...

🔗 [Link](https://github.com/containerd/ttrpc-rust/releases/tag/v0.10.0)

**Metadata:**
- Version: v0.10.0
- Published: 2026-10-09
- Prerelease: No

### cncf/toc#2321: [HEALTH]: xDS maintenance

### Project name

xDS

### Project Health Notification Link (issue, message to mailing list etc)

https://github.com/envoyproxy/envoy/issues/47886

### Concern

I have been trying to get any sort of response from xDS maintainers across several channels (background in linked issue) to no avail for a ...

🔗 [Link](https://github.com/cncf/toc/issues/2321)

**Metadata:**
- Created: 2026-10-09
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-09 04:30:38*
