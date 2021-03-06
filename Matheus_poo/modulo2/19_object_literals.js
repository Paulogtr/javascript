//Função do ES6, que permite criar objetos mais rapidamente
//Utilizando nomes de variáveis para nomes de propriedades

let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    //podemos iniciar uma function sem precisar escrever function ES6
    ligar(){
        console.log('O carro ligou');
    },
    //maneira antiga
    desligar: function(){
        console.log('Ocarro desligou')
    }
};

console.log(carro);

console.log(carro.rodas);

carro.ligar();
carro.desligar();