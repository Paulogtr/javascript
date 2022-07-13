// O que são expressões regulares?

// Uma forma de encontrar padrões em uma string;
// Por exemplo: validar se só tem números;
// Em vez de criarmos funções complexas, podemos encontrar dados em texto por meio das expressões regulares;
// Também chamadas de regex;

const reg1 = new RegExp('bola');

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem'));

//outra maineira de criar a expressão regular:

const reg2 = /bola/;
console.log(reg1.test('Tem bola?'));
console.log(reg1.test('Não tem'));

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.test('xvxvxvdvvdquadradodsvvdsvsv'));//mesmo misturado com outras palavras o js identifica a palavra