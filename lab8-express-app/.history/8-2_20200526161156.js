const expressFuntion = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const expressApp = expressFuntion()
const db = require('./models/')
const tenInwza = db.tenInwza;
var corsOptions = {
	origin: "http://localhost:4200"
}



const students = [
    {
        stdid: 'B6015145',name: 'Wasan Chatchamnana'
    },
    {
        stdid: 'B6012345',name: 'Abcd Efghijk'
    }
]

db.mongoose.connect(db.url,{ useNewUrlParser: true, useUnifiedTopology: true}).then( () => { console.log("Connected to the database!")}).catch( err => { console.log("Cannot connect to  the database!",err); process.exit();});

expressApp.use(cors(corsOptions))

expressApp.use(bodyParser.json())
expressApp.use(bodyParser.urlencoded({ extended:true}))

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

expressApp.get('/api/resource/car/:id',function(req,res){
    const id = req.params.id
    console.log('hello',id)
    tenInwza.findById(id)
    .then(data => {
        console.log(data)
      if (!data)
        
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
})

expressApp.get('/api/resource/car/',function(req,res){
    const name = req.query.name
    var condition = name ? { name: { $regex: new RegExp(name),$options: 'i' }} : {}
    tenInwza.find(condition)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
})

expressApp.post('/api/resource/create/',function(req,res){
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
      }
    

      const tenInwza = new tenInwza({
        name:req.body.name
      });
    

      tenInwza
        .save(tenInwza)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
})

expressApp.listen(3000,function(){
    console.log('Listening on port 3000')
})
