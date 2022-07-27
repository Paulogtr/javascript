//crie dois objetos que compartilham nomes de propriedades via Object literals
//Uma variável deve definir a parte qye se repete nas propriedades dos objetos;

let nome = 'Paulo'

let professor ={
    nome
};

let programador ={
    nome
};

console.log(professor);
console.log(programador);

//resolução Matheus Battisti

let n = 'numero_de_';

let arvore ={
    [n+'frutos']: 10
};

let carro ={
    [n+'portas']: 4
};

let pessoa ={
    [n+'pernas']: 2
};

console.log(arvore);
console.log(carro);
console.log(pessoa);