---
title: "WIP: Nerthus v2 The Beginning"
date: "2023-03-07"
description: History of what Nerthus was and what it is becoming. Why did it need to be rewritten and what are our goals.
---

## Introduction

Nerthus is a service created to simplify operations and enforce conventions where possible at eXOReaction. The first version of Nerthus accomplished this in its simplest form. But now it is time for Nerthus to put on its big boy pants and actually get the full job done. 

This article will try to explain why Nerthus needed a complete rewrite and also where Nerthus is headed. What has gone into deciding what features should be included and how they should be designed and or work together. As well as what features we do not want to include.

## What was Nerthus before?

Nerthus was a very purpose-built tool to provision services into a larger system in AWS. It helped eXOReaction keep conventions consistent throughout solutions like EntraOS. While also decreasing friction for developers.

It was written in Go and handled everything itself. So while deployment and usage were simple, there was no real way to change the conventions. Adding new functionality was also time-consuming. 

If I were to point out one feature that stood out with Nerthus v1 that I have yet to see anywhere else. It would be the idempotent rollback feature that could handle starting a provisioning and then on failure remove everything that it had created while leaving everything else the same as it was before provisioning started. This meant that there was "no" risk involved with hitting the provisioning button. Helping developers experiment more and move quicker.

## Why did it need to change?

I started to touch on this in the prevous segment. However, the main reasons were a lack of configurability and features. Nerthus did not have any way of handling the full lifecycle of a service or system. For that matter, Nerthus didn't really have any concept of what a system was. And especially not what systems of systems were. We also wanted to increase our level of security and system separation as well as getting more information so that we could take better decisions. 

## What are our new requirements?

To ensure that the new version was more than just a new bandage, did we take quite a while just discussing requirements and why we needed those requirements. As well as some extra wishes and concerns. Here is the list we came up with.

*   Scriptable provisioning so that everyone can expand the provisioning capabilities.

    *   Split ansible (ansible-runner on central server and all nodes)

*   Direct ssh to each node

*   Conventions and validation of conventions

    *   Scripts for every action on the server, ie:

        *   Restart

        *   Update

        *   Change to service user

        *   Update service

        *   Start, stop and restart service

        *   Clear disk

    *   Distinct naming env-serviceName(-type)(-nodeId)

        *   EC2 is base type

    *   Logback config and config location

    *   Properties file: local_override.propperties 

    *   Service to service communication

    *   SSH to server scripts

        *   User cert auth

    *   Probes

        *   Nerthus

        *   Visuale

        *   Log

*   Validating services in production (around 15 min from commit to deployed-release)

*   Ability to easily override validation if needed

*   Centralized configuration abilities

*   Centralized instance start, stop and reboot.

*   Native cluster support

*   Reprovision a service

*   Easy provisioning

*   Centralized logging

*   Github central service auth

*   Validate config against config in repo

*   Configurable file tracker

*   Central configuration of files and conventions

*   Instance fs overview

*   With diff from the expected fs. Monitoring / alarms

*   Validate infrastructure change and users ability to perform it. Strictness restrictions per environment

*   Infrastructure monitoring

    *   Disk

    *   CPU

    *   Ram

    *   Loadbalancer I/O

*   Release candidates

    *   Alpha

    *   Beta

    *   RC

*   Point of truth by the affected party

    *   AWS in AWS

    *   Config by the service

    *   Centralized tool only has state over current action

*   3 Instances per service

*   Cluster discovery

*   Security and safety separations

    *   VPC per service

    *   Security group per service

    *   Public IP but only access from LB unless someone needs SSH then SSH is allowed from their IP

    *   Automatic and staggered OS and software / service updates and restarts

* Secrete management?

Some of these points will probably need some more explanation. However instead of going through every point and trying to explain it, ill do a bit of a mishmash explanation.

We want every action that is reasonable to do to be automated or accessible from outside the service. This is so that the barriers to do maintenance tasks gets as low as possible. 

We want to increase our QA capabilities or testing capabilites by having more version types. 

One of the earliest requirements we set was being able to do everything without Nerthus if we wanted. So all state must be by the affected party, aka where it belongs and not in Nerhtus.

## How was Nerthus 2's first demo?

I ran a demo for the eXOReaction team on the 2. of March 2023. That demo contained a lot of explanations of what was done and how things work as well as visually showing how servers were provisioned and clustering was supported. The provisioning also included information about how the initial deployment works. There were also a lot of talks about how configurations work and how to move one system or service into a new environment. 

In terms of pure functionality that worked, we have the following.

1. Setting up VPCs per system.
2. Creating DNS-es per VPC and adding service host records for clustering.
3. Individual master certificates per system.
4. Provision instances in accordance with both possible and required amount.
5. Creating target groups, load balancers and paths for systems and services.
6. Deploying services.
7. Simplified service requirements and settup config.
8. Overridable config all the way from the service repo itself to the service configuration.
9. Tooling for multiple OS-es and architectures.
10. Health reporting to Visuale.
11. Extensibility with overrides of deployments and requirements.

However, there were a few things that did not work at the time of the demo. That is why the demo itself was more of a show and tell rather than a demo. Examples of missing features.

1. User certs on nodes
2. Nerthus opening ports in security groups on demand
3. Most scripts
4. A Nerthus self-deploy allowing us to start an environment from nothing.
5. Node information gathering
6. User interface
7. More thought and understanding of how we want to enforce conventions and how we want to execute actions