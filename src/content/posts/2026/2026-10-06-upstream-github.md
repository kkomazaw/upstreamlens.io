---
title: "Upstream Github - 2026-10-06"
description: "CNCF upstream activity from github"
pubDate: 2026-10-06
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/scheduling", "kind/feature", "sig/apps", "needs-triage", "wg/workload-aware-scheduling", "pr", "kind/bug", "area/test", "area/kubelet", "sig/node", "release-note", "size/L", "cncf-cla: yes", "sig/testing", "needs-ok-to-test", "needs-priority", "sig/storage", "size/XS", "kind/api-change", "do-not-merge/release-note-label-needed", "sig/api-machinery", "size/M", "size/XL", "release-note-none", "approved", "area/apiserver", "do-not-merge/work-in-progress", "ok-to-test", "area/code-generation", "sig/network", "kind/cleanup", "sig/scalability", "area/kube-proxy", "area/provider/gcp", "size/XXL", "area/release-eng", "sig/instrumentation", "sig/cloud-provider", "area/e2e-test-framework", "sig/windows", "area/kubectl", "sig/cluster-lifecycle", "sig/cli", "area/kubeadm", "kind/flake", "do-not-merge/hold", "cncf-cla: no", "area/cloudprovider", "sig/auth", "sig/architecture", "area/dependency", "do-not-merge/needs-kind", "wg/device-management", "lgtm", "needs-rebase", "language/ko", "area/localization", "website", "language/en", "area/jobs", "area/config", "test-infra", "size/S", "area/images", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/coreweave", "triage/accepted", "kind/documentation", "area/provider/cluster-api", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "sig/release", "needs-kind", "release", "prometheus", "client_golang", "jmx_exporter", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142695: KEP-5958: Add client-go DropManagedFields and use it in kube-controller-manager

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142695)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57901: [ko] Update Secrets good practices documentation

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of
`content/ko/docs/concepts/security/secrets-good-practices.md`
to match the latest English documentation.

The update includes:

- Add guidance about using separate namespaces to isolate access to mou...

🔗 [Link](https://github.com/kubernetes/website/issues/57901)

**Metadata:**
- Created: 2026-10-05
- Comments: 1
- State: open

### kubernetes/autoscaler#10393: feat(coreweave): add dra gpu support

#### What type of PR is this?

/kind feature

<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation


Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10393)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10388: Add lwkd step to VPA release

#### What type of PR is this?
/kind documentation
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
/kin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10388)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142690: WAS: exclusive topology placement for PodGroups (one PodGroup per topology domain)

## What would you like to be added?

An exclusive mode for PodGroup topology placement in kube-scheduler: a PodGroup lands in a topology domain (one value of a node label) that no other in-scope PodGroup occupies, and keeps that domain to itself while its pods run there.

JobSet, LeaderWorkerSet (LW...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142690)

**Metadata:**
- Created: 2026-10-05
- Comments: 2
- State: open

### kubernetes/kubernetes#142707: kubelet: rewrite pod memory.low on request-only in-place resize

### What type of PR is this?

/kind bug
/sig node
/area kubelet

### What this PR does / why we need it:

When `memoryReservationPolicy: TieredReservation`, an in-place resize that changes only the memory request updates the container's memory.low but leaves the pod cgroup's memory.low at th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142707)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142706: StorageHealthCondition:Reason

# Tag migration

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142706)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142705: client-go: close streams when the initial WebSocket read deadline fails

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When setting the initial WebSocket read deadline fails, the demultiplexer exits without closing its stream readers. Exec and attach callers then wait on those readers until their context expires, leaving the streamin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142705)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142704: Make Quantity.RoundUp behave the same for int64 and inf.Dec

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This fixes many of the RoundUp inconsistencies highlighted by the tests added in https://github.com/kubernetes/kubernetes/pull/142635

The approach here is to make the scale handling easier to follow in the c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142704)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142703: Fix: Api-server returns HTTP 422 for watch requests with invalid resourceVersion

Api-server returns HTTP 422 for watch requests with invalid resourceVersion

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142703)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142702: Graduate ShardedListAndWatch to Beta

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- Graduates the `ShardedListAndWatch` feature gate to Beta
- Adds `sharding.NewShardRangeSelector` and `cache.NewShardedListWatch` helpers for sharded list/watch with client-side fallback
- Consolidates watch cac...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142702)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142700: [WIP] delete kubemark

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142700)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142699: Add mixed-base Windows GMSA test image

#### What type of PR is this?

