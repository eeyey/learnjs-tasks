function sumTo3(n) {
  return (n * (n + 1)) / 2;
}

function sumTo2(n) {
  return n > 1 ? n + sumTo2(n - 1) : 1;
}

function sumTo1(n) {
  return new Array(n).fill(undefined).reduce((s, _, i) => s + i + 1, 0);
}
