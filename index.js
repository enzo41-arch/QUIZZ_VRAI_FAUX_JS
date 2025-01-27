const questionContainer = document.querySelector(".click-event");

//ecoute le declenchcement du click
questionContainer.addEventListener("click",() => {
    console.log("test du click");
    questionContainer.style.background = "red";
    questionContainer.style.border = "7px solid black";
})
questionContainer.addEventListener("click",() =>{
    questionContainer.classList.toggle("question-clicked")
})

//selectionner un element avec son id
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
console.log(btn1);

const response = document.querySelector("p");
btn1.addEventListener("click", () => {
    response.classList.add("show-response")
    response.style.background = "red";
})

btn2.addEventListener("click", () => {
    response.classList.add("show-response")
    response.style.background = "green";
})
