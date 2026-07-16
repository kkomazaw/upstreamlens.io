---
title: "Upstream Github - 2026-07-16"
description: "CNCF upstream activity from github"
pubDate: 2026-07-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-sig", "needs-triage", "kind/feature", "sig/cli", "pr", "area/test", "sig/api-machinery", "size/M", "release-note-none", "cncf-cla: no", "sig/testing", "needs-ok-to-test", "needs-priority", "release-note", "do-not-merge/needs-sig", "kind/bug", "size/L", "sig/network", "kind/cleanup", "area/cloudprovider", "cncf-cla: yes", "sig/cloud-provider", "approved", "sig/storage", "size/S", "lgtm", "kind/api-change", "area/code-generation", "sig/scheduling", "size/XXL", "do-not-merge/work-in-progress", "wg/workload-aware-scheduling", "area/kubectl", "priority/important-soon", "sig/auth", "triage/accepted", "sig/autoscaling", "sig/apps", "do-not-merge/needs-kind", "kind/flake", "ok-to-test", "sig/node", "do-not-merge/release-note-label-needed", "do-not-merge/contains-merge-commits", "wg/device-management", "area/kubelet", "website", "sig/docs", "language/zh", "area/localization", "area/provider/azure", "area/jobs", "area/config", "test-infra", "area/provider/gcp", "sig/cluster-lifecycle", "sig/release", "area/release-eng", "do-not-merge/hold", "priority/critical-urgent", "area/cluster-autoscaler", "area/provider/aws", "autoscaler", "size/XS", "area/vertical-pod-autoscaler", "size/XL", "kind/documentation", "release", "kops", "containerd", "area/snapshotters"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140595: kubelet: reject pod on PV nodeAffinity mismatch (KEP-5381)

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This re-proposes the kubelet-side part of KEP-5381 (mutable PV nodeAffinity) that was split out of #134339 at the last minute.

#134339 already landed the `MutablePVNodeAffinity` feature gate, the API cha...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140595)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9990: Emit an event when CA started its first control loop and after finishing the first control loop



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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9990)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9988: AEP-7571: Pod-level resources support in VPA - Phase1

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9988)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9987: Add categories=all for VPA object

#### What type of PR is this?
/kind cleanup
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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9987)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops: v1.36.0

See the full [kOps 1.36 release notes](https://kops.sigs.k8s.io/releases/1.36-notes/) for details, including breaking changes and deprecations.

## Highlights

* **Kubernetes 1.36 support** and completion of the move away from the in-tree cloud providers
* **Reworked addon management**: `kops-channels` now runs as a static pod on control-plane nodes; the standalone `channels` binary is no longer distributed
* **Hybrid bootstrap for gossip clusters**: workers bootstrap directly against the ...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.36.0)

**Metadata:**
- Version: v1.36.0
- Published: 2026-07-15
- Prerelease: No

## Updates

### kubernetes/kubernetes#140613: kube_apiserver clusterip_allocator available_ips missing for ServiceCIDR allocators after apiserver restart

### What happened?

Cluster runs with `MultiCIDRServiceAllocator` enabled, a legacy `--service-cluster-ip-range` (/22), and an additional `ServiceCIDR` (/16).

During a rolling kube-apiserver restart, the extension CIDR gauge disappears from `/metrics` on new apiserver pods for a long time. The lega...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140613)

**Metadata:**
- Created: 2026-07-15
- Comments: 2
- State: open

### kubernetes/kubernetes#140606: kubectl explain: add an -o skeleton output format for a copy-pasteable YAML starting point

cc @kubernetes/sig-cli-feature-requests

## What would you like to be added?

A new `kubectl explain <type> -o skeleton` output format that renders a
resource's schema as a concise, editable YAML skeleton (field names with
placeholder values) instead of the verbose field-by-field prose that
`plainte...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140606)

**Metadata:**
- Created: 2026-07-15
- Comments: 4
- State: open

### kubernetes/kubernetes#140599: Add evictions capacity surge behavior instead of just killing and letting new pods come up later

When K8s currently evicts a pod, the pod gets terminated/deleted and only then the controller will schedule a new replacement pod, this means that deployments with one replica will experience outage, unlike when rolling them out which will surge a new pod first and only then terminate the old one.

...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140599)

**Metadata:**
- Created: 2026-07-15
- Comments: 3
- State: open

### kubernetes/kubernetes#140620: e2e: verify kube-apiserver serving cert SANs include in-cluster DNS names

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds a conformance test asserting the kube-apiserver serving certificate's `DNSNames` include `kubernetes`, `kubernetes.default`, `kubernetes.default.svc`, and the cluster-domain-qualified FQDN, complementing the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140620)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140619: build: also package Windows release artifacts as .zip

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Many organizations block downloads of `.exe` files that aren't wrapped in a `.zip`, so Windows binaries shipped only as `.tar.gz` are hard to fetch in those environments. This PR adds a `create_zip` helper alongs...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140619)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140618: apiextensions: re-check CRD terminating status right before CR create admission

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Closes part of the race in #99181 where a CR create request can persist a resource after its CRD has begun terminating. `serveResource` previously used the terminating status snapshotted once at the top of `ServeHTTP...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140618)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140617: update owners files for cloud-provider staging



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140617)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140616: Add warning to CRDs for use of non-scalar items in sets

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

