//questions 
let questions = [
  {
    id: 1,
    question: "Since Samantha really wanted to be an actress, she had no problem paying the _________ tuition for the acting classes.",
    answer: "exorbitant",
    options: [
      "lucrative",
      "exorbitant",
      "protean",
      "bizarre"
    ]
  },
  {
    id: 2,
    question: "Aggressive reporters waited outside of the celebrity’s home, ready to _________ him with their ‘in your face’ questioning.  ",
    answer: "accost",
    options: [
      "accost",
      "sere",
      "heed",
      "rekindle"
    ]
  },
  {
    id: 3,
    question: "The film’s purpose is to raise awareness of the _________ in Darfur that continues to take the lives of innocent people. ",
    answer: "genocide",
    options: [
      "decadence",
      "genocide",
      "powwow",
      "annex"
    ]
  },
  {
    id: 4,
    question: "Because the court has decided to ________ my criminal record, there will be no evidence of my past misdeeds.  ",
    answer: "expunge",
    options: [
      "devour",
      "potent",
      "annex",
      "expunge"
    ]
  },
  {
    id: 5,
    question: "When I looked at the _________ cat who was dying of starvation, I couldn’t stop the tears from falling.  ",
    answer: "cadaverous",
    options: [
      "moralistic",
      "fastidious",
      "cadaverous",
      "devour"
    ]
  },
  {
    id: 6,
    question: "They put some gum in the water in which they _________ the raggs. ",
    answer: "macerate",
    options: [
      "constraint",
      "lacerate",
      "macerate",
      "wrest"
    ]
  },
  {
    id: 7,
    question: "That year, there was a national _________ with dances and ceremonies.",
    answer: "powwow",
    options: [
      "genocide",
      "salvation",
      "perpetuity",
      "powwow"
    ]
  },
  {
    id: 8,
    question: "We were not surprised when the film’s villain removed his dagger from his _________ and stabbed the priest.",
    answer: "scabbard",
    options: [
      "premise",
      "mar",
      "furrow",
      "scabbard"
    ]
  },
  {
    id: 9,
    question: "Despite Marilyn’s high grade, the professor remained _________ in his assessment of her academic skill. ",
    answer: "fastidious",
    options: [
      "cadaverous",
      "palliative",
      "fastidious",
      "protean"
    ]
  },
  {
    id: 10,
    question: "Even though the Chateau is one of the _________ hotels in the state, it has never been mentioned in any of the best of the nation lists. ",
    answer: "preeminent",
    options: [
      "preeminent",
      "bizarre",
      "rekindle",
      "benighted"
    ]
  },
  {
    id: 11,
    question: "Can you help the poor man over there with some of the __________ lotion that we have? He has a bad knee. ",
    answer: "palliative",
    options: [
      "lucrative",
      "potent",
      "palliative",
      "sere"
    ]
  },
  {
    id: 12,
    question: "After examining Jennifer’s hand from every angle, the nurse said that the _________ would heal by itself and that stitches were unnecessary.   ",
    answer: "laceration",
    options: [
      "genocide",
      "laceration",
      "heed",
      "macerate"
    ]
  },
  {
    id: 13,
    question: "I have an idea for a book, but it is still in its _________ stage and I need to put a lot more thought into it before it is ready.",
    answer: "embryonic",
    options: [
      "embryonic",
      "lucrative",
      "superficial",
      "exorbitant"
    ]
  },
  {
    id: 14,
    question: "Jessica has decided to attend the Halloween party dressed as the __________ creature known as the unicorn. ",
    answer: "chimerical",
    options: [
      "marshal",
      "chimerical",
      "disheveled",
      "moralistic"
    ]
  },
  {
    id: 15,
    question: "Plantation owners viewed slaves as __________ animals who had to be told what to do at every moment. ",
    answer: "benighted",
    options: [
      "imperturtable",
      "benighted",
      "rekindle",
      "perpetuable"
    ]
  },
  {
    id: 16,
    question: "This will be a unique opportunity to return to school and there will be lots of time to meet old friends and __________ memories.",
    answer: "rekindle",
    options: [
      "annex",
      "mar",
      "rekindle",
      "eradicate"
    ]
  },
  {
    id: 17,
    question: "Wheat grains possess a ________ running along the length of the kernel with a vascular bundle embedded at the bottom.",
    answer: "furrow",
    options: [
      "furrow",
      "vie",
      "marshal",
      "heed"
    ]
  },
  {
    id: 18,
    question: "Yet for many making the link, it is undoubtedly his __________ rather than consistency of play that informs comparisons with the people having hot headed assumptions.",
    answer: "imperturbability",
    options: [
      "constraint",
      "imperturbability",
      "salvation",
      "devour"
    ]
  },
  {
    id: 19,
    question: "The wealthy businessman was constantly on the lookout for _________ ventures that would help him become even wealthier.",
    answer: "lucrative",
    options: [
      "lacerative",
      "powwow",
      "exorbitant",
      "lucrative"
    ]
  },
  {
    id: 20,
    question: "Since James is a swimming champion, it would do you well to _________ his advice on refining your stroke. ",
    answer: "heed",
    options: [
      "heed",
      "vie",
      "accost",
      "rekindle"
    ]
  }
];

let question_count = 0;
let points = 0;
let response_array= []; 

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

  response_array.push((String)(question_count+1)+"."+user_answer);
  console.log(response_array.join(","));
  sessionStorage.setItem("response_array", response_array.join(","));
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
