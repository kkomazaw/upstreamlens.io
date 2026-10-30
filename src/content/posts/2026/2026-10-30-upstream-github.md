---
title: "Upstream Github - 2026-10-30"
description: "CNCF upstream activity from github"
pubDate: 2026-10-30
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "pr", "cncf-cla: yes", "size/XS", "approved", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "lgtm", "release-note-none", "sig/release", "needs-kind", "ok-to-test", "area/release-eng", "area/dependency", "needs-priority", "release", "issue", "sig/api-machinery", "kind/flake", "sig/cli", "needs-triage", "sig/scheduling", "area/test", "kind/cleanup", "sig/testing", "size/S", "sig/apps", "needs-ok-to-test", "size/M", "do-not-merge/needs-sig", "sig/storage", "sig/node", "size/XL", "kind/api-change", "sig/auth", "area/code-generation", "wg/device-management", "area/kubelet", "area/apiserver", "area/kubectl", "release-note", "size/XXL", "do-not-merge/work-in-progress", "sig/etcd", "kind/bug", "size/L", "kind/feature", "kind/regression", "sig/instrumentation", "area/stable-metrics", "sig/network", "sig/scalability", "do-not-merge/cherry-pick-not-approved", "area/client-libraries", "priority/important-longterm", "triage/accepted", "priority/backlog", "sig/cluster-lifecycle", "area/kubeadm", "language/en", "website", "kube-state-metrics", "area/jobs", "area/config", "test-infra", "area/github-management", "org", "do-not-merge/hold", "prometheus", "alertmanager", "cncf", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143579: KEP 5823: Pod-level restore from checkpoints

  #### What type of PR is this?

  /kind feature
  /kind api-change

  #### What this PR does / why we need it:

  This PR adds Pod-level restore from a PodCheckpoint (KEP-5823). It builds on #140186, which adds the PodCheckpoint API and kubelet capture. The two PRs were split to make review easier....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143579)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143575: Kep-5996: Enable feature gate DefaultPodSysctls by default from 1.38

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143575)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38203: kOps: Bump images for AWS, Azure and GCE

Regenerate all pinned node images with fresh AWS and GCE queries and bump the hardcoded Azure images in helpers.py.

Switch the Amazon Linux 2027 preview filter from kernel 7.1 to kernel 7.2. Amazon moved the preview to kernel 7.2 at the end of September, so the 7.1 filter kept pinning the 2026-09-1...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38203)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6766: Manage org roles with peribolos

Peribolos can now assign GitHub organization roles (predefined ones like `security_manager` and `all_repo_*`, or custom roles) to teams and users, via a `roles:` block in the org config. This PR adds the plumbing so we can use it. It declares no roles, so it changes nothing in GitHub.

- `admin/upda...

🔗 [Link](https://github.com/kubernetes/org/pull/6766)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6765: etcd-io: set up github team for org level security managers

x-ref: https://github.com/kubernetes/org/issues/6713

/assign @cblecker
for review

Took inspiration from the examples in the PR https://github.com/kubernetes-sigs/prow/pull/555#issue-3659303968

🔗 [Link](https://github.com/kubernetes/org/pull/6765)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.34.2 / 2026-10-29

* [SECURITY] api: Alertmanager no longer sends CORS headers by default. This means `api/v2` now disallows cross-origin requests. This is a breaking change. The new `--web.cors.origin` flag can be used to restore the previous behaviour. #5664
* [SECURITY] Build with Go 1.26.10, which distrusts the eight compromised eMudhra intermediate CA certificates in `crypto/x509`. CVE-2026-111943


🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.34.2)

**Metadata:**
- Version: v0.34.2
- Published: 2026-10-29
- Prerelease: No

## Updates

### kubernetes/k8s.io#10146: cluster-autoscaler: promote 1.37.0 images

**What this PR does / why we need it**:

This PR promotes 1.37.0 images of Cluster Autoscaler for release

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [ ] I have verified the digest with [gcrane](https://github.com/google/...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10146)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4593: Bump github.com/go-jose/go-jose/v4 from 4.1.5 to 4.1.6

Bumps [github.com/go-jose/go-jose/v4](https://github.com/go-jose/go-jose) from 4.1.5 to 4.1.6.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/go-jose/go-jose/releases">github.com/go-jose/go-jose/v4's releases</a>.</em></p>
<blockquote>
<h2>v4.1.6</h2>
<h2>...

🔗 [Link](https://github.com/kubernetes/release/pull/4593)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143577: [Flaking Test] test-cmd run_crd tests

### Which jobs are flaking?

[ci-kubernetes-cmd-master](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-cmd-master)

### Which tests are flaking?

1. `test-cmd: run_assert_singular_name_tests`
2. `test-cmd: run_ambiguous_shortname_tests`
3.  `test-cmd: run_kubectl_apply_test...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143577)

