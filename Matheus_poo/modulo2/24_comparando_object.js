//Podemos comparar os objetos com o método is
//teremos basicamente os mesmos resultados de ===
//Salvo para NaN com NaN e 0+ com -0 (que neste método são considerados como iguais)

let teste ={
    a: 1,
}

let teste2 ={
    a: 1
}

console.log(Object.is(teste, teste2));// === -> false

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

console.log(+0 === -0);
console.log(Object.is(+0, -0));

let teste3 = teste;
console.log(Object.is(teste, teste3)); // === -> true