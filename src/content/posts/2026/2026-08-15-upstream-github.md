---
title: "Upstream Github - 2026-08-15"
description: "CNCF upstream activity from github"
pubDate: 2026-08-15
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "sig/apps", "needs-triage", "wg/workload-aware-scheduling", "area/apiserver", "sig/api-machinery", "pr", "size/XL", "kind/feature", "release-note-none", "approved", "cncf-cla: yes", "area/code-generation", "needs-priority", "size/L", "sig/auth", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "area/test", "sig/network", "sig/testing", "sig/release", "sig/architecture", "area/conformance", "area/e2e-test-framework", "release-note", "size/S", "kind/flake", "area/kubelet", "sig/node", "kind/api-change", "kind/cleanup", "size/XS", "area/dependency", "do-not-merge/needs-sig", "kind/dependency", "sig/storage", "sig/contributor-experience", "area/kube-proxy", "area/ipvs", "ok-to-test", "kind/failing-test", "size/XXL", "sig/autoscaling", "committee/steering", "area/elections", "community", "minikube", "lgtm", "size/M", "area/jobs", "area/config", "test-infra", "sig/cluster-lifecycle", "language/ja", "website", "good first issue", "help wanted", "triage/accepted", "area/localization", "language/ko", "sig/scalability", "area/github-management", "org", "kubectl", "autoscaler", "area/cluster-autoscaler", "area/provider/gce", "area/vertical-pod-autoscaler", "cloud-provider-gcp", "prometheus", "release", "memcached_exporter"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141381: node: give the node authorizer its own Pod watch

Part of #125469.

Picking up the node authorizer piece of that issue.

### What changed

The node authorizer shares a Pod informer with the NodeRestriction, PodSecurity, and ResourceQuota admission plugins. It needs full pod objects, so that forces the shared cache to stay full for everyone else too...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141381)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141366: Feat: podautoscaler support Metrics API v1 fallback to v1beta1

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Currently, podautoscaler only supports Metrics API v1beta1. KEP-5207 has promoted the Metrics API to v1. To maintain compatibility, the consumer side will coordinate between v1 and v1beta1, prioritizing v1 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141366)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10141: VPA updater: fix unready DaemonSet updates

#### What type of PR is this?

/kind bug

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10141)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1295: chore(deps): bump golang from 1.26.4 to 1.27rc2 in /metis

Bumps golang from 1.26.4 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.4&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1295)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1294: chore(deps): bump golang from 1.26.5 to 1.27rc2

Bumps golang from 1.26.5 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.5&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1294)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1293: chore(deps): bump golang from 1.26.5 to 1.27rc2 in /metis

Bumps golang from 1.26.5 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.5&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1293)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1292: chore(deps): bump golang from 1.26.5 to 1.27rc2

Bumps golang from 1.26.5 to 1.27rc2.


