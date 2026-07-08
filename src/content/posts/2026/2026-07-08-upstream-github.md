---
title: "Upstream Github - 2026-07-08"
description: "CNCF upstream activity from github"
pubDate: 2026-07-08
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "needs-triage", "wg/device-management", "kind/flake", "kind/feature", "sig/cli", "pr", "area/test", "sig/api-machinery", "size/XXL", "kind/api-change", "sig/apps", "sig/testing", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "area/code-generation", "needs-priority", "wg/workload-aware-scheduling", "cncf-cla: yes", "kind/cleanup", "area/apiserver", "size/S", "release-note-none", "size/M", "do-not-merge/needs-sig", "area/kubectl", "release-note", "size/XS", "needs-ok-to-test", "sig/network", "area/kubelet", "area/kube-proxy", "area/cloudprovider", "sig/storage", "sig/node", "sig/cluster-lifecycle", "size/L", "sig/auth", "sig/instrumentation", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "sig/cloud-provider", "area/dependency", "priority/important-soon", "do-not-merge/hold", "triage/accepted", "sig/etcd", "size/XL", "approved", "wg/structured-logging", "needs-rebase", "lgtm", "area/testgrid", "area/jobs", "area/config", "area/conformance", "test-infra", "language/ko", "area/localization", "website", "language/en", "ok-to-test", "cloud-provider-gcp", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "node-problem-detector", "sig/release", "needs-kind", "area/release-eng", "release", "cloud-provider-aws", "kube-openapi", "cncf", "kind/initiative", "tag/operational-resilience", "sub/project-reviews", "init/not-started", "toc", "needs-group"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140300: KEP-5491: `matchAttribute` constraint fails to allocate devices when backtracking is required (DRAListTypeAttributes)

/wg device-management
/sig scheduling
KEP: https://github.com/kubernetes/enhancements/issues/5491

_This bug is originally reported by @pohly in a private communication._

### What happened?

When using `DRAListTypeAttributes` is enabled (list-type device attributes),  `matchAttribute` fails the dev...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140300)

**Metadata:**
- Created: 2026-07-08
- Comments: 1
- State: open

### kubernetes/kubernetes#140305: [WAS] KEP-5547: Manage Workload/PodGroup for CronJob-owned Jobs

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

- Integrate Job controller with workloadbuild library and the building blocks APIs

#### Which issue(s) this PR is related to:
Ref #139359 

#### Special notes for your reviewer:

#### Does this PR int...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140305)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140304: [WAS] KEP-5547: Support BYO Workload with template selection

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Integrate Job controller with workloadbuild library and the building blocks APIs

#### Which issue(s) this PR is related to:
Ref #139359 

#### Special notes for your reviewer:

#### Does this PR i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140304)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140303: [WAS] KEP-5547: Mark controller-created with managed-by annotation 

/kind feature

#### What this PR does / why we need it:

- Integrate Job controller with workloadbuild library and the building blocks APIs

#### Which issue(s) this PR is related to:
Ref #139359 

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
<...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140303)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140295: [WAS] KEP-5732: Promote TAS to beta

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promote the topology-aware scheduling feature to beta

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5732

#### Special notes for your reviewer:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140295)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9947: [VPA] Enable revive rules - 6

#### What type of PR is this?
/kind cleanup

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
/kind regress...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9947)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9945: Add reasons to in-place update deferred log messages

#### What type of PR is this?
/kind cleanup
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
/kin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9945)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4451: Bump step-security/harden-runner from 2.19.4 to 2.20.0 in the actions group

