// in CMD: deno run --allow-read filename.ts


// READING FILES
//===============

// to output an unreadable data format

// let fileContent = await Deno.readFile("readme.txt");
// console.log(fileContent);

//------------------------------------

// creates an text decoder instance to read it.

// const decoder = new TextDecoder('utf-8');
// let fileContent = await Deno.readFile("readme.txt");
// console.log(decoder.decode(fileContent));


// READING TEXTFILES
//===================

// const data = await Deno.readTextFile('readme.txt');
// console.log(data);


// WRITING FILES
//===============

// in CMD: deno run --allow-write sandBox.ts

// const encoder = new TextEncoder;
// const text = encoder.encode("Hello Again Deno !!!");

// await Deno.writeFile('readme.txt', text)


// COMBINED read & write
//==========================
// in CMD: deno run --allow-read --allow-write sandBox.ts

// const encoder = new TextEncoder;
// const text = encoder.encode("Hello Again Deno !!!");
// await Deno.writeFile('readme.txt', text)

// const decoder = new TextDecoder('utf-8');
// let fileContent = await Deno.readFile("readme.txt");
// console.log(decoder.decode(fileContent));


// Rename a file
//===============
// deno run --allow-read  --allow-write .\sandbox.ts

// await Deno.rename('readme-2.txt', 'deleteme-2.txt');


// Remove a file
//===================

// deno run --allow-write .\sandbox.ts

// await Deno.remove('deleteme-2.txt');



/* FETCH API 
=============*/
// deno run --allow-net .\sandbox.ts

// const res = await fetch('https:/swapi.dev/api/films/');
// const data = await res.json();
// console.log(data);


// const res = await fetch('https:/swapi.dev/api/films/');
// const data = await res.json();
// console.log(data);

// const encoder = new TextEncoder;
// const text = encoder.encode(data);

// await Deno.writeFile('films.txt', text)


const res = await fetch('https:/swapi.dev/api/films/');
const data = await res.json();
console.log(data);


await Deno.writeFile('films.txt', data)
