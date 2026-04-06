'use strict'

function gerarTabela(){

    let input = Number(document.getElementById('input').value)

    let tabela = document.getElementById('tabelaDeDados')
    tabela.replaceChildren()

    for (let indice = 1; indice<=10;indice ++) {
        const tableRow = document.createElement('tr')
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        td1.textContent = indice
        td2.textContent = input + indice
        td3.textContent = input - indice
        td4.textContent = input*indice
        td5.textContent = (input/indice).toFixed(2)

        tableRow.appendChild(td1)
        tableRow.appendChild(td2)
        tableRow.appendChild(td3)
        tableRow.appendChild(td4)
        tableRow.appendChild(td5)
        tabela.appendChild(tableRow)
    }

}