---
title: "Upstream Github - 2026-11-12"
description: "CNCF upstream activity from github"
pubDate: 2026-11-12
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/XS", "lgtm", "language/en", "website", "issue", "kind/bug", "priority/important-soon", "area/kubelet", "sig/node", "triage/accepted", "kind/flake", "sig/cli", "needs-triage", "area/kubectl", "release-note", "size/M", "needs-ok-to-test", "needs-priority", "sig/scheduling", "size/L", "wg/device-management", "kind/cleanup", "area/apiserver", "sig/api-machinery", "release-note-none", "approved", "size/XL", "sig/auth", "cncf-cla: no", "do-not-merge/work-in-progress", "sig/etcd", "area/test", "sig/instrumentation", "sig/testing", "area/e2e-test-framework", "sig/storage", "ok-to-test", "size/XXL", "kind/feature", "do-not-merge/hold", "size/S", "kind/failing-test", "sig/architecture", "area/conformance", "sig/network", "sig/apps", "kind/regression", "area/cloudprovider", "sig/cloud-provider", "area/kube-proxy", "kind/ux", "minikube", "kops", "area/vertical-pod-autoscaler", "autoscaler", "area/cluster-autoscaler", "area/provider/azure", "area/provider/aws", "do-not-merge/release-note-label-needed", "area/provider/digitalocean", "kind/kep", "enhancements", "perf-tests", "prometheus", "release", "client_rust"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144068: test/integration: drop stale extensions/v1beta1 runtime-config entries

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`TestStorageVersionBootstrap` enabled `extensions/v1beta1` deployments, daemonsets,
replicasets, podsecuritypolicies and networkpolicies via `--runtime-config`. These stopped
being served in 1.16 and have no REST...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144068)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144067: e2e/storage: remove leftover PodSecurityPolicy RBAC bindings


#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

PodSecurityPolicy was removed in 1.25 and the e2e framework no longer creates the
`e2e-test-privileged-psp` ClusterRole (removed in 410ac59c0da). The CSI storage test
manifests still created ClusterRoleBindings ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144067)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144065: scheduler: framework support for DRA preemption (KEP-5690)

#### What type of PR is this?

/kind feature
/sig scheduling

#### What this PR does / why we need it:

Framework-side support for preempting pods that use DRA devices (KEP-5690). Everything is behind the alpha `DRAPreemption` feature gate. Without the gate, behavior and API calls are unchanged.

DR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144065)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144062: Graduate CRIListStreaming to beta in v1.38

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

Graduates `CRIListStreaming` to beta in Kubernetes v1.38 and enables it by default.

#### Which issue(s) this PR is related to:

KEP: https://github.com/kubernetes/enhancements/issues/5825
B...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144062)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10676: Add DerekFrank and Ignoramuss to AWS cloudprovider OWNERS and move gjtempleton to emeritus



#### What type of PR is this?

<!--
Add one of the following kinds:
/kind bug
/kind dependency

/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10676)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6506: KEP-5055: document explicit all field on DeviceTaintSelector

- One-line PR description: Document the `all: true` marker on DeviceTaintSelector and the empty-selector warning in the KEP-5055 README and Implementation History.
- Issue link: https://github.com/kubernetes/enhancements/issues/5055
- Other comments:
  Follow-up to https://github.com/kubernetes/k...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6506)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/website#59137: Document all: true to select all devices in DeviceTaintRule selectors

### Description

Documents the explicit `all: true` marker on the DeviceTaintRule device selector, added in Kubernetes 1.38, on the device taints page. It also notes that `all` cannot be combined with `driver`, `pool` or `device`, that `all: false` is rejected, and that an empty selector is still ac...

🔗 [Link](https://github.com/kubernetes/website/pull/59137)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144075: Kubelet doesn't reconcile partial failures configuring pod cgroups

/kind bug

### Problem

Kubelet creates the pod cgroup directory and configures it in 2 separate steps. Failures during cgroup configuration are only logged, and subsequent SyncPod iterations only check for the existence of the cgroup, so Kubelet never reapplies the configuration.

<details><summary...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144075)

