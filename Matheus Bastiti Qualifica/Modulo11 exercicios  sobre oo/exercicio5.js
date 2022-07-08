// Crie uma classe conta bancaria;
// Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança;
// Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
// Além disso crie uma conta especial que herda da conta normal;
// Na conta especial os juros são dobrados da conta normal;


class ContaBancaria{
    constructor(saldoCC, saldoCP, juros){
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferirParaCP(valor){
        this.saldoCP += valor;
        this.saldoCC -= valor;
    }
    transferirParaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosDeAniversario(){
        let juros = (this.saldoCP * this.juros) / 100
        this.saldoCP += juros
    }
}

class ContaEspecial extends ContaBancaria{
    constructor(saldoCC, saldoCP, juros){
    super(saldoCC, saldoCP, juros * 2)
    }
}

let minhaConta = new ContaBancaria(1000, 5000, 1);

console.log(minhaConta);

minhaConta.deposito(5000);
console.log(minhaConta);
minhaConta.saque(500);
console.log(minhaConta)

minhaConta.transferirParaCP(3000);
console.log(minhaConta);
minhaConta.jurosDeAniversario();
console.log(minhaConta);

let conta2 = new ContaEspecial(10000, 5000, 1);
console.log(conta2);

conta2.saque(5000);
console.log(conta2);

conta2.jurosDeAniversario();
console.log(conta2)
