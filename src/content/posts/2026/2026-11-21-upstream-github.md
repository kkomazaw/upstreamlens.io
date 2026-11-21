---
title: "Upstream Github - 2026-11-21"
description: "CNCF upstream activity from github"
pubDate: 2026-11-21
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "needs-sig", "needs-triage", "kind/bug", "sig/node", "sig/scalability", "pr", "area/test", "size/XS", "kind/flake", "release-note-none", "approved", "cncf-cla: yes", "sig/testing", "do-not-merge/work-in-progress", "needs-priority", "kind/cleanup", "size/S", "sig/architecture", "area/code-organization", "area/apiserver", "sig/api-machinery", "size/M", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "area/kubelet", "release-note", "size/L", "cncf-cla: no", "sig/scheduling", "size/XL", "kind/feature", "wg/device-management", "do-not-merge/hold", "kind/dependency", "lgtm", "triage/accepted", "priority/important-soon", "needs-rebase", "size/XXL", "area/kubectl", "sig/cli", "area/cloudprovider", "sig/cloud-provider", "sig/multicluster", "sig/network", "committee/steering", "ok-to-test", "area/annual-reports", "community", "kubectl", "area/addon-resizer", "autoscaler", "area/vertical-pod-autoscaler", "area/cluster-autoscaler", "area/provider/azure", "do-not-merge/needs-area", "area/provider/cluster-api"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10704: VPA: dont rebuild label keys if labels did not change

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10704)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10703: VPA: Clean up label set maps after GC.

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->
/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10703)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10702: [cluster-autoscaler-release-1.34] fix: treat notfound VMSS as size=0 for planning

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10702)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10701: [cluster-autoscaler-release-1.35] fix: treat notfound VMSS as size=0 for planning

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10701)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10700: [cluster-autoscaler-release-1.36] fix: treat notfound VMSS as size=0 for planning

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10700)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10699: [cluster-autoscaler-release-1.37] fix: treat notfound VMSS as size=0 for planning

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10699)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10698: addon-resizer: document that 1.8 is frozen for dev

#### What type of PR is this?

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
/kind failing-test
/kind flake
/kind regression
-->

/ki...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10698)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144383: kubeadm reset deletes etcd data before removing containers, so CNI DELs that need the API server stall the reset

## Summary

`kubeadm reset` runs its phases in this order (v1.37.2, `cmd/kubeadm/app/cmd/reset.go:242-244`): Preflight → RemoveETCDMember → CleanupNode. RemoveETCDMember deletes the contents of the etcd data directory (`removeetcdmember.go:69-72`, prints `[reset] Deleted contents of the etcd data di...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144383)

**Metadata:**
- Created: 2026-11-20
- Comments: 2
- State: open

### kubernetes/kubernetes#144377: kubelet: `status.resources.limits` is the sum of set container limits even when a container has no limit, but the pod is actually unlimited

### What happened?

On v1.37.0, for a pod where only some containers declare limits (and no pod-level
resources are set), the kubelet reports `status.resources.limits` as the sum of the
limits that are set. The pod cgroup for the same pod is unlimited (`cpu.max=max`,
`memory.max=max`), because one c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144377)

**Metadata:**
- Created: 2026-11-20
- Comments: 4
- State: open

### kubernetes/kubernetes#144371: grpc-go>=1.77 causes decreased K8s>=1.36 watch throughput

### What happened?

grpc-go equivalent issue: https://github.com/grpc/grpc-go/issues/9626

General description of the problem: grpc uses buckets of buffers, with the last threshold being 1MiB. Above that, the buffer can be arbitrarily large below grpc's message limit. Starting with the faulty PR, th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144371)

**Metadata:**
- Created: 2026-11-20
- Comments: 6
- State: open

### kubernetes/kubernetes#144369: The launched pod failed to correctly identify the serviceAccount

### What happened?

The Argo-Workflow tasks are running in my cluster, and occasionally these tasks will report the error "invalid configuration: no configuration has been provided, try setting KUBERNETES_MASTER environment variable".

I suspect that the serviceAccount is not properly mounted in the...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144369)

**Metadata:**
- Created: 2026-11-20
- Comments: 2
- State: open

### kubernetes/kubernetes#144388: [WIP] e2e_node: wait for the container of the updated mirror pod

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The three `MirrorPod (Pod Generation) mirror pod updates` specs fail in their `AfterEach` with `mirror pod ... still exists` after 120s. Since 2026-11-17 04:06Z this failed 6 of 91 runs of [`ci-node-crio-...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144388)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144387: Mark go.opentelemetry.io/auto/sdk as unwanted

#### What type of PR is this?

/kind cleanup
/sig architecture
/area code-organization

#### What this PR does / why we need it:

