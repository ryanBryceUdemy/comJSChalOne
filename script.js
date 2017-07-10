var ryHeight = 132;
var ryAge = 24;

var frHeight = 100;
var frAge = 19

var toHeight = 132;
var toAge = 24

var ryCalc, frCalc, toCalc;

ryCalc = ryHeight + (ryAge * 5)
frCalc = frHeight + (frAge * 5)
toCalc = toHeight + (toAge * 5)

console.log(ryCalc, frCalc, toCalc);

if (ryCalc > frCalc && ryCalc > toCalc) {
  console.log("ryan is the Winner!!! with a score of " + ryCalc);
}
else if (frCalc > ryCalc && frCalc > toCalc) {
  console.log("frank is the Winner!!! with a score of " + frCalc);
}
else if (toCalc > ryCalc && toCalc > frCalc) {
  console.log("Tom is the Winner!!! with a score of " + toCalc);
}
else if (toCalc === ryCalc && toCalc === frCalc && ryCalc === frCalc) {
  console.log('you all tied');
}
// switch (ryCalc) {
//   case ryCalc > frCalc:
//     console.log("ryan is the Winner!!! with a score of " + ryCalc);
//     break;
//   case ryCalc < frCalc:
//       console.log("frank is the Winner!!! with a score of " + frCalc);
//     break;
//   case ryCalc === frCalc:
//       console.log('you tied');
//     break;
//   default:
//     console.log('your statement has flaws');
//
// }
