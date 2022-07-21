// let numbers = [6, 8, 2, 9, 1, 4, 66];
// function sortArrDsc(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < array[i + 1]) {
//         done = false;
//         var tmp = array[i + 1];
//         array[i + 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }
//   return array;
// }
// console.log(sortArrDsc(numbers));
// let numbers2 = [3, 5, 8, 7, 3, 44, 11, 1];
// function sortedArrayASC(arr) {
//   var test = false;
//   while (!test) {
//     test = true;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         test = false;
//         var temp = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortedArrayASC(numbers2));
// function ReduceMax(arr) {
//   let max = arr.reduce((accumlator, currentValue) => {
//     return accumlator > currentValue ? accumlator : currentValue;
//   });

// }
let app = new Vue({
  el: "#app",
  data: {
    message: "Hallo World",
    count: 0,
  },
  methods: {
    increase() {
      return this.count++;
    },
    decrease() {
      if (this.count > 0) {
        return this.count--;
      } else {
        return;
      }
    },
    reverse() {
      return (this.message = this.message.split("").reverse().join(""));
    },
  },
});
/* . slice() method
If you want to extract some values from an array, you can do that by using slice() JavaScript function
-the await keyword by stopping execution until the resolution of returned promises.
 The code outside your async function will keep executing normally.
 the await keyword by stopping execution until the resolution of returned promises.
 The code outside your async function will keep executing normally.
 -the best approach to remove an element from an array based on
 its value is to use the indexOf() function to discover the index number of that value in the array,
  and then use the splice() function to delete that index value. */
let x = 10;
let y = "10";
console.log(x === Number(y));
var f = null;
console.log(f);
