function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
    this.capturaEnter = () =>{
        document.addEventListener('keypress', e =>{
          if (e.keyCode === 13) {
          this.realizaConta();
          }
        });
    }

    this.capturaCliques =  () => {
        document.addEventListener('click', evento =>{
            const elemento = evento.target;
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-clear')) this.clear(elemento);
            if (elemento.classList.contains('btn-del')) this.del(elemento);
            if (elemento.classList.contains('btn-eq')) this.realizaConta(elemento);
        });
    };

    this.addNumDisplay = elemento => {this.display.value += elemento.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () =>{
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta inválida');
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta invalida')
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia()