---
title: "Upstream Github - 2026-08-11"
description: "CNCF upstream activity from github"
pubDate: 2026-08-11
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/autoscaling", "needs-triage", "area/security", "committee/security-response", "sig/scheduling", "sig/node", "pr", "sig/api-machinery", "release-note", "size/L", "kind/api-change", "kind/feature", "cncf-cla: yes", "do-not-merge/work-in-progress", "needs-priority", "sig/network", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "area/test", "size/M", "release-note-none", "sig/testing", "do-not-merge/needs-kind", "sig/apps", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "sig/auth", "approved", "sig/cli", "sig/instrumentation", "sig/architecture", "area/code-generation", "sig/cloud-provider", "area/dependency", "area/code-organization", "wg/device-management", "kind/dependency", "size/XS", "cncf-cla: no", "do-not-merge/invalid-commit-message", "do-not-merge/hold", "do-not-merge/needs-sig", "lgtm", "area/jobs", "area/config", "test-infra", "area/infra", "area/terraform", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "size/S", "minikube", "kube-state-metrics", "area/cluster-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "kind/cleanup", "committee/steering", "area/elections", "community", "release", "cloud-provider-vsphere", "sig/release", "area/release-eng", "website", "language/ko", "area/localization", "language/en", "kind/flake", "ok-to-test", "cloud-provider-aws", "containerd", "nerdbox", "area/cri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#141294: Placeholder SRC

/area security
/kind bug
/committee security-response

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141294)

**Metadata:**
- Created: 2026-08-10
- Comments: 1
- State: open

### kubernetes/kubernetes#141290: [Bug] Device taint NoExecute eviction does not evict pods using DRA-backed extended-resource claims (pod.Status.ExtendedResourceClaimStatus)

### What happened?

**TL;DR:** the device-taint eviction controller (`pkg/controller/devicetainteviction`) only discovers which
claims a pod is using by reading `pod.Spec.ResourceClaims`. A pod that got its device through the newer
Extended Resource Backed by DRA path (KEP-5004, `DRAExtendedResource...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141290)

**Metadata:**
- Created: 2026-08-10
- Comments: 2
- State: open

### kubernetes/kubernetes#141297: fix: check ExtendedResourceClaimStatus in podEvictionTime for NoExecute eviction [fj4WqyCCw3C5ShR1RfB7MoBPTpkRrBFYP1uT35g3MvT]

### Which problem is this PR solving?

Fixes #141290

Pods using extended resource backed by DRA (KEP-5004, DRAExtendedResource) have their claim reference in `pod.Status.ExtendedResourceClaimStatus`, not in `pod.Spec.ResourceClaims`. The device-taint eviction controller only looked at `pod.Spec.Res...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141297)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56908: remove recommendation to add cluster-admin rights to the default service account in kube-system

### Description

Following a discussion at last week's SIG-Security, this change modifies the ServiceAccount permissions section of the RBAC documentation, to remove a recommendation that `cluster-admin` rights are bound to the `default` service account in the `kube-system` namespace. 

Granting...

🔗 [Link](https://github.com/kubernetes/website/pull/56908)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1478: e2e: increase BYO SG deletion timeout from 2 to 6 minutes

**What type of PR is this?**

/kind flake

**What this PR does / why we need it**:

The BYO security group e2e tests delete the test security group in a `DeferCleanup` block using `gomega.Eventually` with a 2-minute timeout. This timeout is occasionally insufficient in loaded CI environments....

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1478)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### containerd/containerd: containerd 2.4.0-beta.0

Welcome to the v2.4.0-beta.0 release of containerd!
*This is a pre-release of containerd*

containerd 2.4 is a regular (non-LTS) release with a shorter support window,
intended for users who want to adopt new features sooner. As the release
following the 2.3 LTS, it is the point in the release cycle where previously
deprecated features may be removed, so this release may include breaking
changes; check the notes below and clear any deprecation warnings from your
current version before upgrading....

