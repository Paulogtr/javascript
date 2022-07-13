class Cachorro{
    constructor(raca, patas, cor){
        this.raca = raca;
        this.cor = cor;
    }
    latir(){
        console.log('Está latindo')
    }

    get getCor(){
        return `A cor do ${this.raca} é ${this.cor}`
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let pastor = new Cachorro('Pastor Alemão', 'Sem cor');

console.log(pastor);

pastor.setCor = 'Marrom';

console.log(pastor.getCor);
