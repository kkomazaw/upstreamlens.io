---
title: "Upstream Github - 2026-09-21"
description: "CNCF upstream activity from github"
pubDate: 2026-09-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "priority/critical-urgent", "sig/node", "kind/flake", "sig/testing", "sig/release", "triage/accepted", "kind/bug", "sig/cli", "needs-triage", "area/kubelet", "pr", "sig/api-machinery", "size/M", "kind/api-change", "release-note-none", "cncf-cla: yes", "area/code-generation", "needs-priority", "area/kubectl", "release-note", "size/L", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "area/test", "priority/important-longterm", "kind/failing-test", "wg/device-management", "size/XL", "do-not-merge/cherry-pick-not-approved", "sig/architecture", "do-not-merge/needs-kind", "sig/storage", "size/XS", "kind/cleanup", "size/S", "sig/apps", "ok-to-test", "sig/network", "approved", "sig/ui", "community", "language/en", "website", "language/ko", "area/localization", "kind/feature", "lgtm", "sig/docs", "language/zh", "sig/cloud-provider", "kind/kep", "enhancements", "envoyproxy", "gateway", "containerd", "release", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/enhancements#6401: KEP-5237: update for 1.38 milestone



<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has b...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6401)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10060: ExtensionServerPolicy: `targetRef.kind: GatewayClass` is silently ignored, not just under mergeGateways

**If you are reporting *any* crash or *any* potential security issue, *do not*
open an issue in this repo. Please report the issue via emailing
envoy-gateway-security@googlegroups.com where the issue will be triaged appropriately.**

*Description*:

`ProcessExtensionServerPolicies` (`internal/gatewa...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10060)

**Metadata:**
- Created: 2026-09-21
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#142262: [Flaking Test] [sig-testing] ci-kubernetes-e2e-gce-cos-alphafeatures-master kubetest.Timeout [gce-cos-alphafeatures-master, gce-cos-alphafeatures-1.37]

### Which jobs are flaking?

sig-release-master-blocking#gce-cos-alphafeatures-master (`ci-kubernetes-e2e-gce-cos-alphafeatures-master`)
sig-release-1.37-blocking#gce-cos-alphafeatures-1.37 (`ci-kubernetes-e2e-gce-cos-alphafeatures-beta`, the fork of the same job)

Triage: https://storage.googleapis...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142262)

**Metadata:**
- Created: 2026-09-21
- Comments: 2
- State: open

### kubernetes/kubernetes#142260: kubectl create ingress panics when a rule path contains a comma

### What happened?

`kubectl create ingress` panics when a `--rule` path contains a comma.
No cluster is needed; `--dry-run=client` is enough:

```console
$ kubectl create ingress ing --rule="foo.com/a,b=svc:8080" \
    --dry-run=client -o yaml
panic: runtime error: index out of range [1] with lengt...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142260)

**Metadata:**
- Created: 2026-09-20
- Comments: 3
- State: open

### kubernetes/kubernetes#142258: kubelet: containerLogs returns HTTP 200 when the container is gone from the runtime

### What happened?

When a container has been removed from the runtime but its Pod still exists, the kubelet /containerLogs endpoint can return HTTP 200 with the error message in the response body. kubectl logs then prints the error as if it were log output and exits 0, so clients cannot tell that t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142258)

**Metadata:**
- Created: 2026-09-20
- Comments: 2
- State: open

### kubernetes/kubernetes#142263: enable commentstart check on storagemigration API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142263)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142261: kubectl create ingress: parse each rule once

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`Validate` matches each `--rule` against `ruleRegex`, whose path group
is `(?P<path>/.*)` and so accepts a comma. `buildIngressRules` and
`buildTLSRules` then discard that match and re-split the raw rule on
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142261)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142259: kubelet: don't pre-commit 200 for container logs

## kubelet: don't pre-commit 200 for container logs

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When a container is gone from the runtime but its Pod still exists, the kubelet log endpoint can return HTTP 200 with the error in the response body. This ma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142259)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142257: e2e: skip CheckPodResized for DRA node allocatable resize tests


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142257)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142256: client-go: let a shared informer factory stop an informer once every holder released it

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

The dynamic and metadata shared informer factories have no way to stop one informer. `StartWithContext` runs every informer under the factory's context and marks it started for good, and `SharedInf...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142256)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142255: Automated cherry pick of #141487: Do not inherit probe state from a replaced container

Cherry pick of #141487 on release-1.35.

#141487: Do not inherit probe state from a replaced container

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142255)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142254: Automated cherry pick of #141487: Do not inherit probe state from a replaced container

Cherry pick of #141487 on release-1.36.

