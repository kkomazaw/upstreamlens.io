---
title: "Upstream Github - 2026-11-20"
description: "CNCF upstream activity from github"
pubDate: 2026-11-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/failing-test", "needs-triage", "sig/scheduling", "kind/feature", "sig/apps", "wg/workload-aware-scheduling", "pr", "area/test", "size/S", "kind/flake", "release-note-none", "sig/auth", "approved", "cncf-cla: yes", "sig/instrumentation", "sig/testing", "do-not-merge/work-in-progress", "needs-priority", "lgtm", "sig/windows", "sig/architecture", "area/conformance", "kind/bug", "size/M", "needs-ok-to-test", "kind/cleanup", "size/XS", "do-not-merge/needs-sig", "area/kubelet", "release-note", "sig/release", "do-not-merge/cherry-pick-not-approved", "kind/dependency", "area/release-eng", "sig/api-machinery", "size/L", "area/kubectl", "sig/cli", "cncf-cla: no", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "size/XXL", "priority/critical-urgent", "area/apiserver", "release-blocker", "ingress-gce", "do-not-merge/needs-area", "autoscaler", "area/vertical-pod-autoscaler", "website", "sig/docs", "language/zh", "area/localization", "perf-tests", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "kind/kep", "enhancements", "prometheus", "release", "node_exporter", "envoyproxy", "gateway", "containerd", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/enhancements#6526: KEP-5732: Sync KEP with the codebase after code freeze

- One-line PR description: Sync KEP with the codebase after code freeze

- Issue link: #5732 
- Other comments:

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6526)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144365: [Failing Test] [sig-node] Windows e2e: Pod-level resource tests fail with PodLevelResourcesNotSupported

### Which jobs are failing?

[ci-kubernetes-e2e-capz-master-windows](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-capz-master-windows)

### Which tests are failing?

`[sig-node] Downward API Downward API tests for pod level resources should provide default limits.cpu/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144365)

**Metadata:**
- Created: 2026-11-20
- Comments: 2
- State: open

### kubernetes/kubernetes#144363: Reserve capacity of pods being replaced during rolling updates so their replacement pods can reclaim it

### What would you like to be added?

A mechanism for the scheduler to hold the node resources (and topology-aware placement) of running
pods that are being deleted as part of a controller-driven update, so that their replacement pods can
be scheduled into that capacity before unrelated pending pods...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144363)

**Metadata:**
- Created: 2026-11-19
- Comments: 1
- State: open

### kubernetes/kubernetes#144367: [WIP] integration: poll for the informer metric in the KCM serving test

#### What type of PR is this?

/kind flake
/sig auth
/sig instrumentation

#### What this PR does / why we need it:

`TestKubeControllerManagerInformerMetrics` failed in 2 of the last 165 runs of [`ci-kubernetes-integration-master`](https://testgrid.k8s.io/sig-release-master-blocking#integration-mas...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144367)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144366: e2e: mark pod-level resources tests LinuxOnly

#### What type of PR is this?

/kind failing-test
/sig node
/sig windows

#### What this PR does / why we need it:

[`ci-kubernetes-e2e-capz-master-windows`](https://testgrid.k8s.io/sig-release-master-informing#capz-windows-master) (release-informing) has failed every run since [#140536](https://git...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144366)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144364: scheduler: verify bind result after an indeterminate error

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

When the bind request returns an indeterminate error (EOF, connection error, timeout), the scheduler assumes the pod was not bound and forgets it from the cache. If the API server did persist the bind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144364)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144362: Test PR for presubmits

Just a test PR to run presubmits
/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

No


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144362)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144361: kubelet/prober: fix TestNewWorkerActiveProbesGauge flake

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Fixes a flake in `TestNewWorkerActiveProbesGauge` ([example](https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/144093/pull-kubernetes-unit/2123481415843581952)). The worker deregisters itself before decre...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144361)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144360: [release-1.35] Bump .go-version to 1.26.11

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144360)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144359: [release-1.36] upgrade .go-version to 1.26.11

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144359)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144358: [release-1.37] Bump build images to Go 1.26.11 and distroless-iptables v0.9.10

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144358)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144357: [release-1.37] upgrade .go-version to 1.26.11

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144357)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144356: [release-1.36] Bump build images to Go 1.26.11 and distroless-iptables v0.9.10

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144356)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144355: [release-1.35] Bump build images to Go 1.26.11 and distroless-iptables v0.9.10

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144355)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144354: managedfields: preserve replica ownership across scale updates

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Two updates to a Deployment's `/scale` endpoint that leave the replica count unchanged can drop the creator's ownership of `spec.replicas`. A subsequent server-side apply by another manager can the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144354)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144353: docs: fix three broken documentation references

Closes #142370

Fixes three stale documentation references identified in the issue:

1. **`cluster/addons/dns/kube-dns/README.md`**
   - Old: `http://kubernetes.io/docs/admin/dns/` (404)
   - New: `https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/`

