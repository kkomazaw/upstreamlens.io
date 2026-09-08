---
title: "Upstream Github - 2026-09-08"
description: "CNCF upstream activity from github"
pubDate: 2026-09-08
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/scheduling", "needs-triage", "wg/device-management", "sig/api-machinery", "kind/flake", "pr", "sig/node", "release-note", "size/L", "cncf-cla: yes", "do-not-merge/cherry-pick-not-approved", "needs-priority", "area/kubectl", "size/XS", "sig/auth", "sig/cli", "needs-ok-to-test", "kind/cleanup", "release-note-none", "area/test", "sig/network", "area/kubelet", "area/apiserver", "sig/storage", "sig/apps", "sig/testing", "sig/etcd", "area/kube-proxy", "area/cloudprovider", "sig/cluster-lifecycle", "sig/instrumentation", "sig/architecture", "area/code-generation", "sig/cloud-provider", "area/dependency", "kind/feature", "kind/documentation", "cncf-cla: no", "do-not-merge/release-note-label-needed", "size/M", "kind/api-change", "do-not-merge/needs-sig", "release", "cloud-provider-openstack", "size/S", "do-not-merge/work-in-progress", "approved", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "lgtm", "dependencies", "go", "minikube", "area/jobs", "area/config", "test-infra", "area/github-repo", "area/github-management", "org", "sig/docs", "do-not-merge/hold", "language/ko", "website", "area/localization", "area/vertical-pod-autoscaler", "ok-to-test", "triage/accepted", "autoscaler", "area/cluster-autoscaler", "area/provider/cluster-api", "community", "size/XXL", "ingress-gce", "enhancements", "prometheus", "containerd", "area/cri", "area/runtime", "size/XL"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/ingress-gce#3240: Fix security vulnerabilities for release-1.36 (b/556932907)

- Update Go to 1.25.14 (fixes CVE-2026-33818, CVE-2026-33814)
- Upgrade google.golang.org/grpc to v1.83.1 (fixes CVE-2026-84304)
- Regenerate composite types and update backend service zonal affinity handling
- Re-vendor dependencies

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3240)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.13.3 / 2026-09-07

- [SECURITY] Bump github.com/klauspost/compress to v1.18.7 (GO-2026-5841) and golang.org/x/crypto to v0.55.0 (GO-2026-6303).
- [BUGFIX] Docker SD: Fix panic in Docker Swarm service discovery when a service runs as a plugin or network-attachment. #19102
- [BUGFIX] PromQL: Fix case-insensitive regex label matchers silently dropping matching values. #19167
- [BUGFIX] Scrape: Fix scrape manager spinning at 100% CPU on shutdown. #19149
- [BUGFIX] Alerting: Fix 100% CPU usage on shutdown that coul...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.3)

**Metadata:**
- Version: v3.13.3
- Published: 2026-09-07
- Prerelease: No

## Updates

### kubernetes/kubernetes#141912: DRA ResourceSlice stays valid after its driver becomes unavailable, so the scheduler keeps binding pods onto capacity that can never be prepared

### What happened?

If a DRA driver becomes unavailable on a node for any reason (it crashes, it's mid-restart, a rolling upgrade is in progress, etc.) while the node itself stays healthy, the `ResourceSlice` it was advertising stays exactly as-is. Nothing marks it stale or removes it. 

The schedul...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141912)

**Metadata:**
- Created: 2026-09-07
- Comments: 5
- State: open

### kubernetes/kubernetes#141909: test flake: TestWebhookConverterWithWatchCache: wrong error on decode

### Which jobs are flaking?

Integration testing (seen in ci-kubernetes-integration-arm64-1-37, ci-kubernetes-integration-1-37, etc., probably unfixed on master).

https://storage.googleapis.com/k8s-triage/index.html?text=TestWebhookConverterWithWatchCache%2Ffailure-message-v1#408ccc9147811eaffc9a

...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141909)

**Metadata:**
- Created: 2026-09-07
- Comments: 2
- State: open