[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=golang&package-manager=docker&previous-version=1.26.5&new-version=1.27rc2)](https://docs.github.com/en/github/managing-security-vulnerabilities...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1292)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141380: Job controller fails to create PodGroups/Workloads when nested within a JobSet

#### What happened?
`isNewJob()` (`pkg/controller/job/job_scheduling_manager.go:374-382`) gates whether the Job controller creates `Workload`/`PodGroup` objects for a Job. It reads `job.Status.StartTime`, `Succeeded`/`Failed` counts, and the `Suspended` condition. In `syncJob()` (`pkg/controller/job...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141380)

**Metadata:**
- Created: 2026-08-14
- Comments: 7
- State: open

### kubernetes/kubernetes#141367: ValidatingAdmissionPolicy can deny while CRD params sync after restart

### What happened?

A `ValidatingAdmissionPolicy` using `failurePolicy: Fail`, a CRD `paramKind`, and a named `paramRef` can transiently deny matching requests after kube-apiserver restarts even though the CRD and parameter already exist.

This was reproduced with only the CRD informer-backed resolv...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141367)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/kubernetes#141383: validation-gen: Support maps of pointers

We don't support this in k8s but it seems that validation-gen can be used to generate code for other environments, like protobuf, which do support maps of pointers (to structs).

Gemini helped with this one.

/kind feature

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141383)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141379: e2e: make service NodePort range configurable

/kind feature
/area conformance
/sig network
/sig testing

**What this PR does / why we need it**:

Adds `--service-node-port-range` to `e2e.test`, allowing conformance tests to match clusters whose kube-apiserver uses a non-default NodePort range.

The conformance image accepts the value t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141379)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141378: apiserver: improve performance of streamed list responses via buffering

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

**The problem.** When the apiserver serves a LIST with the streaming collection encoders (JSON and protobuf — the GA `StreamingCollectionsEncoding` path), the response is produced as **one smal...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141378)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141377: Fix goroutine leak in TestStoreResourceVersionWithNonMetaTransform

What type of PR is this?
/kind flake

What this PR does / why we need it:

Fix goroutine leak in `TestStoreResourceVersionWithNonMetaTransform` test.

The `TestStoreResourceVersionWithNonMetaTransform` test starts a controller with RunWithContext but does not wait for it to terminate before s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141377)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141375: fix: count init container node allocatable DRA claim overhead only  towards peak resource calculation



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141375)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141374: Bump container-storage-interface/spec to 1.13.0

#### What type of PR is this?

/kind dependency
/kind cleanup

#### What this PR does / why we need it:

This replaces the v1.12.1-0.20260720052920-cd9e7ad1ae09 snapshot of container-storage-interface/spec we currently depend on with the latest release, v1.13.0. The changes are minor.

####...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141374)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141372: Add snapshot metadata stress test suite

#### What this PR does / why we need it:

Adds a concurrent stress test suite for the snapshot metadata RPCs
(GetMetadataDelta and GetAllocatedMetadata). The suite creates multiple
pods with block volumes, takes snapshot pairs concurrently across pods,
restores PVCs from snapshots, and runs sna...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141372)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141371: kube-proxy: clean stale conntrack for deleted UDP services

#### What type of PR is this?

/kind bug
/sig network
/area kube-proxy

#### What this PR does / why we need it:

When a UDP Service is deleted, kube-proxy drops its rules but leaves stale conntrack entries behind, one-way UDP flows (statsd, logging) keep refreshing the timeout, so traffic k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141371)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141370: test/e2e/network: use static nodePorts in the update nodePort tests

#### What this PR does / why we need it:

The two `should update nodePort` tests delete the NodePort service and then check that the nodePort stops answering. Once the service is gone the apiserver can give that port to another test running in parallel, which answers the probe and fails the check....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141370)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141369: Read named admission policy params while informers sync

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

After a CRD `paramKind` resolves, its parameter informer can still be warming after kube-apiserver startup. The existing one-second sync wait then becomes a policy configuration error and can reject otherwise valid r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141369)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141368: Resolve admission policy CRD paramKinds from CRD informer

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Admission policy sources currently resolve `paramKind` through cached API discovery, which can remain stale after a CRD is established or after kube-apiserver restarts. A fail-closed policy can therefore reject reque...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141368)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9119: update steering candidate bio - priyankasaggu11929

ref: https://github.com/kubernetes/community/pull/9116



🔗 [Link](https://github.com/kubernetes/community/pull/9119)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23487: contrib: add Agent Skill for Kubernetes commit messages

Contributors and reviewers often get title-only commit messages that omit what and why, so git log is not enough to understand a change. Coding agents can draft better messages, but without shared guidance they guess conventions and may add GitHub closing keywords that trigger do-not-merge/invalid-c...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23487)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/test-infra#37689: node-readiness-controller: add scale test as presubmit job

This PR adds the scalability test merged in kubernetes-sigs/node-readiness-controller#284 as a presubmit job.

The following configuration is used:

KWOK_RUNTIME="binary"
NODE_COUNT=1000
ENFORCEMENT_MODE="continuous"

xref: kubernetes-sigs/node-readiness-controller#409

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37689)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37687: kops: drop preset-aws-ssh from all AWS jobs

Removes the shared CI SSH key from the remaining **1,647** AWS jobs, leaving `kubetest2-kops` to generate a throwaway keypair per cluster (kubernetes/kops#18686). kops registers that key as an EC2 key pair, cloud-init installs it for the AMI's default user, and the deployer re-exports it as `KUBE_SS...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37687)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37683: revert: nrc: test trigger for testgrid-email-alert in periodics-e2e* prow job

revert of changes in https://github.com/kubernetes/test-infra/pull/37677

/assign @ajaysundark



🔗 [Link](https://github.com/kubernetes/test-infra/pull/37683)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56992: Improve the line-break rule in the ja localization style guide

**This is a Feature Request**

**What would you like to be added**

Update the line-break rule in the Japanese localization style guide to make it clearer.

The current text is a single line and easy to misread:

> 日本語文では、文章の途中で改行を行わない。句点「。」もしくは行末のコロン`:`で改行する

I would like to update it to state expl...

🔗 [Link](https://github.com/kubernetes/website/issues/56992)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/website#56991: Deploy and Access the Kubernetes Dashboard

helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/

cannot be reached 404

🔗 [Link](https://github.com/kubernetes/website/issues/56991)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/website#56989: [ja] Translate content/en/docs/reference/glossary/reviewer.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/reviewer.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:...

🔗 [Link](https://github.com/kubernetes/website/issues/56989)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/website#56988: [ja] Translate content/en/docs/reference/glossary/sysctl.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/sysctl.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
 ...

🔗 [Link](https://github.com/kubernetes/website/issues/56988)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/website#56987: [ja] Translate content/en/docs/reference/glossary/downward-api.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/downward-api.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to transl...

🔗 [Link](https://github.com/kubernetes/website/issues/56987)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/website#56986: [ja] Translate content/en/docs/reference/glossary/volume-plugin.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/volume-plugin.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by 1 ...

🔗 [Link](https://github.com/kubernetes/website/issues/56986)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/website#56985: [ja] Translate content/en/docs/reference/glossary/resource-quota.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/resource-quota.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by 1...

🔗 [Link](https://github.com/kubernetes/website/issues/56985)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/website#56983: [ko] Update content/ko/docs/concepts/architecture/controller.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/architecture/controller.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/architecture/controller/
- English: http...

🔗 [Link](https://github.com/kubernetes/website/issues/56983)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/website#56982: [ko] Translate content/en/docs/concepts/storage/ephemeral-storage.md into Korean

**This is a Feature Request**


**What would you like to be added**
Translate `content/en/docs/concepts/storage/ephemeral-storage.md` into Korean


**Website Link**
English: https://kubernetes.io/docs/concepts/storage/ephemeral-storage/


**Why is this needed**
This page is not translated yet.


**C...

🔗 [Link](https://github.com/kubernetes/website/issues/56982)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/org#6559: sig-scalability: add Bslabe123, jjk-g, lenadankin to inference-perf-maintainers

Brings kubernetes/org in line with inference-perf's [OWNERS_ALIASES](https://github.com/kubernetes-sigs/inference-perf/blob/main/OWNERS_ALIASES), which already lists these three under `inference-perf-maintainers`.

/cc @achandrasekar @SachinVarghese @wangchen615 @terrytangyuan @jjk-g @lenadankin
/ar...

🔗 [Link](https://github.com/kubernetes/org/pull/6559)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1871: Add Option to Automatically Open Browser to a Path when Port Forwarding

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:
I would like to add a optional `--browser` flag to the `port-forward` command to allow the CLI to automatically open the browser and point to a particular path with the correct hostname a...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1871)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/autoscaler#10143: cloudprovider/oci: clusterstate logs a Warning every scan interval for nodes outside the configured --nodes= pools — is this expected?

`Question
Is it expected/by design that ClusterStateRegistry calls cloudProvider.HasInstance() (and logs a Warning on failure) for every node the Kubernetes API returns, including nodes that belong to node pools deliberately not passed via --nodes=? Or is there a supported way to have cluster-autosc...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10143)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/autoscaler#10140: GCE provider: NodeGroupForNode returns an error for non-gce:// providerIDs, breaking CA in mixed-provider clusters

**Which component are you using?**:

/area cluster-autoscaler
/area provider/gce

**What version of the component are you using?**:

Component version: 1.32, 1.34, and 1.35.0 (all reproduce, with the failure point moving between versions)

**What k8s version are you using (`kubectl version`)?**:

<d...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10140)

**Metadata:**
- Created: 2026-08-14
- Comments: 1
- State: open

### kubernetes/autoscaler#10144: Update Kubernetes dependencies to v1.37.0-rc.0

#### What type of PR is this?

/kind cleanup
/kind api-change

#### What this PR does / why we need it:

Updates Cluster Autoscaler to the Kubernetes v1.37.0-rc.0 dependency set and the corresponding v0.37.0-rc.0 staging modules.

This also:
- regenerates the standalone API clients with co...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10144)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1300: [Feature] Migrate metis static analysis to golangci-lint

### Description
Following the repository-wide static analysis effort in #1291 and initial linter integration in #1194, this issue tracks migrating the `metis` static analysis pipeline from standalone `revive` + `staticcheck` binaries to a self-contained `golangci-lint` configuration (`metis/.golangc...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1300)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/cloud-provider-gcp#1298: flaky test: TestDaemon_Run/successful_run in k8s.io/metis/pkg/daemon

### Flaky Test Report

**Test**: `TestDaemon_Run/successful_run`  
**Package**: `k8s.io/metis/pkg/daemon`  
**Prow Job Log**: [cloud-provider-gcp-tests #2088367204918628352](https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/cloud-provider-gcp/1283/cloud-provider-gcp-tests/20883672049186283...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1298)

**Metadata:**
- Created: 2026-08-14
- Comments: 2
- State: open

### kubernetes/cloud-provider-gcp#1297: chore(deps): bump the workspace-deps group across 3 directories with 4 updates

Bumps the workspace-deps group with 2 updates in the /metis directory: [github.com/GoogleCloudPlatform/gke-networking-api](https://github.com/GoogleCloudPlatform/gke-networking-api) and google.golang.org/protobuf.
Bumps the workspace-deps group with 1 update in the /providers directory: [google.gola...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1297)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1296: chore(deps): bump the workspace-deps group across 3 directories with 4 updates

Bumps the workspace-deps group with 2 updates in the /metis directory: [github.com/GoogleCloudPlatform/gke-networking-api](https://github.com/GoogleCloudPlatform/gke-networking-api) and google.golang.org/protobuf.
Bumps the workspace-deps group with 1 update in the /providers directory: [google.gola...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1296)

**Metadata:**
- Created: 2026-08-14
- Comments: undefined
- State: open
- Draft: No

### prometheus/memcached_exporter: 0.17.0 / 2026-08-14

* [FEATURE] Add distroless image variant #308
* [FEATURE] Add `--collector.slab` flag to toggle high-cardinality `memcached_slab_*` metrics #178
* [CHANGE] Publish releases to GHCR #309
* [CHANGE] Update dependencies


🔗 [Link](https://github.com/prometheus/memcached_exporter/releases/tag/v0.17.0)

**Metadata:**
- Version: v0.17.0
- Published: 2026-08-14
- Prerelease: No


---

*This content was automatically collected on 2026-08-15 01:04:33*
