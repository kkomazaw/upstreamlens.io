---
title: "Upstream Github - 2026-10-28"
description: "CNCF upstream activity from github"
pubDate: 2026-10-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/network", "area/kube-proxy", "needs-triage", "pr", "kind/cleanup", "area/apiserver", "sig/api-machinery", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "kind/flake", "release-note-none", "sig/testing", "kind/bug", "sig/node", "size/L", "do-not-merge/cherry-pick-not-approved", "do-not-merge/work-in-progress", "priority/important-soon", "kind/feature", "wg/device-management", "kind/api-change", "release-note-action-required", "area/kubelet", "size/XS", "size/XL", "approved", "triage/accepted", "sig/scalability", "lgtm", "sig/cluster-lifecycle", "size/S", "area/kubeadm", "area/dependency", "sig/scheduling", "wg/workload-aware-scheduling", "area/code-generation", "ok-to-test", "do-not-merge/invalid-commit-message", "sig/etcd", "size/XXL", "do-not-merge/release-note-label-needed", "website", "sig/contributor-experience", "sig/docs", "area/community-management", "area/slack-management", "community", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "area/jobs", "area/config", "test-infra", "autoscaler", "do-not-merge/needs-area", "area/cluster-autoscaler", "cncf-cla: no", "area/provider/azure", "needs-rebase", "area/vertical-pod-autoscaler", "area/helm-charts", "kind/dependency", "kops", "kube-state-metrics", "containerd", "release", "stargz-snapshotter", "overlaybd", "nerdbox", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143463: KEP-5710: Log error when PostFilter plugin does not implement PodGroupPostFilterPlugin

#### What type of PR is this?

/kind feature
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

When the `GenericWorkload` feature gate is enabled, the scheduler framework now logs an error at initialization for each plugin enabled at the `PostFilter` extension ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143463)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10546: fix: size cache fixes during deletes

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
/kind regression
-->

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10546)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10544: [cluster-autoscaler-release-1.37] Update CA Core to v0.0.0-k8s.v1.37.1

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
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10544)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143476: Make kube-proxy conntrack sizing cap configurable

### What would you like to be added?

Make kube-proxy's conntrack sizing cap configurable with an optional `conntrack.max` field, instead of relying only on the hardcoded `1048576` ceiling in `getConntrackMax`.

