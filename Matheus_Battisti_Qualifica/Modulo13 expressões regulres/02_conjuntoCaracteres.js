// Podemos definir um conjunto de caracteres para encontrar por regex;
// Basta por entre [ ];
// Com um traço podemos definir um intervalo também, veja:


const reg1 = /[12345]/;

console.log(reg1.test('Temos o número 6'));
console.log(reg1.test('Temos o número 2'));
console.log(reg1.test('Temos o número 26'));

const reg2 = /[0-9]/;//melhor forma de verificar se uma frase contem numeros

console.log(reg2.test('Temos o número 65'))
console.log(reg2.test('Temos o número 6543523524523243'))