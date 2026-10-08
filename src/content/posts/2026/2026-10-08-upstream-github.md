---
title: "Upstream Github - 2026-10-08"
description: "CNCF upstream activity from github"
pubDate: 2026-10-08
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "sig/cli", "needs-triage", "sig/node", "sig/scalability", "kind/feature", "pr", "sig/api-machinery", "release-note", "size/L", "cncf-cla: no", "needs-ok-to-test", "needs-priority", "area/test", "area/kubelet", "size/XXL", "cncf-cla: yes", "sig/testing", "do-not-merge/hold", "kind/cleanup", "release-note-none", "approved", "size/XL", "size/S", "kind/failing-test", "do-not-merge/work-in-progress", "area/apiserver", "kind/api-change", "sig/apps", "area/kubectl", "size/M", "area/logging", "sig/auth", "priority/important-longterm", "wg/structured-logging", "kind/flake", "triage/accepted", "area/provider/gcp", "sig/cloud-provider", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "website", "language/ko", "area/localization", "language/en", "prometheus", "blackbox_exporter", "containerd", "area/cri", "cncf", "kind/initiative", "needs-group", "toc", "tag/infrastructure", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142810: Generic API server admission coverage for "equivalent resources"

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR lays the groundwork for implementing the fail-closed admission policy for Dynamic Containers: https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/5972-dynamic-containers#fail-closed...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142810)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142801: kubelet: stop image GC from pruning pulled records of in-use and pinned images

#### What type of PR is this?

/kind bug
/kind flake
/sig node

#### What this PR does / why we need it:

After a GC pass, image GC passes post-GC hooks only the unused images it evaluated and kept. In-use and pinned images are filtered out earlier, and images after `freeSpace()`'s early `br...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142801)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14310: [SIG-Node]: KEP-5855 - bindMountOptions (noexec, nosuid, nodev) support for CRI mounts

### KEP/SIG-Node References

- KEP(s): KEP-5855 - Add bind mount options (noexec, nodev, nosuid) support on volumeMounts
- Stage: beta w/gate on
- KEP Issue: https://github.com/kubernetes/enhancements/issues/5855.
- KEP PR (alpha): https://github.com/kubernetes/enhancements/pull/5856.
- KEP PR (beta...

🔗 [Link](https://github.com/containerd/containerd/issues/14310)

**Metadata:**
- Created: 2026-10-07
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes: v1.38.0-alpha.2


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.38.0-alpha.2)

**Metadata:**
- Version: v1.38.0-alpha.2
- Published: 2026-10-07
- Prerelease: Yes

### kubernetes/kubernetes#142818: kubectl config set panics on users.<name>.exec and users.<name>.auth-provider

### What happened?

```console
$ kubectl config set users.foo.exec x --kubeconfig /tmp/kc
panic: unrecognized type: <nil>
```

Same with `users.<name>.auth-provider`. Exit code 2.

/sig cli


### What did you expect to happen?

An error instead of a panic.


### How can we reproduce it (as minimally...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142818)

**Metadata:**
- Created: 2026-10-08
- Comments: 2
- State: open

### kubernetes/kubernetes#142816: Kubelet rejects pod with 'TaintToleration' due to stale informer cache

### What happened?

This seems very similar to #133997.

When running a Karpenter node on AKS, we occasionally observe the following sequence:
1. Karpenter allocates a node, which initially comes up with the `karpenter.sh/unregistered:NoExecute` taint.
2. Karpenter then removes this taint from the n...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142816)

**Metadata:**
- Created: 2026-10-08
- Comments: 3
- State: open

### kubernetes/kubernetes#142803: APF Request Cost Model: Tune Seat Estimation to Allocations

### What would you like to be added?

As a follow-up and complement to https://github.com/kubernetes/kubernetes/issues/142223
 and https://github.com/kubernetes/kubernetes/issues/132233, we propose updating APF work estimation to reflect object estimations with a semi automated process of updating t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142803)

**Metadata:**
- Created: 2026-10-07
- Comments: 4
- State: open

### kubernetes/kubernetes#142823: client-go testing: deliver deletions between List and Watch

#### What type of PR is this?

/kind bug
/sig api-machinery
/area client-go

#### What this PR does / why we need it:

In client-go's fake tracker, `Watch(opts)` replays existing objects when starting at an earlier resource version, but deletions occurring between an initial `List` and subse...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142823)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142821: Kubelet: re-apply plugin allocatable on admission retry and fix TaintToleration rejection metric

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:
- Today the retry re-filters the pod that was stripped against the stale node. This change strips against the fresh node, which can change the outcome in both directions on the retry path:
   - A resource absent...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142821)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142820: Avoid Quantity.String exponent wrap near the int32 limits

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/142649

This fixes the `AsCanonicalBytes` to not wrap at the int32 exponent limits.

This fixes some `Quantity.String()` boundary conditions.

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142820)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142819: Kubelet: retry admission on stale NoExecute taints

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

The predicate admit handler evaluates pods against the informer-backed node. When a controller removes a NoExecute taint shortly before a pod is bound, the informer can still hold the tainted node an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142819)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142817: Make Quantity.AsScale(math.MinInt32) behave the same for int64 and inf.Dec

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/142649

This is a edge case clean up that makes Quantity easier to reason about.

#### Which issue(s) this PR is related to:

#### Special notes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142817)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142815: Fix MarkVolumesAsReportedInUse race



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142815)

**Metadata:**
- Created: 2026-10-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142814: apimachinery: avoid copying Unknown.Raw slice during Decode


#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

