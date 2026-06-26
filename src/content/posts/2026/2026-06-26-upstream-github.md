---
title: "Upstream Github - 2026-06-26"
description: "CNCF upstream activity from github"
pubDate: 2026-06-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/M", "approved", "sig/testing", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "size/XS", "area/provider/azure", "lgtm", "size/S", "sig/node", "issue", "kind/bug", "needs-sig", "needs-triage", "kind/feature", "area/test", "sig/network", "area/kubelet", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/api-machinery", "release-note", "size/L", "sig/apps", "sig/windows", "sig/cli", "sig/release", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "sig/cloud-provider", "needs-priority", "area/e2e-test-framework", "area/code-organization", "sig/scheduling", "size/XXL", "kind/api-change", "area/code-generation", "api-review", "wg/device-management", "kind/cleanup", "area/kube-proxy", "release-note-none", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "size/XL", "area/dependency", "do-not-merge/needs-kind", "priority/important-soon", "kind/failing-test", "triage/accepted", "cncf-cla: no", "ok-to-test", "sig/auth", "area/testing", "minikube", "autoscaler", "area/cluster-autoscaler", "area/provider/oci", "area/provider/aws", "do-not-merge/invalid-commit-message", "language/en", "website", "perf-tests", "community", "sig/security", "org", "cloud-provider-vsphere", "cncf", "sub/project-reviews", "review/governance", "kind/review", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140029: [KEP-6080] (alpha) Add implementation of DRA Derived Attributes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140029)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140013: KEP-5855: Add bind mount options to VolumeMount

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140013)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140009: [WIP] KEP 5517 alpha2 changes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140009)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9867: azure: report deleting instances as gone from HasInstance

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9867)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9864: Introduce ObservedGeneration to CapacityQuota

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
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9864)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9863: Rename CapacityQuota Valid condition



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
/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9863)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6463: REQUEST: Migrate security-profiles-merger

### New repo, staging repo, or migrate existing

migrate existing ([saschagrunert/security-profiles-merger](https://github.com/saschagrunert/security-profiles-merger))

### Is it a staging repo?

no

### Requested name for new repository

security-profiles-merger

### Which Organization should it re...

🔗 [Link](https://github.com/kubernetes/org/issues/6463)

**Metadata:**
- Created: 2026-06-25
- Comments: 4
- State: open

## Updates

### kubernetes/test-infra#37337: Kops - Remove job dedicated to resolved bug

Ref: 
* https://github.com/kubernetes/kubernetes/issues/121018
* https://github.com/kubernetes/kubernetes/pull/139819

The tests in the referenced issue are passing in this job:

https://testgrid.k8s.io/kops-misc#kops-aws-hostname-bug121018

The two test failures are unrelated and are normal...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37337)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37331: disable windows 2019 tests

Changed skip_if_only_changed to always_run and set to false.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37331)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37330: dra-driver-cpu: add an optional modernize presubmit job

Add an optional modernize presubmit job. Related to https://github.com/kubernetes-sigs/dra-driver-cpu/pull/205.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37330)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140031: [FG:InPlacePodVerticalScalingExclusiveCPUs]:When enabling the `InPlacePodVerticalScalingExclusiveCPUs` feature with the CPU Manager policy set to `static`, it is not possible to adjust the CPU size.

### What happened?

I'm using Kubernetes v1.34.5 with the InPlacePodVerticalScalingExclusiveCPUs feature enabled and the following POD YAML:
`
apiVersion: v1
kind: Pod
metadata:
  name: resize-demo-test
  namespace: aistudio
spec:
  containers:
  - name: stress
    image: stressxxx
    imagePullPoli...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140031)

**Metadata:**
- Created: 2026-06-26
- Comments: 2
- State: open

### kubernetes/kubernetes#140025: Top controller name should be directly added into pod level

### What happened?

Currently, it needs some graph mining to figure out the top-controller with OwnerReference. It brings toils for consumers. 

For example, jobset controller directly applies the jobset name to its pods.


### What did you expect to happen?

In the pod's annotation, a top-controlle...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140025)

**Metadata:**
- Created: 2026-06-25
- Comments: 3
- State: open

### kubernetes/kubernetes#140018: Standard connection draining semantics for long-lived HTTP connections

### What would you like to be added?

I would like Gateway API to define standard connection draining semantics for long-lived HTTP connections, especially WebSocket, SSE, and long-lived gRPC/HTTP streams.

Gateway API already supports identifying WebSocket backends through `Service.spec.ports[].app...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140018)

