let pessoa ={
    nome: "Matheus",
    falar: function(){
        console.log(`Oi, meu nome é ${this.nome}`)
    }
}

pessoa.falar();