function delay(time) {
  return new Promise((resolve, _) => setTimeout(resolve, time));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
