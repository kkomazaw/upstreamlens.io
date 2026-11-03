---
title: "Upstream Github - 2026-11-03"
description: "CNCF upstream activity from github"
pubDate: 2026-11-03
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "sig/cli", "needs-triage", "needs-sig", "area/test", "sig/node", "kind/feature", "kind/cleanup", "pr", "sig/storage", "size/M", "release-note-none", "sig/apps", "cncf-cla: yes", "needs-priority", "area/apiserver", "release-note", "sig/instrumentation", "needs-ok-to-test", "do-not-merge/needs-kind", "sig/scheduling", "size/XS", "sig/testing", "size/L", "ok-to-test", "kind/regression", "approved", "kind/failing-test", "wg/device-management", "area/kubelet", "lgtm", "size/S", "sig/network", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "sig/auth", "sig/architecture", "sig/cloud-provider", "area/dependency", "kind/dependency", "size/XL", "kind/api-change", "area/code-generation", "sig/autoscaling", "needs-rebase", "size/XXL", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "api-review", "priority/important-longterm", "triage/accepted", "sig/release", "area/release-eng", "release", "area/cluster-autoscaler", "autoscaler", "cncf-cla: no", "area/addon-resizer", "do-not-merge/hold", "kubectl", "priority/backlog", "prometheus", "prometheus-mcp", "containerd", "overlaybd", "cncf", "kind/initiative", "tag/developer-experience", "toc", "kind/moving-levels"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143729: KEP-5958: Drop managedFields in kube-scheduler informers

With ManagedFieldsOptOutClient enabled, the informers use their own client with DropManagedFields set, replacing the pod informer's trim. Plugins' handle.ClientSet() is unchanged.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143729)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4603: Publish OpenVEX for Kubernetes release images and binaries

#### What would you like to be added:

OpenVEX documents for the Kubernetes release images and binaries, generated during `krel stage` and attached and promoted like the image provenance (#4551). This tracks the release engineering side without a KEP; the maintainer assessment process is KEP-6377 (k...

🔗 [Link](https://github.com/kubernetes/release/issues/4603)

**Metadata:**
- Created: 2026-11-02
- Comments: 0
- State: open

### kubernetes/autoscaler#10604: Vulnerabilities in Cluster Autoscaler

Security Scan Report
--
### Our internal security scan reports the following vulnerabilities in the Cluster Autoscaler (CA) images.

| Component          | CVE            | Suggested Remediation                                                                                           |
| -----------...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10604)

**Metadata:**
- Created: 2026-11-02
- Comments: 2
- State: open

### kubernetes/autoscaler#10614: Update k8s deps to v1.36.6

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10614)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10613: Update k8s deps to v1.35.10

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
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10613)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10612: Update k8s deps to v1.34.13

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10612)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10611: Fix CVE-2026-78659 and CVE-2026-78660 in addon-resizer by upgrading golang.org/x/net to v0.60.0

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:
Upgrades `golang.org/x/net` to `v0.60.0` in `addon-resizer` to remediate security vulnerabilities CVE-2026-78659 and CVE-2026-78660 present in `golang.org/x/net/http2`. The `vendor/` directory has been updated ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10611)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2355: [LEVEL CHANGE] CloudNativePG Incubation

# Project Moving Levels Checklist

This template outlines the administrative steps required when a project moves from one maturity level to another (e.g., Sandbox to Incubating, Incubating to Graduated).

- **Project Name:** CloudNativePG 
- **New Maturity Level:** Incubation
- **Project moving leve...

