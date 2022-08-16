//prototype chain é a maneira default da lingagem de fazer herança
//Podemos instanciar objetos no prototype de outros, criando a herança


//class no es6
class Veiculo {
    constructor() {
        this.carenagem = 'aço';
        this.ligar = function () {
            console.log('O veículo ligou');
        };
    }
}

//class forma antiga
function Trem(tipo){
    this.tipo = tipo;
    this.vagoes = 50;
}

function Carro(){
    this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let trembala = new Trem('trem Bala');
let ferrari = new Carro();

