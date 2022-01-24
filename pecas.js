let pesoPeca  = 100

if(pesoPeca > 100) {
    console.log("Peso maior que 100g, podemos cadastrar a peça.")
} else { 
    console.log("Peso insuficiente, impossível cadastrar a peça.")
}


let numeroPecas = 10

if (numeroPecas < 10) {
    console.log ("Numero de peças menor que 10, podemos incluir na caixa.")
} else {
    console.log ("Numero de peças maior que 10, impossível incluir na caixa.")
}


let nomePeca = "Disco de freio"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if (nomePeca.length < 3) {
    console.log ("Nome da peça muito curto, impossível cadastrar.")
} else {
    console.log ("Nome da peça adequado, podemos cadastrar")
}