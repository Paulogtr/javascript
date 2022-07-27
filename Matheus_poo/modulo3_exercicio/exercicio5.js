//Crie um objeto Inimigo, com as proopriedades nome e vivo
//O método atirarShuriken do ecercício passado deve 'matar' o Inimigo, setando a propriedade do Inimigo vivio como false

function Ninja(nome, qtd){
    this.nome = nome;
    this.estoqueShuriken = qtd
    this.atirarShuriken = function(inimigo) {
        if(this.estoqueShuriken > 0){
            console.log(`${this.nome} Atirou uma Shuriken`)
            this.estoqueShuriken -=1 
            inimigo.vivo = false; 
        }else{
            console.log(`${this.nome} não possui mais shurikens para jogar!`)
        }
    }
}

function Inimigo(nome,){
    this.nome = nome;
    this.vivo = true;
}

let naruto = new Ninja('Naruto', 3);

let sasuke = new Inimigo('Sasuke');
console.log(sasuke);

console.log(naruto.estoqueShuriken);
naruto.atirarShuriken(sasuke);
console.log(naruto.estoqueShuriken);
console.log(sasuke);