As described in https://github.com/kubernetes/kubernetes/issues/114613, SSA does not support sets of non-scalar items.

In https://github.com/kubernetes/kubernetes/pull/140293#pullrequestreview-4705355233...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140616)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140615: fix: initialize clusterip allocator metrics on EnableMetrics

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`EnableMetrics()` on the IPAddress-based and bitmap ClusterIP allocators registered the metrics recorder but did not publish `available_ips` or `allocated_ips` gauge values. After a kube-apiserver restart, extension ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140615)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140614: Remove deprecated wait.NewExponentialBackoffManager from csi_attacher

#### What type of PR is this?

/kind cleanup
/sig storage

#### What this PR does / why we need it:

`pkg/volume/csi/csi_attacher.go` held the last remaining use of the deprecated `wait.NewExponentialBackoffManager`. This PR migrates it to `wait.Backoff{...}.DelayWithReset(clock, resetDuration).Time...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140614)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140612: Move prevention of pod scheduling to nodes without CSI driver beta

xref https://github.com/kubernetes/enhancements/issues/5030

```release-note
Move prevention of pod scheduling to nodes without CSI driver beta
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140612)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140611: [WAS] scheduler-perf baseline + draft SLOs for TAS placement limit

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140611)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140610: scheduler: update requeue-assumed-PodGroup test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140610)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140609: kubectl: complete debug targets correctly

#### What type of PR is this?

/kind feature
/sig cli

#### What this PR does / why we need it:

kubectl debug currently uses the general resource type-and-name completer. As a result, completion starts by suggesting resource types and can produce a separate type and name even though debug expects a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140609)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140608: fix: replace stopped dynamic informers

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

`DynamicSharedInformerFactory.ForResource` now replaces a cached informer after that informer has stopped. It also clears the factory's started-state entry so a later `Start` call runs and sync...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140608)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140607: Fix NodeRestriction audience authz fallback on volume lookup error

#### What this PR does / why we need it

When `ServiceAccountNodeAudienceRestriction` is enabled, NodeRestriction allows a
node to request a token audience if the pod references it OR the node holds the
`request-serviceaccounts-token-audience` authz grant. Previously, if resolving the
pod's CSI...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140607)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140605: Refactor horizontal test 04

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140605)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140602: Clean up podgrouppreemption integration tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR cleans up the podgrouppreemption_test.go. It does two things:
- deflakes `Partial Preemption` and `Partial Preemption with basic policy` by adding a custom score plugin to remove potential random t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140602)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140601: Fix flaky TestCoSchedulingWithPermitPlugin

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140601)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140600: Handle Duplicate attribute values when a single request allocates mul…

…tiple devices

Add one of the following kinds:
/kind bug

#### What this PR does / why we need it:
The description what the PR does is mentioned in the linked issue.

#### Which issue(s) this PR is related to:
Fixes #140438 

#### Does this PR introduce a user-facing change?
NONE


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140600)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140597: skip ErrorBackoff sleep when clock moves backward

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:


#### Which issue(s) this PR is related to:
Fixes #140545


#### Special notes for your reviewer:

No sure if a ut is needed.

#### Does this PR introduce a user-facing change?

