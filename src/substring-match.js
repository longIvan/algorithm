/**
 *@description: 字符串字串匹配，如果B串能在A串中完全匹配，则返回匹配的位置，否则返回-1
 *               简单模式匹配算法，时间复杂度为 m*n
 *@author: Ivan
 *@date: 2018-07-07 20:43
 */
function subStringMatch(str1, str2) {
    let i = 0, //字符串1的字符位置
        j = 0, //字符串2的字符位置
        k = i //记录上一次的起始位置
    let strArray1 = str1.split('')
    let strArray2 = str2.split('')
    while (i < str1.length && j < str2.length) {
        if (strArray1[i] === strArray2[j]) {
            //字符相等时，两个字符串索引值同时后移
            i++
            j++
        } else {
            //字符串不相等时，字符串2回到初始位置，字符串1回到上一次不匹配的下一个位置
            j = 0
            i = ++k
        }
    }
    //循环结束时，如果字串被遍历完说明匹配正确，返回起始位置K，否则返回-1
    return j === strArray2.length ? k : -1
}

let str1 = 'ABABCABCACBAB'
let str2 = 'ABCAC'
console.log(subStringMatch(str1, str2))
