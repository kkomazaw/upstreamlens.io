---
title: "Upstream Github - 2026-10-17"
description: "CNCF upstream activity from github"
pubDate: 2026-10-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "area/kubelet", "sig/node", "needs-triage", "sig/api-machinery", "pr", "area/test", "lgtm", "release-note", "size/S", "kind/feature", "area/release-eng", "approved", "cncf-cla: yes", "sig/testing", "sig/release", "do-not-merge/cherry-pick-not-approved", "needs-priority", "triage/accepted", "size/L", "needs-ok-to-test", "size/M", "sig/apps", "sig/network", "area/apiserver", "kind/cleanup", "release-note-none", "sig/windows", "area/e2e-test-framework", "do-not-merge/work-in-progress", "sig/storage", "size/XL", "kind/api-change", "cncf-cla: no", "do-not-merge/release-note-label-needed", "do-not-merge/needs-sig", "ok-to-test", "kind/flake", "kind/documentation", "area/code-generation", "area/kubectl", "sig/cli", "kops", "minikube", "priority/important-soon", "area/jobs", "area/config", "test-infra", "do-not-merge/hold", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "size/XS", "area/provider/aws", "sig/cloud-provider", "area/github-management", "org", "prometheus", "release", "client_java", "containerd", "overlaybd", "cncf", "needs-group", "needs-kind", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/k8s.io#10072: Require level 3 and check the caller in the SPO provenance policy

**What this PR does / why we need it**:

Tightens the provenance policy of the Security Profiles Operator with the two policy features of kpromo v4.8.0:

- `levels` requires SLSA build level 3 for every image of the manifest (`*` and `*/*`), today spoc, the chart, the operator images, bundle, catalo...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10072)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### cncf/toc#2333: Cloudnative-pg: Add Incubation Due Diligence

Adds the CloudNativePG Incubation Due Diligence document.

Project application: [#1961](https://github.com/cncf/toc/issues/1961)

PR open until October 30 for TOC and public review/comment.

🔗 [Link](https://github.com/cncf/toc/pull/2333)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143110: HugepageAwareEviction: first eviction sync after kubelet restart uses stale hugepage capacity

### What happened?

Found this while digging into the hugepage reporting flake (#143046).

With `HugepageAwareEviction` on, the first eviction sync after a kubelet restart subtracts the *old* hugepage capacity from `memory.available`. It only gets the new value on the next sync, ~10s later.

AFAICT ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143110)

**Metadata:**
- Created: 2026-10-16
- Comments: 3
- State: open

### kubernetes/kubernetes#143104: client-go connrotation: nil dial function panics despite documented default

### What happened?

`connrotation.NewDialerWithTracker` documents that a nil `DialFunc` uses a default network dialer. Instead it stores nil in `Dialer.dial`. `DialContext` calls that nil function and panics before attempting any connection. `NewDialer(nil)` has the same behavior because it delegate...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143104)

**Metadata:**
- Created: 2026-10-16
- Comments: 3
- State: open

### kubernetes/kubernetes#143102: StorageVersionMigration: a failed migration removes old versions from the CRD's status.storedVersions

### What happened?

When a StorageVersionMigration (SVM) for a custom resource **fails**, the migration runner in kube-controller-manager still rewrites the CRD's `status.storedVersions` to contain only the current storage version. That's the same thing it does after a successful migration, even tho...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143102)

**Metadata:**
- Created: 2026-10-16
- Comments: 3
- State: open

### kubernetes/kubernetes#143120: [release-1.34] Bump images and versions to Go 1.26.9 and update distroless-iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

* Bump images and versions to Go 1.26.9 and update distroless-iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4561

#### Does this PR introduce a user-facin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143120)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143119: [release-1.35] Bump images and versions to Go 1.26.9 and update distroless-iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

* Bump images and versions to Go 1.26.9 and update distroless-iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4561

#### Does this PR introduce a user-facin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143119)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143118: [release-1.36] Bump images and versions to Go 1.26.9 and update distroless-iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

* Bump images and versions to Go 1.26.9 and update distroless-iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4561