```release-note
None...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140597)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140593: Fix: make volume binding delay deterministic

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140593)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56498: Document the stable-<major>.<minor>.txt marker for older kubectl versions

**This is a Feature Request**

**What would you like to be added**

Kubernetes maintains a canonical `stable-<major>.<minor>.txt` marker for every supported minor release (until EOL), which resolves to the latest patched version for that minor-- e.g. `stable-1.34.txt` returns `v1.34.9`. For example:...

🔗 [Link](https://github.com/kubernetes/website/issues/56498)

**Metadata:**
- Created: 2026-07-15
- Comments: 1
- State: open

### kubernetes/website#56494: [zh-cn]sync labels-annotations-taints/_index

content/zh-cn/docs/reference/labels-annotations-taints/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/56494)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56493: [zh-cn]sync kubectl/_index

content/zh-cn/docs/reference/kubectl/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/56493)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37479: feat(cloud-provider-azure): add experimental checkin for EUAP regions

Add an experimental optional presubmit job that randomly picks between centraluseuap or eastus2euap (50/50) to run E2E via /test command.

/area provider/azure

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37479)

**Metadata:**
- Created: 2026-07-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37477: delete cloud-provider-gcp reboot jobs

We deleted these tests in https://github.com/kubernetes/kubernetes/pull/140589


/cc @dims

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37477)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37475: Enforce v1.37 Code Freeze

The Kubernetes v1.37 Code and Test Freeze is scheduled to start Wednesday 22nd July 2026 (AoE) / Thursday 23rd July 2026, 12:00 UTC.

/hold

The hold should ONLY be cancelled by the Release Team Leads when the v1.37 Release Team is ready around the Code Freeze deadline, ensuring that everything ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37475)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9992: cluster-autoscaler: honor AWS SDK endpoint environment variables for Auto Scaling

## What does this PR do?

This PR fixes an issue where the AWS Auto Scaling client always installs a custom endpoint resolver, even when no `ServiceOverride` is configured.

Because the custom endpoint resolver is installed unconditionally, the AWS SDK v2 default endpoint resolution is bypassed....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9992)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9989: Pass opts.PredicateParallelism to scheduler options

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Scheduler uses its own worqueue and parallelism, which we don't currently control, and it defaults to 16. This PR makes sure the PredicateParallelism option is respected by the scheduler framework as well....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9989)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops: v1.37.0-alpha.1

## What's Changed
* Support etcd 3.7.0-rc.0 and allow overriding the etcd version in the scalability scenario by @Jefftree in https://github.com/kubernetes/kops/pull/18458
* Enable misspell in golangci-lint by @ameukam in https://github.com/kubernetes/kops/pull/17578
* e2e: Filter random AZ selection by instance type availability by @rifelpet in https://github.com/kubernetes/kops/pull/18463
* azure: Use IMDS attested metadata document for node identity by @hakman in https://github.com/kubern...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.37.0-alpha.1)

**Metadata:**
- Version: v1.37.0-alpha.1
- Published: 2026-07-15
- Prerelease: Yes

### kubernetes/kops: v1.35.2

## What's Changed
* Automated cherry pick of #18428: cert-manager: upgrade to v1.19.5 and set AWS_REGION for Route53 dns-01 by @hakman in https://github.com/kubernetes/kops/pull/18429
* Cherry pick of #18436: upgrade etcd-manager and etcd to latest patches by @hakman in https://github.com/kubernetes/kops/pull/18437
* Automated cherry pick of #17968: Enable nf_conntrack kernel module on Rocky 9
#18179: Load nf_tables module and install iptables-nft on RHEL10+ by @rifelpet in https://github.co...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.35.2)

**Metadata:**
- Version: v1.35.2
- Published: 2026-07-15
- Prerelease: No

### kubernetes/release#4468: [DO NOT MERGE] Update go for k8s-cloud-builder and k8s-ci-builder to Go 1.26.5/1.25.12 and drop k8s 1.33 variants

#### What type of PR is this?

/kind cleanup
/kind feature

#### What this PR does / why we need it:

- Update k8s-cloud-builder and k8s-ci-builder to Go 1.25.5/1.24.12
- Drop k8s-cloud-builder and k8s-ci-builder variant for k8s 1.33

#### Which issue(s) this PR fixes:

Part of #4449

...

🔗 [Link](https://github.com/kubernetes/release/pull/4468)

**Metadata:**
- Created: 2026-07-15
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13798: Snapshot GC holding write lock across deadline-less proxy Remove permanently wedges all snapshot operations

## Description

The snapshot garbage collector in `core/metadata` can permanently wedge every snapshot operation on a node when a proxy snapshotter stops answering.

`metadata.(*snapshotter).garbageCollect` holds the snapshotter write lock (`s.l.Lock()`) for the entire pass, and `pruneBranch` calls ...

🔗 [Link](https://github.com/containerd/containerd/issues/13798)

**Metadata:**
- Created: 2026-07-15
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-07-16 02:23:49*