🔗 [Link](https://github.com/cncf/toc/issues/2355)

**Metadata:**
- Created: 2026-11-02
- Comments: 1
- State: open

### cncf/toc#2354: [LEVEL CHANGE] NATS Graduation

# Project Moving Levels Checklist

This template outlines the administrative steps required when a project moves from one maturity level to another (e.g., Sandbox to Incubating, Incubating to Graduated).

- **Project Name:** NATS
- **New Maturity Level:**  Graduation
- **Project moving levels PR:** ...

🔗 [Link](https://github.com/cncf/toc/issues/2354)

**Metadata:**
- Created: 2026-11-02
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#143731: portforward improperly closes local listener in response to server workload RST, breaking all subsequent connections

### What happened?

When the pod side resets one forwarded connection (TCP RST on the pod-local loopback hop), the container runtime reports an error for that connection and `kubectl port-forward` then exits with `error: lost connection to pod`.

The local listener terminates, so every other connect...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143731)

**Metadata:**
- Created: 2026-11-03
- Comments: 7
- State: open

### kubernetes/kubernetes#143719: Kubelet creates orphaned CSINode with stale owner UID when a Node is recreated with the same name

### What happened?

When a Node is recreated using the exact same name as its predecessor (for example, during a cloud provider's Spot VM repair where a replacement VM boots immediately under the same hostname), the Kubelet on the new VM can initialize its CSI nodeInfoManager while the predecessor N...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143719)

**Metadata:**
- Created: 2026-11-02
- Comments: 2
- State: open

### kubernetes/kubernetes#143713: e2e tests for consistency between allocation manager and CPU manager on in-place resize of exclusive CPUs

### What would you like to be added?

e2e_node tests for the scenarios that motivated #143400, added after both #140629 and #143400 are merged.

### Background

In #140629 the CPU manager committed a resize inside its admit handler, before the remaining containers and admit handlers were evaluated (...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143713)

**Metadata:**
- Created: 2026-11-02
- Comments: 3
- State: open

### kubernetes/kubernetes#143712: CPUmanager: quote identifiers in comments with backticks

### What would you like to be added?

Use backticks for identifiers in code comments, for readability. Raised in [#143400 review](https://github.com/kubernetes/kubernetes/pull/143400#discussion_r4410367001):

> we really needs to start using \`\` in comments for readability.

#143400 and #140629 fol...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143712)

**Metadata:**
- Created: 2026-11-02
- Comments: 3
- State: open

### kubernetes/kubernetes#143732: pvcprotection: index the live pod list by PVC

#### What type of PR is this?
/kind feature
/sig apps

#### What this PR does / why we need it:
When a cluster has a very large number of Pods, the throughput of the PVC protection controller degrades sharply and its work queue keeps growing.

Analysis showed an O(N*M) loop in `askAPIServer`. This c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143732)

**Metadata:**
- Created: 2026-11-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143730: apiserver: bound request termination metric cardinality

#### What type of PR is this?

Bug fix.

#### What this PR does / why we need it:

Requests to arbitrary paths can create new time series in `apiserver_request_terminations_total`, increasing monitoring memory usage. Its resource labels come from request paths that have not been validated, and non-r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143730)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143728: Lower default AllocatorPool buffer cap to 32 KiB

- Lowers `DefaultMaxPooledEncodeBufferSize` (gated by `AllocatorPoolBufferCap`, #141299) from `256 KiB` to `32 KiB`.
- Most encoded objects fit in `32 KiB`, avoiding `256 KiB` pool growth from rare larger objects.

/kind feature
/sig api-machinery

```release-note
NONE
```

#### AI usage disclosure:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143728)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143727: Refresh cached Node UID when creating or verifying CSINode ownership

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143727)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143726: test/e2e: propagate cgroup probe failures without caching node mode

#### What type of PR is this?

/kind bug
/kind failing-test
/sig node
/area test

#### What this PR does / why we need it:

`IsPodOnCgroupv2Node` currently turns any exec error into `false` and caches that value for the whole test process. In [this October 18 EC2 correctness run](https://prow.k8s.io...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143726)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143725: topologymanager: optimize hint merging without preferred hints

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Pod admission can still stall when CPU, memory, and device providers offer many NUMA placement hints but cannot agree on a preferred placement. The preferred fast path added in #137701 falls back to evaluating every ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143725)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143724: kubelet: add eviction_type label to evictions

 #### What type of PR is this?

 /kind feature

 #### What this PR does / why we need it:

Adds an eviction_type label ("hard" or "soft") to the kubelet_evictions metric so operators can tell how many evictions were caused by hard versus soft eviction thresholds. The value is derived from isHardEvic...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143724)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143723: test/e2e: remove unused extended resource setup from resize tests

**What type of PR is this?**

/kind cleanup
/sig node
/area test

**What this PR does / why we need it**:

The guaranteed pod-level and container-level resize tables patch `dummy.com/dummy` onto every ready node before each case and remove it afterward: three node-status requests per node per case, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143723)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143722: protecting a couple go funcs with handle crash

This call prevents a panic in a go func from terminating the process (or not) depending on the configuration of HandleCrash.  Found that this protection was missing in some new code.  Looked unintentional.


```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143722)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143721: Bump prometheus/common to v0.73.1

#### What type of PR is this?

/kind dependency
/sig instrumentation

#### What this PR does / why we need it:

Bumps github.com/prometheus/common from v0.72.0 to v0.73.1.

Adds github.com/pandatix/go-abnf, pinned to v0.5.5. v0.73.1 requires v0.5.3, which decodes long OpenMetrics lines superlinearly...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143721)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143720: Watchcache simplify bookmarks

Huge amount of watch code can we removed it we take one assumption: Setting resourceVersion on bookmark event never fails. This requires that newFunc and versioner are working properly, but if they didn't many more things would be broken.

Recommend to review commit by commit.

/kind cleanup

```rel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143720)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143718: Bump cel go 0.33.2

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143718)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143717: Leader election recovery wiring

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143717)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143715: WIP: [FG:DynamicContainers] Add `pods/dynamic` subresource & admission coverage

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Introduces the API side of DynamicContainers (see https://github.com/kubernetes/kubernetes/pull/143714 for the Kubelet portion).

This does NOT include the fail-closed admission coverage, which i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143715)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143714: WIP: [FG:DynamicContainers] Kubelet support for adding & removing containers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This is the Kubelet side of the DynamicContainers changes.

#### Which issue(s) this PR is related to:

https://github.com/kubernetes/enhancements/issues/5972

#### Special notes for your reviewer:

I separated t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143714)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143709: [WIP] Dynamic node-local ephemeral volumes: alpha implementation

Opening mostly so that the scale of the change is visible but this is not ready for review; leaving as a draft until I finish combing through and fixing the AI-generated code changes

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Im...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143709)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143708: kubectl: clean term writers

#### What type of PR is this?
/kind cleanup
/sig cli

#### What this PR does / why we need it:
Noticed that while looking at https://github.com/kubernetes/kubernetes/pull/143691 that we don't use `NewPunchCardWriter`, `NewmaxWidthWriter`. 

Additionally, removed two deprecated methods `IsTerminal` a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143708)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143707: Bump providers/prometheus for regression testing

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143707)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143705: kubelet: log the pod cgroup validation error before killing the pod

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a running pod's cgroup fails validation, SyncPod kills the pod and recreates it. The check goes through `PodContainerManager.Exists`, which reduces the cgroup manager's `Validate` error to a bool, so the reason ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143705)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4604: Test the stage provenance check with a real signature

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Follow-up from the review of #4555: the tests of the stage provenance check replace the signature verification with a stub, so the path official releases take, the collector verifying the signature against the Si...

🔗 [Link](https://github.com/kubernetes/release/pull/4604)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10610: Option to not revert timed-out scale-ups

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area cluster-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addo...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10610)

**Metadata:**
- Created: 2026-11-02
- Comments: 1
- State: open

### kubernetes/autoscaler#10609: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure from 1.36.6 to 1.37.3 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure](https://github.com/kubernetes-sigs/cloud-provider-azure) from 1.36.6 to 1.37.3.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/cloud-provider-azure/releases">sigs.k8s.io/cloud-provider-azure's releas...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10609)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1897: Client-side apply keeps server-generated metadata of the input in last-applied-configuration; later applies to custom resources fail with "must be specified for an update"

**What happened**:

1. On 2026-10-20 a client created a namespaced Calico `NetworkPolicy` (a custom resource). The `managedFields` of the object has one entry: manager `kubectl-client-side-apply` (the default field manager of client-side `kubectl apply`, `pkg/cmd/apply/apply.go:1089-1093` in v0.37.0...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1897)

**Metadata:**
- Created: 2026-11-02
- Comments: 1
- State: open

### kubernetes/kubectl#1896: kubectl kuberc set allows non-alphabetical alias names that break subsequent kubectl commands

### What happened?

`kubectl kuberc set --section aliases` does not validate that `--name` contains only alphabetical characters (`^[a-zA-Z]+$`) before saving to the `kuberc` file.

However, when `kubectl` loads the `kuberc` file on startup (`Preferences.Apply` -> `Preferences.validate` in `staging/...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1896)