🔗 [Link](https://github.com/containerd/containerd/releases/tag/v2.4.0-beta.0)

**Metadata:**
- Version: v2.4.0-beta.0
- Published: 2026-08-10
- Prerelease: Yes

## Updates

### kubernetes/kubernetes#141298: Succeeded pods cause incorrect HPA calculation

### What happened?

Pods in a terminal `Succeeded` state are not excluded from HPA calculations. In most cases, data is unavailable, so they enter `missingPods`. The handling of `missingPods` means that when there are sufficient pods in `Succeeded` states they can damp out scaling.

Although pods co...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141298)

**Metadata:**
- Created: 2026-08-10
- Comments: 3
- State: open

### kubernetes/kubernetes#141286: MemoryQoS: add effective-state conformance coverage

/sig node

While validating MemoryQoS in Netflix's Kubernetes and cgroup v2 environment, we found that checking the configured feature and reservation policy alone was not sufficient to establish the effective runtime state. A configuration change can be accepted while existing workloads retain thei...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141286)

**Metadata:**
- Created: 2026-08-10
- Comments: 1
- State: open

### kubernetes/kubernetes#141305: resource: add Quantity.AsScaledInt64 and AsMilliInt64

**What type of PR is this?**

/kind feature
/kind api-change
/sig api-machinery

**What this PR does / why we need it**:

`Quantity.Value`, `MilliValue`, and `ScaledValue` wrap silently when the result does not fit an int64, so `NewScaledQuantity(math.MaxInt64, 1).Value()` returns `-10` rather than ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141305)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141304: Fix make EndpointSlice deletion idempotent and UID-safe

/kind bug

#### What this PR does / why we need it:
This change updates the EndpointSlice controller to not treat NotFound as an error when deleting slices and additionally, uses the slice UID as a pre-condition for the delete to avoid deleting the wrong slice.
This is particularly useful if the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141304)

**Metadata:**
- Created: 2026-08-11
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141303: featuregates: preserve min compatibility versions in generated list

Part of #141283.

The compatibility-lifecycle generator currently drops `FeatureSpec.MinCompatibilityVersion`, which makes feature specs at the same Kubernetes version indistinguishable in `versioned_feature_list.yaml`.

This change records and parses `minCompatibilityVersion`, regenerates the `DRAF...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141303)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141302: Ignore succeeded pods in HPA replica calculations

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:
Fixes HPA behavior which damps scaling when `Succeeded` pods are present matching the label selector. Adds tests to verify this behavior

#### Which issue(s) this PR is related to:
Fixes #141298

#### Specia...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141302)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141301: Update google.golang.org/protobuf to v1.36.12

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Update google.golang.org/protobuf to v1.36.12.

Before, go.mod pinned the pseudo-version v1.36.12-0.20260120151049-f2248ac996af. Now go.mod pins the released tag v1.36.12.

The update adds no depende...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141301)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141300: fix: exclude Succeeded pods from HPA groupPods calculation

**What this PR does / why we need it:**

Succeeded pods are in a terminal state and should never be included in HPA calculations. The  function in  already excludes pods with  and  phase, but it does not exclude  pods. This causes Succeeded pods to fall through to , skewing the replica count calcula...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141300)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141299: Allocator pool buffer cap

Bound the buffer capacity retained by runtime.AllocatorPool so a burst of large protobuf responses no longer pins multi-megabyte encode buffers in memory for the life of the apiserver process (observed pinning ~49MB of heap on a GKE control plane).

- Add runtime.PutAllocator, which drops buffers ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141299)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141296: Fix windows backslash escaping

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141296)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141291: Add RISC-V build for the pause image

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141291)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141287: test: add MemoryQoS effective state conformance

/kind feature
/sig node

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

While validating MemoryQoS in Netflix's Kubernetes and cgroup v2 environment, we found that feature configuration alone does not establish the effective state of already-running ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141287)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141285: kubelet: add PostStopContainer unit test

#### What type of PR is this?

/kind test

#### What this PR does / why we need it:

Adds unit test coverage for `PostStopContainer` in the kubelet's internal container lifecycle.

The test verifies that when a container stops, `PostStopContainer` calls the topology manager's `RemoveContaine...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141285)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37649: CAPO: Update test timeout for CAPO presubmit jobs

