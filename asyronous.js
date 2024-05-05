function asyncFunction() {
    
    return new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            let success = true;
            if(success){
                console.log('4 Second');
                resolve();
            }
            else {
                reject();
            }
        },4000);

    });
}

asyncFunction()
.then(result=>{
    console.log("resolver executed successfully");
})

.catch(error=>{
    console.log("Reject executed successfully");
});
