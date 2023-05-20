/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
//MY S:
function expandedForm(num) {
 
    return num.toString().split("").reverse().map((el,i)=>el*10**i).reverse().filter(el=>el>0).join(" + ");

}
