---
title: "Upstream Github - 2026-11-25"
description: "CNCF upstream activity from github"
pubDate: 2026-11-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/flake", "needs-triage", "kind/bug", "sig/cli", "pr", "kind/documentation", "sig/api-machinery", "size/XS", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/kubelet", "release-note", "size/M", "area/test", "size/S", "sig/apps", "approved", "sig/testing", "area/apiserver", "kind/feature", "do-not-merge/hold", "sig/storage", "kind/failing-test", "ok-to-test", "kind/cleanup", "lgtm", "sig/scheduling", "size/L", "do-not-merge/work-in-progress", "kind/api-change", "priority/important-longterm", "do-not-merge/cherry-pick-not-approved", "triage/accepted", "area/kubectl", "kind/regression", "size/XXL", "sig/docs", "website", "language/ko", "language/en", "release", "kompose", "kube-state-metrics", "minikube", "sig/multicluster", "sig/network", "committee/steering", "area/annual-reports", "community", "sig/contributor-experience", "area/contributor-guide", "sig/scalability", "prometheus", "alertmanager", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144452: Promote ConcurrentWatchObjectDecode to GA in 1.39

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Graduates concurrent watch object decode to GA and locks the feature gate to default in v1.39.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/6178

#### Specia...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144452)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144450: volume/configmap: migrate legacy klog to structured logging

/sig storage
/kind cleanup
/release-note-none

Convert the two V(3) messages and five error messages in ConfigMap volume setup to structured logging per KEP-1602. Preserve the pod UID, ConfigMap entry count and byte count, and attach the relevant object, volume or path to failures.

Refs #144038

##...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144450)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24125: Add SIG Cluster Lifecycle leads to OWNERS and SECURITY_CONTACTS

SIG Cluster Lifecycle sent a call for action to its projects:

https://groups.google.com/a/kubernetes.io/g/sig-cluster-lifecycle/c/VkZxqrK9Iq0

The SIG leads should be listed as approvers and as additional security contacts, so they can act when minikube maintainers are unavailable. Minikube current...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24125)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144444: [Flaking Test][sig-node] Dynamic Node-Local Ephemeral Volumes OCI image volume failure cleanup

### Which jobs are flaking?

[ci-kubernetes-e2e-kind-alpha-beta-features](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-kind-alpha-beta-features)

### Which tests are flaking?

Kubernetes e2e suite: [It] [sig-node] Dynamic Node-Local Ephemeral Volumes [FeatureGate:DynamicNode...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144444)

**Metadata:**
- Created: 2026-11-24
- Comments: 1
- State: open

### kubernetes/kubernetes#144439: kubectl logs: when a pod's last log line has no trailing newline, the next pod's output (and its --prefix) is concatenated onto it

### What happened?

When a container's final stdout/stderr write does not end with a newline, the CRI runtime logs it with the `P` (partial) tag. Reading it back (via `kubectl logs`, possibly long after the container exited) returns the content **without** a trailing newline. This is expected from t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144439)

**Metadata:**
- Created: 2026-11-24
- Comments: 5
- State: open

### kubernetes/kubernetes#144455: Clarify remote command output lifetime on cancellation

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Clarifies the `Executor.StreamWithContext` contract when its context ends.
The WebSocket or SPDY executor can return while a goroutine is still writing
to `StreamOptions.Stdout` or `StreamOptions.Stderr`. C...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144455)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144454: [pluginmanager]: Set localhost authority on registration dial

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144454)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144453: test/integration/job: drop the controller from the not-started tests

#### What type of PR is this?

/kind flake
/sig apps

#### What this PR does / why we need it:

`TestMutablePodResourcesForSuspendedJobsNotYetStarted` and `TestMutableSchedulingDirectivesForSuspendedJobsNotYetStarted` fail with a conflict, for example in [`ci-kubernetes-integration-master`](https://...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144453)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144451: e2e/storage: let drivers opt out of the read-only raw block test

/sig storage
/kind failing-test

#### What this PR does

The multiVolume suite assumes a driver that supports raw block volumes can publish the same block device read-only to two Pods on one node. Some drivers reject that request. The suite currently checks for a driver named `vsphere` and one exact...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144451)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144448: apiserver: fix the connection count flake in the HTTP/2 tests

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

`TestClientReceivedGOAWAY` became flaky when #144168 merged. In `ci-kubernetes-unit` it failed in 7 of 187 runs after the merge and in 0 of 380 runs before it, with `expect TCP connection: 2, act...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144448)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144447: kubelet: stop waiting for volumes a dynamic update removed from the pod

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`WaitForAttachAndMount` derives its expected volumes from the pod snapshot passed in by `SyncPod`. A pod sync can be running with a snapshot taken before a dynamic pod update. When that update removes a volume, the p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144447)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144446: component-helpers/scheduling: add zero-alloc streaming NodeSelector matching and LazyErrorNodeSelector.MatchLabels

