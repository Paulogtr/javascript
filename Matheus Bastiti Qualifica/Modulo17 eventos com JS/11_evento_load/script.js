// window.addEventListener("load", function(){ //mostra algum evento antes da pagina ser carregada
//     this.alert("Assine nossos termos de uso"); 
// })

window.addEventListener("beforeunload", function(e){
    e.returnValue = null  // evento padrão do navegador 
})