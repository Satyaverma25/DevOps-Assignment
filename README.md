# Node DevOps Project – Containerized Node.js Application

## 📌 Project Overview

This project demonstrates how to containerize a **Node.js backend application** using **Docker** and orchestrate multiple services using **Docker Compose**.

The application connects to:

* **MongoDB** for data storage
* **Redis** for caching

All services run in separate containers and communicate through the **Docker Compose network**.

The application runs on **port 8090**.

---

# 🧰 Technologies Used

* Node.js
* Express.js
* Docker
* Docker Compose
* MongoDB
* Redis

---

# 📁 Project Structure

```
node-devops-project
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env
└── README.md
```

---

# ⚙️ Environment Variables

The application configuration is managed using environment variables stored in a `.env` file.

Example:

```
PORT=8090
MONGO_URI=mongodb://mongo:27017/devopsdb
REDIS_HOST=redis
REDIS_PORT=6379
```

---

# 🐳 Docker Setup

## Dockerfile

The Dockerfile builds the Node.js application image.

Steps performed:

1. Uses official Node.js base image
2. Sets working directory
3. Installs dependencies
4. Copies application files
5. Exposes application port
6. Starts the server

---

# 🐙 Docker Compose Services

The application uses **three services** defined in `docker-compose.yml`.

### 1️⃣ Application Service

* Node.js backend application
* Runs on port **8090**
* Uses environment variables from `.env`

### 2️⃣ MongoDB Service

* Official MongoDB Docker image
* Stores application data
* Uses **Docker volume for persistent storage**

### 3️⃣ Redis Service

* Official Redis image
* Used for caching

---

# 🧠 Service Communication

All containers communicate through the **Docker Compose network** using service names.

Example:

* MongoDB → `mongo`
* Redis → `redis`

The Node.js application connects to these services using the environment variables.

---

# 💾 Data Persistence

MongoDB uses a **Docker volume** to ensure that data persists even if the container is restarted.

```
volumes:
  mongo-data:
```

---

# 🚀 How to Run the Project

## Step 1 – Clone the Repository

```
git clone <your-repository-link>
```

Navigate to the project folder:

```
cd node-devops-project
```

---

## Step 2 – Start the Application

Run the following command:

```
docker compose up --build
```

Docker will:

* Build the Node.js image
* Pull MongoDB image
* Pull Redis image
* Start all containers

---

# 🌐 Access the Application

Open in browser:

```
http://localhost:8090
```

Expected output:

```
Node DevOps Application Running 🚀
```

---

# ❤️ Health Check Endpoint

```
http://localhost:8090/health
```

Example response:

```
{
  "status": "UP",
  "mongodb": "connected",
  "redis": "connected"
}
```

---

# 📸 Screenshots

## Application Running

*(Insert screenshot of http://localhost:8090 here)*

<img width="1919" height="1027" alt="Screenshot 2026-03-11 183452" src="https://github.com/user-attachments/assets/3d1083f7-0d90-406c-9ca7-585a68edbea9" />


---

## Health Endpoint

*(Insert screenshot of /health endpoint here)*

<img width="1919" height="1011" alt="Screenshot 2026-03-11 183555" src="https://github.com/user-attachments/assets/f03312be-a8e3-4195-bdda-8972c97edb91" />


---

# 🏗 Architecture

```
User Request
     |
     v
Node.js Application (Port 8090)
     |
     |------ MongoDB (Database)
     |
     |------ Redis (Caching)
```

All services are containerized and managed using **Docker Compose**.

---

# ✅ Assignment Deliverables

This repository includes:

* Node.js application source code
* Dockerfile
* docker-compose.yml
* Environment configuration file (.env)
* README.md with setup instructions
* Screenshots demonstrating the running application

---

# 👨‍💻 Author

Satya Prakash
B.Tech Computer Science and Engineering
DevOps Enthusias
