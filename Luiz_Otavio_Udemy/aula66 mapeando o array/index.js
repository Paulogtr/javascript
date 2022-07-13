// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 4 ,5 , 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2); 
console.log(numerosEmDobro);
console.log('-----------------------//--------------------')
console.log('')

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 }
];


const nomePessoa = pessoas.map(obj => obj.nome);
const idade = pessoas.map(function(obj){
    return {idade: obj.idade}
    //ou delete.obj.nome
});
const id = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
})

console.log(idade);
console.log(id);