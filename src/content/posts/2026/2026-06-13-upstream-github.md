---
title: "Upstream Github - 2026-06-13"
description: "CNCF upstream activity from github"
pubDate: 2026-06-13
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "release", "issue", "sig/node", "kind/feature", "needs-triage", "sig/api-machinery", "kind/flake", "kind/failing-test", "sig/network", "needs-sig", "kind/bug", "pr", "area/apiserver", "release-note", "size/XS", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "size/M", "sig/scheduling", "kind/api-change", "do-not-merge/release-note-label-needed", "size/L", "release-note-none", "do-not-merge/work-in-progress", "sig/etcd", "cncf-cla: no", "do-not-merge/needs-sig", "do-not-merge/needs-kind", "area/test", "kind/cleanup", "sig/testing", "ok-to-test", "sig/autoscaling", "area/kubelet", "wg/device-management", "lgtm", "approved", "do-not-merge/cherry-pick-not-approved", "do-not-merge/hold", "size/S", "size/XL", "area/code-generation", "area/kube-proxy", "area/kubectl", "area/cloudprovider", "sig/auth", "sig/cli", "sig/architecture", "sig/cloud-provider", "area/dependency", "kind/dependency", "sig/apps", "do-not-merge/invalid-commit-message", "priority/backlog", "sig/cluster-lifecycle", "area/kubeadm", "triage/accepted", "sig/storage", "sig/instrumentation", "minikube", "kops", "kind/kep", "area/enhancements", "enhancements", "kubeadm", "area/artifacts", "sig/k8s-infra", "area/registry.k8s.io", "k8s.io", "sig/contributor-experience", "area/infra", "area/prow", "area/terraform", "area/apps", "area/infra/gcp", "area/cluster-autoscaler", "area/core-autoscaler", "autoscaler", "area/vertical-pod-autoscaler", "area/provider/hetzner", "cloud-provider-gcp", "factory", "sig-security", "size/XXL", "community", "area/developer-guide", "area/community-management", "area/contributor-comms", "kube-state-metrics", "sig/release", "area/github-management", "org", "prometheus", "alertmanager", "containerd", "runwasi"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#139692: [WIP] Route watch cache list fallback through etcd RangeStream

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Route the watch cache's list fallback through etcd RangeStream (KEP-5966).

#### Which issue(s) this PR is related to:

KEP-5966: etcd RangeStream

#### Does this PR introduce a user-facing change?

```release-no...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139692)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139686: Add configurable tolerance integration test

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This allows to move from e2e tests to potentially more stable integration tests as requested by [KEP-4951] [testing requirements related to the promotion to Stable](https://github.com/kubernetes/enhancement...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139686)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139668: node lifecycle controller: mark pods not ready on false->unknown transition

When a node's Ready condition transitions from `false` to `unknown` (for example, when containerd crashes and then the kubelet also loses connectivity), the node controller was not calling `MarkPodsNotReady`. Pods kept their Ready condition set to `true`, so traffic could still be sent to the broken...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139668)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6199: OWNERS should not overshare

/assign @haircommander 

- One-line PR description:

Previos change had early exit when no tags are found in kep.yaml. We should treat kep.yaml to be a definitive source of truth


/sig node

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6199)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6195: wg-batch: add amy to owners, remove kannon92

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6195)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/enhancements#6194: KEP-4671: Change preemption behavior for basic policy in subsequent cycles

<!-- 
	Please use the following format when naming your PR
	< Issue Number >:< Issue Description >
	e.g. KEP-000: adding beta graduation criteria
	
	Avoid using phrases like `fixes #NNNN` in the description
	unless the pull request is to change the KEP status to 
	implemented or KEP has been ...

🔗 [Link](https://github.com/kubernetes/enhancements/pull/6194)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9812: Register ScaleUpFailures registry as a part of NodeGroupChangeObserverList

#### What type of PR is this?

/kind cleanup
<!--
Add one of the following kinds:
/kind bug
/kind documentation
/kind feature

Optionally add one or more of the following kinds if applicable:
/kind api-change
/kind deprecation
/kind failing-test
/kind flake
/kind regression
-->

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9812)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-security#199: srctl: fix vanity import path in go.mod

