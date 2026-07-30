---
title: "Upstream Github - 2026-07-30"
description: "CNCF upstream activity from github"
pubDate: 2026-07-30
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "committee/steering", "community", "needs-triage", "kube-state-metrics", "sig/node", "kind/flake", "priority/important-longterm", "triage/accepted", "needs-sig", "sig/scheduling", "kind/feature", "sig/api-machinery", "pr", "size/XS", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "area/test", "priority/important-soon", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "sig/testing", "kind/failing-test", "sig/architecture", "area/conformance", "kind/bug", "area/kubelet", "release-note", "size/XXL", "area/kubectl", "lgtm", "sig/auth", "approved", "sig/cli", "area/apiserver", "area/cloudprovider", "size/M", "sig/cloud-provider", "area/dependency", "wg/device-management", "area/provider/gcp", "sig/cluster-lifecycle", "size/S", "area/kubeadm", "sig/etcd", "size/XL", "kind/api-change", "area/code-generation", "sig/apps", "do-not-merge/work-in-progress", "website", "sig/docs", "language/ja", "area/localization", "test-infra", "area/jobs", "area/config", "needs-rebase", "area/provider/openstack", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "ok-to-test", "area/infra", "area/terraform", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "cloud-provider-gcp", "release", "cloud-provider-openstack", "cloud-provider-vsphere", "sig/release", "needs-kind", "area/release-eng", "do-not-merge/hold", "cncf", "lfx mentorship", "Term 3: Sept-Nov", "2026", "Mentors Confirmed", "Maintainer/Contribex Approved", "Proposal", "Validation Passed", "CNCF Approved", "Exported", "mentoring"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141040: kubelet: wire context to syncpods to allow multiple stops

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

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141040)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141039: kubelet: migrate pod resource allocation checkpoint format to store the entire PodSpec

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

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141039)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10077: Scaledown

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10077)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: Yes

### cncf/mentoring#2029: [CNCF LFX Proposal] Jaeger OpenTelemetry-Native Query and State Layers Migration

### CNCF Project

Jaeger

### Term

2026 Term 3 (Sep-Nov)

### Program Name

OpenTelemetry-Native Query and State Layers Migration

### Program Description

## Description

Jaeger UI is two-thirds through three interlocking migrations at different stages. This program finishes all three and deletes ...

🔗 [Link](https://github.com/cncf/mentoring/issues/2029)

**Metadata:**
- Created: 2026-07-29
- Comments: 12
- State: open

## Updates

### kubernetes/community#9090: Steering Committee Nomination: Medya Ghazizadeh (@medyagh)

Hi everyone,

After 10 years of contributing to Kubernetes, I'm self-nominating for the 2026 Kubernetes Steering Committee election. I'm running as an independent this year — not representing any company, just myself and the community I've grown up in.

I've been a technical lead for engineering tea...

🔗 [Link](https://github.com/kubernetes/community/issues/9090)

**Metadata:**
- Created: 2026-07-29
- Comments: 14
- State: open

### kubernetes/kube-state-metrics#3052: customResourceState registers the metric family and then serves nothing

## Summary

With a Custom Resource State config, KSM v2.13.0 logs that it resolved the
plurals and added the metric family, and then serves **zero series** for it. No
error is emitted at any log level. The same config produced series exactly once,
and the only variable I could correlate it with was ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3052)

**Metadata:**
- Created: 2026-07-29
- Comments: 1
- State: open

### kubernetes/kubernetes#141036: ci-kubernetes-node-arm64-ubuntu-serial periodically doesn't come up

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-node-arm64-ubuntu-serial/2082290551972958208 the cluster doesn't start

### Which tests are flaking?

cluster doesn't come up 

### Since when has it been flaking?

for a while it seems

### Testgrid link
...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141036)

**Metadata:**
- Created: 2026-07-29
- Comments: 3
- State: open

### kubernetes/kubernetes#141027: [Flaking tests] k8s.io/kubernetes/test/integration/scheduler: preemption - TestInterPodAffinityPreemption

### Which jobs are flaking?


