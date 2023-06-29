const fs = require('fs');
const stream = require('stream');
const Transform = stream.Transform;

let data = '';

// -- Read
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf8');

readableStream.on('data', function (chunk) {
    data += chunk;
});

readableStream.on('end', function (chunk) {
    console.log(data);
});

// // -- Write
process.stdout.write('Le');
process.stdout.write('Hace');
process.stdout.write('Falta');
process.stdout.write('Un');
process.stdout.write('Beso');

// -- Write/Read
class UpperCase extends Transform {}

UpperCase.prototype._transform = function (chunk, encoding, cb) {
  chunkUpperCase = chunk.toString().toUpperCase();
  this.push(chunkUpperCase);
  cb();
};

let uppercase = new UpperCase();

readableStream.pipe(uppercase).pipe(process.stdout);