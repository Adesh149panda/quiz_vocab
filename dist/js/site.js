//questions 
let questions = [
  {
    id: 1,
    question: "Whenever Soumya was around Adesh of her dreams, she became _________ and was unable to speak.",
    answer: "inarticulate",
    options: [
      "gratuitous",
      "inarticulate",
      "portent",
      "envenomous"
    ]
  },
  {
    id: 2,
    question: "Our first _________ were McGuigan and Professor Minnette Massey, one of the first tenured women on the law school. ",
    answer: "inductees",
    options: [
      "inductees",
      "forthrights",
      "extradites",
      "caricatures"
    ]
  },
  {
    id: 3,
    question: "It puts an end to fugitives from justice, an end to the complications of the political process to _________ criminal suspects. ",
    answer: "extradite",
    options: [
      "envenom",
      "lambast",
      "resuscitate",
      "extradite"
    ]
  },
  {
    id: 4,
    question: "I should have thought that, apart from other objections, that would have been extremely cumbersome and ________ machinery.  ",
    answer: "ponderous",
    options: [
      "ambiguous",
      "upshot",
      "ponderous",
      "analogous"
    ]
  },
  {
    id: 5,
    question: "The relationship between _________ and self-control may be understood as similar discounting processes for extrinsic reinforcement, social and temporal.  ",
    answer: "altruism",
    options: [
      "contrive",
      "ambivalent",
      "altruism",
      "sanguine"
    ]
  },
  {
    id: 6,
    question: "The prime minister said that small businesses would play a full part in the __________ of the economy. ",
    answer: "resuscitation",
    options: [
      "ingratiation",
      "temerity",
      "resuscitation",
      "extradition"
    ]
  },
  {
    id: 7,
    question: "Lest economists feel too ________ about the virtues of markets, one should also acknowledge that markets do not always get it right.",
    answer: "sanguine",
    options: [
      "elapsed",
      "ambivalent",
      "amicable",
      "sanguine"
    ]
  },
  {
    id: 8,
    question: "By stepping forward with her story, she might have been trying merely to ________ herself with those who were monitoring her in the new environment.",
    answer: "ingratiate",
    options: [
      "undercut",
      "ingratiate",
      "caulk",
      "mitigate"
    ]
  },
  {
    id: 9,
    question: "Unlike more typically-developing age mates, the late talkers do not ' comprehend ' the object names when given shape __________. ",
    answer: "caricatures",
    options: [
      "caricatures",
      "upshots",
      "berets",
      "gaffe"
    ]
  },
  {
    id: 10,
    question: "He had no desire to ________ herself in lengthy lawsuits with the tabloid newspapers.",
    answer: "embroil",
    options: [
      "deploy",
      "portent",
      "embroil",
      "gaffe"
    ]
  },
  {
    id: 11,
    question: "Two versions of the vaccine have been shown in trials to be between 90% and 95% __________. ",
    answer: "efficacious",
    options: [
      "ambiguous",
      "portent",
      "ambivalent",
      "efficacious"
    ]
  },
  {
    id: 12,
    question: "Aside from many inadequacies in relating the work to the relevant literature, this book is marred by numerous technical errors and __________.  ",
    answer: "gaffes",
    options: [
      "berets",
      "gaffes",
      "bane",
      "lambasts"
    ]
  },
  {
    id: 13,
    question: "Such _________ is usually met by some kind of counter-attack, and at the very least a great deal of biting back.",
    answer: "temerity",
    options: [
      "temerity",
      "sanguine",
      "mitigation",
      "parity"
    ]
  },
  {
    id: 14,
    question: "The Saturday night sale can best be described as a buying _________. ",
    answer: "frenzy",
    options: [
      "bane",
      "forthright",
      "beret",
      "frenzy"
    ]
  },
  {
    id: 15,
    question: "But to make the general __________ that it is a management attitude to cut corners on safety is quite woeful and out of touch with the truth. ",
    answer: "lambast",
    options: [
      "dilemma",
      "lambast",
      "altruism",
      "upshot"
    ]
  },
  {
    id: 16,
    question: "The relationship between magnetiser and subject remained therefore __________: how could it be proved that the subject was not really duping the magnetiser?",
    answer: "ambivalent",
    options: [
      "frenzy",
      "temerity",
      "ambivalent",
      "efficacious"
    ]
  },
  {
    id: 17,
    question: "What do these levels tell us about the __________ conditions of power?",
    answer: "discursive",
    options: [
      "discursive",
      "retiring",
      "undercut",
      "heed"
    ]
  },
  {
    id: 18,
    question: "The __________ relationship between the two parties, however, could not last long.",
    answer: "amicable",
    options: [
      "extradite",
      "frenzy",
      "analogue",
      "amicable"
    ]
  },
  {
    id: 19,
    question: "Only in the case of carbon monoxide does this conclusion not seem to hold, possibly because _________ measures are much more limited.",
    answer: "mitigation",
    options: [
      "mitigation",
      "forthright",
      "contrive",
      "lucrative"
    ]
  },
  {
    id: 20,
    question: "For out-of-equilibrium governments, this is a/an __________ since experimentation reveals that changing the magnitude of shocks to party positions does not uniformly change robustness levels.",
    answer: "imponderable",
    options: [
      "imponderable",
      "discursive",
      "efficacy",
      "embroil"
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