/kind feature
/sig windows
/sig testing

#### What this PR does / why we need it:

Adds a dedicated Windows image containing the command-line tools required by the GMSA end-to-end tests.

The image uses Nano Server for Windows Server 2019 and 2022. The Windows Server 2...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142699)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142698: [WIP] kubectl, kubeadm: fork text/template without method resolution to restore dead code elimination

#### What type of PR is this?

/kind cleanup
/sig cli
/sig cluster-lifecycle

#### What this PR does / why we need it:

`text/template.evalField` calls `reflect.Value.MethodByName` with a variable name, so the linker keeps every exported method of every type in a binary that executes a templ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142698)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142697: applyconfiguration-gen: honor +k8s:openapi-model-package

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142697)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142694: Fix/129953 mig template retries

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

Transient GCE API errors (e.g. 502) during `kube-down` leak managed instance groups and instance templates, which makes `kubetest.diffResources` fail.

This adds retry helpers for both deletes. Since `descr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142694)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142693: Add CSIControllerGetNodeInfo feature gate and driverRegistrations field

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142693)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142692: kubelet: poll volume setup every 10ms during the first second

WaitForAttachAndMount checks every 300ms whether the pod's volumes are mounted, and the pod sandbox is not created until it returns. Local volumes (the kube-api-access projected token, secrets, configMaps, emptyDir) are usually mounted well inside the first 300ms, so pod startup waits on the poll in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142692)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142689: Update prometheus/client_golang to 1.25.0-rc.0

Testing the v1.25.0-rc.0 release candidate of client_golang as per their [release process](https://github.com/prometheus/client_golang/blob/main/RELEASE.md).

Notable changes in this RC: minimum required Go version is now 1.26; the client API's `Query`, `QueryRange`, `Series`, `LabelNames`, and `Lab...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142689)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142688: Cover watch selectors in traffic

/kind feature
```release-note
NONE
```

/cc @mborsz @wojtek-t 

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142688)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142687: switch NPD and networking tests from sshexec to hostexec

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142687)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142685: use the control plane's public IP as a bastion for SSH if KUBE_SSH_BASTION env variable is unset.


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142685)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142684: Fix clearing NNN for low prio pods in podgrouppreemption

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In pod group preemption the getLowerPriorityNominatedPods always return 0 pods as the candidate name for cluster wide preemption is "cluster"

#### Which issue(s) this PR is related to:

N/A

#### Special...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142684)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142683: kubelet: prioritize admission after accounting for runtime pods

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

When kubelet replays assigned Pods after a restart, creation-time ordering can admit a lower-priority cold Pod before a higher-priority one competing for the same resources. This draft proposes the disa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142683)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#57902: [ko] Update DRA link in device plugins documentation

**This is a Feature Request**

**What would you like to be added**

Update the DRA documentation link in
`content/ko/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins.md`
to match the latest English documentation.

The existing link points to the old Dynamic Resource Allocation docu...

