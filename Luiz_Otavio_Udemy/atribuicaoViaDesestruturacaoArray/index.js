//Atribuição via desestruturação com array

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeroNumero, segundoNumero,maisum, ... resto] = numeros; //os tres pontos nos deixa selecionar todo restante da array

console.log(primeroNumero,segundoNumero,maisum, resto);

const [um, , tres, , cinco, , sete] = numeros; //usando espaco vazio para selecionar o elemento
console.log(um, tres, cinco, sete)


const nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = nums
console.log(lista2[2])