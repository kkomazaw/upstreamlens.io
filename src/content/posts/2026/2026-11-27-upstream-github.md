---
title: "Upstream Github - 2026-11-27"
description: "CNCF upstream activity from github"
pubDate: 2026-11-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "needs-triage", "sig/api-machinery", "sig/storage", "sig/node", "kind/feature", "pr", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/M", "approved", "area/apiserver", "release-note-none", "sig/cli", "area/test", "size/S", "kind/flake", "sig/testing", "area/kubelet", "kind/cleanup", "lgtm", "sig/network", "area/kubectl", "sig/cluster-lifecycle", "sig/auth", "sig/apps", "area/kubeadm", "sig/instrumentation", "sig/etcd", "sig/scalability", "cncf-cla: no", "size/XS", "kind/documentation", "do-not-merge/release-note-label-needed", "kind/deprecation", "sig/contributor-experience", "do-not-merge/hold", "community", "release", "git-sync", "size/XXL", "sig/release", "area/release-eng", "area/cluster-autoscaler", "area/provider/aws", "autoscaler", "area/provider/azure", "size/XL", "ok-to-test", "area/dependency", "envoyproxy", "gateway", "cncf", "kind/initiative", "needs-group", "toc", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144486: KEP-4049: Remove StorageCapacityScoring e2e feature label

#### What type of PR is this?

/kind cleanup
/sig storage
/sig scheduling

#### What this PR does / why we need it:

The StorageCapacityScoring e2e tests are labeled `[Feature:StorageCapacityScoring]`.
The default e2e jobs only select tests without a `Feature:` label (`Feature: isEmpty`),
and no job...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144486)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144484: Defer removal of cgroupDriver fallback to a future release

#### What type of PR is this?

/kind deprecation

#### What this PR does / why we need it:

The kubelet will keep supporting the cgroupDriver fallback beyond 1.38:

- the `CRILosingSupport` metric now reports `1.39.0` as the removal version (previously `1.38.0`)
- the kubeadm preflight warn...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144484)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10741: [cluster-autoscaler-release-1.37] azure: backport E2E

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10741)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144499: scheduler: single-pod requeue clears in-flight PodGroup marker during workload-aware scheduling

### What happened?

During workload-aware scheduling, an unrelated standalone Pod failing its asynchronous binding cycle can clear the marker for an in-flight PodGroup.

