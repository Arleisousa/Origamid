const img = document.querySelectorAll('#galeria li img')


function GaleriaTrocar(event) {
    const imgPrincipal = document.querySelector('#img-principal')
    const clicada = event.currentTarget
    imgPrincipal.src = clicada.src

}

function galeriaClicada(imagem) {
    imagem.addEventListener('click', GaleriaTrocar)
}


img.forEach(galeriaClicada)