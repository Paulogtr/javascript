// Filter -- Sempre retorna um array com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, ,4 ,5 , 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array){
    console.log(valor, indice); //valor, indice e array, são padrãodo filter()
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

console.log('-----------------------//--------------------')
console.log('')
//simplificando o codigo

//const numerosFiltrados = numeros.filter(valor => valor > 10);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo o noe termina com a letra a

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];

const nomeComCincoLetrass = pessoas.filter(function (valor){
    return valor.nome.length >= 5
});
//console.log(nomeComCincoLetrass)

//simplificando o codigo com arrow function
const nomeComCincoLetras = pessoas.filter(obj => obj.nome.length > 5);
const idadeMaiorQueCinquenta = pessoas.filter( obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(obj =>{
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(nomeComCincoLetras);
console.log(idadeMaiorQueCinquenta);
console.log(nomeTerminaComA);