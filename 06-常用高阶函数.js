// 高阶函数
// map
// 数组中的方法，对数组每一个元素进行遍历，并对每一个元素进行处理，并把处理的结果放入新的数组中返回

// const map = (arr, fn) => {
//   let result = []
//   for (let i of arr) {
//     result.push(fn(i))
//   }
//   return result
// }
// let arr = [1, 2, 3, 4]
// arr = map(arr, (v) => v * v)
// // arr = map(arr, function (v) {
// //   return v * v
// // })
// console.log(arr)

// every
// 数组中的方法，判断数组中的所有的元素是否匹配我们指定的条件
// const every = (arr, fn) => {
//   let result = true
//   for (const val of arr) {
//     result = fn(val)
//     if (!result) {
//       break
//     }
//   }
//   return result
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let deg = every(arr, (item) => item < 10)
// console.log(deg)

// some
// 数组中的方法，判断数组中的至少有一项满足指定的条件
// const some = (arr, fn) => {
//   let result = false
//   for (let val of arr) {
//     result = fn(val)
//     if (result) {
//       break
//     }
//   }
//   return result
// }

// let arr = [5, 8, 12]
// let r = some(arr, (e) => e > 10)
// console.log(r)

// find
// 数组中的方法，查找数组中符合条件的元素，并返回该元素
// function find(arr, fn) {
//   for (let i in arr) {
//     // console.log(fn(i), i, arr)
//     if (fn(i)) {
//       return arr[i]
//     }
//   }
// }
// let arr = [
//   { id: 15, name: 'qzy' },
//   { id: 20, name: 'zy' },
//   { id: 30, name: 'y' },
// ]
// let r = find(arr, (item) => arr[item].id == 20)
// console.log(r)

// findIndex
// 数组中的方法，查找数组中的符合条件的元素，并返回该元素的当前下标
function findIndex(arr, fn) {
  for (let i in arr) {
    if (fn(i)) {
      return i
    }
  }
}
let arr = [
  { id: 15, name: 'qzy' },
  { id: 20, name: 'zy' },
  { id: 30, name: 'y' },
]
let r = findIndex(arr, (item) => arr[item].id == 30)
console.log(r)
