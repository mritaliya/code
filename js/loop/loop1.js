for (let i=1;i<=5;i++){
   let dtr="*"
    console.log(dtr.repeat(i));
}


// for of loop
let str="lordShiva";
for(let i of str){
    console.log(i)
}

// for in lop

let student={
    name:"yagnik",
    age:20,
    cgpa:7.5,
    ispass:true
};
for(let yagnik in student){

    console.log("key=",yagnik,"value=",student[yagnik]);
}