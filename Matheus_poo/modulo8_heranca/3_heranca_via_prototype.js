//class no es6
function Veiculo(){}
    Veiculo.prototype.carenagem = 'aço';
    Veiculo.prototype.ligar = function () {
        console.log('O veículo ligou');
    }


//class forma antiga
function Trem(tipo){
    this.tipo = tipo
}

Trem.prototype.vagoes = 50

function Carro(){}

Carro.prototype.pneus = 4;

Trem.prototype = new Veiculo;
Carro.prototype = new Veiculo;

let trembala = new Trem('trem Bala');
let trem = new Trem('Trem')
let ferrari = new Carro();

trem.ligar()
trembala.ligar()
ferrari.ligar()