<img width="1640" height="853" alt="image" src="https://github.com/user-attachments/assets/5e9c11b5-f3b2-40ed-aef2-20ba7bf5f2d3" />


Every Kubernetes Protobuf message is framed wit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142814)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142813: apiserver/cacher: add slow watcher scenarios to BenchmarkSlowWatcherTax

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Adds five scenarios to `BenchmarkSlowWatcherTax`, which measures event delivery latency to one healthy watcher. They put a companion watcher next to it at 100 events/s: one that drains and reco...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142813)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142812: core: enable instant cast for Node and Secret

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142812)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142811: apiserver: pool limitedReadBody/deferredResponseWriter buffers

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

<img width="1507" height="763" alt="image" src="https://github.com/user-attachments/assets/f596653c-56b2-4ff3-a329-b50de4296a61" />

This PR pools two transient per-request byte buffer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142811)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142809: kubectl: make the help and explain templates method-free

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Makes kubectl's own templates method-free: the help templater exposes the twelve cobra and pflag methods its templates call as template functions, and the explain template passes `$.GVR` to `throw` instead of `$....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142809)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142808: printers: init internalversion TableColumnDefinition once

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

<img width="1519" height="508" alt="image" src="https://github.com/user-attachments/assets/c172f6ba-6118-4978-a2bd-af63df8694d9" />

During `kube-apiserver` startup, 66 REST storage pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142808)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142807: apiserver: dedup route parameters, drop PathRecorderMux map

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

<img width="1528" height="800" alt="image" src="https://github.com/user-attachments/assets/5506b3db-bbd3-4f1a-9b0f-16af5fabaa7a" />

During `kube-apiserver` startup, `k8s.io/apiserver`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142807)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142805: kubelet: get rid of context.TODO() and klog.TODO()

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Pass a context or logger from the caller instead of creating one with context.TODO() or klog.TODO() inside the callee:

- configmap, secret: the GetConfigMap() method and the caching and watching manager ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142805)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142802: test/e2e/node: use CUDA base image for GPU sanity test on amd64

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The `[Feature:GPUDevicePlugin] Sanity test using nvidia-smi` test pulled `nvidia/cuda:12.5.0-devel-ubuntu22.04`. That image is ~3.9GB and its largest layer is ~2.5GB. On the GCE GPU CI nodes, conta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142802)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142800: kubelet: add threshold context to probe failure events

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

Probe failure events are currently emitted from `prober.probe`, before the worker has applied `FailureThreshold` / `SuccessThreshold` logic. This means users can see a generic probe failure event even w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142800)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142799: autopick zones and regions for kubeup clusters

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142799)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142798: [WIP] Non Network Pods 

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142798)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#57951: kubectl rollout subcommands do not document supported resource types

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The kubectl rollout...

🔗 [Link](https://github.com/kubernetes/website/issues/57951)

**Metadata:**
- Created: 2026-10-07
- Comments: 3
- State: open

### kubernetes/website#57946: [ko] Translate content/en/docs/concepts/resource-management/dynamic-resource-allocation/device-taints.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/resource-management/dynamic-resource-allocation/device-taints.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/resource-management/dynamic-resource-allocation/devi...

🔗 [Link](https://github.com/kubernetes/website/issues/57946)

**Metadata:**
- Created: 2026-10-07
- Comments: 1
- State: open

### kubernetes/website#57940: CronJob page still says the controller does not start a Job after more than 100 missed schedules


**This is a Bug Report**

**Problem:**

I ran into this while researching a kubectl plugin idea for CronJobs: listing the next runs across a cluster, soonest first, in a chosen time zone, and flagging runs that were missed or skipped. Checking how the controller handles missed schedules, I found th...

🔗 [Link](https://github.com/kubernetes/website/issues/57940)

**Metadata:**
- Created: 2026-10-07
- Comments: 1
- State: open

### prometheus/blackbox_exporter: 0.29.0 / 2026-10-07

* [CHANGE] Reduce log noise #1517
* [CHANGE] Fail if `prober` config contains invalid value #1521
* [FEATURE] Add websocket connection prober #1278
* [FEATURE] Add probe timeout metric #1571
* [FEATURE] Add tcp and unix prober metric for `tls_cipher_info` #1579
* [FEATURE] Add CRL certificate revocation checking #1583
* [ENHANCEMENT] prober: Handle single and double encoded target parameter #1525
* [EHHANCEMENT] prober: Randomize ICMP echo identifier to avoid SNAT session collision #1537...

🔗 [Link](https://github.com/prometheus/blackbox_exporter/releases/tag/v0.29.0)

**Metadata:**
- Version: v0.29.0
- Published: 2026-10-07
- Prerelease: No

### cncf/toc#2316: [Initiative]: Sustainable DRA Driver Power Profile & Telemetry Conformance Specification and Automation

### Name

Sustainable DRA Driver Power Profile & Telemetry Conformance Specification and Automation

### Short description

Define a vendor-neutral power and energy profile and telemetry specification and automated conformance tests for sustainable Kubernetes DRA drivers.

### Responsible group

TAG...

🔗 [Link](https://github.com/cncf/toc/issues/2316)

**Metadata:**
- Created: 2026-10-07
- Comments: 0
- State: open

### cncf/toc#2317: docs(infralifecycle): rework Foundation sections

Rewrite the three Foundation sections 03_Foundation.md: Cloud Provider and Infrastructure APIs, Declarative vs. Imperative Configuration, and On-Demand vs. Continuously Reconciled.

🔗 [Link](https://github.com/cncf/toc/pull/2317)

**Metadata:**
- Created: 2026-10-07
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-08 04:26:15*
