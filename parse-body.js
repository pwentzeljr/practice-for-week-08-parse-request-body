function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map( e => e.split('='));
}

function thirdStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      if (input[i][j].includes('+')) {
        input[i][j] = input[i][j].replace('+', ' ');
      }
    }
  }
  return input;
}

function fourthStep(input) {
  // Your code here
  for (let i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
      input[i][j] = decodeURIComponent(input[i][j])
    }
  }
  return input
}

function fifthStep(input) {
  // Your code here
  const rv = {};
  input.forEach(el => rv[el[0]] = el[1]);
  return rv;
}

function parseBody(str) {
  // Your code here
  let rv = firstStep(str);
  rv = secondStep(rv);
  rv = thirdStep(rv);
  rv = fourthStep(rv);
  return fifthStep(rv);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
