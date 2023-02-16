const age = 25;

const valid1 = age >= 14 && age <= 90; // [14,90]
const valid2 = age < 14 || age > 90; // [-inf, 14) U (90, +inf)
const valid3 = !valid1;
