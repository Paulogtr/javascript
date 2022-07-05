// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, //controla se o valor pode ser alterado
        configurable: true, // configuravel ?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, //controla se o valor pode ser alterado
            configurable: true, // configuravel ?    
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, //controla se o valor pode ser alterado
            configurable: true, // configuravel ?
        },
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);