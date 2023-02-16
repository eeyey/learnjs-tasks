const answer = prompt('Какое «официальное» название JavaScript?“');

const true_answer = 'ECMAScript'.toLowerCase();

const result_message =
  answer && answer.toLowerCase() === true_answer
    ? 'Верно!'
    : `Не знаете? “ECMAScript”!`;

alert(result_message);
