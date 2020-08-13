export const calculateFactorial = (n) => {
  // If the number is less than 0, reject it.
  if (n < 0) {
    return 'INPUT must be an integer greater than or equal to "0"';
  }
  // If the number is 0, its factorial is 1.
  else if (n === 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    return n * calculateFactorial(n - 1);
  }
};
