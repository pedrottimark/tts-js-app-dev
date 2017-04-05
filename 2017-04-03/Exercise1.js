var billAmount = 100.58;

function gratutity(amount) {
    return amount * 0.2;
}

function totalWithGrat(amount) {
    return gratutity(amount) + amount;
}

console.log("your total, including gratutity is: $" + totalWithGrat(50));
console.log("your total, including gratutity is: $" + totalWithGrat(60));
console.log("your total, including gratutity is: $" + totalWithGrat(70));
console.log("your total, including gratutity is: $" + totalWithGrat(80));
console.log("your total, including gratutity is: $" + totalWithGrat(90));