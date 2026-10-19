---
title: "Upstream Github - 2026-10-19"
description: "CNCF upstream activity from github"
pubDate: 2026-10-19
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "language/ko", "needs-triage", "area/localization", "website", "help wanted", "priority/backlog", "language/ja", "kind/bug", "sig/scheduling", "area/kubelet", "sig/node", "pr", "area/test", "priority/important-soon", "area/apiserver", "sig/api-machinery", "release-note", "size/XXL", "kind/api-change", "sig/auth", "cncf-cla: yes", "sig/testing", "needs-priority", "api-review", "triage/accepted", "size/M", "sig/storage", "sig/apps", "do-not-merge/work-in-progress", "wg/device-management", "do-not-merge/release-note-label-needed", "size/XS", "kind/flake", "release-note-none", "sig/instrumentation", "needs-ok-to-test", "size/L", "ok-to-test", "sig/etcd", "size/S", "kind/cleanup", "sig/autoscaling", "area/testing", "minikube", "approved", "do-not-merge/hold", "area/cluster-autoscaler", "area/provider/cluster-api", "autoscaler", "area/vertical-pod-autoscaler", "area/provider/aws", "area/jobs", "sig/cloud-provider", "area/config", "test-infra", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "release"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143160: KEP-5793: Add staticOrder to control mutating webhook merge order

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Implements the mutating webhook merge order for KEP-5793.

Manifest-based mutating webhooks always run before webhooks registered through the API, so moving a webhook from a `MutatingWebhookConfi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143160)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143159: Mark KubeletServiceAccountTokenForCredentialProviders and ServiceAccountNodeAudienceRestriction feature gates as GA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promotes https://github.com/kubernetes/enhancements/issues/4412 to GA

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/4412

#### Special notes for your reviewer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143159)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#58152: [ko] Translate  content/en/docs/concepts/scheduling-eviction/topology-aware-scheduling into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/58152)

**Metadata:**
- Created: 2026-10-18
- Comments: 1
- State: open

### kubernetes/website#58150: [ja] Translate docs/reference/access-authn-authz/webhook.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/reference/access-authn-authz/webhook.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/blob/main...

🔗 [Link](https://github.com/kubernetes/website/issues/58150)

**Metadata:**
- Created: 2026-10-18
- Comments: 4
- State: open

### kubernetes/website#58149: [ja] Translate docs/reference/access-authn-authz/node.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/reference/access-authn-authz/node.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/blob/main/co...

🔗 [Link](https://github.com/kubernetes/website/issues/58149)

**Metadata:**
- Created: 2026-10-18
- Comments: 4
- State: open

### kubernetes/website#58148: [ja] Translate docs/concepts/scheduling-eviction/workload-aware-preemption.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/concepts/scheduling-eviction/workload-aware-preemption.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes...

🔗 [Link](https://github.com/kubernetes/website/issues/58148)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/website#58147: [ja] Translate docs/tasks/inject-data-application/downward-api-volume-expose-pod-information.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/tasks/inject-data-application/downward-api-volume-expose-pod-information.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://git...

🔗 [Link](https://github.com/kubernetes/website/issues/58147)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/website#58146: [ja] Translate docs/tasks/administer-cluster/quota-api-object.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/tasks/administer-cluster/quota-api-object.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/blob...

🔗 [Link](https://github.com/kubernetes/website/issues/58146)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/website#58145: [ja] Translate docs/tasks/administer-cluster/kubelet-config-file.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/tasks/administer-cluster/kubelet-config-file.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/b...

🔗 [Link](https://github.com/kubernetes/website/issues/58145)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/website#58144: [ja] Translate docs/reference/access-authn-authz/certificate-signing-requests.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/reference/access-authn-authz/certificate-signing-requests.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kuberne...

🔗 [Link](https://github.com/kubernetes/website/issues/58144)

**Metadata:**
- Created: 2026-10-18
- Comments: 4
- State: open

### kubernetes/website#58143: [ja] Translate docs/concepts/extend-kubernetes/compute-storage-net/device-plugins.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/concepts/extend-kubernetes/compute-storage-net/device-plugins.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kub...

🔗 [Link](https://github.com/kubernetes/website/issues/58143)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/website#58142: [ja] Translate docs/reference/using-api/client-libraries.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/reference/using-api/client-libraries.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/blob/main...

🔗 [Link](https://github.com/kubernetes/website/issues/58142)

**Metadata:**
- Created: 2026-10-18
- Comments: 4
- State: open

### kubernetes/website#58141: [ja] Translate docs/reference/access-authn-authz/authorization.md into Japanese

**This is a Feature Request**

**What would you like to be added**

Translate `docs/reference/access-authn-authz/authorization.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    - https://github.com/kubernetes/website/blo...

