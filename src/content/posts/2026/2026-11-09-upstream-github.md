---
title: "Upstream Github - 2026-11-09"
description: "CNCF upstream activity from github"
pubDate: 2026-11-09
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "area/kubelet", "sig/node", "needs-triage", "sig/scheduling", "sig/storage", "sig/apps", "sig/api-machinery", "pr", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "kind/cleanup", "sig/cluster-lifecycle", "size/L", "release-note-none", "area/kubeadm", "area/apiserver", "size/XXL", "kind/feature", "do-not-merge/work-in-progress", "sig/etcd", "area/code-generation", "sig/auth", "size/S", "approved", "wg/device-management", "area/test", "size/XS", "sig/testing", "do-not-merge/hold", "lgtm", "ok-to-test", "cncf-cla: no", "kind/api-change", "area/kubectl", "sig/cli", "sig/instrumentation", "size/XL", "minikube", "do-not-merge/invalid-commit-message", "kube-state-metrics", "priority/important-longterm", "lifecycle/frozen", "kops", "language/en", "website", "sig/docs", "release", "autoscaler", "area/vertical-pod-autoscaler", "triage/accepted", "area/helm-charts", "kind/dependency", "area/jobs", "area/config", "sig/k8s-infra", "test-infra", "ingress-gce", "sig/release", "needs-kind", "area/release-eng", "area/dependency", "containerd", "overlaybd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143946: Env file parser uses the first definition of a duplicated key, KEP-3721 says the last one wins

### What happened?

When an env file defines the same variable more than once, a `fileKeyRef` to that variable gets the first value. `ParseEnv` in `pkg/kubelet/util/env/env_util.go` returns as soon as it finds the key.

KEP-3721 says the opposite under "Duplicate Names": "If an environment variable ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143946)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/kubernetes#143947: kubelet: use the last definition of a duplicated key in env files

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`ParseEnv` returned the first definition of a key, so a `fileKeyRef` to a variable that the env file defines twice got the first value. KEP-3721 says the last occurrence takes precedence. The kubelet alread...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143947)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143940: KEP-6371: Add enableNodeLease to KubeletConfiguration

#### What type of PR is this?

/kind feature
/kind api-change
/sig node

#### What this PR does / why we need it:

Implements the kubelet portion of KEP-6371 (configurable node liveness source):
- Adds `enableNodeLease` (`*bool`, defaulting to `true`, gated by the alpha `ExternalNodeLivenes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143940)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/release#4618: Bump the actions group with 7 updates

Bumps the actions group with 7 updates:

| Package | From | To |
| --- | --- | --- |
| [step-security/harden-runner](https://github.com/step-security/harden-runner) | `2.22.3` | `2.22.4` |
| [github/codeql-action/init](https://github.com/github/codeql-action) | `4.39.2` | `4.39.3` |
| [github/codeql...

🔗 [Link](https://github.com/kubernetes/release/pull/4618)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143962: Device Plugin PreStartContainer fails before deferred allocation with pod-level resources

### What happened?

A container requesting a Device Plugin resource cannot start with the following configuration:

- The Pod specifies pod-level CPU and memory resources.
- `PodLevelResources` and `PodLevelResourceManagers` are enabled.
- Topology Manager uses pod scope.
- The Device Plugin adverti...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143962)

**Metadata:**
- Created: 2026-11-09
- Comments: 2
- State: open

### kubernetes/kubernetes#143948: kube-scheduler panics in VolumeBinding Score when a CSIStorageCapacity has maximumVolumeSize but no capacity

### What happened?

kube-scheduler panics with a nil pointer dereference in `VolumeBinding.Score` when the CSIStorageCapacity object that matched a node sets `maximumVolumeSize` but not `capacity`.

Both fields are optional in the API. In Filter, `capacitySufficient` in `pkg/scheduler/framework/plug...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143948)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/kubernetes#143945: [BUG] CronJob v2 controller syncCronJob discards Status.Active and LastScheduleTime updates due to pointer re-assignment

### What happened?

In the CronJob v2 controller (`pkg/controller/cronjob/cronjob_controllerv2.go`), when `reconcileCronJob` calls `syncCronJob(ctx, cronJobCopy, jobsToBeReconciled)`, `cronJobCopy` is passed by value as a pointer.

