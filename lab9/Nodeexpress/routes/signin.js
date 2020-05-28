var expressFunction = require('express')
const jwt = require('jsonwebtoken')
const router = expressFunction.Router()
const mongoose = require('mongoose')
const bcr = require('bcryptjs')

const KEY = 'MY_KEY'

var Schema = require('mongoose').Schema

const userSchema = Schema({
    username: String,
    password: String
},{
    collection: 'users'
})

let User
try {
    User = mongoose.model('users')
} catch (err) {
    User = mongoose.model('users',userSchema)
}


async function compareHash(Text,myHash) {
   return new Promise((resolve, reject) => {
        bcr.compare(Text,myHash,(err,data) => {
            if(err){
                
                reject(new Error('Error bcrypt compare'))
            }
            else{
                
                resolve({status: data})
            }
        })
   })
}

function findUser(username){
    return new Promise((resolve, reject) => {
      User.findOne({username:username},(err,data) => {
          if(err){
              reject(new Error('Cannot find username!'))
          }
          else{
              if(data){
                  resolve({id:data._id,username:data.username,password:data.password})

              }
              else{
                  reject(new Error('Cannot find username'))
              }
          }
      })
    })
}

router.route('/signin').post(async (req,res) => {
    const payload = {
        username:req.body.username,
        password:req.body.password
    }
    console.log(payload)
    try {
        console.log('1')
        const result = await findUser(payload.username)
        const loginStatus = await compareHash(payload.password,result.password)
        console.log(result)
        const status = loginStatus.status

        if(status){
            const token = jwt.sign(result,KEY, {expiresIn:50*5})
         
            res.status(200).json({result,token,status})
        }
        else{
            res.status(200).json({status})
        }
    } catch (error) {
        res.status(404).send(error)
        
    }
})

module.exports = router