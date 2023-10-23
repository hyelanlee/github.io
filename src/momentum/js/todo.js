const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

// 1. localStorage에 있는 값 중에 key가 "todos"인 아이템을 가져온다
const savedToDos = localStorage.getItem(TODOS_KEY);

// 2. localStorage에 값이 뭔가가 있으면 map을 돌면서 paintToDo함수로 화면에 그려준다.
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// 3. li, span, button 엘리먼트들을 생성한다. button 엘리먼트에 대해서 삭제 함수 Listen한다.
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.style.listStyle = 'none';
  li.style.textAlign = 'left';
  // li.style.marginLeft = '50px';
  li.style.width = '200px';
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.style.marginRight = '10px'
  button.style.border = 'none'
  button.style.background = 'transparent';
  button.addEventListener("click", deleteToDo);
  span.innerText = newTodo.text;
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}

// 4. 클릭된 X버튼에 대해서 id로 filter하고, toDos변수에 저장하고, saveToDos함수를 호출한다.
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // console.log(toDos );
  saveToDos();
}

// 5. 전역변수 toDos에 저장된 객체를 localStorage에 저장한다.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 6. input박스의 엔터키 이벤트다. 입력된 value에 대해서 Object를 생성하고 화면에 그린다.
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// 7. submit이벤트를 듣는다.
toDoForm.addEventListener("submit", handleToDoSubmit);


