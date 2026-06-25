---
title: "Upstream Github - 2026-06-25"
description: "CNCF upstream activity from github"
pubDate: 2026-06-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "sig/scheduling", "sig/node", "triage/accepted", "needs-sig", "needs-triage", "sig/api-machinery", "kind/flake", "priority/important-soon", "pr", "area/test", "sig/network", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "release-note", "size/L", "kind/feature", "area/release-eng", "sig/auth", "sig/apps", "sig/windows", "sig/cli", "cncf-cla: yes", "sig/instrumentation", "sig/testing", "sig/release", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "do-not-merge/hold", "area/code-generation", "sig/cloud-provider", "needs-priority", "area/e2e-test-framework", "area/dependency", "area/code-organization", "wg/device-management", "kind/api-change", "release-note-none", "size/M", "size/XXL", "do-not-merge/work-in-progress", "kind/cleanup", "lgtm", "size/XS", "approved", "size/S", "area/kubeadm", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "do-not-merge/needs-sig", "wg/workload-aware-scheduling", "priority/important-longterm", "kind/failing-test", "ok-to-test", "priority/backlog", "language/en", "website", "cloud-provider-aws", "k8s.io", "area/jobs", "do-not-merge/invalid-owners-file", "area/config", "test-infra", "co/iso", "minikube", "area/cluster-autoscaler", "autoscaler", "area/core-autoscaler", "perf-tests", "envoyproxy", "gateway", "containerd", "area/distribution", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139996: RFC: Skip CriticalPodAdmissionHandler for resizes

### Proposal

Skip the `CriticalPodAdmissionHandler` when evaluating resize feasibility, contingent on the `SchedulerPreemptionForPodResize` feature gate.

### Background

The `CriticalPodAdmissionHandler` forcefully evicts pods from the node to make room for system-critical priority pods. This admi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139996)

**Metadata:**
- Created: 2026-06-24
- Comments: 2
- State: open

### kubernetes/kubernetes#140000: feat: Scheduler Preemption for In-Place Pod Resize (alpha)

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

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140000)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139980: Reimplement WAP with in place filter reprieval

 #### What type of PR is this?

/kind feature


#### What this PR does / why we need it:

This PR aligns the implementation of the Workload-Aware Preemption with the description of it from the KEP: https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/5710-workload-aware-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139980)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1455: Support explicit backend security groups for instance-target NLB Services

**What would you like to be added**:
Add a Service annotation or equivalent configuration that lets users explicitly select the backend security group(s) where `cloud-provider-aws` writes instance-target NLB NodePort and health-check ingress rules.

For example:

