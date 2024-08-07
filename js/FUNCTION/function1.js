// function myFunction(){
//     console.log("welcome to apna college");
//     console.log("we r learning js");
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();

// ************ sum of two number ************* //

// function sum(x,y,s){
//     s= x+y;
//     return s;
// }
// let val=sum(4,5);
// console.log(val);

//************** arrow function ***********//
 const arrowmul=(a,b)=>{
     return a*b;
 };
 let value=arrowmul(3,4);
 console.log(value);
/* (a,b)=>{
    code
};

// const arrowmul variable ma  function ni value store kari chee 



*/


// let arr=["yagnik","nidhi","ravi"];
// arr.forEach(function printvalue(val)
// {
// console.log(val);
    
// }

//   ) 

// arr.forEach((name)=>{
//     console.log(name.toUpperCase());
// });

// let num=[1,2,3,4];
// num.forEach((squar)=>{
//     console.log(squar*squar);
// })
// ************** map ************* //
//  let arr=[1,2,3,4,5];
// arr.map((yagnik)=>{
// console.log(yagnik);
// })
// for(let i of arr){
//     console.log(i);
// }

// ************** FILTER ************** //


//  evenArr=arr.filter((even)=>{
//     return even%2===0;
// });

// console.log(evenArr);

// evenArr=arr.filter((even)=>{
//          return even%2===0;
//      });
    
//  console.log(evenArr);
// ************* reduce **************//
     
    
// const output=arr.reduce((res,current)=>{
//     return res+current;
// });
// console.log(output);

// res will start with index 0
// current will star with index 1
// after operation res will be upgraded
// and current will shift next index
// for ex***** res is 1
// current is 2
// after operation res is 3 n current is third index of arr
// return value will be save in res
 

// function shopingPrice(...price){
//     return price;
// }
//                                    // in function  ... is called rest operator
// console.log(shopingPrice(200,3300,2500,2500,30000,2000));

// function shopingPrice(num1,num2,num3,...price){
//     return num1,num2;
// }
// console.log(shopingPrice(200,3300,2500,2500,30000,2000));



// ++++++++++++++++++++++ Immediately Invoke Functions Expression (IIFE) +++++++++++++++  //

// (function hy(){
//     console.log(`hy`);    
// })();

// ((name)=>{
//     console.log(`${name}`);
    
// })(`shiva`)

// if we write function in () it Immediately Invoke 
// to avoid global scop polution we e use IIFE


// +++++++++++++++++++++++++ Lexical scoping  +++++++++++++++++++++++++++++++ //
// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//       console.log(name);
//     }
//     displayName();
//   }
//   init();



  //  let msg=`good morning`;
  //   function hello1(){
  //   msg=`good morning`
  //   console.log(`hello:${msg}`);
  //    let c=function hello(){
  //       console.log('i am c'+msg);
  //   }
  // return c;
  //   }

  //   c=hello1();
  //   c();


// let msg=`good morning`;
// function hello1(){
// msg=`good morning`
// console.log(`hello:${msg}`);
//  function hello(){
//     console.log('i am c'+msg);
// }
// hello();
// }

// c=hello1();
//***********************************************//
// let c=function(a,b){
//     return a+b;
// };

// console.log(c(2,2));

// --------------------------------------------------- //

// function greetme(n){
//   console.log(n);
//   return function(a){
//     return a*a;
//   }
// }

// let y=greetme(5);
// let z=y(6);
// console.log(z);

// ....................................................//

const arr=[
    function(a,b){
      return a+b;
    },
    function(a,b){
      return a-b;
    },
    function(a,b){
      return a*b;
    },
  ];
  
  let ans1=arr[1];
  console.log(ans1(2,3));
  let ans0=arr[0];
  console.log(ans0(2,3));
  let ans2=arr[2];
  console.log(ans2(2,3));
  
  
  
  
  
     
      
  
  