---
title: "Upstream Github - 2026-09-24"
description: "CNCF upstream activity from github"
pubDate: 2026-09-24
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "needs-sig", "needs-triage", "kind/feature", "sig/node", "sig/windows", "kind/cleanup", "sig/api-machinery", "sig/architecture", "area/dependency", "area/code-organization", "sig/scalability", "kind/failing-test", "kind/bug", "area/kubelet", "triage/accepted", "pr", "release-note", "size/M", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "kind/documentation", "area/kubectl", "area/provider/gcp", "size/XS", "release-note-none", "sig/cli", "sig/testing", "sig/cloud-provider", "sig/storage", "size/S", "size/L", "ok-to-test", "do-not-merge/needs-sig", "area/apiserver", "size/XL", "sig/auth", "sig/apps", "do-not-merge/hold", "wg/device-management", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "needs-rebase", "approved", "sig/etcd", "cncf-cla: no", "sig/scheduling", "language/ko", "area/localization", "website", "lgtm", "sig/docs", "language/zh", "area/jobs", "area/config", "test-infra", "kind/kep", "enhancements", "area/infra", "area/prow", "area/terraform", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "autoscaler", "area/vertical-pod-autoscaler", "area/cluster-autoscaler", "kind/api-change", "sig/contributor-experience", "area/community-management", "area/slack-management", "community", "committee/steering", "area/elections", "sig/cluster-lifecycle", "cloud-provider-openstack", "cloud-provider-gcp", "containerd", "overlaybd", "accelerated-container-image", "cncf", "prow-github-actions"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142365: Windows side tests for KEP-4960

Add Windows e2e in test/e2e/windows (or test/e2e_node Windows suite) that: creates a Pod with spec.os.name: windows,

Add Windows negative e2e proving admission rejects a Pod with spec.os.name: windows + stopSignal: SIGQUIT (or SIGUSR1). This validates the cross-validation the KEP promises


Documen...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142365)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/website#57704: [ko] Translate content/en/docs/reference/access-authn-authz/psp-to-pod-security-standards.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/access-authn-authz/psp-to-pod-security-standards.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/reference/access-authn-authz/psp-to-pod-security-standards/

**Why is thi...

🔗 [Link](https://github.com/kubernetes/website/issues/57704)

**Metadata:**
- Created: 2026-09-23
- Comments: 1
- State: open

### kubernetes/enhancements#6426: docs(kep-4412): graduate to GA in v1.38

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6426)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10342: Add ReadyReplicas to CapacityBufferStatus

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

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10342)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes: v1.37.1


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.1)

**Metadata:**
- Version: v1.37.1
- Published: 2026-09-23
- Prerelease: No

### kubernetes/kubernetes: v1.36.5


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.5)

**Metadata:**
- Version: v1.36.5
- Published: 2026-09-23
- Prerelease: No

### kubernetes/kubernetes: v1.35.9


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.9)

**Metadata:**
- Version: v1.35.9
- Published: 2026-09-23
- Prerelease: No

### kubernetes/kubernetes: v1.34.12


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.34.12)

**Metadata:**
- Version: v1.34.12
- Published: 2026-09-23
- Prerelease: No

### kubernetes/kubernetes#142370: Three stale documentation references: two dead kubernetes.io links and one broken relative path

### What happened?

Three documentation references in the tree point at things that no longer exist.

**1. `cluster/addons/dns/kube-dns/README.md` line 6**

```
* [Administrators guide](http://kubernetes.io/docs/admin/dns/)
```

