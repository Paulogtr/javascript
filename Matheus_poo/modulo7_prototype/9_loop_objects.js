// O loop mais indicado para percorrer objetos é o for...in
// Isso porque for normal serve mais para arrays

function Carro(marca, preco, cor, aro) {
    this.marca = marca;
    this.preco = preco;
     this.calota = true;
    this.cor = cor;
    this.aro = aro;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = 'false';

let fusca = new Carro('VW', 10000, 'Preto', '17');

for(propriedades in fusca){
    console.log(propriedades + ' => ' + fusca[propriedades]);
}

console.log(fusca);