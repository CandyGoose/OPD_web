const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const profValues = card.querySelectorAll('.prof');
  const userValues = card.querySelectorAll('.user');
  let count = 0;

  for (let i = 0; i < profValues.length; i++) {
    if (profValues[i].textContent === userValues[i].textContent) {
      count++;
    }
  }

  card.dataset.matchCount = count;
  
  // добавление текстового уведомления
  const matchCountElem = document.createElement('div');
  matchCountElem.classList.add('match-count');
  matchCountElem.textContent = `Found ${count} matches`;
  card.appendChild(matchCountElem);
});

const sortedCards = [...cards].sort((cardA, cardB) => {
  const matchCountA = parseInt(cardA.dataset.matchCount);
  const matchCountB = parseInt(cardB.dataset.matchCount);

  if (matchCountA < matchCountB) {
    return 1;
  } else if (matchCountA > matchCountB) {
    return -1;
  } else {
    return 0;
  }
});

const cardList = document.querySelector('#cards');
sortedCards.forEach(card => {
  cardList.appendChild(card);
});
