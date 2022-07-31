import Random from "./Random.js";

export default function Card() {
  const numCard = [];
  const numRandom = Random(1, 75);

  for (let i = 0; i < 10; i++) {
    numCard.push({
      number: numRandom.drawRandom(),
      drawn: false,
    });
  }

  function getCard() {
    numCard.sort((a,b) => a.number - b.number);
    return numCard;
  }

  function drawnNumber(num) {
    for (const element of numCard) {
      if (element.number == num) {
        element.drawn = true;
        return true;
      }
    }
    return false;
  }

  function winner() {
    for (const element of numCard) {
      if (element.drawn == false) {
        return false;
      }
    }
    return true;
  }

  return {
    getCard,
    drawnNumber,
    winner,
  };
}
