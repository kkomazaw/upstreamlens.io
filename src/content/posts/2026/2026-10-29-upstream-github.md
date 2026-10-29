---
title: "Upstream Github - 2026-10-29"
description: "CNCF upstream activity from github"
pubDate: 2026-10-29
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "kops", "release", "sig/storage", "sig/node", "kind/feature", "sig/auth", "needs-triage", "sig/scheduling", "sig/apps", "priority/important-soon", "triage/accepted", "pr", "release-note", "size/S", "cncf-cla: yes", "needs-ok-to-test", "needs-priority", "area/test", "kind/cleanup", "size/M", "release-note-none", "sig/testing", "sig/api-machinery", "kind/api-change", "do-not-merge/cherry-pick-not-approved", "area/kubelet", "area/apiserver", "size/XL", "sig/instrumentation", "sig/architecture", "area/code-generation", "size/L", "kind/regression", "size/XXL", "priority/important-longterm", "wg/workload-aware-scheduling", "size/XS", "do-not-merge/work-in-progress", "area/cluster-autoscaler", "area/provider/gce", "autoscaler", "lgtm", "approved", "do-not-merge/needs-area", "area/provider/azure", "do-not-merge/release-note-label-needed", "area/vertical-pod-autoscaler", "area/helm-charts", "ok-to-test", "kind/dependency", "kube-state-metrics", "needs-rebase", "area/dependency", "cloud-provider-gcp", "sig/contributor-experience", "area/jobs", "area/config", "test-infra", "area/github-management", "org", "sig/cli", "kubectl", "prometheus", "common", "containerd", "rust-extensions", "cncf", "kind/initiative", "needs-group", "toc"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143538: [WAS] KEP-5547: Job scheduling object sync metrics and e2e tests

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
The last and fourth PR splitting #143128. Adds metrics for the Job controller's Workload and PodGroup API calls, and e2e coverage for the whole feature.

- job_scheduling_object_syncs_total: the number of Workload...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143538)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143537: [WAS] KEP-5547: Delete Job PodGroup on suspend and recreate on resume

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Third of four PRs splitting #143128. A resumed gang Job is scheduled as a new gang instead of reusing the PodGroup from before the suspend.

- On suspend, delete the PodGroup the Job controls, with a UID preconditi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143537)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143536: [WAS] KEP-5547: Add Job conditions SchedulingBlocked, FailedWorkloadCompilation and mixed schedulingGroup guard

#### What type of PR is this?
/kind feature

#### What this PR does / why we need it:
Second of four PRs splitting #143128. When the Job's scheduling objects can't be used, the Job now reports why on its status instead of only retrying with an error.

- Set `SchedulingBlocked=True` on the Job and em...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143536)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143534: [WAS] KEP-5547: Update Job controller name-based Workload/PodGroup discovery and management modes

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:
First of four PRs splitting #143128. 

This PR changes how the Job controller finds and manages the Workload and PodGroup for a Job when WorkloadWithJob is enabled:

- Discover the Workload and PodGroup by their d...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143534)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10560: fix: add guard for size cache

#### What type of PR is this?

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
/kind regr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10560)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kops#18940: kubelet: nodeStatusReportFrequency follows nodeStatusUpdateFrequency since kOps 1.36

/kind bug

**1. What `kops` version are you running?**
1.36.2

**2. What Kubernetes version are you running?**
1.36.5

**3. What cloud provider are you using?**
AWS

**4. What commands did you run? What is the simplest way to reproduce this issue?**
Set a short kubelet status update period in the cl...

🔗 [Link](https://github.com/kubernetes/kops/issues/18940)

**Metadata:**
- Created: 2026-10-28
- Comments: 0
- State: open

### kubernetes/kubernetes: v1.38.0-alpha.3


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.38.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.38.0-alpha.3)

**Metadata:**
- Version: v1.38.0-alpha.3
- Published: 2026-10-28
- Prerelease: Yes

### kubernetes/kubernetes: v1.37.2


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.37.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.37.2)

**Metadata:**
- Version: v1.37.2
- Published: 2026-10-28
- Prerelease: No

### kubernetes/kubernetes: v1.36.6


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.36.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.36.6)

**Metadata:**
- Version: v1.36.6
- Published: 2026-10-28
- Prerelease: No

### kubernetes/kubernetes: v1.35.10


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.35.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.35.10)

**Metadata:**
- Version: v1.35.10
- Published: 2026-10-28
- Prerelease: No

### kubernetes/kubernetes: v1.34.13


