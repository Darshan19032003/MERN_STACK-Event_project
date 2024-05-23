import express from "express";
import { dbConnection } from "./database/dbconnection.js";
import dotenv from "dotenv";
import messageRoter from "./router/messageRouter.js";
import cors from "cors";
const app = express();
dotenv.config({ path: "./config/.env" });

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/msg",messageRoter);
dbConnection();

export default app;
