---
title: "Upstream Github - 2026-06-20"
description: "CNCF upstream activity from github"
pubDate: 2026-06-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "lgtm", "cncf-cla: yes", "size/XS", "sig/testing", "test-infra", "issue", "kind/bug", "sig/network", "needs-triage", "kind/cleanup", "sig/api-machinery", "size/L", "release-note-none", "needs-ok-to-test", "needs-priority", "sig/scheduling", "sig/node", "kind/api-change", "area/apiserver", "release-note", "size/M", "kind/feature", "ok-to-test", "do-not-merge/release-note-label-needed", "area/kubelet", "area/release-eng", "sig/release", "size/S", "area/kube-proxy", "area/test", "wg/device-management", "kind/documentation", "kind/deprecation", "do-not-merge/needs-kind", "area/cluster-autoscaler", "do-not-merge/hold", "approved", "triage/accepted", "autoscaler", "size/XL", "kube-state-metrics", "containerd", "release", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139880: Update PlacementFeasible statuses according to KEP

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139880)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139875: Marked deprecated field as optional in comment

To get in the generated documentation the text "[Required]" avoided.


#### What type of PR is this?

/kind documentation

/kind deprecation



#### What this PR does / why we need it:

`required` **and** `deprecated` conflicts.

<img width="1076" height="415" alt="afbeelding" src="ht...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139875)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9842: Apply Provisioned condition with SSA



#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
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
/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9842)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9841: Improve benchmark performance by using lightweight fake clientsets


#### What type of PR is this?
/kind cleanup
<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regress...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9841)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/test-infra#37299: deps: bump sigs.k8s.io/prow

```
go get -u sigs.k8s.io/prow
go mod tidy
```

This is probably needed to propagate `extra_ref.auxiliary` from YAML files to the Prow cluster. Right now the new field (https://github.com/kubernetes-sigs/prow/pull/733) does not show up in the pod YAML of jobs which set it.

/cc @upodroid 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37299)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139873: [sig-network] Conntrack proxy implementation should not be vulnerable to the invalid conntrack state bug [Privileged] failing due to bug in test, again

This is a reincarnation of https://github.com/kubernetes/kubernetes/issues/134116.

I have recently started to notice `[sig-network] Conntrack proxy implementation should not be vulnerable to the invalid conntrack state bug [Privileged]` flakes in downstream OpenShift CI jobs, statistically more sig...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139873)

**Metadata:**
- Created: 2026-06-19
- Comments: 3
- State: open

### kubernetes/kubernetes#139887: Stagger remote apiservice health checks

The remote availability controller makes multiple attempts to reach the service endpoints. It launches all attempts simultaneously, but only cares about the first successful attempt.

If the apiservice is healthy and responding within the timeout, the remaining attempts are wasteful and not needed...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139887)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139886: resource: avoid double-counting pod overhead

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When pod-level requests are computed from status or allocated resources, those values can already include pod overhead. This avoids adding the same overhead a second time for those resources, while still adding overh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139886)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139884: Avoid lost Pop wakeup when a pod enters backoffQ

/kind cleanup

#### What this PR does / why we need it

When the `SchedulerPopFromBackoffQ` feature gate is enabled, `activeQueue.broadcast()` calls `cond.Broadcast()` without holding `activeQueue.lock`. In `unlockedPop()` a popping goroutine checks the backoff queue length and then calls `cond.Wait...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139884)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139883: Support etcd server overrides for CRDs

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139883)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139882: Support UnschedulableAndUnresolvable in PlacementFeasible

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139882)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139881: Filter terminated pods before SyncKnownPods to ensure runtime cleanup

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139881)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139879: Fix: UpdatePod on untracked terminated pod should mark it as terminated

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a pod in terminal phase (Failed/Succeeded) is synced for the first time without a terminal runtime cache state, mark it as terminated immediately by setting terminatedAt and finished: true. This prevents t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139879)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139878: proxy/nftables: skip ListAll on incremental syncs to fix O(n) scaling

## What this PR does / why we need it

`syncProxyRules` calls `proxier.nftables.ListAll()` on **every** sync,
including incremental (`fullSync=false`) ones. `ListAll` runs:

```
nft --json --terse list table ip kube-proxy
```

which is O(n) in the number of nftables objects. At 44k Services, a
singl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139878)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139876: apiserver/pod: preserve DRA status fields when old clients clear them via pods/status

## What this PR does / why we need it

When a client that predates the DRA fields (`ResourceClaimStatuses`,
`ExtendedResourceClaimStatus`, `NodeAllocatableResourceClaimStatuses`)
issues a `pods/status` update, those fields are absent from the
Pod it sends back. The apiserver stores the update as-is,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139876)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139874: Use ephemeral client port to track connections to fix conntrack test flakes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In https://github.com/kubernetes/kubernetes/pull/134164 we fixed the incorrect server logic causing `[sig-network] Conntrack proxy implementation should not be vulnerable to the invalid conntrack state bug [Pri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139874)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139872: kubelet/prober: add ProbeErrorAsFailure feature gate to treat exec errors as probe failures

## What this does

Probe execution errors — command not found, permission denied, CRI transport failure — are already mapped to `results.Failure` by `prober.go` before being returned. However `worker.go` has an unconditional guard:

```go
if err != nil {
    // Prober error, throw away the result.
 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139872)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139871: Fix kubelet node status update data race

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

On the first try, `tryUpdateNodeStatus` obtains the node from `kl.nodeLister.Get`, and `fastNodeStatusUpdate` obtains it from `kl.GetNode`. Both return the shared informer-cache object. The kubelet then reads that obje...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139871)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3014: feat: Implement ValidationAdmissionPolicy (VAP) metrics

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

Implements initial metrics for ValidationAdmissionPolicy(Bindings)

 
**How does this change affect the cardinality of KSM:** *(increases, decreases or does not change cardinality)*
Adds two metrics per VAP...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3014)

**Metadata:**
- Created: 2026-06-19
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdctl: v2.3.3

## Changes
- `nerdctl compose run`:
  - Honor `--workdir` (#4986, thanks to @immanuwell)

- `nerdctl network inspect`:
  - Support pseudo networks (#4953, thanks to @immanuwell)

- `nerdctl container inspect`:
  - Suppress warning message on a stopped container (#4967, thanks to @haytok)

- Misc:
  - Remove duplicated defaults from help output (#4972, thanks to @immanuwell)

- `go.mod`:
  - Update containerd library to [v2.3.2](https://github.com/containerd/containerd/releases/tag/...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.3.3)

**Metadata:**
- Version: v2.3.3
- Published: 2026-06-19
- Prerelease: No


---

*This content was automatically collected on 2026-06-20 03:28:02*
