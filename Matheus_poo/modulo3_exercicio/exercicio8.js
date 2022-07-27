//Realize um destructuring em um objeto

let caminhao = {
    eixos: 2,
    rodas: 12,
    portas: 2,
    combustivel: 'Diesel',
    carga: 'animais'
};

// {var} => obj
// [var] => arr
let {eixos, rodas, portas, combustivel, carga} = caminhao

console.log(eixos, rodas, portas, combustivel, carga)