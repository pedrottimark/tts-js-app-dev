var company = {
    employees: [
        {
            name: "doug"
        },
        {
            name: "AJ"
        }
    ],
    getName: function(employee){
        return employee.name
    },
    getNames: function(){
        return this.employees.map(this.getName)
    }
}

console.log(company.getNames());