2. **`test/e2e_node/garbage...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144353)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144352: e2e_node: wait for init container before restarting kubelet

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The `RestartAllContainers` spec "kubelet restart during startup" stops the kubelet as soon as the pod condition `AllContainersRestarting` turns False. The kubelet sets the condition when cleanup ends, and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144352)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144351: scheduler_perf: add workload-aware preemption workloads with opportunistic batching

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Add a scheduler_perf test scenario with `GangPreemptionHeroWorkload` workloads with opportunistic batching enabled, a scheduler configuration without default topology spread constraints and one signature shared by ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144351)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144350: Flush opportunistic batch between placements

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Opportunistic batching caches results for the nodes a pod was evaluated on. A placement narrows those nodes down but the cached results were carried from one placement into the next one of the same PodGroup schedul...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144350)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144349: kubelet: stop deriving the windows cpu limit from CpuMaximum

#### What type of PR is this?

/kind bug
/sig node
/sig windows

#### What this PR does / why we need it:

On Windows the kubelet cannot set a cpu limit directly. It converts the limit into the CRI `cpu_maximum` field, which is a hundredth of a percent of the whole machine, in `calculateCPUMaximum`:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144349)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144348: Dry-run mutates object in watch cache

/kind bug

Fix dry-run mutating object returned from storage.

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144348)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144346: Automated cherry pick of #143156: Fix TestEventSeries flaky only focus on testPod namespace

Cherry pick of #143156 on release-1.35.

#143156: Fix TestEventSeries flaky only focus on testPod namespace

This backports the test-only fix for TestEventSeries. The failure has
continued to occur in the arm64 release-1.36 integration job because the
test can observe unrelated Events emitted by con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144346)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144345: Automated cherry pick of #143156: Fix TestEventSeries flaky only focus on testPod namespace

Cherry pick of #143156 on release-1.36.

#143156: Fix TestEventSeries flaky only focus on testPod namespace

This backports the test-only fix for TestEventSeries. The failure has
continued to occur in the arm64 release-1.36 integration job because the
test can observe unrelated Events emitted by con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144345)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3332: Update L4 standalone NEG custom NEG names handling.

Makes sure the expected description can omit the port:0 value since it doesn't make sense for GCE_VM_NEG type. 

This also updates the expected annotation to `networking.gke.io/standalone-passthrough-lb-neg-name` to match the class name better.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3332)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10695: Bump go.opentelemetry.io/otel to v1.47.0 in addon-resizer

#### What type of PR is this?

/kind dependency
/kind bug

#### What this PR does / why we need it:

Bumps `go.opentelemetry.io/otel` and `go.opentelemetry.io/otel/trace` in `/addon-resizer` from v1.44.0 to v1.47.0 to pick up the fix for CVE-2026-128085. That bug lets string attributes made o...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10695)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10694: [addon-resizer-release-1.8] Bump go.opentelemetry.io/otel to v1.47.0 and release 1.8.25

#### What type of PR is this?

/kind dependency
/kind bug

#### What this PR does / why we need it:

Bumps `go.opentelemetry.io/otel` and `go.opentelemetry.io/otel/trace` from v1.44.0 to v1.47.0 to pick up the fix for CVE-2026-128085. That bug lets string attributes made of valid U+FFFD runes...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10694)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10693: [VPA] Start controller fetcher cache refresh in admission-controller and updater

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The controller fetcher caches `/scale` subresource responses, including errors. Entries are only refreshed or removed by the loop that `controllerFetcher.Start()` launches. Only the recommender calls `Start()` (`pkg/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10693)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59211: Documentation search returns HTTP 403 Forbidden

