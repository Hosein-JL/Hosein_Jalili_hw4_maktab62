let o = ["rd", "th", "nd", "st"];

let color = [
  "Blue",
  "Green",
  "Red",
  "Black",
  "Yellow",
  "Orange",
  "White",
  "Purple",
  "Violet",
  "Indigo",
  "Gray",
  "pink",
];

function countingColors(color, count) {
  for (j = 0; j < 3; j++) {
    if (j == 0) {
      console.log(
        `${j + 1 + count[count.indexOf("st")]} choice is ${color[j]}`
      );
    } else if (j == 1) {
      console.log(
        `${j + 1 + count[count.indexOf("nd")]} choice is ${color[j]}`
      );
    } else if (j == 2) {
      console.log(
        `${j + 1 + count[count.indexOf("rd")]} choice is ${color[j]}`
      );
    }
  }
  for (i = 3; i < color.length; i++) {
    console.log(`${i + 1 + count[count.indexOf("th")]} choice is ${color[i]}`);
  }
}
countingColors(color, o);
