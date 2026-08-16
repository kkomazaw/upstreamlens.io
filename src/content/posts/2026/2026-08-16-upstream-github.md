---
title: "Upstream Github - 2026-08-16"
description: "CNCF upstream activity from github"
pubDate: 2026-08-16
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/api-machinery", "needs-triage", "pr", "sig/scheduling", "sig/node", "size/XXL", "kind/api-change", "kind/feature", "release-note-none", "sig/auth", "sig/apps", "approved", "cncf-cla: yes", "area/code-generation", "needs-priority", "wg/device-management", "release-note", "size/L", "needs-ok-to-test", "kind/cleanup", "sig/storage", "size/XS", "ok-to-test", "do-not-merge/release-note-label-needed", "size/M", "cncf-cla: no", "kind/regression", "lgtm", "area/provider/digitalocean", "kops", "release", "registry.k8s.io", "minikube", "area/cluster-autoscaler", "area/provider/aws", "autoscaler", "size/S", "do-not-merge/invalid-commit-message", "area/provider/gce", "language/ko", "area/localization", "website", "sig/docs", "language/en", "language/ja", "language/zh", "language/de", "language/es", "area/blog", "do-not-merge/hold", "do-not-merge/work-in-progress", "sig/testing", "sig/cluster-lifecycle", "area/jobs", "area/config", "test-infra", "envoyproxy", "gateway"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#141388: Strategic merge patch conflict detection fails with an internal schema-lookup error on $deleteFromPrimitiveList/<field> (kubectl apply --overwrite=false)

### What happened?

`strategicpatch.CreateThreeWayMergePatch` with `overwrite=false` fails with an internal schema-lookup error when the computed patch deletes an element from a **primitive list field with `patchStrategy: merge`** and the live object has *also* already dropped that element (i.e. the...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/141388)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/kubernetes#141395: validation-gen: allow configurable deep-equal function

This allows outside users to define their own deep-equal semantics (e.g. protobuf-safe).

This builds on #141383

1) allow deep-equal to be defined by a tag.
2) Deprecate validate.SemanticDeepEqual
3) Fix last direct user of DeepEqual in apimachinery validate pkg

/kind feature
/kind api-ch...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141395)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141394: Support for Inline fields in Go to Protobuf

The PR flattens all the fields in the packages before the creation of the Proto files by this way it prevents the inline fields from losing their inline properties during the Proto serialization.

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first tim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141394)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141393: Fix PVC deletion error namespace/name formatting

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141393)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141392: scheduler: populate pod NodeUID during binding

#### What type of PR is this?

/kind feature
/kind api-change

#### What this PR does / why we need it:

This PR adds an optional `NodeUID` field to `PodSpec` and populates it during pod binding.

The scheduler records the UID of the target Node when the default binder binds a pod. This all...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141392)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141391: client-go: disambiguate colliding Event names on coarse timers

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it

`GenerateEventName` builds an Event's `Name` from the referenced object's name and `time.Now().UnixNano()`. On timers with coarse resolution (seen on Windows, where `time.Now()` can tick in ~0.5-15ms steps), two `Even...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141391)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141390: Fix strategic merge patch conflict detection for primitive list directives

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Fixes strategic merge patch conflict detection for primitive list fields using `patchStrategy: merge`.

`strategicpatch.CreateThreeWayMergePatch` can emit the synthetic directive keys `$deleteFromP...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141390)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141387: scheduler: fix shadowed feature flags in NodeResourcesFit

#### What type of PR is this?

/kind bug
/kind regression
/sig scheduling

#### What this PR does / why we need it:

`Fit` declares four feature-gate booleans and *also* embeds `*resourceAllocationScorer`, which declares the same four names:

https://github.com/kubernetes/kubernetes/blob/a231bf3f377...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141387)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141386: job: fix delegated PodGroup creation window closing prematurely

## What type of PR is this?
/kind bug

## What this PR does / why we need it
`isNewJob()` gates delegated-PodGroup creation on `job.Status.StartTime` and
the `Suspended` condition, both of which `syncJob()` writes during the Job's
first reconcile — the same sync that evaluates `isNewJob()`. That mak...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141386)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#141385: Remove optimistic MountedByNode default in AddVolumeNode

#### What type of PR is this?

/kind bug
/kind cleanup

#### What this PR does / why we need it:

`AddVolumeNode` seeded `inUseVolumes` with the volume on first attach, defaulting `MountedByNode` to `true` until node status proved otherwise. This inference dates to before #122411 ("ad control...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/141385)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kops#18697: digitalocean: delete SSH keys when deleting a cluster

