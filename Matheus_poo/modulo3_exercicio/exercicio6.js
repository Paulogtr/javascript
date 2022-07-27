//Crie uma função que retorna se o objeto é uma instância de outro objeto
//Deve apresentar no console as mensagens de positivo e negativo

//helpers
function comparaObjs(obj1, obj2){
    // instanceof - objeto, classe
    if(obj1 instanceof obj2){
        console.log('O objeto ' + obj1.nome + ' é uma instancia de ' + obj2.name)
    }else{
        console.log('O objeto ' + obj1.nome + ' não é uma instancia de ' + obj2.name)
    }
}

//Objs
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

function Inimigo(nome){
    this.nome = nome;
    this.vivo = true;
}

let naruto = new Ninja('Naruto', 3);

let sasuke = new Inimigo('Sasuke');

comparaObjs(naruto, Ninja)
comparaObjs(sasuke, Ninja)
comparaObjs(naruto, Inimigo)