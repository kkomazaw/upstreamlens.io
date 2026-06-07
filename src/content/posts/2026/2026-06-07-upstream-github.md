---
title: "Upstream Github - 2026-06-07"
description: "CNCF upstream activity from github"
pubDate: 2026-06-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "needs-triage", "website", "kind/bug", "sig/cli", "sig/storage", "sig/node", "pr", "sig/scalability", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/kubelet", "area/kubectl", "kind/regression", "release-note-none", "sig/etcd", "do-not-merge/release-note-label-needed", "do-not-merge/cherry-pick-not-approved", "size/S", "do-not-merge/work-in-progress", "size/M", "approved", "do-not-merge/needs-kind", "ok-to-test", "minikube", "size/XS", "kind/cleanup", "do-not-merge/needs-area", "autoscaler", "area/vertical-pod-autoscaler", "triage/accepted", "envoyproxy", "release", "ai-gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#9772: VPA - Cleanup OWNERS

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
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9772)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#56040: [ko] Translate the glossary term 'Disruption' into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56040)

**Metadata:**
- Created: 2026-06-06
- Comments: 1
- State: open

### kubernetes/kubernetes#139538: kubectl apply --dry-run=client  may fail for CRD resource with a cryptic error message

### What happened?

`kubectl apply --dry-run=client` fails for existing CRD resources with an error
"applying patch locally: expected a struct, but received a nil". 


### What did you expect to happen?

The command should perform successful dry-run.

### How can we reproduce it (as minimally and pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139538)

**Metadata:**
- Created: 2026-06-06
- Comments: 6
- State: open

### kubernetes/kubernetes#139535: kubelet CleanSubPaths can leave pods stuck Terminating when subPath target stat returns ENOENT but mountinfo still has the mount

### What happened?

A pod using a CSI volume with `volumeMount.subPath` got stuck in `Terminating`.

The workload container had already exited, but kubelet repeatedly failed during volume cleanup before calling CSI `NodeUnpublishVolume`.

Example kubelet logs:

```text
UnmountVolume started for volu...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139535)

**Metadata:**
- Created: 2026-06-06
- Comments: 4
- State: open

### kubernetes/kubernetes#139545: apiserver: reduce watch cache lock hold for initial events

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig scalability

#### What this PR does / why we need it:

When a watch cache interval is built from an ordered store, the current path materializes the full ordered list while constructing the interval. For large initial-event collections...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139545)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139544: Improve kubelet exec probes and init CPU reuse

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

This combines three node fixes in one PR:

- Coalesces identical in-flight exec probes for the same container, expanded command, and timeout so overlapping readiness/liveness exec probes share one runtime e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139544)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139543: kubectl apply: fix --dry-run=client failure on existing CustomResourceDefinitions

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

`kubectl apply --dry-run=client` fails on an existing CustomResourceDefinition
(and other unstructured resources whose server schema advertises strategic
merge) with the cryptic error:

``...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139543)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139542: use FeatureSupportChecker to detect etcd RangeStream support

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Use the FeatureSupportChecker to detect RangeStream support (etcd 3.7+) once up front, so clusters whose etcd lacks it skip the streaming path entirely instead of issuing a RangeStream call that fails and falls b...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139542)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139540: [release-1.34] Bugfix: DeleteOptions decode errors should return 400 instead of 500

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Backport of #132359 to release-1.34.

When DELETE requests include a DeleteOptions body with invalid JSON field types, the apiserver returns HTTP 400 instead of HTTP 500.

#### Which issue(s) this PR is rel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139540)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139537: kubelet: clean deleted subpath mountpoints

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139537)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139536: Implement Exact RV LIST background load in write throughput benchmark

This change extends the write throughput benchmark background load options with ListerExactRV, which queries the watch cache with exact resource version matching. Needed for https://github.com/kubernetes/kubernetes/pull/139533

Comparing Lister vs ListerExactRV under full dimensions (150k pods):
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139536)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139534: kubelet: add object cache miss and error tests

#### What type of PR is this?
/kind cleanup
/sig node

#### What this PR does / why we need it:
Adds unit coverage for `pkg/kubelet/util/cache` ObjectCache behavior when `Get` populates an empty cache through the updater and when the updater returns an error.

#### Which issue(s) this PR fixe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139534)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139533: List snapshot data outside of lock

/kind feature

```release-note
NONE
```

TODO Rerun final benchmark
/cc @Jefftree @p0lyn0mial 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139533)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23112: drivers: Allow parallel start for safe vm drivers

Currently acquireMachinesLock uses a single lock per driver, serializing all "minikube start" commands for profiles using the same driver. This was needed for VirtualBox (VBoxManage cannot handle concurrent calls) but is unnecessary for drivers where each profile creates an independent VM or contain...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23112)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9771: Bump the patch-updates group across 2 directories with 7 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: [github.com/go-openapi/jsonreference](https://github.com/go-openapi/jsonreference).
Bumps the patch-updates group with 7 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | ---...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9771)

**Metadata:**
- Created: 2026-06-06
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/ai-gateway: v0.7.0

# Envoy AI Gateway v0.7.0

Envoy AI Gateway v0.7.0 adds **hostname-based routing** to `AIGatewayRoute`, enabling multi-tenant deployments where different hostnames expose different model sets through a single Gateway. A new **Anthropic Messages → AWS Bedrock Converse** translator lets Anthropic-native clients reach Bedrock without switching protocols. OpenAI **audio transcription and translation** endpoints arrive alongside **Azure OpenAI Responses API** support. Quota-aware rate limiting take...

🔗 [Link](https://github.com/envoyproxy/ai-gateway/releases/tag/v0.7.0)

**Metadata:**
- Version: v0.7.0
- Published: 2026-06-06
- Prerelease: No


---

*This content was automatically collected on 2026-06-07 03:39:28*
