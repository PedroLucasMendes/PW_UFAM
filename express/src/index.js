const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();
const PORT = process.env.PORT || 6060;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});