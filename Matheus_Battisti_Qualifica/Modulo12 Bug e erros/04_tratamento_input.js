// Não podemos controlar os dados que o usuário enviar, então para o bom funcionamento do software, devemos tratar eles;
// Veja um exemplo de tratamento de number:


function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log('Por favor, passe só números para o programa')
    } else{
        return number;
    }
}

checarNumero(5);
checarNumero('njdb');