We want to decrease the test timeout and build job for CAPO presubmit jobs. Currently it has 5h timeout which is too long for presubmit jobs. We want to decrease it to 3h so that we don't need to wait for 5h timeout. Also adding `always_run: false` for openstack e2e test in presubmit jobs. We don't ...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37649)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9818: create bq dataset and pass asn values to archeio

Create BQ analysis datasets and capture the ASN calculated by GCP.

```
WITH events AS (
  SELECT
    jsonPayload.traceid,
    jsonPayload.image,
    jsonPayload.reference,
    jsonPayload.type,
    jsonPayload.useragent,
    jsonPayload.cloud,
    jsonPayload.region,
    jsonPayload.bac...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9818)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23477: smoke test: Use macos-26-intel

We want to test the latest version and macOS 26 runners are likely to less loaded now. This allows testing vmnet-helper from brew which is the recommended way to install vmnet-helper.

Works for qemu but fails with vfkit/vmnet-helper:

```
==> /Users/runner/.minikube/machines/minikube/vmnet-hel...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23477)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kube-state-metrics#3081: chore: remove the unused allow package

**What this PR does / why we need it:**

`pkg/allow` has no references anywhere in the repository — no callers, no tests, no documentation:

```
$ grep -rn 'pkg/allow"\|allow\.Labels' --include='*.go' --include='*.md' .
(no matches)
```

Label allowlisting is implemented entirely in `internal/store`...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3081)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3080: fix(util): rebuild the clients from the current kubeconfig

**What this PR does / why we need it:**

`CreateKubeClient` returns a memoized client and ignores its arguments entirely:

```go
func CreateKubeClient(apiserver string, kubeconfig string) (clientset.Interface, error) {
	if currentKubeClient != nil {
		return currentKubeClient, nil
	}
	...
	if config...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3080)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3079: fix(proc): start the reaper only once

**What this PR does / why we need it:**

`StartReaper` spawns a goroutine that runs for the lifetime of the process and has no stop path:

```go
func StartReaper() {
	if os.Getpid() == 1 {
		go func() {
			sigs := make(chan os.Signal, 1)
			signal.Notify(sigs, syscall.SIGCHLD)
			for { ... }        ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3079)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3078: fix(discovery): check the CRD fields instead of asserting them

**What this PR does / why we need it:**

`extractGVKPs` reads the CRD spec with bare type assertions:

```go
objSpec := u.Object["spec"].(map[string]interface{})
g := objSpec["group"].(string)
k := objSpec["names"].(map[string]interface{})["kind"].(string)
p := objSpec["names"].(map[string]interface...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3078)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3077: fix(customresourcestate): do not write GVK labels into the shared config

**What this PR does / why we need it:**

`compile` takes `Resource` by value, but `CommonLabels` is a map, so the copy shares it with the configured resource and with every other copy made from it — and wildcard resolution produces one copy per discovered GVK:

```go
if resource.CommonLabels == nil ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3077)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3076: fix(endpointslice): build each hint's labels independently

**What this PR does / why we need it:**

`kube_endpointslice_endpoints_hints` builds one metric per zone by appending onto label slices shared across the loop:

```go
labelKeys = append(labelKeys, "address")
labelValues = append(labelValues, ep.Addresses[0])

for _, zone := range ep.Hints.ForZones {...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3076)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3075: fix(store): guard the builder state shared with discovery

**What this PR does / why we need it:**

`availableStores` is package state, seeded with the built-in resources, and `WithCustomResourceStoreFactories` adds entries to it:

```go
if _, ok := availableStores[gvrString]; ok { ... }
availableStores[gvrString] = func(b *Builder) []cache.Store { ... }
``...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3075)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3074: fix(discovery): read the GVK cache under the lock

**What this PR does / why we need it:**

`ResolveGVKToGVKPs` reads and range-iterates `r.Map` with no lock held — at four separate points, one per resolution path. Every other access to that map goes through `SafeRead`/`SafeWrite`, including the CRD informer's add, update and delete handlers, which ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3074)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3073: fix(metricshandler): scope the scrape lock to reading the writers

**What this PR does / why we need it:**

