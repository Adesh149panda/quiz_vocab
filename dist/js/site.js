//questions 
let questions = [
  {
    id: 1,
    question: "The school board will meet to put plans in place to _______ local schools in case of emergency.",
    answer: "evacuate",
    options: [
      "bemoan",
      "evacuate",
      "scale",
      "callow"
    ]
  },
  {
    id: 2,
    question: "While the president acknowledges the country’s problems, he does not offer a _______ to cure them. ",
    answer: "panacea",
    options: [
      "lumber",
      "decimation",
      "finagle",
      "limerick"
    ]
  },
  {
    id: 3,
    question: "Using computer technology, meteorologists attempt to ________ the future. ",
    answer: "prognosticate",
    options: [
      "overwrought",
      "finagle",
      "prevalent",
      "prognosticate"
    ]
  },
  {
    id: 4,
    question: "Because the billionaire is known for his ________, many people wait to follow his stock-buying trends.  ",
    answer: "perspicacity",
    options: [
      "perspicacity",
      "callow",
      "detriment",
      "corollary"
    ]
  },
  {
    id: 5,
    question: "If you have been pulled over for speeding, then your driving record is not _________. ",
    answer: "impeccable",
    options: [
      "vulnerable",
      "impeccable",
      "intelligible",
      "robust"
    ]
  },
  {
    id: 6,
    question: "There are many scammers on Craigslist who will try to ________ money out of you by buying your property with worthless checks. ",
    answer: "finagle",
    options: [
      "discern",
      "finagle",
      "lumber",
      "corrugate"
    ]
  },
  {
    id: 7,
    question: "When the soldier stole from his peers, he was dismissed from the army for displaying a lack of _________ conduct.",
    answer: "irreproachable",
    options: [
      "rationalize",
      "vulnerable",
      "irreproachable",
      "obsessive"
    ]
  },
  {
    id: 8,
    question: "The police ignored Jill’s minor ________ because it was her first violation of the law.",
    answer: "infraction",
    options: [
      "amnesty",
      "infraction",
      "callow",
      "decimation"
    ]
  },
  {
    id: 9,
    question: "As a/an ________ of splitting the company into two separate parts that provided different services, many former customers canceled their subscriptions.",
    answer: "corollary",
    options: [
      "taciturn",
      "amnesty",
      "incapacitated",
      "judicious"
    ]
  },
  {
    id: 10,
    question: "Because Aradhana has a really bad temper, she remains ________ during an argument so she will not say words she will later regret. ",
    answer: "taciturn",
    options: [
      "bemoan",
      "callow",
      "taciturn",
      "irreproachable"
    ]
  },
  {
    id: 11,
    question: "A nun is the type of person who would never be viewed as ________ because she does not care about money.",
    answer: "mercenary",
    options: [
      "mercenary",
      "detriment",
      "decimation",
      "xenophobe"
    ]
  },
  {
    id: 12,
    question: "________ at his terminal diagnosis, the patient was preparing to break the news to family.  ",
    answer: "overwrought",
    options: [
      "robust",
      "prevalent",
      "overwrought",
      "detriment"
    ]
  },
  {
    id: 13,
    question: "After working for a few weeks at my new job, I realized my _________ boss micro-managed every part of my job.",
    answer: "magisterial",
    options: [
      "intelligible",
      "magisterial",
      "uproarious",
      "cower"
    ]
  },
  {
    id: 14,
    question: "Since Mrs. Blackthorn’s husband is the town mayor, she gets most of the city’s catering opportunities because of ________.",
    answer: "nepotism",
    options: [
      "limerick",
      "panacea",
      "profusion",
      "nepotism"
    ]
  },
  {
    id: 15,
    question: "As the game neared its end, the coach told his players to hold a ________ position so their rivals could not score a touchdown.",
    answer: "tenable",
    options: [
      "prudence",
      "controversial",
      "tenable",
      "judicious"
    ]
  },
  {
    id: 16,
    question: "In order to properly prepare the lab report, the scientist had to make _________ observations during the experiment.",
    answer: "judicious",
    options: [
      "intelligible",
      "judicious",
      "prevalent",
      "detrimental"
    ]
  },
  {
    id: 17,
    question: "Even before the shoe store opened, there was a/an ________ of customers lined around several blocks to obtain a pair of the athlete’s new sneakers.",
    answer: "profusion",
    options: [
      "perspicacity",
      "instigator",
      "amnesty",
      "profusion"
    ]
  },
  {
    id: 18,
    question: "Even though Jack was a ________ football player who only played one game with the junior varsity team, he still hoped to earn a spot on the varsity squad.",
    answer: "callow",
    options: [
      "prevalent",
      "callow",
      "impeccable",
      "slight"
    ]
  },
  {
    id: 19,
    question: "The people fled their homes as the fire threatened to ________ their community.",
    answer: "decimate",
    options: [
      "instigate",
      "discern",
      "rationalize",
      "decimate"
    ]
  },
  {
    id: 20,
    question: "A speech coach will teach the unpolished political candidate how to give ________ responses during the debate.",
    answer: "intelligible",
    options: [
      "intelligible",
      "panacea",
      "limerick",
      "controversial"
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
