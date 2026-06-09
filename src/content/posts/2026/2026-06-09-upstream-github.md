---
title: "Upstream Github - 2026-06-09"
description: "CNCF upstream activity from github"
pubDate: 2026-06-09
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scheduling", "kind/flake", "needs-triage", "pr", "kind/bug", "area/apiserver", "sig/api-machinery", "size/M", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/S", "do-not-merge/release-note-label-needed", "area/code-generation", "do-not-merge/invalid-commit-message", "size/L", "kind/feature", "area/test", "size/XL", "sig/testing", "release-note", "kind/cleanup", "size/XS", "do-not-merge/work-in-progress", "sig/node", "needs-rebase", "kind/api-change", "sig/apps", "approved", "priority/important-soon", "do-not-merge/hold", "triage/accepted", "wg/workload-aware-scheduling", "cloud-provider-gcp", "website", "lgtm", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "perf-tests", "kube-state-metrics", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "ok-to-test", "enhancements", "area/dependency", "area/jobs", "area/config", "test-infra", "sig/release", "needs-kind", "area/release-eng", "release", "sig/instrumentation", "area/github-management", "org", "prometheus", "cloudwatch_exporter", "envoyproxy", "gateway", "containerd", "area/cri", "area/distribution", "cncf", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139561: KEP-5958: Add server-side opt-out for metadata.managedFields in API response

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139561)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139558: KEP-5547: Add Scheduling Configuration fields to the Job API

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Adds `spec.scheduling` field to the `Job` API, allowing users to configure workload-aware scheduling policies, topology constraints, disruption mode, and shared resource claims.
- Adds validation to chec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139558)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139556: KEP-6089: Add Workload config Building Blocks APIs

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Adds reusable API building block types to `scheduling.k8s.io/v1alpha3` for WAS.

These are shared struct definitions that workload controllers (i.e., Job, JobSet, LWS, TrainJob, etc.) can embed in their nativ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139556)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56068: API Overview - broken link to versioning proposal

This link: https://git.k8s.io/sig-release/release-engineering/versioning.md should be updated to https://github.com/kubernetes/sig-release/blob/master/release-engineering/reference/versioning.md

🔗 [Link](https://github.com/kubernetes/website/issues/56068)

**Metadata:**
- Created: 2026-06-08
- Comments: 1
- State: open

### kubernetes/autoscaler#9773: Cq validating wh

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

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9773)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/enhancements#6176: Remove second verify target from Makefile

<!-- short description of work done in PR e.g. updating milestone, adding new KEP, adding test requirements… -->  
- One-line PR description:

Simple clean up.


🔗 [Link](https://github.com/kubernetes/enhancements/pull/6176)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#13546: [SIG-Node]: KEP-6061 - OCI Artifact-Based Security Profile Distribution

### KEP/SIG-Node References

- KEP(s): KEP-6061
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/6061
- KEP PR: https://github.com/kubernetes/enhancements/pull/6062
- K8s-Release: TBD
- KEP-Owner: @saschagrunert
- SIG-Node member liaison: @SergeyKanzhelev
- KEP-Shepherd:...

🔗 [Link](https://github.com/containerd/containerd/issues/13546)

**Metadata:**
- Created: 2026-06-08
- Comments: 0
- State: open

### cncf/toc#2189: Document Security Self-Assessment.

🔗 [Link](https://github.com/cncf/toc/issues/2189)

**Metadata:**
- Created: 2026-06-09
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#139555: [Flaking tests] k8s.io/kubernetes/test/integration/dra: all - TestDRA/all/PodGroup/basic-20-pods

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-master 
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-ppc64le-master

### Which tests are flaking?

`k8s.io/kubernetes/test/integration/dra: all - ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139555)

**Metadata:**
- Created: 2026-06-08
- Comments: 1
- State: open

### kubernetes/kubernetes#139554: [Flaking tests] k8s.io/kubernetes/test/integration/scheduler: preemption - TestPreemptionRespectsWaitingPod and TestPreemptionRespectsBindingPod

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-race-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-int...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139554)

**Metadata:**
- Created: 2026-06-08
- Comments: 2
- State: open

### kubernetes/kubernetes#139571: apiserver proxy: fix flaky metrics assertions in streamtranslator tests

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:
All streamtranslator tests that assert on the apiserver_stream_translator_requests_total metric suffer from a race condition where the test checks the metric before it has been asynchronously updated...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139571)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139570: informer-gen: fix pluralization and factory godoc bugs

## What this PR does / why we need it

Fixes two independent bugs in `staging/src/k8s.io/code-generator/cmd/informer-gen/generators/`.

### Bug 1: Naive pluralization of GVR Resource field

The `WithInformerName` code path in `informer.go` computed the GVR
`Resource` field using `strings.ToLower(t.N...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139570)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139569: Add cidr().isMask, clarify docs a bit

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
This syncs us to the version of the API in cel-go. (https://github.com/google/cel-go/pull/1238)

(I guess at some point we should adopt their implementation rather than having our own?)

#### Which issue(s)...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139569)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139568: Setup ObjectMeta test suite and wire it for AdmissionRegistration API group

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
The purpose of this PR is to get consensus on the approach and set up the template for `objectMeta` declarative validation test cases. 

Follow-up PRs (such as #139505) will use this template to wire the `obj...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139568)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139565: scheduler: merge multiple PlacementGenerate plugins by node intersection

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Lets multiple PlacementGenerate plugins run for the same PodGroup under TAS. The framework runs every registered plugin and merges their results by intersecting node lists, so a placement only keeps nodes that sa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139565)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139564: code-generator/validation-gen: Inherit short-circuiting validations for child fields in subfields 

#### What type of PR is this?

/kind feature
/kind cleanup

#### What this PR does / why we need it:

This PR updates the code-generator to inherit short-circuiting validations (such as `+k8s:required` or `+k8s:immutable`) of child fields within subfield validations.  +Subfield validation tag...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139564)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139563: [WIP] Reuse a pooled allocator when serializing non-watch responses

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Pool the encode allocator in `SerializeObject`, matching the watch path, so per-response marshal buffers are reused instead of allocated per item.

Theory is that scalability tests are driven by GC pressu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139563)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139562: Add declarative validation for Toleration key format

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139562)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139560: validation-gen: add +k8s:customValidation tag

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139560)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139557: Access latest snapshot locklessly instead of reading from locking store

