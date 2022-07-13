//Escreva uma função que recebe 2 numeros e retorne o maior deles 

function maior(x, y){
  if(x > y){
    return x;
  } else{
      return y;
  }
}

//outra forma
function max(x, y){
  return  x > y ? x : y;
}

//mais uma forma
//const max2 = (x,y) => {
//    return x > y ? x : y;
//}

//simplificando a arrow fanction
const max2 = (x,y) =>  x > y ? x : y;

console.log(maior(3, 2))
console.log(max(30,20))
console.log(max2(5,3))