---
title: "Upstream Github - 2026-08-24"
description: "CNCF upstream activity from github"
pubDate: 2026-08-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "kind/bug", "area/test", "sig/storage", "release-note", "size/XXL", "sig/apps", "cncf-cla: yes", "sig/testing", "needs-priority", "needs-triage", "sig/node", "size/M", "needs-ok-to-test", "kind/cleanup", "size/XS", "release-note-none", "do-not-merge/cherry-pick-not-approved", "kind/feature", "sig/instrumentation", "ok-to-test", "area/stable-metrics", "area/apiserver", "sig/api-machinery", "size/L", "do-not-merge/work-in-progress", "approved", "minikube", "lgtm", "area/vertical-pod-autoscaler", "do-not-merge/release-note-label-needed", "kind/documentation", "autoscaler", "do-not-merge/hold", "kube-state-metrics", "issue", "kompose", "language/ko", "area/localization", "website", "size/S", "sig/docs", "language/ru", "node-problem-detector", "containerd", "area/distribution"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10178: VPA recommender: fix checkpoint garbage collection timeout

#### What type of PR is this?

/kind bug

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
/kind regressio...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10178)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141541: Replace VolumeAttachments that refer to a deleted PersistentVolume

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A `VolumeAttachment` is named `csi-<sha256(volumeHandle + driver + nodeName)>` — the PV name does not take part in it — while `spec.source.persistentVolumeName` is immutable. Several PVs can therefore map to one `Vol...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141541)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141539: fix: nodelifecycle: mark pods not ready when node transitions from false to unknown

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
When Kubelet loses connection and a node status transitions to `Ready: Unknown`, `node_lifecycle_controller` invokes `markPodsNotReady()` to set pods assigned to that node to `Ready: False`.
Previously, `markPodsN...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141539)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141538: Fix NodeLifecycleController to mark pods NotReady when transitioning from False to Unknown

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
The NodeLifecycleController uses the `markPodsNotReady` function to mark a node's pods as NotReady when a node transitions from `True` to `Unknown` due to losing connection with the kubelet. However, if the node was pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141538)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141537: [release-1.36] test(utils): bump agnhost image tag to 2.66.1

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Bumps the `Agnhost` image tag to `2.66.1` in `test/utils/image/manifest.go` on the `release-1.36` branch to consume the updated pre-built e2e test image.

This replaces the approach from #141431 (no backporti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141537)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141536: metrics: graduate volume_operation_total_errors to BETA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promotes the `volume_operation_errors_total` metric (in pkg/controller/volume/persistentvolume/metrics/metrics.go) from Alpha to Beta stability, completing the remaining item from #136310 

#### Which iss...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141536)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141535: Verify each resource creates a single storage instance in integration tests

#### What type of PR is this?
/kind cleanup
#### What this PR does / why we need it:
Add an intergration test that counts how many each built-in kube-apiserver resource constructs a storage instcance, by wraping the RESTOptionGetter used during storage construction. This catches regressions where...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141535)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23546: Fix iso build on Fedora

Pack the aarch64 ISO with xorriso -as mkisofs instead of mkisofs. On Fedora, mkisofs is xorriso in genisofs mode and rejects -eltorito-platform=efi. Keep the original mkisofs flags (-eltorito-platform efi) so the ISO layout stays compatible with vfkit. Install xorriso on ISO builders and in the cont...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23546)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10179: Improve RELEASE.md

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Ticks off a few items from https://github.com/kubernetes/autoscaler/issues/10054

This PR does the following:

1. Adds a TOC to RELEASE.md
2. Ensures that the releases runs through all the e2e te...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10179)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10177: Increase logging verbosity in e2e tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

As suggested by Max in https://github.com/kubernetes/autoscaler/pull/10162

This should help debug flakes and test failures.

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10177)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3106: test: repeat the backtracking test input 1024 times, not 8

**What this PR does / why we need it:**

`TestCatastrophicBacktrackTimeout` builds its input like this:

```go
var exp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
exp = strings.Repeat(exp, 2^10)
```

In Go `^` is bitwise XOR, not exponentiation, so `2^10` evaluates to `8`. The input ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3106)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3105: ci: give each job its own Go build cache and cancel superseded PR runs

**What this PR does / why we need it:**

Two independent CI speedups.

**1. The Go cache never hits.**

`setup-go` derives a single cache key from OS + Go version + `go.sum`, so all nine Go jobs in `ci.yml` collide on it. They start together, so all of them miss, all of them race to save, and ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3105)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kompose#2109: [BUG] kompose convert panics on a volume that is only a name and an access mode

### Expected Behavior

`kompose convert` should report a malformed volume entry as an error and exit, the way it already does for other bad volume strings.

### Actual Behavior

It panics with `index out of range [-1]` and prints a Go stack trace. Exit code is 2.

```
panic: runtime error: index out...

🔗 [Link](https://github.com/kubernetes/kompose/issues/2109)

**Metadata:**
- Created: 2026-08-23
- Comments: 1
- State: open

### kubernetes/website#57140: [ko] Translate content/en/docs/concepts/workloads/pods/scheduling-group.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/workloads/pods/scheduling-group.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/workloads/pods/scheduling-group/

**Why is this needed**

This page is not transla...

🔗 [Link](https://github.com/kubernetes/website/issues/57140)

**Metadata:**
- Created: 2026-08-23
- Comments: 1
- State: open

### kubernetes/website#57130: [ko] Update content/ko/docs/concepts/services-networking/dns-pod-service.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/dns-pod-service.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/dns-pod-...

🔗 [Link](https://github.com/kubernetes/website/issues/57130)

**Metadata:**
- Created: 2026-08-23
- Comments: 1
- State: open

### kubernetes/website#57138: [ru] actually main page.

### Description

Update the Russian localization of the Kubernetes concepts overview page to better match the current English source.

This PR synchronizes page metadata with upstream and refines several Russian translations for accuracy, consistency, and readability while preserving the origina...

🔗 [Link](https://github.com/kubernetes/website/pull/57138)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector#1338: Fix log pattern end anchoring

`CompilePattern` previously appended `\z` directly to each configured expression. Because `|` has lower precedence, `oom-kill|Out of memory\z` anchored only the second branch. The first branch could match a retained line again after every subsequent push until that line was overwritten, repeating te...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1338)

**Metadata:**
- Created: 2026-08-23
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14018: Move content delete event to align with image delete events

### What is the problem you're trying to solve

Content delete events are only sent when explicitly deleted, meaning that when GC deletes content an event is never created. The result is that while content create events are created for every created content, there is no matching delete event that is...

🔗 [Link](https://github.com/containerd/containerd/issues/14018)

**Metadata:**
- Created: 2026-08-23
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-24 01:07:32*
