---
title: "Upstream Github - 2026-08-27"
description: "CNCF upstream activity from github"
pubDate: 2026-08-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "sig/node", "kind/flake", "needs-triage", "kind/bug", "sig/cli", "needs-sig", "sig/api-machinery", "pr", "area/kubectl", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/kubelet", "release-note-none", "do-not-merge/needs-kind", "sig/network", "sig/apps", "size/L", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/test", "kind/cleanup", "kind/api-change", "kind/feature", "sig/auth", "sig/testing", "area/api-validation", "size/XXL", "area/code-generation", "kind/failing-test", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "do-not-merge/blocked-paths", "area/conformance", "kind/regression", "approved", "sig/scheduling", "sig/storage", "size/XS", "do-not-merge/needs-sig", "sig/release", "area/release-eng", "website", "language/ja", "area/localization", "lgtm", "do-not-merge/hold", "language/en", "size/XL", "sig/docs", "area/cluster-autoscaler", "triage/accepted", "autoscaler", "area/vertical-pod-autoscaler", "area/provider/cluster-api", "committee/steering", "area/elections", "community", "prometheus", "exporter-toolkit", "envoyproxy", "envoy", "cncf", "kind/initiative", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### envoyproxy/envoy: v1.39.1

repo: Release v1.39.1

**Summary of changes**:

