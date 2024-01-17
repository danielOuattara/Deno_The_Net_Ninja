

/*uuid Module 
=====================*/

// import { v4 } from "https://deno.land/std@0.113.0/uuid/mod.ts";
// const uid = v4.generate(); // deprecated
// console.log(uid)

// const myUUID = crypto.randomUUID();
// console.log(myUUID)

// // Validate the v4 UUID.
// const isValid = v4.validate(myUUID);
// console.log(isValid)

// //---------------------------------------------------------------

// import { v5 } from "https://deno.land/std@0.113.0/uuid/mod.ts";

// const data = new TextEncoder().encode("Hello World!");
// console.log(data)

// // Generate a v5 UUID using a namespace and some data.
// const myUUID2 = await v5.generate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", data);
// console.log(myUUID2)

// // Validate the v5 UUID.
// const isValid2 = v5.validate(myUUID);
// console.log(isValid2);

// console.log('=================================================================')


/* fs module 
=====================*/

// import { writeJson, readJson} from "https://deno.land/std@0.113.0/fs/mod.ts";
// const jsonObj = await readJson('./data.json');

// console.log(jsonObj)

// const persons = [
//        {
//         name: "Gaia",
//         age: "4",
//         heightCm: "112",
//         weightKg:"21"
//     },
//     {
//         name: "Amaya",
//         age: "1",
//         heightCm: "82",
//         weightKg:"12"
//     }
// ]

// //deno run --allow-read --unstable .\index.ts


// await writeJson ("persons.json", persons, {spaces: 2});
// console.log("persons.json... created")

// //deno run --allow-write --unstable .\index.ts





/* http module  
================= */

import { listenAndServe } from "https://deno.land/std@0.113.0/http/server.ts";

listenAndServe(":8000", () => new Response(`Hello World\n`));

console.log("http://localhost:8000/");

//deno run --allow-net .\index.ts