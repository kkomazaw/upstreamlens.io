---
title: "Upstream Github - 2026-07-10"
description: "CNCF upstream activity from github"
pubDate: 2026-07-10
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "pr", "area/kubelet", "sig/node", "size/XXL", "kind/feature", "release-note-none", "cncf-cla: yes", "needs-priority", "area/test", "kind/cleanup", "sig/api-machinery", "size/L", "kind/api-change", "sig/testing", "area/code-generation", "sig/scheduling", "area/apiserver", "sig/storage", "do-not-merge/release-note-label-needed", "sig/apps", "priority/important-soon", "size/XS", "triage/accepted", "do-not-merge/needs-sig", "sig/auth", "size/M", "do-not-merge/needs-kind", "release-note", "needs-ok-to-test", "wg/device-management", "kind/flake", "ok-to-test", "sig/network", "area/kube-proxy", "do-not-merge/work-in-progress", "area/kubectl", "sig/cli", "area/dependency", "kind/dependency", "size/S", "needs-rebase", "approved", "wg/workload-aware-scheduling", "size/XL", "sig/release", "needs-kind", "area/release-eng", "release", "area/config", "test-infra", "kops", "area/documentation", "area/nodeup", "area/api", "area/addons", "area/cluster-autoscaler", "autoscaler", "do-not-merge/invalid-commit-message", "area/vertical-pod-autoscaler", "lgtm", "area/provider/utho", "do-not-merge/hold", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "website", "enhancements", "ingress-gce", "prometheus", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140366: KEP-5823: Add CheckpointPod and RestorePod CRI API

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140366)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140359: KEP-5710: Validate matching preemption policy across all pods when scheduling pod groups [WAS]

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140359)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9959: [CapacityBuffer] Fix replicas and percentage sizing logic

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

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9959)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.5.5 / 2026-07-09

This release is built with Go 1.25.12 and fixes a security issue in a UI dependency.

- [SECURITY] UI: Bump `sanitize-html` to v2.17.5 to fix CVE-2026-53606. #19060


🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.5.5)

**Metadata:**
- Version: v3.5.5
- Published: 2026-07-09
- Prerelease: No

### prometheus/prometheus: 3.13.0-rc.0 / 2026-06-18

- [SECURITY] UI: Bump `sanitize-html` to fix a cross-site scripting vulnerability (CVE-2026-44990). #18697
- [CHANGE] API: Use SHA-256 instead of SHA-1 to generate rule group pagination tokens. #18927
- [CHANGE] HTTP clients: Credentials (Authorization header, basic auth, bearer token, OAuth2, configured headers) are no longer forwarded when following a redirect to a different host; affects scraping, remote read/write, alerting, and service discovery. Via prometheus/common v0.69.0 (CVE-2025-46...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.0-rc.0)

**Metadata:**
- Version: v3.13.0-rc.0
- Published: 2026-07-09
- Prerelease: Yes

## Updates

### kubernetes/kubernetes#140383: apiserver_request_sli_duration_seconds metric includes durations from non-max validating webhook

### What happened?

apiserver_request_sli_duration_seconds metrics includes the non-max validating webhook durations when the same validating webhook is invoked multiple times (sequential).

Sample log:
- APIServer trace:
<img width="1319" height="289" alt="Image" src="https://github.com/user-attach...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140383)

**Metadata:**
- Created: 2026-07-10
- Comments: 2
- State: open

### kubernetes/kubernetes#140376: Using kubernetes/mount-utils ends up in re-formatting the filesystem

### What happened?

