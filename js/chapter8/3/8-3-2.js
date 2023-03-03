Function.prototype.defer = function (ms) {
  let lastThis = this;

  return (...args) => {
    setTimeout(() => {
      if (lastThis) lastThis(...args);
    }, ms);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
