---
title: "Upstream Github - 2026-09-18"
description: "CNCF upstream activity from github"
pubDate: 2026-09-18
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/M", "approved", "kind/feature", "release-note", "do-not-merge/hold", "sig/release", "area/release-eng", "needs-priority", "release", "area/cluster-autoscaler", "area/provider/azure", "kind/cleanup", "needs-triage", "autoscaler", "issue", "needs-sig", "sig/api-machinery", "kind/bug", "sig/scheduling", "sig/network", "area/test", "area/kubelet", "sig/node", "size/XXL", "kind/api-change", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/kube-proxy", "size/L", "do-not-merge/cherry-pick-not-approved", "kind/regression", "sig/auth", "sig/apps", "do-not-merge/needs-kind", "cncf-cla: no", "needs-ok-to-test", "lgtm", "sig/autoscaling", "ok-to-test", "release-note-none", "sig/storage", "size/S", "area/code-generation", "do-not-merge/needs-sig", "kind/flake", "do-not-merge/invalid-commit-message", "area/apiserver", "size/XL", "sig/contributor-experience", "language/ko", "area/localization", "website", "sig/docs", "language/ar", "good first issue", "help wanted", "language/en", "triage/accepted", "size/XS", "area/infra", "area/prow", "area/terraform", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "area/jobs", "area/config", "test-infra", "area/artifacts", "priority/important-soon", "kind/documentation", "sig-release", "area/github-management", "org", "ingress-gce", "prometheus", "alertmanager", "envoyproxy", "area/infra-mgr", "gateway", "cncf", "tag/infrastructure", "vote/nomination", "kind/election", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10307: azure: bump github.com/Azure/skewer/v2 from 2.0.1 to 2.1.0

#### What type of PR is this?

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
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10307)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/release#4533: Update k8s-cloud-builder and k8s-ci-builder to Go 1.27.1/1.26.8

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Update k8s-cloud-builder and k8s-ci-builder to Go 1.27.1/1.26.8
- Add Kubernetes 1.38 image variants while retaining Kubernetes 1.34 on Go 1.26.5

This follows the kubernetes/kubernetes master update in https:/...

🔗 [Link](https://github.com/kubernetes/release/pull/4533)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142201: Eviction of healthy pods does not pin pod ResourceVersion between PDB check and Delete

Hi, I hit a race in the eviction path on master. I've checked the healthy-pod delete block here:

https://github.com/kubernetes/kubernetes/blob/3551fa84d739d7e0ceb1954025d61c43e504e97f/pkg/registry/core/pod/storage/eviction.go#L291-L305

```go
// pkg/registry/core/pod/storage/eviction.go (L291-L305,...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142201)

**Metadata:**
- Created: 2026-09-18
- Comments: 2
- State: open

### kubernetes/kubernetes#142195: Objects that return v1.status don't return resource version on update

When calling objects that return a status we don't get a resource version back to track our progress, e.g.

```
curl -X POST \
        -H "Content-Type: application/json" \
        http://localhost:8001/api/v1/namespaces/paperless/pods/paperless-644c46b5f-4fwt5/eviction \
        -d '{
      "apiVer...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142195)

**Metadata:**
- Created: 2026-09-17
- Comments: 3
- State: open

### kubernetes/kubernetes#142187: `Pod didn't trigger scale-up` should specify needs

### What happened?

> Pod didn't trigger scale-up: 9 node(s) didn't match Pod's node affinity/selector, 3 Insufficient cpu, 3 node(s) had untolerated taint(s), 3 in backoff after failed scale-up

### What did you expect to happen?

- When `cpu` is insufficient, the event should include the required ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142187)

**Metadata:**
- Created: 2026-09-17
- Comments: 4
- State: open

### kubernetes/kubernetes#142183: Localhost nodeport nftables proxy doesn't flip to enabled when conditions are met during proxy restart

### What happened?

