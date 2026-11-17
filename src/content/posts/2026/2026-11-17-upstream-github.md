---
title: "Upstream Github - 2026-11-17"
description: "CNCF upstream activity from github"
pubDate: 2026-11-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scalability", "kind/failing-test", "needs-triage", "kind/bug", "sig/node", "sig/cli", "pr", "area/kubelet", "size/XXL", "cncf-cla: yes", "sig/instrumentation", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "needs-priority", "do-not-merge/needs-kind", "release-note", "size/XS", "sig/auth", "needs-ok-to-test", "area/test", "sig/network", "kind/cleanup", "size/L", "release-note-none", "sig/testing", "ok-to-test", "area/apiserver", "lgtm", "sig/api-machinery", "size/M", "kind/regression", "wg/device-management", "size/S", "kind/api-change", "api-review", "do-not-merge/needs-sig", "sig/architecture", "area/dependency", "kind/dependency", "area/kubectl", "approved", "do-not-merge/cherry-pick-not-approved", "sig/scheduling", "do-not-merge/hold", "area/code-generation", "sig/storage", "needs-rebase", "size/XL", "sig/etcd", "kind/feature", "sig/docs", "website", "language/ko", "area/localization", "sig/contributor-experience", "area/contributor-guide", "community", "sig/autoscaling", "kube-state-metrics", "minikube", "dependencies", "go", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "triage/accepted", "area/provider/azure", "area/addon-resizer", "area/helm-charts", "kops", "area/jobs", "area/config", "test-infra", "envoyproxy", "gateway", "containerd", "release", "ttrpc-rust"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144232: kubelet: add pod-level resize metrics for KEP-5419

Add kubelet_pod_requested_resizes_total, which counts the CPU and memory request and limit changes that pod updates request. Its level label tells pod-level resources (pod.spec.resources) apart from the resources of containers and init containers. It supersedes
kubelet_container_requested_resizes_to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144232)

**Metadata:**
- Created: 2026-11-17
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/kubernetes#144231: [Failing test] ci-kubernetes-e2e-ec2-scale-performance-5000 - pods DELETE p99 latency SLO violation

### Which jobs are failing?

ci-kubernetes-e2e-ec2-scale-performance-5000
(sig-release-master-informing#ec2-master-scale-performance-5000)

### Which tests are failing?

kubetest2.Test
ClusterLoaderV2.load overall
ClusterLoaderV2.load: [step: 29] gathering measurements [10] - APIResponsivenessPromet...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144231)

**Metadata:**
- Created: 2026-11-17
- Comments: 1
- State: open

### kubernetes/kubernetes#144222: kubelet: restart kills running pods that consume a device plugin resource through pod overhead

### What happened?

A RuntimeClass can set overhead.podFixed to an extended resource that a device plugin advertises. When kubelet restarts, every running pod of that RuntimeClass is rejected at re-admission and killed.

### What did you expect to happen?

Pods that are running when kubelet restarts...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144222)

**Metadata:**
- Created: 2026-11-16
- Comments: 2
- State: open

### kubernetes/kubernetes#144219: kubectl describe silently reports 'Events: <none>' when the events search fails (all resource types)

### What happened?

`kubectl describe <resource>` with `ShowEvents` enabled calls `searchEvents` and discards the returned error at 33 call sites in `staging/src/k8s.io/kubectl/pkg/describe/describe.go` (`events, _ = searchEvents(...)`). When the events list call fails, every describer silently rend...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144219)

**Metadata:**
- Created: 2026-11-16
- Comments: 2
- State: open

### kubernetes/kubernetes#144229: noderestriction: protect controller-owned Pod metadata on status updates

#### What type of PR is this?

/kind bug


#### What this PR does / why we need it:

NodeRestriction verifies that a node-originated Pod status update applies to a
Pod assigned to that node and already prevents changes to labels and resource
claim status. It currently permits changes to Pod finalize...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144229)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144228: e2e: add service tests for affinity after pod deletion and hostNetwork NodePort ETP

<!--  Thanks for sending a pull request! -->

#### What type of PR is this?
/kind cleanup
/sig network

#### What this PR does / why we need it:

Adds two e2e tests in `test/e2e/network/service.go` that cover service behaviors not currently exercised:

1. **`should maintain session affinity after th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144228)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144227: apiserver: bound split and findAll element sizes in CEL cost estimation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144227)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144226: Disallow enabling watch cache for event resource

/kind cleanup

```release-note
Disallow enabling watch cache for event resource
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144226)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144224: component-base/logs: fix default output in split-stream help

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144224)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144223: Bump golang.org/x/text to v0.41.0 in hack/tools

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bumps `golang.org/x/text` from v0.34.0 to v0.41.0 in `hack/tools`.

