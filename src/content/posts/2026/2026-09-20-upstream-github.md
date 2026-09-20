---
title: "Upstream Github - 2026-09-20"
description: "CNCF upstream activity from github"
pubDate: 2026-09-20
category: "Notes"
tags: ["upstream", "CNCF", "kubernetes", "issue", "kind/bug", "sig/storage", "needs-triage", "pr", "sig/api-machinery", "release-note", "size/L", "cncf-cla: yes", "needs-priority", "needs-ok-to-test", "area/kubectl", "size/M", "sig/cli", "area/test", "area/kubelet", "sig/node", "sig/testing", "size/S", "sig/apps", "kind/flake", "release-note-none", "kind/cleanup", "size/XS", "sig/instrumentation", "do-not-merge/release-note-label-needed", "kind/feature", "language/ko", "area/localization", "website", "lgtm", "language/en", "area/blog", "sig/docs", "language/zh", "approved", "minikube", "do-not-merge/needs-area", "autoscaler", "area/vertical-pod-autoscaler", "area/cluster-autoscaler", "area/provider/utho", "area/provider/exoscale"]
draft: false
---

## Overview

This is an automated collection of upstream activity from github.

## 🔥 High Priority Updates

### kubernetes/kubernetes#142237: Move myself to emeritus

Going forward, as discussed internally within the SIG, I will still be around every now and then to help out efforts that are currently in an incubation phase, and were signed-off on during my tenure as a chair.

/kind cleanup

cc @kubernetes/sig-instrumentation-leads 

```release-note
NONE
...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142237)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

## Updates

### kubernetes/kubernetes#142243: [BUG] GetDiskFormat in k8s.io/mount-utils returns ("", nil) for an unreadable device, indistinguishable from a blank disk

### What happened?

`GetDiskFormat` in the staging repo `k8s.io/mount-utils` (staging/src/k8s.io/mount-utils/mount_linux.go) shells out to
`blkid -p -s TYPE -s PTTYPE -o export <disk>` and maps **exit code 2** to `("", nil)` ("disk is unformatted").

However, blkid also exits with code 2 when the de...

🔗 [Link](https://github.com/kubernetes/kubernetes/issues/142243)

**Metadata:**
- Created: 2026-09-20
- Comments: 2
- State: open

### kubernetes/kubernetes#142245: Fix: Kube-apiserver Panics When ServiceAccount Signing Runs Without Secrets API

Fix: Kube-apiserver Panics When ServiceAccount Signing Runs Without Secrets API

<!--  Thanks for sending a pull request!  Here are some tips for you:

1. If this is your first time, please read our contributor guidelines: https://git.k8s.io/community/contributors/guide/first-contribution.md#you...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142245)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142244: mount-utils: distinguish unreadable devices from blank disks in GetDiskFormat

**What this PR does / why we need it**:

`GetDiskFormat` shells out to `blkid -p -s TYPE -s PTTYPE -o export` and maps **exit code 2** to `("", nil)` ("disk is unformatted"). However, blkid also exits with code 2 when the device node exists but its data cannot be read (e.g. an I/O error on the sto...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142244)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142242: kubectl events: keep table rows when messages contain newlines

kubectl events dumps each event as one tabwriter row. A newline in the message (failed exec probes, etc.) ends that row, so you get extra lines with no columns.

Same truncation `kubectl get events` already does: cut at the first break character and add "...". Full text is still in `-o yaml` / `kube...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142242)

**Metadata:**
- Created: 2026-09-20
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142241: Mask static pod URL headers served by kubelet /configz

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Before: the kubelet serves its effective `KubeletConfiguration` from `/configz`, and `staticPodURLHeader` went out verbatim. That field holds the headers given to `--manifest-url-header`, which are normally an ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142241)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142240: controller: pad the pod template hash to a fixed length

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

