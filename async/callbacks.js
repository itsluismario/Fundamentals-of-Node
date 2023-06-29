function hi(name, myCallback) {
    setTimeout(function () {
        console.log(`Hi, ${name}`);
        myCallback();
    }, 1500);
}
function bye(name, anotherCallback) {
    setTimeout(function () {
        console.log(`Bye, ${name}`);
        anotherCallback();
    }, 500)
}

console.log('Initiating process...');
hi( 'luismario', function (name){
    bye( name, function (){
        console.log('Finishing process...');
    });
});
