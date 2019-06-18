function addNumber(number) {
  return new Promise(function (resolve, reject) {
    if (number === 1) {
      reject("Number is too low");
    } else {
      resolve(number + 2);
    }
  })
};

function multipleNumber(number) {
  return new Promise(function (resolve, reject) {
    if (number % 2 === 0) {
      reject("Number is even!");
    } else {
      resolve(number * 2);
    }
  })
};

function numTimesNum(number) {
  return new Promise(function (resolve, reject) {
    if (number === 10) {
      reject("I don't like the number ten!");
    } else {
      resolve(number * number);
    }
  })
}

function doMath(number) {
  addNumber(number)
    .then(function (result) {
      return multipleNumber(result)
    })
    .then(function (result) {
      return numTimesNum(result);
    })
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.log(error);
    })

}

doMath(1);
doMath(2);
doMath(3);
doMath(4);
doMath(5);