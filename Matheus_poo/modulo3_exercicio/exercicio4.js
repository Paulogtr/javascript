//Crie um objeto ninja que tenha a propriedade shuriken, com uma quantidade de estrelas ninjas;
//A cada método do disparo subtraia uma;
//O ninja não pode jogar mais shurikens caso elas tenham acabado

function Ninja(nome, qtd){
    this.nome = nome;
    this.estoqueShuriken = qtd
    this.atirarShuriken = function() {
        if(this.estoqueShuriken > 0){
            console.log(`${this.nome} Atirou uma Shuriken`)
            this.estoqueShuriken -=1   
        }else{
            console.log(`${this.nome} não possui mais shurikens para jogar!`)
        }
    }
}



let naruto = new Ninja('Naruto', 3);

console.log(naruto.estoqueShuriken);

naruto.atirarShuriken();

console.log(naruto.estoqueShuriken);
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
console.log(naruto.estoqueShuriken);