So that go install would work:

	go install k8s.io/sig-security/sig-security-tooling/srctl@latest

By checking with:

	curl -sL "https://k8s.io/sig-security/sig-security-tooling/srctl?go-get=1"

The output should be similar to:

       <html><head>
                  <meta name="go-import"...

🔗 [Link](https://github.com/kubernetes/sig-security/pull/199)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-security#198: srctl: fix affected versions templating in email

Fixes https://github.com/kubernetes/sig-security/issues/186.

Also add a regression test for this.

🔗 [Link](https://github.com/kubernetes/sig-security/pull/198)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-security#197: srctl: add the CVSS score and severity in issue/mail template

Fixes https://github.com/kubernetes/sig-security/issues/187

It was missing mostly from the issue template. Also uniformize how the score is presented. Let's do the actual score in bold, then the severity in parenthesis (it will be in uppercase) and then the link with CVSS vector.


🔗 [Link](https://github.com/kubernetes/sig-security/pull/197)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-security#196: srctl: Add golangci-lint tool

This is essentially a rewrite of @Daniel-Giszpenc https://github.com/kubernetes/sig-security/pull/192.

Reminder: this is for https://github.com/kubernetes/test-infra/pull/36801.

I put you as co-author in each commits because you did most of the work understanding how we should do it. I just cl...

🔗 [Link](https://github.com/kubernetes/sig-security/pull/196)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics: v2.19.1

## v2.19.1 / 2026-06-10

### Notes

* This release builds with Go `v1.26.4`
* This release builds with `k8s.io/client-go`: `v0.35.4`

### Changelog

* [SECURITY] Upgrade Go toolchain to address CVE-2026-42504 (GO-2026-5038) by @slessard in [#2982](https://github.com/kubernetes/kube-state-metrics/pull/2982)
* [SECURITY] Fix several high-scoring CVEs (golang.org/x/net, oauth2, sys, term, text) by @slessard in [#2981](https://github.com/kubernetes/kube-state-metrics/pull/2981)
* [BUGFIX]...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/releases/tag/v2.19.1)

**Metadata:**
- Version: v2.19.1
- Published: 2026-06-12
- Prerelease: Yes

## Updates

### kubernetes/kubernetes: v1.36.2


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.2)

**Metadata:**
- Version: v1.36.2
- Published: 2026-06-12
- Prerelease: No

### kubernetes/kubernetes: v1.35.6


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.6)

**Metadata:**
- Version: v1.35.6
- Published: 2026-06-12
- Prerelease: No

### kubernetes/kubernetes: v1.34.9


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.34.9)

**Metadata:**
- Version: v1.34.9
- Published: 2026-06-12
- Prerelease: No

### kubernetes/kubernetes: v1.33.13


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.33.13)

**Metadata:**
- Version: v1.33.13
- Published: 2026-06-12
- Prerelease: No

### kubernetes/kubernetes#139690: [InPlacePodVerticalScaling] Allow `BestEffort` pods to specify resources, `Burstable` Pods to set requests==limits

Today, `InPlacePodVerticalScaling` does not allow changes to QoS class. 

This means that a BestEffort pod cannot be updated to add requests or limits, a Burstable pod cannot be updated to set requests == limits.

This limitation is not ideal and leads to strange workarounds, for example having to s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139690)

**Metadata:**
- Created: 2026-06-12
- Comments: 2
- State: open

### kubernetes/kubernetes#139687: Garbage collector integration test flakes with "cache is not expected to be synced due to bad conversion webhook"

### Failure cluster [3733e4f3fb02a8044f35](https://go.k8s.io/triage#3733e4f3fb02a8044f35)

##### Error text:
```
Failed
=== RUN   TestCascadingDeleteOnCRDConversionFailure
    testserver.go:646: Resolved testserver package path to: "/home/prow/go/src/k8s.io/kubernetes/cmd/kube-apiserver/app/testing"...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139687)

**Metadata:**
- Created: 2026-06-12
- Comments: 1
- State: open

### kubernetes/kubernetes#139683: Reduce verbosity of conntrack test case

The following test case emits 6000 lines of the repeating pattern in the normal case:
```
(date) Try: (number)

