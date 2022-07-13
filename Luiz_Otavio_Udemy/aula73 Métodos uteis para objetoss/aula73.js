/*
Object.values (retorna somente os valores do objeto)
Object.entries (retorna o objeto em formato de array separadamente)
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = {nome: 'Caneca', preco: 1.8};
Object.freeze(produto); // não pode alterar o objeto
const outraCoisa = {
    ...produto,
    material: 'porcelana'
};

//outra forma de copiar os dados de um objeto e acrescentar
const caneca = Object.assign({}, produto, {material: 'Porcelana'});

outraCoisa.nome = 'Outro nome'
outraCoisa.preco = 2.5

console.log(produto);
console.log(outraCoisa);
console.log(caneca)

console.log(Object.keys(produto)); //mostra as chaves do objeto
