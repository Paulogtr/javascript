// O objeto para criar funções;
//obs: não é utilizado, serve apenas para conhecimento e para voce entender como o js funciona

function teste(a){
    return a;
}

console.log(teste('opa'));

teste2 = new Function(
    'a',
    'return arguments'
);

console.log(teste2('testando')[0])