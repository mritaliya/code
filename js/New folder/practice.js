let score=35;
let grade;

if(score >=90 && score <=100){
    grade="A";
}
else if(score >=70 && score <=89){
    grade="B";
}
else if ( score >= 60 && score <=69){
    grade="C";
}
else if ( score >= 50 && score <=59){
    grade="f";
}
else{
    grade="fale"
}

console.log("grade is", grade);