/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function() {
  document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
}

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

// I solved this problem in two separate ways. The first generates the Fibonacci
// sequence, keeps track of the count of even numbers, then exits the loop
// at the correct time. The second uses facts about the Fibonacci sequence to
// solve the problem. The last number needed in the sequence is the 33rd number,
// so the for loop iterates 33 times until the result is achieved.
function twelveEvenFibonacciSum() {
  var sum = 0;
  var count = 0;
  var fib = [0, 1];

  while (count < 11) {
    var lastFibNum = fib.length - 1

    fib.push(fib[lastFibNum] + fib[lastFibNum - 1]);

    if (fib[lastFibNum] % 2 === 0) {
      sum += fib[lastFibNum];
      count++;
    }
  }

  return sum;
}




// function twelveEvenFibonacciSum() {
//  var sum = 0;
//  var fib = [];
//  fib[0] = 0;
//  fib[1] = 1;
//
//  for (var i = 2; i <= 33; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
//
//    if (fib[i] % 2 === 0) {
//      sum += fib[i];
//     }
//  }
//
//  return sum;
// }
