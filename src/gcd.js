/**
 *@description: 欧几里得算法，计算两个数的最大公倍数
 *@author: Ivan
 *@date: 2018-07-06 19:18
 */
function gcd(num1, num2) {
    //确保第一个数比第二个数大
    if (num1 < num2) {
        //使用解构赋值交换两个变量值
        ;[num1, num2] = [num2, num1]
    }
    //循环迭代，最后的非零余数就是两个数的最大公因数
    while (num2 !== 0) {
        //使用解构赋值交换两个变量值
        ;[num1, num2] = [num2, num1 % num2]
    }
    return num1
}

console.log(gcd(1989, 1590))
