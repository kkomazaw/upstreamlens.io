---
title: "Upstream Github - 2026-10-10"
description: "CNCF upstream activity from github"
pubDate: 2026-10-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "kubectl", "sig/scheduling", "wg/workload-aware-scheduling", "kind/feature", "pr", "size/S", "sig/apps", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/contains-merge-commits", "do-not-merge/needs-kind", "sig/network", "area/kube-proxy", "release-note", "size/L", "area/test", "sig/api-machinery", "release-note-none", "sig/testing", "area/kubelet", "area/apiserver", "sig/node", "sig/instrumentation", "area/stable-metrics", "sig/storage", "size/M", "kind/api-change", "priority/important-soon", "lgtm", "approved", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "kind/cleanup", "do-not-merge/needs-sig", "size/XS", "do-not-merge/work-in-progress", "size/XXL", "sig/windows", "do-not-merge/hold", "kind/flake", "wg/device-management", "good first issue", "help wanted", "language/en", "triage/accepted", "website", "language/ko", "area/localization", "sig/docs", "language/zh", "perf-tests", "area/jobs", "area/images", "area/config", "test-infra", "area/cluster-autoscaler", "autoscaler", "area/provider/gce", "area/provider/azure", "area/vertical-pod-autoscaler", "size/XL", "area/helm-charts", "containerd", "release", "overlaybd", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142898: e2e: test KEP-4006 WebSocket exec, attach and port-forward without SPDY fallback

Adds e2e tests for exec, attach and port-forward over the KEP-4006 WebSocket protocols (`v5.channel.k8s.io` and the `SPDY/3.1+portforward.k8s.io` tunnel), with no SPDY fallback, to be promoted to conformance for GA.

Why new tests: the existing ones don't reach these protocols. The port-forward test...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142898)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142897: apiserver, kubelet: graduate the KEP-4006 WebSocket streaming metrics to BETA

Promotes the KEP-4006 WebSocket streaming metrics from ALPHA to BETA for GA.

- `apiserver_stream_translator_requests_total`
- `apiserver_stream_tunnel_requests_total`
- `apiserver_websocket_streaming_requests_total`
- `kubelet_websocket_streaming_requests_total`

/kind feature
/sig api-machinery
/s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142897)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142885: [WIP][KEP-5359] WorkloadControlledSwap: limits.swap API and swap-aware in-place pod resize

**What type of PR is this?**

/kind feature
/kind api-change

**What this PR does / why we need it**:

End-to-end POC for KEP-5359 (WorkloadControlledSwap) so the API shape and the kubelet / in-place-resize interaction can be reviewed together. Two commits:

1. `api:` `resources.limits.swap...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142885)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10406: [GCE] Respect operationWaitTimeout in WaitForOperation

#### What type of PR is this?

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10406)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10405: azure: add DRA node label

#### What type of PR is this?

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10405)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubectl#1889: kuberc defaults ignored with attached shorthand values like -nmonitoring

**What happened**:

With `interactive: "true"` set as a kuberc default for `delete`, `kubectl delete` sometimes deletes without asking for confirmation, depending on how `-n` is written.

```yaml
# ~/.kube/kuberc
apiVersion: kubectl.config.k8s.io/v1beta1
kind: Preference
defaults:
  - command: delet...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1889)

**Metadata:**
- Created: 2026-10-09
- Comments: 1
- State: open

### kubernetes/kubernetes#142886: kube-scheduler waits indefinitely when GenericWorkload is enabled but its API is disabled

## What happened?

Enabling `GenericWorkload=true` on the control-plane components without enabling `scheduling.k8s.io/v1beta1` on kube-apiserver leaves kube-scheduler running but unready. Scheduling is blocked for ordinary Pods, even when no Workloads or PodGroups have been created.

The API server...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142886)

**Metadata:**
- Created: 2026-10-09
- Comments: 3
- State: open

### kubernetes/kubernetes#142878: kube-scheduler: a hung HTTP extender limits scheduling to one pod per httpTimeout, even with ignorable: true

