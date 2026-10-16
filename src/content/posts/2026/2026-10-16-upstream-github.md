---
title: "Upstream Github - 2026-10-16"
description: "CNCF upstream activity from github"
pubDate: 2026-10-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/flake", "needs-triage", "sig/etcd", "sig/network", "sig/api-machinery", "kind/feature", "kind/failing-test", "sig/k8s-infra", "sig/scalability", "pr", "area/test", "size/S", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-priority", "kind/cleanup", "area/apiserver", "size/L", "needs-ok-to-test", "lgtm", "size/M", "release-note", "size/XXL", "kind/api-change", "sig/apps", "kind/bug", "approved", "sig/node", "priority/important-longterm", "triage/accepted", "ok-to-test", "area/kubelet", "area/kube-proxy", "do-not-merge/work-in-progress", "area/ipvs", "area/dependency", "do-not-merge/needs-sig", "size/XS", "area/kubectl", "sig/cli", "cncf-cla: no", "do-not-merge/hold", "do-not-merge/needs-kind", "sig/storage", "do-not-merge/release-note-label-needed", "sig/scheduling", "wg/workload-aware-scheduling", "area/vertical-pod-autoscaler", "autoscaler", "kind/dependency", "area/addon-resizer", "sig/contributor-experience", "test-infra", "area/jobs", "area/config", "area/community-management", "area/slack-management", "community", "sig/architecture", "area/developer-guide", "release", "cloud-provider-openstack", "area/apps", "k8s.io", "sig/cluster-lifecycle", "committee/steering", "sig/cloud-provider", "area/access", "area/groups", "wg/node-identity", "sig/autoscaling", "area/artifacts", "area/registry.k8s.io", "kompose", "sig/release", "needs-kind", "area/release-eng", "envoyproxy", "area/translator", "gateway", "cncf", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/cloud-provider-openstack: Release v1.37.1


## Breaking change
* [release-1.37] Drop arm (armhf) from multi-arch image builds by @mandre in https://github.com/kubernetes/cloud-provider-openstack/pull/3254

## What's Changed
* Update release docs with new container registry by @stephenfin in https://github.com/kubernetes/cloud-provider-openstack/pull/3112
* [cinder-csi-plugin] Fix ControllerGetVolume multi-cloud iteration bug by @hemna in https://github.com/kubernetes/cloud-provider-openstack/pull/3121
* [cinder-csi-plugin] Fix inc...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/v1.37.1)

**Metadata:**
- Version: v1.37.1
- Published: 2026-10-15
- Prerelease: No

### envoyproxy/gateway#10288: JWT: editing a SecurityPolicy returns 403 "Wrong requirement_name" on existing connections since v1.9.0

*Description*:

Since v1.9.0 (#9430), the jwt_authn requirement name is built from a hash of the requirement content (`<providers>-or-missing_<hash>`). Editing a JWT SecurityPolicy changes the provider config. For example, it might add an audience, change the JWKS, or change `claimToHeaders`. The ch...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10288)

**Metadata:**
- Created: 2026-10-15
- Comments: 1
- State: open

### cncf/toc#2331: Cozystack: Add Incubation Due Diligence

Adds the Cozystack Incubation Due Diligence document.
Project application: [#1916](https://github.com/cncf/toc/issues/1916)
PR open until October 29 for TOC and public review/comment.

🔗 [Link](https://github.com/cncf/toc/pull/2331)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143080: [Flaking Test] ci-kubernetes-integration TestCorrectness/cacher_with_watch-delaying_etcd

### Which jobs are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master/2110757273419649024

### Which tests are flaking?

- [sig-api-machinery] k8s.io/kubernetes/test/integration/apiserver storage
  - TestCorrectness/cacher_with_watch-delaying_etcd

#...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143080)

**Metadata:**
- Created: 2026-10-16
- Comments: 2
- State: open

### kubernetes/kubernetes#143071: Validate `Service.status.conditions` like other `metav1.Condition` lists (start with warnings)

### What would you like to be added?

Apply the standard `metav1.Condition` validation to `Service.status.conditions`, and to `ServiceCIDR.status.conditions`, at least for conditions that are new or changed. As a first step, a warning instead of an error would already help.

Today these fields are n...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143071)

**Metadata:**
- Created: 2026-10-15
- Comments: 2
- State: open

### kubernetes/kubernetes#143070: [Failing Test] [sig k8s-infra] sig-release-master-informing#gce-cos-master-serial: kubetest.Up

### Which jobs are failing?

[sig-release-master-informing#gce-cos-master-serial](https://testgrid.k8s.io/sig-release-master-informing#gce-cos-master-serial)

### Which tests are failing?

[kubetest.Up](https://storage.googleapis.com/k8s-triage/index.html?job=%5Eci-kubernetes-e2e-gci-gce-serial%24&t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143070)

**Metadata:**
- Created: 2026-10-15
- Comments: 2
- State: open

### kubernetes/kubernetes#143067: client-go: support bounded-memory initial WatchList processing in Reflector

### What would you like to be added?

Please provide a supported, opt-in way to process the initial WatchList snapshot incrementally with backpressure, without requiring `cache.Reflector` to retain every full object in its internal temporary store until initialization completes.

The use case is a c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143067)

**Metadata:**
- Created: 2026-10-15
- Comments: 1
- State: open

### kubernetes/kubernetes#143083: test: fail TestCorrectness subtests via tCtx instead of parent t

#### What type of PR is this?
/kind flake

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:
Fixes #143080


#### Special notes for your reviewer:


#### Does this PR introduce a user-facing change?

```release-note
None
```

#### AI usage disclosure:

Yes, Cursor ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143083)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143082: apiserver/cacher: extract oldestServableLocked from GetIntervalLocked

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Moves the computation of the oldest resourceVersion the watch cache history can deliver out of `GetIntervalLocked` into its own helper, `oldestServableLocked`. `GetIntervalLocked` calls the hel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143082)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143081: apiserver/cacher: extract forEachSelectionKey from startDispatching

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Moves the rule for how an event selects watchers out of `startDispatching` into one function, `forEachSelectionKey`: the four namespace/name scope keys, the trigger values, and the fan-out when...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143081)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143079: Lazy-build aggregator OpenAPI v2 spec

Defers building `kube-aggregator`'s own OpenAPI v2 spec in `BuildAndRegisterAggregator` until the first `/openapi/v2` request when the `OpenAPIV2LazyBuild` feature gate is enabled.

/sig api-machinery
/kind cleanup

```release-note
NONE
```

<!-- AI assistance disclosure -->
AI Tools: Gemini CLI

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143079)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143078: Apps: Make all types memory identical with internal

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143078)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143077: apiserver/cacher: make a non-draining watcher stop final

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Fixes a watch cache goroutine leak:

1. The dispatcher blocks in `add` on a watch-list watcher whose bookmark is received but not sent.
2. The client stops the watch. `forget(false)` queues it in `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143077)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143076: Deflake TestOpenAPIV2LazyBuild integration test

Replaces heap-profile sampling in `TestOpenAPIV2LazyBuild` with a direct `OpenAPIConfig.GetDefinitions` call counter.

/sig api-machinery
/kind flake

```release-note
NONE
```

<!-- AI assistance disclosure -->
AI Tools: Gemini CLI

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143076)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143075: Limit precision of Quantity Add and Subtract

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This is needed as part of https://github.com/kubernetes/kubernetes/issues/141166

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing chang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143075)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143073: Close the underlying connection when the SPDY upgrade fails

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

On a failed SPDY upgrade (e.g. `kubectl exec` into a non-running container), `NewConnection` closes `resp.Body` but never the raw conn dialed in `RoundTrip`, leaking a socket in `CLOSE_WAIT` per attempt. This c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143073)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143072: e2e_node: cancel out working set drift in hugepage reporting test

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

Each `/stats/summary` read returns cadvisor's first root cgroup sample, taken ~150ms after that kubelet started. `availableBefore` and `availableAfter` come from different kubelet processes, and working s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143072)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143069: Add informer benchmark and unkeyable processing test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143069)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143066: golangci-lint: verify expected results

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Unexpected linter reports are found when verify fails, but accidentally disabling or breaking a linter check (for example, when editing the configuration files or updating golangci-lint) could only be detected ma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143066)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143065: Drop `pkg/util/iptables`, port to `sigs.k8s.io/iptables-wrappers/pkg/iptables`

#### What this PR does / why we need it:
Replaces `pkg/util/iptables` with the new version from `sigs.k8s.io/iptables-wrappers`. This is mostly just a port of the original `pkg/util/iptables`, but in particular it also supports auto-detecting the iptables mode (legacy/nft) so that we no longer need...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143065)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143064: Fix maskTrailingDash to make it mask only the trailing dash

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143064)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143063: Fix: default builds fails on Bash 4.2/4.3

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143063)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143062: Pass unparsed resourceVersion down to watchCache allowing for support of consistent get

/kind cleanup

Cleanup in preparation for exposing consistent reads from delegator. It unifies the consistent read done on non-recursive List and Get.

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143062)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143060: kubectl edit: honor --show-managed-fields

  #### What type of PR is this?
  /kind bug

  #### What this PR does / why we need it:
  `kubectl edit` registers `--show-managed-fields` but never passes it to the editor's printer, and it always strips managedFields before opening the editor, so the flag has no effect.

  This wires the flag thro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143060)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143057: attachdetach: remove terminating pods on unhealthy nodes from DSW

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a node crashes or shuts down non-gracefully, pods scheduled to that node enter the `Terminating` state (their `DeletionTimestamp` is set). However, because the node/kubelet is offline, the container status repor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143057)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143055: implement enablement and disablement unit tests for CPG fields in PodGroup and Workload APIs

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

The newest cpg-related fields to `PodGroup` and `Workload` APIs are: `ParentCompositePodGroupName` and `CompositePodGroupTemplates` respectively.
We are addi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143055)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143054: component-base: report leaseDuration in the leaseDuration validation error

**What type of PR is this?**

/kind bug
/sig api-machinery

**What this PR does / why we need it:**

`ValidateLeaderElectionConfiguration` checks that `leaseDuration` is greater than `renewDeadline` and reports the failure on `leaseDuration`, but hands `cc.RenewDeadline` to `field.Invalid` as the ba...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143054)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10438: VPA: add integration test for the recommender --recommender-name flag

#### What type of PR is this?

/kind cleanup
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

Adds a recommender flag integration test for `--recommender-name`.

The recommender is started with `--recommender-name=custom-recommender`, and four VPAs target the same deployment:...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10438)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10437: build(deps): bump the non-kubernetes group across 2 directories with 19 updates

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Update dependencies because dependabot couldn't, replaces https://github.com/kubernetes/autoscaler/pull/10434

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usag...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10437)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10436: Port updates from the addon-resizer-release-1.8 branch

#### What type of PR is this?

/kind dependency
/kind cleanup
/kind feature

#### What this PR does / why we need it:

Since 2019, the `addon-resizer-release-1.8` branch is the branch where all addon-resizer development occurred.

This PR ports those developments to the `master` branch:
1. Updates t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10436)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38076: For AgentSandbox repo, mark PRs stale after 15d instead of 30d (close after another 15d).

Follow-up to #36592. Reduces the inactivity window before `lifecycle/stale` is applied on kubernetes-sigs/agent-sandbox PRs from 30d to 15d. The close-after-stale window stays at 15d, so inactive PRs are now closed after 30d total instead of 45d.

Changes:
- `ci-k8s-triage-robot-stale-prs-agent-sand...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38076)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38072: Add node-feature-discovery presubmit jobs for release-0.20

The release-0.20 branch will be cut on Friday, 2026-10-16, for the upcoming node-feature-discovery
v0.20.0 release (tracker: kubernetes-sigs/node-feature-discovery#2629).

Add the branch presubmit jobs, a mechanical clone of the release-0.19 configuration with the
branch/testgrid references updated ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38072)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9223: Ad slack channel and lead usergroup for WG Workload Conformance

**Which issue(s) this PR fixes**:

Part of https://github.com/kubernetes/community/issues/9217

/assign @kubernetes/sig-contributor-experience-leads 

🔗 [Link](https://github.com/kubernetes/community/pull/9223)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9222: [WIP] Clarify API version and alpha field guidance

AI assistance was used to review existing guidance and draft these documentation clarifications.

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributor...

🔗 [Link](https://github.com/kubernetes/community/pull/9222)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-manila-csi-2.37.1

Manila CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-manila-csi-2.37.1)

**Metadata:**
- Version: openstack-manila-csi-2.37.1
- Published: 2026-10-15
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cloud-controller-manager-2.37.1

Openstack Cloud Controller Manager Helm Chart

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cloud-controller-manager-2.37.1)

**Metadata:**
- Version: openstack-cloud-controller-manager-2.37.1
- Published: 2026-10-15
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.37.1

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.37.1)

**Metadata:**
- Version: openstack-cinder-csi-2.37.1
- Published: 2026-10-15
- Prerelease: No

### kubernetes/k8s.io#10071: Update go.k8s.io/sig-testing-notes

Using the new SIG Testing notes doc since the old one is inaccessible.


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10071)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10069: update email address for elmiko



**What this PR does / why we need it**:

This change is being proposed to increased access to gsuite functionality.


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10069)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10067: Add model-serving-signals image promoter manifests

**What this PR does / why we need it**:

Adds the image promoter manifests for the model-serving-signals subproject so its `metrics-exporter` image can be promoted from staging to `registry.k8s.io`.

Draft for now. `images.yaml` holds a `# No images yet` placeholder and will be filled with the first...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10067)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kompose#2140: Add an opt-in error for the unless-stopped restart policy conversion

### What would you like to be added?

I’d like kompose convert to have an opt-in way to reject the existing conversion 

of:
```console
restart: unless-stopped
```
to:
```console
restart: always
```
instead of only warning and continuing.

This is based on the implementation at revision - 59af0f0

I...

🔗 [Link](https://github.com/kubernetes/kompose/issues/2140)

**Metadata:**
- Created: 2026-10-15
- Comments: 0
- State: open

### kubernetes/kompose#2141: convert: optional error when unless-stopped becomes always

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

unless-stopped still turns into always, with the same warning, unless `--reject-lossy-restart-policy` is set. Then convert stops before it writes anything and the error names the service and both policies. Defaul...

🔗 [Link](https://github.com/kubernetes/kompose/pull/2141)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4568: Bump google.golang.org/api from 0.301.0 to 0.302.0

Bumps [google.golang.org/api](https://github.com/googleapis/google-api-go-client) from 0.301.0 to 0.302.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/googleapis/google-api-go-client/releases">google.golang.org/api's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/release/pull/4568)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4567: fix debian base image

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#deve...

🔗 [Link](https://github.com/kubernetes/release/pull/4567)

**Metadata:**
- Created: 2026-10-15
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-16 03:04:41*
