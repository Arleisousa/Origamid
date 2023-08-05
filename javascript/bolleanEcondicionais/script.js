let possuiGrad = false
let possuiDot = false
let possuiDoteGrad = false
let possuiNada = true

if (possuiGrad) {
    console.log('Ele tem grad')
} else if(possuiDot) {
    console.log('Ele não tem grad mas tem doutorado')
} else if (possuiDoteGrad) {
    console.log ('Ele possui dot e grad')
} else {
    console.log('Ele não tem nada morando em barraco')
}

let nome = ''

if(nome) {
    console.log('Esse é meu nome')
} else {
    console.log('Seu nome não foi definido')
}

let possuiCarro = true

if (!possuiCarro) {
    console.log('Isso é verdadeiro')
} else {
    console.log('isso não é verdadeiro')
}

let number = 15

if (number > 3) {
    console.log ('verdadeiro')
} else {
    console.log ('falso')
}

let corFav = 'cinza'

switch (corFav) {
    case 'Verde':
        console.log ('Essa é minha cor favorita')
        break
    case 'rosa':
        console.log('Eu gosto dessa cor da barbie')
        break
    case 'vermelho':
        console.log('eu gosto dessa cor de sangue')
        break
    case 'azul':
        console.log('eu gosto dessa cor do céu')
        break
        default:
        console.log('minha cor favorita não foi encontrada')
}

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

let minhaIdade = 17
let idadeParente = 13

if (minhaIdade > idadeParente) {
    console.log('Minha idade é maior')
} else if (minhaIdade === idadeParente) {
    console.log('É igual')
} else (
    console.log('Minha idade é menor')  
)


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var name = 'Andre'; //truthy
var idade = 28; //truyhy
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log ('Brasil é maior que a china')
} else {
    console.log('Brasil é menor que a china')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}