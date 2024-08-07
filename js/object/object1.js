const student={
    fullName:"yagnik italiya",
    age:20,
    cgpa:8.9,
    isPass:true,
};
// console.log(student.fullName);
//console.log(student["age"]);
student["age"]=student["age"]+1;
// console.log(student["age"]);

// we can change object key while use const in object
// here fullname n age r called boject key

// const person={
// name:"YAGNIK",
// surname:"italiya",
// age:25
// };

// let name=person.age;
// console.log(name);
// console.log(person['age']);


// function yag(){
//     console.log(arguments.length);
//     console.log(arguments[0]);
    
    
// }

// yag(22,25,88);
// yag(2);
// yag(1,2,89,58);


// if we use argument eith perameter its not work
// like below

// function a(b,c,d){
//     b=100;
//     c=100;
//     d=100;
//     return arguments[0]+arguments[1]+arguments[2]
// }

// console.log( a(1,2,8));

// output will be 300
// to avoid it we can use strict mode


function a(b,c,d){
    "use strict"
    b=100;
    c=100;
    d=100;
    return arguments[0]+arguments[1]+arguments[2];
}

console.log(a(1,2,8));

// output will be 11

// ********************* symbol data type *************** //

// const mySym=Symbol("key1");
//  const obj={
//      name:'yagnik',
//      surname:'italiya',
//      [mySym]:"Mykey1",     // this is symbol syntex 

//  };
//  console.log(obj[mySym]);
//  console.log(obj);

// obj.hy=function(){
//     console.log(`hello js user, ${this.name}`)
// };

// console.log(obj.hy());

// const {name}=obj;
// console.log(name);

const {[mySym]:y}=obj;                 //  
console.log(y);                        //     its Destructuring
                                       // 
    // let name='yagnik'
    // let surname='italiya'
    // let obj={
    //     name,               // if variable name and key name of obj is same
    //     surname             // we write  like that
    // };
    // console.log(obj);      //  output = { name: 'yagnik', surname: 'italiya' }


    let a='name';
    let b='yagnik'
     let obj={
         [a]:"name",
         [b]:"yagnik"
     };
    
     console.log(obj);
     
     const person ={
        name:"jane",
        age:23,
    };
    
    const student={
        id:11,
        gpa:3.5,
    };
    
    Object.setPrototypeOf(student,person);
    console.log(student.name)