**Metadata:**
- Created: 2026-10-29
- Comments: 2
- State: open

### kubernetes/kubernetes#143568: Investigate and cleanup use of Permit extension point in PodGroup scheduling

/sig scheduling

#### What happened:

Following #141182, 'Permit' is not supported for PodGroup scheduling cycle anymore. Yet when PodGroup scheduling is successful, `prepareForBindingCycle` invokes per-pod `Permit` plugins on PodGroup pods.
Even if a per-pod permit plugin rejects a PodGroup pod, th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143568)

**Metadata:**
- Created: 2026-10-29
- Comments: 1
- State: open

### kubernetes/kubernetes#143585: test-cmd run_crd tests: fix CRD propagation races in discovery and crd tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143585)

**Metadata:**
- Created: 2026-10-30
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143582: Wait for StatefulSet rollout to complete in Recreate e2e tests

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143582)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143581: kube-api-linter: forbid +k8s:customValidation in API types

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143581)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143580: Promote v1.37 declarative validation rules from alpha to beta

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143580)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143578: apiserver: fix watch channel sizing after watcher scope partitioning

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
https://github.com/kubernetes/kubernetes/pull/115918 indexed all watchers by namespace and name and removed the custom name index from nodes, secrets, and configmaps, but watch channel sizing still checked for a custom...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143578)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143576: e2e_node: test downward API volume updates are event-driven

The downward API conformance tests verify that annotation and label changes eventually reach the volume, with a multi-minute timeout so they hold on any conformant cluster ([xref](https://github.com/kubernetes/kubernetes/blob/25f302864de2ec694c4b92cc1fe2c034945da070/test/e2e/common/storage/downwarda...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143576)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143572: statefulset: restore OrderedReady-style behavior under Parallel policy

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

In issue #143532 I described a case where a statefulset can get stuck in a create-delete loop because of OrderedReady-style compatibility behavior from one function while another function behaves lik...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143572)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143571: metadatainformer and dynamic informer factory: add missing StartWithContext and WaitForCacheSyncWithContext

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

These methods already exist in informers.SharedInformerFactory. Because the factories here key informers by group/version/resource, WaitForCacheSyncWithContext returns the new cache.GVRSyncResult instead of cache...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143571)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143570: Promote kube-aggregator x509 metrics to BETA

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Promotes the two kube-aggregator x509 counters from ALPHA to BETA:

- `apiserver_kube_aggregator_x509_insecure_sha1_total`
- `apiserver_kube_aggregator_x509_missing_san_total`

Their webhook counterparts (`apiser...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143570)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143569: test/e2e_node: fix CPU Manager per-NUMA metric assertions

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Both CPU Manager per-NUMA metric checks overwrite the matcher on each iteration, leaving only the last NUMA node in the expectation. Build one matcher containing every expected sample.

For the allocation check, wait...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143569)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143567: Use an indexer instead of linear pod scan

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143567)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143563: Automated cherry pick of #140575: apiserver: deflake TestTimeTravelHealthcheck

Cherry pick of #140575 on release-1.35.

#140575: apiserver: deflake TestTimeTravelHealthcheck

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind flake


```re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143563)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143562: Automated cherry pick of #140575: apiserver: deflake TestTimeTravelHealthcheck

Cherry pick of #140575 on release-1.36.

#140575: apiserver: deflake TestTimeTravelHealthcheck

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind flake


```re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143562)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143561: Automated cherry pick of #140575: apiserver: deflake TestTimeTravelHealthcheck

Cherry pick of #140575 on release-1.37.

#140575: apiserver: deflake TestTimeTravelHealthcheck

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind flake


```re...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143561)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143560: DRA: promote allocator implementations

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This is in preparation for promoting several features to GA, which previously would have caused the "experimental" allocator to be used by default.

Now "stable" is used for really conservative cluster co...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143560)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143559: client-go: merged events now keep the info about who reported

#### What type of PR is this?

/kind bug
/sig instrumentation
/area client-libraries

#### What this PR does / why we need it:

`EventAggregatorByReasonFunc` puts `ReportingController` and `ReportingInstance` in the aggregation key, so every event folded into an aggregate has the same values for bot...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143559)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143558: cli-runtime: some kubectl error messages broke onto two lines

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

When an `Info` has no REST mapping (for example with `--local`) and the kind is in a named API group, `Info.ObjectName()` returns `kind.group/name` with a trailing newline. The other two branch...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143558)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143557: kubeadm: the missing CA hint shows again

#### What type of PR is this?

/kind bug
/kind regression
/sig cluster-lifecycle
/area kubeadm

#### What this PR does / why we need it:

When the CA files are missing, `getKubeConfigSpecs` is supposed to tell the user to run `kubeadm init phase certs ca` (added in #112941). Since #132080 switched k...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143557)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58390: kubeadm implementation details: add the missing kubeadm:apiserver-kubelet-client binding

### Description
Goal: Bring the page in line with the code.

Since v1.37 kubeadm grants the API server's kubelet client only the kubelet API, through a dedicated ClusterRoleBinding `kubeadm:apiserver-kubelet-client` (kubernetes/kubernetes#138957). Before v1.37 the grant came from a group with cluste...

🔗 [Link](https://github.com/kubernetes/website/pull/58390)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3185: Build with Go v. >=1.26.10

**What would you like to be added:**
Build the application with Go v1.26.10 or later to resolve https://nvd.nist.gov/vuln/detail/cve-2026-111943

**Why is this needed:**
To resolved https://nvd.nist.gov/vuln/detail/cve-2026-111943


🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3185)

**Metadata:**
- Created: 2026-10-29
- Comments: 1
- State: open

### kubernetes/test-infra#38191: Update CAPV owners & move milestone configuration

Related PRs:
* https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/pull/4281
* https://github.com/kubernetes/test-infra/pull/37968
* https://github.com/kubernetes/test-infra/pull/38044

PR for CAPI will follow once we finished updating the OWNER file in CAPI itself

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38191)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### cncf/prow-github-actions: prow-github-actions 3.4.0

# v3.4.0

The GitHub App (beta) is now **installable on Kubernetes with Helm**, from a signed container
image and chart published with every release. Nothing changes for the action: `@v3` callers get
it automatically, `@v3.2.0` pins move to `@v3.4.0`.

## Kubernetes

```sh
helm install prow oci://ghcr.io/cncf/prow-github-actions/charts/prow-github-app --version 3.4.0 \
  --set github.existingSecret=prow-github
```

One replica with nothing else, or several replicas sharing a Redis (`redis.url`);...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.4.0)

**Metadata:**
- Version: v3.4.0
- Published: 2026-10-30
- Prerelease: No

### cncf/prow-github-actions: prow-github-actions 3.4.0-rc.1

> ⚠️ **Pre-release** — built from `main` at `b7cac34e8c5450556ba8e66c213cfcfd2156d342`

## Usage

```yaml
- uses: cncf/prow-github-actions@v3.4.0-rc.1
```

## SBOM and provenance

An SPDX 2.3 SBOM of the runtime dependencies, generated with
[waybill](https://github.com/kusari-oss/waybill), is attached and signed
with cosign (keyless). SLSA build provenance covering `dist/index.js` and
the SBOM is attached as `prow-github-actions-3.4.0-rc.1.intoto.jsonl`.


## What's Changed
* test(pullReq): cove...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.4.0-rc.1)

**Metadata:**
- Version: v3.4.0-rc.1
- Published: 2026-10-30
- Prerelease: Yes

### cncf/prow-github-actions: prow-github-actions 3.2.0

# v3.2.0

Prow can now run as a **GitHub App** (beta) as well as a GitHub Action, and the action picks up
six weeks of features and fixes. Nothing changes for existing action installs: `@v3` callers get
it automatically, `@v3.0.1` pins move to `@v3.2.0`.

## GitHub App (beta)

The same `/commands`, OWNERS, labelling and merging code receives webhooks instead of running in a
workflow: one install per organization, no workflow file, fork pull requests are first class, and
the App's writes trigger ...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.2.0)

**Metadata:**
- Version: v3.2.0
- Published: 2026-10-29
- Prerelease: No


---

*This content was automatically collected on 2026-10-30 04:19:08*
