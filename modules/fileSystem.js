const fs = require('fs');

function read(path, cb) {
    fs.readFile(path, (err, data) => {
        cb(data.toString());
    })
}

function write(path, content, cb) {
    fs.writeFile(path, content, (err) => {
        if(err) {
            console.error('There is an error', err);
        } else {
            console.log('Succesfully created');
            cb(content)
        }
    })
}

function deleteFile(path, cb) {
    fs.unlink(path, cb);
}

read(__dirname + '/file.txt', console.log)
write(__dirname + '/file-new.txt', 'I am a new file', console.log)
deleteFile(__dirname + '/file-new.txt', console.log)