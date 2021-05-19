//questions 
let questions = [
  {
    id: 1,
    question: "An evolutionary informed theory of action __________overlapped casual domains.",
    answer: "countenance",
    options: [
      "bias",
      "choleric",
      "coterie",
      "countenance"
    ]
  },
  {
    id: 2,
    question: "Now the changed_________ of his mind had bred new habits, he was thinking a great deal.",
    answer: "bias",
    options: [
      "bias",
      "flustered",
      "belabor",
      "choleric"
    ]
  },
  {
    id: 3,
    question: "Oily brown shadows of faces with a __________ streak in the wrong place, meant Rembrandt.",
    answer: "lurid",
    options: [
      "lurid",
      "flustered",
      "cosmopolitan",
      "raucous"
    ]
  },
  {
    id: 4,
    question: "He was a passionate, combative,__________ and difficult man, frequently embroiled in legal disputes.",
    answer: "choleric",
    options: [
      "colloquial",
      "belabor",
      "choleric",
      "empathetic"
    ]
  },
  {
    id: 5,
    question: "Rank and file workers now must __________ the pact.",
    answer: "ratify",
    options: [
      "raucous",
      "disenfranchise",
      "engross",
      "ratify"
    ]
  },
  {
    id: 6,
    question: "The politician's constant __________, flustered the audience in the hall.",
    answer: "belabor",
    options: [
      "verisimilar",
      "cotorie",
      "belabor",
      "countenance"
    ]
  },
  {
    id: 7,
    question: "Anyone who does commit the __________ of talking or writing about class in America is assailed at once by a problem of definition.",
    answer: "solecism",
    options: [
      "raucous",
      "solecism",
      "foreshadow",
      "ratify"
    ]
  },
  {
    id: 8,
    question: "The __________ of would-be revolutionaries commanded no widespread support.",
    answer: "coterie",
    options: [
      "bias",
      "empathetic",
      "coterie",
      "verisimilar"
    ]
  },
  {
    id: 9,
    question: "He delighted in the young and was___________ in attendance at the Oxford Union, where he was senior librarian.",
    answer: "assiduous",
    options: [
      "choleric",
      "assiduous",
      "ratify",
      "lurid"
    ]
  },
  {
    id: 10,
    question: "His________ was boyish and so were his acuteness and his transparent but somewhat belated good sense.",
    answer: "artlessness",
    options: [
      "artlessness",
      "colloquial",
      "stupefy",
      "bias"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
