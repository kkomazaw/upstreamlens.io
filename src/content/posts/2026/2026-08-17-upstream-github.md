---
title: "Upstream Github - 2026-08-17"
description: "CNCF upstream activity from github"
pubDate: 2026-08-17
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/testing", "needs-triage", "pr", "area/apiserver", "sig/api-machinery", "size/L", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "sig/scheduling", "do-not-merge/needs-kind", "release-note", "sig/autoscaling", "size/M", "sig/apps", "size/S", "approved", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "kube-state-metrics", "sig/docs", "sig/architecture", "language/en", "website", "help wanted", "kind/feature", "priority/backlog", "triage/accepted", "language/ko", "area/localization", "good first issue", "language/ja", "lgtm", "language/zh", "prometheus", "release", "alertmanager", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/website#57030: feat: include kyaml for pages in k8s.io

Tracks which kubernetes.io pages offer their example manifests in [KYAML](https://kubernetes.io/docs/reference/encodings/kyaml/) as well as conventional YAML, per [KEP-5295](https://www.kubernetes.dev/resources/keps/5295/).

Conventional YAML stays the source of truth and stays what `https://k8s.io/...

🔗 [Link](https://github.com/kubernetes/website/issues/57030)

**Metadata:**
- Created: 2026-08-17
- Comments: 2
- State: open

### kubernetes/website#57011: [zh-cn]sync weave-network-policy application-security-checklist

content/zh-cn/docs/tasks/administer-cluster/network-policy-provider/weave-network-policy.md
content/zh-cn/docs/concepts/security/application-security-checklist.md

🔗 [Link](https://github.com/kubernetes/website/pull/57011)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141396: test/images/agnhost/Dockerfile lacks a fallback when golang:$GOLANG_VERSION tag isn't published yet on release branches

### What happened?

test/images/agnhost/Dockerfile pulls its build-time Go toolchain via a tag-based reference — FROM golang:$GOLANG_VERSION AS preparer — where GOLANG_VERSION is derived from .go-version by test/images/image-util.sh (~lines 148–167).

When a release branch's .go-version is bumped as...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141396)

**Metadata:**
- Created: 2026-08-16
- Comments: 4
- State: open

### kubernetes/kubernetes#141399: apiserver/cacher: align listSnapshot continueKey semantics with the btree

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

**Depends on #141359 — please review the last two commits here**; the first two are #141359 (approved) and will drop out of this diff when it merges.

Follow-up to #141359, as discussed there: the snapshot implementa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141399)

**Metadata:**
- Created: 2026-08-17
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141398: test(scheduler): add DynamicResources filter integration tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141398)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141397: HPA: cap replica count calculations at max int32

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The HPA computes replica counts with `int32(math.Ceil(...))` on values that can exceed the `int32` range; Go leaves out-of-range float to `int`/`int32` conversion implementation-defined, so amd64 wraps to `MinI...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141397)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37692: kops: canary SSH user discovery on two GCE jobs

kubernetes/kops#18699 lets `kubetest2-kops` ask the cluster which user kops registered the SSH key for — but only when the job does not set `KUBE_SSH_USER`. Every GCE job sets it to `prow`, so nothing exercises the new path yet. This opts two jobs in by dropping the variable.

| job | distro | expec...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37692)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3094: chore: Release v2.20.0

Release v2.20.0

1. Update the CHANGELOG
2. Update data.yaml
3. Update examples
4. Regenerate README

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3094)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57025: Task: redo fix for issue #28690

**This is a task issue**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What needs doing**
- Look at issue https://github.com/kubernetes/website/...

🔗 [Link](https://github.com/kubernetes/website/issues/57025)

**Metadata:**
- Created: 2026-08-16
- Comments: 1
- State: open

### kubernetes/website#57023: Trouble with Performing a Rolling Update tutorial

Hi, I was learning with basic kubernetes tutorial and I've found one discrepancy in [the tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/#:~:text=To%20get%20more,in%20the%20repository.):

"
To get more insight into the problem, run the describe pods subcommand:
`...

🔗 [Link](https://github.com/kubernetes/website/issues/57023)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57022: [ko] Translate content/en/docs/tasks/debug/logging/_index.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57022)

**Metadata:**
- Created: 2026-08-16
- Comments: 1
- State: open

### kubernetes/website#57020: [ja] Translate content/en/docs/reference/glossary/logging.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/logging.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
...

🔗 [Link](https://github.com/kubernetes/website/issues/57020)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57019: [ja] Translate content/en/docs/reference/glossary/cel.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/cel.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
    ...

🔗 [Link](https://github.com/kubernetes/website/issues/57019)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57018: [ja] Translate content/en/docs/reference/glossary/proxy.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/proxy.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to translate:
  ...

🔗 [Link](https://github.com/kubernetes/website/issues/57018)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57017: [ja] Translate content/en/docs/reference/glossary/pod-template.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/pod-template.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page

**Comments**

- File to transl...

🔗 [Link](https://github.com/kubernetes/website/issues/57017)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57016: [ja] Translate content/en/docs/reference/glossary/quantity.md into Japanese

_**Note that this issue is for Japanese Speaker**_

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/quantity.md` into Japanese

**Why is this needed**

There is no Japanese translation for this page.
This term is referenced by 1 Japan...

🔗 [Link](https://github.com/kubernetes/website/issues/57016)

**Metadata:**
- Created: 2026-08-16
- Comments: 2
- State: open

### kubernetes/website#57012: [zh-cn]sync declare-network-policy romana-network-policy resourceslice

content/zh-cn/docs/reference/glossary/resourceslice.md
content/zh-cn/docs/tasks/administer-cluster/declare-network-policy.md
content/zh-cn/docs/tasks/administer-cluster/network-policy-provider/romana-network-policy.md

🔗 [Link](https://github.com/kubernetes/website/pull/57012)

**Metadata:**
- Created: 2026-08-16
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.34.0 / 2026-08-16

* [CHANGE] notify: The `reason` label on `alertmanager_notifications_failed_total` now distinguishes `authError` (HTTP 401/403) and `rateLimited` (HTTP 429) from the generic `clientError`. Dashboards/alerts matching `reason="clientError"` for these codes must be updated. #5332
* [FEATURE] Add optional templatable labels to alert routes. #5328
* [FEATURE] eventrecorder: Add inhibit rule names to `inhibition_muted_alert` events. #5315
* [FEATURE] eventrecorder: Add stdout output type. #5311
* ...

🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.34.0)

**Metadata:**
- Version: v0.34.0
- Published: 2026-08-16
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- bc3b72c: Disable resize support in Photon when building with an external e2fs (James Le Cuirot) [#444](https://github.com/containerd/overlaybd/pull/444)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-16
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-17 01:05:53*
