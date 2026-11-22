---
title: "Upstream Github - 2026-11-22"
description: "CNCF upstream activity from github"
pubDate: 2026-11-22
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/storage", "sig/node", "needs-triage", "pr", "size/XS", "kind/api-change", "cncf-cla: yes", "needs-ok-to-test", "do-not-merge/release-note-label-needed", "needs-priority", "do-not-merge/needs-sig", "area/test", "kind/cleanup", "release-note-none", "sig/apps", "sig/testing", "area/kubectl", "sig/api-machinery", "release-note", "size/M", "sig/cli", "cncf-cla: no", "cloud-provider-openstack", "area/vertical-pod-autoscaler", "autoscaler", "size/XXL", "do-not-merge/hold", "approved", "area/balancer", "size/XL", "minikube", "lgtm", "ok-to-test", "kubectl", "kind/feature", "language/ko", "area/localization", "website", "language/ja", "prometheus", "release", "exporter-toolkit"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/autoscaler#10706: VPA: Cleanup extra function call making getContributiveAggregateStateKeys a bit faster.

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
/kin...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10706)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10705: Balancer removal

#### What type of PR is this?
/kind cleanup
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
/kind regres...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10705)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#144389: kubelet: block-mode CSI volume never recovers after one EBUSY — TearDownDevice deletes vol_data.json before the in-use check

### What happened?

A raw block CSI volume can enter a permanent, non-self-healing retry loop after a single transient `EBUSY` from the in-use check in `UnmapDevice`. The volume stays mounted in the actual state of world forever, kubelet retries ~10 times per second, and no restart of kubelet or of ...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/144389)

**Metadata:**
- Created: 2026-11-21
- Comments: 2
- State: open

### kubernetes/kubernetes#144396: Allow metav1.Duration to decode null as zero

#### What type of PR is this?

/kind bug

#### What this PR does

Fixes an inconsistency in `metav1.Duration` unmarshalling: JSON and YAML `null` values currently return an error instead of decoding to a zero duration.

`metav1.Time` and `metav1.MicroTime` already handle null values as zero. This ch...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144396)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144395: test: use agnhost for CronJob e2e tests

#### What type of PR is this?

/kind cleanup
/sig apps testing

#### What this PR does / why we need it:

Use the shared agnhost image for CronJob e2e fixtures as part of the effort to consolidate e2e test images. The scheduled-timestamp test now passes the existing success command explicitly so the...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144395)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144394: jsonpath: don't evaluate the body of an empty range

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

When a jsonpath `{range}` matches nothing, `FindResults` evaluated the range body against `reflect.Value{}` just to find the matching `{end}`. Body nodes that look at the value then misbehave:
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144394)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144393: kubectl set env: fix --from with --selector and --filename

#### What type of PR is this?

/kind bug
/sig cli
/area kubectl

#### What this PR does / why we need it:

`kubectl set env --from=configmap/<name>` (or `secret/<name>`) fails whenever the target workloads are chosen with `-l` or `-f`:

```
$ kubectl set env deployments -l app=web --from=configmap/a...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144393)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144392: hostpath: confine *OrCreate with os.Root

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`hostPath` `DirectoryOrCreate` and `FileOrCreate` used `os.MkdirAll` and `os.OpenFile` on a full host path, following symlinks on intermediate components. With a planted parent symlink, kubelet (root) could cre...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144392)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144391: subpath: use relative path in mkdirat during SafeMakeDir

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`doSafeMakeDir` advances a directory fd with `openat(parentFD, dir, ...)` but called `mkdirat(parentFD, currentPath, ...)` with the **full absolute path**. On Linux, an absolute second argument to `mkdirat` is ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144391)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#144390: kubectl create cronjob: validate restart policy

#### What type of PR is this?
/kind bug
/sig cli

#### What this PR does / why we need it:
In `kubectl create cronjob`, the `--restart` flag help text states:
`job's restart policy. supported values: OnFailure, Never`

However, `CreateCronJobOptions` lacked input validation for `--restart`. When an ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/144390)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/cloud-provider-openstack#3298: [occm] Support loadbalancer flavor selection by name

**What this PR does / why we need it**:

