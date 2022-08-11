// Podemos deletar uma propriedade, e voltar a utilizar o prototype;
// pois mesmo sendo sobrescrito, ainda estará disponível;

function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = 'Preto';
Carro.prototype.calota = 'false';

let fusca = new Carro('VW', 10000);

console.log(fusca.calota);

delete fusca.calota;

console.log(fusca.calota) // obj[] -> prototype[dado]