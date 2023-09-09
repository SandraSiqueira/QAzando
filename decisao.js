// IF ELSE

var idade = 25

if (idade == 30) {
    console.log('É igual a 30')
} else {
    console.log('Não é igual a 30')
}

idade = 45
if (idade <= 30) {
    console.log('É menor que 30')
} else {
    console.log('Não é menor que 30')
}

var masculino = false

if (masculino == true) {
    console.log('Entrou no IF')
} else {
    console.log('Não entrou no IF')
}

var nome = 'eduardo'

if (nome == 'dudu') {
    console.log('Entrou no IF')
} else if (nome == 'eduardo'){
    console.log('Entrou no segundo IF')
}else {
    console.log('Não entrou em nada')
}