#### What type of PR is this?

/kind cleanup
/sig scheduling

#### What this PR does / why we need it:

1. Adds stateless streaming `nodeaffinity.MatchNodeSelectorTerms(node, ns)` and `nodeaffinity.MatchNodeLabels(nodeLabels, ns)` and routes `corev1.MatchNodeSelectorTerms` through them, avoiding per...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144446)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144445: apimachinery: replace hot-path DNS/label regex validation with ASCII scanners and lazy field paths

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Replaces hot-path `regexp.MustCompile` matching in `apimachinery/pkg/api/validate/content` (`IsDNS1123Label`, `IsDNS1123Subdomain`, `IsDNS1123SubdomainCaseless`, `IsLabelKey`, `IsLabelValue`, `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144445)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144443: Automated cherry pick of #142802: test/e2e/node: use CUDA base image for GPU sanity test on amd64

Cherry pick of #142802 on release-1.36.

#142802: test/e2e/node: use CUDA base image for GPU sanity test on amd64

Same devel image pull timeout on release-1.36, e.g. https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-device-plugin-gpu-1-36/2122706536240254976. Master has been...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144443)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144442: Automated cherry pick of #142802: test/e2e/node: use CUDA base image for GPU sanity test on amd64

Cherry pick of #142802 on release-1.37.

#142802: test/e2e/node: use CUDA base image for GPU sanity test on amd64

The GPU sanity test on release-1.37 still times out on the devel image pull, 5 of the last 90 runs, e.g. https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-device...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144442)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144441: kubectl: separate unterminated sequential log streams

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144441)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144440: client-go/reflector: keep backoff at cap while failures continue

#### What type of PR is this?

/kind bug
/kind regression

/sig api-machinery

#### What this PR does / why we need it:

#136824 replaced the deprecated `wait.NewExponentialBackoffManager` in the reflector with `wait.Backoff.DelayWithReset`. The two reset differently:

- The old manager reset the ba...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144440)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144438: Fix host-dependent hugepage fixtures in kubelet cgroup tests

#### What type of PR is this?

/kind bug
/kind failing-test
/sig node

#### What this PR does / why we need it:

After #142837 added filtering of unsupported hugepage sizes, `TestMaybeSetHugetlb` and `TestCgroupCommonToResources` still unconditionally configure and expect `2MB` limits.

 [...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144438)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144436: apimachinery: add json/v2 support

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add MarshalJSONTo and UnmarshalJSONFrom to metav1.Time, MicroTime, Duration, GroupVersion and FieldsV1, resource.Quantity, intstr.IntOrString and runtime.RawExtension. The legacy methods stay because some consume...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144436)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59252: Broken `#extended-resource` anchor: links point to `dra-features` instead of `dra-api`

**This is a Bug Report**

**Problem:**

Several English pages link to "Extended Resource allocation by DRA" with this URL:

`/docs/concepts/resource-management/dynamic-resource-allocation/dra-features/#extended-resource`

The `dra-features` page has no `extended-resource` anchor.
The section is on t...

🔗 [Link](https://github.com/kubernetes/website/issues/59252)

**Metadata:**
- Created: 2026-11-25
- Comments: 2
- State: open

### kubernetes/website#59248: [ko] Update the `full_link` of the Korean kubectl glossary entry

**This is a Bug Report**

**Problem:**

The Korean glossary entry for kubectl uses an old `full_link`.
The target page does not exist in any language, so every Korean `kubectl` glossary tooltip links to a 404 page.

[`content/ko/docs/reference/glossary/kubectl.md` L4](https://github.com/kubernetes/w...

🔗 [Link](https://github.com/kubernetes/website/issues/59248)

**Metadata:**
- Created: 2026-11-24
- Comments: 1
- State: open

### kubernetes/website#59240: cluster-shutdown-and-restart: heading says "worker nodes", body cordons all nodes

**This is a Bug Report**

**Problem:**

On https://kubernetes.io/docs/tasks/administer-cluster/cluster-shutdown-and-restart/, the heading of the cordon step and the instruction under it disagree.

Heading:

> ### Mark worker nodes unschedulable

Instruction and commands under it:

> Make all nodes i...

🔗 [Link](https://github.com/kubernetes/website/issues/59240)

**Metadata:**
- Created: 2026-11-24
- Comments: 1
- State: open

### kubernetes/website#59238: [en] Fix broken link and wrong section reference in Node Shutdowns page

**This is a Bug Report**

**Problem:**

`content/en/docs/concepts/cluster-administration/node-shutdown.md` has two errors:

1. **Broken link** ([L334](https://github.com/kubernetes/website/blob/ac7b6d42d5/content/en/docs/concepts/cluster-administration/node-shutdown.md?plain=1#L334)):
   The link to...

🔗 [Link](https://github.com/kubernetes/website/issues/59238)

**Metadata:**
- Created: 2026-11-24
- Comments: 3
- State: open

### kubernetes/website#59250: Fix broken link and section reference in Node Shutdowns page

### Description

Fixes two defects on the Node Shutdowns page: the "Shutting Down and Restarting Clusters" link used `/docs/task/` and returned 404, and the Windows section said the Non-Graceful Node Shutdown procedure is "mentioned above" when that section comes later on the page.

Tested with a lo...

🔗 [Link](https://github.com/kubernetes/website/pull/59250)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kompose: v1.39.0

# Installation

__Linux and macOS:__

```sh
# Linux
curl -L https://github.com/kubernetes/kompose/releases/download/v1.39.0/kompose-linux-amd64 -o kompose

# Linux ARM64
curl -L https://github.com/kubernetes/kompose/releases/download/v1.39.0/kompose-linux-arm64 -o kompose

# macOS
curl -L https://github.com/kubernetes/kompose/releases/download/v1.39.0/kompose-darwin-amd64 -o kompose

# macOS ARM64
curl -L https://github.com/kubernetes/kompose/releases/download/v1.39.0/kompose-darwin-arm64 -o kom...

🔗 [Link](https://github.com/kubernetes/kompose/releases/tag/v1.39.0)

**Metadata:**
- Version: v1.39.0
- Published: 2026-11-24
- Prerelease: No

### kubernetes/kompose#2150: Add windows arm to release

### What would you like to be added?

Update release script to include windows arm

### Why is this needed?

Windows arm has gotten quite popular, add it to next release.

🔗 [Link](https://github.com/kubernetes/kompose/issues/2150)

**Metadata:**
- Created: 2026-11-24
- Comments: 0
- State: open

### kubernetes/kube-state-metrics#3219: --object-limit: a relist can swap out objects admitted through the watch, so series flap

**What happened**:

With #3152, `--object-limit` caps the number of objects each store keeps, including objects that arrive through the watch. Once a store is at the limit, a relist can swap the objects it picked up from the watch for other ones, so their series disappear and may come back later, i....

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3219)

**Metadata:**
- Created: 2026-11-24
- Comments: 1
- State: open

### kubernetes/kube-state-metrics#3222: fix(endpointslice): report forNodes hints in kube_endpointslice_endpoints_hints

**What this PR does / why we need it:**

`kube_endpointslice_endpoints_hints` only read `hints.forZones` and skipped any endpoint without zone hints. With `trafficDistribution: PreferSameNode` (GA in 1.35), the EndpointSlice controller sets `hints.forNodes`, so those hints were never reported.

This...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3222)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3221: fix(ingress): report named service ports in kube_ingress_path

**What this PR does / why we need it:**

`kube_ingress_path` built `service_port` from `backend.service.port.number` only. An Ingress backend can refer to the Service port by name instead (`port.name`), and in that case the metric reported `service_port="0"`. The two fields are mutually exclusive, s...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3221)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9276: wg-ai-gateway: archive working group

Archives `wg-ai-gateway` into `archive/wg-ai-gateway`, removes its working-group entry from `sigs.yaml`, and regenerates the SIG/WG documentation and `OWNERS_ALIASES` following #9270 as AI gateway efforts consolidate into the Gateway for AI and Agents (GAIA) initiative under SIG-Network / Gateway AP...

🔗 [Link](https://github.com/kubernetes/community/pull/9276)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9275: clarify trivial edit policy

This PR clarifies the existing trivial edits policy to be more clear about what constitutes a trivial edit, and explicitly calls out that maintainers may close PRs without warning.

Fixes # None

/hold
/assign @kubernetes/sig-docs-leads @kubernetes/steering-committee 

🔗 [Link](https://github.com/kubernetes/community/pull/9275)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9274: Document increase to supported resource size to 3GB

Ref https://github.com/kubernetes/kubernetes/issues/134375

Periodic release blocking tests now run 20KB pods resulting in 3.1GB resource. https://github.com/kubernetes/test-infra/pull/38330

🔗 [Link](https://github.com/kubernetes/community/pull/9274)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.35.1 / 2026-11-24

* [BUGFIX] Raise the HTTP server idle timeout from 90s to 6m so it outlasts the 5m client idle timeout used by Prometheus, avoiding failed alert POSTs on connections closed by the server. #5744


🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.35.1)

**Metadata:**
- Version: v0.35.1
- Published: 2026-11-24
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- fix index lookups for images over 2 TiB [#486](https://github.com/containerd/overlaybd/pull/486) ([Yipeng Liu](https://github.com/containerd/overlaybd/commit/3a8a551df66f71d5b882ab23ed1cbeb69a127468))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-25
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-25 06:57:06*
