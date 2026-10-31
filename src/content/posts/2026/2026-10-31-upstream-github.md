---
title: "Upstream Github - 2026-10-31"
description: "CNCF upstream activity from github"
pubDate: 2026-10-31
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "kind/feature", "sig/cli", "needs-triage", "kind/bug", "area/kubelet", "sig/node", "sig/scheduling", "triage/accepted", "pr", "size/XL", "kind/api-change", "release-note-none", "approved", "cncf-cla: yes", "area/code-generation", "needs-priority", "kind/cleanup", "area/apiserver", "release-note", "size/L", "area/test", "priority/critical-urgent", "lgtm", "size/XS", "sig/testing", "kind/failing-test", "sig/storage", "size/XXL", "sig/apps", "sig/network", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "sig/cluster-lifecycle", "size/M", "sig/auth", "sig/instrumentation", "sig/architecture", "sig/cloud-provider", "area/dependency", "wg/device-management", "priority/important-soon", "size/S", "area/kubeadm", "sig/etcd", "needs-ok-to-test", "wg/workload-aware-scheduling", "kind/documentation", "ok-to-test", "priority/backlog", "do-not-merge/cherry-pick-not-approved", "kind/regression", "needs-rebase", "area/addon-resizer", "autoscaler", "area/vertical-pod-autoscaler", "do-not-merge/work-in-progress", "do-not-merge/release-note-label-needed", "area/cluster-autoscaler", "area/provider/gce", "sig/ui", "committee/steering", "community", "kube-state-metrics", "area/jobs", "area/config", "test-infra", "ingress-gce", "prometheus", "release", "common", "client_rust", "envoyproxy", "gateway", "triage", "containerd", "nerdctl"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143644: Update volume health APIs as per newest version of KEP

This PR updates API of storage health as per - https://github.com/kubernetes/enhancements/issues/1432

It also moves health from pod to `pod.Status.Volumestatus` as discussed in - https://github.com/kubernetes/enhancements/issues/6395 

Here is brief summary of what it does:

1. It moves `volu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143644)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10585: Add negative cache for mig listing operation

#### What type of PR is this?
/kind bug
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
/kind regression...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10585)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9247: sig-ui: Update charter for Headlamp

Kubernetes Dashboard was archived in early 2026, but the charter still described it as the main effort and kept its governance deviation.

The charter now centers the scope on Headlamp and drops the Dashboard ROLES.md deviation. SIG UI has no Technical Leads, so the Chairs now serve as Technical L...

🔗 [Link](https://github.com/kubernetes/community/pull/9247)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3187: chore: remove the deprecated custom_resource_config_file config key

**What this PR does / why we need it:**

Removes the `custom_resource_config_file` options config file key. It was kept as a deprecated alias for `custom_resource_state_config_file` since #2926, with a `TODO` to remove it in 2.21.

The options config file was decoded leniently, so after removing the...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3187)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143647: cli-runtime: reusable, hash-keyed cache for the OpenAPI v3 fieldValidation verifier

### What would you like to be added?

A reusable fieldValidation `Verifier` in cli-runtime that caches per-GVK answers by the group-version's OpenAPI v3 document hash, shareable across `Factory.Validator()` calls.

**Today (v0.37 / 1.38):**
- `openapi3.Root.GVSpec` decodes the full group-version doc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143647)

**Metadata:**
- Created: 2026-10-31
- Comments: 1
- State: open

### kubernetes/kubernetes#143643: Kubelet re-runs terminated ephemeral containers when their runtime container is removed

/kind bug
/sig node
/area kubelet

### Problem

The kubelet decides whether to start an ephemeral container only by checking whether the runtime still has a container with that name ([`computePodActions`](https://github.com/kubernetes/kubernetes/blob/d0d1a17193d42dab5e893d21266bc5f8de16735f/pkg/kube...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143643)

**Metadata:**
- Created: 2026-10-30
- Comments: 2
- State: open

### kubernetes/kubernetes#143638: Strategic merge patch with `"$deleteFromPrimitiveList/<field>": null` deletes the whole field instead of no element

### What happened?

A strategic merge patch whose `$deleteFromPrimitiveList/<field>` directive is `null` returns 200 and
deletes `<field>` entirely. `{"metadata":{"$deleteFromPrimitiveList/finalizers":null}}` removes every
finalizer, and the same directive on `labels` or `data` removes all labels or...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143638)

**Metadata:**
- Created: 2026-10-30
- Comments: 2
- State: open

### kubernetes/kubernetes#143637: Server-side apply that removes a manager's last finalizer also removes the `foregroundDeletion` or `orphan` finalizer, and the object is deleted at once

### What happened?

A controller adds its finalizer with server-side apply and later removes it by applying its
configuration without the finalizer. If the object is being deleted with
`propagationPolicy=Foreground` or `Orphan`, the API server has added `foregroundDeletion` or
`orphan` to `metadata....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143637)

