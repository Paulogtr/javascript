//Há tambpem a possibilidade de utilizaro destructuring para mudar o valor de variaveis ja criadas;

let carro ={
    portas: 4,
    aro: 20,
    tetoSolar:true,
    banco: 'couro'
};

let portas2 = 0;

({portas, aro, tetoSolar, banco} = carro);

({portas} = carro);

console.log(portas)

