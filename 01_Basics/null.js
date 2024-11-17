let a=null;

let convert = Number(a);  // converts to 0.
console.log(convert); // 0 
console.log(typeof a); // object 
console.log(typeof convert); // number 

let b=undefined;

let convertAnother = Number(b);  
console.log(convertAnother); //  NaN
console.log(typeof b); //undefined
console.log(typeof convertAnother); // number
