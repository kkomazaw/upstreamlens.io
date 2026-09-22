---
title: "Upstream Github - 2026-09-22"
description: "CNCF upstream activity from github"
pubDate: 2026-09-22
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "needs-triage", "priority/important-soon", "kind/flake", "triage/accepted", "sig/scalability", "kind/failing-test", "sig/k8s-infra", "kind/bug", "sig/storage", "priority/backlog", "sig/scheduling", "kind/feature", "sig/testing", "pr", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/kubelet", "size/L", "area/apiserver", "sig/api-machinery", "size/S", "release-note-none", "approved", "area/test", "ok-to-test", "sig/auth", "sig/apps", "wg/device-management", "do-not-merge/release-note-label-needed", "kind/api-change", "area/code-generation", "sig/cli", "area/e2e-test-framework", "kind/cleanup", "sig/etcd", "wg/workload-aware-scheduling", "kind/deprecation", "kind/regression", "cncf-cla: no", "do-not-merge/hold", "area/kubectl", "cloud-provider-openstack", "do-not-merge/work-in-progress", "size/XL", "lgtm", "size/XS", "area/dependency", "enhancements", "language/ko", "area/localization", "website", "sig/docs", "language/pt", "area/web-development", "language/vi", "language/zh", "size/XXL", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "sig/release", "area/release-eng", "cloud-provider-gcp", "sig/autoscaling", "perf-tests", "sig-release", "area/vertical-pod-autoscaler", "autoscaler", "do-not-merge/needs-area", "needs-kind", "release", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/perf-tests#4386: Add HPA reconciliation baseline test

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds `clusterloader2/testing/hpa`, a test that measures what it costs the control plane to keep N HorizontalPodAutoscalers reconciling in steady state.

There is no HPA coverage in this repository today. [KEP-600...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4386)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142293: Kubelet emits spurious Pod status updates due to nondeterministic allocated resource health ordering

### What happened?

With `ResourceHealthStatus` enabled, kubelet can change the order of entries in `status.containerStatuses[*].allocatedResourcesStatus` even when device and claim health have not changed.

There are two nondeterministic paths in kubelet v1.36.3:

1. The device manager constructs e...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142293)

**Metadata:**
- Created: 2026-09-21
- Comments: 5
- State: open

### kubernetes/kubernetes#142284: [Flaking Test] Pods should support retrieving logs from the container over websockets

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/pr-logs/directory/pull-kubernetes-node-e2e-containerd

### Which tests are flaking?

```
E2eNode Suite: [It] [sig-node] Pods should support retrieving logs from the container over websockets [Conformance] [NodeConform...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142284)

**Metadata:**
- Created: 2026-09-21
- Comments: 6
- State: open

### kubernetes/kubernetes#142282: [Failing test] ci-kubernetes-e2e-kops-aws-500-node-dra-with-workload-amazonvpc-using-cl2: control-plane instance not created

### Which jobs are failing?

`ci-kubernetes-e2e-kops-aws-500-node-dra-with-workload-amazonvpc-using-cl2`

### Which tests are failing?

- `kubetest2.Up`
- Job-level `Overall`

ClusterLoader2 and the DRA workload never started because cluster creation did not complete.

### Failure example

- Prow: h...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142282)

**Metadata:**
- Created: 2026-09-21
- Comments: 10
- State: open

### kubernetes/kubernetes#142280: Volume health status with 2 messages with duplicate "reason" field blocked pod deletion

### What happened?

I'm experimenting with the new volume health API. I added `NodeGetVolumeHealth` to my test CSI node driver, with a few checks.
When deleting one of the pods that mount volumes with health support, the pod got stuck in Terminating state.
In the kubelet logs I see repeated messages...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142280)

**Metadata:**
- Created: 2026-09-21
- Comments: 7
- State: open

### kubernetes/kubernetes#142269: [Feature][scheduler] Asynchronously or concurrently update (Composite)PodGroup status conditions to avoid scheduling cycle head-of-line blocking

/sig scheduling
/area scheduler
/kind feature
### Description
In https://github.com/kubernetes/kubernetes/pull/140670, status condition updates for `PodGroup` and `CompositePodGroup` were integrated into the scheduler pipeline.
Currently, in `submitPodGroupAlgorithmResult` (`pkg/scheduler/schedule_o...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142269)

**Metadata:**
- Created: 2026-09-21
- Comments: 4
- State: open

### kubernetes/kubernetes#142268: [Failing Test] [sig-node] PLR Pod InPlace Resize [FeatureGate:InPlacePodLevelResourcesVerticalScaling] related tests are failing

### Which jobs are failing?