https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-race-master   
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141027)

**Metadata:**
- Created: 2026-07-29
- Comments: 4
- State: open

### kubernetes/kubernetes#141025: [Feature][Scheduler] PodGroup/CompositePodGroup scheduling failure diagnosis is insufficient for debugging

## PodGroup/CompositePodGroup scheduling failure diagnosis is insufficient for debugging

### Problem

When a PodGroup (gang) fails to schedule, the diagnostic information surfaced to users — via pod conditions, pod events, and PodGroup conditions — is incomplete, misleading, and does not scale to l...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141025)

**Metadata:**
- Created: 2026-07-29
- Comments: 2
- State: open

### kubernetes/kubernetes#141022: High volume of Pod lifecycle events during scale tests causes API Server throttling (APF rejections) and etcd bloat

@michaelasp and I were during high-churn scale testing using Clusterloader2 (creating and deleting approximately 50,000 pods in a 5-minute window), and we observed a massive volume of event generation that severely impacted the API control plane. 

We analyzed a sample of 145,259 events generated du...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141022)

**Metadata:**
- Created: 2026-07-29
- Comments: 5
- State: open

### kubernetes/kubernetes#141044: Document KUBE_FASTBUILD/KUBE_BUILD_PLATFORMS in make help

These flags already existed in hack/lib/golang.sh but weren't documented anywhere, so the default `make` cross-compiles client binaries for ~10 platforms even for local iteration. Surface them in `make all PRINT_HELP=y` so the fast path is discoverable.

<!--  Thanks for sending a pull request!  H...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141044)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141043: add CRUD e2e tests for new EvictionRequest endpoints


#### What type of PR is this?

/kind cleanup
/kind failing-test

#### What this PR does / why we need it:

Every new API should have e2e test coverage for new endpoints

#### Which issue(s) this PR is related to:
<!--
Please link relevant issues to help with tracking.

To automaticall...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141043)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141041: Fix CPU Manager re-allocations for pods using pod-level resources after kubelet restarts


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

##### > Motivation

`allocatePodForAdd` used to allocate CPUs for a pod with pod-level resources unconditionally, even when the pod already had a pod-level CPU set restored from the state checkpoint (pod re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141041)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141035: Avoid reconcile panic on error

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Avoids a nil panic if `kubectl auth reconcile` errors reconciling bindings

#### Does this PR introduce a user-facing change?
```release-note
Fixes a panic in `kubectl auth reconcile` if an error was encoun...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141035)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141033: etcd: bump etcd sdk to v3.7.1

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
- Bump etcd SDK modules (`go.etcd.io/etcd/{api,client/pkg,client,pkg,server}/v3`) from v3.7.0 to v3.7.1
- `go.etcd.io/etcd/raft/v3` is intentionally left unchanged, as it follows its own release cadence

###...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141033)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141032: etcd: update etcd image to v3.7.1

Update etcd images to v3.7.1 across build dependencies, kubeadm defaults, GCE manifests, test manifests, and sample-apiserver deployment.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141032)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141030: scheduler: implement recursive readiness cache for CPG preenqueue


#### What this PR does / why we need it:

**Problem:**
Currently, during scheduling cycles (`PreEnqueue` and `Permit` plugin evaluations), the scheduler builds a `CompositePodGroup` snapshot for every pod. Previously, calculating hierarchical readiness required dynamically traversing the CPG tr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141030)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141029: Verify PodGroupCycleState availability discriminates sync from async Unreserve


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Stripping `PodGroupCycleState` prior to asynchronous binding (`SetPodGroupSchedulingCycle(nil)`) is a core scheduler invariant enforced by `scheduleOnePodGroup` and `bindingCycle`. 

Plugins like `dynam...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141029)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141028: Enforce pod UID in kubelet exec and run routes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The UID-qualified kubelet streaming routes:

    /exec/{namespace}/{pod}/{uid}/{container}
    /run/{namespace}/{pod}/{uid}/{container}

