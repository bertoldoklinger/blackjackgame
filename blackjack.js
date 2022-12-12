const generateDeck = () => {
  const deck = [];
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  for (const card of cards) {
    for (const suit of suits) {
      deck.push({ card: card, suit: suit });
    }
  }

  return deck;
};

const drawCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];
  deck.splice(randomIndex, 1);
  return card;
};

const checkScore = (hand) => {
  let total = 0;
  for (const cardObject of hand) {
    //checkar se é j,q , k
    if (cardObject.card === "Jack") {
      total += 10;
    } else if (cardObject.card === "Queen") {
      total += 10;
    } else if (cardObject.card === "King") {
      total += 10;
    }
    //checkar se é um ases
    else if (cardObject.card === "Ace") {
      total += 1;
    } else {
      total += parseInt(cardObject.card);
    }
  }
  return total;
};

const myDeck = generateDeck();

const myCard = drawCard(myDeck);

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Mão inicial do jogador", playerHand);
console.log("Pontuação inicial do jogador", checkScore(playerHand));
console.log("Mão inicial do distribuidor", dealerHand);
console.log("Pontuação inicial do distribuidor", checkScore(dealerHand));

while (true) {
  playerHand.push(drawCard(myDeck));
  const playerScore = checkScore(playerHand);
  let dealerScore = checkScore(dealerHand);
  if (playerScore > 21) {
    console.log(
      `Você perdeu! Sua pontuação total foi de ${playerScore},enquanto o outro jogador teve ${dealerScore}!`
    );
    break;
  }
  if (playerScore === 21) {
    console.log(
      `Você ganhou!! Sua pontuação final foi ${playerScore},enquanto o outro jogador teve ${dealerScore}!`
    );
    break;
  }

  dealerHand.push(drawCard(myDeck));
  dealerScore = checkScore(dealerHand);

  if (dealerScore > 21) {
    console.log(
      `Você ganhou!! Sua pontuação total foi de ${playerScore}, enquanto o outro jogador teve ${dealerScore}`
    );
    break;
  }

  if (dealerScore === 21) {
    console.log(
      `Você perdeu!! Sua pontuação total foi de ${playerScore}, enquanto o outro jogador teve ${dealerScore}`
    );
    break;
  }
}

console.log("Mão final do jogador", playerHand);
console.log("Pontuação final do jogador", checkScore(playerHand));
console.log("Mão final do distribuidor", dealerHand);
console.log("Pontuação final do distribuidor", checkScore(dealerHand));
