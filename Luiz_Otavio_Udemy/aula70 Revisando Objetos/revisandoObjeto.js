//maneiras de delcarar objetos

//modo cosntrutor
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 54;

//modo literal
const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
console.log(pessoa1);
console.log(pessoa2);
console.log(' ');
console.log('---------------------------//------------------');


pessoa1.falaraNome = function(){
    console.log(`${this.nome} está falando seu nome. `)
}
pessoa1.falaraNome();
console.log(' ');
console.log('---------------------------//------------------');

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());
console.log(' ');
console.log('---------------------------//------------------');


delete pessoa1.nome //para excluir um dado


