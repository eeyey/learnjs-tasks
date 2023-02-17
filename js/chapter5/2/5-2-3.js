function readNumber() {
  while (true) {
    let n = prompt('n');

    if (!n) {
      return null;
    } else if (isFinite(+n)) {
      return +n;
    }
  }
}

alert(`Число: ${readNumber()}`);
