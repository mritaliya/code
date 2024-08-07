// ******************   sort();    *********************** //
// let a=["yagnik","ravi","nidhi","ami","nayan"];
// let y=a.sort();
// console.log(y);
// const n = [40, 100, 1, 5, 25, 10,27,30,44,444,100015];
// const t=n.sort();
// console.log(t);

// ****************   reverse();   *****************************//
// let y=[1,2,3,4,5];
// let x=y.reverse();
// console.log(y);



// *************************** pop(); ******************* //
// let y=[1,2,3,4];
// let x=y.pop();
// console.log(y);

// ********************* push(); ********************** //
// let y=[1,2,3,4];
// y.push(6);
// console.log(y);

// **************** shift() *************************** //
// let x=[1,2,3,4,];
// x.shift(1);
// console.log(x);


// ********************* unshift(); ***************** //
// let  x=[1,2,3,4,5];
// x.unshift(0);
// console.log(x);

// ******************** concat(); *****************//

// let x=[1,2,3];
// let y=[4,5,6];
// let z=x.concat(y);
// console.log(z);

// ******************** slice(); **************** //
//  let ary=['yagnik','nayan','rishi','rahul','nihil'];
//  const z=ary.slice(2,5);
//  console.log(z);

// *******************   splice();    ***********************//
// ******************* splice( index, howmany delete , new value );

// let ary=[1,2,3,4,5,6,7];
// ary.splice(3,2,1,1,);
// console.log(ary);


// ******************** is array(); *********************** //

// let a=['yagnik',1,2,3];
// let b=Array.isArray(a);
// console.log(b);

// ********************** flat(); ******************* //
// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// ******************** indexOf(); ****************** //

// let a=['yagnik','italiya','radhi','nayan'];
// let b=a.indexOf('radhi');
// console.log(b);

//**************** includes(); ************** //
// let a=['nidhi','yagnik','italiya','radhi'];
// let b=a.includes('radhi');
// console.log(b);

// ****************   find();     ***************//
// let a=[1,2,3,4,5,99,100,700];
// let b=a.find(myfunction);
// function myfunction(age){
//     return age>=18;
// }
// console.log(b);


// ****************   finIndex();     ***************//
// let a=[1,2,3,4,5,99,100,700];
// let b=a.findIndex(myfunction);
// function myfunction(age){
//     return age>=18;
// }
// console.log(b);

// *************   filter();  ********************//
// let a=[1,2,3,4,5,6,7,8,9,10,11];
// let b=a.filter(yagnik);
// function yagnik(n){
//    return n>=4;
// }
// console.log(b);

// **********************   FOR EACH(); *********** //
// IF I WANT SUM OF EACH ELEMENT IN ARRAY
//     let ary=[1,2,3,4,5,6,7,8,9,10];
//     let sum=0;
//     ary.forEach((y)=>{
//         sum+=y
//     })
// console.log(sum);

//  *************************       map();      *************//
// let a=[10,10,10,10];
// a.map((shiva)=>{
//     console.log(shiva);
// })
// sum=0;
// a.map((shiva)=>{
//     sum+=shiva;
// })
//     console.log(sum);

// *********************  reduce()      ************************* //
// let a=[1,2,3,4,5,6,7,8,9,10];
// b=a.reduce((ram,shiva)=>{
//     return ram+shiva;
// });
// console.log(b);

// **************** every(); *****************************//
// if eveery element is pass the condition the answer is true
// let a=[1,2,3,4,5,6];
// let b=a.every((shiva)=>{
//     return shiva<=6;
// });
// console.log(b);

//****************** some(); ***************************** //
// let a=[13,34,76.89,54,32,81,45];
// let b=a.some((shiva)=>{
//         return shiva>=80;
//     });
//     console.log(b);

// ******************** keys(); ********************//
// let a=[13,34,76.89,54,32,81,45];
// let b=Array.from(a.keys());
// console.log(b);

// *********************  entries(); **************** //
// let name=['nayan', 'nidhi','yagnik','radhi'];
// let b=Array.from(name.entries());
// console.log(b);
// this method is return key value pair

// *************************** with(); *******************//
// Array with() method as a safe way to update elements in an array without altering the original array.
//  let array=["Januar", "Februar", "Mar", "April"];
//  const myMonths = array.with(2, "March");
//  console.log(myMonths);