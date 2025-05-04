const openb = document.querySelector(".open");
const closeb = document.querySelector(".close");
const menub = document.querySelector(".menu");

closeb.addEventListener("click", function(){
    menub.classList.add("active");
    openb.style.display = "inline";
    closeb.style.display = "none";
});

openb.addEventListener("click", function(){
    menub.classList.remove("active");
    openb.style.display = "none";
    closeb.style.display = "inline";
});