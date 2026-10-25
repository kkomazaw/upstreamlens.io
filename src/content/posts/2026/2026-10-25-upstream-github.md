---
title: "Upstream Github - 2026-10-25"
description: "CNCF upstream activity from github"
pubDate: 2026-10-25
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/node", "priority/important-soon", "sig/scheduling", "triage/accepted", "wg/device-management", "area/provider/gcp", "sig/cluster-lifecycle", "kind/flake", "sig/testing", "sig/cloud-provider", "pr", "area/kubectl", "release-note", "size/S", "sig/cli", "cncf-cla: no", "needs-ok-to-test", "needs-priority", "release-note-none", "cncf-cla: yes", "ok-to-test", "size/L", "sig/apps", "size/M", "area/test", "priority/backlog", "kind/cleanup", "size/XS", "sig/api-machinery", "sig/storage", "kind/failing-test", "approved", "priority/important-longterm", "area/conformance", "sig/auth", "area/code-generation", "kind/documentation", "kind/api-change", "sig/docs", "area/apiserver", "size/XL", "kind/feature", "website", "language/pt", "area/localization", "size/XXL", "area/jobs", "area/config", "test-infra", "area/provider/azure", "enhancements", "envoyproxy", "gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143365: DRA client: stop converting watch when Stop is called

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In `watchSomething.run`, the `<-w.stopChan` case of the `select` used a naked `break`, which only leaves the `select`, not the enclosing `for` loop. After `Stop()` the loop kept reading and converting events from the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143365)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143383: kubectl: arguments containing "-v=" (e.g. label "tier-v=8") silently set klog verbosity

### What happened?

`GetLogVerbosity` in `staging/src/k8s.io/kubectl/pkg/cmd/cmd.go` reads the log level from `os.Args` before cobra parses flags. It uses a substring match:

```go
} else if strings.Contains(arg, "--v=") || strings.Contains(arg, "-v=") {
    parg := strings.Split(arg, "=")
```

So a...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143383)

**Metadata:**
- Created: 2026-10-24
- Comments: 2
- State: open

### kubernetes/kubernetes#143380: Resource-manager node e2e jobs skip their multi-NUMA specs: n2d-standard-32 comes up with one NUMA node

Following up on #142985, as @kannon92 asked.

`jobs/e2e_node/containerd/image-config-serial-resource-managers.yaml` in test-infra runs both images on `n2d-standard-32`; its comment says the shape "has 2 numa nodes to enable resource managers node e2e tests". The VMs come up with one NUMA node, so th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143380)

**Metadata:**
- Created: 2026-10-24
- Comments: 5
- State: open

### kubernetes/kubernetes#143375: [Failing Test] alpha containerd node e2e jobs: CompositePodGroup depends on disabled TopologyAwareWorkloadScheduling

### Which jobs are failing?

- ci-kubernetes-node-e2e-containerd-alpha-features
- ci-kubernetes-node-e2e-containerd-alpha-slow-features

### Which tests are failing?

All of them. The e2e_node test binary exits during init on every ginkgo process, so no specs run (`kubetest.Node Tests` / `Overall`)....

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143375)

**Metadata:**
- Created: 2026-10-24
- Comments: 2
- State: open

### kubernetes/kubernetes#143374: [Failing Test] containerd main COS jobs: runc requires GLIBC_2.38 after kubekins trixie bump

### Which jobs are failing?

- ci-cri-containerd-node-e2e-features
- ci-cos-containerd-main-node-e2e-features
- ci-cgroup-systemd-containerd-node-e2e
- ci-cos-cgroupv1-containerd-node-e2e
- ci-containerd-e2e-ubuntu-gce

### Which tests are failing?

Every test that starts a pod on a COS node:

- nod...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143374)

**Metadata:**
- Created: 2026-10-24
- Comments: 2
- State: open

### kubernetes/kubernetes#143373: DRA device taint eviction ignores DeviceToleration with empty effect, although the API says empty matches all effects

### What happened?


A claim request with a `DeviceToleration` that has no `effect` does not protect the pod from a `NoExecute` device taint. 
The device taint eviction controller evicts the pod as if there were no toleration.


Observed on a v1.37.1 cluster with the example driver, same key/value t...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143373)

**Metadata:**
- Created: 2026-10-24
- Comments: 4
- State: open

### kubernetes/kubernetes#143371: [Flaking Test] kubetest.Up: kube-up picks a COS image that is not ready yet

### Which jobs are flaking?

