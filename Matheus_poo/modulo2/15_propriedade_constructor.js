function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
};

let laranjeira = criarArvore('laranjeira', true);

console.log(laranjeira);
console.log(laranjeira.constructor);

function Heroi(nome, classe){
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new Heroi('Jaspion', 'Robo');

console.log(jaspion.constructor);