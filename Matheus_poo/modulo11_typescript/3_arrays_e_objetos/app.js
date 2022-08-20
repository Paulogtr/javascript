//Também podemos representar arrays e objetos pelo TS
//Primeria opção
var frutas = ['Banana', 'Maçã', 'Laranja'];
//Segunda opção
var numeros = [1, 2, 3, 4, 5];
frutas.push('Maracuja');
numeros.shift();
console.log(numeros);
console.log(frutas);
var obj = {
    name: 'Matheus',
    idade: '29'
};
console.log(obj);
console.log(obj.name);
