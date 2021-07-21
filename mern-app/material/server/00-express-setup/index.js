import express from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
   return response.status(200).send("Readit API");
});

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});
