function (err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./file.js', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    }