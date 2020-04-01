const expressFunction = require('express');

const expressApp = expressFunction();

expressApp.use(function (req,res,next){
	
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	next();
});

expressApp.get('/api/resource',function(req,res){
	const myJson = {id:'B6015145', name:'Wasan'};
	res.send(myJson);
});

expressApp.listen(3000,function(){
	console.log('Listening on port 3000');
});