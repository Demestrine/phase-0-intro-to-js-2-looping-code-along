function writeCards(names, event) {
  const thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// For testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    writeCards,
    countDown
  };
}
