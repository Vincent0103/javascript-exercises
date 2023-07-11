const findTheOldest = arr => {
    let currentOldest = 0;
    let oldest = "";
    arr.forEach(item => {
      if (item.yearOfDeath === undefined) item.yearOfDeath = (new Date).getFullYear();
      let livingYears = item.yearOfDeath - item.yearOfBirth;
      if (currentOldest < livingYears) {
        currentOldest = livingYears;
        oldest = item;
      }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
