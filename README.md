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
