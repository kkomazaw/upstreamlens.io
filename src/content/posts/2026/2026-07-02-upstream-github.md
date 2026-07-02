---
title: "Upstream Github - 2026-07-02"
description: "CNCF upstream activity from github"
pubDate: 2026-07-02
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "wg/device-management", "sig/auth", "triage/accepted", "sig/node", "pr", "sig/network", "area/kubelet", "sig/scheduling", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/api-machinery", "sig/cluster-lifecycle", "release-note", "size/L", "sig/cli", "cncf-cla: yes", "sig/instrumentation", "sig/architecture", "do-not-merge/hold", "area/code-generation", "sig/cloud-provider", "needs-priority", "area/dependency", "size/XL", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "sig/etcd", "priority/important-soon", "size/XS", "kind/api-change", "kind/feature", "api-review", "area/test", "size/XXL", "sig/apps", "sig/testing", "kind/cleanup", "release-note-none", "ok-to-test", "approved", "size/S", "wg/structured-logging", "kind/documentation", "needs-ok-to-test", "do-not-merge/invalid-commit-message", "lgtm", "committee/steering", "area/elections", "community", "area/provider/azure", "area/jobs", "area/config", "test-infra", "size/M", "area/cluster-autoscaler", "autoscaler", "area/provider/gce", "sig/docs", "language/hi", "area/localization", "website", "area/prow", "sig/k8s-infra", "k8s.io", "area/infra", "area/bash", "area/infra/aws", "sig/release", "needs-kind", "area/release-eng", "release", "prometheus", "governance", "docs", "cloudwatch_exporter", "exporter-toolkit", "envoyproxy", "gateway", "kind/enhancement", "containerd", "dependencies"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140170: WIP: DRA resource pool status request

#### What type of PR is this?

/kind feature
/kind api-change

/wg device-management

#### What this PR does / why we need it:

Second Alpha (1.37) of KEP-5677 "DRA Resource Availability Visibility"
(feature gate `DRAResourcePoolStatus`, default off).

The 1.36 alpha miscounts partitiona...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140170)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#9917: [GCE cloud provider] Do not list MIGs in GetMigTargetSize() when cache is warm

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9917)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.13.0 / 2026-07-01

This is a Long Term Support [LTS](https://prometheus.io/docs/introduction/release-cycle/) release.

- [SECURITY] UI: Bump `sanitize-html` to fix a cross-site scripting vulnerability (CVE-2026-44990). #18697
- [CHANGE] UI: Third-party npm dependency licenses are now embedded in the Prometheus binary and served at `/assets/third-party-licenses.txt`, replacing the `npm_licenses.tar.bz2` archive previously shipped in release tarballs and container images. #18997
- [CHANGE] API: Use SHA-256 inste...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.0)

**Metadata:**
- Version: v3.13.0
- Published: 2026-07-01
- Prerelease: No

### envoyproxy/gateway#9401: Support ORCA Out Of Band Reporting on BackendUtilization LoadBalancer

*Description*:
>Describe the desired behavior, what scenario it enables and how it
would be used.
I've been working on implementing [Out Of Band](https://github.com/grpc/proposal/blob/master/A51-custom-backend-metrics.md#out-of-band-metrics-reporting) ORCA Reporting within envoy:
- https://github.co...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/9401)

**Metadata:**
- Created: 2026-07-01
- Comments: 0
- State: open

### containerd/containerd#13703: [not impacted] Please upgrade golang.org/grpc from 1.78.0 -- CVE-2026-33186

### Description

Security scanner found a critical CVE, 2026-33186, in `golang.org/grpc` version `1.78.0`.  Fixed in `1.79.0`.

### Steps to reproduce the issue

1.
2.
3.


### Describe the results you received and expected

Scanned image, found CVE.

### What version of containerd are you using?

3...

