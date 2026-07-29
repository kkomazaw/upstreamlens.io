---
title: "Upstream Github - 2026-07-29"
description: "CNCF upstream activity from github"
pubDate: 2026-07-29
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-triage", "autoscaler", "area/cluster-autoscaler", "kind/feature", "area/vertical-pod-autoscaler", "area/helm-charts", "pr", "cncf-cla: no", "size/XXL", "do-not-merge/work-in-progress", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-rebase", "cncf-cla: yes", "size/XS", "release-note-none", "kind/bug", "sig/node", "sig/testing", "kind/failing-test", "needs-sig", "area/test", "sig/windows", "needs-priority", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "area/kubelet", "kind/cleanup", "lgtm", "size/M", "sig/auth", "approved", "kind/api-change", "sig/apps", "triage/accepted", "do-not-merge/cherry-pick-not-approved", "do-not-merge/needs-kind", "ok-to-test", "sig/scheduling", "kind/flake", "area/e2e-test-framework", "size/S", "language/ja", "area/localization", "website", "language/ko", "test-infra", "area/jobs", "area/config", "do-not-merge/hold", "release", "kops", "area/addons", "containerd", "overlaybd", "accelerated-container-image", "cncf", "lfx mentorship", "Term 3: Sept-Nov", "2026", "Mentors Confirmed", "Maintainer/Contribex Approved", "Proposal", "Validation Passed", "CNCF Approved", "Exported", "mentoring"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10074: Address Security Vulnerabilities

Security scanners are currently flagging several vulnerabilities in the latest release (0.21.0).

Flagged CVEs:
* CVE-2026-39821
* CVE-2026-39830
* CVE-2026-39831
* CVE-2026-39832
* CVE-2026-39833
* CVE-2026-39834
* CVE-2026-42508
* CVE-2026-46595

A bump to the project's Go toolchain (to the latest...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10074)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/autoscaler#10069: Fix reporting simulated pod count log in hinting simulator

#### What type of PR is this?
/kind bug
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
/kind regression
-...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10069)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### cncf/mentoring#2022: [CNCF LFX Proposal] Meshery Grounding AI in the Meshery Registry

### CNCF Project

Meshery

### Term

2026 Term 3 (Sep-Nov)

### Program Name

Grounding AI in the Meshery Registry

### Program Description

## Description

The Meshery Registry holds thousands of components across hundreds of Models spanning Kubernetes, the CNCF landscape, and the major clouds, tog...

🔗 [Link](https://github.com/cncf/mentoring/issues/2022)

**Metadata:**
- Created: 2026-07-28
- Comments: 16
- State: open

### cncf/mentoring#2019: [CNCF LFX Proposal] Meshery MCP Server

### CNCF Project

Meshery

### Term

2026 Term 3 (Sep-Nov)

### Program Name

MCP Server

### Program Description

## Description
 
Meshery manages cloud and cloud native infrastructure through Designs, Models, Connections, and a live topology continuously discovered by MeshSync. All of it is reacha...

🔗 [Link](https://github.com/cncf/mentoring/issues/2019)

**Metadata:**
- Created: 2026-07-28
- Comments: 12
- State: open

### cncf/mentoring#2003: [CNCF LFX Proposal] KubeEdge Enable RuntimeClass and Confidential Containers on KubeEdge

### CNCF Project

KubeEdge

### Term

2026 Term 3 (Sep-Nov)

### Program Name

Enable RuntimeClass and Confidential Containers on KubeEdge

### Program Description

## Description

KubeEdge does not yet provide complete RuntimeClass support for workloads running on edge nodes. This prevents users fr...

🔗 [Link](https://github.com/cncf/mentoring/issues/2003)

**Metadata:**
- Created: 2026-07-28
- Comments: 12
- State: open

## Updates

### kubernetes/autoscaler#10071: Shared node autoscaling API for hard eviction controls

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

/area cluster-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10071)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/autoscaler#10070: VPA chart: CRDs upgrade job

/area vertical-pod-autoscaler


Hi, 
currently I'm puzzled how to ship VPA in our IaC platform properly due to known helm behavior that it installs crds, but is not updating.
[Many charts](https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/charts/crds/template...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10070)

**Metadata:**
- Created: 2026-07-28
- Comments: 2
- State: open

### kubernetes/autoscaler#10073: Add VKE cloud provider for Cluster Autoscaler.

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds an in-tree Cluster Autoscaler cloud provider for PortvMind Public Cloud Kubernetes Engine(https://github.com/vmindtech/vke).

VKE exposes node groups via its control-plane API and authenticates with...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10073)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141013: [failing test]: node ec2 instances are failing after running test successfully.

### Which jobs are failing?

- https://testgrid.k8s.io/sig-node-containerd#ci-containerd-node-e2e-ec2
- https://testgrid.k8s.io/sig-node-containerd#ci-containerd-node-e2e-serial-ec2

### Which tests are failing?

The overall job appears red

### Since when has it been failing?

Last 3-4 runs.

### T...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141013)

**Metadata:**
- Created: 2026-07-28
- Comments: 4
- State: open

### kubernetes/kubernetes#141010: ServiceAccountIssuerDiscovery testing should allow any supported algorithm

### What happened?

We switched to using ES384 and ran into an issue with conformance testing where the ServiceAccountIssuerDiscovery testcase failed.

```
[FAIL] [sig-auth] ServiceAccounts ServiceAccountIssuerDiscovery should support OIDC discovery of service account issuer [Conformance]

Pod logs:...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141010)

**Metadata:**
- Created: 2026-07-28
- Comments: 4
- State: open

### kubernetes/kubernetes#141016: test/utils/image: bump glibc-dns-testing to 2.1.1

/kind failing-test
/sig windows

#### What this PR does / why we need it:

The Windows `hostnameOverride` e2e tests in `test/e2e/common/node/pod_hostnameoverride.go` have been failing on `ci-kubernetes-e2e-capz-master-windows` since 2026-07-23, with all runs erroring out the same way:

```
flag prov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141016)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141015: Keep core-type paramKind informers running when an admission policy is unbound

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A `ValidatingAdmissionPolicy` (or `MutatingAdmissionPolicy`) whose `paramKind` is a built-in type such as `v1/ConfigMap` permanently loses param resolution the first time the policy has no bindings. Only an apiserver...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141015)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141014: Fix pod sandbox limits when only some containers declare limits

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141014)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141012: Sync supported service account token algorithms to test image

