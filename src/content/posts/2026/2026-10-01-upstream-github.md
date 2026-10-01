---
title: "Upstream Github - 2026-10-01"
description: "CNCF upstream activity from github"
pubDate: 2026-10-01
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/network", "area/kube-proxy", "needs-triage", "priority/important-soon", "area/kubelet", "sig/node", "triage/accepted", "sig/api-machinery", "pr", "area/apiserver", "size/L", "release-note-none", "cncf-cla: yes", "needs-priority", "wg/device-management", "release-note", "do-not-merge/cherry-pick-not-approved", "kind/cleanup", "kind/api-change", "do-not-merge/work-in-progress", "area/code-generation", "do-not-merge/needs-sig", "needs-ok-to-test", "sig/auth", "approved", "area/test", "size/M", "sig/testing", "ok-to-test", "size/XS", "size/S", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "sig/windows", "area/kubectl", "sig/cli", "kind/feature", "sig/architecture", "area/conformance", "area/e2e-test-framework", "sig/scalability", "area/provider/gcp", "sig/cloud-provider", "sig/scheduling", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "sig/instrumentation", "area/dependency", "wg/structured-logging", "lgtm", "needs-rebase", "cloud-provider-gcp", "sig/apps", "do-not-merge/hold", "kind/kep", "enhancements", "website", "needs-sig", "test-infra", "area/access", "area/groups", "sig/k8s-infra", "sig/etcd", "k8s.io", "community", "area/vertical-pod-autoscaler", "area/helm-charts", "autoscaler", "containerd", "area/cri", "cncf", "kind/initiative", "needs-group", "toc", "needs-kind"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142569: MemoryQoS: container memory.high is not reset when an in-place resize makes the memory request equal the limit

### What happened?

With MemoryQoS on and a `memoryThrottlingFactor` set, I resized a Burstable container's memory request up to its limit in place. The container kept the `memory.high` computed for its previous request, so it stays throttled below its limit. It doesn't recover on later syncs.

Meas...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142569)

**Metadata:**
- Created: 2026-09-30
- Comments: 6
- State: open

### kubernetes/kubernetes#142565: e2e/windows: test container stop signal validation

## What type of PR is this?

/kind cleanup

## What this PR does / why we need it

Adds Windows end-to-end coverage for the `ContainerStopSignals` feature introduced by KEP-4960.

The test sends dry-run Pod creation requests to the API server with `spec.os.name` set to `windows` and verifies...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142565)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142564: kubectl kuberc set: clear allowlist when policy is AllowAll or DenyAll

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl kuberc set --section credentialplugin --policy AllowAll` kept the existing allowlist in kuberc.
That combination fails validation on load, so kubectl stopped working until the file was fixed by hand....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142564)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6448: KEP-6277: Address a few nits about WAS integration with the Statefulsets

Follow up of https://github.com/kubernetes/enhancements/pull/6298

/cc @kannon92 @janetkuo 

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6448)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14267: [SIG-Node]: KEP-5714: cgroup namespaces

### KEP/SIG-Node References

- KEP(s): 5714
- stage: alpha
- KEP Issue: https://github.com/kubernetes/enhancements/issues/5714
- KEP PR: https://github.com/kubernetes/enhancements/pull/5715
- K8s-Release: 1.38
- KEP-Owner: @AkihiroSuda
- SIG-Node member liason: @AkihiroSuda
- KEP-Shepherd: @AkihiroS...

🔗 [Link](https://github.com/containerd/containerd/issues/14267)

**Metadata:**
- Created: 2026-09-30
- Comments: 0
- State: open

## Updates

### kubernetes/kubernetes#142580: kube-proxy config validation reports internal field paths

### What happened?

kube-proxy configuration validation reports error field paths using internal Go type and field names instead of the public `kubeproxy.config.k8s.io/v1alpha1` JSON/YAML field names.

For example, a config with invalid values for:

```yaml
apiVersion: kubeproxy.config.k8s.io/v1alph...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142580)

**Metadata:**
- Created: 2026-10-01
- Comments: 1
- State: open

### kubernetes/kubernetes#142572: MemoryQoS TieredReservation: pod-level memory.low is not updated on a request-only in-place memory resize

### What happened?

With `memoryReservationPolicy: TieredReservation`, an in-place resize that changes only the memory request updates the container's `memory.low` but leaves the pod cgroup's `memory.low` at the old request. It doesn't recover on later syncs.

Measured on v1.37.0 (kind, containerd, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142572)

