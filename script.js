const correct = ["A","B","B","A"];
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


    // show result
    const result = document.querySelector(".result"); 
    
    result.classList.remove("d-none");
    scrollTo(0,0);

    let i = 0; 
    let timer = setInterval(() => {
        i++;
        if(i === score){
            clearInterval(timer);
        }
        result.querySelector("span").textContent = `${i}%`
    }, 20)

})