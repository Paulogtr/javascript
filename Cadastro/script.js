let validacao_email = document.querySelector('.login_email')
let validacao_senha = document.querySelector('.login_senha')

let email = emailemail.com

function entrar(){
    
    if(validacao_email.value.length == 0 && validacao_email.value != email){
        alert('O email que você inseriu não esta conectado a uma conta! ')
    } else{
        alert(`Bem vindo ${email}, você esta conectado`)
    }
}

