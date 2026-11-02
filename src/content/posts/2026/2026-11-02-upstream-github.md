---
title: "Upstream Github - 2026-11-02"
description: "CNCF upstream activity from github"
pubDate: 2026-11-02
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/apps", "needs-triage", "sig/node", "kind/cleanup", "sig/cli", "pr", "sig/scheduling", "size/XXL", "kind/feature", "release-note-none", "approved", "cncf-cla: yes", "do-not-merge/work-in-progress", "needs-priority", "area/kubelet", "release-note", "size/S", "needs-ok-to-test", "area/test", "priority/important-soon", "sig/network", "lgtm", "size/L", "kind/flake", "sig/testing", "do-not-merge/hold", "triage/accepted", "area/kube-proxy", "area/apiserver", "sig/api-machinery", "size/M", "kind/documentation", "size/XS", "do-not-merge/release-note-label-needed", "do-not-merge/needs-sig", "area/kubectl", "ok-to-test", "kind/api-change", "sig/auth", "area/code-generation", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "release", "sig/docs", "language/zh", "area/localization", "website", "language/ja", "kube-state-metrics", "area/cluster-autoscaler", "autoscaler", "area/addon-resizer", "area/vertical-pod-autoscaler", "kind/dependency"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143686: Poc nomination on requeue


#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Proof of concept for an alternative NominationExtensions design for DRA
preemption (KEP-5690), discussed in the review of #143456. Not meant to be
merged as is; the DRA plugin changes from #143456 are not rebase...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143686)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143673: KEP-5714: cgroup namespaces

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143673)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143669: Promote ImageVolumeWithDigest to beta

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promotes the `ImageVolumeWithDigest` feature gate to beta and enables it by default in v1.38.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5365

#### Special...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143669)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3190: Adding or deleting any CRD rebuilds every store when Custom Resource State is enabled

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately see https://github.com/kubernetes/kube-state-metrics/blob/mai...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3190)

**Metadata:**
- Created: 2026-11-01
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#143683: CronJob: adopt unfinished owned Jobs missing from Status.Active?

### What happened?

Opening this for sig-apps discussion around unfinished Jobs owned by a CronJob that are missing from `status.active`.

Today, when sync finds such a Job, it only emits `UnexpectedJob` and does not add it to Active. The comment on that branch already says this can happen if we cra...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143683)

**Metadata:**
- Created: 2026-11-01
- Comments: 1
- State: open

### kubernetes/kubernetes#143671: kubelet: static pod URL source goroutine can never be stopped

### What happened?

`NewSourceURL` in `pkg/kubelet/config/http.go` starts a polling goroutine that can never be stopped:

```go
go wait.Until(func() { config.run(logger) }, period, wait.NeverStop)
```

It also sends on the unbuffered `updates` channel in three places in `extractFromURL` (empty data,...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143671)

**Metadata:**
- Created: 2026-11-01
- Comments: 1
- State: open

### kubernetes/kubernetes#143660: [SIG-CLI] Migrate legacy klog.Errorf to structured logging in kubectl describe

### Description
In `staging/src/k8s.io/kubectl/pkg/describe/describe.go`, error logging calls still use legacy unstructured `klog.Errorf` instead of structured logging (`klog.ErrorS`):
- Line 760: `klog.Errorf("Unable to construct reference to '%#v': %v", pod, err)`
- Line 3467: `klog.Errorf("Unable...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143660)

**Metadata:**
- Created: 2026-11-01
- Comments: 1
- State: open

### kubernetes/kubernetes#143685: kubelet: preserve scanner errors in multiline env values

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

Preserve the scanner error when reading a continuation line of a single-quoted kubelet environment-file value. An oversized continuation line currently reports an unclosed quote instead of the underlying re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143685)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143684: test/e2e: ensure Serial tests properly clean up the pods they create

#### What type of PR is this?
/kind flake
/kind cleanup

#### What this PR does / why we need it:
Ensures `[Serial]` e2e tests explicitly delete their test pods with `e2epod.DeletePodWithWait` / `e2epod.DeletePodsWithWait` before completing. This is intended to fix the flaky pod resize tests as...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143684)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143682: kube-proxy: replace pkg/proxy/config with client-go typed informer handlers

#### What type of PR is this?

/kind cleanup
/sig network
/area kube-proxy

#### What this PR does / why we need it:

`pkg/proxy/config` dates back to the pre-shared-informer era where configuration could originate from multiple independent channels and be combined into a union.

This PR retires `pk...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143682)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143681: Test watch closure

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143681)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143679: docs: replace dead case-studies link in README

/kind documentation

## What type of PR is this?

- [ ] API Change
- [ ] Bug
- [ ] Cleanup
- [x] Documentation
- [ ] Feature
- [ ] Flag
- [ ] Other

## What this PR does / why we need it

The README's Adopters section linked to `https://kubernetes.io/case-studies/`, which returns **404** — the case-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143679)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143677: Add tests for #77988

Add tests to reproduce https://github.com/kubernetes/kubernetes/issues/77988

/kind cleanup

```release-note
NONE
```

/assign @liggitt

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143677)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143675: kubectl: close files written by cluster-info dump

#### What type of PR is this?

/kind bug

/sig cli
/area kubectl

#### What this PR does / why we need it:

`kubectl cluster-info dump --output-directory=<dir>` opens one file per resource type per namespace, plus one log file per pod, through `setupOutputWriter`. None of those files were ever close...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143675)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143674: scheduler: simplify SchedulePod return

#### What type of PR is this?

/kind cleanup

/sig scheduling


#### What this PR does / why we need it:

Return nil explicitly at the end of SchedulePod, since err is always nil at that point.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143674)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143672: kubelet: stop the static pod URL source when its context is canceled

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`NewSourceURL` polls the static pod manifest URL with `wait.Until(..., wait.NeverStop)`, so its goroutine can never exit. It also sends on the unbuffered `updates` channel with plain sends, so once nothing ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143672)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143670: Test that audit policy matches the original user, not the impersonated one

#### What type of PR is this?

/kind cleanup
/sig auth

#### What this PR does / why we need it:

Adds an integration test that audit policy rules are matched against the authenticated user, not the impersonated one.

Audit policies often drop requests from noisy system users and groups, such as kub...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143670)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143668: kubelet: stop the static pod file source when its context is canceled

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`NewSourceFile` starts goroutines that can never exit. Every update is sent on an unbuffered channel, so once nothing reads that channel anymore, the list loop and the inotify watcher block forever (`file.g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143668)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143661: Migrate legacy klog.Errorf to structured logging in kubectl describe

**What type of PR is this?**
/kind cleanup
/sig cli

**What this PR does / why we need it**:
Migrate legacy unstructured `klog.Errorf` calls in `staging/src/k8s.io/kubectl/pkg/describe/describe.go` to structured logging (`klog.ErrorS` with `klog.KObj`) in accordance with Kubernetes structured loggin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143661)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4598: Bump google.golang.org/api from 0.309.0 to 0.310.0

Bumps [google.golang.org/api](https://github.com/googleapis/google-api-go-client) from 0.309.0 to 0.310.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/googleapis/google-api-go-client/releases">google.golang.org/api's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/release/pull/4598)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4595: Remove kubelet >=1.36 dependency on cni

Kubernetes doesn't require the special "kubernetes-cni" packaging
anymore, it is now up to the CRI container runtime to provide CNI.

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removing the dependency on `kubernetes-cni` fixes the installation pr...

🔗 [Link](https://github.com/kubernetes/release/pull/4595)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58589: [zh] sync extended-resource-node quota-memory-cpu-namespace memory-manager

🔗 [Link](https://github.com/kubernetes/website/pull/58589)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58564: [ja] Fix some misspellings of "Kubernetes" in `concept/`

### Description

Fix some misspellings of "Kubernetes" in three files of the Japanese localization.

```diff
@@ content/ja/docs/concepts/cluster-administration/node-autoscaling.md line 166 @@ 
-   Karpenterの場合、KuberentesプロジェクトはKarpenterをライブラリとして公開しており、…
+   Karpenterの場合、KubernetesプロジェクトはKarpenterをライ...

🔗 [Link](https://github.com/kubernetes/website/pull/58564)

**Metadata:**
- Created: 2026-11-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10603: chore(ca): set machineType: E2_HIGHCPU_8 in cloudbuild.yaml to prevent 1h build timeouts

Currently `cluster-autoscaler/cloudbuild.yaml` runs on the default 1-vCPU Cloud Build machine (`e2-medium`), causing `post-autoscaler-push-cluster-autoscaler-images` to hit the 3600s timeout while compiling the third architecture (`s390x`) on 14 of the last 15 runs ([Prow job history](https://prow.k...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10603)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10602: [cluster-autoscaler-release-1.37] chore(ca): migrate staging registry to k8s-staging-images

Backports the `cluster-autoscaler/{Makefile,cloudbuild.yaml}` staging registry migration from #10559 to `cluster-autoscaler-release-1.37` so `make release` pushes release images directly to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling`.

Ref: https://github.com/kubernetes/k8s.io/issues...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10602)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10601: [cluster-autoscaler-release-1.36] chore(ca): migrate staging registry to k8s-staging-images

Backports the `cluster-autoscaler/{Makefile,cloudbuild.yaml}` staging registry migration from #10559 to `cluster-autoscaler-release-1.36` so `make release` pushes release images directly to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling`.

Ref: https://github.com/kubernetes/k8s.io/issues...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10601)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10600: [cluster-autoscaler-release-1.35] chore(ca): migrate staging registry to k8s-staging-images

Backports the `cluster-autoscaler/{Makefile,cloudbuild.yaml}` staging registry migration from #10559 to `cluster-autoscaler-release-1.35` so `make release` pushes release images directly to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling`.

Ref: https://github.com/kubernetes/k8s.io/issues...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10600)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10599: [cluster-autoscaler-release-1.34] chore(ca): migrate staging registry to k8s-staging-images

Backports the `cluster-autoscaler/{Makefile,cloudbuild.yaml}` staging registry migration from #10559 to `cluster-autoscaler-release-1.34` so `make release` pushes release images directly to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling`.

Ref: https://github.com/kubernetes/k8s.io/issues...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10599)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10598: [addon-resizer-release-1.8] chore(addon-resizer): migrate staging registry to k8s-staging-images

Cherry-pick of #10579 to `addon-resizer-release-1.8` so `post-autoscaler-push-addon-resizer-images` pushes to `us-central1-docker.pkg.dev/k8s-staging-images/autoscaling` using `autoscaling-sa`.

/kind cleanup
/area addon-resizer
/cc @adrianmoisey @jackfrancis @omerap12

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10598)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10597: [VPA] Bump go deps (master)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [github.com/go-jose/go-jose/v4](https://redirect.github.com/go-jose/go-jose) | `v4.1.6` → `v4.1.7` ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10597)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10596: [VPA] Bump go tools (master)

This PR contains the following updates:

| Package | Type | Update | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|---|---|
| [github.com/gomarkdown/markdown](https://redirect.github.com/gomarkdown/mar...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10596)

**Metadata:**
- Created: 2026-11-02
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-02 04:19:51*
