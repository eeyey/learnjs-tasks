function checkAge(age) {
  return age <= 18 ? confirm('Родители разрешили') : true;
}

function checkAge1(age) {
  return age > 18 || confirm('Родители разрешили');
}
