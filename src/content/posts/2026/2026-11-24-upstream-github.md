---
title: "Upstream Github - 2026-11-24"
description: "CNCF upstream activity from github"
pubDate: 2026-11-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "needs-sig", "area/test", "sig/node", "help wanted", "priority/important-longterm", "kind/failing-test", "triage/accepted", "wg/device-management", "priority/important-soon", "kind/flake", "pr", "release-note", "size/XXL", "kind/api-change", "kind/feature", "cncf-cla: yes", "needs-priority", "area/apiserver", "size/M", "needs-ok-to-test", "sig/network", "area/kube-proxy", "size/L", "release-note-none", "approved", "kind/cleanup", "size/XL", "area/release-eng", "sig/release", "do-not-merge/hold", "size/S", "sig/auth", "sig/apps", "sig/testing", "area/kubectl", "sig/cli", "lgtm", "cncf-cla: no", "area/kubelet", "sig/scheduling", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "sig/instrumentation", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "do-not-merge/work-in-progress", "area/code-generation", "sig/cloud-provider", "area/dependency", "kind/dependency", "sig/scalability", "area/nodeup", "area/api", "kops", "area/channels", "size/XS", "community", "area/config", "test-infra", "area/testgrid", "area/jobs", "kubeadm", "area/cluster-autoscaler", "area/provider/azure", "autoscaler", "area/addon-resizer", "ok-to-test", "sig/docs", "language/en", "website"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144413: Add more integration and unit tests to cover NNN clearing logic in podgroup scheduling

#### What type of PR is this?
/kind cleanup

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-->

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144413)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubeadm#3340: Update SECURITY_CONTACTS with new approvers and leads

Added new primary contacts for kubeadm approvers and additional contacts for SIG Cluster Lifecycle.

/cc @neolit123 @HirazawaUi @carlory @SataQiu 

🔗 [Link](https://github.com/kubernetes/kubeadm/pull/3340)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10719: [cluster-autoscaler-release-1.36] azure: enable E2E for CAPZ release-1.28

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
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10719)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10718: [cluster-autoscaler-release-1.35] azure: enable E2E for CAPZ release-1.28

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
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10718)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10716: Enable dependabot to manage release branches

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
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10716)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144433: remotecommand: StreamWithContext returns on cancellation before it stops writing to Stdout

#### What happened?

