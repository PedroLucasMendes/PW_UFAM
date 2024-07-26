"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProfs = listProfs;
exports.listTecn = listTecn;
function listProfs(profs) {
    return `<ul>${profs.map(prof => `<li>${prof.name}</li>`).join(",")}</ul>`;
}
function listTecn(tecns) {
    const list = [];
    tecns.forEach(tech => {
        if (tech.poweredByNodejs) {
            list.push(tech);
        }
    });
    const listFinal = list.map((p) => `<li>${p.name} - ${p.type}</li>`);
    return `<ul>${listFinal.join('')}</ul>`;
}
