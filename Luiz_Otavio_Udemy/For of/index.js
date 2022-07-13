
const nome = ['Luiz', 'Otavio', 'Henrique'];

for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('');

for (let i in nome){
    console.log(nome[i]);
}

console.log('')

//O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

for (let valor of nome){
    console.log(valor);
}
console.log('')

//O método forEach() executa uma dada função em cada elemento de um array.
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})
/*console.log(pessoa.nome);
console.log(pessoa['nome']); duas formas de acessar o valor contido dentro do objeto*/

//resumo
//For clássico - Geralmente com interaveis (array ou strings)
//For in - Retorna o índice ou chave (string, array ou objetos)
//For of - Retorna o valor em si (interaveis, arrays ou strings)