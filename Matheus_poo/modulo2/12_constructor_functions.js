function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
    this.atiraArma = function(){
        console.log(this.nome  +' Atirou a ' + this.arma)
    }
};

let ninja1 = new Ninja('Naruto', 'Shuriken');

console.log(ninja1.nome);

ninja1.atiraArma();

let ninja2 = new Ninja('Sasuke', 'Kunai')

console.log(ninja2.nome);

ninja2.atiraArma();