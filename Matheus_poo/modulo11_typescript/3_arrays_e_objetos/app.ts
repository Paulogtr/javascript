//Também podemos representar arrays e objetos pelo TS

//Primeria opção
const frutas: string[] =['Banana', 'Maçã', 'Laranja'];
//Segunda opção
const numeros: Array<number> =[1,2,3,4,5];



frutas.push('Maracuja');
numeros.shift();
console.log(numeros);
console.log(frutas);

let obj ={
    name: 'Matheus',
    idade: '29'
}

console.log(obj);
console.log(obj.name)