Using [FormatAndMount](https://github.com/kubernetes/mount-utils/blob/d06d436a17294305776494aa876d6e8e38c9200c/mount.go#L189) library from kubernetes/mount-utils ends in re-formatting partially broken filesystem instead of failing erroring out. 

### What did you expect to happen...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140376)

**Metadata:**
- Created: 2026-07-09
- Comments: 2
- State: open

### kubernetes/kubernetes#140382: [FG: InPlacePodVerticalScalingExclusiveCPUs] Tests for Add lifecycle operation parameter in cm managers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR enhances https://github.com/kubernetes/kubernetes/pull/140224

It adds tests verifying which functions called on hint providers among `Allocate`, `AllocatePod`, `GetTopologyHints`, `GetPodTopology...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140382)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140381: Configure DV on objectMeta OwnerReference 


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This PR refactors `ObjectMeta` validation to align imperative validation rules with declarative validation tags, ensuring exact structural error reporting and deduplication parity. 

Specifically, this ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140381)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140380: Surface undeclared declarative-validation options as errors instead of silently disabling

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140380)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140379: storage: enable fast cast for VolumeAttachment and CSIDriver

Reorder CSIDriver internal fields to align with staging structure. Introduce manual unsafe pointer conversion over VolumeAttachment top-level types to shortcut nested allocations.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140379)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140378: batch: reconcile field order for jobs and cronjobs to make hub and v1 type memory identical



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140378)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140377: e2e: storage snapshot tests should read custom timeouts from manifest

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140377)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140374: [DNM] demonstrate generating DV code to both pkg/api and staging k8s.io/api

This is a PR to demonstrate how to generate validation code into both pkg/apis and staging k8s.io/api .

For scheduling/v1alpha3, 2 structs' (`WorkloadPodGroupSchedulingPolicy` and `WorkloadPodGroupDisruptionMode`) validation code should always be generated, so it use `k8s:validation-gen=*` to gen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140374)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140373: admissionregistration: enable fast cast for policies and bindings

Reorder internal fields for equivalence to staging v1 types. Allows direct unsafe.Pointer manual conversions for MutatingAdmissionPolicy and ValidatingAdmissionPolicy bindings and lists to prevent pointer allocation fallbacks in nested slices.

<!--  Thanks for sending a pull request!  Here are so...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140373)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140371: enable commentstart check on storage API group

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140371)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140370: Policy: Update PodDisruptionBudget/PolicyEviction to be Memory Identical

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140370)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140367: test: stabilize async preemption queue assertions

 #### What type of PR is this?

  /kind flake

  #### What this PR does / why we need it:

 This is a test-only change.

  The alternative I considered was a scheduler-side change: after async preemption finishes deleting victims and clears the executor bookkeeping for the preemptor, explici...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140367)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140365: test: improve error message when API chunking wait times out

Related to #140213

Capture the error returned by wait.Poll and fail early when it times out.

Previously, the timeout error was ignored, causing the test to continue with an empty continue token and fail with a misleading error. This change reports a clearer failure message when the continue to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140365)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140364: Fix/init container node restart

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When determining whether a pod has already completed initialization, `computeInitContainerActions()` currently checks container statuses using `podStatus.FindContainerStatusByName()`, which searches all recorde...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140364)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140363: volumemanager: stop leaked reconcilers in tests

#### What type of PR is this?

/kind flake
/sig storage

#### What this PR does / why we need it:

Most tests in `reconciler_test.go` start a reconciler (via `runReconciler`, or an inline `go reconciler.Run(ctx, wait.NeverStop)`) and never stop it. Each finished test leaks a reconciler that keeps sp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140363)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140362: WIP: AI generated nftables change to use a single map

#### What type of PR is this?

/kind bug
/kind cleanup

Bug? Cleanup? I'm not sure.


#### What this PR does / why we need it:

Decrease the number of sets/maps used by kube-proxy to reduce the time it takes to program nftables.
There are more places where sets/maps are used, but, I figur...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140362)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140361: vendor: bump github.com/onsi/ginkgo/v2 to v2.32.0

This update adds a a new command-line flag to tests, --sleep-on-failure, which pauses execution at the first failed assertion. This gives time to debug the state of the system before the After* hooks teardown any state.

/kind dependency

#### What this PR does / why we need it:

Bumps the min...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140361)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140360: Update CSI sidecar images in e2e test manifests

## What this does

Updates csi-resizer and csi-snapshot-metadata sidecar container images to
their latest stable releases across the e2e test manifests:

- csi-resizer:           v2.2.0 -> v2.2.1
- csi-snapshot-metadata: v1.0.0 -> v1.1.0

All other tracked sidecar images (csi-provisioner, csi-attach...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140360)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140355: Add grouping Pods into sorted homogeneous sub-groups

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140355)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4461: Bump github.com/sigstore/sigstore-go from 1.1.4 to 1.2.0

Bumps [github.com/sigstore/sigstore-go](https://github.com/sigstore/sigstore-go) from 1.1.4 to 1.2.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sigstore/sigstore-go/releases">github.com/sigstore/sigstore-go's releases</a>.</em></p>
<blockquote>
<h2>v1...

🔗 [Link](https://github.com/kubernetes/release/pull/4461)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37420: cleanup stale configs from our prow config

Commenting inline, but most of these changes are for repos that were archived

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37420)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18564: Ubuntu: include Ubuntu in markSecondaryENIsUnmanaged guard (secondary ENIs left DHCP-managed, racing with Cilium / AWS VPC CNI)

/kind bug 

### Summary

In `nodeup/pkg/model/networking/eni_networking.go`, the `markSecondaryENIsUnmanaged` function writes a `systemd-networkd` `.network` file with `Unmanaged=yes` for secondary ENIs — but its guard clause only covers AL2023 and Debian 12+, **not Ubuntu**. As a result, on Ubuntu ...

🔗 [Link](https://github.com/kubernetes/kops/issues/18564)

**Metadata:**
- Created: 2026-07-09
- Comments: 1
- State: open

### kubernetes/kops#18566: Add support for Cilium Bandwidth Manager and BBR

This adds support for enabling Cilium's [Bandwidth Manager](https://docs.cilium.io/en/stable/network/kubernetes/bandwidth-manager/) and BBR congestion control directly from the kOps Cilium networking spec.

Two new fields are added to `spec.networking.cilium`:

- **`enableBandwidthManager`** – enabl...

🔗 [Link](https://github.com/kubernetes/kops/pull/18566)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9960: Bump golang.org/x/net to v0.55.0 to address CVE-2026-25681

### **What this PR does :**
Bumps golang.org/x/net from v0.49.0 to v0.55.0 on the cluster-autoscaler-release-1.35 branch to pick up the fix for CVE-2026-25681 an HTML tree-confusion issue in x/net/html that can enable XSS in applications that sanitize HTML before rendering.

Related sibling golan...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9960)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9958: Bump the actions group across 3 directories with 1 update

Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/admission-controller directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/recommender directory: golang.
Bumps the actions group with 1 update in the /vertical-pod-autoscaler/pkg/updater...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9958)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9956: Cluster Autoscaler: Fix flaky unit test & compilation failures

#### What type of PR is this?

/kind cleanup
/kind flake

#### What this PR does / why we need it:

Fix some unit tests which don't compile cleanly:

Before:

```
$ go test ./simulator/clustersnapshot ./provisioningrequest/provreqclient ./cloudprovider/utho
# k8s.io/autoscaler/cluster-a...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9956)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9695: Image promotion for cluster-api-aws v2.12.1

Image promotion for cluster-api-aws v2.12.1
This is an automated PR generated from `kpromo`
```
kpromo pr --fork nrb --project cluster-api-aws --reviewers "@richardcase @dlipovetsky @nrb @AndiDog @damdo" --tag v2.12.1 --image cluster-api-aws-controller
```

/hold
cc: @richardcase @dlipovetsky @nrb @...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9695)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9694: Image promotion for releng 1.26.5-trixie-0 / 1.25.12-trixie-0