```

https://github.com/kubernetes/kubernetes/blob/756939600b9a7180fc2df6550a4585b638875e67/test/e2e/network/conntrack.go#L409

This causes significant load on the logging outputter with 5...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139683)

**Metadata:**
- Created: 2026-06-12
- Comments: 5
- State: open

### kubernetes/kubernetes#139672: k8s.io/kubernetes/pkg/api.testing: TestVersionedValidationByFuzzing/autoscaling/v1,_Kind=Scale

### Which jobs are failing?

https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-unit-windows-master
https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-unit-ppc64le

### Which tests are failing?

`pkg/api/testing: TestVersionedValidationByFuzzing/autoscalin...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139672)

**Metadata:**
- Created: 2026-06-12
- Comments: 3
- State: open

### kubernetes/kubernetes#139670: kubelet creates duplicate running containers

### What happened?

In a stress test cluster, we discovered that a Pod's container was created twice and was simultaneously in the Running state.
`[root@master1 home]# kubectl get -n network-system -o wide pod`
`
NAME                                 READY  STATUS   RESTARTS  AGE    IP            NOD...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/139670)

**Metadata:**
- Created: 2026-06-12
- Comments: 3
- State: open

### kubernetes/kubernetes#139697: apiserver/storageversion: fix infinite retry loop in updateStorageVersionFor

**What this PR does / why we need it:**

Fixes an infinite loop in `updateStorageVersionFor` when `singleUpdate` returns `AlreadyExists` or `Conflict` errors. The retry counter is not incremented before `continue`, so the loop never terminates. This can hang API server startup when a StorageVersion ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139697)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139696: fix(apimachinery): report file-relative line numbers for multi-document YAML syntax errors

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a multi-document YAML file contains a syntax error in any document after the first, the reported `yaml: line N:` number is relative to the start of that document, not the file, so users are pointed at the wrong ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139696)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139695: feat: volumeBinding's Score plugin in enabled by default in v1beta3 and

Resolves #113705.

Followed up with @alculquicondor, VolumeBinding Score plugin is enabled only when the feature gate `VolumeCapacityPriority ` is enabled:

#### What type of PR is this?

#### What this PR does / why we need it:

#### Which issue(s) this PR is related to:

#### Special notes for you...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139695)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139691: Add initial content to ravi file

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139691)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139689: Reduce verbosity of conntrack test cases

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Summarize client pod execution timestamps in conntrack tests.

Don't emit iteration counters or empty logs in client logs. When
printing the logs, ignore newlines and collapse duplicate timestamps
lines...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139689)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139684: Fix Windows CPU affinity to always use CPU Manager allocation

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139684)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139682: Skip DRADeviceTaints upgrade/downgrade test

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139682)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139681: Automated cherry pick of #139651: Align DeviceTaintRule informer API version with handlers

Cherry pick of #139651 on release-1.36.

#139651: Align DeviceTaintRule informer API version with handlers

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind b...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139681)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139680: Migrate metav1 condition declarative validation

 /kind cleanup
                                                                                                                                                                                                                                                                   
  Migrates all `metav1....

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139680)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139679: WIP: Analysis of ConcurrentWatchObjectDecode enablement

This flips `ConcurrentWatchObjectDecode` on by default (Beta, 1.37) to exercise CI with the gate enabled. PR is not intended to merge, but collect data around benchmarks.

### Unit benchmarks

