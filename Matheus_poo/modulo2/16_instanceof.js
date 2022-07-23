// Uma maneira de saber qual instância(pai) vem algum objeto
// Mais prático que utilizar o constructor

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

console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);

console.log(jaspion instanceof Heroi)