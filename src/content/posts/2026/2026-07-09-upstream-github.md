---
title: "Upstream Github - 2026-07-09"
description: "CNCF upstream activity from github"
pubDate: 2026-07-09
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/release", "area/release-eng", "needs-priority", "release", "pr", "cncf-cla: yes", "size/XL", "approved", "release-note", "kind/cleanup", "size/M", "kind/feature", "needs-sig", "needs-triage", "area/test", "size/L", "release-note-none", "sig/windows", "sig/testing", "lgtm", "area/provider/gcp", "size/S", "kind/flake", "sig/cloud-provider", "area/kubectl", "sig/auth", "sig/cli", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/apiserver", "sig/api-machinery", "sig/instrumentation", "sig/etcd", "sig/node", "area/kubelet", "sig/scheduling", "needs-rebase", "size/XXL", "kind/api-change", "sig/apps", "do-not-merge/hold", "area/code-generation", "do-not-merge/invalid-commit-message", "wg/device-management", "priority/backlog", "do-not-merge/work-in-progress", "size/XS", "kind/failing-test", "ok-to-test", "do-not-merge/cherry-pick-not-approved", "do-not-merge/contains-merge-commits", "priority/important-soon", "triage/accepted", "sig/storage", "area/provider/azure", "area/jobs", "area/config", "test-infra", "area/images", "sig/k8s-infra", "area/infra", "area/prow", "area/infra/ibmcloud", "k8s.io", "area/artifacts", "area/registry.k8s.io", "kops", "area/nodeup", "area/api", "area/rolling-update", "area/provider/aws", "area/provider/openstack", "area/provider/digitalocean", "area/channels", "area/kops-controller", "area/provider/spotinst", "area/provider/hetzner", "area/provider/scaleway", "area/dependency", "cloud-provider-gcp", "autoscaler", "area/cluster-autoscaler", "area/vertical-pod-autoscaler", "kind/documentation", "cloud-provider-openstack", "node-problem-detector", "envoyproxy", "gateway", "containerd", "area/nri", "ttrpc", "area/cosign", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140334: KEP-5729: Promote DRAWorkloadResourceClaims to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140334)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140325: KEP-5491: restore the intersection on backtrack in `matchAttribute` constraint when DRAListTypeAttributes is enabled

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140325)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9955: Auto create cluster-autoscaler api docs

#### What type of PR is this?
/kind documentation

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
/kind r...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9955)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9954: Bump golang from 1.26.4 to 1.27rc2 in /vertical-pod-autoscaler/pkg/updater

Bumps golang from 1.26.4 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.4&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9954)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9953: Bump golang from 1.26.4 to 1.27rc2 in /vertical-pod-autoscaler/pkg/recommender

Bumps golang from 1.26.4 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.4&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9953)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9952: Bump golang from 1.26.4 to 1.27rc2 in /vertical-pod-autoscaler/pkg/admission-controller

Bumps golang from 1.26.4 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.4&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9952)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#9448: Support a local/filesystem Wasm code source in EnvoyExtensionPolicy

Would the maintainers be open to adding a local file code source for Wasm, alongside the existing `HTTP` and `Image` types? Happy to write the PR if there's appetite, wanted to check the design direction first.

**Why**
I'm running a Wasm filter as a hard security boundary (`failOpen: false`). Today...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9448)

**Metadata:**
- Created: 2026-07-08
- Comments: 3
- State: open

## Updates

### kubernetes/release#4456: krel includes PR with `release-note-none` when a release notes map file exists

## Description

While generating release notes for the **v1.37.0-alpha.2** release, `krel` included **kubernetes/kubernetes#137290** in the generated release notes even though the PR was intended to be excluded via `release-note-none`.

## What happened

PR **#137290** was included in the generated ...

