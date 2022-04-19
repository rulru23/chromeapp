const quotes = [
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "- 제임스 오펜하임 -",
  },
  {
    quote:
      "항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
    author: "- 스페인 속담 -",
  },
  {
    quote:
      "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
    author: "- 도서 ‘어떤 하루’ 中 -",
  },
  {
    quote: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
    author: "- 나카무라 미츠루 -",
  },
  {
    quote:
      "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
    author: "- 미상 -",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "- 제임스 오펜하임 -",
  },
  {
    quote:
      "항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.",
    author: "- 스페인 속담 -",
  },
  {
    quote:
      "같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.",
    author: "- 도서 ‘어떤 하루’ 中 -",
  },
  {
    quote: "인생은 곱셈이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.",
    author: "- 나카무라 미츠루 -",
  },
  {
    quote:
      "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다.",
    author: "- 미상 -",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]);

//소숫점 없애는 방법 : Math.round(소수), Math.ceil(소수), Math.floor(소수)
//예시 : Math.floor(Math.random()*10)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
