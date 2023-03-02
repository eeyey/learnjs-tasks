function f(a) {
  alert(a);
  console.log(a);
}

function throttle(f, timeout) {
  let lastArgs = null;
  let lastThis = null;
  let isReady = true;

  return function (...args) {
    if (!isReady) {
      lastArgs = args;
      lastThis = this;
      return;
    }

    f.apply(this, args);
    lastArgs = null;

    isReady = false;

    setTimeout(() => {
      isReady = true;

      if (lastArgs) f.apply(lastThis, lastArgs);
    }, timeout);
  };
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
