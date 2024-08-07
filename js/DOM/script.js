// ************ CREAT AN ELEMENT ************* //

let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div=document.querySelector("p");
div.append(newBtn);

// ********* APPEND ************* PREPEND ********//
/*
 INSIDE AT THE END OF  NODE ADD ELEMENT   =>APPEND
 INSIDE AT THE START OF  NODE ADD ELEMENT =>PREPEND

*/