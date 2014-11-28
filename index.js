//This index.js test Framework Server (Test)

require('./lib/server')({},80,'127.0.0.1',function(){
	console.log("Server Run as 127.0.0.1");
});