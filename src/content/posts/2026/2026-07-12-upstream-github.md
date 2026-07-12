---
title: "Upstream Github - 2026-07-12"
description: "CNCF upstream activity from github"
pubDate: 2026-07-12
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "sig/scheduling", "sig/node", "wg/device-management", "pr", "release-note", "size/M", "cncf-cla: yes", "needs-priority", "area/kubelet", "needs-rebase", "size/L", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "needs-ok-to-test", "area/kubectl", "release-note-action-required", "sig/cli", "size/S", "kind/cleanup", "release-note-none", "kind/documentation", "kind/api-change", "sig/storage", "kind/flake", "size/XS", "do-not-merge/needs-sig", "ok-to-test", "sig/network", "sig/instrumentation", "area/stable-metrics", "area/apiserver", "kind/feature", "sig/etcd", "sig/autoscaling", "size/XXL", "sig/apps", "sig/auth", "approved", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "lgtm", "sig/testing", "do-not-merge/hold", "area/infra", "area/prow", "area/terraform", "area/infra/gcp", "release", "node-problem-detector", "language/ko", "area/localization", "website", "language/en", "area/jobs", "area/config", "test-infra", "kubectl", "area/vertical-pod-autoscaler", "autoscaler", "prometheus", "node_exporter"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/node-problem-detector#1317: chore(docs): add security policy for dependency CVEs and scanner findings

/cc @ameukam @SergeyKanzhelev @wangzhen127 

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1317)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56465: [ko] Translate content/en/docs/reference/glossary/security-context.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/glossary/security-context.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/reference/glossary/?security=true#term-security-context

**Why is this needed**

This page is no...

🔗 [Link](https://github.com/kubernetes/website/issues/56465)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

## Updates

### kubernetes/kubernetes#140465: Watch client shutdown: three remaining bugs from #131505

In 2025 I fixed several watch client shutdown bugs: #131266 (reflector Stop deadlock), #131321 (VeryShortWatchError), #131706 (watch test body cleanup). Thanks again to @wojtek-t and @liggitt for those reviews.

The test work in #131505 turned up three more bugs. They were documented there as TODOs ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140465)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

### kubernetes/kubernetes#140464: client-go: Request.Watch leaks the response body when content-type negotiation fails

### What happened?

When `Request.Watch` gets a 200 response but content-type negotiation fails (no stream decoder for the response content type), `newStreamWatcher` returns the error without closing `resp.Body`. The connection leaks.

This is in `staging/src/k8s.io/client-go/rest/request.go`. It wa...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140464)

**Metadata:**
- Created: 2026-07-11
- Comments: 2
- State: open

### kubernetes/kubernetes#140460: DRA: node-allocatable footprint uses the wrong driver's device when two drivers share a pool and device name

### What happened?

When computing a pod's node-allocatable footprint from DRA claims, the scheduler looks up the allocated device by pool name and device name only, and does not consider the driver. A DRA device is identified by `(driver, pool, device)`, so two drivers that publish the same pool na...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140460)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

### kubernetes/kubernetes#140457: DRA: CapacityRequestPolicy validValues rejects distinct fractional values as duplicates

### What happened?

A `CapacityRequestPolicy` with distinct fractional `validValues` is rejected by API validation as if the values were duplicates.

`validateRequestPolicyValidValues` deduplicates the values with `validateSet` using `quantityKey`:

```go
func quantityKey(item apiresource.Quantity) ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140457)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

### kubernetes/kubernetes#140467: fix: Close response body when watch content-type negotiation fails

**What type of PR is this?**

/kind bug
/sig api-machinery

**What this PR does / why we need it**:

When `Request.Watch` gets a 200 response but the negotiator has no stream decoder for the response content type, `newStreamWatcher` returns the error without closing `resp.Body`, leaking the connecti...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140467)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140466: fix: Wrap watch decode errors with %w instead of %v

**What type of PR is this?**

/kind bug
/sig api-machinery

**What this PR does / why we need it**:

`StreamWatcher.receive` and the client watch `Decoder` wrap decode errors with `%v`, which severs the error chain. Consumers can't use `errors.Is` or `errors.As` to detect the underlying cause (for e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140466)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140463: Plr instrumentation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140463)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#140462: Fix label Gt/Lt selectors silently dropping values above int64

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

For the `Gt`/`Lt` label selector operators, `Requirement.Matches` parses the label value with `strconv.ParseInt(val, 10, 64)` and treats an out-of-range value the same as a non-integer — it returns "no match":

```go
l...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140462)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140461: kubectl: stop pruning non-namespaced resources by default when a namespace is specified

**What type of PR is this?**

/kind bug
/sig cli

**What this PR does / why we need it:**

`kubectl apply --prune` with an explicit `--namespace` still prunes non-namespaced resources (Namespace, PersistentVolume) from the default allowlist, which can delete namespaces entirely unrelated to what was...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140461)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140459: Fix Quantity.String() dropping the suffix for DecimalSI values above 10^18

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`resource.Quantity.String()` silently drops the magnitude for `DecimalSI` quantities whose canonical base-10 exponent exceeds `10^18`, corrupting the value and breaking the `String()`/JSON round-trip invariant.

