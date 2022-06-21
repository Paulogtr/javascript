//Função construtora começa com a letra maiuscula
//precia da palavra "new" anter de ser chamada para incremento
//Não necessita da palavra return
function Pessoa(nome, sobrenome){
    //Privadas - não estarão disponiveis no escopo global
    const ID = 123456;
    const metodoInterno = () => 

    //Atributos ou metodos publicos, disponiveis no escopo global
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.metodo = () => console.log(this.nome + ': Este é um metodo')
    ;
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();
