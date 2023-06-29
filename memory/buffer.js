// -- Create 1 space
let buffer = Buffer.alloc(1);
console.log(buffer);

// -- Create an array
let bufferTwo = Buffer.from([6,2,3]);
console.log(bufferTwo);

// -- Save a string
let bufferThree = Buffer.from('Hi');
console.log(bufferThree.toString());

// -- Iterate
let abc = Buffer.alloc(26);
for(let i = 0; i < 26; ++i ){
    abc[i] = i + 97;
}

console.log(abc.toString());