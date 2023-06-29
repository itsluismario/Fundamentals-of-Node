console.log('log');
console.warn('warn');
console.info('info');
console.error('error');
var table = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Y'
    }
]
console.table(table);

console.group('Conversation');
console.log('Hola');
console.log('Bla bla bla');
console.log('Bye');
console.groupEnd('Conversation');

function function1() {
    console.group('Function1');
    console.log('We are in function1');
    function2();
    console.log('We are back in function1');
    console.groupEnd('Function1');
}

function function2() {
    console.group('Function2');
    console.log('We are in function2');
    console.groupEnd('Function2');
}

function1();

console.count('time');
console.count('time');
console.count('time');
console.count('time');
console.countReset('time');
console.count('time');
console.count('time');