`Canon...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140459)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140458: kubelet: Add fieldPath tests for init/ephemeral containers

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Adds missing unit test coverage for `fieldPath()` and `GenerateContainerRef()` in `pkg/kubelet/container/ref_test.go`.
`fieldPath()` already resolves init and ephemeral containers, but tests only covered r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140458)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140456: resource: document overflow-safe arithmetic for device request Count

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Updates the GoDoc for `ExactDeviceRequest.Count` and `DeviceSubRequest.Count` across the internal and versioned resource APIs to clarify that:
- consumers should treat `Count` as untrusted input,
- ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140456)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140455: Stop leaked reconciler goroutines in Uncertain reconciler tests

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it

`Test_UncertainDeviceGlobalMounts` and `Test_UncertainVolumeMountState` run their table cases as parallel subtests, each of which starts a reconciler goroutine with a stop channel that was never closed. Every finish...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140455)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140454: Make MoreImportantVictim deterministic for equal start times

#### What type of PR is this?

/kind flake
/kind cleanup

#### What this PR does / why we need it

`MoreImportantVictim` compared victims by `EarliestStartTime` with `Before`, which returns `false` (treats them as equal) when the start times are equal. For pods without a recorded `Status.StartTime`,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140454)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140453: Fix JSON-Schema URL in v1 and v1beta1 JSONSchemaProps doc comments

This PR was created with the assistance of generative AI.

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Fixes the broken `http://json-schema.org/` URL in the `JSONSchemaProps` doc comments for the v1 and v1beta1 API versions.

The internal types fix w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140453)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140452: Make PodGroupMemberPodsOrderingFunc deterministic to fix Windows flake

#### What type of PR is this?

/kind flake
/kind cleanup

#### What this PR does / why we need it

`PodGroupMemberPodsOrderingFunc` returned `0` when pods had equal priority, attempts and timestamp. Because a pod group's `QueuedPodInfos` are stored in a map, the iteration order (and therefore the or...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140452)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140451: Document that DRA device request Count is unbounded up to MaxInt64

#### What type of PR is this?

/kind cleanup
/kind documentation

#### What this PR does / why we need it

`ExactDeviceRequest.Count` and `DeviceSubRequest.Count` are validated only for a lower bound, so the API accepts the entire positive `int64` range, including `math.MaxInt64`. Several independen...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140451)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140449: DRA: use saturating arithmetic in roundUpRange to avoid int64 overflow

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it

The structured DRA allocator's `roundUpRange` converted `resource.Quantity` values to `int64` and computed `min + step*n` with plain `int64` arithmetic. For a capacity request near `math.MaxInt64` with a `Step`, this ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140449)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140448: fix event broadcaster goroutine leak

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140448)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140447: Promote endpoint_slice_controller_changes metric to BETA

#### What type of PR is this?

/kind api-change

#### What this PR does / why we need it:

Promotes the remaining EndpointSlice controller metric `endpoint_slice_controller_changes` from Alpha to Beta as tracked in #136306.

Sibling EndpointSlice controller metrics were already graduated; this compl...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140447)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140446: [WIP] getlist alternative

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Alternative shape for https://github.com/kubernetes/kubernetes/pull/139692.

#### Which issue(s) this PR is related to:

N/A

#### Does this PR introduce a user-facing change?

```release-note
NONE
```

#### Addi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140446)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140445: Refactor horizontal test 03

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140445)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140444: kubelet: migrate certificate store to contextual logging

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Several binaries in Kubernetes (such as the Kubelet) have been converted to structured and contextual logging. However, some helper packages, such as the `client-go` certificate store, still output unstruct...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140444)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140442: DRA: avoid int64 overflow when rounding a consumable-capacity request

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`roundUpRange` in the structured allocator's consumable-capacity path rounds a request up to the next `Min + n*Step` using int64 arithmetic (`val := min + step*n`). For a capacity request near `math.MaxInt6...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140442)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9706: Promote node-feature-discovery 0.19.0 chart

#9697 promoted the v0.19.0 container images but missed the OCI helm chart digest, so:

```
$ helm pull oci://registry.k8s.io/nfd/charts/node-feature-discovery:0.19.0
Error: failed to perform "FetchReference" on source: registry.k8s.io/nfd/charts/node-feature-discovery:0.19.0: not found
```

Downstre...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9706)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9705: GCP: add k8s-infra-agentic-ai project

Host Vertex AI usage for prowjobs. Bind the agy-agent service account to test-pods/agy-agent in k8s-infra-prow-build via workload identity.

Related to:
 - https://github.com/kubernetes/k8s.io/issues/9606

/hold


🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9705)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/node-problem-detector: v1.36.0

