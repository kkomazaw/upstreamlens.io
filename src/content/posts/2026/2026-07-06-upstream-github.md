---
title: "Upstream Github - 2026-07-06"
description: "CNCF upstream activity from github"
pubDate: 2026-07-06
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "area/kubectl", "sig/cli", "needs-triage", "kind/bug", "sig/api-machinery", "pr", "release-note", "size/M", "cncf-cla: yes", "needs-priority", "kind/feature", "needs-ok-to-test", "area/kubelet", "sig/node", "size/L", "kind/cleanup", "sig/storage", "release-note-none", "size/XS", "sig/auth", "sig/apps", "size/S", "kind/api-change", "kind/documentation", "area/apiserver", "sig/instrumentation", "kind/flake", "do-not-merge/release-note-label-needed", "size/XL", "approved", "ok-to-test", "minikube", "sig/testing", "area/jobs", "area/config", "test-infra"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#140236: pod-security-admission: replace deprecated io/ioutil with io and os

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Replaces deprecated `io/ioutil` usage with modern `io` and `os` package equivalents. Since Go 1.16, `io/ioutil` is deprecated and its functions have been moved to the `io` and `os` packages. These are 1:1 mechanical ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140236)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#140243: kubectl port-forward: no way to suppress 'Handling connection for' messages

## What happened?

`kubectl port-forward` unconditionally prints "Handling connection for <port>" to stderr on every connection.  There is no flag to suppress these messages.

For long-running tunnels with frequent connections, this produces a constant stream of noise that buries actual errors on th...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140243)

**Metadata:**
- Created: 2026-07-05
- Comments: 2
- State: open

### kubernetes/kubernetes#140242: kube-apiserver 1.35+ never shuts down on SIGTERM when its identity Lease cannot be created (e.g. hostname longer than 63 bytes)

### What happened?

On hosts with hostnames longer than 63 bytes, `kube-apiserver` does not shut down after `SIGTERM`. It keeps serving until `SIGKILL`.

This reproduces consistently with official v1.35.0 and v1.36.2 binaries on Linux and macOS. v1.34 shuts down normally on the same hosts.

The host...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/140242)

**Metadata:**
- Created: 2026-07-05
- Comments: 3
- State: open

### kubernetes/kubernetes#140241: :bug: fix:(kube-apiserver): hanging forever on SIGTERM when its identity Lease cannot be created (e.g. hostname longer than 63 bytes)

#### What type of PR is this?

/kind bug
/kind regression
/sig api-machinery

#### What this PR does / why we need it:

Since 1.35, kube-apiserver deadlocks on SIGTERM when its identity Lease can never
be created (for example, a hostname longer than the 63-byte label limit). The
lease cont...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140241)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140240: kubectl: surface pod warnings in rollout status

### What type of PR is this?
/kind feature

### What this PR does / why we need it:
Currently, `kubectl rollout status` hangs indefinitely if a deployment is stuck (e.g., due to ImagePullBackOff or Unschedulable pods), leaving developers and CI/CD pipelines in the dark for 10 minutes until the progr...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140240)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140239: kubelet: replace ReasonCache LRU with strict garbage collection

### What type of PR is this?
/kind feature

### What this PR does / why we need it:
This PR implements strict garbage collection for the Kubelet `ReasonCache`, resolving an outstanding `TODO(random-liu)`. The previous implementation used a fixed 1000-item LRU cache, which under heavy load could evic...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140239)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140238: pkg/volume: replace deprecated io/ioutil with os

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Replaces deprecated `io/ioutil` usage with modern `io` and `os` package equivalents. Since Go 1.16, `io/ioutil` is deprecated and its functions have been moved to the `io` and `os` packages. These are 1:1 mechanical ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140238)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140237: pkg/auth, pkg/controller/certificates: replace deprecated io/ioutil with io and os

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Replaces deprecated `io/ioutil` usage with modern `io` and `os` package equivalents. Since Go 1.16, `io/ioutil` is deprecated and its functions have been moved to the `io` and `os` packages. These are 1:1 mechanical ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140237)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140235: apimachinery: replace deprecated io/ioutil with io and os

### What type of PR is this?
/kind cleanup

### What this PR does / why we need it:
Replaces deprecated `io/ioutil` usage with modern `io` and `os` package equivalents. Since Go 1.16, `io/ioutil` is deprecated and its functions have been moved to the `io` and `os` packages. These are 1:1 mechanical ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140235)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140233: flagz: note that endpoint reflects flag layer, not effective config

**What type of PR is this?**

/kind documentation
/sig instrumentation

**What this PR does / why we need it:**

The `/flagz` text response is easily misread as the component's effective running configuration. For components configured via files (kubelet, kube-proxy), flag defaults shown by `/flagz`...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140233)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140232: flake: deflake CR apply during CRD finalization

#### What type of PR is this?

  /kind flake

  #### What this PR does / why we need it:

  This deflakes `TestApplyCRDuringCRDFinalization`.

  The test deletes a CRD, waits for the CRD to report `Terminating=True`, then sends one dry-run SSA apply and expects it to be rejected with:

  `...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140232)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#140231: optimize GC: classifyReferences local cache short-circuit to reduce A…


<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributor...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/140231)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23305: node add: use suggestMemoryAllocation instead of hardcoded 2200MB

minikube node add used a hardcoded memory value of 2200MB when adding the first worker node to a single-node cluster. This is too low for VM drivers which need at least 2500MB due to ISO tmpfs overhead, causing VMs to get stuck during boot.

Replace the hardcoded value with suggestMemoryAllocation...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23305)

**Metadata:**
- Created: 2026-07-06
- Comments: undefined
- State: open
- Draft: No

### kubernetes/test-infra#37393: Bump to kind 1.36.1.

🔗 [Link](https://github.com/kubernetes/test-infra/pull/37393)

**Metadata:**
- Created: 2026-07-05
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-07-06 02:57:14*
