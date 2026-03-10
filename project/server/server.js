const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/smartcity")
.then(()=>console.log("MongoDB connected"));

app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
res.send("Smart City API running");
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});