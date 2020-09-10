export const calculateFactorial = (n) => {
  // If the number is 0, its factorial is 1.
  if (n === 0) {
    return 1;
  }
  // Otherwise, call this recursive procedure again.
  else {
    return n * calculateFactorial(n - 1);
  }
};
