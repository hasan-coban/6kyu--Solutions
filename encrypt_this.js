/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
//MY S:
//3-do the transformation with a helper function
const encrypt=word=>{
const first=word.charCodeAt(0);
  let arr;
  switch(word.length){
    case 0: return "";    
    case 1: return first;
    case 2:arr=[first, word[1]]; break;
    case 3:arr=[first, word[2], word[1]]; break;
    default:arr=[first, word.slice(-1), word.slice(2,-1), word[1]]; break;
  }
  return arr.join("")
}
//1-separate each word
//2-iterate over them

//4-turn it to a string
var encryptThis = function(text) {
 return text.split(" ").map(encrypt).join(" "); //1, 2 and 4 
}
