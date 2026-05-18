# AI Document Processing Platform (SaaS-style DevOps System)

## Description

> _A distributed platform that automatically processes uploaded documents (PDFs, invoices, CVs) into structured data with real-time tracking, monitoring, and observability._

## Problem Statement

- Companies manually process large volumes of documents
- This is slow, error-prone, and not scalable
- There is no visibility into processing pipelines
- No monitoring of failures or performance

## Solution overview

- Upload documents via web UI
- Backend stores and queues processing jobs
- Worker services process documents asynchronously
- Results stored in MongoDB
- Dashboard shows job status in real-time
- Full observability via Prometheus + Grafana

## Architecture Overview

![Alt Text](./Images/Overview_MVP.drawio.png)

## Tech Stack

- Frontend: NextJS
- Backend: Node.js (Express)
- Database: MongoDB
- Containerization: Docker
- Orchestration: Kubernetes (Minikube)
- CI/CD: GitHub Actions
- Monitoring: Prometheus + Grafana
- IaC: (Terraform / Kubernetes manifests)

## Features

- File upload system
- Async document processing
- Job queue system
- Real-time job status tracking
- Admin dashboard
- System metrics dashboard
- Containerized microservices
- Kubernetes deployment
- CI/CD pipeline
- Monitoring & alerting

## How it works

![Alt Text](./Images/How_it_works.png)

## Local setup

### Clone repo

<pre><code>
git clone https://github.com/Ayoub-45/AI-Document-Processing-Platform.git && cd ./AI-Document-Processing-Platform
</code>
</pre>

### Set up docker containers

<pre><code>
docker compose up --build
</code></pre>

### Run kubernetes manifests

<pre><code>
bash kubectl apply -f ./k8s
</code>
</pre>

## CI/CD pipeline

1. GitHub Actions builds Docker images
2. Runs tests
3. Pushes images to registry
4. Deploys to Minikube cluster

## Monitoring

1. Prometheus collects metrics (API latency, job count, failures)
2. Grafana dashboards visualize system health
3. Alerts for failed jobs or high latency

## Future Improvements

- Add Kafka for event streaming
- Improve scaling with HPA tuning
- Add distributed tracing (OpenTelemetry)
- Deploy to cloud (AWS/GCP)