Evaluation results of the lockless snapshot optimization at a scale of 150k pods with 50 namespaces and 5000 nodes. Comparing the optimized approach against the baseline.

Benchmark results based on https://github.com/kubernetes/kubernetes/pull/139567

Store List Performance (RV=NotOlderThan):
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139557)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1196: chore: enable dependabot for latest release branch (release-1.36)

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1196)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56067: Make the Persistent Volumes concept page easier to read by moving specific topics into individual pages

**This is a Feature Request**

**What would you like to be added**

Make the [Persistent Volumes concept page](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) lighter by moving specific topics (e.g. volume populators/data sources, PVC expansion, raw block volumes) into individual pa...

🔗 [Link](https://github.com/kubernetes/website/issues/56067)

**Metadata:**
- Created: 2026-06-08
- Comments: 2
- State: open

### kubernetes/k8s.io#9577: Add bhope to OWNERS approvers list

Adding myself as approver following internal maintainer discussion. 

cc @mrueg @dgrisonnet @rexagod 

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9577)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4091: dra tests: revert higher SLO times for churn job

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4091)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#2986: chore: add bhope as approver

Adding myself as an approver following maintainer discussion.

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/2986)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9774: Capped\Fulfilled By Buffers\Reservation API

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:

CapacityBuffers

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resiz...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9774)

**Metadata:**
- Created: 2026-06-08
- Comments: 1
- State: open

### kubernetes/autoscaler#9776: Bump the patch-updates group across 2 directories with 19 updates

Bumps the patch-updates group with 2 updates in the /vertical-pod-autoscaler directory: [github.com/go-openapi/jsonreference](https://github.com/go-openapi/jsonreference) and [github.com/go-openapi/swag](https://github.com/go-openapi/swag).
Bumps the patch-updates group with 8 updates in the /vertic...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9776)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9775: Bump the non-kubernetes group across 2 directories with 18 updates