**Metadata:**
- Created: 2026-11-02
- Comments: 4
- State: open

### kubernetes/kubectl#1895: CLI flag request: `--fail-fast` (or similar) for `kubectl apply`

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:

It would be great if there was an opt-in flag for `kubectl apply` (something like `--fail-fast`, name open to discussion!) that **stops** at the first error it encounters instead of appl...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1895)

**Metadata:**
- Created: 2026-11-02
- Comments: 1
- State: open

### prometheus/prometheus-mcp: 0.19.0-rc.0 / 2026-11-01

This is the first release under the Prometheus org! See the changelog below for details on the renamed binaries, environment variables, images, and packages. See the README for up to date documentation.

* [CHANGE] Move the project to `github.com/prometheus/prometheus-mcp`; the Go module path is now `github.com/prometheus/prometheus-mcp`. #144
* [CHANGE] Rename the binary from `prometheus-mcp-server` to `prometheus-mcp`. #144 #145
* [CHANGE] Rename flag env vars from `PROMETHEUS_MCP_SERVER_*` to...

🔗 [Link](https://github.com/prometheus/prometheus-mcp/releases/tag/v0.19.0-rc.0)

**Metadata:**
- Version: v0.19.0-rc.0
- Published: 2026-11-02
- Prerelease: Yes

### containerd/overlaybd: Development Build

## Bug Fixes
- **ublk**: fix warm-pool recycle races and slot leak (#477) [#477](https://github.com/containerd/overlaybd/pull/477) ([Zhaoxiang Huang](https://github.com/containerd/overlaybd/commit/d2c4956d51d99fa62b15764a754844950cfae14c))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-02
- Prerelease: Yes

### cncf/toc#2356: [Initiative]: Agent based installation for Cloud Native software

### Name

Prompt based installation for Cloud Native software

### Short description

Publish best practices around how Cloud Native projects can provide prompt and agent based installation of their software

### Responsible group

TAG Developer Experience

### Does the initiative belong to a subpro...

🔗 [Link](https://github.com/cncf/toc/issues/2356)

**Metadata:**
- Created: 2026-11-02
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-11-03 05:17:51*