```yaml
service.beta.kubernetes.io/a...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/issues/1455)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

### containerd/containerd#13663: Add tls_groups configuration for Post-Quantum TLS in registry host config

### What is the problem you're trying to solve

France's ANSSI will [stop certifying security products without post-quantum cryptography starting in 2027](https://gizmodo.com/the-quantum-threat-to-encryption-is-coming-france-just-set-a-2027-deadline-2000773650). The US White House issued [Executive ...

🔗 [Link](https://github.com/containerd/containerd/issues/13663)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes: v1.37.0-alpha.2


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.0-alpha.2)

**Metadata:**
- Version: v1.37.0-alpha.2
- Published: 2026-06-25
- Prerelease: Yes

### kubernetes/kubernetes#139992: Race condition on scheduled Pod when `NoExecute` taint is removed from Node

### What happened?

This is possibly the same issue as #119862 however that got closed due to inactivity so I'm creating a new issue rather than comment on that one and risk it being missed. I believe this issue is still occurring. We have exactly the same setup as in that ticket, albeit our Kuberne...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139992)

**Metadata:**
- Created: 2026-06-24
- Comments: 2
- State: open

### kubernetes/kubernetes#139987: Kubelet UID-qualified exec/run routes ignore mismatched pod UID during pod resolution

### What happened?

While investigating kubelet streaming endpoints, I noticed that the UID-qualified `exec` and `run` routes do not appear to enforce the supplied pod UID during pod resolution.

Routes:

```
/exec/{namespace}/{pod}/{uid}/{container}
/run/{namespace}/{pod}/{uid}/{container}
```

par...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139987)

**Metadata:**
- Created: 2026-06-24
- Comments: 2
- State: open

### kubernetes/kubernetes#139986: [Flaking Test] [sig-api-machinery] Etcd failure [It] should recover from SIGKILL [Disruptive] [sig-api-machinery, Disruptive]

### Which jobs are flaking?

[ci-kubernetes-e2e-gce-cos-serial-master](https://testgrid.k8s.io/sig-release-master-informing#gce-cos-serial-master&exclude-non-failed-tests=)

### Which tests are flaking?

Test

### Since when has it been flaking?

[5/27/2026](https://prow.k8s.io/view/gs/kubernetes-ci...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139986)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

### kubernetes/kubernetes#139979: [Flaking Test] [sig-node] Containers Lifecycle: init container started before restartable init container (ci-node-crio-conformance)

### Which jobs are flaking?

* sig-release-master-blocking
* ci-node-crio-conformance

### Which tests are flaking?

* [kubetest2.Test](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-node-crio-conformance/2069060667238780928)

### Since when has it been flaking?

* First flaky: Tue, 09 Jun 2...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139979)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

### kubernetes/kubernetes#140004: Update go version to 1.26, fix 1.26 vet errors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140004)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140003: Add declarative validation for TokenRequest

#### What type of PR is this?

/kind feature


#### What this PR does / why we need it:

This PR introduces Declarative Validation (DV) for the `TokenRequest` API resource in the `authentication.k8s.io` group. 

Specifically, it includes the following changes:
* **API Markers:** Adds decla...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140003)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140001: apiserver/admission: publish all VAP audit failures in a single annot…


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

**Problem:**
When multiple ValidatingAdmissionPolicy bindings evaluate to an Audit action for a single request, the dispatcher published each validation failure immediately using the shared `"validation_failure"` an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140001)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139999: Add jpbetz to API approvers

#### What type of PR is this?

API approver nomination.

/kind cleanup

#### What this PR does / why we need it:

Nomination was [submitted to kubernetes-api-reviewers](https://groups.google.com/g/kubernetes-api-reviewers/c/sF4Msh0M_7s?e=48417069) on June 16, 2026 and so far has received sup...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139999)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139993: Introduce Node Lifecycle Conditions

Add several "well-known" conditions that provide lifecycle information about a Node:
- GracefulNodeShutdownInProgress
- DrainInProgress
- Drained
- MaintenancePlanned
- MaintenanceInProgress

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first tim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139993)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139991: leaderelection: Wait for OnStartedLeading before releasing the lock

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When ReleaseOnCancel is true, LeaderElector.Run() waits for the OnStartedLeading callback to return before exiting. This ensures that the code guarded by the lease has finished before release() is called in ren...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139991)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139989: kubeadm: avoid contradictory kube-proxy bindAddress warnings

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

kubeadm emits contradictory warnings for kube-proxy `bindAddress` when users explicitly set `0.0.0.0` or `::`. The recommended value alternated based on the API server advertise address family, even though both addre...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139989)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139988: events: enable commentstart kube-api-linter rule

#### What type of PR is this?

/kind api-change

#### What this PR does / why we need it:

Enables the `commentstart` kube-api-linter rule for the events.k8s.io API group by removing it from the rule's exception list.

The only violations in the group were the embedded `metadata` fields on `Event` a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139988)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139985: [DO NOT REVIEW] test-only - check if unit tests run in presubmit

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139985)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139984: test/e2e_node: increase timeout for static pod multiple updates test

The test "should update a static pod when the static pod is updated multiple times during the graceful termination period" is currently flaking. After 300 rapid manifest updates, the recreated mirror pod remains in Pending state and the Eventually assertion times out waiting for it to reach Running....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139984)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139983: KAL: Enforce declarative validation tags on APIs using SSA tags

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR adds `dependenttags`  marker checks to the Kube API linter configuration to enforce that any fields that use server-side-apply list markers (`+listType and +listMapKey`) also specify their correspon...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139983)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139982: WIP, DRA: Fix Numa hinting for Toplogy Manager

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139982)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139978: Return an error when AddPlugin fails instead of logging

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Currently the error from actualStateOfWorldUpdater.AddPlugin is only logged. It never returns an error nor notify the plugin consumer. 

#### Which issue(s) this PR is related to:
Fixes #136462
<!--
Please...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139978)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139976: Add regression test for invalid DeleteOptions.dryRun type

## What this PR does

Adds regression tests covering the case where `DeleteOptions.dryRun` is sent with an invalid JSON type (string instead of array). The API server must return HTTP 400, not 500.

### Background

A DELETE request with `{"dryRun":"All"}` (string instead of `[]string`) caused the AP...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139976)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139975: Add node resource test to e2e serial lanes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139975)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56232: Document DRA and TopologyManager NUMA alignment limitations

**This is a Feature Request**
﻿
**What would you like to be added**
﻿
Add documentation explaining the current NUMA alignment boundary between Dynamic Resource Allocation (DRA) and kubelet TopologyManager.
﻿
The docs should clarify that DRA-managed devices do not participate in TopologyManager decis...

🔗 [Link](https://github.com/kubernetes/website/issues/56232)

**Metadata:**
- Created: 2026-06-24
- Comments: 2
- State: open

### kubernetes/website#56231: Broken links

Follwing this site https://v1-32.docs.kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/
these links are broken
[Upgrading a kubeadm cluster from 1.30 to 1.31](https://v1-31.docs.kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/)
[Upgrading a kubeadm cluster from...

🔗 [Link](https://github.com/kubernetes/website/issues/56231)

**Metadata:**
- Created: 2026-06-24
- Comments: 7
- State: open

### kubernetes/k8s.io#9646: nvidia gpu test suites failing from lambda account expiring

### Which jobs are failing?

all in https://testgrid.k8s.io/sig-node-gpu

### Which tests are failing?

they fail to start

### Since when has it been failing?

last week

### Testgrid link

https://testgrid.k8s.io/sig-node-gpu

### Reason for failure (if possible)

 Error: Your account is inactive....

🔗 [Link](https://github.com/kubernetes/k8s.io/issues/9646)

**Metadata:**
- Created: 2026-06-24
- Comments: 3
- State: open

### kubernetes/test-infra#37324: Sync CAPO owners

I have forgotten to keep these up to date.
See https://github.com/kubernetes-sigs/cluster-api-provider-openstack/blob/main/OWNERS_ALIASES for CAPO owners.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37324)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23220: Migrate ISO build from Jenkins to GitHub Actions


## Motivation

The ISO build currently runs on a dedicated Jenkins node that builds both architectures sequentially with no visibility into build progress. Moving to GitHub Actions gives us:

- **Native matrix builds** — build amd64 and arm64 in parallel on native runners
- **Ccache with GitHub Cac...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23220)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

### kubernetes/minikube#23218: iso: Clean build output and check disk space before ISO build

The ISO build on Jenkins is failing with:

    xorriso : FAILURE : Image size 191830s exceeds free space on media 34920s

Investigation showed the build nodes accumulate stale data over time.
The worst node had 51G free before cleanup, and 228G free after cleanup.

Changes:

- Clean out/ di...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23218)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9859: clusterapi/node_groups: Improve DeleteNodes method

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area cluster-autoscaler


**Is your feature request designed to solve a problem? If so describe the problem this feature should solve...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9859)

**Metadata:**
- Created: 2026-06-24
- Comments: 1
- State: open

### kubernetes/autoscaler#9861: dependabot(deps): bump github.com/onsi/gomega from 1.42.0 to 1.42.1 in /cluster-autoscaler

Bumps [github.com/onsi/gomega](https://github.com/onsi/gomega) from 1.42.0 to 1.42.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/onsi/gomega/releases">github.com/onsi/gomega's releases</a>.</em></p>
<blockquote>
<h2>v1.42.1</h2>
<h2>1.42.1</h2>
<p>Bump...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9861)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9860:  CA: use consistent logic for determining upcoming Nodes in ClusterStateRegistry

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

tl;dr:
CSR had 2 different places calculating upcoming Nodes with slightly different logic. One of them didn’t handle Nodes going through scale-down correctly, which could lead to not predicting any upcoming N...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9860)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4159: Support label selector for WaitForGenericK8sObjects

/kind feature

Adds labelSelector support to WaitForGenericK8sObjects.

Tests:
- go test ./pkg/measurement/util
- go test ./pkg/measurement/common -run 'TestGetNamespaces_AllNamespaces|TestGetLabelSelector'

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4159)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4158: Provide NodeHealthTracker measurement for CL2

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4158)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: Yes

### envoyproxy/gateway#9341: Listener with no routes causes xDS rejection when sharing port with HTTPS listener

*Description*:

  When a Gateway has both an HTTPS listener (TLS terminate, no hostname) and a TCP or TLS listener on the same port, and the TCP/TLS listener has no routes attached, Envoy rejects the xDS
  listener update with a duplicate filter chain matcher error.

  The error is continuous and bl...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9341)

**Metadata:**
- Created: 2026-06-24
- Comments: 0
- State: open

### envoyproxy/gateway#9319: Standalone mode: ListenerSet index not registered, causing repeated reconciliation errors


### Description

When running Envoy Gateway in standalone (Host) mode with the File provider, the offline controller does not register the `gatewayListenerSetIndex` index. This causes repeated errors during Gateway reconciliation, and ListenerSet functionality is completely non-functional.

### Rep...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9319)

**Metadata:**
- Created: 2026-06-24
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Commits
- 6f2d6c2: add overlaybd-resize tool for userspace ext4 resize on overlaybd images (钧可) [#408](https://github.com/containerd/overlaybd/pull/408)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-06-24
- Prerelease: Yes


---

*This content was automatically collected on 2026-06-25 02:58:58*
