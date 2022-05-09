let corSite = 'azul' 
function resetCor(cor,tonalidade){
    corSite = cor + tonalidade
}
console.log(corSite)
resetCor("vermelho"," escuro")
console.log(corSite)

//Faz calculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor*2

}
let resultado = MultiplicarPorDois(5)
console.log(resultado)

// Realiza uma tarefa, não devolve nada
function dizerNome(){
    console.log('Jhonatan')
}
dizerNome()