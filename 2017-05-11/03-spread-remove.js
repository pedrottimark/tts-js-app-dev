// Given an array of cards and a card to remove,
// return an array of the remaining cards.
const removeCard = (cards, card) => {
  var index = cards.indexOf(card);
  return index === -1 ?
    cards :
    [...cards.slice(0, index), ...cards.slice(index + 1)];
};

var cards = ['10♣', '9♣', '5♣', '2♣'];
var card = '5♣';

console.log(removeCard(cards, card));
