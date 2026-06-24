---
title: "Upstream Github - 2026-06-24"
description: "CNCF upstream activity from github"
pubDate: 2026-06-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/feature", "sig/cli", "needs-triage", "pr", "sig/network", "area/kubelet", "kind/cleanup", "sig/scheduling", "area/kube-proxy", "area/apiserver", "area/cloudprovider", "sig/storage", "sig/node", "sig/api-machinery", "sig/cluster-lifecycle", "sig/autoscaling", "size/L", "kind/api-change", "release-note-none", "sig/auth", "sig/apps", "area/kubeadm", "cncf-cla: yes", "area/code-generation", "sig/cloud-provider", "needs-priority", "wg/device-management", "size/S", "sig/etcd", "size/XS", "approved", "do-not-merge/needs-kind", "area/test", "size/XXL", "sig/testing", "triage/accepted", "kind/documentation", "area/kubectl", "size/M", "do-not-merge/work-in-progress", "release-note", "kind/bug", "do-not-merge/cherry-pick-not-approved", "do-not-merge/hold", "kind/regression", "lgtm", "area/logging", "sig/instrumentation", "ok-to-test", "needs-ok-to-test", "size/XL", "release-note-action-required", "do-not-merge/release-note-label-needed", "priority/awaiting-more-evidence", "co/podman-driver", "minikube", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "website", "autoscaler", "area/cluster-autoscaler", "do-not-merge/needs-area", "kube-state-metrics", "cloud-provider-vsphere", "cloud-provider-openstack", "envoyproxy", "release", "envoy", "ai-gateway", "containerd", "nerdbox"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### envoyproxy/envoy: v1.38.3

