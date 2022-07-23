//Deletando propriedades e métodos, ps: não é comum deletar uma propriedade

let carro ={
    tipo: 'SUV',
    ligar: () => console.log('Ligou')
};

console.log(carro);
console.log(carro.tipo);

delete carro.tipo;
console.log(carro)
delete carro.ligar;
console.log(carro)


