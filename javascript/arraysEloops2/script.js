const links = document.querySelectorAll('nav a')

function ativarLink(link) {
   const href = link.href
   const url = document.location.href

    if(href === url) {
    link.style.backgroundColor = "black"
    link.style.color = "white"
    }

}

links.forEach(ativarLink) 















//const lista = ['JavaScript', 10, 'true']
//const body = document.querySelector("body")



//for(let index = 0; index < lista.length; index++) { //sintax do loop
   // body.innerHTML += "<li>" + lista[index] + "</li>"
//}

//function adicionar(item) {
 //   body.innerHTML += "<p>" + item + "</p>"
//}


//lista.forEach(adicionar)