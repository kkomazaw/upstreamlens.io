---
title: "Upstream Github - 2026-08-10"
description: "CNCF upstream activity from github"
pubDate: 2026-08-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/auth", "kind/failing-test", "needs-triage", "kind/bug", "sig/api-machinery", "kind/flake", "needs-sig", "pr", "size/L", "kind/api-change", "cncf-cla: no", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-sig", "area/kubectl", "release-note", "size/M", "sig/cli", "cncf-cla: yes", "area/test", "sig/node", "size/XS", "release-note-none", "sig/testing", "kind/cleanup", "area/apiserver", "approved", "kube-state-metrics", "priority/important-soon", "sig/instrumentation", "language/en", "triage/accepted", "website", "help wanted", "kind/feature", "priority/backlog", "language/ko", "area/localization", "language/ja", "lgtm", "sig/docs", "area/vertical-pod-autoscaler", "ok-to-test", "autoscaler", "area/testgrid", "size/XXL", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "area/dependency", "enhancements", "cloud-provider-openstack", "envoyproxy", "release", "gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#56895: (1.37) Metrics API not documented

**This is a Bug Report**

KEP issue: https://github.com/kubernetes/enhancements/issues/5207

<!--Required Information-->
**Problem:** https://www.kubernetes.dev/resources/keps/5207/#release-signoff-checklist shows that `metrics.k8s.io` is due to graduate to v1 in the Kubernetes 1.37 release, but the...

🔗 [Link](https://github.com/kubernetes/website/issues/56895)

**Metadata:**
- Created: 2026-08-09
- Comments: 1
- State: open

### kubernetes/autoscaler#10121: VPA: improve flags.md generation script

#### What type of PR is this?

This PR improves the flags.md generation script.

<!--
Add one of the following kinds:
/kind bug
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind fai...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10121)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141284: Failure cluster [bdd28305...] `ci-kubernetes-integration-master-s390x` failures

### Failure cluster [bdd28305b439b8e2afa0](https://go.k8s.io/triage#bdd28305b439b8e2afa0)

<img width="1840" height="364" alt="Image" src="https://github.com/user-attachments/assets/ed23ca59-ad01-492e-b52b-b7efa59d76a1" />

Also see:

https://testgrid.k8s.io/ibm-s390x-periodics#ci-kubernetes-integra...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141284)

**Metadata:**
- Created: 2026-08-10
- Comments: 2
- State: open

### kubernetes/kubernetes#141283: compatibility-versions-feature-gate-test always fails since the 1.37 cut: validator ignores MinCompatibilityVersion

**What happened**:

The periodic job [`ci-kubernetes-e2e-kind-compatibility-versions-feature-gate-test`](https://prow.k8s.io/?job=ci-kubernetes-e2e-kind-compatibility-versions-feature-gate-test) has failed on every run since 2026-08-06 12:48 UTC. The failure rate is 100 percent.

The validator repor...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141283)

**Metadata:**
- Created: 2026-08-09
- Comments: 2
- State: open

### kubernetes/kubernetes#141277: client-go: publishing bot flake from FakeControllerSource shutdown deadlock

### Which job is flaking?

The publishing bot client-go test run: https://github.com/kubernetes/kubernetes/issues/56876#issuecomment-5228951739

### Which tests are flaking?

`go test -mod=mod ./...` for `k8s.io/client-go/tools/cache`. The tests pass, then goleak reports a reflector stuck in `FakeCo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141277)

**Metadata:**
- Created: 2026-08-09
- Comments: 2
- State: open

### kubernetes/kubernetes#141282: feat: add PodConditionAnalyzer utility for pod status analysis

## What this PR does
Adds PodConditionAnalyzer utility to k8s.io/api/core/v1 for analyzing pod conditions and status.

## Why needed
Currently analyzing pod conditions requires manual iteration. This provides clean API.

## Changes
- pod_utils.go: New PodConditionAnalyzer with methods for condition ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141282)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141281: kubectl: complete pod names and type/name forms for debug

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl debug` takes a single positional (`POD | TYPE/NAME`), but its completion was wired to `ResourceTypeAndNameCompletionFunc` (the get-style completion), which suggests a bare resource type (the shell appends a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141281)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141280: fix non-root image user test on Windows

#### What type of PR is this?

/kind failing-test

#### What this PR does / why we need it:

Updates the runAsNonRoot test for an image-specified user to validate the platform-specific user of the nonroot test image. Linux continues to verify UID 1234, while Windows invokes `cmd` and verifies ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141280)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141279: apiserver: improve upon Matches logic in watch cache

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR simplifies the object matching logic in the watch cache (`cacher.go`). Previously, the cacher was calling `MatchesSharding` and `MatchesObjectAttributes` directly, duplicating logic and feature gate...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141279)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141278: client-go/cache: avoid fake source shutdown deadlock

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

Stops the controller from orphaning its reflector when processing panics. Makes `FakeControllerSource` return an error after shutdown instead of holding its lock forever. Adds regression tests for both pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141278)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3060: perf: reduce allocations in metric generation and header sanitization

**What this PR does / why we need it:**

Three independent allocation reductions on the per-event and per-scrape paths, each measured with `benchstat` (6 runs).

**1. `SanitizeHeaders`: precompute per-store headers** — headers were re-parsed and rewritten on every scrape. They are now parsed once in...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3060)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3059: fix(pod): do not emit nil metrics for unparseable pod IPs

