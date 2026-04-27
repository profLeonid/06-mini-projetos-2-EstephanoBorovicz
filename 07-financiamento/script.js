'use strict'

function simularFinanciamento(){

    let valor = Number(document.getElementById('valor').value)
    let taxaDeJuros = Number(document.getElementById('taxaDeJuros').value)
    let numeroDeParcelas = Number(document.getElementById('numeroDeParcelas').value)
    let saldoDevedor = valor
   
    let tabela = document.getElementById("tabelaDeDados")
    tabela.replaceChildren()

    for (let index = 1; index <= numeroDeParcelas; index++) {

        let parcela = (valor/numeroDeParcelas)
        let jurosDoMes = (parcela*(1+taxaDeJuros/100)**(numeroDeParcelas-index) - parcela)
        let totalDoMes = parcela + jurosDoMes
        saldoDevedor = saldoDevedor-parcela

        const tableRow = document.createElement("tr")
        const tdMes = document.createElement("td")
        const tdParcela = document.createElement("td")
        const tdJurosDoMes = document.createElement("td")
        const tdTotalDoMes = document.createElement("td")
        const tdSaldoDevedor = document.createElement("td")

        tdMes.textContent = index
        tdParcela.textContent = parcela
        tdJurosDoMes.textContent = jurosDoMes.toFixed(2)
        tdTotalDoMes.textContent = totalDoMes.toFixed(2)
        tdSaldoDevedor.textContent = saldoDevedor.toFixed(2)

        tableRow.appendChild(tdMes)
        tableRow.appendChild(tdParcela)
        tableRow.appendChild(tdJurosDoMes)
        tableRow.appendChild(tdTotalDoMes)
        tableRow.appendChild(tdSaldoDevedor)
        tabela.appendChild(tableRow)
    }
}

