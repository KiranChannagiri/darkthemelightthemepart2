let innerdiv = document.querySelector(".innerdiv");
let outerdiv = document.querySelector(".outerdiv");
let bodybg = document.querySelector(".bodybg")
outerdiv.addEventListener("click",()=>
{
    innerdiv.classList.toggle("translate");
    outerdiv.classList.toggle("bg");
    bodybg.classList.toggle("bgboody")
});
