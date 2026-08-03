---
title: "Upstream Github - 2026-08-03"
description: "CNCF upstream activity from github"
pubDate: 2026-08-03
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/cleanup", "sig/testing", "needs-triage", "sig/node", "kind/bug", "sig/scheduling", "wg/device-management", "sig/cli", "pr", "size/XL", "release-note-none", "sig/auth", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "size/XXL", "sig/apps", "release-note", "size/M", "do-not-merge/needs-sig", "priority/important-soon", "sig/network", "area/kubelet", "area/kube-proxy", "area/apiserver", "area/kubectl", "area/cloudprovider", "sig/storage", "sig/api-machinery", "sig/cluster-lifecycle", "sig/instrumentation", "sig/architecture", "do-not-merge/cherry-pick-not-approved", "do-not-merge/work-in-progress", "area/code-generation", "sig/cloud-provider", "area/dependency", "size/XS", "size/L", "approved", "area/kubeadm", "do-not-merge/hold", "kind/feature", "ok-to-test", "sig/etcd", "do-not-merge/needs-kind", "size/S", "area/conformance", "area/provider/aws", "area/jobs", "area/config", "test-infra", "area/testgrid", "sig/security", "language/ko", "area/localization", "website", "kubectl", "area/prow", "sig/k8s-infra", "k8s.io", "area/documentation", "area/api", "kops", "area/vertical-pod-autoscaler", "autoscaler", "release-note-action-required", "kind/api-change", "area/cluster-autoscaler", "area/helm-charts", "sig/release", "needs-kind", "area/release-eng", "release"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/test-infra#37601: Add prow presubmits for sig-security srctl tool

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds presubmit jobs for `kubernetes/sig-security` that run when `sig-security-tooling/srctl` changes:

1. **pull-sig-security-srctl-unit-tests** — `go test -v -cover ./...` (kubekins image)
2. **pull-sig-security...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37601)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#141121: hack/README.md: writing quality issues (weasel words, comma splice, wordiness, missing space, passive voice)

What happened?

hack/README.md has several writing quality issues:

Line 8 — "many" is a weasel word that weakens meaning
Lines 15–16 — Comma splice: "redirection, Please" — "Please" starts a new sentence and should not be joined with a comma
Lines 15 & 17 — "It is equivalent" is wordy phrasing
Line...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141121)

**Metadata:**
- Created: 2026-08-02
- Comments: 2
- State: open

### kubernetes/kubernetes#141119: kubelet eviction manager: transient HasDedicatedImageFs failure permanently disables disk-pressure eviction signals

### What happened?

When the kubelet's eviction manager calls `HasDedicatedImageFs` on the first `synchronize` iteration and that call fails (e.g., the CRI socket isn't fully ready or cadvisor hasn't completed its initial housekeeping), `m.dedicatedImageFs` remains `nil`. On every subsequent invocat...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141119)

**Metadata:**
- Created: 2026-08-02
- Comments: 4
- State: open

### kubernetes/kubernetes#141117: DRA: GatherPools completeness is order-dependent when ResourceSliceCount values disagree

### What happened?

`GatherPools` determines whether a pool generation is complete by comparing the number of retained slices with `slicesForPool[0].Spec.Pool.ResourceSliceCount`, so the declared count comes from the first retained slice for that pool generation. When two ResourceSlices in the same ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141117)

**Metadata:**
- Created: 2026-08-02
- Comments: 4
- State: open

### kubernetes/kubernetes#141115: kubectl get: PrintObj errors are silently discarded in human-readable output loop

### What happened?

When running kubectl get pods -o yaml (or any human-readable/structured output that goes through the per-object printer loop), errors returned by printer.PrintObj are silently discarded. The loop in Run() that iterates over fetched objects calls printer.PrintObj(info.Object, w) w...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141115)

**Metadata:**
- Created: 2026-08-02
- Comments: 4
- State: open

### kubernetes/kubernetes#141130: Add unit tests for serviceaccount TokenREST Create paths

# WARN: AI assisted PR!

#### What type of PR is this?

/kind cleanup
/sig auth

#### What this PR does / why we need it:

