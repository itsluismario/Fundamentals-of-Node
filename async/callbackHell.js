function hi(name, myCallback) {
    setTimeout(function () {
        console.log(`Hi, ${name}`);
        myCallback();
    }, 1000);
}

function talk(callbackTalk) {
    setTimeout(function(){
        console.log('Bla bla bla');
        callbackTalk();
    }, 1000)
}

function bye(name, anotherCallback) {
    setTimeout(function () {
        console.log(`Bye, ${name}`);
        anotherCallback();
    }, 1000)
}

console.log('Initiating process...');
hi( 'luismario', function (name){
    talk(function() {
        talk(function() {
            talk(function() {
                bye( name, function (){
                    console.log('Finishing process...');
                });
            })
        })
    })
});
