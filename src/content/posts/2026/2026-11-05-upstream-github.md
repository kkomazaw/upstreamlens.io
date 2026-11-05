---
title: "Upstream Github - 2026-11-05"
description: "CNCF upstream activity from github"
pubDate: 2026-11-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/XXL", "needs-ok-to-test", "release-note-none", "area/dependency", "cloud-provider-alibaba-cloud", "issue", "kind/feature", "sig/auth", "needs-triage", "kind/bug", "sig/node", "sig/api-machinery", "sig/network", "kind/failing-test", "area/test", "kind/cleanup", "sig/scheduling", "size/L", "kind/api-change", "sig/testing", "needs-priority", "wg/device-management", "priority/important-soon", "area/apiserver", "release-note", "size/XL", "triage/accepted", "area/kube-proxy", "size/M", "approved", "do-not-merge/cherry-pick-not-approved", "area/provider/gcp", "size/XS", "kind/flake", "sig/cloud-provider", "sig/apps", "do-not-merge/work-in-progress", "do-not-merge/invalid-commit-message", "area/kubelet", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "sig/cli", "sig/instrumentation", "sig/architecture", "area/code-generation", "kind/dependency", "wg/workload-aware-scheduling", "release-note-action-required", "ok-to-test", "lgtm", "cloud-provider-openstack", "priority/backlog", "kubectl", "kind/kep", "enhancements", "size/S", "area/access", "area/groups", "sig/k8s-infra", "k8s.io", "website", "language/pt", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/coreweave", "kind/documentation", "kind/design", "ingress-gce", "envoyproxy", "kind/enhancement", "gateway", "containerd", "release", "overlaybd", "accelerated-container-image", "cncf", "review/governance", "kind/review", "toc", "review/tech", "kind/initiative", "tag/infrastructure", "tag/developer-experience", "needs-group", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143816: KEP-5491: document and enforce the ResourceSlice object size budget

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143816)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143815: apiserver: count invalid manifest admission config once per change

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a manifest-based admission config (KEP-5793) has invalid content, the loader returned no content hash, so the reload path never remembered it had already seen that content. One atomic write of a bad manifest rec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143815)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143810: KEP-4222: Add table-based Serializer benchmarks.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143810)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143806: KEP-6371: Refactor NewNodeLifecycleController function with option struct

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Replaces NewNodeLifecycleController's 13 positional parameters with an options struct across callers/tests; fixes swapped monitor/grace period comments in `lifecycle_test.go` and `taint_test.go`. Separating mechani...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143806)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143805: apimachinery/managedfields: add Lean SSA model and pinned SMD comparisons

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

SSA's required-field ownership proposal needs a precise distinction between releasing claims and deleting a whole item, including nested objects and ownership handoff. This adds a standalone Le...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143805)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-openstack#3279: [occm] Security group lb-sg-<uid>-* is leaked when the load balancer is already gone at Service deletion

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Cannot delete PV
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* cinde...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3279)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3280: [occm] Delete the Service security group when the load balancer is already gone

**What this PR does / why we need it**:

(see #3279)

`ensureLoadBalancerDeleted` returns `nil` as soon as the load balancer is not found, before it reaches `ensureSecurityGroupDeleted`. The Service's `lb-sg-<uid>-<ns>-<name>` security group is then never detached from the node ports or deleted, whi...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3280)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6495: KEP-6371: External Node Liveness Detection Amendment

- One-line PR description: This PR amends KEP-6371 so that there are fewer ambiguities in transition behaviors and external mode, and clarifies the new target version.
- Issue link: https://github.com/kubernetes/enhancements/issues/6371
- Other comments: Due to v1.38 freeze schedule we'll now move K...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6495)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6494: KEP-4671: Update KEP to reflect staying in beta

- One-line PR description: : Update KEP to reflect staying in beta for 1.38

<!-- link to the k/enhancements issue -->
- Issue link: https://github.com/kubernetes/enhancements/issues/4671

<!-- other comments or additional information -->
- Other comments: Paired with https://github.com/kubernetes/e...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6494)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10627: VPA: skip pod if processedRecommendation is nil

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10627)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10624: Add proposal for ScalableCapacityBuffer API

