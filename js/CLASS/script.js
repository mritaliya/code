let dark=document.querySelector("#dark");
let light=document.querySelector("#light");

dark.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
    document.body.button.style.color="white"
});

light.addEventListener("click",()=>{
    document.body.style.backgroundColor="white";
    document.body.style.textColor="black"
});