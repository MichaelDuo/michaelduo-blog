---
path: /blogs/deploy-docker-gcp
title: Deploy a docker image on GCP Kubernetes Engine
tags: backend, featured
score: 95
date: 2020-02-20
---

# Deploy a docker image on GCP Kubernetes Engine

## 1. Command line tool setup:

-   Install [gcloud](https://cloud.google.com/sdk/docs/quickstart) command line tool
-   Run `gcloud init` to login account

> View current account:
> `gcloud info`

> List accounts that’s been added:
> `gcloud auth list` or
> `gcloud config configurations list`

> Switch to another account:
> `gcloud config set account <name>@gmail.com `

-   Install kubectl component
    `gcloud components install kubectl`

## 2. Package a sample web application into a Docker image.

With command `docker build -t gcr.io/${PROJECT_ID}/hello-app:v1 .`

> View images:
> `docker images`

> Run image:
> `docker run —rm -p 8080:8080 gcr.io/${PROJECT_ID}/hello-app:v1`

`<host port>:<container’s port>`

## 3. Upload the Docker image to Container Registry.

1. Enable the [Container Registry API](https://console.cloud.google.com/apis/library/containerregistry.googleapis.com)

```
gcloud services enable containerregistry.googleapis.com
```

2. Configure the Docker command-line tool to authenticate to [Container Registry](https://cloud.google.com/container-registry):

```shell
gcloud auth configure-docker
```

3. Push the Docker image that you just built to Container Registry:

```shell
docker push gcr.io/${PROJECT_ID}/hello-app:v1
```

## Create a GKE cluster

Create GKE cluster via web console

## Deploy the sample app to the cluster

In **cloud shell**
`kubectl create deployment hello-app —image=gcr.io/${PROJECT_ID}/hello-app:v1`

`kubectl scale deployment hello-app —replicas=3`

`kubectl autoscale deployment hello-app —cpu-percent=80 —min=1 —max=5`

> Log pods:
> `kubectl get pods`

Or using UI:
Click `Deploy` Button, and follow the instructions.

## Expose the sample app to the internet.

1. On UI, click actions->Expose.
2. Set target port to application port.
3. Service type set to load-balancer.
4. Done

In service tab, External endpoints can be accessed via internet.

## Deploy a new version of the sample app.

`docker build -t gcr.io/${PROJECT_ID}/hello-app:v2 .`  
`docker push gcr.io/${PROJECT_ID}/hello-app:v2`

Rolling update:  
In console UI:  
Actions->Rolling update  
Set new image url

## Clean up

1. Delete Service
2. Delete cluster
3. Delete images

## References:

-   [Deploying a containerized web application](https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app?hl=en_US)
