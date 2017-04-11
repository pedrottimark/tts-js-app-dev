var teacher = {
	name: 'Shane',
	speak: function() {
		
		//Bind a function to a specific context
		var boundFunction = function(){
			console.log('later my name is ' + this.name);
		}.bind(this);
		
		//boundFunction will always run in bound context
		setTimeout(boundFunction,1000);
	}
}

teacher.speak();