Before: `controller.ComputeHash` hashes the PodTemplateSpec with FNV-32a, turns the sum into a decimal string with `fmt.Sprint`, and passes that to `rand.SafeEncodeString`, which returns one character per input...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142240)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142239: test: fix TestWebhookConverter flake by scoping the webhook per case


#### What type of PR is this?
/kind flake


#### What this PR does / why we need it:
`testWebhookConverter` started a webhook server per test case before 2307674798f. Since then it runs the cases against one shared server, swapping handlers between them, so every request goes to the same endp...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142239)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142238: Fix pod-level limit defaulting to ignore ephemeral containers

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

`DefaultPodLevelResources` documents that ephemeral containers are excluded from pod-level resource defaulting, since they cannot specify resources and don't contribute to QoS. It builds the `v1Pod` it aggregates fro...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142238)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142236: fix(job-controller): clear pod expectations when a Job is deleted

#### What type of PR is this?

/kind bug

#### What this PR does / why we need it:

When a Job is deleted and a new Job is created with the same name (a common pattern for
Helm-installed one-shot Jobs, cron-like external recreation, GitOps reconciliation, etc.), the
new Job can end up with 0 active ...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142236)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/kubernetes#142235: kubelet: add logarithmic Burstable oom_score_adj behind feature gate

/kind bug
/sig node

#### What this PR does / why we need it:

On large-memory nodes the linear Burstable `oom_score_adj` formula collapses small/medium containers to 999, so a memory-guaranteed orchestrator and a bursty executor are indistinguishable, and Burstable sits only 1 point below Best...