v0.34.0 is affected by [GO-2026-5970](https://pkg.go.dev/vuln/GO-2026-5970) (CVE-2026-56852), an infinite loop on invalid input in `golang.or...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144223)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144220: kubectl describe: surface events search errors instead of reporting no events

Fixes #144219

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

describe.go called searchEvents at 33 sites and discarded the returned error (`events, _ = searchEvents(...)`). When the events list call fails (for example a Forbidden response for users with...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144220)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144217: Automated cherry pick of #144142: Improve webhook client config IP matching, encoded handling

Cherry pick of #144142 on release-1.35.

#144142: Improve webhook client config IP matching, encoded handling

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144217)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144216: Automated cherry pick of #144142: Improve webhook client config IP matching, encoded handling

Cherry pick of #144142 on release-1.36.

#144142: Improve webhook client config IP matching, encoded handling

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144216)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144215: Automated cherry pick of #144142: Improve webhook client config IP matching, encoded handling

Cherry pick of #144142 on release-1.37.

#144142: Improve webhook client config IP matching, encoded handling

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144215)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144212: Rework client-go gentype to track object type

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This updates client-go `gentype` to track the object type pointed at by `runtime.Object` instances, in addition to the pointer type of the instances themselves. This allows objects to be created with `new()...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144212)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144211: Split out single-use fakeVolumeHost fields

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Some of fakeVolumeHost's fields are specific to either fakeKubeletVolumeHost or fakeAttachDetachVolumeHost: volumeAttachmentLister is only used in fakeAttachDetachVolumeHost, and hostUtil, node, and informerFacto...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144211)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144210: Tune watch grpc window for high throughput

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144210)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144206: Automated cherry pick of #141255: Split Pod update with a changed UID into delete and add

Cherry pick of #141255 on release-1.35.

#141255: Split Pod update with a changed UID into delete and add

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144206)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144205: Automated cherry pick of #141255: Split Pod update with a changed UID into delete and add

Cherry pick of #141255 on release-1.36.

#141255: Split Pod update with a changed UID into delete and add

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144205)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144204: Automated cherry pick of #141255: Split Pod update with a changed UID into delete and add

Cherry pick of #141255 on release-1.37.

#141255: Split Pod update with a changed UID into delete and add

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144204)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144202: Export adding, deleting and updating pods in podGroup in snapshot

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144202)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144200: DRA: refresh allocation tracking on informer updates

#### What type of PR is this?

/kind bug
/sig scheduling
/wg device-management

#### What this PR does / why we need it:

The scheduler's allocated-device tracker treats an update with non-nil old and new allocations as unchanged. Informer updates can skip intermediate states, a claim may be deleted...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144200)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144196: Watchcache contract fixes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144196)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#59173: Suggest verifying doc fixes about Kubernetes behavior on a real cluster

**This is a Feature Request**

**What would you like to be added**

A short note in the contributor docs suggesting that contributors try behavior-related changes on a real cluster and include the results in the PR description.

For example:
> - If your change is about how Kubernetes behaves, consid...

🔗 [Link](https://github.com/kubernetes/website/issues/59173)

**Metadata:**
- Created: 2026-11-16
- Comments: 1
- State: open

### kubernetes/website#59171: [ko] Translate content/en/docs/tasks/configure-pod-container/share-process-namespace.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/59171)

**Metadata:**
- Created: 2026-11-16
- Comments: 1
- State: open

### kubernetes/community#9262: add an AI Guidance section to the first contributions



<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https:...

🔗 [Link](https://github.com/kubernetes/community/pull/9262)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9259: sig-autoscaling: add Karpenter Working Group meetings to karpenter subproject

Adds the Karpenter Working Group meetings to the `karpenter` subproject under SIG Autoscaling in `sigs.yaml`, then regenerates `sig-autoscaling/README.md` and `sig-list.md`. That makes the meeting discoverable from `sigs.yaml`, the generated READMEs, and the k8s.dev community-group listing, the same...

🔗 [Link](https://github.com/kubernetes/community/pull/9259)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3211: build: Bump Go to 1.27.4

**What this PR does / why we need it:**

Bumps the Go toolchain in `.go-version` from 1.27.3 to 1.27.4.

**How does this change affect the cardinality of KSM:** *(increases, decreases or does not change cardinality)*

Does not change cardinality.

**Which issue(s) this PR fixes:** *(optional, in `fi...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3211)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24074: kicbase: Select the push token by repository

update-pr pushed with `MINIKUBE_BOT_PAT || GITHUB_TOKEN`, so a missing bot PAT silently used the upstream GITHUB_TOKEN. That token has contents: write on the base repository: pushing a fork head then failed with 403, while a same-repository branch could be pushed as github-actions[bot]. Either way t...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24074)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24069: chore(deps): bump the golang-org group with 7 updates

Bumps the golang-org group with 7 updates:

