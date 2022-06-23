const a1 = [1, 2 ,3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2,[7, 8, 9]); //metodo concat() faz a concatenação
// outra forma de concatenar é utilizando: ...

const a4 = [...a1, 'Luiz',...a2, ...a3]
console.log(a3)
console.log('')
console.log(a4)