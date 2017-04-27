var employees = [
    {
        name: "doug",
        payRate: 40,
        hourWorked: 4,
        employee_type: "contractor"
    },
    {
        name: "AJ",
        payRate: 60,
        hourWorked: 1,
        employee_type: "full-time"
    },
    {
        name: "jessica",
        payRate: 41,
        hourWorked: 7,
        employee_type: "contractor"
    },
    {
        name: "rachel",
        payRate: 30,
        hourWorked: 10,
        employee_type: "full-time"
    },
    {
        name: "andy",
        payRate: 100,
        hourWorked: 20,
        employee_type: "contractor"
    },
]

var contractors = employees.filter(function (employee) {
    return employee.employee_type === "contractor";
})

// console.log(contractors);

var contractorPay = contractors.reduce(function (acc, employee) {
    return employee.payRate * employee.hourWorked + acc;
}, 0)

console.log(contractorPay);