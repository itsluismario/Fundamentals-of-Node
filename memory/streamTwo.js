const fs = require('fs');

// let readableStream = fs.createReadStream(__dirname + '/contactos.csv'); // Para leer un archivo csv que les dejaré más abajo en el aporte
// readableStream.setEncoding('utf8'); // Para esteblecer la codificación

// let readableStreamTwo = fs.createReadStream(__dirname + '/contactos.csv',
//  {highWaterMark: 32 * 1024});

const stream = require('stream');
const toUpperTransformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
        try {
            callback(null, Buffer.from(chunk.toString().toUpperCase()));
        } catch (error) {
            callback(error, chunk);
        }
    }
});

let readableStream = fs.createReadStream(__dirname + '/contacts.csv', 
    {highWaterMark: 64 * 1024})
    .pipe(toUpperTransformStream)
    .pipe(process.stdout);
