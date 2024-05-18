for(let i = 1; i <= 10; i++){
    const lista_valores = []
    document.write("<table border=1 id='tabela'> ")
    document.write("<thead><tr><th colspan=2>Produtos de "+i+"</th></tr></thead>")
    document.write("<tbody>")
    for(let j = 1; j <= 10; j++){
        
        valor = i * j
        document.write("<tr> <td align='center'>"+ j+"x"+j+"</td> <td align='center' >"+valor+"</td> </tr>")
    }
    document.write("</tbody>")
    document.write("</table>")
}