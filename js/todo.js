const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

//toDos array의 내용을 localStorage에 넣는다.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //toDo 저장
}

function deleteToDo(event) {
  const li = event.target.parentElement; //parentElement : 클릭된 element의 부모
  li.remove(); //button은 li를 제거
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //입력된 값을 newTodo에 담는다.
  toDoInput.value = ""; //입력된 값을 비운다.
  const newTodoObj = {
    // newTodoObj를 toDos array에 넣기
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); //toDos array를 localStorage에 넣기.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// 사용자가 form을 submit을 하면 > input을 비우고
// 그 텍스트(newTodo)를 toDos array에 push 하고 (toDos는 Array "[]"을 말한다.)

const savedToDos = localStorage.getItem(TODOS_KEY);
// localStorage에서 온 string 을 가지고, 배열로 만들것

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  toDos = parsedToDos; //toDos에 pasedToDos를 넣어서 전에 있던 toDo를 복원
  parsedToDos.forEach(paintToDo);

  //forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행
}
