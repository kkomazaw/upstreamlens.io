---
title: "Upstream Github - 2026-08-14"
description: "CNCF upstream activity from github"
pubDate: 2026-08-14
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "needs-triage", "kind/bug", "sig/cloud-provider", "sig/api-machinery", "sig/scheduling", "needs-sig", "pr", "area/test", "lgtm", "size/XS", "kind/flake", "release-note-none", "approved", "sig/cli", "cncf-cla: yes", "sig/testing", "priority/important-longterm", "triage/accepted", "sig/network", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "size/XL", "sig/auth", "sig/instrumentation", "sig/architecture", "do-not-merge/hold", "area/code-generation", "needs-priority", "area/dependency", "wg/device-management", "kind/dependency", "kind/cleanup", "size/L", "needs-ok-to-test", "size/S", "release-note", "size/M", "kind/api-change", "do-not-merge/needs-sig", "sig/apps", "do-not-merge/work-in-progress", "committee/steering", "area/elections", "community", "kind/feature", "website", "priority/backlog", "language/en", "language/ja", "area/localization", "sig/docs", "area/blog", "area/jobs", "area/config", "test-infra", "area/documentation", "area/provider/gcp", "kops", "kubeadm", "kubectl", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "kind/documentation", "area/helm-charts", "do-not-merge/release-note-label-needed", "prometheus", "release", "mysqld_exporter"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10136: VPA updater: add flag to avoid disruptive in-place updates

#### What type of PR is this?

/kind feature

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
/kind regre...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10136)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141365: PodGC misses orphaned pods and NodeAuthorizer leaks permissions when node names are recycled

### What happened?

When operators delete a Node and create a replacement Node with the same name
(a common pattern in autoscaling, OS upgrades, and bare-metal reprovisioning)
before the system cleans up stale pods:

* **PodGC misses orphaned pods**: `PodGCController.gcOrphaned` checks
  `existingNo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141365)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/kubernetes#141364: Node with empty `spec.providerID` and no cloud provider VM does not get deleted by the CCM

### What happened?

First noticed the bug on a cluster where a node had empty `spec.providerID`. This happened as the cloud-controller-manager was unable to populate the providerID due to an unrelated issue.
CCM logs showed this in the log message, hinting that the above was indeed happening
```
202...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141364)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/kubernetes#141362: Is Events API eligible for conversion to Declarative Validation?

Events has two API groups, one in core one in the events group.

During review of https://github.com/kubernetes/kubernetes/pull/136844 @liggitt and I were reminded that events has usual handwritten validation that depends heavily on which API group the resource was first create with.

Because the va...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141362)

**Metadata:**
- Created: 2026-08-13
- Comments: 3
- State: open

### kubernetes/kubernetes#141354: scheduler: InterPodAffinity QueueingHint skips pod-deletion events that make required self-affinity satisfiable; pod stays Pending until unschedulable-pods flush

### What happened?

A Pod whose only scheduling blocker was `requiredDuringSchedulingIgnoredDuringExecution` pod affinity remained `Pending` with **zero scheduling retries for ~5 minutes** after the cluster event that made it schedulable (deletion of the affinity peer), because the InterPodAffinity ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141354)

**Metadata:**
- Created: 2026-08-13
- Comments: 3
- State: open

### kubernetes/kubernetes#141353: ValidateWebhookService is called with (name, namespace) argument order but declared as (namespace, name), causing mislabeled validation errors

### What happened?

`ValidateWebhookService` in `staging/src/k8s.io/apiserver/pkg/util/webhook/validation.go` is declared with the parameter order `(namespace, name string)`:

