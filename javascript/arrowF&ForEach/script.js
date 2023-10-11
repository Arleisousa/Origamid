//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.


const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos); //transformando array-like em array

titulosArray.forEach(function(item){
  console.log(item);
});

//Arrow Function

imgs.forEach((item) => {

}) 






