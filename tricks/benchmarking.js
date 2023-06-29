let sum = 0;

console.time('bucleAll');
console.time('bucle');

for (let i = 0; i < 10000000; i++) {
    sum += 1;
}

console.timeEnd('bucle');

let sumTwo = 0;

console.time('bucleTwo');

for (let j = 0; j < 100000000; j++) {
    sumTwo += 1;
}

console.timeEnd('bucleTwo');

console.time('Async');

function asyncFun() {
    return new Promise ((resolve) => {
        setTimeout (function() {
            console.log('Running AsyncFun');
            resolve();
        })
    })
}

asyncFun()
.then(() => {
    console.timeEnd('Async');
})

console.timeEnd('bucleAll');