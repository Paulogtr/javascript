//return
//retorna um valor 
// termina a função
/*function criaPessoa(nome, sobrenome){
    return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'joão',
    sobrenome: 'Oliveira'
}

console.log(p1);
console.log(p2); */

/*function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n){
    return n * 4;
}*/

function criaMultiplicador(multiiplicador){
    //Multiplicador
    return function(n) {
        return n * multiiplicador;
    };

}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
