//Oefening angry-birds

const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("mouseover", function() {
    count = count + 50;

    bird.style.left =  count + "px";

     
});

window.addEventListener("keydown", function(e){
    console.log(e)
    if (e.key == "ArrowRight"){
        count += 50;
    
        bird.style.left =  count + "px";

        bird.src="img/b-right.svg"
    }
    
    if (e.key == "ArrowLeft"){
        count -= 50;
    
        bird.style.left =  count + "px";

        bird.src="img/b-left.svg"

    }
    
    if (e.key == "ArrowUp"){
        count += 50;
    
        bird.style.bottom =  count + "px";

        bird.src="img/b-up.svg"

    }
    
    if (e.key == "ArrowDown"){
        count += 50;
    
        bird.style.top =  count + "px";

        bird.src="img/b-down.svg"

    }
});


function changeImg() {
    const image = document.getElementById('myImg');
    if (image.src.match("img/more.jpg")) {
        image.src = "img/less.jpg";
    }
    else {
        image.src = "img/more.jpg";
    }
}7