const quizData = [
    {
        question:"For you, what is the meaning of life?",
        options:["IDK","be the most powerfull fighter in the universe","just give me the \"reward\"!"],
        answer:"just give me the \"reward\"!"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");


let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult(score);
  }
}

function showResult(score) {
    if(score==1){
        quiz.innerHTML = `
        <h1>Congratulations,<br>there is a hidden link <br>bellow the blue slime!</h1>
        <br>
    `;
    }
    else{
        quiz.innerHTML = `
        <h1>WRONG!</h1>
        <br>
        <p>Refresh the page!</p>
      `;
    }
    
}

showQuestion();