//Declaração de função (Function hoisting)
function falaOi(){
    console.log('oie');
}

falaOi();

// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function (){
    console.log('Soum um dado.');
}

souUmDado();

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () =>{
    console.log('Esta é uma Arrow function')
}

funcaoArrow()

setInterval(function(){},1000)