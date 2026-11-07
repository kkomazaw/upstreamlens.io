---
title: "Upstream Github - 2026-11-07"
description: "CNCF upstream activity from github"
pubDate: 2026-11-07
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "needs-sig", "needs-triage", "sig/api-machinery", "sig/node", "wg/device-management", "kind/flake", "sig/apps", "pr", "area/kubelet", "kind/cleanup", "size/L", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "sig/scheduling", "release-note", "needs-rebase", "size/XXL", "kind/feature", "sig/testing", "do-not-merge/work-in-progress", "sig/storage", "kind/api-change", "sig/instrumentation", "area/code-generation", "area/apiserver", "approved", "do-not-merge/release-note-label-needed", "lgtm", "size/XS", "kind/dependency", "size/M", "do-not-merge/cherry-pick-not-approved", "do-not-merge/needs-kind", "ok-to-test", "sig/windows", "area/kubectl", "sig/cli", "autoscaler", "cloud-provider-vsphere", "envoyproxy", "gateway", "containerd", "accelerated-container-image"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143910: [Do not review] PoC: DRA preemption with NominationExtensions (KEP-5690)

#### What type of PR is this?

/kind feature
/sig scheduling

#### What this PR does / why we need it:

Proof of concept for DRA preemption (KEP-5690), opened as a draft to review the whole approach in one place. Not meant to be merged as is.

It consists of:

- The 19 commits of #143892, unchanged:...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143910)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143907: KEP-6371: Add node lifecycle controller --node-liveness-source

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

Implements the main feature of KEP-6371 to allow external node liveness detection. Node lease writes are the largest single class of apiserver writes (~29% in a 5000-node scalability run). Extern...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143907)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143899: KEP-5999: Graduate h2c Probes to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143899)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143889: KEP-4939: Graduate gRPC probe TLS to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143889)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: cluster-autoscaler-1.36.2

## Security

The release images were rebuilt with Go 1.26.10, which includes the `crypto/x509` mitigation for [CVE-2026-111943 / GO-2026-6809](https://pkg.go.dev/vuln/GO-2026-6809). The refreshed Distroless trust bundle excludes `emSign ECC Root CA - G3` and `AAA Certificate Services`, addressing the image rebuild request in [#10621](https://github.com/kubernetes/autoscaler/issues/10621).

## Changes by Kind

### Bug or Regression

- Exclude GPU-labeled unmanaged nodes with unavailable G...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.36.2)

**Metadata:**
- Version: cluster-autoscaler-1.36.2
- Published: 2026-11-06
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.35.3

## Security

The release images were rebuilt with Go 1.26.10, which includes the `crypto/x509` mitigation for [CVE-2026-111943 / GO-2026-6809](https://pkg.go.dev/vuln/GO-2026-6809). The refreshed Distroless trust bundle excludes `emSign ECC Root CA - G3` and `AAA Certificate Services`, addressing the image rebuild request in [#10621](https://github.com/kubernetes/autoscaler/issues/10621).

## Changes by Kind

### Bug or Regression

- Exclude GPU-labeled unmanaged nodes with unavailable G...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.35.3)

**Metadata:**
- Version: cluster-autoscaler-1.35.3
- Published: 2026-11-06
- Prerelease: No

### kubernetes/autoscaler: cluster-autoscaler-1.34.6

## Security

The release images were rebuilt with Go 1.26.10, which includes the `crypto/x509` mitigation for [CVE-2026-111943 / GO-2026-6809](https://pkg.go.dev/vuln/GO-2026-6809). The refreshed Distroless trust bundle excludes `emSign ECC Root CA - G3` and `AAA Certificate Services`, addressing the image rebuild request in [#10621](https://github.com/kubernetes/autoscaler/issues/10621).

## Changes by Kind

### Bug or Regression

- Exclude GPU-labeled unmanaged nodes with unavailable G...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.34.6)

**Metadata:**
- Version: cluster-autoscaler-1.34.6
- Published: 2026-11-06
- Prerelease: No

## Updates

