const quizDB=[
    {
        question: "Which of the following is the state animal of Andhrapadesh?",
        a:"Sambar Deer",
        b:"Spotted Deer",
        c:"Rein Deer",
        d:"Blackbuck",
        ans:"ans4"
    },
    {
        question: "The longest river in Peninsular India",
        a:"Narmada",
        b:"Mahanadi",
        c:"Godavari",
        d:"Kaveri",
        ans:"ans3"
    },
    {
        question: "Which among the following Union Territory of India has largest Area?",
        a:"Delhi",
        b:"Andaman & Nicobar Islands",
        c:"Dadra & Nagar Haveli",
        d:"Chandigarh",
        ans:"ans2"
    },
    {
        question: "Which among the following is the chief crop of Deccan Plateau?",
        a:"Wheat",
        b:"ground nut",
        c:"Pulses",
        d:"Cotton",
        ans:"ans4"
    },
    {
        question: "Which of the following is the highest peak in India?",
        a:"NandaDevi Peak",
        b:"Everest Peak",
        c:"KanchanaJunga Peak",
        d:"K2 Peak",
        ans:"ans3"
    },
    {
        question: "Which of the following is the world’s largest peninsula?",
        a:"India",
        b:"South Africa",
        c:"Japan",
        d:"Arabia",
        ans:"ans4"
    },
    {
        question: "Which of the following rivers does not originate in Indian Territory?",
        a:"Mahanadi",
        b:"Bramhaputra",
        c:"Ravi",
        d:"Chenab",
        ans:"ans2"
    },
    {
        question: "Which city in India is the first to use Municipal wastes to generate Power?",
        a:"Chennai",
        b:"Mumbai",
        c:"Kolkatta",
        d:"Delhi",
        ans:"ans1"
    },
    {
        question: "Where are the Saltora Ranges Located?",
        a:"Ladakh",
        b:"Along the Vindhyas",
        c:"Part of karakoram Ranges",
        d:"Part of western Ghats",
        ans:"ans3"
    },
    {
        question: "Which is the longest irrigation canal in India?",
        a:"Indira Gandhi Canal",
        b:"Sirhand Canal",
        c:"Upper Bari Doab Canal",
        d:"Yamuna Canal",
        ans:"ans1"
    },
]

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#main');
let questioncount=0;
let score=0;

const loadQuestion=() =>{
    const questionlist=quizDB[questioncount];
    question.innerText=questionlist.question;
    option1.innerText=questionlist.a;
    option2.innerText=questionlist.b;
    option3.innerText=questionlist.c;
    option4.innerText=questionlist.d;
}

loadQuestion();

const getCheckAnswer=() =>{
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer =curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll=() =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselectAll();

    if(questioncount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length}</h3> 
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
    }
});
