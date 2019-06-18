function addNumber(number, cb) {
  setTimeout(function () {
    var error;
    var result;
    if (number === 1) {
      error = "Number is too low!"
    } else {
      result = number + 2;
    }
    cb(error, result);
  }, 1000)
};

function multiplyNumber(number, cb) {
  setTimeout(function () {
    var error;
    var result;
    if (number % 2 === 0) {
      error = "Number is even!"
    } else {
      result = number * 2;
    }
    cb(error, result);
  }, 1000)
};

function numTimesNum(number, cb) {
  setTimeout(function () {
    var error;
    var result;
    if (number === 10) {
      error = "I don't like the number ten!"
    } else {
      result = number * number;
    }
    cb(error, result);
  }, 1000)
};

function doMath(number) {
  addNumber(number, function (error, response) {
    if (error) {
      console.log('There has been an error in addNumber function!');
      console.error(error);
    } else {
      multiplyNumber(response, function (error, response) {
        if (error) {
          console.log('There has been an error in multiplyNumber function!');
          console.error(error);
        } else {
          numTimesNum(response, function (error, response) {
            if (error) {
              console.log('There has been an error in numTimesNum function!');
              console.error(error);
            } else {
              console.log(response);
            }
          })
        }
      })
    }
  })
}

doMath(1);
doMath(2);
doMath(3);
doMath(4);
doMath(5);
