//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll('img')

imgs.forEach(function(item, index, array, ) {
    console.log(item, index, array)
})

imgs.forEach((item) => {
    console.log(item, index, array)
})