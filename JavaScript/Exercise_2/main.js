let string = "abc1cba";

function reverseString(str) {
  let secendStr = str.split("").reverse().join("");

  console.log(secendStr == string);
}

reverseString(string);
