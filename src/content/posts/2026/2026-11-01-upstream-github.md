---
title: "Upstream Github - 2026-11-01"
description: "CNCF upstream activity from github"
pubDate: 2026-11-01
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/network", "kind/cleanup", "area/kube-proxy", "needs-triage", "kind/bug", "area/kubelet", "sig/node", "pr", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/cloudprovider", "sig/cluster-lifecycle", "size/S", "sig/auth", "sig/architecture", "sig/cloud-provider", "area/dependency", "wg/device-management", "kind/dependency", "sig/scheduling", "size/XS", "release-note-none", "priority/important-longterm", "triage/accepted", "size/M", "sig/apps", "ok-to-test", "kind/feature", "language/pt", "area/localization", "website", "area/vertical-pod-autoscaler", "autoscaler", "containerd", "cncf", "release", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#143659: kube-proxy: replace pkg/proxy/config with client-go typed informer handlers

`pkg/proxy/config` predates shared informers. Its package doc still describes a design where "configuration sources (etcd, files, ...)" push updates over channels and the package computes a union of them:


https://github.com/kubernetes/kubernetes/blob/d285472482503c249133440979b51e49949030ea/pkg/pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143659)

**Metadata:**
- Created: 2026-10-31
- Comments: 1
- State: open

### kubernetes/kubernetes#143653: kubelet re-runs terminated regular containers (Never / OnFailure exit 0) after their runtime container is removed

/kind bug
/sig node
/area kubelet


### What happened?

On a **live pod** (another container still running), a container that had terminated successfully (exit code 0) under `restartPolicy: Never` — and, in a second test case, under `restartPolicy: OnFailure` — was **re-started by kubelet ~1 second ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143653)

**Metadata:**
- Created: 2026-10-31
- Comments: 5
- State: open

### kubernetes/kubernetes#143658: kube-apiserver: fix ORCA response header finalization

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Fixes ORCA response-header finalization when a handler:

- Returns without calling WriteHeader or Write.
- Flushes before writing a response.
- Sends informational responses before its f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143658)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143657: Bump go-jose to v4.1.7 for CVE-2026-116587

#### What type of PR is this?

/kind dependency
/kind bug

#### What this PR does / why we need it:

Bumps `github.com/go-jose/go-jose/v4` from v4.1.5 to v4.1.7.

v4.1.5 is affected by CVE-2026-116587 (GHSA-mgcc-cww5-fp2q, high): a crafted
JWK with RSA parameters makes go-jose spend excessive CPU in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143657)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143656: update owners aliases file for the updates in sig-scheduling leadership

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Update the OWNERS_ALIASES with the sig-scheduling leadership updates.

#### Which issue(s) this PR is related to:
Fixes 1 task in https://github.com/kubernetes/community/issues/9240

#### Special notes for your rev...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143656)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143655: PDB: requeue after failSafe so DisruptionsAllowed can recover

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When `trySync` fails (non-conflict), `sync` calls `failSafe` to pin `DisruptionsAllowed` to 0 (fail closed). If that status write succeeds, `sync` previously returned `nil`, so the workqueue `Forget`s the key.

Recov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143655)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143654: kubelet: don't re-run terminated containers removed from runtime

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143654)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143651: strategicpatch: don't delete field on null $deleteFromPrimitiveList

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A strategic merge patch like `{"metadata":{"$deleteFromPrimitiveList/finalizers":null}}` currently deletes the entire `finalizers` field instead of deleting no elements — the same happens for `labels` and Confi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143651)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143650: kubelet: do not re-run terminated ephemeral containers when removed from runtime

#### What type of PR is this?
/kind bug
/sig node
/area kubelet

#### What this PR does / why we need it:

### Background & Problem Description
Under the Kubernetes API specification (`pkg/apis/core/types.go`):
> *"Ephemeral containers have no resource or scheduling guarantees, and they wil...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143650)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143649: managedfields: preserve unmanaged finalizers during server-side apply

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Fixes an issue where a server-side apply request removing a controller's last applied finalizer also dropped unmanaged finalizers such as `foregroundDeletion` or `orphan` (added by the API server d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143649)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58543: [pt-br] Localize docs/tasks/administer-cluster/verify-signed-artifacts.md

The page "Verify Signed Kubernetes Artifacts" does not exist in the Brazilian Portuguese localization yet.

- **English page:** [content/en/docs/tasks/administer-cluster/verify-signed-artifacts.md](https://github.com/kubernetes/website/blob/main/content/en/docs/tasks/administer-cluster/verify-signed...

🔗 [Link](https://github.com/kubernetes/website/issues/58543)

**Metadata:**
- Created: 2026-11-01
- Comments: 1
- State: open

### kubernetes/website#58533: Mobile & Tablet Navigation Fixes : Center-to-Left Logo Alignment, Layout Polish, and Missing Sidebar Scroll Lock

**What would you like to be added**
We would like to improve the mobile and tablet navigation experience on `kubernetes.io` with two specific UI/UX updates:
1. **Left-aligned Logo :** Move the Kubernetes logo to the far left in the header on mobile and tablet viewports instead of centering it, align...

🔗 [Link](https://github.com/kubernetes/website/issues/58533)

**Metadata:**
- Created: 2026-10-31
- Comments: 1
- State: open

### kubernetes/autoscaler#10595: VPA: Collect recommender latencies in KWOK benchmark

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This adds recommender latencies to the KWOK benchmark, which previously only reported the updater. Currently, there's no way to check whether a recommender change makes its loop slower in the larger profile...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10595)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14503: unpack: no fsync in archive.Apply + exists-skip without content validation — storage write-back loss is committed into snapshots as 0-byte files

### Description

**Reporter**: Marrrrrrrrry (original reporter of alpinelinux/docker-alpine#490 and home-assistant/core#179692; incident investigated with Docker Engine 29.4.3, which bundles containerd v2.2.3)

## Summary

The layer-unpack path (`archive.Apply` → `createTarFile`) writes regular file...

🔗 [Link](https://github.com/containerd/containerd/issues/14503)

**Metadata:**
- Created: 2026-10-31
- Comments: 3
- State: open

### cncf/prow-github-actions: prow-github-actions 3.5.0

# v3.5.0

A hardening release: authorization gaps closed, commands that fail now say so, fewer GitHub API
calls per event, and an App server that survives bad input, slow handlers and rolling updates.
`@v3` callers get it automatically; `@v3.4.0` pins move to `@v3.5.0`.

## Commands

- **Authorization.** `/unassign @user` and `/uncc @user` now require the commenter to be an org
  member or repository collaborator (self-unassign and self-uncc are unchanged). `/remove` refuses
  `lgtm`, `approved`...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.5.0)

**Metadata:**
- Version: v3.5.0
- Published: 2026-11-01
- Prerelease: No


---

*This content was automatically collected on 2026-11-01 04:17:49*
