const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

const optionDiv = document.getElementById('options');
const scoreElem = document.getElementById('score');  
let questions = document.querySelector('#question');
const nextQuestion = document.getElementById('next');
let currentIndex = 0;
let score = 0;
showQuestions();
function showQuestions() {
  const {correctAnswer,options,question} = quesJSON[currentIndex];
  questions.innerHTML = `<span>Q.${currentIndex + 1} </span><span>${question}</span>`; 

  // We cannot break out of the forEach loop , It will iterate over all the array elements
  shuffle(options);
  let i = 0;
  // let optionValue = a ;
  options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.textContent=  opt;
      optionDiv.appendChild(btn);
      if(currentIndex ==0) {
        scoreElem.textContent = `score : ${0}`;
      }
      else {
        scoreElem.textContent = `score : ${score}`;
      }
      btn.addEventListener('click',()=> {
        if(opt === correctAnswer) {
          score++;
        }
        else {
          score = score - 0.25;
        }
        scoreElem.textContent = `score : ${score}`;
        optionDiv.textContent = "";
        nextQuestions();
      })
  })
}

function nextQuestions() {
  currentIndex++;
  if(currentIndex == quesJSON.length) {
    nextQuestion.style.display = "none";
    questions.textContent ="Quiz Completed";
    if(score == quesJSON.length) {
      optionDiv.textContent = "Congrates 🎉🎊 you scored full marks";
      optionDiv.classList.add('scoreresult');
    }
    else if(score <= 0) {
      optionDiv.textContent = "Better Luck Next Time";
      optionDiv.classList.add('scoreresult');
    }
  }
  showQuestions();
}
nextQuestion.addEventListener('click',()=> {
  optionDiv.textContent = "";
  nextQuestions();
})



// Shuffle Function

function shuffle(options) {
  // for(let i=0;i<options.length;i++) {
    let i = Math.floor(Math.random() * options.length);
    let j = Math.floor(Math.random() * options.length);
    [options[i],options[j]] = [options[j],options[i]];
  // }
}