#### What type of PR is this?

/kind cleanup
/kind failing-test

#### What this PR does / why we need it:

Updates the test image to support all the algorithms we support for signing service account tokens.

#### Which issue(s) this PR is related to:

https://github.com/kubernetes/kuberne...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141012)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141011: migrate `ReplicaSet.Spec.Selector` to DV

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141011)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141009: Drop unbounded cardinality labels from apiserver_request_terminations_total

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This is an alpha metric. We need drop all unbounded cardinality labels from it while we still can. 

#### Which issue(s) this PR is related to:

Fixes https://github.com/kubernetes/kubernetes/issues/141...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141009)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141008: [1.34] Automated cherry pick of #139172: Add binary envvar value e2e

Cherry pick of #139172 on release-1.34.

#139172: Add binary envvar value e2e

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

Adds an e2e that...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141008)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141006: Automated cherry pick of #140882: kubelet: detach probe workers from the pod sync context

Cherry pick of #140882 on release-1.36.

#140882: kubelet: detach probe workers from the pod sync context

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Not a clean pick

The fix itself ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141006)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141005: Automated cherry pick of #140882: kubelet: detach probe workers from the pod sync context

Cherry pick of #140882 on release-1.35.

#140882: kubelet: detach probe workers from the pod sync context

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Not a clean pick

The fix itself ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141005)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141004: [1.36] Automated cherry pick of #140387: Always set UpdatePodResources when a starting container is resized

Cherry pick of #140387 on release-1.36.

#140387: Always set UpdatePodResources when a starting container is resized

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141004)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141003: [1.35] Automated cherry pick of #140387: Always set UpdatePodResources when a starting container is resized

Cherry pick of #140387 on release-1.35.

#140387: Always set UpdatePodResources when a starting container is resized

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141003)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141002: [1.35] Automated cherry pick of #139172: Add binary envvar value e2e

Cherry pick of #139172 on release-1.35.

#139172: Add binary envvar value e2e

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

Adds an e2e that...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141002)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141001: Automated cherry pick of #140966: client-go: restore FakeCustomStore conformance to cache.Store

Cherry pick of #140966 on release-1.36.

#140966: client-go: restore FakeCustomStore conformance to cache.Store

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141001)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141000: [1.36] Automated cherry pick of #139172: Add binary envvar value e2e

Cherry pick of #139172 on release-1.36.

#139172: Add binary envvar value e2e

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

Adds an e2e that...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141000)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140999: Make MoreImportantVictim deterministic for equal start times

**What type of PR is this?**
/kind flake
/kind cleanup