Proposed semantics for discussion:
- Omitted `max` retains a default ceiling of `1048576...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143476)

**Metadata:**
- Created: 2026-10-28
- Comments: 1
- State: open

### kubernetes/kubernetes#143481: apiserver/cel: fix ObjectVal convertField allocs

apiserver/cel: fix ObjectVal convertField allocs

Move the *ObjectVal fast-path out of the traits.Mapper branch to the
top of convertField so it is reachable (*ObjectVal only implements
ref.Val and traits.Zeroer). Cache value.Value() in a local variable
so non-ObjectVal fields only evaluate Val...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143481)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143480: test/cmd: avoid leaking CRDs when discovery races Established

#### What type of PR is this?

/kind flake
#### What this PR does / why we need it:
A flake I met in a PR: https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/org/6455/pull-org-test-all/2104674209492897792
#### Which issue(s) this PR is related to:
Fixes None

#### Special notes for your rev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143480)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143479: [release-1.37] e2e_node: support image_exclude_regex

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Backport #141626 to the release-1.37 GCE runner, adapted to the branch's existing selection code. The Ubuntu configuration proposed in kubernetes/test-infra#38166 uses `image_exclude_regex`, which this runner current...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143479)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143478: Promote DRAPartitionableDevices to GA

Lock the feature gate on in 1.38 so it can no longer be disabled.

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promote the `DRAPartitionableDevices` feature gate to GA and lock it to its default (`true`) in 1.38. The gate is scheduled for removal in 1.41.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143478)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143477: kube-proxy: make conntrack sizing cap configurable

#### What type of PR is this?
/kind feature
/kind api-change
/sig network
/area kube-proxy

#### What this PR does / why we need it:
Adds `conntrack.max` to configure kube-proxy's conntrack sizing ceiling. The default remains 1048576; zero disables the cap. Calculates the CPU-scaled target with the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143477)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143475: kubelet: fix --seccomp-default flag rendered with a value placeholder

Hey is my first PR to CNCF. thanks for your help.

#### What type of PR is this?

/kind bug
/area kubelet
/sig node

#### What this PR does / why we need it:

The usage string of the kubelet `--seccomp-default` flag wraps `RuntimeDefault` in backticks. It treats a back-quoted word in a usa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143475)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143474: kubelet: record volumeMounts in actuation checkpoint and use it to populate containerStatuses.volumeMounts

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143474)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143473: Add BenchmarkAdmissionPolicyRequestCost integration benchmark

Measure per-request heap allocations for kube-apiserver requests evaluated by CEL-based admission policies:

- Deployment create admitted by a ValidatingAdmissionPolicy or mutated by a MutatingAdmissionPolicy (applyConfiguration and JSONPatch), with an unmatched Deployment as baseline, at 1, 10 and ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143473)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143472: Watchcache split list semantic

Followup to https://github.com/kubernetes/kubernetes/pull/143464
/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143472)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143470: Collapse requestedWatchRV into requiredResourceVersion in initWatcherIntervalLocked

For WatchList requests, requiredResourceVersion is 0 only when resourceVersion="0" and otherwise already equals the target bookmark RV (either requestedWatchRV or storage's current RV), allowing getBookmarkAfterResourceVersion to be inlined and requestedWatchRV dropped from initWatcherIntervalLocked...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143470)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143469: apiserver test: report memory metrics in BenchmarkRequestCost


#### What type of PR is this?

/kind cleanup
/sig api-machinery
/sig scalability

#### What this PR does / why we need it:

In [`test/integration/apiserver/flowcontrol/cost/cost_test.go`](https://github.com/kubernetes/kubernetes/blob/7214565f5b2292c07082d99da8e29533735ab8bd/test/integration/apiserv...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143469)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143468: bump coredns to v1.15.0

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143468)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143464: Extract list semantic in watch cache

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143464)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143460: applyconfiguration-gen: do not generate apply configurations for type…

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143460)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143459: Move abstracted optimistic concurrency code to storage package

/kind cleanup

Followup to https://github.com/kubernetes/kubernetes/pull/143411

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143459)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143458: staging: fix flake in TestApfWatchHandlePanic/post-execute_panic

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143458)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143456: [WIP] DRA Preemtption

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143456)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143455: [DO NOT REVIEW] e2e: add regression test for probe workers on rule mismatch

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143455)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143454: Add CEL benchmarks for CRD validation rules, VAP and MAP

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143454)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58374: Initiating Turkish localization

## Tentative Contributors

- @berat-samli
- @cgozde
- @dogukanturan
- @ozanbozkurtt

We are starting with four people, and we would love for the team to be bigger than that. If you would like to help with Turkish docs, whether that is translating, reviewing, or just arguing about terminology, please...

🔗 [Link](https://github.com/kubernetes/website/issues/58374)

**Metadata:**
- Created: 2026-10-27
- Comments: 1
- State: open

### kubernetes/community#9239: sig-docs: add kubernetes-docs-tr slack channel

**What this PR does / why we need it:**
Creates the `#kubernetes-docs-tr` Slack channel to coordinate **Turkish** localization efforts under SIG Docs.

**Which issue(s) this PR fixes**:
Fixes kubernetes/website#58374

/kind feature

🔗 [Link](https://github.com/kubernetes/community/pull/9239)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10135: Image promotion for cloud-provider-gcp: gcp-compute-persistent-disk-csi-driver v1.28.1

**What this PR does / why we need it**:
Image promotion for cloud-provider-gcp, the line matches what `generate.sh` produces:
- gcp-compute-persistent-disk-csi-driver v1.28.1

v1.28.1 is built with Go 1.26.10 (the Go update from kubernetes-sigs/gcp-compute-persistent-disk-csi-driver#2442), which fix...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10135)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38173: kOps: scope agentic-ai dependency audit and publish an HTML report

Limits the ci-k8s-infra-agentic-ai dependency audit to the kOps root module and requires evidence for each finding, since the last report included CVEs that did not apply and a binary size copied from a code comment. The report is also saved as an HTML artifact linked from the Prow job page.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38173)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10526: Dependency Dashboard

This issue lists Renovate updates and detected dependencies. Read the [Dependency Dashboard](https://docs.renovatebot.com/key-concepts/dashboard/) docs to learn more.<br>[View this repository on the Mend.io Web Portal](https://developer.mend.io/github/kubernetes/autoscaler).

## Awaiting Schedule

T...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10526)

**Metadata:**
- Created: 2026-10-27
- Comments: 1
- State: open

### kubernetes/autoscaler#10549: perf(nanny): compute resource overhead without string conversions

perf(nanny): compute resource overhead without string conversions

  #### What type of PR is this?

  /kind bug

  #### What this PR does / why we need it:

  Computes resource overhead directly using resource.Quantity instead of converting quantities to strings, parsing them as
  float64, and parsi...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10549)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10548: fix(nanny): close metrics response reader

