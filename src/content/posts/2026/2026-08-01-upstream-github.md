---
title: "Upstream Github - 2026-08-01"
description: "CNCF upstream activity from github"
pubDate: 2026-08-01
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-sig", "needs-triage", "sig/windows", "kind/failing-test", "sig/node", "kind/flake", "kind/bug", "pr", "size/M", "sig/apps", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "size/XS", "kind/api-change", "release-note-none", "area/code-generation", "do-not-merge/needs-sig", "area/test", "area/kubectl", "release-note", "sig/cli", "sig/testing", "priority/backlog", "sig/api-machinery", "size/L", "kind/feature", "sig/instrumentation", "do-not-merge/hold", "kind/cleanup", "sig/scheduling", "size/XL", "approved", "priority/critical-urgent", "area/kubelet", "lgtm", "size/S", "triage/accepted", "sig/storage", "area/cluster-autoscaler", "area/provider/azure", "autoscaler", "do-not-merge/work-in-progress", "needs-rebase", "kube-state-metrics", "language/en", "website", "good first issue", "help wanted", "language/ja", "area/localization", "sig/docs", "language/zh", "release", "cloud-provider-openstack", "area/documentation", "area/nodeup", "kops", "perf-tests", "containerd", "overlaybd", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141085: sig-windows-gce Security Context test are failing

### Which jobs are failing?

[gce-windows-2019-containerd-master](https://testgrid.k8s.io/sig-windows-gce#gce-windows-2019-containerd-master) and [gce-windows-2022-containerd-master](https://testgrid.k8s.io/sig-windows-gce#gce-windows-2022-containerd-master) are failing

### Which tests are failing?...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141085)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/autoscaler#10081: Add capacitybuffers count metric

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
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10081)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/kubernetes#141087: kubectl rollout history: printer errors silently dropped when listing all revisions with -o flag

### What happened?

When running kubectl rollout history deployment/foo -o yaml (without --revision), errors returned by printer.PrintObj are silently discarded. The loop that iterates over all revisions calls printer.PrintObj(historyInfo[k], o.Out) without checking the error return value, so a brok...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141087)

**Metadata:**
- Created: 2026-07-31
- Comments: 3
- State: open

### kubernetes/kubernetes#141073: [Flaking Test] [sig-node] Probing restartable init container liveness probe flake on capz-windows-master

### Which jobs are flaking?

ci-kubernetes-e2e-capz-master-windows


### Which tests are flaking?

[sig-node] Probing restartable init container [BeforeEach] should *not* be restarted with a non-local redirect http liveness probe [NodeConformance] [sig-node, NodeConformance]

### Since when has it b...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141073)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/kubernetes#141072: [Flaking][sig-node] k8s.io/kubernetes/test/integration/dra.all

### Which jobs are flaking?

* sig-release-master-blocking
* integration-arm64-master

### Which tests are flaking?

* [[sig-node] k8s.io/kubernetes/test/integration/dra.all](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master/2083061635940880384)

### Since wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141072)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/kubernetes#141069: Memory Manager pod-scope restore compares container blocks with the pod request

### What happened?

With pod-scope Topology Manager, after a kubelet restart, Memory Manager finds a restored container allocation and calls `regenerateHints` with that container's blocks and the whole Pod memory request.

For a multi-container Pod, those values differ, so `regenerateHints` returns ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141069)

**Metadata:**
- Created: 2026-07-31
- Comments: 3
- State: open

### kubernetes/kubernetes#141089: Fix node lifecycle controller to mark pods NotReady on False to Unknown transition

Fix node lifecycle controller to mark pods not ready when node transitions from False to Unknown

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-co...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141089)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141086: Add atomic struct markers to EventSeries

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Marks the versioned `EventSeries` types as atomic so the generated OpenAPI schemas include `x-kubernetes-map-type=atomic`. This prevents managed-fields and `FieldsV1` from representing `EventSeries` with a `"."` fiel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141086)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141084: kubectl wait: support !=, <= and >= in --for=jsonpath filter expressions

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`--for=jsonpath` rejects any filter expression that uses `!=`, `<=` or `>=`. Only `==` survives the split that separates the expression from its expected value.

