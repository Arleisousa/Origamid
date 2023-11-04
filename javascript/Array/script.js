
const carros = new Array('ford', 'fiat', 'honda');

carros[2] = 'ferrari'

console.log(carros.length); //mostra quantos itens tem uma array


let li = document.querySelectorAll('li')

const arrayLi = Array.from(li)  //Transforma node list em uma array

console.log(li)
console.log(arrayLi)

//Verifica se o valor passado é uma array e retorna um valor booleano.

Array.isArray(li); // false
li = Array.from(li); // Array
Array.isArray(li); // true


let instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort() //Organiza a array em ordem alfabetica

console.log(instrumentos)


const animais = ['cat', 'dog', 'passaro'];
const animaisNovo = animais.unshift('kia') //coloca um item no começo da array e retorna a quantidade de itens que tem na array
animais.push('peixe') //coloca um item no final da array e retorna a quantidade de itens que tem na array

console.log(animaisNovo)


//[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];




const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford']; //[].reverse() inverte os itens da array e retorna a nova array.

//[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens)

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros4.splice(1, 0, 'Kia', 'Mustang'); // []
carros4; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros4.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros4; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


//[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

const banana = ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');

console.log(banana)
// ['Banana', 'Banana', 'Banana', 'Banana']

//['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

//['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2)

console.log(transportes)


//[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('r'))
console.log(linguagens.includes('css')) // true
console.log(linguagens.includes('ruby')) // false
console.log(linguagens.indexOf('python')); // 4
console.log(linguagens.indexOf('js')) // 2
console.log(linguagens.lastIndexOf('js')) // 5

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2')
htmlString = htmlString.join('h1')

console.log(htmlString)


//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3); // ['php', 'python']
linguagens.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice();


const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const pizza = comidas.shift()
console.log(pizza)

// Remova o último valor de comidas e coloque em uma variável
const Macarrão = comidas.pop()
console.log(Macarrão)
// Adicione 'Arroz' ao final da array
comidas.push('arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('peixe', 'batata')
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
// Inverta a ordem dos estudantes
estudantes.reverse()
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'))

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
console.log(html.split('section').join('ul').split('div').join('li'))
// utilizando split e join

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
const carrosCopia = carros5.slice()
console.log(carrosCopia)
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
carros5.pop()

console.log(carros5)

