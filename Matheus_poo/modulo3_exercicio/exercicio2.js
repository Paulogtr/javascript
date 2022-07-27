//Crie um objeto Pessoa, que tem uma propriedade nome;
//Crie um método que exibe o nome do objeto Pessoa

let pessoa = {
    nome: 'Paulo',
    falando: function(){
        console.log(` Meu nome é ${this.nome}`)
    }
};

pessoa.falando();