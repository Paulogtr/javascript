//Factory function 
function criaPessoa(nome,sobrenome){
    return{
      nome,
      sobrenome,  
      get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
      }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

// Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p2 = new Pessoa('Luiz', 'Miranda');
const p3 = new Pessoa('Maria', 'Souza')

console.log(p2)
console.log(p3)