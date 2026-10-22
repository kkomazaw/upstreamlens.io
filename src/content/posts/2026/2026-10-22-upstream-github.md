---
title: "Upstream Github - 2026-10-22"
description: "CNCF upstream activity from github"
pubDate: 2026-10-22
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "needs-triage", "kubectl", "sig/storage", "kind/flake", "sig/cli", "triage/accepted", "kind/cleanup", "sig/scheduling", "wg/workload-aware-scheduling", "sig/network", "pr", "area/kubelet", "sig/node", "size/XL", "release-note-none", "approved", "cncf-cla: yes", "needs-priority", "area/test", "area/apiserver", "sig/api-machinery", "release-note", "size/L", "sig/testing", "kind/feature", "size/XXL", "area/kubectl", "kind/api-change", "needs-ok-to-test", "do-not-merge/work-in-progress", "area/code-generation", "wg/device-management", "lgtm", "sig/apps", "sig/instrumentation", "area/cloudprovider", "sig/cloud-provider", "sig/autoscaling", "api-review", "size/M", "do-not-merge/release-note-label-needed", "do-not-merge/needs-kind", "do-not-merge/hold", "size/XS", "size/S", "sig/auth", "sig/release", "area/release-eng", "release", "language/ja", "website", "cloud-provider-gcp", "needs-kind", "cloud-provider-aws", "ok-to-test", "minikube", "dependencies", "github_actions", "area/github-management", "org", "kops", "sig/contributor-experience", "area/community-management", "area/slack-management", "community", "autoscaler", "area/vertical-pod-autoscaler", "area/balancer", "area/cluster-autoscaler", "area/dependency", "area/infra", "area/prow", "area/terraform", "sig/k8s-infra", "area/infra/gcp", "k8s.io", "ingress-gce", "kube-state-metrics", "priority/important-soon", "kind/documentation", "sig-release", "prometheus", "blackbox_exporter", "containerd"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubectl#1890: kubectl: Explicit --kuberc flag is overridden by KUBERC when using the default path

<!-- Please use this template while reporting a bug and provide as much info as possible. Not doing so may result in your bug not being addressed in a timely manner. Thanks!

If the matter is security related, please disclose it privately via https://kubernetes.io/security/
-->

**What happened**:

...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1890)

**Metadata:**
- Created: 2026-10-21
- Comments: 3
- State: open

### kubernetes/kubernetes#143289: client-go/leaderelection: add recovery mode and write gate

Implements the client-go part of KEP-6361 (Leader Election Recovery).

With LeaderElectionConfig.Recovery set, a missed RenewDeadline closes the write gate and calls OnStoppedLeading instead of ending Run. The elector keeps renewing the lease it held, never re-acquiring, and reopens the gate on succ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143289)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143280: KEP - 6313 : Network Isolated Pods - ALPHA

## What type of PR is this?

/kind feature
/kind api-change
/sig network
/sig node
/label api-review

## What this PR does / why we need it

Alpha implementation of [KEP-6313: network-isolated pod sandboxes](https://kep.k8s.io/6313). It adds `spec.defaultNetwork` to Pods with the values `Pod`, `Host...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143280)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1399: GCE AliasNetworkEndpoints API returns numeric project number instead of project ID in resource URLs (AIP-122 non-compliance)

The GCE Compute `v1.preview` AliasNetworkEndpoints (ANE) API returns numeric project numbers in resource reference URLs (e.g., `host.instance` and `subnetwork`) instead of the alphanumeric project ID configured for the cluster.

Per [Google Cloud API Improvement Proposal AIP-122](https://google.aip....

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/issues/1399)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/autoscaler#10484: CapacityBuffer Conditions and Shared API Constants AEP

#### What type of PR is this?

/kind api-change

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
/kind r...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10484)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10469: VPA recommender: keep checkpoint history across target selector flips

#### What type of PR is this?

/kind bug
/area vertical-pod-autoscaler

#### What this PR does / why we need it:

Picks up #10095 from @iho, which has been inactive since August (agreed on that PR). iho's two commits are kept as they are.

When the recommender can't resolve a VPA's `targetRef` (info...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10469)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### prometheus/prometheus: 3.15.1 / 2026-10-21

