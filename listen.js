// CODE HERE
let secret = document.querySelector("p");
function affiche(){
    secret = secret.classList.toggle("hidden");
}


let button = document.querySelector("button")
button.addEventListener('click',affiche);

