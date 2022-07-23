

let carro ={
    tipo: 'SUV'
}

//adicionando propridades para um objeto depois de ja criado
carro.portas = 4;

console.log(carro);

if(carro.tipo == "SUV"){
    carro.tetoSolar = true;
};

console.log(carro);

carro.acelerar = () => console.log('Esta acelerando');

carro.acelerar()