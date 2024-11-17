let a=0;
let b=Boolean(a);

let c=1;
let d=Boolean(c);

let e=5;
let f=Boolean(e);

let g=1000;
let h=Boolean(g);

console.log(typeof(b)); // boolean
console.log(typeof(d)); // boolean
console.log(typeof(f)); // boolean
console.log(b,d,f); // false,true, true

console.log(g);
console.log(h); // true

// vice versa is also posible:
// you can convert  1 and 0 integer to boolean and boolean true false to 1 and 0 .

//1—— true;

//0 —— false;

//value above 0 gerts conversted to true