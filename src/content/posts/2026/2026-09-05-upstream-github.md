---
title: "Upstream Github - 2026-09-05"
description: "CNCF upstream activity from github"
pubDate: 2026-09-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "lgtm", "cncf-cla: yes", "size/XS", "sig/testing", "sig/scalability", "area/jobs", "area/config", "test-infra", "size/XXL", "approved", "area/provider/openstack", "sig/cloud-provider", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "priority/important-soon", "area/kubelet", "sig/node", "kind/regression", "wg/device-management", "kind/cleanup", "sig/scheduling", "size/M", "release-note-none", "sig/apps", "needs-ok-to-test", "needs-priority", "size/L", "kind/feature", "area/code-generation", "sig/network", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "sig/auth", "sig/cli", "sig/instrumentation", "sig/architecture", "do-not-merge/work-in-progress", "area/dependency", "kind/dependency", "release-note", "area/test", "size/S", "do-not-merge/release-note-label-needed", "do-not-merge/contains-merge-commits", "cncf-cla: no", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "kind/documentation", "kind/api-change", "wg/workload-aware-scheduling", "area/e2e-test-framework", "do-not-merge/invalid-commit-message", "do-not-merge/cherry-pick-not-approved", "website", "containerd", "release", "cncf", "kind/initiative", "needs-group", "toc", "level/incubation", "dd/needs-triage", "kind/dd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### containerd/containerd: containerd 2.3.5

Welcome to the v2.3.5 release of containerd!

