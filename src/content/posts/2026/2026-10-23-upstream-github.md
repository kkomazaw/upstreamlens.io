---
title: "Upstream Github - 2026-10-23"
description: "CNCF upstream activity from github"
pubDate: 2026-10-23
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/feature", "sig/instrumentation", "needs-triage", "kind/cleanup", "sig/autoscaling", "pr", "kind/bug", "size/XS", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-priority", "triage/accepted", "area/test", "sig/api-machinery", "size/S", "needs-ok-to-test", "release-note", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "area/kubectl", "size/M", "approved", "sig/cli", "size/L", "sig/apps", "do-not-merge/cherry-pick-not-approved", "area/apiserver", "size/XXL", "kind/api-change", "do-not-merge/release-note-label-needed", "sig/storage", "priority/important-longterm", "ok-to-test", "sig/scheduling", "do-not-merge/work-in-progress", "wg/device-management", "release-note-action-required", "sig/auth", "kube-state-metrics", "minikube", "do-not-merge/hold", "area/github-management", "org", "lgtm", "sig/release", "sig/cluster-lifecycle", "language/en", "website", "cloud-provider-openstack", "area/release-eng", "k8s.io", "area/jobs", "area/config", "test-infra", "priority/critical-urgent", "area/dependency", "release", "needs-kind", "area/addon-resizer", "autoscaler", "kind/documentation", "area/vertical-pod-autoscaler", "size/XL", "area/helm-charts", "prometheus", "mysqld_exporter", "memcached_exporter", "envoyproxy", "envoy", "containerd", "nri"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143317: RFC: kubectl get: preserve field order of server responses

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

That `kubectl get -o yaml` sorts fields alphabetically is annoying because related fields are separated by unrelated fields and and important information like the name comes after less important information...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143317)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### prometheus/mysqld_exporter: 0.21.0 / 2026-10-22

BREAKING CHANGES:

* Selected `mysql_global_status_*` and `mysql_slave_status_*` metrics now expose Counter or Gauge types instead of Untyped.
This includes query and table-cache totals, thread and uptime values, and replica running and lag values.
Consumers that inspect metric family types should review these series. #1099

Changes:

* [FEATURE] Add the optional `info_schema.innodb_trx` collector for active transaction counts and oldest transaction age by state. #1087
* [FEATURE] Add the option...

🔗 [Link](https://github.com/prometheus/mysqld_exporter/releases/tag/v0.21.0)

**Metadata:**
- Version: v0.21.0
- Published: 2026-10-22
- Prerelease: No

### envoyproxy/envoy: v1.40.1

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    the private keys of several eMudhra intermediate CA certificates were compromised.
    - release: updated the Envoy docker images so they no longer trust the compromised
      eMudhra CAs.
    - mobile: removed the `AAA Certificate Services` and `emSign ECC Root CA - G3` roots
      from the root certificate bundle built into Envoy Mobile. Servers whos...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.40.1)

**Metadata:**
- Version: v1.40.1
- Published: 2026-10-23
- Prerelease: No

### envoyproxy/envoy: v1.39.5

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    the private keys of several eMudhra intermediate CA certificates were compromised.
    - release: updated the Envoy docker images so they no longer trust the compromised
      eMudhra CAs.
    - mobile: removed the `AAA Certificate Services` and `emSign ECC Root CA - G3` roots
      from the root certificate bundle built into Envoy Mobile. Servers whos...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.39.5)

**Metadata:**
- Version: v1.39.5
- Published: 2026-10-23
- Prerelease: No

### envoyproxy/envoy: v1.38.8

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    the private keys of several eMudhra intermediate CA certificates were compromised.
    - release: updated the Envoy docker images so they no longer trust the compromised
      eMudhra CAs.
    - mobile: removed the `AAA Certificate Services` and `emSign ECC Root CA - G3` roots
      from the root certificate bundle built into Envoy Mobile. Servers whos...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.38.8)

**Metadata:**
- Version: v1.38.8
- Published: 2026-10-22
- Prerelease: No

### envoyproxy/envoy: v1.37.10

**Summary of changes**:

* Upstream security fixes:
  - [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/):
    the private keys of several eMudhra intermediate CA certificates were compromised.
    - release: updated the Envoy docker images so they no longer trust the compromised
      eMudhra CAs.
    - mobile: removed the `AAA Certificate Services` and `emSign ECC Root CA - G3` roots
      from the root certificate bundle built into Envoy Mobile. Servers whos...

🔗 [Link](https://github.com/envoyproxy/envoy/releases/tag/v1.37.10)

**Metadata:**
- Version: v1.37.10
- Published: 2026-10-22
- Prerelease: No

## Updates

### kubernetes/kubernetes#143330: Make kubelet termination logs best effort after a bounded wait

### Problem

Blocking logging is generally desirable: when the logging destination stalls, normal operations should retain backpressure and wait for recovery rather than silently lose diagnostic messages.

Explicitly requested pod termination is a different case. Logging backpressure—including a blo...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143330)

**Metadata:**
- Created: 2026-10-22
- Comments: 2
- State: open

### kubernetes/kubernetes#143322: HPA selector overlap check repeatedly serializes identical pod labels

### What happened?

`HPAsMatchingPods` calls `labels.Set.String()` for every pod before deduplicating label sets. Pods from the same ReplicaSet commonly have identical labels, so this repeatedly allocates and sorts the same data during HPA reconciliation.

This remains in [current master](https://gi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143322)

**Metadata:**
- Created: 2026-10-22
- Comments: 1
- State: open

### kubernetes/kubernetes#143334: addons: remove namespace for network-policies clusterrole

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143334)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143333: Add integration coverage for aggregated API 304 responses

#### What type of PR is this?

/kind cleanup
/sig api-machinery

#### What this PR does / why we need it:

A `304 Not Modified` response from an aggregated API server without a `Location` header must reach the client unchanged. Extend `TestAggregatedAPIServerRejectRedirectResponse` with a backend pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143333)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143331: [PodLevelResourceManagers] Enable PodLevelResourceManagers by default

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143331)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143328: kubectl: remove client-side OpenAPI v2 schema validation

#### What type of PR is this?

/kind cleanup
/sig cli

#### What this PR does / why we need it:

- Removes OpenAPI v2 schema validation from `kubectl`'s `Validator()` and deprecates `validation.NewSchemaValidation`.
- Under `--validate=strict`, kinds without server-side field validation fell back to...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143328)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143327: kubectl: verify fieldValidation support per list item

#### What type of PR is this?

/kind cleanup
/sig cli

#### What this PR does / why we need it:

- Verifies `fieldValidation` support per item for list documents (`kind: List`, typed lists such as `ServiceList`) instead of by the list kind.
- The list kind has no PATCH operation, so every list was v...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143327)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143326: Automated cherry pick of #143103: svm: keep CRD stored versions when a migration fails

Cherry pick of #143103 on release-1.37.

#143103: svm: keep CRD stored versions when a migration fails

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug

...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143326)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143325: Track compaction RV in snapshotter and keep last snapshot behind compaction window

/kind feature

```release-note
Improve reliability of serving of Exact LIST on resources with infrequent updates from watch cache by keep the last snapshots behind compaction window
```

This matches the etcd behavior where we keep old key revisions before compaction if the key didn't change s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143325)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143324: apiserver: let the stream translator wait for the client to close

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

The WebSocket stream translator (kube-apiserver, and kubelet with `ExtendWebSocketsToKubelet`) writes the command's status and closes the connection, so a client reading more slowly than the command wrote loses the e...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143324)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143323: podautoscaler: avoid serializing repeated pod labels

#### What type of PR is this?

/kind cleanup
/sig autoscaling

#### What this PR does / why we need it:

Skip serializing pod labels equal to the first set while only one distinct set has been seen. Stop comparing once a second set appears, retaining the existing deduplication path for mixed labels....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143323)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143318: Automated cherry pick of #143285: Validate labels and annotations in pods/binding

Cherry pick of #143285 on release-1.34.

#143285: Validate labels and annotations in pods/binding

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143318)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143316: Automated cherry pick of #143285: Validate labels and annotations in pods/binding

Cherry pick of #143285 on release-1.35.

#143285: Validate labels and annotations in pods/binding

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143316)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143315: Automated cherry pick of #143285: Validate labels and annotations in pods/binding

Cherry pick of #143285 on release-1.36.

#143285: Validate labels and annotations in pods/binding

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143315)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143313: Write DrainInProgress and Drained Node Conditions as part of kubectl drain and kubectl uncordon

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143313)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143312: Automated cherry pick of #143285: Validate labels and annotations in pods/binding

Cherry pick of #143285 on release-1.37.

#143285: Validate labels and annotations in pods/binding

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind bug


```r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143312)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143311: fsquota: propagate projid update errors

#### What type of PR is this?

/kind bug
/sig storage

#### What this PR does / why we need it:

When preparing or renaming the projid file fails, `writeProjectFiles` currently proceeds to replace the projects file and returns nil. The inner short declaration shadows the error checked before replaci...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143311)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143310: preserve empty mount sources when parsing mountinfo

#### What type of PR is this?

/kind bug

/sig node

#### What this PR does / why we need it:
Fixed kubelet startup failures caused by mounts with an empty source in /proc/self/mountinfo.

#### Which issue(s) this PR is related to:
Fixes #66134

#### Special notes for your reviewer:

#### Does this ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143310)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143309: [WIP] DRA: Promote ConsumableCapacity, DRAFractionalCapacityRange to GA

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143309)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143304: Enforce that RV in watch cache interval should not be decreasing and use that to simplify watch RV computation

/kind cleanup

First more complicated watch change. Currently RV semantics and progress is controlled while the events are processed by process function, however if we want to do background resynchronization we need to control the RV from the watch input side. 

This PR makes the first step in that ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143304)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143301: apiserver: move NewDefaultAuthenticationInfoResolverWrapper to pkg/server/webhookauth

#### What type of PR is this?

/kind cleanup
/sig api-machinery
/sig auth

#### What this PR does / why we need it:

`k8s.io/apiserver/pkg/util/webhook` imports `k8s.io/apiserver/pkg/server/egressselector` and `k8s.io/component-base/tracing`, and so links gRPC, konnectivity and the OpenTelemetry SDK...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143301)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3168: Custom-resource Gauge logs "got nil while resolving path" when the path does not resolve

**What happened**:

A custom-resource `Gauge` whose `path` does not resolve on an object logs an error on every metric regeneration:

```
"kube_customresource_uptime" err="[status,uptime]: got nil while resolving path"
```

This is common for status fields that are not populated yet. For example, a ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3168)

**Metadata:**
- Created: 2026-10-22
- Comments: 1
- State: open

### kubernetes/minikube#23924: functional test: Retry stalled apt downloads

GitHub-hosted Ubuntu runners install packages from `azure.archive.ubuntu.com`. That mirror is usually fast, and sometimes very slow on the same download. apt waits 120 seconds for a silent connection and does not retry, so a 1 minute install step is killed while apt is still waiting. A containerd in...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23924)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/org#6737: Add members 2026-10-23

This PR:
- Fixes #6717
- Fixes #6722

🔗 [Link](https://github.com/kubernetes/org/pull/6737)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6735: Update milestone-maintainers removing WG leads

After recent audit we found WG leads as milestone maintainers, which should not happen. This PR attempts to clean this up. 

cc @helayoty @mm4tt @amy @kannon92 

🔗 [Link](https://github.com/kubernetes/org/pull/6735)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58250: Correct certificate renewal guidance for kubeadm upgrades

## Summary

Correct the certificate-related bullets for `kubeadm upgrade apply` and `kubeadm upgrade node` in the English upgrade documentation.

- Remove the obsolete 180-day expiry threshold.
- Replace the misleading certificate-backup wording.
- Explain default-enabled renewal of kubeadm-managed ...

🔗 [Link](https://github.com/kubernetes/website/pull/58250)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3276: [occm] Get server using nodeInfo.systemUUID

Some deployments might override the node name in the cluster which doesn't necessarily matches the OpenStack instance's name e.g. using Kubelet hostname override flag or something similar. Currently, OCCM only fetches instances using their name.

Kubelet fetches additional information from the node ...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3276)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10112: Image promotion for build-image v0.11.2 / v0.10.2 / v0.9.9

Image promotion for build-image v0.11.2 / v0.10.2 / v0.9.9
This is an automated PR generated from `kpromo`
```
kpromo pr --fork palnabarun --interactive --project build-image --staging-repo us-central1-docker.pkg.dev/k8s-staging-images/build-image --tag v0.11.2 --tag v0.10.2 --tag v0.9.9
```

/hold
...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10112)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38135: Add e2e presubmit for model-serving-signals

**What type of PR is this?**

/kind feature

**What this PR does / why we need it**:

Adds a presubmit that runs the simulation-based e2e test (`make test-e2e`) for kubernetes-sigs/model-serving-signals. The existing `pull-model-serving-signals-test` only runs `make test` (build, lint, unit), so the...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38135)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4581: Dependency update - Golang 1.27.3/1.26.10

### Tracking info

Link to any previous tracking issue: https://github.com/kubernetes/release/issues/4561

Golang mailing list announcement: https://groups.google.com/g/golang-announce/c/66pojueaQek/m/tmWX2Pq9AgAJ

SIG Release Slack thread: https://kubernetes.slack.com/archives/CJH2GBF7Y/p1792643984...

🔗 [Link](https://github.com/kubernetes/release/issues/4581)

**Metadata:**
- Created: 2026-10-22
- Comments: 1
- State: open

### kubernetes/release#4585: Bump google.golang.org/api from 0.304.0 to 0.305.0

Bumps [google.golang.org/api](https://github.com/googleapis/google-api-go-client) from 0.304.0 to 0.305.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/googleapis/google-api-go-client/releases">google.golang.org/api's releases</a>.</em></p>
<blockquote>
...

🔗 [Link](https://github.com/kubernetes/release/pull/4585)

**Metadata:**
- Created: 2026-10-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10492: addon-resizer: run govulncheck weekly and on dependency changes

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Adds a workflow that runs govulncheck on addon-resizer every Monday, on demand, and on pull requests that change addon-resizer/go.mod or go.sum. It uses the latest Go 1.26 patch release, since that is what the gola...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10492)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10491: addon-resizer: run golangci-lint in CI

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Adds a golangci-lint job to the addon-resizer workflow, pinned to v2.13.2 the same way the VPA lint job is (a .golangci-lint-version file plus golangci-lint-action). It also fixes what the default linters report on...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10491)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10490: Describe the release process

#### What type of PR is this?

/kind documentation

#### What this PR does / why we need it:

Update the `RELEASE.md` file to describe the release process.

#### Which issue(s) this PR addresses:

https://github.com/kubernetes/autoscaler/issues/9675

#### Does this PR introduce a user-facing change?...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10490)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10489: vpa chart: replace kube-webhook-certgen with Helm-generated certificates

  Supersedes #10206
  Related: #8940
  
Replaces the `kube-webhook-certgen` job (from the archived ingress-nginx project) with Helm-generated certificates, so the chart no longer depends on an unmaintained image. This unblocks promoting the chart to v1.

- Removed the certgen Job, its RBAC and all `...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10489)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10486: Remove imported e2e tests

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Just tidying up our e2e tests a little

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is ab...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10486)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### prometheus/memcached_exporter: 0.18.0 / 2026-10-22

* [FEATURE] Export get_expired, get_flushed, extstore get and recache, unfetched, evicted_active, and slab rebalancer stats #347


🔗 [Link](https://github.com/prometheus/memcached_exporter/releases/tag/v0.18.0)

**Metadata:**
- Version: v0.18.0
- Published: 2026-10-22
- Prerelease: No

### containerd/nri: v0.12.4

## What's Changed
* replace x/mod semver with local implementation by @tariq1890 in https://github.com/containerd/nri/pull/320
* Failure policy by @aojea in https://github.com/containerd/nri/pull/329


**Full Changelog**: https://github.com/containerd/nri/compare/v0.12.3...v0.12.4

🔗 [Link](https://github.com/containerd/nri/releases/tag/v0.12.4)

**Metadata:**
- Version: v0.12.4
- Published: 2026-10-22
- Prerelease: No


---

*This content was automatically collected on 2026-10-23 03:19:53*
