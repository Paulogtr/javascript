class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //metodos
    nomeDaPessoa(){
        return "O nome da pessoa é: " + this.nome;
    }

    set mudarNomeDaPessoa(novoNome){
        this.nome = 'Sr. '+ novoNome;
    }
    get receberNomePessoa(){
        return "O nome da pessoa é: " + this.nome;
    }

}

console.log(typeof Humano)

let matheus = new Humano('Matheus', 29)

console.log(matheus)

console.log(matheus.nomeDaPessoa());

matheus.mudarNomeDaPessoa = 'Matheus'

console.log(matheus.nome)
console.log(matheus.receberNomePessoa)