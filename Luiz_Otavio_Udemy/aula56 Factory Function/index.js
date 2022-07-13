// Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        //Geter a sintaxe get transforma uma função em um elemento
       get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
            console.log(valor);
        },
        fala: function(assunto){
            return `${nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        imc(){ /* Outra forma de escrever a função*/
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}



const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
//console.log(`${p1.nome} ${p1.sobrenome} seu IMC é ${p1.imc()}`);
p1.nomeCompleto = 'Maria Oliveira Silva'

//console.log(p1.nomeCompleto); //chamando a função sem a necessidade de chama como nomeCompleto();

console.log(p1.nome);
console.log(p1.sobrenome);