Watch cache initialization for pods ([`BenchmarkCacherInit`](https://github.com/kubernetes/kubernetes/b...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139679)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139678: cleanup: remove retired heapster support from grab-profiles.sh

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Removes the stale `--heapster` (`-h`) flag and all related code from
`hack/grab-profiles.sh`. Heapster was retired in 2019 and moved to
`kubernetes-retired/heapster`. The rest of the codebase already removed...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139678)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139674: Feature: Add PodGroupPostFilter extension point

#### What type of PR is this?

/kind feature
/sig scheduling

#### What this PR does / why we need it:

This PR introduces a new scheduler framework extension point: `PodGroupPostFilter`. 
This extension point runs after `PostFilter` but operates on PodGroups (used in GangScheduling) rather than ind...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139674)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139673: Migrate metav1.Condition ObservedGeneration to declarative validation

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Migrates `metav1.Condition.ObservedGeneration` validation to Declarative Validation.

This PR:

* Adds declarative validation tags for `ObservedGeneration`:

  * `+k8s:optional`
  * `+k8s:minimum=0`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139673)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139669: Bump otel contrib to v0.69.0

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

The main otel dependencies were bumped to v1.44.0 in #139380; this aligns otel contrib to match. See https://github.com/open-telemetry/opentelemetry-go-contrib/releases/tag/v1.44.0 for details.

#### W...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139669)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139667: kubeadm: use KubernetesAPICallTimeout for mandatory kubeadm-config fetch during join

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

During `kubeadm join`, the mandatory `kubeadm-config` ConfigMap fetch
uses `GetConfigMapWithShortRetry`, which has a 350ms polling budget.
The GET call uses `context.Background()` instead of the polling context,
so w...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139667)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#139666: Automated cherry pick of #137451: Update google.golang.org/protobuf to v1.36.12-0.20260120151049-f2248ac996af to prevent file size explosion in go 1.26

Cherry pick of #137451 on release-1.35.

#137451: Update google.golang.org/protobuf to v1.36.12-0.20260120151049-f2248ac996af to prevent file size explosion in go 1.26

github.com/tdakkota/asciicheck no longer exists and is cloned at https://github.com/golangci/asciicheck 

ref: https://github...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139666)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#139665: Automated cherry pick of #137451: Update google.golang.org/protobuf to v1.36.12-0.20260120151049-f2248ac996af to prevent file size explosion in go 1.26

Cherry pick of #137451 on release-1.34.

#137451: Update google.golang.org/protobuf to v1.36.12-0.20260120151049-f2248ac996af to prevent file size explosion in go 1.26

github.com/tdakkota/asciicheck no longer exists and is cloned at https://github.com/golangci/asciicheck 

ref: https://github...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/139665)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23125: ssh: prefer AES-GCM ciphers for external SSH client

Prepend aes128-gcm and aes256-gcm to the cipher list for the external SSH client (--native-ssh=false). On CPUs with hardware AES acceleration (all Apple Silicon, Intel Skylake+, AMD Zen+), this more than doubles SSH throughput vs the OpenSSH default:

    % hyperfine --warmup 1 \
        "dd if=/...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23125)

**Metadata:**
- Created: 2026-06-13
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops: v1.36.0-beta.1

## What's Changed
* scaletest: decouple client HTTP traffic for etcd events by @Jefftree in https://github.com/kubernetes/kops/pull/18415
* Release notes for 1.36 (alpha) by @hakman in https://github.com/kubernetes/kops/pull/18414
* chore: Add hashes for additional May releases by @hakman in https://github.com/kubernetes/kops/pull/18418
* Add logs at v2 level to ensure we have slow pods data in logs by @hakuna-matatah in https://github.com/kubernetes/kops/pull/18420
* chore: upgrade contain...

