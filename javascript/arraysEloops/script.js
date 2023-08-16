
let videoGames = ['ps4', 'xbox', 'nintendo', '3DS']

for (let item = 0; item < videoGames.length; item++) { 
    console.log(videoGames[item])
    if(videoGames[item] === 'xbox') {
        break
    }
} 

//let frutas = ['uva', 'pera', 'banana', 'abacaxi']

//frutas.forEach(function(fruta) {
    //console.log(fruta)
//})


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let copas = [1959, 1962, 1970, 1994, 2002]


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(let i = 0; i < copas.length; i++) {
    console.log('O Brasil ganhou a copa de '+ copas[i]);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for ( var frutass = 0; frutass < frutas.length; frutass++) {
    console.log(frutas[frutass])
    if (frutas[frutass] === 'Pera') {
        break
    }
}



// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.


let ultimaFruta = frutas[frutas.length - 1]

