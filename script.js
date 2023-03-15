//D:https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string) {
  //TODO Have fun :)
  const strArr = string.split(' ');
  const formattedArr = strArr
    .map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
        })
    .join(' ');
    return formattedArr;
}
//D:https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
  return a.filter(el=>!b.includes(el))  
}
//https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
   if(n===0) return 0;
  else if (n % 9 === 0) return 9;
  else return n % 9;
}