### What would you like to be added?

Stop calling an HTTP extender for a while after its calls keep failing, so that a hung extender does not cost every pod a full `httpTimeout`.

Today every scheduling cycle calls every interested extender synchronously and waits until the call returns or times ou...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142878)

**Metadata:**
- Created: 2026-10-09
- Comments: 1
- State: open

### kubernetes/kubernetes#142900: update

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142900)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142899: kube-proxy: check for the iptables nfacct match before using it

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In iptables mode, kube-proxy decides whether to add `-m nfacct --nfacct-name ...` rules based only on whether the nfacct netlink subsystem (nfnetlink_acct) works. That doesn't guarantee the iptables `nfacct` match (x...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142899)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142896: Migrate `CSIStorageCapacity.NodeTopology` to declarative validation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142896)

**Metadata:**
- Created: 2026-10-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142895: Automated cherry pick of #142234: kubelet: reconcile node status on allocatable uninitialized nodes

Cherry pick of #142234 on release-1.35.

#142234: kubelet: reconcile node status on allocatable uninitialized nodes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142895)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142894: Automated cherry pick of #142234: kubelet: reconcile node status on allocatable uninitialized nodes

Cherry pick of #142234 on release-1.36.

#142234: kubelet: reconcile node status on allocatable uninitialized nodes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142894)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142893: feat: integrate contextual logger with volume plugins and related com…

…ponents

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142893)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142891: Migrate `CSIStorageCapacity.StorageClassName` to declarative validation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142891)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142890: build ginkgo & go-runner as a static binary

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142890)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142889: apiserver: remove dead metadata.namespace branch from MatcherIndex

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

[kubernetes/kubernetes#129933](https://github.com/kubernetes/kubernetes/pull/129933) deprecated the pod namespace indexer in favor of B-tree prefix scans.

#### Which issue(s) this PR is related to:

N/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142889)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142888: test/e2e_node: remove OOMScoreAdj feature label

#### What type of PR is this?

/kind cleanup
/sig node
/area test

#### What this PR does / why we need it:

Removes the `OOMScoreAdj` e2e `Feature` label. It describes a topic ("tests aiming to verify oom_score functionality"), not a special environment, so it falls under case 1 of #134172 (label u...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142888)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142887: WIP: test write-throughput 2000 QPS

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Temporary PR to verify the 2,000 QPS write-throughput benchmark configuration (`pull-kubernetes-benchmark-write-throughput`). Do not merge.

#### Which issue(s) this PR fixes:
N/A

#### Special notes for your revie...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142887)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142884: Automated cherry pick of #142234: kubelet: reconcile node status on allocatable uninitialized nodes

Cherry pick of #142234 on release-1.37.

#142234: kubelet: reconcile node status on allocatable uninitialized nodes

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142884)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142883: InPlacePodLevelResourcesVerticalScaling: don't read pod cgroups for pod status on Windows



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142883)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142877: Implement support for Limit and reproduce #94002

/kind feature

/cc @wojtek-t @mborsz

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142877)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142876: e2e: retry CockroachDB reads instead of failing on the first exec error

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Found when digging into ci failures in:
https://testgrid.k8s.io/amazon-ec2-release#ec2-master-scale-correctness-100

`[sig-apps] StatefulSet Deploy clustered applications should creating a working Cockroac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142876)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142875: DRA: use ktesting in staging repo

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This consolidates testing to ktesting + gomega with "g" as shorthand. The advantage is less and (at least subjectively) more readable code.

    10 files changed, 562 insertions(+), 765 deletions(-)

#### Which i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142875)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142872: Measure allocation per request

/kind feature

Implement the allocation measurement proposed in https://github.com/kubernetes/kubernetes/issues/142803 as benchmark. Used benchmark to avoid rolling custom allocation measurements, but it means we will need a dedicated periodic that just runs this benchmark.

/cc @wojtek-t @p0lyn...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142872)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57969: Broken in-page links in the Dynamic Resource Allocation concept pages

**This is a Bug Report**

**Problem:**

The Dynamic Resource Allocation concept page was split into several pages under `content/en/docs/concepts/resource-management/dynamic-resource-allocation/`.
A in-page link still point to anchors that moved to a different page, so clicking them does nothing.

*...

🔗 [Link](https://github.com/kubernetes/website/issues/57969)

**Metadata:**
- Created: 2026-10-09
- Comments: 5
- State: open

### kubernetes/website#57967: [ko] Update content/ko/community/_index.html

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/community/_index.html` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/community/
- English: https://kubernetes.io/community/