The fifth patch release for containerd 2.3 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53495**](https://github.com/containerd/containerd/security/advisories/GHSA-7jxh-36q5-gcqv)
  * [**GHSA-rp3h-jf77-q9p4**](https://github.com/containerd/containerd/security/advisories/GHSA-rp3h-jf77-q9p4)

### Highlights

#### Image Distribution

* Apply hardening to strip sensitive authentica...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.5)

**Metadata:**
- Version: v2.3.5
- Published: 2026-09-04
- Prerelease: No

### containerd/containerd: containerd 2.2.8

Welcome to the v2.2.8 release of containerd!

The eighth patch release for containerd 2.2 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53495**](https://github.com/containerd/containerd/security/advisories/GHSA-7jxh-36q5-gcqv)
  * [**GHSA-rp3h-jf77-q9p4**](https://github.com/containerd/containerd/security/advisories/GHSA-rp3h-jf77-q9p4)

### Highlights

#### Image Distribution

* Apply hardening to strip sensitive authentic...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.8)

**Metadata:**
- Version: v2.2.8
- Published: 2026-09-04
- Prerelease: No

### containerd/containerd: containerd 2.0.12

Welcome to the v2.0.12 release of containerd!

The twelfth patch release for containerd 2.0 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53495**](https://github.com/containerd/containerd/security/advisories/GHSA-7jxh-36q5-gcqv)
  * [**GHSA-rp3h-jf77-q9p4**](https://github.com/containerd/containerd/security/advisories/GHSA-rp3h-jf77-q9p4)

### Highlights

#### Image Distribution

* Apply hardening to strip sensitive authent...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.0.12)

**Metadata:**
- Version: v2.0.12
- Published: 2026-09-04
- Prerelease: No

### containerd/containerd: containerd 1.7.35

Welcome to the v1.7.35 release of containerd!

The thirty-fifth patch release for containerd 1.7 contains various fixes
and updates including security patches.

### Security Updates

* **containerd**
  * [**CVE-2026-53495**](https://github.com/containerd/containerd/security/advisories/GHSA-7jxh-36q5-gcqv)
  * [**GHSA-rp3h-jf77-q9p4**](https://github.com/containerd/containerd/security/advisories/GHSA-rp3h-jf77-q9p4)

### Highlights

#### Image Distribution

* Apply hardening to strip sensitive au...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v1.7.35)

**Metadata:**
- Version: v1.7.35
- Published: 2026-09-04
- Prerelease: No

### cncf/toc#2292: [Initiative]: Redirect archived https://tag-security.cncf.io/ to new locations

### Name

Redirect archived https://tag-security.cncf.io/ to new locations

### Short description

Prevent users from finding out-of-date copies of TAG Security and Compliance docs.

### Responsible group

TAG Security and Compliance

### Does the initiative belong to a subproject?

No

### Subproje...

🔗 [Link](https://github.com/cncf/toc/issues/2292)

**Metadata:**
- Created: 2026-09-04
- Comments: 0
- State: open

### cncf/toc#2291: [Incubation] Higress Incubation Application

# Review Project Moving Level Evaluation

[x] I have reviewed the TOC's [moving level readiness triage guide](https://github.com/cncf/toc/blob/main/operations/dd-toc-guide.md#initial-triageevaluation-prior-to-assignment), ensured the criteria for my project are met before opening this issue, and und...

🔗 [Link](https://github.com/cncf/toc/issues/2291)

**Metadata:**
- Created: 2026-09-04
- Comments: 1
- State: open

## Updates

### kubernetes/test-infra#37817: Update Azure scalability test to CAPZ v1.27

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37817)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37815: CPO: Remove obsolete jobs and combine remaining ones

We lose the ability to report jobs on a per-release basis in testgrid, but this is good enough for the other cloud providers and is much simpler to maintain.


🔗 [Link](https://github.com/kubernetes/test-infra/pull/37815)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141869: validateQualifiedName / resourcesQualifiedName silently accept names with more than one slash (e.g. "a/b/c")

### What happened?

`validateQualifiedName` in `pkg/apis/resource/validation/validation.go` and its declarative counterpart `resourcesQualifiedName` in `staging/src/k8s.io/apimachinery/pkg/api/validate/strfmt.go` both split a qualified name on / and only handle `len(parts) == 1` and `len(parts) == 2...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141869)

**Metadata:**
- Created: 2026-09-04
- Comments: 5
- State: open

### kubernetes/kubernetes#141855: [1.36] Kubelet retries DRA health streams for plugins that do not advertise health support

### What happened?

On Kubernetes 1.36, kubelet starts a `NodeWatchResources` health stream for every registered DRA plugin whenever `ResourceHealthStatus` is enabled. It does this even when the plugin does not advertise the optional `DRAResourceHealth` service in its registration response.

When th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141855)

**Metadata:**
- Created: 2026-09-04
- Comments: 2
- State: open

### kubernetes/kubernetes#141875: cleanup: remove debug logs from TestValidateNodeDeclaredFeatures

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes leftover `DEBUG:` `t.Logf` statements from `TestValidateNodeDeclaredFeatures` in `pkg/apis/core/validation/validation_test.go`.

These debug statements appear to be leftover from the implementatio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141875)

**Metadata:**
- Created: 2026-09-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141874: validation-gen: resolve cross-package validation calls to the nearest copy

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141874)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141873: WIP: bump kube-openapi, drop go-json-experiment

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

Updates kube-openapi to pick up https://github.com/kubernetes/kube-openapi/pull/635

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141873)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141872: validation: reject qualified names with more than one slash and add t…

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This change fixes a validation gap where qualified names containing more than one slash were implicitly accepted. Both the handwritten validator and the declarative validator now explicitly reject qualified nam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141872)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141871: test(e2e): label DRA Node Allocatable Resources tests with DRA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141871)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141870: DRA: add audit visibility for admin access

#### What type of PR is this?

/kind feature
/sig auth

#### What this PR does / why we need it:

Adds audit visibility for DRA administrative access entry points.

The audit annotation `resource.kubernetes.io/admin-access=true` is added when:

- a namespace is created with DRA administra...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141870)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141868: docs: add contributor documentation link

## Description

Added a link to the Kubernetes contributor documentation
in the README development section.

## Testing

Documentation-only change. No code changes.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141868)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141867: Linting: drop obsolete "unused" exclusion

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

https://github.com/dominikh/go-tools/issues/1294 has been fixed, and the excluded unused linter no longer flags
staging/src/k8s.io/client-go/util/workqueue/metrics.go; this removes the exclusion.

#### W...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141867)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141865: Linting: enable waitgroupgo hint

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Now that all supported branches are on Go 1.25+, we can enable the waitgroupgo hint to encourage the use of waitgroup.Go instead of waitgroup.Add/waitgrou.Done in new code.

#### Which issue(s) this PR is...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141865)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141864: Differentiate between PG and CPG correctly inside findNodeAndParent

#### What type of PR is this?
/kind bug
/sig scheduling

#### What this PR does / why we need it:
After unifying `PodGroup` and `CompositePodGroup`: https://github.com/kubernetes/kubernetes/pull/141081, we may have case where `findNodeAndParent()` would cause lookup collision and return unexpec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141864)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141863: iscsi: keep detaching block volume when the by-path link is gone

#### What type of PR is this?

/kind bug
/kind regression?

#### What this PR does / why we need it

`DetachBlockISCSIDisk` returned an error when the `/dev/disk/by-path/ip-<portal>-iscsi-<iqn>-lun-<n>` symlink for the volume was already missing — which is exactly the state left behind when the iSCS...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141863)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141862: Flatten the CPU metrics tests


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Replace the subtests with independent top-level tests, as requested during the review of #141261
It's only a reshape, no test coverage is added or removed.

#### Which issue(s) this PR is related to:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141862)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141861: Document platform-specific semantics of volumesAttached[].devicePath

#### What type of PR is this?

/kind documentation
/kind api-change

#### What this PR does / why we need it

`Node.status.volumesAttached[].devicePath` is documented as a device path, but its value is platform- and plugin-specific:

- On **Linux** nodes it is the host block-device node (e.g. `/dev/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141861)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141860: Cpg recursive status

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141860)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141859: WIP: e2e framework: record HTTP request count per test

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This could be useful to identify tests which cause an unusual amount of requests to the apiserver.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141859)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141858: [release-1.36] kubelet: avoid watching unsupported DRA health streams

#### What type of PR is this?

/kind bug
/sig node
/area kubelet
/wg device-management

#### What this PR does / why we need it:

Kubelet currently starts a DRA resource health stream even when the plugin does not advertise the optional health service. When the driver returns `codes.Unimplemented`, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141858)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141857: kubelet: don't force-remove evicted pod's containers before pod worker finishes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`HandlePodReconcile` force-deletes all of an evicted pod's containers as soon as the pod's API status is observed as evicted. That status can become visible before the pod worker has finished syncing the pod (which i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141857)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141854: deployment: reject out-of-range revision annotation values to avoid int64 overflow