Bumps the actions group with 1 update: [step-security/harden-runner](https://github.com/step-security/harden-runner).

Updates `step-security/harden-runner` from 2.19.4 to 2.20.0
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/step-security/harden-runner/re...

🔗 [Link](https://github.com/kubernetes/release/pull/4451)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1462: Use NLB Security group as source in Node Security Groups rules when NLB has a SG attached

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:

When an NLB has one or more security groups (managed or BYO), the CCM should create ingress rules on node security groups referencing the NLB's security group, instead of the current per...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/issues/1462)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#140298: [Flaking tests] [sig-scheduling] k8s.io/kubernetes/test/integration/scheduler_perf/dra.workloadresourceclaims

### Which jobs are flaking?

ci-kubernetes-integration-arm64-master

### Which tests are flaking?

[sig-scheduling] k8s.io/kubernetes/test/integration/scheduler_perf/dra.workloadresourceclaims
[Prow](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master/207408994...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140298)

**Metadata:**
- Created: 2026-07-08
- Comments: 4
- State: open

### kubernetes/kubernetes#140297: kubectl: autocomplete --dry-run with '=' and value suggestions (none/server/client)

### What would you like to be added?

Improve shell completion for the `--dry-run` flag on mutating `kubectl` commands
(`apply`, `create`, `delete`, `patch`, `scale`, …) so that:

- `kubectl apply --dry-run<TAB>` completes to **`--dry-run=`** (with no trailing
  space and no file listing), and
- `ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140297)

**Metadata:**
- Created: 2026-07-07
- Comments: 2
- State: open

### kubernetes/kubernetes#140302: storagetesting: record GetStream calls in KVRecorder

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds GetStream call tracking to the test KVRecorder, mirroring the existing unary Get tracking, so tests can assert whether the etcd3 watch initial-sync goes through the RangeStream RPC.

#### Which issue(s) this...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140302)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140301: Add api-approvers as owners of golangci lint configuration

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This appears to be a gap where API approvers have `kube-api-linter` ownership but not ownership of the sibling files in hack for linters that almost always need to be modified in tandum.

#### Which issue...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140301)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140299: kubectl: suggest --dry-run= in shell completion

**What type of PR is this?**

/kind feature

**What this PR does / why we need it**

`kubectl <cmd> --dry-run<TAB>` currently completes to `--dry-run ` (with a
trailing space) and then offers file completion. But `--dry-run` carries an
_optional_ value via `NoOptDefVal`, so the space-separated form ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140299)

**Metadata:**
- Created: 2026-07-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140296: Manual cherry-pick of # 140294: Revert SMD #306 to fix regression in SSA for nullable container types

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

This is a targeted backport of https://github.com/kubernetes/kubernetes/pull/140294

Instead of pulling in the latest structured-merge-diff change, a separate v6....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140296)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140293: CEL reflective wrappers (5): Keep set-list union semantics on CEL concatenation results

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/140292

5th PR in a series to address https://github.com/kubernetes/kubernetes/pull/140266

This addresses merge ordering of `+x-kubernetes-list-type=...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140293)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140292: CEL reflective wrappers (4): Keep map-list merge semantics on CEL concatenation results

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/140291

4th PR in a series to address https://github.com/kubernetes/kubernetes/pull/140266

This addresses merge ordering of `+x-kubernetes-list-type=...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140292)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140291: CEL reflective wrappers (3): Fix list concatenation to not mutate LHS

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/140290

3rd PR in a series to address https://github.com/kubernetes/kubernetes/pull/140266

`Add` appended into the left operand's backing slice via `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140291)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140290: CEL reflective wrappers (2): Fix list/map Value() and ConvertToNative() to return the underlying Go value

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Builds on https://github.com/kubernetes/kubernetes/pull/140288

2nd PR in a series to address https://github.com/kubernetes/kubernetes/pull/140266