`http://kubernetes.io/docs/admin/dns/` redirects to `https://kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142370)

**Metadata:**
- Created: 2026-09-24
- Comments: 2
- State: open

### kubernetes/kubernetes#142367: Adopt the cel performance improvement with the upcoming cel 0.34 release

### What would you like to be added?

cel upcoming 0.34 release will have a huge performance surge. v0.33.0 will get a 3x speedup on setup and evaluation across the board as compared to v0.28.1 and 0.34 will be close to 8-10x faster than where the v0.33 release will be. But a lot of that may depend ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142367)

**Metadata:**
- Created: 2026-09-23
- Comments: 3
- State: open

### kubernetes/kubernetes#142366: Switch to upstream cel library

### What would you like to be added?

Switch to use upstream CEL library instead of maintaining our own extension library wherever possible.

### Why is this needed?

To better keep up with the cel improvement

/sig apimachinery
/assign

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142366)

**Metadata:**
- Created: 2026-09-23
- Comments: 3
- State: open

### kubernetes/kubernetes#142364: Stale repos - gopkg.in/inf.v0 (github.com/go-inf/inf)

Following the same pattern as #132312, for a different dependency.

`gopkg.in/inf.v0` is a **direct** dependency of `k8s.io/apimachinery`, where `inf.Dec` backs the arbitrary-precision path of `resource.Quantity`:

```go
type Quantity struct {
	// i is the quantity in int64 scaled form, if d.Dec == ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142364)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/kubernetes#142363: [FG:InPlacePodVerticalScalingExclusiveCPUs] Need to track actuated changes

IIUC, CPUs are assigned during the admission stage when allocating a pod resize. During upsize, this is not a problem, but when downsizing the unallocated CPUs are returned to the available pool before the runtime has actually updated the container. This could cause a race condition where those CPUs...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142363)

**Metadata:**
- Created: 2026-09-23
- Comments: 3
- State: open

### kubernetes/kubernetes#142362: [Flaky Test] [sig-scalability] ci-kubernetes-e2e-gce-scale-correctness kubetest2.Up

### Which jobs are failing?

* [sig-release-master-informing#gce-master-scale-correctness](https://testgrid.k8s.io/sig-release-master-informing#gce-master-scale-correctness&exclude-non-failed-tests=)

### Which tests are failing?

* [kubetest.Up](https://prow.k8s.io/view/gs/kubernetes-ci-logs/logs/c...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142362)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/kubernetes#142361: Resize failure & start container

https://github.com/kubernetes/kubernetes/pull/140387 changed resize to happen before containers are started.

If resize fails, it adds the error to the sync result, but then proceeds with starting containers. This could cause resource oversubscription or OOMs if the resize was supposed to free up re...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142361)

**Metadata:**
- Created: 2026-09-23
- Comments: 2
- State: open

### kubernetes/kubernetes#142357: Pod validation: AllowIndivisibleHugePagesValues ratchets every hugepages entry, not just the stored one

#### What happened?

`GetValidationOptionsFromPodSpecAndMeta` sets `PodValidationOptions.AllowIndivisibleHugePagesValues` from `usesIndivisibleHugePagesValues(oldPodSpec)`, a single bool for the whole pod: true if *any* container, the pod-level resources, or the overhead in the old spec held a hugep...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142357)

**Metadata:**
- Created: 2026-09-23
- Comments: 1
- State: open

### kubernetes/kubernetes#142372: kubelet/userns: explain out-of-range persisted mappings on startup

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
If the ID range available to the kubelet for user namespaces changes between
restarts (editing /etc/subuid, installing getsubids, or creating the `kubelet`
user), a pod's persisted mapping can fall outside the new rang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142372)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142371: docs: fix three stale documentation references

#### What type of PR is this?

/kind documentation
/kind cleanup

#### What this PR does / why we need it:

Three documentation references in the tree point at things that no longer exist. This points each one at its current location.

`cluster/addons/dns/kube-dns/README.md` links its "Administrator...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142371)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142369: csi: reject a NodeExpandVolume size past int64 before the CSI call

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`NodeExpandVolume` passes `opts.newSize.Value()` as `CapacityRange.RequiredBytes`. `Value()` saturates at `math.MaxInt64` when the quantity does not fit an int64 and drops the `ok` bool from `AsScaledInt64`, so a siz...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142369)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142360: limitranger: ratchet the request and the limit independently

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Follow-up to #142171, addressing https://github.com/kubernetes/kubernetes/pull/142171#pullrequestreview-5293434424.

`minConstraint` and `maxConstraint` each read both sides of a resource: min also rejects an unchang...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142360)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142359: Migrate apimachinery JSON encoding to json/v2


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142359)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142358: api/pod: ratchet an indivisible hugepages value by exact match

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Fixes #142357: `usesIndivisibleHugePagesValues` scans the whole old pod spec and sets a single `AllowIndivisibleHugePagesValues` flag if any container, the pod-level resources, or the overhead held one indivisible hu...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142358)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142356: nodeshutdown: move dbus connection lifecycle into watcher

#### What type of PR is this?

/kind cleanup
/sig node

#### What this PR does / why we need it:

