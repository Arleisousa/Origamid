/*
const img = document.querySelector('img')

function callback(event) {
    console.log('clicou')
}

img.addEventListener('click', callback)
*/

const animaisLista = document.querySelector('.animais-listas')

function callbacklista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
}

//animaisLista.addEventListener('click', callbacklista)


const h1 = document.querySelector('h1')

function eventorandon(event) {
    console.log(event.type, event)
}


//h1.addEventListener('click', eventorandon)
//h1.addEventListener('mouseenter', eventorandon)
//h1.addEventListener('mousemove', eventorandon)
//window.addEventListener('scroll', eventorandon)
//window.addEventListener('keydown', eventorandon)


//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard

function handleKeyboard(event) {
    if (event.key === 'a') {
        document.body.classList.toggle('azul')
    } else if (event.key === 'v') {
        document.body.classList.toggle('vermelho')
    }
}

window.addEventListener('keydown', handleKeyboard) //A key propriedade retorna a tecla que foi pressionada quando o evento ocorreu.

const imgs = document.querySelectorAll('img')

function handleimg(event) {
    console.log(event.target)
}
 
imgs.forEach((img) => {
    img.addEventListener('click', handleimg)
})

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

    const linksI = document.querySelectorAll('a[href^="#"]')

    function  handlelink (event) {
        event.preventDefault()

        linksI.forEach((link)=> {
            link.classList.remove('ativo')
        })

        event.currentTarget.classList.add('ativo')

        console.log(event)
    } 


    linksI.forEach((link) => {
        link.addEventListener('click', handlelink)
    })


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todos = document.querySelectorAll('body *')

function handleElemento(event) {
    console.log(event.currentTarget)
}

todos.forEach((itens) => {
    itens.addEventListener("click", handleElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElemento(event) {
    event.currentTarget.remove()
}


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


  function handleclickT (event) {
        if (event.key === 't') {
            document.documentElement.classList.toggle('textomaior')
        }
  } 

  window.addEventListener('keydown', handleclickT)

