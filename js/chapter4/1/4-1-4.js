function sum(obj) {
  let res = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      res += obj[key];
    }
  }

  return res;
}
