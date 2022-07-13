
//capturar o eevento de submit do formulario
const form = document.getElementById('formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();

    //Selecionando os elementos da planilha
    const peso = document.getElementById('peso')
    const altura = document.getElementById('altura')
    const resultado = document.getElementById('resultado')

    //Primera condição para se o usuario utilizar errado o formulario
    if(peso.value === ''){
        resultado.innerHTML = '<p>Peso invalido'
        resultado.style.backgroundColor = 'red'
    } else if(altura.value === ''){
        resultado.innerHTML = '<p>Altura Invalida'
        resultado.style.backgroundColor = 'red'
    }
    
   
})

    function calcular(){
         //calculo que é feito para ser definido o IMC
    const calculo = peso.value / (altura.value * altura.value)

    //Condições para ver como esta o indici do IMC
    if(calculo < 18.5){
        const mensagemImc = 'Você esta abaixo do peso'
        resultado.style.backgroundColor = 'yellow'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`
    
    }else if((calculo >= 18.5) && (calculo <= 24.9)){
        const mensagemImc = 'Seu peso está normal'
        resultado.style.backgroundColor = 'green'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`
    
    }else if((calculo >= 25) && (calculo <= 29.9)){
        const mensagemImc = 'Você está com sobrepeso'
        resultado.style.backgroundColor = 'yellow'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`
    
    }else if((calculo >= 30) && (calculo <= 34.9)){
        const mensagemImc = 'Você está com obesidade grau 1'
        resultado.style.backgroundColor = 'red'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`
    
    }else if((calculo >= 35) && (calculo <= 39.9)){
        const mensagemImc = 'Você está com obesidade grau 2'
        resultado.style.backgroundColor = 'red'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`

    }else if(calculo > 40){
        const mensagemImc = 'Você está com obesidade grau 3'
        resultado.style.backgroundColor = 'red'
        resultado.innerHTML = `<p> Seu IMC é ${calculo.toFixed(2)} ${mensagemImc}</p>`
    }
    }