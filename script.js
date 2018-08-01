//Get date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

const todoDate = document.querySelector('.todo-date');
const dateNow = document.createElement('p');
dateNow.innerText = dd + '/' + mm + '/' + yyyy;
todoDate.appendChild(dateNow)

//
const input1 = document.querySelector('.input-todo');
const input2 = document.querySelector('.input-place')



const addButton = document.querySelector('.btn-add')
addButton.addEventListener('click', addItem)

function addItem(e){
  const itemBox = document.querySelector('.todo-inbox');
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo-item')

  const text = document.createElement('div');
  text.classList.add('todo-text')

  const todoText = document.createElement('h1');
  todoText.innerText = input1.value
  console.log(input1);

  const delButton = document.createElement('button');
  delButton.classList.add('btn');
  delButton.classList.add('btn-danger');
  delButton.classList.add('btn-sm');
  delButton.innerText='X';
  delButton.addEventListener('click', delTodo);

  text.appendChild(todoText);
  text.appendChild(delButton);
  todoItem.appendChild(text);


  const subText = document.createElement('div');
  subText.classList.add('todo-subtext')

  const todoSubText = document.createElement('p');
  todoSubText.innerText= input2.value;

  subText.appendChild(todoSubText);
  todoItem.appendChild(subText);

  itemBox.appendChild(todoItem)

  input1.value = ""
  input2.value = ""
}

function delTodo(e){
  console.log(e);
  e.target.parentNode.parentNode.remove();
}