🔗 [Link](https://github.com/kubernetes/website/issues/58141)

**Metadata:**
- Created: 2026-10-18
- Comments: 4
- State: open

### kubernetes/kubernetes#143151: [scheduler] Topology placement misses conflicts when a domain value is empty

### What kind of issue is this?

/kind bug
/sig scheduling

### What happened?

The topology-aware workload scheduling plugin can fail to detect conflicting topology domains among already-scheduled Pods when one domain has an empty label value.

In `pkg/scheduler/framework/plugins/topologyaware/topo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143151)

**Metadata:**
- Created: 2026-10-18
- Comments: 3
- State: open

### kubernetes/kubernetes#143146: kubelet deletes a rotated container log even when writing its compressed copy failed

### What happened?

When the kubelet compresses a rotated container log (`containerLogManager.compressLog` in `pkg/kubelet/logs/container_log_manager.go`), it ignores the errors from closing the gzip writer and the output file:

```go
if _, err := io.Copy(w, r); err != nil {
	return fmt.Errorf("fail...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143146)

**Metadata:**
- Created: 2026-10-18
- Comments: 2
- State: open

### kubernetes/kubernetes#143158: WIP: Scheduler preemption for IPPR: beta update

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143158)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143157: migrating CSIStorageCapacity which is required and immutable

CSIStorageCapacity `storageClassName` required & immutable

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143157)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143156: Fix TestEventSeries flaky only focus on testPod namespace

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master/2106523952091238400#1:build-log.txt%3A2532

The ipallocator-repair-controller emits a ClusterIPNotAllocated event for the k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143156)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143155: client-go: drop stdin from SPDY exit code tests

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

`TestFallbackClient_SPDYSecondaryNonZeroExitCode` and `TestSPDYExecutorNonZeroExitCode` occasionally get a nil error instead of the expected `ExitError`.

The fake SPDY servers in both tests neve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143155)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143154: Fix delayed re-preemption caused by stale nominations during async preemption


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143154)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143153: Watchcache prevkv

Put PrevKV on top of other improvements to benchmark and measure it's impact

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143153)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143152: scheduler: detect conflicting empty topology domains

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143152)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143150: Fix missing Deployment rollout timeouts after replica count changes fail

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143150)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143149: volume/subpath: fix wrong variable in path-outside-base error message

**What type of PR is this?**
/kind bug

**What this PR does / why we need it:**
In doSafeMakeDir in subpath_linux.go, after successfully evaluating symlinks on the existing path prefix, the bounds check uses the wrong variable in its error message:

