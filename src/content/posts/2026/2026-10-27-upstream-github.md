---
title: "Upstream Github - 2026-10-27"
description: "CNCF upstream activity from github"
pubDate: 2026-10-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "priority/important-soon", "sig/node", "kind/failing-test", "needs-triage", "wg/device-management", "sig/scheduling", "wg/workload-aware-scheduling", "sig/api-machinery", "kind/cleanup", "sig/auth", "kind/bug", "sig/apps", "pr", "area/test", "release-note", "size/XXL", "cncf-cla: yes", "sig/testing", "needs-ok-to-test", "needs-priority", "size/M", "area/code-generation", "size/L", "do-not-merge/work-in-progress", "size/S", "release-note-none", "area/kubectl", "sig/cli", "kind/feature", "area/kubelet", "area/apiserver", "area/cloudprovider", "size/XL", "kind/api-change", "sig/cloud-provider", "area/dependency", "approved", "kind/flake", "priority/backlog", "lgtm", "sig/cluster-lifecycle", "area/kubeadm", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "triage/accepted", "minikube", "kops", "area/infra", "sig/k8s-infra", "area/infra/ibmcloud", "k8s.io", "area/jobs", "area/config", "test-infra", "website", "size/XS", "tide/merge-method-squash", "language/en", "ingress-gce", "contributor-site", "kube-state-metrics", "sig/scalability", "perf-tests", "area/vertical-pod-autoscaler", "area/helm-charts", "autoscaler", "kind/dependency", "area/cluster-autoscaler", "area/provider/azure", "sig/release", "area/release-eng", "release", "area/kinder", "kubeadm", "envoyproxy", "envoy", "gateway", "cncf", "review/governance", "needs-group", "kind/review", "toc", "kind/initiative", "tag/developer-experience", "tag/infrastructure"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143450: [WIP] DRA scheduler: keep allocation from PreBind when unreserving


#### What type of PR is this?
/kind bug 
/kind regression

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
/kind faili...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143450)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10516: vpa(chart): Add ability to set .Values.namespaceOverride

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
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10516)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/envoy: v1.40.2

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: updated the `distroless` docker image base to pick up the patched
    `ca-certificates` package (`20250419+deb13u1`), so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.40.1 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/env...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.40.2)

**Metadata:**
- Version: v1.40.2
- Published: 2026-10-27
- Prerelease: No

### envoyproxy/envoy: v1.39.6

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: updated the `distroless` docker image base to pick up the patched
    `ca-certificates` package (`20250419+deb13u1`), so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.39.5 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoyproxy/env...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.6)

**Metadata:**
- Version: v1.39.6
- Published: 2026-10-27
- Prerelease: No

### envoyproxy/envoy: v1.38.9

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: the `distroless` docker image now uses the patched `ca-certificates` package
    (`20250419~deb12u2`) from Debian bookworm, so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.38.8 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoypro...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.9)

**Metadata:**
- Version: v1.38.9
- Published: 2026-10-26
- Prerelease: No

### envoyproxy/envoy: v1.37.11

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    release: the `distroless` docker image now uses the patched `ca-certificates` package
    (`20250419~deb12u2`) from Debian bookworm, so it no longer trusts the roots of the
    compromised eMudhra intermediate CAs. The distroless image released in 1.37.10 still
    shipped the unpatched bundle.

**Docker images**:
    https://hub.docker.com/r/envoypr...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.11)

**Metadata:**
- Version: v1.37.11
- Published: 2026-10-26
- Prerelease: No

## Updates

### kubernetes/kubernetes#143451: [Failing Test] [sig-node] Release-branch COS DRA jobs fail with GLIBC_2.38

### Which jobs are failing?

All three jobs install containerd `release/2.1`.

| Kubernetes branch | Confirmed failing run | containerd stream | COS node log |
| --- | --- | --- | --- |
| `release-1.35` | [ci-node-e2e-containerd-2-0-dra-1-35](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-no...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143451)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/kubernetes#143446: Request to backport PR #143253 to v1.37

Can we backport PR #143253, which fixes #143252, to v1.37 once it merges?

