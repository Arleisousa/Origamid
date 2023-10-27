const comida = 'pizza'
const Animal = new String ('Leão')

console.log(comida.length) // a propriedade lenght retorna quantas letras a string tem
console.log (Animal.length)


const frase = 'A melhor comida'


console.log(frase[0]) //pode acessar a letra de uma string como se fosse uma array
console.log(frase[frase.length - 1]) //p descobrir a ultima letra de qualquer string, diminui com -1
console.log(frase.charAt(2)) //metodo que faz a mesma coisa de um array


const frase1 = 'A melhor linguagem é '
const linguagem = 'java'
const fraseFinal = frase1.concat(linguagem, '!!') //metodo para contatenar strings

console.log(fraseFinal)

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

/////////////////////////////////////////////////////////////////////////////////////////////

//Corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//////////////////////////////////////////////////////

//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

/////////////////////////////////////////////////////////////////////////////////////////////

const preco = 'R$ 99,00'
console.log(preco.padStart(20, 'a'))

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => {
    console.log(item.padStart(10))
})

/////////////////////////////////////////////////////

const nome = 'arlei'

console.log(nome.repeat(10)) //repete a string, apenas


///////////////////////////////////

//Divide a string de acordo com o padrão passado e retorna uma array.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ',')


const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

/////////////////////////////////////////////

//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

///////////////////////////////////////////////////


//Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
