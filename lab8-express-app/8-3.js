const expressFuntion = require('express')
const expressApp = expressFuntion()

const students = [
    {
        stdid: 'B6015145',name: 'Wasan Chatchamnana'
    },
    {
        stdid: 'B6012345',name: 'Abcd Efghijk'
    }
]

expressApp.use(function(req,res,next){
    console.log('Logged')
    next()
})
expressApp.use(function(req,res,next){
    console.log('Authenication')
    next()
})

expressApp.get('/',function(req,res){
    res.status(200).send('Hellow World')
})

expressApp.get('/api/resource/students/:stdid',function(req,res){
    const stdid = req.params.stdid
    if(stdid == 'B6015145'){
        res.status(200).send(students[0])

    }
    else if( stdid == 'B6012345') { res.status(200).send(students[1])}
    else{
        res.status(404).send("Error 404 not found")
    }
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000')
})
