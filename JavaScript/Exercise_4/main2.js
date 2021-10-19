let array = [10, [25, 13], [14, [55]], 2];

function toOneArray(array) {
  let check = true;
  let result = array;
  while (check == true) {
    let temp = (result = [].concat(...result));
    result = temp;
    for (var i = 0; i < temp.length; i++) {
      if (typeof temp[i] == typeof []) {
        break;
      } else if (i == temp.length - 1) {
        check = false;
        console.log(result);
      }
    }
  }
}

toOneArray(array);
