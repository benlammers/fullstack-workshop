import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Database Info Logs
mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB error: " + err));
mongoose.connection.on("disconnected", () => console.log("MongoDB disconnected"));

app.get("/", (request, response) => {
   return response.status(200).send("Readit API");
});

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});
