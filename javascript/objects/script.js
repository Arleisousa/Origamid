const carro = {
    rodas: 4,
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro)
honda.marca = 'honda'

const ferrari = Object.create(carro)
ferrari.marca = 'ferrari'
console.log(ferrari.acelerar())


//Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo
const funcaoAutomovel = {
    acelerar() {
      return 'acelerou';
    },
    buzinar() {
      return 'buzinou';
    },
  }

  const moto = {
    rodas: 2,
    capacete: true,
  }

  Object.assign(moto, funcaoAutomovel)


//Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

  const bike = {}
  

  //Object.defineProperties(moto, {
   // rodas: {
    //    value: 2,
    //    get() {

    //    },
    //    set() {

   //    }
  //  }
 // })

  //Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.

  const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false



// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado)
}

console.log(verificarDado(''))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {}

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
})

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao)

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))