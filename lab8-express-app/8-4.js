var expressFuntion = require('express')
var expressApp = expressFuntion()
expressApp.use(expressFuntion.json())

const students = [
    {
        stdid: 'B6015145',name: 'Wasan Chatchamnana'
    },
    {
        stdid: 'B6012345',name: 'Abcd Efghijk'
    }
]

expressApp.post('/api/resource/students',function(req,res){
    const stdid = req.body.stdid
    const name =req.body.name
    if(stdid.length == 8){
        const student = {
            stdid : stdid,
            name:name
        }
        students.push(student)
        res.status(200).send(student)

    }
    else{
        res.status(400).send("Error cannot add student")
    }
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000')
})
