---
title: "Upstream Github - 2026-11-10"
description: "CNCF upstream activity from github"
pubDate: 2026-11-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scheduling", "sig/instrumentation", "needs-triage", "sig/apps", "priority/important-soon", "area/provider/gcp", "kind/flake", "sig/testing", "pr", "area/test", "kind/cleanup", "sig/storage", "size/XXL", "release-note-none", "cncf-cla: no", "needs-ok-to-test", "needs-priority", "area/kubelet", "sig/node", "sig/api-machinery", "release-note", "sig/autoscaling", "size/L", "kind/feature", "cncf-cla: yes", "sig/architecture", "area/conformance", "kind/bug", "size/XL", "approved", "wg/device-management", "size/M", "area/dependency", "do-not-merge/needs-sig", "sig/auth", "area/cloudprovider", "sig/cloud-provider", "sig/release", "do-not-merge/work-in-progress", "area/code-organization", "size/XS", "sig/cli", "area/apiserver", "size/S", "lgtm", "needs-rebase", "wg/workload-aware-scheduling", "committee/steering", "area/access", "area/groups", "sig/k8s-infra", "k8s.io", "kube-state-metrics", "do-not-merge/hold", "language/ko", "area/localization", "website", "release", "kops", "area/jobs", "area/config", "test-infra", "area/vertical-pod-autoscaler", "autoscaler", "ok-to-test", "area/cluster-autoscaler", "area/provider/cluster-api", "triage/accepted", "kind/dependency", "area/addon-resizer", "area/provider/gce", "language/en", "contributor-site", "cloud-provider-vsphere", "area/kubectl", "priority/backlog", "kubectl", "needs-kind", "area/release-eng", "sig/contributor-experience", "area/community-management", "community", "prometheus", "alertmanager", "containerd", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kube-state-metrics#3202: Configure Review Rules with Code Rabbit

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately see https://github.com/kubernetes/kube-state-metrics/blob/mai...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3202)

**Metadata:**
- Created: 2026-11-09
- Comments: 1
- State: open

### kubernetes/autoscaler#10661: VPA: Group aggregate containers to reduce recommender allocations

#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10661)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10652: GCE: Distinguish configuration_availability error


#### What type of PR is this?
/kind feature
<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regre...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10652)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.35.0 / 2026-11-09

* [CHANGE] Promote the `auto-gomemlimit` feature flag to the `--auto-gomemlimit` command-line flag. This is a breaking change: the `--enable-feature=auto-gomemlimit` option has been removed. #5464
* [CHANGE] Remove the deprecated `types` package in favor of the `alert` package. #5585
* [CHANGE] eventrecorder: Every output now requires a `name`. This is a breaking change: configurations with unnamed outputs fail to load. The name identifies the output in metrics and logs instead of its URL, bro...

🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.35.0)

**Metadata:**
- Version: v0.35.0
- Published: 2026-11-09
- Prerelease: No

## Updates

### kubernetes/kubernetes#143986: Some kube-scheduler histograms stay classic because ApplyFeatureGates() runs after SecureServing and Auth are initialized

### What happened?

Similar to #142379 (which tracks `kube-apiserver`), when running `kube-scheduler` with `--feature-gates=NativeHistograms=true`, histograms registered during early config initialization stay classic-only instead of exposing native histogram buckets:

- `workqueue_queue_duration_se...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143986)

**Metadata:**
- Created: 2026-11-09
- Comments: 2
- State: open

### kubernetes/kubernetes#143985: Some kube-controller-manager histograms stay classic because ApplyFeatureGates() runs after REST clients, SecureServing, and Auth are initialized

### What happened?

Similar to #142379 (which tracks `kube-apiserver`), when running `kube-controller-manager` with `--feature-gates=NativeHistograms=true`, histograms registered during early config initialization stay classic-only instead of exposing native histogram buckets:

- `rest_client_reques...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143985)

**Metadata:**
- Created: 2026-11-09
- Comments: 2
- State: open

### kubernetes/kubernetes#143984: [Flaking Test] GCE kube-up: a gcloud API error leaves the image name empty

### Which jobs are flaking?

- `ci-kubernetes-e2e-gci-gce` (sig-release-master-blocking)
- `ci-kubernetes-e2e-gce-device-plugin-gpu-1-35` (sig-release-1.35-blocking)
- `ci-kubernetes-e2e-gce-device-plugin-gpu-1-36` (sig-release-1.36-blocking)