**Metadata:**
- Created: 2026-10-30
- Comments: 2
- State: open

### kubernetes/kubernetes#143636: NNN is not cleared in some Workload Aware Preemption scenarios

### What happened?

/sig scheduling
/assign @ania-borowiec

Bug in [submitPodGroupResult](https://github.com/kubernetes/kubernetes/blob/e3e26fc7ab75352979c1498f1dca7ee7eaf41c23/pkg/scheduler/schedule_one_podgroup.go#L886):
When a pod in a PodGroup fails `SchedulePod` with `*framework.FitError`, `sch...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143636)

**Metadata:**
- Created: 2026-10-30
- Comments: 2
- State: open

### kubernetes/kubernetes#143648: Saturate Quantity exponents instead of overflowing

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This prevents a quantity with an exponent that is outside the supported range from overflowing. Instead the value saturates to the largest supported exponent.

#### Which issue(s) this PR is related to:

#### Special...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143648)

**Metadata:**
- Created: 2026-10-31
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143646: Run declarative validation on kubelet static pods

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143646)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143645: e2e_node: raise inode bounds in CRIContainerMetrics test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143645)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143642: Bump golang.org/x/net to 0.62.0 for cve-2026-78661 and cve-2026-97045

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143642)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143641: etcd: update etcd image to v3.7.3

#### What type of PR is this?

/kind cleanup
/sig etcd
/sig cluster-lifecycle
/sig api-machinery
/area kubeadm
/priority important-soon

#### What this PR does / why we need it:

Update etcd images to v3.7.3 (from v3.7.1) across build dependencies, kubeadm defaults, GCE manifests, test manifests, an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143641)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143640: apiserver/cacher: reproduce a watcher goroutine leak

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

Adds a test that reproduces a watch cache goroutine leak on master. The test changes no production code.

1. The dispatcher blocks in `add` on a watch-list watcher whose bookmark is received bu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143640)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143639: Avoid allocating schema properties map on single-field lookups

Add `HasProperties()` and `Property(key)` to `common.Schema` so existence checks
and single-property lookups do not allocate and copy the full properties map via 
`Properties()`. Deduplicate the `Properties()` call in `SchemaDeclType`.

Benchmark improvements:
- BenchmarkCRDManyRulesValidation/items...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143639)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143635: workloadbuilder: Copy workload templates' preemptionPolicy to PodGroups and CompositePodGroups

#### What type of PR is this?

/kind bug
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

Copy `tmpl.PreemptionPolicy` onto `spec.PreemptionPolicy` in `newPodGroup` and `newCompositePodGroup` when set on the `Workload` template, leaving it `nil` when o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143635)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143634: Validate the required and requested RV when processing events

/kind cleanup

Preparing to implement background sync by storing RVs on watcher. For safety adding validation if properties for those RVs will not be broken as we never can be 100% sure that tests cover all the edge cases that can happen.

```release-note
NONE
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143634)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143632: Add e2e tests for TAS

#### What type of PR is this?

/kind cleanup
/sig scheduling
/wg workload-aware-scheduling

