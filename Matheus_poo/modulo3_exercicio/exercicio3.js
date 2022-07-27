//Crie um objeto Ninja, por constructor function;
//Com a propriedade de nome do nonja e o método atirarShuriken;

function Ninja(nome){
    this.nome = nome;
    this.atirarShuriken = () => console.log(`${this.nome} Atirou uma Shuriken`)

}

let naruto = new Ninja('Naruto');

naruto.atirarShuriken();