class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
};

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log('Está latindo')
    }
}

let pug = new Cachorro(4, 'Pug');

console.log(pug.patas);

console.log(new Cachorro instanceof Mamifero);
//verifica quem é o pai do objeto que esta sendo utilizado