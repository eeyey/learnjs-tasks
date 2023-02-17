function topSalary(salaries) {
  return Object.entries(salaries).reduce(
    ([max, top], [name, salary]) => [
      Math.max(max, salary),
      salary > max ? name : top,
    ],
    [0, null],
  )[1];
}