In `pkg/scheduler/backend/queue/scheduling_queue.go`, `AddUnschedulablePodIfNotPresent` unconditionally calls `p.activeQ.clearPopp...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144499)

**Metadata:**
- Created: 2026-11-27
- Comments: 2
- State: open

### kubernetes/kubernetes#144490: CBOR custom resource requests silently prune unknown fields with Strict or Warn field validation

### What happened?

With `CBORServingAndStorage` enabled, creating or replacing a custom resource with a CBOR request body silently prunes unknown fields, including with `fieldValidation=Strict`. A client can receive a successful response despite asking the API server to reject the request. Schema v...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144490)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/kubernetes#144489: Allow updating ImageVolume references on existing Pods, with changes applied on container recreation

### What would you like to be added?

Allow updating `spec.volumes[*].image.reference` on an existing Pod without deleting and recreating the Pod.

The proposed behavior separates the **desired image reference** from the **image content already mounted in a running container**:

- Updating the refer...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144489)

**Metadata:**
- Created: 2026-11-26
- Comments: 2
- State: open

### kubernetes/kubernetes#144500: scheduler: preserve in-flight PodGroup markers when requeueing standalone Pods

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

Prevent a standalone Pod's asynchronous binding failure from clearing the in-flight marker of an unrelated PodGroup.

`AddUnschedulablePodIfNotPresent` previously called `activeQ.clearPoppedEntity()` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144500)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144498: kubelet: limit the response headers of gRPC probes to 10KB

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

The [exec](https://github.com/kubernetes/kubernetes/blob/1dc6ca798017266904fccdceb48f27fee5286723/pkg/probe/exec/exec.go#L32) and [HTTP](https://github.com/kubernetes/kubernetes/blob/1dc6ca798017266904fccdc...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144498)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144497: apiserver: preserve allocations after ambiguous creates

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Preserves Service allocations when a storage create error leaves persistence uncertain.

#### Which issue(s) this PR is related to:
Closes #144480

#### Special notes for your reviewer:

#### Does this PR in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144497)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144496: cri-streaming: don't fail the port-forward session on ECONNRESET/EPIPE

#### What type of PR is this?

/kind bug
/sig node
/sig cli

#### What this PR does / why we need it:

`kubectl port-forward` exits with `lost connection to pod` after the first connection when the target closes a forwarded connection with a TCP reset. PostgreSQL over TLS does this on every connecti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144496)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144495: e2e_node: pick only READY GCE images

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The node e2e runner takes the newest image of a family, and GCE lists an image before it is READY. The instance create then fails with "is not ready", as in run [2125747858895278080](https://prow.k8s.io/v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144495)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144494: kubelet: Use a fallback when getent is not present

When #135870 moved the kubelet to be compiled as a static binary, we started to require `getent` to check for users.
This is quite inconvenient in very restricted environments were we still want to configure the userns range for the kubelet to use.

Let's add a fallback that doesn't need any exte...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144494)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144493: tests: prepare for upcoming version changes

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

https://github.com/kubernetes/kubernetes/pull/144124 will make real Kubernetes version information available to unit tests. Tests which expect the current fake information must be updated.

Two tests assume that ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144493)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144492: Add HTTP/2 and backlogged variants to watch benchmarks

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144492)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144491: Report unknown custom resource fields during strict CBOR decoding

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

When decoding custom resources, use the serializer's strictness setting to decide whether schema pruning should report unknown fields. The concrete JSON type check excluded CBOR even when the reque...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144491)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144488: test: use agnhost for kuberc image override

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Use the shared `agnhost` image for the explicit `--image` argument and the expected Pod image in the `kubectl kuberc` E2E test. The test verifies that the explicit flag overrides the image configured in the alias...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144488)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144487: docs: fix grammar in fluentd-gcp README

What type of PR is this?
/kind documentation

What this PR does / why we need it:
Corrects a grammatical error in cluster/addons/fluentd-gcp/README.md.
Added the missing article "the" to the sentence:
"can be fetched by running following command"

Updated it to:
"can be fetched by running t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144487)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144485: kubectl: wait for available pods in StatefulSet rollout status

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

With `minReadySeconds` set, the StatefulSet controller waits for each pod to be available (ready for `minReadySeconds`) before it moves on, but `kubectl rollout status` only waited for pods to be ready. On t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144485)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9279: Update annual report templates with suggestions

**Which issue(s) this PR fixes**:
In preparation for the upcoming annual reports, this updates the templates for both SIG and WG reports with some suggestions for answers around needing help. 

/cc @kubernetes/steering-committee 

/hold
for visibility

🔗 [Link](https://github.com/kubernetes/community/pull/9279)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9278: Update WG etcd-operator meeting schedule

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https://...

🔗 [Link](https://github.com/kubernetes/community/pull/9278)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/git-sync: v4.8.1

## What's Changed
* Fix typos in README.md, main.go and pkg/hook/hook.go by @Jah-yee in https://github.com/kubernetes/git-sync/pull/1010


## New Contributors
* @Jah-yee made their first contribution in https://github.com/kubernetes/git-sync/pull/1010

**Full Changelog**: https://github.com/kubernetes/git-sync/compare/v4.8.0...v4.8.1

Available at: registry.k8s.io/git-sync/git-sync:v4.8.1

🔗 [Link](https://github.com/kubernetes/git-sync/releases/tag/v4.8.1)

**Metadata:**
- Version: v4.8.1
- Published: 2026-11-27
- Prerelease: No

### kubernetes/release#4645: Add a signing build for the provenance of stage builds

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds the signing build of SLSA build level 3 (#4610): `krel provenance --build-id <stage build>`, run from `gcb/provenance/cloudbuild.yaml` in k8s-releng-prod, writes and signs the provenance of a stage build fro...

🔗 [Link](https://github.com/kubernetes/release/pull/4645)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10742: (AWS) Early abort on a transient launch failure cancels mixed-instance ASG expansion before alternative instance types can fulfill capacity

**Which component are you using?**:

cluster-autoscaler

/area cluster-autoscaler
/area provider/aws
/kind bug

**What version of the component are you using?**:

Component version: **v1.34.3**

Confirmed by the startup log:

```text
I1124 10:00:02.708701       1 main.go:375] Cluster Autoscaler 1.34...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10742)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/autoscaler#10736: [cluster-autoscaler-release-1.36] Backport: count backed upcoming nodes after CA restart (sigs #182)

