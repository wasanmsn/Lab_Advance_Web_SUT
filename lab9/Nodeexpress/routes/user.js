var expressFunction = require('express')

const router = expressFunction.Router()
const mongoose = require('mongoose')
const bcr = require('bcryptjs')

var schema = require('mongoose').Schema
const userSchema = schema({
    username: String,
    password: String
},{
    collection: 'users'
})

//create or used existing collection
let User 
try {
    User = mongoose.model('users')    
} catch (err) {
    User = mongoose.model('users',userSchema)
}

async function makeHash(Text) {
    const res = await bcr.hash(Text,10)
    return res
}
//Save data to collection
function insertUser(dataUsers){
    return new Promise((res,rej) => {
        var new_user = new User({
            username: dataUsers.username,
            password: dataUsers.password
        })
        new_user.save((err,data) => {
            if(err){
                rej(new Error('Cannot insert user to DB'))
            }
            else{
                res({message: 'Singn up successfully'})
            }
        })
    })
}

router.route('/signup').post((req,res) => {
    makeHash(req.body.password).then(hashtext => {
        const payload ={
            username:req.body.username,
            password:hashtext,
        }
        console.log(payload)
        insertUser(payload)
        .then(ress => {
            console.log(ress)
            res.status(200).json(ress)
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})
module.exports = router