**Metadata:**
- Created: 2026-06-25
- Comments: 4
- State: open

### kubernetes/kubernetes#140030: Update go version to 1.26, fix 1.26 vet errors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140030)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140028: Fix typos in comments and log messages

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Fix typos in comments and log messages across multiple packages:
- "wether" → "whether"
- "coresponding" → "corresponding"
- "retruns" → "returns"
- "peforms" → "performs"
- "retrun" → "return"
- "min...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140028)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140027: [WIP] Lets see what will break

Test PR


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140027)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140026: [WIP] Decouple oom

Trying to decouple/remove oom stuff from cadvisor/lib

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140026)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140023: Label FeatureGate-only e2e tests with proper Feature labels

#### What type of PR is this?

/kind bug
/kind failing-test

#### What this PR does / why we need it:

The `ci-cri-containerd-node-e2e-unlabelled` job is timing out because tests that
should be categorized under `[Feature:X]` are slipping through the skip regex.

The skip regex uses `[Feat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140023)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140021: [WIP] kube-proxy: detect host CPU count from sysfs instead of cadvisor

context: trying to reduce what we use from cadvisor

detectNumCPU sized nf_conntrack_max using github.com/google/cadvisor/lib machine topology. Read the node's online CPU count directly from sysfs and parse the cpulist with k8s.io/utils/cpuset (already used by the kubelet CPU manager), removing th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140021)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140020: portallocator: replace deprecated sets.String/sets.Int with generic sets.Set

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`sets.String` and `sets.Int` are deprecated in favor of the generic `sets.Set[T]` (see the `// Deprecated:` markers and package doc in `staging/src/k8s.io/apimachinery/pkg/util/sets`). This converts the rem...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140020)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140019: Implement Exclusion of Virtual Resources from Admission Webhooks

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140019)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140017: [DNM] Bugfix 114642 for CLA testing

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140017)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140016: CEL: move `.includes` function to standard lists library

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR moves `.includes` CEL member function from DRA internal package to Kubernetes standard lists library.

As suggested in https://github.com/kubernetes/kubernetes/pull/137190#discussion_r2954678534
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140016)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140015: Replace '#success' and '#failure' with 'successThreshold' and 'failureThreshold' for probes



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140015)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140014: Add concurrent worker support to the disruption controller

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140014)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140012: kubelet: increase ut coverage for kubelet/status

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140012)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140011: DRA resourceslice controller: fix updation after quick delete

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:

When upgrading a DRA driver DaemonSet, existing `ResourceSlice` objects can be updated by the ResourceSlice controller. If those updated slices are deleted quickly afterwards, the controller may not recreate them...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140011)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140010: batch: enable optionalorrequired kube-api-linter rule

Enables the `optionalorrequired` and `nonpointerstructs` kube-api-linter rules for the `batch` API group by removing it from the linter exclusion lists. Part of #134671.

This revives the work in #134718, which was auto-closed by the stale bot.

