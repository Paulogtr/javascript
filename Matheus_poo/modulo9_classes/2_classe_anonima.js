//outra maneira de criar classes é conhecida como classe anônima

let Humano = class{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //metodos
    nomeDaPessoa(){
        return "O nome da pessoa é: " + this.nome;
    }

}

console.log(typeof Humano)

let matheus = new Humano('Matheus', 29)

console.log(matheus)

console.log(matheus.nomeDaPessoa())