See [kubernetes-announce@](https://groups.google.com/forum/#!forum/kubernetes-announce). Additional binary downloads are linked in the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md).

See the [CHANGELOG](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.34.md) for more details.





🔗 [Link](https://github.com/kubernetes/kubernetes/releases/tag/v1.34.13)

**Metadata:**
- Version: v1.34.13
- Published: 2026-10-28
- Prerelease: No

### kubernetes/kubernetes#143539: Support administrator-authorized per-Pod UID/GID mappings for shared-storage ownership and quotas

### What would you like to be added?

An opt-in mechanism for administrators or trusted platform controllers to configure authorized per-Pod UID/GID mappings between container and host identities, with explicitly defined file ownership behavior on data volumes.

We need to combine the following:

- ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143539)

**Metadata:**
- Created: 2026-10-29
- Comments: 1
- State: open

### kubernetes/kubernetes#143533: scheduler: aggregate plugin pod status updates into one request before Bind

Follow up from https://github.com/kubernetes/kubernetes/pull/142768#discussion_r4391969935 

Currently, each plugin that changes pod status in PreBind makes its own pods/status request. This is fine today, since the DRA plugin is the only in-tree plugin that patches pod status. However, some pod sta...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143533)

**Metadata:**
- Created: 2026-10-29
- Comments: 1
- State: open

### kubernetes/kubernetes#143532: StatefulSet with Parallel policy can get into a loop when rollingUpdate/partition is not set

### What happened?

On a StatefulSet created with:
```yaml
podManagementPolicy: Parallel
updateStrategy:
  type: RollingUpdate
 ```

When during a rollout another controller evicted a lower-ordinal pod, the StatefulSet controller repeatedly recreated it on currentRevision, then immediately deleted i...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143532)

**Metadata:**
- Created: 2026-10-29
- Comments: 4
- State: open

### kubernetes/kubernetes#143528: [Failing Test] ci-node-crio-conformance: Secrets env var tests fail with "string field contains invalid UTF-8"

### Which jobs are failing?

- `ci-node-crio-conformance` (sig-release-master-blocking)

### Which tests are failing?

- `E2eNode Suite.[It] [sig-node] Secrets should be consumable from pods in env vars [Conformance] [NodeConformance]`
- `E2eNode Suite.[It] [sig-node] Secrets should be consumable vi...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143528)

**Metadata:**
- Created: 2026-10-28
- Comments: 10
- State: open

### kubernetes/kubernetes#143547: Reject updates to immutable CSR specs

/kind bug

#### What this PR does / why we need it:
`csrStrategy.PrepareForUpdate` currently overwrites the submitted CSR spec before update validation runs. This change leaves the spec intact so `ValidateUpdate` can reject changes instead of silently discarding them.

#### Which issue(s) this PR is...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143547)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143546: test/integration/scheduler: clean up test helpers and fix context han…

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
Clean up scheduler integration test utilities following the refactoring in PR #143274:

- Drop unused clientset parameter `cs` from `InitPodWithContainers` and update its caller in `priorities_test.go`.
- Pa...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143546)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143545: [release-1.35]: Automated cherry pick of #142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

Cherry pick of #142076 on release-1.35.

#142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143545)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143544: [release-1.36]: Automated cherry pick of #142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

Cherry pick of #142076 on release-1.36.

#142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143544)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143543: [release-1.37]: Automated cherry pick of #142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

Cherry pick of #142076 on release-1.37.

#142076: Dereference pointer args passed to %d in Errorf/Fatalf calls

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/ki...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143543)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143542: [release-1.37]: Automated cherry pick of #141828: Preparation for Go 1.27

Cherry pick of #141828 on release-1.37.

#141828: Preparation for Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind cleanup


```release-note
NONE
``...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143542)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143541: [release-1.36]: Automated cherry pick of #141828: Preparation for Go 1.27

Cherry pick of #141828 on release-1.36.

#141828: Preparation for Go 1.27

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind cleanup


