const todoInput = document.getElementById('input');
const addBtn = document.querySelector('.add-btn');
const html = document.querySelector('#render');
let todoList = document.querySelectorAll('#todo-list');
let todoAr = []

// form handling
todoInput.addEventListener('submit', (e) =>{
    e.preventDefault()
    createList()
});

addBtn.addEventListener('click', () =>{
    createList()
});

function createList(){
    const toDoVal = todoInput.value;
    if(toDoVal === ''){
    }else{
    const toDoObj = {
        value: toDoVal
    };
    todoAr.push(toDoObj);
    toDoVal.value = '';
    };  
    renderToDo()
}

// rendering

function renderToDo(){
    html.innerHTML = '';

    todoAr.forEach((el, index)=> {
        html.innerHTML += `
        <li class="created-list" id="${index}">
        <p>
        <input type="checkbox" id="${index}" />
        ${el.value}
        </p>
        <i class="fa-regular fa-trash-can" data-action="delete"></i>
    </li>`

    });
};

// delete 
html.addEventListener('click', (e) => {
    const target = e.target
    const parentEl = target.parentNode;
    
    if(parentEl.className === 'created-list'){
        const todo = parentEl;
        const todoId = Number(todo.id);
        const action = target.dataset.action;
        if(action === 'delete'){
            deleteId(todoId)
        };
    };
});

function deleteId(id){
    todoAr = todoAr.filter((el, index) => index !== id);

    renderToDo();
};



