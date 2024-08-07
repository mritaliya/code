// let citys=["delhi","surat","mumbai","pune","hyderabad"]
// for(let city of citys){
//     console.log(city);
// }

// practice
 
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log(avg);

// for(let mark of marks){
//     sum += mark; 
// }
// let avg=sum/marks.length;
// console.log(`the avg is = ${avg}`)

// ******************** splice() ******************** //

// let submarks=marks.splice(2,2,101,103);
// console.log(submarks);
// console.log(marks);

// ************* Add element *************** //
// arr.splice(2,0,101);

// ************ Delete element ************** //
// arr.splice(3,1);

// *********** Replace element ************* //
// arr,splice(3,1,101);

// practice Question //

let companies=["Blomberg","microsoft","uber","Google","ibm","netflix"];

// remove first company from the array
// ************* delete ************//
// pop-> delete from end
// shift->delete from start

// console.log(companies.shift());

// companies.splice(2,1,"ola");
// console.log(companies);

// ************** add ************//
// push-> add in end
// unshift-> add in start

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
 


let a=[1,2,4,5,6,];
for(let x in a){
    console.log(a[x]);
}

// ***************************** spread oparator ***************************//
// ************************ ... is called spread operater *****************//
// let a=['YAGNIK','nidhi','nayan','kashish'];
// let b=['dhuli','kartik','dev'];
// let n=[...a,...b];
// console.log(n);
