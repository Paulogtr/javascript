let contador = 0
const elementoInput = document.querySelector('.addtarefa')
const elementoBotao = document.querySelector('.btnadicionar')
const elementoLista = document.querySelector('ul')
const main = document.getElementById('areaLista')
const tarefas = [
]

//Pegar o valor digitado no Input
function addTarefa(){
    const textoTarefa = elementoInput.value

    if((textoTarefa !=="") && (textoTarefa !== null) && (textoTarefa !== undefined)){
     ++contador
        let novoItem = `
     <div id ="${contador}" class="lista">
         <div onclick="marcartarefa(${contador})" class="icone">
             <i id="icone_${contador}"class="mdi mdi-circle-outline"></i>
         </div>
         <div class="texto">${textoTarefa}</div>
         <div class="botao">
             <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button><div>
     </div>
  

 </main>
`   
    main.innerHTML += novoItem
    elementoInput.value=""
    elementoInput.focus()
    }

   
}
function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}
function marcartarefa(id){
    var item= document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if(classe =="item"){
        item.classList.add('clicado')
        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')
    }
}
elementoInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        elementoBotao.click()
    }
})

/*function mostraTarefas(){

    elementoLista.innerHTML = ''

    for (tarefa of tarefas){
        const elementoTarefa =document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLimpar = document.createElement('a')
        const pos = 

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
    }
  
}*/

/* tarefas.push(textoTarefa)
    elementoInput.value= ''

    mostraTarefas()*/