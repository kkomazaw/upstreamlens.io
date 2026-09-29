---
title: "Upstream Sig-wg - 2026-09-29"
description: "CNCF upstream activity from sig-wg"
pubDate: 2026-09-29
category: "Notes"
tags: ["upstream", "CNCF", "SIG", "meeting-notes", "sig-node", "KEP", "proposal", "kubernetes"]
draft: false
---

## Overview

This is an automated collection of upstream activity from sig-wg.

## 🔥 High Priority Updates

### Meeting Notes Update: sig-node

KEP-5677: make v1alpha3 lifecycle tags explicit, assign harche as reviewer

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/a72ecdc8291d29b0a34e27664095753561938891)

**Metadata:**
- Date: 2026-09-28
- Repository: kubernetes/enhancements
- Files Updated: 3

### Meeting Notes Update: sig-node

KEP-5677: address review feedback

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/aa1e47ef053b7f1724de0a80104b0a70695a2112)

**Metadata:**
- Date: 2026-09-28
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

Update KEP for beta promotion in v1.38

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/2cfdbd10e977413d15b1cfc4e920a24b57d6bab9)

**Metadata:**
- Date: 2026-08-26
- Repository: kubernetes/enhancements
- Files Updated: 3

### Meeting Notes Update: sig-node

align KEP with the merged 1.37 implementation

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/a0907f8d53fb61485673560d36a304b3bcd3a6b0)

**Metadata:**
- Date: 2026-08-21
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

kep: address reviewers comments 09272026

Added on separate commit to make reviewing process easier.
Will squash once reviewers are happy.

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/7c4398e0fab944c2d62d68a10501eb7bd10eb17c)

**Metadata:**
- Date: 2026-09-27
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

kep: address reviewers comments 09242026

- evaluate more about the upgrade/downgrade process
- emphasis QoS cgroup manager role and changes in this KEP.

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/898faef31d328941c0833deffa9a249eaa3f5fd6)

**Metadata:**
- Date: 2026-09-24
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

kep: address reviewers comments 09232026

- Remove FeatureGate since the flags themselves are used as feature gate.
  adding hugepages to  `--system-reserved` and/or `--kube-reserved`
  acts as enablement/disablement mechanism similar to what FeatureGate does.

- Add rollout cases

Signed-off-by: Ta...

🔗 [Link](https://github.com/kubernetes/enhancements/commit/71104bca7ae1652ad9c290a3856992ac19b09ab5)

**Metadata:**
- Date: 2026-09-23
- Repository: kubernetes/enhancements
- Files Updated: 2

### Meeting Notes Update: sig-node

kep: address reviewers comments 09222026 (2)

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/8bed505e954eec35081ebe13ac71970f64a35d50)

**Metadata:**
- Date: 2026-09-22
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

kep: address reviewers comments 09222026

Using separate commit to make reviewing process easier.
Will squash before merge.

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/0c05ca1ef28d71a4d56f8744eeba8ff8671575c7)

**Metadata:**
- Date: 2026-09-22
- Repository: kubernetes/enhancements
- Files Updated: 3

### Meeting Notes Update: sig-node

kep: address reviewers comments 09162026

Using separate commit to make reviewing process easier.
Will squash before merge.

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/70098e620b7bc17c3233042d1a0d460f8aca2569)

**Metadata:**
- Date: 2026-09-16
- Repository: kubernetes/enhancements
- Files Updated: 2

### Meeting Notes Update: sig-node

kep: add ppr file

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/0c7e15c91f5f6428f2402879739ac8bdd8f6f10b)

**Metadata:**
- Date: 2026-09-16
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

KEP-6252: Align with latest KEP template

Add missing sections required by the KEP template:
- Deprecation sub-section under Graduation Criteria
- Infrastructure Needed (Optional) section
- Restore truncated Release Signoff Checklist item text

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/6758b05c314af18f7829305983695de868ff8052)

**Metadata:**
- Date: 2026-09-16
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

KEP-6252: Add KEP-5894 Node System Partition compatibility note

Clarify that --system-reserved/--kube-reserved hugepages cover host
services, not system partition Pods, and that no changes are made to
the systemPartition configuration.

Signed-off-by: Talor Itzhak <titzhak@redhat.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/25b95bec22e2a99839ed9cdf8c6ca62e82cb913e)

**Metadata:**
- Date: 2026-08-31
- Repository: kubernetes/enhancements
- Files Updated: 2

### Meeting Notes Update: sig-node

KEP-6252: Support hugepages in kubelet system-reserved and kube-reserved

Add KEP for extending --system-reserved and --kube-reserved kubelet flags
to accept hugepages resources, enabling proper reservation of hugepages
consumed by system daemons like OVS-DPDK.

Signed-off-by: Talor Itzhak <titzhak@...

