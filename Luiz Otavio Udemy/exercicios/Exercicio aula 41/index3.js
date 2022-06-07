/* Escreva uma funçãao que recebe um número e 
retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisivel por 3 e 5 = retorna o próprio número
*Checar se o número é realmente um numero
*Use a fnção com números de 0 a 100 */

function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    
    if ((numero % 3 === 0) && (numero % 5 === 0)) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz';
    
    return numero
    
}

for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i));
}

