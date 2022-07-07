//Cria uma classe que simula um carrinho de compras de um e-commerce;
//Propriedades itens, quantidade total, valor total;
//Crie os métodos para adicionar e remover itens;


class Carrinho {
    constructor(itens,qntTotal,valorTotal){
        this.itens = itens
        this.qntTotal = qntTotal
        this.valorTotal = valorTotal
    }
    adicionar(iten){
        this.itens += iten
        this.qntTotal += iten
        this.valorTotal += iten
    }
}

let vassoura = new Carrinho(vassoura,2, 3.50)

adicionar(vassoura)

console.log(vassoura.itens)