**Metadata:**
- Created: 2026-09-30
- Comments: 5
- State: open

### kubernetes/kubernetes#142562: Explore publishing an aggregated OpenAPI v3 schema for downstream consumers

### What would you like to be added?

Explore publishing a single, merged OpenAPI v3 document in the repo (or as a release artifact) alongside the existing per-group-version files under `api/openapi-spec/v3/`.

This would only be a static file for offline consumers, not a new endpoint served by `kub...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142562)

**Metadata:**
- Created: 2026-09-30
- Comments: 2
- State: open

### kubernetes/kubernetes#142581: Fix Quantity.Cmp and AsDec to not modify the Quantity

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fix `Quantity.Cmp`, `AsDec`, and `AsFloat64Slow` to be read-only / race-free. This is a follow up on @pohly 's #142277, which fixed `String`.

After this fix these are all read-only / race-free

`Cmp`, `Cmp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142581)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142579: Manual cherry pick of #142340: kubelet: stabilize allocated resource health ordering

Cherry pick of #142340 on release-1.36.

#142340: kubelet: stabilize allocated resource health ordering

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142579)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142578: Automated cherry pick of #142340: kubelet: stabilize allocated resource health ordering

Cherry pick of #142340 on release-1.37.

#142340: kubelet: stabilize allocated resource health ordering

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142578)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142577: api: enable optionalorrequired linter for admissionregistration API

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Add missing `+optional` and `+required` markers to the admissionregistration API group (v1, v1alpha1 and v1beta1) and enable the `optionalorrequired` linter for it.

#### Which issue(s) this PR fixes:

Part of #1...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142577)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142575: apimachinery unstructured: decode list items once

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

`decodeToList` decodes each list item twice: as part of `list.Object`, where the items are then deleted, and again from its raw bytes. The dynamic client's `List` and `kubectl get -o jso...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142575)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142574: Fix node authorizer refcount leak

Multiple references from one object to another object can exist:

* pod → multiple references to the same secret / configmap / resourceclaim / pvc
* pv → multiple references to the same secret

When adding to the graph, avoid adding the same edge multiple times, since that also increments the d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142574)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142573: Prepare OpenAPIEnums for GA: strip enums in update-openapi-spec.sh, add e2e test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142573)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142571: WIP: Fix static Pod readiness restoration after kubelet restart

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142571)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142570: kubelet: make ImageGCPeriod and ContainerGCPeriod configurable

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

The [Slow] ImageGC and GarbageCollect e2e_node specs spend most of their time waiting on hardcoded kubelet periods (ImageGCPeriod = 5m, ContainerGCPeriod = 1m).

This PR adds `ImageGCPeriod` an...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142570)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142568: Promote Atomic FIFO to GA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142568)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142567: WIP: Revert "Don't replace container expected CPU limits with pod limits in e2e-node tests cgroups.VerifyContainerCPULimit helper"

Reverts kubernetes/kubernetes#140664

AI is pinpointing https://testgrid.k8s.io/sig-node-containerd#ci-node-e2e-containerd-alpha-slow-features failures to this PR.

Going to confirm. If it occurs I think we should revert this fix.

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142567)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142566: DO NOT REVIEW: Test static pod readiness on kubelet restart

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142566)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142563: apimachinery: fix resource pluralization for vowel-y kinds

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The fake dynamic client registers `Gateway` under `gatewaies`, so a `List` call using `gateways` panics.

Teach `UnsafeGuessKindToResource` to keep the `y` and append `s` when the preceding character is a vowel. This...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142563)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142561: Initial Future Conformance implementation

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Initial implementation of Future Conformance, including marking the "Services should support named targetPorts that resolve to different ports on different endpoints" test as 1.41 conformance, and generating th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142561)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142559: cacher lazy snapshot interval bench

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142559)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142558: cluster, test/e2e_node: replace remaining gsutil usages with gcloud storage

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Starting March 2027, `gsutil` will no longer ship with the Google Cloud CLI. This PR removes the remaining `gsutil` usages that #142555 does not cover. Together, the two PRs remove every `gsutil` call from ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142558)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142557: Update/kubectl in kustomize to v5.8.2

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142557)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142555: cluster, test: prefer gcloud storage over gsutil in download scripts

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Starting March 2027, `gsutil` will no longer ship with the Google Cloud CLI. This PR moves the low-risk download scripts to `gcloud storage`:

