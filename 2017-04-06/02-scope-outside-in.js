var greeting = 'Hello ';

function getGreeting(name) {
	return greeting + name; // scope of greeting includes the function body
}

console.log(getGreeting('Shane'));

// A change to the value of a variable in an outer scope
// can affect a function body between calls:
greeting = 'Bonjour ';
console.log(getGreeting('Assaf'));
