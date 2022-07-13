//Atribuição via desestruturação com Objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
}

const { endereco} = pessoa

console.log(endereco)
