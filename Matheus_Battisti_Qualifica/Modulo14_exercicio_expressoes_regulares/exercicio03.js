// Crie uma regex que aceite a seguinte expressão “Marca: nomeDaMarca”;
// Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
// Depois teste;

const nomeDaMarca = /Marca:(Nike|Adidas|Puma|Asics)/;

console.log(nomeDaMarca.test('Marca:Nike'));
console.log(nomeDaMarca.test('Marca:hdudhs'));
console.log(nomeDaMarca.test('Marca:1123'));
console.log(nomeDaMarca.test('Marca:Adidas'));
console.log(nomeDaMarca.test('Marca: '));