- `cluster/get-kube.sh`, `cluster/get-kube-binaries.sh`: for `storage...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142555)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1374: chore(deps): bump the k8s-dependencies group across 3 directories with 7 updates

Bumps the k8s-dependencies group with 4 updates in the /metis directory: [k8s.io/api](https://github.com/kubernetes/api), [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery), [k8s.io/client-go](https://github.com/kubernetes/client-go) and [k8s.io/component-base](https://github.com/kube...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1374)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1372: chore(deps): bump actions/setup-go from 6.5.0 to 7.0.0

Bumps [actions/setup-go](https://github.com/actions/setup-go) from 6.5.0 to 7.0.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/actions/setup-go/releases">actions/setup-go's releases</a>.</em></p>
<blockquote>
<h2>v7.0.0</h2>
<h2>What's Changed</h2>
<ul>...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1372)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57832: Document $patch: delete for removing list items via strategic merge patch (kubectl patch / kustomize)

**This is a Feature Request**

**What would you like to be added**

Document how to patch items (add / replace / remove) from a list (for example, one container in a Pod) with a strategic merge patch, on:
- https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/
-...

🔗 [Link](https://github.com/kubernetes/website/issues/57832)

**Metadata:**
- Created: 2026-09-30
- Comments: 4
- State: open

### kubernetes/test-infra#37949: Refactor the config/prow/plugins.yaml file per project folder to make teams autonomous

<!-- Please only use this template for submitting enhancement requests -->

**What would you like to be added**:

Refactor the config/prow/plugins.yaml file per project folder to make teams autonomous. I imagine folders like "kueue" with dedicated OWNERS file, analogously as this is done for CI jobs...

🔗 [Link](https://github.com/kubernetes/test-infra/issues/37949)

**Metadata:**
- Created: 2026-09-30
- Comments: 3
- State: open

### kubernetes/k8s.io#10003: Update etcd-leads list to match current chairs/TLs

**What this PR does / why we need it**:

Update sig-etcd-leads ML to match current TLs and Chairs.




🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10003)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9190: Add Wei Fu to SIG-etcd leads.

Ooops, we never updated the SIG-etcd readme.  Fixed.

(Wei Fu was elected in November 2025)


🔗 [Link](https://github.com/kubernetes/community/pull/9190)

**Metadata:**
- Created: 2026-10-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10375: Add support for "extraObjects" in VPA helm chart?

**Which component are you using?**:

/area vertical-pod-autoscaler
/area helm-charts

**Describe the solution you'd like.**:

There have been at least 2 PRs I've seen where people are trying to add 3rd party resources into the VPA helm chart, for example ServiceMonitor resources (see https://github....

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10375)

**Metadata:**
- Created: 2026-09-30
- Comments: 1
- State: open

### kubernetes/autoscaler#10374: build(deps): bump the kubernetes group across 2 directories with 33 updates

Bumps the kubernetes group with 6 updates in the /vertical-pod-autoscaler directory:

| Package | From | To |
| --- | --- | --- |
| [k8s.io/api](https://github.com/kubernetes/api) | `0.37.0` | `0.37.1` |
| [k8s.io/apimachinery](https://github.com/kubernetes/apimachinery) | `0.37.0` | `0.37.1` |
| [k...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10374)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd#14262: Support secondary root directories (`secondary_roots`) for preloaded images, blobs, and snapshots

### What is the problem you're trying to solve

In modern cloud environments, VM OS images (or attached read-only secondary disks) are preloaded with container images in `/var/lib/containerd`—including unpacked snapshots, content blobs, and BoltDB metadata.

However, when a VM is provisioned with a ...

🔗 [Link](https://github.com/containerd/containerd/issues/14262)

**Metadata:**
- Created: 2026-09-30
- Comments: 1
- State: open

### cncf/toc#2314: [Initiative]: Telco AI Native

### Name

Telco AI Native

### Short description

List telco key factors and design principles related to AI native. Explore telco evolution path from cloud native to AI native. List potential Telco use cases and best practices related to AI Native, and related CNCF projects landscape telco could re...

🔗 [Link](https://github.com/cncf/toc/issues/2314)

**Metadata:**
- Created: 2026-09-30
- Comments: 0
- State: open

### cncf/toc#2315: fix: correct broken markdown link syntax in process/README.md

The hyperlink in the Archived section had its brackets and parentheses swapped — (here)[url] instead of the correct [here](url). This caused the link to render as plain text rather than a clickable hyperlink in GitHub Markdown. 

🔗 [Link](https://github.com/cncf/toc/pull/2315)

**Metadata:**
- Created: 2026-09-30
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-10-01 04:04:46*