Bumps the non-kubernetes group with 6 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/go-openapi/swag](https://github.com/go-openapi/swag) | `0.26.0` | `0.26.1` |
| [golang.org/x/mod](https://github.com/golang/mod) | `0.36.0` | `0.37.0` |...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9775)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6174: Bump github.com/olekukonko/tablewriter from 0.0.5 to 1.1.4

Bumps [github.com/olekukonko/tablewriter](https://github.com/olekukonko/tablewriter) from 0.0.5 to 1.1.4.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/olekukonko/tablewriter/commit/a0dea8a90a8a0c7610afb5588d2f15a57f4aa9a2"><code>a0dea8a</code></a> no need to disable twic...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6174)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6173: Bump golang.org/x/oauth2 from 0.21.0 to 0.36.0

Bumps [golang.org/x/oauth2](https://github.com/golang/oauth2) from 0.21.0 to 0.36.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/oauth2/commit/4d954e69a88d9e1ccb8439f8d5b6cbef230c4ef9"><code>4d954e6</code></a> all: upgrade go directive to at least 1.25.0 [generat...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6173)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6172: Bump github.com/maxbrunsfeld/counterfeiter/v6 from 6.3.0 to 6.12.2

Bumps [github.com/maxbrunsfeld/counterfeiter/v6](https://github.com/maxbrunsfeld/counterfeiter) from 6.3.0 to 6.12.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/maxbrunsfeld/counterfeiter/releases">github.com/maxbrunsfeld/counterfeiter/v6's releases</a...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6172)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6171: Bump github.com/go-playground/validator/v10 from 10.4.1 to 10.30.3

Bumps [github.com/go-playground/validator/v10](https://github.com/go-playground/validator) from 10.4.1 to 10.30.3.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-playground/validator/releases">github.com/go-playground/validator/v10's releases</a>.</em><...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6171)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37217: Bump release-notes e2e image to cypress/base:24.15.0

Angular CLI 22 requires Node.js >= 24.15.0. The e2e job for kubernetes-sigs/release-notes currently uses cypress/base:24.13.0 which is too old.

Related: https://github.com/kubernetes-sigs/release-notes/pull/1113

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37217)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4429: Bump go.yaml.in/yaml/v4 from 4.0.0-rc.4 to 4.0.0-rc.5

Bumps [go.yaml.in/yaml/v4](https://github.com/yaml/go-yaml) from 4.0.0-rc.4 to 4.0.0-rc.5.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/yaml/go-yaml/commit/39ad3aa832b3e7a87c57b07ee828d2196b3b6a3c"><code>39ad3aa</code></a> Fix !!merge tag regression for yq <a href="https...

🔗 [Link](https://github.com/kubernetes/release/pull/4429)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4428: Bump golang.org/x/sync from 0.20.0 to 0.21.0

Bumps [golang.org/x/sync](https://github.com/golang/sync) from 0.20.0 to 0.21.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/sync/commit/5071ed6a9f1617117556b66384f765c934de3698"><code>5071ed6</code></a> all: fix some comments to improve readability</li>
<li>See ...

🔗 [Link](https://github.com/kubernetes/release/pull/4428)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4427: Bump golang.org/x/text from 0.37.0 to 0.38.0

Bumps [golang.org/x/text](https://github.com/golang/text) from 0.37.0 to 0.38.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/text/commit/f4bb6328041b090f85b93014bd369edfcd24bdef"><code>f4bb632</code></a> go.mod: update golang.org/x dependencies</li>
<li>See full ...

🔗 [Link](https://github.com/kubernetes/release/pull/4427)

**Metadata:**
- Created: 2026-06-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6438: chore: add bhope as approver of ksm

Adding myself as approver of KSM following maintainer discussion. 

cc @mrueg @dgrisonnet @rexagod 

🔗 [Link](https://github.com/kubernetes/org/pull/6438)

**Metadata:**
- Created: 2026-06-08
- Comments: undefined
- State: open
- Draft: No

### prometheus/cloudwatch_exporter: 0.17.0 / 2026-06-08

The release binaries and Docker images are now built with Temurin Java 25.

## What's Changed
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/cloudwatch_exporter/pull/724
* Bump org.apache.maven.plugins:maven-gpg-plugin from 3.2.5 to 3.2.7 by @dependabot[bot] in https://github.com/prometheus/cloudwatch_exporter/pull/750
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/cloudwatch_exporter/pul...

🔗 [Link](https://github.com/prometheus/cloudwatch_exporter/releases/tag/v0.17.0)

**Metadata:**
- Version: v0.17.0
- Published: 2026-06-08
- Prerelease: No

### envoyproxy/gateway#9189: ExternalName Service as a route backend produces an invalid xDS cluster and stalls config delivery

*Description*:

When an HTTPRoute references a Kubernetes t`ype: ExternalName` Service as a backend and the proxy uses Service routing (routingType: Service, set via EnvoyProxy), Envoy Gateway emits an xDS cluster with an empty address. IR validation then rejects the entire xDS snapshot — so config ...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9189)

**Metadata:**
- Created: 2026-06-08
- Comments: 0
- State: open

### containerd/containerd#13545: Bond CNI fails with "Link not found" in chained CNI config after upgrading to 1.7.29+

### Description

After upgrading containerd from 1.7.24 to 1.7.31, the bond CNI plugin cannot see SR-IOV VFs in the pod network namespace when invoked as a chained delegate via Multus thick plugin (chrootExec mode).

SR-IOV CNI successfully places VFs into the netns, but the bond CNI called immediat...

🔗 [Link](https://github.com/containerd/containerd/issues/13545)

**Metadata:**
- Created: 2026-06-08
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-09 02:54:02*
