function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, v) => sum + v, 0);
}