Image promotion for releng 1.26.5-trixie-0 / 1.25.12-trixie-0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork palnabarun --interactive --project releng --tag 1.26.5-trixie-0 --tag 1.25.12-trixie-0
```

/hold
cc: @kubernetes/release-engineering


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9694)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9693: Image promotion for build-image v2.4.0-go1.26.5-bookworm.0 / v2.4.0-go1.25.12-bookworm.0

Image promotion for build-image v2.4.0-go1.26.5-bookworm.0 / v2.4.0-go1.25.12-bookworm.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork palnabarun --interactive --project build-image --tag v2.4.0-go1.26.5-bookworm.0 --tag v2.4.0-go1.25.12-bookworm.0
```

/hold
cc: @kubernetes/r...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9693)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9691: Image promotion for build-image v1.33.0-go1.25.12-bullseye.0 / v1.34.0-go1.25.12-bullseye.0 / v1.35.0-go1.25.12-bullseye.0 / v1.36.0-go1.26.5-bullseye.0 / v1.37.0-go1.26.5-bullseye.0

Image promotion for build-image v1.33.0-go1.25.12-bullseye.0 / v1.34.0-go1.25.12-bullseye.0 / v1.35.0-go1.25.12-bullseye.0 / v1.36.0-go1.26.5-bullseye.0 / v1.37.0-go1.26.5-bullseye.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork palnabarun --interactive --project build-image -...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9691)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56452: Documentation Clarification for maxSkew + ScheduleAnyway on k8s.io/docs/concepts/scheduling-eviction/topology-spread-constraints/

