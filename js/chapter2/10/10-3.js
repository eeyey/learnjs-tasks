const n = +prompt('Your number:', '');

if (!isNaN(n)) {
  const message = n > 0 ? 1 : n < 0 ? -1 : 0;

  alert(message);
}
