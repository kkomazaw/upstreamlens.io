---
title: "Upstream Github - 2026-07-28"
description: "CNCF upstream activity from github"
pubDate: 2026-07-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "kind/flake", "needs-triage", "kind/bug", "area/test", "area/kubelet", "sig/node", "sig/testing", "kind/feature", "sig/cli", "sig/auth", "pr", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "do-not-merge/hold", "needs-priority", "size/S", "needs-ok-to-test", "do-not-merge/work-in-progress", "do-not-merge/needs-sig", "sig/autoscaling", "sig/apps", "area/e2e-test-framework", "sig/windows", "wg/device-management", "size/XXL", "sig/instrumentation", "sig/architecture", "area/conformance", "sig/scheduling", "sig/storage", "sig/network", "size/XL", "size/XS", "do-not-merge/release-note-label-needed", "lgtm", "release-note", "size/M", "ok-to-test", "area/kubectl", "do-not-merge/needs-kind", "kind/api-change", "priority/critical-urgent", "area/kube-proxy", "approved", "kind/failing-test", "kind/regression", "triage/accepted", "do-not-merge/cherry-pick-not-approved", "cncf-cla: no", "sig/docs", "language/ja", "area/localization", "website", "language/ko", "language/en", "language/zh", "area/provider/aws", "kops", "minikube", "cloud-provider-gcp", "needs-rebase", "perf-tests", "area/jobs", "area/config", "test-infra", "area/cluster-autoscaler", "area/core-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "kube-state-metrics", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "release", "community", "containerd", "cncf", "lfx mentorship", "Term 3: Sept-Nov", "2026", "Mentors Confirmed", "Maintainer/Contribex Approved", "Proposal", "Validation Passed", "CNCF Approved", "Exported", "mentoring"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10064: Vulnerability in Cluster Autoscler

## Security Scan Report

Our internal security scan reports the following vulnerability in the Cluster Autoscaler (CA) images.

| Component | CVE | Suggested Remediation |
|----------|-----|-----------------------|
| Cluster Autoscaler | **GHSA-hrxh-6v49-42gf** | Upgrade google.golang.org/grpc to >=...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10064)

**Metadata:**
- Created: 2026-07-27
- Comments: 2
- State: open

### cncf/mentoring#1978: [CNCF LFX Proposal] HAMi: Reduce HAMi-core Initialization Lock Contention

### CNCF Project

HAMi

### Term

2026 Term 3 (Sep-Nov)

### Program Name

Reduce HAMi-core Initialization Lock Contention

### Program Description

## Description

Improve HAMi-core startup performance when hundreds of processes initialize CUDA concurrently and compete for the shared unified lock. ...

🔗 [Link](https://github.com/cncf/mentoring/issues/1978)

**Metadata:**
- Created: 2026-07-27
- Comments: 11
- State: open

## Updates

### kubernetes/kubernetes#140979: [Flaking Test] apiserver/pkg/storage/cacher: panic: synthetic error kills the unit test binary via a leaked watch goroutine

### Which jobs are flaking?

`pull-kubernetes-unit`

### Which tests are flaking?

`k8s.io/apiserver/pkg/storage/cacher` — the whole package binary dies, and the failure gets attributed to whichever test happened to be running. In the run I hit that was `TestDeleteWithSuggestionAndMissingExpectedTra...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140979)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/kubernetes#140978: No e2e coverage for readiness probes during graceful pod termination


### What happened?

#140881 was a total loss of exec readiness probing during the entire graceful termination window, shipped in v1.35.0 and caught by a user, not by CI. Nothing in the e2e suite asserts anything about probes after a pod's `deletionTimestamp` is set.

`test/e2e/common/node/container...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140978)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/kubernetes#140977: kubelet: stopping a probe worker does not cancel an in-flight exec probe


### What happened?

Stopping a probe worker does not cancel a probe that is already executing. `worker.stop()` does a non-blocking send on `stopCh`:

https://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/prober/worker.go#L204-L211

and `run()` only selects on `stopCh` between probes, aft...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140977)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/kubernetes#140965: client-go: FakeCustomStore no longer implements cache.Store after #134827

### What happened?

