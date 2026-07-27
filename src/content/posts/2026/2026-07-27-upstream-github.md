---
title: "Upstream Github - 2026-07-27"
description: "CNCF upstream activity from github"
pubDate: 2026-07-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "priority/critical-urgent", "sig/network", "kind/failing-test", "needs-triage", "sig/node", "kind/flake", "kind/cleanup", "sig/contributor-experience", "pr", "kind/bug", "area/kubectl", "release-note", "size/M", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "do-not-merge/needs-sig", "area/kubelet", "cncf-cla: no", "do-not-merge/needs-kind", "area/test", "size/XS", "release-note-none", "sig/testing", "area/apiserver", "sig/api-machinery", "size/XL", "kind/feature", "help wanted", "priority/important-soon", "language/en", "triage/accepted", "website", "release", "autoscaler", "area/vertical-pod-autoscaler", "size/L", "approved", "area/cluster-autoscaler", "size/S", "cloud-provider-openstack", "area/testgrid", "sig/scalability", "area/jobs", "area/config", "test-infra", "kubectl", "containerd", "area/runtime"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10062: cleanup unused files

#### What type of PR is this?
/kind cleanup
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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10062)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140951: Failures in `ci-kubernetes-kind-network-nftables-ipv6`

### Which jobs are failing?

ci-kubernetes-kind-network-nftables-ipv6

### Which tests are failing?

`Kubernetes e2e suite: [SynchronizedBeforeSuite]`

### Since when has it been failing?

2026-07-22 14:56:55 +0000 UTC

### Testgrid link

https://testgrid.k8s.io/sig-network-kind#sig-network-kind,%20...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140951)

**Metadata:**
- Created: 2026-07-26
- Comments: 2
- State: open

### kubernetes/kubernetes#140944: flakiness in `ci-node-crio-kubelet-serial`

Please see:
- https://testgrid.k8s.io/sig-node-cri-o#ci-node-crio-kubelet-serial
- https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-node-crio-kubelet-serial

<img width="2804" height="1894" alt="Image" src="https://github.com/user-attachments/assets/5fcbaec0-ce7e-48db-9f47-7d3c7ff92c1c"...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140944)

**Metadata:**
- Created: 2026-07-26
- Comments: 5
- State: open

### kubernetes/kubernetes#140943: Failure cluster [3aa867c5...] flakiness in `ci-kubernetes-e2e-node-canary`

### Failure cluster [3aa867c5ba978edcc4ae](https://go.k8s.io/triage#3aa867c5ba978edcc4ae)

##### Error text:
```
[TIMEDOUT] A suite timeout occurred
In [It] at: k8s.io/kubernetes/test/e2e/common/node/container_probe.go:348 @ 07/13/26 22:24:54.779

This is the Progress Report generated when the suite...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140943)

**Metadata:**
- Created: 2026-07-26
- Comments: 3
- State: open

### kubernetes/kubernetes#140942: Ensure Credential Pulled Images tests still flaking with "pulled record ... never appeared" after #138527/#138642 (kubelet-gce-e2e-swap-ubuntu-serial)


Title
Ensure Credential Pulled Images tests still flaking with "pulled record ... never appeared" after 
#138527/
#138642

Body

Hitting this on kubelet-gce-e2e-swap-ubuntu-serial - pretty sure this is the same flake as 
#136546/
#138527, just came back.

Testgrid: https://testgrid.k8s.io/sig-node-...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140942)

**Metadata:**
- Created: 2026-07-26
- Comments: 2
- State: open

### kubernetes/kubernetes#140940: Remove the retired Go Report Card badge from README

**What happened**

The README still shows a Go Report Card badge. Go Report Card has been sunset — https://goreportcard.com/report/github.com/kubernetes/kubernetes now returns a retirement notice instead of a grade, so the badge no longer links to anything meaningful.

**What you expected to happen*...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140940)

**Metadata:**
- Created: 2026-07-26
- Comments: 1
- State: open

### kubernetes/kubernetes#140950: kubectl: include kuberc aliases in command typo suggestions

kuberc aliases were only registered as cobra subcommands when the typed command name exactly matched the alias, so a mistyped alias never showed up.

Fixes kubernetes/kubectl#1795

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

kuberc aliases were only ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140950)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140948: lifecycle: restrict EvictionRequest responder status on first sync

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

On first sync of `EvictionRequest` / `Eviction` status responders, validation previously allowed progress fields (`startTime`, `heartbeatTime`, `expectedCompletionTime`, `completionTime`, `message`) to be set even wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140948)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140947: kubelet: match node log service units exactly

## What this PR does

Fixes false-positive native-journal detection for Linux kubelet NodeLogQuery requests.

`checkForNativeLogger` obtains the known systemd unit names with `journalctl --field _SYSTEMD_UNIT`. Previously it used a substring comparison against that output. A request for `kubelet...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140947)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140946: Mark long-running node serial tests slow

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The `ci-node-crio-kubelet-serial` Prow artifact recorded three individual tests taking longer than the five-minute target:

