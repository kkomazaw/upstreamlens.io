---
title: "Upstream Github - 2026-10-05"
description: "CNCF upstream activity from github"
pubDate: 2026-10-05
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/auth", "needs-triage", "kind/bug", "sig/node", "pr", "area/kubelet", "kind/cleanup", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/api-machinery", "size/L", "kind/api-change", "release-note-none", "sig/apps", "sig/cli", "cncf-cla: yes", "sig/testing", "sig/architecture", "area/code-generation", "sig/cloud-provider", "needs-priority", "sig/etcd", "release-note", "needs-ok-to-test", "sig/scheduling", "sig/instrumentation", "do-not-merge/work-in-progress", "size/M", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/provider/gcp", "size/XS", "do-not-merge/cherry-pick-not-approved", "size/S", "do-not-merge/hold", "do-not-merge/contains-merge-commits", "website", "prometheus", "release", "client_ruby"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142666: golangci-lint: enable deprecatedComment and fix all deprecation notices

#### What type of PR is this?

/kind cleanup
/sig testing
/sig architecture
/sig api-machinery

#### What this PR does / why we need it:

Enables the gocritic `deprecatedComment` check in the blocking lint config and fixes every malformed `Deprecated:` notice it finds: 55 outside API type p...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142666)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_ruby: v5.0.0

# 5.0.0 / 2026-08-30

_**Codename:** I can't believe it's not CGI_

## Small improvements

- [#327](https://github.com/prometheus/client_ruby/pull/327), [#330](https://github.com/prometheus/client_ruby/pull/330) Add Ruby 4.0 support: We now support Ruby 4.0. `CGI` was removed from the default gems, so we've changed our internal uses of it to `URI`.

## Breaking changes

- [#328](https://github.com/prometheus/client_ruby/pull/328), [#335](https://github.com/prometheus/client_ruby/pull/3...

🔗 [Link](https://github.com/prometheus/client_ruby/releases/tag/v.5.0.0)

**Metadata:**
- Version: v.5.0.0
- Published: 2026-10-04
- Prerelease: No

## Updates

### kubernetes/kubernetes#142667: Perform a limited read in the webhook authorizer

Right now, the `staging/src/k8s.io/apiserver/plugin/pkg/authorizer/webhook/webhook.go` file's `rest.Interface` under the hood does a `io.ReadAll` from the server, which means that a webhook authorizer that malfunctions could OOM the API server. The webhook authorizer is a highly privileged component...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142667)

**Metadata:**
- Created: 2026-10-05
- Comments: 1
- State: open

### kubernetes/kubernetes#142662: FileKeyRef ignores optional when the env file is missing, and reports an empty value as a missing key

### What happened?

`FileKeyRef` ignores `optional` when the referenced env file does not exist, and it reports a key that is present with an empty value as missing. In both cases the container is left in `CreateContainerConfigError` and never starts.

Both follow from `ParseEnv` (`pkg/kubelet/util/...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142662)

**Metadata:**
- Created: 2026-10-04
- Comments: 2
- State: open

### kubernetes/kubernetes#142665: kubelet: honour optional for FileKeyRef when the env file is missing

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`FileKeyRef` ignores `optional` when the env file does not exist, and reports a key with an empty value as missing, leaving the container in `CreateContainerConfigError` in both cases. Both come from...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142665)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142664: [WIP] Fix opportunistic batching metric accounting

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142664)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142661: cri: decouple receive/send using unbounded slice‑based event queue

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142661)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142660: gce: pick newest image from image family

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
When resolving a GCE image family for master and Linux node images, limit the image lookup to the newest non-deprecated image. This avoids passing a newline-separated list of image names into instance creation when an ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142660)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142659: review  it

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142659)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142658: refactor: replace new() with ptr.To() in validation_test.go

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142658)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/website#57878: Invalid document link in How DRA Works

**This is a Bug Report**

<!-- Thanks for filing an issue! Before submitting, please fill in the following information. -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

<!--Required Information-->
**Problem:**
The "DRA consumable...

🔗 [Link](https://github.com/kubernetes/website/issues/57878)

**Metadata:**
- Created: 2026-10-04
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-10-05 03:59:19*
