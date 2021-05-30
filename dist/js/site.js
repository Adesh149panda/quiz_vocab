//questions 
let questions = [
  {
    id: 1,
    question: "The time of the party is ________ and subject to change.",
    answer: "tentative",
    options: [
      "slight",
      "forage",
      "scintillating",
      "tentative"
    ]
  },
  {
    id: 2,
    question: "While I could understand a little of the contract, the majority of the legal text was ________ to me.",
    answer: "abstruse",
    options: [
      "flail",
      "abstruse",
      "detrimental",
      "jovial"
    ]
  },
  {
    id: 3,
    question: "When the boxer got knocked out in the first round, everyone knew it was the beginning of a/an ________ defeat for him. ",
    answer: "ignominious",
    options: [
      "vociferous",
      "ignominious",
      "incapacitated",
      "aversion"
    ]
  },
  {
    id: 4,
    question: "I was looking forward to bushels of fresh, home-grown tomatoes, but a/an ________ killed all my plants just before they became ripe. ",
    answer: "blight",
    options: [
      "blight",
      "affable",
      "muse",
      "mentor"
    ]
  },
  {
    id: 5,
    question: "The ________ of violence in the downtown area keeps many tourists from visiting that part of the city. ",
    answer: "notoriety",
    options: [
      "flail",
      "temperance",
      "notoriety",
      "sinistral"
    ]
  },
  {
    id: 6,
    question: "Raising money for worthy causes, Paul is a/an ________ person with a giving spirit.",
    answer: "benevolent",
    options: [
      "vociferous",
      "undermine",
      "muse",
      "benevolent"
    ]
  },
  {
    id: 7,
    question: "Although Jane was nervous standing in front of the judge, she held on to her ________ and did not let her nerves get the best of her.",
    answer: "sangfroid",
    options: [
      "jovial",
      "sangfroid",
      "obsession",
      "forage"
    ]
  },
  {
    id: 8,
    question: "My grandmother still does not own a microwave because she believes the radiation could be ________ to her health.",
    answer: "detrimental",
    options: [
      "detrimental",
      "debacle",
      "abstruse",
      "notoriety"
    ]
  },
  {
    id: 9,
    question: "After suffering from a stroke, the once lively woman was now in a/an ________ state where she could barely even speak. ",
    answer: "incapacitated",
    options: [
      "ignominious",
      "prudent",
      "incapacitated",
      "scintillating"
    ]
  },
  {
    id: 10,
    question: "Each time we dine there, Howard manages to ________ the waiter into giving us something for free.",
    answer: "cajole",
    options: [
      "cajole",
      "muse",
      "truncate",
      "undermine"
    ]
  },
  {
    id: 11,
    question: "After the critic saw the play, he described it as a/an ________ masterpiece that captivates with each line of witty dialogue.",
    answer: "scintillating",
    options: [
      "anodized",
      "mentor",
      "muse",
      "scintillating"
    ]
  },
  {
    id: 12,
    question: "However, some broods possess a few snails of the opposing hand, and in predominantly ________ broods, the incidence of dextrality is quite high.",
    answer: "sinistral",
    options: [
      "temperance",
      "voracious",
      "sinistral",
      "affable"
    ]
  },
  {
    id: 13,
    question: "Jill had to ________ her presentation so it would not exceed five minutes.",
    answer: "truncate",
    options: [
      "truncate",
      "debacle",
      "undermine",
      "flail"
    ]
  },
  {
    id: 14,
    question: "Determined to never become an alcoholic, Tim exercised ________ whenever he drank alcohol so he wouldn’t drink too much. ",
    answer: "disenfranchised",
    options: [
      "notoriety",
      "aversion",
      "temperance",
      "prudence"
    ]
  },
  {
    id: 15,
    question: "Soumya’s ex-boyfriend was deemed a stalker due to his _______ with her by always watching, calling and thinking about her. ",
    answer: "obsession",
    options: [
      "prudence",
      "obsession",
      "aversion",
      "benevolence"
    ]
  },
  {
    id: 16,
    question: "Soumya had an acute ________ knowing about the verbal conflict between sibasis and girija.",
    answer: "aversion",
    options: [
      "cajole",
      "aversion",
      "muse",
      "temperance"
    ]
  },
  {
    id: 17,
    question: "On the holiday, the children will ________ through the pasture for eggs filled with treasures.",
    answer: "forage",
    options: [
      "obsess",
      "unbdermine",
      "forage",
      "blight"
    ]
  },
  {
    id: 18,
    question: "The need for these new industries is either not recognised or is economically ________, leading to discontent.",
    answer: "unviable",
    options: [
      "unviable",
      "scintillating",
      "benevolent",
      "slight"
    ]
  },
  {
    id: 19,
    question: "The accountant’s financial ________ led him to make wise business decisions and save a ton of money.",
    answer: "prudence",
    options: [
      "jovial",
      "prudence",
      "muse",
      "flail"
    ]
  },
  {
    id: 20,
    question: "If you want to look at the country’s problems, start with the _________ of the healthcare system.",
    answer: "debacle",
    options: [
      "blight",
      "aversion",
      "sinistral",
      "debacle"
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
