//Exemplo 2 sobre objetos dentro de JS

const carro = {
marca:'Ford', 
modelo:'Ka', 
ano:2015, 
placa:'ABC-1234',

completo: function(){
    return "A marca é: " +this.marca + ' e o modelo é: ' +this.modelo
    }
}
console.log(carro.completo())


//console.log('Aqui esta a placa e o modelo do carro que consta como ROUBO ou FURTO, carro: ' + carro.marca + ' ' +carro.modelo +' placa: ' + carro.placa)
