class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length
    }

    addTask(taskText){
       
        //clona template
        let template = document.querySelector('.task').cloneNode(true);
        //remove classe hide
        template.classList.remove('hide');
        //manipular o texto
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#tasks-container');

        //inserir na lista
        list.appendChild(template);

        //adiciona evento as tasks
        this.addEvents();
    }

    removeTask(task){
         //achar o elemento 
         let parentEl = task.parentElement;

         //remover da lista
         parentEl.remove();
    }

    completeTask(){

     
    }

    addEvents(){
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-sheck');
        let doneBtn = removeBtns[removeBtns.length - 1];

        //adicionar evento de remover
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });

        //adicionar evento de completar tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });
    }
}

let todo = new Todo();

//events
let addbtn = document.querySelector('#add');

addbtn.addEventListener('click', function(e){

    e.preventDefault();
    let taskText = document.querySelector('#task');

    if(taskText.value != ''){
    todo.addTask(taskText.value);
    }

    //limpa campo todo
    taskText.value = ''
})