🔗 [Link](https://github.com/containerd/containerd/issues/13703)

**Metadata:**
- Created: 2026-07-01
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#140160: DRA: Consumable Capacity PolicyRange doesn't support fractional value

### What happened?

Discussion Thread in slack: https://kubernetes.slack.com/archives/C0409NGC1TK/p1782398632052059

This issue is originally reported by @liggitt 

> Looking at https://github.com/kubernetes/kubernetes/pull/139698, I was digging into consumable capacity policy range step validation ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140160)

**Metadata:**
- Created: 2026-07-01
- Comments: 3
- State: open

### kubernetes/kubernetes#140159: Correctly fallback to token request audience authz check on error

```
OK, yeah, I think this points to a (minor) bug in the token audience restriction:

These test cases fail:
* forbid create of token when audience in pod --> csi --> driver --> tokenrequest with audience and ServiceAccountNodeAudienceRestriction is enabled, csidriver not found
* forbid create of t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140159)

**Metadata:**
- Created: 2026-07-01
- Comments: 0
- State: open

### kubernetes/kubernetes#140157: Excessive "Label not found" V(4) logs for optional container annotations flood kubelet logs and cause rapid disk space consumption

### What happened?

When kubelet runs with `--v=4` (a common debug level), the log is continuously flooded with lines like:

```plaintext
I0627 08:10:30.787761    9911 labels.go:293] "Label not found" label="io.kubernetes.pod.deletionGracePeriod"
I0627 08:10:30.787766    9911 labels.go:304] "Label n...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140157)

**Metadata:**
- Created: 2026-07-01
- Comments: 2
- State: open

### kubernetes/kubernetes#140173: Fix SSA regression where null on a nullable CRD field became an empty {}/[]

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Step 3 in fixing https://github.com/kubernetes-sigs/structured-merge-diff/issues/331

Builds on https://github.com/kubernetes/kube-openapi/pull/622

#### Which issue(s) this PR is related to:

#### Specia...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140173)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140172: poc: single watch latency metric broken down per stage

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140172)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140171: chore(api): Add patchStrategy markers to the ResourceClaim API

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140171)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140168: apiserver: measure event delivery latency from read from etcd to client channel enqueue

This PR introduces the 'apiserver_watch_cache_watcher_dispatch_duration_seconds' alpha metric. This metric tracks the duration from when an event is read from etcd until it is successfully written to a watcher's outgoing result channel (sentAt).

<!--  Thanks for sending a pull request!  Here are ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140168)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140167: Daemonset-controller optimization: hoist toleration & node affinity parsing out of loop

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140167)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140166: Promote declarative validation API tags from alpha to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140166)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140165: Add metrics API roundtrip test fixtures

#### What type of PR is this?

/kind cleanup

Noticed in reviewing https://github.com/kubernetes/kubernetes/pull/139223 that there were no compat fixtures for metrics APIs.

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140165)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140164: Fix MutatingAdmissionPolicy JSONPatch with complex values


#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
When using MutatingAdmissionPolicy JSONPatch, CEL expressions that evaluated to complex structs, lists of structs, or maps failed to apply. This occurred because their schemaless wrappers did not properly impleme...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140164)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140163: kubelet: stop logging missing optional container annotations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140163)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140162: Datapolicy-based Redaction for configz and Logging

#### What type of PR is this?

/kind feature

#### What this PR does / why we negenerteed it:

Use existing datapol to redact fields in configz and logs instead of hardcoding specific fields

#### Which issue(s) this PR is related to:

- kubelet: https://github.com/kubernetes/kubernetes/is...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140162)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140161: Fix DRA CapacityRequestPolicyRange not support fractional quantities

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140161)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140158: Fix missing "of"/"to" prepositions in API and CEL godoc comments

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Fix missing "of"/"to" prepositions in API and CEL godoc comments.

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing ch...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140158)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140156: DRA CEL: base cost estimate on actual types

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Previously, the most recent deviceType and attributeType (= deviceTypeV136ConsumableCapacityListTypeAttributes and attributeTypeV136ListTypeAttributes) were used for cost estimations, regardless of the actu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140156)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140155: Fix ResourceQuota update filter missing initial container status resource population

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140155)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140154: Fix:/containerLogs of kubelet responses httpcode not as expected while CRI return error for containerStatus



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140154)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140153: apiserver: Ensure controllers block in OnStartedLeading

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The coordinated leader election runner was launching controller goroutines and returning immediately. This caused OnStartedLeading to return right after starting the controllers, which will soon be incorrec...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140153)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140151: docs: fix duplicated word in agnhost README

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Removes a duplicated word in the agnhost README without changing the technical meaning.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

This is a docum...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140151)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140150: docs: fix duplicated word in nftables README

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Removes a duplicated word in `pkg/proxy/nftables/README.md` without changing the technical meaning.

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

Thi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140150)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140148: scheduler/preemption: activate preemptor after async preemption to fix stuck pod in PreBind/WaitingPod path

/kind bug
/sig scheduling

#### What this PR does / why we need it:
When SchedulerAsyncPreemption is enabled and the victim pod is in PreBind or WaitingPod state, CancelPod() is used instead of an API delete call, generating no informer delete event.

If EventAssignedPodDelete is emitted by th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140148)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9062: Updating year to 2026 for Kubernetes Steering election

The 2026 README still had some links pointing to 2025 - this corrects those links and points to the current election.

🔗 [Link](https://github.com/kubernetes/community/pull/9062)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37373: Increase timeout from 3h to 4h in windows test

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37373)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37369: CAPZ: Add presubmit for MultiKueue scenarios

This will enable running the new tests added by https://github.com/kubernetes-sigs/cluster-api-provider-azure/pull/6429.

/assign @jackfrancis @mboersma 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37369)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9913: Add EC2 G7 instance family (NVIDIA RTX PRO 4500 Blackwell) and more types to instance type list

## Summary

The EC2 G7 instance family was launched on June 18, 2026 and is not yet reflected in the Cluster Autoscaler instance type data. This family needs to be added so the autoscaler can correctly handle scheduling decisions for GPU workloads using these instances.

Source: [AWS announcement](h...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9913)

**Metadata:**
- Created: 2026-07-01
- Comments: 1
- State: open

### kubernetes/autoscaler#9909: azure: consolidate per-instance azureCache maps to guarantee consistency

### Motivation

#9867 added an `instanceStates` map to `azureCache`, tracked in parallel with the
existing `instanceToNodeGroup` and `unownedInstances` maps. All three are keyed by
instance ID (`azureRef`):

