---
title: "Upstream Github - 2026-06-22"
description: "CNCF upstream activity from github"
pubDate: 2026-06-22
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/api-machinery", "pr", "area/test", "kind/cleanup", "size/XXL", "cncf-cla: yes", "sig/testing", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "area/apiserver", "size/M", "kind/flake", "release-note-none", "sig/autoscaling", "size/L", "sig/apps", "size/XS", "kind/api-change", "area/kubelet", "sig/node", "release-note", "size/S", "approved", "sig/contributor-experience", "area/jobs", "sig/cloud-provider", "area/config", "area/label_sync", "test-infra", "ok-to-test", "area/dependency", "cloud-provider-gcp", "area/cluster-autoscaler", "do-not-merge/work-in-progress", "kind/feature", "autoscaler", "sig/release", "needs-kind", "area/release-eng", "release"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#9850: Add disruption cost scale-down proposal

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9850)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: Yes

## Updates

### kubernetes/kubernetes#139899: Inconsistent kube-proxy bindAddress recommendations between IPv4 and IPv6 warnings

### What happened?

I. Problem Description

During cluster initialization, the logs repeatedly show conflicting warnings about the recommended value of bindAddress:

The recommended value for "bindAddress" in "KubeProxyConfiguration" is: 0.0.0.0; the provided value is: ::

and also:

The recommended...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139899)

**Metadata:**
- Created: 2026-06-21
- Comments: 2
- State: open

### kubernetes/kubernetes#139894: resource.Quantity.AsApproximateFloat64 returns NaN for a zero value with a large scale

#### What happened?

`resource.Quantity.AsApproximateFloat64()` returns `NaN` for a quantity whose value is exactly zero but whose scale is large (roughly `|scale| >= 309`).

In `staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go`, the function short-circuits only when `exponent == 0`, the...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139894)

**Metadata:**
- Created: 2026-06-21
- Comments: 1
- State: open

### kubernetes/kubernetes#139901: Add ResourceQuota integration tests #139659

#### What type of PR is this?

/kind cleanup
/area test

#### What this PR does / why we need it:
Add integration tests for `ResourceQuota`:
  - Compute: requests/limits.cpu + .memory, hugepages, pod-count replenishment on delete, terminal-phase pod exclusion.
  - Scopes: Terminating/NotTerm...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139901)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139900: apiserver: deflake APF executing-counter test assertion

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

`atomicReadOnlyExecuting` is a process-global counter shared by every request in the priority-and-fairness filter tests. `newApfHandlerWithFilter` asserted it was zero with a single read, so the check flaked ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139900)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139898: hpa: refactor utilization test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139898)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139897: Add +k8s:format=k8s-label-key declarative validation to metav1.Condit…

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Migrates `metav1.Condition.Type`  validation to Declarative Validation.

This PR:

- Adds declarative validation tag to `Condition.Type`:

       +k8s:format=k8s-label-key
- Marks the corresponding handw...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139897)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139895: kubelet: use local status manager as source of truth for pod phase

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139895)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139893: Fix AsApproximateFloat64 NaN for zero quantity

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
`Quantity.AsApproximateFloat64()` only short-circuits when the exponent is zero, then returns `base * math.Pow10(exponent)`. For a quantity whose value is exactly zero but whose scale is large, `base` is `0` and `math....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139893)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37306: fix missing labels and use the correct ibm label

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37306)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1225: chore(deps): bump softprops/action-gh-release from 3.0.0 to 3.0.1

Bumps [softprops/action-gh-release](https://github.com/softprops/action-gh-release) from 3.0.0 to 3.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/softprops/action-gh-release/releases">softprops/action-gh-release's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1225)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1226: chore(deps): bump softprops/action-gh-release from 3.0.0 to 3.0.1

Bumps [softprops/action-gh-release](https://github.com/softprops/action-gh-release) from 3.0.0 to 3.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/softprops/action-gh-release/releases">softprops/action-gh-release's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1226)

**Metadata:**
- Created: 2026-06-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4441: Bump go.yaml.in/yaml/v4 from 4.0.0-rc.5 to 4.0.0-rc.6

Bumps [go.yaml.in/yaml/v4](https://github.com/yaml/go-yaml) from 4.0.0-rc.5 to 4.0.0-rc.6.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/yaml/go-yaml/commit/1c17b9cee72bf81ae73a8be50fbd7dd3a9985125"><code>1c17b9c</code></a> Bump the actions group with 3 updates</li>
<li><...

🔗 [Link](https://github.com/kubernetes/release/pull/4441)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4440: Bump softprops/action-gh-release from 3.0.0 to 3.0.1 in the actions group

Bumps the actions group with 1 update: [softprops/action-gh-release](https://github.com/softprops/action-gh-release).

Updates `softprops/action-gh-release` from 3.0.0 to 3.0.1
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/softprops/action-gh-release/rele...

🔗 [Link](https://github.com/kubernetes/release/pull/4440)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4439: Bump sigs.k8s.io/release-sdk from 0.12.6 to 0.12.7 in the all group

Bumps the all group with 1 update: [sigs.k8s.io/release-sdk](https://github.com/kubernetes-sigs/release-sdk).

Updates `sigs.k8s.io/release-sdk` from 0.12.6 to 0.12.7
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/release-sdk/releases">sigs...

🔗 [Link](https://github.com/kubernetes/release/pull/4439)

**Metadata:**
- Created: 2026-06-22
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-06-22 03:59:28*