🔗 [Link](https://github.com/kubernetes/website/issues/57902)

**Metadata:**
- Created: 2026-10-05
- Comments: 1
- State: open

### kubernetes/website#57900: [ko] Update workloads overview

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of
`content/ko/docs/concepts/workloads/_index.md`
to match the latest English documentation.

The update includes:

- Clarify that a Pod represents one or more running containers.
- Update the Workload ...

🔗 [Link](https://github.com/kubernetes/website/issues/57900)

**Metadata:**
- Created: 2026-10-05
- Comments: 1
- State: open

### kubernetes/website#57899: [ko] Update Windows user guide

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of
`content/ko/docs/concepts/windows/user-guide.md`
to match the latest English documentation.

The update includes:

- Remove the outdated `IdentifyPodOS` feature gate note.
- Update the CPU request va...

🔗 [Link](https://github.com/kubernetes/website/issues/57899)

**Metadata:**
- Created: 2026-10-05
- Comments: 1
- State: open

### kubernetes/website#57912: Use KUBE_OPENAPI_SPEC_KEEP_ENUMS in release generation guide

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57912)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37988: Add GMSA image publishing job

Adds `gmsa` to the generated Kubernetes E2E test-image publishing jobs.

The new postsubmit job:

- runs when files under `test/images/gmsa/` change;
- builds the image with `WHAT=gmsa`;
- uses the existing trusted image-building cluster and `gcb-builder` service account;
- pushes the result to the ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37988)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37979: bump kubekins-e2e to debian trixie

/cc @kubernetes/release-engineering 



🔗 [Link](https://github.com/kubernetes/test-infra/pull/37979)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10394: VPA admission controller: add managed label to modified pods

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds a new `managedLabel` patch calculator to the VPA admission controller (modeled on `observed_containers.go`). Pods whose resources are set by VPA now get the label `vpa-autoscaler.k8s.io/managed: "true"`, so ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10394)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10392: build(deps): bump the kubernetes group across 1 directory with 7 updates

Bumps the kubernetes group with 7 updates in the /vertical-pod-autoscaler/test directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) | `0.38.0-alpha.0` | `0.38.0-alpha.1` |
| [k8s.io/kube-openapi](https://github.com/kubernetes/kub...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10392)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10391: build(deps): bump the non-kubernetes group across 2 directories with 17 updates

Bumps the non-kubernetes group with 4 updates in the /vertical-pod-autoscaler directory: [github.com/prometheus/common](https://github.com/prometheus/common), [github.com/go-openapi/jsonreference](https://github.com/go-openapi/jsonreference), [go.opentelemetry.io/otel](https://github.com/open-teleme...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10391)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10387: [cluster-autoscaler] Backport #9693: Fix scale-down fallback for MachinePool-backed node groups


#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This is a backport of #9693 to the `cluster-autoscaler-release-1.36` branch.

This PR fixes the scale-down behavior for Cluster API MachinePool-backed node groups.

The current deletion flow attempts to f...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10387)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10020: Image promotion for sp-operator v1.1.1 / 1.1.1

Image promotion for sp-operator v1.1.1 / 1.1.1
This is an automated PR generated from `kpromo`
```
kpromo pr --fork saschagrunert --project sp-operator --staging-repo us-central1-docker.pkg.dev/k8s-staging-images/sp-operator --tag v1.1.1 --tag 1.1.1
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10020)

**Metadata:**
- Created: 2026-10-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4547: Bump sigs.k8s.io/promo-tools/v4 from 4.6.0 to 4.7.0

Bumps [sigs.k8s.io/promo-tools/v4](https://github.com/kubernetes-sigs/promo-tools) from 4.6.0 to 4.7.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/promo-tools/releases">sigs.k8s.io/promo-tools/v4's releases</a>.</em></p>
<blockquote>
<h...

🔗 [Link](https://github.com/kubernetes/release/pull/4547)

**Metadata:**
- Created: 2026-10-06
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_golang: v1.25.0-rc.0

:warning: This release raises the minimum required Go version to 1.26 and includes breaking API changes in `api/prometheus/v1` (see the [CHANGE] entries below). :warning:

## 1.25.0-rc.0 / 2026-10-05

* [CHANGE] Minimum required Go version is now 1.26, only the two latest Go versions (1.26 and 1.27) are supported from now on. #2138
* [CHANGE] api/prometheus/v1: `Query`, `QueryRange`, `Series`, `LabelNames`, and `LabelValues` now return `Infos` annotations in addition to `Warnings`, matching the ...

🔗 [Link](https://github.com/prometheus/client_golang/releases/tag/v1.25.0-rc.0)

**Metadata:**
- Version: v1.25.0-rc.0
- Published: 2026-10-05
- Prerelease: Yes

### prometheus/jmx_exporter: 1.7.0 / 2026-10-05

# JMX Exporter 1.7.0

## Features

- **SSL PEM support:** The exporter HTTP server can now use PEM-encoded certificate/private key files instead of a Java keystore. Both `httpServer.ssl.pem.certificate.filename` and `httpServer.ssl.pem.privateKey.filename` are supported, including encrypted private keys (with an optional `password` that supports `${ENV_VAR}` resolution) and unencrypted/encrypted PKCS8, traditional RSA, and traditional EC key formats. PEM mode is mutually exclusive with `http...

🔗 [Link](https://github.com/prometheus/jmx_exporter/releases/tag/1.7.0)

**Metadata:**
- Version: 1.7.0
- Published: 2026-10-06
- Prerelease: No

### containerd/containerd#14292: Stopping a Pod with spec.shareProcessNamespace: true and 16+ containers takes ~1m

### Description

When deleting a Kubernetes Pod that uses a shared PID namespace (`shareProcessNamespace: true` or `hostPID: true`) and contains 16 or more containers, `containerd-shim-runc-v2` stalls from a goroutine deadlock for 45–80+ seconds during container teardown, causing `StopContainer`, `K...

🔗 [Link](https://github.com/containerd/containerd/issues/14292)

**Metadata:**
- Created: 2026-10-06
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-06 04:48:22*