### kubernetes/kubernetes#141924: Automated cherry pick of #141307: DRA: avoid integer overflow in per-claim device-limit checks

Cherry pick of #141307 on release-1.35.

#141307: DRA: avoid integer overflow in per-claim device-limit checks

/kind bug

#### What this PR does / why we need it
Backports the per-claim device-limit overflow fix to release-1.35. The structured allocator sums each request's device count into `minDev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141924)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141923: Automated cherry pick of #141307: DRA: avoid integer overflow in per-claim device-limit checks

Cherry pick of #141307 on release-1.36.

#141307: DRA: avoid integer overflow in per-claim device-limit checks

/kind bug

#### What this PR does / why we need it
Backports the per-claim device-limit overflow fix to release-1.36. The structured allocator sums each request's device count into `minDev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141923)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141922: Automated cherry pick of #141307: DRA: avoid integer overflow in per-claim device-limit checks

Cherry pick of #141307 on release-1.37.

#141307: DRA: avoid integer overflow in per-claim device-limit checks

/kind bug

#### What this PR does / why we need it
Backports the per-claim device-limit overflow fix to release-1.37. The structured allocator sums each request's device count into `minDev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141922)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141921: Automated cherry pick of #141035: Avoid reconcile panic on error

Cherry pick of #141035 on release-1.35.

#141035: Avoid reconcile panic on error

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

**Motivation for the backport:** downstream controllers that ve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141921)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141920: Automated cherry pick of #141035: Avoid reconcile panic on error

Cherry pick of #141035 on release-1.36.

#141035: Avoid reconcile panic on error

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

**Motivation for the backport:** downstream controllers that ve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141920)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141919: scheduler: reuse NodeInfo after HTTP extender filter

HTTP extender Filter with `nodeCacheCapable=false` was wrapping the returned `v1.Node` in a new empty NodeInfo. After #130537, Score plugins use that NodeInfo directly, so NodeResourcesFit / NodeResourcesBalancedAllocation saw zero requested CPU/memory on every node.

Look the node up in the input l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141919)

**Metadata:**
- Created: 2026-09-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141918: kubectl: Refactor flags and options in `kubectl exec` cmd

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141918)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141917: test: remove tCtx.Cancel workarounds

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Since https://github.com/kubernetes/kubernetes/pull/141545, a TContext created by ktesting.Init is automatically canceled as soon as the test binary considers the test done, before any t.Cleanup callback ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141917)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141916: fix: update x/crypto to address SSH vulnerabilities

#### What type of PR is this?

/kind bug

#### What this PR does

Updates golang.org/x/crypto from v0.54.0 to v0.56.0 to address SSH vulnerabilities GO-2026-6355 and GO-2026-6354.

govulncheck reported both vulnerabilities as reachable through the Kubernetes E2E SSH framework. After updating...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141916)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141915: client-go: report exec plugin status errors

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

When a client-go exec authentication plugin exits with a non-zero status, callers currently only receive the executable path and exit code.

This PR allows plugins to write a metav1.Status object to stdou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141915)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141914: nominate pacoxu as SIG Scheduling reviewer

#### What type of PR is this?
/kind documentation

#### What this PR does / why we need it:

I would like to self-nominate as a SIG Scheduling reviewer.

I have been a member of the Kubernetes organization since September 2020:
https://github.com/kubernetes/org/issues/2158

I have also ser...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141914)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141913: apiserver: restore FileRefreshDuration poll for file-backed CAs

## Summary
- Restore the unused `FileRefreshDuration` poll on `DynamicFileCAContent` (and the same leftover on `DynamicCertKeyPairContent`) so file-backed client CAs reload even when fsnotify stays on a stale inode.
- `#104102` replaced the poll with fsnotify but left `FileRefreshDuration` unused. `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141913)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141911: kube-api-linter: mark core/v1 Pod/Container/Env/Probe fields optional…

Continues the per-chunk rollout of the `optionalorrequired` lint rule for the `core` API group (part of #136865, follow-up to #140587). This chunk covers the Pod, Container, EnvVar, Probe/Handler, PodSpec/PodStatus, scheduling (affinity/taints/topology spread), and DNS/sysctl types in `staging/src/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141911)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-manila-csi-2.36.3

