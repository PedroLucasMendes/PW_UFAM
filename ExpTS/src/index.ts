import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars"
import logger from "./middlewares/logger";
import router from "./router/router"
import cookieParser from "cookie-parser"
import session from "express-session"
import {v4} from "uuid"

declare module "express-session" {
    interface SessionData{
        uid: string
    }
}

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 3334;

app.engine("handlebars", engine({helpers: require(`${__dirname}/views/helpers/helpers.ts`)}));
app.set("view engine", "handlebars")
app.set("views",`${__dirname}/views`);


app.use(logger("combined"));
app.use("/img",express.static(`${__dirname}/../public/img`))
app.locals.valor = "10"
app.use(cookieParser());
app.use(session({
    genid: () => v4(),
    secret: "fdffdsfdsfdsfdsfsd",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 360000 },
}))
app.use(express.urlencoded({extended: false}))
app.use(router);


app.get("/google", (req , res) => {
    res.redirect("http://google.com")
})




app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});