- `instanceToNodeGroup map[azureRef]cloudprovider.NodeGroup`
- `instanceStates map[azureRef]...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9909)

**Metadata:**
- Created: 2026-07-01
- Comments: 1
- State: open

### kubernetes/autoscaler#9919: chore: Bump sigs.k8s.io/cloud-provider-azure/pkg/azclient and related dependencies cluster-autoscaler

#### What type of PR is this?

Replacing #9901, this PR addresses the build failures of the original dependabot update.

/kind cleanup

Unit tests run locally.

#### What this PR does / why we need it:

#9901 doesn't build

#### Does this PR introduce a user-facing change?

```release-...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9919)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9916: CA: parameterize TestClusterStateRegistryScaleUpWithDeletedNodes with different CloudProvider implementations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#9860 fixed a bug in CSR, and added an integration regression test for it. The regression test was tightly coupled with the fake CloudProvider implementation. This PR refactors the test so that it's possibl...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9916)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9914: GCE cloud provider: minor performance optimization for URL parsing and MIG caching

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR optimizes GCE URL parsing and GCE MIG caching by:
1. Precompiling regexes: Precompiles GCE URL regular expressions in `gce_url.go` to avoid runtime compilation. This also allows simplifying `IsInst...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9914)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56343: [hi] Localize cluster-administration/networking.md page

**What type of PR is this?**
/kind feature
/area localization
/language hi

**What this PR does / why we need it:**
This PR localizes the Cluster Networking page (`/concepts/cluster-administration/networking.md`) to Hindi as part of the Hindi localization effort.

**Which issue(s) this PR fi...

🔗 [Link](https://github.com/kubernetes/website/pull/56343)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9671: bump various utility cluster apps

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9671)

**Metadata:**
- Created: 2026-07-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9670: fix karpenter and use newer bottlerocket features

karpenter was deployed incorrectly from #9503 

I also fixed a few things:
- bootstrap is no longer needed, bottlerocket automatically formats and makes the nvme disk available as an ephemeral disk
- upgraded to the latest Intel VMs with local ssds. We moved forward 3 generations and got faster ...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9670)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4447: Bump github.com/sigstore/fulcio from 1.8.5 to 1.8.6

Bumps [github.com/sigstore/fulcio](https://github.com/sigstore/fulcio) from 1.8.5 to 1.8.6.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sigstore/fulcio/releases">github.com/sigstore/fulcio's releases</a>.</em></p>
<blockquote>
<h2>v1.8.6</h2>
<h2>Change...

🔗 [Link](https://github.com/kubernetes/release/pull/4447)

**Metadata:**
- Created: 2026-07-01
- Comments: undefined
- State: open
- Draft: No

### prometheus/docs#3028: New governance is not linked on the website

The website currently still shows https://prometheus.io/governance/. This should be updated to link to https://github.com/prometheus/governance/blob/main/GOVERNANCE.md

🔗 [Link](https://github.com/prometheus/docs/issues/3028)

**Metadata:**
- Created: 2026-07-01
- Comments: 0
- State: open

### prometheus/cloudwatch_exporter: 0.18.0 / 2026-07-01

## What's Changed
* Refactor container publishing by @SuperQ in https://github.com/prometheus/cloudwatch_exporter/pull/860
* Bump software.amazon.awssdk.version from 2.46.5 to 2.46.17 by @dependabot[bot] in https://github.com/prometheus/cloudwatch_exporter/pull/864
* feature: Docker non-root user by @dhoard in https://github.com/prometheus/cloudwatch_exporter/pull/867
* chore: Added code coverage by @dhoard in https://github.com/prometheus/cloudwatch_exporter/pull/865
* Fixup GitHub configs...

🔗 [Link](https://github.com/prometheus/cloudwatch_exporter/releases/tag/v0.18.0)

**Metadata:**
- Version: v0.18.0
- Published: 2026-07-01
- Prerelease: No

### prometheus/exporter-toolkit: v0.17.1

## What's Changed
* Bump golang.org/x/crypto from 0.52.0 to 0.53.0 by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/403
* Bump github.com/prometheus/common from 0.68.0 to 0.69.0 by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/405
* Bump actions/checkout from 6.0.2 to 7.0.0 by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/408
* Improve dependabot config by @SuperQ in https://github.com/prometheus/exporter-toolkit/p...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.17.1)

**Metadata:**
- Version: v0.17.1
- Published: 2026-07-01
- Prerelease: No

### envoyproxy/gateway: v1.8.2

## What's Changed
* [chore] bump codecov by @zirain in https://github.com/envoyproxy/gateway/pull/9264
* [release-1.8] chore: bump base image by @zirain in https://github.com/envoyproxy/gateway/pull/9263
* build(deps): bump the actions group across 1 directory with 8 updates by @dependabot[bot] in https://github.com/envoyproxy/gateway/pull/9284
* build(deps): bump busybox from `1487d0a` to `fd8d9aa` in /tools/docker/envoy-gateway by @dependabot[bot] in https://github.com/envoyproxy/gateway/p...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.8.2)

**Metadata:**
- Version: v1.8.2
- Published: 2026-07-01
- Prerelease: No


---

*This content was automatically collected on 2026-07-02 03:00:15*
