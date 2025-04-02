/AND/
console.log("A\tB\tA && B");
console.log(true + "\t" + true + "\t" + (true && true));
console.log(true + "\t" + false + "\t" + (true && false));
console.log(false + "\t" + true + "\t" + (false && true));
console.log(false + "\t" + false + "\t" + (false && false));
/OR/
let A = true; 
let B = false;

if (A || B) {
  console.log(" VERDADERO");
} else {
  console.log(" FALSO");
}