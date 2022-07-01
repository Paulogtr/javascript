//JSON é basicamente um formato leve de troca de informações/dados entre sistemas. Mas JSON significa JavaScript Object Notation

let pessoa = {
    "nome": "Gustavo",
    "idade": 28,
    "profissao": "programador",
    "hobbies": ["video game", "Leitura", "Correr"]
};

console.log(pessoa.nome);
console.log(pessoa.idade);

//Covertendo json para uma string

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

//Convertendo uma string para Json
let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);

console.log(pessoaJson.hobbies[1]);