```
$ kubectl wait --for='jsonpath={.status.conditions...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141084)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141083: apiserver/client-go: make protobuf optional with toggles

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141083)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141081: Unify code for PodGroups and CompositePodGroups in workloadForest

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141081)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141079: workqueue: make ShutDownWithDrain wait for queued items

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`ShutDownWithDrain` only waited until `processing` was empty. After `Done` on the last in-flight item, other keys could still sit in the underlying queue with `processing` empty, so drain returned ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141079)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141078: cache: handle pod UID mismatch in UpdatePod

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When an assigned pod is deleted and recreated with the same name, an informer may collapse the delete and add events into an update event. Previously, [UpdatePod]( https://github.com/kubernetes/kubernetes/blob/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141078)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141077: memorymanager: preserve restored pod allocations

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Prevents Memory Manager from reapplying checkpoint-restored pod-level allocations during post-restart admission. Adds regression coverage to ensure restored pod, container, and machine state remains unchang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141077)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141071: scheduler: refactor entity key extraction logic

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141071)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141070: memorymanager: restore pod hints from pod allocation

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Restores pod-scope topology hints from the pod-level memory allocation instead of a single container allocation. Adds a restart regression test for a multi-container Pod.

#### Which issue(s) this PR is related to:

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141070)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141068: kubelet: pass logger to swap utilities

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Passes an explicit `klog.Logger` to the swap utilities instead of creating loggers from `context.TODO()` internally. The container manager reuses its contextual logger. The emptyDir call remains at a legacy `volu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141068)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10086: [cluster-autoscaler-release-1.36] fix: honor DisableAzureStackCloud in Azure client factory

Manual backport of #10082.

Release 1.36's VMSS delete wrapper uses `armcompute/v6`, so this backport adapts the regression test from the main branch's `v7` types to `v6`. The production fix is unchanged.

