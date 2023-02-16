while (true) {
  let answer = prompt('Number > 100');

  if ((answer !== '' && !answer) || +answer > 100) break;
}
