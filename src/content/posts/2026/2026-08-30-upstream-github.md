---
title: "Upstream Github - 2026-08-30"
description: "CNCF upstream activity from github"
pubDate: 2026-08-30
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "kind/bug", "pr", "cncf-cla: yes", "size/XS", "lgtm", "sig/docs", "language/zh", "size/XL", "size/L", "size/S", "sig/release", "area/release-eng", "kind/documentation", "sig/auth", "kind/cleanup", "sig/api-machinery", "kind/api-change", "release-note-none", "needs-priority", "area/test", "size/XXL", "sig/testing", "do-not-merge/work-in-progress", "sig/network", "size/M", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "area/kube-proxy", "release-note", "sig/windows", "do-not-merge/cherry-pick-not-approved", "sig/apps", "area/apiserver", "kind/flake", "sig/etcd", "area/kubectl", "sig/cli", "sig/scheduling", "sig/storage", "cncf-cla: no", "do-not-merge/needs-kind", "release", "kops", "approved", "kube-state-metrics", "ok-to-test", "minikube", "area/cluster-autoscaler", "area/provider/gce", "autoscaler", "envoyproxy", "area/infra-mgr", "gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141670: Consider a stronger explicit warning against re-encoding SignJWTRequest.claims (KEP-740 ExternalJWTSigner)

**Context:**
The `SignJWTRequest.claims` field comment currently reads:

    // URL-safe base64 wrapped payload to be signed.
    // Exactly as it appears in the second segment of the JWT
    string claims = 1;

This is technically correct and, on a careful read, unambiguous — the payload is already...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141670)

**Metadata:**
- Created: 2026-08-29
- Comments: 1
- State: open

### kubernetes/kubernetes#141669: ExternalJWTSigner (KEP-740) proto doc doesn't specify required signature encoding (RFC 7518 IEEE P1363), causing silent verification failures

**What happened:**
The `ExternalJWTSigner.Sign` RPC's `SignJWTResponse.signature` field comment states only that the value must be "Already wrapped in URL-safe base64, exactly as it appears in the final segment of the JWT." It does not specify the required byte-level signature encoding for ECDSA alg...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141669)

**Metadata:**
- Created: 2026-08-29
- Comments: 2
- State: open

### kubernetes/kubernetes#141683: [WIP] client-go: experimental low-memory informer cache store (bytecache)

Opening as a draft to gather feedback on whether this direction is worth pursuing (KEP to follow if so).

**What type of PR is this?**

/kind feature
/sig api-machinery

**What this PR does / why we need it**:

**WIP / RFC**: an experimental informer cache store that moves cached objects of...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141683)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141673: docs: specify ECDSA signature encoding

#### What type of PR is this?

/kind documentation

#### What this PR does

Clarifies the required ECDSA signature encoding for `ExternalJWTSigner.SignJWTResponse.signature`.

ECDSA signatures must use the fixed-length `R || S` (IEEE P1363) format specified by RFC 7518 section 3.4, rather th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141673)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops: v1.37.0-beta.1

