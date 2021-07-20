import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config()


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    process.env.MONGO_CONNECTION_URI,
    {useNewUrlParser: true , useUnifiedTopology: true }
);

// database info logs
mongoose.connection.on("connected", () => console.log("Mongodb connected"));
mongoose.connection.on("error", err => console.log("Mongodb error: " + err));
mongoose.connection.on("disconnected", () => console.log("Mongodb disconnected"));

app.get('/', (request, response) => {
    return response.status(200).send({
        message: "Hello World!",
    });
})

app.use(router);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})






