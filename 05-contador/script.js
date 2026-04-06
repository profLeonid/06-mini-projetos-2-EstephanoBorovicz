/*objetivo: criar as funções de contagem, pares, ímpares, múltiplos de 5 e poências de 2
para integrá-las no website do exercício.
Autor: Estephano Borovicz.
Data: 30/03/2025.
*/

'use strict'

function contar(input) {

    let contador = []

    for (let index = 1; index <= input; index++) {
        contador.push(index)
    }

    return contador
}

function calcularPares(input) {
    
    let pares = []

    for (let index = 1; index <= input; index++) {
        pares.push(index * 2)
    }

    return pares
}

function calcularImpares(input) {
    let impares = []

    for (let index = 1; index <= input; index++) {
        impares.push((index * 2) - 1)
    }

    return impares
}

function calcularMultiplosDeCinco(input) {
    let multiplosDeCinco = []

    for (let index = 1; index <= input; index++) {
        multiplosDeCinco.push(index * 5)
    }

    return multiplosDeCinco
}

function calcularPotenciasDeDois(input) {
    let potenciasDeDois = []

    for (let index = 1; index <= input; index++) {
        potenciasDeDois.push((2 ** index))
    }

    return potenciasDeDois
}

function gerarTabela() {

    let input = Number(document.getElementById("input").value)

    let contador = contar(input)
    let pares = calcularPares(input)
    let impares = calcularImpares(input)
    let multiplosDeCinco = calcularMultiplosDeCinco(input)
    let potenciasDeDois = calcularPotenciasDeDois(input)

    let tabela = document.getElementById("tabelaDeDados")
    tabela.replaceChildren()

    for (let index = 0; index <= input; index++) {

        const tableRow = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")

        td1.textContent = contador[index]
        td2.textContent = pares[index]
        td3.textContent = impares[index]
        td4.textContent = multiplosDeCinco[index]
        td5.textContent = potenciasDeDois[index]

        tableRow.appendChild(td1)
        tableRow.appendChild(td2)
        tableRow.appendChild(td3)
        tableRow.appendChild(td4)
        tableRow.appendChild(td5)
        tabela.appendChild(tableRow)
    }
}