🔗 [Link](https://github.com/kubernetes/release/issues/4456)

**Metadata:**
- Created: 2026-07-08
- Comments: 0
- State: open

### kubernetes/release#4458: Even go-github version with release-sdk



#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR evens the version of go-github we're using in k/release with the one we're using in k-sigs/release-sdk as we cannot upgrade the repository to the latest sdk as it is now (See https://github.com/...

🔗 [Link](https://github.com/kubernetes/release/pull/4458)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4455: Build kube-cross, go-runner, releng-ci with golang 1.24.5 and 1.25.12

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Build kube-cross, go-runner, releng-ci with golang 1.24.5 and 1.25.12

#### Which issue(s) this PR fixes:

Part of https://github.com/kubernetes/release/issues/4449

#### Does this PR introduce a us...

🔗 [Link](https://github.com/kubernetes/release/pull/4455)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes: v1.37.0-alpha.3


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-alpha.3)

**Metadata:**
- Version: v1.37.0-alpha.3
- Published: 2026-07-08
- Prerelease: Yes

### kubernetes/kubernetes#140338: nil-pointer panic on RoleBinding/ClusterRoleBinding when kubectl auth reconcile returns an error

### What happened?

Argo CD controller crashed when the caller lacks RBAC permission instead of erroring. https://github.com/argoproj/argo-cd/issues/28607

`kubectl auth reconcile` panics with a nil-pointer dereference when reconciling a
`RoleBinding` or `ClusterRoleBinding` if the underlying reconc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140338)

**Metadata:**
- Created: 2026-07-08
- Comments: 2
- State: open

### kubernetes/kubernetes#140343: Add the windows topology manager metrics related tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140343)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140342: gce: read proc/sys/kernel/random/boot_id instead of journalctl

In E2E reboot tests that simulate crashes (unclean shutdowns), the systemd journal logs on the writeable partition can become corrupted or truncated.

On the subsequent boot, the GCE node configuration scripts (`configure.sh` and `configure-helper.sh`) attempt to read the boot history using `journ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140342)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140340: Fix auth reconcile binding nil panic

#### What type of PR is this?

  /kind bug
  /kind regression
  /sig cli

 #### What this PR does / why we need it:

`kubectl auth reconcile` panics with a nil-pointer dereference when reconciling a `RoleBinding` or `ClusterRoleBinding` if the reconcile operation returns an error. 
Adds nil...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140340)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140336: Add metric to measure the end-to-end dispatch latency of watch events in the apiserver

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140336)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140335: Safely harden probe stress container checks

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it

This safely hardens the probe stress e2e test by detecting containers that terminate during the stress window.

The stress pod uses `RestartPolicy: Never`, so a liveness-probe-induced kill can t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140335)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140332: kubelet: add unit tests for cm/helpers_linux.go improving coverage

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Adds comprehensive unit tests for `pkg/kubelet/cm/helpers_linux.go` to improve test coverage for the container manager helpers package. This file contains critical conversion functions (CPU shares/quota, memory limits...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140332)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140329: Reduce allocations for filtered list requests served from the watch cache

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/140200

This reduces allocations when serving *filtered* LIST requests by preallocating when loading data from the watch cache B tree

```
goos: ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140329)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140328: e2e: skip RestartAllContainers tests on Windows

#### What type of PR is this?

/kind failing-test
/sig node
/sig windows
/area kubectl

#### What this PR does / why we need it:

The `RestartAllContainers` e2e specs under `Pod Extended (RestartAllContainers)` time out on Hyper-V-isolated Windows nodes. As noted by @SergeyKanzhelev in the issue, th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140328)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140327: [release-1.36] Fix dbus connection leak in node shutdown manager causing thread exhaustion

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Cherry-pick of #137141 onto release-1.36.

When the node shutdown manager's `start()` fails after creating a dbus connection (e.g. `CurrentInhibitDelay()` errors), the connection was never closed. The infin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140327)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140326: dra: fix stale intersection on backtrack in matchAttributeConstraint

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Fixes a bug in the experimental DRA allocator's `matchAttributeConstraint` where the intersection of list-type device attribute values was not restored when the allocator backtracked during its depth-first search....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140326)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140324: kube-aggregator: restrict external APIService OpenAPI v3 discovery to…