kops uploads an SSH key to the DigitalOcean account for every cluster (`dotasks/sshkey.go` `createKeypair` → `KeysService().Create`), naming it `kubernetes.<cluster name>-<fingerprint>` per `pkg/model/names.go`. But `pkg/resources/digitalocean/resources.go` only deletes `droplet`, `volume`, `dns-rec...

🔗 [Link](https://github.com/kubernetes/kops/pull/18697)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/registry.k8s.io: v0.7.0

## What's Changed
* use a dedicated cloudbuild service account by @upodroid in https://github.com/kubernetes/registry.k8s.io/pull/325
* bump deps, regenerate addresses and use the new AWS CDN by @upodroid in https://github.com/kubernetes/registry.k8s.io/pull/328
* add azure ip ranges for analytics purposes by @upodroid in https://github.com/kubernetes/registry.k8s.io/pull/330
* add analytics capability to archeio by @upodroid in https://github.com/kubernetes/registry.k8s.io/pull/329
* add a...

🔗 [Link](https://github.com/kubernetes/registry.k8s.io/releases/tag/v0.7.0)

**Metadata:**
- Version: v0.7.0
- Published: 2026-08-15
- Prerelease: No

### kubernetes/minikube#23493: Addon cloud-spanner: Update cloud-spanner-emulator/emulator image from 1.5.55 to 1.5.56

The cloud-spanner-emulator project released a [new version](https://github.com/GoogleCloudPlatform/cloud-spanner-emulator)

This PR was auto-generated by `make update-cloud-spanner-emulator-version` using [update-cloud-spanner-emulator-version.yml](https://github.com/kubernetes/minikube/tree/master/...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23493)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10147: [AWS] Race condition in placeholder reconciliation (#6911) still allows termination of healthy, running instances

**Which component are you using?**:
cluster-autoscaler

**What version of the component are you using?**:
cluster-autoscaler version: v1.33.4
Component version: chart cluster-autoscaler-9.56.0

**What k8s version are you using (`kubectl version`)?**:
```
Client Version: v1.32.3
Kustomize Version: v5...

🔗 [Link](https://github.com/kubernetes/autoscaler/issues/10147)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/autoscaler#10149: Report terminating instances as gone in AWS HasInstance

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Implements the AWS provider part of the `HasInstance()` quick-fix instructions from #9877.

Today the AWS `HasInstance()` returns true for any instance present in the ASG cache, regardless of its state. After `NodeGr...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10149)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10148: Fix non-linux builds of the kubemark cloud provider

**What type of PR is this?**

/kind bug

**What this PR does / why we need it:**

`go build ./...` in `cluster-autoscaler` fails on any non-linux platform:

```
cloudprovider/kubemark/kubemark_other.go:37:32: undefined: ProviderName
cloudprovider/kubemark/kubemark_other.go:40:34: undefined: Provider...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10148)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10146: cluster-autoscaler: add SAKURA cloud (sakuracloud) cloud provider

**What type of PR is this?**

/kind feature
/area cluster-autoscaler
/area provider/sakuracloud

**What this PR does / why we need it**:

Adds a cloud provider for [SAKURA cloud](https://cloud.sakura.ad.jp/) (sakura.ad.jp), a Japanese IaaS. SAKURA cloud has no instance-group / ASG primitive, so the ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10146)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10145: cluster-autoscaler: GCE NodeGroupForNode returns nil for foreign providerIDs

**What type of PR is this?**

/kind bug

**What this PR does / why we need it**:

In mixed-provider clusters (e.g. a self-hosted control plane whose node has a non-GCE providerID such as `k3s://...`, or worker nodes from other clouds), `GceCloudProvider.NodeGroupForNode` returns the providerID parse...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10145)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57004: [ko] Translate content/en/docs/tasks/debug/monitoring/_index.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57004)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/website#57003: [ko] Update /ko/docs/concepts/overview/_index.md to match en contents

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57003)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/website#56995: [ko] Update content/ko/docs/tasks/inject-data-application/define-environment-variable-container.md

**This is a Feature Request**

**What would you like to be added**

Update the Korean translation of `content/ko/docs/tasks/inject-data-application/define-environment-variable-container.md` to match the latest English version.

**Website Link**

- Korean: https://kubernetes.io/ko/docs/tasks/inject-d...

🔗 [Link](https://github.com/kubernetes/website/issues/56995)

**Metadata:**
- Created: 2026-08-15
- Comments: 1
- State: open

### kubernetes/website#56998: Merge main branch into dev-1.37

Description
Weekly branch sync PR: merges main into dev-1.37

cc: @chadmcrowell @singh1203 @kernel-kun @jmickey @yashasvimisra2798

🔗 [Link](https://github.com/kubernetes/website/pull/56998)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#56997: [ja] Translate content/en/docs/reference/glossary/ephemeral-container.md into Japanese

### Description

Translated `content/en/docs/reference/glossary/ephemeral-container.md` into Japanese: `content/ja/docs/reference/glossary/ephemeral-container.md`.

**Website Link**:

- English: https://kubernetes.io/docs/reference/glossary/?all=true#term-ephemeral-container

### Issue

Closes: #567...

🔗 [Link](https://github.com/kubernetes/website/pull/56997)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37690: kops: drop preset-do-ssh from DigitalOcean jobs

> [!WARNING]
> **Blocked — do not merge yet.** kops does not delete DigitalOcean SSH keys on cluster teardown, so this would leak one key per cluster run into the shared DO test account. Details below. `/hold`

Follows the AWS switch in #37687. With `DO_SSH_PRIVATE_KEY_FILE` / `DO_SSH_PUBLIC_KEY_FIL...

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37690)

**Metadata:**
- Created: 2026-08-15
- Comments: undefined
- State: open
- Draft: Yes

### envoyproxy/gateway: v1.9.0

# Release Announcement

Check out the [v1.9.0 release announcement](https://gateway.envoyproxy.io/news/releases/notes/v1.9.0/) to learn more about the release.

## What's Changed
* Add Flux installation guide by @matheuscscp in https://github.com/envoyproxy/gateway/pull/8864
* fix(api): increase RateLimitSelectCondition.headers MaxItems from 16 to 64 by @wucm667 in https://github.com/envoyproxy/gateway/pull/8906
* skip invalid listener first in IR by @zirain in https://github.com/envoypro...

🔗 [Link](https://github.com/envoyproxy/gateway/releases/tag/v1.9.0)

**Metadata:**
- Version: v1.9.0
- Published: 2026-08-15
- Prerelease: No


---

*This content was automatically collected on 2026-08-16 01:07:55*
