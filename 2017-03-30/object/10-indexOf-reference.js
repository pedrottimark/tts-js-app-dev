var matt = {name: 'matt'};
var julian = {name: 'julian'};
var students = [matt, julian];

console.log(students.indexOf(julian));
console.log(students.indexOf({name: 'julian'}));