## What's Changed
* Update new release scripts by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1209
* Update log pattern to match kubelet service name from kubelet .deb package by @ostrain in https://github.com/kubernetes/node-problem-detector/pull/1128
* chore(deps): bump github.com/shirou/gopsutil/v4 from 4.25.11 to 4.25.12 by @dependabot[bot] in https://github.com/kubernetes/node-problem-detector/pull/1211
* chore(deps): bump github/codeql-action from 4.31.9 to 4.31...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/releases/tag/v1.36.0)

**Metadata:**
- Version: v1.36.0
- Published: 2026-07-11
- Prerelease: No

### kubernetes/node-problem-detector: v1.35.3

## What's Changed
* Automated cherry pick of #1241: Update Go to v1.25.8 by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1242
* Automated cherry pick of #1270: Update grpc to v1.79.3 to fix CVE-2026-33186
#1272: Fix Grype CVEs: update logrus and prometheus/prometheus by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1273
* Bump Go to 1.26.5 and golang.org/x modules by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1300
* [rele...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/releases/tag/v1.35.3)

**Metadata:**
- Version: v1.35.3
- Published: 2026-07-11
- Prerelease: No

### kubernetes/node-problem-detector: v1.34.4

## What's Changed
* Automated cherry pick of #1241: Update Go to v1.25.8 by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1243
* Automated cherry pick of #1270: Update grpc to v1.79.3 to fix CVE-2026-33186
#1272: Fix Grype CVEs: update logrus and prometheus/prometheus by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1274
* Bump Go to 1.26.5 and golang.org/x modules by @hakman in https://github.com/kubernetes/node-problem-detector/pull/1301
* [rele...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/releases/tag/v1.34.4)

**Metadata:**
- Version: v1.34.4
- Published: 2026-07-11
- Prerelease: No

### kubernetes/node-problem-detector#1316: chore(docs): update release process for Cloud Build images and make release-new

Containers are now built and pushed to staging automatically by Cloud Build on tag push, and release tarballs are extracted from the promoted registry.k8s.io images via 'make release-new'. Update the doc to cover the Windows image, crane-based digest lookup, and refresh the examples to v1.36.0.

F...

🔗 [Link](https://github.com/kubernetes/node-problem-detector/pull/1316)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56469: Document deprecated volume node affinity annotation

### Description

Document the deprecated `volume.alpha.kubernetes.io/node-affinity`
annotation in the well-known labels, annotations, and taints reference.

The new entry explains that the annotation:

- was used on PersistentVolumes
- stored node affinity rules as a JSON-serialized `NodeAff...

🔗 [Link](https://github.com/kubernetes/website/pull/56469)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37442: sig-node: skip [Slow] tests in containerd NodeConformance lanes

## What this PR does / why we need it

Several containerd NodeConformance node-e2e jobs (periodic and presubmit)
were not excluding `[Slow]` tests from their focus/skip filters, unlike
sibling jobs in the same files. Given the tight timeouts (65m) on these
1h/24h-interval lanes, this was causing fre...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37442)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1863: Disable pull requests to k/kubectl

**What would you like to be done**:
Update the source code management configuration-as-code to disallow pull requests to this repository.

**Why is this needed**:
This repository is an issue tracker and mirror; pull requests should go elsewhere.


🔗 [Link](https://github.com/kubernetes/kubectl/issues/1863)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

### kubernetes/autoscaler#9970: AEP-8026: expose target/lowerBound/upperBound percentiles per-VPA

**Which component are you using?**:

/area vertical-pod-autoscaler

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

The recommendation percentiles are arguably the most workload-dependent knobs the Recommender has: a latency-sensitive ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9970)

**Metadata:**
- Created: 2026-07-11
- Comments: 1
- State: open

### kubernetes/autoscaler#9969: Move VPA audo mode warning into validation files

Now that we have nice validation files, I moved the Auto warning into the same area

They have tests and also now support warnings

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Over in https://github.com/kubernetes/autoscaler/pull/9951 I added the...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9969)

**Metadata:**
- Created: 2026-07-11
- Comments: undefined
- State: open
- Draft: No

### prometheus/node_exporter: 1.12.0 / 2026-07-10

* [FEATURE] mountstats: Add NFS mountpoint info metric #3554
* [FEATURE] nvmesubsystem: Add new collector #3579
* [FEATURE] dmmultipath: Add new collector #3581
* [FEATURE] infiniband: Add device filtering option #3694
* [ENHANCEMENT] hwmon: disambiguate colliding chip labels #3646
* [ENHANCEMENT] cpufreq: Add support for cpuinfo_avg_freq #3712
* [ENHANCEMENT] filesystem: Support ext4 super block emergency_ro flag #3717
* [ENHANCEMENT] edac: Add per-channel error metrics with DIMM labels ...

🔗 [Link](https://github.com/prometheus/node_exporter/releases/tag/v1.12.0)

**Metadata:**
- Version: v1.12.0
- Published: 2026-07-11
- Prerelease: No


---

*This content was automatically collected on 2026-07-12 02:30:49*
