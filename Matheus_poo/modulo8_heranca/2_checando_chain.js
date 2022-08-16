//Quando utilizamos a prototype chain, o objeto passa a virar instância de todos os 'pais';
//Podemos verificar isso pela instrução instanceof

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

Trem.prototype = new Veiculo();
let trembala = new Trem('trem Bala');

console.log(trembala.tipo);

trembala.ligar()