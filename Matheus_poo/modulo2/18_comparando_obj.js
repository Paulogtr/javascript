function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja('Naruto', 'shuriken');
const rocklee = new Ninja('Rock Lee', 'punhos');
const cloneDoNaruto = new Ninja('Naruto', 'shuriken');

//unica forma de realizar um clone verdadeiro de um objeto é fazendo ele receber o valor do objeto desejado (criando uma referencia)
const cloneVerdadeiroDoNaruto = naruto

console.log(naruto === rocklee);
console.log(naruto === cloneDoNaruto);

console.log(cloneVerdadeiroDoNaruto === naruto)