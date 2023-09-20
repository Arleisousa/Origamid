const botao = document.querySelector('.botao')

function somar() {
    const div = document.querySelector('div')
    const total = Number(div.innerText) + 1
    if(total < 10) {
        div.innerText = total
    } else {
        console.log('vc ultrapassou os limites')
    }
}


if(botao) {
botao.addEventListener('click', somar)
}