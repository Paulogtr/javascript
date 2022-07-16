const validaDominio = /[?www.]\w+\.com|.com.br/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.horadecordar.com.br"));
console.log(validaDominio.test("www.google"));
console.log(validaDominio.test("google.com.br"));