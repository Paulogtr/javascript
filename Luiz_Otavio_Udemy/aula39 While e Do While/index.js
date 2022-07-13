function random(min, max){
    const r = Math.random() *  (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
 
console.log('')
console.log('')

do {
    rand = random(min, max);
    console.log(rand); 
}while(rand !== 10);

//let i = 0;

//while (i <= 10){
//    console.log('Estou contando', i);
//    i++;
//}

//for(let p = 0; p <= 10; p++){
//    console.log('Estou contando novamente', p)
//}