#### What this PR does / why we need it:

We are adding e2e tests covering TopologyAwareScheduling since it got promoted to beta.

#### Test cases added:
- gang `PodGroups` created from a topology-constrained...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143632)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143631: Document why Aggregate must not implement Unwrap()

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Since Aggregate aggregates errors, it is tempting to add an implementation of func Unwrap() []error to it. That however allows errors.As to match on contained errors, which breaks assumptions in calling cod...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143631)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143630: Update csi sidecars

#### What type of PR is this?

/kind cleanup
/sig storage
/sig testing
/area test
/priority important-soon

#### What this PR does / why we need it:

Updates CSI sidecar images to their latest stable releases:

- snapshot-controller (cluster/addons): v8.6.0 -> v8.7.0
- csi-provisioner: v6.3.0 -> v6....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143630)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143629: kubeadm: error showed the wrong version. Now it shows the minimum supported version.

#### What type of PR is this?

/kind bug
/sig cluster-lifecycle
/area kubeadm

#### What this PR does / why we need it:

When the version to upgrade to is below `constants.MinimumControlPlaneVersion`, `EnforceVersionPolicies` returns:

> Specified version to upgrade to "X" is equal to or lower than ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143629)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143628: kubeadm: i observe before, `upgrade plan` crashed. Now it shows an error.

#### What type of PR is this?

/kind bug
/sig cluster-lifecycle
/area kubeadm

#### What this PR does / why we need it:

`GetAvailableUpgrades` reads the cluster version from the kube-apiserver Pods (label selector `component=kube-apiserver,tier=control-plane`). If no Pod matches, `ComponentVersions...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143628)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143627: [release-1.36]: Automated cherry pick of #143557: kubeadm: the missing CA hint shows again

Cherry pick of #143557 on release-1.36.

#143557: kubeadm: the missing CA hint shows again

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/kind regress...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143627)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143626: [release-1.35]: Automated cherry pick of #143557: kubeadm: the missing CA hint shows again

Cherry pick of #143557 on release-1.35.

#143557: kubeadm: the missing CA hint shows again

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
/kind regress...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143626)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143625: Add sig-api-machinery OWNERS for pkg/admission/plugin

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

xref: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apiserver/OWNERS

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

Today this only conta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143625)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143624: cloud-provider: extract event reasons into events package

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Moves the event reason string literals used by the service, node, nodelifecycle and route controllers into an exported `k8s.io/cloud-provider/events` package. Out-of-tree cloud controller managers can then use th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143624)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143623: scheduler/dynamicresources: use aggregated pod status updates in PreBind

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143623)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10590: build(deps): bump github.com/prometheus/common from 0.70.1 to 0.73.0 in /addon-resizer

Bumps [github.com/prometheus/common](https://github.com/prometheus/common) from 0.70.1 to 0.73.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/prometheus/common/releases">github.com/prometheus/common's releases</a>.</em></p>
<blockquote>
<h2>v0.73.0</h2>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10590)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10589: [WIP] feat(vpa): support EvictionRequest API for updater evictions (#10572)

Closes #10572

### What was wrong / Motivation

The VPA Updater currently relies on immediate, imperative pod eviction (`POST /api/v1/namespaces/{ns}/pods/{name}/eviction`). While functional, imperative eviction has limitations:
1. **Lack of graceful coordination**: Workloads and maintenance actors ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10589)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10587: [vpa-release-1.6] chore(vpa): migrate staging registry to k8s-staging-images

This is an manual cherry-pick of #10578
I removed the conflicting file (which is RELEASE.md) because it's not needed in the release branches

/assign adrianmoisey

```release-note
NONE
```

/kind cleanup

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10587)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9246: Update SIG UI mission statement to focus on Headlamp

/cc @joaquimrocha 

🔗 [Link](https://github.com/kubernetes/community/pull/9246)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38215: Remove windows presubmit tests.

These have not been passing for a long time, are not blocking, and we don't have the capacity to make them work.



🔗 [Link](https://github.com/kubernetes/test-infra/pull/38215)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38209: Run ci-kubernetes-e2e-ec2-device-plugin-gpu outside US daytime

`ci-kubernetes-e2e-ec2-device-plugin-gpu` failed `Up` with `InsufficientInstanceCapacity` for g4dn.12xlarge 7 times since 2026-10-11 (4 of the last 50 runs), every time at the 13:00 or 19:00 UTC run; 0 of 38 runs at 01:00 or 07:00 failed. The deployer launches in one us-east-1 AZ with no fallback; k...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38209)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3309: Add experiments/MockClient

This would be used mostly in test and for when the gRPC client is  unavailable (running outside of GKE).

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3309)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### prometheus/common: v0.73.1

## What's Changed
* build(deps): bump github.com/pandatix/go-abnf from 0.5.1 to 0.5.3 by @bwplotka in https://github.com/prometheus/common/pull/1027


**Full Changelog**: https://github.com/prometheus/common/compare/v0.73.0...v0.73.1

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.73.1)

**Metadata:**
- Version: v0.73.1
- Published: 2026-10-30
- Prerelease: No

### prometheus/client_rust: v0.25.2

## [0.25.2]

### Fixed

- Label values in the text format are now escaped (`\`, `"` and newlines), as the exposition format requires. See [PR 347].
- The implicit `Histogram` overflow bucket now uses `+Inf` instead of `f64::MAX` as its upper bound, and `Histogram::new` drops non-finite bucket bounds, so an explicit `f64::INFINITY` no longer produces a duplicate `le="+Inf"` series. See [PR 343].

