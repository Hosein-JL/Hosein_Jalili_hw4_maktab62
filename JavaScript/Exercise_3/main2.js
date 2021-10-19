let array = [10, [25, 13, [2, [5]]]];

function depthArray(array) {
  let result = array;
  let check = true;
  let sizeOfArray = 1;
  let checkFirst = true;

  while (check == true) {
    let temp = (result = [].concat(...result));
    if (checkFirst == true) {
      for (var j = 0; j < array.length; j++) {
        if (typeof array[j] == typeof []) {
          checkFirst = false;
          break;
        }
      }
    }
    if (checkFirst == false) {
      result = temp;
      sizeOfArray += 1;
      for (var i = 0; i < temp.length; i++) {
        if (typeof temp[i] == typeof []) {
          break;
        } else if (i == temp.length - 1) {
          check = false;
          return sizeOfArray;
        }
      }
    } else {
      return sizeOfArray;
    }
  }
}

let depth = depthArray(array);
console.log(depth);
