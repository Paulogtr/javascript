// Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
// Lembrando que combinações serão aceitas, o negado é apenas se bate com o set;
// Mais adiante aprenderemos negar de outras formas;

const notab = /[^ab]/;

console.log(notab.test('a'));
console.log(notab.test('Aqui tem a'));

const notaz = /[^a-z]/;
console.log(notaz.test('123 as'))
console.log(notaz.test('dvsdgsgegegffes'))