#### Does this PR introduce a user-facin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143118)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143117: [release-1.37] Bump images and versions to Go 1.26.9 and update distroless-iptables

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

* Bump images and versions to Go 1.26.9 and update distroless-iptables

#### Which issue(s) this PR is related to:

xref https://github.com/kubernetes/release/issues/4561

#### Does this PR introduce a user-facin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143117)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143115: kubelet: use machine info for hugepage-aware memory.available

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

With `HugepageAwareEviction` on, `adjustForHugePages` reads the hugepage reservation from `node.Status.Capacity`, and that node comes from the node lister. After a kubelet restart, the first eviction sync runs before...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143115)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143114: Fix StatefulSet maxUnavailable budget to ignore pods below partition

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

With `MaxUnavailableStatefulSet` enabled, `updateStatefulSetAfterInvariantEstablished` counted unavailable pods across all ordinals when computing the rolling-update budget, but only deleted pods with ordinals >= `pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143114)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143113: Fix Service defaultOnRead decorator in decoratedWatcher and statusStore

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig network

#### What this PR does / why we need it:

Fixes a bug where legacy Services created before `spec.clusterIPs` and `spec.ipFamilies` were introduced (pre-1.20) lose their read-defaulted `spec.clusterIPs` on watch events ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143113)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143112: test: avoid direct feature gate access in e2e tests

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

This PR removes direct feature-gate access from E2E and node E2E tests to enforce the import restrictions.

- Adds import restrictions preventing direct access to the default feature-gate package in E2E...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143112)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143111: Fix PDB controller to enqueue all affected budgets on pod changes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The disruption controller only inspected the current pod on updates and only enqueued a single matching PodDisruptionBudget. That left PDB status stale when:

1. A pod's labels changed so it no longer matched a previ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143111)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143109: WIP: apiserver: return 400 on invalid shardSelector and copy ShardInfo on PartialObjectMetadataList

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Return HTTP 400 BadRequest instead of HTTP 500 InternalError when parsing an invalid shard selector on list or watch requests, and copy ShardInfo onto PartialObjectMetadataList responses so sharded metadata informers...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143109)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143108: mount-utils: decode kernel octal escapes in mount paths

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Linux kernel mount tables escape whitespace and special characters (`\040`, `\011`, `\012`, `\134`) in `/proc/mounts` and `/proc/self/mountinfo`

Previously `staging/src/k8s.io/mount-utils` left these sequences unparse...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143108)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143107: Watchcache watch refactor

Draft of watch cleanup to show end state of watch simplification.

/kind cleanup

```release-note
NONE
```

/cc @p0lyn0mial @wojtek-t 

#### AI usage disclosure:

First set of commits that flattened code was done manually and then I sent AI to untangle the mess.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143107)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143106: fix: preserve storedVersions during failed StorageVersionMigration

## Description
Fix StorageVersionMigration to preserve old versions in CRD's status.storedVersions when migration fails.
Failed migrations should not remove previously stored versions.

fixes #143102

## Proposed Changes
- Added protection to preserve storedVersions on failed StorageVersionMigration...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143106)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143105: client-go: use default dialer when connrotation dial is nil

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
A nil custom dial function is documented to use a default dialer, but `NewDialerWithTracker` stored nil and `DialContext` panicked. This also affected `NewDialer(nil)`. The constructor now uses `net....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143105)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143103: svm: keep CRD stored versions when a migration fails

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

When a StorageVersionMigration for a custom resource failed, the migration runner still trimmed the CRD's `status.storedVersions` down to the current storage version, just like after a success. A f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143103)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143101: client-go: drain stdin in SPDY exit-code test servers

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

The non-zero-exit test servers can close their connections while the client is still writing stdin, producing connection resets and occasionally returning nil instead of the expected exit error. Drain the finite st...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143101)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143099: Fix outdated EndpointSlice ports limit in API docs

#### What type of PR is this?

/kind documentation
/sig network

#### What this PR does / why we need it:

