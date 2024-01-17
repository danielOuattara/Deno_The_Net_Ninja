
let lastName: string = "Daniel";
console.log(lastName);

let spouse = "julie";
console.log(spouse);


//---------------------------------------------------------------


import { camelCase, upperFirstCase, constantCase } from "https://deno.land/x/case/mod.ts";

console.log(camelCase("test string"));
console.log(upperFirstCase("test string"));
console.log(constantCase("test string test , string"));