#### What type of PR is this?

/kind design
/kind documentation
/area cluster-autoscaler

#### What this PR does / why we need it:

This PR adds a design proposal for **Scalable Capacity Buffers** (`ScalableCapacityBuffer`), expanding on the existing [Capacity Buffers proposal](https://github.com/ku...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10624)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/cloud-provider-alibaba-cloud#501: chore(deps): bump the non-k8s-deps group across 1 directory with 17 updates

Bumps the non-k8s-deps group with 17 updates in the / directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/alibabacloud-go/cs-20151215/v3](https://github.com/alibabacloud-go/cs-20151215) | `3.0.21` | `3.0.42` |
| [github.com/alibabacloud-go/darabonba-openapi/v2](https://github.com/a...

🔗 [Link](https://github.com/kubernetes/cloud-provider-alibaba-cloud/pull/501)

**Metadata:**
- Created: 2026-11-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143817: Make TLS MinVersion configurable in client-go transport

### What would you like to be added?

Make the TLS MinVersion in client-go configurable via environment variable (e.g., `KUBERNETES_TLS_MIN_VERSION`), instead of hardcoded
`tls.VersionTLS12` ([here](https://github.com/kubernetes/client-go/blob/cf983291bc33d4d3cda51df483532928b025ac4d/transport/trans...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143817)

**Metadata:**
- Created: 2026-11-05
- Comments: 1
- State: open

### kubernetes/kubernetes#143814: Image Volumes with `PullPolicy: Always` are pulled on any syncPod() call when a container is crashlooping

### What happened?

When a container crashloops, every image volume with `pullpolicy: always` (even those not mounted by the crashing container) is pulled every time SyncPod is called (which is at least on every backoff step and at most on any event on the pod). Each image pull takes a spot in the n...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143814)

**Metadata:**
- Created: 2026-11-05
- Comments: 2
- State: open

### kubernetes/kubernetes#143799: Declarative maxLength API validation must run early

### What happened?

See https://github.com/kubernetes/kubernetes/pull/142511#discussion_r4463031729

The API declarative maxLength validation runs after the custom validation. So if custom validation does some regex search or returns the bad value in an error - very long string can introduce a DDoS....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143799)

**Metadata:**
- Created: 2026-11-04
- Comments: 3
- State: open

### kubernetes/kubernetes#143798: [Failing Test] sig-release-blocking#gce-cos-default-master Kubernetes e2e suite.[It] [sig-network] KubeProxy should set TCP CLOSE_WAIT timeout [Privileged]

### Which jobs are failing?

gce-cos-default-master

### Which tests are failing?

`sig-release-blocking#gce-cos-default-master Kubernetes e2e suite.[It] [sig-network] KubeProxy should set TCP CLOSE_WAIT timeout [Privileged]` leading to the failures of `ci-kubernetes-e2e-gce-cos-default-master.Overa...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143798)

**Metadata:**
- Created: 2026-11-04
- Comments: 4
- State: open

### kubernetes/kubernetes#143813: Automated cherry pick of #143340: kube-proxy: avoid missing the initial node topology update

Cherry pick of #143340 on release-1.35.

#143340: kube-proxy: avoid missing the initial node topology update

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143813)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143812: Automated cherry pick of #143340: kube-proxy: avoid missing the initial node topology update

Cherry pick of #143340 on release-1.36.

#143340: kube-proxy: avoid missing the initial node topology update

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143812)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143811: Automated cherry pick of #143340: kube-proxy: avoid missing the initial node topology update

Cherry pick of #143340 on release-1.37.

#143340: kube-proxy: avoid missing the initial node topology update

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143811)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143809: Automated cherry pick of #143437: cluster/gce: filter image families by READY status

Cherry pick of #143437 on release-1.35.

#143437: cluster/gce: filter image families by READY status

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143809)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143808: Automated cherry pick of #143437: cluster/gce: filter image families by READY status

Cherry pick of #143437 on release-1.36.

#143437: cluster/gce: filter image families by READY status

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143808)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143807: Automated cherry pick of #143437: cluster/gce: filter image families by READY status

Cherry pick of #143437 on release-1.37.

#143437: cluster/gce: filter image families by READY status

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143807)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143804: kube-proxy nftables: dispatch non-affinity services through shared endpoint maps

#### What type of PR is this?

/kind bug
/kind cleanup

(I'm unsure what kind this is?)

#### What this PR does / why we need it:

This PR is a replacement of https://github.com/kubernetes/kubernetes/pull/140362.

The nftables proxier creates and updates per-Service chains and endpoint-se...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143804)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143803: test/e2e/network: schedule hostExecPod to client node in CLOSE_WAIT test

#### What type of PR is this?

/kind bug
/kind failing-test

#### What this PR does / why we need it:

Fixes a recurring CI failure in `[sig-network] KubeProxy should set TCP CLOSE_WAIT timeout [Privileged]` on `gce-cos-default-master` (see #143798).

In commit 562bc43ae40, `hostExecPod` was refacto...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143803)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143802: [release-1.37] Automated cherry pick of #143642: Bump golang.org/x/net to v0.62.0 for CVE-2026-78661, CVE-2026-97045 and related

Cherry pick of #143642 on release-1.37.

#143642: Bump golang.org/x/net to 0.62.0 for cve-2026-78661 and cve-2026-97045

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143802)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143797: test: share API server in TestPodGroupScheduling

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling
/area test

#### What this PR does / why we need it:

Working on <future PR> with integration tests for heterogenous pod groups I noticed that the speed could be improved here.

Inverts the loop in `TestPodGro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143797)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143796: Pass inner PodGroupCycleState parameter to fwk.PodGroupSchedulingFunc

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Update the signature of `fwk.PodGroupSchedulingFunc` to accept an inner `PodGroupCycleState` parameter prepared by the caller instead of implicitly copying `preemption.PodGroupPreemptionStateKey` from the outer...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143796)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143794: kube-proxy: honor conntrack min above the per-core sizing cap

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#137002 added a hardcoded cap of 1048576 to the `nf_conntrack_max` value that kube-proxy computes from `conntrack.maxPerCore`. However, `getConntrackMax` returns the cap as soon as the scaled per-core value exceeds i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143794)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143792: NodeShouldRunDaemonPodWithPrecomputed for efficient maching against many nodes

Building tolerations and parsing the required node affinity is costly and depends only on the DaemonSets, so for efficient processing, it can be done once and passed as a parameter.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143792)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143791: Clear stale NominatedNodeName for failed and unplaced PodGroup pods

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

