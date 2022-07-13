function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error('o parâmetro nome precisa ser uma string!!');
    } else{
        console.log(`olá ${nome}. `);
    }
}

saudacao('Matheus');
saudacao(5);

console.log('Teste');