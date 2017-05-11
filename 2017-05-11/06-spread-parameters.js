console.log('ordinary arguments', Math.max(1, 0, -7, 8, -1, 4));

const values = [1, 0, -7, 8, -1, 4];

console.log('apply             ', Math.max.apply(null, values));
console.log('rest paramenter   ', Math.max(...values));
