---
title: "Upstream Github - 2026-07-04"
description: "CNCF upstream activity from github"
pubDate: 2026-07-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "pr", "area/kubelet", "sig/node", "release-note", "size/XS", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/apiserver", "sig/api-machinery", "size/S", "sig/auth", "do-not-merge/release-note-label-needed", "area/test", "kind/cleanup", "release-note-none", "sig/testing", "size/L", "sig/scheduling", "size/M", "kind/feature", "do-not-merge/work-in-progress", "approved", "wg/device-management", "sig/apps", "sig/instrumentation", "wg/structured-logging", "kind/api-change", "sig/network", "area/kube-proxy", "kind/flake", "do-not-merge/hold", "area/cloudprovider", "sig/cloud-provider", "area/dependency", "kind/dependency", "sig/storage", "size/XXL", "area/code-generation", "lgtm", "ok-to-test", "dependencies", "go", "minikube", "kubectl", "area/jobs", "area/config", "sig/k8s-infra", "test-infra", "perf-tests", "autoscaler", "area/vertical-pod-autoscaler", "size/XL", "area/cluster-autoscaler", "area/helm-charts", "website", "sig/docs", "language/en", "language/ko", "language/ja", "language/zh", "area/blog", "area/web-development", "area/localization", "ingress-gce"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140220: kubelet: log StaticPodURLHeader key names only, not values

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`makePodSourceConfig` logs the full `StaticPodURLHeader` values (including credentials like `Authorization: Bearer ...`) at default verbosity when kubelet starts. The field is tagged `datapolicy:"token"` and `marshal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140220)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140209: apimachinery: add declarative validation for Condition.Reason field

## What this PR does

Migrates the hand-written `Reason` validation on `metav1.Condition` to Declarative Validation (KEP-5073), covering Batch 1 of the tracking issue:

- Added `+k8s:required` and `+k8s:maxLength=1024` tags to `Condition.Reason` in `types.go`
- Regenerated `zz_generated.validat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140209)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1861: Wrong fish completion for debug

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately via https://kubernetes.io/security/
-->

**What happened**:

...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1861)

**Metadata:**
- Created: 2026-07-03
- Comments: 1
- State: open

### kubernetes/autoscaler#9934: Vulnerabilities in Cluster Autoscaler

## Security Scan Report

Our internal security scan reports the following vulnerability in the Cluster Autoscaler (CA) images.

| Component | CVE | Suggested Remediation |
|----------|-----|-----------------------|
| Cluster Autoscaler | **CVE-2026-25681** | Upgrade `golang.org/x/net/html` to **>= 0...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9934)

**Metadata:**
- Created: 2026-07-03
- Comments: 1
- State: open

### kubernetes/autoscaler#9935: VPA: Pods should not get into an eviction loop when a Pod LimitRange object is present

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9935)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9933: Add CapacityQuota permissions to helm chart

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
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9933)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140217: DRA ResourceClaim is created twice during rapid Pod scale out

### What happened?

When I submit a Job with a very large number of DRA-enabled Pods (approximately 6,000–10,000), I occasionally observe duplicate ResourceClaim creation. As a result, a ResourceClaim that was originally created and bound to Pod A is later replaced by another ResourceClaim, causing ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140217)

**Metadata:**
- Created: 2026-07-03
- Comments: 4
- State: open

### kubernetes/kubernetes#140214: Will CVE-2026-39833 fix be backported to k8s 1.34, 1.35 and 1.36?

k8s 1.34, 1.35 and 1.36 have not received a backport of the fix for CVE-2026-39833 which affects golang.org/x/crypto.
It seems like the `NewKeyring()` method mentioned in the CVE is not used in this project so perhaps that's why it has not been backported?
This is a critical CVE and no fix is curren...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140214)

**Metadata:**
- Created: 2026-07-03
- Comments: 2
- State: open

### kubernetes/kubernetes#140213: [Conformance tests] Misleading error message in API chunking test case

### What happened?

The test case "[sig-api-machinery] Servers with support for API chunking [It] should support continue listing from the last key if the original version has been compacted away, though the list is inconsistent" that is part of the Conformance test suite fails with a misleading err...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140213)

**Metadata:**
- Created: 2026-07-03
- Comments: 2
- State: open

### kubernetes/kubernetes#140219: apiserver: clear requestheader trust state on ConfigMap deletion

#### What type of PR is this?

/kind bug
/sig auth
/sig api-machinery

#### What this PR does / why we need it:

When the `extension-apiserver-authentication` ConfigMap is deleted, both `ConfigMapCAController` and `RequestHeaderAuthRequestController` spin on "not found" errors from the informer list...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140219)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140218: Mark newly NodeConformance-tagged resize/restart/device-plugin tests as Slow

#### What type of PR is this?

/kind regression

#### What this PR does / why we need it:

`ci-kubernetes-node-e2e-containerd` runtime jumped from ~35m to ~55-67m
starting 2026-06-26, close to its 65m kubetest timeout and already
causing intermittent `kubetest.Timeout` failures.

