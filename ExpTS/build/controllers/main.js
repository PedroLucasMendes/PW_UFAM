"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lorem_ipsum_1 = require("lorem-ipsum");
const hb1 = (req, res) => {
    res.render("main/hb1", { mensagem: "alguma mensagem" });
};
const testCookie = (req, res) => {
    if (!("test" in req.cookies)) {
        res.cookie("test", '1');
        res.send("Você ainda não tinha o cookie. Criando...");
    }
    else {
        res.send("Você já tinha o cookie.");
    }
};
const hb2 = (req, res) => {
    res.render("main/hb2", {
        vencedorCaprichoso: false,
    });
};
const hb3 = (req, res) => {
    const profs = [
        { name: "David Fernandes", room: 321 },
        { name: "Altigran Soares", room: 221 },
        { name: "Elaine Harada", room: 321 },
        { name: "Horácio Fernandes", room: 321 },
        { name: "Horácio Fernandes", room: 321 }
    ];
    res.render("main/hb3", {
        profs,
    });
};
const hb4 = (req, res) => {
    const profs = [
        { name: "David Fernandes", room: 321 },
        { name: "Altigram Soares", room: 221 },
        { name: "Elaine Harada", room: 321 },
        { name: "Horácio Fernandes", room: 321 },
        { name: "Horácio Fernandes", room: 321 }
    ];
    const tecnologias = [
        { name: 'Express', type: "Framework", poweredByNodejs: true },
        { name: 'Laravel', type: "Framework", poweredByNodejs: false },
        { name: 'React', type: "Library", poweredByNodejs: true },
        { name: 'Handlebars', type: "Engine View", poweredByNodejs: true },
    ];
    res.render("main/hb4", {
        tecnologias,
    });
};
const bemvindo = (req, res) => {
    res.send(`Seja bem-vindo(a) ${req.params.nome}`);
};
const about = (req, res) => {
    res.send("Pagina about");
};
const ipsum = (req, res) => {
    const valor = parseInt(req.params.quant);
    const lorem = (0, lorem_ipsum_1.loremIpsum)({
        count: valor,
        units: "paragraphs",
        suffix: "\n",
        format: "html"
    });
    res.send(lorem);
};
exports.default = { hb1, hb2, hb3, hb4, bemvindo, about, ipsum, testCookie };
