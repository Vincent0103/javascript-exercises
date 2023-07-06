const removeFromArray = (array, ...nums) => {
    for (let num of nums) {
        for (let i = 0; i < array.length; i++) {
            if (num === array[i]) array.splice(i, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