Issue #121515 asked for unit tests for `pkg/registry/core/serviceaccount/storage/token.go`. Some coverage was added over time (expiry caps, SA UID validation, webhook a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141130)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141129: Drop orphaned MySQL/Cassandra/Zookeeper e2e dependencies

# WARN: AI assisted PR!


#### What type of PR is this?

/kind cleanup
/sig testing
/sig apps

#### What this PR does / why we need it:

Continues issue #133054 (replace third-party DB-like e2e dependencies with etcd / drop dead ones).

Much of that work already landed:
- Redis e2e ima...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141129)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141128: Seed ClusterIP allocator metrics on EnableMetrics()

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`EnableMetrics()` registered Prometheus gauges (`kube_apiserver_clusterip_allocator_allocated_ips` and `kube_apiserver_clusterip_allocator_available_ips`) but never initialized their values. The gauges remained at 0 ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141128)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141127: deps: bump google.golang.org/grpc to v1.79.3 on release-1.34

# WARNING: AI ASSISTED PR!

#### What type of PR is this?

/kind bug
/kind dependency-change

#### What this PR does / why we need it:

On **release-1.34**, kube-apiserver can hang an etcd `KV/Range` for ~40–90s when a gRPC transport is recycled mid-flight (common during first-request lazy ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141127)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#141126: deps: bump google.golang.org/grpc to v1.79.3 on release-1.35

# WARN: AI assisted PR!

#### What type of PR is this?

/kind bug
/kind dependency-change

#### What this PR does / why we need it:

On **release-1.35**, kube-apiserver can hang an etcd `KV/Range` for ~40–90s when a gRPC transport is recycled mid-flight (common during first-request lazy CRD...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141126)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141125: apiserver: merge duplicate new keys in CEL map-list concat

# WARNING! AI ASSISTED PR 

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Schema-aware CEL map-list concatenation (`x-kubernetes-list-type: map`) did not update the key index when appending a **new** key from the right operand. A later element with that ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141125)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141124: e2e: drop Slow tags from fast storage tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Per the [Slow] definition (tests taking more than ~5 minutes), several storage e2e tests were over-tagged. Mis-tagged Slow tests are excluded from common parallel jobs (`!Slow` label filter) even though they fini...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141124)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141123: e2e: drop Slow tag from DNS configMap nameserver tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Per the [Slow] definition (tests > ~5 minutes), three DNS configMap nameserver e2e tests were over-tagged.

Measured on `ci-kubernetes-e2e-gci-gce-serial` (3 recent SUCCESS runs; completed, not skipped):

| Test ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141123)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141118: dra: reject pools whose slices disagree on ResourceSliceCount

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

`GatherPools` derived pool-generation completeness from the `ResourceSliceCount` declared by a single slice. When slices in the same driver, pool, and generation disagreed on `ResourceSliceCount`, the result depended o...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141118)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141114: kubelet: test internal container lifecycle

#### What type of PR is this?

/kind cleanup
/sig node
/area kubelet

#### What this PR does / why we need it:

Adds coverage for the kubelet's internal container lifecycle hooks:

- verifies that Linux `PreCreateContainer` forwards CPU Manager and Memory Manager affinity into the CRI container conf...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141114)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141113: kubeadm: tolerate etcd WAL .tmp rename during upgrade backup

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141113)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141111: etcd3: surface etcd client watch buffer backlog for watch cache watches

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141111)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141110: DRA: Fix ExtendedResourceCache handling of DeviceClass collisions

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141110)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141109: conformance: fix up group discovery endpoint exemptions

Three entries in this directory were compensating for a bug in how apisnoop and test-infra's audit_log_parser.py classify group discovery endpoints. A group discovery operation, /apis/<group>/, carries no version in its path and none in its operation id, because it is the operation you call to find ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141109)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37603: Add pull-kubernetes-e2e-ec2-alpha-canary presubmit for provider-aws-test-infra

kubernetes-sigs/provider-aws-test-infra has no presubmit that runs the tests of the periodic job ci-kubernetes-e2e-ec2-alpha-features.