With `PodGroupPreemptionPolicy` enabled, creating a PodGroup or CompositePodGroup that references a PriorityClass with `preemptionPolicy: Never` is rejected when the group omits its own policy. API defaulting sets `PreemptLow...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143446)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/kubernetes#143441: Only the first audit annotation is considered during admission retries or for `deletecollection`

Once audit annotations are written, they cannot be overwritten
https://github.com/kubernetes/kubernetes/blob/e96327d86b1c1847742e6990b72b5f25aec284f7/staging/src/k8s.io/apiserver/pkg/audit/context.go#L346-L356

but admission can run multiple times (e.g. on storage retries) or deletecollection, which...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143441)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/kubernetes#143440: The `WithAuthorization` HTTP filter should not accept a nil authorizer

https://github.com/kubernetes/kubernetes/blob/4c26f5d09283243ab2bc1086773444a41acdeb5f/staging/src/k8s.io/apiserver/pkg/endpoints/filters/authorization.go#L56-L60

makes `WithAuthorization` a no-op if a `nil` authorizer is given. This means a user could believe they are protected by an authorizer (d...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143440)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/kubernetes#143435: Job that reaches activeDeadlineSeconds fails with BackoffLimitExceeded when the DeadlineExceeded status update is lost

### What happened?

A Job with `activeDeadlineSeconds` and `backoffLimit: 0` intermittently fails with reason `BackoffLimitExceeded` instead of `DeadlineExceeded` when its deadline elapses.

At the deadline, `syncJob` deletes the active pods [before](https://github.com/kubernetes/kubernetes/blob/v1....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143435)

**Metadata:**
- Created: 2026-10-26
- Comments: 2
- State: open

### kubernetes/kubernetes#143453: Fix Job interim condition persistence before pod deletion

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a Job reaches a finishing decision (`FailureTarget` or `SuccessCriteriaMet`), `syncJob` can delete active Pods before persisting the interim condition. If reconciliation is interrupted after deletion begins but ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143453)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143452: Fix applyconfiguration-gen references to unexported struct types

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When an API type embeds an unexported struct like `common`, applyconfiguration-gen creates a type named `CommonApplyConfiguration`. But the generated code still refers to it as `commonApplyConfiguration`, so it fails...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143452)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143449: imagepolicy: remove dead fail-open pod annotation mutation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

ImagePolicyWebhook is a validating admission plugin, yet it mutates the incoming pod annotations when failing open on a webhook backend error.

It was originally written when all admission plugins ran in ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143449)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143447: kubectl: keep a multi-line custom-columns value inside its table row

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a value printed with `-o custom-columns` contains a line break, everything after the break lands on its own line, so the output gets rows that don't belong to any object. Container termination messages are an ea...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143447)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143445: auth/node: update NodeAuthorizer graph edges when pod volumes change

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143445)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143444: e2e_node: test cgroup reconciliation under steady-state pod churn

Previously, the pod churn test case drained the node to zero pods, created three pods, then deleted them. The 3 -> 0 transition changes the enabled controller set on kubepods.slice (cgroup.subtree_control), which makes systemd re-realize the slice and rewrite its attributes. Real nodes ~always run s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143444)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143443: applyconfiguration-gen: fix setters for shadowed promoted fields

#### What type of PR is this?

/kind bug
/sig api-machinery
/area code-generation

#### What this PR does / why we need it:

When a type declares a field whose name matches a field promoted from an embedded type, `applyconfiguration-gen` can generate the `With<Field>` setter against the promoted fie...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143443)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143442: kubelet: record container volumeMounts in and populate containerStatus.volumeMounts from CRI annotations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143442)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143439: Upgrade cel-go to v0.33.0 and pin environment/cost model versions

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143439)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143438: Flatten waitAndList* methods as midstep to unify snapshot code

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143438)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143437: cluster/gce: filter image families by READY status

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

Add `status=(READY)` to the automatic master and Linux node image-family lookups. Retain architecture filtering, newest-first ordering and explicit image overrides.

Reject empty selections before image u...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143437)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143436: e2e: check the container log in the WebSocket attach test

#### What type of PR is this?

/kind flake
/sig api-machinery

#### What this PR does / why we need it:

- The WebSocket attach test sent stdin the moment the session opened. containerd wires an attach's stdin before its stdout, so the container's echo of that stdin could be written before the sessi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143436)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143434: Manual cherry pick of #143087: kubeadm: fix etcd data rollback and retry the etcd backup

Manual backport of #143087 to release-1.35.

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

This could not be sent through `hack/cherry_pick_pull.sh`. On master the fix lives in `cmd/kubeadm/app/util/files`, a package that does not exist on this branch: `CopyDir` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143434)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143433: Manual cherry pick of #143087: kubeadm: fix etcd data rollback and retry the etcd backup

Manual backport of #143087 to release-1.36.

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

This could not be sent through `hack/cherry_pick_pull.sh`. On master the fix lives in `cmd/kubeadm/app/util/files`, a package that does not exist on this branch: `CopyDir` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143433)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143432: Automated cherry pick of #143087: kubeadm: fix etcd data rollback and retry the etcd backup

Cherry pick of #143087 on release-1.37.

#143087: kubeadm: fix etcd data rollback and retry the etcd backup

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143432)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143431: Extract initWatcherIntervalLocked


/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143431)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143430: kubectl: edit support server side

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Kubectl can support server side features.

#### Which issue(s) this PR is related to:

Fixed kubernetes/kubectl#1350

#### Special notes for your reviewer:

Prior Discussion Slack: https://kubernetes.slack.com/ar...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143430)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143428: Automated cherry pick of #143356: kubeadm: retry etcd member listing on transient errors

Cherry pick of #143356 on release-1.35.

#143356: kubeadm: retry etcd member listing on transient errors

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143428)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143427: Automated cherry pick of #143356: kubeadm: retry etcd member listing on transient errors

Cherry pick of #143356 on release-1.36.

#143356: kubeadm: retry etcd member listing on transient errors

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143427)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23946: integration: Increase parallel tests to one test per CPU

Integration tests capped -test.parallel at floor(CPUs/1.75), treating each cluster's 2 CPUs as host CPUs held for the whole test. On a 4-CPU pod that is 2 tests at a time. Start rarely uses more than one CPU, and the rest of a test is waiting on the apiserver and pods, so those idle slots stretched ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23946)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18928: Update cert-manager addon to v1.21.3 (removes trust in compromised eMudhra CA)

/kind feature

**1. Describe IN DETAIL the feature/behavior/change you would like to see.**

The `certmanager.io` addon (`upup/models/cloudup/resources/addons/certmanager.io/k8s-1.16.yaml.template`) pins cert-manager **v1.19.5** for the controller, cainjector and webhook images, on `master` and on `...

