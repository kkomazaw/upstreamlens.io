---
title: "Upstream Github - 2026-11-26"
description: "CNCF upstream activity from github"
pubDate: 2026-11-26
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "kind/bug", "sig/apps", "sig/cli", "needs-triage", "area/apiserver", "sig/api-machinery", "kind/flake", "needs-sig", "sig/storage", "kind/feature", "pr", "sig/scheduling", "release-note", "size/L", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/kubelet", "sig/node", "wg/device-management", "size/M", "release-note-none", "size/XS", "area/release-eng", "approved", "sig/release", "do-not-merge/work-in-progress", "kind/regression", "area/test", "sig/scalability", "sig/testing", "do-not-merge/cherry-pick-not-approved", "kind/cleanup", "ok-to-test", "area/kubectl", "sig/cluster-lifecycle", "area/kubeadm", "priority/backlog", "size/S", "kind/failing-test", "triage/accepted", "sig/auth", "sig/docs", "language/en", "website", "area/blog", "sig/network", "lgtm", "language/ko", "area/localization", "size/XL", "test-infra", "kube-state-metrics", "autoscaler", "area/vertical-pod-autoscaler", "kind/dependency", "area/cluster-autoscaler", "area/provider/azure", "area/helm-charts", "do-not-merge/release-note-label-needed", "area/dependency", "kubectl", "envoyproxy", "help wanted", "gateway", "cncf", "stage/010-actionable", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#144465: Honor an explicit ConfigMap/Secret/Projected file mode when fsGroup is set

/kind feature
/sig storage

Related: #57923

### What would you like to be added?

A way for an explicit file mode on a ConfigMap, Secret, Projected, or DownwardAPI volume to survive `securityContext.fsGroup`.

Today, if `fsGroup` is set, the kubelet chowns the group and then ORs extra permission bi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144465)

**Metadata:**
- Created: 2026-11-25
- Comments: 2
- State: open

### kubernetes/autoscaler#10730: [cluster-autoscaler-release-1.37] azure: update libs to 1.37

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10730)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10729: VPA Helm chart: meet the PSS restricted profile by default

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The VPA Deployments now meet the Pod Security Standards restricted profile by default, so VPA installs in a namespace that enforces `restricted`. The change applies to the Helm chart and to the manifests in `depl...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10729)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes: v1.37.3


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.3)

**Metadata:**
- Version: v1.37.3
- Published: 2026-11-25
- Prerelease: No

### kubernetes/kubernetes: v1.36.7


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.7)

**Metadata:**
- Version: v1.36.7
- Published: 2026-11-25
- Prerelease: No

### kubernetes/kubernetes: v1.35.11


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.11)

**Metadata:**
- Version: v1.35.11
- Published: 2026-11-25
- Prerelease: No

### kubernetes/kubernetes#144482: kubectl rollout status for a StatefulSet reports success before pods are available when minReadySeconds is set

### What happened?

`kubectl rollout status statefulset/<name>` returns success as soon as all pods are Ready and updated. It does not take `spec.minReadySeconds` into account, so it reports the rollout as complete while `status.availableReplicas` is still lower than `spec.replicas`.

The StatefulSe...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144482)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/kubernetes#144480: Service NodePort/clusterIP can be double-allocated when a create times out after the object was persisted

### What happened?

Under heavy etcd I/O, a `Service` create request can be **committed to etcd but still return an error to the apiserver** (request timeout). The apiserver then rolls back the resources it allocated for that create — including the auto-assigned `nodePort` (and, symmetrically, `clus...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144480)

**Metadata:**
- Created: 2026-11-26
- Comments: 3
- State: open

### kubernetes/kubernetes#144472: DeviceClass with opaque config parameters: a labels-only or empty patch increments metadata.generation

### What happened?

A DeviceClass whose `spec.config` holds opaque parameters gets a new `metadata.generation` on a patch that changes only labels, and also on an empty merge patch (`{}`). The spec does not change. A DeviceClass without `config` keeps its generation on the same labels patch.


### W...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144472)

**Metadata:**
- Created: 2026-11-25
- Comments: 4
- State: open

### kubernetes/kubernetes#144471: k8s.io/apiserver/pkg/storage/cacher: TestWatchNotHangingOnStartupFailure

### Which jobs are flaking?

Only seen in pull-kubernetes-unit.

### Which tests are flaking?

https://prow.k8s.io/view/gs/kubernetes-ci-logs/pr-logs/pull/144423/pull-kubernetes-unit/2125604931304951808

