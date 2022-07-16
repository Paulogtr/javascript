let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) =>{console.log(`o valor é ${value}`)});
p.then((value) =>{ return value + 5})
.then((value) =>{console.log(value)});