let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");

function msg(e){
    console.log('Clicou no button');
    e.stopPropagation(); //não permite que o botão ocupe mais espaço do que somente ele
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", (event) => {
    console.log(event)
});

p.addEventListener("click", function(){
    console.log("clicou no paragrafo");
});

//assunto dessa aula
a.addEventListener("click", function(e){

    e.preventDefault();

    console.log('Este link esta desativado');
})