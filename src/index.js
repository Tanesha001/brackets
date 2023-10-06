module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsObj = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
      bracketsObj[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let char of str) {
      if (bracketsObj[char]) {
          if (char === bracketsObj[char] && stack[stack.length - 1] === char) {
              stack.pop();
          } else {
              stack.push(char);
          }
      } else if (stack.length === 0 || char !== bracketsObj[stack.pop()]) {
          return false;
      }
  }

  return stack.length === 0; 
}
