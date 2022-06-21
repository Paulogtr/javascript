// IIFE - Immediately invoked function expression

(function(){
    const sobrenome = 'Miranda';
    function criaNome(nome){
        return nome + " " + sobrenome;
    }
    function falaNome(){
        console.log(criaNome('Luiz'))
    }
    falaNome();
})();

//Estrutura da IIFE
(function(idade, peso, altura )/*parametros*/  {
    
    console.log(idade, peso, altura);

})(30, 80, 1.80) /*argumentos*/ ;