[open-telemetry/opentelemetry-go-instrumentation](https://github.com/open-telemetry/opentelemetry-go-instrumentation), the repository of `go.opentelemetry.io/auto/sdk`, w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144387)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144386: apiserver: validate TLS cert and key file pairing

### What type of PR is this?
/kind bug
/sig api-machinery

### What this PR does / why we need it:
Passing only one of --tls-cert-file and --tls-private-key-file currently fails later during startup with open : no such file or directory. Reject the mismatched pair in SecureServingOptions.Validate so...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144386)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144384: kubelet: open fileKeyRef env files with OpenInRoot

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When resolving `env.valueFrom.fileKeyRef` (EnvFiles), kubelet used `securejoin.SecureJoin` to build an absolute path, then `envutil.ParseEnv` called `os.Open` on that path. Because the open re-walks the filesystem, a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144384)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144382: DRA: compile node selector

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This improves performance when node selectors are used in ResourceSlices.

#### Which issue(s) this PR is related to:
<!--
Please link relevant issues to help with tracking.

To automatically close the linked iss...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144382)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144381: test: use promoted agnhost 2.67.0 image

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144381)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144380: kubelet: clear stale pod limits after unlimited cgroup read

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144380)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144379: e2e_node: retry the removal of the kubepods cgroup in the Node Allocatable specs

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

The Node Allocatable spec stops the kubelet and destroys the `kubepods` cgroup. When a container of an earlier spec is still in it, systemd needs up to 90s to remove the slice, and `Destroy` gives up afte...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144379)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144378: e2e_node: do not leave the kubelet stopped when a spec fails

#### What type of PR is this?

/kind flake
/sig node

#### What this PR does / why we need it:

In the node serial jobs, two specs stop the kubelet and fail before they start it again. The kubelet stays down, and each later spec on the host fails after about 5 minutes. Triage shows the result as man...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144378)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144376: [draft] e2e tests verifying transactional mechanism applied to exclusive CPU resize

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
TBD

#### Which issue(s) this PR is related to:

Implements: [#143713](https://github.com/kubernetes/kubernetes/issues/143713)

#### Special notes for your reviewer:

#### Does this PR introduce a use...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144376)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144375: kubectl: keep generated kuberc output parseable

/kind bug
/sig cli

#### What this PR does / why we need it

When `kubectl kuberc view` offers to create a missing default configuration, the prompt and save confirmation are written to stdout. If the user accepts, those messages appear before the generated configuration and make the JSON or YAML ou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144375)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144374: scheduler: support multi-snapshot usage in FrameworkComponents and NewFrameworkMap

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Out-of-tree consumers of `pkg/scheduler` (such as `kubernetes-sigs/scheduler-library`) construct one long-lived `FrameworkComponents` and call `NewFrameworkMap` repeatedly for independent in-memory snapshots, wit...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144374)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144373: kubectl create service nodeport/loadbalancer - show --tcp as required in "Usage:"

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The "Usage:" lines for `kubectl create service nodeport` and `kubectl create service loadbalancer` put `--tcp` in brackets, which marks it as optional. Both commands fail without it with "error: at least one tcp port...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144373)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144372: apiserver: add --watch-cache-consistency-check-period

What type of PR is this?
/kind feature
/sig api-machinery
/area apiserver

What this PR does / why we need it:
Allows raising the watch cache consistency check interval without disabling DetectCacheInconsistency. The default remains 5m.

Adds the --watch-cache-consistency-check-period apiser...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144372)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144370: kubelet: stop reporting cAdvisor container info for pods unknown to the kubelet

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`/metrics/cadvisor` reports a series for every cgroup that still exists under `kubepods`, with pod labels read from metadata baked into the cgroup. When a pod is deleted or rescheduled while its cgroup cannot b...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144370)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144368: cloud-provider: validate --concurrent-node-syncs and --concurrent-node-status-updates


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144368)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9270: sig-network: add Gateway for AI and Agents (GAIA) meeting

Adds the bi-weekly **Gateway for AI and Agents (GAIA) Meeting** (Thursdays at 11:00 PT) under `sig-network` taking over WG AI slot.

/sig network
/committee steering
/cc @bowei @guicassolato @mikezappa87

🔗 [Link](https://github.com/kubernetes/community/pull/9270)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1911: kubectl create service nodeport/loadbalancer - "Usage:" marks required --tcp as optional

**What happened**:

The "Usage:" line for `kubectl create service nodeport` and `kubectl create service loadbalancer` puts `--tcp` in brackets:

```
kubectl create service nodeport NAME [--tcp=port:targetPort] [--dry-run=server|client|none] [options]
kubectl create service loadbalancer NAME [--tcp=p...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1911)

**Metadata:**
- Created: 2026-11-20
- Comments: 1
- State: open

### kubernetes/autoscaler#10696: addon-resizer release 1.9.0

First 1.9 release, from the `master` branch: https://github.com/kubernetes/autoscaler/tree/master/addon-resizer

Related to: https://github.com/kubernetes/autoscaler/issues/9675

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10696)

**Metadata:**
- Created: 2026-11-20
- Comments: 5
- State: open

### kubernetes/autoscaler#10697: Fix CAPI provider scale-down when current replicas exceed maxSize

#### What type of PR is this?

/kind bug
/area provider/cluster-api

#### What this PR does / why we need it:

With the Cluster API provider, lowering the `cluster.x-k8s.io/cluster-api-autoscaler-node-group-max-size` annotation below a node group's current replica count deadlocks scale-down.

`Delet...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10697)

**Metadata:**
- Created: 2026-11-20
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-21 05:35:06*
