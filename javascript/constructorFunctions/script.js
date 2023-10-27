function Carro(MarcaAtribuida, PrecoAtribuido) {
    this.marca = MarcaAtribuida
    this.preco = PrecoAtribuido
}

const honda = new Carro('honda', 3900)
const fiat = new Carro('fiat', 20000)

function Carro2(MarcaAtribuida, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = MarcaAtribuida
    this.preco = precoFinal

    console.log(this)
}

const mazda = new Carro2('mazda', 9000)