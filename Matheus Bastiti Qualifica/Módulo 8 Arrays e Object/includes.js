//includes() (Verifica se o array tem um determinado elemento)

const carros = ["BMW", "Fiat", "Audi"];

console.log(carros.includes("Fiat")) 

//Exemplo
function TemCarro(carros){
if(carros.includes("Fiat") || ("Audi")){
    console.log('Sim temos o modelo disponivel')
}else{
    console.log("desculpe, mas esse modelo não esta disponivel")
}
}

TemCarro('Audi');