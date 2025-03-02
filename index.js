import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
