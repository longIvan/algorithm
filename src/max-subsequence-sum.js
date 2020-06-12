/**
 *@description: 最大子序列和
 *@author: Ivan
 *@date: 2018-07-06 18:56
 */
function maxSubSum(arr) {
    let maxSum = 0, //最大序列和
        thisSum = 0, //当前计算的序列和
        start = 0, //最大序列和开始位置
        end = 0 //最大序列和结束位置
    for (let i = 0; i < arr.length; i++) {
        thisSum += arr[i]
        if (thisSum > maxSum) {
            maxSum = thisSum
            end = i
        } else if (thisSum < 0) {
            thisSum = 0
            start = i
        }
    }
    return {
        maxSum: maxSum,
        startPosition: start,
        endPosition: end,
    }
}

let arr = [4, -3, 5, -2, -1, 2, 6, -2]
console.log(maxSubSum(arr))