Adds the `loadbalancer.openstack.org/flavor-name` Service annotation. Octavia's create call only accepts `flavor_id`, so today users have to look up and hard-code the flavor UUID, which differs per cloud or region (in our case). With this change the name is r...

🔗 [Link](https://github.com/kubernetes/cloud-provider-openstack/pull/3298)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24114: kicbase: Eliminate generate-docs from kicbase workflow

## Goal

Remove `make generate-docs` from the kicbase update workflow. That job runs
untrusted PR code with repository secrets and write access, so we want to stop
executing repository code there.

The only reason the workflow needed docs generation was the `--base-image`
pflag default: it em...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24114)

**Metadata:**
- Created: 2026-11-22
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24109: HA (multi-control plane): Update kube-vip from v1.3.1 to v1.3.2

The kube-vip project released a [new version](https://github.com/kube-vip/kube-vip)

This PR was auto-generated by `make update-kube-vip-version` using [update-kube-vip-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-kube-vip-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/24109)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24104: Addon kong: Update kong/kubernetes-ingress-controller image from 3.5.14 to 3.5.15

The [kubernetes-ingress-controller](https://github.com/Kong/kubernetes-ingress-controller) project released a new kong/kubernetes-ingress-controller image

This PR was auto-generated by `make update-kong-ingress-controller-version` using [update-kong-ingress-controller-version.yml](https://github.co...

🔗 [Link](https://github.com/kubernetes/minikube/pull/24104)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#24102: Addon kong: Update kong image from 3 to 3

The [kong](https://github.com/Kong/kong) project released a new kong image

This PR was auto-generated by `make update-kong-version` using [update-kong-version.yml](https://github.com/kubernetes/minikube/tree/master/.github/workflows/update-kong-version.yml) CI Workflow.

🔗 [Link](https://github.com/kubernetes/minikube/pull/24102)

**Metadata:**
- Created: 2026-11-21
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubectl#1913: kubectl get -o jsonpath panics on an empty range whose body uses an array subscript

**What happened**:

`kubectl get -o jsonpath` panics when a `{range}` matches nothing and its body uses an array subscript:

```
$ kubectl get pods -o jsonpath='{range .items[*]}{[0]}{end}'      # no pods in the namespace
panic: reflect: call of reflect.Value.Type on zero Value

goroutine 1 [running...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1913)

**Metadata:**
- Created: 2026-11-21
- Comments: 1
- State: open

### kubernetes/kubectl#1912: kubectl set env --from fails when workloads are selected with -l or -f

**What happened**:

`kubectl set env --from=configmap/<name>` (or `secret/<name>`) fails whenever the workloads to update are chosen with `-l/--selector` or `-f/--filename`:

```
$ kubectl set env deployments -l app=web --from=configmap/app-config
error: selectors and the all flag cannot be used whe...

🔗 [Link](https://github.com/kubernetes/kubectl/issues/1912)

**Metadata:**
- Created: 2026-11-21
- Comments: 1
- State: open

### kubernetes/website#59225: [ko] Translate content/en/docs/reference/kubectl/introduction.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/59225)

**Metadata:**
- Created: 2026-11-21
- Comments: 1
- State: open

### kubernetes/website#59219: [ja] Translate docs/tasks/configure-pod-container/assign-resources/allocate-devices.dra.md into Japanese

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/59219)

**Metadata:**
- Created: 2026-11-21
- Comments: 1
- State: open

### prometheus/exporter-toolkit: v0.21.0

## What's Changed
* build(deps): bump github.com/prometheus/common from 0.70.1 to 0.71.0 in the prometheus group by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/451
* build(deps): bump the codeql group with 3 updates by @dependabot[bot] in https://github.com/prometheus/exporter-toolkit/pull/452
* Synchronize common files from prometheus/prometheus by @prombot in https://github.com/prometheus/exporter-toolkit/pull/455
* Update minimum Go version by @SuperQ in https:...

🔗 [Link](https://github.com/prometheus/exporter-toolkit/releases/tag/v0.21.0)

**Metadata:**
- Version: v0.21.0
- Published: 2026-11-21
- Prerelease: No


---

*This content was automatically collected on 2026-11-22 05:00:27*
