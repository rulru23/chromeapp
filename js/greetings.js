const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value; //로그인시 입력된 값을 username에 저장하고
  loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼에 클래스 hidden을 추가하여 로인클릭시 폼이 사라지고
  localStorage.setItem(USERNAME_KEY, username); // ("key", value) : ("저장될 값의 이름", 변수명); ★ Saving Username
  paintGreetings();
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); //클래스명이 greeting인 곳에 class=hidden을 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME); //loginForm의 class=hidden을 제거해주고
  loginForm.addEventListener("submit", onLoginSubmit); //loginForm에 submit을 하게되면 onLoginSubmit을 실행시켜라
} else {
  //show the greetings
  paintGreetings();
}