```release-note
NONE
``...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143541)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143540: statefulset: don't create Pod from old revision under Parallel policy

#### What type of PR is this?

/kind bug
/kind regression

#### What this PR does / why we need it:

When RollingUpdate was used but no `rollingUpdate:` options were specified, the pod was recreated using OrderedReady-like semantics even if the policy was set to Parallel. Under new Kubernetes...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143540)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143535: test: migrate ipc-utils usage to agnhost and remove image

#### What type of PR is this?
/kind cleanup
/sig node
/sig testing

#### What this PR does / why we need it:
As part of umbrella issue #131893 to eliminate single-purpose e2e test images and consolidate dependencies onto `agnhost`, this PR migrates the sole remaining usage of `ipc-utils` and r...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143535)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143531: Add gnufied as feature approvers for sig-storage

xref https://github.com/kubernetes/community/issues/9243

cc @xing-yang 

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143531)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143530: [release-1.35]: Automated cherry pick of #139163: Tolerate json/v2 in unstructured and YAML tests

Cherry pick of #139163 on release-1.35.

#139163: Tolerate json/v2 in unstructured and YAML tests

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind cleanup


...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143530)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143529: [release-1.36]: Automated cherry pick of #139163: Tolerate json/v2 in unstructured and YAML tests

Cherry pick of #139163 on release-1.36.

#139163: Tolerate json/v2 in unstructured and YAML tests

For details on the cherry pick process, see the [cherry pick requests](https://git.k8s.io/community/contributors/devel/sig-release/cherry-picks.md) page.

#### What type of PR is this?
/kind cleanup


...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143529)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143527: registry: optimize DELETECOLLECTION worker allocations and ObjectMeta validation

#### What type of PR is this?
/kind cleanup

#### What this PR does / why we need it:
In large-scale clusters, bulk object deletion via `DELETECOLLECTION` introduces memory allocation and latency overhead across both the REST handler and registry layers.

This change implements five targeted optimiz...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143527)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143526: Add APF flow schema and priority level to audit annotations

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Adds the API Priority and Fairness classification of a request to the audit event annotations, next to the existing `apiserver.latency.k8s.io/apf-queue-wait`:

- `apiserver.latency.k8s.io/apf-f...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143526)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143525: printers: convert TableGenerator to streaming architecture and share column definitions

#### What type of PR is this?
/kind cleanup
/kind feature
/sig api-machinery

#### What this PR does / why we need it:
During table serialization (LIST and WATCH requests with `as=Table`), `HumanReadableGenerator.With(fns...)` allocates a fresh `map[reflect.Type]*handlerEntry` containing over 120 ha...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143525)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143524: cbor: add direct transcoding modes and collection slicing

## Overview

This change optimizes the CBOR encoding pipeline in `staging/src/k8s.io/apimachinery/pkg/runtime/serializer/cbor` and `staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/helpers.go` by introducing direct JSON-to-CBOR transcoding and collection slicing.

