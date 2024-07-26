"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = require("express-handlebars");
const logger_1 = __importDefault(require("./middlewares/logger"));
const router_1 = __importDefault(require("./router/router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3334;
app.engine("handlebars", (0, express_handlebars_1.engine)({ helpers: require(`${__dirname}/views/helpers/helpers.ts`) }));
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.use((0, logger_1.default)("combined"));
app.use("/img", express_1.default.static(`${__dirname}/../public/img`));
app.locals.valor = "10";
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    genid: () => (0, uuid_1.v4)(),
    secret: "fdffdsfdsfdsfdsfsd",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 360000 },
}));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
app.get("/google", (req, res) => {
    res.redirect("http://google.com");
});
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