Without the fix, environments configured as `AzureStackCloud` with `disableAzureStackCloud: tr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10086)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10085: [cluster-autoscaler-release-1.35] fix: honor DisableAzureStackCloud in Azure client factory

Manual backport of #10082, replacing the failed automated backport in #10083.

The automated cherry-pick copied the regression test's `armcompute/v7` types, while release 1.35's VMSS delete wrapper uses `armcompute/v6`. This backport adapts the test to `v6`; the production fix is unchanged.

Without...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10085)

**Metadata:**
- Created: 2026-08-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10084: [cluster-autoscaler-release-1.36] fix: honor DisableAzureStackCloud in Azure client factory

This is an automated cherry-pick of #10082

/assign jackfrancis

```release-note
Fixed Azure VMSS instance deletion when `disableAzureStackCloud` is enabled.
```

/kind bug

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10084)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10083: [cluster-autoscaler-release-1.35] fix: honor DisableAzureStackCloud in Azure client factory

This is an automated cherry-pick of #10082

/assign jackfrancis

```release-note
Fixed Azure VMSS instance deletion when `disableAzureStackCloud` is enabled.
```

/kind bug

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10083)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3053: Release v2.20.0

Prepare release v2.20.0


🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3053)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/website#56701: Document irregularities around core resources' /status subresource writing

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**

The /status subresource is typica...

🔗 [Link](https://github.com/kubernetes/website/issues/56701)

**Metadata:**
- Created: 2026-07-31
- Comments: 3
- State: open

### kubernetes/website#56700: [ja] Translate content/en/docs/reference/glossary/ephemeral-container.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/ephemeral-container.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced...

🔗 [Link](https://github.com/kubernetes/website/issues/56700)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/website#56699: [ja] Translate content/en/docs/reference/glossary/operator-pattern.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/operator-pattern.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by...

🔗 [Link](https://github.com/kubernetes/website/issues/56699)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/website#56698: [ja] Translate content/en/docs/reference/glossary/preemption.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/preemption.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by 4 Jap...

🔗 [Link](https://github.com/kubernetes/website/issues/56698)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/website#56697: [ja] Translate content/en/docs/reference/glossary/object.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/object.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by 5 Japanes...

🔗 [Link](https://github.com/kubernetes/website/issues/56697)

**Metadata:**
- Created: 2026-07-31
- Comments: 5
- State: open

### kubernetes/website#56693: Broken tutorial links: old redis-master and redis-slave examples return 404

Several documentation pages still contain `kubectl apply` instructions pointing to the old `redis-master-*.yaml` and `redis-slave-*.yaml` example files (which were renamed to `leader` and `follower` for inclusive language). These links now return HTTP 404, breaking the tutorials for readers.

This a...

🔗 [Link](https://github.com/kubernetes/website/issues/56693)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open

### kubernetes/website#56691: [zh-cn]sync server-address-by-client-cidr-v1-meta service-reference-v1-admissionregistration

content/zh-cn/docs/reference/kubernetes-api/definitions/server-address-by-client-cidr-v1-meta.md
content/zh-cn/docs/reference/kubernetes-api/definitions/service-reference-v1-admissionregistration.md

🔗 [Link](https://github.com/kubernetes/website/pull/56691)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56690: [zh-cn]sync field-selector-requirement-v1-meta micro-time-v1-meta

content/zh-cn/docs/reference/kubernetes-api/definitions/field-selector-requirement-v1-meta.md
content/zh-cn/docs/reference/kubernetes-api/definitions/micro-time-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56690)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56689: [zh-cn]sync time-v1-meta role-ref-v1-rbac

content/zh-cn/docs/reference/kubernetes-api/definitions/role-ref-v1-rbac.md
content/zh-cn/docs/reference/kubernetes-api/definitions/time-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56689)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56688: [zh-cn]sync api-resource-v1-meta

content/zh-cn/docs/reference/kubernetes-api/definitions/api-resource-v1-meta.md

🔗 [Link](https://github.com/kubernetes/website/pull/56688)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.36.2

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.36.2)

**Metadata:**
- Version: openstack-cinder-csi-2.36.2
- Published: 2026-07-31
- Prerelease: No

### kubernetes/cloud-provider-openstack#3155: [cinder-csi-plugin] Configure topology with --with-topology

**What this PR does / why we need it**:

The Cinder chart currently applies `csi.provisioner.topology` only to the external-provisioner feature gate, so the value does not control the Cinder driver topology capabilities.

This uses the existing value for `--with-topology` in both Cinder driver conta...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3155)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18654: Narrow instance cloud permissions to actual consumers

The removal of gossip DNS and protokube in kOps 1.37 lets us narrow instance permissions and credentials to their actual consumers.
- Stop exporting DigitalOcean, Hetzner, and Scaleway API credentials to control-plane user data and the nodeup environment file. Their only node-local consumer was pro...

🔗 [Link](https://github.com/kubernetes/kops/pull/18654)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4249: watch-list: switch informer job to request-benchmark

tested locally.

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4249)

**Metadata:**
- Created: 2026-07-31
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- 7739d13: users and logos (Huiba Li) [#433](https://github.com/containerd/overlaybd/pull/433)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-07-31
- Prerelease: Yes

### cncf/toc#2254: [TAG Operational Resilience] New TLs are not added automatically to TAG OR Leads Bi-weekly meetings

As per [chat thread](https://cloud-native.slack.com/archives/C0912AJ1Q2W/p1784807261472539), the new TAG Leads added in 2026 are not added to the recurring event TAG OR Leads Bi-weekly meetings in the calendar https://openprofile.dev/my-meetings. 
Although the TAG Lead have public LFX profiles, thes...

🔗 [Link](https://github.com/cncf/toc/issues/2254)

**Metadata:**
- Created: 2026-07-31
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-08-01 02:33:29*
