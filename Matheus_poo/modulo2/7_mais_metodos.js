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
    }
}

pessoa.falar();

pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade)

pessoa.dizerIdade();

let calculadora = {
    numeros: 0,
    somar: function(a,b){
        this.numeros = a + b;
    },
    subtracao: function(a){
        this.numeros -= a;
    },
    podeDirigir(){
        if(this.idade >= 18){
            console.log('Pode dirigir!!')
        } else{
            console.log('Não pode dirigir');
        }
    }
}

calculadora.somar(2, 4);
console.log(calculadora.numeros);
calculadora.subtracao(5);
console.log(calculadora.numeros);

calculadora.podeDirigir();