On a benchmark measuring `LIST N=10...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143524)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/autoscaler#10556: Remove deprecated `gce_request_count` metric in 1.39

/area cluster-autoscaler /area provider/gce /kind cleanup

Which component are you using?: Cluster Autoscaler (GCE cloudprovider)

Description: In #10246 (1.37), cluster_autoscaler_gce_request_count was deprecated in favor of the cluster_autoscaler_request_latencies histogram metric, with both metri...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10556)

**Metadata:**
- Created: 2026-10-28
- Comments: 2
- State: open

### kubernetes/autoscaler#10552: Review VPA Renovate coverage and remove overlapping Dependabot entries

## Summary
Review VPA Renovate coverage after the two-week evaluation period, on or after 2026-11-11 (UTC). If coverage is sufficient, remove the VPA Dependabot entries so Renovate becomes the sole dependency updater for vertical-pod-autoscaler.

Requested by @adrianmoisey. Dependabot remains enable...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10552)

**Metadata:**
- Created: 2026-10-28
- Comments: 1
- State: open

### kubernetes/autoscaler#10550: Cluster Autoscaler allocates excessive memory for large ProvisioningRequest pod counts

<!--
Please answer these questions before submitting your bug report. Thanks!
-->

**Which component are you using?**:

cluster-autoscaler 

/area cluster-autoscaler


**What version of the component are you using?**:

master at a2d4bf06c3b734b824d476b63efae39753e610c7.

Component version:

**What k...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10550)

**Metadata:**
- Created: 2026-10-28
- Comments: 1
- State: open

### kubernetes/autoscaler#10561: Tweak renovate

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

1. Split out the tools go.mod into it's own PR
2. Special case the github.com/mmarkdown/mmark that can't currently be upgraded

#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked issue when PR i...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10561)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10559: feat(charts): add Cloud Build config and Makefile targets for OCI chart push

#### What type of PR is this?

/kind feature

#### What this PR does / why we need it:

Adds `cloudbuild.yaml` and `Makefile` targets (`package-helm` / `push-helm`) under `cluster-autoscaler/charts/` and `vertical-pod-autoscaler/charts/` to package and push both Helm charts as OCI artifacts to `gcr....

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10559)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10557: [VPA] Bump kubernetes go deps (vpa-release-1.7) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [k8s.io/api](https://redirect.github.com/kubernetes/api) | `v0.36.5` → `v0.36.6` | ![age](https://d...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10557)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10555: [VPA] Bump kubernetes go deps (vpa-release-1.8) (patch)

This PR contains the following updates:

| Package | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|
| [k8s.io/api](https://redirect.github.com/kubernetes/api) | `v0.37.1` → `v0.37.2` | ![age](https://d...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10555)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10554: [VPA] Bump golang Docker tag to v1.27.3 (master)

This PR contains the following updates:

| Package | Type | Update | Change |
|---|---|---|---|
| [golang](https://hub.docker.com/_/golang) ([source](https://redirect.github.com/docker-library/golang)) | stage | patch | `1.27.2` → `1.27.3` |

---

### Configuration

📅 **Schedule**: (in timezone Etc...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10554)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10553: [VPA] Bump go deps (master)

> [!NOTE]
> This PR body was truncated due to platform limits.

This PR contains the following updates:

| Package | Type | Update | Change | [Age](https://docs.renovatebot.com/merge-confidence/) | [Confidence](https://docs.renovatebot.com/merge-confidence/) |
|---|---|---|---|---|---|
| [github.com...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10553)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kube-state-metrics#3184: fix(cronjob): parse schedules like robfig/cron with go-cron v0.18.0

**What this PR does / why we need it:**

Bumps `github.com/netresearch/go-cron` from v0.17.0 to v0.18.0 and parses CronJob schedules with its new `RobfigCompat` option, so KSM interprets a schedule the same way as the Kubernetes CronJob controller, which uses `robfig/cron/v3`.

With the standard par...

🔗 [Link](https://github.com/kubernetes/kube-state-metrics/pull/3184)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1425: chore(deps): bump the workspace-deps group across 2 directories with 1 update

Bumps the workspace-deps group with 1 update in the /providers directory: [google.golang.org/api](https://github.com/googleapis/google-api-go-client).
Bumps the workspace-deps group with 1 update in the /test/e2e directory: [google.golang.org/api](https://github.com/googleapis/google-api-go-client)....

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1425)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1424: chore(deps): bump the workspace-deps group across 2 directories with 1 update

Bumps the workspace-deps group with 1 update in the /providers directory: [google.golang.org/api](https://github.com/googleapis/google-api-go-client).
Bumps the workspace-deps group with 1 update in the /test/e2e directory: [google.golang.org/api](https://github.com/googleapis/google-api-go-client)....

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1424)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-gcp#1421: go.mod: drop the k8s.io staging replace directives

The replace block pinned every k8s.io staging module to a single
version. It dates from when k8s.io/kubernetes's own go.mod listed the
staging modules at v0.0.0 and consumers had to override each one or
module resolution would try to fetch a non-existent v0.0.0.

That is no longer necessary. With mo...

🔗 [Link](https://github.com/kubernetes/cloud-provider-gcp/pull/1421)

**Metadata:**
- Created: 2026-10-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#38187: Run kubernetes/org presubmits on kubekins-e2e

Presubmits should test kubernetes/org with the same image that applies it in production. `post-org-peribolos` and `ci-org-peribolos` run `./admin/update.sh` on `kubekins-e2e`, but `pull-org-test-all` and `pull-org-verify-all` were pinned to `golang:1.22.4`.

This moves both presubmits to the same `k...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/38187)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/org#6761: Bump Go dependencies

Bumps `sigs.k8s.io/prow` and the other Go module dependencies, and adds a Dependabot config to keep them current.

- Raises the `go` directive to 1.26.4 to match prow.
- Drops the `replace` directives. None of the pinned modules are imported by any package here; they only held stale versions in the ...

🔗 [Link](https://github.com/kubernetes/org/pull/6761)

**Metadata:**
- Created: 2026-10-29
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1891: Improve kubectl get pods` status visibility when containers are not ready

@kubernetes/sig-cli-feature-requests

## Problem

When a Pod contains multiple containers, `kubectl get pods` can display `STATUS=Running` even when only some containers are ready.

Example:

```text
NAME                 READY   STATUS
my-application-pod   1/2     Running
```

This is valid Kubernet...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1891)

**Metadata:**
- Created: 2026-10-28
- Comments: 2
- State: open

### prometheus/prometheus: 3.16.0-rc.2 / 2026-10-27

- [CHANGE] API: The experimental search endpoints now clamp `batch_size` to 1000. (#19731, @roidelapluie)
- [CHANGE] Configuration: Default --web.external-url to https when --web.config.file enables TLS. (#19241, @hexonal)
- [CHANGE] PromQL: Subquery samples are now included in the query TotalSamples and TotalSamplesPerStep statistics, and SamplesRead now counts reads from subqueries with an @ modifier in range queries. (#19165, @DanCech)
- [CHANGE] Remote write: Stop exposing the deprecated ...

🔗 [Link](https://github.com/prometheus/prometheus/releases/tag/v3.16.0-rc.2)

**Metadata:**
- Version: v3.16.0-rc.2
- Published: 2026-10-28
- Prerelease: Yes

### prometheus/common: v0.73.0

## What's Changed
* expfmt: default to allow-utf-8 escaping for OpenMetrics 2.0 by @KR-Ravindra in https://github.com/prometheus/common/pull/1008
* expfmt: add FmtOpenMetrics_2_0_0_rc format constant by @bwplotka in https://github.com/prometheus/common/pull/1020
* expfmt: add ABNF-based OpenMetrics 1.0 parser by @bwplotka in https://github.com/prometheus/common/pull/1015

## New Contributors
* @KR-Ravindra made their first contribution in https://github.com/prometheus/common/pull/1008

*...

🔗 [Link](https://github.com/prometheus/common/releases/tag/v0.73.0)

**Metadata:**
- Version: v0.73.0
- Published: 2026-10-28
- Prerelease: No

### containerd/containerd#14479: seccomp: allow fanotify_init without CAP_SYS_ADMIN in the default profile

### What is the problem you're trying to solve

The default seccomp profile (contrib/seccomp, used for RuntimeDefault in Kubernetes) allows fanotify_init only when the container has CAP_SYS_ADMIN:

https://github.com/containerd/containerd/blob/v2.3.7/contrib/seccomp/seccomp_default.go#L692-L699

Sin...

🔗 [Link](https://github.com/containerd/containerd/issues/14479)

**Metadata:**
- Created: 2026-10-28
- Comments: 0
- State: open

### containerd/rust-extensions: shim-v0.12.0

<!-- Release notes generated using configuration in .github/release.yml at shim-v0.12.0 -->

## What's Changed

### Shim crate
* build(deps): update signal-hook requirement from 0.3.18 to 0.4.4 by @dependabot[bot] in https://github.com/containerd/rust-extensions/pull/470
* test(shim): skip privileged tests without required permissions by @immanuwell in https://github.com/containerd/rust-extensions/pull/477
* build(deps): update sha2 requirement from 0.10 to 0.11 by @dependabot[bot] in htt...

🔗 [Link](https://github.com/containerd/rust-extensions/releases/tag/shim-v0.12.0)

**Metadata:**
- Version: shim-v0.12.0
- Published: 2026-10-28
- Prerelease: No

### containerd/rust-extensions: shim-protos-v0.12.0

<!-- Release notes generated using configuration in .github/release.yml at shim-protos-v0.12.0 -->

## What's Changed

### Shim protos crate
* docs(shim-protos): fix stale README commands by @immanuwell in https://github.com/containerd/rust-extensions/pull/476
* Do not duplicate protos when vendoring by @mxpv in https://github.com/containerd/rust-extensions/pull/487

**Full Changelog**: https://github.com/containerd/rust-extensions/compare/shim-protos-v0.11.0...shim-protos-v0.12.0

🔗 [Link](https://github.com/containerd/rust-extensions/releases/tag/shim-protos-v0.12.0)

**Metadata:**
- Version: shim-protos-v0.12.0
- Published: 2026-10-28
- Prerelease: No

### containerd/rust-extensions: runc-v0.4.0

<!-- Release notes generated using configuration in .github/release.yml at runc-v0.4.0 -->

## What's Changed
### Runc crate
* Update nix to 0.30 by @mxpv in https://github.com/containerd/rust-extensions/pull/430
* deps: Disable dependency `default-features` by default; upgrade dependencies to latest by @bryantbiggs in https://github.com/containerd/rust-extensions/pull/454
* docs(runc): fix async README example by @immanuwell in https://github.com/containerd/rust-extensions/pull/479
* Swi...

🔗 [Link](https://github.com/containerd/rust-extensions/releases/tag/runc-v0.4.0)

**Metadata:**
- Version: runc-v0.4.0
- Published: 2026-10-28
- Prerelease: No

### cncf/toc#2350: [Initiative]: Scheduler Capabilities Whitepaper

### Name

Scheduler Capabilities Whitepaper

### Short description

Write a way to characterize schedulers for batch workloads

### Responsible group

TAG Workloads Foundation

### Does the initiative belong to a subproject?

Yes

### Subproject name

Batch Subproject

### Primary contact

@catblade...

🔗 [Link](https://github.com/cncf/toc/issues/2350)

**Metadata:**
- Created: 2026-10-29
- Comments: 0
- State: open


---

*This content was automatically collected on 2026-10-29 04:19:39*
