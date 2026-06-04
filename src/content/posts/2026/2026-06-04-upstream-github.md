---
title: "Upstream Github - 2026-06-04"
description: "CNCF upstream activity from github"
pubDate: 2026-06-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "area/vertical-pod-autoscaler", "size/M", "release-note-none", "approved", "kind/cleanup", "needs-triage", "autoscaler", "size/XS", "ok-to-test", "triage/accepted", "size/S", "kind/documentation", "do-not-merge/needs-area", "lgtm", "do-not-merge/release-note-label-needed", "area/cluster-autoscaler", "area/provider/aws", "needs-ok-to-test", "kind/feature", "issue", "sig/storage", "kind/flake", "kind/bug", "sig/network", "needs-sig", "sig/scalability", "sig/node", "area/apiserver", "sig/api-machinery", "needs-priority", "size/L", "do-not-merge/contains-merge-commits", "do-not-merge/needs-kind", "area/test", "area/kubelet", "sig/scheduling", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "area/provider/gcp", "sig/cluster-lifecycle", "needs-rebase", "size/XXL", "area/release-eng", "sig/auth", "sig/apps", "sig/windows", "sig/cli", "area/kubeadm", "cncf-cla: no", "sig/instrumentation", "sig/testing", "sig/release", "sig/architecture", "do-not-merge/work-in-progress", "area/conformance", "area/code-generation", "area/ipvs", "sig/cloud-provider", "area/e2e-test-framework", "area/dependency", "sig/etcd", "wg/device-management", "release-note", "sig/autoscaling", "size/XL", "kind/api-change", "do-not-merge/hold", "do-not-merge/needs-sig", "priority/important-soon", "test-infra", "area/provider/azure", "area/jobs", "area/config", "release", "enhancements", "kind/kep", "kind/failing-test", "perf-tests", "kops", "area/nodeup", "area/api", "area/channels", "area/kops-controller", "area/addons", "area/provider/hetzner", "cloud-provider-vsphere", "prometheus", "client_java", "envoyproxy", "envoy", "containerd", "nerdbox", "area/cri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#9736: update contributing doc with deprecation policy



#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

This change adds a link to the kubernetes deprecation policy and some language about when to observe it. This change is being added to help broadcast how deprecations should occur within this repo...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9736)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9733: Add norbertcyran to reviewers

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
/kind...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9733)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6151: KEP: Pod-level Image Pull Duration Metric

### Enhancement Description
- One-line enhancement description: Add a structured `ImagePullDuration` field to `v1.PodStatus` to provide granular observability into image acquisition latency.
- Kubernetes Enhancement Proposal: TBD (I will update this with the PR link once submitted)
- Discussion Link...

🔗 [Link](https://github.com/kubernetes/enhancements/issues/6151)

**Metadata:**
- Created: 2026-06-03
- Comments: 2
- State: open

### kubernetes/enhancements#6152: KEP-6151: Pod-level Image Pull Duration Metric

- One-line PR description:
Add `ImagePullDuration` field to `v1.PodStatus` for enhanced pod-level image acquisition observability.

- Issue link:
https://github.com/kubernetes/enhancements/issues/6151

- Other comments:
This PR adds the initial KEP draft (README.md and kep.yaml) for KEP-6151....

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6152)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### envoyproxy/envoy: v1.35.11

**Summary of changes**:

