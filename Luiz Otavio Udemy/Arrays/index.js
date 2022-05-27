const alunos = ['Luiz', 'Maria', 'João','Pedro', 'Jonas','Marcos'];

alunos [0] = 'Eduardo'; //atribui um novo valor dentro da array especificada
alunos [3] = 'Luiza';   //atribui um novo valor dentro da array especificada

alunos.unshift('Antonia') //O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

alunos.push('Otavio'); //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

//delete alunos [1] remove o elemento selecionado porem deixando sua posição vazia, não alterando o seu length

//alunos.shift(); --remove o primeiro elemento dentro da array-- 

//alunos.pop(); --remove o ultimo elemento da array--

//console.log(alunos.slice(0, 3)) O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.

const removido = alunos.pop(); //remove o ultimo elemento e o coloca em uma variavel, neste caso dentro da variavel 'removido'

console.log(alunos);
console.log(removido);

// console.log(alunos.length); mostra quantos valores tem dentro da array