- [SECURITY] Container images: Update CA certificates to distrust "emSign ECC Root CA - G3" and "Comodo AAA Services root" following the compromise of eMudhra intermediate CA private keys.
- [SECURITY] Build with Go 1.27.3 to fix vulnerabilities in `net/http`, `net/textproto`, `crypto/tls` and `html/template`.
- [SECURITY] Bump golang.org/x/net to v0.60.0 to fix HTTP/2 vulnerabilities (GO-2026-6603, GO-2026-6610, GO-2026-6611, GO-2026-6612, GO-2026-6617).


🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.15.1)

**Metadata:**
- Version: v3.15.1
- Published: 2026-10-21
- Prerelease: No

### prometheus/prometheus: 3.13.5 / 2026-10-21

- [SECURITY] Container images: Update CA certificates to distrust "emSign ECC Root CA - G3" and "Comodo AAA Services root" following the compromise of eMudhra intermediate CA private keys.
- [SECURITY] Build with Go 1.26.10 to fix vulnerabilities in `net/http`, `net/textproto`, `crypto/tls` and `html/template`.
- [SECURITY] Bump golang.org/x/net to v0.60.0 to fix HTTP/2 vulnerabilities (GO-2026-6603, GO-2026-6610, GO-2026-6611, GO-2026-6612, GO-2026-6617).
- [SECURITY] Bump OpenTelemetry to v...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.13.5)

**Metadata:**
- Version: v3.13.5
- Published: 2026-10-21
- Prerelease: No

### prometheus/blackbox_exporter: 0.29.1 / 2026-10-21

* [SECURITY] Container images: Update CA certificates to distrust "emSign ECC Root CA - G3" and "Comodo AAA Services root" following the compromise of eMudhra intermediate CA private keys.
* [SECURITY] Build with Go 1.27.3 to fix vulnerabilities in `net/http`, `net/textproto`, `mime/multipart`, `crypto/tls`, `crypto/x509` and `html/template`. `crypto/x509` now rejects the compromised eMudhra intermediates on hosts with an outdated CA store.
* [SECURITY] Bump golang.org/x/net to v0.61.0 to fix ...

