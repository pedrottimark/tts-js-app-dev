function getPropPrinter(propName){
    return function (obj){
        console.log(obj[propName]);
    }
}

var printName = getPropPrinter("name");
var printAge = getPropPrinter("age");
printName({name:"Ted"});
printAge({
    name:"Ted",
    age: 21
});
// Logs "Ted" to console