The API docs for `EndpointSlice.ports` say "Each slice may include a maximum of 100 ports". Validation has allowed up to 20000 since #99795 (v1.21.0, cherry-picked into v1.18.18, v1.19.10 and v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143099)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143093: WIP - saturate infScale, optimize AsFloat64Slow 

/cc @jpbetz 

/kind bug
/sig api-machinery

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143093)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143092: Align non-recursive responses between cacher and etcd

/kind bug

Noticed that behavior for non-recursive watch differs between cacher and etcd. This behavior is not exposed to users.

| Phase | `etcd3| `cacher` |
|---|---|---|
| **Initial events** |  returns only the initial-events-end bookmark if requested | returns all objects under prefix . |
| **Wa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143092)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143091: kubectl cp: resume --retries after the exec fails

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl cp --retries` only resumed when the exec running `tar` ended without an error. Over WebSocket, the default transport, a cut connection ends the exec with an error, so kubectl exited instead of resuming. With...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143091)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18866: Failure to associate a target group with nodes that has only an IPv6 address

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display this information.**

`Client version: 1.36.2 (git-v1.36.2)`

**2. What Kubernetes version are you running? `kubectl version` will print the version if a cluster is running or provide the Kubernetes version ...

🔗 [Link](https://github.com/kubernetes/kops/issues/18866)

**Metadata:**
- Created: 2026-10-16
- Comments: 1
- State: open

### kubernetes/minikube#23880: test: Resolve pod DNS with dig and stop test pods on SIGTERM

- Resolve names in the HA and multinode pods with `dig +short +search` on agnhost. BusyBox `nslookup` exits non-zero after a successful answer, and it does not search names that contain a dot, so `kubernetes.default` does not resolve.
- Use `busybox:latest` for the remaining integration pods that s...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23880)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23878: test: Honor explicit -test.parallel even when equal to GOMAXPROCS

setMaxParallelism treated -test.parallel equal to core count as the Go default and overwrote it. Detect an explicit flag via flag.Visit, keep values >= 1, and reject values < 1.

## Example usage

```
% make integration TEST_ARGS="-minikube-start-args='--driver=vfkit' -test.parallel=12"

go b...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23878)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38087: add kube 1-37 sig-node release branch testing

We are almost at code freeze for 1.38. We probably should have this a few weeks ago...



🔗 [Link](https://github.com/kubernetes/test-infra/pull/38087)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6716: add wangnyue as owner to aws-efs-csi-driver

Add wangnyue as owner (admin + maintainer) to aws-efs-csi-driver.

Contribution history (merged PRs to kubernetes-sigs/aws-efs-csi-driver):
- kubernetes-sigs/aws-efs-csi-driver#1978 — docs: clarify that access point reuse and basePath are not tenant-isolation boundaries
- kubernetes-sigs/aws-efs-csi...

🔗 [Link](https://github.com/kubernetes/org/pull/6716)

**Metadata:**
- Created: 2026-10-16
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_java: v1.10.0

## [1.10.0](https://github.com/prometheus/client_java/compare/v1.9.0...v1.10.0) (2026-10-16)


### Features

* add option to preserve metric suffixes in OpenMetrics 2.0 ([#2529](https://github.com/prometheus/client_java/issues/2529)) ([b1aa8b3](https://github.com/prometheus/client_java/commit/b1aa8b38be304b7c935da77014afb02267ed01a6))


### Bug Fixes

* **deps:** update dependency com.github.ben-manes.caffeine:caffeine to v3.3.0 ([#2493](https://github.com/prometheus/client_java/issues...

🔗 [Link](https://github.com/prometheus/client_java/releases/tag/v1.10.0)

**Metadata:**
- Version: v1.10.0
- Published: 2026-10-16
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- use a 128 MiB buffer with 4 KiB blocks (#467) [#467](https://github.com/containerd/overlaybd/pull/467) ([ZAwei](https://github.com/containerd/overlaybd/commit/5119193d540010e09c0af98add1ef2b0f4a51bc0))

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-16
- Prerelease: Yes


---

*This content was automatically collected on 2026-10-17 02:56:53*
