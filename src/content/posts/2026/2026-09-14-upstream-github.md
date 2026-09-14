---
title: "Upstream Github - 2026-09-14"
description: "CNCF upstream activity from github"
pubDate: 2026-09-14
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "sig/testing", "kind/failing-test", "needs-triage", "kind/bug", "sig/network", "pr", "area/apiserver", "size/S", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "kind/api-change", "sig/apps", "area/test", "sig/storage", "size/XS", "do-not-merge/release-note-label-needed", "area/kubelet", "sig/scalability", "sig/node", "release-note", "size/XXL", "kind/feature", "size/L", "sig/instrumentation", "sig/etcd", "area/kube-proxy", "size/M", "sig/release", "needs-kind", "ok-to-test", "area/release-eng", "area/dependency", "release", "website", "lgtm", "sig/docs", "language/en", "approved", "k8s.io", "do-not-merge/work-in-progress", "cloud-provider-aws", "area/vertical-pod-autoscaler", "do-not-merge/needs-area", "autoscaler", "kind/documentation", "area/balancer", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142074: [KEP-2172] warn about implicitly insecure container UIDs/GIDs

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

alpha implementation for [KEP-2172 (Warn about quietly-insecure container UIDs/GIDs)](https://github.com/kubernetes/enhancements/issues/2172)

PR is adding a new feature gate `InsecurePodWarnings` (off by...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142074)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1486: Manage multiple cluster-tagged security groups per node for LB ingress

**What type of PR is this?**

/kind feature

**What this PR does / why we need it**:

#### Problem

When a worker instance carries more than one security group tagged with the cluster tag, `findSecurityGroupForInstance` returns `Multiple tagged security groups found for instance ...` and the Service...

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1486)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: Yes

### containerd/containerd#14158: CRI: PullImage hangs forever when image_pull_progress_timeout = "0s" (default transfer service path)

### Description

Hey everyone! I ran into this one while playing with a slow registry mirror on my test cluster. Pulls kept getting killed by the progress timeout, so I set `image_pull_progress_timeout = "0s"` expecting it to mean "never give up on a slow pull". The code even logs `no timeout and wi...

🔗 [Link](https://github.com/containerd/containerd/issues/14158)

**Metadata:**
- Created: 2026-09-13
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#142079: unit-master-golang-tip red: two upstream net/http bugs, not kubernetes bugs

TestGrid: https://testgrid.k8s.io/sig-arch-code-organization#unit-master-golang-tip&width=20

`ci-kubernetes-unit-golang-tip` has been red since 2026-09-10. Two upstream net/http bugs, both from Go tip commit e51216de8e (CL 829984, the fix for golang/go#81404):

- golang/go#81510: readLoop reads `Re...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142079)

**Metadata:**
- Created: 2026-09-13
- Comments: 1
- State: open

### kubernetes/kubernetes#142072: resource quota controller leaks informer event handlers when a monitored resource is removed

### What happened?

The resource quota controller's `QuotaMonitor` registers an event handler on the shared informer for every monitored resource (`pkg/controller/resourcequota/resource_quota_monitor.go`, `controllerFor`), but when a monitor is torn down in `SyncMonitors` (and on shutdown) it only s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142072)

**Metadata:**
- Created: 2026-09-13
- Comments: 1
- State: open

### kubernetes/kubernetes#142068: kube-proxy iptables: nfacct probe doesn't cover xt_nfacct match, all syncs fail

### What happened?

kube-proxy in **iptables mode** decides whether to emit `-m nfacct --nfacct-name ...` rules based only on a probe of the **nfacct netlink subsystem** (`nfnetlink_acct`, kernel option `CONFIG_NETFILTER_NETLINK_ACCT`). It never checks that the **iptables `nfacct` match extension** ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142068)

**Metadata:**
- Created: 2026-09-13
- Comments: 1
- State: open

### kubernetes/kubernetes#142078: fix(apiserver): record init events when watcher stops

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This PR fixes init event accounting in the cache watcher when the watcher stops while processing initial events.

Previously, `sendWatchCacheEvent` did not indicate whether the watcher stopped while sending a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142078)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig apps

#### What this PR does / why we need it:

Go 1.27 vet rejects `%d` with a pointer argument (golang/go#62595). `go.mod` declares `go 1.27.0`, so `go test` on Go tip fails to build four packages: seven call sites pass a `*int32`, `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142076)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142075: health attribute migration

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142075)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142073: resourcequota: remove informer event handler when a monitor stops

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

The resource quota controller's `QuotaMonitor` registers an event handler on the shared informer for every monitored resource, but when a monitor is torn down it only stopped the monitor without removing that handler. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142073)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142071: kube-apiserver: add watch-cache-max-average-object-size flag and byte budget bypass

### What type of PR is this?

/kind feature
/sig api-machinery

### What this PR does / why we need it:

Fixes: #142062 (one of the solution(s))

When large objects or heavily-populated CRDs are cached, watchCache retains every object fully decoded in memory, leading to severe kube-apiserve...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142071)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142070: kube-proxy: probe nfacct iptables match

/kind bug

#### What this PR does / why we need it:

In iptables mode, probe the `nfacct` iptables match before adding optional accounting rules to the atomic restore payload. If the netlink accounting subsystem is available but the match is not, kube-proxy disables the optional metrics and still pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142070)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142069: Fix race where custom resources were served from stale CRD storage

#### What type of PR is this?
/kind bug
/sig api-machinery
#### What this PR does / why we need it:

`crdHandler` and `DiscoveryController` consumes the same shared informer independently and nothing orders the two consumers. So after a spec change that moves the storage version, discovery can ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142069)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142067: kubelet: skip cgroup reads when pod cgroup is gone during teardown

