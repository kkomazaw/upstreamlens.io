---
title: "Upstream Github - 2026-10-14"
description: "CNCF upstream activity from github"
pubDate: 2026-10-14
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "size/XS", "release-note-none", "cncf-cla: yes", "sig/testing", "kind/failing-test", "do-not-merge/cherry-pick-not-approved", "needs-priority", "needs-triage", "kind/bug", "sig/api-machinery", "release-note", "size/L", "kind/api-change", "sig/apps", "needs-ok-to-test", "area/test", "priority/important-soon", "sig/node", "size/M", "approved", "sig/windows", "triage/accepted", "sig/auth", "cncf-cla: no", "do-not-merge/needs-kind", "size/XL", "kind/feature", "area/code-generation", "size/S", "sig/architecture", "area/dependency", "area/code-organization", "kind/dependency", "sig/scheduling", "sig/autoscaling", "area/apiserver", "area/kubelet", "do-not-merge/release-note-label-needed", "area/provider/gcp", "sig/cluster-lifecycle", "area/jobs", "sig/cloud-provider", "area/config", "test-infra", "ok-to-test", "perf-tests", "issue", "language/ko", "area/localization", "website", "lgtm", "language/en", "area/blog", "release", "autoscaler", "area/cluster-autoscaler", "area/helm-charts", "area/vertical-pod-autoscaler", "area/addon-resizer", "size/XXL", "kind/cleanup", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "cloud-provider-openstack", "sig/release", "area/release-eng", "envoyproxy", "envoy", "containerd", "cncf", "needs-kind", "hive/covered-by-pr", "quality", "testing", "agent/quality", "hive/hosted-available-lke648397-260827-5q9t", "prow-github-actions", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### envoyproxy/envoy: v1.40.0

## Summary of changes

### Breaking changes

- **build**: Envoy has switched from `WORKSPACE` to **bzlmod**. The `WORKSPACE` file is removed; Envoy, the API and the docs are published as Bazel modules (`envoy`, `envoy_api`, `envoy-docs`). Downstreams must migrate to `MODULE.bazel` and **must** add Envoy's custom registry (`https://raw.githubusercontent.com/envoyproxy/bazel-registry`) alongside the BCR — many of Envoy's dependencies and patched modules are only published there.
- **build**: ...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.40.0)

**Metadata:**
- Version: v1.40.0
- Published: 2026-10-13
- Prerelease: No

### containerd/containerd: containerd 2.4.2

Welcome to the v2.4.2 release of containerd!

The second patch release for containerd 2.4 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisories/GHSA-8647-2jxj-p2rc)
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisori...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.4.2)

**Metadata:**
- Version: v2.4.2
- Published: 2026-10-13
- Prerelease: No

### containerd/containerd: containerd 2.3.7

Welcome to the v2.3.7 release of containerd!