[ci-kubernetes-e2e-gci-gce-slow](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gci-gce-slow)
[ci-kubernetes-e2e-gce-cos-slow-master](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-cos-slow-master)

### Whic...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142268)

**Metadata:**
- Created: 2026-09-21
- Comments: 2
- State: open

### kubernetes/kubernetes#142294: scheduler: activate preemptor when async preemption completes

#### What type of PR is this?

/kind bug
/sig scheduling

#### What this PR does / why we need it:

When the preemptor's pods leave the preempting set, their PreEnqueue gate opens, but they still need an event to get back into the active queue. `prepareCandidateAsync` activates the preemptor only wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142294)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142292: kubelet: deduplicate volume health conditions by (status, reason)

#### What type of PR is this?

/kind bug
/sig node
/sig storage

#### What this PR does / why we need it:

In `v1.PodVolumeHealth`, the `healthConditions` list is defined as:
```go
// +listType=map
// +listMapKey=status
// +listMapKey=reason
// +k8s:maxItems=16
```
Declarative validation in `pkg/api...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142292)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142291: Avoid broadcasting RV change if RV didn't change

Reflector calls watch cache twice on every event, first time with event and second time to update RV via `UpdateResourceVersion`. This behavior is expected and documented in reflector so this PR proposes to handle second call `UpdateResourceVersion` in more efficient manner.

Call to `UpdateResour...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142291)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142290: e2e: apply pod-level limits to container when verifying cgroups in podresize

#### What type of PR is this?

/kind bug
/kind failing-test

#### What this PR does / why we need it:

PR #140664 removed the fallback in `VerifyContainerCPULimit` and `VerifyContainerMemoryLimit` where container limits defaulted to pod-level limits when empty. It updated `verifyContainersCgroupLimi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142290)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142289: DRA: include extended resource claims in pod claim iteration and taint eviction



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142289)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142288: Add verbose logging for HTTP proxy decisions

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds V(5)/V(6) logging to `NewProxierWithNoProxyCIDR` to provide visibility into HTTP proxy decisions for egress auditing and debugging.

The logging covers:
- requests proxied when no excluded CIDRs are...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142288)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142287: resource: add a boolean field "all" in DeviceTaintRule.spec.deviceSelector that matches all devices if set to true

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:

A `DeviceTaintRule.spec.deviceSelector` that is present but has no `driver`, `pool`, or `device`
set matches every device from every driver in the cluster. This is easy to trigger by mistake.

The feature ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142287)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142286: kubectl: reduce useless duplicate reading of certificate data

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142286)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142285: e2e: do not modify the caller's URL in OpenWebSocketForURL

#### What type of PR is this?

/kind flake
/kind bug

#### What this PR does / why we need it:

`OpenWebSocketForURL` in the e2e framework rewrote the scheme of the `*url.URL` it was given in place: `https` became `wss`, anything else became `ws`. On a second call with the same URL the scheme was al...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142285)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142277: resource.Quantity: make String and encoding read-only operations

#### What type of PR is this?

/kind feature
/kind failing-test
/kind flake

#### What this PR does / why we need it:

Most of the time, String for a resource.Quantity as returned by ParseQuantity is safe to use concurrently, but not always: when the input string isn't already in the canonic...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142277)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142275: Fix benchmarking exemplar pod by using strict decode and corev1 Pods

/kind cleanup

```release-note
NONE
```

/assign @Jefftree 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142275)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142273: client-go: restrict CA key encipherment usage to RSA keys

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142273)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142271: scheduler: Unify children getters for PodGroupInfo

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it
We have two getters GetChildren & GetChildGroups for framework.PodGroupInfo.
We need to unify these two getters. But GetChildGroups has a difference where it sort...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142271)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142270: events: allow eventTime on core v1 events

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes validation for legacy `core/v1` Events that include a valid `eventTime`.
This change uses the request API version when determining whether strict Event validation applies. Legacy `core/v1` Events with `e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142270)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142267: The integration test now covers redirects in the aggregator's availability checks

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Extends `TestAggregatedAPIServerRejectRedirectResponse` to cover redirect
rejection by the aggregator availability controller.

The existing test covers redirects for proxied user req...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142267)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142266: kubelet: keep QoS memory and CPU sums from wrapping

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Picks up the `kubelet QoS CPU/memory sums and reserve-percentage arithmetic` TODO from the #141166 burndown.

The QoS container manager accumulates per-pod requests into int64 totals and then takes a percen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142266)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142265: downward API: compute resource ceilings with integer math

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Picks up the `ceil(MilliValue/MilliValue)` TODO from the #141166 burndown.

The downward API converts a container resource into the caller's divisor units by dividing through `float64`:

```go
int6...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142265)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3232: [occm] Per-Service override for enable-ingress-hostname

/kind feature

