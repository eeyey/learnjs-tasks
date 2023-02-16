const login = prompt('Кто там? ');

if (login === 'Админ') {
  const password = prompt('Пароль?');

  if (password === 'Я Главный') {
    alert('Здравствуйте');
  } else if (!login) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (!login) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
