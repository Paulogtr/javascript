window.addEventListener("keydown", function(e){ //quando a tecla é pressionada
    if(e.key == 'q'){
        console.log("Apertou a letra q");
    } else if(e.key == "Enter"){
        console.log("voce apertou a tecla Enter");
    }
    
})

window.addEventListener("keyup", function(e){ //quando a tecla é solta após ser clicada 
    if(e.key == "Enter"){
        console.log("Soltou o enter");  //O keyup pode ser mias interessante de se utilizar para não correr o risco de ficar com a tecla pressionada e causar algum tipo de bug
    }
})