#134827 (merged 2025-10-23, shipped in client-go v0.36) added two methods to the `cache.Store` interface:

- `Bookmark(rv string)`
- `LastStoreSyncResourceVersion() string`

The package's own test double `cache.FakeCustomStore` (`staging/src/k8s.io/client-go/tools/cache/fake_cust...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140965)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/kubernetes#140962: kubectl auth can-i -v9 displays unfriendly SelfSubjectAccessReview in protobuf hex dump

### What would you like to be added?

When trying to debug SelfSubjectAccessReview  resources created by `kubectl auth can-i`, see related #140961, using the `-v9` verbose flag, the hex dump is in protocol buffer format which is hard to read for humans.

```bash
kubectl auth can-i  impersonate group...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140962)

**Metadata:**
- Created: 2026-07-27
- Comments: 3
- State: open

### kubernetes/kubernetes#140961: "kubectl auth can-i impersonate <resource>" broken with overlapping CRDs (users, groups, ...)

### What happened?

`kubectl auth can-i  impersonate groups` or `kubectl auth can-i  impersonate users` unexpectedly expands any available groups or user crds in the created SelfSubjectAccessReview 

https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#auth
>  kubectl auth can-i V...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140961)

**Metadata:**
- Created: 2026-07-27
- Comments: 3
- State: open

### kubernetes/kubernetes#140980: e2e: assert readiness probes run during graceful pod termination

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds e2e coverage for readiness probing during graceful pod termination. The probe path and the termination path were each well covered and the intersection was not, which is how #140881 shipped in v1.35.0 and wa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140980)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140976: Update verify-test-code.sh to prevent ExpectNoError anti-pattern

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR updates `verify-test-code.sh` to prevent the `ExpectNoError` without explanation anti-pattern. **Note to reviewers**: Do not merge this until all other PRs fixing the pattern are merged, otherwise CI will f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140976)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140975: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (framework)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `framework` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a la...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140975)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140974: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (misc)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `misc` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larger ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140974)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140973: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (api)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `api` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larger P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140973)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140972: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (apps)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `apps` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larger ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140972)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140971: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (node)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `node` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larger ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140971)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140970: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (network)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `network` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larg...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140970)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140969: Fix ExpectNoError and Expect(err).NotTo(HaveOccurred()) anti-pattern in e2e tests (storage)

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR replaces the ExpectNoError and Expect NotTo HaveOccurred anti-patterns across the `storage` tests by providing an explanation string to avoid swallowing contexts in errors. This is part of a split of a larg...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140969)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140967: pkg/registry/flowcontrol/ensurer: fix typo unwatned -> unwanted

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Fixes a spelling typo ("unwatned" -> "unwanted") in `pkg/registry/flowcontrol/ensurer/strategy.go`.

#### Which issue(s) this PR fixes:
NONE

#### Special notes for your reviewer:
NONE

#### Does this P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140967)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140966: client-go: restore FakeCustomStore conformance to cache.Store

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#134827 added two methods to the `cache.Store` interface — `Bookmark(rv string)` and `LastStoreSyncResourceVersion() string` — but did not update `FakeCustomStore`, so the fake no longer satisfies `cache.Store` and d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140966)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140964: kubectl: fix impersonation users/groups resource resolution

#### What this PR does

Fixes an issue where `kubectl auth can-i impersonate users` and
`kubectl auth can-i impersonate groups` incorrectly resolve `users` and
`groups` through the RESTMapper.

If the cluster contains discovered resources with the same names (for example,
CRDs named `groups`)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140964)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140963: Resolve conflicting required/optional validation tags for Condition.Message

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140963)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140960: Fix single-endpoint DNAT rule

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

The previous rule would cause nft to coredump on IPv6:
```console
$ nft add rule ip6 kube-proxy 'svc-ABC123-default/my-svc/tcp/https' meta l4proto tcp dnat ip6 addr . port to fd00:10:244::4 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140960)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140958: fix(autoscaling): Skip per-pod metric division in replica calculator when replicas is 0 to avoid overflow/underflow

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140958)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140955: Automated cherry pick of #140274: kubelet/dra: reset devices before processing gRPC response

Cherry pick of #140274 on release-1.36.