```go
func ValidateWebhookService(fldPath *field.Path, namespace, name string, path *string, port int32) field.ErrorList {
 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141353)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/kubernetes#141350: kubelet drops a Running pod's PVC volume stats (`.pods[].volume[]` and `kubelet_volume_stats_*`) while all its containers are momentarily terminated (CrashLoopBackOff)

### What happened?

On a node whose kubelet uses the **cadvisor** stats provider, a pod that is in
phase `Running` but has **all** of its application containers momentarily
terminated at once — the classic `CrashLoopBackOff` state, or the gap between
restart back-offs — loses the filesystem-usage st...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141350)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/kubernetes#141361: Add a wait for 2 ReplicaSets to show up in test-cmd

#### What type of PR is this?
/kind flake
/sig cli

#### What this PR does / why we need it:
In https://github.com/kubernetes/kubernetes/blob/52ba90138eb40cab0987dac73e05c838149bdd1c/test/cmd/apps.sh#L481-L486 we modify deployment's image and immediately after check its rollout history. In some...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141361)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141360: Bump to otel v1.45.0

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

This bumps to the latest release of otel and related projects, and bumps to the latest semver (see commits for details).

#### Which issue(s) this PR is related to:

N/A

#### Special notes for you...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141360)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141359: apiserver/cacher: interface refactor prep for lazy iteration of watch cache snapshots

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141359)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141358: Enable group snapshot tests in all configurations

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Volume group snapshots are GA in Kubernetes 1.36 and the external-snapshotter 8.6. Enable them in all test configurations / jobs.

#### Which issue(s) this PR is related to:
<!--
Please link relevant issues...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141358)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141357: Fix swapped name/namespace args to ValidateWebhookService

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141357)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141352: Compare hugepage divisibility in exact decimal

#### What type of PR is this?

/kind bug
/sig node
/sig api-machinery

#### What this PR does / why we need it:

`IsHugePageResourceValueDivisible` compares a hugepage request against its page size through `Quantity.Value()`. `Value()` has two different failure modes outside the int64 range, and thi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141352)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141351: Enforce pod UID in kubelet exec and run routes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The UID-qualified kubelet streaming routes `/exec/{namespace}/{pod}/{uid}/{container}`
and `/run/{namespace}/{pod}/{uid}/{container}` accept a pod UID but do not enforce it.

`findContainer` resolves the pod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141351)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141349: core/validation: check integer resources exactly to avoid int64 overflow

#### What type of PR is this?

/kind bug
/sig apps

#### What this PR does / why we need it:

`ValidateResourceQuantityValue` checks that an integer resource (for example an extended resource) has a whole-number value with `value.MilliValue()%1000 == 0`. `MilliValue()` multiplies by 1000, so it wrap...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141349)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141348: limitranger: compare resource quantities exactly to avoid int64 overflow

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

LimitRanger enforces a LimitRange's min, max, and limit/request ratio by projecting each quantity to int64 with `requestLimitEnforcedValues`, which uses `Value()` or `MilliValue()`. Those accessors...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141348)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/community#9117: Update candidate bio length

Brings a 2026 candidate bio within the word limit.

Saw this issue on a previous run: https://storage.googleapis.com/kubernetes-ci-logs/pr-logs/pull/community/9116/pull-community-verify/2087966244337618944/build-log.txt on https://github.com/kubernetes/community/pull/9116
```
Verifying verify-st...

