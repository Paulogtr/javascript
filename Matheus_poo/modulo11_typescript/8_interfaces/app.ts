function imprimirNome(obj:{nome:string, idade: number}){
    console.log(`Está pessoa se chama ${obj.nome} e tem ${obj.idade} anos`);
}

let pessoa1 = {nome: 'Matheus', idade: 29};

imprimirNome(pessoa1);