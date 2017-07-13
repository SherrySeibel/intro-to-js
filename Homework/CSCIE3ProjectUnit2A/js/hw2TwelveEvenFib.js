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
  console.log('hi')
}

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */

 function twelveEvenFibonacciSum() {
   var total = 0;
   var fib = [];
   fib[0] = 0;
   fib[1] = 1;

   for (var i = 2; i <= 33; i++) {
     fib[i] = fib[i - 1] + fib[i -2];

     if (fib[i] % 2 === 0) {
       total += fib[i];
       console.log(total);
      }
   }

   return total;
 }
