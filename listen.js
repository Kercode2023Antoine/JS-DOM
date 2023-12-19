// CODE HERE

function show(){
    let secret = document.querySelector("p");
    secret.classList.toggle("hidden");
}

let button = document.querySelector("button")
button.addEventListener('click',show);

