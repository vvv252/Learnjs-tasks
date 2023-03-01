'use strict';

function getMaxSubSum(arr) {
  let maxSum = 0;
  let incompleteSum = 0;

  for (let key of arr) { 
    incompleteSum += key;
    maxSum = Math.max(maxSum, incompleteSum);
    if (partialSum < 0) {
      incompleteSum = 0;
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );