/*

const carros = ['ford', 'fiat', 'honda']

carros.forEach((item, index, array) => {
    array[index] = 'teste'
    console.log(item.toUpperCase(), index, array)
})

console.log(carros)

const li = document.querySelectorAll('li');

li.forEach((item,index) => {item.classList.add('ativa' + index)}); //isso é a mesma coisa que o debaixo

li.forEach(function(item) {
  item.classList.add('ativa');
});


const animais = ['peixe', 'cachorro', 'gato'];

const novoAnimais = animais.map((item, index, array) => {
    return item.toUpperCase()
})

console.log(animais)
console.log(novoAnimais)

const numeros = [2,4,5,6,7,8]
const numerosX2 = numeros.map((item) => {
    return item * 2
})

console.log(numerosX2)

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

  const tempoAulas = aulas.map((aula) => {
    return aula.min
  })

  console.log(tempoAulas)


  const nomeAulas = aula => aula.nome

  const arrayNomeAulas = aulas.map(nomeAulas)

  console.log(arrayNomeAulas)

*/

/*
  const aulas2 = [10, 25, 30];

  const reduceAulas = aulas2.reduce((acumulador, item, index) => {
    console.log(acumulador, item, index)
    return acumulador
  }, 33)

  console.log(reduceAulas)

  const numeros3 = [11, 12, 3, 5, 5, 7, 33, 87]
  const maiorNumero = numeros3.reduce((anterior, atual) => {
    if (anterior > atual) {
        return anterior
    } else {
        return atual
    }
  }, 0)

  console.log(maiorNumero)

  */


  // 1

  const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const listaAulas = aulas.reduce((acumulador, aula, index) => {
    acumulador[index] = aula.nome;
    return acumulador;
  }, {})
  


  //Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.
  const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva


//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas2 = ['Banana', 'Pêra', 'Uva'];

const temUva = frutas.some((item) => {
    console.log(item)
    return item === 'Uva'
})

console.log(temUva)

//[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every(x => x > 3); // true


//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

console.log(buscaUva)

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find(x => x > 45); // 88

console.log(buscaMaior45)

//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutass = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutass.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeross = [6, 43, 22, 88, 101, 29];
const buscaMaiorr45 = numeross.filter(x => x > 45); // [88, 101]

const aulas3 = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const aulasMaiores = aulas3.filter((aula) => { 
    return aula.min > 20;
  });
  
  console.log(aulasMaiores)
  