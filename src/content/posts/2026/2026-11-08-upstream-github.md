---
title: "Upstream Github - 2026-11-08"
description: "CNCF upstream activity from github"
pubDate: 2026-11-08
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "sig/scheduling", "sig/node", "pr", "area/test", "size/L", "kind/feature", "release-note-none", "cncf-cla: yes", "sig/testing", "needs-priority", "triage/accepted", "kind/documentation", "size/XS", "kind/api-change", "needs-ok-to-test", "area/code-generation", "do-not-merge/needs-sig", "kind/cleanup", "area/apiserver", "size/M", "approved", "release-note", "size/S", "area/kubelet", "sig/scalability", "size/XL", "sig/apps", "ok-to-test", "wg/device-management", "sig/autoscaling", "size/XXL", "do-not-merge/release-note-label-needed", "do-not-merge/work-in-progress", "do-not-merge/needs-kind", "area/api-validation", "lgtm", "minikube", "sig/docs", "area/web-development", "website", "language/en", "area/vertical-pod-autoscaler", "autoscaler", "area/helm-charts", "area/cluster-autoscaler", "area/provider/huaweicloud", "git-sync", "area/documentation", "kops"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#143932: Add integration tests for reading storage-compressed values

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

Part of KEP-6264. This adds integration tests in `test/integration/controlplane/transformation` for the storage compression read path from #143882. They plant raw values in etcd to cover the KE...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143932)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143924: [sig-apps, sig-api-machinery] Migrate Job.Spec.Selector to declarative validation

#### What type of PR is this?

/kind feature
/sig apps
/sig api-machinery

#### What this PR does / why we need it:

Migrates `Job.Spec.Selector` immutability from handwritten validation to Declarative Validation, following the "Good First Migration" initiative outlined in #136785 (KEP-5073):

- Tag...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143924)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143914: resource: graduate ResourceClaim status declarative validation to stable

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Graduates the `ResourceClaim` status declarative validation rules from beta to stable, per KEP-5073, and deletes the handwritten checks they cover. This is the first of three PRs for `ResourceClaim`, split by whi...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143914)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10637: fix huaweicloud provider

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
/kind regression
-->

###...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10637)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#143927: metav1.ParseToLabelSelector silently drops conflicting equality requirements on the same key

### What happened?

`metav1.ParseToLabelSelector("tier=db,tier=web")` returns `MatchLabels{tier: web}` with no error. Converted back via `LabelSelectorAsSelector`, that selector matches `{tier: web}`.

`labels.Parse("tier=db,tier=web")` keeps both requirements, so the selector is a contradiction and...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143927)

**Metadata:**
- Created: 2026-11-07
- Comments: 3
- State: open

### kubernetes/kubernetes#143921: [sig-scheduling] Default preemption plugin evicts partial gang-scheduling members causing cluster-wide task deadlock

<!-- Please use this template for reporting bugs. If you have a question or need support, please reach out to the community via Slack (#kubernetes-users) or the Discuss forum (https://discuss.kubernetes.io/). -->

/kind bug
/sig scheduling

### What happened?

When a high-priority batch workload tri...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143921)

**Metadata:**
- Created: 2026-11-07
- Comments: 2
- State: open

### kubernetes/kubernetes#143920: [sig-node] Device Manager checkpoint state desynchronizes when container fails admission after Allocate()

