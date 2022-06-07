/* Escreva uma função ePaisagem que recebe
dois argumentos (number): altura e largura, se a imagem estiver
em modo paisagem return true, se estiver em modo retrado 
return false */
function ePaisagem(largura, altura){
    if (largura > altura){
        return true;
    } else {
        return false;
    }
}

function aPaisagem (largura,altura){
    return largura > altura;
}

const Paisagem = (largura,altura) => largura > altura? true : false

console.log(Paisagem(10,5))
console.log(ePaisagem(5,10))
console.log(aPaisagem(1000, 2000))