Inside `syncCronJob` (lines 462-468), if an unfinished active job is...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143945)

**Metadata:**
- Created: 2026-11-08
- Comments: 3
- State: open

### kubernetes/kubernetes#143944: [BUG] DaemonSet and Job controllers leak expectations on NamespaceTerminatingCause, stalling reconciliation for 5 minutes

### What happened?

When a `DaemonSet` or `Job` attempts to create pods in a namespace that is currently terminating (e.g. during namespace deletion, eviction, or cluster cleanup), the API server rejects pod creation with a `403 Forbidden` carrying `v1.NamespaceTerminatingCause`.

In both `DaemonSet...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143944)

**Metadata:**
- Created: 2026-11-08
- Comments: 3
- State: open

### kubernetes/kubernetes#143943: Server-side apply: FieldsV1 numeric decoding aliases distinct integer list keys

### What happened?

Server-side Apply falsely reports a conflict between two different integer-keyed map-list items. A owns `id: 9007199254740993`; B tries to add `id: 9007199254740992`, without force. The stored object and raw managedFields retain A's exact first integer. Reading the embedded numer...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143943)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/kubernetes#143942: Server-side apply: mixed numeric comparison loses scalar intent or bypasses conflicts

### What happened?

Server-side Apply can treat two different, representable numeric magnitudes as equal. A second manager can either acquire a claim without getting its asserted value, or change the first manager's value without force or a conflict. Adding an unrelated field selects between those o...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143942)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/kubernetes#143963: pager: populate background goroutine panic error before channel completion

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
In `eachListChunkBuffered`, when `eachListChunk` panics (for example, in `p.PageFn`), `err` is never assigned and remains `nil`. Because the cleanup defer that closes `chunkC` and sends to `bgResultC...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143963)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143961: kubeadm: increase ut coverage for cmd/config

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143961)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143958: Watchcache resync optimize

/kind feature

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143958)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143957: code-gen: migrate deprecated function ExtractCommentTags


#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Migrates three call sites of the deprecated gengo [ExtractCommentTags](https://pkg.go.dev/k8s.io/gengo/v2#ExtractCommentTags) in code-generator
#### Which issue(s) this PR is related to:
fixes #130358 

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143957)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143956: oidc: do not report a failed JWKS fetch when one key is unsupported

#### What type of PR is this?

/kind bug
/area apiserver
/sig auth
/sig api-machinery

#### What this PR does / why we need it:

The JWT authenticator's JWKS metrics `RoundTripper` re-parses each fetched key set with one `json.Unmarshal` into `jose.JSONWebKeySet`. That fails the whole set when a sin...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143956)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143955: Print large BinarySI sums as DecimalSI

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Binary suffixes are 1024^n, but Quantity uses 10^n. This avoids a slow/expensive search of an exact Binary suffix for values that don't have one, like the sum of some BinarySI and DecimalSI values.

#### Which issue(...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143955)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143954: Stop using AsDec in quantityKeyAsDec

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Avoid AsDec and instead switch to using the optimized canonical serialization. This is used for a duplicate check so we just need canonicalization, the resulting representation is not important.

#### Which i...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143954)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143952: Stop using AsDec in isFractionalQuantity

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

This moves AsDec and the performance issues that can happen when calling it with large exponents.

#### Which issue(s) this PR is related to:

#### Special notes for your reviewer:

#### Does this PR intr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143952)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143951: Increase number of workers in DRA tests

Unblock https://github.com/kubernetes/kubernetes/pull/143833 OptimisticGetFromCache is change that is meant to improve scalability by potentially sacrificing the latency, but breaks the current `TestDRA/all/ShareResourceClaimSequentially` test by adding 100ms to serial loop executing 4000 times.

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143951)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143950: registry: publish DeleteCollection panic errors before completing WaitGroup

#### What type of PR is this?
/kind bug
/sig api-machinery

#### What this PR does / why we need it:
In `DeleteCollection`, worker goroutines deferred `wg.Done()` after `HandleCrashWithContext`. Because deferred functions run in LIFO order, `wg.Done()` executed before `HandleCrashWithContext` on pan...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143950)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143949: volumebinding: don't panic in Score when CSIStorageCapacity has no capacity

#### What type of PR is this?

/kind bug
/sig storage
/sig scheduling

