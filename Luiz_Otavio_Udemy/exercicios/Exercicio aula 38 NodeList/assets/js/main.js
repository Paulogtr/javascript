const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//O Window.getComputedStyle()método retorna um objeto contendo os valores de todas as propriedades CSS de um elemento, após aplicar as folhas de estilo ativas e resolver qualquer cálculo básico que esses valores possam conter.
const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody 
    p.style.color = 'white'   
}
