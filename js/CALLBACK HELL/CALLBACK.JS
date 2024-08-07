    function getdata(dataId,getntdata){
        setTimeout(()=>{ console.log("data",dataId);
        if(getntdata){
            getntdata();
        }
    },2000); 
    }

    getdata(1,()=>{
        console.log("getting data2...");
        getdata(2,()=>{
            console.log("getting data3...");
        })
    })
    // getdata(1);
    // getdata(2);