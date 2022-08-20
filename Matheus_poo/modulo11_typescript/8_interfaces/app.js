function imprimirNome(obj) {
    console.log("Est\u00E1 pessoa se chama ".concat(obj.nome, " e tem ").concat(obj.idade, " anos"));
}
var pessoa1 = { nome: 'Matheus', idade: 29 };
imprimirNome(pessoa1);
