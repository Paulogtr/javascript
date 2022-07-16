// Crie uma regex que só aceite strings terminadas com ID;
// Depois teste;


const validarId = /\d+ID\b/; //\b garante que a string terminara com ID

console.log(validarId.test("67322683ID"));
console.log(validarId.test("67322683ID435"));
console.log(validarId.test("67322"));
console.log(validarId.test("jadsigdsdgIDsasd"));
console.log(validarId.test("shagg"));