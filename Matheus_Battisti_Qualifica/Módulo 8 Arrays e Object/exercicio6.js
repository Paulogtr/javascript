//Crie dois arrays, um com mais de 5 elementos e outro com menos;
//Faça uma função que verifica o número de elementos;
//Se possuir menos que 5, imprima “Poucos elementos” no console;
//Se tiver mais, imprima “Muitos elementos”;


let nomes = ["Henrique", "Gustavo", "Matheus", "Gulherme", "Paulo", "Pedro"];
let nums = [0, 1, 2, 3]

function verificaElementos(dados){
    if(dados.length > 5){
        console.log('Muitos elementos')
    }else{
        console.log("Poucos elementos")
    }
}

verificaElementos(nomes);
verificaElementos(nums);