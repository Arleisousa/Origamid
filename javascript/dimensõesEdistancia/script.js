const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

const sectionn = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

//const img = document.querySelector('img')
//const imgTop = img.offsetTop

//console.log(imgTop)

// Retorne a soma da largura de todas as imagens
const fodase = document.querySelectorAll('img')
let soma = 0
fodase.forEach((img) => {
    soma = soma + img.offsetWidth

    console.log(soma)
})


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight
    if(linkWidth >= 48  && linkHeight >= 48) {
        console.log(link, 'possui acessibilidade')
    } else {
        console.log(link, 'não possui')
    }
})
 
console.log(links)

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}
