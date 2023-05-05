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


