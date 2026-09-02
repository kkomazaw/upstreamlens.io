---
title: "Upstream Github - 2026-09-02"
description: "CNCF upstream activity from github"
pubDate: 2026-09-02
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/auth", "needs-triage", "needs-sig", "sig/node", "pr", "kind/cleanup", "area/apiserver", "sig/api-machinery", "size/S", "release-note-none", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/L", "sig/apps", "do-not-merge/cherry-pick-not-approved", "release-note", "lgtm", "size/XXL", "sig/architecture", "area/kubelet", "sig/scheduling", "sig/storage", "sig/autoscaling", "wg/device-management", "area/test", "size/XS", "approved", "sig/testing", "do-not-merge/hold", "area/conformance", "area/kubectl", "sig/cli", "area/code-generation", "sig/network", "size/M", "cncf-cla: no", "do-not-merge/invalid-commit-message", "do-not-merge/needs-kind", "area/kube-proxy", "kind/failing-test", "ok-to-test", "kind/api-change", "kind/feature", "do-not-merge/release-note-label-needed", "cloud-provider-gcp", "do-not-merge/work-in-progress", "size/XL", "area/cluster-autoscaler", "autoscaler", "area/provider/azure", "area/vertical-pod-autoscaler", "area/provider/gce", "kind/documentation", "language/ko", "area/localization", "website", "sig/docs", "language/zh", "language/en", "prometheus", "release", "client_rust", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141760: [InPlacePodLevelResourcesVerticalScaling] kubelet: "not implemented" cgroup errors on Windows nodes during pod status sync & logging typo in `convertToAPIPodLevelResourcesStatus`

### What happened?

With the `InPlacePodLevelResourcesVerticalScaling` feature gate enabled in Kubernetes v1.36 (PR #132919 / KEP-5419), two issues occur in `pkg/kubelet/kubelet_pods.go`:


#### Issue 1: Frequent cgroup error logs on Windows worker nodes

Pod status `convertToAPIPodLevelResourcesSta...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141760)

**Metadata:**
- Created: 2026-09-01
- Comments: 4
- State: open

### kubernetes/kubernetes#141774: Support PKCS#8-encoded ECDSA keys in keyutil.ParsePublicKeysPEM

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`keyutil.parseECPrivateKey` only tried `x509.ParseECPrivateKey` (SEC1 / RFC 5915), so an ECDSA private key in unencrypted **PKCS#8** form (a `-----BEGIN PRIVATE KEY-----` block, e.g. the default output of `openssl genp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141774)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10233: Fix drastic scale down of nodes when SKU.Capacity quickly equals 0

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
/kind regression...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10233)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10230: Introduce Cloud KMS error code



#### What type of PR is this?

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
/kind regression
-->
...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10230)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10229: Add AEP for vpa-slice-node-label

#### What type of PR is this?
/kind documentation
/kind feature

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
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10229)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141773: keyutil.ParsePublicKeysPEM rejects PKCS#8-encoded ECDSA keys

**What happened?**

`keyutil.ParsePublicKeysPEM` / `PublicKeysFromFile` (in `k8s.io/client-go/util/keyutil`) reject an ECDSA private key encoded in unencrypted **PKCS#8** form (a `-----BEGIN PRIVATE KEY-----` block), failing with:

```
data does not contain any valid RSA or ECDSA public keys
```

Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141773)

**Metadata:**
- Created: 2026-09-02
- Comments: 1
- State: open

### kubernetes/kubernetes#141769: Feature: Add metrics collection endpoint

This would improve the developer experience significantly.

---
_Contribution by @a18-n03_

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141769)

**Metadata:**
- Created: 2026-09-01
- Comments: 2
- State: open

### kubernetes/kubernetes#141768: Feature: Support for custom themes in config

It would be useful to support custom theme configuration in the config file, allowing users to override default colors without forking.

---
_This issue was created as a contribution by @a18-n03._

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141768)

**Metadata:**
- Created: 2026-09-01
- Comments: 2
- State: open

### kubernetes/kubernetes#141778: kube-apiserver: use contextual logging

**What this PR does / why we need it**:

Migrates the remaining global `klog` calls in `cmd/kube-apiserver` to contextual logging:

- `Run()`: use `klog.FromContext(ctx)` for the version and Golang settings logs
- `StartTestServer()`: use `klog.FromContext(tCtx)` for the shutdown failure log

