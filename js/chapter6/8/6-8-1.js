function printNumbers1(from, to) {
  let i = from;
  let timer = setInterval(() => {
    if (i > to - 1) clearInterval(timer);

    console.log(i++);
  }, 1000);
}

function printNumbers2(from, to) {
  let i = from;

  setTimeout(function print() {
    if (i <= to - 1) setTimeout(print, 1000);

    console.log(i++);
  }, 1000);
}