| Package | From | To |
| --- | --- | --- |
| [golang.org/x/crypto](https://github.com/golang/crypto) | `0.58.0` | `0.59.0` |
| [golang.org/x/mod](https://github.com/golang/mod) | `0.42.0` | `0.43.0` |
| [golang.org/x/oauth2](https://github.com/golang/oaut...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24069)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24068: chore(deps): bump the k8s-dependencies group with 6 updates

Bumps the k8s-dependencies group with 6 updates:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.37.1` | `0.37.2` |
| [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) | `0.37.1` | `0.37.2` |
| [k8s.io/client-go](https://github.com/...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24068)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10691: Unbounded infrastructure cache sync can block the autoscaling loop

**Which component are you using?**:

/area cluster-autoscaler

**What version of the component are you using?**:

Component version: source baseline on master at commit 0420a9a4cca95c6efff81e81e488d6df1ea7ae30.

**What environment is this in?**:

The relevant configuration is a Cluster API managemen...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10691)

**Metadata:**
- Created: 2026-11-17
- Comments: 1
- State: open

### kubernetes/autoscaler#10688: VPA updater: InPlace mode resizes pods that the disruption budget deferred

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: 1.8.1 (updater and admission controller with `--feature-gates=InPlace=true`). The same code is on master at 0420a9a.

**What k8s version are you using (`kubectl v...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10688)

**Metadata:**
- Created: 2026-11-16
- Comments: 2
- State: open

### kubernetes/autoscaler#10690: test: improve Azure unit test mocking and add new test

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Add test for TestScaleSetMissingVMSSDoesNotBlockHealthyScaleUp, see #10680 for details.

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, o...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10690)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10689: build(deps): bump github.com/prometheus/common from 0.73.1 to 0.74.0 in /addon-resizer

Bumps [github.com/prometheus/common](https://github.com/prometheus/common) from 0.73.1 to 0.74.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prometheus/common/releases">github.com/prometheus/common's releases</a>.</em></p>
<blockquote>
<h2>v0.74.0</h2>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10689)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10687: VPA Helm chart: make liveness, readiness and startup probes configurable

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The chart hardcodes the liveness and readiness probes of the admission controller, recommender and updater, so tuning them means forking the chart or patching the rendered Deployment.

We hit this in production: ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10687)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19056: gVisor: apt source uses a literal `[arch=$(ARCH)]`, so the wrong `runsc` is installed and `containerd-shim-runsc-v1` is missing

/kind bug

**What happened**

With `containerd.gvisor.enabled: true` on an instance group, nodeup writes `/etc/apt/sources.list.d/gvisor.list` as:

```
deb [arch=$(ARCH)] https://storage.googleapis.com/gvisor/releases release main
```

apt does not expand `$(ARCH)` in the `arch=` option. It expands ...

🔗 [Link](https://github.com/kubernetes/kops/issues/19056)

**Metadata:**
- Created: 2026-11-16
- Comments: 0
- State: open

### kubernetes/test-infra#38294: Add EBS CSI hostprocess presubmit

Add a presubmit job to run the EBS CSI `test-e2e-external-windows-hostprocess` e2e job on release branches.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38294)

**Metadata:**
- Created: 2026-11-16
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10623: Rate-limit response-time histogram reports milliseconds as seconds

**Description**

The default rate-limit Prometheus mapping names the response-time histogram `ratelimit_service_response_time_seconds`, but does not convert the rate-limit service's millisecond timer values to seconds.

Envoy Gateway sets `PROMETHEUS_MAPPER_YAML` to its generated `/etc/statsd-export...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10623)

**Metadata:**
- Created: 2026-11-16
- Comments: 1
- State: open

### containerd/containerd#14601: blockfile: View (read-only) mount fails with EROFS when the backing ext4 needs journal recovery

### Description

The `blockfile` snapshotter hands out `View` snapshots as a **read-only mount of a
read-only loop device**. If the backing image's journal is not clean, the kernel
cannot replay it and refuses the mount with `EROFS`. There is no code path in the
snapshotter that guarantees (or resto...

🔗 [Link](https://github.com/containerd/containerd/issues/14601)

**Metadata:**
- Created: 2026-11-17
- Comments: 0
- State: open

### containerd/containerd#14592: 2.3: a daemon with a non-default state dir leaves `/run/containerd` at 0700, which breaks user-namespaced containers for a second daemon

### Description

When a root containerd daemon is configured with a state directory other than `/run/containerd`, its shims still put their sockets in `/run/containerd/s`. If `/run/containerd` does not exist yet, the shim creates it with mode `0700`.

In 2.2 this was harmless, because `CreateTopLeve...

🔗 [Link](https://github.com/containerd/containerd/issues/14592)

**Metadata:**
- Created: 2026-11-16
- Comments: 0
- State: open

### containerd/ttrpc-rust: ttrpc 0.10.1

Release [ttrpc 0.10.1](https://crates.io/crates/ttrpc/0.10.1). Code generator versions remain unchanged.

### Added

- Async client reconnection through `Client::connect_with`, with shared connection attempts and connection acquisition included in RPC deadlines. Failed RPCs are not replayed, and existing streams stay on their original connection. ([#339](https://github.com/containerd/ttrpc-rust/pull/339))

### Changed

- Enable only the required nix features, removing the unused `aio` feature an...

🔗 [Link](https://github.com/containerd/ttrpc-rust/releases/tag/v0.10.1)

**Metadata:**
- Version: v0.10.1
- Published: 2026-11-16
- Prerelease: No


---

*This content was automatically collected on 2026-11-17 06:28:53*
