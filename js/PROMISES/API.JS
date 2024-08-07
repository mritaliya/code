let b=[];
fetch("product.json")
.then((val1)=>val1.json())
.then((val2)=>{
    b=val2
    console.log(b[3]);
})