🔗 [Link](https://github.com/kubernetes/enhancements/commit/4aee20b2eb8446deb5c7d3554501f90c5a76e533)

**Metadata:**
- Date: 2026-07-20
- Repository: kubernetes/enhancements
- Files Updated: 2

### KEP unknown: Merge pull request #6301 from nmn3m/rpsr-beta

KEP-5677: resourcepoolstatus request target third alp...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-29
- Status: Unknown

### KEP unknown: KEP-5677: make v1alpha3 lifecycle tags explicit, assign harche as reviewer

Signed-off-by: Nour <nur...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6218 from matthyx/restart

KEP-4438: specify termination reconciliation and life...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/4438-container-restart-termination/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6321 from mengqiy/objcompression

KEP-6264: storage object compression

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/6264-storage-object-compression/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: update section for 9 byte header and benchmark

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/6264-storage-object-compression/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6233 from AI-Armless/kep-6232-memory-manager-drift-tolerance

KEP-6232: Tolerate...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6232-memory-manager-drift-tolerance/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: KEP-5677: address review feedback

Signed-off-by: Nour <nurmn3m@gmail.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6323 from HirazawaUi/kep-6318-mutable-container-probes

KEP-6318: Allow in-place...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6318-mutable-container-probes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6309 from rthallisey/kubectl-drain-reporting

KEP-5683: Kubectl drain reporting ...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5683-lifecycle-conditions/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6435 from tallclair/dynamic-containers

KEP-5972: Dynamic Containers - add misse...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5972-dynamic-containers/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6354 from everpeace/KEP-5491-beta

KEP-5491: DRA List Types for Attributes: prom...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-scheduling/5491-dra-list-types-for-attributes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6418 from VeraQin/master

KEP-5996: Push feature DefaultPodSysctls to Beta

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5996-default-pod-sysctls/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6360 from galal-hussein/kep_3541_beta_update

KEP 3541: Update Statefulset Recre...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-apps/3541-add-recreate-strategy-to-statefulset/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6338 from amritansh1502/kep-h2c-probes

KEP-5999: update for beta graduation

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5999-h2c-container-probes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6339 from zylxjtu/4885

KEP-4885: move from alpha to beta

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-windows/4885-windows-cpu-and-memory-affinity/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: KEP-5999: update for beta graduation

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5999-h2c-container-probes/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-09
- Status: Unknown

### KEP unknown: Merge pull request #6373 from jpbetz/kep-external-node-liveness

KEP-6371: External Node Liveness De...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6371-external-node-liveness-detection/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Address PRR comments and Minor status update

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-windows/4885-windows-cpu-and-memory-affinity/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-24
- Status: Unknown

### KEP unknown: Add feature gate

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6371-external-node-liveness-detection/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6372 from troychiu/promote-dra-optional-node-operations-beta

KEP-5945: DRA Opti...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5945-dra-optional-node-operations/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Retarget third Alpha in v1.38, Beta in v1.39

Signed-off-by: Nour <nurmn3m@gmail.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-25
- Status: Unknown

### KEP unknown: Address review feedback on beta promotion

Signed-off-by: Nour <nurmn3m@gmail.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-17
- Status: Unknown

### KEP unknown: Update KEP for beta promotion in v1.38

Signed-off-by: Nour <nurmn3m@gmail.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-08-26
- Status: Unknown

### KEP unknown: align KEP with the merged 1.37 implementation

Signed-off-by: Nour <nurmn3m@gmail.com>

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/5677-dra-resource-availability-visibility/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-08-21
- Status: Unknown

### KEP unknown: Merge pull request #6062 from saschagrunert/kep/oci-artifact-security-profiles

KEP-6061: OCI artifa...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6061-oci-artifact-security-profiles/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6385 from Jefftree/kep-5866-beta

KEP-5866: Target Beta graduation in v1.38

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-api-machinery/5866-server-side-sharded-list-and-watch/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6379 from aculnaig/stor-3106

KEP-1432: add Unknown volume health status and hea...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-storage/1432-volume-health-monitor/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Add example external implementation to alpha criteria

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-node/6371-external-node-liveness-detection/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

### KEP unknown: Merge pull request #6059 from cniackz/kep-csi-global-mount-fallback

KEP-6058: CSI volume reconstruc...

Kubernetes Enhancement Proposal update

🔗 [Link](https://github.com/kubernetes/enhancements/blob/master/keps/sig-storage/6058-csi-global-mount-fallback/README.md)

**Metadata:**
- KEP Number: unknown
- Updated: 2026-09-28
- Status: Unknown

## Updates

### Meeting Notes Update: sig-node

drop beta PRR entry while targeting alpha

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/eed8de29697623b9f8a38a68e9d321884be5c866)

**Metadata:**
- Date: 2026-09-28
- Repository: kubernetes/enhancements
- Files Updated: 1

### Meeting Notes Update: sig-node

Retarget third Alpha in v1.38, Beta in v1.39

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/725f07d27b26c8cc8a68577210917d0421232388)

**Metadata:**
- Date: 2026-09-25
- Repository: kubernetes/enhancements
- Files Updated: 3

### Meeting Notes Update: sig-node

Address review feedback on beta promotion

Signed-off-by: Nour <nurmn3m@gmail.com>

🔗 [Link](https://github.com/kubernetes/enhancements/commit/fbbadb6cb604cdf2fe4ebffe99c7678e7d8d23f7)

**Metadata:**
- Date: 2026-09-17
- Repository: kubernetes/enhancements
- Files Updated: 1


---

*This content was automatically collected on 2026-09-29 04:09:43*
