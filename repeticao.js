// Loop, trecho de código que será executado várias vezes
const names = ['Keila', 'Sandra', 'Davi']

names.forEach( (elemento)=> {//Para cada elemento do tamanho do array
    console.log(elemento)
})

for (let index = 0; index < names.length; index++) {
    console.log(index)//indice (tamanho do array)  
}

for (let index = 0; index < names.length; index++) {
    console.log(names[index])//agora vai mostrar os elementos  
}

for (let index = 0; index < names.length; index++) {
    console.log('posição: ' + names[index])//agora vai concatenar
}