### Which tests are flaking?

`Up` (`kubetest2.Up` on th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143984)

**Metadata:**
- Created: 2026-11-09
- Comments: 2
- State: open

### kubernetes/kubernetes#144000: e2e storage: collect VolumeSnapshot state before csimock cleanup

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Capture snapshot diagnostics inside CSI mock cleanup, before teardown mutates resources when the spec has already failed. Also capture remaining snapshot state when cleanup itself reports errors. The framework na...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144000)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143999: Graduate InPlacePodLevelResourcesVerticalScaling to GA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143999)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143998: Validate init container limits against pod-level limits

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143998)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143997: kube-controller-manager: apply metric feature gates before client and server init

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Moves `metricsfeatures.ApplyFeatureGates(utilfeature.DefaultMutableFeatureGate)` in `KubeControllerManagerOptions.Config()` to run immediately after `s.Validate()` and before `clientset.NewForConfig()` and `s.ApplyTo...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143997)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143996: DRA allocator tests: test all feature permutations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Test cases now run with every combination of features supported by the allocator under testing. Cases with only a partial feature list or a single *WithoutFeatures expectation now need to provide updated expectat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143996)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143995: e2e: csimock test for CSI global mount reconstruction

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds a csimock e2e test for `CSIGlobalMountReconstruction` (#138454), as suggested in https://github.com/kubernetes/kubernetes/pull/138454#issuecomment-6653191882. The test makes NodeUnstage fail, deletes the pod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143995)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143993: Add linter rule for safe use of +k8s:monotonic

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR adds a new `dependenttags` configuration to the kube‑api‑linter that enforces the correct usage of the `+k8s:monotonic` validation marker.

see the discussion in https://github.com/kubernetes/kubernetes/p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143993)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143992: Use accessor interface instead of directly casing Pod to type

Continuation of https://github.com/kubernetes/kubernetes/pull/142976

/kind feature

```release-note
NONE
```

Ref https://github.com/kubernetes/kubernetes/issues/142943

/assign @liggitt 

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143992)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143991: cloud-provider: validate --concurrent-service-syncs

#### What type of PR is this?

/kind bug
/sig cloud-provider

#### What this PR does / why we need it:

`ServiceControllerOptions.Validate()` in `k8s.io/cloud-provider/options` returns no errors for any value, so the cloud-controller-manager starts with any `--concurrent-service-syncs`:

- `0`: `Con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143991)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143990: [WIP] update-vendor: let selected staging modules lag the root go directive by one minor version

#### What type of PR is this?
/kind feature
/sig architecture release
/area code-organization

#### What this PR does / why we need it:
Lets selected staging modules keep an older go directive than the root module, so importers are not forced onto the newest Go.

`hack/update-vendor.sh` gets a list ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143990)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143989: staging/test: test modules in module mode

#### What type of PR is this?
/kind bug
/sig testing architecture

#### What this PR does / why we need it:
`staging/test/test-modules-with-minimum-go.sh` runs inside the kubernetes checkout, so the go command is in workspace mode. In workspace mode go.work selects the toolchain and the go directive...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143989)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143988: Stop the Job DURATION column from growing after the Job fails

#### What type of PR is this?

/kind bug
/sig cli
/sig apps

#### What this PR does / why we need it:

`kubectl get jobs` computes DURATION as `now - startTime` whenever `completionTime` is unset. `completionTime` is only set when a Job succeeds (see the `JobStatus.CompletionTime` doc and `job_contr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143988)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143987: Track dispatchedResourceVersion on cacheWatcher

/kind cleanup
```release-note
NONE
```

#### AI usage disclosure:
Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143987)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143980: Extract indexedWatchers.allMatchingWatchers iterator

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143980)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143979: Extract eventsAfterLocked and checkResourceVersionLocked methods

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143979)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143977: DRA: skip extra work for binding conditions when disabled

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Sorting slices differently when binding conditions are supported causes some (small) overhead. We should only do that when enabled.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143977)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143976: Export FindNodesThatFitPod and add firstFit and findAll options to it

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143976)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143975: kubelet: keep container requests for resources not set at pod level

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`GetResourceRequestQuantity` asked `PodRequests` to skip container-level resources whenever the pod set any pod-level resource:

```go
hasPodLevelResources := utilfeature.DefaultFeatureGate.Enabled(features...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143975)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143974: Update comment about victim sorting

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143974)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143973: scheduler: remove revertFns from scheduling algorithm return signatures

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

