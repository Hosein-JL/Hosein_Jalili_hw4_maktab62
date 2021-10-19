let arr = [10, [25, 13, [2, [5]]]];
let depth = 0;

function getArrayDepth(array) {
  if (Array.isArray(array)) {
    ++depth;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        arr = [].concat(...array);
        getArrayDepth(arr);
      }
    }
    return `Array depth = ${depth}`;
  }
}

let result = getArrayDepth(arr);

console.log(result);
