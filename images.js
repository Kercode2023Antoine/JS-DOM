// 1. Récupérer les éléments HTML des 2 boutons (left et right)
let next = document.querySelector(".right");
let previous = document.querySelector(".left");
console.log(next)

// 2. Ajouter des écouteurs d'événement à ces 2 boutons
previous.addEventListener("click", previousSlide);
next.addEventListener("click",nextSlide);

let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

// 3. Ecrire les fonctions de rappel (callback)
function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
     showSlide(currentIndex);   
}

function previousSlide(){
     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
     showSlide(currentIndex);   
}

function showSlide(index){
    slides.forEach((slide)=> {
        slide.classList.add('hidden')
    });
    slides[index].classList.remove('hidden');
}