parse and forward the pod UID, but the underlying resolution in
`fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141028)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141026: kubelet/cpumanager: reduce iterations during uncore cache allocation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141026)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141024: Add tie-breaker to non-extender node scores

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141024)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141023: Make MinGroupCount mutable for CompositePodGroups

#### What type of PR is this?

/kind feature
/kind api-change
/sig scheduling

#### What this PR does / why we need it:

Permit `CompositePodGroup.Spec.SchedulingPolicy.Gang.MinGroupCount` to be mutable across `v1alpha3` and `v1beta1`, enabling dynamic resizing of hierarchical gang schedulin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141023)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141021: Add CompositePodGroup garbage collection finalizer protection and int…

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Implements garbage collection finalizer protection for `CompositePodGroup` objects to enforce hierarchical, bottom-up cleanup:

- **Admission**: Extends the `PodGroupProtection` admission plugin (`plugin/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141021)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141020: Extract sched alg

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141020)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141019: pkg/kubelet/cm: add unit tests for PostStopContainer and PreCreateContainer

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Adds comprehensive unit test coverage for the `internalContainerLifecycleImpl` struct in `pkg/kubelet/cm`:

### `internal_container_lifecycle_test.go` (cross-platform)

**TestPreStartContainer** (existing, enhanced):
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141019)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141017: Fix eviction to defer to pod grace period when MaxPodGracePeriodSecon…

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The `--eviction-max-pod-grace-period` flag is documented as *"Maximum allowed
grace period (in seconds) to use when terminating pods in response to a soft
eviction threshold being met. If negative, defer to p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141017)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56667: [es] localize content/en/docs/contribute/review/_index.md to Spanish

## Scope

Translate `content/en/docs/contribute/review/_index.md` into `content/es/docs/contribute/review/_index.md`.

## Priority

Audit priority: **10 of 2,244** missing Spanish translations (composite score **8944**; Tier 1; 3 other localizations; 14 source lines).

## Acceptance criteria

- Pres...

