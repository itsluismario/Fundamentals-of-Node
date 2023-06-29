//-- Error with Sync Function
function breakIt() {
    return 3 + Z;
}

function anotherFun() {
    breakIt();
}

try {
    breakIt();
} catch(err) {
    console.error('There is an error: ', err.message)
}

console.log('This happens at the end');

// -- Error with Async Function
function anotherFunAsync(cd) {
    setTimeout(function() {
        try {
            return 3 + Z;
        } catch(err) {
            console.error('There is an error: ')
            cd(err)
        }
    })    
}

try {
    anotherFunAsync(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('There is an error: ', err)
}

console.log('This happens at the end');
