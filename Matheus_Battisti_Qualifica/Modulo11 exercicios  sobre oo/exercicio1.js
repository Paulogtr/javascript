//Crie uma classe que simula uma conta no banco (utilize a forma que perferir);
//Deve conter a propriedade saldo;
//E os métodos deposite e saque;
//teste os métodos

class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }

}

let conta = new Conta(1000);

conta.deposito(1000);
console.log(conta.saldo);

conta.saque(500);
console.log(conta.saldo);