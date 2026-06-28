---
title: "Upstream Github - 2026-06-28"
description: "CNCF upstream activity from github"
pubDate: 2026-06-28
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/failing-test", "needs-triage", "pr", "area/kubectl", "release-note", "size/XL", "kind/feature", "sig/cli", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/work-in-progress", "needs-priority", "area/test", "size/XS", "release-note-none", "sig/testing", "ok-to-test", "sig/network", "kind/cleanup", "area/kube-proxy", "size/S", "website", "area/cluster-autoscaler", "area/provider/azure", "size/L", "approved", "kind/bug", "autoscaler", "prometheus", "release", "procfs"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#140055: ci-kubernetes-e2e-kind-rootless failing since 2026-06-26 (`PLR Pod InPlace Resize`)

### Which jobs are failing?

ci-kubernetes-e2e-kind-rootless

### Which tests are failing?

`Kubernetes e2e suite: [It] [sig-node] PLR Pod InPlace Resize [FeatureGate:InPlacePodLevelResourcesVerticalScaling] PLR guaranteed qos `

### Since when has it been failing?

2026-06-26 22:03 UTC.

The last s...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140055)

**Metadata:**
- Created: 2026-06-27
- Comments: 5
- State: open

### kubernetes/kubernetes#140058: [WIP not ready for review] kubectl explain: add auto completion

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140058)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140057: test/e2e_node: skip PLR guaranteed QoS tests in UserNS

/kind failing-test

#### What this PR does / why we need it:
The PLR guaranteed QoS tests fail in rootless/UserNS environments
because oom_score_adj cannot be decreased inside a User Namespace.
containerd restricts this via RestrictOOMScoreAdj.

Adds environment.NotInUserNS to the two Ginkgo ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140057)

**Metadata:**
- Created: 2026-06-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140056: Strip managedFields in kube-proxy informers to reduce informer cache size

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

Strip managedFields from objects received in informers to reduce on cache size

#### Which issue(s) this PR is related to:

N/A

#### Special notes for your reviewer:

#### Does this PR introduce a ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140056)

**Metadata:**
- Created: 2026-06-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56282: kubelet

🔗 [Link](https://github.com/kubernetes/website/issues/56282)

**Metadata:**
- Created: 2026-06-28
- Comments: 2
- State: open

### kubernetes/autoscaler#9881: [cluster-autoscaler-release-1.35] fix(azure): VMSS size cache handling after delete failures

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Manual cherry-pick of #9779 into `cluster-autoscaler-release-1.35`.

This hardens Azure VMSS target-size bookkeeping around failed or uncertain delete operations. It prevents target-size panics when cached VM...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9881)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9880: [cluster-autoscaler-release-1.34] fix(azure): VMSS size cache handling after delete failures

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Manual cherry-pick of #9779 into `cluster-autoscaler-release-1.34`.

This hardens Azure VMSS target-size bookkeeping around failed or uncertain delete operations. It prevents target-size panics when cached VM...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9880)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#9879: [cluster-autoscaler-release-1.33] fix(azure): VMSS size cache handling after delete failures

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Manual cherry-pick of #9779 into `cluster-autoscaler-release-1.33`.

This hardens Azure VMSS target-size bookkeeping around failed or uncertain delete operations. It prevents target-size panics when cached VM...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/9879)

**Metadata:**
- Created: 2026-06-28
- Comments: undefined
- State: open
- Draft: No

### prometheus/procfs: v0.21.0

## What's Changed
* Refactor class thermal error handling by @SuperQ in https://github.com/prometheus/procfs/pull/794
* build(deps): bump actions/setup-go from 6.2.0 to 6.3.0 by @dependabot[bot] in https://github.com/prometheus/procfs/pull/790
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/procfs/pull/798
* build(deps): bump golang.org/x/sync from 0.19.0 to 0.20.0 by @dependabot[bot] in https://github.com/prometheus/procfs/pull/800
* build...

🔗 [Link](https://github.com/prometheus/procfs/releases/tag/v0.21.0)

**Metadata:**
- Version: v0.21.0
- Published: 2026-06-27
- Prerelease: No


---

*This content was automatically collected on 2026-06-28 03:35:34*
