//               *Caracteres Especiais*
// \d - Qualquer dígito de caractere
// \w - Um caractere alfanumérico (“teste”)
// \s - Qualquer caractere de espaço em branco
// \D - Caracteres que não são dígitos
// \W - Caractere não-alfanumérico
// \S - Caractere que não seja espaço em branco
// .    - Qualquer caractere, menos nova linha

const pontoRegex = /./;

console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123gdgs'));

console.log('-------------//------------')

const dRegex = /\d/; // [0-9]
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('123gdgs'));

console.log('-------------//------------')

const dRegex2 = /\D/; //[^0-9] //procura a frase que não tenha numeros
console.log(dRegex2.test('asd'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('123'));
console.log(dRegex2.test('123gdgs'));

console.log('-------------//------------')

const sRegex2 = /\s/; 
console.log(sRegex2.test('asd'));
console.log(sRegex2.test(' '));
console.log(sRegex2.test('123'));
console.log(sRegex2.test('123gdgs'));

console.log('-------------//------------')

const wRegex2 = /\w/; 
console.log(wRegex2.test('asd'));
console.log(wRegex2.test(' '));
console.log(wRegex2.test('123'));
console.log(wRegex2.test('123gdgs'));

console.log('-------------//------------')

