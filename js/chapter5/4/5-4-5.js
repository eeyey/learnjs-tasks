function getMaxSubSum(arr) {
  if (!arr.length) return 0;

  let maxSum = Math.max(...arr);

  if (maxSum < 0) return maxSum;

  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    maxSum = Math.max(currSum, maxSum);
    currSum = Math.max(currSum, 0);
  }

  return maxSum;
}
