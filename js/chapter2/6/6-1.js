const user_name = prompt('Введите ваше имя', undefined);

const answer = !user_name ? 'Вы не ввели свое имя.' : `Ваше имя ${user_name}`;

alert(answer);
