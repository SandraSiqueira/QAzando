// Bloco de código/método que irá fazer uma determinada ação

//function soma () {
    //console.log(1+2)
//}

//soma()//Chamando a função

function somaComParametro (numero1, numero2) {
    //console.log('****** Função *******')
    var numeroSomado = numero1 + numero2
    return numeroSomado
    //console.log('****** Com Parâmetros *******')
}

//somaComParametro(100,254)//Chamando a função passando os parâmetros, reaproveitando a função, podendo colocar qualquer valor
console.log('****** Função *******')
console.log(somaComParametro(4,7))
console.log('****** Com Parâmetros *******')