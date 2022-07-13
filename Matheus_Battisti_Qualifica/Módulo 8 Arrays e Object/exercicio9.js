//Crie um array a partir de uma frase;
//Imprima cada palavra do array no console por meio de um for;


const frase = "Ser um programador bom requer muita prática";

const arrayFrase = frase.split(" ");

for(let i = 0; i < arrayFrase.length; i++ ){
    console.log(arrayFrase[i]);
}