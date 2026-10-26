---
title: "Upstream Github - 2026-10-26"
description: "CNCF upstream activity from github"
pubDate: 2026-10-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/release", "needs-triage", "pr", "area/kubelet", "kind/cleanup", "sig/node", "release-note", "size/M", "kind/api-change", "cncf-cla: yes", "needs-ok-to-test", "area/code-generation", "needs-priority", "size/S", "area/kubectl", "approved", "sig/cli", "kind/documentation", "size/XS", "release-note-none", "cncf-cla: no", "sig/architecture", "sig/cluster-lifecycle", "area/kubeadm", "ok-to-test", "area/apiserver", "sig/api-machinery", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "area/test", "sig/apps", "sig/testing", "do-not-merge/hold", "wg/workload-aware-scheduling", "sig/scheduling", "size/XL", "size/L", "kind/feature", "wg/device-management", "do-not-merge/work-in-progress", "minikube", "area/balancer", "autoscaler", "area/vertical-pod-autoscaler", "area/provider/huaweicloud", "prometheus", "release", "snmp_exporter", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143392: kube-apiserver image cannot run with all capabilities dropped because of setcap cap_net_bind_service on the binary

#### What happened?

The `registry.k8s.io/kube-apiserver` image cannot be run with all Linux capabilities dropped, even as a non-root user. `exec` fails before the process starts:

```
$ docker run --rm --user 65532 --cap-drop ALL --security-opt no-new-privileges \
    --entrypoint /usr/local/bin/ku...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143392)

**Metadata:**
- Created: 2026-10-25
- Comments: 3
- State: open

### kubernetes/kubernetes#143396: kubectl: remove OpenAPI v2 fallback in explain

#### What type of PR is this?

/kind cleanup
/sig cli

#### What this PR does / why we need it:

- `kubectl explain` no longer falls back to the deprecated `/openapi/v2` endpoint when `/openapi/v3` fails; the v3 error is returned.
- `--output=plaintext-openapiv2` prints a deprecation warning. It wil...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143396)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143387: KEP-5491: Adds integration and e2e test for List Type Attributes

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143387)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23939: kicbase: Prepare for updating go to 1.27.3

We must merge this before we can update go to 1.27.3 (#23938). The issue is that kicbase always use the source from main (security feature), so it uses GO_VERSION from this workflow (1.26.5) when building source from a forked PR with newer go version (e.g. 1.27.3) - which does not work.

```
+ en...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23939)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10500: set balancer deprecation



<!-- This is an auto-generated comment: release notes by coderabbit.ai -->

<!-- coderabbit-ai-generated:v1 -->

## Summary by CodeRabbit

* **Documentation**
  * Balancer is deprecated and is planned for removal after Kubernetes 1.38. No new features or bug fixes will be accepted. Users are advis...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10500)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10498: Add AEP for node-scoped VPAs

#### What type of PR is this?
/kind api-change
/kind documentation
/kind feature
<!--
Add one of the following kinds:
/kind bug
/kind dependency
/kind cleanup
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10498)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### prometheus/snmp_exporter: 0.31.0 / 2026-10-25

BREAKING CHANGES:

Regenerating snmp.yml with the generator now maps enum lookup columns to
human-readable string labels (e.g. `"ioMemory"` instead of `"2"`) by default.
Dashboards, alerts, or recording rules that match on numeric enum label values
may need updating. Opt out per metric/lookup with `type: gauge`.

The generator now drops tables whose index type cannot be rendered as a label
(e.g. DateAndTime, Bits) with a warning, and fails when a chained lookup
promotes such a type to a...

🔗 [Link](https://github.com/prometheus/snmp_exporter/releases/tag/v0.31.0)

**Metadata:**
- Version: v0.31.0
- Published: 2026-10-25
- Prerelease: No

## Updates

### kubernetes/kubernetes#143399: pkg/features: remove GA feature gate TopologyManagerPolicyOptions

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA `TopologyManagerPolicyOptions` feature gate.

The gate graduated to GA and was locked to default in 1.33. Under the three-release emulation window (`minRemovalVer = specVer.AddMinor(3)`), 1.38 is t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143399)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143398: pkg/features: remove GA feature gate ImageMaximumGCAge

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA `ImageMaximumGCAge` feature gate.