**This is a Bug Report**

**Problem:**

When searching the official Kubernetes documentation using the search bar, the search request returns an HTTP 403 Forbidden response instead of displaying search results.

Steps to reproduce:

1. Open https://kubernetes.io/docs/
2. Enter `env var` into the doc...

🔗 [Link](https://github.com/kubernetes/website/issues/59211)

**Metadata:**
- Created: 2026-11-19
- Comments: 1
- State: open

### kubernetes/website#59209: Kubernetes docs search returns HTTP 403 for queries starting with env followed by a space

**This is a Bug Report**

**Problem:**

The Kubernetes documentation search returns HTTP 403 for the tested queries that start with the word `env` followed by a space and another word. The search results page never loads.

Steps to reproduce:

1. Open https://kubernetes.io/search/?q=env.
2. In the “...

🔗 [Link](https://github.com/kubernetes/website/issues/59209)

**Metadata:**
- Created: 2026-11-19
- Comments: 1
- State: open

### kubernetes/website#59205: [zh-cn]sync kubectl/*

content/zh-cn/docs/reference/kubectl/_index.md
content/zh-cn/docs/reference/kubectl/docker-cli-to-kubectl.md
content/zh-cn/docs/reference/kubectl/quick-reference.md

🔗 [Link](https://github.com/kubernetes/website/pull/59205)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4592: Network, CL2: Add support for ipv6 NetworkPolicy, modernise measurement

#### What type of PR is this?

/kind feature
/kind bug

#### What this PR does / why we need it:

Makes the NetworkPolicyEnforcement measurement and its test clients work on IPv6 and dual-stack clusters, and fixes client issues found along the way.

- CL2: `allow-egress-apiserver` is built from the ...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4592)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10230: Promote agent-sandbox v1.0.12

Promoting agent-sandbox images for release v1.0.12

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10230)

**Metadata:**
- Created: 2026-11-19
- Comments: undefined
- State: open
- Draft: No

### prometheus/node_exporter: 1.13.1 / 2026-11-19

* [BUGFIX] btrfs: Fix device_unused_bytes wrapping around during shrink #3827
* [BUGFIX] textfile: fix panic on a metric without HELP after inconsistent help texts #3866


🔗 [Link](https://github.com/prometheus/node_exporter/releases/tag/v1.13.1)

**Metadata:**
- Version: v1.13.1
- Published: 2026-11-19
- Prerelease: No

### envoyproxy/gateway#10665: Wasm HTTP cache URL hardcodes cluster.local, breaking clusters with a custom DNS domain

*Description*:

When an `EnvoyExtensionPolicy` uses an OCI/HTTP Wasm source, Envoy Gateway serves the cached module from its wasm HTTP server and points Envoy at it through the `wasm_cluster` cluster. The address of that cluster (and the cache URL) is built with a hardcoded `cluster.local`.

On Kube...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10665)

**Metadata:**
- Created: 2026-11-19
- Comments: 0
- State: open

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump go.opentelemetry.io/otel/trace from 1.44.0 to 1.47.0 [#419](https://github.com/containerd/accelerated-container-image/pull/419) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/f2054c65ab64c59becdc46f3cd1ef74a283a7df8))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-20
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-20 05:41:31*