### kubernetes/kubernetes: v1.38.0-beta.0


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.38.0-beta.0)

**Metadata:**
- Version: v1.38.0-beta.0
- Published: 2026-11-06
- Prerelease: Yes

### kubernetes/kubernetes#143908: Investigate goroutine panic handling issues

### What happened?

PR #143845 added HandleCrash calls to the concurrent watch decoder’s goroutines. During review, we found that adding a panic handler alone was not enough. If a worker recovers from a panic without publishing a result, its caller can wait indefinitely. Recovery must also ensure th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143908)

**Metadata:**
- Created: 2026-11-06
- Comments: 4
- State: open

### kubernetes/kubernetes#143905: List with `limit` and `resourceVersion` (no `resourceVersionMatch`) is served at the latest revision, not the exact one, when the field selector names one object

### What happened?

A list request with `limit=<n>` and `resourceVersion=<rv>`, `rv` not 0, and no
`resourceVersionMatch` is served at `<rv>`, except when the field selector names a single object:

- `GET /api/v1/namespaces/<ns>/configmaps?fieldSelector=metadata.name=<name>&...`
- `GET /api/v1/confi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143905)

**Metadata:**
- Created: 2026-11-06
- Comments: 2
- State: open

### kubernetes/kubernetes#143903: SSA /status acquires ownership of additional root fields reset by the CRD status strategy

### What happened?

Server-side Apply on a CRD's `/status` subresource can acquire ownership of an unchanged, non-status root field that the status strategy restores from the old object. The original main-endpoint manager's subsequent change then conflicts with that status ownership.

This requires ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143903)

**Metadata:**
- Created: 2026-11-06
- Comments: 1
- State: open

### kubernetes/kubernetes#143901: ResourceClaim updates fail with "spec: field is immutable" when opaque parameters are not canonical JSON

### What happened?

A ResourceClaim created with the Python client (kubernetes 37.0.2) cannot be labeled afterwards:

```
$ kubectl label resourceclaim claim-py x=y
The ResourceClaim "claim-py" is invalid: spec: Invalid value: null: field is immutable
```

The client sends `"parameters": {"a": "b", ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143901)

**Metadata:**
- Created: 2026-11-06
- Comments: 1
- State: open

### kubernetes/kubernetes#143888: [Falking Test] [sig-apps] StatefulSet StatefulSet Recreate Update Strategy should recreate stuck pods with ImagePullBackOff when the update strategy is Recreate [FeatureGate:StatefulSetRecreateStrategy] [Beta]

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-ubuntu-gce-containerd
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-ppc64le-e2e-alpha-enabled-default
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kub...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143888)

**Metadata:**
- Created: 2026-11-06
- Comments: 3
- State: open

### kubernetes/kubernetes#143911: kubelet: suspend PLEG events while SyncPod is running

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

While SyncPod() runs, its own CRI calls cause PLEG to relist the pod repeatedly. These events are redundant, since if the sync changed the pod, postSync() requests a relist afterwards anyway.

The pod w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143911)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143909: remove RecursiveReadOnlyMounts feature gate

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143909)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143904: Label operation type for consistent read wait

/kind feature

```release-note
Add verb label to apiserver_watch_cache_consistent_read_total metric
```

#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143904)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143902: Report ObjectMeta validation errors once on update

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

When you update an object, the API server checks the metadata two times:

1. the generic check (`validateCommonFields`)
2. the check in the strategy (`strategy.ValidateUpdate`)

Most strategies alr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143902)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143898: test/images: bump agnhost VERSION

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143898)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143897: Automated cherry pick of #143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

Cherry pick of #143603 on release-1.34.

#143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143897)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143896: Automated cherry pick of #143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

Cherry pick of #143603 on release-1.35.

#143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143896)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143895: Automated cherry pick of #143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

Cherry pick of #143603 on release-1.36.

#143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143895)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143894: Automated cherry pick of #143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

Cherry pick of #143603 on release-1.37.