**What this PR does / why we need it:**

`createPodIPFamilyGenerator` sized the metric slice with the number of pod IPs and assigned by index, but skipped entries whose IP failed to parse. Every skipped IP therefore left a `nil *metric.Metric` in the family, which `wrapPodFunc` then dereferences whi...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3059)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56894: (1.37) Add "Pod shared pool" to glossary

**This is a feature request**

<!--Required Information-->
**Problem:** The [preview](https://deploy-preview-55932--kubernetes-io-vnext-staging.netlify.app/docs/concepts/resource-management/pod-level-resource-managers/#glossary) of the Kubernetes **v1.37** docs for _Pod level resource managers_ incl...

🔗 [Link](https://github.com/kubernetes/website/issues/56894)

**Metadata:**
- Created: 2026-08-09
- Comments: 3
- State: open

### kubernetes/website#56893: (1.37) CompositePodGroup docs not aligned to style guide

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:** The [preview](https...

🔗 [Link](https://github.com/kubernetes/website/issues/56893)

**Metadata:**
- Created: 2026-08-09
- Comments: 5
- State: open

### kubernetes/website#56888: [ko] Update content/ko/docs/tasks/tools/install-kubectl-linux.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/56888)

**Metadata:**
- Created: 2026-08-09
- Comments: 1
- State: open

### kubernetes/website#56885: [ko] Translate content/en/docs/reference/instrumentation/slis.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/instrumentation/slis.md` into Korean as `content/ko/docs/reference/instrumentation/slis.md`.

**Website Link**

- English: https://kubernetes.io/docs/reference/instrumentation/slis/
- Korean targ...

🔗 [Link](https://github.com/kubernetes/website/issues/56885)

**Metadata:**
- Created: 2026-08-09
- Comments: 1
- State: open

### kubernetes/website#56883: [ko] Translate content/en/docs/concepts/cluster-administration/observability.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/cluster-administration/observability.md` into Korean as `content/ko/docs/concepts/cluster-administration/observability.md`.

**Website Link**

- English: https://kubernetes.io/docs/concepts/cluste...

🔗 [Link](https://github.com/kubernetes/website/issues/56883)

**Metadata:**
- Created: 2026-08-09
- Comments: 1
- State: open

### kubernetes/website#56874: [ja] Broken url which shows example of `translator` field in content/ja/docs/contribute/localization.md

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
[An url which shows...

🔗 [Link](https://github.com/kubernetes/website/issues/56874)

**Metadata:**
- Created: 2026-08-09
- Comments: 1
- State: open

### kubernetes/website#56875: [ja] Fix broken url which shows example of `translator` field in content/ja/docs/contribute/localization.md

### Description
- WHAT
	- Update broken url
- WHY
	- The url was broken

### Tets plan
- [x] Confirmed the url is fixed in deployed preview site: https://deploy-preview-56875--kubernetes-io-main-staging.netlify.app/ja/docs/contribute/localization/#style-guide

### Issue

<!--
 If this pu...

🔗 [Link](https://github.com/kubernetes/website/pull/56875)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10124: Bump the non-kubernetes group across 1 directory with 18 updates

Bumps the non-kubernetes group with 11 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/container-storage-interface/spec](https://github.com/container-storage-interface/spec) | `1.12.1-0.20260720052920-cd9e7ad1ae09` | `1.13.0` |
| [gi...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10124)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10122: Fix e2e test flake

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

There seems to be a flake when sending CPU usage to pods, since a service is used the spread isn't guaranteed to be even.

This PR introduces a few changes:

1. Remove the intermediate Pod, use the API se...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10122)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37647: Kops - Update kops and k8s versions in grid and upgrade tests

kops and k8s 1.36 have been out for a while now, this updates the grid and upgrade tests to use them.


🔗 [Link](https://github.com/kubernetes/test-infra/pull/37647)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6270: Bump github.com/go-git/go-git/v5 from 5.19.1 to 5.19.2

Bumps [github.com/go-git/go-git/v5](https://github.com/go-git/go-git) from 5.19.1 to 5.19.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-git/go-git/releases">github.com/go-git/go-git/v5's releases</a>.</em></p>
<blockquote>
<h2>v5.19.2</h2>
<h2>What'...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6270)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3159: [k8s-keystone-auth] Preserve config after failed reload

What this PR does / why we need it:

A malformed live policy or sync ConfigMap logs a parse error, but still replaces working config with empty or partial state
As a result, auth can start denying requests or syncing can silently stop

This keeps the last good config when parsing or validation ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3159)

**Metadata:**
- Created: 2026-08-09
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway: v1.9.0-rc.1

## What's Changed
* Add Flux installation guide by @matheuscscp in https://github.com/envoyproxy/gateway/pull/8864
* fix(api): increase RateLimitSelectCondition.headers MaxItems from 16 to 64 by @wucm667 in https://github.com/envoyproxy/gateway/pull/8906
* skip invalid listener first in IR by @zirain in https://github.com/envoyproxy/gateway/pull/8577
* feat: policy field owner by @kkk777-7 in https://github.com/envoyproxy/gateway/pull/8538
* docs(tasks): add documentation for Dynamic Module...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.0-rc.1)

**Metadata:**
- Version: v1.9.0-rc.1
- Published: 2026-08-09
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-10 01:27:49*
