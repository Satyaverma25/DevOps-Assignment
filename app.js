require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");

const app = express();

const PORT = process.env.PORT || 8090;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Redis connection
const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.connect()
.then(()=>console.log("Redis Connected"))
.catch(err=>console.log(err));

app.get("/", (req, res) => {
    res.send("Node DevOps Application Running 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        mongodb: "connected",
        redis: "connected"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});