The seventh patch release for containerd 2.3 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-5p7c-hggf-c748**](https://github.com/containerd/containerd/security/advisories/GHSA-5p7c-hggf-c748)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisor...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.7)

**Metadata:**
- Version: v2.3.7
- Published: 2026-10-13
- Prerelease: No

### containerd/containerd: containerd 2.2.10

Welcome to the v2.2.10 release of containerd!

The tenth patch release for containerd 2.2 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-95839**](https://github.com/containerd/containerd/security/advisories/GHSA-vwhp-8p66-mq4f)
  * [**GHSA-5p7c-hggf-c748**](https://github.com/containerd/containerd/security/advisories/GHSA-5p7c-hggf-c748)
  * [**GHSA-8647-2jxj-p2rc**](https://github.com/containerd/containerd/security/advisori...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.10)

**Metadata:**
- Version: v2.2.10
- Published: 2026-10-13
- Prerelease: No

### containerd/containerd: containerd 2.0.14

Welcome to the v2.0.14 release of containerd!

The fourteenth patch release for containerd 2.0 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**GHSA-hc94-p972-ch66**](https://github.com/containerd/containerd/security/advisories/GHSA-hc94-p972-ch66)

### Highlights

#### Container Runtime Interface (CRI)

* Apply hardening to not follow symlinks for container log files ([#14299](https://github.com/containerd/containerd/pull/14299))

###...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.0.14)

**Metadata:**
- Version: v2.0.14
- Published: 2026-10-13
- Prerelease: No

### cncf/toc#2328: docs(nats): add graduation due diligence

Adds the NATS Graduation Due Diligence document.

Project application: https://github.com/cncf/toc/issues/2042

PR open until October 27 for TOC and public review/comment.

🔗 [Link](https://github.com/cncf/toc/pull/2328)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143010: Automated cherry pick of #142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

Cherry pick of #142881 on release-1.35.

#142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143010)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143009: Automated cherry pick of #142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

Cherry pick of #142881 on release-1.36.

#142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143009)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143008: Automated cherry pick of #142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

Cherry pick of #142881 on release-1.37.

#142881: hack: match OpenSSL 3.5 CN=127.0.0.1 output in client cert check

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143008)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143007: apimachinery: add metav1.LabelSelectorMatches and use it in GetPodPodDisruptionBudgets

#### What type of PR is this?

/kind bug
/sig apps
/sig api-machinery

#### What this PR does / why we need it:

`GetPodPodDisruptionBudgets` lists every PDB in the pod's namespace and runs `metav1.LabelSelectorAsSelector` on each one. That validates and allocates a `Requirement` per selector entry
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143007)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143006: e2e_node_windows: clear CPU/memory manager state on kubelet reconfig

#### What type of PR is this?

/kind failing-test
/sig windows
/sig node
/area test

#### What this PR does / why we need it:

With WindowsCPUAndMemoryAffinity on by default (#142500), the baseline "none" policy now writes a CPU manager checkpoint. Switching to "static" without removing it makes the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143006)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143004: bootstrappolicy: add resourceclaims/driver granular auth for built-in scheduler and resource-claim-controller

<!--
If this is your first time contributing, please read our contributor guide:
https://git.k8s.io/community/contributors/guide/pull-requests.md
-->

**What type of PR is this?**

- [ ] Bug fix
- [ ] Feature
- [ ] Design
- [ ] Documentation
- [ ] Instrumentation
- [x] Other

**What this PR does / w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143004)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143003: validation-gen: add +k8s:eq tag

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143003)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143002: Update github.com/godbus/dbus/v5 to v5.2.4

v5.2.4 carries godbus/dbus#448, the fix for the windows/darwin build break in v5.2.3. Drop the pin.

Fixes #142936

`hack/lint-dependencies.sh` passes and `hack/verify-typecheck.sh` is green on all platforms.

AI (Claude Code) was used to run the vendor update and the verification.

```release-note
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143002)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143001: scheduler: retain anti-affinity filtering during group preemption

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
PodGroup preemption runs fresh PreFilter passes after removing candidate victims. InterPodAffinity can return Skip on that victim-free snapshot, which skips both its Filter and AddPod extension when victims are subsequ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143001)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143000: client-go: retry GET requests after network timeouts

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Normal REST GET requests do not retry network timeouts. In particular, a TLS handshake timeout immediately fails a kubectl/client-go read even if the next connection could reach a healthy API server.
Reuse the existing...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143000)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142999: client-go: interrupt watch-list backoff on cancellation

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Watch-list initialization waits unconditionally on the backoff timer after a retryable error. Cancellation during that wait does not stop the reflector until the whole retry delay expires, delaying informer/controller ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142999)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142998: client-go: retry short established watches without relisting

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
An established watch that closes within a second without sending events currently returns to ListAndWatch, causing a new LIST. When API-server overload closes watches, those extra lists can amplify the overload.
Retry ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142998)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142997: autoscaling: encode behavior annotations with the v2 API schema

#### What type of PR is this?
/kind bug
/sig autoscaling
/sig api-machinery

#### What this PR does / why we need it:
Encodes the HPA behavior round-trip annotation with the stable autoscaling/v2 API type instead of the unversioned internal struct. Reuses existing v2 behavior conversion functions ra...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142997)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142996: apps: ignore JSON formatting in ControllerRevision data comparisons

#### What type of PR is this?
/kind bug
/sig apps
/sig api-machinery

#### What this PR does / why we need it:
Allows ControllerRevision metadata updates when serialization has reordered JSON object keys or insignificant whitespace in otherwise unchanged Data. These representation differences curren...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142996)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142994: daemonset: count updated pods during surge rollouts

#### What type of PR is this?
/kind bug
/sig apps

#### What this PR does / why we need it:
Counts a node in DaemonSet UpdatedNumberScheduled when any owned Pod on that node matches the current revision. During a surge rollout, the replacement can already be scheduled while the old Pod is still term...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142994)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142993: serviceaccount: keep external signer alive through request drain

#### What type of PR is this?
/kind bug
/sig auth

#### What this PR does / why we need it:
Keeps the external JWT signer connection and verification-key synchronization alive until the API server finishes draining accepted requests. The startup context still controls initial key loading, but its ca...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142993)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142992: feat(kubelet): add EnvVarKeyInference feature gate to infer key from env var name 

Fixes #132195 

#### What type of PR is this?
 
/kind feature
/kind api-change
 
#### What this PR does / why we need it:
 
Adds a new alpha feature gate `EnvVarKeyInference` that allows the kubelet to infer the key for `ConfigMapKeyRef` and `SecretKeyRef` from the environment variable name...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142992)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142991: apiextensions: allow metadata-less webhook conversion responses

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
Allows a conversion webhook response to omit metadata when the input object also omits metadata. Server-side apply can convert partial custom-resource objects without metadata, so requiring metadata ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142991)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142990: kubelet: normalize CRI PSI totals to microseconds

#### What type of PR is this?
/kind bug
/sig node
/area kubelet

#### What this PR does / why we need it:
Normalizes CRI PSI total counters from nanoseconds to microseconds in the shared summary conversion helper, covering CPU, memory, and IO at Pod and container level. Keeps the GA cAdvisor path un...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142990)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142989: Fix: defer to pod-specified grace period when --eviction-max-pod-grace-period is negative

## What

The `--eviction-max-pod-grace-period` flag documentation states:
> If negative, defer to pod specified value.

However, the previous implementation directly used the negative value (e.g., -1) as `gracePeriodOverride`, which was then passed to the CRI runtime and resulted in immediate SIGKIL...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142989)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38059: bump containerd and runc versions for canary gce jobs in k/k

required for https://github.com/kubernetes/kubernetes/pull/142687

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38059)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4482: Bump kube-state-metrics from 2.13.0 to 2.20.0

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4482)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58041: [ko] Translate content/en/docs/concepts/resource-management/dynamic-resource-allocation/how-dra-works.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/58041)

**Metadata:**
- Created: 2026-10-13
- Comments: 1
- State: open

### kubernetes/website#58043: blog: fix content ordering in pod-certificates-and-cluster-trust-bundles post

### Description

Fix content order issue in [Kubernetes v1.37: Pod Certificates and Cluster Trust Bundles](https://kubernetes.io/blog/2026/08/28/kubernetes-v1-37-pod-certificates-and-cluster-trust-bundles/) blog post

### Issue

Content from the chronological issuance process in the Architectu...

🔗 [Link](https://github.com/kubernetes/website/pull/58043)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.14.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.14.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.14.0
- Published: 2026-10-13
- Prerelease: No

### kubernetes/autoscaler#10416: clusterapi: no scale-up at all when the autoscaler cannot list the infrastructure machine templates

**Which component are you using?**

/area cluster-autoscaler
/area helm-charts

cluster-autoscaler, cloud provider `clusterapi`, Helm chart `cluster-autoscaler`.

**What version of the component are you using?**

cluster-autoscaler v1.36.1, chart 9.59.0, `clusterAPIMode: kubeconfig-incluster`.

**Wh...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10416)

**Metadata:**
- Created: 2026-10-13
- Comments: 1
- State: open

### kubernetes/autoscaler#10427: build(deps): bump the kubernetes group across 2 directories with 34 updates

Bumps the kubernetes group with 7 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.38.0-alpha.1` | `0.38.0-alpha.2` |
| [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) | `0.38.0-al...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10427)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10426: build(deps): bump the patch-updates group across 2 directories with 15 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: [github.com/fxamacker/cbor/v2](https://github.com/fxamacker/cbor).
Bumps the patch-updates group with 15 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [gith...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10426)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10425: build(deps): bump the non-kubernetes group across 2 directories with 17 updates

Bumps the non-kubernetes group with 10 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) | `1.24.1` | `1.25.0` |
| [github.com/emicklei/go-restful/v3](https://github.com...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10425)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10424: build(deps): bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10424)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10423: build(deps): bump actions/checkout from 7.0.0 to 7.0.1

Bumps [actions/checkout](https://github.com/actions/checkout) from 7.0.0 to 7.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/checkout/releases">actions/checkout's releases</a>.</em></p>
<blockquote>
<h2>v7.0.1</h2>
<h2>What's Changed</h2>
<ul>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10423)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10422: build(deps): bump helm/chart-testing-action from 2.8.0 to 2.9.0

Bumps [helm/chart-testing-action](https://github.com/helm/chart-testing-action) from 2.8.0 to 2.9.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/helm/chart-testing-action/releases">helm/chart-testing-action's releases</a>.</em></p>
<blockquote>
<h2>v2.9...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10422)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10421: build(deps): bump helm/kind-action from 1.15.0 to 1.15.1

Bumps [helm/kind-action](https://github.com/helm/kind-action) from 1.15.0 to 1.15.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/helm/kind-action/releases">helm/kind-action's releases</a>.</em></p>
<blockquote>
<h2>v1.15.1</h2>
<h2>What's Changed</h2>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10421)

**Metadata:**
- Created: 2026-10-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10420: build(deps): bump github.com/prometheus/client_golang from 1.24.1 to 1.25.0 in /addon-resizer

Bumps [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) from 1.24.1 to 1.25.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prometheus/client_golang/releases">github.com/prometheus/client_golang's releases</a>.</em></p>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10420)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10419: ci: pass PR base ref to chart-testing via env var

Move github.event.pull_request.base.ref out of run: blocks and into a job-level env var (BASE_REF) in the helm-lint-test job of pr.yaml. This fixes the 4 template-injection findings reported by zizmor. Also quotes $GITHUB_OUTPUT.

No behavior change: ct still receives the same --target-branch value....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10419)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10418: ci: disable persisted checkout credentials in read-only workflows

Set `persist-credentials: false` for checkout steps in read-only workflows so GitHub credentials are not persisted unnecessarily.

This addresses the `artipacked` warnings reported by zizmor in the affected workflows.

Validation:
* `zizmor` no longer reports `artipacked` warnings for the updated wo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10418)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10058: Promote node-problem-detector v1.34.5, v1.35.4, v1.36.1, v1.37.0

```sh
$ crane digest gcr.io/k8s-staging-npd/node-problem-detector:v1.34.5
sha256:4f39f33578bdfdf6308513a0f11f056624a3c7e456902b67433745d5265be739
$ crane digest gcr.io/k8s-staging-npd/node-problem-detector:v1.35.4
sha256:fc1394505742ad0e9706670312f5a4fe704f6b28ae59d0f384eede23dad56ccd
$ crane digest...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10058)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10057: Promote snapshotter images

**What this PR does / why we need it**:
Promote images for snapshotter components.

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/bl...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10057)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3258: [occm] Helm chart DNS default can block cluster bootstrap while CoreDNS waits for node initialization

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Cannot delete PV
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* cinde...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3258)