Refactors the node shutdown manager so the dbus connection is created and owned by the watcher goroutine for its full lifetime. The connection is now closed through a single deferred `Close`, covering s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142356)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142355: DRA ResourceSlice: validate fractional consumable capacity by value

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

With `DRAFractionalCapacityRange` on, `validateRequestPolicyValidValues` decides whether two options are the same by comparing `AsDec().String()`. That string tracks the Dec scale, not the value, so `1` and `1.0` com...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142355)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142353: Informer cache: do not cut a batch after duplicate key

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142353)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142352: [WIP] Server Token Acquisition for Authentication to Admission Webhooks

[WIP]

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142352)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142351: garbagecollector: migrate stale owner reference api versions

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The Garbage Collector now migrates stale `ownerReferences` when it observes the referenced owner through a current API version.

#### Which issue(s) this PR is related to:

Fixes #96650 

#### Special...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142351)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142350: client-go/util/cert: let callers choose the self-signed key algorithm

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

`GenerateSelfSignedCertKeyWithOptions` hardcoded `rsa.GenerateKey(cryptorand.Reader, 2048)` for both the CA and the serving certificate, so the apiserver's `--cert-dir` certificates (`server/options/serving.go`) ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142350)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142348: Flatten indexer into WatchCacheStorage

Removes Indexer interface to allow coordination of store and snapshots.
/kind cleanup

```release-note
NONE
```


#### AI usage disclosure:

YES


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142348)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142347: storage/etcd3: simplify backend prefix slash handling

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The etcd3 store currently appends a trailing slash to the backend prefix, then removes the leading slash from resource keys when joining them.

Store the normalized backend prefix without a trailing slash instead...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142347)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142342: Fix data race in FlexVolume timeout handling

#### What type of PR is this?
/kind bug

#### What this PR does / why we need it:
Use atomic reads and writes for the FlexVolume timeout flag to prevent a data race between the timeout callback and the driver call.

#### Which issue(s) is this PR related to:
N/A

#### Special notes for your...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142342)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142341: Test presubmit

/kind failing-test

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142341)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142340: kubelet: stabilize allocated resource health ordering

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Canonicalizes `AllocatedResourcesStatus` by resource name and each resource health list by resource ID in both the device manager and DRA manager. This prevents unchanged resource health from producing different seri...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142340)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142339: DRA: expose the allocator's constraint mechanism to callers

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

The true device consumption of a claim is only determined inside the allocator's backtracking search. Every enforcement point that exists today — admission, `PreFilter`, `Filter`, `Reserve` — runs strictly before...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142339)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142338: kubectl: reject empty ingress default-backend and annotation keys

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Rejects empty fields in `kubectl create ingress --default-backend` and empty keys in `--annotation`.

Previously, `--default-backend=:8080` and `--default-backend=svc:` were accepted because validation only checked t...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142338)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142337: kubectl: reject empty resource name in quota and set resources

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`kubectl create quota --hard` and `kubectl set resources --limits/--requests`
accepted entries with an empty resource name, producing a resource list keyed
by `""`:

```
$ kubectl create quota demo --hard=...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142337)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57694: [ko] Update content/ko/docs/concepts/storage/storage-limits.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/concepts/storage/storage-limits.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/concepts/storage/storage-limits/
- English: https:...

🔗 [Link](https://github.com/kubernetes/website/issues/57694)

**Metadata:**
- Created: 2026-09-23
- Comments: 1
- State: open

### kubernetes/website#57693: Glossary tooltips link to missing localized pages instead of falling back to English

### Problem

Glossary tooltips can link to a nonexistent localized page even when the English page is available.

For example, the Korean DRA API Objects page uses:

{{< glossary_tooltip text="파드그룹" term_id="podgroup" >}}

Since the Korean PodGroup glossary entry is missing, the English entry is use...

🔗 [Link](https://github.com/kubernetes/website/issues/57693)

**Metadata:**
- Created: 2026-09-23
- Comments: 1
- State: open

### kubernetes/website#57690: [ko] Translate content/en/docs/tasks/job/pod-failure-policy.md

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/tasks/job/pod-failure-policy.md` into Korean as `content/ko/docs/tasks/job/pod-failure-policy.md`

**Website Link**

- English : https://kubernetes.io/docs/tasks/job/pod-failure-policy/
- Korean : https://...

