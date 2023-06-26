
/*André Luís A. Rodrigues Nº2 1ºC*/
/*Henrique G. Marques Nº16 1ºC*/

var data = {
    nome : document.getElementById("nome"),
    horas : document.getElementById("horas"),
    preco : document.getElementById("preco"),
    dependentes : document.getElementById("dependentes"),
}

var returns = {
    INSS : "",
    IRRF : "",
    valorIRRF : 0,
    valorINSS : 0,
    salBruto : 0,
    salario : 0,
    desconto :  0
}

function start() {
    calcular()
    calcularINSS()
    calcularIRRF()
    render()
}

function calcular(){
    desconto =   dependentes.valueAsNumber * 189.59
    salBruto = (horas.valueAsNumber * preco.valueAsNumber)
}

function calcularIRRF() {

    salario = ((salBruto - valorINSS) - desconto)

    if(salario < 1903.98){
        valorIRRF = 0
        IRRF = '-'
    }
    else if (salario < 2826.65) {
        valorIRRF = ((salario * 75/1000) - 142.8)
        IRRF = '7.5%'
    }
    else if (salario < 3751.05) {
        valorIRRF = ((salario * 15/100) - 354.8)
        IRRF = '15%'
    }
    else if (salario < 4664.68) {
        valorIRRF = ((salario * 225/1000) - 636.13)
        IRRF = '22.5%'
    }
    else if (salario > 4664.68) {
        valorIRRF = ((salario * 275/1000) - 869.36)
        IRRF = '27.5%'
    }
    else{
        IRRF = '-'
    }
}

function calcularINSS(){

    if(salBruto <= 1751.81){
        valorINSS = (salBruto * 8/100)
        INSS = '8%'
    }
    else if (salBruto <= 2919.72) {
        valorINSS = (salBruto * 9/100)
        INSS = '9%'
    }
    else if (salBruto <= 5839.45) {
        valorINSS = (salBruto * 11/100)
        INSS = '11%'
    }
    else if (salBruto > 5839.45) {
        valorINSS = 642.34
        INSS = 'R$ 642.34'
    }
    else{
        INSS = '-'
    }
}

function render() {
    salLiq = (salBruto - (valorINSS + valorIRRF))

    let text = `<h4>${data.nome.value} - Tabela de Salário</h4>` /*Texto da Tabela:*/
    text += '<table style="width:100%">'
        text += '<tr>'
            text += '<th>Dados</th>'
            text += '<th>Valor</th>'
            text += '<th>Desconto</th>'
        text += '</tr>'
        text += '<tr>'
            text += '<td>INSS</td>'
            text += `<td>R$ ${valorINSS}</td>`
            text += `<td>${INSS}</td>`
        text += '</tr>'
        text += '<tr>'
            text += '<td>IRRF</td>'
            text += `<td>R$ ${valorIRRF}</td>`
            text += `<td>${IRRF}</td>`
        text += '</tr>'
        text += '<tr>'
            text += '<td>Salário Bruto</td>'
            text += `<td>R$ ${salBruto}</td>`
            text += '<td>-</td>'
        text += '</tr>'
        text += '<tr>'
            text += '<td>Salário Líquido</td>'
            text += `<td>R$ ${salLiq}</td>`
        text += `<td>-</td>`
        text += '</tr>'
    text += '</table>'

    document.getElementById("resp").innerHTML = text
}

document.addEventListener('keydown', event => {
    if(event.keyCode === 13) {
        start()
    }
})