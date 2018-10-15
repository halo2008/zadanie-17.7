var fs = require('fs');
var colors = require('colors');

fs.readdir('./modules/', 'utf-8', function(err, files) {
	console.log('Dane przed zapisem!'.blue);
	files.forEach(function(file){		
		console.log(file);
		fs.appendFile('./list.txt', file + '\n' ,'utf-8', function(err) {
        	if (err) throw err;        	
    	});
	});
   console.log('Zapisano!'.blue);    
});