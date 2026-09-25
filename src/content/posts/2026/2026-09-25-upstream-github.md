---
title: "Upstream Github - 2026-09-25"
description: "CNCF upstream activity from github"
pubDate: 2026-09-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/M", "release-note-none", "ok-to-test", "area/dependency", "enhancements", "issue", "sig/cloud-provider", "needs-triage", "sig/api-machinery", "kind/feature", "kind/cleanup", "area/apiserver", "needs-ok-to-test", "needs-priority", "area/test", "sig/node", "size/L", "sig/testing", "kind/failing-test", "priority/important-soon", "release-note", "triage/accepted", "do-not-merge/needs-sig", "sig/scheduling", "area/cloudprovider", "area/provider/gcp", "size/S", "sig/auth", "sig/instrumentation", "wg/device-management", "size/XXL", "do-not-merge/hold", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "kind/bug", "lgtm", "approved", "sig/apps", "do-not-merge/cherry-pick-not-approved", "sig/network", "kind/documentation", "kind/api-change", "area/code-generation", "wg/workload-aware-scheduling", "sig/autoscaling", "size/XS", "sig/storage", "kind/flake", "sig/etcd", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "area/provider/equinixmetal", "language/fa", "area/localization", "website", "community", "sig/contributor-experience", "area/label_sync", "test-infra", "area/testgrid", "size/XL", "area/provider/azure", "area/jobs", "area/config", "kube-state-metrics", "sig/release", "area/release-eng", "sig-release", "area/documentation", "area/addons", "kops", "prometheus", "release", "exporter-toolkit", "envoyproxy", "gateway", "containerd", "nydus-snapshotter"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10353: E2E: wait for node deletions

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10353)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10346: chore: remove equinix metal references

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10346)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd 2.4.1

Welcome to the v2.4.1 release of containerd!

