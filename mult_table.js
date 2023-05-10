/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
//My S:
multiplicationTable = function(size) {  
  let firstArr=[];
  for(let i=1; i<=size; i++){
    let secArr=[];
    for(let j=1;j<=size; j++){
       secArr.push(i*j);
    }
    firstArr.push(secArr);   
  }
     return firstArr;
}
