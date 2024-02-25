let num = 124;

let x = num.toString();
let y = x.split("");

let z = 0;
for (let i = 0; i < y.length; i++) {
  z += Number(y[i]);
}
console.log(z);
