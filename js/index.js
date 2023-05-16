function largestPairSum(numbers) {
   const arr = numbers.sort((a, b) => b - a);
    return arr[0] + arr[1] 
}
console.log(largestPairSum([10,14,2,23,19]))          // 42
console.log(largestPairSum([-100,-29,-24,-19,19]))    // 0
console.log(largestPairSum([1,2,3,4,6,-1,2]))         // 10
console.log(largestPairSum([-10, -8, -16, -18, -19])) // -18