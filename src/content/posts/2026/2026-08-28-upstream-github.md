---
title: "Upstream Github - 2026-08-28"
description: "CNCF upstream activity from github"
pubDate: 2026-08-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/M", "approved", "minikube", "issue", "kind/bug", "sig/node", "needs-triage", "area/cloudprovider", "kind/feature", "sig/cloud-provider", "sig/scheduling", "size/XL", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "needs-priority", "do-not-merge/needs-kind", "sig/api-machinery", "release-note", "needs-ok-to-test", "wg/device-management", "area/api-validation", "area/test", "kind/cleanup", "release-note-none", "sig/testing", "priority/important-longterm", "triage/accepted", "size/L", "sig/apps", "lgtm", "kind/flake", "size/S", "sig/cluster-lifecycle", "area/kubeadm", "do-not-merge/cherry-pick-not-approved", "size/XS", "ok-to-test", "area/kubectl", "sig/cli", "language/ko", "area/localization", "website", "sig/docs", "language/zh", "area/blog", "kops", "area/vertical-pod-autoscaler", "autoscaler", "do-not-merge/hold", "area/helm-charts", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "sig/instrumentation", "kube-state-metrics", "perf-tests", "release", "cloud-provider-openstack", "prometheus", "client_js", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141621: fix(kubectl): fix --sum column alignment when --show-swap is set

#### What type of PR is this?
/kind bug
/sig cli

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
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141621)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10208: fix: ship a restricted-compliant security context by default

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`containerSecurityContext` defaults to `{}` and `podSecurityContext` sets only `runAsNonRoot`/`runAsUser`, so the three VPA workloads render without `allowPrivilegeEscalation: false`, without dropping capabilities an...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10208)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3107: Feature: Expose pod-level resource metrics for pod.spec.resources (KEP-2837)

### What would you like to be added?

We would like to propose adding pod-level resource metrics to `kube-state-metrics`:
- `kube_pod_resource_requests`
- `kube_pod_resource_limits`

---

### Background: Current Behavior in KSM

Today, `kube-state-metrics` only exposes resource requests and limits a...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3107)

**Metadata:**
- Created: 2026-08-27
- Comments: 2
- State: open

## Updates

### kubernetes/minikube#23570: deps: Bump github.com/moby/go-archive to 0.3.3

v0.3.0 fixed CVE-2026-17106[1]; v0.3.3 fixes regressions introduced in v0.3.0. The only minikube caller is minikube image build, which packs a local directory through third_party/go-dockerclient.CreateTarStream.

Building against v0.3.0 and v0.3.3 failed because github.com/docker/docker v28.5.2 pk...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23570)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141635: e2e_node/remote/gce: readiness polling drops terminal errors and shadows the ready instance

`createGCEInstance` waits for a VM to report `RUNNING` and for containerd or CRI-O to become available. The current gcloud implementation can exhaust that polling loop without returning an error.

Inside the loop, `instance, err := getGCEInstance(name)` declares variables in the loop body, leaving t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141635)

**Metadata:**
- Created: 2026-08-27
- Comments: 2
- State: open

### kubernetes/kubernetes#141631: Reconcile cloud-provider InstanceMetadata.AdditionalLabels periodically

### What would you like to be added?

The cloud node controller should periodically reconcile node labels returned through `cloudprovider.InstanceMetadata.AdditionalLabels` for already initialized Nodes.

The reconciliation should:

* add labels that are missing from the Node;
* update labels whose ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141631)

**Metadata:**
- Created: 2026-08-27
- Comments: 2
- State: open

### kubernetes/kubernetes#141624: e2e_node image configs use a negated character class instead of excluding the -cgroupsv1 suffix

### What happened

The GCE node-e2e image selection filters candidate images with `image_regex` from the image config. `pickNewestImage` in `test/e2e_node/remote/gce/gce_runner.go` compiles it and keeps only images whose name matches:

