---
title: "Upstream Github - 2026-10-04"
description: "CNCF upstream activity from github"
pubDate: 2026-10-04
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/api-machinery", "needs-triage", "pr", "kind/cleanup", "sig/cluster-lifecycle", "size/XL", "release-note-none", "approved", "area/kubeadm", "cncf-cla: yes", "do-not-merge/work-in-progress", "needs-priority", "area/apiserver", "release-note", "size/L", "sig/auth", "area/kubelet", "sig/scheduling", "sig/node", "size/XXL", "area/test", "sig/storage", "size/M", "kind/flake", "sig/testing", "kind/bug", "needs-ok-to-test", "sig/apps", "kind/feature", "language/ko", "area/localization", "website"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## Updates

### kubernetes/kubernetes#142651: apimachinery yaml: YAMLOrJSONDecoder drops a trailing document shorter than 4 bytes

### What happened?

`YAMLOrJSONDecoder` fails to decode a document when fewer than 4 bytes remain in the stream. The same document decodes correctly if a single trailing space is added.

```
"{a}"          len=3  ->  error: json: offset 2: invalid character 'a' looking for beginning of object key st...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142651)

**Metadata:**
- Created: 2026-10-03
- Comments: 1
- State: open

### kubernetes/kubernetes#142656: [WIP] kubeadm: replace the dry-run fake clientset with a RoundTripper

#### What type of PR is this?

/kind cleanup
/sig cluster-lifecycle
/area kubeadm

#### What this PR does / why we need it:

The dry-run client becomes a real clientset over an in-process `http.RoundTripper` that maps each request to a `client-go/testing` Action and runs the existing reactor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142656)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142655: [WIP] apiserver: keep CEL out of the webhook authorizer and authorizerfactory

#### What type of PR is this?

/kind cleanup
/sig auth
/sig api-machinery

#### What this PR does / why we need it:

`authorizerfactory` and the webhook authorizer imported `authorization/cel` and `apis/apiserver/validation` to compile match conditions, so the kubelet linked cel-go and antlr for con...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142655)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142654: [WIP] scheduler: move AdmissionCheck to a DRA-free package for the kubelet

#### What type of PR is this?

/kind cleanup
/sig scheduling
/sig node

#### What this PR does / why we need it:

Moves `Fits` and its types to `plugins/helper` and `AdmissionCheck` to `framework/admission`, so the kubelet no longer imports the root `pkg/scheduler` package with the plugin registry, ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142654)

**Metadata:**
- Created: 2026-10-04
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142653: e2e podlogs: stop busy-looping when the pod watch ends permanently

#### What type of PR is this?

/kind flake

#### What this PR does / why we need it:

#142127 switched CopyPodLogs to a RetryWatcher so a dropped Pods watch reconnects internally instead of reaching the select loop as a closed channel. That covers a recoverable blip.

A RetryWatcher still closes its...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142653)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142652: apimachinery yaml: keep the bytes ReadN returns with io.EOF

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`YAMLOrJSONDecoder` decoded a document or not depending on its length. `{a}` failed; `{a} ` -- the same document with one trailing space -- succeeded.

`consumeWhitespace` reads four bytes at a time and discarded a s...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142652)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142650: Deployment: surface old RS scale-down errors for workqueue retry

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`reconcileOldReplicaSets` ignored errors from `cleanupUnhealthyReplicas` and `scaleDownOldReplicaSetsForRollingUpdate` by returning `false, nil`. When an old ReplicaSet scale-down failed during a rolling update...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142650)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142649: Expand test coverage for Quantity.ToDec

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

This expands test cases to provide significantly more coverage of the `ToDec` (and `AsDec`) functions, with a heavy focus on behavior across both the `int64` and `Dec` representations of `Quantity`.

`ToDec()` pr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142649)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142648: apiserver: gzip streamed pods/log responses

#### What type of PR is this?

/kind feature
/sig api-machinery

#### What this PR does / why we need it:

The API server does not compress Pod logs. When a client sends `Accept-Encoding: gzip`, the API server compresses API objects, but it sends the output of `pods/log` as-is. The cause is `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142648)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142647: kubelet: reset container memory.high to max when request equals limit

### What type of PR is this?

/kind bug
/sig node
/area kubelet

### What this PR does / why we need it:

With MemoryQoS enforced, `generateLinuxContainerResources` omits
`memory.high` from the container's Unified cgroup settings once the
container's memory request equals its limit. Runtim...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142647)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142646: topologymanager: pad bitmask strings at grouping boundaries

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

`BitMask.String()` pads binary output with leading zeros to an even number of digits. The strict width comparison excludes exact boundary values, so a mask containing only bit 2 is rendered as `100` ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142646)

**Metadata:**
- Created: 2026-10-03
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57874: [ko] Update content/ko/docs/tutorials/services/source-ip.md

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57874)

**Metadata:**
- Created: 2026-10-03
- Comments: 1
- State: open

### kubernetes/website#57873: [ko] Translate content/en/blog/_posts/2025/introducing-gateway-api-inference-extension/index.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57873)

**Metadata:**
- Created: 2026-10-03
- Comments: 1
- State: open

### kubernetes/website#57872: [ko] Translate content/en/blog/_posts/2026/experimenting-gateway-api-with-kind.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57872)

**Metadata:**
- Created: 2026-10-03
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-10-04 04:14:57*