**What:**
- Tags each previously-untagged field in `ba...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140010)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140007: Promote MemoryQoS to beta; default memoryThrottlingFactor to nil



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140007)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140006: Pod Certificates: Node-restriction support for signer names

Kubelet's ability to generate service account tokens is restricted by the noderestriction admission plugin, which checks to make sure that the relevant pod actually mounts a token volume with the requested audience.

This commit adds an analogous mechanism for Pod Certificates, restricting the sig...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140006)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23222: virtiofs behavior on Windows is unclear though support is macOS-only

### What Happened?

virtiofs is currently supported only on macOS, but on Windows it can still be exercised and produce errors that look like real failures. This causes confusion because the behavior is from an unsupported platform path, not necessarily a functional regression.

### Attach the log f...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23222)

**Metadata:**
- Created: 2026-06-25
- Comments: 2
- State: open

### kubernetes/minikube#23224: ci: Use GitHub noreply email for minikube-bot commits

The EasyCLA check fails for all minikube-bot commits because minikube-bot@google.com is not linked to the minikube-bot GitHub account. Use the GitHub noreply email (20374350+minikube-bot@ users.noreply.github.com) which is always linked to the account, fixing the CLA check for all workflows.

Exam...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23224)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9866: Image not present for cluster-autoscaler-1.35.1 although the tag is created

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
/area cluster-autoscaler

**What version of the component are you using?**:
registry.k8s.io/autoscaling/cluster-autoscaler:v1.35.1

Component version:
Client Version: v1.36.0
Kustom...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9866)

**Metadata:**
- Created: 2026-06-25
- Comments: 1
- State: open

### kubernetes/autoscaler#9869: feat(oci): support node-template tags for OKE node pools

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This adds node-template freeform tag support for OCI OKE node pools.

OKE node pools can now provide Cluster Autoscaler template hints for:

- labels
- taints
- resources
- per-node-group autoscaling...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9869)

**Metadata:**
- Created: 2026-06-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9865: Use Hash Array Mapped Trie in Patchset to improve the DRA and Affinity performance

Use Hash Array Mapped Trie in Patchset to improve the DRA and Affinity performance

#### What type of PR is this?
/kind feature

(actually a performance improvement)

#### What this PR does / why we need it:

This is an optimization of PatchSet data type to improve the time complexities of ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9865)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9862: Add AWS EC2 G7 instance family to static list

## What type of PR is this?

/kind feature
/area cluster-autoscaler

## What this PR does / why we need it

Adds the new AWS EC2 G7 GPU instance family to the cluster-autoscaler static instance type list.

G7 instances (NVIDIA RTX PRO 4500 Blackwell Server Edition GPUs, Intel Xeon 6) became generall...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9862)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56254: what happens on restart page

### Description

What happens on restarts is a common question and this documentation can be a good way to communicate potential risks of these operations.

### Issue




🔗 [Link](https://github.com/kubernetes/website/pull/56254)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56252: Improve CertificateSigningRequest documentation

## Description

This PR improves the `CertificateSigningRequest` documentation by:

* Adding a cross-reference in the **Signing → Control plane signer** section to [Issue a Certificate for a Kubernetes API Client Using A CertificateSigningRequest](https://kubernetes.io/docs/tasks/tls/certificate...

🔗 [Link](https://github.com/kubernetes/website/pull/56252)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56243: docs: document annotation value size limit and character set

Fixes #56242
What this PR does
Adds a note about annotation value constraints to the "Syntax and character set" section of the annotations documentation page, similar to how the labels page documents its value constraints.
Why
The annotations page clearly documented the key format (prefix, name,...

🔗 [Link](https://github.com/kubernetes/website/pull/56243)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4160: Add custom resource LIST benchmark scenario

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Adds an optional Custom Resource LIST scenario to the existing ClusterLoader2 `testing/list` benchmark.

The scenario is disabled by default and can be enabled with `CL2_LIST_CUSTOM_RESOURCE_NU...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4160)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9044: update owners

update owners based on recent leads changes 

/cc @kfswain @nirrozenbaum @kflynn @usize @keithmattix 


🔗 [Link](https://github.com/kubernetes/community/pull/9044)

**Metadata:**
- Created: 2026-06-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1795: Chart version 1.36.0 is missing from index.yaml

### What happened?

The currently live [index.yaml](https://github.com/kubernetes/cloud-provider-vsphere/blob/gh-pages/index.yaml) is missing version 1.36.0 of the chart, which does seem to exist in the [charts directory](https://github.com/kubernetes/cloud-provider-vsphere/tree/gh-pages/charts)

##...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/issues/1795)

**Metadata:**
- Created: 2026-06-25
- Comments: 0
- State: open

### cncf/toc#2207: [Gov. Review]: KubeVirt

### Project name

KubeVirt

### Project link

https://github.com/kubevirt

### Due diligence link

_No response_

### Project contact information

Vladik Romanovsky - https://github.com/vladikr - vromanso@redhat.com
Roman Mohr - https://github.com/rmohr - rmohr@google.com
Fabian Deutsch - https://gi...

🔗 [Link](https://github.com/cncf/toc/issues/2207)

**Metadata:**
- Created: 2026-06-25
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-26 03:28:59*