**What happened**:

With `enable-ingress-hostname=true` in the cloud config, OCCM publishes every PROXY protocol load balancer in the Service status as an `<ip>.nip.io` hostname (perhaps specific to our Cloud Provider). Anything that reads that status to publish DNS, such as ExternalD...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3232)

**Metadata:**
- Created: 2026-09-21
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3235: Release 1.37.0

 **What this PR does / why we need it**:
  Release 1.37.0

  - Charts: `appVersion` v1.36.0 → v1.37.0, `version` 2.37.0-dev → 2.37.0
  - Docs/manifests/examples image refs → v1.37.0
  - Tests: Go 1.26.5, k3s v1.37.0+k3s1, cinder e2e v1.37.0


Previous PRs:
https://github.com/kubernetes/clou...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3235)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-openstack#3234: [all] update deps to 1.37

 **What this PR does / why we need it**:
  Bump Kubernetes Go deps to 1.37 and align Dockerfile images with the 1.37 release.
  - `k8s.io/kubernetes` v1.36.0 → v1.37.0
  - related `k8s.io/*` modules / replaces → v0.37.0
  - Dockerfile: `golang` / `go-runner` → go1.26.5
  ```bash
  go get k8s.i...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3234)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-openstack#3233: [occm] Add annotation to override enable-ingress-hostname per service

**What this PR does / why we need it**:

Adds a `loadbalancer.openstack.org/enable-ingress-hostname` Service annotation that overrides the `enable-ingress-hostname` config option for one Service, the same way `enable-health-monitor` overrides `create-monitor`.

With the option on cluster-wide, e...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3233)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6403: Bump github.com/olekukonko/tablewriter from 1.1.4 to 1.1.5

Bumps [github.com/olekukonko/tablewriter](https://github.com/olekukonko/tablewriter) from 1.1.4 to 1.1.5.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/olekukonko/tablewriter/commit/5f0c87a871a3084b2632f3a7775e45a75ea0422d"><code>5f0c87a</code></a> change readme to v1.1.5...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6403)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57660: [ko] Translate content/en/docs/concepts/resource-management/_index.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/resource-management/_index.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/resource-management/

**Why is this needed**

This page is not translated yet.

/area l...

🔗 [Link](https://github.com/kubernetes/website/issues/57660)

**Metadata:**
- Created: 2026-09-21
- Comments: 1
- State: open

### kubernetes/website#57656: [pt-br] Remove case studies

Removing the case studies to match the English version.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted

🔗 [Link](https://github.com/kubernetes/website/issues/57656)

**Metadata:**
- Created: 2026-09-21
- Comments: 1
- State: open

### kubernetes/website#57655: [vi] Remove outdated content/vi/docs/tasks/tools/install-kubectl.md

`content/vi/docs/tasks/tools/install-kubectl.md` no longer has an English source.

Thay bằng 3 trang install-kubectl-linux/macos/windows

/language vi

/assign

🔗 [Link](https://github.com/kubernetes/website/issues/57655)

**Metadata:**
- Created: 2026-09-21
- Comments: 1
- State: open

### kubernetes/website#57648: [ko] Update content/ko/docs/concepts/policy/pid-limiting.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/policy/pid-limiting.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/policy/pid-limiting/
- English: https://kube...

🔗 [Link](https://github.com/kubernetes/website/issues/57648)

**Metadata:**
- Created: 2026-09-21
- Comments: 1
- State: open

### kubernetes/website#57658: [pt-br] Remove case studies

### Description

Removing the case studies to match the English version.

Reference: 
- https://github.com/kubernetes/website/pull/57043

/cc @stormqueen1990 @edsoncelio

### Issue

Closes: #57656

🔗 [Link](https://github.com/kubernetes/website/pull/57658)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57654: [zh-cn]sync kubectl_annotate/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_annotate/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57654)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57653: [zh-cn]sync kubectl_expose/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_expose/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57653)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57652: [zh-cn]sync kubectl_api-resources/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_api-resources/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57652)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57651: [zh-cn]sync kubectl_debug/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_debug/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57651)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57650: [zh-cn]sync kubectl_run/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_run/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57650)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37896: use the preinstalled kubetest2 kops and add ubuntu 2604 jobs for GCE

Commenting inline

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37896)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37895: increase the frequency of the kubernetes build job

Requires https://github.com/kubernetes/release/pull/4537

/hold

The build job now takes 15 minutes; we can save a few more minutes by skipping the signing step

https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/ci-kubernetes-build/2102017115568476160 I manually triggered this; it took 15 mi...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37895)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1359: Support resource labels on regional LoadBalancer forwarding rules

  ### Description

Add support in the GCE cloud provider for applying Google Cloud resource labels to regional ForwardingRules created for internal and external Kubernetes LoadBalancer Services.

The proposed interface is the cloud.google.com/load-balancer-resource-labels Service annotation. Its val...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1359)

**Metadata:**
- Created: 2026-09-21
- Comments: 1
- State: open

### kubernetes/sig-release#3109: Drop darwin amd64 CLI builds

<!-- Please only use this template for submitting feature requests -->

#### What would you like to be added:
Intel Macs are no longer supported on macOS 27 (Golden Gate). Apple has been telling developers they can drop support now for amd64 darwin builds.

https://9to5mac.com/2026/09/01/apple-tells...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3109)

**Metadata:**
- Created: 2026-09-21
- Comments: 0
- State: open

### kubernetes/sig-release#3110: add riscv64 as a tier 3 platform

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/sig-release/pull/3110)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10333: Bump the kubernetes group across 1 directory with 24 updates

Bumps the kubernetes group with 24 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/cli-runtime](https://github.com/kubernetes/cli-runtime) | `0.37.0-rc.0` | `0.38.0-alpha.0` |
| [k8s.io/cloud-provider](https://github.com/kubernetes/cloud...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10333)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10332: Bump the patch-updates group across 2 directories with 5 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10332)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10331: Bump the non-kubernetes group across 2 directories with 39 updates



Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.

[//]: # (dependabot-automerge-start)
[//]: # (dependabot-automerge-end)

---

<details>
<summary>Dependabot commands and options</s...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10331)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10330: Bump actions/setup-go from 6.5.0 to 7.0.0

Bumps [actions/setup-go](https://github.com/actions/setup-go) from 6.5.0 to 7.0.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/setup-go/releases">actions/setup-go's releases</a>.</em></p>
<blockquote>
<h2>v7.0.0</h2>
<h2>What's Changed</h2>
<ul>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10330)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10329: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10329)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10328: Bump losisin/helm-docs-github-action from 2.0.0 to 2.0.1

Bumps [losisin/helm-docs-github-action](https://github.com/losisin/helm-docs-github-action) from 2.0.0 to 2.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/losisin/helm-docs-github-action/releases">losisin/helm-docs-github-action's releases</a>.</em></...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10328)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10327: Bump actions/checkout from 7.0.0 to 7.0.1

Bumps [actions/checkout](https://github.com/actions/checkout) from 7.0.0 to 7.0.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/checkout/releases">actions/checkout's releases</a>.</em></p>
<blockquote>
<h2>v7.0.1</h2>
<h2>What's Changed</h2>
<ul>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10327)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10326: VPA: don't attempt to load other recommenders' checkpoints

VPA recommender now, on startup, only attempts to load checkpoints for VPA objects for this recommender.
This prevents a recommender that's running in a cluster where there are other recommenders, from logging a bunch of errors on start when it's trying and failing to load their checkpoint objects....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10326)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10325: VPA: ignore stale lastState OOMs in the quick-OOM path

#### What type of PR is this?

/kind bug
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

Quick OOM only looked at how long the container ran, not how old the OOM is. With `updateMode: InPlace` the pod is never recreated, so `lastState.terminated` from a short OOM days ago st...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10325)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4538: Bump github.com/sigstore/sigstore from 1.10.10 to 1.11.0

Bumps [github.com/sigstore/sigstore](https://github.com/sigstore/sigstore) from 1.10.10 to 1.11.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sigstore/sigstore/releases">github.com/sigstore/sigstore's releases</a>.</em></p>
<blockquote>
<h2>v1.11.0</h2...

🔗 [Link](https://github.com/kubernetes/release/pull/4538)

**Metadata:**
- Created: 2026-09-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4537: add a flag to skip signing ci builds

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/release/pull/4537)

**Metadata:**
- Created: 2026-09-21
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14202: TTRPCSandboxService (missing method UpdateSandbox) after upgrade to 1.12.0

### Description

Hello, upgraded from 1.11.1 to 1.12.0 of the API, attempting to do builds results in the following error:

```
    │ build failed: exit status 1: # github.com/containerd/containerd/sandbox
    │ vendor/github.com/containerd/containerd/sandbox/bridge.go:36:10: cannot use &grpcBridge{...

🔗 [Link](https://github.com/containerd/containerd/issues/14202)

**Metadata:**
- Created: 2026-09-21
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Builds
- **deps**: bump actions/upload-artifact from 4 to 7 [#461](https://github.com/containerd/overlaybd/pull/461) ([dependabot[bot]](https://github.com/containerd/overlaybd/commit/9d6b433bc7692a39b078621bbf9af39079329da8))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-21
- Prerelease: Yes


---

*This content was automatically collected on 2026-09-22 03:14:56*
