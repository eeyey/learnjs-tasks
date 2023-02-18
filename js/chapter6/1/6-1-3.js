function fib(n) {
  let a1 = 1;
  let a2 = 1;

  for (let i = 3; i <= n; i++) {
    [a1, a2] = [a2, a1 + a2];
  }

  return a2;
}