```go
imageRe := regexp.MustCompile(imageRegex)
...
if imageRege...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141624)

**Metadata:**
- Created: 2026-08-27
- Comments: 3
- State: open

### kubernetes/kubernetes#141645: WIP pkg/scheduler: track in-flight pod updates and introduce two-phase cycle completion

#### What this PR does / why we need it
This PR fixes two race conditions in the scheduler related to in-flight pod state tracking and cycle completion:

1. **Race Condition 1 (Concurrent Pod Update during scheduling attempt):**
   * **Problem:** When an in-flight pod receives an `Update` event ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141645)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141644: resource: reject qualified names with more than one slash

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`validateQualifiedName` (handwritten) and `resourcesQualifiedName` (declarative)
both split a `resource.k8s.io` qualified name on `/` and switch on the number of
parts, handling only 1 and 2. A value with two or more...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141644)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141643: test/images: don't depend on golang:<version> docker tags

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141643)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141639: e2e_node/remote/gce: fix GCE instance readiness polling

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`createGCEInstance` can exhaust its readiness loop and continue without an error. The loop body shadows the outer instance and error, and errors describing non-ready observations are discarded.

This change...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141639)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141638: ResourceClaim controller: generate feature combinations

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141638)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141636: scheduler: deflake TestRequeueByPermitRejection

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141636)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141633: e2e_node: fetch only the image fields used for selection

`getGCEImage` reads the whole `gcloud compute images list` output into the runner with `exec.Output()`. Only `name`, `family`, and `creationTimestamp` are ever read, in `pickNewestImage`. This projects the output to those three with `--format=json(name,family,creationTimestamp)`, so gcloud writes a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141633)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141630: Automated cherry pick of #141337: Avoid leaking node-specific kubelet config into the ConfigMap

Cherry pick of #141337 on release-1.34.

#141337: Avoid leaking node-specific kubelet config into the ConfigMap

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141630)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141629: Automated cherry pick of #141337: Avoid leaking node-specific kubelet config into the ConfigMap

Cherry pick of #141337 on release-1.35.

#141337: Avoid leaking node-specific kubelet config into the ConfigMap

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141629)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141628: Automated cherry pick of #141337: Avoid leaking node-specific kubelet config into the ConfigMap

Cherry pick of #141337 on release-1.36.

#141337: Avoid leaking node-specific kubelet config into the ConfigMap

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141628)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141627: Automated cherry pick of #141337: Avoid leaking node-specific kubelet config into the ConfigMap

Cherry pick of #141337 on release-1.37.

#141337: Avoid leaking node-specific kubelet config into the ConfigMap

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141627)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141626: e2e_node: add image_exclude_regex to drop images by name

Part of #141624, and stacked on #141640: the first commit here is that PR, so review the second commit for this change. I will rebase it out once #141640 merges.

The Ubuntu node-e2e configs force cgroup v2 by dropping the `-cgroupsv1` image with `image_regex: ".*[^-cgroupsv1]$"`. That is a negated ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141626)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141625: [release-1.34] test(utils): bump agnhost image tag to 2.66.1

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Bumps the `Agnhost` image tag to `2.66.1` in `test/utils/image/manifest.go` on the `release-1.34` branch to consume the updated pre-built e2e test image.

Thanks @liggitt and @BenTheElder for the guidance!
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141625)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141623: [release-1.35] test(utils): bump agnhost image tag to 2.66.1

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Bumps the `Agnhost` image tag to `2.66.1` in `test/utils/image/manifest.go` on the `release-1.35` branch to consume the updated pre-built e2e test image.

Thanks @liggitt and @BenTheElder for the guidance!
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141623)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141622: nodelifecycle: don't panic when exiting disruption mode for a Node with no health entry

## What type of PR is this?

/kind bug

## What this PR does / why we need it:

When `NodeControllerLeaseCircuitBreaker` short circuits `tryUpdateNodeHealth`
because the lease cache is stale, its deferred writeback stores an explicit
`nil` into `nodeHealthMap` for any Node that doesn't already have ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141622)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57233: [ko] Add guidance for handling redirects to the Korean localization best practices

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**

Add guidance for handling redirec...

🔗 [Link](https://github.com/kubernetes/website/issues/57233)

**Metadata:**
- Created: 2026-08-27
- Comments: 1
- State: open

### kubernetes/website#57232: [ko] Update content/ko/docs/concepts/services-networking/cluster-ip-allocation.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/services-networking/cluster-ip-allocation.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/services-networking/cl...

🔗 [Link](https://github.com/kubernetes/website/issues/57232)

**Metadata:**
- Created: 2026-08-27
- Comments: 1
- State: open

### kubernetes/website#57235: [zh-cn] Fix Gateway API conformance links

### Description

Update outdated Gateway API conformance links in the Chinese localization.

- Fix the conformance link in the Chinese Gateway documentation.
- Fix the same link in the Chinese Gateway API v1.1 blog post.
- Update the corresponding English source comments retained in the locali...

🔗 [Link](https://github.com/kubernetes/website/pull/57235)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57234: [ko] Add guidance for handling redirects to the Korean localization best practices

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57234)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18755: OIDC groupsClaims and requiredClaims are silently corrupted by the v1alpha2 conversion

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display
 this information.**

Present on master (1.37 development). The conversion has had this shape since v1alpha3 was introduced.

**2. What Kubernetes version are you running? `kubectl version` will print the
 ...

🔗 [Link](https://github.com/kubernetes/kops/issues/18755)

**Metadata:**
- Created: 2026-08-27
- Comments: 0
- State: open

### kubernetes/autoscaler#10211: VPA: aggregates holding only memory samples are treated as empty and garbage-collected

> Disclaimer: I used AI to help with this report. I found the issue in our live cluster, and used AI to track down the root cause. 

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: `1.7.1`

**What k8s version a...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10211)

**Metadata:**
- Created: 2026-08-27
- Comments: 1
- State: open

### kubernetes/autoscaler#10212: VPA: set explicit FieldManager on API writes

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

VPA components send Patch requests with an empty `metav1.PatchOptions{}`, so
the API server derives the field manager from the client's User-Agent. VPA
never sets one explicitly, so it falls back to the b...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10212)

**Metadata:**
- Created: 2026-08-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10210: feat: add metrics Services and optional ServiceMonitors

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

All three components declare a named `prometheus` container port — recommender 8942, updater 8943, admission controller 8944 — but the chart renders only the admission webhook Service and no ServiceMonitor or Pod...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10210)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10206: fix: bump kube-webhook-certgen to v1.6.9

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The certgen image is pinned to `v20231011-8b53cabe0`, a date-tagged build from October 2023. The image is produced by ingress-nginx, which has since moved to semver tags and currently ships `v1.6.9`.

This is more th...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10206)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10201: feat: add topologySpreadConstraints to the VPA helm chart

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds a `topologySpreadConstraints` value to the `admissionController`, `recommender` and `updater` components of the VPA Helm chart.

The chart already exposes `nodeSelector`, `affinity` and `tolerations` on all ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10201)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9879: Promote cpa images: v1.11.0 and v0.9.0

**What this PR does / why we need it**:
Promote new releases for Cluster Proportional Autoscaler (CPA) and Cluster Proportional Vertical Autoscaler (CPVA):
- `cluster-proportional-autoscaler:v1.11.0` (Ref https://github.com/kubernetes-sigs/cluster-proportional-autoscaler/issues/278)
- `cpvpa:v0.9...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9879)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4319: Add support for GCP_MONITORING_ENDPOINT

