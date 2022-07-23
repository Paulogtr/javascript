let pessoa ={
    nome: "Matheus",
    idade: 29,
    falar: function(){
        console.log(`Oi, meu nome é ${this.nome}`)
    },
    //maneira de declarar uma função no js6(não tem necessidade de escrever function)
    aniversario(){
        this.idade += 1;
    },
    dizerIdade(){
        console.log("A minha idade é " + this.idade);
    },
    caracteristicas:{
        cnh: true,
        carteira: ['Dinheiro', 'Documento', 'moeda']
    }
};


console.log(pessoa.caracteristicas);
console.log(pessoa.caracteristicas.carteira[2]);