Root cause: #140023...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140218)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140216: fix(kubelet): parallelize container kills in SyncPod


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When multiple containers in a pod fail their liveness or startup probes within a single sync loop iteration, kubelet's SyncPod kills them sequentially. Each killContainer call blocks for up to terminationGrac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140216)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140215: [WIP] Run PlacementFeasible plugins before any Pod is attempted

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

TODO

#### Which issue(s) this PR is related to:

No issue is opened for that.

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?

```release-note
NONE
```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140215)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140212: kubelet/dra: skip unprepareResources when claimInfo doesn't reference the pod

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

PrepareResources only adds the pod to a claim's PodUIDs after its validation pass succeeds. If validation fails (missing reservation, transient API error, driver unavailable, etc.) the pod is never added to the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140212)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140211: Promote regression-issue-74839 to 1.5

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140211)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140210: Use contextual logging in ResourcePoolStatusRequest controller

/kind cleanup
/sig instrumentation
/wg structured-logging

#### What this PR does / why we need it
Migrates the ResourcePoolStatusRequest controller informer handler registration to AddEventHandlerWithOptions and passes the controller logger through cache.HandlerOptions.

This is a small slice of th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140210)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140208: DRA resourceslice tracker: ignore DeviceClass events

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This was left over from the time when device taints still allowed filtering by DeviceClass. This was removed because that filtering only worked while the DeviceClass existed. The DeviceClass events then tri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140208)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140206: proxy: log nodePort changes for improved observability

Logs when a nodePort is configured, cleared, or removed from a service, similar to how endpoints are logged, to improve traceability in kube-proxy.

/kind flake
```release-note
NONE
```


Help debug #139786

/sig network
/assign @danwinship @adrianmoisey 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140206)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140205: dependencies: cel-go v0.29.1

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

There may be some useful enhancements in    https://github.com/cel-expr/cel-go/releases/tag/v0.28.0 and     https://github.com/cel-expr/cel-go/releases/tag/v0.29.0, but primarily the goal     is to get h...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140205)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140204: WIP: validation-gen for protobuf Go code!

WIP WIP WIP

I wanted to see if I could use validation-get for protobuf code, and the answer was "almost".  It needed some changes, which inspired some cleanups.  This can be reviewed one commit at a time.

Gemini helped me with some of this.

/kind feature

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140204)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23277: chore(deps): bump golang.org/x/net from 0.54.0 to 0.55.0

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.54.0 to 0.55.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/net/commit/7770ec48d03fec35e378665337b4faca93c38423"><code>7770ec4</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="htt...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23277)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23276: chore(deps): bump golang.org/x/net from 0.54.0 to 0.55.0 in /hack

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.54.0 to 0.55.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/net/commit/7770ec48d03fec35e378665337b4faca93c38423"><code>7770ec4</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="htt...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23276)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23274: chore(deps): bump golang.org/x/net from 0.48.0 to 0.55.0 in /hack/jenkins/test-flake-chart/report_flakes

Bumps [golang.org/x/net](https://github.com/golang/net) from 0.48.0 to 0.55.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/net/commit/7770ec48d03fec35e378665337b4faca93c38423"><code>7770ec4</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="htt...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23274)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37388: Bump kops version in staging-registry jobs

This should fix this cluster creation failure:

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/e2e-kops-staging-registry-azure/2073180188019003392

`W0703 23:04:24.499754    9643 state.go:46] failed to run /home/prow/go/src/k8s.io/kops/_rundir/7452e344-82aa-42f2-ad97-5931f0bc0104/kops get c...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37388)

**Metadata:**
- Created: 2026-07-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37382: Add WAS e2e presubmit for jobset

**What type of PR is this?**

/kind cleanup

**What this PR does / why we need it**:

Adds an optional e2e presubmit job for `kubernetes-sigs/jobset` that exercises Workload-Aware Scheduling (WAS), mirroring the existing `pull-kueue-test-e2e-k8s-main-was` presubmit added for kueue.

The new job (`pu...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37382)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4174: Allow customizing registry.k8s.io across ClusterLoader2

#### Summary

*   Introduced the `registry-k8s-repo` CLI flag and `REGISTRY_K8S_REPO` environment variable (mapped to `ImageRegistry` in template mapping) to allow replacing the default `registry.k8s.io` image repository.
*   Updated all test templates and measurement manifests  to use the new `{...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4174)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#56369: https://kubernetes.github.io/dashboard/" is not a valid chart repository or cannot be reached:

Unable to access the helm repo as it is not available which was provided in the documentation.

`Error: looks like "https://kubernetes.github.io/dashboard/" is not a valid chart repository or cannot be reached: failed to fetch https://kubernetes.github.io/dashboard/index.yaml : 404 Not Found`

🔗 [Link](https://github.com/kubernetes/website/issues/56369)

**Metadata:**
- Created: 2026-07-03
- Comments: 2
- State: open

### kubernetes/website#56373: Merge main branch into dev-1.37

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/56373)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3150: Standalone L4 NEG controller metrics

Added a metric `l4_standalone_neg_lbs_count` that tracks the number of standalone NEG LB services. The metric can be broken down by the type of FR attached and the status. The status could be success, user error (bad configuration) or system error (mainly problems reaching GCE API).

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3150)

**Metadata:**
- Created: 2026-07-03
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-04 02:39:46*
