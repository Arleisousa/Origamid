const menu = document.querySelector('.menu')

menu.classList.add('teste')
menu.classList.toggle('azul')



// Adicione a classe ativo a todos os itens do menu
    const itensmenu = document.querySelectorAll ('.menu a')

    itensmenu.forEach(() => {
        itensmenu.classList.add('ativo')
    })

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

    itensmenu.forEach(() => {
        itensmenu.classList.remove('ativo')
    })

    itensmenu[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
   const possuiAtributo = img.hasAttribute('alt')
   
   console.log(possuiAtributo)
})

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com')
