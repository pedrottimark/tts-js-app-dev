var teacher = {
	name: 'Shane',
	speak: function() {

		function unboundFunction(){
			console.log('later my name is ' + this.name);
		}
		
		//Bind a function to a specific context
		var boundFunction = unboundFunction.bind(this);
		
		//boundFunction will always run in bound context
		setTimeout(boundFunction,1000);
	}
}

teacher.speak();