With t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141778)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141777: Automated cherry pick of #141329: fix job pod could not be removed while removing finalizer failed

Cherry pick of #141329 on release-1.35.

#141329: fix job pod could not be removed while removing finalizer failed

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141777)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141776: Automated cherry pick of #141329: fix job pod could not be removed while removing finalizer failed

Cherry pick of #141329 on release-1.36.

#141329: fix job pod could not be removed while removing finalizer failed

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141776)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141775: Automated cherry pick of #141329: fix job pod could not be removed while removing finalizer failed

Cherry pick of #141329 on release-1.37.

#141329: fix job pod could not be removed while removing finalizer failed

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141775)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141772: Add API testdata for 1.37, remove 1.33

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141772)

**Metadata:**
- Created: 2026-09-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141771: use podutil.ContainerIter to iterate over containers and init containers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Iterating over containers and init containers using `append(pod.Spec.Containers, pod.Spec.InitContainers...)` allocates a new backing slice and copies large `v1.Container` structs by value. This causes unnecessar...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141771)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141770: add BenTheElder to conformance approvers

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141770)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141767: kubectl delete: stop waiting when list and watch are forbidden

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

A caller granted `delete` but not `list` or `watch` on a resource never sees `kubectl delete` terminate. The delete itself succeeds, then the command spins:

```
$ kubectl delete pod -n my-ns my-pod
pod "my-pod" dele...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141767)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141765: validation-gen: honor +k8s:validation-gen-input on --readonly-pkg

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141765)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141764: Add e2e test: NetworkPolicy default-deny blocks LoadBalancer Local externalTrafficPolicy ingress

Add e2e test: NetworkPolicy default-deny blocks LoadBalancer Local externalTrafficPolicy ingress

## Summary

Adds an e2e test that validates a default-deny ingress NetworkPolicy blocks
external ingress traffic even when a LoadBalancer service has
`externalTrafficPolicy=Local` (which preserves clien...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141764)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141763: e2e/network: add WithFeatureGate to LocalhostNodePorts tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141763)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141762: Remove MultiCIDRServiceAllocator and DisableAllocatorDualWrite feature gates

#### What this PR does / why we need it:
Removes the `MultiCIDRServiceAllocator` and `DisableAllocatorDualWrite` feature gates. These were both GA in 1.34 but we forgot to lock `DisableAllocatorDualWrite` until 1.35. It is simpler to remove them both together so [we decided not to remove `MultiCIDR...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141762)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141761: validation-gen: fix nil member deref in the requiredness lint rule

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141761)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141759: node: fg: remove KubeletPodResources{DynamicResources,Get}

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
Remove podresources-API related FGs which were slated for removal in 1.38

#### Which issue(s) this PR is related to:
N/A

#### Special notes for your reviewer:
Do we need to obey to emulation support f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141759)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141758: node: fg: remove DisableCPUQuotaWithExclusiveCPUs

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:
The FG removal was planned for 1.38, so delete it

#### Which issue(s) this PR is related to:
Related to https://github.com/kubernetes/kubernetes/pull/127525

#### Special notes for your reviewer:
Do we...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141758)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141756: e2e auth: use unprivileged container port in projected podcertificate…

#### What type of PR is this?
/kind bug
/kind failing-test

#### What this PR does / why we need it:
In environments where `net.ipv4.ip_unprivileged_port_start` is enforced (default 1024), the Projected PodCertificate conformance test fails because the mTLS server container runs under a Restric...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141756)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141755: Migrate labels annotations cel

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141755)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141754: kubelet: sort containers by RestartCount



<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contribut...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141754)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141753: apimachinery: migrate ObjectMeta resourceVersion validation to DV

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR migrates the `ObjectMeta.resourceVersion` update validation from handwritten validation to declarative validation.

- Adds an alpha 1.38 custom validation on `ObjectMeta`.
- Preserves the existin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141753)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1330: ☂️ Release 1.37 plan

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1330)

**Metadata:**
- Created: 2026-09-01
- Comments: 1
- State: open

### kubernetes/cloud-provider-gcp#1329: Onboard controllers onto Consistency Framework

