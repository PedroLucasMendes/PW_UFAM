import express, { Request, Response } from "express";
import dotenv from "dotenv";
import logger from "./middlewares/logger";


dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 3333;


app.use(logger("combined"));
app.use("/img")

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});
app.get("/about", (req: Request, res: Response) => {
    res.send("Pagina about");
});

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});