function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype = {
    rodas: 4,
    portas: 4,
    ligar() { console.log('O carro ligou'); }
}


let bmw = new Carro('BMW', 100000);

console.log(bmw);

console.log(bmw.rodas);
bmw.ligar();

let ferrari = new Carro('Ferrari', 200000);

Carro.prototype.tetoSolar = true;
Carro.prototype.abrirTetoSolar = function(){
    console.log('O teto solar abriu');
}

console.log(bmw.tetoSolar);
ferrari.abrirTetoSolar()