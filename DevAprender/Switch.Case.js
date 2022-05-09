//Estrutura de condição

let permissao = 'sub gerente'


switch(permissao){
    case 'comum':
        console.log('usuario comum')
        break
    
    case 'gerente':
        console.log('usuario Gerente')
        break
    
    case 'diretor':
        console.log('usuario Diretor')
        break
    
    default: 
    console.log('Usuario não reconhecido')
}