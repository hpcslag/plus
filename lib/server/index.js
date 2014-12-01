var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("Hello World");
}).listen(80,'127.0.0.1',function(){
	console.log("Server Run As 127.0.0.1");
});