- `ci-kubernetes-e2e-gci-gce` (sig-release-master-blocking)
- `ci-kubernetes-e2e-gce-device-plugin-gpu` (sig-release-master-blocking)
- `ci-kubernetes-e2e-gce-cos-default-master` (sig-release-master-blocking)
- `ci-kubernetes-gce-conformance-latest-1-37` (sig-release-1.3...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143371)

**Metadata:**
- Created: 2026-10-24
- Comments: 4
- State: open

### kubernetes/kubernetes#143385: kubectl: match verbosity flag by prefix in GetLogVerbosity

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

`GetLogVerbosity` (`staging/src/k8s.io/kubectl/pkg/cmd/cmd.go`) reads the klog verbosity from `os.Args` before cobra parses flags. It used `strings.Contains`, so any argument that merel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143385)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143382: cluster/gce: retry network creation on transient API errors

Wrap gcloud compute networks create in a bounded retry loop with exponential backoff and postcondition visibility check to handle transient GCE API errors (such as HTTP 502).

Addresses: https://github.com/kubernetes/kubernetes/issues/143250

<!--  Thanks for sending a pull request!  Here are some t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143382)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143381: kubectl: close file in kuberc SavePreference

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

`kuberc.SavePreference` opens the kuberc file with `os.OpenFile` and never closes it. Two commands call it: `kubectl kuberc set`, and `kubectl kuberc view` when it generates a default file.

On...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143381)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143379: Fix Indexed Job per-index backoff blocking higher indexes

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

For Indexed Jobs with `backoffLimitPerIndex`, `manageJob` used to take only the first `diff` pending indexes (`firstPendingIndexes`) and then drop any still in per-index backoff. If those leading indexes were all del...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143379)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143378: DRA: avoid panic when a ResourceSlice device list changes duringtaint processing

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A `DeviceTaintRule` event can reach `Tracker.syncSlice` after the ResourceSlice informer store has received an updated slice, but before the tracker has updated its cached copy. The two copies can then have different...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143378)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143377: test/e2e_node: remove SeccompDefault feature label

#### What type of PR is this?

/kind cleanup
/sig node
/area test

#### What this PR does / why we need it:

Removes the `SeccompDefault` e2e `Feature` label. It isn't a feature gate (`seccompDefault` is a plain kubelet config field) and the test sets it itself via `tempSetCurrentKubeletConfig`, so ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143377)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143376: dra: honor empty effect in DeviceToleration for NoExecute eviction

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`DeviceToleration.effect` says "Empty means match all taint effects", and `resourceclaim.ToleratesTaint` implements that. The device taint eviction controller skipped every toleration whose effect was not exactly `No...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143376)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143372: apiserver: share one events storage between core/v1 and events.k8s.io

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:
kube-apiserver built two separate `events` storage instances: one for `core/v1` (pkg/registry/core/rest/storage_core_generic.go) and one for `events.k8s.io/v1` (pkg/registry/events/rest/storage_...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143372)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143370: fix flake test for testForceDetachMetric in reconciler

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143370)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143368: fix e2e cpu limit cgroup expectations when e2e.test is not built for linux


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143368)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143367: Fix conversion gen cross package conversions

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

When a type references a struct from another API group (for example `authorization/v1alpha1.AuthorizationConditionsRequest` -> `admission/v1.AdmissionRequest`, or `AuthorizationConditionsResponse` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143367)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143366: Clarify ContainerStatus.imageID documentation for CRI differences

#### What type of PR is this?

/kind documentation
/sig node
/sig docs

#### What this PR does / why we need it:

Clarifies the godoc for `ContainerStatus.ImageID`. The format of `imageID` is determined by the container runtime (CRI) and is not guaranteed to be consistent across runtimes, ru...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143366)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143364: Add kube-apiserver --disable-pod-subresources flag

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add a static kube-apiserver flag that disables selected pod subresources (attach, ephemeralcontainers, eviction, exec, log, portforward, proxy, resize). Disabled subresources are not registered, so they are absen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143364)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58320: Improvement for k8s.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/

The instructions here:

"View the app
[Pods](https://kubernetes.io/docs/concepts/workloads/pods/) that are running inside Kubernetes are running on a private, isolated network. By default they are visible from other pods and services within the same Kubernetes cluster, but not outside that network. ...

🔗 [Link](https://github.com/kubernetes/website/issues/58320)

**Metadata:**
- Created: 2026-10-24
- Comments: 1
- State: open

### kubernetes/website#58318: [pt-br] Update content/en/docs/concepts/services-networking/service.md

Update the Brazilian Portuguese (pt-br) localization of the [Service](https://kubernetes.io/docs/concepts/services-networking/service/) page to match the current English source.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted

🔗 [Link](https://github.com/kubernetes/website/issues/58318)

**Metadata:**
- Created: 2026-10-24
- Comments: 0
- State: open

### kubernetes/website#58317: [pt-br] Add concepts/resource-management/dynamic-resource-allocation/dra-api.md

Adds the Brazilian Portuguese (pt-br) localization of the [DRA API Objects](https://kubernetes.io/docs/concepts/resource-management/dynamic-resource-allocation/dra-api/), based on the current English source.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted

🔗 [Link](https://github.com/kubernetes/website/issues/58317)

**Metadata:**
- Created: 2026-10-24
- Comments: 0
- State: open

### kubernetes/website#58316: [pt-br] Add concepts/resource-management/dynamic-resource-allocation/_index.md

Adds the Brazilian Portuguese (pt-br) localization of the [Dynamic Resource Allocation](https://kubernetes.io/docs/concepts/resource-management/dynamic-resource-allocation/), based on the current English source.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted

🔗 [Link](https://github.com/kubernetes/website/issues/58316)

**Metadata:**
- Created: 2026-10-24
- Comments: 0
- State: open

### kubernetes/website#58315: [pt-br] Add concepts/resource-management/_index.md

Adds the Brazilian Portuguese (pt-br) localization of the [Resource Management](https://k8s.io/docs/concepts/resource-management/), based on the current English source.

/language pt
/kind feature
/area localization
/sig docs
/assign
/triage accepted

🔗 [Link](https://github.com/kubernetes/website/issues/58315)

**Metadata:**
- Created: 2026-10-24
- Comments: 0
- State: open

### kubernetes/website#58314: Add Prepare.sh Kubernetes playground to the tutorial prerequisites

I'd like to suggest adding the Prepare.sh Kubernetes playground to content/en/includes/task-tutorial-prereqs.md, next to iximiuz Labs, Killercoda and KodeKloud.

- Free account, no credit card.
- Single-node k3s on a dedicated VM with kubectl ready, in a browser terminal or VS Code.

Link: https://p...

🔗 [Link](https://github.com/kubernetes/website/issues/58314)

**Metadata:**
- Created: 2026-10-24
- Comments: 1
- State: open

### kubernetes/test-infra#38157: add kops ec2 k/k build job

https://github.com/kubernetes/kops/blob/master/tests/e2e/scenarios/build/run-test.sh doesn't work correctly on ec2. I created an ec2 variant to debug it. Also, the gce one was handwritten so I migrated it the generator.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38157)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38155: sig-node: enable AllBeta for alpha containerd node e2e test binary

`ci-kubernetes-node-e2e-containerd-alpha-features` and `ci-kubernetes-node-e2e-containerd-alpha-slow-features` have been failing since 2026-10-22. The e2e_node test binary exits during startup:

```
ERROR: initialize feature gates: CompositePodGroup is enabled, but depends on features that are disab...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38155)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38151: CSI: align Azure, SMB and NFS CAPZ job refs to release-1.27

### What this PR does / why we need it

Align every `cluster-api-provider-azure` checkout in the five CSI job configuration files to `release-1.27`:

| Configuration | CAPZ refs updated | Previous refs |
| --- | ---: | --- |
| Azure Disk CSI Driver | 11 | `release-1.21`, `release-1.23`, `main` |
| A...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38151)

**Metadata:**
- Created: 2026-10-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6475: Feature Request: Improve Pod Status Not Ready When all Containers Are Not Ready

@kubernetes/sig-cli-feature-requests

# Feature Request: Improve Pod Status Not Ready When all Containers Are Not Ready

## Summary

I would like to propose improving the human-readable Pod status displayed by `kubectl get pods` when a Pod has multiple containers and one or more containers are not y...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6475)

**Metadata:**
- Created: 2026-10-24
- Comments: 1
- State: open

### envoyproxy/gateway#10392: TCPRoute/TLSRoute/UDPRoute parentRef processing order is nondeterministic

*Description*:

When a TCPRoute has multiple parentRefs that resolve to the same TCP listener, which parentRef gets `Accepted=True` and which gets `Accepted=False` (`UnsupportedValue`, "Multiple routes on the same TCP listener") is nondeterministic.

`processTCPRouteParentRefs` iterates `tcpRoute.Pa...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10392)

**Metadata:**
- Created: 2026-10-25
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-25 03:08:46*
