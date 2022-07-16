// Crie uma regex que valide endereços de IP;
// Ex: 127.0.0.1
// Depois teste;

const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test('127.0.0.1'));
console.log(validarIp.test('1271232223232'));
console.log(validarIp.test('127.3.4.0.0'));
console.log(validarIp.test('54774.6585.768'));