const img = document.querySelectorAll('#galeria li img')

function galeriaTrocar(event) {
    const principal = document.querySelector('#img-principal')
    const clicada = event.currentTarget
    principal.src = clicada.src
    console.log(clicada.src)
}



function galeriaClique(imagem) {
    imagem.addEventListener('click', galeriaTrocar)
}

img.forEach(galeriaClique)