// Estrutura de repetição For in -> lê os índices ou chaves do objeto
//O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.

//utilizando em um Array
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let index in frutas){
    console.log(frutas[index]);
}
console.log(' ')

//Utilizando em um objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves]);
}

/*console.log(pessoa.nome);
console.log(pessoa['nome']); duas formas de acessar o valor contido dentro do objeto*/