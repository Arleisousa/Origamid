const botao = document.querySelector('.botao')

function mostrar() {
   const texto = document.querySelector('.texto')
   texto.classList.toggle("ativar") 
//No JavaScript, o método classList.toggle() é usado para alternar (adicionar ou remover) uma classe de um elemento HTML
}


botao.addEventListener('click', mostrar)


function scroll() {
   console.log('usou o scroll')
}

window.addEventListener('scroll', scroll)





//1 - Crie um círculo com uma div de width: 16px, height: 16px e background: #999;
//2 - Adicione ao window uma função que ocorre ao "mousemove";
//3 - Na função mude as propriedades top e left do círculo com base no mouse.
//4 - Você pode usar elemento.style.propriedade para mudar o CSS diretamente.



function seguirMouse(event) {
   const x = event.x
   const y = event.y
  const circulo = document.querySelector('#circulo')
  circulo.style.top = y + 'px'
  circulo.style.left = x + 'px'
}


window.addEventListener('mousemove', seguirMouse)