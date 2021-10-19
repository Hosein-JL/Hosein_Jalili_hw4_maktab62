let array = [10, [25, 13], [14, [55]], 2];

function toOneArray(array) {
  array = array.toString().split(",");
  array = array.map((i) => Number(i));
  console.log(array);
}

toOneArray(array);