### Changed

- Updated the optional `protox` build dependency to `v0.10`.

[PR 343]: https://github.c...

🔗 [Link](https://github.com/prometheus/client_rust/releases/tag/v0.25.2)

**Metadata:**
- Version: v0.25.2
- Published: 2026-10-30
- Prerelease: No

### envoyproxy/gateway: v1.10.0-rc.1

## What's Changed
* chore: replace sets.NewString with sets.New[string] by @mmmommm in https://github.com/envoyproxy/gateway/pull/9704
* feat(chart): Add TLS certificate expiration to the Envoy Global dashboard by @FlorisFeddema in https://github.com/envoyproxy/gateway/pull/9615
* docs: add note about Tempo appProtocol in proxy-trace.md by @rtomadpg in https://github.com/envoyproxy/gateway/pull/5963
* docs: improve custom certificate installation guide by @dlanov in https://github.com/envoyproxy...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.10.0-rc.1)

**Metadata:**
- Version: v1.10.0-rc.1
- Published: 2026-10-30
- Prerelease: Yes

### envoyproxy/gateway#10461: IP Backends with the same endpoint but different TLS settings in one rule lose all but the first TLS config

## Problem

Rotating a Backend's mTLS client certificate is commonly done by running two Backends side by side: same endpoint, different `clientCertificateRef`, both referenced from the same HTTPRoute rule.

```yaml
rules:
  - matches:
      - path:
          type: PathPrefix
          value: /ip
  ...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10461)

**Metadata:**
- Created: 2026-10-30
- Comments: 1
- State: open

### containerd/nerdctl: v2.4.2

## Changes

- `nerdctl container`:
  - Add `--device-cgroup-rule` to `nerdctl run` and `nerdctl create` ([#5258](https://github.com/containerd/nerdctl/pull/5258), thanks to @takumi12311123)
  - Add `--timeout` to `nerdctl commit` for configuring the lease timeout, which was hard-coded to 1h ([#5253](https://github.com/containerd/nerdctl/pull/5253), thanks to @Luckydog691)
  - Fix `--volumes-from` to inherit only user mounts, so that the target container's own `/dev/shm` configuration is not...

🔗 [Link](https://github.com/containerd/nerdctl/releases/tag/v2.4.2)

**Metadata:**
- Version: v2.4.2
- Published: 2026-10-30
- Prerelease: No


---

*This content was automatically collected on 2026-10-31 03:59:29*