* Security fixes:
  - [CVE-2026-47774](https://github.com/envoyproxy/envoy/security/advisories/GHSA-22m2-hvr2-xqc8): http2: HTTP/2 streams are now reset if they violate the configured maximum header list size. Uncompressed cookies now count towards ``mutable_max_request_headers_kb`` and ``max_headers_count`` limits, protecting against an HPACK cookie-bomb that could cause excessive memory usage. This can be reverted with ``envoy.reloadable_features.http2_include_cooki...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.35.11)

**Metadata:**
- Version: v1.35.11
- Published: 2026-06-03
- Prerelease: No

## Updates

### kubernetes/autoscaler#9739: Make dependabot manage the VPA 1.7 release branch

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I'd like to start paying attention to VPA patch releases from now on.
The idea here is to get dependabot to patch godeps and the Go version for us in release branches.

#### Which issue(s) this PR fixes:...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9739)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9738: Bump sigs.k8s.io/apiserver-network-proxy/konnectivity-client from 0.35.0 to 0.36.0 in /vertical-pod-autoscaler/test in the kubernetes group across 1 directory

Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [sigs.k8s.io/apiserver-network-proxy/konnectivity-client](https://github.com/kubernetes-sigs/apiserver-network-proxy).

Updates `sigs.k8s.io/apiserver-network-proxy/konnectivity-client` from 0.35.0 to 0.36.0
<de...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9738)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9737: Bump the non-kubernetes group across 2 directories with 1 update

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [github.com/prometheus/common](https://github.com/prometheus/common).
Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [github.com/prometheus/common](https://github.com...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9737)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9735: [vpa-release-1.7] Bump the actions group across 3 directories with 1 update

This is an automated cherry-pick of #9728

/assign adrianmoisey

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9735)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9732: Feat/bump aws examples version

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Update image version to v1.35.0 in AWS example manifests.

#### Which issue(s) this PR fixes:

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
```release-note
NO...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9732)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139498: [Flaking test] [sig-storage] PersistentVolumes NFS with Single PV job timeout failures

### Which jobs are flaking?

- ci-kubernetes-e2e-kind

[Triage: http://go.k8s.io/triage?job=ci-kubernetes-e2e-kind%24&test=PersistentVolumes NFS with](https://storage.googleapis.com/k8s-triage/index.html?job=ci-kubernetes-e2e-kind%24&test=PersistentVolumes%20NFS%20with)

### Which tests are flaking?...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139498)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139497: kube-proxy IPVS with mh scheduler may route traffic to unavailable destinations without mh-fallback

### What happened?

When kube-proxy is configured to use IPVS with the `mh` (Maglev Hashing) scheduler, traffic may fail during endpoint transitions when some backend destinations become unavailable.

The issue happens because IPVS `mh` preserves `last_weight` internally even after a destination wei...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139497)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139496: Enhance SIGKILL log messages

We are trying to monitor and add metrics for our SIGKILL events, but it proves to be quite challenging as the app itself cannot log anything when getting a SIGKILL and the kubelet logs are not informative enough to track.
For now I have found logs with "exitCode=137" to be a good indication for a SI...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139496)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139494: [Flaking Test] load overall (/home/prow/go/src/k8s.io/perf-tests/clusterloader2/testing/load/config.yaml)

### Which jobs are flaking?

* [sig-release-master-informing#gce-master-scale-performance-5000](https://testgrid.k8s.io/sig-release-master-informing#gce-master-scale-performance-5000&exclude-non-failed-tests=)



### Which tests are flaking?

* [ClusterLoaderV2.load overall (/home/prow/go/src/k8s.io...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139494)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139493: [Flake] ci-node-e2e: Containers Lifecycle restartable init containers should not hang in termination if terminated during initialization

### Which jobs are flaking?

ci-kubernetes-node-e2e-containerd

### Which tests are flaking?

E2eNode Suite [It] [sig-node] Containers Lifecycle when A pod with restartable init containers is terminating when Restartable init containers are terminated during initialization should not hang in termina...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139493)

**Metadata:**
- Created: 2026-06-04
- Comments: 1
- State: open

### kubernetes/kubernetes#139491: apiserver: return 400 instead of 500 for invalid DeleteOptions field types

### What happened?

When sending a DELETE request with invalid JSON types for fields in `DeleteOptions`, the API Server returns HTTP 500.

For example, when `gracePeriodSeconds` is provided as a string instead of an integer, the API Server returns an internal server error:

```json
{
  "kind": "Stat...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139491)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139490: apiserver: return 400 instead of 500 for invalid DeleteOptions dryRun type

### What happened?

When sending a DELETE request with an invalid type for `DeleteOptions.dryRun`, the API Server returns HTTP 500.

For example, `dryRun` is expected to be a list of strings, but when it is provided as a string, the API Server returns:

```json
{
  "kind": "Status",
  "apiVersion": ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139490)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139488: apiserver: return 4xx instead of 500 for invalid Binding target fields

### What happened?

When creating a Binding object with invalid or incomplete `target` fields, the API Server returns HTTP 500.

For example, when `target.kind` is unsupported and `target.name` is missing, the response is:

```json
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {},
  "sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139488)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139487: apiserver: return 400 instead of 500 for invalid kind in node deletion request body

### What happened?

When sending a DELETE request to the Node API with an invalid `kind` value in the request body, the API Server returns HTTP 500.

The response is:

```json
{
  "kind": "Status",
  "apiVersion": "v1",
  "metadata": {},
  "status": "Failure",
  "message": "no kind \"fixed\" is regi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139487)

**Metadata:**
- Created: 2026-06-04
- Comments: 3
- State: open

### kubernetes/kubernetes#139486: apiserver: return non-500 response for node proxy request when node has no preferred addresses

### What happened?

When sending a node proxy request to a Node object that does not contain any usable address in `status.addresses`, the API Server returns HTTP 500.

The error message indicates that no preferred node address can be selected:

```bash
{
  "kind": "Status",
  "apiVersion": "v1",
  ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139486)

**Metadata:**
- Created: 2026-06-04
- Comments: 2
- State: open

### kubernetes/kubernetes#139485: apiserver: return 400 instead of 500 for invalid resourceVersion API requests

### What happened?

The Kubernetes API Server returns HTTP 500 Internal Server Error when handling API requests with an invalid `resourceVersion` value.

For example, the following request sets `resourceVersion` to `-1`:

```bash
curl -X GET 'http://127.0.0.1:8001/api/v1/services?watch=true&resource...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139485)

**Metadata:**
- Created: 2026-06-04
- Comments: 4
- State: open

### kubernetes/kubernetes#139499: Improve concurrent store list benchmarking

/kind feature

```release-note
NONE
```

Moving benchmark to more standard `RunParallel` approach for benchmark lowering variance of results and preventing high overhead of spawning unbounded goroutines causing GC pressure.

* **Old approach:** Variance ranges from ±14% to ±20%. Spawning new...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139499)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139495: Reduce times lock is aquired in watch cache during reads

/kind feature

```release-note
NONE
```

The optimization reduces the number of watch cache RLock acquisitions on read paths (List/Get) from 2 to 1.

* *Lower Scale (1,000 pods):** Shows a ~44% to 49% reduction in latency and ~2x increase in throughput (both read list-calls/s and write throu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139495)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139492: apiserver: return 400 instead of 500 for invalid kind in delete request body

…st body

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/c...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139492)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139489: apiserver: add configurable HTTP/2 write and read-idle timeouts

## What this does

Adds two new `kube-apiserver` flags:

| Flag | Default | Purpose |
|---|---|---|
| `--http2-write-byte-timeout` | `0` (disabled) | Close connections when no bytes can be written for this duration |
| `--http2-read-idle-timeout` | `0` (disabled) | Send a PING after this duration of...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139489)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139484: Fix Quantity.String dropping magnitude for large DecimalSI values

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

`DecimalSI` only defines suffixes up to `E` (10^18). For a `Quantity` in `DecimalSI` format whose canonical base-10 exponent exceeds that range (e.g. 10^21), `quantitySuffixer.constructBytes` returns `ok=false`, but `Canonicaliz...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139484)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139483: Refactor integration test utilities

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

Since we plan to add more integration tests (for example, before promoting the feature https://github.com/kubernetes/enhancements/issues/4951 to Stable), this C...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139483)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139482: apiserver/endpoints/handlers: move content encoding negotiation to handlers/internal

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139482)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139481: apiserver: return 422 instead of 500 when runtimeClassName is empty

What type of PR is this?

/kind bug
What this PR does / why we need it:

When spec.runtimeClassName is set to an empty string (""), the API server returns HTTP 500 instead of a proper validation error. The empty string passes the nil pointer check but then fails deep in apimachinery name valida...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139481)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139478: apimachinery: wrap json parse error in MetaFactory.Interpret

### type
#### / why we need it:
`SimpleMetaFactory.Interpret` flattens the underlying JSON unmarshal
error into an opaque string via `%v`, discarding the typed
`*json.UnmarshalTypeError`. As a result, callers cannot inspect the
error to distinguish a malformed client request (e.g. a `kind` fiel...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139478)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139477: DRA kubelet: add v1beta1 DRAResourceHealth gRPC API

Add v1beta1 of the DRAResourceHealth kubelet gRPC API and migrate all in-tree usage from v1alpha1 to v1beta1.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/g...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139477)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139476: [WIP] Testing CI for apierver restart