**What this PR does / why we need it**
`MoreImportantVictim` compared victims by `EarliestStartTime` with `Before`, which returns false (treats them as equal) when the start times are equal. For pods without a recorded `Status.StartTime`, `GetP...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140999)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140998: Add retry logic for transient API server errors in e2e framework

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This commit introduces an IsRetryableAPIError function to correctly identify transient API server errors such as connection refused, 503, and server timeouts. It wraps the GetControlPlaneNodes call in a polling loop us...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140998)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140997: Fix silent error suppression causing resource leaks in e2e tests

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This change wraps several Delete and DeleteCollection calls in the e2e test suite with framework.ExpectNoError to prevent silent resource leaks. Previously error returns were completely discarded using an empty ass...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140997)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140996: Fix daemon readiness check to inspect kubelet logs

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This commit addresses daemon readiness checks in disruptive tests. Previously, waitUp only verified that the /healthz endpoint returned HTTP 200, which can occur before the daemon is actually ready to schedule pods (e....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140996)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140995: Fix PVC deletion race condition during StatefulSet cleanup

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This commit resolves a race condition in the e2e test framework during StatefulSet cleanup. Previously, DeleteAllStatefulSets immediately deleted PVCs without checking if active pods still referenced them, which could ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140995)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140994: Fix graceful shutdown of goroutines in daemon_restart test

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
This PR ensures graceful shutdown of the controller goroutine in test/e2e/apps/daemon_restart.go. Previously, the cleanup routine merely invoked context cancellation without allowing the cache.NewInformer controller ti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140994)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56653: [ja] Update content/ja/docs/tutorials/kubernetes-basics/create-cluster/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Japanese translation of `content/ja/docs/tutorials/kubernetes-basics/create-cluster/_index.md` to match the latest English version.

**Website Link**

- Japanese: https://kubernetes.io/ja/docs/tutorials/kubernetes-basics/...

🔗 [Link](https://github.com/kubernetes/website/issues/56653)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/website#56652: Running Multiple Instances of Your App - Misleading description

Under the section [Scaling a Deployment](https://kubernetes.io/docs/tutorials/kubernetes-basics/scale/scale-intro/#scaling-a-deployment), there is an explanation of the output of `kubectl get deployments`. The point READY shows the ratio of CURRENT/DESIRED replicas is misleading and should be READY/...

🔗 [Link](https://github.com/kubernetes/website/issues/56652)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/website#56649: [ko] Update content/ko/docs/concepts/services-networking/_index.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/_index.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/
- English: https...

🔗 [Link](https://github.com/kubernetes/website/issues/56649)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/website#56646: [ko] Update content/ko/docs/setup/production-environment/tools/kubeadm/ha-topology.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/production-environment/tools/kubeadm/ha-topology.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/production-environmen...

🔗 [Link](https://github.com/kubernetes/website/issues/56646)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/website#56644: [ja] Translate content/en/blog/_posts/2026/open-source-maintainership-in-the-age-of-ai.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56644)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/test-infra#37560: Support filtering by time range in k8s-triage

**What would you like to be added**:

I'm wondering if there is any way to include/exclude specific time ranges or days on k8s-triage today (but I think there isn't).
I'm aware that I can select a date and then I'll get the last ~ 2 weeks but that doesn't cover my use case.

**Why is this needed**:
...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37560)

**Metadata:**
- Created: 2026-07-28
- Comments: 1
- State: open

### kubernetes/test-infra#37566: remove jobset 1.33 jobs as 1.33 is out of support

1.33 went out of support on June 28th so we should stop testing 1.33 jobs.

https://kubernetes.io/releases/

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37566)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37563: Bump milestone applier for CAPV

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37563)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops: v1.36.1

## What's Changed
* Automated cherry pick of #18600: nodeup: don't mutate the cluster spec when clearing authenticator config by @rifelpet in https://github.com/kubernetes/kops/pull/18602
* Automated cherry pick of #18631: hetzner: Ignore WellKnownServices when comparing load balancers by @hakman in https://github.com/kubernetes/kops/pull/18633
* Release 1.36.1 by @hakman in https://github.com/kubernetes/kops/pull/18634


**Full Changelog**: https://github.com/kubernetes/kops/compare/v1.36...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.36.1)

**Metadata:**
- Version: v1.36.1
- Published: 2026-07-28
- Prerelease: No

### kubernetes/kops#18635: Enable nri mounting on kindnet in kops

Kindnet allows for the use of nri to enable fast local insertions of pods rather than waiting on pod informers. Enable by mounting the NRI socket into kindnet.

🔗 [Link](https://github.com/kubernetes/kops/pull/18635)

**Metadata:**
- Created: 2026-07-28
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Builds
- **deps**: bump src/overlaybd/zfile/thirdparty/isa-l [#413](https://github.com/containerd/overlaybd/pull/413) ([dependabot[bot]](https://github.com/containerd/overlaybd/commit/5c80f23a1515fd307a69a7fa3aea0f0fa553feb9))
- **deps**: bump actions/download-artifact from 4 to 8 [#414](https://github.com/containerd/overlaybd/pull/414) ([dependabot[bot]](https://github.com/containerd/overlaybd/commit/80ed896774c62a070bcf17252d6d726222724d33))
- **deps**: bump docker/setup-buildx-action from ...

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-29
- Prerelease: Yes

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump oras.land/oras-go/v2 from 2.5.0 to 2.6.2 in /ci/e2e [#375](https://github.com/containerd/accelerated-container-image/pull/375) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/b2b3d515152dc6d0f6de4df29ddc5dcfce3f4cb1))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-28
- Prerelease: Yes


---

*This content was automatically collected on 2026-07-29 02:25:58*