🔗 [Link](https://github.com/kubernetes/kops/issues/18928)

**Metadata:**
- Created: 2026-10-26
- Comments: 0
- State: open

### kubernetes/k8s.io#10124: Add new infra power workspaces

**What this PR does / why we need it**:
- Add new infra power workspaces

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/google/go-containerregistry/blob/main/cm...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10124)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38159: sig-node: add an N2 resource-manager presubmit

Add an optional, manually triggered k/k presubmit for CPU, Memory and Topology Manager node tests on `n2-standard-64`.

The separate image config requests one COS VM and one Ubuntu VM, each with 64 vCPUs and 256 GB of memory. The shared resource-manager config is unchanged; results can inform the pr...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38159)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58346: Termination signals blocked in AppArmor example profile (apparmor.md)

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:** Starting with AppAr...

🔗 [Link](https://github.com/kubernetes/website/issues/58346)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/website#58356: kubeadm implementation details: kubelet client cert has no group since v1.37

### Description

The kubeadm [Implementation details](https://kubernetes.io/docs/reference/setup-tools/kubeadm/implementation-details/) page says of the API server's kubelet client certificate (`apiserver-kubelet-client.crt`): "This certificate should be in the `system:masters` organization". kube...

🔗 [Link](https://github.com/kubernetes/website/pull/58356)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3297: Update go dependencies to the latest versions.

except
- k8s.io/kube-openapi which requires go 1.27
- google.golang.org/api because latest github.com/GoogleCloudPlatform/k8s-cloud-provider does not build with the newest google.golang.org/api

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3297)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/contributor-site#908: Swap kiosk times for SIG etcd and Gateway API for Wednesday november …

Swap kiosk times for SIG etcd and Gateway API for Wednesday, November 11, 2026 for KubeCon NA 2026

For Wednesday, November 11, the updated kiosk times are:
- SIG etcd 1:55 PM - 5:00 PM
- Gateway API 10:15 AM - 1:25 PM

🔗 [Link](https://github.com/kubernetes/contributor-site/pull/908)

**Metadata:**
- Created: 2026-10-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3175: New release for eMudhra certificate compromise

Please release a new version to remove the compromised eMudhra root certificates from /etc/ssl/certs/ca-certificates.crt.

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3175)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/kube-state-metrics#3174: Add kube_volumeattributesclass_parameters metric

**What would you like to be added:**

A `kube_volumeattributesclass_parameters` metric exposing the `.parameters` of `VolumeAttributesClass` objects, as a follow-up to #3119 (which adds the VolumeAttributesClass collector with `info`, `created`, `labels` and `annotations` metrics only). The paramete...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3174)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open

### kubernetes/perf-tests#4515: Fix 3-master HA and restart metric distortions in PerfDash and ClusterLoader2

/sig scalability
/kind bug

Running the 5,000-node GCE scalability suite on 3 control-plane VMs with a mid-test apiserver restart distorts 8 PerfDash metric groups across three failure modes.

### 1. Pooling 3 Replicas Mixes Idle Standbys and Unsummed Limits

- [ ] 1. [Go runtime and container P50](...

🔗 [Link](https://github.com/kubernetes/perf-tests/issues/4515)

**Metadata:**
- Created: 2026-10-26
- Comments: 0
- State: open

### kubernetes/autoscaler#10506: build(deps): bump the patch-updates group across 1 directory with 5 updates

Bumps the patch-updates group with 5 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [go.etcd.io/etcd/api/v3](https://github.com/etcd-io/etcd) | `3.7.2` | `3.7.3` |
| [go.etcd.io/etcd/client/pkg/v3](https://github.com/etcd-io/etcd) | `3.7.2` | `...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10506)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10505: build(deps): bump the kubernetes group across 2 directories with 1 update

Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [sigs.k8s.io/structured-merge-diff/v7](https://github.com/kubernetes-sigs/structured-merge-diff).
Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [sigs.k8s.io/structured-merge...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10505)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10504: build(deps): bump the patch-updates group across 1 directory with 10 updates

Bumps the patch-updates group with 10 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [go.etcd.io/etcd/api/v3](https://github.com/etcd-io/etcd) | `3.6.15` | `3.6.16` |
| [go.etcd.io/etcd/client/pkg/v3](https://github.com/etcd-io/etcd) | `3.6.15`...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10504)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10503: build(deps): bump the non-kubernetes group across 2 directories with 4 updates

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [github.com/prometheus/procfs](https://github.com/prometheus/procfs).
Bumps the non-kubernetes group with 4 updates in the /vertical-pod-autoscaler/test directory: [github.com/prometheus/procfs](https://github.co...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10503)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10502: build(deps): bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10502)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10501: azure: report Azure's reason for failed VM provisioning

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

With `enableFastDeleteOnFailedProvisioning` (#5548), every scale set VM that fails provisioning is reported with the same error code and message. The node group's backoff in the `cluster-autoscaler-status` Config...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10501)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4590: add s3 support to krel

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#deve...

🔗 [Link](https://github.com/kubernetes/release/pull/4590)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubeadm#3334: kinder: add native workflow groups and an extended test suite

Related to #3331.

Add native workflow groups so a shared Kinder entry point can run independent scenarios while preserving their individual execution state and results.

Child workflows execute sequentially in the same process, with isolated variables, artifacts, and JUnit reports. Failed or ti...

🔗 [Link](https://github.com/kubernetes/kubeadm/pull/3334)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway: v1.9.3

# Release Announcement

Check out the [v1.9.3  release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.9.3) to learn more about the release.

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.3)

**Metadata:**
- Version: v1.9.3
- Published: 2026-10-26
- Prerelease: No

### envoyproxy/gateway: v1.8.6

# Release Announcement

Check out the [release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.8.6) to learn more about the release.


🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.8.6)

**Metadata:**
- Version: v1.8.6
- Published: 2026-10-26
- Prerelease: No

### envoyproxy/gateway#10418: ClientTrafficPolicy: VerifyIfGiven with subjectAltNames/certificateHashes/spkiHashes requires a client certificate

*Description*:

`ClientTrafficPolicy` accepts `tls.clientValidation.mode: VerifyIfGiven` together with `subjectAltNames`, `certificateHashes` or `spkiHashes`, but the resulting Envoy config requires a client certificate. Clients that do not present one fail the handshake with `TLSV13_ALERT_CERTIFICA...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10418)

**Metadata:**
- Created: 2026-10-27
- Comments: 0
- State: open

### cncf/toc#2347: [Gov. Review]: Cadence

### Project name

Cadence

### Project link

https://github.com/cadence-workflow/

### Due diligence link

_No response_

### Project contact information

Ender Demirkaya
- Email: enderd@uber.com
- CNCF Slack: Ender Demirkaya
- GitHub: https://github.com/demirkayaender

### Additional information

M...

🔗 [Link](https://github.com/cncf/toc/issues/2347)

**Metadata:**
- Created: 2026-10-26
- Comments: 0
- State: open

### cncf/toc#2346: [Initiative]: Platform Capability Factors White Paper

### Name

Platform Capability Factors White Paper

### Short description

Present a working model on how to scale platform impact to match growing demands (by citizen developers, agents, and regular engineers).

### Responsible group

TAG Infrastructure

### Does the initiative belong to a subprojec...

🔗 [Link](https://github.com/cncf/toc/issues/2346)

**Metadata:**
- Created: 2026-10-26
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-10-27 03:39:28*
