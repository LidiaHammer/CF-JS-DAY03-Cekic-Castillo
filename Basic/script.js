// function takeTheVal() {
//   var jobTitle = document.getElementById('input').value;
//   var location = document.getElementById('input2').value;
//   var partnersName = document.getElementById('input3').value;
//   var numberChildren = document.getElementById('input4').value;

//   document.write(
//     'You will be a ' +
//       jobTitle +
//       ' in' +
//       location +
//       ' and married to ' +
//       partnersName +
//       ' with ' +
//       numberChildren +
//       'children.',
//   );
// }
// document.getElementById('btn').addEventListener('click', takeTheVal);

// exercise basic two

// function ageCalculator(currentYear, birthYear) {
//   return currentYear - birthYear;
// }

// var myAge = ageCalculator(2019, 1991);
// console.log(myAge);

// document.write('You are either ' + myAge + ' or ' + ++myAge + '.');

// exercise basic three
function ageCalculator(birthYear) {
  var currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
var myAge = ageCalculator(1991);
console.log(myAge);

document.write('You are either ' + myAge + ' or ' + --myAge + '.');