After #142136, and as per suggestion: https://github.com/kubernetes/kubernetes/pull/142136#issuecomment-5950044554:

We can make an improvement to confine a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143973)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10192: Turn on moderation on steering-private

**What this PR does / why we need it**:
SSIA

**Special notes for your reviewer**:
/cc @kubernetes/steering-committee 

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10192)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3204: chore: Move rexagod to emeritus_approvers

I'm no longer active on this project. This moves me out of the `reviewers` and `approvers` lists and into `emeritus_approvers` so I'm no longer assigned as a reviewer on pull requests.

/assign

🤖 Generated with [Claude Code](https://claude.com/claude-code)

<!-- This is an auto-generated comment: ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3204)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3201: ci: add CodeRabbit configuration for metrics checks

Configure .coderabbit.yaml with path-specific review instructions, pre-merge custom checks, and repository code guidelines to automate metric stability, label cardinality, naming, and documentation sync checks on pull requests.

<!--  Thanks for sending a pull request!  Here are some tips for you:...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3201)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59130: [ko] Translate content/en/docs/concepts/scheduling-eviction/running-multiple-schedulers.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/scheduling-eviction/running-multiple-schedulers.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/scheduling-eviction/running-multiple-schedulers/

**Why is this ne...

🔗 [Link](https://github.com/kubernetes/website/issues/59130)

**Metadata:**
- Created: 2026-11-10
- Comments: 1
- State: open

### kubernetes/kops: v1.36.3

## What's Changed
* Automated cherry pick of #18711: Update Go to 1.26.6 and bump golang.org/x modules by @hakman in https://github.com/kubernetes/kops/pull/18712
* Automated cherry pick of #18727: Disable kindnet DNS caching by default by @rifelpet in https://github.com/kubernetes/kops/pull/18729
* Automated cherry pick of #18724: nodeup: install kernel-modules-extra on RHEL10-family nodes by @rifelpet in https://github.com/kubernetes/kops/pull/18733
* Automated cherry pick of #18701: Updat...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.36.3)

**Metadata:**
- Version: v1.36.3
- Published: 2026-11-10
- Prerelease: No

### kubernetes/test-infra#38267: Add presubmit to test staging modules with their minimum Go

Adds an optional presubmit that runs `staging/test/test-modules-with-minimum-go.sh` when go.mod, go.work, .go-version, hack/update-vendor.sh or staging/test change. Same spec as the periodic `ci-kubernetes-test-modules-with-minimum-go`.

Context: kubernetes/kubernetes#130799. The script change that ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38267)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10660: VPA: Recommender checks all containers for each VPA, causing extra allocations.

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
VPA - recommender

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resi...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10660)

**Metadata:**
- Created: 2026-11-09
- Comments: 2
- State: open

### kubernetes/autoscaler#10659: fix(clusterapi): skip a pending machine that registered before deletion

#### What type of PR is this?

bug

#### What this PR does / why we need it:

The cluster-api provider could delete a machine whose node had already joined.

