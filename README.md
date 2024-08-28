# Student Management App

This is a simple Student Management Application built with a React frontend, Node.js backend, and MySQL database, deployed using Kubernetes.

## Project Structure

- **backend/**: Contains the backend code (Node.js + Express + Sequelize)
- **frontend/**: Contains the frontend code (React)
- **k8s/**: Contains the Kubernetes manifests to deploy the application.

## Prerequisites

- Docker
- Kubernetes Cluster
- kubectl

## Setup Instructions

1. **Build Docker Images:**
   - Build the backend image: `docker build -t your-backend-image ./backend`
   - Build the frontend image: `docker build -t your-frontend-image ./frontend`

2. **Push Docker Images:**
   - Push the images to Docker Hub or your preferred registry: `docker push your-backend-image` and `docker push your-frontend-image`.

3. **Apply Kubernetes Manifests:**
   - Deploy the MySQL database:
     ```bash
     kubectl apply -f k8s/mysql-pvc.yaml
     kubectl apply -f k8s/mysql-deployment.yaml
     kubectl apply -f k8s/mysql-service.yaml
     ```
   - Deploy the backend:
     ```bash
     kubectl apply -f k8s/backend-deployment.yaml
     kubectl apply -f k8s/backend-service.yaml
     ```
   - Deploy the frontend:
     ```bash
     kubectl apply -f k8s/frontend-deployment.yaml
     kubectl apply -f k8s/frontend-service.yaml
     ```

4. **Access the Application:**
   - The frontend will be accessible via the external IP provided by the `LoadBalancer` type service.

