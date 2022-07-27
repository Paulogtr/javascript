//Copiando propriedades
// Os objetos herdam métodos do objeto pai Object, e podemos utiliza-los
//Para copiar propriedades utilizamosno método assign

let pessoa ={
    nome: 'Matheus',
    getNome(){
        console.log('esse é o nome do object ' + this.nome)
    }
}

let pessoa2 = {
    nome: 'joao',
    age: 12
}

Object.assign(pessoa2, pessoa)

console.log(pessoa2)

pessoa2.getNome();