The autoscaler builds its list of unregistered nodes from a provider instance list that can be up to five minutes old. A machine that ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10659)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10657: [VPA] Bump go deps (vpa-release-1.7)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [golang.org/x/mod](https://pkg.go.dev/golang.org/x/mod) | [`v0.42.0` → `v0.43.0`](https://cs.openso...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10657)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10656: [VPA] Bump go deps (vpa-release-1.8)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [golang.org/x/mod](https://pkg.go.dev/golang.org/x/mod) | [`v0.42.0` → `v0.43.0`](https://cs.openso...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10656)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10655: build(deps): bump helm/kind-action from 1.15.0 to 1.15.2

Bumps [helm/kind-action](https://github.com/helm/kind-action) from 1.15.0 to 1.15.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/helm/kind-action/releases">helm/kind-action's releases</a>.</em></p>
<blockquote>
<h2>v1.15.2</h2>
<h2>What's Changed</h2>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10655)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10654: build(deps): bump helm/chart-releaser-action from 1.8.0 to 1.9.0

Bumps [helm/chart-releaser-action](https://github.com/helm/chart-releaser-action) from 1.8.0 to 1.9.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/helm/chart-releaser-action/releases">helm/chart-releaser-action's releases</a>.</em></p>
<blockquote>
<h2>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10654)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10653: build(deps): bump github.com/spf13/pflag from 1.0.10 to 1.1.0 in /addon-resizer

Bumps [github.com/spf13/pflag](https://github.com/spf13/pflag) from 1.0.10 to 1.1.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/spf13/pflag/releases">github.com/spf13/pflag's releases</a>.</em></p>
<blockquote>
<h2>v1.1.0</h2>
<p>It's been long enough,...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10653)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10650: [VPA] Bump go deps (master)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) | Type | Update |
|---|---|---|---|---|---|
| [cel.dev/expr](https://redirect.github.com/cel-expr/cel-spec) | `v0.25.3` →...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10650)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/contributor-site#918: Adding GH link for Jenny Shu, fixed minor error in the award description

🔗 [Link](https://github.com/kubernetes/contributor-site/pull/918)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere: v1.38.0-beta.0

## What's Changed
* 🌱 Bump gcb-docker-gcloud to a prod image by @zhanggbj in https://github.com/kubernetes/cloud-provider-vsphere/pull/1842
* :seedling: (chore): Bump github.com/onsi/ginkgo/v2 from 2.32.0 to 2.32.1 in /hack/tools by @dependabot[bot] in https://github.com/kubernetes/cloud-provider-vsphere/pull/1845
* :seedling: (chore): Bump the kubernetes group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/kubernetes/cloud-provider-vsphere/pull/1790
* :seedling: (c...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/releases/tag/v1.38.0-beta.0)

**Metadata:**
- Version: v1.38.0-beta.0
- Published: 2026-11-09
- Prerelease: Yes

### kubernetes/kubectl#1903: getExplicitKuberc uses strings.Contains instead of strings.HasPrefix causing false positive matches on arguments containing --kuberc=

### What happened?

In `staging/src/k8s.io/kubectl/pkg/kuberc/kuberc.go`, `getExplicitKuberc` scans command-line arguments to find explicit `--kuberc` flag definitions.

Line 440 checks for the `--kuberc=` flag using `strings.Contains`:
```go
} else if strings.Contains(arg, "--kuberc=") {
    // Spl...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1903)

**Metadata:**
- Created: 2026-11-09
- Comments: 1
- State: open

### kubernetes/release#4622: Bump golang.org/x/sync from 0.24.0 to 0.25.0

Bumps [golang.org/x/sync](https://github.com/golang/sync) from 0.24.0 to 0.25.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/sync/commit/1f920df1e8fcf601d1aaf0f2ea500e1d2ccce105"><code>1f920df</code></a> syncmap: rename DeepCopyMap to CopyMap</li>
<li>See full di...

🔗 [Link](https://github.com/kubernetes/release/pull/4622)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4621: Bump golang.org/x/oauth2 from 0.37.0 to 0.38.0

Bumps [golang.org/x/oauth2](https://github.com/golang/oauth2) from 0.37.0 to 0.38.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/oauth2/commit/0f01e8215572819016fac21b005f5f32ba407798"><code>0f01e82</code></a> oauth2: prevent NewTicker panic</li>
<li>See full dif...

🔗 [Link](https://github.com/kubernetes/release/pull/4621)

**Metadata:**
- Created: 2026-11-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9256: Revert "Add AI notetaker guidance to Zoom meeting guidelines"

PR #9051 was merged without informing steering,  sig-contribex leads, nor the k8s community which this change applies to, which is not acceptable. Steering committee and SIG-Contribex leads will decide about what that kind of policy should look like and will handle the necessary communication to ens...

🔗 [Link](https://github.com/kubernetes/community/pull/9256)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdctl#5344: build: support resource limit flags (--memory, --cpu-*, --ulimit, --shm-size, --cgroup-parent)

### What is the problem you're trying to solve

`nerdctl build` currently exposes no resource limit flags at all, while both `docker build` and
`nerdctl run` do. Passing any of them fails with `unknown flag`:

```console
$ nerdctl build --memory 2g -t foo .
unknown flag: --memory

$ nerdctl build --...

🔗 [Link](https://github.com/containerd/nerdctl/issues/5344)

**Metadata:**
- Created: 2026-11-10
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-10 05:54:40*