`typedList.Value()`, `typedMap.Value()` and `typedMap.Conv...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140290)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140289: Opportunistic batching rescore

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140289)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140288: CEL reflective wrappers (1): Switch to range loops to appease linters

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

1st PR in a series to address https://github.com/kubernetes/kubernetes/pull/140266

This just switches to range syntax to appease the linter and simplify the rest of the PRs

#### Which issue(s) this PR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140288)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140287: WIP: Wait for CRD to be established before using it

#### What type of PR is this?
/kind bug
/kind flake

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes #140251

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
<!--
If no, just write "NONE" in the release-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140287)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140286: kubelet: harden and promote PodsAPI feature to Beta in 1.37

Promote the PodsAPI feature gate to Beta (enabled by default in 1.37). Unconditionally initialize and start the Pods API gRPC server during Kubelet bootstrap, allowing it to handle requests and return appropriate errors when the feature gate is disabled.

Chain the rate limiter and metrics unary s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140286)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140285: cacher: assert consistent read fallback passes through client list options

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Extends TestConsistentReadFallback to assert the watch cache's etcd fallback passes the client's original recursive consistent-read options through, adding a storage.IsConsistentReadList predicate for the check.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140285)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140284: Use context-aware helpers in quota evaluator core

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140284)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140283: Manual cherry-pick of #138837: Clarify multi-attach events

Manual cherry-pick of #138837

/kind bug

```release-note
None
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140283)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140282: Use context-aware helpers in requestheader controller

#### What type of PR is this?

/kind cleanup
/sig auth
/wg structured-logging

#### What this PR does / why we need it

This updates the requestheader controller to use context-aware helpers.

The controller already runs with a `context.Context` and already uses `HandleCrashWithContext`. This PR swi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140282)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37408: config: add GCP GPU E2E jobs for kubernetes-sigs/ai-conformance

Added GCP GPU E2E presubmit (`pull-ai-conformance-e2e-gcp`) and periodic (`ci-ai-conformance-e2e-gcp`) jobs for `kubernetes-sigs/ai-conformance`.

