function aclean(arr) {
  const groups = new Map();

  arr.forEach((word) =>
    groups.set(Array.from(word.toLowerCase()).sort().join(''), word),
  );

  return Array.from(groups.values());
}
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
