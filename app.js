//Oefening angry-birds

const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("mouseover", function() {
    count = count + 50;

    bird.style.left =  count + "px";

     
});


