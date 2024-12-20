import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);  

mongoose
  .connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

export default app;