#140274: kubelet/dra: reset devices before processing gRPC response

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140955)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140954: Automated cherry pick of #140274: kubelet/dra: reset devices before processing gRPC response

Cherry pick of #140274 on release-1.35.

#140274: kubelet/dra: reset devices before processing gRPC response

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140954)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140953: Automated cherry pick of #140274: kubelet/dra: reset devices before processing gRPC response

Cherry pick of #140274 on release-1.34.

#140274: kubelet/dra: reset devices before processing gRPC response

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140953)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140952: fix(volume/csi): check return error of file.Close() in saveVolumeData

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
In `pkg/volume/csi/csi_util.go`, `saveVolumeData()` relied exclusively on `defer file.Close()`.

When writing to disk (especially on network filesystems or under heavy disk load), write/flush errors like `ENOSPC`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140952)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56641: [Tracking Issue] Kubernetes Upstream Training in Japan at Japan Community Day 2026

**This is a Feature Request**

Tracking issue for Kubernetes Upstream Training in Japan at Japan Community Day 2026

日本語に翻訳する際は、以下のドキュメントを参考にしてください。

- Japanese Localization document: https://kubernetes.io/ja/docs/contribute/localization/

**What would you like to be added**
<!-- Describe as precise...

🔗 [Link](https://github.com/kubernetes/website/issues/56641)

**Metadata:**
- Created: 2026-07-27
- Comments: 8
- State: open

### kubernetes/website#56640: Example: Deploying PHP Guestbook application with Redis

All the URLs like [https://k8s.io/examples/application/guestbook/*.yaml](https://k8s.io/examples/application/guestbook/) on this page return `301 Moved Permanently`

🔗 [Link](https://github.com/kubernetes/website/issues/56640)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56637: `tasks/administer-cluster/kubelet-in-userns` contains outdated information about Usernetes

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
https://github.com/...

🔗 [Link](https://github.com/kubernetes/website/issues/56637)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56633: [ko] Update content/ko/docs/concepts/services-networking/service.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/service.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/service/
- Engli...

🔗 [Link](https://github.com/kubernetes/website/issues/56633)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56630: [ko] Translate content/en/blog/_posts/2026/ingress-nginx-statement.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56630)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56628: [ko] Update content/ko/docs/concepts/cluster-administration/networking.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/cluster-administration/networking.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/cluster-administration/network...

🔗 [Link](https://github.com/kubernetes/website/issues/56628)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56625: Modernize the Redis work-queue example Dockerfile

### Description

The Dockerfile used by the
[Fine Parallel Processing Using a Work Queue](https://kubernetes.io/docs/tasks/job/fine-parallel-processing-work-queue/)
tutorial currently uses the unversioned `python` base image:

https://github.com/kubernetes/website/blob/main/content/en/examples/appli...

🔗 [Link](https://github.com/kubernetes/website/issues/56625)

**Metadata:**
- Created: 2026-07-27
- Comments: 2
- State: open

### kubernetes/website#56624: [ko] Add language guidance to localization guide

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56624)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/website#56626: [ko] Update Port Forwarding to Access Applications in a Cluster

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/56626)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56623: [zh-cn] fix typo in names.md

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/56623)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56622: Fix typo in DRADeviceTaintRules feature gate page

### Description

This PR fixes a typo which referenced a non-existent feature gate `DRADeviceTaint`. The correct name is `DRADeviceTaints`.

https://github.com/kubernetes/kubernetes/blob/9353e673e0045cc1b4bab58d89ebee846cfe402d/pkg/features/kube_features.go#L2439

🔗 [Link](https://github.com/kubernetes/website/pull/56622)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18630: aws: allow shared subnets to omit the zone

Fixes #14710

/cc @rifelpet @ameukam 

🔗 [Link](https://github.com/kubernetes/kops/pull/18630)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23412: Bump Kubernetes version default: v1.36.3 and latest: v1.37.0-beta.0

This PR was auto-generated by `make update-kubernetes-version` using [update-k8s-versions.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-k8s-versions.yml) CI Workflow.
Please only merge if all the tests pass.

```
 M pkg/minikube/constants/constants.go
 M site/conte...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23412)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1279: [metis] Data race / fatal map crash in `DaemonController.lowUtilizationTimers`

## Component
`metis/pkg/daemon`
## Description
`DaemonController.Run()` spawns multiple worker goroutines (`DefaultWorkers = 4`) that process network allocation items from `c.queue` concurrently.
When evaluating low IP utilization in `handleLowUtilization()`, worker goroutines read, write, and delet...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1279)

**Metadata:**
- Created: 2026-07-27
- Comments: 2
- State: open

### kubernetes/perf-tests#4241: Injest prometheus snapshot and visualize apiserver latency metrics on dashboard.

/cc @Jefftree


🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4241)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37558: add slow serial jobs for containerd for presubmits and periodics

Add presubmit for serial-containerd for slow jobs.

Split serial-containerd into slow serial and normal serial.

Follows similar idea we have already done for CRI-O to avoid hitting timeouts.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37558)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37557: Skip LocalhostNodePorts tests for cloud-provider-kind IPv6

kube-proxy recently [added the ability to serve localhost NodePorts](https://github.com/kubernetes/kubernetes/pull/138427), but only in nftables mode. This also introduced an e2e test to cover this scenario. The test checks for the availability of IPv6, but not the mode it is running in.

However,...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37557)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10065: Support ResourceClaimTemplates in check-capacity ProvisioningRequests

**Which component are you using?**:

/area cluster-autoscaler
/area core-autoscaler
/wg device-management

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

CA expands ProvisioningRequest PodTemplates into [virtual Pods created only in m...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10065)

**Metadata:**
- Created: 2026-07-27
- Comments: 1
- State: open

### kubernetes/autoscaler#10068: Bump the kubernetes group across 2 directories with 32 updates

Bumps the kubernetes group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.37.0-alpha.3` | `0.37.0-beta.0` |
| [k8s.io/client-go](https://github.com/kubernetes/client-go) | `0.37.0-alpha.3` ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10068)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10067: Bump the patch-updates group across 1 directory with 28 updates

Bumps the patch-updates group with 24 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/go-logr/logr](https://github.com/go-logr/logr) | `1.4.3` | `1.4.4` |
| [github.com/mattn/go-isatty](https://github.com/mattn/go-isatty) | `0.0.22` ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10067)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10066: Bump the non-kubernetes group across 2 directories with 12 updates

Bumps the non-kubernetes group with 2 updates in the /vertical-pod-autoscaler directory: [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) and [go.yaml.in/yaml/v3](https://github.com/yaml/go-yaml).
Bumps the non-kubernetes group with 9 updates in the /vertical-pod-au...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10066)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3050: docs: mark custom-resource-state as feature-frozen

**What this PR does / why we need it:**
Updates the README and documentation to mention that custom-resource-state is feature-frozen in favor of [resource-state-metrics](https://github.com/kubernetes-sigs/resource-state-metrics), and will be deprecated once resource-state-metrics is stable.

**How d...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3050)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4480: Bump github.com/yuin/goldmark from 1.8.4 to 1.8.5 in the all group

Bumps the all group with 1 update: [github.com/yuin/goldmark](https://github.com/yuin/goldmark).

Updates `github.com/yuin/goldmark` from 1.8.4 to 1.8.5
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/yuin/goldmark/releases">github.com/yuin/goldmark's relea...

🔗 [Link](https://github.com/kubernetes/release/pull/4480)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9085: Update Stefan Schimanski's affiliation to Nvidia

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https:...

🔗 [Link](https://github.com/kubernetes/community/pull/9085)

**Metadata:**
- Created: 2026-07-27
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13867: failed to reserve container name xxx is reserved for xxx

failed to create 
containerd[19386]: time="2026-07-26T13:29+08:00" level=info msg="CreateContainer within sandbox \"a79cd1ac7ca0\" for container xxx,Attempt:3,}"
containerd[19386]: time="2026-07-26T13:29:58.669563316+08:00" level=error msg="CreateContainer within sandbox \"a79cd1ac7ca0\" for &Contai...

🔗 [Link](https://github.com/containerd/containerd/issues/13867)

**Metadata:**
- Created: 2026-07-28
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-28 02:14:43*