```
fullExistingPath, err := filepath.EvalS...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143149)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143148: hpa: eliminate implicit float64 divide-by-zero in per-pod metric functions

**What type of PR is this?**
/kind cleanup

**What this PR does / why we need it:**
GetObjectPerPodMetricReplicas and GetExternalPerPodMetricReplicas both divide by float64(target) * float64(replicaCount) where replicaCount = statusReplicas. When statusReplicas == 0 this produces +Inf or NaN.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143148)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143147: kubelet: keep rotated log when compressing it fails at close

#### What type of PR is this?

/kind bug
/sig node
/area kubelet

#### What this PR does / why we need it:

`compressLog` ignored the errors from closing the gzip writer and the temporary file. Closing the gzip writer writes the rest of the compressed data and the trailer, so if that write failed (f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143147)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23896: test: Rate limit cause random failures in functional tests

Tests using `public.ecr.aws/nginx/nginx:alpine` fail randomly with:

```
          Warning  Failed     2m54s (x5 over 5m59s)  kubelet            spec.containers{myfrontend}: Failed to pull image "public.ecr.aws/nginx/nginx:alpine": failed to pull and unpack image "public.ecr.aws/nginx/nginx:alpine":...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23896)

**Metadata:**
- Created: 2026-10-18
- Comments: 11
- State: open

### kubernetes/minikube#23895: test: Remove prow docker crio job

This job never passed[1] since it was created. It always fail with ~50                                                                                                                        
failed tests. We don't have capacity to maintain it. The crio runtime is
tested with podman in the function...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23895)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23894: CI: Stagger Dependabot updates and cap open pull requests

Weekly Go module and GitHub Actions updates share one schedule and have no cap, so a burst can land on Friday through Sunday and weekend work starts before tests have finished.

Run Go module updates on Monday and GitHub Actions updates on Wednesday, and limit each ecosystem to 3 open pull requests.

🔗 [Link](https://github.com/kubernetes/minikube/pull/23894)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10441: fix(clusterapi): cache kind version discovery across loop iterations

## Why

On large clusters the Cluster API provider can stall its main loop until the liveness probe restarts it. Since CAPI v1beta2, an infrastructureRef carries `apiGroup` instead of `apiVersion`, so the provider resolves the kind version through live discovery. The main loop rebuilds every scalabl...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10441)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10440: VPA: stop test builder copies from sharing state

#### What type of PR is this?

/kind cleanup
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

The VPA test builder's `With*` methods return a copy of the builder, but the maps (`minAllowed`, `maxAllowed`, `controlledValues`, `scalingMode`, `containerStartupBoost`), the append...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10440)

**Metadata:**
- Created: 2026-10-18
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38108: alpha-canary presubmit: add kubernetes extra_ref for check-ami.sh

`pull-kubernetes-e2e-ec2-alpha-canary` sources `kubetest2-ec2/scripts/check-ami.sh`, which reads the Kubernetes minor version from `$GOPATH/src/k8s.io/kubernetes` to build the AMI name. The job has no `kubernetes/kubernetes` extra ref, so the name comes out as `amazon-eks-al2023-node--vDATE`, nothin...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38108)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4578: Bump the actions group with 4 updates

Bumps the actions group with 4 updates: [github/codeql-action/init](https://github.com/github/codeql-action), [github/codeql-action/autobuild](https://github.com/github/codeql-action), [github/codeql-action/analyze](https://github.com/github/codeql-action) and [github/codeql-action/upload-sarif](htt...

🔗 [Link](https://github.com/kubernetes/release/pull/4578)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4577: Bump google.golang.org/api from 0.302.0 to 0.304.0

Bumps [google.golang.org/api](https://github.com/googleapis/google-api-go-client) from 0.302.0 to 0.304.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/googleapis/google-api-go-client/releases">google.golang.org/api's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/release/pull/4577)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4576: Bump github.com/sigstore/sigstore from 1.11.0 to 1.11.1 in the all group

Bumps the all group with 1 update: [github.com/sigstore/sigstore](https://github.com/sigstore/sigstore).

Updates `github.com/sigstore/sigstore` from 1.11.0 to 1.11.1
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sigstore/sigstore/releases">github.com/sig...

🔗 [Link](https://github.com/kubernetes/release/pull/4576)

**Metadata:**
- Created: 2026-10-19
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-19 03:11:47*
