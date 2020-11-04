const ansiEscapes = require("ansi-escapes");

let isInit = true;
const getSecond = () => {
  const date = new Date();
  return date.getSeconds();
}

const getStar = (number) => {
  return number % 2 === 0 ? '★' : '☆';
}

const drawStar = (second) => {
  const line = 5;
  let result = '';
  let cnt = 0;
  
  for (let i = 1; i < line * 2; i += 2) {
    for (let j = 1; j < ((line * 2) - i) / 2 ; j++) {
      result += " ";
    }
    for(let l = 1; l <= i; l++){
      cnt++;
      result += getStar(second + cnt);
    }
    for (let k = 1; k < ((line * 2) - i) / 2; k++) {
      result += " ";
    }
    cnt++;
    result += "\n";
  }
  return result;
}

const write = (result) => {
  if (isInit) {
    process.stdout.write(result);
    isInit = false;
  }
  process.stdout.write(ansiEscapes.eraseLines(6) + result);
}

setInterval(() => {
  write(drawStar(getSecond()));
}, 30);