🔗 [Link](https://github.com/kubernetes/community/pull/9117)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56973: Document single-stack IPv6 cluster set up

**This is a Feature Request**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
I would like t...

🔗 [Link](https://github.com/kubernetes/website/issues/56973)

**Metadata:**
- Created: 2026-08-13
- Comments: 3
- State: open

### kubernetes/website#56966: Broken Link on "Install Drivers and Allocate Devices with DRA"


source page
https://kubernetes.io/docs/tutorials/cluster-management/install-use-dra/#claim-resources-pod


Link text(ResourceSlices):
API group including [DeviceClasses], [ResourceSlices]

bad link: https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/resource-slice-v1beta1/

corr...

🔗 [Link](https://github.com/kubernetes/website/issues/56966)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/website#56963: [ja] Translate content/en/blog/_posts/2026/how-to-pretty-print-kubernetes-yaml-as-kyaml.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->
- Translate "[How to Pretty-Print Your Kubernetes YAML as KYAML and Why...

🔗 [Link](https://github.com/kubernetes/website/issues/56963)

**Metadata:**
- Created: 2026-08-13
- Comments: 1
- State: open

### kubernetes/website#56977: docs: say three annotations in the custom metrics exporter post

the YAML lists scrape, port, and path — that's three, not two.

Fixes #56954

/kind bug
/sig docs
/language en

🔗 [Link](https://github.com/kubernetes/website/pull/56977)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56965: Update links to KubernetesSeedProvider and configurations

Fix broken links due to refactoring on the github code base

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kube...

🔗 [Link](https://github.com/kubernetes/website/pull/56965)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37682: dra-driver-cpu: cover node allocatable mappings enabled and disabled cases in e2e lanes.

Pin DRACPU_E2E_NODE_ALLOCATABLE_MAPPING explicitly in every e2e presubmit: enabled on the amd64 lanes, disabled on the arm64 lanes. The feature itself is not architecture dependent, but enabling in some lanes so that we have both configs covered without adding new lanes.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37682)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37677: nrc: test trigger for testgrid-email-alert in periodics-e2e* prow job

ref: https://github.com/kubernetes-sigs/node-readiness-controller/pull/390

/assign @ajaysundark 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37677)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18685: gce: open the etcd events metrics port in the node-to-master firewall

open the etcd events metrics port in the node-to-master firewall

xref: https://github.com/kubernetes/kops/pull/18568

🔗 [Link](https://github.com/kubernetes/kops/pull/18685)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubeadm#3328: add new EncryptionAlgorithms for crypto/mldsa

`crypto/mldsa` in planned for Go 1.27
- https://github.com/golang/go/issues/77626

we could add support for new values exposing some of the ML-DSA modes:
- https://github.com/kubernetes/kubernetes/blob/master/cmd/kubeadm/app/apis/kubeadm/v1beta4/types.go#L582-L592
- https://csrc.nist.gov/pubs/fips/2...

🔗 [Link](https://github.com/kubernetes/kubeadm/issues/3328)

**Metadata:**
- Created: 2026-08-13
- Comments: 0
- State: open

### kubernetes/kubectl#1870: kubectl completion fish - label support required

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:

When running fish shell, currently completions do not support label support yet.

For example:

`kubectl get pods -l app=` # tab tab

I need a feature, where you can press tab tab when d...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1870)

**Metadata:**
- Created: 2026-08-13
- Comments: 2
- State: open

### kubernetes/autoscaler#10137: VPA InPlace: Updater repeatedly detects a stale OOM as a quick OOM

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
/area vertical-pod-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Ad...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10137)

**Metadata:**
- Created: 2026-08-13
- Comments: 1
- State: open

### kubernetes/autoscaler#10135: Add status condition to report conflicting active VPAs targeting the same resource

Multiple `VerticalPodAutoscaler` objects with an active update mode (`updateMode != "Off"`) targeting the same workload can cause unexpected behavior:

* **Admission Webhook:** Pod resource requests may be mutated non-deterministically depending on which VPA is processed.
* **Updater:** Multiple VPA...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10135)

**Metadata:**
- Created: 2026-08-13
- Comments: 3
- State: open

### kubernetes/autoscaler#10139: docs: point migrated cloud provider READMEs at sigs.k8s.io

clusterapi, externalgrpc, and kwok moved over to kubernetes-sigs/cluster-autoscaler. a few README / chart / policy links still pointed at the old in-tree paths and 404 now.

/kind documentation
/area cluster-autoscaler

Fixes #10105

#### Does this PR introduce a user-facing change?
```release-note
...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10139)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10138: Index VPAs by targetRef to speed up admission-controller matching


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add a TargetRefIndex informer index to the shared VPA informer, and change the Matcher to take a cache.Indexer and look up candidate VPAs directly via ByIndex, making the lookup O(1) in the number of VPAs...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10138)

**Metadata:**
- Created: 2026-08-13
- Comments: undefined
- State: open
- Draft: No

### prometheus/mysqld_exporter: 0.20.0 / 2026-08-12

Changes:

* [FEATURE] Add tls-min-version and tls-max-version config options #1027
* [FEATURE] Add an optional tls-server-name config option used to verify the server hostname #1044
* [FEATURE] Add `--exporter.query_timeout` to apply a per-scraper timeout so a single slow scraper cannot cancel the others sharing the request context #1025
* [ENHANCEMENT] Add distroless Docker image variant #1030
* [ENHANCEMENT] Publish images to GHCR #1031
* [ENHANCEMENT] Raise the default per-scrape conne...

🔗 [Link](https://github.com/prometheus/mysqld_exporter/releases/tag/v0.20.0)

**Metadata:**
- Version: v0.20.0
- Published: 2026-08-13
- Prerelease: No


---

*This content was automatically collected on 2026-08-14 01:43:44*
