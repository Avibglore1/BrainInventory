# Node.js + PostgreSQL Docker Setup

This project demonstrates a **Node.js application** running with **PostgreSQL** using **Docker Compose**, optimized for production with persistent storage, health checks, and environment configuration.

---

## Features

- Multi-stage Dockerfile to **optimize image size**  
- `.dockerignore` to exclude unnecessary files  
- Slim base images and layer caching for faster builds  
- Docker Compose with **2 services**:
  - `app` → Node.js application
  - `db` → PostgreSQL database  
- Environment variables for easy configuration  
- Volume mounts for **persistent database data**  
- Health checks to ensure services start correctly  

---

## Prerequisites

- Docker >= 20.x  
- Docker Compose >= 1.29  
- Node.js project with `package.json` and entry file `index.js`

---

## Project Structure
.
├── Dockerfile
├── docker-compose.yml
├── package.json
├── index.js
└── README.md

# Build and start all services
docker-compose up --build

# Stop services
docker-compose down

# Test Node.js API
http://localhost:3000/users