The userspace localhost nodeport proxy (https://github.com/kubernetes/enhancements/issues/6032) has a bug. If you create a nodeport service on a cluster without localhost in `--nodeport-addressees` it properly won't create the proxy. However if you restart kube-proxy with localho...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142183)

**Metadata:**
- Created: 2026-09-17
- Comments: 3
- State: open

### kubernetes/kubernetes#142200: WIP: Add alpha support for node system partition

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142200)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142199: Automated cherry pick of #142035: Don't set nf_conntrack_max if it's already larger than needed

Cherry pick of #142035 on release-1.36.

#142035: Don't set nf_conntrack_max if it's already larger than needed

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142199)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142198: Automated cherry pick of #142035: Don't set nf_conntrack_max if it's already larger than needed

Cherry pick of #142035 on release-1.37.

#142035: Don't set nf_conntrack_max if it's already larger than needed

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142198)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142197: Add resource version to eviction api status

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142197)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142196: wip: support ML-DSA in CSRs

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142196)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142194: issue #124537

---
What type of PR is this?

/kind cleanup
/kind feature

What this PR does / why we need it:

Moves GetResourceRequestQuantity, GetResourceRequest, and IsHugePageResourceName from pkg/api/v1/resource into the public k8s.io/component-helpers/resource package.

The new component-helpers ve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142194)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142192: HPA: compute resource utilization ratio without int64 overflow

#### What type of PR is this?

/kind bug
/sig autoscaling

#### What this PR does / why we need it:

## Problem

`GetResourceUtilizationRatio` in the HPA metrics helpers sums per-pod metric values and requests as raw `int64`, multiplies the metrics total by 100, and narrows the result to `int32`. Al...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142192)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142191: Move proxy.NodeManager to a subpackage, improve

#### What this PR does / why we need it:
Organizes `proxy.NodeManager` a little bit more, and moves a bit more functionality out of `cmd/kube-proxy` and into `pkg/proxy`. In particular, this puts all of the "figuring out node IPs" logic into one place again, rather than having it be split between `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142191)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142189: deployment: match a ReplicaSet whose disabled fields were dropped

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes an infinite ReplicaSet creation loop that occurs when a feature gate for a pod template field is disabled while a Deployment is active.

Root Cause:
1. The API server keeps disabled fields on existing ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142189)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142188: Record provision latency metric when finishing a partial bind

**What this fixes**

Fixes #142090.

The flaky test asserts that `volume_operation_total_seconds{operation_name="provision", plugin_name=<provisioner>}` shows up in kube-controller-manager metrics after a PVC gets provisioned and bound. In the failing runs the metric never shows up even though the P...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142188)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142186: docs: fix stale alpha reference in HPA minReplicas doc comment

HPAScaleToZero graduated to beta in #139648, which flipped the feature gate default and updated the +k8s:beta declarative validation tags on this field, but never touched the plain-English doc comment sitting directly above them in the same block -- it still says 'the alpha feature gate HPAScaleToZe...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142186)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142185: client-go/cache: avoid FakeControllerSource shutdown deadlock

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

`FakeControllerSource.Shutdown()` acquired `f.lock` and intentionally never
released it, so any method called on the fake after shutdown (`Change`,
`List`, `Watch`, `ResetWatch`, and their `Add`/`Modify`/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142185)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142184: fix localhost nodeport proxy disabled to enabled flow

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142184)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142182: [release-1.35] Bump images and versions to go 1.26.8 and distroless iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Bump images and versions to go 1.26.8 and distroless iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4520

#### Does this PR introduce a user-fa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142182)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142180: [release-1.36] Bump images and versions to go 1.26.8 and distroless iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Bump images and versions to go 1.26.8 and distroless iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4520

#### Does this PR introduce a user-fa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142180)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142179: [release-1.37] Bump images and versions to go 1.26.8 and distroless iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Bump images and versions to go 1.26.8 and distroless iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4520

#### Does this PR introduce a user-fa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142179)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142178: perf: add buffer to reduce allocations in watch cache

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142178)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142177: Add AddGenericPodGroups and RemoveGenericPodGroup in snapshot


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142177)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142175: GitHub: remove "Additional documentation" section from PR template

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Reasons for removing it:

- Having to deal with this part of the PR template is additional work and/or causes confusion ("I initially put the release note in the docs section by mistake.").
- Contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142175)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142174: Suggest inline fixing for NewFilteredSharedInformerFactory

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`NewFilteredSharedInformerFactory` is deprecated with a straightforward replacement using `NewSharedInformerFactoryWithOptions`; mark it as fixable inline so that `go fix` will fix it.

While we’re at it,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142174)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57592: [ko] Update content/ko/docs/setup/production-environment/container-runtimes.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/production-environment/container-runtimes.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/production-environment/conta...

🔗 [Link](https://github.com/kubernetes/website/issues/57592)

**Metadata:**
- Created: 2026-09-18
- Comments: 1
- State: open

### kubernetes/website#57587: [ko] Update content/ko/docs/setup/best-practices/cluster-large.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/best-practices/cluster-large.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/best-practices/cluster-large/
- English: ...

🔗 [Link](https://github.com/kubernetes/website/issues/57587)

**Metadata:**
- Created: 2026-09-18
- Comments: 1
- State: open

### kubernetes/website#57583: [ar] Arabic navbar renders paragraphs inside nav links and is missing five sections

Found while reviewing the Arabic staging preview for #57407.

Preview: https://deploy-preview-57407--kubernetes-io-ar-staging.netlify.app/ar/

## Problem 1 — whole paragraphs are rendered inside navbar links

The Arabic navbar currently renders this:

```
توثيقتعرف على كيفية استخدام كوبيرنيتيس مع ال...