repo: Release v1.38.3

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47205](https://github.com/envoyproxy/envoy/security/advisories/GHSA-mvh9-767w-x47j): Authz per route crash
  - [CVE-2026-47207](https://github.com/envoyproxy/envoy/security/advisories/GHSA-68cv-hq5f-g6xv): ext_proc response in one gRPC message
  - [CVE-2026-47221](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rcff-gw58-pjpr): router internal redirects crash
  - [CVE-2026-47220](https://github.com/envoy...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.3)

**Metadata:**
- Version: v1.38.3
- Published: 2026-06-23
- Prerelease: No

### envoyproxy/envoy: v1.37.5

repo: Release v1.37.5

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47205](https://github.com/envoyproxy/envoy/security/advisories/GHSA-mvh9-767w-x47j):Authz per route crash
  - [CVE-2026-47207](https://github.com/envoyproxy/envoy/security/advisories/GHSA-68cv-hq5f-g6xv): ext_proc response in one gRPC message
  - [CVE-2026-47221](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rcff-gw58-pjpr): router internal redirects crash
  - [CVE-2026-47220](https://github.com/envoyp...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.5)

**Metadata:**
- Version: v1.37.5
- Published: 2026-06-23
- Prerelease: No

### envoyproxy/envoy: v1.36.9

repo: Release v1.36.9

**Summary of changes**:

* Upstream security fixes:
  - [CVE-2026-47205](https://github.com/envoyproxy/envoy/security/advisories/GHSA-mvh9-767w-x47j):Authz per route crash
  - [CVE-2026-47207](https://github.com/envoyproxy/envoy/security/advisories/GHSA-68cv-hq5f-g6xv): ext_proc response in one gRPC message
  - [CVE-2026-47221](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rcff-gw58-pjpr): router internal redirects crash
  - [CVE-2026-47775](https://github.c...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.36.9)

**Metadata:**
- Version: v1.36.9
- Published: 2026-06-23
- Prerelease: No

### envoyproxy/envoy: v1.35.13

repo: Release v1.35.13

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47207](https://github.com/envoyproxy/envoy/security/advisories/GHSA-68cv-hq5f-g6xv): ext_proc response in one gRPC message
  - [CVE-2026-47221](https://github.com/envoyproxy/envoy/security/advisories/GHSA-rcff-gw58-pjpr): router internal redirects crash
  - [CVE-2026-47775](https://github.com/envoyproxy/envoy/security/advisories/GHSA-396h-jpq4-vc7p): OAuth2 code verifier padding oracle
  - [CVE-2026-48044](https://g...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.35.13)

**Metadata:**
- Version: v1.35.13
- Published: 2026-06-23
- Prerelease: No

### envoyproxy/ai-gateway: v1.0.0

# Envoy AI Gateway v1.0.0 — General Availability

Envoy AI Gateway v1.0.0 marks **General Availability**. With this release the core control-plane API — `AIGatewayRoute`, `AIServiceBackend`, `BackendSecurityPolicy`, `GatewayConfig`, and `MCPRoute`, all served at `v1beta1` — is declared **stable**: within the 1.x series we will not make breaking changes to it unless required by a critical security fix, and any such change will ship with a documented migration path. **Upgrading from v0.7 require...

🔗 [Link](https://github.com/envoyproxy/ai-gateway/releases/tag/v1.0.0)

**Metadata:**
- Version: v1.0.0
- Published: 2026-06-23
- Prerelease: No

## Updates

### kubernetes/kubernetes#139951: feat(kubectl): add native 'kubectl namespace' command to view and change current namespace


I would like to propose a new native subcommand: `kubectl namespace` (with a possible shorthand alias `kubectl ns`). 

This command should serve two primary purposes:
1. **View current namespace:** Running `kubectl namespace` without arguments should print the namespace currently set in the active ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139951)

**Metadata:**
- Created: 2026-06-23
- Comments: 2
- State: open

### kubernetes/kubernetes#139974: Use unsafe pointer casts for memory-identical struct conversions in conversion-gen

Builds on https://github.com/kubernetes/kubernetes/pull/139858 (to avoid merge conflicts)

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Replace of field-by-field copying with unsafe pointer casts for mem...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139974)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139973: etcd3: extract feature support checker reset into a test helper

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Extracts the inline save/swap/restore of the global etcd `DefaultFeatureSupportChecker` in `TestWatchChanSyncStreamFallsBackToPaginated` into a shared `resetFeatureSupportCheckerDuringTest` test helper, so other ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139973)

**Metadata:**
- Created: 2026-06-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139972: Increase lower bound capacity to confirm this causes regression in scalability test


```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139972)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139970: Wire ObjectMeta test suite for storage, networking, scheduling, and other API groups

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR is another follow-up to PR #139568. It continues the work of using the established template to wire the `objectMeta` test cases into the declarative validation tests for additional API groups.

Sp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139970)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139969: docs(apimachinery): fix malformed resourceVersion godoc in ObjectMeta

#### What type of PR is this?

/kind cleanup
/kind documentation
/sig api-machinery

#### What this PR does / why we need it:

The godoc for `ObjectMeta.ResourceVersion` contains a malformed, truncated sentence — `Value must be treated as opaque by clients and .` — which ends mid-clause (`and .`) an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139969)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139968: Register APIServer informers for metrics and naming

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139968)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139967: [1.34] Automated cherry pick of #139964: Restore string JSON encoding of cri-api KeyValue

Cherry pick of #139964 on release-1.34.

#139964: Restore string JSON encoding of cri-api KeyValue

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139967)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139966: [1.35] Automated cherry pick of #139964: Restore string JSON encoding of cri-api KeyValue

Cherry pick of #139964 on release-1.35.

#139964: Restore string JSON encoding of cri-api KeyValue

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139966)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139965: [1.36] Automated cherry pick of #139964: Restore string JSON encoding of cri-api KeyValue

Cherry pick of #139964 on release-1.36.

#139964: Restore string JSON encoding of cri-api KeyValue

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/kind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139965)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139963: Wire ObjectMeta test suite for core, apps, networking, and other API groups

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR is a follow-up to PR #139568. As established in that PR, this uses the template to wire the `objectMeta` test cases into the declarative validation tests for the remaining API groups. 

Specifical...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139963)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139962: Use HandleCrashWithContext in controlplane controllers

Migrate two controlplane controllers to contextual logging by replacing
utilruntime.HandleCrash with utilruntime.HandleCrashWithContext where a
context is already in scope. This lets panic handlers log through the
context bound logger instead of the global background logger, matching the
already...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139962)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139961: kubectl: re-enable TestGetUnknownSchemaObject

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`TestGetUnknownSchemaObject` in `pkg/cmd/get` has been skipped as broken.
Its assertion block never captured the command output: it built an empty
`actual` slice and compared it against a one-element `expected` s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139961)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139959: Deferred Pod Admission for Unregistered Device Plugins

#### What type of PR is this?

/kind feature

#### What this PR does / why we negenerteed it:

When a pod admission fails because a device plugin hasn't registered yet, defer the pod (instead of rejecting it permanently) and retry until either the device plugin registers or a timeout expires. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139959)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139958: kubeadm: Add etcd test coverage for MemberPromote retry scenarios

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139958)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139957: Warn about upcoming default change when defaulting kube-proxy mode

#### What type of PR is this?
uh... let's say
/kind feature

#### What this PR does / why we need it:
When defaulting the kube-proxy mode to `iptables`, warn users that the default will be changing in 1.40, so they should explicitly set it to `iptables` if they don't want that.

This should n...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139957)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139956: Graduate SELinuxMount to GA

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Graduate SELinuxMount to GA and update unit tests that still need SELinuxMount disabled.

#### Does this PR introduce a user-facing change?

```release-note
ACTION REQUIRED: Graduated the `SELinuxMount` feature gat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139956)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139954: Add metrics for PVC Unused condition sync operations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139954)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139953: Migrate IngressClass Controller to declarative validation

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR migrates the `immutable` validation for `IngressClass.Spec.Controller` to declarative validation.

Following the pattern established for this migration:
1. Added `+k8s:alpha(since: "1.37")=+k8s:immutable`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139953)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139952: WIP: Cache PodGroup API objects consistently in kube-scheduler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139952)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139950: client-go cache: remove duplicate package documentation comments

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes duplicate package-level documentation comments from three files in
`staging/src/k8s.io/client-go/tools/cache/`. The canonical package comment
already lives in `doc.go`; duplicates in `informer_met...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139950)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23212: Error with Podman Driver

### Was ist passiert?

❯ minikube start --driver=podman
😄  minikube v1.38.1 auf Cachyos
    ▪ MINIKUBE_ROOTLESS=true
✨  Verwende den Treiber podman basierend auf dem existierenden Profil
👍  Starte "minikube" primary control-plane Node im "minikube" Cluster
🚜  Ziehe Base Image v0.0.50 ...
E0623 17...

🔗 [Link](https://github.com/kubernetes/minikube/issues/23212)

**Metadata:**
- Created: 2026-06-23
- Comments: 1
- State: open

### kubernetes/k8s.io#9639: Image promotion for provider-aws 2.62.0

Image promotion for provider-aws 2.62.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork torredil --project provider-aws --reviewers "@kubernetes-sigs/aws-ebs-csi-driver-maintainers" --tag 2.62.0 --image charts/aws-ebs-csi-driver
```

/hold
cc: @kubernetes-sigs/aws-ebs-csi-driver...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9639)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56221: ClusterTrustBundle docs page mentions "assigners", but it should be "signers"

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
https://kubernetes....

🔗 [Link](https://github.com/kubernetes/website/issues/56221)

**Metadata:**
- Created: 2026-06-23
- Comments: 1
- State: open

### kubernetes/autoscaler#9857: Commoon place for buffer CRDs across autoscalers

##   Which component are you using?:

  /area cluster-autoscaler

  The CapacityBuffer CRD types at cluster-autoscaler/apis/capacitybuffer/autoscaling.x-k8s.io/

###  Is your feature request designed to solve a problem? If so describe the problem this feature should solve.:

  The CapacityBuffer API...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9857)

**Metadata:**
- Created: 2026-06-23
- Comments: 1
- State: open

### kubernetes/autoscaler#9855: Pass the context down the autoscaler loop

`(Autoscaler).RunOnce` currently does not accept context in an argument. That complicates graceful shutdown. When the termination signal is triggered during `RunOnce`, the loop continues to run uninterrupted, and the program finishes after `RunOnce` returns: https://github.com/kubernetes/autoscaler/...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9855)

**Metadata:**
- Created: 2026-06-23
- Comments: 1
- State: open

### kubernetes/autoscaler#9854: Add support for AWS EC2 G7 and G7e instance families

## What would you like to be added

Add the new AWS EC2 G7 and G7e GPU instance families to the cluster-autoscaler static instance type list.

These instances became generally available on June 18, 2026:
- [AWS Announcement](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-g7-generally-...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9854)

**Metadata:**
- Created: 2026-06-23
- Comments: 2
- State: open

### kubernetes/autoscaler#9856: Fix premature scale-up request removal during concurrent scale-down

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it :
**areThereUpcomingNodesInNodeGroup**  determines whether a scale-up request has finished by comparing the NodeGroup's target size against a  **provisioned**  count derived from  **Registered - NotStarted**
Nodes ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9856)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9853: Enable dependabot updates for the Azure provider

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

We (AKS) are keen on keeping dependencies up to date with dependabot. 

This PR removes four specific exclusions from dependabot.yml that were blocking updates of dependencies only used by the Azure Cloud...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9853)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3020: feat: Add Dynamic Resource Allocation (DRA) metrics

This PR adds Dynamic Resource Allocation (DRA) metrics for ResourceClaim, ResourceClaimTemplate, DeviceClass, and ResourceSlice API objects in resource.k8s.io/v1beta1.

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3020)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3019: feat: Add MutatingAdmissionPolicy and MutatingAdmissionPolicyBinding …

…metrics

Implement MutatingAdmissionPolicy (MAP) and MutatingAdmissionPolicyBinding (MAPB) metrics collection matching the existing ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding implementations.

Includes:
- MutatingAdmissionPolicy & MutatingAdmissionPolicyBinding store implem...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3019)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1793: Extend to support N to N-3 Kubernetes releases

Currently, the vSphere CPI supports releases from N to N-2. We want to extend our support matrix to cover N to N-3 releases.

The following items need to be adjusted:

1. **Dependabot Configuration**: Update `.github/dependabot.yml` to include and maintain the N-3 release branch (`release-1.32`).
2....

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/issues/1793)

**Metadata:**
- Created: 2026-06-23
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3140: [manila-csi-plugin] Restore --nodeid and --nodeaz as optional overrides

**What this PR does / why we need it**:

Un-deprecates the `--nodeid` and `--nodeaz` flags so they can be used as
alternatives to the metadata service for node identity.

#2734 aligned Manila CSI with how Cinder CSI handles node identity by making
the metadata service mandatory. For Cinder this make...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3140)

**Metadata:**
- Created: 2026-06-23
- Comments: undefined
- State: open
- Draft: No

### containerd/nerdbox: v0.1.5

## What's Changed
* [release/0.1] forward ro bind-mount option to virtio-fs share by @dmcgowan in https://github.com/containerd/nerdbox/pull/235


**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.1.4...v0.1.5

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.1.5)

**Metadata:**
- Version: v0.1.5
- Published: 2026-06-23
- Prerelease: No


---

*This content was automatically collected on 2026-06-24 02:58:51*
