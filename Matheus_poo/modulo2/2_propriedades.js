let carro = {
    portas:4,
    cor: 'vermelha'
};

console.log(carro.portas);
console.log(carro['cor']);

if(carro.portas > 2){
    console.log('Este carro tem mais que duas portas');
}

//outra forma de selecionar o valor de uma propriedade do objeto

let pessoa ={
    nome: 'matheus'
};
console.log(pessoa['nome']);

//atribuindo o valor de uma propriedade a uma variavel
let nomePessoa = pessoa['nome'];
//para saber quantos caracters tem em um objeto

console.log(nomePessoa.length);