The comment on pull-kubernetes-node-e2e-alpha-ec2 describes that job as a duplicate of the periodic for testing provider-aws-test-infra changes. The job cannot test...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37603)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56769: [ko] Update content/ko/docs/concepts/workloads/controllers/deployment.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/workloads/controllers/deployment.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/workloads/controllers/deploymen...

🔗 [Link](https://github.com/kubernetes/website/issues/56769)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/website#56757: [ko] Update content/ko/docs/tasks/access-application-cluster/web-ui-dashboard.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/access-application-cluster/web-ui-dashboard.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/access-application-cluster...

🔗 [Link](https://github.com/kubernetes/website/issues/56757)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/website#56756: [ko] Update content/ko/docs/concepts/architecture/cgroups.md

**This is a Feature Request**
<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as possi...

🔗 [Link](https://github.com/kubernetes/website/issues/56756)

**Metadata:**
- Created: 2026-08-02
- Comments: 5
- State: open

### kubernetes/kubectl#1868: Add `kubectl config merge`

<!-- Please only use this template for submitting enhancement requests -->

### What would you like to be added
Add a subcommand to merge in a kubeconfig file into your default kubeconfig file.

### Why is this needed
Many tools already do this anyhow, `gcloud container clusters get-credentials`, `m...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1868)

**Metadata:**
- Created: 2026-08-03
- Comments: 1
- State: open

### kubernetes/kubectl#1867: Add `kubectl config delete-context` flag to also delete the cluster and user if they are not used by any other context

<!-- Please only use this template for submitting enhancement requests -->

### What would you like to be added
When you delete a context, it is common to also want to delete the associated cluster and user entry from your config, but this currently needs to be done manually leading you to need thre...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1867)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/k8s.io#9803: fix: eliminate monitoring Argo drift

Remove server-side diff from the monitoring ApplicationSet because it treats legacy field-manager ownership as live drift after the Argo upgrade.

Preserve Grafana's chart-generated admin password and checksum during syncs, and explicitly declare ExternalSecret and HTTPRoute defaults that Argo canno...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9803)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18661: aws: download nodeup from private S3 buckets with curl

When KOPS_BASE_URL is an s3:// URL, the bootstrap script downloads nodeup with curl 8.0 or newer, signing the request with instance profile credentials from IMDS using curl's native AWS SigV4 support. The credentials are piped through --config -, so they never reach disk, process arguments, or conso...

🔗 [Link](https://github.com/kubernetes/kops/pull/18661)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10093: VPA InPlace: Updater skips later recommendations after a transient kubelet resize error

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:
/area vertical-pod-autoscaler
<!--
Which autoscaling component hosted in this repository (cluster-autoscaler, vertical-pod-autoscaler, addon-resizer, helm charts) is the bug in?

Ad...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10093)

**Metadata:**
- Created: 2026-08-02
- Comments: 1
- State: open

### kubernetes/autoscaler#10092: vpa chart: move CRDs to templates/ so they sync on upgrade

###  What type of PR is this?
/kind feature
/kind api-change

 ### What this PR does 
Moves the VPA Helm chart's CRDs from crds/ to templates/crds/ so they're managed as regular chart templates instead of Helm's special crds/ folder which Helm never updates on helm upgrade. This means the CRDs ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10092)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10091: Update Cluster Autoscaler Helm chart defaults to v1.36.0

## Summary

This PR updates the Cluster Autoscaler Helm chart defaults to use the
`registry.k8s.io/autoscaling/cluster-autoscaler:v1.36.0` image.

### Changes

- Update default `image.tag` from `v1.35.0` to `v1.36.0`
- Update the Helm chart README to reflect the new default image tag
- Bump...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10091)

**Metadata:**
- Created: 2026-08-02
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4484: Bump the actions group with 4 updates

Bumps the actions group with 4 updates: [github/codeql-action/init](https://github.com/github/codeql-action), [github/codeql-action/autobuild](https://github.com/github/codeql-action), [github/codeql-action/analyze](https://github.com/github/codeql-action) and [github/codeql-action/upload-sarif](htt...

🔗 [Link](https://github.com/kubernetes/release/pull/4484)

**Metadata:**
- Created: 2026-08-03
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-08-03 02:34:55*