Fixes stale `.status.nominatedNodeName` (and `PodNominator` entries) remaining set on unscheduled `PodGroup` pods in Workload Aware Preemption scenarios.

During a `PodGroup` scheduling cycle, single-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143791)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143788: Mark load-shedding 429s and count them in client-go

**Draft, two open items before this can merge:**
1. **SIG API-Machinery approval.** This adds a new apiserver response header, as discussed in #143759. dgrisonnet (SIG Instrumentation) agreed to the approach; it still needs API-Machinery sign-off.
2. **Generated metrics docs not yet updated.** `hack...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143788)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubectl#1900: kubectl aliases report binary name instead of alias name on flag error

### What happened?

When an alias in the `kuberc` file is configured with an invalid flag (or fails when setting a flag value), the error message returned by `Preferences.applyAliases` incorrectly references the binary name (`args[0]`, e.g. `kubectl`) instead of the alias name (`alias.Name`).

In `s...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1900)

**Metadata:**
- Created: 2026-11-04
- Comments: 4
- State: open

### kubernetes/k8s.io#10169: feat: add cluster-api-gcp-team

**What this PR does / why we need it**:
After a conversation in Kubernetes Slack: https://kubernetes.slack.com/archives/C1TU9EB9S/p1793127947139739?thread_ts=1790704507.343039&cid=C1TU9EB9S we decided we needed a cluster-api-gcp team to own a shared folder for our meeting notes. This PR fulfills tha...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10169)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59020: Improvement for k8s.io/pt-br/docs/concepts/configuration/configmap/