🔗 [Link](https://github.com/kubernetes/kops/releases/tag/v1.36.0-beta.1)

**Metadata:**
- Version: v1.36.0-beta.1
- Published: 2026-06-12
- Prerelease: Yes

### kubernetes/kubeadm#3315: kubeadm join preflight can fail fetching `kubeadm-config` ConfigMap as it won't retry if the first GET exceeds the 350ms polling budget

### Summary

During `kubeadm join`, the mandatory `kubeadm-config` ConfigMap fetch uses `GetConfigMapWithShortRetry`. This function is designed for quick checks with fallback defaults, using a 350ms polling budget. However, when the API server is temporarily slow to respond (e.g. during initial star...

🔗 [Link](https://github.com/kubernetes/kubeadm/issues/3315)

**Metadata:**
- Created: 2026-06-12
- Comments: 3
- State: open

### kubernetes/k8s.io#9602: promote staging image for v0.2.0 for mcp-lifecycle-operator

**What this PR does / why we need it**:
promote staging image for v0.2.0 for mcp-lifecycle-operator 

**Special notes for your reviewer**:

**If you are promoting an image, please make sure you have done the following:**

- [x] I have verified the digest with [gcrane](https://github.com/googl...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9602)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#9601: manage elekto with argocd, migrate the secrets to ESO and squash some bugs

Part of https://github.com/kubernetes/k8s.io/issues/3123

/cc @reylejano @npolshakova @sreeram-venkitesh 

I squashed a few bugs with Elekto and brought the deployment up to modern standards

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/9601)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9813: ClusterStateRegistry removes scale-up request prematurely during an ongoing scale-down

tl;dr: I found a race condition in ClusterStateRegistry while debugging failing Cluster Autoscaler GCE e2e tests. This is an old bug, but it didn't have much impact made before a recent change to CSR (#9360). After #9360, the bug results in CA provisioning (potentially a lot of) extra, unnecessary N...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9813)

**Metadata:**
- Created: 2026-06-12
- Comments: 1
- State: open

### kubernetes/autoscaler#9809: [hetzner] Allow attaching additional firewalls per nodepool

**Which component are you using?**:

/area cluster-autoscaler

cluster-autoscaler — Hetzner Cloud provider (`cloudprovider/hetzner`).

**Is your feature request designed to solve a problem? If so describe the problem this feature should solve.**:

The Hetzner cloud provider attaches a single, cluste...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/9809)

**Metadata:**
- Created: 2026-06-12
- Comments: 1
- State: open

### kubernetes/autoscaler#9817: chart(vpa): bump chart version to 0.10.0 to publish appVersion 1.7.0

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

#9707 ("Update VPA defaults to 1.7.0") bumped the chart `appVersion` from 1.6.0 to 1.7.0 but left the chart `version` at 0.9.0. The chart-release workflow runs `helm/chart-releaser-action` with `skip_existing: true`,...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9817)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9815: Bump the non-kubernetes group across 2 directories with 3 updates

Bumps the non-kubernetes group with 1 update in the /vertical-pod-autoscaler directory: [golang.org/x/tools](https://github.com/golang/tools).
Bumps the non-kubernetes group with 3 updates in the /vertical-pod-autoscaler/test directory: [golang.org/x/tools](https://github.com/golang/tools), [github....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9815)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9814: Bump k8s.io/kubernetes from 1.36.1 to 1.36.2 in /vertical-pod-autoscaler/test in the kubernetes group across 1 directory

Bumps the kubernetes group with 1 update in the /vertical-pod-autoscaler/test directory: [k8s.io/kubernetes](https://github.com/kubernetes/kubernetes).

Updates `k8s.io/kubernetes` from 1.36.1 to 1.36.2
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubern...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9814)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9810: feat(hetzner): support per-nodepool Hetzner firewalls

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Today the Hetzner cloud provider attaches a single, cluster-wide firewall (`HCLOUD_FIREWALL`) to every server it creates. There is no way to give one nodepool extra firewall rules without applying them to t...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9810)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9808: Increase bucket count for function_duration_seconds metric

Enhance the precision of the existing function_duration_seconds histogram-based metric by expanding its bucket count. This improvement aims to provide more accurate performance measurements for Cluster Autoscaler functions by increasing the number of observation points within critical duration range...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9808)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1211: Flaky Test: TestStartController_CloudClientRetry/Fails_permanently_and_times_out

The test `TestStartController_CloudClientRetry/Fails_permanently_and_times_out` in `pkg/controller/gketenantcontrollers/starter_test.go` is flaky and occasionally fails because it does not reach the expected number of retry attempts before timing out.

#### References
- **Job History:** https://prow...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1211)

**Metadata:**
- Created: 2026-06-12
- Comments: 1
- State: open

### kubernetes/cloud-provider-gcp#1210: Bump Go to 1.26.4 in release-1.36

This PR upgrades the Go toolchain version to 1.26.4 in the release-1.36 branch.

### Changes
* Upgraded Go version in all module `go.mod` files and `go.work` to `1.26.4`.
* Upgraded builder Go version in root `Dockerfile` to `1.26.4` and runtime base image tag to `registry.k8s.io/build-image/go-runn...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1210)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1209: Bump Go to 1.26.4 in master

This PR upgrades the Go toolchain version to 1.26.4 in the master branch.

### Changes
* Upgraded Go version in all module `go.mod` files and `go.work` to `1.26.4`.
* Upgraded builder Go version in root `Dockerfile` to `1.26.4` and runtime base image tag to `registry.k8s.io/build-image/go-runner:v2....

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1209)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9025: Add amy to wg-batch and kevin as emeritus

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing SIG information, please follow these instructions: https:...

🔗 [Link](https://github.com/kubernetes/community/pull/9025)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9023: Document deprecating behavior that has no feature gate

Documents the `1.0`-anchored gate pattern used to deprecate long-standing behavior.

Spawned from reviewing https://github.com/kubernetes/kubernetes/pull/139397

🔗 [Link](https://github.com/kubernetes/community/pull/9023)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9022: Improve user addition steps with direct links

Updated links in the user addition steps for clarity.

<!--  Thanks for sending a pull request!  Here are some tips for you:
- If this is your first contribution, read our Getting Started guide https://github.com/kubernetes/community/blob/master/contributors/guide/README.md
- If you are editing ...

🔗 [Link](https://github.com/kubernetes/community/pull/9022)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6447: add amy to wg-batch owner alias, remove kannon92

Related: https://github.com/kubernetes/community/issues/9021

🔗 [Link](https://github.com/kubernetes/org/pull/6447)

**Metadata:**
- Created: 2026-06-12
- Comments: undefined
- State: open
- Draft: No

### prometheus/alertmanager: 0.33.0 / 2026-06-12

* [CHANGE] The '--enable-feature=auto-gomaxprocs' option has been removed. This flag had no effect since v0.29 and was deprecated in v0.32. It can be safely removed from any startup scripts. #5090, #5251
* [CHANGE] Add `group-key-in-metrics` feature flag. #5047
* [CHANGE] Move `AlertMarker`, `GroupMarker` to `marker` package. #5047
* [CHANGE] Remove `alertmanager_marked_alerts`. #5047
* [CHANGE] Remove the following from `types` package: `MemMarker`, `AlertState*`, `AlertStatus`. #5047
* [F...

🔗 [Link](https://github.com/prometheus/alertmanager/releases/tag/v0.33.0)

**Metadata:**
- Version: v0.33.0
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shimkit/v0.1.2

🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shimkit/v0.1.2)

**Metadata:**
- Version: containerd-shimkit/v0.1.2
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shim-wasmtime/v0.6.1

🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shim-wasmtime/v0.6.1)

**Metadata:**
- Version: containerd-shim-wasmtime/v0.6.1
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shim-wasmer/v0.6.1

🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shim-wasmer/v0.6.1)

**Metadata:**
- Version: containerd-shim-wasmer/v0.6.1
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shim-wasmedge/v0.6.1

🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shim-wasmedge/v0.6.1)

**Metadata:**
- Version: containerd-shim-wasmedge/v0.6.1
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shim-wasm/v1.0.1




🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shim-wasm/v1.0.1)

**Metadata:**
- Version: containerd-shim-wasm/v1.0.1
- Published: 2026-06-12
- Prerelease: No

### containerd/runwasi: containerd-shim-wamr/v0.2.1

🔗 [Link](https://github.com/containerd/runwasi/releases/tag/containerd-shim-wamr/v0.2.1)

**Metadata:**
- Version: containerd-shim-wamr/v0.2.1
- Published: 2026-06-12
- Prerelease: No


---

*This content was automatically collected on 2026-06-13 03:30:50*
