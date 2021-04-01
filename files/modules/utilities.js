const formatNumbers = (number) => {
  let integerNum = String(Math.floor(number));
  let newNum = "";
  for (let i = integerNum.length - 3; i > 0; i -= 3) {
    newNum = integerNum.slice(0, i) + "," + integerNum.slice(i);
    integerNum = newNum;
  }
  let decimal = String(number).split(".");
  //handle case where the salary does not have a decimal
  if (decimal[1] == true) {
    return newNum + "." + decimal[1];
  } else {
    return number;
  }
};

export default formatNumbers;
