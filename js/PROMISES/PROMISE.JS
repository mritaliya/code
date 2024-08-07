const PromiseOne=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log(`asyna task is complete`);
        resolve();
    }, 1000);
});

PromiseOne.then(function(){
console.log(`promise consumed`);
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(`async 2 is comlete`);
        resolve();
    },1000)
}).then(()=>{
    console.log(`async 2  consumed`);
})


const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'YAGNIK',email:"yagnikitaliya1234@gamil.com"})
    },1000)
});

promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour=new Promise((resolve, reject) => {
    setTimeout(() => {
        let err=false
        if (!err) {
            resolve({username:"yagnik",password:"123"})
        }else{
            reject("err:something went wrong")
        }
    }, 1000);
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
console.log(`username name is :${username}`);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('the promise is either resolve or rejected');
})

const promiseFive=new Promise((resolve, reject) => {
    setTimeout(() => {

        let err=true
        if (!err) {
            resolve({username:"yagnik",password:"123"})
        }else{
            reject("err:something went wrong")
        }
    }, 1000);
})

async function consumePromisefive() {
    try {
        const responce=await promiseFive
    console.log(responce);
    
}
    catch (error) {
    console.log(error);    
    }
}
consumePromisefive()