/kind feature

This adds support for GCP_MONITORING_ENDPOINT that can be used to specify monitoring endpoint that should be used by CL2.

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4319)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack: openstack-cloud-controller-manager-2.36.2

Openstack Cloud Controller Manager Helm Chart

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/releases/tag/openstack-cloud-controller-manager-2.36.2)

**Metadata:**
- Version: openstack-cloud-controller-manager-2.36.2
- Published: 2026-08-27
- Prerelease: No

### kubernetes/cloud-provider-openstack#3170: [magnum-auto-healer] Add certificate validation


<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* c...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3170)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3169: Rework `check` Makefile target

**What this PR does / why we need it**:

Rework the check target to run both golangci-lint and helm's chart-testing (ct) lint command. This lets us reproduce locally what is running in CI.

Additionally, remove an irrelevant header from the file: the Golang CTI has not been relevant in OpenStack, le...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3169)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3168: tests: make E2E tests optional and add local development workflow


<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Fix volume deletion
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (oc...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3168)

**Metadata:**
- Created: 2026-08-27
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_js: v0.16.1

## What's Changed
 - Fixed bug with OpenMetrics encoding for cluster and worker aggregation

**Full Changelog**: https://github.com/prometheus/client_js/compare/v0.16.0...v0.16.1

🔗 [Link](https://github.com/prometheus/client_js/releases/tag/v0.16.1)

**Metadata:**
- Version: v0.16.1
- Published: 2026-08-27
- Prerelease: No

### containerd/overlaybd: Development Build

## Commits
- 063821f: presentation event (#446) (Huiba Li) [#446](https://github.com/containerd/overlaybd/pull/446)
- 83a4ad5: Improve docs site navigation (#449) (Huiba Li) [#449](https://github.com/containerd/overlaybd/pull/449)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-08-28
- Prerelease: Yes


---

*This content was automatically collected on 2026-08-28 08:59:30*
