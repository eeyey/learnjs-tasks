function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    const [a, method, b] = str.split(' ');

    if (!this.methods[method]) {
      return NaN;
    }

    return this.methods[method](+a, +b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
