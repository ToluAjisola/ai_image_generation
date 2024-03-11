import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

//pull environment variables from dotenv file
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

//route
app.get("/", async (req, res) => {
  res.send("Hello from DALL.E!")
  });


const startServer = async () => {
  
    app.listen(8080, () => console.log("Server started on port http://localhost:8080"));
  
};

startServer();