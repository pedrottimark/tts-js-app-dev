function ajax(value){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(value);
        }, 1000)
    });
}

function ajaxError(value){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(new Error("Bad dog no biscuit"));
        }, 1000)
    });
}

ajaxError(50)
    .then(function(result){
        console.log("Yay!");
        console.log(result);;
    })
    .catch(function(error){
        console.log(error.message);
    })
    .then(function(){
        console.log("All done!")
    })

