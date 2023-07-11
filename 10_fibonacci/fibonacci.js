const fibonacci = num => {
    prevNums = [0, 0]
    if (typeof num === "string") num = parseInt(num);

    let fibonacciResult = 0;
    if (num < 0) return "OOPS";
    for (let i = 0; i < num; i++) {
        fibonacciResult = 0;
        prevNums.forEach((prevNum, index) => {
            if (prevNum === 0) prevNums[index] = 1;
            fibonacciResult += prevNum;
            if (num === 1) fibonacciResult = 1;
        })
        prevNums[0] = prevNums[1];
        prevNums[1] = fibonacciResult;
    }

    return fibonacciResult;
};

console.log(fibonacci("1"));

// Do not edit below this line
module.exports = fibonacci;