Fixes #140152

## Summary

Fix nondeterministic OpenAPI v3 discovery routing in kube-aggregator.

External APIService backends may expose generic OpenAPI v3 paths such as `apis` and `version` in addition to their own group-version path. kube-aggregator previously stored these paths as-is, caus...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140324)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140322: Automated cherry pick of #140163: kubelet: stop logging missing optional container annotations

Cherry pick of #140163 on release-1.36.

#140163: kubelet: stop logging missing optional container annotations

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140322)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140321: Automated cherry pick of #140163: kubelet: stop logging missing optional container annotations

Cherry pick of #140163 on release-1.35.

#140163: kubelet: stop logging missing optional container annotations

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140321)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140320: Automated cherry pick of #140163: kubelet: stop logging missing optional container annotations

Cherry pick of #140163 on release-1.34.

#140163: kubelet: stop logging missing optional container annotations

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140320)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140319: mount-utils: attribute NeedResize format-check error correctly

The error returned by ResizeFs.NeedResize when it fails to determine the disk format was labeled "ResizeFS.Resize", having been copied from Resize(). This misattributes the failure to the wrong function in logs and surfaced errors. Correct the prefix to "ResizeFS.NeedResize" and add a regression tes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140319)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140318: kubelet: only track pod certificates for admitted pods

### What type of PR is this?

/kind bug

### What this PR does / why we need it

`TrackPod` was previously called before the kubelet admission check in `HandlePodAdditions`, causing pod certificates to be tracked even for pods that were later rejected.

This PR moves `TrackPod` to execute on...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140318)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140317: code-generator: don't overwrite NegotiatedSerializer

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140317)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140316: client-go testing: handle pod evictions in fake client

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Updates the fake client object tracker so create actions for the pod eviction subresource delete the tracked Pod. This makes fake client eviction behavior match callers expectations when listing pods after eviction...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140316)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37418: Add MIN_WINDOWS_WORKER_MACHINE_COUNT in windows e2e test

Added minimum Windows worker machine count configuration to improve e2e test stability

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37418)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37415: add the argocd differ as a prowjob

We used to have it as action that commented on PRs but it attracted a lot of bad attention. It's now a prowjob that provides a link to the html with the diff.

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/k8s.io/9688/pull-k8sio-argocd-diff/2074991511023390720



🔗 [Link](https://github.com/kubernetes/test-infra/pull/37415)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9688: fix a bug with pod mutation and insert cloud metadata into the test container

**What this PR does / why we need it**:

Some prowjobs don't check out repositories and therefore fail to be mutated successfully.

Improvements:
- json logging so we can view logs correctly in Datadog
- fixed some argocd sync errors by following https://kyverno.io/docs/installation/platform-n...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9688)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9685: Image promotion for scl-image-builder v0.1.54

Image promotion for scl-image-builder v0.1.54
This is an automated PR generated from `kpromo`
```
kpromo pr --fork mboersma --project scl-image-builder --reviewers "@AverageMarcus @jsturtevant @kkeshavamurthy @mboersma @drew-viles" --tag v0.1.54
```

/hold
cc: @AverageMarcus @jsturtevant @kkeshavamu...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9685)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18552: Build with disable_grpc_modules tag to shrink binaries

/cc @rifelpet @ameukam 

Assisted by Claude Opus