* Security fixes:
  - [CVE-2026-73511](https://github.com/envoyproxy/envoy/security/advisories/GHSA-m745-gh6x-349x): url normalization: strip path parameters from individual path segments per RFC 3986 section 3.3. Revert with `envoy.reloadable_features.strip_path_parameters_per_segment`.
  - [CVE-2026-73512](https://github.com/envoyproxy/envoy/security/advisories/GHSA-r6j2-mrm5-72mg): http3: UAF on a specifically timed sequence of HTTP/3 fram...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.1)

**Metadata:**
- Version: v1.39.1
- Published: 2026-08-27
- Prerelease: No

### envoyproxy/envoy: v1.38.4

repo: Release v1.38.4

**Summary of changes**:

* Security fixes:
  - [CVE-2026-73511](https://github.com/envoyproxy/envoy/security/advisories/GHSA-m745-gh6x-349x): url normalization: strip path parameters from individual path segments per RFC 3986 section 3.3. Revert with `envoy.reloadable_features.strip_path_parameters_per_segment`.
  - [CVE-2026-73512](https://github.com/envoyproxy/envoy/security/advisories/GHSA-r6j2-mrm5-72mg): http3: UAF on a specifically timed sequence of HTTP/3 frames.
  ...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.4)

**Metadata:**
- Version: v1.38.4
- Published: 2026-08-26
- Prerelease: No

### envoyproxy/envoy: v1.37.6

repo: Release v1.37.6

**Summary of changes**:

* Security fixes:
  - [CVE-2026-73511](https://github.com/envoyproxy/envoy/security/advisories/GHSA-m745-gh6x-349x): url normalization: strip path parameters from individual path segments per RFC 3986 section 3.3. Revert with `envoy.reloadable_features.strip_path_parameters_per_segment`.
  - [CVE-2026-73512](https://github.com/envoyproxy/envoy/security/advisories/GHSA-r6j2-mrm5-72mg): http3: UAF on a specifically timed sequence of HTTP/3 frames.
  ...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.6)

**Metadata:**
- Version: v1.37.6
- Published: 2026-08-26
- Prerelease: No

### envoyproxy/envoy: v1.36.10

repo: Release v1.36.10

**Summary of changes**:

* Security fixes:
  - [CVE-2026-73511](https://github.com/envoyproxy/envoy/security/advisories/GHSA-m745-gh6x-349x): url normalization: strip path parameters from individual path segments per RFC 3986 section 3.3. Revert with `envoy.reloadable_features.strip_path_parameters_per_segment`.
  - [CVE-2026-73512](https://github.com/envoyproxy/envoy/security/advisories/GHSA-r6j2-mrm5-72mg): http3: UAF on a specifically timed sequence of HTTP/3 frames.
 ...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.10)

**Metadata:**
- Version: v1.36.10
- Published: 2026-08-26
- Prerelease: No

## Updates

### kubernetes/kubernetes: v1.37.0


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0)

**Metadata:**
- Version: v1.37.0
- Published: 2026-08-26
- Prerelease: No

### kubernetes/kubernetes#141614: [Flaking Test] [sig-node] Probing container should *not* be restarted with a non-local redirect http liveness probe [NodeConformance]

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-node-e2e-containerd/2092572562436395008

### Which tests are flaking?

E2eNode Suite: [It] [sig-node] Probing container should *not* be restarted with a non-local redirect http liveness probe [NodeConforma...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141614)

**Metadata:**
- Created: 2026-08-27
- Comments: 1
- State: open

### kubernetes/kubernetes#141611: kubectl sort-by uses an inconsistent comparison for two missing field values

### What happened?

`kubectl get --sort-by` uses `RuntimeSort.Less` and `TableSorter.Less` to order objects. When both compared objects are missing the selected JSONPath field, both comparators return `true` in both directions:

```text
Less(i, j) == true
Less(j, i) == true
```

This violates the `s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141611)

**Metadata:**
- Created: 2026-08-27
- Comments: 3
- State: open

### kubernetes/kubernetes#141609: cgroup v2: Node Allocatable memory.max update can trigger reclaim/OOM before eviction

### What happened?

On cgroup v2, kubelet can lower the Node Allocatable `memory.max` for the pod cgroup while existing pod usage is already above the new limit.

`enforceNodeAllocatableCgroups` assumes that this update will fail until pod eviction reduces usage, and retries the cgroup update once p...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141609)

**Metadata:**
- Created: 2026-08-27
- Comments: 2
- State: open

### kubernetes/kubernetes#141606: [InPlacePodLevelResourcesVerticalScaling] In-place pod resize events do not capture pod-level resources

When issuing in-place pod resize requests, you can view the progress of resizes via events:

```
pod-resize-memory-volumes-3713   32s         Normal    ResizeStarted             pod/resize-memory-vol-test-qj4lh
          Pod resize started: {"containers":[{"name":"c1","resources":{"limits":{"cpu":"2...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141606)

**Metadata:**
- Created: 2026-08-26
- Comments: 2
- State: open

### kubernetes/kubernetes#141599: Persistent sandbox name reservation lock leak in containerd triggered by interrupted CNI execution (calico signal: killed), Pod infinite recreate loop

### What happened?

In manually binary‑deployed Kubernetes cluster, after recovering from corrupted containerd bolt metadata database, we encountered persistent sandbox name reservation lock leakage.

When creating Pods (CoreDNS as representative workload):

1. Pod keeps cycling between `ContainerCr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141599)

**Metadata:**
- Created: 2026-08-26
- Comments: 2
- State: open

### kubernetes/kubernetes#141594: core/v1: PodLogOptions.Stream has the wrong protobuf wire type in its struct tag

### What happened?

PodLogOptions.Stream is a string, but its Go struct tag says it is a varint (a number).
                                                        
The tag is only a label. The generated proto and marshaller both treat the field as a string, and the wire format is correct. But libra...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141594)

**Metadata:**
- Created: 2026-08-26
- Comments: 2
- State: open

### kubernetes/kubernetes#141613: kubectl: handle equal missing sort values

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

Makes the kubectl runtime and table sorters treat two missing JSONPath field values as equal. Previously both `Less(i, j)` and `Less(j, i)` returned true when both objects lacked the selected field, violatin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141613)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141610: kubelet: avoid unsafe Node Allocatable memory.max updates

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

On cgroup v2, lowering the Node Allocatable pod cgroup memory.max while memory.current is already above the target can trigger reclaim and memcg OOM before eviction completes. Check current usage before upd...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141610)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141608: EndpointSliceMirroring: Ignore NotFound Errors When Deleting EndpointSlices


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141608)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141607: fix(kubectl): stop drain eviction retry loop when pod is recreated or rescheduled

## Problem

When `kubectl drain` attempts to evict a pod and receives an eviction error (such as `TooManyRequests` due to a `PodDisruptionBudget`), it enters a retry loop. If the target pod on the draining node is deleted and recreated (e.g. by a StatefulSet or Deployment) under the same name with...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141607)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141605: Promote RBAC beta declarative validation tags to stable 

#### What type of PR is this?

/kind cleanup
/kind feature
/area api-validation

#### What this PR does / why we need it:

This PR promotes RBAC beta declarative validation tags to stable.
- Removed `+k8s:beta` prefix from DV tags to reach stable.
- Removed handwritten checks and unit test...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141605)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141604: [POC][WIP] Hermetic pods

/kind feature

This is a POC please see https://groups.google.com/a/kubernetes.io/g/sig-network/c/dWqf4h4Dz8s/m/6MNo-2w2EgAJ

#### What this PR does / why we need it:
This PR introduces the prototype implementation for **Hermetic Pods** (zero-network / CNI-less pod isolation).


#### Propose...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141604)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141603: Automated cherry pick of #141554: conformance: demote guaranteed pod resize tests to e2e

Cherry pick of #141554 on release-1.36.

#141554: conformance: demote guaranteed pod resize tests to e2e

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind fai...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141603)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141602: Automated cherry pick of #141554: conformance: demote guaranteed pod resize tests to e2e

Cherry pick of #141554 on release-1.35.

#141554: conformance: demote guaranteed pod resize tests to e2e

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind fai...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141602)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141600: Refactor flags and options in `kubectl api-resources` cmd

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141600)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141598: kubelet: warn when projected volume sources produce conflicting output paths

#### What type of PR is this?
/kind bug
/sig node
/sig storage

#### What this PR does / why we need it:

When two or more projected volume sources (secrets, configMaps, downwardAPI items, serviceAccountToken, clusterTrustBundle, or podCertificate) project different data to the same output path, the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141598)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141597: storage: fix CSIDriver attachRequired field path

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

CSIDriver validation reports errors on `spec.attachedRequired`. That field does not
exist. The JSON name is `attachRequired`
(`staging/src/k8s.io/api/storage/v1/types.go:313`).

Both call sites were wron...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141597)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141596: api: fix protobuf wire types in struct tags that disagree with the Go field type

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141596)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141595: core/v1: fix the protobuf wire type in the PodLogOptions.Stream struct tag

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`PodLogOptions.Stream` is a `*string` but its protobuf struct tag says `varint`. The generated proto and marshaller already treat it as a string, so this is a tag-only fix with no wire change; it stops librarie...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141595)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141593: fix endpointslice out of sync

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141593)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4505: Add krel attestation sign

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR adds support to krel to sign in-toto statements onto sigstore bundles.

The new subcommand is called `krel sign attestation`. While it can sign any attestation (even on a user's laptop) the main g...

🔗 [Link](https://github.com/kubernetes/release/pull/4505)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website: snapshot-initial-v1.37: Release 1.37

Release 1.37 initial snapshot

🔗 [Link](https://github.com/kubernetes/website/releases/tag/snapshot-initial-v1.37)

**Metadata:**
- Version: snapshot-initial-v1.37
- Published: 2026-08-26
- Prerelease: No

### kubernetes/website#57211: Learn Kubernetes Basics

🔗 [Link](https://github.com/kubernetes/website/issues/57211)

**Metadata:**
- Created: 2026-08-27
- Comments: 1
- State: open

### kubernetes/website#57205: [ja] Translate content/en/blog/_posts/2026/kubernetes-v1-37-release/index.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

- Translate "[Kubernetes v1.37:(Garhwal)](https://kubernetes.io/blog/2...

🔗 [Link](https://github.com/kubernetes/website/issues/57205)

**Metadata:**
- Created: 2026-08-26
- Comments: 1
- State: open

### kubernetes/website#57209: Update the configuration API reference for v1.37

Regenerated the kubectl reference for v1.37.0.

- Generated with `make copyconfigapi` from kubernetes-sigs/reference-docs
- Generator changes: kubernetes-sigs/reference-docs https://github.com/kubernetes-sigs/reference-docs/pull/472
- Generated files only, with no hand edits


Two new pages:...

🔗 [Link](https://github.com/kubernetes/website/pull/57209)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57208: Update the kubeadm reference for v1.37

Regenerated the kubeadm reference for v1.37.0.

- Generated with `make copycomp-kubeadm` from kubernetes-sigs/reference-docs 
- Generator changes: kubernetes-sigs/reference-docs https://github.com/kubernetes-sigs/reference-docs/pull/471
- Generated files only, with no hand edits


cc: @kubern...

🔗 [Link](https://github.com/kubernetes/website/pull/57208)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57207: Update the kubectl reference for v1.37.0.

Regenerated the kubectl reference for v1.37.0.

- Generated with `make copycomp-kubectl` from kubernetes-sigs/reference-docs 
- Generator changes: kubernetes-sigs/reference-docs https://github.com/kubernetes-sigs/reference-docs/pull/471
- Generated files only, with no hand edits


cc: @kubern...

🔗 [Link](https://github.com/kubernetes/website/pull/57207)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57206: Update the component reference for v1.37

Regenerated the component reference for v1.37.0.

- Generated with `make copycomp-core` from kubernetes-sigs/reference-docs 
- Generator changes: kubernetes-sigs/reference-docs https://github.com/kubernetes-sigs/reference-docs/pull/471
- Generated files only, with no hand edits


cc: @kuberne...

🔗 [Link](https://github.com/kubernetes/website/pull/57206)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57203: Update the Kubernetes API Markdown reference for v1.37

Regenerates the Markdown API reference pages for v1.37.

- Generated with `make copyapimd` from kubernetes-sigs/reference-docs 
- Generator changes: https://github.com/kubernetes-sigs/reference-docs/pull/470, the same spec as the
  HTML reference
- Generated files only, no hand edits

/hold u...

🔗 [Link](https://github.com/kubernetes/website/pull/57203)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57202: Update the Kubernetes API reference for v1.37

Regenerated the Kubernetes API reference  for v1.37.0.

- Generated with `make copyapi` from kubernetes-sigs/reference-docs at commit
- Generator changes: kubernetes-sigs/reference-docs https://github.com/kubernetes-sigs/reference-docs/pull/470 
- Generated files only, with no hand edits


cc...

🔗 [Link](https://github.com/kubernetes/website/pull/57202)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10199: clusterapi: DRA pods never trigger scale-from-zero on CA 1.35+

**Which component are you using?**:

cluster-autoscaler (cloudprovider/clusterapi)

/area cluster-autoscaler

**What version of the component are you using?**:

Component version: v1.36.1 (helm chart 9.58.0)

Note: the responsible code is unchanged on current master.

**What k8s version are you usin...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10199)

**Metadata:**
- Created: 2026-08-26
- Comments: 2
- State: open

### kubernetes/autoscaler#10198: Support Server-Side Apply across VPA components

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area vertical-pod-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler,...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10198)

**Metadata:**
- Created: 2026-08-26
- Comments: 8
- State: open

### kubernetes/autoscaler#10200: clusterapi: set resource slice count for DRA scale-from-zero

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Cluster API scale-from-zero generates a synthetic `ResourceSlice` for node
groups configured with DRA capacity annotations.

The generated `ResourcePool` currently leaves `ResourceSliceCount` at its
zero value. The D...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10200)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9130: [Steering Election 2026] Update voters.yaml with voters canonical github logins for case sensitivity

Update voters.yaml for the 2026 Steering election with the following:
- anupamghosh to AnupamGhosh, confirmed with https://api.github.com/users/anupamghosh
-  jeffwan to Jeffwan, confirmed with https://api.github.com/users/jeffwan
-  TommyStarK to TommyStark, confirmed with https://api.github.com...

🔗 [Link](https://github.com/kubernetes/community/pull/9130)

**Metadata:**
- Created: 2026-08-26
- Comments: undefined
- State: open
- Draft: No

### prometheus/exporter-toolkit: v0.19.0

It's the second release today because @ArthurSens forgot to pull latest `master` before tagging v0.18.0 🤦 

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/exporter-toolkit/pull/428
* Bump actions/checkout from 7.0.0 to 7.0.1 by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/426
* Bump the codeql group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/prometheus/exporter-...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.19.0)

**Metadata:**
- Version: v0.19.0
- Published: 2026-08-26
- Prerelease: No

### prometheus/exporter-toolkit: v0.18.0

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/exporter-toolkit/pull/414
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/exporter-toolkit/pull/416
* Bump the golang-org-x group with 2 updates by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/418
* Bump the codeql group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/prom...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.18.0)

**Metadata:**
- Version: v0.18.0
- Published: 2026-08-26
- Prerelease: No

### cncf/toc#2285: [Initiative]: White Paper on Runtime Conditions Profiles Specification

### Name

White Paper on Runtime Conditions Profiles Specification

### Short description

Develop and publish a CNCF white paper on Runtime Conditions Profiles Specification, building on initiative #1797 and the draft submitted in PR #2241.

### Responsible group

TAG Developer Experience

### Does...

🔗 [Link](https://github.com/cncf/toc/issues/2285)

**Metadata:**
- Created: 2026-08-26
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-27 07:13:36*
