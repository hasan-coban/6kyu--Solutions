/*
Prime Factors
Inspired by one of Uncle Bob's TDD Kata

Write a function that generates factors for a given number.

The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). 
That list contains the prime factors in numerical sequence.
*/
//My S:
const prime_factors = n => {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i == 0) {
      factors.push(i);
      n /= i;
    } //i=2 iken n looptan dolayı 8,4,2 şeklinde güncellenecek
  }
  return factors;
}
