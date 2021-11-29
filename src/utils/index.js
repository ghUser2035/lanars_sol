const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const isPrime = (number) => {
  const num = Math.sqrt(number);
  for (let i = 2; i <= num; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export const generateArray = (arrSize) => {
  if (!arrSize) return;

  let generatedArr = [];

  for (let i = 1; i <= arrSize; i++) {
    if (isPrime(i)) {
      generatedArr.push(i);
    }
  }

  return shuffle([...generatedArr, ...generatedArr]);
};
