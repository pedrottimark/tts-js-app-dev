const arrayA = ['zero', 'one', 'two'];
const arrayB = arrayA;

arrayA[2] = 'deux';

// Does arrayB[2] equal two or deux?
console.log(arrayB[2]);

const arrayC = [...arrayA];

arrayA[3] = 'trois';

// Does arrayC have 3 or 4 elements?
console.log(arrayC);
