import { Request, Response } from "express"
import { loremIpsum } from "lorem-ipsum";

const hb1 = (req: Request, res: Response) =>{
    res.render("main/hb1", {mensagem: "alguma mensagem"})
};

const testCookie = (req: Request, res: Response) => {
    if (!("test" in req.cookies)){
        res.cookie("test", '1');
        res.send("Você ainda não tinha o cookie. Criando...")
    } else {
        res.send("Você já tinha o cookie.")
    }
}

const hb2 = (req: Request, res: Response) =>{
    res.render("main/hb2", {
        vencedorCaprichoso: false,
    })
}

const hb3 = (req: Request, res: Response) =>{
    const profs = [
        {name: "David Fernandes", room:321},
        {name: "Altigran Soares", room:221},
        {name: "Elaine Harada", room:321},
        {name: "Horácio Fernandes", room:321},
        {name: "Horácio Fernandes", room:321}
    ];
    res.render("main/hb3", {
        profs,
    });
}

const hb4 = (req :Request, res:Response) =>{
    const profs = [
        {name: "David Fernandes", room:321},
        {name: "Altigram Soares", room:221},
        {name: "Elaine Harada", room:321},
        {name: "Horácio Fernandes", room:321},
        {name: "Horácio Fernandes", room:321}
    ];

    const tecnologias = [
        {name: 'Express', type: "Framework", poweredByNodejs: true},
        {name: 'Laravel', type: "Framework", poweredByNodejs: false},
        {name: 'React', type: "Library", poweredByNodejs: true},
        {name: 'Handlebars', type: "Engine View", poweredByNodejs: true},
    ]
    res.render("main/hb4", {
        tecnologias,
    });
}

const bemvindo =  (req: Request, res: Response) => {
    res.send(`Seja bem-vindo(a) ${req.params.nome}`)
}

const about =  (req:Request, res:Response) => {
    res.send("Pagina about");
}

const ipsum =  (req: Request, res: Response) => {
    const valor = parseInt(req.params.quant)
    const lorem = loremIpsum({
        count: valor,
        units: "paragraphs",
        suffix: "\n",
        format: "html" 
    })
    res.send(lorem);
}

export default {hb1, hb2, hb3, hb4, bemvindo, about, ipsum, testCookie};