```

[sig-api-machinery] k8s.io/apiserver/pkg/storage: cacher expand_less 	9s
{Failed  === RUN  ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144471)

**Metadata:**
- Created: 2026-11-25
- Comments: 4
- State: open

### kubernetes/kubernetes#144470: Cherry-pick fix: init containers not being started on node restart

### What happened?

Hi, would it be possible to cherry-pick this https://github.com/kubernetes/kubernetes/issues/137710 into previous (1.36 / 1.35) branches?

It actually causes a bigger problem than it looks. 

Cilium uses init containers to load bpf into its network namespace etc etc, however beca...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144470)

**Metadata:**
- Created: 2026-11-25
- Comments: 3
- State: open

### kubernetes/kubernetes#144463: [Flaking Test] [sig-apps] k8s.io/kubernetes/test/integration: daemonset - TestDaemonSetReconcileRobustnessMatrix

### Which jobs are flaking?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-arm64-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-integration-ppc64le-master

### Which tests are flaking?

`k8s.io/kubernetes/test/integration: daemo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144463)

**Metadata:**
- Created: 2026-11-25
- Comments: 2
- State: open

### kubernetes/kubernetes#144483: scheduler: reuse CSI storage capacity data per cycle

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it

For a delayed-binding PVC that needs dynamic provisioning, VolumeBinding Filter lists all CSIStorageCapacity objects and converts topology selectors for each candidate node. This repeats informer traversal and selecto...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144483)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144481: kubelet: cpumanager: don't fail single-numa-node admission because of reusable init container CPUs

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In container scope, the static policy only generates hints whose NUMA mask covers the CPUs handed over by the pod's init containers (`cpusToReuse`), so that the app container reuses them. When the app container does ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144481)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144479: DRA: Preserve opaque parameter bytes on equivalent DeviceClass updates

#### What type of PR is this?

/kind bug
/sig node
/sig api-machinery
/wg device-management

#### What this PR does / why we need it:

DeviceClass updates can incorrectly increment `metadata.generation` even when the actual spec has not changed.

Opaque parameters are stored as `runtime.R...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144479)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144477: storage/cacher: nil-check pred.Field in watchSelector to prevent panic

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
In `staging/src/k8s.io/apiserver/pkg/storage/cacher/cacher.go`, `watchSelector` extracts the namespace, name, and index trigger from the request context or field selector. When a watch is issued without request info in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144477)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144476: [WIP] publishing: drop the stale apimachinery dependency from the kms rule

#### What type of PR is this?

/kind bug
/sig release

#### What this PR does / why we need it:

The kms publishing rule lists apimachinery, which kms has not required since d9131d5b390. Since #143990 that makes the bot publish `k8s.io/kms` with `go 1.27.0` and a stale `replace`, while staging says ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144476)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144475: dynamicresources: release pending allocation when the claim is stored

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144475)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144473: e2e/kubectl: discard stdout in the cluster-info dump smoke test

/kind bug
/sig cli
/sig scalability

The cluster-info dump E2E test checks that the command exits successfully. Its command helper also collects the entire dump in a bytes.Buffer, converts it to a string, and quotes it for the test log. Large dumps can therefore consume several times their output si...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144473)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144469: [release-1.35] Handle corrupted subpath mount points during container restart

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144469)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144468: Reduce API server audit ID generation overhead

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Reduce the cost of generating audit IDs for requests without an `Audit-ID` header. Audit IDs are correlation labels, not credentials or integrity tokens. The API server already accepts a caller-supplied ID.

Fill...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144468)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144467: Fix StatefulSet sync allocating a Pod per spec.replicas ordinal

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144467)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144466: kubectl: resume event watches after stream closure

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl events --watch` could exit with code `0` when the API server closed the stream, silently missing later events.

The command now reconnects from the latest observed resource version. When the initial LIST req...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144466)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144464: kubectl: honor rollout status timeout during API requests

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The list and watch callbacks in `kubectl rollout status` used `context.TODO()`. A slow API response could keep the command running past the configured `--timeout`.

The callbacks now pass the watch context to the API...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144464)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144461: kubeadm: skip directories starting with .. and log relative paths

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The comments incorrectly said sub-directories are ignored, although kubeadm has read them since v1.19.

When patches are mounted through a ConfigMap or Secret, kubelet creates a hidden timestamp directory with symlin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144461)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144460: kubelet: shorten in-flight soft evictions under hard pressure

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

