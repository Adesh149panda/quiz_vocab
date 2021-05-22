//questions 
let questions = [
  {
    id: 1,
    question: "His __________ expressed relief, and he began to thank God.",
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
      "lurid"
    ]
  },
  {
    id: 3,
    question: "A year later, he moved his studio to _________ Singapore.",
    answer: "cosmopolitan",
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
    question: "Simpson's_________ of quotable defense attorneys consists of men.",
    answer: "coterie",
    options: [
      "engrossed",
      "empathetic",
      "coterie",
      "verisimilar"
    ]
  },
  {
    id: 9,
    question: "So when Riady asks for something, the administration pays __________ attention.",
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
    question: "How can a man made robot be deprived of its _________?",
    answer: "artlessness",
    options: [
      "artlessness",
      "colloquial",
      "stupefy",
      "bias"
    ]
  },
  {
    id: 11,
    question: "Clearly ________, Lemmons gave him a slap on the chest.",
    answer: "flustered",
    options: [
      "artlessness",
      "engrossed",
      "bias",
      "flustered"
    ]
  },
  {
    id: 12,
    question: "For instance, numerous customer complaints could __________ a product recall.",
    answer: "foreshadow",
    options: [
      "foreshadow",
      "verisimilar",
      "colloquial",
      "empathetic"
    ]
  },
  {
    id: 13,
    question: "You have to be _________ to the needs of the prisoners.",
    answer: "empathetic",
    options: [
      "solecism",
      "raucous",
      "empathetic",
      "choleric"
    ]
  },
  {
    id: 14,
    question: "Provisions which _________ African Americans resulted in excluding many poor Whites.",
    answer: "disenfranchised",
    options: [
      "foreshadowed",
      "disenfranchised",
      "stupefy",
      "belabored"
    ]
  },
  {
    id: 15,
    question: "His drawing lost the essence due to the _______ strokes marked by his younger brother.",
    answer: "lurid",
    options: [
      "coterie",
      "bias",
      "lurid",
      "solecism"
    ]
  },
  {
    id: 16,
    question: "Presidential elections are unpleasant enough without them turning ________ and unseemly.",
    answer: "raucous",
    options: [
      "empathetic",
      "engrossed",
      "verisimilar",
      "raucous"
    ]
  },
  {
    id: 17,
    question: "Technology stocks had risen to _________ levels and were about to collapse.",
    answer: "stupefying",
    options: [
      "raucous",
      "disenfranchise",
      "stupefying",
      "colloquial"
    ]
  },
  {
    id: 18,
    question: "Other examples of ________ usage in English include contractions or profanity.",
    answer: "colloquial",
    options: [
      "ratify",
      "colloquial",
      "cosmopolitan",
      "countenance"
    ]
  },
  {
    id: 19,
    question: "They wander into other lanes as they become _________ in their conversations.",
    answer: "engrossed",
    options: [
      "choleric",
      "colloquial",
      "engrossed",
      "biased"
    ]
  },
  {
    id: 20,
    question: "The result is a strikingly _________ explanation of the whole night, in very human terms, based on topography that still exists here.",
    answer: "verisimilar",
    options: [
      "verisimilar",
      "colloquial",
      "lurid",
      "assiduous"
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
