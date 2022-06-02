const resultado = document.querySelector('.resultado')
const data = new Date();

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const diaSemana = data.getDay();

function dateCurrent (day,month){

resultado.innerHTML = `${diaSemanaTexto()}, ${dia} de ${mesTexto()} de ${ano} <br>${hora}:${minutos}`

}

function diaSemanaTexto(texto){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo'
            break;
        case 1:
            diaSemanaTexto = 'Segunda-Feira'
            break;
        case 2:
            diaSemanaTexto = 'Terça-Feira'
             break;
        case 3:
             diaSemanaTexto = 'Quarta-Feira'
            break;
        case 4:
             diaSemanaTexto = 'Quinta-Feira'
             break;
        case 5:
             diaSemanaTexto = 'Sexta-Feira'
             break;    
        case 6:
             diaSemanaTexto = 'Sabado'
             break;        
            
    }
    
    return diaSemanaTexto
}
function mesTexto(texto){
    let mesTexto;
    switch(mes){
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break; 
    }
    return mesTexto
}
dateCurrent();


