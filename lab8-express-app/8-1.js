var expressFuntion = require('express')
var expressApp = expressFuntion()

expressApp.get('/api/resource', function(req,res){
    res.status(200).send('Hello World')
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000')
})