🔗 [Link](https://github.com/kubernetes/website/issues/57690)

**Metadata:**
- Created: 2026-09-23
- Comments: 1
- State: open

### kubernetes/website#57687: [zh-cn]sync kubectl_describe/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_describe/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57687)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57686: [zh-cn]sync kubectl_explain/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_explain/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57686)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57684: [zh-cn]sync kubectl_cluster-info/_index

content/zh-cn/docs/reference/kubectl/generated/kubectl_cluster-info/_index.md

🔗 [Link](https://github.com/kubernetes/website/pull/57684)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37911: Split lws gang scheduling presubmits into Volcano and WAS jobs

Splits the lws gang scheduling e2e presubmit per scheduler, following the make targets added in [kubernetes-sigs/lws#1081](https://github.com/kubernetes-sigs/lws/pull/1081).

- Renames `pull-lws-test-e2e-main-gang-scheduling` to `pull-lws-test-e2e-main-gang-scheduling-volcano` and runs the dedicated...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37911)

**Metadata:**
- Created: 2026-09-24
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9972: switch to a bigger node pool

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9972)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.13.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.13.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.13.0
- Published: 2026-09-23
- Prerelease: No

### kubernetes/autoscaler: vertical-pod-autoscaler-1.8.0

## Changes by Kind

### API Change

- Add validation to the verticalpodautoscaler.spec.resourcePolicy.containerPolicies.controlledResources field.
  A warning will be returned on updates of any existing VPA that uses invalid values ([#9951](https://github.com/kubernetes/autoscaler/pull/9951), [@adrianmoisey](https://github.com/adrianmoisey))

### Feature

- Add reactive CPU startup boost unboosting ([#10087](https://github.com/kubernetes/autoscaler/pull/10087), [@omerap12](https://githu...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.8.0)

**Metadata:**
- Version: vertical-pod-autoscaler-1.8.0
- Published: 2026-09-23
- Prerelease: No

### kubernetes/autoscaler: vertical-pod-autoscaler.1.7.2

## Changes by Kind

### Other (Cleanup or Flake)

- Bump Go to 1.26.8 ([#10264](https://github.com/kubernetes/autoscaler/pull/10264), [@adrianmoisey](https://github.com/adrianmoisey))
- Bump VPA to 1.7.2 ([#10338](https://github.com/kubernetes/autoscaler/pull/10338), [@adrianmoisey](https://github.com/adrianmoisey))

### Bug or Regression

- VPA InPlace: treat transient kubelet ResizeError as deferred, not permanent infeasibility, so a later higher recommendation is not skipped until Up...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.7.2)

**Metadata:**
- Version: vertical-pod-autoscaler-1.7.2
- Published: 2026-09-23
- Prerelease: No

### kubernetes/autoscaler#10343: Perform post 1.8 release tasks

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR is merged.
Usage: `Fixes #<issue number>`, or `Fixes (paste link of issue)`.
_If PR is about `failing-tests or flakes`,...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10343)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9176: Add Moderated Triage Workflow and Policy for #announcements Channel

We're building a Slack-native workflow to move #announcements from open posting access to a moderated queue. Once it's live, direct posting will be restricted to Slack admins, and everyone else will submit through the workflow instead.

The pressure point is groups with rotating membership, such as ...

🔗 [Link](https://github.com/kubernetes/community/issues/9176)

**Metadata:**
- Created: 2026-09-23
- Comments: 0
- State: open

### kubernetes/community#9175: [Steering Election 2026] Update voters.yaml with new org members

Update voters.yaml for the 2026 Steering election with the following 36 new Kubernetes org members:
- @abalso0
- @alien1403
- @andclt
- @bavarianbidi
- @bittrance
- @bobsira
- @Braundo
- @ChieloChi
- @csmuell
- @Dasmat13
- @dkennetzoracle
- @esposem
- @eugeneng04
- @geojaz
- @isadomin...

🔗 [Link](https://github.com/kubernetes/community/pull/9175)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9173: Update SIG Cluster Lifecycle charter

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https:...

🔗 [Link](https://github.com/kubernetes/community/pull/9173)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3237: [cinder-csi-plugin] DeleteSnapshot treats 202 as complete, orphaning failed backend snapshot deletions.

<!--
Please add the affected binary name in the title unless multiple binaries are affected, e.g.
[cinder-csi-plugin] Cannot delete PV
For openstack-cloud-controller-manager, you can use [occm] for short.

All the currently maintained binaries are:
* openstack-cloud-controller-manager (occm)
* cinde...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/issues/3237)

**Metadata:**
- Created: 2026-09-23
- Comments: 0
- State: open

### kubernetes/cloud-provider-openstack#3238: cinder: wait for snapshot deletion to finish

DeleteSnapshot treated Cinder's 202 as the snapshot being gone. On Ceph that delete is async and fails when the snapshot still has a clone or the source volume is attached, but the snapshotter has already removed the VolumeSnapshot.

After the 202, poll until GET returns 404. `error` / `error_deleti...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3238)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1364: Fix network interface URL matching for custom VPCs and Shared VPC in dynamic pod IP controller

**What type of PR is this?**
/kind bug

**What this PR does / why we need it**:
In the Dynamic Pod IP Controller (#1253), network interface resolution and GCE alias IP range mutations fail under two common VPC configurations:

1. **Shared VPC (XPN)**:
   In Shared VPC environments, the cluste...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1364)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1363: metis: fix interface network not match

Fix dynamic pod controller error:
```
insertId: "orlcox6bf0rd62z4"
labels: {1}
logName: "projects/f3d29a75e53b74524p-tp/logs/cloud-controller-manager"
receiveTimestamp: "2026-09-23T20:44:11.190309828Z"
resource: {
labels: {
cluster_name: "dynamic-controller-test-cluster-2"
container_name: "...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1363)

**Metadata:**
- Created: 2026-09-23
- Comments: undefined
- State: open
- Draft: No

### containerd/overlaybd: Development Build

## Commits
- 42766bc: update citatioin of DeepSeek Elastic Compute (DSec) (Huiba Li) [#463](https://github.com/containerd/overlaybd/pull/463)

🔗 [Link](https://github.com/containerd/overlaybd/releases/tag/latest)

**Metadata:**
- Version: latest
- Published: 2026-09-23
- Prerelease: Yes

### containerd/accelerated-container-image: v1.4.5

## Bug Fixes
- omit empty uidmap/gidmap mount options when remapIDs is enabled [#398](https://github.com/containerd/accelerated-container-image/pull/398) ([Archana Choudhary](https://github.com/containerd/accelerated-container-image/commit/434b69c404bba5dbe99c8e3d735f5be7ae420b13))

## Builds
- **deps**: bump oras.land/oras-go/v2 from 2.5.0 to 2.6.2 [#377](https://github.com/containerd/accelerated-container-image/pull/377) ([dependabot[bot]](https://github.com/containerd/accelerated-container-im...

🔗 [Link](https://github.com/containerd/accelerated-container-image/releases/tag/v1.4.5)

**Metadata:**
- Version: v1.4.5
- Published: 2026-09-23
- Prerelease: No

### cncf/prow-github-actions: prow-github-actions 3.0.1

# v3.0.1

A patch for three things the scheduled path did to one pull request (cncf/automation#709): a
deadlock between `/approve` and the merge gate on pull requests opened before the OWNERS files
landed, a fork merge GitHub refuses that failed every run, and a double evaluation under
`jobs: sweep lgtm`. No new features, no configuration changes.

## Fixes

Symptom | Cause | Fix | What you see
--- | --- | --- | ---
`/approve` on an older pull request posts a bot review instead of the `approved`...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.0.1)

**Metadata:**
- Version: v3.0.1
- Published: 2026-09-23
- Prerelease: No

### cncf/prow-github-actions: prow-github-actions 3.0.0

# v3.0.0

Prow parity for the interactions a repository has with its contributors: the `/commands`, the
label families, `needs-*` rules, reviewers and approval from OWNERS files, `lgtm` bound to the
reviewed commit, event-driven merging and merge queues. One reusable workflow installs the whole
bot; an organization ships it as a workflow template and configures every repository from one
`prow.yaml` ([Prow for your organization](https://github.com/cncf/prow-github-actions/blob/main/docs/prow-for-...

🔗 [Link](https://github.com/cncf/prow-github-actions/releases/tag/v3.0.0)

**Metadata:**
- Version: v3.0.0
- Published: 2026-09-23
- Prerelease: No


---

*This content was automatically collected on 2026-09-24 03:05:20*
