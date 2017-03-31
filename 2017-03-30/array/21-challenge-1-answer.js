//  1. Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
var list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

//  2. Add 'fruit loops' to the list.
list.push('fruit loops');

//  3. Update 'coffee' to 'fair trade coffee'
var index = list.indexOf('coffee');
if (index !== -1) {
  list[index] = 'fair trade coffee';
}

//  4. Replace 'chips' and 'salsa' with 'rice' and 'beans'
index = list.indexOf('chips');
if (index !== -1 && list[index + 1] === 'salsa') {
  list[index] = 'rice';
  list[index + 1] = 'beans';
  console.log(list);
}

//  5. Create an empty array to represent your shopping cart.
var cart = [];

//  6. Remove the last item from your shopping list and add it to your cart
if (list.length !== 0) {
  cart.push(list.pop());
}

//  7. Remove the first item from your shopping list and add it to the cart
if (list.length !== 0) {
  cart.push(list.shift());
}

//  8. Write a 'while' loop that takes items from your shopping list
// and moves them to your cart until there are no items left on the list.
while (list.length !== 0) {
  cart.push(list.shift());
}

//  9. Sort the items in your cart alphabetically... backwards
cart.sort().reverse();

// 10. Print the list of items in your shopping cart to the console as comma separated string.
console.log(cart.join(','));