**Metadata:**
- Created: 2026-10-13
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3259: [occm] fix bootstrap dns

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3259)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3257: Post 1.37 release tasks

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3257)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3255: Bump release 1.37.1

**What this PR does / why we need it:**

Release 1.37.1.

This is a redo of the recent release 1.37.0, that release encountered issues, the container images never published because the cloud-provider-openstack-push-images job failed building the new osbrick-sidecar image for architectures withou...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3255)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4562: Publish the release SBOM as SPDX 3 and fix its source reference

#### What type of PR is this?

/kind feature
/kind bug

#### What this PR does / why we need it:

- **SPDX 3 release SBOM.** The stage run writes the release artifacts SBOM as SPDX 3.0.1 JSON-LD too, converted from the same document with bom v0.8.0 (`spdx.ToProtobom`, `spdx.WriteSPDX3`), and stages ...

🔗 [Link](https://github.com/kubernetes/release/pull/4562)

**Metadata:**
- Created: 2026-10-13
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14356: Sandbox API: complete support for sandboxer plugins

### What is the problem you're trying to solve

The Sandbox API lets a sandboxer own the pod sandbox. Most of #9431 is merged, but full support is not done:

- A sandboxer works well only when it is a shim, and CRI still assumes `podsandbox` in some places.
- A sandboxer that is a proxy plugin, or t...

🔗 [Link](https://github.com/containerd/containerd/issues/14356)

**Metadata:**
- Created: 2026-10-14
- Comments: 1
- State: open

### cncf/prow-github-actions#466: [quality] coverage-e2e names tide.ts:99 uncovered; the zero is the never-reached `options.initial ?? await getPull` fallback on line 98

## Finding

`npm run test:coverage:e2e` (main @ 7f01721, local run) reports `src/plugins/tide.ts` as `99.56% Stmts / 93.98% Branch`, with line **99** (`for (const delay of unknownRetryDelaysMs)`) listed as uncovered. That line is not uncovered: in the same `coverage-e2e/lcov.info` the loop body exec...

🔗 [Link](https://github.com/cncf/prow-github-actions/issues/466)

**Metadata:**
- Created: 2026-10-13
- Comments: 11
- State: open

### cncf/toc#2329: fix(generator): correct struct tag for subproject_leads in Leadership struct

### Summary
The `Leadership` struct in `generator/readme_app.go` defines `SubprojectLeads` with an invalid YAML tag: `yaml:"Subpproject Leads"`.

### Problem & Impact
1. **Typo and casing mismatch**: The tag contains a duplicate 'p' (`Subpproject`) and a space, instead of snake_case `subproject_lead...

🔗 [Link](https://github.com/cncf/toc/issues/2329)

**Metadata:**
- Created: 2026-10-13
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-10-14 03:29:15*