`ServeHTTP` holds `mtx.RLock` for the entire response:

```go
func (m *MetricsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	m.mtx.RLock()
	defer m.mtx.RUnlock()
```

That covers negotiation, gzip wrapping, header sanitisation and the write its...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3073)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3072: fix: retry a failed rebuild instead of dropping it

**What this PR does / why we need it:**

Two places that record a failure and then carry on as though it had not happened.

### 1. `WasUpdated` was cleared even when the rebuild failed

`internal/discovery/discovery.go` — the comment states the intent plainly:

```go
// Reset the flag, if there were...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3072)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3071: fix(hpa): skip a status metric whose source is not set

**What this PR does / why we need it:**

`createHPAStatusTargetMetric` switches on `MetricStatus.Type` and dereferences the matching source pointer with no nil check:

```go
switch m.Type {
case autoscaling.ObjectMetricSourceType:
	metricName = m.Object.Metric.Name        // <- m.Object may be nil
	...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3071)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3070: fix: serialize config reloads so one does not strand the other

**What this PR does / why we need it:**

`RunKubeStateMetricsWrapper` watches up to three files — the options config, the custom resource state config and the kubeconfig — and each gets its own `viper` instance. `WatchConfig` starts a goroutine per instance, so every `OnConfigChange` callback runs o...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3070)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3069: test(e2e): make the pod wait loop actually retry

**What this PR does / why we need it:**

`ci-e2e-tests` fails intermittently. `kube_pod_up` polls with a bare pipeline and inspects `$?` on the next line:

```bash
for _ in {1..90}; do # timeout for 3 minutes
    kubectl get pods -A | grep "$1" 1>/dev/null 2>&1
    if [[ $? -ne 1 ]]; then
        is...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3069)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3068: fix: three fixes in the server request and shutdown paths

**What this PR does / why we need it:**

Three small, independent fixes in the serving path. Grouped because each is a couple of lines; happy to split if preferred.

### 1. Gzip negotiation wraps the response writer once per token

`pkg/metricshandler/metrics_handler.go` — the loop over `Accept-Enco...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3068)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3067: fix(metric_generator): escape reserved characters in help text

**What this PR does / why we need it:**

`generateHeader` writes the help string verbatim into the HELP line:

```go
header.WriteString("# HELP ")
header.WriteString(g.Name)
header.WriteByte(' ')
header.WriteString(g.Help)      // <- unescaped
header.WriteByte('\n')
```

The Prometheus text format r...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3067)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3066: fix(customresourcestate): do not panic on a metric that fails to compile

**What this PR does / why we need it:**

`compileCommon` returns a nil `*compiledCommon` alongside its error, but all three metric types assign through `cc` before checking `err`:

```go
cc, err := compileCommon(m.Gauge.MetricMeta)
cc.t = metric.Gauge                                  // <- nil deref...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3066)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3065: fix(sharding): preserve pagination metadata when filtering a list

**What this PR does / why we need it:**

`shardedListWatch.List` rebuilds the upstream result as a fresh `metav1.List` containing only the objects belonging to this shard, and copies just the resource version onto it:

```go
res := &metav1.List{Items: []runtime.RawExtension{}}
for _, item := range i...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3065)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3064: fix(store): never emit the same label name twice

**What this PR does / why we need it:**

`mapToPrometheusLabels` resolves colliding sanitized label names by renaming them to `<name>_conflictN`, but it never checks whether the generated name is itself already in use. A key that sanitizes directly onto that name collides with it:

```
{"A.b.conflic...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3064)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3063: fix(endpointslice): do not dereference an unset port number

**What this PR does / why we need it:**

`createEndpointSlicePorts` dereferences all three `EndpointPort` fields unconditionally:

```go
LabelValues: []string{*port.Name, string(*port.Protocol), strconv.FormatInt(int64(*port.Port), 10)},
```

`Name` and `Protocol` are safe because `SetDefaults_Endpo...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3063)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3062: fix(options): validate flags that are currently accepted at any value

**What this PR does / why we need it:**

Three related gaps in `Options.Validate()`, each of which lets a misconfiguration through silently.

### 1. The general validations never ran without `--node`

`Validate()` returned early when `--node` was empty, leaving every check below that guard unreachab...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3062)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10127: CapacityBuffers should have a Status indicating if it is fully provisioned (not just Ready\ReadyForProvisioning)

<!--
Thanks for taking the time to raise a feature request! Please answer these questions as best you can before submitting.
-->

**Which component are you using?**:
/area cluster-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addo...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10127)

**Metadata:**
- Created: 2026-08-10
- Comments: 1
- State: open

### kubernetes/autoscaler#10126: Add GetMatchingVPA benchmark

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I'd like to see if I can improve this lookup. Before doing that, we need a test to ensure it's an improvement.

The plan is to get a benchmark into master, then add it to CI, then try improve it.


###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10126)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9108: Update nomination-template in documentation dir with 2026 version

This PR updates \documentation\nomination-template.md with the 2026\nomination-template.md with removing bullets in the header otherwise the bullets fails a check


🔗 [Link](https://github.com/kubernetes/community/pull/9108)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-vsphere: v1.37.0-rc.0

## What's Changed
* Bump CI for CAPI 1.14 and CAPV 1.17 by @zhanggbj in https://github.com/kubernetes/cloud-provider-vsphere/pull/1821
* Pin GitHub Actions to full-length commit SHAs by @zhanggbj in https://github.com/kubernetes/cloud-provider-vsphere/pull/1822
* Fix multiple reviewer separation and add 12345lcr by @zhanggbj in https://github.com/kubernetes/cloud-provider-vsphere/pull/1823
* Update CPI release guide by @zhanggbj in https://github.com/kubernetes/cloud-provider-vsphere/pull/1824
*...

🔗 [Link](https://github.com/kubernetes/cloud-provider-vsphere/releases/tag/v1.37.0-rc.0)

**Metadata:**
- Version: v1.37.0-rc.0
- Published: 2026-08-10
- Prerelease: Yes

### kubernetes/release#4489: Add RISC-V build for the kube-cross image

<!--  Thanks for sending a pull request!  Here are some tips for you:

- If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide#your-first-contribution and developer guide https://git.k8s.io/community/contributors/devel/development.md#de...

🔗 [Link](https://github.com/kubernetes/release/pull/4489)

**Metadata:**
- Created: 2026-08-10
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56924: Homepage: hamburger button has no accessible name (4.1.2); dark-mode link contrast is 2.77:1 (1.4.3)

**This is a Bug Report**

Two accessibility defects on the homepage. Both are invisible to a desktop, light-mode scan, which is why I suspect they have survived: one element is `display: none` above the mobile breakpoint, and the other only changes colour under `prefers-color-scheme: dark`.

**Probl...

🔗 [Link](https://github.com/kubernetes/website/issues/56924)

**Metadata:**
- Created: 2026-08-11
- Comments: 1
- State: open

### kubernetes/website#56909: [ko] Update content/ko/docs/concepts/storage/storage-classes.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/storage/storage-classes.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/storage/storage-classes/
- English: http...

🔗 [Link](https://github.com/kubernetes/website/issues/56909)

**Metadata:**
- Created: 2026-08-10
- Comments: 1
- State: open

### containerd/nerdbox: v0.2.3

## What's Changed
* Update close stdin logic by @dmcgowan in https://github.com/containerd/nerdbox/pull/265


**Full Changelog**: https://github.com/containerd/nerdbox/compare/v0.2.2...v0.2.3

🔗 [Link](https://github.com/containerd/nerdbox/releases/tag/v0.2.3)

**Metadata:**
- Version: v0.2.3
- Published: 2026-08-10
- Prerelease: No

### containerd/containerd#13934: CRI exec prematurely closes stdin during large input streams

### Description

When streaming data to a container through CRI exec stdin, the input stream is prematurely closed after only a small amount of data has been transferred.

The issue is reproducible directly with `crictl exec -i`, without involving kubectl or the Kubernetes API server. In most reprod...

🔗 [Link](https://github.com/containerd/containerd/issues/13934)

**Metadata:**
- Created: 2026-08-10
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-08-11 01:25:45*