See the full [kOps 1.37 release notes](https://kops.sigs.k8s.io/releases/1.37-notes/) for details, including breaking changes and deprecations.

## What's Changed
* docs: update 1.36 release notes by @hakman in https://github.com/kubernetes/kops/pull/18592
* fix: retry listing cloud resources in `kops delete cluster` by @hakman in https://github.com/kubernetes/kops/pull/18595
* hack: parallelize GitHub release promotion and add checksum validation by @hakman in https://github.com/kubernetes...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.37.0-beta.1)

**Metadata:**
- Version: v1.37.0-beta.1
- Published: 2026-08-29
- Prerelease: Yes

## Updates

### kubernetes/website#57292: [ko] Remove the outdated Ingress on Minikube with NGINX Ingress Controller page

**This is a Feature Request**

**What would you like to be added**

The English page "Set up Ingress on Minikube with the NGINX Ingress Controller"
was removed in #53110. The maintainers stated that the project no longer wants
to recommend ingress-nginx, and that the page would not be replaced with
...

🔗 [Link](https://github.com/kubernetes/website/issues/57292)

**Metadata:**
- Created: 2026-08-30
- Comments: 2
- State: open

### kubernetes/website#57278: es] Add Spanish translation for kubectl quick-reference page

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->
### What would you like to be added

The kubectl quick-reference page (...

🔗 [Link](https://github.com/kubernetes/website/issues/57278)

**Metadata:**
- Created: 2026-08-29
- Comments: 1
- State: open

### kubernetes/website#57276: [hi] Add Hindi translation for kubectl quick-reference page

### **This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
The kubectl quick-reference pa...

🔗 [Link](https://github.com/kubernetes/website/issues/57276)

**Metadata:**
- Created: 2026-08-29
- Comments: 2
- State: open

### kubernetes/website#57267: v1.34.x patch versions are missing on the Releases page

This is a Bug Report

Problem:
The [releases page](https://kubernetes.io/releases/) has not been updated for the latest 2 patch releases (e.g. v1.34.10 and v1.34.11 are missing)

Page to Update:
https://kubernetes.io/releases/

🔗 [Link](https://github.com/kubernetes/website/issues/57267)

**Metadata:**
- Created: 2026-08-29
- Comments: 2
- State: open

### kubernetes/website#57266: v1.35.x patch versions are missing on the Releases page

This is a Bug Report

Problem:
The [releases page](https://kubernetes.io/releases/) has not been updated for the latest 2 patch releases (e.g. v1.35.7 and v1.35.8 are missing)


Page to Update:
https://kubernetes.io/releases/


🔗 [Link](https://github.com/kubernetes/website/issues/57266)

**Metadata:**
- Created: 2026-08-29
- Comments: 2
- State: open

### kubernetes/website#57291: [zh-cn]sync DRAResourceClaimDeviceStatus

content/zh-cn/docs/reference/command-line-tools-reference/feature-gates/DRAResourceClaimDeviceStatus.md

🔗 [Link](https://github.com/kubernetes/website/pull/57291)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57290: [zh-cn]sync kube-proxy

content/zh-cn/docs/reference/command-line-tools-reference/kube-proxy.md

🔗 [Link](https://github.com/kubernetes/website/pull/57290)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57289: [zh-cn]sync kube-controller-manager

content/zh-cn/docs/reference/command-line-tools-reference/kube-controller-manager.md

🔗 [Link](https://github.com/kubernetes/website/pull/57289)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57269: Update patch release schedule for 1.36.x

### What this PR does / why we need it

Updates the patch release schedule in data/releases/schedule.yaml to move v1.36.3 and v1.36.4 to previousPatches and set v1.36.5 as the next scheduled patch release for September 2026. This ensures the Kubernetes release pages accurately display v1.36.3, v1....

🔗 [Link](https://github.com/kubernetes/website/pull/57269)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57268: [zh-cn]sync kubeadm-init

content/zh-cn/docs/reference/setup-tools/kubeadm/kubeadm-init.md

🔗 [Link](https://github.com/kubernetes/website/pull/57268)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57265: [zh-cn]sync kubeadm_join/_index

content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_join/_index.md


🔗 [Link](https://github.com/kubernetes/website/pull/57265)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57263: [zh-cn]sync kubeadm_join_phase_control-plane-{join_all,prepare_control-plane}

content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_join/kubeadm_join_phase_control-plane-join_all.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_join/kubeadm_join_phase_control-plane-prepare_control-plane.md

🔗 [Link](https://github.com/kubernetes/website/pull/57263)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57262: [zh-cn]sync kubeadm_join_phase_control-plane-prepare_all pod-condition

content/zh-cn/docs/concepts/workloads/pods/pod-condition.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_join/kubeadm_join_phase_control-plane-prepare_all.md

🔗 [Link](https://github.com/kubernetes/website/pull/57262)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57261: [zh-cn]sync kubeadm_config_images_pull kubeadm_init/_index kubeadm_join_phase_kubelet-start

content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_config/kubeadm_config_images_pull.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_init/_index.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_join/kubeadm_join_phase_kubelet-start.md

🔗 [Link](https://github.com/kubernetes/website/pull/57261)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57260: [zh-cn]sync kubeadm_init_phase_{etcd_local,control-plane_controller-manager} kubeadm_config_images_list

content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_config/kubeadm_config_images_list.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_init/kubeadm_init_phase_control-plane_controller-manager.md
content/zh-cn/docs/reference/setup-tools/kubeadm/generated/kubeadm_...

🔗 [Link](https://github.com/kubernetes/website/pull/57260)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141684: Unstructuctured/PartialObjectMeta: Allow to initialize with basic object and type meta

Unstructured and PartialObjectMeta currently always have to be constructed like this:
```
u := &unstructured.Unstructured{}
u.SetGroupVersionKind(gvk)
```

because the setters are all part of the `metav1.Object` interface so they can not return the object.

Add `With` methods to allow doing ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141684)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141682: networking: migrate IngressClass parameters scope to declarative validation

#### What this PR does / why we need it

Continues the declarative validation migration for `networking.k8s.io/v1` (and `v1beta1`), following the pattern established by prior migrations (e.g. #139953, #141558, #141680).

This PR migrates one requiredness check that already exists in the handwritten ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141682)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141681: Automated cherry pick of #141489: [kube-proxy/winkernel] Guard against load balancers without port mappings

Cherry pick of #141489 on release-1.37.

#141489: [kube-proxy/winkernel] Guard against load balancers without port mappings

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141681)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141680: Migrate Job non-negative spec fields to declarative validation

#### What this PR does / why we need it

Part of the declarative validation migration. This migrates the seven non-negative field checks in `JobSpec` to declarative validation:

- `spec.parallelism`
- `spec.completions`
- `spec.activeDeadlineSeconds`
- `spec.backoffLimit`
- `spec.backoffLimitPerInde...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141680)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141679: apiserver/storage/etcd3/testserver: retry StartEtcd on EADDRINUSE

Observed on kubernetes/kubernetes#141661:
listen tcp 127.0.0.1:40671: bind: address already in use

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141679)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141677: batch: graduate CronJob schedule validation

## What type of PR is this?

/kind cleanup

## What this PR does

Graduates the `CronJobSpec.schedule` required validation from beta to stable.

* Removes the `+k8s:beta(since: "1.37")=+k8s:required` lifecycle wrapper from `CronJobSpec.schedule`.
* Removes the redundant handwritten `MarkCov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141677)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141676: Automated cherry pick of #141296: Fix windows backslash escaping

Cherry pick of #141296 on release-1.36.

#141296: Fix windows backslash escaping

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141676)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141675: Automated cherry pick of #141296: Fix windows backslash escaping

Cherry pick of #141296 on release-1.35.

#141296: Fix windows backslash escaping

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141675)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141674: Automated cherry pick of #141296: Fix windows backslash escaping

Cherry pick of #141296 on release-1.34.

#141296: Fix windows backslash escaping

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```release-note
NONE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141674)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141672: scheduler: remove persistent volume testing dependency

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This removes the scheduler test dependency on `pkg/controller/volume/persistentvolume/testing`.

- Uses the fake client tracker to seed PV/PVC API state.
- Uses `fake.Clientset.PrependReactor()` to inject API upd...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141672)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141671: Remove debug logs from node declared features validation test

Fixes #141665.

Removes the leftover DEBUG t.Logf calls from TestValidateNodeDeclaredFeatures so passing verbose test runs stay clean.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141671)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3108: build: Bump Go to 1.27 and modernize codebase

<!-- markdownlint-disable-next-line MD041 -->
**What this PR does / why we need it:**

Bumps the Go toolchain to 1.27 and modernizes the codebase to use idioms available in recent Go releases:

- `build: Bump Go to 1.27` — toolchain, `go.mod` and CI/build images.
- `refactor: Replace interface{} wit...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3108)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23585: hack/update: update kong image tag to 3

**What type of PR is this?**
/kind cleanup

**What this PR does / why we need it:**
Updates the Kong addon image tag from patch version (`3.9.3`) to major version (`3`) and updates `kong_version.go` to use `semver.Major(stable.Tag)`.

Moving to major floating tag 3 avoids unexpected digest upd...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23585)

**Metadata:**
- Created: 2026-08-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10220: cluster-autoscaler: GCE NodeGroupForNode returns nil for foreign providerIDs

Recreates #10145 on top of current master with proper history (the original branch was pushed from a shallow clone, so it had no common ancestry with master — GitHub showed the whole repo as the diff and refused reopen after the closing force-push).

The change is identical to the final state of #10...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10220)

**Metadata:**
- Created: 2026-08-30
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#9897: priorityClassName not applied to rate limit deployment pod spec

*Description*:
>The `priorityClassName` field defined in `rateLimitDeployment.pod.priorityClassName` via the EnvoyGateway config is not being applied to the rate limit pod.

*Repro steps*:
> Install envoy gateway via helm chart - 
```
helm upgrade --install eg oci://docker.io/envoyproxy/gateway-helm...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9897)

**Metadata:**
- Created: 2026-08-29
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-30 03:32:20*