When the context ends, `StreamWithContext` closes the connection and returns `ctx.Err()` without waiting for the goroutine that runs the stream ([websocket.go](https://github.com/kubernetes/kubernetes/blob/43cbb94ee845ad387717fe851bf5f421b7284329/staging/src/k8s.io/client-go/too...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144433)

**Metadata:**
- Created: 2026-11-23
- Comments: 1
- State: open

### kubernetes/kubernetes#144432: StatefulSet controller builds a Pod object for every ordinal in spec.replicas on each sync leading to high memory utilization on KCM

### What happened?

We observed a failure mode where a StatefulSet with a very large `spec.replicas` can cause kube-controller-manager very high memory utilization and even OOM. 

The problem is from `defaultStatefulSetControl.updateStatefulSet` in `pkg/controller/statefulset/stateful_set_control.go...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144432)

**Metadata:**
- Created: 2026-11-23
- Comments: 2
- State: open

### kubernetes/kubernetes#144431: DRA Node Allocatable Resources: hugepages e2e cases never run in CI

### What happened?

The two hugepages cases in the DRA Node Allocatable Resources e2e tests
(`test/e2e/dra/dra_node_allocatable_resources.go`) are not exercised by any CI job:

- `verifies cgroup inflation and container OOM adjustment with hugepages overhead mapping`
- `verifies cgroup inflation and...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144431)

**Metadata:**
- Created: 2026-11-23
- Comments: 5
- State: open

### kubernetes/kubernetes#144421: [Flaking Test] [sig-node] Pod InPlace Resize Memory-Backed Volume: exec into the container fails with "connection reset by peer"

### Which jobs are flaking?

- `ci-kubernetes-e2e-gci-gce` (sig-release-master-blocking): 15 of 583 runs since Nov 6
- `ci-kubernetes-e2e-gce-cos-default-master` (sig-release-master-blocking): 2 of 198 runs since Nov 6

[Triage](https://storage.googleapis.com/k8s-triage/index.html?test=Memory-Backed...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144421)

**Metadata:**
- Created: 2026-11-23
- Comments: 2
- State: open

### kubernetes/kubernetes#144420: [Flaking Test] [sig-api-machinery] k8s.io/kubernetes/test/integration: examples - TestAggregatedAPIServer

### Which jobs are flaking?

From Triage (Nov 9 to Nov 23):

- `ci-kubernetes-integration-master` (sig-release-master-blocking): 5 failures
- `ci-kubernetes-integration-master-s390x`: 3
- `ci-kubernetes-integration-fieldsv1string`: 1
- `pull-kubernetes-integration`: 5, on #142768, #140629, #144259 a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144420)

**Metadata:**
- Created: 2026-11-23
- Comments: 2
- State: open

### kubernetes/kubernetes#144436: apimachinery: add json/v2 support

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add MarshalJSONTo and UnmarshalJSONFrom to metav1.Time, MicroTime, Duration, GroupVersion and FieldsV1, resource.Quantity, intstr.IntOrString and runtime.RawExtension. The legacy methods stay because some consume...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144436)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144435: apiserver: report etcd override backends in apiserver_storage_size_bytes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The `apiserver_storage_size_bytes` metric returned from the `/metrics` endpoint  is meant to report one series per etcd backend: `etcd-0` for `--etcd-servers` and `etcd-1`, `etcd-2`, ... for `--etcd-servers-ove...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144435)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144434: Don't reject localhost nodeport connections when feature is disabled

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The nftables localhost nodeport code is erroneously behaving backward-incompatibly whenever the `KubeProxyNFTablesLocalhostNodePorts` feature gate is enabled, rather than only behaving backward-incompatibly when the us...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144434)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144430: Add release-1.38 publishing bot rules

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144430)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144429: job: fix flaky TestMutablePodResourcesForSuspendedJobsNotYetStarted

#### What type of PR is this?

/kind flake
/sig apps

#### What this PR does / why we need it:

`TestMutablePodResourcesForSuspendedJobsNotYetStarted` creates a suspended Job and immediately updates its pod resources using the object returned by the create call. The job controller can sync the Job i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144429)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144428: kubectl: fix autoscale fallback to autoscaling/v1 when --cpu is not set

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144428)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144427: test/e2e: deflake pod resize (mostly memory-backed volume resize) tests with exec retries

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144427)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144426: client-go: cache empty resource lists in the disk discovery cache

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The disk-backed discovery cache does not write a group/version whose resource list is empty, so that group/version is a cache miss for every new client, and each miss sends the client back to the server for discovery...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144426)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144424: [release-1.36] Automated cherry pick of #143642: Bump golang.org/x/net to v0.62.0 for CVE-2026-78663 and related

Cherry pick of #143642 on release-1.36.

#143642: Bump golang.org/x/net to 0.62.0 for cve-2026-78661 and cve-2026-97045

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144424)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144423: DRA scheduler_perf: adjust performance thresholds

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This deflakes https://testgrid.k8s.io/sig-scalability-benchmarks#scheduler-perf

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

The code which handles counters for partiti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144423)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144419: apiserver: count serving connections in TestClientReceivedGOAWAY

/kind failing-test
/sig api-machinery

#### What this PR does / why we need it:

`TestClientReceivedGOAWAY` counts TCP connections by counting dials in a
custom `DialTLSContext`, and flakes with one connection too many
("expected 2 TCP connections, got 3") plus a data race in `goaway_test.go`.

The ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144419)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144418: kube-controller-manager: add --concurrent-node-lifecycle-syncs

<!-- PR title: kube-controller-manager: add --concurrent-node-lifecycle-syncs -->

#### What type of PR is this?

/kind feature
/sig node
/sig scalability

#### What this PR does / why we need it:

`nodeUpdateQueue` in the node lifecycle controller is drained by a hardcoded 8
workers (`nodeUpdateWor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144418)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144417: nodelifecycle: enqueue only node updates that affect taints or labels

<!-- PR title: nodelifecycle: enqueue only node updates that affect taints or labels -->

