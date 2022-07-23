//Utilizando o this no objeto.. a palavra this se refere a própria instância

let ninja = {
    classe: 'profissional',
    arma:'shuriken',
    atiraArma: function(){
        console.log(`Atirou a ${this.arma}`)
    }
}

let ninja2 = {
    classe: 'profissional',
    arma:'kunai',
    atiraArma: function(){
        console.log(`Atirou a ${this.arma}`)
    }
}



ninja.atiraArma()
ninja2.atiraArma()