Manila CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-manila-csi-2.36.3)

**Metadata:**
- Version: openstack-manila-csi-2.36.3
- Published: 2026-09-07
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cloud-controller-manager-2.36.4

Openstack Cloud Controller Manager Helm Chart

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cloud-controller-manager-2.36.4)

**Metadata:**
- Version: openstack-cloud-controller-manager-2.36.4
- Published: 2026-09-07
- Prerelease: No

### kubernetes/cloud-provider-openstack: openstack-cinder-csi-2.36.4

Cinder CSI Chart for OpenStack

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cinder-csi-2.36.4)

**Metadata:**
- Version: openstack-cinder-csi-2.36.4
- Published: 2026-09-07
- Prerelease: No

### kubernetes/cloud-provider-openstack#3192: [manila-csi-plugin] Use Kubernetes recommended labels

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3192)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/cloud-provider-openstack#3191: [occm] Reduce caps of manifests, charts

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* ci...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3191)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9905: Promote some CSI images for release aligned with 1.37

**What this PR does / why we need it**:
Promote the external-attacher, livenessprobe, node-driver-registar images for their 1.37-aligned release.

Promote also some patch releases of the external-resizer.

**If you are promoting an image, please make sure you have done the following:**

- [x]...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9905)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23667: chore(deps): bump github.com/cheggaaa/pb/v3 from 3.1.7 to 3.2.1

