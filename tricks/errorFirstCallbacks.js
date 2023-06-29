function asyncFun(callback) {
    setTimeout(() => {
       try {
            a = 3 + z;
            callback(null, a);
       } 
       catch (error) {
            console.error('There is an error');
            callback(error);
       }
    }, 1000)
}

asyncFun(function(err, data){
    if (err) {
        console.error('There is an error');
        console.error(err);
    }
    console.log('Everything went well, my data is: ', data);
})