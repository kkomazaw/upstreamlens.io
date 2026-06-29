---
title: "Upstream Github - 2026-06-29"
description: "CNCF upstream activity from github"
pubDate: 2026-06-29
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "needs-sig", "needs-triage", "sig/node", "wg/device-management", "pr", "sig/autoscaling", "size/S", "release-note-none", "sig/apps", "cncf-cla: yes", "needs-priority", "do-not-merge/needs-kind", "kind/bug", "area/kubelet", "lgtm", "release-note", "do-not-merge/cherry-pick-not-approved", "ok-to-test", "kind/regression", "size/L", "area/test", "sig/api-machinery", "sig/testing", "do-not-merge/work-in-progress", "kind/cleanup", "sig/storage", "size/M", "kind/api-change", "needs-ok-to-test", "sig/scheduling", "kind/flake", "area/addons", "area/guest-vm", "minikube", "priority/backlog", "language/en", "triage/accepted", "website", "sig/docs", "kind/documentation", "area/cluster-autoscaler", "do-not-merge/release-note-label-needed", "autoscaler", "area/vertical-pod-autoscaler", "size/XS", "approved", "area/provider/azure", "area/jobs", "area/config", "test-infra", "kubectl", "containerd", "area/snapshotters"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#140065: No-exchange ServiceAccount token for image pulls in kubelet

### What would you like to be added?

I'd like in-tree support for sending a ServiceAccount token straight to a container registry for image pulls in kubelet, without an exchange step.

### Why is this needed?

Some registries, e.g. Zot and Harbor Next, support OIDC Bearer tokens for image pulls wit...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140065)

**Metadata:**
- Created: 2026-06-28
- Comments: 2
- State: open

### kubernetes/kubernetes#140060: Add kubelet reporting for DRA-backed extended resource health

Follow-up for #139941.

In 1.37, #139941 only relaxes Pod status validation so DRA-backed extended resource health status names can be accepted by apiservers. It intentionally does not make kubelet report those names yet, because a 1.37 kubelet could otherwise submit Pod status that a downgraded 1.3...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140060)

**Metadata:**
- Created: 2026-06-28
- Comments: 2
- State: open

### kubernetes/kubernetes#140067: flake stabilize HPA reconciliation metric assertion

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140067)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140066: Automated cherry pick of #139850: kubelet startPodSync: reuse the previous context to fix memory leak regression

Cherry pick of #139850 on release-1.36.

#139850: kubelet startPodSync: reuse the previous context to fix memory leak regression

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140066)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140064: DRA: standardize mdevUUID attribute for virtualization workloads

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

With alpha-level DRA support integrated in virtualization runtimes like KubeVIrt , there is a specific attribute `mdevUUID` used for mediated device virtualization.

Currently, there is no standard attrib...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140064)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140063: WIP: DRA resourceslice controller: fix update after quick delete

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When updating a ResourceSlice, a more recent copy than in the underlying store gets cached by the MutationCache. Then when that ResourceSlice gets deleted on the apiserver and then the store, the MutationCache ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140063)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140062: storage: migrate CSIDriver volumeLifecycleModes to declarative validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`CSIDriver.spec.volumeLifecycleModes` is an immutable field, currently
enforced by a hand-written `ValidateImmutableField` call in
`ValidateCSIDriverUpdate`. This migrates that rule to declarative
validation as p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140062)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140061: fix(scheduler): refresh pod status after patch conflicts

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140061)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140059: test(scheduler): protect scheduler plugin test state from data races

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140059)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23252: [Bug] Helm-based addons fail to install inside guest VM on hosts without helm (causing integration CI checks to fail)

##  The bug

When trying to enable a Helm-based addon (such as the Traefik addon currently being developed) on virtualized drivers (e.g. KVM) where `helm` is not pre-installed on the host machine, the minikube addon manager attempts to download and install Helm inside the guest VM via the official `...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23252)

**Metadata:**
- Created: 2026-06-28
- Comments: 16
- State: open

### kubernetes/website#56293: Design a way to document feature gates across the project

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
1. Devise how we'll document featu...

🔗 [Link](https://github.com/kubernetes/website/issues/56293)

**Metadata:**
- Created: 2026-06-28
- Comments: 0
- State: open

### kubernetes/website#56291: Document API categories

**This is a Feature Request**

**What would you like to be added**
<!-- Describe as precisely as possible how this feature/enhancement should work from the user perspective. What should be changed, etc. -->

- Add a page about API categories, likely to be within https://kubernetes.io/docs/concepts/o...

🔗 [Link](https://github.com/kubernetes/website/issues/56291)

**Metadata:**
- Created: 2026-06-28
- Comments: 2
- State: open

### kubernetes/autoscaler#9887: cluster-autoscaler: pass context down RunOnce loop

### What type of PR is this?
/kind cleanup

### What this PR does 


**Autoscaler.RunOnce** did not accept a **context.Context** so a graceful termination signal could not interrupt a long-running autoscaling iteration. In large clusters, a single **RunOnce** call can take longer than the grac...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9887)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9885: [vpa-release-1.6] Fix GC process error variable

This is an automated cherry-pick of #9882

/assign adrianmoisey

```release-note
Fix bug where VPA Checkpoint GC error message wasn't logging correctly
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9885)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9884: [vpa-release-1.5] Fix GC process error variable

This is an automated cherry-pick of #9882

/assign adrianmoisey

```release-note
Fix bug where VPA Checkpoint GC error message wasn't logging correctly
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9884)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37350: run windows test on k8s 1.33.11 cluster for azure disk csi driver


```
# curl -sSL "https://management.azure.com/subscriptions/ff05f55d-22b5-44a7-b704-f9a8efd493ed/providers/Microsoft.Compute/locations/westus2/communityGalleries/ClusterAPI-f72ceb4f-5159-4c26-a0fe-2ea738f0d019/images/capi-win-2022-containerd/versions?api-version=2024-03-03"   -H "Authorization: B...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37350)

**Metadata:**
- Created: 2026-06-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1858: kubectl apply -f directory/ --exclude file1 file2

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:

I would like to propose adding an --exclude (or --exclude-pattern) flag to the kubectl apply command when used recursively or with a directory target (e.g., kubectl apply -f <directory> ...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1858)

**Metadata:**
- Created: 2026-06-28
- Comments: 1
- State: open

### kubernetes/kubectl#1852: Improve support for API categories

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:
- Explain API categories better within the built in `kubectl` documentation
- Signpost people to `kubectl api-resources --categories foo`
- Make categories more useful to people defining ...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1852)

**Metadata:**
- Created: 2026-06-28
- Comments: 3
- State: open

### containerd/containerd#13680: Idmapped overlay snapshot diff exports host UID/GID into the image layer

### Description

`ctr snapshots diff` exports host-mapped UID/GID values when diffing an idmapped overlay active snapshot.

On the test host, the subordinate ID ranges are:

```text
/etc/subuid: leo:524288:65536
/etc/subgid: leo:524288:65536
```

The container uses:

```text
0:524288:65536
```

A fi...

🔗 [Link](https://github.com/containerd/containerd/issues/13680)

**Metadata:**
- Created: 2026-06-28
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-29 03:40:14*
