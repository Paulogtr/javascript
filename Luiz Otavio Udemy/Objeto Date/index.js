/*const umDia = 60 * 60 * 24 * 1000; //60 segundos * 60 segundo (= 1 hora) * 24 * 1000 (milisegundo)
// const data = new Date(2019, 3, 20, 15, 14, 17, 500); os meses começam a partir do 0 = Janeiro (ano, mes, dia, hora, minutos, s, ms)
const data = new Date('2019-04-20 15:14:17');
console.log('Dia',data.getDate());
console.log('Mês',data.getMonth() + 1); //Mês começa do zero
console.log('Ano',data.getFullYear());
console.log('Hora',data.getHours());
console.log('Minutos',data.getMinutes());
console.log('Segundos',data.getSeconds());
console.log('milisegundos',data.getMilliseconds());
console.log('Dia semana',data.getDay()); // 0 -Domingo, 1-Segunda, 2-Terça...
console.log(data.toString());*/

function zeroAEsquerda(num){
    return num >=10? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); //Mês começa do zero
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${segundos} `
}
   const data = new Date(); 
   const dataBrasil = formataData(data);
   console.log(dataBrasil)