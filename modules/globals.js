console.log(global);
console.log(setInterval);
console.log(process);
console.log(setImmediate);
console.log(__filename);
console.log(__dirname);
global.myVar = 'value';
console.log(global.myVar);

let i = 0;
let interval = setInterval(() => {
    if(i === 2){
        clearInterval(interval);
    }
    i++;
    console.log('iterations');
}, 1000) 

