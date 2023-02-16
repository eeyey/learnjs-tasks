function pow(x, n) {
  return (result = x ** n);
}

let x = prompt('x', '');
let n = prompt('n', '');

if (n < 1 || n % 1 !== 0) {
  alert(`Невершная степень`);
} else {
  alert(pow(x, n));
}
