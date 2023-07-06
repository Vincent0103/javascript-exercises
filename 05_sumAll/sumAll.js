const sumAll = (num, num1) => {
    let totalSum = 0;
    let firstInt = 0;
    let lastInt = 0;

    if (!(Number.isInteger(num) && Number.isInteger(num1))) return "ERROR";
    if (!(num >= 0 && num1 >= 0)) return "ERROR";

    if (num > num1) {
        firstInt = num1;
        lastInt = num;
    } else {
        firstInt = num;
        lastInt = num1;
    }

    for (let i = firstInt; i <= lastInt; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