🔗 [Link](https://github.com/kubernetes/kubernetes/pull/142235)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57625: [ko] Translate content/en/docs/reference/access-authn-authz/abac.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/reference/access-authn-authz/abac.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/reference/access-authn-authz/abac/

**Why is this needed**

This page is not translated yet.

/are...

🔗 [Link](https://github.com/kubernetes/website/issues/57625)

**Metadata:**
- Created: 2026-09-19
- Comments: 1
- State: open

### kubernetes/website#57624: Using kubectl to Create a Deployment POD_NAME too long

When executing `export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')` i get that it resolves to:
```
kubernetes-bootcamp
kubernetes-bootcamp-67fbdd6b79-gjzz8
```
It should only be the second line.

🔗 [Link](https://github.com/kubernetes/website/issues/57624)

**Metadata:**
- Created: 2026-09-19
- Comments: 1
- State: open

### kubernetes/website#57622: [ko] Translate content/en/docs/setup/production-environment/tools/kubeadm/high-availability.md into Korean

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57622)

**Metadata:**
- Created: 2026-09-19
- Comments: 2
- State: open

### kubernetes/website#57619: [ko] Update 'observability' term in Korean localization guide glossary

**This is a Feature Request**

<!-- Please only use this template for submitting feature/enhancement requests -->
<!-- See https://kubernetes.io/docs/contribute/start/ for guidance on writing an actionable issue description. -->

**What would you like to be added**
<!-- Describe as precisely as poss...

🔗 [Link](https://github.com/kubernetes/website/issues/57619)

**Metadata:**
- Created: 2026-09-19
- Comments: 2
- State: open

### kubernetes/website#57618: [ko] Translate content/en/docs/setup/production-environment/tools/kubeadm/kubelet-integration.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/setup/production-environment/tools/kubeadm/kubelet-integration.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/kubelet-integration/

**Wh...

🔗 [Link](https://github.com/kubernetes/website/issues/57618)

**Metadata:**
- Created: 2026-09-19
- Comments: 1
- State: open

### kubernetes/website#57617: [ko] Translate content/en/docs/concepts/resource-management/dynamic-resource-allocation/dra-api.md into Korean

**This is a Feature Request**

**What would you like to be added**

Translate `content/en/docs/concepts/resource-management/dynamic-resource-allocation/dra-api.md` into Korean

**Website Link**

- English: https://kubernetes.io/docs/concepts/resource-management/dynamic-resource-allocation/dra-api/

...

🔗 [Link](https://github.com/kubernetes/website/issues/57617)

**Metadata:**
- Created: 2026-09-19
- Comments: 1
- State: open

### kubernetes/website#57623: Mirror Blog : Spotlight on SIG Apps - #57623

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57623)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57620: [ko] Update 'observability' term in Korean localization guide glossary

<!--
 Hello!

 PLEASE title the FIRST commit appropriately, so that if you squash all
 your commits into one, the combined commit message makes sense.
 For overall help on editing and submitting pull requests, visit:
  https://kubernetes.io/docs/contribute/suggesting-improvements/

 Use the ...

🔗 [Link](https://github.com/kubernetes/website/pull/57620)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57613: [zh-cn]sync kubectl_set_resources

content/zh-cn/docs/reference/kubectl/generated/kubectl_set/kubectl_set_resources.md

🔗 [Link](https://github.com/kubernetes/website/pull/57613)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57612: [zh-cn]sync kubectl_set_serviceaccount

content/zh-cn/docs/reference/kubectl/generated/kubectl_set/kubectl_set_serviceaccount.md

🔗 [Link](https://github.com/kubernetes/website/pull/57612)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57609: [zh-cn]sync kubectl_set_env

content/zh-cn/docs/reference/kubectl/generated/kubectl_set/kubectl_set_env.md

🔗 [Link](https://github.com/kubernetes/website/pull/57609)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/website#57608: [zh-cn]sync kubectl_set_selector

content/zh-cn/docs/reference/kubectl/generated/kubectl_set/kubectl_set_selector.md

🔗 [Link](https://github.com/kubernetes/website/pull/57608)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/minikube#23756: lock: Fix file descriptor leak and log message in AppendToFile

**What type of PR is this?**
/kind bug

**What does this PR do / why do we need it?**

`AppendToFile` in `pkg/util/lock/lock.go` has two bugs:

1. **File descriptor leak**: `os.OpenFile` returns a file descriptor that is never closed, leaking one fd per call. This adds `defer fd.Close()` afte...

🔗 [Link](https://github.com/kubernetes/minikube/pull/23756)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10324: addon-resizer: add test coverage for ContainerResources

/kind cleanup

#### What this PR does / why we need it:

Adds unit tests for ContainerResources in addon-resizer/nanny/kubernetes_client.go: finding the named container among siblings, erroring on a missing container, and erroring on a missing pod. This had zero direct test coverage, unlike nanny_li...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10324)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10323: VPA: add test coverage for admission controller TLS config

/kind cleanup

#### What this PR does / why we need it:

Adds unit tests for configTLS in vertical-pod-autoscaler/pkg/admission-controller/config.go: cipher suite parsing, minimum TLS version selection, and certificate loading on the non-reload path. This function had zero direct test coverage even ...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10323)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10322: utho: add test coverage for pure helper functions in utils.go

/kind cleanup

#### What this PR does / why we need it:

Adds unit tests for utho's pure helper functions in cloudprovider/utho/utils.go: normalizeID, toProviderID, readyConditions, buildKubeProxy, and join. None of these had any test coverage before.

#### Which issue(s) this PR fixes:

Fixes #

##...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10322)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No

### kubernetes/autoscaler#10321: exoscale: add test coverage for provider ID and instance status helpers

/kind cleanup

#### What this PR does / why we need it:

Adds unit tests for exoscale's pure helper functions in cloudprovider/exoscale/util.go: toProviderID, toNodeID, toInstanceStatus, and toInstance. None of these had any test coverage before.

#### Which issue(s) this PR fixes:

Fixes #

#### Sp...

🔗 [Link](https://github.com/kubernetes/autoscaler/pull/10321)

**Metadata:**
- Created: 2026-09-19
- Comments: undefined
- State: open
- Draft: No


---

*This content was automatically collected on 2026-09-20 03:19:48*