/area cluster-autoscaler
/kind bug

**Which component are you using?**: cluster-autoscaler (`cluster-autoscaler-release-1.36` branch)

**What version of the component are you using?**: Cluster Autoscaler 1.36.2

**What k8s version are you using?**: 1.36.x

**What environment is this in?**: externalg...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10736)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/autoscaler#10740: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure/pkg/azclient from 0.23.0 to 0.26.4 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure/pkg/azclient](https://github.com/kubernetes-sigs/cloud-provider-azure) from 0.23.0 to 0.26.4.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes-sigs/cloud-provider-azure/commit/1c958e550a414831770043e698b3cbc2770491e7"><code>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10740)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10739: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/storage/azblob from 1.8.2 to 1.8.3 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/storage/azblob](https://github.com/Azure/azure-sdk-for-go) from 1.8.2 to 1.8.3.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/Azure/azure-sdk-for-go/releases">github.com/Azure/azure-sdk-for-go/sdk/storage/azblo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10739)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway#10713: HTTPRouteFilter credentialInjection ignores valueRef.namespace and ReferenceGrant

*Description*:

`HTTPRouteFilter.spec.credentialInjection.credential.valueRef` is a Gateway API `SecretObjectReference`, which allows a `namespace` when a ReferenceGrant in the referent namespace permits it. The translator supports this (`validateSecretRef(true, crossNamespaceFrom{kind: HTTPRouteFil...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10713)

**Metadata:**
- Created: 2026-11-26
- Comments: 0
- State: open

### cncf/toc#2377: [Initiative]: Agent Artifacts the Cloud Native Way: Packaging, Distribution, and Trust

### Name

 Agent Artifacts the Cloud Native Way: Packaging, Distribution, and Trust

### Short description

Define a cloud native, OCI-compliant approach for packaging, distributing, and establishing trust in agent artifacts (skills, bundles, plugins, MCP servers), reusing the CNCF ecosystem's alrea...

🔗 [Link](https://github.com/cncf/toc/issues/2377)

**Metadata:**
- Created: 2026-11-26
- Comments: 0
- State: open

### cncf/toc#2376: [Initiative]: Sustainable Contribution Practices for CNCF Projects in the Age of AI

### Name

Sustainable Contribution Practices for CNCF Projects in the Age of AI

### Short description

Consolidate how CNCF projects are handling the flood of AI-assisted/low-effort contributions into a rated catalog of approaches and criteria for what "aligns with open source" means; assess whethe...

🔗 [Link](https://github.com/cncf/toc/issues/2376)

**Metadata:**
- Created: 2026-11-26
- Comments: 0
- State: open

### cncf/prow-github-actions#772: feat(owners): support Kubernetes-style OWNERS_ALIASES

# Description

Repositories with directory-scoped `OWNERS` files currently have to duplicate handles across files or rely on `@org/team` groups (which require managing membership outside git and supplying a token with org `Members: read`).

This adds support for an optional root `OWNERS_ALIASES` fil...

🔗 [Link](https://github.com/cncf/prow-github-actions/pull/772)

**Metadata:**
- Created: 2026-11-27
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-27 06:40:21*