This task is to migrate controllers to use the consistency [framework](https://pkg.go.dev/k8s.io/kubernetes@v1.36.0-rc.0/pkg/controller/util/consistency) in client-go. A controller making an incorrect decision on a stale watch cache can lead to major issues. The framework addresses this by ensuring ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1329)

**Metadata:**
- Created: 2026-09-01
- Comments: 2
- State: open

### kubernetes/cloud-provider-gcp#1331: Mitigate informer cache staleness with ConsistencyStore in controllers

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Integrates controllers in `cloud-provider-gcp` with the `ConsistencyStore` cache staleness mitigation framework to prevent race conditions and transient regressions caused by informer cache lag after API server...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1331)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10231: Identified Vulnerabilities in cluster-autoscaler

cluster-autoscaler at 1.35.2 uses packages golang.org/x/crypto at 0.47.0, which is subject to the following public CVEs

CVE-2026-46595
CVE-2026-39833
CVE-2026-39830
CVE-2026-39834
CVE-2026-42508
CVE-2026-39832
CVE-2026-39831
CVE-2026-46597
CVE-2026-39829

Requesting that  cluster-autoscaler 1.35.2 ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10231)

**Metadata:**
- Created: 2026-09-01
- Comments: 1
- State: open

### kubernetes/autoscaler#10232: Bump deps to 1.37

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I missed these in https://github.com/kubernetes/autoscaler/pull/10216

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10232)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57391: [ko] Translate content/en/docs/setup/production-environment/tools/kubeadm/setup-ha-etcd-with-kubeadm.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/tools/kubeadm/setup-ha-etcd-with-kubeadm.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/setup-ha-etcd-with-...

🔗 [Link](https://github.com/kubernetes/website/issues/57391)

**Metadata:**
- Created: 2026-09-01
- Comments: 1
- State: open

### kubernetes/website#57386: [zh-cn] Fix Redis example links in Job tutorial

### Description

Adds the missing leading slash to two Chinese Redis example links so they resolve from `/zh-cn/examples/` instead of being appended to the current documentation path.

Validation:
- `git diff --check`
- `PYTHONUTF8=1 python scripts/linkchecker.py -n -f "content/zh-cn/docs/tasks/job/...

🔗 [Link](https://github.com/kubernetes/website/pull/57386)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57382: Fix repeated words and misspellings in English docs

Small prose corrections found while reading through the English docs. Each is a duplicated word, a wrong article, or a misspelling.

| Page | Change |
| --- | --- |
| `setup/production-environment/tools/kubeadm/dual-stack-support.md` | "an IPv4 and and IPv6 address range" to "an IPv4 and IPv6 addres...

🔗 [Link](https://github.com/kubernetes/website/pull/57382)

**Metadata:**
- Created: 2026-09-01
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_rust: v0.25.1

### Fixed

- The `EncodeLabelSet` and `EncodeLabelValue` derive macros now emit spanned compile errors for invalid input instead of panicking, so diagnostics point at the offending type or attribute rather than at the derive site. See [PR 307](https://github.com/prometheus/client_rust/pull/307).

### Changed

- Updated `prometheus-client-derive-encode` to `v0.5.1`, which updates its `syn` dependency to `v3`.

🔗 [Link](https://github.com/prometheus/client_rust/releases/tag/v0.25.1)

**Metadata:**
- Version: v0.25.1
- Published: 2026-09-01
- Prerelease: No

### containerd/containerd#14083: NRI: external plugin registration during a long-grace StopContainer blocks all container lifecycle operations on the node until the stop completes

### Description

Registering an external NRI plugin while a graceful container stop is in flight freezes every container lifecycle operation on the node (starts, stops, sandbox creation/removal) until that stop finishes — up to the pod's full terminationGracePeriodSeconds, which in our fleet is comm...

🔗 [Link](https://github.com/containerd/containerd/issues/14083)

**Metadata:**
- Created: 2026-09-01
- Comments: 0
- State: open

### containerd/containerd#14080: Stuck CRI image stuck after import with index name

### Description

If I import an image into the k8s.io namespace while setting an index name for the top level manifest, we can end up in a state where the CRI image will be stuck until Containerd is restarted. Most likely caused by some cache in the CRI service holding onto the image.

### Steps to ...

🔗 [Link](https://github.com/containerd/containerd/issues/14080)

**Metadata:**
- Created: 2026-09-01
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-09-02 02:47:52*
