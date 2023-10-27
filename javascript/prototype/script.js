//prototype está ligado sempre a função



function Pessoa(nome, ano) {
    this.nome = nome 
    this.ano = ano
}

Pessoa.prototype.andar = function() {
    return 'Pessoa Andou'
}

const andre = new Pessoa('Andre', 29)

console.log(Pessoa.prototype)

///////////////////////////////////////////////////////////////////////////////////


//Esses códigos são a mesma coisa
const pais = 'Brasil'
const cidade = new String('Rio')





const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);




//Entenda Sempre oque está retornando 

const Carro = {
    marca: 'Ford',
    preco: 2000,
    acelerar() {
      return true;
    }
  }
  
  Carro // Object
  Carro.marca // String
  Carro.preco // Number
  Carro.acelerar // Function
  Carro.acelerar() // Boolean
  Carro.marca.charAt // Function
  Carro.marca.charAt(0) // String
  
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.NomeCompleto = function () {
   return this.nome + this.sobrenome
}

const Pessoa1 = new Pessoas('Joao', 'Pedro', 14)
const Pessoa2 = new Pessoas('Lucas', ' Pietro', 19)


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; // Number
li.click(); //Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string 
