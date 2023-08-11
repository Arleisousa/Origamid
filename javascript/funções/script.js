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

function terceiraIdade(idade) {
    if ( typeof idade !== 'number') {
       return 'porfavor digite um numero'
    } else if (idade >= 60) {
      return true
    } else {
      return false
    }   
}

console.log(terceiraIdade(50))

function faltaVisitar(PaisesVisitados) {
    let totalPaises = 190
    return `Faltar visitar ${totalPaises - PaisesVisitados} países`
}

console.log(faltaVisitar(60))



// Crie uma função para verificar se um valor é Truthy

  function valor(dado) {
    return !!dado
    }
    console.log(valor(''))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado(lado) {
    return lado*4
}

console.log(quadrado(2))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function NomeCompleto (nome, sobrenome) {
    return `${nome + sobrenome}`
}

console.log(NomeCompleto ('arlei ', 'domingos'))


// Crie uma função que verifica se um número é par
 
function epar (numero) {
    let modulo = numero % 2

    if (modulo === 0) {
        return true
    } else {
        return false 
    }
}

console.log(epar(3784378))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipodedado (dados) {
    return typeof dados
}

console.log(tipodedado(''))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.


addEventListener ('scroll', function() {
    console.log ('arlei domingos')
} )

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }

  console.log(precisoVisitar(20));
  console.log (jaVisitei(20));

  //basicamente so trocamos a variavel de lugar, colocamos ela pra cima 
  