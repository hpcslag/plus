var http = require('http');

module.exports = function(configure,port,ip,callback){
	http.createServer(function(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end("Hello World");
	}).listen(port,ip,callback);
};