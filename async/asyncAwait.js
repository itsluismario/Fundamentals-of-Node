function hi(name) {
    return new Promise ((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hi, ${name}`);
            resolve(name);
        }, 1000);
    })
}

function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla');
            resolve(name);
        }, 1000)
    })
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Bye, ${name}`);
            resolve(name);
        }, 1000)
    })
}

async function main(name) { 
    await hi(name);
    await talk();
    await talk();
    await talk();
    await bye(name);
}

console.log('Process starts');
main('luismario');
console.log('Second instruction');