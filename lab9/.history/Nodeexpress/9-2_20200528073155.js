const jwt = require('jsonwebtoken')

const payload ={
    stdid: 'B6015145',
    name: 'Wasan Chatchamnan',
    major: 'CPE'
}

const key = 'MY_KEY'
const token = jwt.sign(payload,key,{expiresIn:60*5})
console.log(token)

try{
    const dataInToken = jwt.verify(token,key)
    console.log(dataInToken)
}
catch(err){
    console.log(err)
}