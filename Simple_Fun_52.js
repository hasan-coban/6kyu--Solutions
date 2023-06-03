/*
Description:
Task
Yesterday you found some shoes in your room. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example
For:

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
         ```
the output should be `true;`

 For:
shoes = [[0, 21], [1, 23], [1, 21], [1, 23]] ``` the output should be false.

Input/Output
[input] 2D integer array shoes

Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

Constraints: 2 ≤ shoes.length ≤ 50, 1 ≤ shoes[i][1] ≤ 100.

[output] a boolean value

true if it is possible to pair the shoes, false otherwise.
*/
//MY S:
function pairOfShoes(shoes) {
  //replacing 0 with -1 so I can reduce them to 0 later if they are a pair
  shoes=shoes.map(el=>el[0]===0?[-1,el[1]]:el)
   //creating an object with shoe size as key
  let obj = {}
  for(let i=0;i<shoes.length;i++){
    if (!obj[shoes[i][1]]){
      obj[shoes[i][1]]=[]
    }    
       obj[shoes[i][1]].push(shoes[i][0])
       }
  //Object.values is an array of array
 return Object.values(obj).map(el=>el.reduce((a,b)=>a+b,)).every(el=>el===0);

}
//2nd:
function pairOfShoes(shoes) {
 const result = shoes.reduce((acc, [side, size]) => {
  const action = side ? 1 : -1
   
  acc[size]
    ? acc[size] += action
    : acc[size] = action
     
  return acc;
 }, {});

 return Object
  .values(result)
  .every((item) => item === 0);
} 
