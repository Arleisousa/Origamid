console.log(Number.isNaN(NaN)) //Método para verificar se retorna NaN
console.log(Number.isInteger(134.2)) //Método para verificar se um número é inteiro
console.log(parseFloat('3423')) //Método para transformar string em número
console.log(parseInt('123.4'))//Método para transforma número float em inteiro


const preco = 10.323

console.log(preco.toFixed(2)) //Arredonda um número, e vc passa no argumento quantas casas decimais pode colocar a direita


let valor = 49.49

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) //Fazendo uma moeda

console.log(valor)


//MATH
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

Math.PI // 3.14159
Math.E // 2.718
Math.LN10 // 2.303


//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo. round() arredonda para o número integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
//Math.floor(Math.random() * (max - min + 1)) + min;




// Retorne um número aleatório
// entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1) + 1050))

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(',').map(Number)
let maiorNumero = Math.max(...numerosArray)

console.log(maiorNumero)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

    function LimparPreco(preco) {
        preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.')
        preco = +preco.toFixed(2)

        return preco
    }


    let soma = 0
    listaPrecos.forEach((precos) => {
        soma += LimparPreco(precos)
    })

    console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' }))