#### What type of PR is this?

/kind cleanup
/sig node
/sig scalability

#### What this PR does / why we need it:

The node informer `UpdateFunc` in the node lifecycle controller currently
enqueues every `Node`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144417)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144416: nodelifecycle: keep the not-ready taint on a node without a Ready condition

<!-- PR title: nodelifecycle: keep the not-ready taint on a node without a Ready condition -->

#### What type of PR is this?

/kind bug
/sig node
/sig scalability

#### What this PR does / why we need it:

The `TaintNodesByCondition` admission plugin adds
`node.kubernetes.io/not-ready:NoSchedule` t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144416)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144415: nodelifecycle: requeue a node when its taint or label reconciliation fails

<!-- PR title: nodelifecycle: requeue a node when its taint or label reconciliation fails -->

#### What type of PR is this?

/kind bug
/sig node
/sig scalability

#### What this PR does / why we need it:

`doNodeProcessingPassWorker` in the node lifecycle controller calls `Done` on
a `nodeUpdateQue...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144415)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144410: ktesting: add Verbosity option

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The underlying klog ktesting has this, but it wasn't exposed by the core ktesting package. Having it is useful for some tests which check log output and enables porting those tests to k8s.io/ktesting.

#### Which...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144410)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19081: Automated cherry pick of #19060: nodeup: point the runsc handler at the shim config we write
#19057: gVisor: remove the invalid arch option from the apt source
#19058: nodeup: install apt repository keys without apt-key

Cherry pick of #19060 #19057 #19058 on release-1.37.

#19060: nodeup: point the runsc handler at the shim config we write
#19057: gVisor: remove the invalid arch option from the apt source
#19058: nodeup: install apt repository keys without apt-key

For details on the cherry pick process, see the [c...

🔗 [Link](https://github.com/kubernetes/kops/pull/19081)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19079: WIP chore(channels): promote AWS and Azure Ubuntu images to stable

Promote the AWS and Azure Ubuntu 24.04 images from the alpha channel to the stable channel.

🔗 [Link](https://github.com/kubernetes/kops/pull/19079)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9273: Remove test/e2e/lifecycle from SIG Cluster Lifecycle owners

https://github.com/kubernetes/kubernetes/blob/master/test/e2e/lifecycle/OWNERS
now belongs to sig node.

**Which issue(s) this PR fixes**:

Fixes None


🔗 [Link](https://github.com/kubernetes/community/pull/9273)

**Metadata:**
- Created: 2026-11-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38337: Add v1.38 and remove v1.34 milestone_applier rules

Add v1.38 and remove v1.34 milestone_applier rules

/hold
The hold should only be cancelled once v1.38.0-rc.0 is released and post-release branch creation tasks start

/sig release
/area release-eng

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38337)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38335: Add CAPV v1.18 jobs

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38335)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38334: Bump CAPV milestone applier config for v1.19

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38334)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10717: promote norbertcyran to CA approver

#### What this PR does / why we need it:

This PR updates the Cluster Autoscaler OWNERS file to promote @norbertcyran from Reviewer to Approver.

@norbertcyran has been one of the most active Cluster Autoscaler contributors and reviewers over the past year, across both kubernetes/autoscaler and kube...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10717)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10715: build(deps): bump github.com/prometheus/client_golang from 1.24.1 to 1.25.0 in /addon-resizer

Bumps [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang) from 1.24.1 to 1.25.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prometheus/client_golang/releases">github.com/prometheus/client_golang's releases</a>.</em></p>
<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10715)

**Metadata:**
- Created: 2026-11-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59238: [en] Fix broken link and wrong section reference in Node Shutdowns page

**This is a Bug Report**

**Problem:**

`content/en/docs/concepts/cluster-administration/node-shutdown.md` has two errors:

1. **Broken link** ([L334](https://github.com/kubernetes/website/blob/ac7b6d42d5/content/en/docs/concepts/cluster-administration/node-shutdown.md?plain=1#L334)):
   The link to...

🔗 [Link](https://github.com/kubernetes/website/issues/59238)

**Metadata:**
- Created: 2026-11-24
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-11-24 08:20:40*