fix(nanny): close metrics response reader

  #### What type of PR is this?

  /kind bug

  #### What this PR does / why we need it:

Closes the metrics response reader after counting resources, including when decoding fails.

Previously, the reader was left open. Deferring Close immediatel...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10548)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10547: perf(nanny): reuse codecs in config updater

 #### What type of PR is this?

  /kind cleanup

  #### What this PR does / why we need it:

  Initializes the scheme and codec factory once when creating the nanny configuration updater and reuses the codecs across
  CurrentResources calls.

  Previously, every configuration refresh rebuilt the sch...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10547)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10545: feat(vpa-chart): add vpaObjectNamespace to run VPA with namespace-scoped access

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The recommender, updater and admission controller already accept `--vpa-object-namespace`, and with it set they only list VPAs, checkpoints, pods, LimitRanges and pod metrics in that namespace. The Helm chart, th...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10545)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18936: Support dynamic AMI resolution via SSM parameter (AWS)

/kind feature

Currently, the supported way to configure an AMI for an AWS InstanceGroup is to provide either an exact AMI ID or an SSM parameter containing the AMI ID. When an SSM parameter is provided using the `ssm:` format, it is resolved to an AMI ID during the `kops update cluster` command run...

🔗 [Link](https://github.com/kubernetes/kops/issues/18936)

**Metadata:**
- Created: 2026-10-27
- Comments: 0
- State: open

### kubernetes/kops#18933: Expose kube-apiserver service-account token expiration flags in KubeAPIServerConfig

/kind feature

**1. Describe IN DETAIL the feature/behavior/change you would like to see.**

Expose `--service-account-extend-token-expiration` and `--service-account-max-token-expiration` as `spec.kubeAPIServer` fields.

`KubeAPIServerConfig` has no field for either flag and there is no generic ext...

🔗 [Link](https://github.com/kubernetes/kops/issues/18933)

**Metadata:**
- Created: 2026-10-27
- Comments: 0
- State: open

### kubernetes/kube-state-metrics#3178: Reduce the memory peak of the WatchList initial sync

<!-- Please only use this template for submitting feature requests -->

**What would you like to be added**:

Lower the memory peak of the initial sync with WatchList, which is currently several times the steady state. I will open a PR for each of two options, and only one of them is needed:

1. Dro...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3178)

**Metadata:**
- Created: 2026-10-27
- Comments: 1
- State: open

### containerd/stargz-snapshotter: v0.19.1

## Notable Changes

- fusemanager: remove direct imports of logrus (#2411), thanks to @thaJeztah
- github.com/Microsoft/go-winio v0.6.3 (#2412), thanks to @thaJeztah
- verifier: separate pacakges to reduce import dependencies (#2418)
- analyzer: replace ctr signal helpers with local implementations (#2409), thanks to @thaJeztah
- verifier: fix hang issues (#2422)
- move analyzer package to cmd module (#2410), thanks to @thaJeztah


🔗 [Link](https://github.com/containerd/stargz-snapshotter/releases/tag/v0.19.1)

**Metadata:**
- Version: v0.19.1
- Published: 2026-10-27
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- b8e9cc6: New parameter for ublk threadPoolSize and supports different ioEngine for the upper datafile (#470) (Yifan Yuan)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-27
- Prerelease: Yes

### containerd/nerdbox: v0.2.7

## What's Changed
* feat(sockforward): support private guest-owned UDS listeners by @austinvazquez in https://github.com/containerd/nerdbox/pull/316
* build(deps): bump github.com/ebitengine/purego from 0.11.0 to 0.11.2 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/314
* build(deps): bump github.com/Microsoft/go-winio from 0.6.3-0.20251027160822-ad3df93bed29 to 0.6.4 by @dependabot[bot] in https://github.com/containerd/nerdbox/pull/315
* build(deps): bump actions/download-art...

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.7)

**Metadata:**
- Version: v0.2.7
- Published: 2026-10-27
- Prerelease: No

### cncf/toc#2348: add core sub-project guidance to dd-toc-guide and archiving

Following up on the contribute-site Subprojects FAQ (https://contribute.cncf.io/projects/lifecycle/subprojects/), this absorbs the key hard rules into formal TOC guidance: incoming sub-projects must meet standard CNCF onboarding requirements (parent governance's responsibility, verified by TOC durin...

🔗 [Link](https://github.com/cncf/toc/pull/2348)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-28 03:56:13*
