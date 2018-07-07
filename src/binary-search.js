/**
 *@description: 二分查找，在一个有序序列中查找一个与num相等的数，并返回它的位置，否则返回-1
 *@author: Ivan
 *@date: 2018-07-06 17:52
 */
function binarySearch(arr, num) {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let center = Math.floor((low + high) / 2);
        if (arr[center] > num) {
            high = center -1;
        } else if (arr[center] < num) {
            low = center + 1;
        } else {
            return center;
        }
    }
    return -1
}

let arr = [1,3,5,7,10,15,19,20];
console.log(binarySearch(arr, 16));