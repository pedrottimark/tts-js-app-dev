function getGreeter(greeting){
    function greeter(name) {
        return greeting + name;
    }

    return greeter;
}

var sayHi = getGreeter("Hi ");
var sayHello = getGreeter("Hello ");
console.log(sayHello("Matt"));