The first patch release for containerd 2.4 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where failed container start cleanup leaked tasks and prevented container removal ([#14223](https://github.com/containerd/containerd/p...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.4.1)

**Metadata:**
- Version: v2.4.1
- Published: 2026-09-24
- Prerelease: No

### containerd/containerd: containerd 2.3.6

Welcome to the v2.3.6 release of containerd!

The sixth patch release for containerd 2.3 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where container creation failed when SELinux relabeling was unsupported by the filesystem ([#14211](https://github.com/containerd/cont...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.3.6)

**Metadata:**
- Version: v2.3.6
- Published: 2026-09-24
- Prerelease: No

### containerd/containerd: containerd 2.2.9

Welcome to the v2.2.9 release of containerd!

The ninth patch release for containerd 2.2 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Container Runtime Interface (CRI)

* Fix bug where container creation failed when SELinux relabeling was unsupported by the filesystem ([#14210](https://github.com/containerd/cont...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.2.9)

**Metadata:**
- Version: v2.2.9
- Published: 2026-09-24
- Prerelease: No

### containerd/containerd: containerd 2.0.13

Welcome to the v2.0.13 release of containerd!

The thirteenth patch release for containerd 2.0 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14141](https://github.com/containerd/containerd/pull/14141))
...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.0.13)

**Metadata:**
- Version: v2.0.13
- Published: 2026-09-24
- Prerelease: No

### containerd/containerd: containerd 1.7.36

Welcome to the v1.7.36 release of containerd!

The thirty-sixth patch release for containerd 1.7 contains various fixes
and updates including a security patch.

### Security Updates

* **containerd**
  * [**CVE-2026-53493**](https://github.com/containerd/containerd/security/advisories/GHSA-pg57-6jwg-q645)

### Highlights

#### Image Storage

* Ensure all layers are fetched when multiple manifests in an index share a config descriptor ([#14142](https://github.com/containerd/containerd/pull/14142)...

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v1.7.36)

**Metadata:**
- Version: v1.7.36
- Published: 2026-09-24
- Prerelease: No

## Updates

### kubernetes/enhancements#6429: Bump github.com/go-playground/validator/v10 from 10.30.3 to 10.30.5

Bumps [github.com/go-playground/validator/v10](https://github.com/go-playground/validator) from 10.30.3 to 10.30.5.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-playground/validator/releases">github.com/go-playground/validator/v10's releases</a>.</em>...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6429)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142384: `gsutil` will no longer be available from March 2027

Google sent out a notification e-mail on **2026-07-20** to Google Cloud users informing them that the **`gsutil`** binary will no longer be available, starting **March 2027**, in the _Google Cloud CLI_ installation packages, and will have to be installed separately, directing administrators to https...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142384)

**Metadata:**
- Created: 2026-09-24
- Comments: 2
- State: open

### kubernetes/kubernetes#142383: Client-go: Add support for Connection Pool

### What would you like to be added?

I would like to propose adding a support to client-go library for creating multiple connections **to the same endpoint** and using some naive load balancing (such as round robin or power of 2) to send traffic.

The option cloud be set using one of the following ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142383)

**Metadata:**
- Created: 2026-09-24
- Comments: 2
- State: open

### kubernetes/kubernetes#142403: apiserver/cacher: check that a watcher is stopped before converting an event


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142403)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142402: e2e: read a container's three cgroup files with one exec

#### What type of PR is this?
/kind failing-test
/sig node
/cc @natasha41575

#### What this PR does / why we need it:
`VerifyContainerCgroupValues` execs into the container once per cgroup file: memory limit, CPU limit, CPU weight. This PR reads the first line of each of the three files with a sing...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142402)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142401: local-up-cluster: add support to enable quantum crypto

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

This PR adds support to enable Quantum Crypto within the hack/local-up-cluster.sh script.

- Add ENABLE_QUANTUM_CRYPTO flag to hack/local-up-cluster.sh that stands up a fully post-quantum local...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142401)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142400: Update KAS apiserver network proxy to v0.37

Update konnectivity network proxy to v0.37.0
Include CVE fixes.
Decoupled send/recv in data-plane to control-plane in agent. Improve connection selection from server.
Unified HTTP-CONNECT and GRPC packet handling in server. Improved HTTP-CONNECT handling for slow connection. Reject malformed cert...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142400)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142399: migrate from cfssl to step-ca

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142399)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142398: apimachinery: avoid boxing scalars in forked reflect.DeepEqual

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Ports an optimization from Go stdlib `src/reflect/deepequal.go` ([CL 318169](https://go-review.googlesource.com/c/go/+/318169)) to the forked `reflect.DeepEqual` to compare scalar kinds directly instead of boxing...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142398)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142397: WIP: ML-DSA support for tokens

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142397)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142395: resource: keep decoding out-of-int32 exponents written before 1.38

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#141203 started rejecting a decimal exponent that does not fit the int32 scale. A <=1.37 apiserver accepted those spellings, narrowed the exponent to an int32 and stored the object with the text it was given, so mast...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142395)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142394: [WIP] Convert only patched top-level fields in strategic merge patch

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Reduce allocations during strategic merge patch by only converting top-level fields present in the patch payload to and from unstructured maps.

```
goos: linux
goarch: amd64
pkg: k8s.io/kubernetes/test/integrati...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142394)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142393: Add ReprieveFilter to PreemptionManager

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142393)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142392: Automated cherry pick of #142247: job controller: clear expectations when deleting Job

Cherry pick of #142247 on release-1.35.

#142247: job controller: clear expectations when deleting Job

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142392)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142391: Automated cherry pick of #142247: job controller: clear expectations when deleting Job

Cherry pick of #142247 on release-1.36.

#142247: job controller: clear expectations when deleting Job

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142391)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142390: Automated cherry pick of #142247: job controller: clear expectations when deleting Job

Cherry pick of #142247 on release-1.37.

#142247: job controller: clear expectations when deleting Job

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142390)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142389: Clarify allocateLoadBalancerNodePorts docs

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:
A customer was confused by the fact that setting `allocateLoadBalancerNodePorts` does not clear existing allocated NodePorts. While [this is mentioned in the online docs](https://kubernetes.io/docs/concep...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142389)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142388: apimachinery: make GvkParser tolerant of duplicate GVK entries

Fixes #128201

## Problem

UnstructuredExtractor fails with `duplicate entry for /v1, Kind=APIResourceList` when an aggregated API serves overlapping OpenAPI information.

## Root Cause

`NewGVKParser` in `staging/src/k8s.io/apimachinery/pkg/util/managedfields/gvkparser.go` returned an error...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142388)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142387: Refactor PodGroupProtectionController to use namespacedKey and objectOf functions

#### What type of PR is this?
/kind cleanup
/sig scheduling
/wg workload-aware-scheduling
#### What this PR does / why we need it:
Refactors `pkg/controller/scheduling/podgroupprotection` to lay the groundwork for upcoming `CompositePodGroup` garbage collection protection (https://github.com/ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142387)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142386: Promote HPAGeneration feature gate to GA and locked to enabled

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Continue the work started in https://github.com/kubernetes/kubernetes/pull/138228

#### Which issue(s) this PR is related to:
<!--
Please link relevant issues to help with tracking.

To automatically ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142386)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142385: attachdetach: wait for the force detach metric in reconciler tests

#### What type of PR is this?
/kind flake
/sig storage

#### What this PR does / why we need it:
`testForceDetachMetric` reads the force detach counter once, right after the
test sees the fake detacher called. But the reconciler increments the counter
only after `DetachVolume` returns, while the det...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142385)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142382: kube-apiserver: apply metric feature gates before creating apiserver

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Applies metrics feature gates before kube-apiserver creates REST clients and
informers.

This ensures metrics registered during client and informer initialization,
such as `workqueue_work_duration_seconds`,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142382)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142381: Add watch validation

/kind feature

Adding watch validation using two mechanism:
1. Validate reliable: 
    a. Find minimal and maximal RV that watch covered. Starting from requested RV or first event observed, ending at last event observed. 
    b. Validate that watch returned has exactly the same tuple (event typ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142381)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10347: Add startup probes to VPA deployments

## Summary

Add HTTP startup probes to the VPA Helm chart deployments for the admission controller, recommender, and updater.

The probes use the existing `/health-check` endpoint on each component's Prometheus port, checking every 10 seconds for up to five minutes before startup is considered faile...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10347)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10344: Improve VPA release process

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Makes some changes to the documentation for releasing.

1. At the end of every release, the branches are all bumped. ie: after 1.8.0, master is bumped to 1.9.0 and vpa-release-1.8 is bumped to 1.8.1...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10344)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57714: [fa] Translate content/en/docs/setup/production-environment/_index.md into Persian

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/_index.md` into Persian

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/

**Why is this needed**

This page is not translated yet.

/area ...

🔗 [Link](https://github.com/kubernetes/website/issues/57714)

**Metadata:**
- Created: 2026-09-24
- Comments: 1
- State: open

### kubernetes/community#9177: wg-batch: fix meeting time to Thursdays 14:00 UTC weekly

**Which issue(s) this PR fixes**:
None, docs correction.

**What this PR does / why we need it**:

Corrects the WG Batch regular-meeting time. The published value was `Thursdays … 4PM CET, weekly`; the actual recurring meeting on the WG Batch calendar is **Thursdays, 14:00 UTC, weekly** (15:00 ...

🔗 [Link](https://github.com/kubernetes/community/pull/9177)

**Metadata:**
- Created: 2026-09-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37914: Add kind/dependency to autoscaler

autoscaler currently has no good labels for dependency updates, so I'm adding one.

Some context: https://github.com/kubernetes/autoscaler/pull/10345

/cc @omerap12 

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37914)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37912: chore: add e2e tests for cloud-provider-azure release-1.37

This PR adds e2e tests for cloud-provider-azure release-1.37.

Related: https://github.com/kubernetes-sigs/cloud-provider-azure/issues/11022.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37912)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3128: Custom resource metrics vanish from scrapes after any CRD update

Since v2.18.0, any update to any CustomResourceDefinition in the cluster makes kube-state-metrics rebuild every custom resource store from empty.

Scrapes that arrive during the rebuild succeed with HTTP 200 but carry only part of the metrics, or none, so the scraper marks the missing series stale a...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3128)

**Metadata:**
- Created: 2026-09-24
- Comments: 1
- State: open

### kubernetes/sig-release#3113: Cut v1.38.0-alpha.1 release

## Scheduled to happen: Thu, 2026-09-24

(Postponed from the original target of Wed, 2026-09-23)

_Note for v1.x.0 releases: Having this issue in open state will stop the
periodic run of [`krel fast-forward`](https://testgrid.k8s.io/sig-release-releng-blocking#git-repo-kubernetes-fast-forward)
to av...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3113)

**Metadata:**
- Created: 2026-09-24
- Comments: 1
- State: open

### kubernetes/kops#18805: aws: update pod-identity-webhook to v0.6.17

Upstream no longer publishes releases to Docker Hub (the last one there is v0.6.7), so pull the image from ECR Public.

The update brings newer Go and dependency versions, and support for ConfigMap entries with a "*" namespace, which kOps generates for serviceAccountExternalPermissions that use na...

🔗 [Link](https://github.com/kubernetes/kops/pull/18805)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### prometheus/exporter-toolkit: v0.20.0

## What's Changed
* web: mark prefer_server_cipher_suites as deprecated and ignored by @mrueg in https://github.com/prometheus/exporter-toolkit/pull/444
* web: fix nil pointer dereference when systemd socket activation is disabled by @mrueg in https://github.com/prometheus/exporter-toolkit/pull/435
* bootstrap: apply --web.max-requests, allow opting routes in by @nicolastakashi in https://github.com/prometheus/exporter-toolkit/pull/447
* web: preserve HTTP/2 ALPN across TLS reloads by @tiago...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.20.0)

**Metadata:**
- Version: v0.20.0
- Published: 2026-09-24
- Prerelease: No

### envoyproxy/gateway#10109: Shutdown manager ignores active UDP proxy sessions when draining

The shutdown manager decides Envoy is drained by summing `listener.*.downstream_cx_active`. UDP proxy sessions aren't counted there; they show up as `udp.<stat_prefix>.downstream_sess_active` (`udp.service.downstream_sess_active` for the listeners we generate). On a Gateway that only carries UDPRout...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10109)

**Metadata:**
- Created: 2026-09-25
- Comments: 0
- State: open

### containerd/containerd#14230: Fragmented gRPC services documentation

### What is the problem you're trying to solve

In some of the gRPC services, like Images we can find some documentation within the[ proto file.](https://github.com/containerd/containerd/blob/main/api/services/images/v1/images.proto)

However this is not true for all services. For example, the trans...

🔗 [Link](https://github.com/containerd/containerd/issues/14230)

**Metadata:**
- Created: 2026-09-25
- Comments: 0
- State: open

### containerd/nydus-snapshotter: Nydus Snapshotter v0.16.0 Release

## What's Changed
* Fix Clippy map_or_identity warning in optimizer-server by @Zephyrcf in https://github.com/containerd/nydus-snapshotter/pull/798
* fix(manager): surface liveness subscribe failures instead of reporting success by @iaroslav-reflection in https://github.com/containerd/nydus-snapshotter/pull/778
* fix(auth): only warn when a stored credential fails to renew by @iaroslav-reflection in https://github.com/containerd/nydus-snapshotter/pull/790
* fix(manager): quarantine damaged daemo...

🔗 [Link](https://github.com/containerd/nydus-snapshotter/releases/tag/v0.16.0)

**Metadata:**
- Version: v0.16.0
- Published: 2026-09-24
- Prerelease: No


---

*This content was automatically collected on 2026-09-25 03:22:30*