🔗 [Link](https://github.com/kubernetes/website/issues/57583)

**Metadata:**
- Created: 2026-09-17
- Comments: 1
- State: open

### kubernetes/website#57581: Invalid YAML indentation in Windows user guide Deployment example

**This is a Bug Report**

**Problem:**

In the Windows Deployment example, `selector:` is indented one space too little, so the YAML is invalid.
https://github.com/kubernetes/website/blob/main/content/en/docs/concepts/windows/user-guide.md?plain=1#L294

**Proposed Solution:**

Indent `selector:` by ...

🔗 [Link](https://github.com/kubernetes/website/issues/57581)

**Metadata:**
- Created: 2026-09-17
- Comments: 3
- State: open

### kubernetes/website#57579: Add support for localized announcement banners

It would be helpful to support localized announcement banners, allowing the banner content to be displayed in the selected language.

🔗 [Link](https://github.com/kubernetes/website/issues/57579)

**Metadata:**
- Created: 2026-09-17
- Comments: 4
- State: open

### kubernetes/website#57584: [ar] Stop rendering paragraphs inside Arabic navbar links

Fixes the first half of #57583.

The Arabic navbar renders its own description text inside the nav link, so what should read `توثيق` renders as the entire paragraph that follows it. Visible on the Arabic staging preview: https://deploy-preview-57407--kubernetes-io-ar-staging.netlify.app/ar/

## Caus...

🔗 [Link](https://github.com/kubernetes/website/pull/57584)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9960: add core sig testing staging registries

Add core sig testing staging registries.

Part of https://github.com/kubernetes/k8s.io/issues/9486

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9960)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37884: write a hardened image tracker and update the docs

Part of https://github.com/kubernetes/k8s.io/issues/9486


🔗 [Link](https://github.com/kubernetes/test-infra/pull/37884)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37877: Use kpromo v4.6.0 for artifact promotion

Use the released kpromo v4.6.0 for image and file promotion, the presubmits and the signature check.

v4.6.0 writes signed promotion attestations once per digest to the canonical registry and fixes provenance verification and the inventory lookup for nested destination registries, which caused re-si...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37877)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3106: Cut v1.37.1 release

## Scheduled to happen: Thu, 2026-09-17


## Release Blocking Issues
<!--

Make a list of anything preventing the release to start
(failing tests, pending image bumps, etc) and link them
to the relevant GitHub issues:

- [ ] Issue 1
- [ ] Issue 2

-->

<!--

Release Process Steps:
==================...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3106)

**Metadata:**
- Created: 2026-09-17
- Comments: 0
- State: open

### kubernetes/sig-release#3105: Cut v1.36.5 release

## Scheduled to happen: Thu, 2026-09-17

## Release Blocking Issues
<!--

Make a list of anything preventing the release to start
(failing tests, pending image bumps, etc) and link them
to the relevant GitHub issues:

- [ ] Issue 1
- [ ] Issue 2

-->

<!--

Release Process Steps:
===================...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3105)

**Metadata:**
- Created: 2026-09-17
- Comments: 0
- State: open

### kubernetes/sig-release#3104: Cut v1.35.9 release

## Scheduled to happen: Thu, 2026-09-17

## Release Blocking Issues
<!--

Make a list of anything preventing the release to start
(failing tests, pending image bumps, etc) and link them
to the relevant GitHub issues:

- [ ] Issue 1
- [ ] Issue 2

-->

<!--

Release Process Steps:
===================...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3104)