Temporary PR for testing. Do not merge.

```release-note
NONE
```

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139476)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139474: Fix projected volumes being emptied when a resync write fails

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139474)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139473: skip couple of kubelet unit tests on mac

#### What type of PR is this?
/kind failing-test

#### What this PR does / why we need it:
Skips couple of failing tests running on mac.
On mac, the `cm.MinMilliCPULimit` is 0 (helpers_unsupported.go), so the "allocated when at/below minimum" logic never applies and the test reports actual CRI ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139473)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139472: scheduler: respect NominatedNodeName in TAS placement selection

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Makes Topology-Aware Workload Scheduling (TAS) respect `NominatedNodeName` (NNN) when picking a placement for a PodGroup.

Today, when TAS evaluates candidate placements, it ranks them with PlacementScore...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139472)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139468: WIP: ignore, testing some Prow jobs

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Nothing, please ignore.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR introduce a user-facing change?
```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139468)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139464: Always try WAP if any pod was unschedulable in non-initial scheduling cycle

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

This PR enables Workload-Aware Preemption (WAP) during subsequent scheduling attempts of a Pod Group. 

Previously, WAP was only triggered during the initial scheduling attempt when the overall status of ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139464)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37192: Use staging kpromo with --manifest-diff-since for periodic image promo

Switch `ci-k8sio-image-promo` to use the staging latest kpromo image and add `--manifest-diff-since="14 days"` to limit the periodic backstop to digests changed in the last two weeks instead of the entire manifest universe.

This prevents old broken images (tag moves, `_LOST_` sources) from blocking...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37192)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37191: fix(cloud-provider-azure): skip broken private-registry-secret conformance test in release-1.30 presubmit

#### What this PR does
Adds a narrow `--ginkgo.skip` filter to the `pull-cloud-provider-azure-e2e-capz-1-30` presubmit job to skip the broken Kubernetes 1.30 NodeConformance private registry pull test.

#### Why this is needed
Only the 1.30 CAPZ conformance presubmit is failing on this test. The...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37191)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4421: Dependency update - Golang 1.26.4/1.25.11

<!--
Please only use this template if you are a Release Manager updating
Golang dependencies.
-->

### Tracking info

<!-- Search query: https://github.com/kubernetes/release/issues?q=is%3Aissue+Dependency+update+-+Golang -->
<!-- Example: https://github.com/kubernetes/release/issues/3383 -->
Link t...

🔗 [Link](https://github.com/kubernetes/release/issues/4421)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open

### kubernetes/release#4422: build kube-cross, go-runner, releng-ci with golang 1.26.4/1.25.11

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

- build kube-cross, go-runner, releng-ci with golang 1.26.4/1.25.11

#### Which issue(s) this PR fixes:

xref https://github.com/kubernetes/release/issues/4421

#### Does this PR introduce a user-faci...

🔗 [Link](https://github.com/kubernetes/release/pull/4422)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4419: Use patched nftables binaries in distroless-iptables

#### What type of PR is this?
/kind bug
?

#### What this PR does / why we need it:
Discussion in https://github.com/kubernetes/kubernetes/issues/136786. We basically _have to_ build our kube-proxy images with a patched old `nft` binary, to avoid the crash with kube-proxy nft 1.0.6 and system n...

🔗 [Link](https://github.com/kubernetes/release/pull/4419)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/perf-tests#4081: dra: bump testing/dra config timeouts for 5k scale

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Fixes `WaitForFinishedJobs` undercounting at scale. When churn jobs are deleted by `ttlSecondsAfterFinished` before the measurement gathers, `handleObject` read completion from `newJob` (nil on delete) and dropped the ...

🔗 [Link](https://github.com/kubernetes/perf-tests/pull/4081)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18440: Kops delete overly aggressive and stuck

/kind bug

**1. What `kops` version are you running? The command `kops version`, will display
 this information.**

$ kops version
I0603 22:06:58.163165 1713687 featureflag.go:182] FeatureFlag "APIServerNodes"=true
I0603 22:06:58.163316 1713687 featureflag.go:191] ParseFlags: parsed 1 flags from "+A...

🔗 [Link](https://github.com/kubernetes/kops/issues/18440)

**Metadata:**
- Created: 2026-06-03
- Comments: 1
- State: open

### kubernetes/kops#18443: dump: raise per-node dump timeout to 5 minutes

The 1-minute per-node dump cap is too short on large clusters: the multi-GB kube-apiserver cat consumes the whole budget and the files after it (etcd, etcd-events, kube-scheduler, kube-controller-manager) dump as 0 bytes. Raise it to 5 minutes.

Based on the last successful runs on 5/15 and 5/11, ...

🔗 [Link](https://github.com/kubernetes/kops/pull/18443)

**Metadata:**
- Created: 2026-06-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere#1776: Remove unused SUPERVISOR_APISERVER_ENDPOINT_IP env var requirement

<!-- Thanks for sending a pull request! -->

**What this PR does / why we need it**:
Cleans up vsphereparavirtual configuration by removing the unused but previously strictly validated SUPERVISOR_APISERVER_ENDPOINT_IP environment variable. This variable went unused after API calls were migrated t...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/pull/1776)

**Metadata:**
- Created: 2026-06-04
- Comments: undefined
- State: open
- Draft: No

### prometheus/client_java: v1.7.0

## [1.7.0](https://github.com/prometheus/client_java/compare/v1.6.1...v1.7.0) (2026-06-03)


### Features

* Add StableApi marker and API diff check ([#2168](https://github.com/prometheus/client_java/issues/2168)) ([768fd3a](https://github.com/prometheus/client_java/commit/768fd3a7aab5f11f3558a35c0d6257b5a217a078))
* add typed metric family descriptors ([#2114](https://github.com/prometheus/client_java/issues/2114)) ([9c3b097](https://github.com/prometheus/client_java/commit/9c3b097f6842ffc08fb3...

🔗 [Link](https://github.com/prometheus/client_java/releases/tag/v1.7.0)

**Metadata:**
- Version: v1.7.0
- Published: 2026-06-03
- Prerelease: No

### containerd/nerdbox: v0.1.4

## What's Changed
* revert: write to tmp vmdk file by @austinvazquez in https://github.com/containerd/nerdbox/pull/213
* shim/manager: detect early shim exit while waiting for pipe on Windows by @dmcgowan in https://github.com/containerd/nerdbox/pull/198
* fix(shim/manager): retry on pipe busy/timeout when waiting for shim pipe on Windows by @austinvazquez in https://github.com/containerd/nerdbox/pull/218


**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.1.3...v0.1.4

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.1.4)

**Metadata:**
- Version: v0.1.4
- Published: 2026-06-04
- Prerelease: No

### containerd/containerd#13529: CRI: tag+digest sandbox image breaks RunPodSandbox

### Description

A CRI sandbox image (`pinned_images.sandbox`, or legacy `sandbox_image`) configured as a reference with both a tag and a digest (name:tag@sha256:…) makes `RunPodSandbox` fail with "failed to get sandbox image … not found", even though containerd successfully pulls that exact image d...

🔗 [Link](https://github.com/containerd/containerd/issues/13529)

**Metadata:**
- Created: 2026-06-04
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-06-04 10:57:37*
