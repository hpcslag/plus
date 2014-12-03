var http = require('http');
var qs = require('querystring');

http.createServer(function (req,res){
	if(req.method === "POST"){
		var requestBody = '';
	    req.on('data', function(data) {
	        requestBody += data;
	    });

		req.on('end',function(){
			var formData = qs.parse(requestBody);
			res.writeHead(200, {'Content-Type': 'text/html'});
        	res.write('<!doctype html><html><head><title>response</title></head><body>');
        	console.log(formData.username);
        	res.end('</body></html>');
		});
	}
}).listen(80);