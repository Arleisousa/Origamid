function livro(nome, ano, autor) {
   const nomeMaior = nome.toUpperCase()
   const totalAno = 2050 - ano
   const frase = nome + ' por ' + autor
   const objeto = {
    nome: nomeMaior,
    totalAno,
    frase,
   } 
   return objeto
}

const livroRetorno = livro("Os 7 maridos de Evelyn Hugo", 2005, 'Jack Chan')
console.log(livroRetorno.frase)



