let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let t ='tipo_de_'

let carro = {
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    //parte 3
    [t+"carro"]: "sedan",
    //podemos iniciar uma function sem precisar escrever function ES6
    ligar(){
        console.log('O carro ligou');
    },
    //maneira antiga
    desligar: function(){
        console.log('Ocarro desligou')
    }
};

let barco = {
    [t+'barco']:'lancha'
}

let aviao = {
    [t+'aviao']:'Boeing'
}

console.log(carro.tipo_de_carro)

console.log(barco.tipo_de_barco)
console.log(aviao.tipo_de_aviao)