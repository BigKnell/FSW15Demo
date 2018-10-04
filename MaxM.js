// morning coding chalenge
// this is also my first attempt at coe in Js in the command line editer. if only vi had spell check.lol


function reverseNumber(num) {
  let result = num.toString();
  let result1 = result.split("").reverse().join("");
  let result2 = Number(result1)
  return result2;
}
 console.log(reverseNumber(12345));
