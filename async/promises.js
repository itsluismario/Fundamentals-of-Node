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

hi('luismario')
    .then(talk)
    .then(bye)
    .then((nombre) => {
        console.log('Process finished');
    })
    .catch((error) => {
        console.log('There is an error:');
        console.log(error);
    })



// console.log('Initiating process...');
// hi( 'luismario', function (name){
//     talk(function() {
//         talk(function() {
//             talk(function() {
//                 bye( name, function (){
//                     console.log('Finishing process...');
//                 });
//             })
//         })
//     })
// });