**Metadata:**
- Created: 2026-11-12
- Comments: 2
- State: open

### kubernetes/kubernetes#144057: [Falking Test] [sig-cli] run_crd_deletion_recreation_tests

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/pr-logs/directory/pull-kubernetes-cmd

### Which tests are flaking?

run_crd_deletion_recreation_tests
```
volumeattributesclasses             vac          storage.k8s.io/v1                 false        VolumeAttribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144057)

**Metadata:**
- Created: 2026-11-11
- Comments: 2
- State: open

### kubernetes/kubernetes#144074: Print generated preference in kubectl kuberc view

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When running `kubectl kuberc view` without an existing configuration file, the command prompts the user to generate a default configuration file.
Previously, when the user entered `y`, `SavePreference` was called and...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144074)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144073: DRA: Allocator allows admin access to skip capacity request policy check

#### What type of PR is this?

/kind bug

/wg device-management
/sig scheduling

#### What this PR does / why we need it:

With DRAConsumableCapacity, a request that doesn't name a capacity gets the `requestPolicy.default` (or the full capacity if there is no policy). A request for `0` is rounded up...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144073)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144072: Prepare tests for rsync improvements

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144072)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144071: kubelet: wait for initial certificate activation before dialing

#### What type of PR is this?

/kind bug
/sig node
/sig auth

#### What this PR does / why we need it:

When kubelet starts without a client certificate, the TLS callback can begin
using the first certificate before the rotation watcher observes it. The watcher
then closes all tracked connections, i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144071)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144070: storage: share watch option validation across implementations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The etcd3 store, the cacher and the storage correctness model each carry their own copy of the check that rejects unsupported watch options. This moves that check into one shared validator, the same way list opti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144070)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144069: e2e/framework: read CRI runtime operation metrics instead of dockershim ones

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`RuntimeOperationMonitor` and the default kubelet latency / "interesting" metric lists
still looked up `docker_operations_*` metrics, which disappeared with dockershim in 1.24.
Since then the runtime operation error ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144069)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144064: scheduler: enqueue a root group's waiting pods together

#### What type of PR is this?

/kind bug
/kind flake

#### What this PR does / why we need it:

#143870 did not fully fix `TestCPGTopologyAwareScheduling/CPG schedules on a single rack, choosing placement that accommodates more descendant pods (PodGroupPodsCount placement scoring)`. It failed twice ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144064)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144063: kubelet: clarify NotFound errors with anonymous pull attempts

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144063)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144061: conformance: mark WebSocket localhost port-forward test LinuxOnly

#### What type of PR is this?

/kind failing-test
/sig api-machinery
/area conformance

#### What this PR does / why we need it:

Marks the WebSocket `localhost` port-forward conformance test `[LinuxOnly]` because Windows does not support port forwarding to `localhost` inside a container.
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144061)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144059: nodeipam: fail tests when CIDRRangeAllocator construction fails

#### What type of PR is this?

/kind cleanup
/sig network

#### What this PR does / why we need it:

Two tests in `range_allocator_test.go` ignore an error from `NewCIDRRangeAllocator`:

- `TestAllocateOrOccupyCIDRFailure` only calls `t.Logf` and carries on.
- `TestReleaseCIDRSuccess` discards the e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144059)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144058: kubelet: include sandbox creation errors in PodReadyToStartContainers

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

When pod sandbox creation fails, `PodReadyToStartContainers` currently contains only a static sandbox state message, leaving the runtime or CNI error available only in Events

Cache the latest failed `Creat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144058)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144055: kubelet: Restore HTTP/2 ALPN with client CA reloading

#### What type of PR is this?

/kind bug
/kind regression
/sig node
/sig auth

#### What this PR does / why we need it:

The dynamic client CA controller clones the kubelet TLS configuration before `net/http` adds ALPN protocols, causing HTTP/2 clients to fall back to HTTP/1.1 when `ReloadKubeletCli...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144055)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144054: Kubelet: retry registration when the existing Node has a different provider ID

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
A replacement instance can register with an existing Node name whose provider ID still identifies the old instance. When the kubelet has an explicit provider ID and both IDs are nonempty, reject a mismatch before recon...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144054)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144053: Guard cloud Node deletion with a UID precondition

#### What type of PR is this?

/kind bug
/sig cloud-provider

#### What this PR does / why we need it:

The cloud Node lifecycle controller can observe a Node whose backing instance no longer exists while a replacement Node with the same name has already been created. Deleting by name alone can dele...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144053)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#144052: kube-proxy nftables: make partial syncs proportional to the number of changes

#### What type of PR is this?

/kind cleanup
/sig network
/area kube-proxy

#### What this PR does / why we need it:

A partial sync in nftables mode already sends only the changed chains and elements to nftables, but to find them kube-proxy recomputed every service port on every sync: endpoint cate...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144052)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144050: kubectl: sort mixed whole and fractional numbers with --sort-by

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

`kubectl get --sort-by=<field>` exits with `unsortable interface` when a number field mixes whole and fractional values across the listed objects, for example a CRD field of `type: number` with values `2`, `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144050)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24031: runtime: disable docker runtime with kubernetes >= 1.38

**What type of PR is this?**
/kind feature
/kind ux

**What this PR does / why we need it:**
The docker container runtime depends on `cri-dockerd`, which does not support the v5 WebSocket API required by Kubernetes >= 1.38, causing clusters with the docker runtime to fail to start.

This PR adds an ...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24031)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19043: Cluster creation failed due to IPv6 CIDR of the shared subnet

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display
 this information.**

`Client version: 1.37.0 (git-v1.37.0)`

**2. What Kubernetes version are you running? `kubectl version` will print the
 version if a cluster is running or provide the Kubernetes versio...

🔗 [Link](https://github.com/kubernetes/kops/issues/19043)

**Metadata:**
- Created: 2026-11-12
- Comments: 0
- State: open

### kubernetes/autoscaler#10674: VPA recommender: SubtractSample on an empty bucket lowers totalWeight, making memory percentiles read too low

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: recommender 1.6.0 in production. Reproduced with unit tests on 1.8.1 and on master (b81fc7d).

**What k8s version are you using (`kubectl version`)?**:

<details>...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10674)

**Metadata:**
- Created: 2026-11-11
- Comments: 1
- State: open

### kubernetes/autoscaler#10677: Enforce consistent cache use in the Azure provider

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Caching was using inconsistent keys, causing rare issues where expected cache content was unavailable. 

Internally, some cache lookups were case-insensitive, looping over cache content, while other cache...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10677)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10675: VPA: keep histogram totalWeight consistent when subtracting from an empty bucket

#### What type of PR is this?

/kind bug
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

`histogram.SubtractSample` now removes from `totalWeight` only the weight it actually removed from the bucket. Before, subtracting from a bucket that didn't hold the sample left the buck...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10675)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10673: digitalocean: don't decrease target size below existing nodes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a scale-up times out, the core reverts it with `DecreaseTargetSize`. The DigitalOcean provider set the pool count to its cached count plus the delta without checking how many nodes exist, and DOKS then deletes r...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10673)

**Metadata:**
- Created: 2026-11-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4573: feat(etcd): measure single-member defrag

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:

- Run one defrag Job while the existing etcd writers keep running.
- Measure write performance before defrag, during defrag and recovery, and afterward. Give each phase separat...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4573)

**Metadata:**
- Created: 2026-11-12
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_rust: v0.26.0

## [0.26.0]

### Added

- Implement `PartialEq`, `Eq` and `Hash` for `metrics::MetricType` and `registry::Unit`. See [PR 366].
- Added `encoding::prometheus_text::encode` to encode a `Registry` in the Prometheus text exposition format (version 0.0.4). See [Issue 367] and [PR 368].

### Changed

- Improved text encoding performance by buffering output internally, reducing
  dynamic dispatch overhead. Empty label sets and custom labels that encode no
  key no longer produce `{}` or a stray `,` in ...

🔗 [Link](https://github.com/prometheus/client_rust/releases/tag/v0.26.0)

**Metadata:**
- Version: v0.26.0
- Published: 2026-11-11
- Prerelease: No


---

*This content was automatically collected on 2026-11-12 05:42:54*
