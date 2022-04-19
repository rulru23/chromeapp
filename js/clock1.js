const clock = document.querySelector("h2#clock"); //h2, id=clock 함께사용

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); //padStart : 2자리수로 맞추고, 2자리가 아닐때 0을 붙여라.
  const minutes = String(date.getMinutes()).padStart(2, "0"); //date 값은 type이 number 이기에 string으로 변경.
  const seconds = String(date.getSeconds()).padStart(2, "0"); //pad가 string 값만 인식하기에 string으로 변경.
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //website가 로드되자마자 getClock()을 실행하고 또 매초마다 실행
setInterval(getClock, 1000); //sayHello 함수를 실행하는데 1초마다 호출.
