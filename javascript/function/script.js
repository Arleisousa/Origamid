function darOi(nome, idade) {
    console.log('oi pra vc ' + nome + idade)
}

darOi.call({}, 'arlei ', 29)


function descricaoCarro() {
    console.log(this.marca + '' + this.ano)
}

descricaoCarro.call({marca: 'honda ', ano: 2034})

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro


//HTMLCollection, NodeList e demais objetos do Dom, são parecidos com uma array. Por isso conseguimos utilizar os mesmos na substituição do this em call.

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, function(item) {
  return item.classList.contains('ativo');
});

filtro; // Retorna os itens que possuem ativo