**Why is this nee...

🔗 [Link](https://github.com/kubernetes/website/issues/57967)

**Metadata:**
- Created: 2026-10-09
- Comments: 1
- State: open

### kubernetes/website#57968: (zh-cn) Fix translation in update tutorial

## Motivation

This page is part of the Kubernetes Basics tutorial, so clear and consistent wording helps readers understand how rolling updates work.

The current Chinese translation of "Pods that are serving requests" may be interpreted as "Pods that are currently processing requests." This could ...

🔗 [Link](https://github.com/kubernetes/website/pull/57968)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4460: [release-1.36] Add opt-in kubelet measurements module to the load test

Cherry pick of #4455 on release-1.36.

#4455: Add opt-in kubelet measurements module to the load test

The release-1.36 kops 100-node scalability lanes (gce and ec2) already set `PROMETHEUS_SCRAPE_KUBELETS` and `CL2_ENABLE_KUBELET_MEASUREMENTS` through the job presets (kubernetes/test-infra#38017), ...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4460)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38030: add kubetest2 local presubmit job

required for https://github.com/kubernetes-sigs/kubetest2/pull/354

also fixing a small bug from #37979 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38030)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38025: Revert "temp pin the containerd version to 2.3.5"

This reverts commit 9a1d104197e8fd34af6d649e1962dc14b405e94c.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38025)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10409: [cluster-autoscaler-release-1.34] Fix unmanaged GPU node blocking scaling

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This manually ports https://github.com/kubernetes-sigs/cluster-autoscaler/pull/153 to `cluster-autoscaler-release-1.34`.

When a GPU-labeled node outside an autoscaled node group does not report GPU allocatable capac...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10409)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10408: [cluster-autoscaler-release-1.35] Fix unmanaged GPU node blocking scaling

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This manually ports https://github.com/kubernetes-sigs/cluster-autoscaler/pull/153 to `cluster-autoscaler-release-1.35`.

When a GPU-labeled node outside an autoscaled node group does not report GPU allocatable capac...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10408)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10407: [cluster-autoscaler-release-1.36] Fix unmanaged GPU node blocking scaling

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This manually ports https://github.com/kubernetes-sigs/cluster-autoscaler/pull/153 to `cluster-autoscaler-release-1.36`.

When a GPU-labeled node outside an autoscaled node group does not report GPU allocatable capac...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10407)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10404: AEP-9936: implement per-VPA initial delay window

#### What type of PR is this?

/kind feature
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

Implements AEP-9936. Adds `updatePolicy.initialDelaySeconds` behind a new alpha feature gate, `VPAInitialDelay`. For that many seconds after the VPA is created, the updater and admis...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10404)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- 75931f1: fix UB when opening an empty sparse layer (youhwsh) [#453](https://github.com/containerd/overlaybd/pull/453)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-09
- Prerelease: Yes

### cncf/toc#2322: chore: remove Project Reviews Subproject from tags metadata

## Summary

Transfers the `tags.yaml` change from #2295 into a separate PR so the metadata update can be reviewed independently from the documentation and workflow changes.

- Removes only the Project Reviews Subproject registration from `tags.yaml`.
- Preserves the exact 45-line deletion from #2295...

🔗 [Link](https://github.com/cncf/toc/pull/2322)

**Metadata:**
- Created: 2026-10-09
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-10 04:16:06*
