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
// function ageCalculator(birthYear) {
//   var currentYear = new Date().getFullYear();
//   return currentYear - birthYear;
// }
// var myAge = ageCalculator(1991);
// console.log(myAge);

// document.write('You are either ' + myAge + ' or ' + --myAge + '.');

// exercise basic four
// function calculator(degree) {
//   var result = degree * (Math.PI / 180);
//   console.log(result);
// }
// calculator(90);

// exercise basic five
// function calculator(width, height, depth = 1) {
//   return width * height * depth;
// }
// console.log(calculator(2, 7));
// console.log(calculator(2, 5, 7));

// exercise basic 6
// function calculateProduct(array) {
//   var sum = 1;
//   for (var i = 0; i < array.length; i++) {
//     sum = sum * array[i];
//   }
//   return sum;
// }
// console.log(calculateProduct([1, 3, 7, 10, 2]));
