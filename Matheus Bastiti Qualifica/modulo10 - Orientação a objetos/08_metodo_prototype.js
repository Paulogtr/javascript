function Cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log('Está uivando');
}
Cachorro.prototype.latir = function(){
    console.log('Está latindo');
}


let husky = new Cachorro('Husky', 4, 'Cinza');

husky.uivar();
husky.latir();