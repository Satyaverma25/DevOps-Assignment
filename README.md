# DevOps-Assignment

## Containerizing a Node.js Application with Docker Compose

---

# 📌 Project Overview

This project demonstrates how to containerize a **Node.js backend application** using **Docker** and orchestrate multiple services using **Docker Compose**.

The application connects to:

* **MongoDB** – for data storage
* **Redis** – for caching

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
DevOps-Assignment
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── .env
├── README.md
└── screenshots
      ├── app-running.png
      └── health-endpoint.png
```

---

# ⚙️ Environment Variables

Application configuration is managed using **environment variables** stored in a `.env` file.

Example configuration:

```
PORT=8090
MONGO_URI=mongodb://mongo:27017/devopsdb
REDIS_HOST=redis
REDIS_PORT=6379
```

---

# 🐳 Dockerfile

The Dockerfile builds the Node.js application container.

Steps performed:

1. Uses official **Node.js base image**
2. Sets working directory
3. Installs dependencies
4. Copies application files
5. Exposes port **8090**
6. Starts the application

---

# 🐙 Docker Compose Setup

The `docker-compose.yml` file defines three services:

### 1️⃣ Node.js Application

* Runs the backend server
* Exposes **port 8090**
* Loads environment variables from `.env`

### 2️⃣ MongoDB

* Official MongoDB image
* Stores application data
* Uses **Docker volumes** for persistent storage

### 3️⃣ Redis

* Official Redis image
* Used for caching

---

# 🔗 Service Communication

All containers communicate using the **Docker Compose network**.

The Node.js application connects to:

* MongoDB → `mongo`
* Redis → `redis`

---

# 💾 Data Persistence

MongoDB data persists even after container restarts using **Docker volumes**.

Example:

```
volumes:
  mongo-data:
```

---

# 🚀 How to Run the Project

### Step 1 – Clone Repository

```
git clone https://github.com/YOUR-USERNAME/DevOps-Assignment.git
```

### Step 2 – Navigate to Project

```
cd DevOps-Assignment
```

### Step 3 – Start Containers

```
docker compose up --build
```

Docker will build and start:

* Node.js container
* MongoDB container
* Redis container

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

# ❤️ Health Endpoint

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

## 1️⃣ Application Running

Screenshot showing the Node.js application running successfully on **localhost:8090**.

<img width="1919" height="1027" alt="Screenshot 2026-03-11 183452" src="https://github.com/user-attachments/assets/dc700bdf-cc75-4a33-b5d8-908d9d120f58" />


---

## 2️⃣ Health Endpoint Response

Screenshot showing the **/health API response** confirming MongoDB and Redis connectivity.

<img width="1919" height="1011" alt="Screenshot 2026-03-11 183555" src="https://github.com/user-attachments/assets/d8c88d5a-1fd7-42be-bb8b-00c5cd104de5" />


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
     |------ Redis (Cache)
```

All services are containerized using **Docker** and orchestrated using **Docker Compose**.

---

# ✅ Assignment Deliverables

This repository includes:

* Node.js application source code
* Dockerfile
* docker-compose.yml
* Example `.env` configuration
* README.md with setup instructions
* Screenshots demonstrating the running application

---

# 👨‍💻 Author

Satya Prakash
B.Tech Computer Science and Engineering
DevOps Assignment Project
