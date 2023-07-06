const add = (num, num1) => {
	return num + num1;
};

const subtract = (num, num1) => {
	return num - num1;
};

const sum = (arrayNums) => {
  let result = 0;
  for (let num of arrayNums) result += num;
  return result;
};

const multiply = (firstNum, ...argsNum) => {
  let result = firstNum;
  for (let num of argsNum) result *= num;
  return result;
};

const power = (num, num1) => {
  return Math.pow(num, num1);
};

const factorial = (num) => {
  if (num === 0) return 1;

  let result = 1;
  for (let i = 1; i <= num; i++) result *= i;

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
