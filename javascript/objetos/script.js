let pessoa = {
    nome: 'Arlei',
    idade: 17
}

console.log(pessoa.nome)

let quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(4))



// Crie um objeto com os seus dados pessoais

let dados = {
    nome: 'Arlei',
    sobreNome: 'Domingos',
    idade: 17,
    FazFacul: true, 
} 



// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobreNome}` 
}

console.log(dados.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

  carro.preco = 3000

  console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  let cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'latir'
        } else {
            return 'nada'
        }
    }
  }

  const botao = document.querySelector('.botao')

  botao.addEventListener('click', function() {
    event.preventDefault()
    const p = document.querySelector('p')
    p.textContent = 'clicou'
    document.body.appendChild(paragrafo);
  }
  )