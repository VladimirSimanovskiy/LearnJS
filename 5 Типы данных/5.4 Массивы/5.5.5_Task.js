"use strict"
function getMaxSubSum(arr) {
  let maxSum = 0;

  nextItem:
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0 || (i == 0) ? false : ((arr[i - 1] >= 0) ? true : false)) continue;
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= 0) continue nextItem;
      if (sum >= maxSum) maxSum = sum;
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));