#### What this PR does / why we need it:

`capacity` and `maximumVolumeSize` are both optional in CSIStorageCapacity. Filter accepts a node when the request fits `volumeLimit()`, which prefers `MaximumVolumeSize`, and stores the ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143949)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143941: cpumanager: do not let reusable CPUs block other NUMA hints

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

In container scope, `GetTopologyHints` only offers hints whose NUMA mask covers every CPU the pod's init containers hand over (`cpusToReuse`), so that those CPUs get reused. When the app container does not fit on tho...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143941)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143939: kubectl: match --kuberc flag by prefix in getExplicitKuberc

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

`getExplicitKuberc` reads `--kuberc` from the raw arguments before cobra parses flags. It used `strings.Contains`, so any argument that merely contains `--kuberc=` was taken as the kuberc path, and kubectl e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143939)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143938: admission: validate resourceVersion in webhook configuration cache

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When an admission webhook configuration is updated, an in-flight evaluation can complete and store accessors compiled from the older object into `configurationsCache` after the informer update handler has already del...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143938)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143937: events: report immutable reason once on v1 update

#### What type of PR is this?

/kind cleanup
/sig instrumentation

#### What this PR does / why we need it:

`ValidateEventUpdate` calls `ValidateImmutableField` for `reason` twice. An `events.k8s.io/v1` update that changes `reason` therefore returns the same `reason: Invalid value: field is immutab...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143937)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143936: Add kubelet systemd watchdog failure diagnostics

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

Adds the Alpha `KubeletWatchdogDiagnostics` feature gate, disabled by default. When enabled, kubelet emits structured, default-visible diagnostics for systemd watchdog health-check errors and returned n...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143936)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143935: fix(kubelet): reconcile stale device manager checkpoint allocations after admission failure

#### What type of PR is this?
/kind bug
/sig node

#### What this PR does / why we need it:
During Pod admission in kubelet, `devicemanager.Allocate()` assigns physical device IDs to a container, updates the in-memory device allocation state, and persists it to disk in `/var/lib/kubelet/device-plugi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143935)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143934: fix(scheduler): prevent partial gang preemption deadlock in defaultpreemption plugin

#### What type of PR is this?
/kind bug
/sig scheduling

#### What this PR does / why we need it:
When a high-priority workload triggers preemption in `pkg/scheduler/framework/plugins/defaultpreemption/default_preemption.go`, candidate victim pods were evaluated purely based on node-local prior...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143934)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24016: deps: Bump github.com/docker/cli to v29.9.3

Bump docker/cli from v29.7.2 to v29.9.3. This was blocked while we still depended on the frozen github.com/docker/docker v28 SDK; Engine API imports now use github.com/moby/moby/{client,api}.

Also bump github.com/fvbommel/sortorder from v1.1.0 to v1.2.1. docker/cli is +incompatible and does not p...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24016)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/minikube#24014: deps: Migrate from github.com/docker/docker to moby modules

Starting with Docker Engine v29, the monolithic Go module `github.com/docker/docker` is deprecated and frozen (no v29 tags). The public Go API now lives in `github.com/moby/moby/client` and `github.com/moby/moby/api`. Dependabot already bumped `github.com/docker/cli` to v29.7.2, which consumes those...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24014)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3198: docs: define stable metric guarantees and metric lifecycle

**What this PR does / why we need it:**

Adds `docs/metric-stability.md`, which writes down what STABLE metrics guarantee (including across major releases) and how a metric is introduced, promoted, deprecated and removed. The stability section in the best practices doc now points to it, and the docs...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3198)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19011: Native worker InstanceGroups across clouds, bare metal and on-premises

/kind feature

**1. Describe IN DETAIL the feature/behavior/change you would like to see.**

Allow a kOps cluster with its control plane on one supported cloud provider to run native worker InstanceGroups on other clouds, neoclouds, bare-metal systems or on-premises infrastructure.

Worker infrastru...

