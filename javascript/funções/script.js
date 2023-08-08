function teste(lado) {
    return lado + lado
}

console.log(teste(8))

function pi() {
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7
  
console.log(total)

function triangulo(lado, altura) {
    return lado * altura
}

const area = triangulo(7, 3)

console.log(area)

function corFavorita (cor) {
    if (cor === 'azul') {
        return 'eu amo o céu'
    } else if (cor === 'verde') {
        return 'eu amo a floresta'
    } else if (cor === 'roxo') {
        return 'eu amo a cor roxa'
    } else {
        return 'essa não é uma das minhas cores favoritas'
    }
      }

console.log(corFavorita('preto'))


addEventListener ('click', function(){ console.log ('ola') } )