It would be nice if the exact meaning of

> maxSkew describes the degree to which Pods may be unevenly distributed. You must specify this field and the number must be greater than zero. Its semantics differ according to the value of whenUnsatisfiable:
> - ...
> -  if you select whenUnsatisfiable: Sc...

🔗 [Link](https://github.com/kubernetes/website/issues/56452)

**Metadata:**
- Created: 2026-07-09
- Comments: 1
- State: open

### kubernetes/enhancements#6223: Bump golang.org/x/crypto from 0.0.0-20201002170205-7f63de1d35b0 to 0.52.0

Bumps [golang.org/x/crypto](https://github.com/golang/crypto) from 0.0.0-20201002170205-7f63de1d35b0 to 0.52.0.
<details>
<summary>Commits</summary>
<ul>
<li>See full diff in <a href="https://github.com/golang/crypto/commits/v0.52.0">compare view</a></li>
</ul>
</details>
<br />


[![Dependabot comp...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6223)

**Metadata:**
- Created: 2026-07-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3157: Add conditions to the Standalone NEG

This changes the L4 Standalone NEG Service controller to add conditions to the status of the service to signal the state of the service to the user.

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3157)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3156: Update go and go.mod dependencies

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3156)

**Metadata:**
- Created: 2026-07-09
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd 2.3.3

Welcome to the v2.3.3 release of containerd!

The third patch release for containerd 2.3 contains various fixes and updates.

### Highlights

* Set SystemTemp environment variable on Windows so temp directory overrides work for SYSTEM services ([#13694](https://github.com/containerd/containerd/pull/13694))

#### Container Runtime Interface (CRI)

* Fix nil pointer dereference in NRI GetIPs during pod sandbox teardown or container exit ([#13697](https://github.com/containerd/containerd/pull/13697...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.3)

**Metadata:**
- Version: v2.3.3
- Published: 2026-07-10
- Prerelease: No

### containerd/containerd: containerd 2.2.6

Welcome to the v2.2.6 release of containerd!

The sixth patch release for containerd 2.2 contains various fixes and updates.

### Highlights

#### Container Runtime Interface (CRI)

* Fix nil pointer dereference in NRI GetIPs during pod sandbox teardown or container exit ([#13696](https://github.com/containerd/containerd/pull/13696))
* Reject CreateContainer calls when the target sandbox is not running ([#13669](https://github.com/containerd/containerd/pull/13669))
* Ensure sandbox shutdown on R...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.6)

**Metadata:**
- Version: v2.2.6
- Published: 2026-07-09
- Prerelease: No

### containerd/containerd: containerd 2.0.11

Welcome to the v2.0.11 release of containerd!

The eleventh patch release for containerd 2.0 contains various fixes and updates.

### Highlights

#### Image Distribution

* Limit fallback to /blobs endpoint during ref resolution to prevent content store pollution ([#13622](https://github.com/containerd/containerd/pull/13622))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Samuel Karp
* Chris Henzie
* Joseph Zhan...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.0.11)

**Metadata:**
- Version: v2.0.11
- Published: 2026-07-09
- Prerelease: No

### containerd/containerd: containerd 1.7.34

Welcome to the v1.7.34 release of containerd!

The thirty-fourth patch release for containerd 1.7 contains various fixes and updates.

### Highlights

#### Container Runtime Interface (CRI)

* Fix lost container exit events when events arrive before container info is cached ([#11634](https://github.com/containerd/containerd/pull/11634))

Please try out the release binaries and report any issues at
https://github.com/containerd/containerd/issues.

### Contributors

* Chris Henzie
* Samuel Karp
* ...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v1.7.34)

**Metadata:**
- Version: v1.7.34
- Published: 2026-07-09
- Prerelease: No


---

*This content was automatically collected on 2026-07-10 02:47:17*