🔗 [Link](https://github.com/kubernetes/kops/issues/19011)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/website#59123: Add 'https://' to Fix Failing 'git clone' Command


### Description

While working on API docs, I noticed that the guide for generating API ref docs has a git clone command that fails when you try to run it in the terminal. The URL needs 'https://' to work. I tested it, and with that change the git clone command works properly.

### Issue
no p...

🔗 [Link](https://github.com/kubernetes/website/pull/59123)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59121: Modernize contribute-upstream.md: remove GOPATH-era instructions

## What this PR does

Modernizes `content/en/docs/contribute/generate-ref-docs/contribute-upstream.md` by removing outdated GOPATH-era instructions.

### Changes

- **Prerequisites**: Replace inline tool list with the shared `{{< include "prerequisites-ref-docs.md" >}}` partial, matching other pages...

🔗 [Link](https://github.com/kubernetes/website/pull/59121)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.16.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.16.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.16.0
- Published: 2026-11-08
- Prerelease: No

### kubernetes/autoscaler#10643: VPA (helm): Workloads should be PSS restricted compatible by default

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Add one of the following areas:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10643)

**Metadata:**
- Created: 2026-11-08
- Comments: 1
- State: open

### kubernetes/autoscaler#10645: [VPA] Bump go tools (master)

This PR contains the following updates:

| Package | Type | Update | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|---|---|
| [github.com/gomarkdown/markdown](https://redirect.github.com/gomarkdown/mar...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10645)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10644: [VPA] Bump go deps (master)

This PR contains the following updates:

| Package | Type | Update | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|---|---|
| [github.com/google/pprof](https://redirect.github.com/google/pprof) | indir...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10644)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38265: fix azure registry jobs

e2e-kops-staging-registry-azure doesn't work as the Azure CCM isn't hosted at registry.k8s.io. Also, I added an azure variant of registry-sandbox-e2e

The TODO has been fixed.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38265)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3319: Support QUIC / HTTP/3 override in FrontendConfig

There's still no way to set `quicOverride` on the target HTTPS proxy from Kubernetes resources. We need to disable HTTP/3 on a GKE Ingress, and the only option today is running `gcloud compute target-https-proxies update --quic-override=DISABLE` by hand. That isn't tracked in git, and it's lost if t...

🔗 [Link](https://github.com/kubernetes/ingress-gce/issues/3319)

**Metadata:**
- Created: 2026-11-09
- Comments: 0
- State: open

### kubernetes/release#4620: Bump go.yaml.in/yaml/v4 from 4.0.0-rc.9 to 4.0.0

Bumps [go.yaml.in/yaml/v4](https://github.com/yaml/go-yaml) from 4.0.0-rc.9 to 4.0.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/yaml/go-yaml/releases">go.yaml.in/yaml/v4's releases</a>.</em></p>
<blockquote>
<h1>go-yaml v4.0.0</h1>
<p>go-yaml v4.0.0 i...

🔗 [Link](https://github.com/kubernetes/release/pull/4620)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4619: Bump google.golang.org/api from 0.310.0 to 0.311.0

Bumps [google.golang.org/api](https://github.com/googleapis/google-api-go-client) from 0.310.0 to 0.311.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/googleapis/google-api-go-client/releases">google.golang.org/api's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/release/pull/4619)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4617: Bump github.com/cheggaaa/pb/v3 from 3.2.1 to 3.3.0

Bumps [github.com/cheggaaa/pb/v3](https://github.com/cheggaaa/pb) from 3.2.1 to 3.3.0.
<details>
<summary>Commits</summary>
<ul>
<li><a href="https://github.com/cheggaaa/pb/commit/e6d9b3d3898c02f7919708a80d4fe550c8c97873"><code>e6d9b3d</code></a> Merge pull request <a href="https://redirect.github.c...

🔗 [Link](https://github.com/kubernetes/release/pull/4617)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4616: Bump the all group with 4 updates

Bumps the all group with 4 updates: [github.com/policylabs/signer](https://github.com/policylabs/signer), [github.com/sigstore/sigstore](https://github.com/sigstore/sigstore), [github.com/slsa-framework/verifier](https://github.com/slsa-framework/verifier) and [sigs.k8s.io/promo-tools/v4](https://gi...

🔗 [Link](https://github.com/kubernetes/release/pull/4616)

**Metadata:**
- Created: 2026-11-09
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- 9a5e7f2: Add optional ZFile index compression (Willis Wu) [#465](https://github.com/containerd/overlaybd/pull/465)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-11-08
- Prerelease: Yes


---

*This content was automatically collected on 2026-11-09 04:35:45*
