class car{
start(){
console.log(`start`);

}

stop(){
console.log(`stop`);
}
setbrand(yagnik){
    this.brand=yagnik;
}
}

let tata= new car();
tata.setbrand("brazza");

// .............. public ................... //
// -------------- private ------------------ //

// // .....public.....//   proparty can use outer of scop and private propartycant use outer  side of loop  **************//


class humen{
    age=25;              // public
    #height=5.5;        // toprivate use #
    wt=60;

    walking(){
        console.log(`i am waking`);
    }
    running(){
        console.log(`i am running`);
        
    }

}

let obj=new humen();
obj.walking();


