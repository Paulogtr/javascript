// let b = 2;  //resolução

// Finally é executada independente do resultado do try/catch;
// E pode existir com try e catch ou apenas try;


try {

    let a = 2 + b;

}catch(e){
    console.log(e);

} finally { //permite continuar execuntando o codigo mesmo após o erro, o mesmo não é tão utilizado
    console.log('Executou');
}