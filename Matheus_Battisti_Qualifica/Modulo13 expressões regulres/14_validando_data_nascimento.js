const validarDatasc = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDatasc.test('05/02/2000'));
console.log(validarDatasc.test('5/2/2000'));
console.log(validarDatasc.test('05-02-2000'));
console.log(validarDatasc.test('21/02/2000'));