Bumps [github.com/cheggaaa/pb/v3](https://github.com/cheggaaa/pb) from 3.1.7 to 3.2.1.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/cheggaaa/pb/commit/6e37daa8f6bd4b4736b0a14949b2d81f54b6b43b"><code>6e37daa</code></a> Merge pull request <a href="https://redirect.github.c...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23667)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23666: chore(deps): bump libvirt.org/go/libvirt from 1.12005.0 to 1.12007.0

Bumps [libvirt.org/go/libvirt](https://gitlab.com/libvirt/libvirt-go-module) from 1.12005.0 to 1.12007.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://gitlab.com/libvirt/libvirt-go-module/commit/6f0d54e356d568032e04cd47d490d3da4d0bb4b0"><code>6f0d54e</code></a> Add PollWeight mappi...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23666)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23665: chore(deps): bump github.com/google/go-containerregistry from 0.22.0 to 0.22.1

Bumps [github.com/google/go-containerregistry](https://github.com/google/go-containerregistry) from 0.22.0 to 0.22.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/google/go-containerregistry/releases">github.com/google/go-containerregistry's releases</a>...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23665)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23664: chore(deps): bump github.com/elazarl/goproxy from 1.8.2 to 1.9.1

Bumps [github.com/elazarl/goproxy](https://github.com/elazarl/goproxy) from 1.8.2 to 1.9.1.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/elazarl/goproxy/releases">github.com/elazarl/goproxy's releases</a>.</em></p>
<blockquote>
<h2>v1.9.1</h2>
<h2>What's...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23664)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37829: pull-kubernetes-e2e-kind-canary: use test-infra-e2e-k8s.sh

There's no hidden SKIP=Serial default anymore, so when using the simpler test-infra-e2e-k8s.sh we know that what we see in the job is what we'll get.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37829)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6618: Add teams for kubernetes-mixin repo

ref: https://github.com/kubernetes/org/issues/6129

/area github-repo

🔗 [Link](https://github.com/kubernetes/org/pull/6618)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6617: Remove v1.37 shadows from sig docs team

- Remove me from `website-maintainers`
- Remove v1.37 shadows except for Destiny (v1.38 release docs lead) from `website-milestone-maintainers`

cc @kubernetes/sig-docs-leads @Caesarsage 

🔗 [Link](https://github.com/kubernetes/org/pull/6617)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6616: Add members 2026-09-07

This PR:
- Fixes #6606

🔗 [Link](https://github.com/kubernetes/org/pull/6616)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57451: [ko] Translate content/en/blog/_posts/2026/agent-sandbox.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57451)

**Metadata:**
- Created: 2026-09-07
- Comments: 1
- State: open

### kubernetes/website#57449: [ko] Update content/ko/docs/setup/production-environment/tools/kubeadm/control-plane-flags.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/production-environment/tools/kubeadm/control-plane-flags.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/production-en...

🔗 [Link](https://github.com/kubernetes/website/issues/57449)

**Metadata:**
- Created: 2026-09-07
- Comments: 1
- State: open

### kubernetes/website#57445: [ko] Update content/ko/docs/contribute/new-content/open-a-pr.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/contribute/new-content/open-a-pr.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/contribute/new-content/open-a-pr/
- English: http...

🔗 [Link](https://github.com/kubernetes/website/issues/57445)

**Metadata:**
- Created: 2026-09-07
- Comments: 1
- State: open

### kubernetes/website#57443: [ko] Update content/ko/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/setup/production...

🔗 [Link](https://github.com/kubernetes/website/issues/57443)

**Metadata:**
- Created: 2026-09-07
- Comments: 1
- State: open

### kubernetes/autoscaler#10261: Bump the patch-updates group across 2 directories with 2 updates

Bumps the patch-updates group with 1 update in the /vertical-pod-autoscaler directory: [github.com/prometheus/client_model](https://github.com/prometheus/client_model).
Bumps the patch-updates group with 2 updates in the /vertical-pod-autoscaler/test directory: [github.com/prometheus/client_model](h...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10261)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10260: Bump the non-kubernetes group across 2 directories with 8 updates

Bumps the non-kubernetes group with 5 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [github.com/prometheus/client_model](https://github.com/prometheus/client_model) | `0.6.2` | `0.6.3` |
| [github.com/prometheus/common](https://github.com/prometheu...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10260)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10258: Add topology.kubernetes.io/zone to CAPI extracted template labels

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The extractNodeLabels function in the clusterapi cloudprovider copies a predefined set of labels from existing nodes into the template node used for scale-up simulation. It included the deprecated `failure-doma...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10258)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10257: cherryservers: remove redundant rand.Seed call

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

randString8 called rand.Seed(time.Now().UnixNano()) on every invocation. The global math/rand source has auto-seeded itself since Go 1.20, and this module is on Go 1.26, so the call is a deprecated no-op that run...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10257)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9148: sig-instrumentation: add kubernetes-mixin subproject

ref: https://github.com/kubernetes/org/issues/6129

🔗 [Link](https://github.com/kubernetes/community/pull/9148)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6328: Bump github.com/go-playground/validator/v10 from 10.30.3 to 10.30.4

Bumps [github.com/go-playground/validator/v10](https://github.com/go-playground/validator) from 10.30.3 to 10.30.4.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-playground/validator/releases">github.com/go-playground/validator/v10's releases</a>.</em>...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6328)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14124: SIGSEGV in metadata GC (sendLabelRefs, nil bbolt bucket) leaves meta.db unopenable

### Description

During an ordered shutdown of 12 containers, containerd's metadata garbage collector dereferenced a nil bbolt bucket and segfaulted. The daemon died mid-transaction, leaving io.containerd.metadata.v1.bolt/meta.db with an inconsistent freelist. Every subsequent start panicked in bbol...

🔗 [Link](https://github.com/containerd/containerd/issues/14124)

**Metadata:**
- Created: 2026-09-08
- Comments: 1
- State: open

### containerd/containerd#14123: cri: support explicit pod namespace paths

/area cri
/area runtime
/kind feature

## Context

`CreateContainer` derives pod `net/ipc/uts/pid` from `sandboxPid` via `/proc/<pid>/ns/*`. The pauseless design pins namespaces in the shim and exposes stable paths. The future shim will provide those paths, and `pid==0` will mean “no sandbox p...

🔗 [Link](https://github.com/containerd/containerd/pull/14123)

**Metadata:**
- Created: 2026-09-07
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-08 02:59:32*