🔗 [Link](https://github.com/prometheus/blackbox_exporter/releases/tag/v0.29.1)

**Metadata:**
- Version: v0.29.1
- Published: 2026-10-21
- Prerelease: No

## Updates

### kubernetes/kubernetes#143293: [Flaking Test] [sig-storage] CSI Volumes [Driver: pd.csi.storage.gke.io] [Provider:gce] [Testpattern: Dynamic PV (block volmode)] volume-stress multiple pods should access different volumes repeatedly

### Which jobs are flaking?

[ci-kubernetes-e2e-gce-cos-serial-master](https://prow.k8s.io/job-history/gs/kubernetes-ci-logs/logs/ci-kubernetes-e2e-gce-cos-serial-master)

### Which tests are flaking?

[Kubernetes e2e suite: [It] [sig-storage] CSI Volumes [Driver: pd.csi.storage.gke.io] [Provider:gc...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143293)

**Metadata:**
- Created: 2026-10-21
- Comments: 2
- State: open

### kubernetes/kubernetes#143292: kubectl: OpenAPI v3 query param verifier fails on typed List resources (e.g. ReplicationControllerList, ServiceList) and falls back to OpenAPI v2

### What happened?

When validating a typed `*List` resource (such as `v1.ReplicationControllerList` or `v1.ServiceList`), `queryParamVerifierV3.HasSupport` looks up `/openapi/v3/api/v1` and searches `supportsQueryParamV3` for a `PATCH` endpoint matching the GVK. Because list kinds do not have a `PA...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143292)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/kubernetes#143281: scheduler-perf: inline createPods inside createPodGroups and createPodGroups inside createCompositePodGroups.

### What would you like to be added?
/sig scheduling
/kind cleanup
/wg workload-aware-scheduling

As per discussion: https://github.com/kubernetes/kubernetes/pull/141706#discussion_r4293485745
`createCompositePodGroups` propagates multiple fields/params to `createPodGroups` which require when creati...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143281)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/kubernetes#143275: kube-proxy can lose the initial node topology event and ignore zone hints until restart

/sig network
/kind bug

### What happened?

On AKS and EKS, kube-proxy repeatedly logged this warning:

```text
"Ignoring same-zone topology hints for service since node is missing label" label="topology.kubernetes.io/zone"
```

On the affected nodes, the Node API object had the correct zone label. ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143275)

**Metadata:**
- Created: 2026-10-21
- Comments: 4
- State: open

### kubernetes/kubernetes#143294: Kubelet: Don't allocate resources for terminating/terminated pods

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Don't allocate resources for terminating/terminated pods. Once a pod enters a terminating state, we never actuate the resize anyway.

#### Which issue(s) this PR is related to:

Pre-work for https://github.com/kubern...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143294)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143291: apiserver: decorate Service and PVC objects on storage decode

#### What type of PR is this?

/kind bug
/sig api-machinery
/sig network

#### What this PR does / why we need it:

Legacy Services and PersistentVolumeClaims lose their read-time defaults on cached watch events and status subresource requests, which can cause the ServiceCIDR repair controller to de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143291)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143290: client-go/workqueue: add Pausable to pause and resume item retrieval

Pausable is an optional interface, implemented by Typed and forwarded by the delaying and rate limiting wrappers. While paused, Get blocks until Resume or ShutDown; Add, Done and Forget keep working so event handlers can keep enqueuing and workers can finish the items they hold. A queue shut down wh...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143290)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143288: kubectl: remove OpenAPI v2 query param verifier fallback from Validator

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

- Removes the OpenAPI v2 `QueryParamVerifier` fallback from `kubectl`'s `Validator()` and marks `NewQueryParamVerifier`, `QueryParamVerifier`, and `NewFallbackQueryParamVerifier` as deprecated.
- Fixes ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143288)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143287: DRA consumable capacity validation

#### What type of PR is this?
/kind bug
/kind api-change

#### What this PR does / why we need it:
The PR carry forwards the changes from #140563 

From the original PR:
This PR adds validation to prevent negative capacity values from entering the DRA node-allocatable resource accounting pat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143287)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143285: Validate labels and annotations in pods/binding

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Ensures pods/binding enforce the same labels and annotations validation as create / update pod paths.

/sig node apimachinery
/assign @deads2k 

#### Does this PR introduce a user-facing change?
```release-note
Make ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143285)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143284: kubelet: add sync_result_errors_total and pod_worker_errors_total metrics

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Add 2 new metrics to track errors from pod sync:
1. `kubelet_sync_result_errors_total`: a counter that is incremented for every error returned in a `SyncResult`, with a label for the sync action.
2. `kubelet_pod_...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143284)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143283: controller-manager: remove Config and ConfigOrDie from ControllerClientBuilder

Raw rest.Config values let controllers build clients that bypass the transport wrappers the controller manager applies. Have the builder construct metadata, dynamic and scale clients instead, and add WithRateLimiterMultiplier for controllers that scale QPS and burst.

The HPA metrics and apiextensio...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143283)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143282: Fix use of in-cluster config when client configuration flags are set

#### What type of PR is this?

/kind bug
/sig cli
/sig api-machinery

#### What this PR does / why we need it:

When a client (kubectl, or any client-go based CLI) is running inside a pod with a service account, the in-cluster configuration is only used if the merged kubeconfig is *exactly* the defa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143282)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143279: WIP: POC: decorating decoder

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143279)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143278: [WIP] Extend the validation performed in workloadbuilder

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
`kube-apiserver` and `kube-scheduler` restrict some workload configurations that `workloadbuilder` allowed so far. Adding matching restrictions to `workloadbuilder`'s own validation will make the library more robus...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143278)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143277: kubectl: fix --kuberc flag precedence when pointing to the default path

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143277)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143276: Watchcache unify reading snapshot list get

Followup to https://github.com/kubernetes/kubernetes/pull/143270

/kind cleanup

```release-note
NONE
```


#### AI usage disclosure:

Yes

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143276)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143274: [WIP] Move functions that are only used by scheduler tests from test/integration/util to test/integration/scheduler/util.go

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143274)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143273: test(apiserver): use namespaced keys in registry fixture

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

The namespaced Pod registry test fixture builds keys without the namespace, so objects with the same name in different namespaces collide.

Use the existing `defaultStoreKeyFuncs` to keep the registry request key...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143273)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143271: apiextensions: sort map keys to ensure deterministic CEL validation order

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

In `validateMap`, iteration over `obj` directly relied on Go map range iteration, which is non-deterministic by runtime design. As a result, when multiple CEL validation rules fail across map prope...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143271)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143269: cluster/gce: retry master creation on capacity exhaustion

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143269)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143267: audit: don't mark the original event as truncated

#### What type of PR is this?

/kind bug
/sig auth

#### What this PR does / why we need it:

The truncate audit backend shallow-copied the event and then added `audit.k8s.io/truncated: "true"` to the copy's annotations. The copy shares that map with the original, so the original was marked too. The...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143267)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/release#4579: Add patch-release-notification Lambda to email cherry-pick deadline reminders

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Revives #3627, rebased on master with the review feedback addressed.

Adds `cmd/patch-release-notification`, an AWS Lambda that runs once a day, reads the patch release schedule, and emails the community ...

🔗 [Link](https://github.com/kubernetes/release/pull/4579)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#58243: [ja] Improve scripts/ja/verify-spelling.sh to support file and directory arguments

**This is a Feature Request**

**What would you like to be added**

Improve `scripts/ja/verify-spelling.sh` to support file and directory arguments, among other changes.

**Why is this needed**

The current script always scans the entire `content/ja` directory, so it is not suited to checking specif...

🔗 [Link](https://github.com/kubernetes/website/issues/58243)

**Metadata:**
- Created: 2026-10-21
- Comments: 2
- State: open

### kubernetes/cloud-provider-aws#1514: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.31.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1514)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1513: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.32.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1513)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1512: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.33.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1512)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1511: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.34.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1511)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1510: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.35.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1510)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1509: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.36.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1509)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-aws#1508: Automated cherry pick of #1496: Add vpcId filter when resolving subnets for load balancer

Cherry pick of #1496 on release-1.37.

#1496: Add vpcId filter when resolving subnets for load balancer

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

```release-note

```

🔗 [Link](https://github.com/kubernetes/cloud-provider-aws/pull/1508)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23917: prow: Use a smaller GCE VM and nested virt only for kvm

none and kvm prow jobs fail about half the time while creating the boskos GCE VM. GCP returns `ZONE_RESOURCE_POOL_EXHAUSTED`, so the jobs never reach the tests.

`n2-standard-8` (8 vCPU, 32 GB) with nested virtualization was out in `us-central1-b`. After shrinking to `n2-standard-4`, that zone was s...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23917)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23915: chore(deps): bump docker/build-push-action from 6.9.0 to 7.4.0

Bumps [docker/build-push-action](https://github.com/docker/build-push-action) from 6.9.0 to 7.4.0.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/docker/build-push-action/releases">docker/build-push-action's releases</a>.</em></p>
<blockquote>
<h2>v7.4.0</...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23915)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6732: add stage-bots as admin to apiextensions-api staging repo

Gives the `stage-bots` team (k8s-publishing-bot) admin access to the new `kubernetes/apiextensions-api` staging repo, and adds the repo to the `kubernetes/org.yaml` restrictions list.

Ref: #6726

This PR was written in part with the assistance of generative AI.

🔗 [Link](https://github.com/kubernetes/org/pull/6732)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18892: deploy AWS LB controller for scalability tests

Part of https://github.com/kubernetes/kubernetes/issues/143229

xref: https://kubernetes.slack.com/archives/CCK68P2Q2/p1792583993994579

We don't want AWS CCM creating load balancers for scalability tests. Instead, they should be created by the AWS LB Controller.

@dims

🔗 [Link](https://github.com/kubernetes/kops/pull/18892)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/community#9230: Archive old KCS channels per ContribEx discussion

Per decision at Contribex meeting, archive the old Kubernetes Contributor Summit channels.

Fixes #9204


🔗 [Link](https://github.com/kubernetes/community/pull/9230)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler: vertical-pod-autoscaler-chart-0.15.0

Automatically adjust resources for your workloads

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-chart-0.15.0)

**Metadata:**
- Version: vertical-pod-autoscaler-chart-0.15.0
- Published: 2026-10-21
- Prerelease: No

### kubernetes/autoscaler: vertical-pod-autoscaler-1.8.1

## Changes by Kind

### Dependency

- Bump Go to 1.26.10 ([#10454](https://github.com/kubernetes/autoscaler/pull/10454), [@adrianmoisey](https://github.com/adrianmoisey))

### Bug or Regression

- Fix VPA updater treating a days-old lastState OOM as a fresh quick OOM under InPlace ([#10385](https://github.com/kubernetes/autoscaler/pull/10385), [@locker95](https://github.com/locker95))
- Fixed VPA updater logic to determine DaemonSet replica count from DaemonSet.Status.DesiredNumberSched...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.8.1)

**Metadata:**
- Version: vertical-pod-autoscaler-1.8.1
- Published: 2026-10-21
- Prerelease: No

### kubernetes/autoscaler: vertical-pod-autoscaler-1.7.3

## Changes by Kind

### Dependency

- Bump Go to 1.26.10 ([#10456](https://github.com/kubernetes/autoscaler/pull/10456), [@adrianmoisey](https://github.com/adrianmoisey))

### Bug or Regression

- Fix VPA updater treating a days-old lastState OOM as a fresh quick OOM under InPlace ([#10386](https://github.com/kubernetes/autoscaler/pull/10386), [@adrianmoisey](https://github.com/adrianmoisey))
- Fixed VPA updater logic to determine DaemonSet replica count from DaemonSet.Status.DesiredNum...

🔗 [Link](https://github.com/kubernetes/autoscaler/releases/tag/vertical-pod-autoscaler-1.7.3)

**Metadata:**
- Version: vertical-pod-autoscaler-1.7.3
- Published: 2026-10-21
- Prerelease: No

### kubernetes/autoscaler#10481: VPA 1.8.1 retains CVE-2026-78669 in golang.org/x/net

**Which component are you using?**:

/area vertical-pod-autoscaler

**What version of the component are you using?**:

Component version: `vpa-recommender:1.8.1`

**What k8s version are you using (`kubectl version`)?**:

Not applicable. This was reproduced by scanning the published image without dep...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10481)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/autoscaler#10478: feature: Add first-class support for hostUsers parameter in Helm chart values


**Feature: Add first-class support for hostUsers parameter in Helm chart values

Description**

With Kubernetes natively supporting User Namespaces (stable as of v1.36), clusters can now isolate non-host-dependent controller workloads from the host root namespace using the hostUsers: false paramete...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10478)

**Metadata:**
- Created: 2026-10-21
- Comments: 2
- State: open

### kubernetes/autoscaler#10476: recommender: history pods loaded with --storage=prometheus never match VPA selectors that contain . or / in label keys

**Which component are you using?**: vertical-pod-autoscaler (recommender)

/area vertical-pod-autoscaler

**What version of the component are you using?**: 1.5.0

Component version: 1.5.0

**What k8s version are you using (`kubectl version`)?**:

<details><summary><code>kubectl version</code> Output...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10476)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/autoscaler#10474: Balancer priority policy panics when targetOrder references an unknown target

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

Balancer controller.

/area balancer

**What version of the component are you using?**:

master branch

Component version:

**What k8s version are you using (`kubectl version`)?**:...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10474)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/autoscaler#10468: VPA release 1.8.1

Please follow instructions in
[RELEASE.md](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/RELEASE.md) and note each
completed step on this issue.

Please provide any information that is related to the release:

- When we plan to do the release?
- Are there any issues / ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10468)

**Metadata:**
- Created: 2026-10-21
- Comments: 7
- State: open

### kubernetes/autoscaler#10467: VPA release 1.7.3

Please follow instructions in
[RELEASE.md](https://github.com/kubernetes/autoscaler/blob/master/vertical-pod-autoscaler/RELEASE.md) and note each
completed step on this issue.

Please provide any information that is related to the release:

- When we plan to do the release?
- Are there any issues / ...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10467)

**Metadata:**
- Created: 2026-10-21
- Comments: 5
- State: open

### kubernetes/autoscaler#10483: dependabot(deps): bump sigs.k8s.io/controller-runtime from 0.25.1 to 0.25.2 in /cluster-autoscaler

Bumps [sigs.k8s.io/controller-runtime](https://github.com/kubernetes-sigs/controller-runtime) from 0.25.1 to 0.25.2.
<details>
<summary>Release notes</summary>
<p><em>Sourced from <a href="https://github.com/kubernetes-sigs/controller-runtime/releases">sigs.k8s.io/controller-runtime's releases</a>.<...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10483)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10479: balancer: reject priority targetOrder entries that name an unknown target

#### What type of PR is this?

/kind bug

/area balancer

#### What this PR does / why we need it:

`GetPlacement` checks that `spec.policy.priorities.targetOrder` is set, but not that its entries name targets in `spec.targets`. For an unknown name, `distributeByPriority` reads a nil `*targetInfo` f...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10479)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/k8s.io#10097: Add SF Compute API key secret for prow-build

This adds a `sfcompute-api-key` GCP Secret Manager secret in `k8s-infra-prow-build` and an ExternalSecret that syncs it into the prow-build cluster. Upcoming Prow GPU e2e jobs will use this SF Compute API key. The secret is owned by `k8s-infra-sfcompute-admins@kubernetes.io` alongside prow-oncall, a...

🔗 [Link](https://github.com/kubernetes/k8s.io/pull/10097)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3293: Return early in readinessReflector.SyncPod when pod does not need processing     

In `readinessReflector.SyncPod`, when `!needToProcess(pod)` is true, it logs `"Skip processing pod"` but was missing a `return` statement, causing every pod (including pods without a NEG readiness gate or with `NegReadinessGate` already `True`) to be added to `r.queue` anyway and discarded later in ...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3293)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3291: fix(neg): mitigate GCE read quota exhaustion during endpoint churn

Mitigates GCE `ListNetworkEndpoints` and `Get` read quota exhaustion during high-churn pod scale-up and node-drain events:

- **Coalesce `EndpointSlice` queue events (`--neg-endpoint-sync-batch-period`):** Delay `endpointQueue` items by `flags.F.NegEndpointSyncBatchPeriod` (default `1s`) via `AddA...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3291)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/ingress-gce#3290: Fix L4 IPv6 health check firewall name collisions

`L4IPv6HealthCheckFirewall` (V2) truncates the 63-char `L4Backend` name to append `-fw-ipv6`. For `len(namespace) + len(name) >= 39` this drops the whole hash, so Services with the same trimmed prefix share one rule and overwrite each other's health check port.

This PR:
- Adds `L4IPv6HealthCheckFir...

🔗 [Link](https://github.com/kubernetes/ingress-gce/pull/3290)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3164: feature: Add first-class support for hostUsers parameter in Helm chart values


**Feature: Add first-class support for hostUsers parameter in Helm chart values

Description**

With Kubernetes natively supporting User Namespaces (stable as of v1.36), clusters can now isolate non-host-dependent controller workloads from the host root namespace using the hostUsers: false paramete...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/issues/3164)

**Metadata:**
- Created: 2026-10-21
- Comments: 1
- State: open

### kubernetes/kube-state-metrics#3167: chore: replace controller-runtime auth filter with a client-go implementation

**What this PR does / why we need it:**

`sigs.k8s.io/controller-runtime` is only imported for `filters.WithAuthenticationAndAuthorization`, which backs `--auth-filter`. That single import links `k8s.io/apiserver` into the binary, and with it gRPC, `cel-go`, the OpenTelemetry SDK and OTLP exporters,...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3167)

**Metadata:**
- Created: 2026-10-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3166: chore: replace viper with fsnotify for config file watching

**What this PR does / why we need it:**

viper is only used in `internal/wrapper.go` to check that the options file, the custom resource state config and the kubeconfig exist and parse as YAML, and to restart KSM when they change. The parsed values were discarded, and the options file was then read ...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3166)

**Metadata:**
- Created: 2026-10-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/sig-release#3127: Cut v1.38.0-alpha.3 release

## Scheduled to happen: Wed, 2026-10-21

_Note for v1.x.0 releases: Having this issue in open state will stop the
periodic run of [`krel fast-forward`](https://testgrid.k8s.io/sig-release-releng-blocking#git-repo-kubernetes-fast-forward)
to avoid conflicts with releases running in parallel. The fast...

🔗 [Link](https://github.com/kubernetes/sig-release/issues/3127)

**Metadata:**
- Created: 2026-10-21
- Comments: 2
- State: open

### containerd/containerd#14444: Redundant runc kill command `runc kill --all 9` on container exit

### Description

While working on https://github.com/containerd/containerd/issues/14292, I found a bug in containerd's container deletion process for a Pod with `shareProcessNamespace: false` (the default) that I thought should be filed separately. 

containerd StopContainer makes a gRPC `Kill()` ca...

🔗 [Link](https://github.com/containerd/containerd/issues/14444)

**Metadata:**
- Created: 2026-10-21
- Comments: 3
- State: open


---

*This content was automatically collected on 2026-10-22 03:19:00*