Hello documentation team!

In the topics explaining how to consume a [ConfigMap](https://kubernetes.io/pt-br/docs/concepts/configuration/configmap/) via Volumes (using items, key, and path), the examples frequently alter file names or introduce new nomenclatures without a clear connection between wh...

🔗 [Link](https://github.com/kubernetes/website/issues/59020)

**Metadata:**
- Created: 2026-11-05
- Comments: 1
- State: open

### kubernetes/website#59009: [pt-br] Localize tasks/configure-pod-container/configure-projected-volume-storage.md

The "Configure a Pod to Use a Projected Volume for Storage" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/configure-projected-volume-storage/
Page path in the repository: content/en/docs/tasks/configure-p...

🔗 [Link](https://github.com/kubernetes/website/issues/59009)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/website#59008: [pt-br] Localize tasks/configure-pod-container/attach-handler-lifecycle-event.md

The "Attach Handlers to Container Lifecycle Events" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/attach-handler-lifecycle-event/
Page path in the repository: content/en/docs/tasks/configure-pod-container...

🔗 [Link](https://github.com/kubernetes/website/issues/59008)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/website#59007: [pt-br] Localize tasks/configure-pod-container/configure-pod-initialization.md

The "Configure Pod Initialization" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-initialization/
Page path in the repository: content/en/docs/tasks/configure-pod-container/configure-pod-init...

🔗 [Link](https://github.com/kubernetes/website/issues/59007)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/website#59004: [pt-br] Localize tasks/configure-pod-container/pull-image-private-registry.md

The "Pull an Image from a Private Registry" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
Page path in the repository: content/en/docs/tasks/configure-pod-container/pull-image...

🔗 [Link](https://github.com/kubernetes/website/issues/59004)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/website#59003: [pt-br] Localize tasks/configure-pod-container/assign-cpu-resource.md

The "Assign CPU Resources to Containers and Pods" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/
Page path in the repository: content/en/docs/tasks/configure-pod-container/assign-cpu-r...

🔗 [Link](https://github.com/kubernetes/website/issues/59003)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/website#59001: [pt-br] Localize tasks/configure-pod-container/configure-liveness-readiness-startup-probes.md

The "Configure Liveness, Readiness and Startup Probes" page is not yet available in Brazilian Portuguese (PT-BR)

Page link on the website: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
Page path in the repository: content/en/docs/tasks/configu...

🔗 [Link](https://github.com/kubernetes/website/issues/59001)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/autoscaler#10626: VPA: recommendation nil ptr panic.

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
Vertical Pod Autoscaler.

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add on...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10626)

**Metadata:**
- Created: 2026-11-04
- Comments: 2
- State: open

### kubernetes/autoscaler#10628: fix(coreweave): prevent deleting existing nodes in DecreaseTargetSize

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Since #9132, the autoscaler reverts a timed-out scale-up by calling `DecreaseTargetSize(ctx, -scaleUpRequest.Increase)` ([call site](https://github.com/kubernetes-sigs/cluster-autoscaler/blob/ee7fd73d88ea744447832067...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10628)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10625: fix(vpa): resolve parent controllers when informer caches lag

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a Job exists in the API but its informer watch event has not arrived, VPA currently reports the owner missing and cannot resolve the Pod's CronJob parent.

Read a well-known controller once through the typed cli...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10625)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3312: Sort L4 Service source ranges for deterministic firewall rules

`IPv4ServiceSourceRanges` and `IPv6ServiceSourceRanges` iterate over a `net.IPNetSet` (`map[string]*net.IPNet`), returning source CIDR slices in randomized Go map iteration order.

This caused `TestNetLBIPv6LongFormSourceRangesNoUpdateOnResync` and `TestILBIPv6LongFormSourceRangesNoUpdateOnResync`...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3312)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10520: Support per-Gateway rate limit service and Redis backend

**What would you like to be added:**

Support running a separate rate limit service (and Redis backend) per Gateway under a single Envoy Gateway control plane, so that different Gateways can use different rate limit deployments instead of sharing one control-plane-wide instance.

**Why is this neede...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10520)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### envoyproxy/gateway#10517: EnvoyProxy ignored while GatewayClass is stuck in Terminating state

This report is AI-assisted. 

## Description

When a GatewayClass is deleted while Gateways still reference it, the finalizer `gateway-exists-finalizer.gateway.networking.k8s.io` prevents deletion from completing. The GatewayClass stays in Terminating state indefinitely. During this time, EG stops a...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10517)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Bug Fixes
- make live snapshot idempotent and crash-safe [#473](https://github.com/containerd/overlaybd/pull/473) ([huangzhaoxiang.hzx](https://github.com/containerd/overlaybd/commit/61ab1749e96cd4fc6235b6fe47ee5153277da9cf))
- validate snapshot request fields [#473](https://github.com/containerd/overlaybd/pull/473) ([huangzhaoxiang.hzx](https://github.com/containerd/overlaybd/commit/e05088640ac847634f0af31ecf8807ac0818888a))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-05
- Prerelease: Yes

### containerd/accelerated-container-image: Development Build

## Builds
- **deps**: bump github.com/containerd/containerd/v2 in /ci/e2e [#414](https://github.com/containerd/accelerated-container-image/pull/414) ([dependabot[bot]](https://github.com/containerd/accelerated-container-image/commit/a87daa8e723169e631ebd8b8350be1b968b35b7f))

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-04
- Prerelease: Yes

### cncf/toc#2366: [Gov. Review]: k0s

### Project name

k0s

### Project link

https://github.com/k0sproject/k0s

### Due diligence link



### Project contact information

- Jussi Nummelin, jnummelin@mirantis.com

### Additional information



---

_This issue was automatically created from [issue #1962](https://github.com/cncf/toc/iss...

🔗 [Link](https://github.com/cncf/toc/issues/2366)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### cncf/toc#2365: [Tech Review]: k0s

### Project name

k0s

### Project link

https://github.com/k0sproject/k0s

### Due diligence link



### Project contact information

- Jussi Nummelin, jnummelin@mirantis.com

### Additional information



---

_This issue was automatically created from [issue #1962](https://github.com/cncf/toc/iss...

🔗 [Link](https://github.com/cncf/toc/issues/2365)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### cncf/toc#2364: [Initiative]: Central Container Registry for CNCF Projects

### Name

registry.cncf.io

### Short description

Shared Registry for CNCF projects, covering container images, Helm charts, and other OCI artifacts.

### Responsible group

TAG Infrastructure

### Does the initiative belong to a subproject?

No

### Subproject name

_No response_

### Primary cont...

🔗 [Link](https://github.com/cncf/toc/issues/2364)

**Metadata:**
- Created: 2026-11-04
- Comments: 0
- State: open

### cncf/toc#2361: State of AI Assested Development | Add final whitepaper

Last initiative artifact. 
Ref: https://github.com/cncf/toc/issues/1966

🔗 [Link](https://github.com/cncf/toc/pull/2361)

**Metadata:**
- Created: 2026-11-04
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-05 05:02:11*