## What this PR does / why we need it

`Revision()` in `pkg/controller/deployment/util/deployment_util.go` parsed the `deployment.kubernetes.io/revision` annotation with `strconv.ParseInt` and returned the value unchecked. When an adopted ReplicaSet carries `math.MaxInt64`, the controller computes t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141854)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141852: scheduler: Pod group scheduling exposing

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Extracts PodGroup scheduling-related logic into a dedicated `PodGroupSchedulingAlgorithm` structure (`pkg/scheduler/algorithm_podgroup.go`), continuing the decoupling of in-memory scheduling algorithms from...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141852)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141851: test/integration: share API server across pod group preemption subtests

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
This PR reuses an API server across `PodGroup` and `CompositePodGroup` preemption test cases, while explicitly cleaning up all test resources between cases.
This keeps each test case isolated and makes the int...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141851)

**Metadata:**
- Created: 2026-09-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57416: Move Topology-Aware Workload Scheduling further down in the scheduling section navigation

**This is a Feature Request**

**What would you like to be added**

[Move Topology-Aware Workload Scheduling](https://kubernetes.io/docs/concepts/scheduling-eviction/topology-aware-scheduling/) down in the left navigation of the Scheduling, Preemption and Eviction section, so that it sits next to Ga...

🔗 [Link](https://github.com/kubernetes/website/issues/57416)

**Metadata:**
- Created: 2026-09-04
- Comments: 3
- State: open

### kubernetes/website#57415: Raw HTML shown instead of Feature state description on Node-pressure Eviction page

**This is a Bug Report**

**Problem:**

In https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#filesystem-signals, `feature-state` nested inside `note` is not rendered; the raw HTML shows up as a code block:

> ```
> Note:
>        <div class="feature-state-notice feature...

🔗 [Link](https://github.com/kubernetes/website/issues/57415)

**Metadata:**
- Created: 2026-09-04
- Comments: 3
- State: open


---

*This content was automatically collected on 2026-09-05 02:53:15*
