//const Dom = {
//  seletor: 'li',
// element() {
//     return document.querySelector(this.seletor)
// },
//
//  ativar() {
//      const elementoSelecionado = this.element()
//      elementoSelecionado.classList.add('ativar')
//  }
//}


function Dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor)
    }
    this.ativar = function () {
           this.element().classList.add('ativar')
        }
}

const li = new Dom('li')
const ul = new Dom('ul')


// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(this.nome + 'Andou')
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const joao = new Pessoa ('joao', 20)
  const maria = new Pessoa ('maria', 25)
  const bruno = new Pessoa ('bruno', 15)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = function(classe) {
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }

    this.removeClass =  function(classe) {
        elementList.forEach((element) => {
            element.classList.remove(classe)
        })
    }
   }


  const listaItens = new Dom ('li')
  listaItens.addClass('ativar')