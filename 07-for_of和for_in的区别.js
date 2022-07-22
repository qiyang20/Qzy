// 遍历数组
// let arr = ['nick', 'freddy', 'mike', 'james']
// for (let item of arr) {
//   console.log(item)
// }

// 遍历数组中的对象
// let arr = [
//   { name: 'nick', age: 18 },
//   { name: 'freddy', age: 24 },
//   { name: 'mike', age: 26 },
//   { name: 'james', age: 34 },
// ]
// for (let item of arr) {
//   console.log(item)
// }

// 遍历对象
// let arr = { 0: 'nick', 1: 'freddy', 2: 'mike', 3: 'james' }
// // for (let i in arr) {
// //   console.log(arr[i])
// // }
// // for...of 不能遍历对象
// for (let i of arr) {
//   console.log(i)
// }

// 两个的区别
// let arr = ['nick', 'freddy', 'mike', 'james']
// // for...in 遍历的是下标
// for (let i in arr) {
//   console.log(i)
// }
// console.log('------------------')
// // for...of 遍历的是里面的每一项
// for (let i of arr) {
//   console.log(i)
// }

// 区别：
// 1、两种都可以遍历数组
// 2、for...in 可以遍历对象，但是for...of不能遍历对象
// 3、for...in 遍历出来的是下标和数组中的每一项， for...of遍历出来的是数组中的每一项
