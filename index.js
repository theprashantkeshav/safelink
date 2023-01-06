import express from "express";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./connectDB/db.js";
import visitorRoute from "./Routes/Visitors.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get("/api/test", (req, res) => {
  res.send("Test working");
});

app.use("/", visitorRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
