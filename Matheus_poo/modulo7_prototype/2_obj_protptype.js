function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco
}

Carro.prototype.rodas = 4; // o objeto é uma propriedade da classe não do objeto criado, porem o mesmo, pode ser chamado

Carro.prototype.ligar = () => console.log('O carro ligou');

let bmw = new Carro('BMW', 100000);

console.log(bmw);

//exemplo chamando o objeto rodas que é um prototype de Carro
console.log(bmw.rodas);
bmw.ligar();