A soft eviction with a long Pod termination grace period can leave the eviction manager waiting in the kill callback while node pressure worsens. The manager then misses the hard eviction threshold until th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144460)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144459: Automated cherry pick of #144168: apiserver: let net/http pool the HTTP/2 test connections

Cherry pick of #144168 on release-1.35.

#144168: apiserver: let net/http pool the HTTP/2 test connections

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144459)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144458: Automated cherry pick of #144167: certificates: build the empty DNSName test certificate by hand

Cherry pick of #144167 on release-1.35.

#144167: certificates: build the empty DNSName test certificate by hand

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144458)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144457: Keep the Quantity formatting buffer on the stack

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`Quantity.String()` put its format buffer on the heap on each call. The cause was an interface call in `CanonicalizeBytes`. Now a small concrete type holds the rounded value, and the buffer stays on the stack. Th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144457)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59273: [en] "Disable DNS horizontal autoscaling" section says "options for tuning"

**This is a Bug Report**

**Problem:**

In "Autoscale the DNS Service in a Cluster", the section "Disable DNS horizontal autoscaling" starts with this sentence:

[`dns-horizontal-autoscaling.md` L151-152](https://github.com/kubernetes/website/blob/main/content/en/docs/tasks/administer-cluster/dns-ho...

🔗 [Link](https://github.com/kubernetes/website/issues/59273)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/website#59272: [en] Gateway API v1.6 release blog: "ExternalName" should be "ExternalHostname", and a typo

**This is a Bug Report**

**Problem:**

The blog post "Gateway API v1.6: TCPRoute and UDPRoute Graduate to Standard" has two small errors.

1. [`index.md` L137](https://github.com/kubernetes/website/blob/main/content/en/blog/_posts/2026/gateway-api-v1-6-release/index.md?plain=1#L137) says "ExternalN...

🔗 [Link](https://github.com/kubernetes/website/issues/59272)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/website#59271: [en] Wrong alt text for the benchmark figure in "Introducing Gateway API Inference Extension"

**This is a Bug Report**

**Problem:**

In the blog post "Introducing Gateway API Inference Extension", the benchmark figure uses the wrong alt text.

[`index.md` L98](https://github.com/kubernetes/website/blob/main/content/en/blog/_posts/2025/introducing-gateway-api-inference-extension/index.md?pla...

🔗 [Link](https://github.com/kubernetes/website/issues/59271)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/website#59270: Improvement for k8s.io/docs/tasks/run-application/configure-pdb/

Provide an explanation for what `minAvailable: 0` does. I suspect it may allow the last pod to be deleted to allow node autoscalers to shuffle nodes around and then schedule a new pod, but there's no text on this page that explains the case (by contrast, `maxAvailable: 0` is covered).

🔗 [Link](https://github.com/kubernetes/website/issues/59270)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### kubernetes/website#59258: [en] Broken anchor in "Using Source IP": `service/#virtual-ips-and-service-proxies` no longer exists

**This is a Bug Report**

**Problem:**

The [Using Source IP](https://kubernetes.io/docs/tutorials/services/source-ip/#terminology) tutorial has two links to an anchor that does not exist:

[`source-ip.md` L38 and L41](https://github.com/kubernetes/website/blob/main/content/en/docs/tutorials/service...

🔗 [Link](https://github.com/kubernetes/website/issues/59258)

**Metadata:**
- Created: 2026-11-25
- Comments: 3
- State: open

### kubernetes/website#59255: [en] Scheduler Performance Tuning: "in that situation" has no antecedent in the Opportunistic Batching section

**This is a Bug Report**

**Problem:**

In [Scheduler Performance Tuning](https://kubernetes.io/docs/concepts/scheduling-eviction/scheduler-perf-tuning/#enabling-opportunistic-batching), the "Enabling Opportunistic Batching" section says:

> With rescoring, the scheduler can continue batching in tha...

🔗 [Link](https://github.com/kubernetes/website/issues/59255)

**Metadata:**
- Created: 2026-11-25
- Comments: 2
- State: open

### kubernetes/website#59267: [ko] Update glossary service.md to match the latest English version

### Description

Sync the Korean glossary entry for Service with the latest English version.

- Reword the first sentence
- Fix a mistranslation ("If more Pods are added or removed")
- Add the missing paragraphs on IP networking / external name (DNS) and Ingress / Gateway
- Align line breaks with th...

🔗 [Link](https://github.com/kubernetes/website/pull/59267)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59263: kubeadm: document loading patches from sub-directories

### Description

This change adds one sentence to the "Customizing with patches" section of the kubeadm `control-plane-flags` documentation page.

The sentence clarifies that kubeadm also reads patch files from sub-directories recursively, in lexical (depth-first) order.

This behavior was not previ...

🔗 [Link](https://github.com/kubernetes/website/pull/59263)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59261: kubeadm: update documentation for 1.38

### Description

- Document the ECDSA-P384 and ML-DSA certificate key algorithm options and note that other components must support ML-DSA. https://github.com/kubernetes/kubernetes/pull/142037
- Document when upgrade previews include the kubeadm-managed etcd static Pod manifest. https://github.com/k...

🔗 [Link](https://github.com/kubernetes/website/pull/59261)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38350: modernise gcsweb

I modernised gcsweb and added several useful features:
1. The Size column is now human readable
2. You can order all the columns with a toggle
3. All the links for files have a small copy icon next to them that gives you the GCS path to the file
4. There are instructions for downloading the files us...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38350)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release: v0.23.1

## Changes by Kind

### Feature

- Bump distroless-iptables to Go 1.27.4/1.26.11 (#4635, @xmudrii) [SIG Release]
- Update Go images to 1.27.4/1.26.11 and remove kube-cross v1.34 variant (#4632, @xmudrii) [SIG Release]
- Update k8s-cloud-builder and k8s-ci-builder to Go 1.27.4/1.26.11 and stop building Kubernetes 1.34 variants because that release is EOL. (#4637, @jeremyrickard) [SIG Release]
- `krel sign blobs` keeps the signatures of a previous run that still verify, so rerunning a release no l...

🔗 [Link](https://github.com/kubernetes/release/releases/tag/v0.23.1)

**Metadata:**
- Version: v0.23.1
- Published: 2026-11-25
- Prerelease: No

### kubernetes/kube-state-metrics#3223: feat(store): add ClusterTrustBundle and PodCertificateRequest metrics

**What this PR does / why we need it:**

Adds opt-in metrics for the two `certificates.k8s.io/v1` kinds that went GA in Kubernetes 1.37: ClusterTrustBundle (cluster-scoped) and PodCertificateRequest (namespaced). Enable them with `--resources=clustertrustbundles,podcertificaterequests`.

ClusterTrus...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3223)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: cluster-autoscaler-chart-9.60.1

Scales Kubernetes worker nodes within autoscaling groups.

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/cluster-autoscaler-chart-9.60.1)

**Metadata:**
- Version: cluster-autoscaler-chart-9.60.1
- Published: 2026-11-25
- Prerelease: No

### kubernetes/autoscaler#10733: [VPA] Bump kubernetes go deps (vpa-release-1.7) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [k8s.io/api](https://redirect.github.com/kubernetes/api) | `v0.36.6` → `v0.36.7` | ![age](https://d...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10733)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10732: [VPA] Bump kubernetes go deps (vpa-release-1.8) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [k8s.io/api](https://redirect.github.com/kubernetes/api) | `v0.37.2` → `v0.37.3` | ![age](https://d...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10732)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10731: [VPA] Bump go tools to v0.37.3 (master)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [k8s.io/api](https://redirect.github.com/kubernetes/api) | `v0.37.2` → `v0.37.3` | ![age](https://d...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10731)

**Metadata:**
- Created: 2026-11-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10728: OWNERS: Add mtrqq to cluster autoscaler approvers.

#### What type of PR is this?

Applies the same change as https://github.com/kubernetes-sigs/cluster-autoscaler/pull/242 already did, but does that in the kubernetes/autoscaler repository. 

I guess all approvers alignment is not needed for this PR as it was already decided on in the previous PR

##...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10728)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10727: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8 from 8.3.0-beta.1 to 8.3.0-beta.2 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8](https://github.com/Azure/azure-sdk-for-go) from 8.3.0-beta.1 to 8.3.0-beta.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/Azure/azure-sdk-for-go/commit/b084840894a9e0f0...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10727)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10726: dependabot(deps): bump github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8 from 8.3.0-beta.1 to 8.3.0-beta.2 in /cluster-autoscaler

Bumps [github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/containerservice/armcontainerservice/v8](https://github.com/Azure/azure-sdk-for-go) from 8.3.0-beta.1 to 8.3.0-beta.2.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/Azure/azure-sdk-for-go/commit/b084840894a9e0f0...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10726)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10725: dependabot(deps): bump the release-1-36-deps group in /cluster-autoscaler with 19 updates

Bumps the release-1-36-deps group in /cluster-autoscaler with 19 updates:

| Package | From | To |
| --- | --- | --- |
| [github.com/Azure/azure-sdk-for-go-extensions](https://github.com/Azure/azure-sdk-for-go-extensions) | `0.1.6` | `0.7.0` |
| [github.com/Azure/azure-sdk-for-go/sdk/azcore](https:/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10725)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10724: dependabot(deps): bump the release-1-35-deps group in /cluster-autoscaler with 16 updates

Bumps the release-1-35-deps group in /cluster-autoscaler with 16 updates:

| Package | From | To |
| --- | --- | --- |
| [github.com/Azure/azure-sdk-for-go-extensions](https://github.com/Azure/azure-sdk-for-go-extensions) | `0.1.6` | `0.7.0` |
| [github.com/Azure/azure-sdk-for-go/sdk/azcore](https:/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10724)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10723: dependabot(deps): bump the release-1-34-deps group in /cluster-autoscaler with 17 updates

Bumps the release-1-34-deps group in /cluster-autoscaler with 17 updates:

| Package | From | To |
| --- | --- | --- |
| [github.com/Azure/azure-sdk-for-go-extensions](https://github.com/Azure/azure-sdk-for-go-extensions) | `0.1.6` | `0.7.0` |
| [github.com/Azure/azure-sdk-for-go/sdk/azcore](https:/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10723)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10722: dependabot(deps): bump the release-1-37-deps group in /cluster-autoscaler with 12 updates

Bumps the release-1-37-deps group in /cluster-autoscaler with 12 updates:

| Package | From | To |
| --- | --- | --- |
| [github.com/Azure/azure-sdk-for-go-extensions](https://github.com/Azure/azure-sdk-for-go-extensions) | `0.6.0` | `0.7.0` |
| [github.com/Azure/azure-sdk-for-go/sdk/azcore](https:/...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10722)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10721: dependabot(deps): bump sigs.k8s.io/cloud-provider-azure/pkg/azclient from 0.23.0 to 0.26.3 in /cluster-autoscaler

Bumps [sigs.k8s.io/cloud-provider-azure/pkg/azclient](https://github.com/kubernetes-sigs/cloud-provider-azure) from 0.23.0 to 0.26.3.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/kubernetes-sigs/cloud-provider-azure/commit/46650d24253cc1741e5bdc1950b1677eec434e02"><code>...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10721)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10720: dependabot(deps): bump sigs.k8s.io/controller-runtime from 0.25.1 to 0.25.3 in /cluster-autoscaler

Bumps [sigs.k8s.io/controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) from 0.25.1 to 0.25.3.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/controller-runtime/releases">sigs.k8s.io/controller-runtime's releases</a>.<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10720)

**Metadata:**
- Created: 2026-11-25
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1914: Load-Balanced Kubernetes Port Forwarding

**What would you like to be added**:

An enhancement to `kubectl port-forward` that supports distributing incoming connections across multiple Pods behind a Kubernetes Service instead of forwarding all traffic to a single selected Pod. Ideally, users should be able to configure the number of Pods to...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1914)

**Metadata:**
- Created: 2026-11-25
- Comments: 1
- State: open

### envoyproxy/gateway#10709: A namespace label change does not trigger a reconcile when only `Gateway.spec.allowedListeners` selects on namespace labels

**Version:** Envoy Gateway v1.10.0, Gateway API v1.6 standard channel.

**What happens**

A Gateway admits ListenerSets from namespaces that match a label selector (`spec.allowedListeners.namespaces.from: Selector`). A ListenerSet created in a namespace without the label is not Accepted, as expected...

🔗 [Link](https://github.com/envoyproxy/gateway/issues/10709)

**Metadata:**
- Created: 2026-11-26
- Comments: 1
- State: open

### cncf/prow-github-actions#764: Add support for Kubernetes-style OWNERS_ALIASES

**Is your feature request related to a problem? Please describe.**
Repositories with multiple directory-scoped `OWNERS` files often share the same groups of reviewers and approvers across directories. Right now `OWNERS_ALIASES` is not read (`docs/prow-for-your-org.md`), leaving two options:

1. Dupl...

🔗 [Link](https://github.com/cncf/prow-github-actions/issues/764)

**Metadata:**
- Created: 2026-11-26
- Comments: 3
- State: open


---

*This content was automatically collected on 2026-11-26 06:48:22*
