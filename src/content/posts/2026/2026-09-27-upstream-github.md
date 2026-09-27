---
title: "Upstream Github - 2026-09-27"
description: "CNCF upstream activity from github"
pubDate: 2026-09-27
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "sig/node", "kind/flake", "sig/testing", "priority/important-longterm", "needs-triage", "wg/device-management", "kind/bug", "pr", "sig/api-machinery", "size/M", "release-note-none", "cncf-cla: yes", "needs-priority", "area/kubelet", "kind/cleanup", "size/S", "approved", "do-not-merge/work-in-progress", "sig/scheduling", "area/kubectl", "sig/cli", "area/dependency", "kind/dependency", "sig/network", "area/kube-proxy", "area/apiserver", "area/cloudprovider", "sig/storage", "sig/cluster-lifecycle", "size/XL", "sig/auth", "sig/instrumentation", "sig/architecture", "area/code-generation", "sig/cloud-provider", "size/L", "kind/feature", "kind/documentation", "kind/api-change", "sig/apps", "area/test", "size/XS", "release-note", "needs-ok-to-test", "area/cluster-autoscaler", "area/vertical-pod-autoscaler", "area/provider/aws", "area/provider/azure", "area/provider/cluster-api", "area/provider/externalgrpc", "area/provider/oci", "autoscaler", "language/fa", "area/localization", "website"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10358: Fix typos across cluster-autoscaler and vpa markdown files



Fixes typos found by **codespell** across README, FAQ, and proposal docs in cluster-autoscaler, vertical-pod-autoscaler and multidimensional-pod-autoscaler. No code or behavior changes, docs-only readability fixes.

/kind documentation
/kind cleanup
```release-note
NONE
```



<!-- This ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10358)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142440: [Flaking Test] [sig-node] pull-kubernetes-kind-dra-all API timeouts

### Which jobs are flaking?

pull-kubernetes-kind-dra-all, an optional presubmit. The periodic ci-kind-dra-all has not shown this in two weeks.

Triage: https://storage.googleapis.com/k8s-triage/index.html?pr=1&job=pull-kubernetes-kind-dra-all%24&text=TLS%20handshake%20timeout%7Chttp2%3A%20client%20...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142440)

**Metadata:**
- Created: 2026-09-26
- Comments: 4
- State: open

### kubernetes/kubernetes#142439: kubelet: cAdvisor GetVfsStats data race in a race-enabled DRA presubmit

### What happened?

The race-enabled `pull-kubernetes-kind-dra-all` presubmit reported a data race in the cAdvisor filesystem statistics code that the kubelet uses, and the suite's `[ReportAfterSuite] [sig-testing] Log Check` failed on it.

Observed run: https://prow.k8s.io/view/gs/kubernetes-ci-log...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142439)

**Metadata:**
- Created: 2026-09-26
- Comments: 3
- State: open

### kubernetes/kubernetes#142452: resource: accept zero with a MinInt32 exponent

#### What type of PR is this?

/kind bug
/sig api-machinery

#### What this PR does / why we need it:

Before this PR, these fail to parse:

```go
resource.ParseQuantity("0e2147483648")                       // ErrSuffix
resource.ParseQuantity("-0e2147483648")                      // ErrSuffix
resou...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142452)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142451: Drop testify from k8s.io/cri-api

#### What type of PR is this?

/kind cleanup

#### What this PR does / why we need it:

`k8s.io/cri-api` required testify for one `assert.Contains` in the fake image service. A `proto.Equal` loop replaces it, and testify with its `go.yaml.in/yaml/v3` indirect leaves the go.mod of a module that conta...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142451)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142450: Bump gomega to v1.44.0

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bumps `github.com/onsi/gomega` v1.43.1 to v1.44.0. Matcher fixes only: `BeNumerically` compares signed and unsigned integers by value and honours the float threshold, `HaveKeyWithValue` no longer depends on ma...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142450)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142449: Bump coredns/caddy to v1.1.4 and gettext-go to v1.0.3

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

- `github.com/coredns/caddy` v1.1.1 to v1.1.4: Corefile parser guards (snippet import cycle detection, expansion caps, a `NextBlock()` EOF loop fix, nested-block handling). kubeadm parses the kube-system CoreD...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142449)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142448: Bump go-openapi jsonpointer, jsonreference to v1.0.2 and swag to v0.29.2

#### What type of PR is this?

/kind dependency

#### What this PR does / why we need it:

Bumps `github.com/go-openapi/jsonpointer` and `jsonreference` v1.0.0 to v1.0.2, and `swag` with its 11 submodules v0.27.1 to v0.29.2.

jsonpointer v1.0.2 fixes two uncaught panics: GHSA-cqr7-r6x2-9cqf (default...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142448)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: Yes

### kubernetes/kubernetes#142447: Add an OptionGetter interface to Operation

This allows us to keep a single map with all the values without fear of it being mutated.

I'd like to use this in external projects.

/kind feature

```release-note
NONE
```


🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142447)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142446: Fix terminationGracePeriodSeconds docs

#### What type of PR is this?

/kind documentation
/sig node

#### What this PR does / why we need it:

The pod field says zero means "stop immediately via the kill signal (no opportunity to shut down)". The kubelet does not do that. `pkg/kubelet/pod_workers.go`:

```go
	// no matter what, we always...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142446)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142445: DRA test driver: drop grace period 0 from pod-inline example

