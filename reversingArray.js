const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.reverse();
// console.log(arr);

const revNum = [];
for (const num of arr) {
  revNum.unshift(num);
}
console.log(revNum);
