let a = prompt('Первое число?', 1);
let b = prompt('Второе число?', 2);

if (a === null || b === null) alert('Вы ввели одно число.');
else alert(+a + +b); // number or NaN