The gate graduated to GA and was locked to default in 1.35. Under the three-release emulation window (`minRemovalVer = specVer.AddMinor(3)`), 1.38 is the first re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143398)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143397: pkg/features: remove GA feature gate CPUManagerPolicyOptions

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Removes the GA `CPUManagerPolicyOptions` feature gate.

The gate graduated to GA and was locked to default in 1.33. Under the three-release emulation window (`minRemovalVer = specVer.AddMinor(3)`), 1.38 is the fi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143397)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143395: Add missing article in README governance section

#### What type of PR is this?

/kind documentation
/sig architecture

#### What this PR does / why we need it:

Adds the missing article in the README Governance section so the sentence reads "The Kubernetes project is governed...".

#### Which issue(s) this PR is related to:

Related to kubernetes/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143395)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143394: kubectl: honor kuberc defaults alongside attached shorthand values

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`searchInArgs` walked the shorthand it was looking up, not the characters of the argument. `-nmonitoring` then counted as `-i`, because the value contains `i`, and a kuberc default for `interactive` never got applied...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143394)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143393: Remove NET_BIND_SERVICE file capability from kube-apiserver image

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The kube-apiserver image sets `cap_net_bind_service=+ep` on the binary during
the image build. If a container drops all capabilities, Linux refuses to
execute the binary because `NET_BIND_SERVICE` is no longer in the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143393)

**Metadata:**
- Created: 2026-10-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143391: Fix hugepage limit resets during container CPU and memory resizing

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143391)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143390: Dereference of NULL

Problem: Potential NULL pointer dereference when accessing `options.SendInitialEvents` in `Store.Watch`.
Solution: Initialize `sendInitialEvents` to nil and assign it only when `options` is not NULL.
Signed-off-by: Artemii Voronin [a.voronin@fobos-nt.ru](mailto:a.voronin@fobos-nt.ru)

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143390)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143389: Fix Pod creation failures for dotted Job names under WorkloadWithJob

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143389)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143388: scheduler_perf: create pods and PodGroups from the group ops

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

Follow-up from #141706. createPodGroups now has an optional `pods` (a createPods spec) and `podsPerGroup`/`podsPerGroupParam`, and createCompositePodGroups has an opt...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143388)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143386: client-go: jitter the wait after a Retry-After response

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

client-go sleeps exactly the `Retry-After` value before retrying a 429 or 5xx. The API server computes one `Retry-After` per second and sends it to every request it rejects in that second, so c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143386)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23936: build: Fix e2e target dependencies

`out/e2e-%` depended on out/minikube-%, but go test -c never reads that file. Make could not build the two targets at the same time, and a test-only change did not rebuild out/e2e.
    
Depend on the sources the recipe compiles, and name the minikube target in the workflows that need both binaries...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23936)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10497: [Cluster autoscaler release 1.28] fix huaweicloud provider

#### What type of PR is this?

/kind bug


#### What this PR does / why we need it:
This PR fixes multiple critical issues in the Huawei Cloud (Huaweicloud) cloud provider for Kubernetes Cluster Autoscaler:

1.Fixes up-to-30-minute scale-up blocking: Replaced the scaling-policy-based Increas...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10497)

**Metadata:**
- Created: 2026-10-25
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14461: GC scheduler can miss deletion notifications during backend cleanup

### Description

While testing a proxy snapshotter, I noticed that some deleted snapshots weren't cleaned up until another delete triggered GC.

The scheduler records lastCollection after GC returns. Deletes that finish during backend cleanup get treated as already collected, even if the backend sca...

🔗 [Link](https://github.com/containerd/containerd/issues/14461)

**Metadata:**
- Created: 2026-10-25
- Comments: 0
- State: open

### containerd/overlaybd: Development Build

## Commits
- 1fe0ea1: Revert "ext4: use a 128 MiB buffer with 4 KiB blocks (#467)" (#472) (ZAwei) [#472](https://github.com/containerd/overlaybd/pull/472)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-10-25
- Prerelease: Yes


---

*This content was automatically collected on 2026-10-26 03:08:39*