#141487: Do not inherit probe state from a replaced container

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142254)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142253: Automated cherry pick of #141487: Do not inherit probe state from a replaced container

Cherry pick of #141487 on release-1.37.

#141487: Do not inherit probe state from a replaced container

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142253)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142252: Add unit tests for dynamic version validation

#### What type of PR is this?

/kind test
/sig api-machinery
/area component-base

#### What this PR does / why we need it:

Adds unit tests for `validateDynamicVersion`, `SetDynamicVersion` and `Get` in `staging/src/k8s.io/component-base/version`. None had test coverage. Covers the empty input, no-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142252)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142251: storage: avoid VAC admission panic on unexpected object

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

`admitVAC` dereferences `vac.Name` after a failed `*VolumeAttributesClass` type assertion, when `vac` is nil. An unexpected object type therefore panics the admission path instead of returning without mu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142251)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142250: e2e: retry transient OpenAPI request errors

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The CRD OpenAPI E2E helper stops polling when `GET /openapi/v2` returns a transient transport error. This makes the spec update tests fail during brief control-plane connectivity interruptions.

Retry request error...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142250)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142249: kubelet: retain pod volume stats during restart backoff

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When every container sample for a Running pod is filtered out by cAdvisor stats collection, `ListPodStats` omits the pod before collecting its volume stats. A pod in restart backoff can therefore lose its Summa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142249)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142248: apiserver: clarify updatable Pod spec fields

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142248)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142247: job controller: clear expectations when deleting Job

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The Job controller tracks pending Pod creations and deletions by namespace/name. If a Job is deleted while a Pod creation is in flight and another Job is immediately created with the same name, the replacement can in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142247)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142246: Dtumkur pr network tag controller

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142246)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9171: Add kahirokunn as SIG UI lead

Related to https://github.com/kubernetes/community/issues/9164

🔗 [Link](https://github.com/kubernetes/community/pull/9171)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57642: Pod lifecycle: is a non-normative note on the magnitude of the NetworkPolicy handling delay in scope?

**This is a Feature Request**

**What would you like to be added**

A short, non-normative sentence in [Pod lifecycle](https://kubernetes.io/docs/concepts/services-networking/network-policies/#pod-lifecycle) noting that the NetworkPolicy handling delay is implementation-specific and measurable out o...

🔗 [Link](https://github.com/kubernetes/website/issues/57642)

**Metadata:**
- Created: 2026-09-20
- Comments: 1
- State: open

### kubernetes/website#57638: [ko] Update content/ko/docs/concepts/overview/kubernetes-api.md

**This is a Feature Request**

**What would you like to be added**

Update `content/ko/docs/concepts/overview/kubernetes-api.md`

**Website Link**

- English : https://kubernetes.io/docs/concepts/overview/kubernetes-api/
- Korean : https://kubernetes.io/ko/docs/concepts/overview/kubernetes-api/

**W...

🔗 [Link](https://github.com/kubernetes/website/issues/57638)

**Metadata:**
- Created: 2026-09-20
- Comments: 1
- State: open

### kubernetes/website#57635: [ko] Update content/ko/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/

**This is a Feature Request**

**What would you like to be added**

Update `content/ko/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm.md`

**Website Link**

- English : https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/
- Korean : ...

🔗 [Link](https://github.com/kubernetes/website/issues/57635)

**Metadata:**
- Created: 2026-09-20
- Comments: 1
- State: open

### kubernetes/website#57634: [ko] Translate content/en/docs/concepts/cluster-administration/swap-memory-management.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate the following Kubernetes documentation page into Korean:

- English: https://kubernetes.io/docs/concepts/cluster-administration/swap-memory-management/
- Target file:  content/en/docs/concepts/cluster-administration/swap-m...

🔗 [Link](https://github.com/kubernetes/website/issues/57634)

**Metadata:**
- Created: 2026-09-20
- Comments: 1
- State: open

### kubernetes/website#57633: [zh-cn]sync kubectl_set/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_set/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57633)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdctl: v2.4.0

This release improves compatibility with Docker v29.

## Changes

Major changes (💡 for highlights):

- `nerdctl image`:
   - 💡Adopted Docker v29 default `nerdctl images` output (`IMAGE`, `ID`, `DISK USAGE`, `CONTENT SIZE`, `EXTRA`) (#5093, thanks to @ekalinin)
   - Added `nerdctl images --tree` to show a row per platform an image declares, like `docker image ls --tree` (#5092, thanks to @ekalinin)
   - Added `nerdctl push --all-tags` (`-a`) to push every local tag of a repository (#51...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.4.0)

**Metadata:**
- Version: v2.4.0
- Published: 2026-09-20
- Prerelease: No


---

*This content was automatically collected on 2026-09-21 03:15:22*
