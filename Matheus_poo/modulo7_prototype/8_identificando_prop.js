// E é claro que utilizando o método hasOwnProperty, conseguimos saber se a propriedade é do objeto ou do protoype

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    // this.calota = true;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = 'false';

let fusca = new Carro('VW', 10000);

if(fusca.hasOwnProperty('calota')){
    console.log('A propriedade calota é do objeto');
} else if(fusca.constructor.prototype.hasOwnProperty('calota')){
    console.log('A propriedade calota é do prototype');
}else {
    console.log('A propriedade calota não existe');
}