#143603: test/integration/job: suspend and delete job in cleanUp to prevent pod recreation race

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### Wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143894)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143892: [Do not review] DRA preemption POC

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143892)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143886: topologymanager: fix pod-scope check in TestAdmit and include allocation errors

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143886)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143884: filesystem: fail MkdirAll when the Windows path exists as a file

#### What type of PR is this?

/kind bug
/sig windows
/sig node

#### What this PR does / why we need it:

`pkg/util/filesystem.MkdirAll` is the helper the kubelet uses instead of `os.MkdirAll`, because `os.MkdirAll` ignores the permission bits on Windows (golang/go#65377). The Windows implementatio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143884)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143883: Pr 143456 poc

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143883)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143877: kubelet: write hostAliases before node /etc/hosts for hostNetwork pods

For hostNetwork pods kubelet appended spec.hostAliases after the node's /etc/hosts. Resolvers use the first matching entry, so any node entry for the same hostname silently shadowed the pod's hostAliases.

Write hostAliases entries first so they take precedence.

<!--  Thanks for sending a pull requ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143877)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143874: Cache OpenAPI v3 resources in client-go and kubectl

- `client-go/openapi3`: add GVK-indexed `Resources` cache (`SchemaForGVK`, `GetConsumes`, `SupportsQueryParam`)
  - unit test coverage: `97.8%` in `client-go/openapi3`
- `cli-runtime/resource`: use `openapi3.Resources` in `queryParamVerifierV3`
  -  unit test coverage: `100%` in `cli-runtime/pkg/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143874)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: cluster-autoscaler-1.37.0

## Urgent Upgrade Notes

### Action Required

- **CapacityQuota users:** update the CapacityQuota CRD and migrate manifests to `autoscaling.x-k8s.io/v1beta1`. The `v1alpha1` API remains served but is deprecated; `v1beta1` is now the storage version. The updated CRD is available [in this release](https://github.com/kubernetes/autoscaler/blob/cluster-autoscaler-1.37.0/cluster-autoscaler/apis/config/crd/autoscaling.x-k8s.io_capacityquotas.yaml). ([#9890](https://github.com/kubernetes/autoscaler...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-1.37.0)

**Metadata:**
- Version: cluster-autoscaler-1.37.0
- Published: 2026-11-06
- Prerelease: No

### kubernetes/cloud-provider-vsphere#1940: 🌱 Bump E2E test

<!-- Thanks for sending a pull request! -->

**What this PR does / why we need it**:
 Bump E2E test

**Which issue this PR fixes** *(optional, in `fixes #<issue number>(, fixes #<issue_number>, ...)` format, will close that issue when PR gets merged)*: fixes #

**Special notes for your reviewer**:

...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1940)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1939: 🌱 Bump to k8s 1.38.0 beta.0 and go 1.27.0

<!-- Thanks for sending a pull request! -->

**What this PR does / why we need it**:
Bump to k8s 1.38.0 beta.0 and go 1.27.0

**Which issue this PR fixes** *(optional, in `fixes #<issue number>(, fixes #<issue_number>, ...)` format, will close that issue when PR gets merged)*: fixes #

**Special not...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1939)

**Metadata:**
- Created: 2026-11-06
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/gateway: v1.10.0

# Release Announcement

Check out the [v1.10.0 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.10.0/) to learn more about the release.

## What's Changed
* chore: replace sets.NewString with sets.New[string] by @mmmommm in https://github.com/envoyproxy/gateway/pull/9704
* feat(chart): Add TLS certificate expiration to the Envoy Global dashboard by @FlorisFeddema in https://github.com/envoyproxy/gateway/pull/9615
* docs: add note about Tempo appProtocol in proxy-trace.m...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.10.0)

**Metadata:**
- Version: v1.10.0
- Published: 2026-11-06
- Prerelease: No

### containerd/accelerated-container-image: Development Build

## Commits
- 0806b5e: Fix device probe, writable rootfs detection and lazy overlay probing (#402) (ZAwei) [#402](https://github.com/containerd/accelerated-container-image/pull/402)

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-06
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-07 04:35:04*
