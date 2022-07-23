// Quando você atribui um obj já criado para uma outra variavel, você esta passando uma referência;
//se alterar a referência, o original também é alterado

let obj ={
    numero: 1
}

console.log(obj);

let copia = obj;

console.log(copia);

//alterando o valor da variavel com referencia ao object
copia.numero = 5;

// vemos que o object tambem foi alterado
console.log(obj);