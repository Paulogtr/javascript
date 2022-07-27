//Um outro recurso que veio com o ES6 trazendo algumas funcionalidades
// Podemos criar varias variaveis com uma linha só, desestruturando um objeto

let carro ={
    portas: 4,
    aro: 20,
    tetoSolar:true,
    banco: 'couro'
};

let{portas, aro, tetoSolar, banco} = carro;

console.log(portas);
console.log(aro);
console.log(tetoSolar);
console.log(banco);