| Test | Recorded duration |
|---|---:|
| `ImageGarbageCollect` — should GC un...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140946)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140945: kubelet: fix eviction-max-pod-grace-period to defer to pod value when negative

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The `eviction-max-pod-grace-period` kubelet parameter states in its documentation: *"If negative, defer to pod specified value"*. However, when set to a negative value (e.g. `-1`), the kubelet was incorrectly forward...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140945)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140941: Remove retired Go Report Card badge from README

**What type of PR is this?**

/kind cleanup

**What this PR does / why we need it**

Go Report Card has been sunset — the badge and report URLs now serve a retirement notice instead of a grade, so the badge in README.md links nowhere useful. This removes it.

**Which issue(s) this PR is related to**...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140941)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140939: apiserver: build /openapi/v2 lazily

This PR adds an alpha feature gate, `OpenAPIV2LazyBuild` (default off). Today the full OpenAPI v2 spec is built eagerly at apiserver startup and retained for the life of the process even if `/openapi/v2` is never requested. With the gate enabled, the spec is built on first request instead  — at ever...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140939)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56615: (1.37) Move resource managers page to new section

### What should change?

Making sure to **work on the _dev-1.37_ branch**, move `/docs/concepts/workloads/resource-managers/` to `/docs/concepts/resource-management/resource-managers/`.

We should also edit the redirects source file (see [`static/_redirects.base`](https://github.com/kubernetes/websi...

🔗 [Link](https://github.com/kubernetes/website/issues/56615)

**Metadata:**
- Created: 2026-07-26
- Comments: 2
- State: open

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.11.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.11.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.11.0
- Published: 2026-07-26
- Prerelease: No

### kubernetes/autoscaler: vertical-pod-autoscaler-1.7.1

## Changes by Kind

### Regression

- Fixed the VPA recommender ignoring the --history-cpu-metric and --history-memory-metric flags when using the Prometheus history provider, which caused the historical queries to omit the configured metric name. ([#9753](https://github.com/kubernetes/autoscaler/pull/9753), [@ulascansenturk](https://github.com/ulascansenturk))
- Fixed VPA checkpoint loading to prevent recommendations from restarting from scratch ([#10052](https://github.com/kubernetes/auto...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.7.1)

**Metadata:**
- Version: vertical-pod-autoscaler-1.7.1
- Published: 2026-07-26
- Prerelease: No

### kubernetes/autoscaler#10061: Use errors.Is for cloudprovider.ErrNotImplemented comparisons

<!--  Thanks for sending a pull request!  Here are some tips for you:
1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/dev...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10061)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3152: [manila-csi-plugin, cinder-csi-plugin]: Allow cluster-id to be populated from configmap / secret

Follow up from https://github.com/kubernetes/cloud-provider-openstack/pull/3069 which got closed when I rebased and I can not reopen now.

**What this PR does / why we need it**:

Adds supports for loading cluster_id from a secret / configmap in cluster. If clusterID is not set then CLUSTER_NAME...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3152)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37549: drop unneeded scale jobs

We are adopting an updated experimental approach, and the jobs are very old.

Commenting on the networking inline.



🔗 [Link](https://github.com/kubernetes/test-infra/pull/37549)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37548: fix broken agent-sandbox scale jobs and amend their frequencies

The jobs are launching correctly now, but there is something wrong in clusterloader2 that the team needs to fix. Please fix it ASAP.

/cc @justinsb @YahiaBadr @Qqkyu 

Also, please read the updated README.md in the scalability repo. You can run one 100-node job every day, so I amended the two ex...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37548)

**Metadata:**
- Created: 2026-07-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1866: Add --skip-logs and --skip-events flags to kubectl cluster-info dump

### What would you like to be added?

Add two flags to `kubectl cluster-info dump`:

- `--skip-logs`: Do not retrieve pod logs.
- `--skip-events`: Do not retrieve Events.

Both flags would default to `false`, preserving existing behavior.

Examples:

kubectl cluster-info dump --skip-logs
kubectl clu...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1866)

**Metadata:**
- Created: 2026-07-26
- Comments: 1
- State: open

### containerd/containerd#13853: internal/oom: Stop never removes the watcher from the map, leaking watchers and burning container IDs

## Description

`internal/oom`'s `oomWatchers.Stop` stops a container's watcher but never removes it from `oomWatchers.watchers`:

```go
func (ows *oomWatchers) Stop(cid string) error {
	ows.mu.Lock()
	w, exist := ows.watchers[cid]
	ows.mu.Unlock()

	if !exist {
		return nil
	}
	return w.stop()
}
``...

🔗 [Link](https://github.com/containerd/containerd/issues/13853)

**Metadata:**
- Created: 2026-07-26
- Comments: 2
- State: open


---

*This content was automatically collected on 2026-07-27 02:40:21*