- Executes `./test/e2e/run-e2e-gcp.sh` from `kubernetes-sigs/ai-conformance` (being added in https://github.com/kubernetes-sigs/ai-conformance/pull/76)...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37408)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37407: Exclude PreventStaticPodAPIReferences from compatibility-versions feature gate check

PreventStaticPodAPIReferences is a kubelet feature gate, so it is not bound by the emulated-version compatibility policy that control-plane gates follow and can be removed at any time. It was removed in kubernetes/kubernetes#140226, so add it to REMOVED_FEATURE_LIST alongside LegacySidecarContainers...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37407)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56429: [ko] Update content/ko/docs/concepts/services-networking/gateway.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/gateway.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/gateway/
- Engli...

🔗 [Link](https://github.com/kubernetes/website/issues/56429)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

### kubernetes/website#56428: [ko] Update content/ko/docs/concepts/extend-kubernetes/api-extension/custom-resources.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/extend-kubernetes/api-extension/custom-resources.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/extend-kubernet...

🔗 [Link](https://github.com/kubernetes/website/issues/56428)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

### kubernetes/website#56427: ContainerStatus not defined in Pod defn

In https://kubernetes.io/docs/reference/kubernetes-api/core/pod-v1/ the description of ContainerStatus object is missing.


🔗 [Link](https://github.com/kubernetes/website/issues/56427)

**Metadata:**
- Created: 2026-07-07
- Comments: 2
- State: open

### kubernetes/website#56426: [ko] Umbrella: update and add feature-gates related documents

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
- update and add feature-gates rel...

🔗 [Link](https://github.com/kubernetes/website/issues/56426)

**Metadata:**
- Created: 2026-07-07
- Comments: 3
- State: open

### kubernetes/website#56424: Duplicate content in API reference pages

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**

Every page under h...

🔗 [Link](https://github.com/kubernetes/website/issues/56424)

**Metadata:**
- Created: 2026-07-07
- Comments: 3
- State: open

### kubernetes/website#56418: Endpoints docs page render Error

```
 Name: &#34;mysvc&#34;,
 Subsets: [
   {
     Addresses: [{&#34;ip&#34;: &#34;10.10.1.1&#34;}, {&#34;ip&#34;: &#34;10.10.2.2&#34;}],
     Ports: [{&#34;name&#34;: &#34;a&#34;, &#34;port&#34;: 8675}, {&#34;name&#34;: &#34;b&#34;, &#34;port&#34;: 309}]
   },
   {
     Addresses: [{&#34;ip&#34;: &#...

🔗 [Link](https://github.com/kubernetes/website/issues/56418)

**Metadata:**
- Created: 2026-07-07
- Comments: 4
- State: open

### kubernetes/cloud-provider-gcp#1235: chore(deps): bump the k8s-dependencies group across 3 directories with 6 updates

Bumps the k8s-dependencies group with 3 updates in the /metis directory: [k8s.io/api](https://github.com/kubernetes/api), [k8s.io/client-go](https://github.com/kubernetes/client-go) and [k8s.io/component-base](https://github.com/kubernetes/component-base).
Bumps the k8s-dependencies group with 4 upd...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1235)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9948: CapacityBuffers implementation uses min() when design says max()

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
/area cluster-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9948)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

### kubernetes/autoscaler#9944: VPA updater should log WHY it "can't in-place update pod"

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one of the following areas:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9944)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

### kubernetes/autoscaler#9943: Docs: default values on verticalpodautoscaler.spec.resourcePolicy.containerPolicies.controlledResources

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one of the following areas:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9943)

**Metadata:**
- Created: 2026-07-07
- Comments: 1
- State: open

### kubernetes/node-problem-detector#1301: Bump Go to 1.26.5 and golang.org/x modules

/cc @SergeyKanzhelev @wangzhen127 @ameukam 

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1301)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector#1300: Bump Go to 1.26.5 and golang.org/x modules

/cc @SergeyKanzhelev @wangzhen127 @ameukam 

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1300)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector#1299: Bump Go to 1.26.5 and golang.org/x modules

/cc @SergeyKanzhelev @wangzhen127 @ameukam 

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1299)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1465: Automated cherry pick of #1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

Cherry pick of #1388 on release-1.34.

#1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1465)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1464: Automated cherry pick of #1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

Cherry pick of #1388 on release-1.35.

#1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1464)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1463: Automated cherry pick of #1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

Cherry pick of #1388 on release-1.36.

#1388: Fix route-controller by fanning out getInstancesByIDs through the batcher

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1463)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-openapi#623: Update README with current repo structure

Add a note that both OpenAPI v2 and v3 are supported and a short list of the main components.

🔗 [Link](https://github.com/kubernetes/kube-openapi/pull/623)

**Metadata:**
- Created: 2026-07-07
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2233: [Initiative]: Scale and performance testing guidance

### Name

Scale and performance testing guidance for CNCF projects

### Short description

Define performance testing expectations by project type so DD reviewers and projects have clear benchmarks to target.

### Responsible group

TAG Operational Resilience

### Does the initiative belong to a sub...

🔗 [Link](https://github.com/cncf/toc/issues/2233)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2232: [Initiative]: Community growth playbook for CNCF projects

### Name

Community growth playbook for CNCF projects

### Short description

Practical guidance for CNCF projects on contributor recruitment, onboarding, and retention to build sustainable communities.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproject...

🔗 [Link](https://github.com/cncf/toc/issues/2232)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2231: [Initiative]: Vendor neutrality guidance for CNCF projects

### Name

Vendor neutrality guidance for CNCF projects

### Short description

Standardize vendor-neutrality expectations for CNCF projects across governance rules, container image metadata, and infrastructure ownership.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Y...

🔗 [Link](https://github.com/cncf/toc/issues/2231)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2230: [Initiative]: Public roadmap documentation standards

### Name

Public roadmap documentation standards

### Short description

Standardize how CNCF projects maintain a persistent, discoverable public roadmap with a documented change process.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproject name

Project ...

🔗 [Link](https://github.com/cncf/toc/issues/2230)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open

### cncf/toc#2229: [Initiative]: Adopter documentation standards (ADOPTERS.md)

### Name

Adopter documentation standards (ADOPTERS.md)

### Short description

Standardize ADOPTERS.md format with recommended fields so projects, DD reviewers, and adopters have consistent expectations.

### Responsible group

TOC

### Does the initiative belong to a subproject?

Yes

### Subproje...

🔗 [Link](https://github.com/cncf/toc/issues/2229)

**Metadata:**
- Created: 2026-07-07
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-07-08 02:28:44*
