function inBetween(a, b) {
  return (n) => a <= n && n <= b;
}

function inArray(arr) {
  return (item) => arr.includes(item);
}