**Metadata:**
- Created: 2026-09-17
- Comments: 0
- State: open

### kubernetes/sig-release#3103: Cut v1.34.12 release

## Scheduled to happen:  Thu, 2026-09-17

## Release Blocking Issues
<!--

Make a list of anything preventing the release to start
(failing tests, pending image bumps, etc) and link them
to the relevant GitHub issues:

- [ ] Issue 1
- [ ] Issue 2

-->

<!--

Release Process Steps:
==================...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3103)

**Metadata:**
- Created: 2026-09-17
- Comments: 0
- State: open

### kubernetes/org#6655: Add current sig-scheduling approvers to scheduler-library writers

@mm4tt and @ania-borowiec focus has shifted more towards the scheduler-library, while the other approvers are currently more focused on the main kubernetes repo.

I'd like to grant them write access to the repo to make it easier for us to push version tags. They're already approvers of sig-schedul...

🔗 [Link](https://github.com/kubernetes/org/pull/6655)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3249: L4 NetLB: do not swallow GCE API errors when classifying services

The forwarding-rule lookups used to decide whether a Service is legacy Target Pool or RBS based logged GCE API failures and returned `false`. A transient error e.g. the `401 ACCESS_TOKEN_EXPIRED` that idle clusters hit once per token lifetime could therefore make the controller misclassify a legacy ...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3249)

**Metadata:**
- Created: 2026-09-17
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.34.1 / 2026-09-17

* [BUGFIX] inhibit: Fix several issues related to inhibitions that caused alerts to be improperly un-muted in some cases. #5542, #5449, #5559


🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.34.1)

**Metadata:**
- Version: v0.34.1
- Published: 2026-09-17
- Prerelease: No

### envoyproxy/gateway#10048: bug: ServiceAccount creation fails when Gateway name exceeds 63 characters due to invalid 'owning-gateway-name' label value


### Description
When creating a `Gateway` resource with a name longer than 63 characters, Envoy Gateway fails to create the corresponding `ServiceAccount ` resource (and potentially other derived infrastructure resources). 

While resource naming truncation/hashing mechanisms exist in some parts of...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10048)

**Metadata:**
- Created: 2026-09-17
- Comments: 0
- State: open

### cncf/toc#2304: [VOTE]: Josh Gavant for TAG Infrastructure Technical Lead

### Position

TAG Infrastructure Technical Lead (additional seat)

### Name

Josh Gavant (@joshgav)

### Motivation & Additional Information

I'd like to nominate Josh Gavant as a Technical Lead for TAG Infrastructure. This would add a Tech Lead seat for now.

Josh has contributed to CNCF's platform...

🔗 [Link](https://github.com/cncf/toc/issues/2304)

**Metadata:**
- Created: 2026-09-17
- Comments: 2
- State: open


---

*This content was automatically collected on 2026-09-18 03:07:42*
