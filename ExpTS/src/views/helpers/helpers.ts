import { Profs } from "./helpersTypes"
import { Tecn } from "./helpersTypes"

export function listProfs (profs: Profs[]){
    return `<ul>${profs.map(prof => `<li>${prof.name}</li>`).join(",")}</ul>`
}

export function listTecn (tecns: Tecn[]){
    const list: Tecn[] = [];
    tecns.forEach(tech => {
        if(tech.poweredByNodejs){
            list.push(tech);
        }
    });
    const listFinal = list.map((p)=>`<li>${p.name} - ${p.type}</li>`);
    return `<ul>${listFinal.join('')}</ul>`;

}