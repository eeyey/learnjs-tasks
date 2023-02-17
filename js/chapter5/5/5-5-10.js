function randomInteger(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function shuffle(array) {
  for (let i = 0; i > array.length - 1; i++) {
    let j = randomInteger(i + 1, array.length - 1);

    [array[i], array[j]] = [array[j], array[i]];
  }
}