🔗 [Link](https://github.com/kubernetes/kops/pull/18552)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18551: Replace fi.PtrTo with new() builtin

/cc @rifelpet @ameukam 

🔗 [Link](https://github.com/kubernetes/kops/pull/18551)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18550: Replace fi.PtrTo with new() builtin

/cc @rifelpet @ameukam 

🔗 [Link](https://github.com/kubernetes/kops/pull/18550)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18549: Replace fi.PtrTo with new() builtin

/cc @rifelpet @ameukam 

🔗 [Link](https://github.com/kubernetes/kops/pull/18549)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1238: chore(deps): bump the k8s-dependencies group across 3 directories with 6 updates

Bumps the k8s-dependencies group with 3 updates in the /metis directory: [k8s.io/api](https://github.com/kubernetes/api), [k8s.io/client-go](https://github.com/kubernetes/client-go) and [k8s.io/component-base](https://github.com/kubernetes/component-base).
Bumps the k8s-dependencies group with 4 upd...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1238)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1237: chore(deps): bump the workspace-deps group across 3 directories with 2 updates

Bumps the workspace-deps group with 1 update in the /metis directory: [google.golang.org/grpc](https://github.com/grpc/grpc-go).
Bumps the workspace-deps group with 1 update in the /providers directory: [google.golang.org/api](https://github.com/googleapis/google-api-go-client).
Bumps the workspace-...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1237)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: cluster-autoscaler-1.34.4

## Changes by Kind

### Feature

- Azure: implement AtomicIncreaseSize for VMSS (#9764, @jackfrancis)

### Bug or Regression

- Azure Cluster Autoscaler now handles VMSS target-size cache failures during delete operations more defensively, preventing negative cached sizes and target-size panics after failed or uncertain VMSS deletes. (#9880, @tallaxes)

### Other (Cleanup or Flake)

- Update k8s deps to v1.34.9 (#9874, @jackfrancis)

### Uncategorized

- Add template-node label t...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.34.4)

**Metadata:**
- Version: cluster-autoscaler-1.34.4
- Published: 2026-07-08
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.33.5

## Changes by Kind

### Feature

- Azure: implement AtomicIncreaseSize for VMSS (#9789, @jackfrancis)

### Bug or Regression

- Azure Cluster Autoscaler now handles VMSS target-size cache failures during delete operations more defensively, preventing negative cached sizes and target-size panics after failed or uncertain VMSS deletes. (#9879, @tallaxes)

### Other (Cleanup or Flake)

- Update k8s deps to v1.33.13 (#9875, @jackfrancis)

### Uncategorized

- Add template-node label ...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.33.5)

**Metadata:**
- Version: cluster-autoscaler-1.33.5
- Published: 2026-07-08
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.36.0

## Changes by Kind

### API Change

- Fixed a bug with DRA node readiness processor not considering devices from multiple resource slices (#9245, @mtrqq)
- The flag should be set to empty for general release. This flag should only be used for specific clusters which have any such needs or as a mitigation tool if applicable. (#8869, @damikag)
- Update Azure SDK to v2 (#8784, @mboersma)

### Feature

- DRA: partitionable devices support (#8559, @MenD32)
- "cluster-autoscaler-status" con...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.36.0)

**Metadata:**
- Version: cluster-autoscaler-1.36.0
- Published: 2026-07-08
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.35.1

## Changes by Kind

### Feature

- Azure: implement AtomicIncreaseSize for VMSS (#9763, @jackfrancis)

### Bug or Regression

- Fixed overwriting CapacityBuffer conditions and fixed typos in condition messages and reasons (#9252, @jackfrancis)
- `huawei-cloud-provider`: Nodes without providerId are skipped (with a warning), and CA continues to work normally for other nodes. (#9208, @Hargeek)

### Other (Cleanup or Flake)

- Update Kubernetes dependencies to v1.35.6 (#9858, @jackfran...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.35.1)

**Metadata:**
- Version: cluster-autoscaler-1.35.1
- Published: 2026-07-08
- Prerelease: No

### kubernetes/autoscaler#9950: Enable CodeRabbit for autoscaler repo(?)

Kueue is a widely used project under SIG Scheduling(https://kueue.sigs.k8s.io/).
In this PR: https://github.com/kubernetes-sigs/kueue/pull/11971, the project enabled CodeRabbit integration to assist maintainers with code reviews.

I'm opening this issue to discuss whether we should enable CodeRabbit...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9950)

**Metadata:**
- Created: 2026-07-08
- Comments: 5
- State: open

### kubernetes/autoscaler#9951: Add validation for verticalpodautoscaler.spec.resourcePolicy.containerPolicies.controlledResources

#### What type of PR is this?

/kind cleanup
/kind api-change

#### What this PR does / why we need it:

Currently we don't have any validation for this field

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9951)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9949: scaleway: report node in error as InstanceCreating so CA detects it faster

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

report node in error as InstanceCreating so CA detects it faster

#### Which issue(s) this PR fixes:

n/a

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
<!--...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9949)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3145: [Feature Request] [occm] Controller to clean-up OCCM orphaned openstack ressources

/kind feature

**What happened**:

If we provision a cluster with OCCM controlled resources, then delete it directly, OCCM can't and will never remove openstack resources. 
This is because the cluster and the controller are removed before any garbage collection and proper cascading deletion can happ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3145)

**Metadata:**
- Created: 2026-07-08
- Comments: 1
- State: open

### kubernetes/node-problem-detector#1302: chore(deps): pre-vendor OpenTelemetry dependencies

/cc @ameukam @SergeyKanzhelev @wangzhen127 
/hold

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1302)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway: v1.7.5

# Release Announcement

Check out the [v1.7.5 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.7.5) to learn more about the release.

## What's Changed
* [release-1.7] don't mark as latest by @zirain in https://github.com/envoyproxy/gateway/pull/9178
* [release-1.7] bump codecov by @zirain in https://github.com/envoyproxy/gateway/pull/9301
* [release-1.7]: bump go.uber.org/zap from 1.27.1 to 1.28.0 by @dependabot[bot] in https://github.com/envoyproxy/gateway/pull...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.7.5)

**Metadata:**
- Version: v1.7.5
- Published: 2026-07-08
- Prerelease: No

### envoyproxy/gateway#9445: panic: reflect: slice index out of range in watchable coalesce goroutine (Go 1.25)

## Summary

Envoy Gateway panics with `reflect: slice index out of range` inside
`reflect.deepValueEqual` when running under Go 1.25. The crash is a data race
between the gateway-api translate goroutine and the `watchable` library's
background coalesce goroutine.

```
2026-06-23T10:17:26.531Z       ...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9445)

**Metadata:**
- Created: 2026-07-08
- Comments: 4
- State: open

### containerd/containerd#13733: NRI deadlock between plugin-initiated Runtime.UpdateContainers and CRI lifecycle/update events

## Description

We observed a containerd deadlock involving NRI when an already-registered NRI plugin actively calls `Runtime.UpdateContainers` from its own reconciliation loop while CRI container lifecycle/update events are being processed.

This looks related to the lock-order problem discussed in...

🔗 [Link](https://github.com/containerd/containerd/issues/13733)

**Metadata:**
- Created: 2026-07-08
- Comments: 1
- State: open

### containerd/ttrpc: v1.2.9

## What's Changed
* Migrate from protobuild to buf by @kzys in https://github.com/containerd/ttrpc/pull/226
* build(deps): bump actions/setup-go from 6.3.0 to 6.4.0 by @dependabot[bot] in https://github.com/containerd/ttrpc/pull/228
* Fix proto generation by @dmcgowan in https://github.com/containerd/ttrpc/pull/232
* Set buf version from file and match dev version by @dmcgowan in https://github.com/containerd/ttrpc/pull/233
* server: cancel per-stream context when handler returns by @eginez...

🔗 [Link](https://github.com/containerd/ttrpc/releases/tag/v1.2.9)

**Metadata:**
- Version: v1.2.9
- Published: 2026-07-08
- Prerelease: No

### containerd/nerdctl#5053: add support for `--disable-content-trust` flag

### What is the problem you're trying to solve

`nerdctl run` currently lists `--disable-content-trust` as an unimplemented Docker compatibility flag.
https://github.com/containerd/nerdctl/blob/460875345229737b441a3a8618679dd0522e3d17/docs/command-reference.md?plain=1#L457-L460
Docker uses this flag...

🔗 [Link](https://github.com/containerd/nerdctl/issues/5053)

**Metadata:**
- Created: 2026-07-08
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-09 02:43:56*
