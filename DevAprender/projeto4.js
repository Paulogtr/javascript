//Velocidade máxima de até  70km/h
// a cada 5km acima do limite você ganha 1 ponto
//Math.floor (arredonda)
verificarVelociade(85)


function verificarVelociade(velocidade){
    if(velocidade <= 70){
        console.log('Voce esta dentro do limite de velocidade')
    }else{
        const pontos = Math.floor((velocidade -70) / 5)    
        if(pontos >= 12){
            console.log('Carteira suspensa',' Velocidade:', velocidade, ' Pontos:',pontos)
        }else{
            console.log('Pontos:',pontos + ' Velocidade:' +  velocidade)
        }
    } 
    
}