🔗 [Link](https://github.com/kubernetes/website/issues/56667)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56666: [es] localize content/en/docs/setup/production-environment/tools/kubeadm/_index.md to Spanish

## Scope

Translate `content/en/docs/setup/production-environment/tools/kubeadm/_index.md` into `content/es/docs/setup/production-environment/tools/kubeadm/_index.md`.

## Priority

Audit priority: **9 of 2,244** missing Spanish translations (composite score **8914**; Tier 1; 3 other localizations; ...

🔗 [Link](https://github.com/kubernetes/website/issues/56666)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56665: [es] localize content/en/docs/concepts/architecture/cgroups.md to Spanish

## Scope

Translate `content/en/docs/concepts/architecture/cgroups.md` into `content/es/docs/concepts/architecture/cgroups.md`.

## Priority

Audit priority: **8 of 2,244** missing Spanish translations (composite score **8898**; Tier 1; 4 other localizations; 148 source lines).

## Acceptance criter...

🔗 [Link](https://github.com/kubernetes/website/issues/56665)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56664: [es] localize content/en/docs/contribute/participate/_index.md to Spanish

## Scope

Translate `content/en/docs/contribute/participate/_index.md` into `content/es/docs/contribute/participate/_index.md`.

## Priority

Audit priority: **7 of 2,244** missing Spanish translations (composite score **8886**; Tier 1; 4 other localizations; 126 source lines).

## Acceptance criter...

🔗 [Link](https://github.com/kubernetes/website/issues/56664)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56663: [es] localize content/en/docs/concepts/cluster-administration/proxies.md to Spanish

## Scope

Translate `content/en/docs/concepts/cluster-administration/proxies.md` into `content/es/docs/concepts/cluster-administration/proxies.md`.

## Priority

Audit priority: **6 of 2,244** missing Spanish translations (composite score **8867**; Tier 1; 4 other localizations; 67 source lines).

#...

🔗 [Link](https://github.com/kubernetes/website/issues/56663)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56662: [es] localize content/en/docs/setup/best-practices/cluster-large.md to Spanish

## Scope

Translate `content/en/docs/setup/best-practices/cluster-large.md` into `content/es/docs/setup/best-practices/cluster-large.md`.

## Priority

Audit priority: **5 of 2,244** missing Spanish translations (composite score **8841**; Tier 1; 4 other localizations; 131 source lines).

## Accepta...

🔗 [Link](https://github.com/kubernetes/website/issues/56662)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56661: [es] localize content/en/docs/concepts/containers/container-environment.md to Spanish

## Scope

Translate `content/en/docs/concepts/containers/container-environment.md` into `content/es/docs/concepts/containers/container-environment.md`.

## Priority

Audit priority: **4 of 2,244** missing Spanish translations (composite score **8785**; Tier 1; 4 other localizations; 65 source lines)...

🔗 [Link](https://github.com/kubernetes/website/issues/56661)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56660: [es] localize content/en/docs/setup/best-practices/_index.md to Spanish

## Scope

Translate `content/en/docs/setup/best-practices/_index.md` into `content/es/docs/setup/best-practices/_index.md`.

## Priority

Audit priority: **3 of 2,244** missing Spanish translations (composite score **8744**; Tier 1; 4 other localizations; 4 source lines).

## Acceptance criteria

- ...

🔗 [Link](https://github.com/kubernetes/website/issues/56660)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56659: [es] localize content/en/docs/concepts/cluster-administration/certificates.md to Spanish

## Scope

Translate `content/en/docs/concepts/cluster-administration/certificates.md` into `content/es/docs/concepts/cluster-administration/certificates.md`.

## Priority

Audit priority: **2 of 2,244** missing Spanish translations (composite score **8729**; Tier 1; 4 other localizations; 9 source l...

🔗 [Link](https://github.com/kubernetes/website/issues/56659)

**Metadata:**
- Created: 2026-07-30
- Comments: 1
- State: open

### kubernetes/website#56658: [es] localize content/en/docs/concepts/architecture/controller.md to Spanish

## Scope

Translate `content/en/docs/concepts/architecture/controller.md` into `content/es/docs/concepts/architecture/controller.md`.

## Priority

Audit priority: **1 of 2,244** missing Spanish translations (composite score **8700**; Tier 1; 5 other localizations; 170 source lines).

## Acceptance ...

🔗 [Link](https://github.com/kubernetes/website/issues/56658)

**Metadata:**
- Created: 2026-07-30
- Comments: 2
- State: open

### kubernetes/website#56655: [ja] Update content/ja/docs/tutorials/kubernetes-basics/create-cluster/_index.md

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/56655)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37584: Remove testing of 1.33 jobs

1.33 is out of support so we should need an audit of jobs that are still runing 1.33.

I saw https://testgrid.k8s.io/sig-node-dynamic-resource-allocation#ci-kind-dra-1-33.

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37584)

**Metadata:**
- Created: 2026-07-29
- Comments: 8
- State: open

### kubernetes/test-infra#37586: Drop trailing slash from test-package-url in ec2-alpha-features

`ci-kubernetes-e2e-ec2-alpha-features` is the only job in the repo that passes `--test-package-url=https://dl.k8s.io/` with a trailing slash:

```
$ grep -rn "test-package-url=https://dl.k8s.io/" config/jobs/
config/jobs/kubernetes/sig-cloud-provider/periodic-e2e.yaml:181: --test-package-url=https:/...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37586)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37577: CAPA: add release-2.13 jobs, drop release-2.9 and release-2.10

## Summary
- Add presubmit and periodic Prow jobs for CAPA `release-2.13` branch using `kubekins-e2e:v20260727-e41b93b47b-1.35`
- Remove all `release-2.9` and `release-2.10` job configurations
- Drop `release-2.11` periodic jobs (presubmits only going forward)
- Update `prowjob-gen` config and perio...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37577)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37570: cloud-provider-openstack: increase memory to solve OOM kills during tests

addressing OOM kills like https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/cloud-provider-openstack/3146/pull-cloud-provider-openstack-check/2076627454247571456

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37570)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10076: Prevent atomic node groups from burning ClusterAutoscalerScaleDownNodeRemovalLatency SLO

#### What type of PR is this?

/kind bug
/kind feature

#### What this PR does / why we need it:

This PR refactors scale-down simulation for Atomic Node Pools (`ZeroOrMaxNodeScaling=true`) to evaluate candidate groups as all-or-nothing units with early-abort while preserving fair interleavin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10076)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10075: Bump the non-kubernetes group across 2 directories with 25 updates

Bumps the non-kubernetes group with 3 updates in the /vertical-pod-autoscaler directory: [github.com/prometheus/client_golang](https://github.com/prometheus/client_golang), [github.com/go-openapi/swag](https://github.com/go-openapi/swag) and [go.yaml.in/yaml/v3](https://github.com/yaml/go-yaml).
Bum...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10075)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9789: start using cdn.registry.k8s.io in registry-sandbox.registry.k8s.io

cdn.registry.k8s.io was provisioned in #8819, and I'm rolling it out on our sandbox instance.

The IAM change is to fix the broken prowjob https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/post-registry-push-images/2082519543736963072

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9789)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1281: Flake in cloud-provider-gcp-e2e-full: gkops up fails with 404 The specified bucket does not exist

**Describe the bug**
A race condition during `gkops up` in the `cloud-provider-gcp-e2e-full` presubmit causes the test to flake with a `404: The specified bucket does not exist` error from GCS.

**To Reproduce**
This occasionally happens during Prow CI runs. Example failure:
https://prow.k8s.io/view...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1281)

**Metadata:**
- Created: 2026-07-29
- Comments: 3
- State: open

### kubernetes/cloud-provider-openstack: openstack-manila-csi-2.36.2

Manila CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-manila-csi-2.36.2)

**Metadata:**
- Version: openstack-manila-csi-2.36.2
- Published: 2026-07-29
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-manila-csi-2.36.1

Manila CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-manila-csi-2.36.1)

**Metadata:**
- Version: openstack-manila-csi-2.36.1
- Published: 2026-07-29
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.36.1

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.36.1)

**Metadata:**
- Version: openstack-cinder-csi-2.36.1
- Published: 2026-07-29
- Prerelease: No

### kubernetes/cloud-provider-openstack#3154: [release-1.36] feat: add support for load balancer, listener, and pool tags annotations

This is an automated cherry-pick of #3149

/assign kayrus

```release-note
[openstack-cloud-controller-manager] Support adding tags to load balancers, listeners, and pools via Service annotations.
```

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3154)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3153: occm: convert bash based lbaas e2e tests into go tests

**What this PR does / why we need it**:

old bash based tests are slow and not modular. new go-based tests are modular, fast and provide more logs for debugging.

**Special notes for reviewers**:

The original bash tests had a bug where OVN provider failures were silently ignored. When creatin...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3153)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1835: 🐛 Handle timing race when fetching CAPI Machine and VM objects

<!-- Thanks for sending a pull request! -->

**What this PR does / why we need it**:
When running VM lifecycle specs sequentially, a newly recreated Node might register with the cluster before the CAPI controllers have finished updating its NodeRef mapping in the bootstrap cluster's Machine statu...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1835)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1829: 🐛 fix node IP address parsing in test helper

<!-- Thanks for sending a pull request! -->

**What this PR does / why we need it**:
In the getInternalIPFromNode and getExternalIPFromNode helpers, returning address.String() returns the stringified Go/protobuf struct. Use address.Address to return the raw IP.

**Which issue this PR fixes** *(...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1829)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4482: Bump github.com/go-git/go-git/v5 from 5.19.1 to 5.19.2 in the all group

Bumps the all group with 1 update: [github.com/go-git/go-git/v5](https://github.com/go-git/go-git).

Updates `github.com/go-git/go-git/v5` from 5.19.1 to 5.19.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-git/go-git/releases">github.com/go-git/go-git...

🔗 [Link](https://github.com/kubernetes/release/pull/4482)

**Metadata:**
- Created: 2026-07-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4481: release gcb-docker-gcloud as a releng image

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/release/pull/4481)

**Metadata:**
- Created: 2026-07-29
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-30 02:07:11*
