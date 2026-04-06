'use strict'

function simularFinanciamento(){

    let valor = Number(document.getElementById('valor').value)
    let taxaDeJuros = Number(document.getElementById('taxaDeJuros').value)/100
    let numeroDeParcelas = Number(document.getElementById('numeroDeParcelas').value)

    let total = valor*(1+taxaDeJuros)**numeroDeParcelas

    let tabela = document.getElementById("tabelaDeDados")
    tabela.replaceChildren()

    for (let index = 1; index <= numeroDeParcelas; index++) {

        let parcela = valor/numeroDeParcelas
        let jurosDoMes = parcela*taxaDeJuros
        let totalDoMes = parcela+jurosDoMes
        let SaldoDevedor = total - (valor*(1+taxaDeJuros)**index)

        const tableRow = document.createElement("tr")
        const tdMes = document.createElement("td")
        const tdParcela = document.createElement("td")
        const tdJurosDoMes = document.createElement("td")
        const tdTotalDoMes = document.createElement("td")
        const tdSaldoDevedor = document.createElement("td")

        tdMes.textContent = index
        tdParcela.textContent = parcela
        tdJurosDoMes.textContent = jurosDoMes
        tdTotalDoMes.textContent = totalDoMes
        tdSaldoDevedor.textContent = SaldoDevedor.toFixed(2)

        tableRow.appendChild(tdMes)
        tableRow.appendChild(tdParcela)
        tableRow.appendChild(tdJurosDoMes)
        tableRow.appendChild(tdTotalDoMes)
        tableRow.appendChild(tdSaldoDevedor)
        tabela.appendChild(tableRow)
    }
}

