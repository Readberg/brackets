module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracketStack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (bracketsConfig.some(config => config[0] === char)) {
      bracketStack.push(char);
    } else {
      let lastBracket = bracketStack.pop();

      if (!bracketsConfig.some(config => config[0] === lastBracket && config[1] === char)) {
        return false;
      }
    }
  }

  return bracketStack.length === 0;  
}
