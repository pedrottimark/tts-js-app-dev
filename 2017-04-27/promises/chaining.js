function ajax(value){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(value);
        }, 1000)
    });
}

ajax(50)
    .then(function(result){
        console.log(result);
        return result + 10
    })
    .then(function(result){
        console.log(result);
    })