### What type of PR is this?
/kind bug
/sig node

### What this PR does / why we need it:
Fixes #141927

With `InPlacePodLevelResourcesVerticalScaling` enabled, `convertToAPIPodLevelResourcesStatus` only skipped the cgroup read when `allocatedPod.Status.Phase != v1.PodRunning`.

During teardown, a t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142067)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142066: kube-apiserver: add --watch-cache-max-bytes-per-resource flag and byte budget bypass

### What type of PR is this?
/kind feature

### What this PR does / why we need it:
Fixes #142062

When large objects or heavily-populated CRDs are cached, `watchCache` retains every object fully decoded in memory, leading to severe kube-apiserver OOMs even when object counts are moderate.

This PR ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142066)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4529: Bump golang.org/x/text from 0.41.0 to 0.42.0

Bumps [golang.org/x/text](https://github.com/golang/text) from 0.41.0 to 0.42.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/golang/text/commit/fafe4a06967e06550e69ee42787d9902845d2a3f"><code>fafe4a0</code></a> go.mod: update golang.org/x dependencies</li>
<li><a href="...

🔗 [Link](https://github.com/kubernetes/release/pull/4529)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4528: Bump github.com/sigstore/sigstore from 1.10.9 to 1.10.10 in the all group

Bumps the all group with 1 update: [github.com/sigstore/sigstore](https://github.com/sigstore/sigstore).

Updates `github.com/sigstore/sigstore` from 1.10.9 to 1.10.10
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/sigstore/sigstore/releases">github.com/si...

🔗 [Link](https://github.com/kubernetes/release/pull/4528)

**Metadata:**
- Created: 2026-09-14
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57512: [ko] Add DRA-related Korean glossary entries

### Description

Add Korean glossary entries for the DRA-related concepts identified while preparing the Korean documentation:

- `api-resource`
- `infrastructure-resource`
- `device`
- `dra`

The Korean DRA documentation uses these concepts, but the corresponding Korean glossary files are missing. ...

🔗 [Link](https://github.com/kubernetes/website/issues/57512)

**Metadata:**
- Created: 2026-09-13
- Comments: 1
- State: open

### kubernetes/website#57510: Fix dead links to files removed from the kubernetes/examples repo

### Description

`content/en/docs/tutorials/stateful-application/cassandra.md` linked to three files under `github.com/kubernetes/examples/blob/master/cassandra/...`. That directory was relocated to `databases/cassandra/...` in a repository reorganization. Confirmed the move by checking the commit h...

🔗 [Link](https://github.com/kubernetes/website/pull/57510)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9930: Image promotion for build-image v1.38.0-go1.27.1-bullseye.0 / v1.37.0-go1.26.8-bullseye.0 / v1.36.0-go1.26.8-bullseye.0 / v1.35.0-go1.26.8-bullseye.0

Image promotion for build-image v1.38.0-go1.27.1-bullseye.0 / v1.37.0-go1.26.8-bullseye.0 / v1.36.0-go1.26.8-bullseye.0 / v1.35.0-go1.26.8-bullseye.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork cpanato --interactive --project build-image --tag v1.38.0-go1.27.1-bullseye.0 --t...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9930)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9929: Image promotion for build-image v2.4.0-go1.27.1-trixie.0 / v2.4.0-go1.27.1-bookworm.0 / v2.4.0-go1.26.8-bookworm.0

Image promotion for build-image v2.4.0-go1.27.1-trixie.0 / v2.4.0-go1.27.1-bookworm.0 / v2.4.0-go1.26.8-bookworm.0
This is an automated PR generated from `kpromo`
```
kpromo pr --fork cpanato --interactive --project build-image --tag v2.4.0-go1.27.1-trixie.0 --tag v2.4.0-go1.27.1-bookworm.0 --tag v2...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9929)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10286: Reject invalid admission controller TLS configuration


/kind bug


### Description 
The admission controller could currently be deployed with no TLS certificate source configured.
This PR adds validation to fail early when certGen, certManager and registerWebhook are all disabled, instead of allowing an invalid configuration to render.

### Spe...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10286)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10285: vpa: remove the broken Helm-managed TLS creation mode

## Description

Remove the broken admissionController.tls.create mode from the Helm chart.
It rendered a TLS Secret without the corresponding webhook configuration, and the generated Secret could contain empty certificates.

## Changes

* Remove the unused tls.create mode and related values....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10285)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10284: vpa: fix admission controller ClusterRole ignoring rbac.create

### What this PR does

Fixes the admission controller ClusterRole so it respects rbac.create. 
Previously, the ClusterRole was created whenever the admission controller was enabled, even when rbac.create was set to false.
This change makes the ClusterRole follow the same rbac.create setting as t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10284)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10283: balancer: fix typo in NotStartedWithinDeadline doc comment

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Fixes a typo in the NotStartedWithinDeadline field doc comment on the Summary struct, "not fully stared" should read "not fully started".

#### Which issue(s) this PR fixes:

Fixes #

#### Special notes for...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10283)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10282: addon-resizer: check CountNodes error before the zero count

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

updateResources checked num == 0 before checking err, but CountNodes returns 0 alongside the error whenever the node lister call fails. This meant a real apiserver error was always swallowed and logged as the harmles...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10282)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10281: VPA: document Prometheus history provider fallback and kube-state-metrics labels

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Documents two undocumented behaviors of the VPA recommender when using Prometheus as the history provider, per issue #9228. First, if the recommender cannot reach the address given by --prometheus-address a...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10281)

**Metadata:**
- Created: 2026-09-13
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-14 03:18:19*
