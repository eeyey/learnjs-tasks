function unique(arr) {
  const obj = {};
  const res = [];

  arr.forEach((v) => (obj[v] = 1));

  for (let key in obj) {
    res.push(key);
  }

  return res;
}
