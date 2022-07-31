export default function Random(min, max) {
  const drawnNumbers = [];
  const drawnAmount = max - min;

  function drawRandom() {
    let num = Math.ceil(Math.random() * max);

    if (drawnNumbers.length > drawnAmount)  return false;

    while (num < min || isDrawn(num)) {
      num = Math.ceil(Math.random() * max);
    }
    drawnNumbers.push(num);

    return num;
  }

  function isDrawn(num) {
    if (drawnNumbers.indexOf(num) == -1) {
      return false;
    }
    return true;
  }

  function getDrawnNumbers() {
    return drawnNumbers.join(' - ');
  }

  return {
    drawRandom,
    isDrawn,
    getDrawnNumbers,
  };
}
