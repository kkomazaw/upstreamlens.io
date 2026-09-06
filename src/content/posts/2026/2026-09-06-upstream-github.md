---
title: "Upstream Github - 2026-09-06"
description: "CNCF upstream activity from github"
pubDate: 2026-09-06
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/security", "pr", "sig/api-machinery", "size/S", "cncf-cla: yes", "do-not-merge/release-note-label-needed", "area/code-generation", "needs-priority", "do-not-merge/needs-kind", "sig/scheduling", "size/M", "kind/feature", "release-note-none", "needs-ok-to-test", "size/L", "sig/storage", "release-note", "sig/apps", "kind/cleanup", "kind/api-change", "sig/auth", "area/apiserver", "sig/network", "area/kubelet", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "sig/node", "sig/cluster-lifecycle", "sig/cli", "sig/instrumentation", "sig/architecture", "sig/cloud-provider", "area/dependency", "wg/device-management", "website", "approved", "minikube", "size/XS", "lgtm", "ok-to-test", "release", "autoscaler", "area/vertical-pod-autoscaler", "area/testgrid", "size/XXL", "sig/testing", "area/jobs", "area/config", "test-infra", "cloud-provider-openstack"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141878: scheduler, api: implement alpha allowDisruptionByPriorityGreaterThanOrEqual (KEP-3280)

#### What type of PR is this?

/kind feature
/sig scheduling
/sig apps
/sig auth

#### What this PR does / why we need it:

Implements the alpha stage of [KEP-3280](https://github.com/kubernetes/enhancements/tree/master/keps/sig-scheduling/3280-guarantee-pdb-when-preemption-happens) ("Guarantee PodD...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141878)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141885: CVE-2026-78662: Go x/crypto/ssh: prevent DoS on deadlocked undecided channel

### What happened?

Prow ci-kubernetes-snyk-master [job](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-snyk-master/2095107719743672320) failing due to new CVE-2026-78662

### What did you expect to happen?

CVE scan should be clean

### How can we reproduce it (as minimally and p...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141885)

**Metadata:**
- Created: 2026-09-05
- Comments: 3
- State: open

### kubernetes/kubernetes#141884: CVE-2026-56855: React Router: Unauthenticated Denial of Service via Inefficient Route Matching

### What happened?

Prow ci-kubernetes-snyk-master [job](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-snyk-master/2095470362690064384) failing due to new CVE-2026-56855 finding.


### What did you expect to happen?

CVE scan should be clean

### How can we reproduce it (as minim...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141884)

**Metadata:**
- Created: 2026-09-05
- Comments: 4
- State: open

### kubernetes/kubernetes#141876: StatefulSet controller never recovers from an adopted pod with a mismatched volumeClaimTemplate set: endless FailedUpdate retries instead of delete

**What happened?**

A StatefulSet was deleted with `--cascade=orphan` and re-created with an additional `volumeClaimTemplates` entry (the API rejects adding one by update, so delete-and-recreate is the documented workaround path). The surviving, adopted pod did not have a volume for the new claim te...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141876)

**Metadata:**
- Created: 2026-09-05
- Comments: 3
- State: open

### kubernetes/kubernetes#141894: adding reason tag

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141894)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141893: perf(scheduler): decouple async API calls client to prevent bind throttling

## Problem

When SchedulerAsyncAPICalls is enabled, the asynchronous status updates share the same client-go client instance with essential operations like pod binding. In clusters with a high rate of unschedulable pods, the accumulation of async requests heavily throttles the shared client, severel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141893)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141892: apiserver: build the pod-aware ServiceAccount storage exactly once

The legacy core REST storage provider built two separate ServiceAccount REST storage backends whenever a ServiceAccountIssuer is configured (the common case): GenericConfig.NewRESTStorage built a generic one first, and legacyProvider.NewRESTStorage immediately built a second, richer one with pod and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141892)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141891: pv_controller: revalidate claim live before deleting released volume

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`isVolumeReleased` decides whether a `PersistentVolume` with reclaim policy `Delete` has been released and can have its backing storage permanently deleted. It makes that call by looking up the bound claim in `ctrl.cla...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141891)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141890: certificates: enable commentstart kube-api-linter rule

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Enables the `commentstart` api-linter rule for the `certificates` API group. The PR fixes 18 pre-existing godoc commentstart violations in:
- `staging/src/k8s.io/api/certificates/v1/types.go`
- `staging/src/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141890)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141889: apiserver/cacher: have Snapshot.RangePrefix return a Range

#### What type of PR is this?

/kind cleanup



#### What this PR does / why we need it:

Follow-up to #141359, split out ahead of #140896 at @serathius's suggestion there ([thread](https://github.com/kubernetes/kubernetes/pull/140896#discussion_r3926975068)): `Snapshot.RangePrefix(prefix, c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141889)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141888: attachdetach: revalidate out-of-service taint live before force detaching

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`reconciler.hasOutOfServiceTaint` checks the `node.kubernetes.io/out-of-service` taint against `rc.nodeLister`, which is a local informer cache. When the taint is present, `reconcile()` sets `verifySafeToDetach := ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141888)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141887: podgc: revalidate node out-of-service taint live before force deleting

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`gcTerminating` in `pkg/controller/podgc/gc_controller.go` decides which terminating pods to force-delete by reading the `node.kubernetes.io/out-of-service` taint off `gcc.nodeLister`, which is a local informer cac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141887)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141886: update golang.org/x/crypto to v0.56.0

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Updates `golang.org/x/crypto` to `v0.56.0` to address CVE-2026-78662 (prevent DoS on deadlocked undecided channel in `x/crypto/ssh`).

#### Which issue(s) this PR fixes:
Fixes #141885

#### Special notes f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141886)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141883: Fix ResourcePoolStatusRequest requeue after incomplete pool

What type of PR is this?

/kind bug

What this PR does / why we need it:

ResourcePoolStatusRequest can remain pending indefinitely when its resource pool is incomplete at the time of processing.

The controller retries incomplete requests only up to the configured retry limit. If the remain...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141883)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141882: Add unit tests for types.NamespacedName

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`types.NamespacedName`'s `String()` and `MarshalLog()` methods had no unit
test coverage. This adds tests for:
- `String()`'s namespace/name formatting, including the cluster-scoped
  (empty namespace) case, empt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141882)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141881: enable commentstart check on certificate  API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141881)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141880: printers: measure printed cell width when computing column widths

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141880)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141879: scheduler: fix DRA pending allocation cleanup

What type of PR is this?

/kind bug

What this PR does / why we need it:

This fixes stale pendingAllocations state when binding a DRA-backed extended resource claim in a PodGroup scheduling cycle.

During Reserve(), the pending allocation is stored using the original ResourceClaim UID as th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141879)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141877: Fix cache watcher processing after watcher termination

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`cacheWatcher.processInterval` could continue processing initial events after the
watcher had been terminated. Those events were not delivered to the client but
were still counted in `apiserver_init_events_to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141877)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57431: Issue: English Documentation Search Redirects to Vietnamese Version of kubectl Cheat Sheet

When I open the main Kubernetes documentation/search page, the documentation is displayed in English.

However, when I search for "**kubectl Cheat Sheet"** using the documentation search, the search result redirects me to the **Vietnamese version** of the page instead of the English version.

For ex...

🔗 [Link](https://github.com/kubernetes/website/issues/57431)

**Metadata:**
- Created: 2026-09-05
- Comments: 2
- State: open

### kubernetes/minikube#23653: test: Use random port for mitmproxy to prevent port conflicts

mitmdump was hardcoded to port 8080, which can conflict with other services. The HTTP proxy test already used a random port via freeport.GetFreePort(); do the same for mitmproxy.

Refactor both startHTTPProxy and startProxyWithCustomCerts to return the proxy address string, making the callers cons...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23653)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23637: test: Fix TestNoKubernetes timeout and unskip StartNoArgs on KVM

### What this PR does / why we need it:
Fixes a false "KVM networking flake" in `TestNoKubernetes/serial/StartNoArgs`.

Investigation of Prow build logs for PR #23137 revealed that `TestNoKubernetes` allocated a 5-minute context timeout (`Minutes(5)`) for 9 serial subtests. On KVM, the preceding ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23637)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.12.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.12.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.12.0
- Published: 2026-09-05
- Prerelease: No

### kubernetes/autoscaler#10251: Modify NewVPADeployment into a generic VPA component deployment factory

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`NewVPADeployment` in `vertical-pod-autoscaler/test/e2e/utils/common.go` was named generically but hardcoded everything for the recommender (deployment name, image, command, service account, port and probe paths)...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10251)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37826: [kops] Add Amazon Linux 2027 to the grid and distro jobs

Graduates Amazon Linux 2027 from the optional presubmits added in #37807 and #37811 to a full distro in the grid and periodics.

### Version gate

kOps gained AL2027 support in kubernetes/kops#18777, cherry-picked to `release-1.37` in kubernetes/kops#18783. kops 1.35 and 1.36 do not recognize `amzn-...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37826)

**Metadata:**
- Created: 2026-09-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.36.3

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.36.3)

**Metadata:**
- Version: openstack-cinder-csi-2.36.3
- Published: 2026-09-05
- Prerelease: No


---

*This content was automatically collected on 2026-09-06 02:51:59*
