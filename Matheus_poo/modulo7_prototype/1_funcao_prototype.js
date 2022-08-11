function abc(){
    console.log('teste')
}

abc();

console.log(typeof abc.prototype)

abc.prototype.teste = 1;

console.log(abc.prototype);