<!-- Please use this template for reporting bugs. If you have a question or need support, please reach out to the community via Slack (#kubernetes-users) or the Discuss forum (https://discuss.kubernetes.io/). -->

/kind bug
/sig node

### What happened?

During Pod admission in kubelet, `devicemanag...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/143920)

**Metadata:**
- Created: 2026-11-07
- Comments: 2
- State: open

### kubernetes/kubernetes#143931: Update descriptions for Binding

#### What type of PR is this?
/kind documentation


#### What this PR does / why we need it:

Updated description for Binding and target (for Binding object) in API docs. Specifies that Binding assigns a pod to a node. Regenerated with hack/update-codegen.sh and hack/update-openapi-spec.sh.

**Descr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143931)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143930: Precomputed matchedValues to remove dependency on client context and allow passing background context

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

No, that's on me


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143930)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143929: wsstream: return from Reader.Copy when the handshake is rejected

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`wsstream.Reader.Copy` starts `websocket.Server.ServeHTTP` in a goroutine and waits on `r.err`, which only the websocket handler sends on and closes. When the handshake is rejected (an unsupported subprotocol, an uns...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143929)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143928: metav1: error on conflicting equalities in ParseToLabelSelector

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/de...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143928)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143926: kubelet: normalize CRI PSI totals to microseconds

#### What type of PR is this?
/kind bug
/sig node
/area kubelet

#### What this PR does / why we need it:
Normalizes CRI PSI total counters from nanoseconds to microseconds in the kubelet summary conversion helper, matching the GA cAdvisor path and underlying cgroup metrics. Also corrects the PSIDat...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143926)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143925: Batch the writes of a backlogged watch

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143925)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143923: Preserve stored opaque parameter bytes on metadata-only ResourceClaim updates

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Opaque device parameters are stored in etcd exactly as the client sent them. If that JSON isn't canonical — spaces, unsorted keys, e.g. via `kubectl create --raw` or the Python client — then any later update th...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143923)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143922: client-go/workqueue: ignore Pause and Resume after queue shutdown

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a workqueue is shut down while paused, calling `Resume()` cleared `q.paused` and broadcasted on the condition variable. Any subsequent `Get()` call on the shut-down queue would then evaluate `q.paused` as false,...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143922)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143919: Check NodeDeclaredFeatures updates in Kubelet admission

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

When a pod update needs a NodeDeclaredFeature the node doesn't have, the kubelet only emits a warning event and applies the update anyway. This PR moves the check into kubelet admission, so those updates are reje...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143919)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143918: Add id to watcher 

/kind cleanup

```release-note
NONE
```

#### AI usage disclosure:

Yes


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143918)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#143917: Carry a per-resource compression Rule to every etcd3 store

server.Config.StorageCompressionRules reaches stores through a REST options getter decorator, as encryption does, including custom resources. Nothing sets it yet, so every store still gets the zero Rule.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143917)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#143916: Fix resource version handling for single-object lists with a limit

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

List requests with a limit, a non-zero resourceVersion, and no resourceVersionMatch use legacy exact-match semantics. However, when field selectors identify a single object, the non-recursive storage read ignores the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/143916)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24003: Kicbase: Bump debian:trixie from 20261027 to 20261104

The debian:trixie image released a new version

This PR was auto-generated by `make update-debian-version` using [update-debian-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-debian-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/24003)

**Metadata:**
- Created: 2026-11-08
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24001: Bump Kubernetes version default: v1.37.2 and latest: v1.38.0-beta.0

This PR was auto-generated by `make update-kubernetes-version` using [update-k8s-versions.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-k8s-versions.yml) CI Workflow.
Please only merge if all the tests pass.

```
 M pkg/minikube/constants/constants.go
 M site/conte...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24001)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#59106: Implement strict Hugo checks in the CICD pipeline

Currently, when configuration files (such as `hugo.toml`, `netlify.toml`, or i18n configuration files) are modified the pipeline does not enforce a strict Hugo validation. This allows configuration errors or missing variables to slip into the `main` branch, which can break site builds and cause sile...

🔗 [Link](https://github.com/kubernetes/website/issues/59106)

**Metadata:**
- Created: 2026-11-07
- Comments: 3
- State: open

### kubernetes/website#59109: fix: Fix broken links and anchors in contributor documentation

### What type of PR is this?
/kind documentation

- In `for-approvers.md`, the links for reviewers and approvers were pointing to `#reviewers` and `#approvers` on `/docs/contribute/participate/`. Those role sections are currently on `/docs/contribute/participate/roles-and-responsibilities/`, so clic...

🔗 [Link](https://github.com/kubernetes/website/pull/59109)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10640: [VPA] Skip CPU startup boost when no CPU request or recommendation exists

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

I noticed that if a VPA was set to "Off" (or no recommendation was generated yet) and a Pod's CPU requests were set to zero, a bug would occur causing the unboost logic to fail and retry repeatedly. 
It seems that th...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10640)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10639: [VPA] Manage metrics-server with renovate

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

I noticed we hardcode the metrics-server version here.
This change moves it under control of renovate, making it easier for us to upgrade


#### Which issue(s) this PR fixes:
<!--
*Automatically closes linked iss...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10639)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10638: VPA Helm chart: Add a top-level feature-gates value

#### What type of PR is this?

/kind feature


#### What this PR does / why we need it:

Rather than expecting the user to set a feature gate per component, this
adds a dedicated values file to enable and disable flags across all
components.

I wanted to quickly test CPUStartupBoost on my local and ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10638)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/git-sync#1012: Git lfs e2e

/kind feature
### What does this PR do?

Implement git lfs so that git sync is compatible with repo using git-lfs (in v4):

1. Added a flag `--git-lfs` (env : GITSYNC_GIT_LFS), false by default.
2. Added test server in `_test_tools/lfs-server/` 
3. Added dependency in dockerfile.in : `-p git-lfs` so...

🔗 [Link](https://github.com/kubernetes/git-sync/pull/1012)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#19008: WIP Default to cluster-autoscaler v1.37.0 for k8s 1.34+ and v1.34.6 for older

🔗 [Link](https://github.com/kubernetes/kops/pull/19008)

**Metadata:**
- Created: 2026-11-07
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-11-08 04:21:36*
