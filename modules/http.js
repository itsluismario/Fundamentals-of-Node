// Requiere the module 
const http = require('http');

http.createServer(router).listen(3000);

function router(req,res) {
    console.log('New request');
    console.log(req.url);

    switch(req.url) {
        case '/hi':

            let hi = sayHi();
            res.write(hi);
            res.end();
            break;
        default:
            res.write('Error 404: I can get what you want ');
            res.end();
    }

    // // Write Head
    // res.writeHead(201, { 'Content-Type': 'text/plain' });

    // // Write response to user
    // res.write('Hi, I know how to use HTTP in NodeJS');

    // res.end();
}

function sayHi(){
    return 'Hi, how you doing?'
};

// Good practice
console.log('Listen to http in the port 3000');