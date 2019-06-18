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

async function doMath(number) {
  try {
    var firstResult = await addNumber(number);
    var secondResult = await multipleNumber(firstResult);
    var thirdResult = await numTimesNum(secondResult);
    console.log(thirdResult);
  }
  catch (error) {
    console.log(error)
  }
}

doMath(1);
doMath(2);
doMath(3);
doMath(4);
doMath(5);