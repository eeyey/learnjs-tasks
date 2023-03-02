function sum(value) {
  let curSum = value;

  function nextSum(value) {
    curSum += value;
    console.log(curSum);

    return nextSum;
  }

  nextSum[Symbol.toPrimitive] = (hint) => {
    if (hint === 'number') {
      return curSum;
    }
    if (hint === 'string') {
      return curSum.toString();
    }

    return curSum;
  };

  return nextSum;
}