#### What type of PR is this?

/kind cleanup
/sig node
/wg device-management

#### What this PR does / why we need it:

`test/e2e/dra/test-driver/deploy/example/pod-inline.yaml` still has

```yaml
  terminationGracePeriodSeconds: 0 # Shut down immediately.
```

With 0, deleting the example pod remov...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142445)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142444: Warn when terminationGracePeriodSeconds is 0

#### What type of PR is this?

/kind feature
/sig node

#### What this PR does / why we need it:

A delete request that does not set a grace period uses the pod's `terminationGracePeriodSeconds` (`pkg/registry/core/pod/strategy.go`):

```go
	// user has specified a value
	if options.GracePeriodSecon...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142444)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142443: Check the new template in ReplicationController update warnings

#### What type of PR is this?

/kind bug
/sig apps

#### What this PR does / why we need it:

`rcStrategy.WarningsOnUpdate` passes the templates in the wrong order:

```go
		warnings = pod.GetWarningsForPodTemplate(ctx, field.NewPath("spec", "template"), oldRc.Spec.Template, newRc.Spec.Template)
```...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142443)

**Metadata:**
- Created: 2026-09-27
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142442: dependencyverifier: record indirect-only unwanted modules

The nil check inside the referencer loop tested the map that the code above had just created, so it never ran. An unwanted module whose only referencers are main modules listing it as an indirect dependency got no status.unwantedReferences key at all. google/btree, vendored through peterbourgon/disk...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142442)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142441: kubelet: apply CrashLoopBackOff to pre-start container failures

#### What type of PR is this?

/kind bug
/sig node

#### What this PR does / why we need it:

When a container fails before reaching a running or exited state (e.g. CRI `CreateContainer` rejection due to resource limits below runtime floor, or pre-start hook failures), kubelet historically sk...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142441)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142438: kubectl events: keep table rows when messages contain newlines

/kind bug

`kubectl events` prints a tabwriter row per event. A newline in the message ends the row, so a failed exec probe shows up as extra lines with no columns. `kubectl get events` already cuts the cell at the first break character.

Same cut here, and the rest of the message stays available in...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142438)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142437: Only trace WatchServer.HandleHTTP for WatchList

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#your-first-contribution and developer guide https://git.k8s.io/community/contributors/...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142437)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142436: kubectl: write missing label warnings to stderr

#### What type of PR is this?

/kind bug
/sig cli

#### What this PR does / why we need it:

If `missing` is not a label on pod `foo`, running `kubectl label pod foo missing- -o json` prints `label "missing" not found.` before the JSON. This makes the output invalid for tools that read it from a pip...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142436)

**Metadata:**
- Created: 2026-09-26
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57738: [fa] Translate content/en/docs/setup/production-environment/container-runtimes.md into Persian

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/container-runtimes.md` into Persian

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/container-runtimes/

**Why is this needed**

This page...

🔗 [Link](https://github.com/kubernetes/website/issues/57738)

**Metadata:**
- Created: 2026-09-26
- Comments: 1
- State: open


---

*This content was automatically collected on 2026-09-27 03:35:24*
