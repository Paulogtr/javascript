class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log('Está latindo')
    }
}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

//acessando Symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);