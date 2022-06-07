
//Maneira simplificada de se fazer o mesmo exercicio
const h1 = document.querySelector('.resultado');
const data = new Date();

h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full' , });




//armazenando a data em uma variavel e uma div do html
/*const resultado = document.querySelector('.resultado')
const data = new Date();

//declarando variaveis que irão armazenar os dados utilizados
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const diaSemana = data.getDay();

//função que ira mostrar o dia da semana em texto
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

//função que ira mostrar o mes atual em texto
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

//imprimindo o resultado na div do html
resultado.innerHTML = `${diaSemanaTexto()}, ${dia} de ${mesTexto()} de ${ano} <br>${hora}:${minutos}`
*/



