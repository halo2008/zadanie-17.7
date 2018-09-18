var fs = require('fs');
var colors = require('colors');

fs.readdir('./modules/', 'utf-8', function(err, files) {
    console.log('Dane przed zapisem!'.blue);
    console.log(files);
    fs.writeFile('./list.txt', files ,'utf-8', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});