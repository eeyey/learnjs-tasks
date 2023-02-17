function sumInput() {
  const nums = [];

  while (true) {
    const n = prompt('Your num');

    if (!n || !isFinite(+n)) break;

    nums.push(+n);
  }

  return nums.reduce((s, n) => s + n, 0);
}
