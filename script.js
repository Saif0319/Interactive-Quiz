const correct = ["B","B","B","B"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;

    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //Check answers
    answers.forEach((answer, index) =>{
        if(answer === correct[index]){
            score += 25;
        }
    })

    console.log(score);
})